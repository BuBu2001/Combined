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
// Углублённые извлечения
// --------------------------------------------------------------------------

// Все package.json в дереве (компоненты/подпроекты)
function findSubPackages(root, files) {
	var res = [];
	files.forEach(function(rel) {
		if(rel === "package.json") return; // корневой уже обработан
		if(/[\\/](node_modules|bower_components)[\\/]/.test(rel)) return;
		var r = readText(root, rel, 128*1024);
		if(!r) return;
		try {
			var j = JSON.parse(r.text);
			if(j && j.name) res.push({ rel: rel, json: j });
		} catch(e) {}
	});
	return res;
}

// CMake-цели и опции по всем CMakeLists.txt
function extractCMakeTargets(root, files) {
	var targets = [], options = [], installs = [];
	files.forEach(function(rel) {
		if(path.basename(rel) !== "CMakeLists.txt") return;
		var r = readText(root, rel, 256*1024);
		if(!r) return;
		var m;
		var reT = /add_(executable|library)\s*\(\s*([A-Za-z0-9_\-]+)/g;
		while((m = reT.exec(r.text))) targets.push({ kind: m[1], name: m[2], dir: path.dirname(rel) });
		var reO = /option\s*\(\s*([A-Z_a-z0-9]+)\s+"([^"]*)"/g;
		while((m = reO.exec(r.text))) options.push({ name: m[1], help: m[2] });
		if(m = r.text.match(/install\s*\(/)) installs.push(path.dirname(rel));
	});
	return { targets: targets, options: options, installs: installs };
}

// Функции C/C++ с сигнатурами + brief-описания
function extractCppFunctions(text) {
	var fns = [];
	var seen = {};
	// определения: тип имя(...) { — многострочные сигнатуры
	var reDef = /^\s*(?:template\s*<[^\n]*>\s*)?(?:static\s+|inline\s+|virtual\s+|explicit\s+)*[\w:\*&<>,\s]{0,80}?\b([A-Za-z_~][\w:]*)\s*\(([^;{}()]{0,160})\)\s*(?:const)?\s*(?:noexcept)?\s*(?:override)?\s*\{/gm;
	var m;
	while((m = reDef.exec(text))) {
		var name = m[1];
		if(keywords[name]) continue;
		if(seen[name + "|" + m[2]]) continue;
		seen[name + "|" + m[2]] = 1;
		fns.push({ name: name, params: m[2].replace(/\s+/g, " ").trim() });
		if(fns.length >= 40) break;
	}
	// \brief-описания
	var briefs = [];
	var reB = /\\\\brief\s+([^\n]{5,200})/g;
	while((m = reB.exec(text))) briefs.push(m[1].trim());
	reB = /(?:\/\*\*|\/\/\/)\s*\n?\s*([A-ZА-ЯЁ][^\n]{10,200})/g;
	return { functions: fns, briefs: briefs.slice(0, 10) };
}
var keywords = {};
["if","for","while","switch","return","sizeof","catch","do","else","new","delete","and","or","not","defined","ifdef","ifndef","endif","include","define","pragma","static_assert","requires","case"].forEach(function(k){ keywords[k]=1; });

// Классы C++ с публичными методами
function extractCppClass(text) {
	var classes = [];
	var re = /\b(class|struct)\s+(?:\w+\s+)?([A-Za-z_]\w*)(?:\s*[:][^;{]{0,200})?\s*\{/g;
	var m;
	while((m = re.exec(text))) {
		var name = m[2];
		// вытаскиваем тело до баланса скобок
		var start = re.lastIndex - 1, depth = 0, end = start;
		for(var p = start; p < Math.min(text.length, start + 20000); p++) {
			if(text[p] === "{") depth++;
			else if(text[p] === "}") { depth--; if(depth === 0) { end = p; break; } }
		}
		var body = text.slice(start, end);
		var methods = [];
		var mre = /\b([A-Za-z_~]\w*)\s*\([^;{)]{0,120}\)\s*(?:const)?\s*(?:override)?\s*[;{]/g, mm;
		while((mm = mre.exec(body))) {
			if(!keywords[mm[1]] && methods.indexOf(mm[1]) === -1) methods.push(mm[1]);
			if(methods.length >= 25) break;
		}
		classes.push({ kind: m[1], name: name, base: (m[0].match(/:\s*[^{]+/) || [""])[0].replace(/\s+/g," ").trim().slice(0,80), methods: methods });
		if(classes.length >= 12) break;
	}
	return classes;
}

// JS: функции/классы/константы верхнего уровня + JSDoc
function extractJsSymbols(text) {
	var funcs = [], classes = [], consts = [], docs = [];
	var m;
	var reF = /(?:^|\n)\s*(?:exports\.([A-Za-z_$][\w$]*)\s*=\s*function|function\s+([A-Za-z_$][\w$]*)\s*\(|([A-Za-z_$][\w$]*)\s*:\s*function)/g;
	while((m = reF.exec(text))) {
		var n = m[1] || m[2] || m[3];
		if(n && funcs.indexOf(n) === -1) funcs.push(n);
	}
	var reC = /(?:^|\n)\s*(?:exports\.([A-Za-z_$][\w$]*)\s*=\s*class|class\s+([A-Za-z_$][\w$]*)\s*(?:extends|[{]))/g;
	while((m = reC.exec(text))) {
		var cn = m[1] || m[2];
		if(cn && classes.indexOf(cn) === -1) classes.push(cn);
	}
	var reK = /(?:^|\n)\s*(?:exports\.([A-Za-z_$][\w$]*)\s*=\s*(?:\/[gm]|"[^"]*"|'[^']*'|\d|[\{\[])|const\s+([A-Za-z_$][\w$]*)\s*=)/g;
	while((m = reK.exec(text))) {
		var kn = m[1] || m[2];
		if(kn && consts.indexOf(kn) === -1) consts.push(kn);
	}
	var reJ = /\/\*\*([\s\S]{0,600}?)\*\//g;
	while((m = reJ.exec(text))) {
		var d = m[1].replace(/^\s*\*?\s*/gm, "").replace(/\s+/g, " ").trim();
		if(d.length > 20 && docs.indexOf(d) === -1) docs.push(d.slice(0, 220));
		if(docs.length >= 8) break;
	}
	return { funcs: funcs.slice(0, 40), classes: classes, consts: consts.slice(0, 30), docs: docs };
}

// TiddlyWiki: разбор .tid файлов — заголовок тега + краткое содержимое
function parseTid(text) {
	var fields = {}, bodyStart = 0, lines = text.split(/\r?\n/);
	for(var i = 0; i < lines.length; i++) {
		var l = lines[i];
		if(l === "") { bodyStart = i + 1; break; }
		var m = l.match(/^([A-Za-z_][\w-]*):\s?(.*)$/);
		if(m) fields[m[1]] = m[2]; else break;
	}
	var body = lines.slice(bodyStart).join("\n");
	var tags = (fields.tags || "").split(/\s+/).filter(Boolean);
	return { fields: fields, tags: tags, body: body.trim(), bodyLines: body ? countLines(body) : 0 };
}

// Wikitext-разметка тиддлера: макросы, виджеты, заголовки
function extractWikitextFeatures(body) {
	var feats = { headings: 0, macros: [], widgets: [], lists: 0, codeBlocks: 0, transcludes: [] };
	var m;
	feats.headings = (body.match(/^!{1,6}\s/gm) || []).length;
	feats.lists = (body.match(/^\s*[*#]\s/gm) || []).length;
	feats.codeBlocks = (body.match(/```/g) || []).length >> 1;
	var reMacro = /<<([A-Za-z_][\w.-]*)\b/g;
	while((m = reMacro.exec(body))) if(feats.macros.indexOf(m[1]) === -1) feats.macros.push(m[1]);
	var reWidget = /<(?:\u00a0| )(?:\/)?([\w$][\w$.\-\/]*)(?=[\s\/>])/g;
	while((m = reWidget.exec(body))) if(feats.widgets.indexOf(m[1]) === -1) feats.widgets.push(m[1]);
	var reTr = /\[\[([^\]|]{1,80})(?:\|[^\]]{1,60})?\]\]/g;
	while((m = reTr.exec(body))) if(feats.transcludes.indexOf(m[1]) === -1 && feats.transcludes.length < 10) feats.transcludes.push(m[1]);
	feats.macros = feats.macros.slice(0, 12);
	feats.widgets = feats.widgets.slice(0, 12);
	return feats;
}

// Извлечение оглавления README (заголовки)
function extractHeadings(text, maxLevel) {
	var hs = [];
	text.split(/\r?\n/).forEach(function(l) {
		var m = l.match(/^(#{1,6})\s+(.+)$/);
		if(m && m[1].length <= (maxLevel || 3)) hs.push({ level: m[1].length, title: m[2].trim() });
	});
	return hs;
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
		subdirStats: {},
		extByDir: {},
		binaryFiles: 0,
		docFiles: 0,
		testFiles: 0,
		tiddlers: 0,
		largest: [],
		jsModules: [],
		cppDetails: [],
		tiddlerCatalog: [],
		coreModules: {},
		configFiles: [],
		plugins: [],
		infoModules: [],
		subPackages: [],
		cmake: null,
		readmes: [],
		totalBytes: 0
	};

	var pkg=null, licenseText=null, cmakeMeta=null, versionFile=null, dockerfile=null;

	for(var i=0;i<rep.files.length;i++) {
		var rel = rep.files[i];
		var base = path.basename(rel);
		var ext = (path.extname(base)||base).replace(/^\./,"").toLowerCase();
		var lang = langOfExt(ext);

		// ---- ключевые метафайлы
		if(rel === "package.json") { var rj = readText(root,rel,256*1024); if(rj){try{pkg=JSON.parse(rj.text);}catch(e){}} continue; }
		if(rel === "VERSION" || rel === "version") { var rv = readText(root,rel,4096); if(rv) versionFile = rv.text.trim(); continue; }
		if(rel === "Dockerfile") { var rd = readText(root,rel,64*1024); if(rd) dockerfile = { rel: rel, text: rd.text }; continue; }
		if(/(^|\/)readme(\.md)?$/i.test(rel)) {
			var rr = readText(root,rel,64*1024);
			if(rr) {
				S.readmes.push({ rel: rel, text: rr.text });
				if(!rep.rootReadme && rel.indexOf("/") === -1) rep.rootReadme = { rel: rel, text: rr.text };
			}
		}
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
		// ---- тиддлеры (.tid): детальное описание каждого
		if(ext === "tid") {
			var rt = readText(root, rel, 256*1024);
			if(rt && rt.text) {
				var parsed = parseTid(rt.text);
				var feats = extractWikitextFeatures(parsed.body);
				S.tiddlerCatalog.push({
					rel: rel, title: parsed.fields.title || base.replace(/\.tid$/i, ""),
					type: parsed.fields.type || "", modified: parsed.fields.modified || "",
					tags: parsed.tags, bodyLines: parsed.bodyLines,
					headings: feats.headings, macros: feats.macros, widgets: feats.widgets,
					lists: feats.lists, codeBlocks: feats.codeBlocks, transcludes: feats.transcludes,
					preview: parsed.body.replace(/\s+/g, " ").slice(0, 240)
				});
			}
			// дальше считаем как обычный текстовый файл для метрик
		}

		if(BINARY_EXT[ext]) { S.binaryFiles++; continue; }

		if(/(^|\/)(tests?|testing|spec)\//.test(rel) || /\.(test|spec)\.[jt]sx?$/.test(rel)) S.testFiles++;
		if(/\.(md|txt|rst)$/.test(rel) || ext==="tid") S.docFiles++;
		if(ext==="tid") S.tiddlers++;
		if(/^(Dockerfile|Makefile|.*\.config\.[a-z]+|eslint\.config\.[a-z]+|playwright\.config\.[a-z]+|.*\.ya?ml|tsconfig.*|jsconfig.*|\.eslintrc.*|\.gitignore|\.dockerignore|\.editorconfig|.*\.ini|.*\.doxyfilein|Doxyfile.*)$/i.test(base)) {
			S.configFiles.push(rel);
		}

		var r = readText(root, rel, 1024*1024);
		if(!r || !r.text) continue;
		S.totalBytes += r.size;
		var loc = countLines(r.text);

		if(lang) {
			var L = S.languages[lang] || (S.languages[lang] = { files:0, loc:0, comments:0 });
			L.files++; L.loc += loc;
			L.comments += countComments(r.text, lang);
		}
		var parts = rel.split("/");
		var top = parts.length === 1 ? "(корень)" : parts[0];
		var D = S.dirStats[top] || (S.dirStats[top] = { files:0, loc:0, subdirs:{} });
		D.files++; D.loc += loc;
		if(parts.length > 2) {
			var sub = parts[0] + "/" + parts[1];
			var SD = D.subdirs[sub] || (D.subdirs[sub] = { files:0, loc:0 });
			SD.files++; SD.loc += loc;
		}
		var EB = S.extByDir[top] || (S.extByDir[top] = {});
		EB[ext] = (EB[ext] || 0) + 1;

		S.largest.push({ rel: rel, size: r.size, loc: loc, lang: lang });

		if((lang==="js"||lang==="ts") && /^(src|core|plugins|boot|addon|tools|editions)\//.test(rel)) {
			var ex = extractJsExports(r.text);
			var sym = extractJsSymbols(r.text);
			if(ex.named.length || ex.requires.length || sym.funcs.length || sym.classes.length) {
				S.jsModules.push({ rel: rel, exports: ex.named.slice(0,30), requires: ex.requires.slice(0,20),
					funcs: sym.funcs, classes: sym.classes, consts: sym.consts, docs: sym.docs });
			}
			// реестр модулей ядра по категориям ($:/core/modules/<кат>/<имя>)
			var cm = rel.match(/core[\\/]modules[\\/](\w+)[\\/]/);
			if(cm) {
				var cat = S.coreModules[cm[1]] || (S.coreModules[cm[1]] = { count: 0, names: [] });
				cat.count++;
				if(cat.names.length < 60) cat.names.push(base.replace(/\.(js|tid|info)$/i, ""));
			}
		}
		if((lang==="c"||lang==="cpp") && /\/\*\*|\\\\brief|\\brief|\/\/\//.test(r.text)) {
			var fn = extractCppFunctions(r.text);
			var cl = extractCppClass(r.text);
			if(fn.functions.length || fn.briefs.length || cl.length) {
				S.cppDetails.push({ rel: rel, functions: fn.functions, briefs: fn.briefs, classes: cl });
			}
		}
	}

	S.largest.sort(function(a,b){ return b.size - a.size; });
	S.largest = S.largest.slice(0, 30);
	S.subPackages = findSubPackages(root, rep.files);
	S.cmake = extractCMakeTargets(root, rep.files);

	rep.pkg = pkg; rep.licenseText = licenseText;
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
	if(S.cppDetails.length) parts.push("Найдено **" + S.cppDetails.length + " C/C++ файлов** с документированными классами/функциями (`\\brief`, классы с методами, сигнатуры).");
	if(S.testFiles) parts.push("Тестовых файлов: **" + num(S.testFiles) + "**.");
	parts.push("Инструмент **Project Describer** интегрирован как плагин TiddlyWiki (`plugins/tiddlywiki/project-describer`) и CLI (`tools/project-describer/cli.js`) — полный отчёт по проекту получается одной кнопкой «Получить полное описание» или командой `node tools/project-describer/cli.js`.");
	return parts.map(function(p){ return "- " + p; }).join("\n");
}

function generateMarkdown(rep) {
	var S = rep.stats, out = [];
	var P = function(s){ out.push(s); };

	var langs = Object.keys(S.languages).map(function(k){
		return { k:k, name:(LANG_INFO[k]||{name:k}).name, f:S.languages[k].files, loc:S.languages[k].loc, com:S.languages[k].comments };
	}).sort(function(a,b){ return b.loc - a.loc; });
	var totalLoc = langs.reduce(function(a,x){return a+x.loc;},0)||1;

	P("# Полное описание проекта");
	P("");
	P("> Отчёт сгенерирован инструментом **Project Describer** автоматическим анализом");
	P("> **каждого файла** репозитория: структура, метаданные, исходный код, документация.");
	P("");
	P("- Дата генерации: `" + rep.generatedAt + "`");
	P("- Корень проекта: `" + esc(rep.root) + "`");
	P("- Объём проанализированного текста: **" + num(totalLoc) + " строк** (" + fmtBytes(S.totalBytes) + ")");
	P("");
	P("## Оглавление");
	P("");
	[
		"1. Общая информация",
		"2. Структура проекта",
		"3. Каталог файлов по директориям",
		"4. Модули и пакеты",
		"5. Плагины TiddlyWiki (полный каталог)",
		"6. Зависимости",
		"7. Сборочная система CMake",
		"8. Точки входа и скрипты",
		"9. Метрики кода",
		"10. JavaScript API — разбор модулей",
		"11. Модули ядра TiddlyWiki по категориям",
		"12. C/C++ API — классы, функции, документация",
		"13. Каталог тиддлеров (.tid)",
		"14. Конфигурационные файлы",
		"15. Документация проекта (README-и)",
		"16. Итоговое резюме"
	].forEach(function(t){ P("- " + t); });
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
		if(rep.pkg.homepage) P("| Домашняя страница | " + esc(rep.pkg.homepage) + " |");
		if(rep.pkg.engines && rep.pkg.engines.node) P("| Требуемый Node.js | `" + esc(rep.pkg.engines.node) + "` |");
		if(rep.pkg.keywords && rep.pkg.keywords.length) P("| Ключевые слова | " + rep.pkg.keywords.map(function(k){return "`"+esc(k)+"`";}).join(", ") + " |");
	}
	if(rep.versionFile) P("| Файл `VERSION` (Doxygen) | `" + esc(rep.versionFile) + "` |");
	P("| Директорий | " + num(S.totalDirs) + " |");
	P("| Файлов всего | " + num(S.totalFiles) + " |");
	P("| Текстовых проанализировано | " + num(S.totalFiles - S.binaryFiles) + " |");
	P("| Тестовых файлов | " + num(S.testFiles) + " |");
	P("| Документация (md/txt/rst/tid) | " + num(S.docFiles) + " (в т.ч. тиддлеров: " + num(S.tiddlers) + ") |");
	P("| Бинарных файлов (пропущено) | " + num(S.binaryFiles) + " |");
	P("| Плагинов TiddlyWiki | " + num(S.plugins.length) + " |");
	P("| Подпроектов (package.json) | " + num(S.subPackages.length) + " |");
	P("");

	if(rep.rootReadme) {
		P("### Выжимка из корневого README (`" + esc(rep.rootReadme.rel) + "`)");
		P("");
		P("```text");
		P(rep.rootReadme.text.split(/\r?\n/).filter(function(l){return l.trim();}).slice(0,15).join("\n"));
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

	P("### Языки и форматы");
	P("");
	P("| Язык | Файлов | Строк | Комментариев | Доля строк | Плотность коммент. |");
	P("|---|---:|---:|---:|---:|---:|");
	langs.forEach(function(l){
		P("| " + l.name + " | " + num(l.f) + " | " + num(l.loc) + " | " + num(l.com) + " | " + (100*l.loc/totalLoc).toFixed(1) + "% | " + (l.loc ? (100*l.com/l.loc).toFixed(1) : "0") + "% |");
	});
	P("");

	// ============================ 2. Структура
	P("## 2. Структура проекта");
	P("");
	P("```text");
	P(renderTop(rep));
	P("```");
	P("");
	P("### Дерево каталогов (первые уровни)");
	P("");
	P("```text");
	P(buildTree(rep, 16));
	P("```");
	P("");

	// ============================ 3. Каталог файлов по директориям
	P("## 3. Каталог файлов по директориям");
	P("");
	P("Каждая верхнеуровневая директория: объём, подкаталоги и распределение расширений.");
	P("");
	Object.keys(S.dirStats).sort(function(a,b){ return S.dirStats[b].loc - S.dirStats[a].loc; }).forEach(function(t){
		var D = S.dirStats[t];
		P("### `" + esc(t) + "/` — " + num(D.files) + " файлов, " + num(D.loc) + " строк");
		P("");
		if(describeDir(t) !== "—") { P("> " + describeDir(t)); P(""); }
		var EB = S.extByDir[t] || {};
		var exts = Object.keys(EB).sort(function(a,b){ return EB[b]-EB[a]; }).slice(0,12);
		if(exts.length) {
			P("**Расширения:** " + exts.map(function(e){ return "`." + e + "` (" + num(EB[e]) + ")"; }).join(", "));
			P("");
		}
		var subs = Object.keys(D.subdirs).sort(function(a,b){ return D.subdirs[b].loc - D.subdirs[a].loc; });
		if(subs.length) {
			P("| Подкаталог | Файлов | Строк |");
			P("|---|---:|---:|");
			subs.slice(0,25).forEach(function(s){
				P("| `" + esc(s) + "` | " + num(D.subdirs[s].files) + " | " + num(D.subdirs[s].loc) + " |");
			});
			if(subs.length > 25) P("| … | ещё " + (subs.length-25) + " подкаталогов | |");
			P("");
		}
	});

	// ============================ 4. Модули и пакеты
	P("## 4. Модули и пакеты");
	P("");
	P("### Верхнеуровневые компоненты");
	P("");
	P("| Каталог | Файлов | Строк | Назначение |");
	P("|---|---:|---:|---|");
	Object.keys(S.dirStats).sort(function(a,b){ return S.dirStats[b].loc - S.dirStats[a].loc; }).forEach(function(t){
		P("| `" + esc(t) + "` | " + num(S.dirStats[t].files) + " | " + num(S.dirStats[t].loc) + " | " + describeDir(t) + " |");
	});
	P("");
	if(S.subPackages.length) {
		P("### Подпроекты с собственным `package.json`");
		P("");
		P("| Путь | Название | Версия | Описание |");
		P("|---|---|---|---|");
		S.subPackages.slice(0,60).forEach(function(sp){
			P("| `" + esc(sp.rel.replace(/\/package\.json$/, "")) + "` | `" + esc(sp.json.name) + "` | `" + esc(sp.json.version||"—") + "` | " + esc((sp.json.description||"—").slice(0,90)) + " |");
		});
		if(S.subPackages.length > 60) { P(""); P("… и ещё " + (S.subPackages.length-60) + " подпроектов."); }
		P("");
	}
	if(S.infoModules.length) {
		P("### Информационные модули (`*.info`)");
		P("");
		P("| Модуль | Ключи описания |");
		P("|---|---|");
		S.infoModules.slice(0,80).forEach(function(im){
			var keys = Object.keys(im.info).slice(0,6).map(function(k){ return "`"+k+"`"; }).join(", ");
			P("| `" + esc(im.rel) + "` | " + keys + " |");
		});
		if(S.infoModules.length > 80) { P(""); P("… и ещё " + (S.infoModules.length-80) + " модулей."); }
		P("");
	}

	// ============================ 5. Плагины
	if(S.plugins.length) {
		P("## 5. Плагины TiddlyWiki (полный каталог)");
		P("");
		P("Всего плагинов: **" + S.plugins.length + "**. Каждый описан файлом `plugin.info`.");
		P("");
		P("| Название | Title | Тип | Платформа | Зависимости | Описание |");
		P("|---|---|---|---|---|---|");
		S.plugins.forEach(function(p){
			var name = p.info.name || p.rel.split("/")[2] || p.rel;
			var dep = Array.isArray(p.info.dependencies)?p.info.dependencies.join(", "):(Array.isArray(p.info.dependents)?p.info.dependents.join(", "):"—");
			P("| `" + esc(name) + "` | `" + esc(p.info.title) + "` | " + esc(p.info.type||"—") + " | " + esc(p.info.platform||"—") + " | " + esc(dep).slice(0,60) + " | " + esc((p.info.description||"—").slice(0,100)) + " |");
		});
		P("");
	}

	// ============================ 6. Зависимости
	var hasDeps = rep.pkg && ((rep.pkg.dependencies&&Object.keys(rep.pkg.dependencies).length)||(rep.pkg.devDependencies&&Object.keys(rep.pkg.devDependencies).length));
	if(hasDeps || rep.cmakeMeta) {
		P("## 6. Зависимости");
		P("");
		if(rep.pkg && rep.pkg.dependencies && Object.keys(rep.pkg.dependencies).length) {
			P("**Runtime-зависимости npm:**");
			P("");
			P("| Пакет | Версия |");
			P("|---|---|");
			Object.keys(rep.pkg.dependencies).forEach(function(d){ P("| `" + d + "` | `" + esc(rep.pkg.dependencies[d]) + "` |"); });
			P("");
		}
		if(rep.pkg && rep.pkg.devDependencies && Object.keys(rep.pkg.devDependencies).length) {
			P("**Dev-зависимости npm:**");
			P("");
			P("| Пакет | Версия |");
			P("|---|---|");
			Object.keys(rep.pkg.devDependencies).forEach(function(d){ P("| `" + d + "` | `" + esc(rep.pkg.devDependencies[d]) + "` |"); });
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

	// ============================ 7. CMake
	if(S.cmake && (S.cmake.targets.length || S.cmake.options.length)) {
		P("## 7. Сборочная система CMake");
		P("");
		if(S.cmake.targets.length) {
			P("### Цели сборки (`add_executable` / `add_library`)");
			P("");
			P("| Цель | Тип | Каталог |");
			P("|---|---|---|");
			S.cmake.targets.slice(0,80).forEach(function(t){
				P("| `" + esc(t.name) + "` | " + (t.kind==="executable"?"исполняемая":"библиотека") + " | `" + esc(t.dir) + "` |");
			});
			if(S.cmake.targets.length > 80) { P(""); P("… и ещё " + (S.cmake.targets.length-80) + " целей."); }
			P("");
		}
		if(S.cmake.options.length) {
			P("### Опции компиляции (`option`)");
			P("");
			S.cmake.options.slice(0,50).forEach(function(o){ P("- `" + esc(o.name) + "` — " + esc(o.help)); });
			if(S.cmake.options.length > 50) P("- … и ещё " + (S.cmake.options.length-50) + " опций.");
			P("");
		}
		if(S.cmake.installs.length) {
			P("**Каталоги с правилами установки (`install`):** " + S.cmake.installs.slice(0,20).map(function(d){return "`"+esc(d)+"`";}).join(", "));
			P("");
		}
	}

	// ============================ 8. Точки входа
	P("## 8. Точки входа и скрипты");
	P("");
	if(rep.pkg && rep.pkg.bin) {
		Object.keys(rep.pkg.bin).forEach(function(b){ P("- CLI: `" + b + "` → `" + esc(rep.pkg.bin[b]) + "`"); });
	}
	if(rep.pkg && rep.pkg.main) P("- Main-модуль: `" + esc(rep.pkg.main) + "`");
	if(rep.pkg && rep.pkg.scripts) {
		P("");
		P("**npm-скрипты:**");
		P("");
		P("| Скрипт | Команда |");
		P("|---|---|");
		Object.keys(rep.pkg.scripts).forEach(function(s){ P("| `npm run " + esc(s) + "` | `" + esc(rep.pkg.scripts[s]) + "` |"); });
	}
	if(rep.dockerfile) {
		P("");
		P("**Dockerfile:**");
		P("");
		P("```dockerfile");
		P(rep.dockerfile.text.split(/\r?\n/).slice(0,15).join("\n"));
		P("```");
	}
	P("");

	// ============================ 9. Метрики
	P("## 9. Метрики кода");
	P("");
	P("- Всего строк текстового кода/документации: **" + num(totalLoc) + "**");
	P("- Средний размер текстового файла: **" + num(Math.round(totalLoc/Math.max(1,S.totalFiles-S.binaryFiles))) + " строк**");
	langs.forEach(function(l){
		if(l.loc) P("- " + l.name + ": комментариев " + num(l.com) + " строк (" + (100*l.com/l.loc).toFixed(1) + "% от " + num(l.loc) + ")");
	});
	P("");
	P("### 30 самых крупных файлов");
	P("");
	P("| Файл | Язык | Размер | Строк |");
	P("|---|---|---:|---:|");
	S.largest.forEach(function(f){ P("| `" + esc(f.rel) + "` | " + esc(f.lang||"—") + " | " + fmtBytes(f.size) + " | " + num(f.loc) + " |"); });
	P("");

	// ============================ 10. JS API — разбор модулей
	if(S.jsModules.length) {
		P("## 10. JavaScript API — разбор модулей");
		P("");
		P("Проанализировано **" + num(S.jsModules.length) + "** JS-модулей (CommonJS). Ниже — детальные карточки ключевых модулей.");
		P("");
		var detailed = S.jsModules.slice().sort(function(a,b){
			return (b.docs.length?2:0)+b.funcs.length+b.classes.length - ((a.docs.length?2:0)+a.funcs.length+a.classes.length);
		}).slice(0, 40);
		detailed.forEach(function(mod){
			P("### `" + esc(mod.rel) + "`");
			P("");
			if(mod.docs.length) {
				mod.docs.slice(0,3).forEach(function(d){ P("> " + esc(d)); P(""); });
			}
			if(mod.exports.length) P("- **Экспорты:** " + mod.exports.slice(0,15).map(function(e){return "`"+e+"`";}).join(", "));
			if(mod.classes.length) P("- **Классы:** " + mod.classes.map(function(c){return "`"+c+"`";}).join(", "));
			if(mod.funcs.length) P("- **Функции:** " + mod.funcs.slice(0,20).map(function(f){return "`"+f+"()`";}).join(", ") + (mod.funcs.length>20 ? " …" : ""));
			if(mod.consts.length) P("- **Константы/значения:** " + mod.consts.slice(0,12).map(function(c){return "`"+c+"`";}).join(", "));
			if(mod.requires.length) P("- **Зависит от (require):** " + mod.requires.slice(0,12).map(function(r){return "`"+r+"`";}).join(", "));
			P("");
		});
		P("### Остальные модули (сводка)");
		P("");
		P("| Модуль | Экспортов | Функций | Классов |");
		P("|---|---:|---:|---:|");
		var detailedSet = {};
		detailed.forEach(function(d){ detailedSet[d.rel]=1; });
		S.jsModules.filter(function(m){ return !detailedSet[m.rel]; }).slice(0,200).forEach(function(mod){
			P("| `" + esc(mod.rel) + "` | " + mod.exports.length + " | " + mod.funcs.length + " | " + mod.classes.length + " |");
		});
		P("");
	}

	// ============================ 11. Модули ядра TW по категориям
	var catKeys = Object.keys(S.coreModules);
	if(catKeys.length) {
		P("## 11. Модули ядра TiddlyWiki по категориям");
		P("");
		P("Структура `$:/core/modules/<категория>/` — сердце вики-движка.");
		P("");
		catKeys.sort().forEach(function(cat){
			var c = S.coreModules[cat];
			P("### " + cat + " — " + c.count + " модулей");
			P("");
			P(c.names.map(function(n){ return "`"+n+"`"; }).join(", ") + (c.count > c.names.length ? " …" : ""));
			P("");
		});
	}

	// ============================ 12. C/C++ API
	if(S.cppDetails.length) {
		P("## 12. C/C++ API — классы, функции, Doxygen-документация");
		P("");
		P("Файлов с аннотированными определениями: **" + num(S.cppDetails.length) + "**.");
		P("");
		var cppTop = S.cppDetails.slice().sort(function(a,b){
			return (b.classes.length*3 + b.functions.length) - (a.classes.length*3 + a.functions.length);
		}).slice(0, 35);
		cppTop.forEach(function(d){
			P("### `" + esc(d.rel) + "`");
			P("");
			if(d.briefs.length) { d.briefs.slice(0,2).forEach(function(b){ P("> " + esc(b)); }); P(""); }
			if(d.classes.length) {
				P("**Классы/структуры:**");
				P("");
				d.classes.forEach(function(c){
					var inh = c.base ? " _(наследует: " + esc(c.base) + ")_" : "";
					P("- `" + c.kind + " " + c.name + "`" + inh + (c.methods.length ? " — методы: " + c.methods.slice(0,12).map(function(m){return "`"+m+"`";}).join(", ") + (c.methods.length>12?" …":"") : ""));
				});
				P("");
			}
			if(d.functions.length) {
				P("**Функции:** " + d.functions.slice(0,15).map(function(f){ return "`"+f.name+"("+esc(f.params.slice(0,60))+")`"; }).join(", ") + (d.functions.length>15?" …":""));
				P("");
			}
		});
	}

	// ============================ 13. Каталог тиддлеров
	if(S.tiddlerCatalog.length) {
		P("## 13. Каталог тиддлеров (.tid)");
		P("");
		P("Каждый `.tid` — это единица данных TiddlyWiki с полями заголовка и wikitext-телом. Проанализировано: **" + num(S.tiddlerCatalog.length) + "**.");
		P("");
		var catalog = S.tiddlerCatalog.slice().sort(function(a,b){ return b.bodyLines - a.bodyLines; });
		var rich = catalog.filter(function(t){ return t.bodyLines > 3; }).slice(0, 60);
		rich.forEach(function(t){
			P("### `" + esc(t.title) + "`");
			P("");
			P("- Путь: `" + esc(t.rel) + "`");
			if(t.tags.length) P("- Теги: " + t.tags.slice(0,10).map(function(g){return "`"+esc(g)+"`";}).join(", "));
			P("- Тело: " + num(t.bodyLines) + " строк, заголовков: " + t.headings + ", списков: " + t.lists + ", блоков кода: " + t.codeBlocks);
			if(t.widgets.length) P("- Виджеты: " + t.widgets.map(function(w){return "`<"+w+">`";}).join(", "));
			if(t.macros.length) P("- Макросы: " + t.macros.map(function(m){return "`<<"+m+">>`";}).join(", "));
			if(t.transcludes.length) P("- Трансклюзии: " + t.transcludes.slice(0,8).map(function(x){return "`[["+x+"]]`";}).join(", "));
			if(t.preview) { P(""); P("> " + esc(t.preview.slice(0,200))); }
			P("");
		});
		if(catalog.length > rich.length) {
			P("### Прочие тиддлеры (краткая таблица)");
			P("");
			P("| Title | Путь | Тело, строк | Теги |");
			P("|---|---|---:|---|");
			var richSet = {};
			rich.forEach(function(t){ richSet[t.rel]=1; });
			var others = catalog.filter(function(t){ return !richSet[t.rel]; });
			others.slice(0,150).forEach(function(t){
				P("| " + esc(t.title) + " | `" + esc(t.rel) + "` | " + t.bodyLines + " | " + esc(t.tags.slice(0,5).join(" ")) + " |");
			});
			if(others.length > 150) { P(""); P("… и ещё " + (others.length-150) + " тиддлеров."); }
			P("");
		}
	}

	// ============================ 14. Конфиги
	if(S.configFiles.length) {
		P("## 14. Конфигурационные файлы");
		P("");
		P("Всего: **" + num(S.configFiles.length) + "**.");
		P("");
		S.configFiles.slice(0,120).forEach(function(c){ P("- `" + esc(c) + "`"); });
		if(S.configFiles.length > 120) P("- … и ещё " + (S.configFiles.length-120) + ".");
		P("");
	}

	// ============================ 15. Документация (README-и)
	if(S.readmes.length) {
		P("## 15. Документация проекта");
		P("");
		P("Найдено **" + num(S.readmes.length) + "** README-файлов. Оглавления каждого:");
		P("");
		S.readmes.slice(0,40).forEach(function(rm){
			var hs = extractHeadings(rm.text, 2);
			P("### `" + esc(rm.rel) + "`");
			P("");
			if(hs.length) {
				hs.slice(0,15).forEach(function(h){
					var ind = "";
					for(var z=1; z<h.level; z++) ind += "  ";
					P(ind + "- " + esc(h.title));
				});
			} else {
				P("_Заголовков нет; начало файла:_");
				P("");
				P("```text");
				P(rm.text.split(/\r?\n/).filter(function(l){return l.trim();}).slice(0,4).join("\n"));
				P("```");
			}
			P("");
		});
		if(S.readmes.length > 40) P("… и ещё " + (S.readmes.length-40) + " README-файлов.");
		P("");
	}

	// ============================ 16. Резюме
	P("## 16. Итоговое резюме");
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
