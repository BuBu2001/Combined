#!/usr/bin/env node
/*
Project Describer — CLI.

Анализирует весь проект и сохраняет детальный Markdown-отчёт.

Использование:
    node tools/project-describer/cli.js [projectRoot] [outputFile]

По умолчанию: корень = репозиторий, файл = PROJECT_DESCRIPTION.md
*/
"use strict";

var path = require("path");
var fs = require("fs");
var analyzer = require("./analyze.js");

var root = path.resolve(process.argv[2] || path.join(__dirname, "..", ".."));
var outFile = process.argv[3] || path.join(root, "PROJECT_DESCRIPTION.md");

console.log("Project Describer: анализ проекта " + root + " ...");
var t0 = Date.now();
var rep = analyzer.analyze(root);
console.log("  найдено файлов: " + rep.stats.totalFiles + ", директорий: " + rep.stats.totalDirs);
var md = analyzer.generateMarkdown(rep);
fs.writeFileSync(outFile, md, "utf8");
console.log("Готово за " + ((Date.now()-t0)/1000).toFixed(1) + " с. Отчёт сохранён: " + outFile);
