/*
Project Describer — core analyzer (CommonJS, работает и в Node, и внутри TiddlyWiki).

Обходит ВСЕ файлы проекта, извлекает структуру и метаданные, и строит
детальный Markdown-отчёт: общая информация, дерево каталогов, статистика
языков, модули/плагины, зависимости, точки входа, метрики кода, API-поверхность,
Doxygen-сущности C/C++, конфигурация, итоговое резюме.

Использование: node analyze.js [projectRoot] [outputFile]
*/

"use strict";

var fs = require("fs");
var path = require("path");

// --------------------------------------------------------------------------
// Конфигурация
// --------------------------------------------------------------------------

var SKIP_DIRS = {
	".git": true, "node_modules": true, ".svn": true, ".hg": true,
	"bower_components": true, ".cache": true, "coverage": true,
	"__pycache__": true, ".next": true, ".nuxt": true, ".idea": true
};

var BINARY_EXT = {
	png:1, jpg:1, jpeg:1, gif:1, ico:1, bmp:1, webp:1, svgz:1, ttf:1, woff:1,
	woff2:1, eot:1, otf:1, mp3:1, mp4:1, avi:1, mov:1, wav:1, ogg:1, zip:1,
	gz:1, bz2:1, xz:1, "7z":1, rar:1, jar:1, war:1, class:1, dll:1, so:1, dylib:1,
	exe:1, bin:1, obj:1, o:1, a:1, pdf:1, doc:1, docx:1, xls:1, xlsx:1, ppt:1,
	pptx:1, pdb:1, db:1, sqlite:1, pack:1, idx:1, mod:1, pyc:1, wasm:1
};

var LANG_INFO = {
	js:   { name: "JavaScript",  exts: ["js","mjs","cjs"] },
	ts:   { name: "TypeScript",  exts: ["ts","tsx","mts"] },
	json: { name: "JSON",        exts: ["json"] },
	html: { name: "HTML",        exts: ["html","htm","xhtml"] },
	css:  { name: "CSS",         exts: ["css","less","scss"] },
	md:   { name: "Markdown/Wikitext", exts: ["md","markdown","tid"] },
	py:   { name: "Python",      exts: ["py"] },
	c:    { name: "C",           exts: ["h"] },
	cpp:  { name: "C++",         exts: ["cpp","cc","cxx","hpp","hh","hxx","c"] },
	vhdl: { name: "VHDL",        exts: ["vhd","vhdl"] },
	sh:   { name: "Shell",       exts: ["sh","bash"] },
	xml:  { name: "XML",         exts: ["xml","xsl"] },
	yaml: { name: "YAML",        exts: ["yaml","yml"] },
	ini:  { name: "INI/config",  exts: ["ini","cfg","conf","doxyfilein"] },
	tex:  { name: "LaTeX",       exts: ["tex","ltx","sty"] },
	cmake:{ name: "CMake",       exts: ["cmake"] },
	txt:  { name: "Text",        exts: ["txt"] }
};

function langOfExt(ext) {
	ext = String(ext).toLowerCase();
	if(ext === "tid") return "md";
	if(ext === "doxyfilein") return "ini";
	for(var k in LANG_INFO) {
		if(LANG_INFO[k].exts.indexOf(ext) !== -1) return k;
	}
	return null;
}

// --------------------------------------------------------------------------
// Обход файловой системы
// --------------------------------------------------------------------------

function walk(root, relDir, out, depth) {
	var abs = path.join(root, relDir);
	var entries;
	try { entries = fs.readdirSync(abs, { withFileTypes: true }); }
	catch(e) { return; }
	entries.sort(function(a,b){ return a.name.localeCompare(b.name); });
	for(var i=0; i<entries.length; i++) {
		var e = entries[i];
		var rel = relDir ? relDir + "/" + e.name : e.name;
		if(e.isDirectory()) {
			if(SKIP_DIRS[e.name]) continue;
			out.dirs.push(rel);
			if(depth < 12) walk(root, rel, out, depth+1);
		} else if(e.isFile()) {
			out.files.push(rel);
		}
	}
}

function readText(root, rel, maxBytes) {
	var abs = path.join(root, rel);
	try {
		var st = fs.statSync(abs);
		var cap = maxBytes || 2*1024*1024;
		if(st.size > cap) {
			var fd = fs.openSync(abs, "r");
			var len = Math.min(st.size, 512*1024);
			var buf = Buffer.alloc(len);
			fs.readSync(fd, buf, 0, len, 0);
			fs.closeSync(fd);
			return { text: stripNull(buf.toString("utf8")), truncated: true, size: st.size };
		}
		return { text: stripNull(fs.readFileSync(abs, "utf8")), truncated: false, size: st.size };
	} catch(err) {
		return null;
	}
}

function stripNull(s) {
	var nul = s.indexOf("\u0000");
	if(nul !== -1 && nul < 200) return ""; // считаем бинарным
	return s.replace(/\u0000/g, "");
}

// --------------------------------------------------------------------------
// Вспомогательные анализаторы
// --------------------------------------------------------------------------

function countLines(text) {
	if(!text) return 0;
	var n = 1;
	for(var i=0;i<text.length;i++) if(text.charCodeAt(i)===10) n++;
	if(text.charAt(text.length-1)==="\n") n--;
	return n;
}

function countComments(text, lang) {
	var lines = text.split("\n"), c = 0;
	for(var i=0;i<lines.length;i++) {
		var t = lines[i].trim();
		if(!t) continue;
		if(lang==="js"||lang==="ts"||lang==="c"||lang==="cpp") {
			if(t.indexOf("//")===0||t.indexOf("/*")===0||t.charAt(0)==="*") c++;
		} else if(lang==="py"||lang==="sh"||lang==="yaml"||lang==="ini"||lang==="cmake") {
			if(t.charAt(0)==="#") c++;
		} else if(lang==="html"||lang==="xml") {
			if(t.indexOf("<!--")===0||t.indexOf("-->")>=0&&t.length<8) c++;
		} else if(lang==="css") {
			if(t.indexOf("/*")===0||t.indexOf("*/")===0||t.charAt(0)==="*") c++;
		}
	}
	return c;
}

function extractJsExports(text) {
	var res = { named: [], requires: [] };
	var re = /exports\.([A-Za-z_$][\w$]*)\s*=|module\.exports\s*=/g, m;
	while((m = re.exec(text))) {
		if(m[1] && res.named.indexOf(m[1])===-1) res.named.push(m[1]);
	}
	var reqRe = /require\(["']([^"']+)["']\)/g;
	while((m = reqRe.exec(text))) {
		if(res.requires.indexOf(m[1])===-1) res.requires.push(m[1]);
	}
	return res;
}

function extractDoxygenEntities(text) {
	var ents = [];
	var re = /\\(class|struct|union|namespace|file|ingroup|brief|fn|var|def|param|return)\b[ \t]*([^\n]{0,80})/g;
	var m;
	while((m = re.exec(text))) {
		ents.push({ kind: m[1], name: (m[2]||"").trim() });
		if(ents.length > 60) break;
	}
	return ents;
}

// plugin.info — JSON; .info модулей — "ключ: значение" по строкам
function parseInfoFile(baseName, text) {
	if(baseName === "plugin.info") {
		try { return JSON.parse(text); } catch(e) { return null; }
	}
	var out = {};
	text.split(/\r?\n/).forEach(function(line) {
		var mm = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
		if(mm) out[mm[1]] = mm[2];
	});
	return out;
}

// --------------------------------------------------------------------------
// Главная функция анализа
// --------------------------------------------------------------------------

function analyze(root) {
	root = path.resolve(root);
	var rep = { root: root, generatedAt: new Date().toISOString(), dirs: [], files: [] };
	walk(root, "", rep, 0);

	var S = rep.stats = {
		totalFiles: rep.files.length,
		totalDirs: rep.dirs.length,
		languages: {},
		dirStats: {},
		binaryFiles: 0,
		docFiles: 0,
		testFiles: 0,
		tiddlers: 0,
		largest: [],
		jsModules: [],
		doxygenDocs: [],
		configFiles: [],
		plugins: [],
		infoModules: []
	};

	var pkg=null, readme=null, licenseText=null, cmakeMeta=null, versionFile=null, dockerfile=null;

	for(var i=0;i<rep.files.length;i++) {
		var rel = rep.files[i];
		var base = path.basename(rel);
		var ext = (path.extname(base)||base).replace(/^\./,"").toLowerCase();
		var lang = langOfExt(ext);

		// ---- ключевые метафайлы
		if(rel === "package.json") { var rj = readText(root,rel,256*1024); if(rj){try{pkg=JSON.parse(rj.text);}catch(e){}} continue; }
		if(rel === "VERSION" || rel === "version") { var rv = readText(root,rel,4096); if(rv) versionFile = rv.text.trim(); continue; }
		if(rel === "Dockerfile") { var rd = readText(root,rel,64*1024); if(rd) dockerfile = { rel: rel, text: rd.text }; continue; }
		if(/(^|\/)readme(\.md)?$/i.test(rel) && !readme) { var rr = readText(root,rel,64*1024); if(rr) readme = { rel: rel, text: rr.text }; }
		if(/(^|\/)license/i.test(rel) && !licenseText && ext!=="") { var rl = readText(root,rel,16*1024); if(rl) licenseText = { rel: rel, text: rl.text.slice(0,4000) }; }
		if(rel === "CMakeLists.txt" && !cmakeMeta) { var rc = readText(root,rel,256*1024); if(rc) cmakeMeta = { rel: rel, text: rc.text }; }

		// ---- plugin.info TiddlyWiki
		if(base === "plugin.info") {
			var rp = readText(root,rel,64*1024);
			if(rp) {
				var pi = parseInfoFile(base, rp.text);
				if(pi && pi.title) S.plugins.push({ rel: rel, info: pi });
			}
			continue;
		}
		// ---- $:/core/modules ... *.info
		if(/\.info$/.test(base) && /^(core|plugins|themes|languages)\//.test(rel)) {
			var ri = readText(root,rel,16*1024);
			if(ri) {
				var ii = parseInfoFile(base, ri.text);
				if(ii && Object.keys(ii).length) S.infoModules.push({ rel: rel, info: ii });
			}
			continue;
		}

		if(BINARY_EXT[ext]) { S.binaryFiles++; continue; }

		if(/(^|\/)(tests?|testing|spec)\//.test(rel) || /\.(test|spec)\.[jt]sx?$/.test(rel)) S.testFiles++;
		if(/\.(md|txt|rst)$/.test(rel) || ext==="tid") S.docFiles++;
		if(ext==="tid") S.tiddlers++;
		if(/^(Dockerfile|Makefile|.*\.config\.[a-z]+|eslint\.config\.[a-z]+|playwright\.config\.[a-z]+|.*\.ya?ml|tsconfig.*|jsconfig.*|\.eslintrc.*|\.gitignore|\.dockerignore|\.editorconfig|.*\.ini|.*\.doxyfilein)$/i.test(base)) {
			S.configFiles.push(rel);
		}

		var r = readText(root, rel, 1024*1024);
		if(!r || !r.text) continue;
		var loc = countLines(r.text);

		if(lang) {
			var L = S.languages[lang] || (S.languages[lang] = { files:0, loc:0, comments:0 });
			L.files++; L.loc += loc;
			L.comments += countComments(r.text, lang);
		}
		var top = rel.indexOf("/")===-1 ? "(корень)" : rel.split("/")[0];
		var D = S.dirStats[top] || (S.dirStats[top] = { files:0, loc:0 });
		D.files++; D.loc += loc;

		S.largest.push({ rel: rel, size: r.size, loc: loc, lang: lang });

		if((lang==="js"||lang==="ts") && /^(src|core|plugins|boot|addon|tools)\//.test(rel)) {
			var ex = extractJsExports(r.text);
			if(ex.named.length || ex.requires.length) {
				S.jsModules.push({ rel: rel, exports: ex.named.slice(0,30), requires: ex.requires.slice(0,20) });
			}
		}
		if((lang==="c"||lang==="cpp") && /\/\*\*|\\\\brief|\\brief/.test(r.text)) {
			var ents = extractDoxygenEntities(r.text);
			if(ents.length) S.doxygenDocs.push({ rel: rel, entities: ents });
		}
	}

	S.largest.sort(function(a,b){ return b.size - a.size; });
	S.largest = S.largest.slice(0, 25);

	rep.pkg = pkg; rep.readme = readme; rep.licenseText = licenseText;
	rep.cmakeMeta = cmakeMeta; rep.versionFile = versionFile; rep.dockerfile = dockerfile;
	return rep;
}

// --------------------------------------------------------------------------
// Генерация Markdown-отчёта
// --------------------------------------------------------------------------

function fmtBytes(n) {
	if(n > 1024*1024) return (n/1024/1024).toFixed(1)+" MB";
	if(n > 1024) return (n/1024).toFixed(1)+" KB";
	return n+" B";
}
function esc(s){ return String(s==null?"":s).replace(/\|/g,"\\|").replace(/\r?\n/g," "); }
function num(n){ return Number(n||0).toLocaleString("ru-RU"); }

function buildTree(rep, maxItemsPerDir) {
	var tree = {};
	function ensure(parts) {
		var node = tree;
		for(var i=0;i<parts.length;i++){
			var p = parts[i];
			if(!node[p]) node[p] = {};
			node = node[p];
		}
		return node;
	}
	rep.dirs.forEach(function(d){ ensure(d.split("/")); });
	rep.files.forEach(function(f){ var parts=f.split("/"); parts.pop(); if(parts.length) ensure(parts); });

	var lines = [];
	function render(node, prefix, depth) {
		var keys = Object.keys(node).sort();
		if(keys.length > maxItemsPerDir) {
			lines.push(prefix + "… (+ ещё " + (keys.length - maxItemsPerDir) + ")");
			keys = keys.slice(0, maxItemsPerDir);
		}
		keys.forEach(function(k, idx) {
			var last = (idx === keys.length-1);
			lines.push(prefix + (last?"└── ":"├── ") + k);
			if(depth < 2) render(node[k], prefix + (last?"    ":"│   "), depth+1);
		});
	}
	render(tree, "", 0);
	return lines.join("\n");
}

function renderTop(rep) {
	var lines = [path.basename(rep.root) + "/"];
	var rootDirs = {}, rootFiles = {};
	rep.dirs.forEach(function(d){ var t=d.split("/")[0]; rootDirs[t]=1; });
	rep.files.forEach(function(f){ if(f.indexOf("/")===-1) rootFiles[f]=1; });
	var keys = Object.keys(rootDirs).concat(Object.keys(rootFiles)).sort();
	keys.forEach(function(k,i,arr){
		var isDir = !!rootDirs[k];
		lines.push((i===arr.length-1?"└── ":"├── ")+k+(isDir?"/":""));
	});
	return lines.join("\n");
}

function describeDir(t) {
	var map = {
		core: "Ядро TiddlyWiki: вики-движок, парсеры, виджеты, фильтры, синхронизация",
		plugins: "Плагины TiddlyWiki (codemirror, markdown, katex, filesystem и др.)",
		src: "Исходники Doxygen на C++: парсеры языков, генераторы HTML/LaTeX/RTF/XML",
		templates: "Шаблоны вывода документации Doxygen",
		addon: "Дополнительные тиддлеры/модули TiddlyWiki",
		boot: "Загрузчик TiddlyWiki (boot.js)",
		editions: "Сборки-редакции TiddlyWiki (tw5.com, dev, server, тестовая)",
		languages: "Локализации интерфейса TiddlyWiki",
		testing: "Тесты Doxygen",
		deps: "Вендорные зависимости Doxygen (spdlog, fmt, range-v3)",
		doc: "Документация",
		doc_internal: "Внутренняя документация разработчиков",
		libxml: "Обёртка libxml для Doxygen",
		libversion: "Модуль версионирования Doxygen",
		vhdlparser: "Парсер VHDL для Doxygen",
		cmake: "Модули сборки CMake",
		bin: "Служебные скрипты",
		examples: "Примеры",
		community: "Материалы сообщества",
		tools: "Инструмент интеграции — Project Describer",
		"TiddlyWiki5-master": "Резервная копия дерева TiddlyWiki5",
		"doxygen-master": "Резервная копия дерева Doxygen",
		"(корень)": "Корневые файлы обоих проектов (package.json, CMakeLists.txt, README)"
	};
	return map[t] || "—";
}

function summarize(rep, langs, totalLoc) {
	var S = rep.stats, parts = [];
	parts.push("Проект содержит **" + num(S.totalFiles) + " файлов** в **" + num(S.totalDirs) + " директориях**; суммарный объём текстового содержимого — ~**" + num(totalLoc) + " строк**.");
	var hasTW = rep.dirs.indexOf("core")!==-1 && rep.pkg && rep.pkg.name==="tiddlywiki";
	var hasDX = !!rep.cmakeMeta && rep.dirs.indexOf("src")!==-1;
	if(hasTW && hasDX) {
		parts.push("Это **объединённый workspace двух проектов**: нелинейной веб-записной книжки **TiddlyWiki5** (JavaScript/Node.js — `core/`, `plugins/`, `editions/`) и генератора документации **Doxygen** (C++/CMake — `src/`, `templates/`, `testing/`). Оба проекта дополняют друг друга: TiddlyWiki предоставляет интерактивный UI, а Doxygen — методологию deep-анализа исходников и структурированной extraction-документации.");
	} else if(hasTW) {
		parts.push("Основной проект — **TiddlyWiki5**, нелинейная персональная веб-записная книжка на JavaScript.");
	} else if(hasDX) {
		parts.push("Основной проект — **Doxygen**, де-факто стандарт генерации документации из annotated-исходников.");
	}
	if(langs.length) {
		var tot = langs.reduce(function(a,x){return a+x.loc;},0)||1;
		parts.push("Доминирующие языки: " + langs.slice(0,4).map(function(l){return l.name+" ("+(100*l.loc/tot).toFixed(0)+"%)";}).join(", ") + ".");
	}
	if(S.plugins.length) parts.push("Обнаружено **" + S.plugins.length + " плагинов TiddlyWiki** в `plugins/`.");
	if(S.doxygenDocs.length) parts.push("Найдено **" + S.doxygenDocs.length + " C/C++ файлов** с Doxygen-комментариями (`\\brief`, `\\class`, `\\param` …).");
	if(S.testFiles) parts.push("Тестовых файлов: **" + num(S.testFiles) + "**.");
	parts.push("Инструмент **Project Describer** интегрирован как плагин TiddlyWiki (`plugins/tiddlywiki/project-describer`) и CLI (`tools/project-describer/cli.js`) — полный отчёт по проекту получается одной кнопкой «Получить полное описание» или командой `node tools/project-describer/cli.js`.");
	return parts.map(function(p){ return "- " + p; }).join("\n");
}

function generateMarkdown(rep) {
	var S = rep.stats, out = [];
	var P = function(s){ out.push(s); };

	P("# Полное описание проекта");
	P("");
	P("> Отчёт сгенерирован инструментом **Project Describer** автоматически путём");
	P("> последовательного анализа всех файлов и структур репозитория.");
	P("");
	P("- Дата генерации: `" + rep.generatedAt + "`");
	P("- Корень проекта: `" + esc(rep.root) + "`");
	P("");

	// ============================ 1. Общая информация
	P("## 1. Общая информация");
	P("");
	P("| Параметр | Значение |");
	P("|---|---|");
	if(rep.pkg) {
		P("| Название пакета | `" + esc(rep.pkg.name) + "` |");
		P("| Версия | `" + esc(rep.pkg.version) + "` |");
		if(rep.pkg.description) P("| Описание | " + esc(rep.pkg.description) + " |");
		if(rep.pkg.author) P("| Автор | " + esc(typeof rep.pkg.author === "object" ? rep.pkg.author.name : rep.pkg.author) + " |");
		if(rep.pkg.license) P("| Лицензия | " + esc(rep.pkg.license) + " |");
		if(rep.pkg.repository) P("| Репозиторий | " + esc(rep.pkg.repository.url || rep.pkg.repository) + " |");
		if(rep.pkg.engines && rep.pkg.engines.node) P("| Требуемый Node.js | `" + esc(rep.pkg.engines.node) + "` |");
	}
	if(rep.versionFile) P("| Файл `VERSION` (Doxygen) | `" + esc(rep.versionFile) + "` |");
	P("| Директорий | " + num(S.totalDirs) + " |");
	P("| Файлов | " + num(S.totalFiles) + " |");
	P("| Тестовых файлов | " + num(S.testFiles) + " |");
	P("| Документация (md/txt/tid) | " + num(S.docFiles) + " (в т.ч. тиддлеров: " + num(S.tiddlers) + ") |");
	P("| Бинарных файлов | " + num(S.binaryFiles) + " |");
	P("");

	if(rep.readme) {
		P("### Выжимка из README (`" + esc(rep.readme.rel) + "`)");
		P("");
		P("```text");
		P(rep.readme.text.split(/\r?\n/).filter(function(l){return l.trim();}).slice(0,10).join("\n"));
		P("```");
		P("");
	}
	if(rep.licenseText) {
		P("### Лицензия (`" + esc(rep.licenseText.rel) + "`)");
		P("");
		P("```text");
		P(rep.licenseText.text.split(/\r?\n/).filter(function(l){return l.trim();}).slice(0,6).join("\n"));
		P("```");
		P("");
	}

	var langs = Object.keys(S.languages).map(function(k){
		return { k:k, name:(LANG_INFO[k]||{name:k}).name, f:S.languages[k].files, loc:S.languages[k].loc, com:S.languages[k].comments };
	}).sort(function(a,b){ return b.loc - a.loc; });
	var totalLoc = langs.reduce(function(a,x){return a+x.loc;},0)||1;

	P("### Языки и форматы");
	P("");
	P("| Язык | Файлов | Строк | Комментариев | Доля строк |");
	P("|---|---:|---:|---:|---:|");
	langs.forEach(function(l){
		P("| " + l.name + " | " + num(l.f) + " | " + num(l.loc) + " | " + num(l.com) + " | " + (100*l.loc/totalLoc).toFixed(1) + "% |");
	});
	P("");

	// ============================ 2. Структура
	P("## 2. Структура проекта");
	P("");
	P("```text");
	P(renderTop(rep));
	P("```");
	P("");
	P("### Дерево каталогов (первые уровни)")
	P("");
	P("```text");
	P(buildTree(rep, 16));
	P("```");
	P("");

	// ============================ 3. Модули
	P("## 3. Модули и пакеты");
	P("");
	P("| Каталог | Файлов | Строк | Назначение |");
	P("|---|---:|---:|---|");
	Object.keys(S.dirStats).sort(function(a,b){ return S.dirStats[b].loc - S.dirStats[a].loc; }).forEach(function(t){
		P("| `" + esc(t) + "` | " + num(S.dirStats[t].files) + " | " + num(S.dirStats[t].loc) + " | " + describeDir(t) + " |");
	});
	P("");

	if(S.plugins.length) {
		P("### Плагины TiddlyWiki");
		P("");
		P("| Название | Title | Тип | Зависимости | Описание |");
		P("|---|---|---|---|---|");
		S.plugins.slice(0,100).forEach(function(p){
			var name = p.info.name || p.rel.split("/")[2] || p.rel;
			var dep = Array.isArray(p.info.dependents)?p.info.dependents.join(", "):(p.info.dependents||"—");
			P("| " + esc(name) + " | `" + esc(p.info.title) + "` | " + esc(p.info.type||p.info.platform||"—") + " | " + esc(dep) + " | " + esc((p.info.description||"").slice(0,80)) + " |");
		});
		P("");
	}

	// ============================ 4. Зависимости
	var hasDeps = rep.pkg && ((rep.pkg.dependencies&&Object.keys(rep.pkg.dependencies).length)||(rep.pkg.devDependencies&&Object.keys(rep.pkg.devDependencies).length));
	if(hasDeps || rep.cmakeMeta) {
		P("## 4. Зависимости");
		P("");
		if(rep.pkg && rep.pkg.dependencies && Object.keys(rep.pkg.dependencies).length) {
			P("**Runtime:** " + Object.keys(rep.pkg.dependencies).map(function(d){return "`"+d+"@"+rep.pkg.dependencies[d]+"`";}).join(", "));
			P("");
		}
		if(rep.pkg && rep.pkg.devDependencies && Object.keys(rep.pkg.devDependencies).length) {
			P("**Dev:** " + Object.keys(rep.pkg.devDependencies).map(function(d){return "`"+d+"@"+rep.pkg.devDependencies[d]+"`";}).join(", "));
			P("");
		}
		if(rep.cmakeMeta) {
			var m, deps=[], subs=[];
			var re1 = /find_package\s*\(\s*([A-Za-z0-9_]+)/g;
			while((m = re1.exec(rep.cmakeMeta.text))) if(deps.indexOf(m[1])===-1) deps.push(m[1]);
			var re2 = /add_subdirectory\s*\(\s*([A-Za-z0-9_\-\/]+)/g;
			while((m = re2.exec(rep.cmakeMeta.text))) if(subs.indexOf(m[1])===-1) subs.push(m[1]);
			if(deps.length) P("**CMake `find_package`:** " + deps.map(function(d){return "`"+d+"`";}).join(", "));
			if(subs.length) P("**CMake подпроекты (`add_subdirectory`):** " + subs.map(function(d){return "`"+d+"`";}).join(", "));
			P("");
		}
	}

	// ============================ 5. Точки входа
	P("## 5. Точки входа и скрипты");
	P("");
	if(rep.pkg && rep.pkg.bin) {
		Object.keys(rep.pkg.bin).forEach(function(b){ P("- CLI: `"+b+"` → `"+esc(rep.pkg.bin[b])+"`"); });
	}
	if(rep.pkg && rep.pkg.main) P("- Main-модуль: `" + esc(rep.pkg.main) + "`");
	if(rep.pkg && rep.pkg.scripts) {
		P("- npm-скрипты:");
		Object.keys(rep.pkg.scripts).forEach(function(s){ P("    - `npm run " + s + "` → `" + esc(rep.pkg.scripts[s]) + "`"); });
	}
	if(rep.dockerfile) {
		P("- Dockerfile:");
		P("");
		P("```dockerfile");
		P(rep.dockerfile.text.split(/\r?\n/).slice(0,12).join("\n"));
		P("```");
	}
	P("");

	// ============================ 6. Метрики
	P("## 6. Метрики кода");
	P("");
	P("- Суммарный объём проанализированного текста: **" + num(totalLoc) + " строк**");
	var jsL = S.languages.js, cppL = S.languages.cpp;
	if(jsL && jsL.loc) P("- Доля комментариев в JavaScript: **" + (100*jsL.comments/jsL.loc).toFixed(1) + "%**");
	if(cppL && cppL.loc) P("- Доля комментариев в C++: **" + (100*cppL.comments/cppL.loc).toFixed(1) + "%**");
	P("");
	P("### 25 самых крупных файлов");
	P("");
	P("| Файл | Размер | Строк |");
	P("|---|---:|---:|");
	S.largest.forEach(function(f){ P("| `" + esc(f.rel) + "` | " + fmtBytes(f.size) + " | " + num(f.loc) + " |"); });
	P("");

	// ============================ 7. JS API
	if(S.jsModules.length) {
		P("## 7. API-поверхность JavaScript-модулей");
		P("");
		P("Проанализированы модули `core/`, `plugins/`, `boot/`, `src/`, `tools/` (CommonJS-экспорты).");
		P("");
		P("| Модуль | Экспорты |");
		P("|---|---|");
		S.jsModules.slice(0,150).forEach(function(mod){
			P("| `" + esc(mod.rel) + "` | " + (mod.exports.length ? mod.exports.slice(0,10).map(function(e){return "`"+e+"`";}).join(", ") : "—") + " |");
		});
		P("");
	}

	// ============================ 8. Doxygen
	if(S.doxygenDocs.length) {
		P("## 8. Документированные сущности C/C++ (Doxygen-комментарии)");
		P("");
		P("| Файл | Элементы |");
		P("|---|---|");
		S.doxygenDocs.slice(0,60).forEach(function(d){
			var names = d.entities.slice(0,6).map(function(e){ return "\\"+e.kind+(e.name?(" "+e.name):""); }).join("; ");
			P("| `" + esc(d.rel) + "` | " + esc(names.slice(0,160)) + " |");
		});
		P("");
	}

	// ============================ 9. Конфиги
	if(S.configFiles.length) {
		P("## 9. Конфигурационные файлы");
		P("");
		S.configFiles.slice(0,80).forEach(function(c){ P("- `" + esc(c) + "`"); });
		P("");
	}

	// ============================ 10. Резюме
	P("## 10. Итоговое резюме");
	P("");
	P(summarize(rep, langs, totalLoc));
	P("");
	P("---");
	P("*Отчёт создан инструментом Project Describer — интеграция TiddlyWiki5 (UI) и Doxygen (методология анализа исходников).*");
	return out.join("\n");
}

// --------------------------------------------------------------------------

exports.analyze = analyze;
exports.generateMarkdown = generateMarkdown;

if(typeof module !== "undefined" && require.main === module) {
	var root = process.argv[2] || path.resolve(__dirname, "..", "..");
	var md = generateMarkdown(analyze(root));
	console.log(md);
}
