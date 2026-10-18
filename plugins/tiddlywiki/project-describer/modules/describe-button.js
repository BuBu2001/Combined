/*\
title: $:/plugins/tiddlywiki/project-describer/describe-button.js
type: application/javascript
module-type: widget

Виджет-кнопка «Получить полное описание»: запускает анализ всех файлов
и структур репозитория, создаёт тиддлер «Полное описание проекта» с
Markdown-отчётом и сохраняет PROJECT_DESCRIPTION.md на диск.

\*/

(function(){

"use strict";

var Widget = require("$:/core/modules/widgets/widget.js").widget;

var DescribeButtonWidget = function(parseTreeNode,options) {
	this.initialise(parseTreeNode,options);
};

DescribeButtonWidget.prototype = new Widget();

DescribeButtonWidget.prototype.render = function(parent,nextSibling) {
	this.parentElem = parent;
	var self = this;
	// Кнопка
	this.buttonDomNode = this.document.createElement("button");
	this.buttonDomNode.setAttribute("type","button");
	this.buttonDomNode.setAttribute("title","Проанализировать все файлы и структуры проекта и создать .md-отчёт");
	this.buttonDomNode.textContent = this.getAttribute("text","Получить полное описание");
	this.buttonDomNode.addEventListener("click",function(event) {
		self.handleClick(event);
	});
	parent.insertBefore(this.buttonDomNode,nextSibling);
	this.domNodes.push(this.buttonDomNode);
	// Индикатор статуса (обычный текст, без графики)
	this.statusDomNode = this.document.createElement("span");
	parent.insertBefore(this.statusDomNode,nextSibling);
	this.domNodes.push(this.statusDomNode);
};

DescribeButtonWidget.prototype.handleClick = function(event) {
	var self = this, wiki = this.wiki;
	if(!$tw.node || !$tw.boot || !$tw.boot.wikiPath) {
		this.setStatus("Внимание: анализ доступен только в серверной версии TiddlyWiki (node ./tiddlywiki.js ...)");
		return;
	}
	this.setStatus("Идёт анализ всех файлов проекта...");
	// Тяжёлый анализ — выносим за пределы UI-потока через setImmediate
	setImmediate(function() {
		try {
			var analyzer = require("$:/plugins/tiddlywiki/project-describer/analyzer.js");
			var path = require("path"), fs = require("fs");
			// Корень репозитория: поднимаемся от пути wiki до каталога с package.json/CMakeLists.txt
			var root = findRepoRoot(path.resolve($tw.boot.wikiPath));
			var rep = analyzer.analyze(root);
			var md = analyzer.generateMarkdown(rep);
			// 1. Создаём/обновляем тиддлер с описанием
			wiki.addTiddler({
				title: "Полное описание проекта",
				type: "text/markdown",
				tags: "[[Project Describer]]",
				caption: "Полное описание проекта",
				text: md,
				modified: (new Date()).toISOString()
			});
			// 2. Сохраняем .md файл в корень репозитория
			var outFile = path.join(root,"PROJECT_DESCRIPTION.md");
			fs.writeFileSync(outFile, md, "utf8");
			self.setStatus("Готово: " + rep.stats.totalFiles.toLocaleString() + " файлов проанализировано. Файл: " + outFile + ", тиддлер: «Полное описание проекта»");
			// 3. Навигируем на тиддлер
			self.dispatchEvent({type: "tm-navigate", navigateTo: "Полное описание проекта"});
		} catch(err) {
			console.error(err);
			self.setStatus("Ошибка анализа: " + err.message);
		}
	});
};

DescribeButtonWidget.prototype.setStatus = function(msg) {
	if(this.statusDomNode) {
		this.statusDomNode.textContent = msg;
	}
};

function findRepoRoot(start) {
	var path = require("path"), fs = require("fs");
	var dir = start;
	for(var i=0;i<8;i++) {
		if(fs.existsSync(path.join(dir,"package.json")) && fs.existsSync(path.join(dir,"CMakeLists.txt"))) {
			return dir;
		}
		var up = path.dirname(dir);
		if(up === dir) break;
		dir = up;
	}
	// fallback: ищем package.json
	dir = start;
	for(var j=0;j<8;j++) {
		if(fs.existsSync(path.join(dir,"package.json"))) return dir;
		var u = path.dirname(dir);
		if(u === dir) break;
		dir = u;
	}
	return start;
}

DescribeButtonWidget.prototype.computeAttributes = function(stateInfo) {
	return {};
};

DescribeButtonWidget.prototype.refresh = function(changedTiddlers) {
	return false; // статичный виджет
};

exports["describe-button"] = DescribeButtonWidget;

})();
