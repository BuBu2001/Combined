# Полное описание проекта

> Отчёт сгенерирован инструментом **Project Describer** автоматическим анализом
> **каждого файла** репозитория: структура, метаданные, исходный код, документация.

- Дата генерации: `2026-10-18T09:30:50.694Z`
- Корень проекта: `/workspace`
- Объём проанализированного текста: **1 271 984 строк** (91.6 MB)

## Оглавление

- 1. Общая информация
- 2. Структура проекта
- 3. Каталог файлов по директориям
- 4. Модули и пакеты
- 5. Плагины TiddlyWiki (полный каталог)
- 6. Зависимости
- 7. Сборочная система CMake
- 8. Точки входа и скрипты
- 9. Метрики кода
- 10. JavaScript API — разбор модулей
- 11. Модули ядра TiddlyWiki по категориям
- 12. C/C++ API — классы, функции, документация
- 13. Каталог тиддлеров (.tid)
- 14. Конфигурационные файлы
- 15. Документация проекта (README-и)
- 16. Итоговое резюме

## 1. Общая информация

| Параметр | Значение |
|---|---|
| Название пакета | `tiddlywiki` |
| Версия | `5.5.0-prerelease` |
| Описание | a non-linear personal web notebook |
| Автор | Jeremy Ruston <jeremy@jermolene.com> |
| Лицензия | BSD |
| Репозиторий | https://github.com/TiddlyWiki/TiddlyWiki5.git |
| Требуемый Node.js | `>=20.0.0` |
| Ключевые слова | `tiddlywiki`, `tiddlywiki5`, `wiki` |
| Файл `VERSION` (Doxygen) | `1.19.0` |
| Директорий | 1 403 |
| Файлов всего | 11 485 |
| Текстовых проанализировано | 11 268 |
| Тестовых файлов | 1 126 |
| Документация (md/txt/rst/tid) | 6 991 (в т.ч. тиддлеров: 6 854) |
| Бинарных файлов (пропущено) | 217 |
| Плагинов TiddlyWiki | 113 |
| Подпроектов (package.json) | 116 |

### Выжимка из корневого README (`readme.md`)

```text
<h1 class="">Welcome</h1><p>Welcome to <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/TiddlyWiki.html">TiddlyWiki</a>, a non-linear personal web notebook that anyone can use and keep forever, independently of any corporation.</p><p>TiddlyWiki is a complete interactive wiki in JavaScript. It can be used as a single HTML file in the browser or as a powerful Node.js application. It is highly customisable: the entire user interface is itself implemented in hackable <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/WikiText.html">WikiText</a>.</p><h2 class="">Demo</h2><p>Learn more and see it in action at <a class="tc-tiddlylink-external" href="https://tiddlywiki.com/" rel="noopener noreferrer" target="_blank">https://tiddlywiki.com/</a></p><h2 class="">Developer Documentation</h2><p>Developer documentation is in progress at <a class="tc-tiddlylink-external" href="https://tiddlywiki.com/dev/" rel="noopener noreferrer" target="_blank">https://tiddlywiki.com/dev/</a></p><h2 class="">Pull Request Previews</h2><p>Pull request previews courtesy of <a class="tc-tiddlylink-external" href="https://netlify.com" rel="noopener noreferrer" target="_blank">Netlify</a></p><p><a href="https://www.netlify.com" rel="noopener noreferrer" target="_blank"><img alt="Deploys by Netlify" src="https://www.netlify.com/v3/img/components/netlify-light.svg"></a></p><h1 class="">Join the Community</h1><p>
<h2 class="">User forums</h2><h3 class="">Talk TiddlyWiki</h3><p>As the official TiddlyWiki forum, Talk TiddlyWiki is a place to talk about TiddlyWiki: requests for help, <a class="tc-tiddlylink-external" href="https://talk.tiddlywiki.org/c/announcements/20" rel="noopener noreferrer" target="_blank">announcements</a> of new releases and plugins, debating new features, or just sharing experiences. You can participate via the associated website, or subscribe via email.</p><p><a class="tc-tiddlylink-external" href="https://talk.tiddlywiki.org/" rel="noopener noreferrer" target="_blank">https://talk.tiddlywiki.org/</a></p><h3 class="">Google Groups</h3><p>For the convenience of existing users, we also continue to operate the original TiddlyWiki group (hosted on Google Groups since 2005): <a class="tc-tiddlylink-external" href="https://groups.google.com/group/TiddlyWiki" rel="noopener noreferrer" target="_blank">https://groups.google.com/group/TiddlyWiki</a></p><h2 class="">Developer forums</h2><ul><li><a class="tc-tiddlylink-external" href="https://tiddlywiki.com/dev" rel="noopener noreferrer" target="_blank">tiddlywiki.com/dev</a> is the official developer documentation</li><li>Get involved in the <a class="tc-tiddlylink-external" href="https://github.com/TiddlyWiki/TiddlyWiki5" rel="noopener noreferrer" target="_blank">development on GitHub</a></li><li><a class="tc-tiddlylink-external" href="https://github.com/TiddlyWiki/TiddlyWiki5/discussions" rel="noopener noreferrer" target="_blank">GitHub Discussions</a> are for Q&amp;A and open-ended discussion</li><li><a class="tc-tiddlylink-external" href="https://github.com/TiddlyWiki/TiddlyWiki5/issues" rel="noopener noreferrer" target="_blank">GitHub Issues</a> are for raising bug reports and proposing specific, actionable new ideas</li><li>See <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/Contributing.html">Contributing</a> for guidelines on how to contribute to the project.</li></ul><h2 class="">Other forums</h2><ul><li><a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/TiddlyWiki.html">TiddlyWiki</a> Subreddit: <a class="tc-tiddlylink-external" href="https://www.reddit.com/r/TiddlyWiki5/" rel="noopener noreferrer" target="_blank">/r/TiddlyWiki5</a></li><li>Chat on Discord at <a class="tc-tiddlylink-external" href="https://discord.gg/HFFZVQ8" rel="noopener noreferrer" target="_blank">https://discord.gg/HFFZVQ8</a></li></ul>
</p><hr><h1 class="">Installing TiddlyWiki on Node.js</h1><p>TiddlyWiki is a <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/SingleFileApplication.html">SingleFileApplication</a>, which is easy to use. For advanced users and developers there is a possibility to use a Node.js client / server configuration. This configuration is also used to build the TiddlyWiki <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/SinglePageApplication.html">SinglePageApplication</a></p><ol><li>Install <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/Node.js.html">Node.js</a><ul><li>Linux: <blockquote><div><em>Debian/Ubuntu</em>:<br><code>apt install nodejs</code><br>May need to be followed up by:<br><code>apt install npm</code></div><div><em>Arch Linux</em><br><code>yay -S tiddlywiki</code> <br>(installs node and tiddlywiki)</div></blockquote></li><li>Mac<blockquote><div><code>brew install node</code></div></blockquote></li><li>Android<blockquote><div><a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/Serving%2520TW5%2520from%2520Android.html">Termux for Android</a></div></blockquote></li><li>Other <blockquote><div>See <a class="tc-tiddlylink-external" href="http://nodejs.org" rel="noopener noreferrer" target="_blank">http://nodejs.org</a></div></blockquote></li></ul></li><li>Open a command line terminal and type:<blockquote><div><code>npm install -g tiddlywiki</code></div><div>If it fails with an error you may need to re-run the command as an administrator:</div><div><code>sudo npm install -g tiddlywiki</code> (Mac/Linux)</div></blockquote></li><li>Ensure TiddlyWiki is installed by typing:<blockquote><div><code>tiddlywiki --version</code></div></blockquote><ul><li>In response, you should see <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/TiddlyWiki.html">TiddlyWiki</a> report its current version (eg "5.4.1". You may also see other debugging information reported.)</li></ul></li><li>Try it out:<ol><li><code>tiddlywiki mynewwiki --init server</code> to create a folder for a new wiki that includes server-related components</li><li><code>tiddlywiki mynewwiki --listen</code> to start <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/TiddlyWiki.html">TiddlyWiki</a></li><li>Visit <a class="tc-tiddlylink-external" href="http://127.0.0.1:8080/" rel="noopener noreferrer" target="_blank">http://127.0.0.1:8080/</a> in your browser</li><li>Try editing and creating tiddlers</li></ol></li><li>Optionally, make an offline copy:<ul><li>click the <span class="doc-icon"><svg class="tc-image-save-button-dynamic tc-image-button" height="22pt" viewBox="0 0 128 128" width="22pt">
<g class="tc-image-save-button-dynamic-clean">
<path d="M120.783 34.33c4.641 8.862 7.266 18.948 7.266 29.646 0 35.347-28.653 64-64 64-35.346 0-64-28.653-64-64 0-35.346 28.654-64 64-64 18.808 0 35.72 8.113 47.43 21.03l2.68-2.68c3.13-3.13 8.197-3.132 11.321-.008 3.118 3.118 3.121 8.193-.007 11.32l-4.69 4.691zm-12.058 12.058a47.876 47.876 0 013.324 17.588c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48c14.39 0 27.3 6.332 36.098 16.362L58.941 73.544 41.976 56.578c-3.127-3.127-8.201-3.123-11.32-.005-3.123 3.124-3.119 8.194.006 11.319l22.617 22.617a7.992 7.992 0 005.659 2.347c2.05 0 4.101-.783 5.667-2.349l44.12-44.12z" fill-rule="evenodd"></path>
</g>
<g class="tc-image-save-button-dynamic-dirty">
<path d="M64.856912,0 C100.203136,0 128.856912,28.653776 128.856912,64 C128.856912,99.346224 100.203136,128 64.856912,128 C29.510688,128 0.856911958,99.346224 0.856911958,64 C0.856911958,28.653776 29.510688,0 64.856912,0 Z M64.856912,16 C38.347244,16 16.856912,37.490332 16.856912,64 C16.856912,90.509668 38.347244,112 64.856912,112 C91.3665799,112 112.856912,90.509668 112.856912,64 C112.856912,37.490332 91.3665799,16 64.856912,16 Z"></path>
<circle cx="65" cy="64" r="32"></circle>
</g>
</svg></span> <strong>save changes</strong> button in the sidebar, <strong>OR</strong></li><li><code>tiddlywiki mynewwiki --build index</code></li></ul></li></ol><p>The <code>-g</code> flag causes <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/TiddlyWiki.html">TiddlyWiki</a> to be installed globally. Without it, <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/TiddlyWiki.html">TiddlyWiki</a> will only be available in the directory where you installed it.</p><p><div class="doc-icon-block doc-warning"><div><strong>Warning</strong></div><div class="doc-block-icon"><svg class="tc-image-warning tc-image-button" height="22pt" viewBox="0 0 128 128" width="22pt"><path d="M57.072 11c3.079-5.333 10.777-5.333 13.856 0l55.426 96c3.079 5.333-.77 12-6.928 12H8.574c-6.158 0-10.007-6.667-6.928-12l55.426-96zM64 37c-4.418 0-8 3.582-8 7.994v28.012C56 77.421 59.59 81 64 81c4.418 0 8-3.582 8-7.994V44.994C72 40.579 68.41 37 64 37zm0 67a8 8 0 100-16 8 8 0 000 16z" fill-rule="evenodd"></path></svg></div>If you are using Debian or Debian-based Linux and you are receiving a <code>node: command not found</code> error though node.js package is installed, you may need to create a symbolic link between <code>nodejs</code> and <code>node</code>. Consult your distro's manual and <code>whereis</code> to correctly create a link. See github <a class="tc-tiddlylink-external" href="http://github.com/TiddlyWiki/TiddlyWiki5/issues/1434" rel="noopener noreferrer" target="_blank">issue 1434</a>. <br><br>Example Debian v8.0: <code>sudo ln -s /usr/bin/nodejs /usr/bin/node</code></div></p><p><br>
<div class="doc-icon-block doc-tip"><div><strong>Tip</strong></div><div class="doc-block-icon"><svg class="tc-image-tip tc-image-button" height="22pt" viewBox="0 0 128 128" width="22pt"><path d="M64 128.242c35.346 0 64-28.654 64-64 0-35.346-28.654-64-64-64-35.346 0-64 28.654-64 64 0 35.346 28.654 64 64 64zm11.936-36.789c-.624 4.129-5.73 7.349-11.936 7.349-6.206 0-11.312-3.22-11.936-7.349C54.33 94.05 58.824 95.82 64 95.82c5.175 0 9.67-1.769 11.936-4.366zm0 4.492c-.624 4.13-5.73 7.349-11.936 7.349-6.206 0-11.312-3.22-11.936-7.349 2.266 2.597 6.76 4.366 11.936 4.366 5.175 0 9.67-1.769 11.936-4.366zm0 4.456c-.624 4.129-5.73 7.349-11.936 7.349-6.206 0-11.312-3.22-11.936-7.349 2.266 2.597 6.76 4.366 11.936 4.366 5.175 0 9.67-1.769 11.936-4.366zm0 4.492c-.624 4.13-5.73 7.349-11.936 7.349-6.206 0-11.312-3.22-11.936-7.349 2.266 2.597 6.76 4.366 11.936 4.366 5.175 0 9.67-1.769 11.936-4.366zM64.3 24.242c11.618 0 23.699 7.82 23.699 24.2S75.92 71.754 75.92 83.576c0 5.873-5.868 9.26-11.92 9.26s-12.027-3.006-12.027-9.26C51.973 71.147 40 65.47 40 48.442s12.683-24.2 24.301-24.2z" fill-rule="evenodd"></path></svg></div>You can also install prior versions like this: <br><code> npm install -g tiddlywiki@5.1.13</code></div>
</p><h1 class="">Using TiddlyWiki on Node.js</h1><p>TiddlyWiki5 includes a set of commands for use on the command line to perform an extensive set of operations based on <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/TiddlyWikiFolders.html">TiddlyWikiFolders</a>, <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/TiddlerFiles.html">TiddlerFiles</a>.</p><p>For example, the following command loads the tiddlers from a TiddlyWiki HTML file and then saves one of them in static HTML:</p><pre><code>tiddlywiki --verbose --load mywiki.html --render ReadMe ./readme.html</code></pre><p>Running <code>tiddlywiki</code> from the command line boots the TiddlyWiki kernel, loads the core plugins and establishes an empty wiki store. It then sequentially processes the command line arguments from left to right. The arguments are separated with spaces.</p><p><a class="tc-tiddlylink tc-tiddlylink-resolves doc-from-version" href="https://tiddlywiki.com/static/Release%25205.1.20.html"><span class="tc-tiny-gap-right"><svg class="tc-image-info-button tc-image-button" height="22pt" viewBox="0 0 128 128" width="22pt"><g fill-rule="evenodd" transform="translate(.05)"><path d="M64 128c35.346 0 64-28.654 64-64 0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64zm0-16c26.51 0 48-21.49 48-48S90.51 16 64 16 16 37.49 16 64s21.49 48 48 48z"></path><circle cx="64" cy="32" r="8"></circle><rect height="56" rx="8" width="16" x="56" y="48"></rect></g></svg></span>Introduced in v5.1.20</a> First, there can be zero or more plugin references identified by the prefix <code>+</code> for plugin names or <code>++</code> for a path to a plugin folder. These plugins are loaded in addition to any specified in the  <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/TiddlyWikiFolders.html">TiddlyWikiFolder</a>.</p><p>The next argument is the optional path to the <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/TiddlyWikiFolders.html">TiddlyWikiFolder</a> to be loaded. If not present, then the current directory is used.</p><p>The commands and their individual arguments follow, each command being identified by the prefix <code>--</code>.</p><pre><code>tiddlywiki [+&lt;pluginname&gt; | ++&lt;pluginpath&gt;] [&lt;wikipath&gt;] [--&lt;command&gt; [&lt;arg&gt;[,&lt;arg&gt;]]]</code></pre><p>For example:</p><pre><code>tiddlywiki --version
tiddlywiki +plugins/tiddlywiki/filesystem +plugins/tiddlywiki/tiddlyweb mywiki --listen
tiddlywiki ++./mygreatplugin mywiki --listen</code></pre><p><a class="tc-tiddlylink tc-tiddlylink-resolves doc-from-version" href="https://tiddlywiki.com/static/Release%25205.1.18.html"><span class="tc-tiny-gap-right"><svg class="tc-image-info-button tc-image-button" height="22pt" viewBox="0 0 128 128" width="22pt"><g fill-rule="evenodd" transform="translate(.05)"><path d="M64 128c35.346 0 64-28.654 64-64 0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64zm0-16c26.51 0 48-21.49 48-48S90.51 16 64 16 16 37.49 16 64s21.49 48 48 48z"></path><circle cx="64" cy="32" r="8"></circle><rect height="56" rx="8" width="16" x="56" y="48"></rect></g></svg></span>Introduced in v5.1.18</a> Commands such as the <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/ListenCommand.html">ListenCommand</a> that support large numbers of parameters can use <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/NamedCommandParameters.html">NamedCommandParameters</a> to make things less unwieldy. For example:</p><pre><code>tiddlywiki wikipath --listen username=jeremy port=8090</code></pre><p>See <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/Commands.html">Commands</a> for a full listing of the available commands.
```

### Лицензия (`addon/doxmlparser/LICENSE`)

```text
Copyright 2021 Dimitri van Heesch
Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
```

### Языки и форматы

| Язык | Файлов | Строк | Комментариев | Доля строк | Плотность коммент. |
|---|---:|---:|---:|---:|---:|
| C | 790 | 405 148 | 95 704 | 31.9% | 23.6% |
| C++ | 508 | 405 006 | 49 622 | 31.8% | 12.3% |
| Markdown/Wikitext | 6 923 | 169 432 | 0 | 13.3% | 0.0% |
| JavaScript | 731 | 128 962 | 15 213 | 10.1% | 11.8% |
| XML | 476 | 70 616 | 42 | 5.6% | 0.1% |
| Python | 50 | 37 252 | 1 814 | 2.9% | 4.9% |
| JSON | 158 | 14 251 | 0 | 1.1% | 0.0% |
| CSS | 47 | 11 953 | 216 | 0.9% | 1.8% |
| TypeScript | 16 | 10 096 | 0 | 0.8% | 0.0% |
| LaTeX | 16 | 7 502 | 0 | 0.6% | 0.0% |
| Text | 65 | 5 995 | 0 | 0.5% | 0.0% |
| CMake | 44 | 2 836 | 742 | 0.2% | 26.2% |
| YAML | 14 | 996 | 33 | 0.1% | 3.3% |
| Shell | 19 | 913 | 212 | 0.1% | 23.2% |
| HTML | 10 | 558 | 88 | 0.0% | 15.8% |
| INI/config | 62 | 404 | 0 | 0.0% | 0.0% |
| VHDL | 2 | 64 | 0 | 0.0% | 0.0% |

## 2. Структура проекта

```text
workspace/
├── BUILD.txt
├── CMakeLists.txt
├── Dockerfile
├── INSTALL
├── LANGUAGE.HOWTO
├── LICENSE
├── PROJECT_DESCRIPTION.md
├── README.md
├── TiddlyWiki5-master/
├── VERSION
├── addon/
├── bin/
├── boot/
├── cmake/
├── code-of-conduct.md
├── community/
├── contributing.md
├── core/
├── core-server/
├── deps/
├── doc/
├── doc_internal/
├── doxygen-master/
├── editions/
├── eslint.config.mjs
├── examples/
├── languages/
├── libversion/
├── libxml/
├── license
├── licenses/
├── package-lock.json
├── package.json
├── playwright.config.js
├── plugins/
├── readme.md
├── src/
├── templates/
├── testing/
├── themes/
├── tiddlywiki.js
├── tools/
└── vhdlparser/
```

### Дерево каталогов (первые уровни)

```text
… (+ ещё 9)
├── TiddlyWiki5-master
│   └── .github
│       ├── ISSUE_TEMPLATE
│       ├── PULL_REQUEST_TEMPLATE
│       └── workflows
├── addon
│   ├── doxmlparser
│   │   ├── doxmlparser
│   │   └── examples
│   ├── doxyapp
│   ├── doxycommentview
│   ├── doxyparse
│   ├── doxypysql
│   ├── doxysearch
│   └── doxywizard
│       ├── i18n
│       └── images
├── bin
├── boot
├── cmake
│   └── Sanitizers
├── community
│   ├── docs
│   ├── people
│   ├── project
│   │   └── teams
│   └── tools
│       ├── cards
│       └── icons
├── core
│   ├── images
│   ├── language
│   │   └── en-GB
│   ├── modules
│   │   ├── editor
│   │   ├── filterrunprefixes
│   │   ├── filters
│   │   ├── indexers
│   │   ├── info
│   │   ├── macros
│   │   ├── parsers
│   │   ├── relinkers
│   │   ├── savers
│   │   ├── startup
│   │   ├── storyviews
│   │   ├── upgraders
│   │   ├── utils
│   │   └── widgets
│   ├── palettes
│   ├── stylesheets
│   ├── templates
│   │   ├── exporters
│   │   ├── external-js
│   │   └── server
│   ├── ui
│   │   … (+ ещё 6)
│   │   ├── AboveStory
│   │   ├── Actions
│   │   ├── AdvancedSearch
│   │   ├── Components
│   │   ├── ControlPanel
│   │   ├── EditTemplate
│   │   ├── EditToolbar
│   │   ├── EditorToolbar
│   │   ├── Filters
│   │   ├── ImportPreviews
│   │   ├── KeyboardShortcuts
│   │   ├── Manager
│   │   ├── MoreSideBar
│   │   ├── PageControls
│   │   ├── PageTemplate
│   │   └── SideBar
│   └── wiki
│       ├── config
│       ├── macros
│       └── tags
├── core-server
│   ├── commands
│   ├── server
│   │   ├── authenticators
│   │   └── routes
│   ├── startup
│   └── utils
├── deps
│   ├── TinyDeflate
│   ├── filesystem
│   ├── fmt
│   │   └── include
│   ├── iconv_winbuild
│   │   ├── include
│   │   ├── x64
│   │   └── x86
│   ├── liblodepng
│   ├── libmd5
│   ├── libmscgen
│   ├── spdlog
│   │   ├── cmake
│   │   ├── include
│   │   └── src
│   ├── sqlite3
│   └── svg
├── doc
├── doc_internal
├── doxygen-master
│   ├── .github
│   │   ├── ISSUE_TEMPLATE
│   │   ├── skills
│   │   └── workflows
│   ├── addon
│   │   ├── doxmlparser
│   │   ├── doxyapp
│   │   ├── doxycommentview
│   │   ├── doxyparse
│   │   ├── doxypysql
│   │   ├── doxysearch
│   │   └── doxywizard
│   ├── cmake
│   │   └── Sanitizers
│   ├── deps
│   │   ├── TinyDeflate
│   │   ├── filesystem
│   │   ├── fmt
│   │   ├── iconv_winbuild
│   │   ├── liblodepng
│   │   ├── libmd5
│   │   ├── libmscgen
│   │   ├── spdlog
│   │   ├── sqlite3
│   │   └── svg
│   ├── doc
│   ├── doc_internal
│   ├── examples
│   ├── libversion
│   ├── libxml
│   ├── src
│   │   └── i18n
│   ├── templates
│   │   ├── general
│   │   ├── html
│   │   ├── icon
│   │   ├── latex
│   │   └── xml
│   ├── testing
│   │   … (+ ещё 113)
│   │   ├── 001
│   │   ├── 002
│   │   ├── 003
│   │   ├── 004
│   │   ├── 005
│   │   ├── 006
│   │   ├── 007
│   │   ├── 008
│   │   ├── 009
│   │   ├── 010
│   │   ├── 011
│   │   ├── 012
│   │   ├── 013
│   │   ├── 014
│   │   ├── 015
│   │   └── 016
│   └── vhdlparser
├── editions
│   … (+ ещё 31)
│   ├── aws
│   │   └── tiddlers
│   ├── classicparserdemo
│   │   └── tiddlers
│   ├── codemirrordemo
│   │   └── tiddlers
│   ├── de-AT
│   │   └── tiddlers
│   ├── de-AT-server
│   │   ├── svg
│   │   └── tiddlers
│   ├── de-DE
│   │   └── tiddlers
│   ├── dev
│   │   └── tiddlers
│   ├── dynaviewdemo
│   │   └── tiddlers
│   ├── empty
│   ├── es-ES
│   │   └── tiddlers
│   ├── es-ES-server
│   │   └── tiddlers
│   ├── fr-FR
│   │   └── tiddlers
│   ├── fr-FR-server
│   │   └── tiddlers
│   ├── full
│   │   └── tiddlers
│   ├── geospatialdemo
│   │   └── tiddlers
│   └── highlightdemo
│       └── tiddlers
├── examples
├── languages
│   … (+ ещё 18)
│   ├── ar-PS
│   │   ├── Docs
│   │   └── Modals
│   ├── ca-ES
│   │   ├── Docs
│   │   ├── Help
│   │   ├── Modals
│   │   ├── Snippets
│   │   └── Types
│   ├── cs-CZ
│   │   ├── Docs
│   │   ├── Modals
│   │   └── Types
│   ├── da-DK
│   │   ├── Docs
│   │   ├── Help
│   │   ├── Modals
│   │   ├── Snippets
│   │   └── Types
│   ├── de-AT
│   ├── de-CH
│   ├── de-DE
│   │   ├── Docs
│   │   ├── Help
│   │   ├── Modals
│   │   ├── Snippets
│   │   └── Types
│   ├── el-GR
│   │   ├── Docs
│   │   ├── Help
│   │   ├── Modals
│   │   ├── Snippets
│   │   └── Types
│   ├── en-PH
│   │   ├── Docs
│   │   └── Modals
│   ├── en-US
│   ├── es-ES
│   │   ├── Docs
│   │   ├── Help
│   │   ├── Modals
│   │   ├── Snippets
│   │   └── Types
│   ├── fa-IR
│   │   ├── Docs
│   │   └── Modals
│   ├── fr-FR
│   │   ├── Docs
│   │   ├── Help
│   │   ├── Modals
│   │   ├── Snippets
│   │   └── Types
│   ├── he-IL
│   │   ├── Docs
│   │   ├── Snippets
│   │   └── Types
│   ├── hi-IN
│   │   ├── Docs
│   │   ├── Help
│   │   ├── Modals
│   │   └── Types
│   └── ia-IA
│       ├── Docs
│       ├── Help
│       ├── Modals
│       └── Types
└── libversion
```

## 3. Каталог файлов по директориям

Каждая верхнеуровневая директория: объём, подкаталоги и распределение расширений.

### `doxygen-master/` — 1 258 файлов, 575 866 строк

> Резервная копия дерева Doxygen

**Расширения:** `.h` (395), `.xml` (238), `.cpp` (204), `.dox` (62), `.c` (40), `.cfg` (31), `.txt` (27), `.md` (26), `.py` (25), `.l` (22), `.cmake` (22), `.css` (16)

| Подкаталог | Файлов | Строк |
|---|---:|---:|
| `doxygen-master/src` | 345 | 328 678 |
| `doxygen-master/deps` | 199 | 109 060 |
| `doxygen-master/vhdlparser` | 21 | 35 519 |
| `doxygen-master/addon` | 73 | 29 545 |
| `doxygen-master/testing` | 389 | 25 567 |
| `doxygen-master/doc` | 56 | 24 504 |
| `doxygen-master/templates` | 43 | 15 225 |
| `doxygen-master/doc_internal` | 9 | 1 892 |
| `doxygen-master/.github` | 12 | 1 367 |
| `doxygen-master/cmake` | 22 | 1 351 |
| `doxygen-master/examples` | 66 | 1 320 |
| `doxygen-master/libxml` | 3 | 646 |
| `doxygen-master/libversion` | 5 | 105 |

### `src/` — 345 файлов, 328 678 строк

> Исходники Doxygen на C++: парсеры языков, генераторы HTML/LaTeX/RTF/XML

**Расширения:** `.h` (201), `.cpp` (107), `.l` (19), `.xml` (9), `.py` (6), `.txt` (1), `.y` (1), `.c` (1)

| Подкаталог | Файлов | Строк |
|---|---:|---:|
| `src/i18n` | 8 | 16 009 |

### `editions/` — 4 875 файлов, 141 360 строк

> Сборки-редакции TiddlyWiki (tw5.com, dev, server, тестовая)

**Расширения:** `.tid` (4 399), `.json` (155), `.meta` (147), `.js` (81), `.info` (47), `.svg` (16), `.multids` (8), `.txt` (8), `.files` (7), `.geojson` (2), `.html` (1), `.sh` (1)

| Подкаталог | Файлов | Строк |
|---|---:|---:|
| `editions/tw5.com` | 2 013 | 53 281 |
| `editions/test` | 329 | 15 417 |
| `editions/ja-JP` | 529 | 14 184 |
| `editions/dynaviewdemo` | 17 | 11 157 |
| `editions/fr-FR` | 435 | 10 882 |
| `editions/tiddlywiki-surveys` | 373 | 8 765 |
| `editions/es-ES` | 285 | 6 537 |
| `editions/dev` | 185 | 6 422 |
| `editions/de-AT` | 192 | 3 349 |
| `editions/de-AT-server` | 4 | 2 839 |
| `editions/resumebuilder` | 69 | 1 426 |
| `editions/geospatialdemo` | 64 | 1 082 |
| `editions/classicparserdemo` | 31 | 921 |
| `editions/markdowndemo` | 10 | 581 |
| `editions/tw.org` | 22 | 550 |
| `editions/introduction` | 38 | 436 |
| `editions/testcommonjs` | 28 | 428 |
| `editions/tour` | 43 | 383 |
| `editions/ko-KR` | 20 | 325 |
| `editions/xlsx-utils` | 31 | 272 |
| `editions/text-slicer` | 9 | 252 |
| `editions/prerelease` | 24 | 239 |
| `editions/katexdemo` | 10 | 236 |
| `editions/translators` | 9 | 201 |
| `editions/codemirrordemo` | 15 | 189 |
| … | ещё 22 подкаталогов | |

### `deps/` — 199 файлов, 109 060 строк

> Вендорные зависимости Doxygen (spdlog, fmt, range-v3)

**Расширения:** `.h` (141), `.c` (20), `.cpp` (8), `.txt` (7), `.md` (4), `.in` (4), `.cmake` (3), `.rst` (2), `.js` (2), `.hpp` (1), `.copying` (1), `.y` (1)

| Подкаталог | Файлов | Строк |
|---|---:|---:|
| `deps/spdlog` | 122 | 28 372 |
| `deps/sqlite3` | 4 | 24 728 |
| `deps/libmscgen` | 41 | 21 205 |
| `deps/fmt` | 16 | 16 115 |
| `deps/svg` | 4 | 7 622 |
| `deps/filesystem` | 1 | 6 141 |
| `deps/liblodepng` | 3 | 2 573 |
| `deps/TinyDeflate` | 2 | 1 792 |
| `deps/libmd5` | 4 | 362 |
| `deps/iconv_winbuild` | 1 | 141 |

### `plugins/` — 976 файлов, 72 324 строк

> Плагины TiddlyWiki (codemirror, markdown, katex, filesystem и др.)

**Расширения:** `.tid` (651), `.js` (212), `.files` (40), `.multids` (16), `.license` (15), `.css` (15), `.md` (5), `.meta` (5), `.map` (4), `.txt` (3), `.json` (2), `.enex` (2)

| Подкаталог | Файлов | Строк |
|---|---:|---:|
| `plugins/tiddlywiki` | 976 | 72 324 |

### `core/` — 1 105 файлов, 52 834 строк

> Ядро TiddlyWiki: вики-движок, парсеры, виджеты, фильтры, синхронизация

**Расширения:** `.tid` (703), `.js` (354), `.multids` (44), `.license` (1), `.md` (1), `.files` (1), `.meta` (1)

| Подкаталог | Файлов | Строк |
|---|---:|---:|
| `core/modules` | 358 | 37 463 |
| `core/ui` | 336 | 7 196 |
| `core/palettes` | 20 | 2 797 |
| `core/wiki` | 151 | 2 201 |
| `core/language` | 70 | 1 723 |
| `core/templates` | 51 | 723 |
| `core/images` | 113 | 586 |
| `core/stylesheets` | 1 | 30 |

### `vhdlparser/` — 21 файлов, 35 519 строк

> Парсер VHDL для Doxygen

**Расширения:** `.h` (11), `.cc` (6), `.txt` (1), `.py` (1), `.jj` (1), `.hpp` (1)

### `languages/` — 1 533 файлов, 34 319 строк

> Локализации интерфейса TiddlyWiki

**Расширения:** `.tid` (1 051), `.multids` (481), `.md` (1)

| Подкаталог | Файлов | Строк |
|---|---:|---:|
| `languages/de-DE` | 70 | 1 786 |
| `languages/ja-JP` | 70 | 1 741 |
| `languages/pl-PL` | 70 | 1 723 |
| `languages/el-GR` | 69 | 1 720 |
| `languages/es-ES` | 70 | 1 717 |
| `languages/fr-FR` | 69 | 1 698 |
| `languages/zh-Hans` | 71 | 1 683 |
| `languages/zh-Hant` | 71 | 1 682 |
| `languages/mk-MK` | 65 | 1 637 |
| `languages/ca-ES` | 63 | 1 499 |
| `languages/nl-NL` | 64 | 1 486 |
| `languages/pt-PT` | 64 | 1 478 |
| `languages/it-IT` | 52 | 1 287 |
| `languages/sl-SI` | 58 | 1 277 |
| `languages/pt-BR` | 57 | 1 230 |
| `languages/ko-KR` | 57 | 1 183 |
| `languages/da-DK` | 57 | 1 175 |
| `languages/sv-SE` | 51 | 946 |
| `languages/sk-SK` | 52 | 909 |
| `languages/ia-IA` | 53 | 890 |
| `languages/hi-IN` | 52 | 886 |
| `languages/he-IL` | 36 | 875 |
| `languages/ar-PS` | 22 | 767 |
| `languages/ru-RU` | 32 | 702 |
| `languages/fa-IR` | 22 | 682 |
| … | ещё 6 подкаталогов | |

### `addon/` — 73 файлов, 29 545 строк

> Дополнительные тиддлеры/модули TiddlyWiki

**Расширения:** `.h` (16), `.cpp` (13), `.py` (9), `.ts` (8), `.txt` (7), `.eps` (5), `.svg` (5), `.md` (3), `.readme` (2), `.1` (1), `.license` (1), `.html` (1)

| Подкаталог | Файлов | Строк |
|---|---:|---:|
| `addon/doxywizard` | 47 | 13 662 |
| `addon/doxmlparser` | 11 | 13 160 |
| `addon/doxysearch` | 3 | 899 |
| `addon/doxyparse` | 4 | 649 |
| `addon/doxyapp` | 3 | 516 |
| `addon/doxypysql` | 1 | 397 |
| `addon/doxycommentview` | 3 | 245 |

### `testing/` — 389 файлов, 25 567 строк

> Тесты Doxygen

**Расширения:** `.xml` (228), `.cpp` (59), `.dox` (30), `.c` (18), `.h` (11), `.md` (9), `.f90` (9), `.f03` (3), `.ent` (3), `.m` (2), `.txt` (2), `.dtd` (2)

| Подкаталог | Файлов | Строк |
|---|---:|---:|
| `testing/dtd` | 5 | 2 754 |
| `testing/076` | 1 | 1 872 |
| `testing/092` | 3 | 890 |
| `testing/120` | 12 | 718 |
| `testing/027` | 4 | 435 |
| `testing/122` | 3 | 411 |
| `testing/009` | 10 | 389 |
| `testing/074` | 2 | 384 |
| `testing/121` | 5 | 372 |
| `testing/090` | 6 | 357 |
| `testing/100` | 5 | 354 |
| `testing/069` | 1 | 309 |
| `testing/070` | 1 | 309 |
| `testing/096` | 8 | 274 |
| `testing/097` | 1 | 274 |
| `testing/095` | 8 | 273 |
| `testing/105` | 2 | 208 |
| `testing/058` | 3 | 198 |
| `testing/054` | 1 | 193 |
| `testing/108` | 2 | 181 |
| `testing/075` | 1 | 177 |
| `testing/011` | 2 | 164 |
| `testing/104` | 3 | 164 |
| `testing/019` | 7 | 146 |
| `testing/018` | 1 | 138 |
| … | ещё 104 подкаталогов | |

### `doc/` — 56 файлов, 24 504 строк

> Документация

**Расширения:** `.dox` (32), `.1` (4), `.eps` (3), `.svg` (2), `.txt` (2), `.css` (2), `.py` (2), `.gitignore` (1), `.doxyfile` (1), `.doxyfile_chm` (1), `.tex` (1), `.dot` (1)

### `templates/` — 43 файлов, 15 225 строк

> Шаблоны вывода документации Doxygen

**Расширения:** `.css` (13), `.js` (12), `.xsd` (4), `.html` (2), `.php` (2), `.sty` (2), `.tex` (2), `.xml` (1), `.pl` (1), `.bst` (1), `.svg` (1), `.txt` (1)

| Подкаталог | Файлов | Строк |
|---|---:|---:|
| `templates/html` | 33 | 10 093 |
| `templates/latex` | 4 | 3 420 |
| `templates/xml` | 4 | 1 440 |
| `templates/general` | 1 | 271 |
| `templates/icon` | 1 | 1 |

### `(корень)/` — 15 файлов, 5 797 строк

> Корневые файлы обоих проектов (package.json, CMakeLists.txt, README)

**Расширения:** `.md` (5), `.txt` (2), `.license` (2), `.js` (2), `.mjs` (1), `.install` (1), `.howto` (1), `.json` (1)

### `themes/` — 18 файлов, 4 525 строк

**Расширения:** `.tid` (13), `.multids` (3), `.meta` (2)

| Подкаталог | Файлов | Строк |
|---|---:|---:|
| `themes/tiddlywiki` | 18 | 4 525 |

### `core-server/` — 48 файлов, 3 429 строк

**Расширения:** `.js` (47), `.tid` (1)

| Подкаталог | Файлов | Строк |
|---|---:|---:|
| `core-server/commands` | 27 | 1 513 |
| `core-server/server` | 13 | 919 |
| `core-server/utils` | 4 | 213 |
| `core-server/startup` | 1 | 32 |

### `boot/` — 5 файлов, 3 087 строк

> Загрузчик TiddlyWiki (boot.js)

**Расширения:** `.js` (3), `.tid` (1), `.files` (1)

### `doc_internal/` — 9 файлов, 1 892 строк

> Внутренняя документация разработчиков

**Расширения:** `.md` (5), `.txt` (1), `.py` (1), `.css` (1), `.in` (1)

### `cmake/` — 22 файлов, 1 351 строк

> Модули сборки CMake

**Расширения:** `.cmake` (19), `.manifest` (1), `.py` (1), `.asan-wrapper` (1)

| Подкаталог | Файлов | Строк |
|---|---:|---:|
| `cmake/Sanitizers` | 7 | 553 |

### `examples/` — 66 файлов, 1 320 строк

> Примеры

**Расширения:** `.cfg` (31), `.cpp` (16), `.h` (13), `.py` (3), `.txt` (1), `.c` (1), `.vhdl` (1)

### `bin/` — 24 файлов, 1 113 строк

> Служебные скрипты

**Расширения:** `.sh` (16), `.cmd` (5), `.get-plugin-library-version-number` (1), `.js` (1), `.md` (1)

### `tools/` — 2 файлов, 1 084 строк

> Инструмент интеграции — Project Describer

**Расширения:** `.js` (2)

| Подкаталог | Файлов | Строк |
|---|---:|---:|
| `tools/project-describer` | 2 | 1 084 |

### `licenses/` — 2 файлов, 772 строк

**Расширения:** `.md` (2)

### `community/` — 37 файлов, 760 строк

> Материалы сообщества

**Расширения:** `.tid` (35), `.md` (1), `.multids` (1)

| Подкаталог | Файлов | Строк |
|---|---:|---:|
| `community/tools` | 9 | 376 |
| `community/people` | 10 | 161 |
| `community/project` | 13 | 142 |
| `community/docs` | 4 | 78 |

### `libxml/` — 3 файлов, 646 строк

> Обёртка libxml для Doxygen

**Расширения:** `.txt` (1), `.h` (1), `.l` (1)

### `TiddlyWiki5-master/` — 15 файлов, 517 строк

> Резервная копия дерева TiddlyWiki5

**Расширения:** `.yml` (8), `.md` (3), `.gitattributes` (1), `.gitignore` (1), `.jshintignore` (1), `.npmignore` (1)

| Подкаталог | Файлов | Строк |
|---|---:|---:|
| `TiddlyWiki5-master/.github` | 11 | 478 |

### `libversion/` — 5 файлов, 105 строк

> Модуль версионирования Doxygen

**Расширения:** `.in` (2), `.txt` (1), `.cpp` (1), `.h` (1)

## 4. Модули и пакеты

### Верхнеуровневые компоненты

| Каталог | Файлов | Строк | Назначение |
|---|---:|---:|---|
| `doxygen-master` | 1 258 | 575 866 | Резервная копия дерева Doxygen |
| `src` | 345 | 328 678 | Исходники Doxygen на C++: парсеры языков, генераторы HTML/LaTeX/RTF/XML |
| `editions` | 4 875 | 141 360 | Сборки-редакции TiddlyWiki (tw5.com, dev, server, тестовая) |
| `deps` | 199 | 109 060 | Вендорные зависимости Doxygen (spdlog, fmt, range-v3) |
| `plugins` | 976 | 72 324 | Плагины TiddlyWiki (codemirror, markdown, katex, filesystem и др.) |
| `core` | 1 105 | 52 834 | Ядро TiddlyWiki: вики-движок, парсеры, виджеты, фильтры, синхронизация |
| `vhdlparser` | 21 | 35 519 | Парсер VHDL для Doxygen |
| `languages` | 1 533 | 34 319 | Локализации интерфейса TiddlyWiki |
| `addon` | 73 | 29 545 | Дополнительные тиддлеры/модули TiddlyWiki |
| `testing` | 389 | 25 567 | Тесты Doxygen |
| `doc` | 56 | 24 504 | Документация |
| `templates` | 43 | 15 225 | Шаблоны вывода документации Doxygen |
| `(корень)` | 15 | 5 797 | Корневые файлы обоих проектов (package.json, CMakeLists.txt, README) |
| `themes` | 18 | 4 525 | — |
| `core-server` | 48 | 3 429 | — |
| `boot` | 5 | 3 087 | Загрузчик TiddlyWiki (boot.js) |
| `doc_internal` | 9 | 1 892 | Внутренняя документация разработчиков |
| `cmake` | 22 | 1 351 | Модули сборки CMake |
| `examples` | 66 | 1 320 | Примеры |
| `bin` | 24 | 1 113 | Служебные скрипты |
| `tools` | 2 | 1 084 | Инструмент интеграции — Project Describer |
| `licenses` | 2 | 772 | — |
| `community` | 37 | 760 | Материалы сообщества |
| `libxml` | 3 | 646 | Обёртка libxml для Doxygen |
| `TiddlyWiki5-master` | 15 | 517 | Резервная копия дерева TiddlyWiki5 |
| `libversion` | 5 | 105 | Модуль версионирования Doxygen |

### Подпроекты с собственным `package.json`

| Путь | Название | Версия | Описание |
|---|---|---|---|
| `core/plugin.info` | `Core` | `—` | TiddlyWiki5 core |
| `core-server/plugin.info` | `Core Server Components` | `—` | TiddlyWiki5 core server components |
| `editions/introduction/themes/hidefurniture/plugin.info` | `Hide Furniture` | `—` | Hides the normal user interface, presentational |
| `editions/ja-JP/tiddlers/saving/Example package.json for IIS.txt` | `MyStuff` | `—` | A description of this wiki |
| `editions/tw5.com/tiddlers/saving/Example package.json for IIS.txt` | `MyStuff` | `—` | A description of this wiki |
| `languages/ar-PS/plugin.info` | `ar-PS` | `—` | العربية (فلسطين) |
| `languages/ca-ES/plugin.info` | `ca-ES` | `—` | Català (Espanya) |
| `languages/cs-CZ/plugin.info` | `cs-CZ` | `—` | Čeština (Česká republika) |
| `languages/da-DK/plugin.info` | `da-DK` | `—` | Dansk (Danmark) |
| `languages/de-AT/plugin.info` | `de-AT` | `—` | Deutsch (Österreich) |
| `languages/de-CH/plugin.info` | `de-CH` | `—` | Deutsch (Schweiz) |
| `languages/de-DE/plugin.info` | `de-DE` | `—` | Deutsch (Deutschland) |
| `languages/el-GR/plugin.info` | `el-GR` | `—` | Ελληνικά (Ελλάδα) |
| `languages/en-PH/plugin.info` | `en-PH` | `—` | English (Philippines) |
| `languages/en-US/plugin.info` | `en-US` | `—` | English (US) |
| `languages/es-ES/plugin.info` | `es-ES` | `—` | Castellano. (España) |
| `languages/fa-IR/plugin.info` | `fa-IR` | `—` | فارسی (ایران) |
| `languages/fr-FR/plugin.info` | `fr-FR` | `—` | Français (France) |
| `languages/he-IL/plugin.info` | `he-IL` | `—` | עברית (ישראל) |
| `languages/hi-IN/plugin.info` | `hi-IN` | `—` | हिन्दी (भारत) |
| `languages/ia-IA/plugin.info` | `ia-IA` | `—` | Interlingua (Interlingua) |
| `languages/it-IT/plugin.info` | `it-IT` | `—` | Italiano (Italia) |
| `languages/ja-JP/plugin.info` | `ja-JP` | `—` | 日本語 (日本) |
| `languages/ko-KR/plugin.info` | `ko-KR` | `—` | 한국어 (대한민국) |
| `languages/mk-MK/plugin.info` | `mk-MK` | `—` | Македонски (Македонија) |
| `languages/nl-NL/plugin.info` | `nl-NL` | `—` | Nederlands (Nederland) |
| `languages/pa-IN/plugin.info` | `pa-IN` | `—` | ਪੰਜਾਬੀ (ਭਾਰਤ) |
| `languages/pl-PL/plugin.info` | `pl-PL` | `—` | Polski (Polska) |
| `languages/pt-BR/plugin.info` | `pt-BR` | `—` | Português (Brasil) |
| `languages/pt-PT/plugin.info` | `pt-PT` | `—` | Português (Portugal) |
| `languages/ru-RU/plugin.info` | `ru-RU` | `—` | Русский (Россия) |
| `languages/sk-SK/plugin.info` | `sk-SK` | `—` | Slovenčina (Slovensko) |
| `languages/sl-SI/plugin.info` | `sl-SI` | `—` | Slovenščina (Slovenija) |
| `languages/sv-SE/plugin.info` | `sv-SE` | `—` | Svenska (Sverige) |
| `languages/zh-CN/plugin.info` | `zh-CN` | `—` | 简体中文 (中国) |
| `languages/zh-Hans/plugin.info` | `zh-Hans` | `—` | 简体中文 |
| `languages/zh-Hant/plugin.info` | `zh-Hant` | `—` | 繁體中文 |
| `languages/zh-HK/plugin.info` | `zh-HK` | `—` | 繁體中文 (香港) |
| `languages/zh-TW/plugin.info` | `zh-TW` | `—` | 繁體中文 (台灣) |
| `package-lock.json` | `tiddlywiki` | `5.5.0-prerelease` | — |
| `plugins/tiddlywiki/async/plugin.info` | `Async` | `—` | async.js library |
| `plugins/tiddlywiki/aws/plugin.info` | `AWS` | `—` | Amazon Web Services extensions and tools |
| `plugins/tiddlywiki/bibtex/plugin.info` | `BibTeX` | `—` | BibTeX importer |
| `plugins/tiddlywiki/browser-sniff/plugin.info` | `Browser Sniff` | `—` | Browser feature detection |
| `plugins/tiddlywiki/browser-storage/plugin.info` | `Browser Storage` | `—` | Local storage in the browser |
| `plugins/tiddlywiki/classictools/plugin.info` | `Classic Tools` | `—` | TiddlyWiki Classic tools |
| `plugins/tiddlywiki/codemirror/plugin.info` | `CodeMirror` | `—` | CodeMirror editor |
| `plugins/tiddlywiki/codemirror-autocomplete/plugin.info` | `CodeMirror Autocomplete` | `—` | Autocompletion for CodeMirror |
| `plugins/tiddlywiki/codemirror-closebrackets/plugin.info` | `CodeMirror Close Brackets` | `—` | Close brackets for CodeMirror |
| `plugins/tiddlywiki/codemirror-closetag/plugin.info` | `CodeMirror Close Tag` | `—` | Close tags automatically for CodeMirror |
| `plugins/tiddlywiki/codemirror-fullscreen-editing/plugin.info` | `CodeMirror Fullscreen` | `—` | Fullscreen editing for CodeMirror |
| `plugins/tiddlywiki/codemirror-keymap-emacs/plugin.info` | `CodeMirror Keymap Emacs` | `—` | Keymap compatible with Emacs for CodeMirror |
| `plugins/tiddlywiki/codemirror-keymap-sublime-text/plugin.info` | `CodeMirror Keymap Sublime Text` | `—` | Keymap compatible with Sublime Text for CodeMirror |
| `plugins/tiddlywiki/codemirror-keymap-vim/plugin.info` | `CodeMirror Keymap Vim` | `—` | Keymap compatible with Vim for CodeMirror |
| `plugins/tiddlywiki/codemirror-mode-css/plugin.info` | `CodeMirror Mode CSS` | `—` | CSS highlighting mode for CodeMirror |
| `plugins/tiddlywiki/codemirror-mode-htmlembedded/plugin.info` | `CodeMirror Mode HTML Embedded` | `—` | Embedded HTML highlighting mode for CodeMirror |
| `plugins/tiddlywiki/codemirror-mode-htmlmixed/plugin.info` | `CodeMirror Mode HTML Mixed` | `—` | HTML mixed highlighting mode for CodeMirror |
| `plugins/tiddlywiki/codemirror-mode-javascript/plugin.info` | `CodeMirror Mode JavaScript` | `—` | JavaScript highlighting mode for CodeMirror |
| `plugins/tiddlywiki/codemirror-mode-markdown/plugin.info` | `CodeMirror Mode Markdown` | `—` | Markdown highlighting mode for CodeMirror |
| `plugins/tiddlywiki/codemirror-mode-x-tiddlywiki/plugin.info` | `CodeMirror Mode TiddlyWiki Classic` | `—` | Tiddlywiki Classic highlighting mode for CodeMirror |

… и ещё 56 подпроектов.

## 5. Плагины TiddlyWiki (полный каталог)

Всего плагинов: **113**. Каждый описан файлом `plugin.info`.

| Название | Title | Тип | Платформа | Зависимости | Описание |
|---|---|---|---|---|---|
| `Core` | `$:/core` | — | — | — | TiddlyWiki5 core |
| `Core Server Components` | `$:/core-server` | — | server | — | TiddlyWiki5 core server components |
| `Hide Furniture` | `$:/themes/tiddlywiki/hidefurniture` | — | — | $:/themes/tiddlywiki/centralised | Hides the normal user interface, presentational |
| `ar-PS` | `$:/languages/ar-PS` | — | — | — | العربية (فلسطين) |
| `ca-ES` | `$:/languages/ca-ES` | — | — | — | Català (Espanya) |
| `cs-CZ` | `$:/languages/cs-CZ` | — | — | — | Čeština (Česká republika) |
| `da-DK` | `$:/languages/da-DK` | — | — | — | Dansk (Danmark) |
| `de-AT` | `$:/languages/de-AT` | — | — | $:/languages/de-DE | Deutsch (Österreich) |
| `de-CH` | `$:/languages/de-CH` | — | — | $:/languages/de-DE | Deutsch (Schweiz) |
| `de-DE` | `$:/languages/de-DE` | — | — | — | Deutsch (Deutschland) |
| `el-GR` | `$:/languages/el-GR` | — | — | — | Ελληνικά (Ελλάδα) |
| `en-PH` | `$:/languages/en-PH` | — | — | — | English (Philippines) |
| `en-US` | `$:/languages/en-US` | — | — | $:/languages/en-GB | English (US) |
| `es-ES` | `$:/languages/es-ES` | — | — | — | Castellano. (España) |
| `fa-IR` | `$:/languages/fa-IR` | — | — | — | فارسی (ایران) |
| `fr-FR` | `$:/languages/fr-FR` | — | — | — | Français (France) |
| `he-IL` | `$:/languages/he-IL` | — | — | — | עברית (ישראל) |
| `hi-IN` | `$:/languages/hi-IN` | — | — | — | हिन्दी (भारत) |
| `ia-IA` | `$:/languages/ia-IA` | — | — | — | Interlingua (Interlingua) |
| `it-IT` | `$:/languages/it-IT` | — | — | — | Italiano (Italia) |
| `ja-JP` | `$:/languages/ja-JP` | — | — | — | 日本語 (日本) |
| `ko-KR` | `$:/languages/ko-KR` | — | — | — | 한국어 (대한민국) |
| `mk-MK` | `$:/languages/mk-MK` | — | — | — | Македонски (Македонија) |
| `nl-NL` | `$:/languages/nl-NL` | — | — | — | Nederlands (Nederland) |
| `pa-IN` | `$:/languages/pa-IN` | — | — | — | ਪੰਜਾਬੀ (ਭਾਰਤ) |
| `pl-PL` | `$:/languages/pl-PL` | — | — | — | Polski (Polska) |
| `pt-BR` | `$:/languages/pt-BR` | — | — | — | Português (Brasil) |
| `pt-PT` | `$:/languages/pt-PT` | — | — | — | Português (Portugal) |
| `ru-RU` | `$:/languages/ru-RU` | — | — | — | Русский (Россия) |
| `sk-SK` | `$:/languages/sk-SK` | — | — | — | Slovenčina (Slovensko) |
| `sl-SI` | `$:/languages/sl-SI` | — | — | — | Slovenščina (Slovenija) |
| `sv-SE` | `$:/languages/sv-SE` | — | — | — | Svenska (Sverige) |
| `zh-CN` | `$:/languages/zh-CN` | — | — | $:/languages/zh-Hans | 简体中文 (中国) |
| `zh-Hans` | `$:/languages/zh-Hans` | — | — | — | 简体中文 |
| `zh-Hant` | `$:/languages/zh-Hant` | — | — | — | 繁體中文 |
| `zh-HK` | `$:/languages/zh-HK` | — | — | $:/languages/zh-Hant | 繁體中文 (香港) |
| `zh-TW` | `$:/languages/zh-TW` | — | — | $:/languages/zh-Hant | 繁體中文 (台灣) |
| `Async` | `$:/plugins/tiddlywiki/async` | — | — | — | async.js library |
| `AWS` | `$:/plugins/tiddlywiki/aws` | — | — | $:/plugins/tiddlywiki/async, $:/plugins/tiddlywiki/jszip | Amazon Web Services extensions and tools |
| `BibTeX` | `$:/plugins/tiddlywiki/bibtex` | — | — | — | BibTeX importer |
| `Browser Sniff` | `$:/plugins/tiddlywiki/browser-sniff` | — | — | — | Browser feature detection |
| `Browser Storage` | `$:/plugins/tiddlywiki/browser-storage` | — | — | — | Local storage in the browser |
| `Classic Tools` | `$:/plugins/tiddlywiki/classictools` | — | — | — | TiddlyWiki Classic tools |
| `CodeMirror` | `$:/plugins/tiddlywiki/codemirror` | — | — | — | CodeMirror editor |
| `CodeMirror Autocomplete` | `$:/plugins/tiddlywiki/codemirror-autocomplete` | — | — | $:/plugins/tiddlywiki/codemirror-mode-css | Autocompletion for CodeMirror |
| `CodeMirror Close Brackets` | `$:/plugins/tiddlywiki/codemirror-closebrackets` | — | — | — | Close brackets for CodeMirror |
| `CodeMirror Close Tag` | `$:/plugins/tiddlywiki/codemirror-closetag` | — | — | — | Close tags automatically for CodeMirror |
| `CodeMirror Fullscreen` | `$:/plugins/tiddlywiki/codemirror-fullscreen` | — | — | — | Fullscreen editing for CodeMirror |
| `CodeMirror Keymap Emacs` | `$:/plugins/tiddlywiki/codemirror-keymap-emacs` | — | — | — | Keymap compatible with Emacs for CodeMirror |
| `CodeMirror Keymap Sublime Text` | `$:/plugins/tiddlywiki/codemirror-keymap-sublime-text` | — | — | $:/plugins/tiddlywiki/codemirror-search-replace, $:/plugins/ | Keymap compatible with Sublime Text for CodeMirror |
| `CodeMirror Keymap Vim` | `$:/plugins/tiddlywiki/codemirror-keymap-vim` | — | — | $:/plugins/tiddlywiki/codemirror-search-replace, $:/plugins/ | Keymap compatible with Vim for CodeMirror |
| `CodeMirror Mode CSS` | `$:/plugins/tiddlywiki/codemirror-mode-css` | — | — | — | CSS highlighting mode for CodeMirror |
| `CodeMirror Mode HTML Embedded` | `$:/plugins/tiddlywiki/codemirror-mode-htmlembedded` | — | — | $:/plugins/tiddlywiki/codemirror-mode-htmlmixed, $:/plugins/ | Embedded HTML highlighting mode for CodeMirror |
| `CodeMirror Mode HTML Mixed` | `$:/plugins/tiddlywiki/codemirror-mode-htmlmixed` | — | — | $:/plugins/tiddlywiki/codemirror-mode-xml, $:/plugins/tiddly | HTML mixed highlighting mode for CodeMirror |
| `CodeMirror Mode JavaScript` | `$:/plugins/tiddlywiki/codemirror-mode-javascript` | — | — | — | JavaScript highlighting mode for CodeMirror |
| `CodeMirror Mode Markdown` | `$:/plugins/tiddlywiki/codemirror-mode-markdown` | — | — | $:/plugins/tiddlywiki/codemirror-mode-xml | Markdown highlighting mode for CodeMirror |
| `CodeMirror Mode TiddlyWiki Classic` | `$:/plugins/tiddlywiki/codemirror-mode-x-tiddlywiki` | — | — | — | Tiddlywiki Classic highlighting mode for CodeMirror |
| `CodeMirror Mode XML` | `$:/plugins/tiddlywiki/codemirror-mode-xml` | — | — | — | XML highlighting mode for CodeMirror |
| `CodeMirror Search and Replace` | `$:/plugins/tiddlywiki/codemirror-search-replace` | — | — | — | Search and replace for CodeMirror |
| `CodeMirror Show Trailing Space` | `$:/plugins/tiddlywiki/codemirror-trailingspace` | — | — | — | Show trailing space in CodeMirror |
| `Comments` | `$:/plugins/tiddlywiki/comments` | — | — | — | Threaded tiddler comments |
| `Confetti` | `$:/plugins/tiddlywiki/confetti` | — | — | — | Animated confetti effect |
| `Consent Banner` | `$:/plugins/tiddlywiki/consent-banner` | — | — | — | Consent banner for GDPR etc |
| `Dom-to-image` | `$:/plugins/tiddlywiki/dom-to-image` | — | — | — | Save DOM nodes as images |
| `Dynannotate` | `$:/plugins/tiddlywiki/dynannotate` | — | — | $:/plugins/tiddlywiki/dynaview | Dynamic content annotation |
| `Dynaview` | `$:/plugins/tiddlywiki/dynaview` | — | — | — | Dynamic scrolling and zooming effects |
| `Evernote` | `$:/plugins/tiddlywiki/evernote` | — | — | — | Evernote migration tools |
| `External Attachments` | `$:/plugins/tiddlywiki/external-attachments` | — | — | — | External attachments for TiddlyDesktop |
| `Filesystem` | `$:/plugins/tiddlywiki/filesystem` | — | server | — | Synchronize changes from the node.js server to the local filesystem |
| `Freelinks` | `$:/plugins/tiddlywiki/freelinks` | — | — | — | Freelinking of tiddler titles |
| `Geospatial Utilities` | `$:/plugins/tiddlywiki/geospatial` | — | — | — | Geospatial utilities |
| `GitHub Fork Ribbon` | `$:/plugins/tiddlywiki/github-fork-ribbon` | — | — | — | GitHub-inspired corner ribbon |
| `Google Analytics` | `$:/plugins/tiddlywiki/googleanalytics` | — | — | — | Website visitor statistics from Google |
| `Help` | `$:/plugins/tiddlywiki/help` | — | — | — | Floating help panel |
| `Highlight` | `$:/plugins/tiddlywiki/highlight` | — | — | — | Highlight.js syntax highlighting |
| `Innerwiki` | `$:/plugins/tiddlywiki/innerwiki` | — | — | — | Innerwikis for screenshots and hacking |
| `Internals` | `$:/plugins/tiddlywiki/internals` | — | — | — | Tools for exploring the internals of TiddlyWiki |
| `Jasmine` | `$:/plugins/tiddlywiki/jasmine` | — | — | — | Jasmine testing framework |
| `JSZip` | `$:/plugins/tiddlywiki/jszip` | — | — | — | JSZip library |
| `KaTeX` | `$:/plugins/tiddlywiki/katex` | — | — | — | KaTeX library for mathematical typography |
| `Markdown` | `$:/plugins/tiddlywiki/markdown` | — | — | — | Markdown parser based on markdown-it |
| `Markdown (Legacy)` | `$:/plugins/tiddlywiki/markdown-legacy` | — | — | — | Markdown parser based on remarkable by Jon Schlinkert and remarkable-katex by Brad Howes |
| `Menu Bar` | `$:/plugins/tiddlywiki/menubar` | — | — | — | Menu Bar |
| `Plugin Library` | `$:/plugins/tiddlywiki/pluginlibrary` | — | — | — | Plugin library builder |
| `Powered By TiddlyWiki` | `$:/plugins/tiddlywiki/powered-by-tiddlywiki` | — | — | — | Powered by TiddlyWiki banner |
| `Project Describer` | `$:/plugins/tiddlywiki/project-describer` | plugin | — | $:/plugins/tiddlywiki/filesystem | Полное описание проекта по анализу всех файлов и структур (интеграция TiddlyWiki5 + Doxygen) |
| `QR Code` | `$:/plugins/tiddlywiki/qrcode` | — | — | — | QR Code generator |
| `Railroad` | `$:/plugins/tiddlywiki/railroad` | — | — | — | Railroad diagram generator |
| `Save Trail` | `$:/plugins/tiddlywiki/savetrail` | — | — | — | Automatically download modified tiddlers |
| `sax js` | `$:/plugins/tiddlywiki/sax` | — | — | — | sax.js library |
| `Share` | `$:/plugins/tiddlywiki/share` | — | — | — | Sharing tiddlers via URLs |
| `Stacked View` | `$:/plugins/tiddlywiki/stacked-view` | — | — | — | Stacked card storyview |
| `Text Slicer` | `$:/plugins/tiddlywiki/text-slicer` | — | — | $:/plugins/tiddlywiki/sax | Tools for slicing text into tiddlers |
| `TiddlyWeb` | `$:/plugins/tiddlywiki/tiddlyweb` | — | — | — | Sync changes from the browser to TW5 (node.js) or TiddlyWeb server |
| `Tour` | `$:/plugins/tiddlywiki/tour` | — | — | $:/plugins/tiddlywiki/confetti, $:/plugins/tiddlywiki/dynann | A tour of TiddlyWiki |
| `Translators` | `$:/plugins/tiddlywiki/translators` | — | — | — | Translation editing tools |
| `TW2 Parser` | `$:/plugins/tiddlywiki/tw2parser` | — | — | — | TiddlyWiki Classic parser |
| `TW5.com Docs` | `$:/plugins/tiddlywiki/tw5.com-docs` | — | — | — | Documentation from tiddlywiki.com |
| `Twitter` | `$:/plugins/tiddlywiki/twitter` | — | — | — | Twitter embedding tools |
| `Twitter Archivist` | `$:/plugins/tiddlywiki/twitter-archivist` | — | — | — | Twitter archiving tools |
| `Upgrade` | `$:/plugins/tiddlywiki/upgrade` | — | — | — | Upgrade system for TiddlyWiki versions |
| `WikitextSerialize` | `$:/plugins/tiddlywiki/wikitext-serialize` | — | — | — | Serialize wikitext abstract syntax tree back to wikitext format |
| `XLSX Utils` | `$:/plugins/tiddlywiki/xlsx-utils` | — | — | $:/plugins/tiddlywiki/jszip | XLSX spreadsheet utilities |
| `xmldom` | `$:/plugins/tiddlywiki/xmldom` | — | — | — | xmldom library |
| `Centralised` | `$:/themes/tiddlywiki/centralised` | — | — | $:/themes/tiddlywiki/snowwhite | Centralises the story river |
| `Heavier` | `$:/themes/tiddlywiki/heavier` | — | — | $:/themes/tiddlywiki/snowwhite | Heavier font theme |
| `ReadOnly` | `$:/themes/tiddlywiki/readonly` | — | — | $:/themes/tiddlywiki/snowwhite | Hides the ability to edit tiddlers |
| `Seamless` | `$:/themes/tiddlywiki/seamless` | — | — | $:/themes/tiddlywiki/vanilla | Removes borders from tiddlers |
| `Snow White` | `$:/themes/tiddlywiki/snowwhite` | — | — | $:/themes/tiddlywiki/vanilla | Emphasises individual tiddlers |
| `Starlight` | `$:/themes/tiddlywiki/starlight` | — | — | $:/themes/tiddlywiki/snowwhite | Example alternative theme |
| `Tight` | `$:/themes/tiddlywiki/tight` | — | — | $:/themes/tiddlywiki/vanilla | Tightly packed theme |
| `Tight and Heavier` | `$:/themes/tiddlywiki/tight-heavier` | — | — | $:/themes/tiddlywiki/tight, $:/themes/tiddlywiki/heavier | Tight and Heavier font theme |
| `Vanilla` | `$:/themes/tiddlywiki/vanilla` | — | — | — | Basic theme |

## 6. Зависимости

**Dev-зависимости npm:**

| Пакет | Версия |
|---|---|
| `@eslint/js` | `9.36.0` |
| `eslint` | `9.36.0` |
| `eslint-plugin-es-x` | `9.1.0` |
| `@stylistic/eslint-plugin` | `5.4.0` |
| `globals` | `16.4.0` |

**CMake `find_package`:** `LLVM`, `Clang`, `fmt`, `spdlog`, `SQLite3`, `Python`, `FLEX`, `BISON`, `Threads`, `Sanitizers`, `Iconv`, `HTMLHelp`, `generateDS`
**CMake подпроекты (`add_subdirectory`):** `deps`, `libversion`, `libxml`, `vhdlparser`, `src`, `doc`, `examples`, `doc_internal`, `addon`, `testing`

## 7. Сборочная система CMake

### Цели сборки (`add_executable` / `add_library`)

| Цель | Тип | Каталог |
|---|---|---|
| `doxyapp` | исполняемая | `addon/doxyapp` |
| `doxyparse` | исполняемая | `addon/doxyparse` |
| `uuid` | библиотека | `addon/doxysearch` |
| `doxyindexer` | исполняемая | `addon/doxysearch` |
| `doxysearch` | исполняемая | `addon/doxysearch` |
| `doxywizard` | исполняемая | `addon/doxywizard` |
| `lodepng` | библиотека | `deps/liblodepng` |
| `md5` | библиотека | `deps/libmd5` |
| `mscgen` | библиотека | `deps/libmscgen` |
| `spdlog` | библиотека | `deps/spdlog` |
| `spdlog` | библиотека | `deps/spdlog` |
| `spdlog` | библиотека | `deps/spdlog` |
| `spdlog_header_only` | библиотека | `deps/spdlog` |
| `spdlog` | библиотека | `deps/spdlog` |
| `sqlite3` | библиотека | `deps/sqlite3` |
| `doxyapp` | исполняемая | `doxygen-master/addon/doxyapp` |
| `doxyparse` | исполняемая | `doxygen-master/addon/doxyparse` |
| `uuid` | библиотека | `doxygen-master/addon/doxysearch` |
| `doxyindexer` | исполняемая | `doxygen-master/addon/doxysearch` |
| `doxysearch` | исполняемая | `doxygen-master/addon/doxysearch` |
| `doxywizard` | исполняемая | `doxygen-master/addon/doxywizard` |
| `lodepng` | библиотека | `doxygen-master/deps/liblodepng` |
| `md5` | библиотека | `doxygen-master/deps/libmd5` |
| `mscgen` | библиотека | `doxygen-master/deps/libmscgen` |
| `spdlog` | библиотека | `doxygen-master/deps/spdlog` |
| `spdlog` | библиотека | `doxygen-master/deps/spdlog` |
| `spdlog` | библиотека | `doxygen-master/deps/spdlog` |
| `spdlog_header_only` | библиотека | `doxygen-master/deps/spdlog` |
| `spdlog` | библиотека | `doxygen-master/deps/spdlog` |
| `sqlite3` | библиотека | `doxygen-master/deps/sqlite3` |
| `doxygen_version` | библиотека | `doxygen-master/libversion` |
| `xml` | библиотека | `doxygen-master/libxml` |
| `doxycfg` | библиотека | `doxygen-master/src` |
| `doxymain` | библиотека | `doxygen-master/src` |
| `doxymain` | библиотека | `doxygen-master/src` |
| `doxygen` | исполняемая | `doxygen-master/src` |
| `vhdlparser` | библиотека | `doxygen-master/vhdlparser` |
| `doxygen_version` | библиотека | `libversion` |
| `xml` | библиотека | `libxml` |
| `doxycfg` | библиотека | `src` |
| `doxymain` | библиотека | `src` |
| `doxymain` | библиотека | `src` |
| `doxygen` | исполняемая | `src` |
| `vhdlparser` | библиотека | `vhdlparser` |

### Опции компиляции (`option`)

- `build_wizard` — Build the GUI frontend for doxygen.
- `build_app` — Example showing how to embed doxygen in an application.
- `build_parse` — Parses source code and dumps the dependencies between the code elements.
- `build_search` — Build external search tools (doxysearch and doxyindexer)
- `build_doc` — Build user manual (HTML and PDF)
- `build_doc_chm` — Build user manual (CHM)
- `use_libclang` — Add support for libclang parsing.
- `use_sys_spdlog` — Use system spdlog library instead of the one bundled.
- `use_sys_fmt` — Use system fmt library instead of the one bundled.
- `use_sys_sqlite3` — Use system sqlite3 library instead of the one bundled.
- `static_libclang` — Link to a statically compiled version of LLVM/libclang.
- `static_libxapian` — Link to a statically compiled version of libxapian.
- `win_static` — Link with /MT in stead of /MD on windows
- `enable_console` — Enable that executables on Windows get the CONSOLE bit set for the doxywizard executable [development]
- `enable_coverage` — Enable coverage reporting for gcc/clang [development]
- `enable_tracing` — Enable tracing option in release builds [development]
- `enable_lex_debug` — Enable debugging info for lexical scanners in release builds [development]
- `SPDLOG_BUILD_ALL` — Build all artifacts
- `SPDLOG_BUILD_SHARED` — Build shared library
- `SPDLOG_ENABLE_PCH` — Build static or shared library using precompiled header to speed up compilation time
- `SPDLOG_BUILD_PIC` — Build position independent code (-fPIC)
- `SPDLOG_BUILD_EXAMPLE` — Build example
- `SPDLOG_BUILD_EXAMPLE_HO` — Build header only example
- `SPDLOG_BUILD_TESTS` — Build tests
- `SPDLOG_BUILD_TESTS_HO` — Build tests using the header only version
- `SPDLOG_BUILD_BENCH` — Build benchmarks (Requires https://github.com/google/benchmark.git to be installed)
- `SPDLOG_SANITIZE_ADDRESS` — Enable address sanitizer in tests
- `SPDLOG_SANITIZE_THREAD` — Enable thread sanitizer in tests
- `SPDLOG_BUILD_WARNINGS` — Enable compiler warnings
- `SPDLOG_SYSTEM_INCLUDES` — Include as system headers (skip for clang-tidy).
- `SPDLOG_INSTALL` — Generate the install target
- `SPDLOG_USE_STD_FORMAT` — Use std::format instead of fmt library.
- `SPDLOG_FMT_EXTERNAL` — Use external fmt library instead of bundled
- `SPDLOG_FMT_EXTERNAL_HO` — Use external fmt header-only library instead of bundled
- `SPDLOG_NO_EXCEPTIONS` — Compile with -fno-exceptions. Call abort() on any spdlog exceptions
- `SPDLOG_WCHAR_SUPPORT` — Support wchar api
- `SPDLOG_WCHAR_FILENAMES` — Support wchar filenames
- `SPDLOG_WCHAR_CONSOLE` — Support wchar output to console
- `SPDLOG_MSVC_UTF8` — Enable/disable msvc /utf-8 flag required by fmt lib
- `SPDLOG_CLOCK_COARSE` — Use CLOCK_REALTIME_COARSE instead of the regular clock,
- `SPDLOG_PREVENT_CHILD_FD` — Prevent from child processes to inherit log file descriptors
- `SPDLOG_NO_THREAD_ID` — prevent spdlog from querying the thread id on each log call if thread id is not needed
- `SPDLOG_NO_TLS` — prevent spdlog from using thread local storage
- `SPDLOG_NO_ATOMIC_LEVELS` — prevent spdlog from using of std::atomic log levels (use only if your code never modifies log levels concurrently
- `SPDLOG_DISABLE_DEFAULT_LOGGER` — Disable default logger creation
- `SPDLOG_FWRITE_UNLOCKED` — Use the unlocked variant of fwrite. Leave this on unless your libc doesn't have it
- `SPDLOG_TIDY` — run clang-tidy
- `build_wizard` — Build the GUI frontend for doxygen.
- `build_app` — Example showing how to embed doxygen in an application.
- `build_parse` — Parses source code and dumps the dependencies between the code elements.
- … и ещё 44 опций.

**Каталоги с правилами установки (`install`):** `addon/doxyapp`, `addon/doxyparse`, `addon/doxysearch`, `addon/doxywizard`, `deps/spdlog`, `doc`, `doxygen-master/addon/doxyapp`, `doxygen-master/addon/doxyparse`, `doxygen-master/addon/doxysearch`, `doxygen-master/addon/doxywizard`, `doxygen-master/deps/spdlog`, `doxygen-master/doc`, `doxygen-master/src`, `src`

## 8. Точки входа и скрипты

- CLI: `tiddlywiki` → `./tiddlywiki.js`
- Main-модуль: `./boot/boot.js`

**npm-скрипты:**

| Скрипт | Команда |
|---|---|
| `npm run dev` | `node ./tiddlywiki.js ./editions/tw5.com-server --listen` |
| `npm run test` | `node ./tiddlywiki.js ./editions/test --verbose --version --build index` |
| `npm run lint` | `eslint .` |
| `npm run lint:fix` | `eslint . --fix` |
| `npm run lint:check` | `eslint . --fix-dry-run` |

**Dockerfile:**

```dockerfile
FROM ubuntu:jammy AS builder

RUN apt-get update && apt-get install -y \
    g++ \
    python3 \
    cmake \
    flex \
    bison \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /doxygen
COPY . .

RUN mkdir build \
    && cd build \
```

## 9. Метрики кода

- Всего строк текстового кода/документации: **1 271 984**
- Средний размер текстового файла: **113 строк**
- C: комментариев 95 704 строк (23.6% от 405 148)
- C++: комментариев 49 622 строк (12.3% от 405 006)
- Markdown/Wikitext: комментариев 0 строк (0.0% от 169 432)
- JavaScript: комментариев 15 213 строк (11.8% от 128 962)
- XML: комментариев 42 строк (0.1% от 70 616)
- Python: комментариев 1 814 строк (4.9% от 37 252)
- JSON: комментариев 0 строк (0.0% от 14 251)
- CSS: комментариев 216 строк (1.8% от 11 953)
- TypeScript: комментариев 0 строк (0.0% от 10 096)
- LaTeX: комментариев 0 строк (0.0% от 7 502)
- Text: комментариев 0 строк (0.0% от 5 995)
- CMake: комментариев 742 строк (26.2% от 2 836)
- YAML: комментариев 33 строк (3.3% от 996)
- Shell: комментариев 212 строк (23.2% от 913)
- HTML: комментариев 88 строк (15.8% от 558)
- INI/config: комментариев 0 строк (0.0% от 404)
- VHDL: комментариев 0 строк (0.0% от 64)

### 30 самых крупных файлов

| Файл | Язык | Размер | Строк |
|---|---|---:|---:|
| `deps/sqlite3/sqlite3.c` | cpp | 9.0 MB | 10 750 |
| `doxygen-master/deps/sqlite3/sqlite3.c` | cpp | 9.0 MB | 10 750 |
| `editions/geospatialdemo/tiddlers/features/canada-census-subdivision-millesime.geojson` | — | 7.3 MB | 1 |
| `doc/changelog.dox` | — | 1.4 MB | 3 087 |
| `doxygen-master/doc/changelog.dox` | — | 1.4 MB | 3 087 |
| `addon/doxmlparser/doxmlparser/compound.py` | py | 1.3 MB | 11 146 |
| `doxygen-master/addon/doxmlparser/doxmlparser/compound.py` | py | 1.3 MB | 11 146 |
| `editions/geospatialdemo/tiddlers/features/natural-earth-countries-low-res.json` | json | 964.7 KB | 1 |
| `plugins/tiddlywiki/xlsx-utils/files/xlsx.full.min.js` | js | 892.8 KB | 23 |
| `plugins/tiddlywiki/geospatial/files/leaflet.js/leaflet-src.js.map` | — | 846.0 KB | 1 |
| `deps/sqlite3/sqlite3.h` | c | 656.0 KB | 13 968 |
| `doxygen-master/deps/sqlite3/sqlite3.h` | c | 656.0 KB | 13 968 |
| `plugins/tiddlywiki/geospatial/files/turf.js/turf.6.5.0.js` | js | 590.4 KB | 88 |
| `doxygen-master/src/scanner.l` | — | 536.1 KB | 9 020 |
| `src/scanner.l` | — | 536.1 KB | 9 020 |
| `editions/dynaviewdemo/tiddlers/alice/Alice in Wonderland (sliced).json` | json | 502.8 KB | 7 311 |
| `doxygen-master/src/caseconvert.h` | c | 493.8 KB | 11 277 |
| `src/caseconvert.h` | c | 493.8 KB | 11 277 |
| `doxygen-master/src/doxygen.cpp` | cpp | 461.7 KB | 13 718 |
| `src/doxygen.cpp` | cpp | 461.7 KB | 13 718 |
| `plugins/tiddlywiki/xlsx-utils/files/cpexcel.js` | js | 460.7 KB | 1 506 |
| `editions/geospatialdemo/tiddlers/features/harvard-glb-volc-geojson.json` | json | 451.4 KB | 1 |
| `plugins/tiddlywiki/geospatial/files/leaflet.js/leaflet-src.js` | js | 439.7 KB | 14 512 |
| `plugins/tiddlywiki/qrcode/files/html5-qrcode/html5-qrcode.min.js` | js | 366.6 KB | 1 |
| `doxygen-master/vhdlparser/VhdlParser.cc` | cpp | 298.2 KB | 14 393 |
| `vhdlparser/VhdlParser.cc` | cpp | 298.2 KB | 14 393 |
| `editions/dev/tiddlers/images/rendering.svg` | — | 278.2 KB | 222 |
| `editions/dev/tiddlers/images/TiddlyWiki Architecture.svg` | — | 278.2 KB | 222 |
| `doxygen-master/vhdlparser/VhdlParser.h` | c | 271.6 KB | 11 222 |
| `vhdlparser/VhdlParser.h` | c | 271.6 KB | 11 222 |

## 10. JavaScript API — разбор модулей

Проанализировано **592** JS-модулей (CommonJS). Ниже — детальные карточки ключевых модулей.

### `plugins/tiddlywiki/geospatial/files/leaflet.markercluster/leaflet.markercluster-src.js`

> Removes a marker from all _gridUnclustered zoom levels, starting at the supplied zoom. @param marker to be removed from _gridUnclustered. @param z integer bottom start zoom level (included) @private

> Refreshes the icon of all "dirty" visible clusters. Non-visible "dirty" clusters will be updated when they are added to the map. @private

> Extracts individual (i.e. non-group) layers from a Layer Group. @param group to extract layers from. @param output {Array} in which to store the extracted layers. @returns {*\|Array} @private

- **Экспорты:** `MarkerClusterGroup`, `MarkerCluster`
- **Функции:** `initialize()`, `addLayer()`, `removeLayer()`, `addLayers()`, `removeLayers()`, `clearLayers()`, `getBounds()`, `eachLayer()`, `getLayers()`, `getLayer()`, `hasLayer()`, `zoomToShowLayer()`, `onAdd()`, `onRemove()`, `getVisibleParent()`, `_arraySplice()`, `_removeFromGridUnclustered()`, `_childMarkerDragStart()`, `_childMarkerMoved()`, `_moveChild()` …

### `plugins/tiddlywiki/jasmine/files/jasmine-core/lib/jasmine-core/jasmine.js`

> Maximum object depth the pretty printer will print to. Set this to a lower value to speed up pretty printing if you have large objects. @name jasmine.MAX_PRETTY_PRINT_DEPTH

> Maximum number of array elements to display when pretty printing objects. This will also limit the number of keys and values displayed for an object. Elements past this number will be ellipised. @name jasmine.MAX_PRETTY_

> Maximum number of characters to display when pretty printing objects. Characters past this number will be ellipised. @name jasmine.MAX_PRETTY_PRINT_CHARS

- **Экспорты:** `Spec`, `Suite`
- **Функции:** `getJasmineRequire()`, `anyMatch()`, `callerFile()`, `Spec()`, `fn()`, `onException()`, `onComplete()`, `Order()`, `naturalOrder()`, `randomOrder()`, `generateSeed()`, `jenkinsHash()`, `Env()`, `specFilter()`, `get()`, `set()`, `addExpectationResult()`, `nodeStart()`, `nodeComplete()`, `orderChildren()` …

### `plugins/tiddlywiki/xmldom/files/dom.js`

> ^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})\|\S.*?(?=[;\r\n]));? ^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?

> @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177 The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection 

> The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive. @standard level1

- **Экспорты:** `DOMImplementation`, `XMLSerializer`
- **Функции:** `copy()`, `_extends()`, `t()`, `DOMException()`, `NodeList()`, `item()`, `toString()`, `LiveNodeList()`, `_updateLiveList()`, `NamedNodeMap()`, `_findNodeIndex()`, `_addNamedNode()`, `_removeNamedNode()`, `getNamedItem()`, `setNamedItem()`, `setNamedItemNS()`, `removeNamedItem()`, `removeNamedItemNS()`, `getNamedItemNS()`, `DOMImplementation()` …

### `core/modules/utils/diff-match-patch/diff_match_patch_uncompressed.js`

- **Экспорты:** `DIFF_DELETE`, `DIFF_EQUAL`, `DIFF_INSERT`, `defaultOptions`, `diff`, `diffCharsToLines`, `diffCleanupEfficiency`, `diffCleanupMerge`, `diffCleanupSemantic`, `diffCleanupSemanticLossless`, `diffCommonPrefix`, `diffCommonSuffix`, `diffFromDelta`, `diffLevenshtein`, `diffLinesToChars`
- **Функции:** `resolveOptions()`, `createDiff()`, `diffMain()`, `diffCompute()`, `diffLineMode()`, `diffBisect()`, `diffBisectSplit()`, `diffLinesToChars()`, `diffLinesToCharsMunge()`, `diffCharsToLines()`, `diffCommonPrefix()`, `diffCommonSuffix()`, `diffCommonOverlap()`, `diffHalfMatch()`, `diffHalfMatchI()`, `diffCleanupSemantic()`, `diffCleanupSemanticLossless()`, `diffCleanupSemanticScore()`, `diffCleanupEfficiency()`, `diffCleanupMerge()` …
- **Константы/значения:** `defaultOptions`, `resolved`, `DIFF_DELETE`, `DIFF_INSERT`, `DIFF_EQUAL`, `deadline`, `checklines`, `commonprefix`, `commonsuffix`, `diffs`, `longtext`, `shorttext`

### `core/modules/utils/utils.js`

- **Экспорты:** `log`, `terminalColour`, `terminalColourLookup`, `warning`, `getInt`, `replaceString`, `trimPrefix`, `trimSuffix`, `toSentenceCase`, `toTitleCase`, `findPrecedingLineBreak`, `findFollowingLineBreak`, `count`, `removeArrayEntries`, `checkDependencies`
- **Функции:** `log()`, `terminalColour()`, `warning()`, `getInt()`, `replaceString()`, `trimPrefix()`, `trimSuffix()`, `toSentenceCase()`, `toTitleCase()`, `findPrecedingLineBreak()`, `findFollowingLineBreak()`, `count()`, `removeArrayEntries()`, `checkDependencies()`, `extend()`, `deepCopy()`, `extendDeepCopy()`, `deepFreeze()`, `slowInSlowOut()`, `copyObjectPropertiesSafe()` …
- **Константы/значения:** `terminalColourLookup`, `seen`, `value`, `copy`, `result`, `encoded`, `lineArray`, `searchRegexp`, `chars1`, `chars2`

### `core/modules/wiki.js`

- **Экспорты:** `addIndexersToWiki`, `getTextReference`, `setTextReference`, `setText`, `deleteTextReference`, `addEventListener`, `removeEventListener`, `dispatchEvent`, `enqueueTiddlerEvent`, `getSizeOfTiddlerEventQueue`, `clearTiddlerEventQueue`, `getChangeCount`, `generateNewTitle`, `isSystemTiddler`, `isTemporaryTiddler`
- **Функции:** `addIndexersToWiki()`, `getTextReference()`, `setTextReference()`, `setText()`, `deleteTextReference()`, `addEventListener()`, `removeEventListener()`, `dispatchEvent()`, `enqueueTiddlerEvent()`, `getSizeOfTiddlerEventQueue()`, `clearTiddlerEventQueue()`, `getChangeCount()`, `generateNewTitle()`, `isSystemTiddler()`, `isTemporaryTiddler()`, `isVolatileTiddler()`, `isImageTiddler()`, `isBinaryTiddler()`, `importTiddler()`, `getCreationFields()` …
- **Константы/значения:** `username`
- **Зависит от (require):** `$:/core/modules/widgets/widget.js`

### `plugins/tiddlywiki/geospatial/files/leaflet.js/leaflet-src.js`

- **Экспорты:** `Bounds`, `Browser`, `CRS`, `Canvas`, `Circle`, `CircleMarker`, `Class`, `Control`, `DivIcon`, `DivOverlay`, `DomEvent`, `DomUtil`, `Draggable`, `Evented`, `FeatureGroup`
- **Функции:** `extend()`, `F()`, `bind()`, `stamp()`, `throttle()`, `wrapNum()`, `falseFn()`, `formatNum()`, `trim()`, `splitWords()`, `setOptions()`, `getParamString()`, `template()`, `indexOf()`, `getPrefixed()`, `timeoutDefer()`, `requestAnimFrame()`, `cancelAnimFrame()`, `Class()`, `checkDeprecatedMixinEvents()` …

### `plugins/tiddlywiki/sax/files/lib/sax.js`

- **Функции:** `SAXParser()`, `F()`, `checkBufferLength()`, `clearBuffers()`, `flushBuffers()`, `end()`, `resume()`, `close()`, `flush()`, `createStream()`, `SAXStream()`, `get()`, `set()`, `isWhitespace()`, `isQuote()`, `isAttribEnd()`, `isMatch()`, `notMatch()`, `emit()`, `emitNode()` …
- **Зависит от (require):** `stream`, `string_decoder`

### `plugins/tiddlywiki/confetti/files/confetti.js`

- **Экспорты:** `reset`, `create`
- **Функции:** `noop()`, `promise()`, `decorate()`, `execute()`, `workerDone()`, `convert()`, `isOk()`, `prop()`, `onlyPositiveInt()`, `randomInt()`, `toDecimal()`, `colorsToRgb()`, `hexToRgb()`, `getOrigin()`, `setCanvasWindowSize()`, `setCanvasRectSize()`, `getCanvas()`, `ellipse()`, `randomPhysics()`, `updateFetti()` …

### `plugins/tiddlywiki/xmldom/files/dom-parser.js`

> +ContentHandler+ErrorHandler +LexicalHandler+EntityResolver2 -DeclHandler-DTDHandler * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, E

> @see org.xml.sax.ContentHandler#startDocument @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html

> @see org.xml.sax.ErrorHandler @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html

- **Экспорты:** `DOMImplementation`, `XMLSerializer`, `DOMParser`
- **Функции:** `DOMParser()`, `buildErrorHandler()`, `build()`, `DOMHandler()`, `position()`, `startDocument()`, `startElement()`, `endElement()`, `startPrefixMapping()`, `endPrefixMapping()`, `processingInstruction()`, `ignorableWhitespace()`, `characters()`, `skippedEntity()`, `endDocument()`, `setDocumentLocator()`, `comment()`, `startCDATA()`, `endCDATA()`, `startDTD()` …
- **Зависит от (require):** `./entities`, `./sax`, `./dom`

### `plugins/tiddlywiki/xmldom/files/sax.js`

> @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack); @return end of the elementStartPart(end of elementEndPart for selfClosed el)

> @return true if has new namespace define

- **Экспорты:** `XMLReader`
- **Функции:** `XMLReader()`, `parse()`, `fixedFromCharCode()`, `entityReplacer()`, `appendText()`, `position()`, `copyLocator()`, `parseElementStartPart()`, `appendElement()`, `parseHtmlSpecialContent()`, `fixSelfClosed()`, `_copy()`, `parseDCC()`, `parseInstruction()`, `ElementAttributes()`, `setTagName()`, `add()`, `getLocalName()`, `getLocator()`, `getQName()` …

### `tools/project-describer/analyze.js`

- **Экспорты:** `analyze`, `generateMarkdown`
- **Функции:** `langOfExt()`, `walk()`, `readText()`, `stripNull()`, `countLines()`, `countComments()`, `extractJsExports()`, `parseInfoFile()`, `findSubPackages()`, `extractCMakeTargets()`, `extractCppFunctions()`, `extractCppClass()`, `extractJsSymbols()`, `parseTid()`, `extractWikitextFeatures()`, `extractHeadings()`, `analyze()`, `fmtBytes()`, `esc()`, `num()` …
- **Зависит от (require):** `fs`, `path`

### `plugins/tiddlywiki/markdown/markdown-it-tiddlywiki.js`

- **Функции:** `encodeTWMark()`, `escapeTWMarks()`, `render_code_inline()`, `render_code_block()`, `render_fence()`, `render_paragraph_open()`, `render_paragraph_close()`, `render_footnote_ref()`, `render_footnote_open()`, `render_footnote_anchor()`, `render_text_special()`, `render_tw_expr()`, `render_token_attrs()`, `findNextMatch()`, `tw_macrocallinline()`, `tw_transcludeinline()`, `tw_filteredtranscludeinline()`, `tw_block()`, `tw_image()`, `tw_prettylink()` …

### `plugins/tiddlywiki/jasmine/files/jasmine-core/lib/jasmine-core/jasmine-html.js`

- **Функции:** `ResultsStateBuilder()`, `HtmlReporter()`, `globalFailureMessage()`, `failureDom()`, `summaryList()`, `optionsMenu()`, `failureDescription()`, `suiteHref()`, `addDeprecationWarnings()`, `find()`, `clearPrior()`, `createDom()`, `pluralize()`, `specHref()`, `seedHref()`, `defaultQueryString()`, `setMenuModeTo()`, `noExpectations()`, `hasActiveSpec()`, `HtmlSpecFilter()` …

### `plugins/tiddlywiki/project-describer/analyzer.js`

- **Экспорты:** `analyze`, `generateMarkdown`
- **Функции:** `langOfExt()`, `walk()`, `readText()`, `stripNull()`, `countLines()`, `countComments()`, `extractJsExports()`, `extractDoxygenEntities()`, `parseInfoFile()`, `analyze()`, `fmtBytes()`, `esc()`, `num()`, `buildTree()`, `ensure()`, `render()`, `renderTop()`, `describeDir()`, `summarize()`, `generateMarkdown()`
- **Зависит от (require):** `fs`, `path`

### `plugins/tiddlywiki/railroad/files/railroad-diagrams.js`

- **Экспорты:** `Diagram`, `Sequence`, `Choice`, `Optional`, `OneOrMore`, `ZeroOrMore`, `Terminal`, `NonTerminal`, `Comment`, `Skip`, `Link`
- **Функции:** `subclassOf()`, `unnull()`, `determineGaps()`, `wrapString()`, `SVG()`, `FakeSVG()`, `Path()`, `Diagram()`, `Sequence()`, `Choice()`, `Optional()`, `OneOrMore()`, `ZeroOrMore()`, `Start()`, `End()`, `Terminal()`, `NonTerminal()`, `Comment()`, `Skip()`, `Link()`

### `core/modules/utils/dom/dom.js`

- **Экспорты:** `setSelectionRangeSafe`, `setSelectionByPosition`, `removeChildren`, `getScrollContainer`, `getScrollPosition`, `resizeTextAreaToFit`, `getBoundingPageRect`, `savePassword`, `getPassword`, `forceLayout`, `pulseElement`, `addEventListeners`, `getComputedStyles`, `setStyles`, `copyStyles`
- **Функции:** `setSelectionRangeSafe()`, `setSelectionByPosition()`, `removeChildren()`, `getScrollContainer()`, `getScrollPosition()`, `resizeTextAreaToFit()`, `getBoundingPageRect()`, `savePassword()`, `getPassword()`, `forceLayout()`, `pulseElement()`, `addEventListeners()`, `getComputedStyles()`, `setStyles()`, `copyStyles()`, `copyToClipboard()`, `collectDOMVariables()`, `querySelectorSafe()`, `querySelectorAllSafe()`
- **Зависит от (require):** `$:/core/modules/utils/dom/popup.js`

### `core/modules/filters/x-listops.js`

- **Экспорты:** `putbefore`, `putafter`, `replace`, `putfirst`, `putlast`, `move`, `allafter`, `allbefore`, `append`, `prepend`, `remove`, `sortby`, `unique`, `toggle`, `cycle`
- **Функции:** `putbefore()`, `putafter()`, `replace()`, `putfirst()`, `putlast()`, `move()`, `allafter()`, `allbefore()`, `append()`, `prepend()`, `remove()`, `sortby()`, `unique()`, `toggle()`, `cycle()`
- **Константы/значения:** `prepare_results`, `results`, `append`, `prepend`, `array`, `count`, `index`, `lookup`, `cycleValueInArray`, `opLength`

### `core/modules/parsers/parseutils.js`

- **Экспорты:** `parseWhiteSpace`, `skipWhiteSpace`, `parseTokenString`, `parseTokenRegExp`, `parseStringLiteral`, `parseParameterDefinition`, `parseMacroParameters`, `parseMacroParameter`, `parseMacroInvocationAsTransclusion`, `parseMVVReferenceAsTransclusion`, `parseMacroParametersAsAttributes`, `parseMacroParameterAsAttribute`, `parseMacroInvocation`, `parseFilterVariable`, `parseAttribute`
- **Функции:** `parseWhiteSpace()`, `skipWhiteSpace()`, `parseTokenString()`, `parseTokenRegExp()`, `parseStringLiteral()`, `parseParameterDefinition()`, `parseMacroParameters()`, `parseMacroParameter()`, `parseMacroInvocationAsTransclusion()`, `parseMVVReferenceAsTransclusion()`, `parseMacroParametersAsAttributes()`, `parseMacroParameterAsAttribute()`, `parseMacroInvocation()`, `parseFilterVariable()`, `parseAttribute()`
- **Константы/значения:** `reMacroParameter`, `reMacroName`, `reAttributeName`

### `plugins/tiddlywiki/dynaview/dynaview.js`

- **Экспорты:** `name`, `platforms`, `before`, `synchronous`, `startup`
- **Функции:** `startup()`, `onLoad()`, `onScroll()`, `onResize()`, `worker()`, `setZoomClasses()`, `checkVisibility()`, `updateAddressBar()`, `saveScrollPosition()`, `restoreScrollPosition()`, `scrollToTiddler()`, `shouldPreserveScrollPosition()`, `findTopmostTiddler()`, `saveViewportDimensions()`
- **Константы/значения:** `name`, `platforms`, `before`

### `core/modules/utils/deprecated.js`

- **Экспорты:** `logTable`, `repeat`, `startsWith`, `endsWith`, `trim`, `hopArray`, `sign`, `strEndsWith`, `stringifyNumber`, `tagToCssSelector`, `domContains`, `domMatchesSelector`, `hasClass`, `addClass`, `removeClass`
- **Функции:** `repeat()`, `startsWith()`, `endsWith()`, `trim()`, `stringifyNumber()`, `tagToCssSelector()`, `domContains()`, `hasClass()`, `splitClasses()`, `addClass()`, `removeClass()`, `toggleClass()`, `getLocationPath()`

### `plugins/tiddlywiki/jasmine/files/jasmine/lib/command.js`

- **Функции:** `Command()`, `isFileArg()`, `parseOptions()`, `runJasmine()`, `initJasmine()`, `installExamples()`, `help()`, `version()`, `lPad()`, `copyFiles()`, `makeDirStructure()`, `isEnvironmentVariable()`, `setEnvironmentVariables()`
- **Зависит от (require):** `path`, `fs`, `../package.json`

### `plugins/tiddlywiki/jasmine/files/jasmine/lib/reporters/console_reporter.js`

- **Функции:** `start()`, `elapsed()`, `ConsoleReporter()`, `printNewline()`, `colored()`, `plural()`, `repeat()`, `indent()`, `defaultStackFilter()`, `specFailureDetails()`, `suiteFailureDetails()`, `printFailedExpectations()`, `pendingSpecDetails()`

### `core/modules/filters/encodings.js`

- **Экспорты:** `decodebase64`, `encodebase64`, `decodeuricomponent`, `encodeuricomponent`, `decodeuri`, `encodeuri`, `decodehtml`, `encodehtml`, `stringify`, `jsonstringify`, `escaperegexp`, `escapecss`
- **Функции:** `decodebase64()`, `encodebase64()`, `decodeuricomponent()`, `encodeuricomponent()`, `decodeuri()`, `encodeuri()`, `decodehtml()`, `encodehtml()`, `stringify()`, `jsonstringify()`, `escaperegexp()`, `escapecss()`

### `core/modules/filters/json-ops.js`

- **Функции:** `getDataItemValueAsStrings()`, `getDataItemKeysAsStrings()`, `convertDataItemValueToStrings()`, `convertDataItemKeysToStrings()`, `getDataItemType()`, `getItemAtIndex()`, `traverseIndexChain()`, `getDataItem()`, `setDataItem()`, `deleteDataItem()`

### `plugins/tiddlywiki/jasmine/files/jasmine-core/lib/jasmine-core/boot.js`

> ## Require &amp; Instantiate * Require Jasmine's core files. Specifically, this requires and attaches all of Jasmine's code to the `jasmine` reference.

> Since this is being run in a browser and the results should populate to an HTML page, require the HTML-specific Jasmine code, injecting the same reference.

> Create the Jasmine environment. This is used to run all specs in a project.

- **Функции:** `getWindowLocation()`, `navigateWithNewParam()`, `addToExistingQueryString()`, `getContainer()`, `createElement()`, `createTextNode()`, `filterString()`, `extend()`

### `plugins/tiddlywiki/markdown/wrapper.js`

- **Функции:** `parseAsBoolean()`, `setupWikiRules()`, `collectAllRules()`, `createMarkdownEngine()`, `deactivateLinks()`, `isCodified()`, `decodeEntities()`, `parseStringLiteralExtended()`, `processWikiTree()`, `MarkdownParser()`
- **Зависит от (require):** `./markdown-it`, `$:/core/modules/parsers/wikiparser/wikiparser.js`, `./markdown-it-sub`, `./markdown-it-sup`, `./markdown-it-ins`, `./markdown-it-mark`, `./markdown-it-footnote`, `./markdown-it-deflist`, `./markdown-it-katex`, `./markdown-it-tiddlywiki`

### `core/modules/filters/listops.js`

- **Экспорты:** `order`, `reverse`, `first`, `last`, `rest`, `butfirst`, `bf`, `butlast`, `bl`, `nth`, `zth`
- **Функции:** `order()`, `reverse()`, `first()`, `last()`, `rest()`, `butlast()`, `nth()`, `zth()`
- **Константы/значения:** `prepare_results`, `results`, `count`

### `core/modules/filters/strings.js`

- **Экспорты:** `length`, `uppercase`, `lowercase`, `sentencecase`, `titlecase`, `trim`, `split`, `join`, `levenshtein`, `makepatches`, `applypatches`, `splitregexp`, `pad`, `charcode`
- **Функции:** `trim()`, `diffLineWordMode()`, `makepatches()`, `makeStringBinaryOperator()`, `makeStringReducingOperator()`, `splitregexp()`, `pad()`, `charcode()`
- **Константы/значения:** `dmp`, `diffs`, `suffixes`, `jsonOutput`, `patches`
- **Зависит от (require):** `$:/core/modules/utils/diff-match-patch/diff_match_patch.js`

### `core/modules/filters.js`

> -- Excessive filter recursion --*

- **Экспорты:** `parseFilter`, `getFilterOperators`, `getFilterRunPrefixes`, `filterTiddlers`, `compileFilter`
- **Функции:** `parseFilterOperation()`, `parseFilter()`, `getFilterOperators()`, `getFilterRunPrefixes()`, `filterTiddlers()`, `compileFilter()`
- **Зависит от (require):** `$:/core/modules/widgets/widget.js`

### `core/modules/tiddler.js`

- **Экспорты:** `hasTag`, `isPlugin`, `isDraft`, `getFieldString`, `getFieldList`, `getFieldStrings`, `getFieldStringBlock`, `getFieldDay`
- **Функции:** `hasTag()`, `isPlugin()`, `isDraft()`, `getFieldString()`, `getFieldList()`, `getFieldStrings()`, `getFieldStringBlock()`, `getFieldDay()`

### `core/modules/utils/dom/browser.js`

- **Экспорты:** `setStyle`, `removeStyles`, `removeStyle`, `convertStyleNameToPropertyName`, `convertPropertyNameToStyleName`, `roundTripPropertyName`, `convertEventName`, `getFullScreenApis`
- **Функции:** `setStyle()`, `removeStyles()`, `removeStyle()`, `convertStyleNameToPropertyName()`, `convertPropertyNameToStyleName()`, `roundTripPropertyName()`, `convertEventName()`, `getFullScreenApis()`

### `core/modules/utils/parsetree.js`

- **Экспорты:** `addAttributeToParseTreeNode`, `getOrderedAttributesFromParseTreeNode`, `getAttributeValueFromParseTreeNode`, `addClassToParseTreeNode`, `addStyleToParseTreeNode`, `findParseTreeNode`, `getParseTreeText`, `getParser`
- **Функции:** `addAttributeToParseTreeNode()`, `getOrderedAttributesFromParseTreeNode()`, `getAttributeValueFromParseTreeNode()`, `addClassToParseTreeNode()`, `addStyleToParseTreeNode()`, `findParseTreeNode()`, `getParseTreeText()`, `getParser()`

### `editions/test/tiddlers/tests/test-deprecated.js`

- **Функции:** `makeNode()`, `contains()`, `compareDocumentPosition()`, `makeEl()`, `reject()`, `add()`, `remove()`, `toggle()`

### `boot/boot.js`

> @deprecated Use Array.isArray instead

> @deprecated Use array iterative methods instead

> @deprecated Pad a string to a given length with "0"s. Length defaults to 2

- **Экспорты:** `TiddlyWiki`
- **Функции:** `callback()`, `handlerFunction()`, `require()`, `addDifference()`, `isFieldValueEqual()`
- **Константы/значения:** `next`, `href`, `afterHash`, `s`, `thenable`
- **Зависит от (require):** `./bootprefix.js`, `fs`, `path`, `vm`, `./sjcl.js`, `../package.json`

### `core/modules/info/mediaquerytracker.js`

- **Экспорты:** `getInfoTiddlerFields`
- **Функции:** `getInfoTiddlerFields()`, `track()`, `getResultTiddlers()`, `untrack()`, `fnEnter()`, `fnLeave()`, `fnChange()`

### `core/modules/syncer.js`

- **Экспорты:** `Syncer`
- **Функции:** `Syncer()`, `checkIsDirty()`, `callback()`, `SaveTiddlerTask()`, `DeleteTiddlerTask()`, `LoadTiddlerTask()`, `SyncFromServerTask()`

### `core/modules/utils/dom/dragndrop.js`

- **Экспорты:** `makeDraggable`, `importDataTransfer`, `importPaste`, `itemHasValidDataType`, `dragEventContainsFiles`, `dragEventContainsType`
- **Функции:** `makeDraggable()`, `importDataTransfer()`, `importPaste()`, `itemHasValidDataType()`, `parseJSONTiddlers()`, `dragEventContainsType()`, `dragEventContainsFiles()`

### `core/modules/utils/fakedom.js`

- **Экспорты:** `fakeDocument`
- **Функции:** `get()`, `set()`, `setProperty()`, `setSequenceNumber()`, `createElementNS()`, `createElement()`, `createTextNode()`

### `editions/test/tiddlers/tests/test-edit-widgets/edit-widgets-helpers.js`

- **Экспорты:** `makeWiki`, `parseAndRender`, `findEditTextWidget`, `renderFromWikitext`, `renderFromAttrs`, `refresh`, `editorValue`
- **Функции:** `makeWiki()`, `parseAndRender()`, `findEditTextWidget()`, `renderFromWikitext()`, `renderFromAttrs()`, `refresh()`, `editorValue()`
- **Зависит от (require):** `$:/tests/test-edit-widgets/helpers`, `$:/core/modules/widgets/widget.js`

### Остальные модули (сводка)

| Модуль | Экспортов | Функций | Классов |
|---|---:|---:|---:|
| `boot/bootprefix.js` | 1 | 0 | 0 |
| `boot/sjcl.js` | 0 | 5 | 0 |
| `core/modules/background-actions.js` | 1 | 0 | 2 |
| `core/modules/config.js` | 6 | 0 | 0 |
| `core/modules/deserializers.js` | 0 | 3 | 0 |
| `core/modules/editor/engines/framed.js` | 1 | 1 | 0 |
| `core/modules/editor/engines/simple.js` | 1 | 1 | 0 |
| `core/modules/editor/factory.js` | 1 | 1 | 0 |
| `core/modules/editor/operations/text/excise.js` | 0 | 1 | 0 |
| `core/modules/editor/operations/text/wrap-selection.js` | 0 | 3 | 0 |
| `core/modules/filter-tracker.js` | 1 | 4 | 1 |
| `core/modules/filterrunprefixes/all.js` | 1 | 1 | 0 |
| `core/modules/filterrunprefixes/and.js` | 1 | 1 | 0 |
| `core/modules/filterrunprefixes/cascade.js` | 1 | 1 | 0 |
| `core/modules/filterrunprefixes/else.js` | 1 | 1 | 0 |
| `core/modules/filterrunprefixes/except.js` | 1 | 1 | 0 |
| `core/modules/filterrunprefixes/filter.js` | 1 | 1 | 0 |
| `core/modules/filterrunprefixes/intersection.js` | 1 | 1 | 0 |
| `core/modules/filterrunprefixes/let.js` | 1 | 1 | 0 |
| `core/modules/filterrunprefixes/map.js` | 1 | 1 | 0 |
| `core/modules/filterrunprefixes/or.js` | 1 | 1 | 0 |
| `core/modules/filterrunprefixes/reduce.js` | 1 | 1 | 0 |
| `core/modules/filterrunprefixes/sort.js` | 1 | 1 | 0 |
| `core/modules/filterrunprefixes/then.js` | 1 | 1 | 0 |
| `core/modules/filters/addprefix.js` | 1 | 1 | 0 |
| `core/modules/filters/addsuffix.js` | 1 | 1 | 0 |
| `core/modules/filters/after.js` | 1 | 1 | 0 |
| `core/modules/filters/all/current.js` | 1 | 1 | 0 |
| `core/modules/filters/all/missing.js` | 1 | 1 | 0 |
| `core/modules/filters/all/orphans.js` | 1 | 1 | 0 |
| `core/modules/filters/all/shadows.js` | 1 | 1 | 0 |
| `core/modules/filters/all/tags.js` | 1 | 1 | 0 |
| `core/modules/filters/all/tiddlers.js` | 1 | 1 | 0 |
| `core/modules/filters/all.js` | 1 | 2 | 0 |
| `core/modules/filters/backlinks.js` | 1 | 1 | 0 |
| `core/modules/filters/backtranscludes.js` | 1 | 1 | 0 |
| `core/modules/filters/before.js` | 1 | 1 | 0 |
| `core/modules/filters/commands.js` | 1 | 1 | 0 |
| `core/modules/filters/compare.js` | 1 | 1 | 0 |
| `core/modules/filters/contains.js` | 1 | 1 | 0 |
| `core/modules/filters/count.js` | 1 | 1 | 0 |
| `core/modules/filters/crypto.js` | 1 | 1 | 0 |
| `core/modules/filters/days.js` | 1 | 1 | 0 |
| `core/modules/filters/deserializers.js` | 1 | 1 | 0 |
| `core/modules/filters/duplicateslugs.js` | 1 | 1 | 0 |
| `core/modules/filters/each.js` | 1 | 1 | 0 |
| `core/modules/filters/eachday.js` | 1 | 1 | 0 |
| `core/modules/filters/editiondescription.js` | 1 | 1 | 0 |
| `core/modules/filters/editions.js` | 1 | 1 | 0 |
| `core/modules/filters/else.js` | 1 | 1 | 0 |
| `core/modules/filters/enlist.js` | 1 | 1 | 0 |
| `core/modules/filters/field.js` | 1 | 1 | 0 |
| `core/modules/filters/fields.js` | 1 | 1 | 0 |
| `core/modules/filters/filter.js` | 1 | 1 | 0 |
| `core/modules/filters/format/date.js` | 1 | 1 | 0 |
| `core/modules/filters/format/json.js` | 1 | 1 | 0 |
| `core/modules/filters/format/relativedate.js` | 1 | 1 | 0 |
| `core/modules/filters/format/timestamp.js` | 1 | 1 | 0 |
| `core/modules/filters/format/titlelist.js` | 1 | 1 | 0 |
| `core/modules/filters/format.js` | 1 | 2 | 0 |
| `core/modules/filters/function.js` | 1 | 1 | 0 |
| `core/modules/filters/get.js` | 1 | 1 | 0 |
| `core/modules/filters/getindex.js` | 1 | 1 | 0 |
| `core/modules/filters/getvariable.js` | 1 | 1 | 0 |
| `core/modules/filters/has.js` | 1 | 1 | 0 |
| `core/modules/filters/haschanged.js` | 1 | 1 | 0 |
| `core/modules/filters/indexes.js` | 1 | 1 | 0 |
| `core/modules/filters/insertafter.js` | 1 | 1 | 0 |
| `core/modules/filters/insertbefore.js` | 1 | 1 | 0 |
| `core/modules/filters/is/binary.js` | 1 | 1 | 0 |
| `core/modules/filters/is/blank.js` | 1 | 1 | 0 |
| `core/modules/filters/is/current.js` | 1 | 1 | 0 |
| `core/modules/filters/is/draft.js` | 1 | 1 | 0 |
| `core/modules/filters/is/image.js` | 1 | 1 | 0 |
| `core/modules/filters/is/missing.js` | 1 | 1 | 0 |
| `core/modules/filters/is/orphan.js` | 1 | 1 | 0 |
| `core/modules/filters/is/shadow.js` | 1 | 1 | 0 |
| `core/modules/filters/is/system.js` | 1 | 1 | 0 |
| `core/modules/filters/is/tag.js` | 1 | 1 | 0 |
| `core/modules/filters/is/tiddler.js` | 1 | 1 | 0 |
| `core/modules/filters/is/variable.js` | 1 | 1 | 0 |
| `core/modules/filters/is.js` | 1 | 2 | 0 |
| `core/modules/filters/limit.js` | 1 | 1 | 0 |
| `core/modules/filters/links.js` | 1 | 1 | 0 |
| `core/modules/filters/list.js` | 1 | 1 | 0 |
| `core/modules/filters/listed.js` | 1 | 1 | 0 |
| `core/modules/filters/lookup.js` | 1 | 1 | 0 |
| `core/modules/filters/match.js` | 1 | 1 | 0 |
| `core/modules/filters/math.js` | 30 | 4 | 0 |
| `core/modules/filters/minlength.js` | 1 | 1 | 0 |
| `core/modules/filters/moduleproperty.js` | 1 | 1 | 0 |
| `core/modules/filters/modules.js` | 1 | 1 | 0 |
| `core/modules/filters/moduletypes.js` | 1 | 1 | 0 |
| `core/modules/filters/next.js` | 1 | 1 | 0 |
| `core/modules/filters/plugintiddlers.js` | 1 | 1 | 0 |
| `core/modules/filters/prefix.js` | 1 | 1 | 0 |
| `core/modules/filters/previous.js` | 1 | 1 | 0 |
| `core/modules/filters/range.js` | 1 | 1 | 0 |
| `core/modules/filters/reduce.js` | 1 | 1 | 0 |
| `core/modules/filters/regexp.js` | 1 | 1 | 0 |
| `core/modules/filters/removeprefix.js` | 1 | 1 | 0 |
| `core/modules/filters/removesuffix.js` | 1 | 1 | 0 |
| `core/modules/filters/sameday.js` | 1 | 1 | 0 |
| `core/modules/filters/search.js` | 1 | 1 | 0 |
| `core/modules/filters/shadowsource.js` | 1 | 1 | 0 |
| `core/modules/filters/slugify.js` | 1 | 1 | 0 |
| `core/modules/filters/sort.js` | 5 | 5 | 0 |
| `core/modules/filters/sortsub.js` | 1 | 1 | 0 |
| `core/modules/filters/splitbefore.js` | 1 | 1 | 0 |
| `core/modules/filters/storyviews.js` | 1 | 1 | 0 |
| `core/modules/filters/subfilter.js` | 1 | 1 | 0 |
| `core/modules/filters/substitute.js` | 1 | 1 | 0 |
| `core/modules/filters/subtiddlerfields.js` | 1 | 1 | 0 |
| `core/modules/filters/suffix.js` | 1 | 1 | 0 |
| `core/modules/filters/tag.js` | 1 | 1 | 0 |
| `core/modules/filters/tagging.js` | 1 | 1 | 0 |
| `core/modules/filters/tags.js` | 1 | 1 | 0 |
| `core/modules/filters/then.js` | 1 | 1 | 0 |
| `core/modules/filters/title.js` | 1 | 1 | 0 |
| `core/modules/filters/transcludes.js` | 1 | 1 | 0 |
| `core/modules/filters/unknown.js` | 0 | 0 | 0 |
| `core/modules/filters/untagged.js` | 1 | 1 | 0 |
| `core/modules/filters/variables.js` | 1 | 1 | 0 |
| `core/modules/filters/wikiparserrules.js` | 1 | 1 | 0 |
| `core/modules/indexers/back-indexer.js` | 1 | 2 | 0 |
| `core/modules/indexers/field-indexer.js` | 1 | 1 | 0 |
| `core/modules/indexers/tag-indexer.js` | 1 | 2 | 0 |
| `core/modules/info/dimensions.js` | 1 | 1 | 1 |
| `core/modules/info/platform.js` | 1 | 1 | 0 |
| `core/modules/keyboard.js` | 1 | 1 | 0 |
| `core/modules/language.js` | 1 | 1 | 0 |
| `core/modules/macros/changecount.js` | 3 | 1 | 0 |
| `core/modules/macros/contrastcolour.js` | 3 | 1 | 0 |
| `core/modules/macros/csvtiddlers.js` | 3 | 2 | 0 |
| `core/modules/macros/displayshortcuts.js` | 3 | 1 | 0 |
| `core/modules/macros/jsontiddler.js` | 3 | 1 | 0 |
| `core/modules/macros/jsontiddlers.js` | 3 | 1 | 0 |
| `core/modules/macros/makedatauri.js` | 3 | 1 | 0 |
| `core/modules/macros/now.js` | 3 | 1 | 0 |
| `core/modules/macros/qualify.js` | 3 | 1 | 0 |
| `core/modules/macros/resolvepath.js` | 3 | 1 | 0 |
| `core/modules/macros/unusedtitle.js` | 3 | 1 | 0 |
| `core/modules/macros/version.js` | 3 | 1 | 0 |
| `core/modules/parsers/wikiparser/rules/codeblock.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/codeinline.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/commentblock.js` | 5 | 3 | 0 |
| `core/modules/parsers/wikiparser/rules/commentinline.js` | 5 | 3 | 0 |
| `core/modules/parsers/wikiparser/rules/conditional.js` | 6 | 4 | 0 |
| `core/modules/parsers/wikiparser/rules/dash.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/emphasis/bold.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/emphasis/italic.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/emphasis/strikethrough.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/emphasis/subscript.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/emphasis/superscript.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/emphasis/underscore.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/entity.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/extlink.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/filteredtranscludeblock.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/filteredtranscludeinline.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/fnprocdef.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/hardlinebreaks.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/heading.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/horizrule.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/html.js` | 8 | 6 | 0 |
| `core/modules/parsers/wikiparser/rules/image.js` | 7 | 5 | 0 |
| `core/modules/parsers/wikiparser/rules/import.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/list.js` | 5 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/macrocallblock.js` | 5 | 3 | 0 |
| `core/modules/parsers/wikiparser/rules/macrocallinline.js` | 5 | 3 | 0 |
| `core/modules/parsers/wikiparser/rules/macrodef.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/mvvdisplayinline.js` | 5 | 3 | 0 |
| `core/modules/parsers/wikiparser/rules/parameters.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/parsermode.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/prettyextlink.js` | 7 | 5 | 0 |
| `core/modules/parsers/wikiparser/rules/prettylink.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/quoteblock.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/rules.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/styleblock.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/styleinline.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/syslink.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/table.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/transcludeblock.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/transcludeinline.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/typedblock.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/whitespace.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/wikilink.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/rules/wikilinkprefix.js` | 4 | 2 | 0 |
| `core/modules/parsers/wikiparser/wikiparser.js` | 0 | 1 | 0 |
| `core/modules/parsers/wikiparser/wikirulebase.js` | 1 | 0 | 0 |
| `core/modules/pluginswitcher.js` | 1 | 1 | 0 |
| `core/modules/relinkers/tiddlers.js` | 2 | 1 | 0 |
| `core/modules/saver-handler.js` | 1 | 1 | 0 |
| `core/modules/savers/andtidwiki.js` | 2 | 2 | 0 |
| `core/modules/savers/custom.js` | 2 | 3 | 0 |
| `core/modules/savers/download.js` | 2 | 3 | 0 |
| `core/modules/savers/fsosaver.js` | 2 | 2 | 0 |
| `core/modules/savers/gitea.js` | 2 | 3 | 0 |
| `core/modules/savers/github.js` | 2 | 3 | 0 |
| `core/modules/savers/gitlab.js` | 2 | 3 | 0 |
| `core/modules/savers/manualdownload.js` | 2 | 2 | 0 |

## 11. Модули ядра TiddlyWiki по категориям

Структура `$:/core/modules/<категория>/` — сердце вики-движка.

### editor — 16 модулей

`framed`, `simple`, `factory`, `clear`, `resize`, `rotate-left`, `excise`, `focus-editor`, `insert-text`, `make-link`, `prefix-lines`, `replace-all`, `replace-selection`, `save-selection`, `wrap-lines`, `wrap-selection`

### filterrunprefixes — 13 модулей

`all`, `and`, `cascade`, `else`, `except`, `filter`, `intersection`, `let`, `map`, `or`, `reduce`, `sort`, `then`

### filters — 106 модулей

`addprefix`, `addsuffix`, `after`, `current`, `missing`, `orphans`, `shadows`, `tags`, `tiddlers`, `all`, `backlinks`, `backtranscludes`, `before`, `commands`, `compare`, `contains`, `count`, `crypto`, `days`, `deserialize`, `deserializers`, `duplicateslugs`, `each`, `eachday`, `editiondescription`, `editions`, `else`, `encodings`, `enlist`, `field`, `fields`, `filter`, `date`, `json`, `relativedate`, `timestamp`, `titlelist`, `format`, `function`, `get`, `getindex`, `getvariable`, `has`, `haschanged`, `indexes`, `insertafter`, `insertbefore`, `binary`, `blank`, `current`, `draft`, `image`, `missing`, `orphan`, `shadow`, `system`, `tag`, `tiddler`, `variable`, `is` …

### indexers — 3 модулей

`back-indexer`, `field-indexer`, `tag-indexer`

### info — 3 модулей

`dimensions`, `mediaquerytracker`, `platform`

### macros — 12 модулей

`changecount`, `contrastcolour`, `csvtiddlers`, `displayshortcuts`, `jsontiddler`, `jsontiddlers`, `makedatauri`, `now`, `qualify`, `resolvepath`, `unusedtitle`, `version`

### parsers — 55 модулей

`audioparser`, `binaryparser`, `csvparser`, `htmlparser`, `imageparser`, `parseutils`, `pdfparser`, `textparser`, `videoparser`, `codeblock`, `codeinline`, `commentblock`, `commentinline`, `conditional`, `dash`, `bold`, `italic`, `strikethrough`, `subscript`, `superscript`, `underscore`, `entity`, `extlink`, `filteredtranscludeblock`, `filteredtranscludeinline`, `fnprocdef`, `hardlinebreaks`, `heading`, `horizrule`, `html`, `image`, `import`, `list`, `macrocallblock`, `macrocallinline`, `macrodef`, `mvvdisplayinline`, `parameters`, `parsermode`, `prettyextlink`, `prettylink`, `quoteblock`, `rules`, `styleblock`, `styleinline`, `syslink`, `table`, `transcludeblock`, `transcludeinline`, `typedblock`, `whitespace`, `wikilink`, `wikilinkprefix`, `wikiparser`, `wikirulebase`

### relinkers — 1 модулей

`tiddlers`

### savers — 15 модулей

`andtidwiki`, `custom`, `download`, `fsosaver`, `gitea`, `github`, `gitlab`, `manualdownload`, `msdownload`, `postmessage`, `put`, `tiddlyfox`, `tiddlyie`, `twedit`, `upload`

### startup — 12 модулей

`browser-messaging`, `eventbus`, `favicon`, `info`, `load-modules`, `password`, `plugins`, `render`, `rootwidget`, `startup`, `story`, `windows`

### storyviews — 3 модулей

`classic`, `pop`, `zoomin`

### upgraders — 3 модулей

`plugins`, `system`, `themetweaks`

### utils — 29 модулей

`base64`, `crypto`, `csv`, `deprecated`, `diff_match_patch_uncompressed`, `diff_match_patch`, `slide`, `animator`, `browser`, `csscolorparser`, `dom`, `dragndrop`, `http`, `keyboard`, `modal`, `notifier`, `popup`, `scroller`, `errors`, `escapecss`, `fakedom`, `linked-list`, `logger`, `messaging`, `parsetree`, `performance`, `pluginmaker`, `transliterate`, `utils`

### widgets — 69 модулей

`action-confirm`, `action-createtiddler`, `action-deletefield`, `action-deletetiddler`, `action-listops`, `action-log`, `action-navigate`, `action-popup`, `action-sendmessage`, `action-setfield`, `action-setmultiplefields`, `audio`, `browse`, `button`, `checkbox`, `codeblock`, `count`, `data`, `diff-text`, `draggable`, `droppable`, `dropzone`, `edit-binary`, `edit-bitmap`, `edit-shortcut`, `edit-text`, `edit`, `element`, `encrypt`, `entity`, `error`, `eventcatcher`, `fieldmangler`, `fields`, `fill`, `genesis`, `image`, `importvariables`, `jsontiddler`, `keyboard`, `let`, `link`, `linkcatcher`, `list`, `log`, `macrocall`, `messagecatcher`, `navigator`, `parameters`, `password`, `qualify`, `radio`, `range`, `raw`, `reveal`, `scrollable`, `select`, `setmultiplevariables`, `setvariable`, `slot` …

## 12. C/C++ API — классы, функции, Doxygen-документация

Файлов с аннотированными определениями: **876**.

### `deps/filesystem/filesystem.hpp`

**Классы/структуры:**

- `class not_implemented_exception` _(наследует: : public std::logic_error)_ — методы: `logic_error`
- `class path_helper_base`
- `struct _is_basic_string` _(наследует: : std::false_type)_
- `class input_iterator_range` — методы: `_last`, `begin`, `end`
- `class filesystem_error` _(наследует: : public std::system_error)_ — методы: `filesystem_error`
- `class path` _(наследует: ::iterator)_ — методы: `iterator`, `increment`, `decrement`, `updateCurrent`
- `struct space_info`
- `class file_type`
- `class perms` _(наследует: : uint16_t)_
- `class perm_options` _(наследует: : uint16_t)_
- `class copy_options` _(наследует: : uint16_t)_
- `class directory_options` _(наследует: : uint16_t)_

**Функции:** `std::logic_error("function not implemented yet.")`, `_last(last)`, `begin()`, `end()`, `_dir_entry(dir_entry)`, `_recursion_pending(recursion_pending)`, `basic_filebuf()`, `open(const path& p, std::ios_base::openmode mode)`, `basic_ifstream()`, `open(const path& p, std::ios_base::openmode mode = std::ios_base:)`, `basic_ofstream()`, `open(const path& p, std::ios_base::openmode mode = std::ios_base:)`, `basic_fstream()`, `open(const path& p, std::ios_base::openmode mode = std::ios_base:)`, `valid()` …

### `deps/fmt/include/fmt/base.h`

**Классы/структуры:**

- `struct void_t_impl`
- `struct monostate` — методы: `monostate`
- `class int128_opt`
- `class uint128_opt`
- `struct bitint`
- `struct ubitint`
- `struct is_std_string_like` _(наследует: : std::false_type)_
- `struct is_back_insert_iterator` _(наследует: : std::false_type)_
- `struct accessor` _(наследует: : OutputIt)_ — методы: `OutputIt`
- `class basic_string_view` — методы: `size_`, `data_`
- `struct is_xchar` _(наследует: : std::false_type)_
- `struct is_char` _(наследует: : is_xchar<T>)_

**Функции:** `monostate()`, `ignore_unused(const T&...)`, `narrow(const T*)`, `narrow(const char* s)`, `remove_prefix(size_t n)`, `set_fill_size(size_t size)`, `set_type(presentation_type t)`, `set_align(fmt::align a)`, `set_dynamic_width(arg_id_kind w)`, `set_dynamic_precision(arg_id_kind p)`, `dynamic()`, `set_sign(fmt::sign s)`, `set_upper()`, `set_alt()`, `clear_alt()` …

### `deps/fmt/include/fmt/chrono.h`

**Классы/структуры:**

- `struct Factor` _(наследует: : std::ratio_divide<typename From::period, typename To::period>)_
- `struct utc_clock` — методы: `to_sys`
- `struct local_t`
- `struct null`
- `class formatbuf` _(наследует: : public StreamBuf)_ — методы: `buffer_`, `append`
- `struct codecvt_result`
- `struct time_zone`
- `struct dispatcher` — методы: `time_`, `localtime`
- `struct dispatcher` — методы: `time_`, `gmtime`
- `class numeric_system`
- `class pad_type`
- `struct null_chrono_spec_handler` — методы: `unsupported`, `on_year`, `on_short_year`, `on_offset_year`, `on_century`, `on_iso_week_based_year`, `on_iso_week_based_short_year`, `on_abbr_weekday`, `on_full_weekday`, `on_dec0_weekday`, `on_dec1_weekday`, `on_abbr_month` …

**Функции:** `write_codecvt(codecvt_result<CodeUnit>& out, string_view in, const std::lo)`, `do_write(buffer<Char>& buf, const std::tm& time, const std::locale& l)`, `throw_duration_error()`, `_tzset(T...)`, `tzset_once()`, `write_digit2_separated(char* buf, unsigned a, unsigned b, unsigned c, char sep)`, `unsupported()`, `on_year(numeric_system, pad_type)`, `on_short_year(numeric_system)`, `on_offset_year()`, `on_century(numeric_system)`, `on_iso_week_based_year()`, `on_iso_week_based_short_year()`, `on_abbr_weekday()`, `on_full_weekday()` …

### `deps/fmt/include/fmt/format.h`

**Классы/структуры:**

- `struct std_string_view`
- `struct string_literal`
- `struct bytes`
- `class uint128_fallback` — методы: `hi_`, `T`, `uint128_fallback`, `FMT_ASSERT`, `__builtin_addcll`, `__builtin_ia32_addcarryx_u64`, `_addcarry_u64`
- `struct data_t`
- `struct count_code_points`
- `struct is_integral` _(наследует: : std::is_integral<T>)_
- `struct float128`
- `struct is_floating_point` _(наследует: : std::is_floating_point<T>)_
- `struct is_fast_float` _(наследует: : bool_constant<std::numeric_limits<T>::is_iec559 && sizeof(T) <= sizeof(double))_
- `struct allocator` — методы: `allocate`, `deallocate`, `free`
- `class basic_memory_buffer` _(наследует: : public detail::buffer<T>)_ — методы: `deallocate`, `data`, `grow`, `abort_fuzzing_if`, `max_size`, `capacity`, `max_of`, `allocate`, `set`, `alloc_`, `basic_memory_buffer`, `move` …

**Функции:** `do_throw(const Exception& x)`, `abort_fuzzing_if(bool condition)`, `T()`, `assume(bool condition)`, `for_each_codepoint(string_view s, F f)`, `allocate(size_t n)`, `deallocate(T* p, size_t)`, `deallocate()`, `grow(detail::buffer<T>& buf, size_t size)`, `move(basic_memory_buffer& other)`, `resize(size_t count)`, `reserve(size_t new_capacity)`, `append(const ContiguousRange& range)`, `print(format_string<T...> fmt, T&&... args)`, `writer()` …

### `deps/spdlog/include/spdlog/fmt/bundled/base.h`

**Классы/структуры:**

- `struct void_t_impl`
- `struct monostate` — методы: `monostate`
- `class int128_opt`
- `class uint128_opt`
- `struct bitint`
- `struct ubitint`
- `struct is_std_string_like` _(наследует: : std::false_type)_
- `struct is_back_insert_iterator` _(наследует: : std::false_type)_
- `struct accessor` _(наследует: : OutputIt)_ — методы: `OutputIt`
- `class basic_string_view` — методы: `size_`, `data_`
- `struct is_xchar` _(наследует: : std::false_type)_
- `struct is_char` _(наследует: : is_xchar<T>)_

**Функции:** `monostate()`, `ignore_unused(const T&...)`, `narrow(const T*)`, `narrow(const char* s)`, `remove_prefix(size_t n)`, `set_fill_size(size_t size)`, `set_type(presentation_type t)`, `set_align(fmt::align a)`, `set_dynamic_width(arg_id_kind w)`, `set_dynamic_precision(arg_id_kind p)`, `dynamic()`, `set_sign(fmt::sign s)`, `set_upper()`, `set_alt()`, `clear_alt()` …

### `deps/spdlog/include/spdlog/fmt/bundled/chrono.h`

**Классы/структуры:**

- `struct Factor` _(наследует: : std::ratio_divide<typename From::period, typename To::period>)_
- `struct utc_clock` — методы: `to_sys`
- `struct local_t`
- `struct null`
- `class formatbuf` _(наследует: : public StreamBuf)_ — методы: `buffer_`, `append`
- `struct codecvt_result`
- `struct time_zone`
- `struct dispatcher` — методы: `time_`, `localtime`
- `struct dispatcher` — методы: `time_`, `gmtime`
- `class numeric_system`
- `class pad_type`
- `struct null_chrono_spec_handler` — методы: `unsupported`, `on_year`, `on_short_year`, `on_offset_year`, `on_century`, `on_iso_week_based_year`, `on_iso_week_based_short_year`, `on_abbr_weekday`, `on_full_weekday`, `on_dec0_weekday`, `on_dec1_weekday`, `on_abbr_month` …

**Функции:** `write_codecvt(codecvt_result<CodeUnit>& out, string_view in, const std::lo)`, `do_write(buffer<Char>& buf, const std::tm& time, const std::locale& l)`, `throw_duration_error()`, `_tzset(T...)`, `tzset_once()`, `write_digit2_separated(char* buf, unsigned a, unsigned b, unsigned c, char sep)`, `unsupported()`, `on_year(numeric_system, pad_type)`, `on_short_year(numeric_system)`, `on_offset_year()`, `on_century(numeric_system)`, `on_iso_week_based_year()`, `on_iso_week_based_short_year()`, `on_abbr_weekday()`, `on_full_weekday()` …

### `deps/spdlog/include/spdlog/fmt/bundled/format.h`

**Классы/структуры:**

- `struct std_string_view`
- `struct string_literal`
- `struct bytes`
- `class uint128_fallback` — методы: `hi_`, `T`, `uint128_fallback`, `FMT_ASSERT`, `__builtin_addcll`, `__builtin_ia32_addcarryx_u64`, `_addcarry_u64`
- `struct data_t`
- `struct count_code_points`
- `struct is_integral` _(наследует: : std::is_integral<T>)_
- `struct float128`
- `struct is_floating_point` _(наследует: : std::is_floating_point<T>)_
- `struct is_fast_float` _(наследует: : bool_constant<std::numeric_limits<T>::is_iec559 && sizeof(T) <= sizeof(double))_
- `struct allocator` — методы: `allocate`, `deallocate`, `free`
- `class basic_memory_buffer` _(наследует: : public detail::buffer<T>)_ — методы: `deallocate`, `data`, `grow`, `abort_fuzzing_if`, `max_size`, `capacity`, `max_of`, `allocate`, `set`, `alloc_`, `basic_memory_buffer`, `move` …

**Функции:** `do_throw(const Exception& x)`, `abort_fuzzing_if(bool condition)`, `T()`, `assume(bool condition)`, `for_each_codepoint(string_view s, F f)`, `allocate(size_t n)`, `deallocate(T* p, size_t)`, `deallocate()`, `grow(detail::buffer<T>& buf, size_t size)`, `move(basic_memory_buffer& other)`, `resize(size_t count)`, `reserve(size_t new_capacity)`, `append(const ContiguousRange& range)`, `print(format_string<T...> fmt, T&&... args)`, `writer()` …

### `deps/TinyDeflate/gunzip.hh`

**Классы/структуры:**

- `struct DeflateTrackTagBase`
- `struct DeflateTrackNoSize` _(наследует: : public DeflateTrackTagBase)_
- `struct DeflateTrackInSize` _(наследует: : public DeflateTrackTagBase)_
- `struct DeflateTrackOutSize` _(наследует: : public DeflateTrackTagBase)_
- `struct DeflateTrackBothSize` _(наследует: : public DeflateTrackTagBase)_
- `struct RandomAccessBitArrayBase` — методы: `throw`, `Get_Unclean`, `assert`
- `struct RandomAccessBitArray` — методы: `throw`
- `struct dummy`
- `struct CeilLog2_s`
- `struct FloorLog2_s`
- `struct RandomAccessArray`
- `struct result_of`

**Функции:** `Get(unsigned index)`, `Set(unsigned index, std::uint_fast32_t value)`, `QSet(unsigned index, std::uint_fast32_t value)`, `WSet(unsigned index, std::uint_fast64_t value)`, `Set(unsigned index, E value)`, `QSet(unsigned index, E value)`, `lbase(unsigned lencode)`, `rshift(unsigned a)`, `dbase(unsigned distcode)`, `dbits(unsigned distcode)`, `lbits(unsigned lencode)`, `output(OutputFunctor&& output, unsigned char byte)`, `outputcopy(WindowFunctor&& outputcopy, std::uint_least16_t length, std:)`, `outputcopy(WindowFunctor&& outputcopy, std::uint_least16_t& length, std)`, `OutByte()` …

### `doxygen-master/deps/filesystem/filesystem.hpp`

**Классы/структуры:**

- `class not_implemented_exception` _(наследует: : public std::logic_error)_ — методы: `logic_error`
- `class path_helper_base`
- `struct _is_basic_string` _(наследует: : std::false_type)_
- `class input_iterator_range` — методы: `_last`, `begin`, `end`
- `class filesystem_error` _(наследует: : public std::system_error)_ — методы: `filesystem_error`
- `class path` _(наследует: ::iterator)_ — методы: `iterator`, `increment`, `decrement`, `updateCurrent`
- `struct space_info`
- `class file_type`
- `class perms` _(наследует: : uint16_t)_
- `class perm_options` _(наследует: : uint16_t)_
- `class copy_options` _(наследует: : uint16_t)_
- `class directory_options` _(наследует: : uint16_t)_

**Функции:** `std::logic_error("function not implemented yet.")`, `_last(last)`, `begin()`, `end()`, `_dir_entry(dir_entry)`, `_recursion_pending(recursion_pending)`, `basic_filebuf()`, `open(const path& p, std::ios_base::openmode mode)`, `basic_ifstream()`, `open(const path& p, std::ios_base::openmode mode = std::ios_base:)`, `basic_ofstream()`, `open(const path& p, std::ios_base::openmode mode = std::ios_base:)`, `basic_fstream()`, `open(const path& p, std::ios_base::openmode mode = std::ios_base:)`, `valid()` …

### `doxygen-master/deps/fmt/include/fmt/base.h`

**Классы/структуры:**

- `struct void_t_impl`
- `struct monostate` — методы: `monostate`
- `class int128_opt`
- `class uint128_opt`
- `struct bitint`
- `struct ubitint`
- `struct is_std_string_like` _(наследует: : std::false_type)_
- `struct is_back_insert_iterator` _(наследует: : std::false_type)_
- `struct accessor` _(наследует: : OutputIt)_ — методы: `OutputIt`
- `class basic_string_view` — методы: `size_`, `data_`
- `struct is_xchar` _(наследует: : std::false_type)_
- `struct is_char` _(наследует: : is_xchar<T>)_

**Функции:** `monostate()`, `ignore_unused(const T&...)`, `narrow(const T*)`, `narrow(const char* s)`, `remove_prefix(size_t n)`, `set_fill_size(size_t size)`, `set_type(presentation_type t)`, `set_align(fmt::align a)`, `set_dynamic_width(arg_id_kind w)`, `set_dynamic_precision(arg_id_kind p)`, `dynamic()`, `set_sign(fmt::sign s)`, `set_upper()`, `set_alt()`, `clear_alt()` …

### `doxygen-master/deps/fmt/include/fmt/chrono.h`

**Классы/структуры:**

- `struct Factor` _(наследует: : std::ratio_divide<typename From::period, typename To::period>)_
- `struct utc_clock` — методы: `to_sys`
- `struct local_t`
- `struct null`
- `class formatbuf` _(наследует: : public StreamBuf)_ — методы: `buffer_`, `append`
- `struct codecvt_result`
- `struct time_zone`
- `struct dispatcher` — методы: `time_`, `localtime`
- `struct dispatcher` — методы: `time_`, `gmtime`
- `class numeric_system`
- `class pad_type`
- `struct null_chrono_spec_handler` — методы: `unsupported`, `on_year`, `on_short_year`, `on_offset_year`, `on_century`, `on_iso_week_based_year`, `on_iso_week_based_short_year`, `on_abbr_weekday`, `on_full_weekday`, `on_dec0_weekday`, `on_dec1_weekday`, `on_abbr_month` …

**Функции:** `write_codecvt(codecvt_result<CodeUnit>& out, string_view in, const std::lo)`, `do_write(buffer<Char>& buf, const std::tm& time, const std::locale& l)`, `throw_duration_error()`, `_tzset(T...)`, `tzset_once()`, `write_digit2_separated(char* buf, unsigned a, unsigned b, unsigned c, char sep)`, `unsupported()`, `on_year(numeric_system, pad_type)`, `on_short_year(numeric_system)`, `on_offset_year()`, `on_century(numeric_system)`, `on_iso_week_based_year()`, `on_iso_week_based_short_year()`, `on_abbr_weekday()`, `on_full_weekday()` …

### `doxygen-master/deps/fmt/include/fmt/format.h`

**Классы/структуры:**

- `struct std_string_view`
- `struct string_literal`
- `struct bytes`
- `class uint128_fallback` — методы: `hi_`, `T`, `uint128_fallback`, `FMT_ASSERT`, `__builtin_addcll`, `__builtin_ia32_addcarryx_u64`, `_addcarry_u64`
- `struct data_t`
- `struct count_code_points`
- `struct is_integral` _(наследует: : std::is_integral<T>)_
- `struct float128`
- `struct is_floating_point` _(наследует: : std::is_floating_point<T>)_
- `struct is_fast_float` _(наследует: : bool_constant<std::numeric_limits<T>::is_iec559 && sizeof(T) <= sizeof(double))_
- `struct allocator` — методы: `allocate`, `deallocate`, `free`
- `class basic_memory_buffer` _(наследует: : public detail::buffer<T>)_ — методы: `deallocate`, `data`, `grow`, `abort_fuzzing_if`, `max_size`, `capacity`, `max_of`, `allocate`, `set`, `alloc_`, `basic_memory_buffer`, `move` …

**Функции:** `do_throw(const Exception& x)`, `abort_fuzzing_if(bool condition)`, `T()`, `assume(bool condition)`, `for_each_codepoint(string_view s, F f)`, `allocate(size_t n)`, `deallocate(T* p, size_t)`, `deallocate()`, `grow(detail::buffer<T>& buf, size_t size)`, `move(basic_memory_buffer& other)`, `resize(size_t count)`, `reserve(size_t new_capacity)`, `append(const ContiguousRange& range)`, `print(format_string<T...> fmt, T&&... args)`, `writer()` …

### `doxygen-master/deps/spdlog/include/spdlog/fmt/bundled/base.h`

**Классы/структуры:**

- `struct void_t_impl`
- `struct monostate` — методы: `monostate`
- `class int128_opt`
- `class uint128_opt`
- `struct bitint`
- `struct ubitint`
- `struct is_std_string_like` _(наследует: : std::false_type)_
- `struct is_back_insert_iterator` _(наследует: : std::false_type)_
- `struct accessor` _(наследует: : OutputIt)_ — методы: `OutputIt`
- `class basic_string_view` — методы: `size_`, `data_`
- `struct is_xchar` _(наследует: : std::false_type)_
- `struct is_char` _(наследует: : is_xchar<T>)_

**Функции:** `monostate()`, `ignore_unused(const T&...)`, `narrow(const T*)`, `narrow(const char* s)`, `remove_prefix(size_t n)`, `set_fill_size(size_t size)`, `set_type(presentation_type t)`, `set_align(fmt::align a)`, `set_dynamic_width(arg_id_kind w)`, `set_dynamic_precision(arg_id_kind p)`, `dynamic()`, `set_sign(fmt::sign s)`, `set_upper()`, `set_alt()`, `clear_alt()` …

### `doxygen-master/deps/spdlog/include/spdlog/fmt/bundled/chrono.h`

**Классы/структуры:**

- `struct Factor` _(наследует: : std::ratio_divide<typename From::period, typename To::period>)_
- `struct utc_clock` — методы: `to_sys`
- `struct local_t`
- `struct null`
- `class formatbuf` _(наследует: : public StreamBuf)_ — методы: `buffer_`, `append`
- `struct codecvt_result`
- `struct time_zone`
- `struct dispatcher` — методы: `time_`, `localtime`
- `struct dispatcher` — методы: `time_`, `gmtime`
- `class numeric_system`
- `class pad_type`
- `struct null_chrono_spec_handler` — методы: `unsupported`, `on_year`, `on_short_year`, `on_offset_year`, `on_century`, `on_iso_week_based_year`, `on_iso_week_based_short_year`, `on_abbr_weekday`, `on_full_weekday`, `on_dec0_weekday`, `on_dec1_weekday`, `on_abbr_month` …

**Функции:** `write_codecvt(codecvt_result<CodeUnit>& out, string_view in, const std::lo)`, `do_write(buffer<Char>& buf, const std::tm& time, const std::locale& l)`, `throw_duration_error()`, `_tzset(T...)`, `tzset_once()`, `write_digit2_separated(char* buf, unsigned a, unsigned b, unsigned c, char sep)`, `unsupported()`, `on_year(numeric_system, pad_type)`, `on_short_year(numeric_system)`, `on_offset_year()`, `on_century(numeric_system)`, `on_iso_week_based_year()`, `on_iso_week_based_short_year()`, `on_abbr_weekday()`, `on_full_weekday()` …

### `doxygen-master/deps/spdlog/include/spdlog/fmt/bundled/format.h`

**Классы/структуры:**

- `struct std_string_view`
- `struct string_literal`
- `struct bytes`
- `class uint128_fallback` — методы: `hi_`, `T`, `uint128_fallback`, `FMT_ASSERT`, `__builtin_addcll`, `__builtin_ia32_addcarryx_u64`, `_addcarry_u64`
- `struct data_t`
- `struct count_code_points`
- `struct is_integral` _(наследует: : std::is_integral<T>)_
- `struct float128`
- `struct is_floating_point` _(наследует: : std::is_floating_point<T>)_
- `struct is_fast_float` _(наследует: : bool_constant<std::numeric_limits<T>::is_iec559 && sizeof(T) <= sizeof(double))_
- `struct allocator` — методы: `allocate`, `deallocate`, `free`
- `class basic_memory_buffer` _(наследует: : public detail::buffer<T>)_ — методы: `deallocate`, `data`, `grow`, `abort_fuzzing_if`, `max_size`, `capacity`, `max_of`, `allocate`, `set`, `alloc_`, `basic_memory_buffer`, `move` …

**Функции:** `do_throw(const Exception& x)`, `abort_fuzzing_if(bool condition)`, `T()`, `assume(bool condition)`, `for_each_codepoint(string_view s, F f)`, `allocate(size_t n)`, `deallocate(T* p, size_t)`, `deallocate()`, `grow(detail::buffer<T>& buf, size_t size)`, `move(basic_memory_buffer& other)`, `resize(size_t count)`, `reserve(size_t new_capacity)`, `append(const ContiguousRange& range)`, `print(format_string<T...> fmt, T&&... args)`, `writer()` …

### `doxygen-master/deps/TinyDeflate/gunzip.hh`

**Классы/структуры:**

- `struct DeflateTrackTagBase`
- `struct DeflateTrackNoSize` _(наследует: : public DeflateTrackTagBase)_
- `struct DeflateTrackInSize` _(наследует: : public DeflateTrackTagBase)_
- `struct DeflateTrackOutSize` _(наследует: : public DeflateTrackTagBase)_
- `struct DeflateTrackBothSize` _(наследует: : public DeflateTrackTagBase)_
- `struct RandomAccessBitArrayBase` — методы: `throw`, `Get_Unclean`, `assert`
- `struct RandomAccessBitArray` — методы: `throw`
- `struct dummy`
- `struct CeilLog2_s`
- `struct FloorLog2_s`
- `struct RandomAccessArray`
- `struct result_of`

**Функции:** `Get(unsigned index)`, `Set(unsigned index, std::uint_fast32_t value)`, `QSet(unsigned index, std::uint_fast32_t value)`, `WSet(unsigned index, std::uint_fast64_t value)`, `Set(unsigned index, E value)`, `QSet(unsigned index, E value)`, `lbase(unsigned lencode)`, `rshift(unsigned a)`, `dbase(unsigned distcode)`, `dbits(unsigned distcode)`, `lbits(unsigned lencode)`, `output(OutputFunctor&& output, unsigned char byte)`, `outputcopy(WindowFunctor&& outputcopy, std::uint_least16_t length, std:)`, `outputcopy(WindowFunctor&& outputcopy, std::uint_least16_t& length, std)`, `OutByte()` …

### `doxygen-master/src/docnode.h`

**Классы/структуры:**

- `class DocNode` — методы: `m_parent`, `parent`, `thisVariant`, `setThisVariant`, `parser`, `setParent`, `isPreformatted`, `setInsidePreformatted`
- `class final` _(наследует: : public GrowVector<DocNodeVariant>)_ — методы: `append`, `move_append`, `get_last`
- `class DocCompoundNode` _(наследует: : public DocNode)_ — методы: `DocNode`, `children`
- `class final` _(наследует: : public DocNode)_ — методы: `DocWord`, `word`
- `class final` _(наследует: : public DocNode)_ — методы: `word`, `file`, `relPath`, `ref`, `anchor`, `tooltip`
- `class final` _(наследует: : public DocNode)_ — методы: `m_isEmail`, `url`, `isEmail`
- `class final` _(наследует: : public DocNode)_ — методы: `DocNode`, `m_attribs`, `attribs`
- `class final` _(наследует: : public DocNode)_ — методы: `m_attribs`, `attribs`
- `class final` _(наследует: : public DocNode)_ — методы: `DocAnchor`, `anchor`, `file`, `attribs`
- `class final` _(наследует: : public DocNode)_ — методы: `DocCite`, `file`, `relPath`, `ref`, `anchor`, `target`, `option`, `getText`
- `class final` _(наследует: : public DocNode)_ — методы: `m_enable`, `lower`, `m_lineNr`, `style`, `styleString`, `enable`, `position`, `attribs`, `tagName`, `fileName`, `lineNr`
- `class final` _(наследует: : public DocNode)_ — методы: `m_symbol`, `symbol`, `decodeSymbol`

**Функции:** `parent()`, `thisVariant()`, `setThisVariant(DocNodeVariant *thisVariant)`, `parser()`, `setParent(DocNodeVariant *parent)`, `isPreformatted()`, `setInsidePreformatted(bool p)`, `DocNode(parser,parent)`, `children()`, `word()`, `file()`, `relPath()`, `ref()`, `anchor()`, `tooltip()` …

### `doxygen-master/src/doxygen.cpp`

**Классы/структуры:**

- `class Statistics` — методы: `Statistics`, `begin`, `emplace_back`, `now`, `end`, `warn_flush`, `print`, `clearFlag`, `msg`, `setFlag`, `elapsed`
- `struct stat` — методы: `elapsed`
- `class definition` — методы: `name`
- `struct ClassAlias` — методы: `aliasContext`
- `class N` _(наследует: ::C)_
- `struct std` _(наследует: ::hash<MyClass>`. if (cd->localName().find('<')==DString::npos))_
- `struct S`
- `class variable` _(наследует: : file=')_
- `class nested` — методы: `setArtificial`
- `struct EnumValueInfo`
- `struct SourceContext` — методы: `ol`
- `struct DocContext` — методы: `ol`

**Функции:** `clearAll()`, `Statistics()`, `begin(const char *name)`, `end()`, `print()`, `addIncludeFile(Def *def,FileDef *ifd,const Entry *root)`, `addPageToContext(PageDef *pd,Entry *root)`, `addRelatedPage(Entry *root)`, `buildGroupListFiltered(const Entry *root,bool additional, bool includeExternal)`, `buildGroupList(const Entry *root)`, `findGroupScope(const Entry *root)`, `organizeSubGroupsFiltered(const Entry *root,bool additional)`, `organizeSubGroups(const Entry *root)`, `buildFileList(const Entry *root)`, `stripTemplateSpecifiers(const DString &s)` …

### `doxygen-master/src/tagreader.cpp`

**Классы/структуры:**

- `class TagAnchorInfo` — методы: `title`
- `class TagEnumValueInfo`
- `class TagIncludeInfo`
- `class TagMemberInfo`
- `struct TagCompoundInfo`
- `struct final` _(наследует: : public TagCompoundInfo)_ — методы: `kind`
- `class Kind`
- `struct final` _(наследует: : public TagCompoundInfo)_
- `struct final` _(наследует: : public TagCompoundInfo)_
- `struct final` _(наследует: : public TagCompoundInfo)_
- `struct final` _(наследует: : public TagCompoundInfo)_
- `struct final` _(наследует: : public TagCompoundInfo)_

**Функции:** `TagCompoundVariant()`, `get()`, `make(Args&&... args)`, `getClassInfo()`, `getConceptInfo()`, `getNamespaceInfo()`, `getPackageInfo()`, `getFileInfo()`, `getGroupInfo()`, `getPageInfo()`, `getDirInfo()`, `getModuleInfo()`, `getRequirementInfo()`, `getCompoundInfo()`, `type()` …

### `doxygen-master/src/translator_adapter.h`

**Классы/структуры:**

- `class TranslatorAdapterBase` _(наследует: : public Translator)_ — методы: `createUpdateNeededMessage`
- `class TranslatorAdapter_1_16_0` _(наследует: : public TranslatorAdapterBase)_ — методы: `updateNeededMessage`, `trRequirements`, `trRequirementID`, `trSatisfies`, `trSatisfiedBy`, `trUnsatisfiedRequirements`, `trUnsatisfiedRequirementsText`, `trVerifies`, `trVerifiedBy`, `trUnverifiedRequirements`, `trUnverifiedRequirementsText`
- `class TranslatorAdapter_1_11_0` _(наследует: : public TranslatorAdapter_1_16_0)_ — методы: `updateNeededMessage`, `trImportant`
- `class TranslatorAdapter_1_10_0` _(наследует: : public TranslatorAdapter_1_11_0)_ — методы: `updateNeededMessage`, `trCopyToClipboard`
- `class TranslatorAdapter_1_9_8` _(наследует: : public TranslatorAdapter_1_10_0)_ — методы: `updateNeededMessage`, `trTopics`, `trTopicDocumentation`, `trTopicList`, `trTopicIndex`, `trTopicListDescription`, `trModuleMembersDescriptionTotal`, `trExportedModules`
- `class TranslatorAdapter_1_9_6` _(наследует: : public TranslatorAdapter_1_9_8)_ — методы: `updateNeededMessage`, `trRelatedSymbols`, `trRelatedFunctions`, `trRelatedSymbolsSubscript`, `trRelatedSubscript`, `trRelatedSymbolDocumentation`, `trRelatedFunctionDocumentation`, `trCompoundType`, `trFileMembersDescriptionTotal`, `trCompoundMembersDescriptionTotal`, `trNamespaceMembersDescriptionTotal`, `trDefinition` …
- `class TranslatorAdapter_1_9_5` _(наследует: : public TranslatorAdapter_1_9_6)_ — методы: `updateNeededMessage`, `trFlowchart`
- `class TranslatorAdapter_1_9_4` _(наследует: : public TranslatorAdapter_1_9_5)_ — методы: `updateNeededMessage`, `trPackageList`
- `class TranslatorAdapter_1_9_2` _(наследует: : public TranslatorAdapter_1_9_4)_ — методы: `updateNeededMessage`, `trConcept`, `trConceptReference`, `trConceptList`, `trConceptIndex`, `trConceptDocumentation`, `trConceptListDescription`, `trConceptDefinition`
- `class TranslatorAdapter_1_8_19` _(наследует: : public TranslatorAdapter_1_9_2)_ — методы: `updateNeededMessage`, `trDesignUnitDocumentation`
- `class TranslatorAdapter_1_8_15` _(наследует: : public TranslatorAdapter_1_8_19)_ — методы: `updateNeededMessage`, `trDesignUnitHierarchy`, `trDesignUnitList`, `trDesignUnitMembers`, `trDesignUnitListDescription`, `trDesignUnitIndex`, `trDesignUnits`, `trFunctionAndProc`, `trVhdlType`, `trCustomReference`, `trConstants`, `trConstantDocumentation` …
- `class TranslatorAdapter_1_8_4` _(наследует: : public TranslatorAdapter_1_8_15)_ — методы: `updateNeededMessage`, `trInterfaces`, `trServices`, `trConstantGroups`, `trConstantGroupReference`, `trServiceReference`, `trSingletonReference`, `trServiceGeneratedFromFiles`, `trSingletonGeneratedFromFiles`

**Функции:** `createUpdateNeededMessage(const DString & languageName, const DString & versionString)`, `updateNeededMessage()`, `trRequirements()`, `trRequirementID()`, `trSatisfies(bool singular)`, `trSatisfiedBy(const DString &list)`, `trUnsatisfiedRequirements()`, `trUnsatisfiedRequirementsText(bool singular,const DString &list)`, `trVerifies(bool singular)`, `trVerifiedBy(const DString &list)`, `trUnverifiedRequirements()`, `trUnverifiedRequirementsText(bool singular,const DString &list)`, `trImportant()`, `trCopyToClipboard()`, `trTopics()` …

### `doxygen-master/src/translator_fi.h`

**Классы/структуры:**

- `class TranslatorFinnish` _(наследует: : public TranslatorAdapter_1_6_0)_
- `class Nakymaton`
- `class Invisible`
- `class Katkaistu` _(наследует: : public Nakymaton)_
- `class Truncated` _(наследует: : public Invisible)_
- `class Dokumentoimaton`
- `class Undocumented`
- `class JulkinenKanta` _(наследует: : public Katkaistu)_
- `class PublicBase` _(наследует: : public Truncated)_
- `class Malli`
- `class Templ`
- `class SuojeltuKanta`

**Функции:** `idLanguage()`, `latexLanguageSupportCommand()`, `trISOLang()`, `getLanguageString()`, `trRelatedFunctions()`, `trRelatedSubscript()`, `trDetailedDescription()`, `trDetails()`, `trMemberEnumerationDocumentation()`, `trMemberFunctionDocumentation()`, `trMemberDataDocumentation()`, `trMore()`, `trListOfAllMembers()`, `trThisIsTheListOfAllMembers()`, `trIncludingInheritedMembers()` …

### `doxygen-master/src/types.h`

**Классы/структуры:**

- `class Protection`
- `class Specifier`
- `class MethodTypes`
- `class RelatesType`
- `class Relationship`
- `class SrcLangExt`
- `struct Grouping` — методы: `pri`
- `class MemberListType` — методы: `MemberListType`, `x`, `to_string`, `Invalid`, `to_pub`, `to_prot`, `m_type`, `bits_to_string`
- `class MemberListContainer`
- `class CodeSymbolType`
- `class MemberType`
- `class FortranFormat`

**Функции:** `getGroupPriName(GroupPri_t priority)`, `Invalid()`, `isInvalid()`, `x()`, `isPublic()`, `isOnlyPublic()`, `isProtected()`, `isPackage()`, `isPrivate()`, `isDetailed()`, `isDeclaration()`, `isDocumentation()`, `to_string()`, `to_int()`, `toLabel()` …

### `src/docnode.h`

**Классы/структуры:**

- `class DocNode` — методы: `m_parent`, `parent`, `thisVariant`, `setThisVariant`, `parser`, `setParent`, `isPreformatted`, `setInsidePreformatted`
- `class final` _(наследует: : public GrowVector<DocNodeVariant>)_ — методы: `append`, `move_append`, `get_last`
- `class DocCompoundNode` _(наследует: : public DocNode)_ — методы: `DocNode`, `children`
- `class final` _(наследует: : public DocNode)_ — методы: `DocWord`, `word`
- `class final` _(наследует: : public DocNode)_ — методы: `word`, `file`, `relPath`, `ref`, `anchor`, `tooltip`
- `class final` _(наследует: : public DocNode)_ — методы: `m_isEmail`, `url`, `isEmail`
- `class final` _(наследует: : public DocNode)_ — методы: `DocNode`, `m_attribs`, `attribs`
- `class final` _(наследует: : public DocNode)_ — методы: `m_attribs`, `attribs`
- `class final` _(наследует: : public DocNode)_ — методы: `DocAnchor`, `anchor`, `file`, `attribs`
- `class final` _(наследует: : public DocNode)_ — методы: `DocCite`, `file`, `relPath`, `ref`, `anchor`, `target`, `option`, `getText`
- `class final` _(наследует: : public DocNode)_ — методы: `m_enable`, `lower`, `m_lineNr`, `style`, `styleString`, `enable`, `position`, `attribs`, `tagName`, `fileName`, `lineNr`
- `class final` _(наследует: : public DocNode)_ — методы: `m_symbol`, `symbol`, `decodeSymbol`

**Функции:** `parent()`, `thisVariant()`, `setThisVariant(DocNodeVariant *thisVariant)`, `parser()`, `setParent(DocNodeVariant *parent)`, `isPreformatted()`, `setInsidePreformatted(bool p)`, `DocNode(parser,parent)`, `children()`, `word()`, `file()`, `relPath()`, `ref()`, `anchor()`, `tooltip()` …

### `src/doxygen.cpp`

**Классы/структуры:**

- `class Statistics` — методы: `Statistics`, `begin`, `emplace_back`, `now`, `end`, `warn_flush`, `print`, `clearFlag`, `msg`, `setFlag`, `elapsed`
- `struct stat` — методы: `elapsed`
- `class definition` — методы: `name`
- `struct ClassAlias` — методы: `aliasContext`
- `class N` _(наследует: ::C)_
- `struct std` _(наследует: ::hash<MyClass>`. if (cd->localName().find('<')==DString::npos))_
- `struct S`
- `class variable` _(наследует: : file=')_
- `class nested` — методы: `setArtificial`
- `struct EnumValueInfo`
- `struct SourceContext` — методы: `ol`
- `struct DocContext` — методы: `ol`

**Функции:** `clearAll()`, `Statistics()`, `begin(const char *name)`, `end()`, `print()`, `addIncludeFile(Def *def,FileDef *ifd,const Entry *root)`, `addPageToContext(PageDef *pd,Entry *root)`, `addRelatedPage(Entry *root)`, `buildGroupListFiltered(const Entry *root,bool additional, bool includeExternal)`, `buildGroupList(const Entry *root)`, `findGroupScope(const Entry *root)`, `organizeSubGroupsFiltered(const Entry *root,bool additional)`, `organizeSubGroups(const Entry *root)`, `buildFileList(const Entry *root)`, `stripTemplateSpecifiers(const DString &s)` …

### `src/tagreader.cpp`

**Классы/структуры:**

- `class TagAnchorInfo` — методы: `title`
- `class TagEnumValueInfo`
- `class TagIncludeInfo`
- `class TagMemberInfo`
- `struct TagCompoundInfo`
- `struct final` _(наследует: : public TagCompoundInfo)_ — методы: `kind`
- `class Kind`
- `struct final` _(наследует: : public TagCompoundInfo)_
- `struct final` _(наследует: : public TagCompoundInfo)_
- `struct final` _(наследует: : public TagCompoundInfo)_
- `struct final` _(наследует: : public TagCompoundInfo)_
- `struct final` _(наследует: : public TagCompoundInfo)_

**Функции:** `TagCompoundVariant()`, `get()`, `make(Args&&... args)`, `getClassInfo()`, `getConceptInfo()`, `getNamespaceInfo()`, `getPackageInfo()`, `getFileInfo()`, `getGroupInfo()`, `getPageInfo()`, `getDirInfo()`, `getModuleInfo()`, `getRequirementInfo()`, `getCompoundInfo()`, `type()` …

### `src/translator_adapter.h`

**Классы/структуры:**

- `class TranslatorAdapterBase` _(наследует: : public Translator)_ — методы: `createUpdateNeededMessage`
- `class TranslatorAdapter_1_16_0` _(наследует: : public TranslatorAdapterBase)_ — методы: `updateNeededMessage`, `trRequirements`, `trRequirementID`, `trSatisfies`, `trSatisfiedBy`, `trUnsatisfiedRequirements`, `trUnsatisfiedRequirementsText`, `trVerifies`, `trVerifiedBy`, `trUnverifiedRequirements`, `trUnverifiedRequirementsText`
- `class TranslatorAdapter_1_11_0` _(наследует: : public TranslatorAdapter_1_16_0)_ — методы: `updateNeededMessage`, `trImportant`
- `class TranslatorAdapter_1_10_0` _(наследует: : public TranslatorAdapter_1_11_0)_ — методы: `updateNeededMessage`, `trCopyToClipboard`
- `class TranslatorAdapter_1_9_8` _(наследует: : public TranslatorAdapter_1_10_0)_ — методы: `updateNeededMessage`, `trTopics`, `trTopicDocumentation`, `trTopicList`, `trTopicIndex`, `trTopicListDescription`, `trModuleMembersDescriptionTotal`, `trExportedModules`
- `class TranslatorAdapter_1_9_6` _(наследует: : public TranslatorAdapter_1_9_8)_ — методы: `updateNeededMessage`, `trRelatedSymbols`, `trRelatedFunctions`, `trRelatedSymbolsSubscript`, `trRelatedSubscript`, `trRelatedSymbolDocumentation`, `trRelatedFunctionDocumentation`, `trCompoundType`, `trFileMembersDescriptionTotal`, `trCompoundMembersDescriptionTotal`, `trNamespaceMembersDescriptionTotal`, `trDefinition` …
- `class TranslatorAdapter_1_9_5` _(наследует: : public TranslatorAdapter_1_9_6)_ — методы: `updateNeededMessage`, `trFlowchart`
- `class TranslatorAdapter_1_9_4` _(наследует: : public TranslatorAdapter_1_9_5)_ — методы: `updateNeededMessage`, `trPackageList`
- `class TranslatorAdapter_1_9_2` _(наследует: : public TranslatorAdapter_1_9_4)_ — методы: `updateNeededMessage`, `trConcept`, `trConceptReference`, `trConceptList`, `trConceptIndex`, `trConceptDocumentation`, `trConceptListDescription`, `trConceptDefinition`
- `class TranslatorAdapter_1_8_19` _(наследует: : public TranslatorAdapter_1_9_2)_ — методы: `updateNeededMessage`, `trDesignUnitDocumentation`
- `class TranslatorAdapter_1_8_15` _(наследует: : public TranslatorAdapter_1_8_19)_ — методы: `updateNeededMessage`, `trDesignUnitHierarchy`, `trDesignUnitList`, `trDesignUnitMembers`, `trDesignUnitListDescription`, `trDesignUnitIndex`, `trDesignUnits`, `trFunctionAndProc`, `trVhdlType`, `trCustomReference`, `trConstants`, `trConstantDocumentation` …
- `class TranslatorAdapter_1_8_4` _(наследует: : public TranslatorAdapter_1_8_15)_ — методы: `updateNeededMessage`, `trInterfaces`, `trServices`, `trConstantGroups`, `trConstantGroupReference`, `trServiceReference`, `trSingletonReference`, `trServiceGeneratedFromFiles`, `trSingletonGeneratedFromFiles`

**Функции:** `createUpdateNeededMessage(const DString & languageName, const DString & versionString)`, `updateNeededMessage()`, `trRequirements()`, `trRequirementID()`, `trSatisfies(bool singular)`, `trSatisfiedBy(const DString &list)`, `trUnsatisfiedRequirements()`, `trUnsatisfiedRequirementsText(bool singular,const DString &list)`, `trVerifies(bool singular)`, `trVerifiedBy(const DString &list)`, `trUnverifiedRequirements()`, `trUnverifiedRequirementsText(bool singular,const DString &list)`, `trImportant()`, `trCopyToClipboard()`, `trTopics()` …

### `src/translator_fi.h`

**Классы/структуры:**

- `class TranslatorFinnish` _(наследует: : public TranslatorAdapter_1_6_0)_
- `class Nakymaton`
- `class Invisible`
- `class Katkaistu` _(наследует: : public Nakymaton)_
- `class Truncated` _(наследует: : public Invisible)_
- `class Dokumentoimaton`
- `class Undocumented`
- `class JulkinenKanta` _(наследует: : public Katkaistu)_
- `class PublicBase` _(наследует: : public Truncated)_
- `class Malli`
- `class Templ`
- `class SuojeltuKanta`

**Функции:** `idLanguage()`, `latexLanguageSupportCommand()`, `trISOLang()`, `getLanguageString()`, `trRelatedFunctions()`, `trRelatedSubscript()`, `trDetailedDescription()`, `trDetails()`, `trMemberEnumerationDocumentation()`, `trMemberFunctionDocumentation()`, `trMemberDataDocumentation()`, `trMore()`, `trListOfAllMembers()`, `trThisIsTheListOfAllMembers()`, `trIncludingInheritedMembers()` …

### `src/types.h`

**Классы/структуры:**

- `class Protection`
- `class Specifier`
- `class MethodTypes`
- `class RelatesType`
- `class Relationship`
- `class SrcLangExt`
- `struct Grouping` — методы: `pri`
- `class MemberListType` — методы: `MemberListType`, `x`, `to_string`, `Invalid`, `to_pub`, `to_prot`, `m_type`, `bits_to_string`
- `class MemberListContainer`
- `class CodeSymbolType`
- `class MemberType`
- `class FortranFormat`

**Функции:** `getGroupPriName(GroupPri_t priority)`, `Invalid()`, `isInvalid()`, `x()`, `isPublic()`, `isOnlyPublic()`, `isProtected()`, `isPackage()`, `isPrivate()`, `isDetailed()`, `isDeclaration()`, `isDocumentation()`, `to_string()`, `to_int()`, `toLabel()` …

### `doxygen-master/src/configimpl.h`

**Классы/структуры:**

- `class ConfigOption` — методы: `m_kind`, `fill`, `kind`, `name`, `docs`, `dependsOn`, `addDependency`, `setEncoding`, `setUserComment`, `convertStrToVal`, `emptyValueToDefault`, `init` …
- `class final` _(наследует: : public ConfigOption)_ — методы: `ConfigOption`, `writeTemplate`, `compareDoxyfile`, `writeXMLDoxyfile`, `writeXSDDoxyfile`, `substEnvVars`
- `class final` _(наследует: : public ConfigOption)_ — методы: `ConfigOption`, `addValue`, `emplace_back`, `setWidgetType`, `widgetType`, `valueRef`, `getDefault`, `emptyValueToDefault`, `writeTemplate`, `compareDoxyfile`, `writeXMLDoxyfile`, `writeXSDDoxyfile` …
- `class final` _(наследует: : public ConfigOption)_ — методы: `ConfigOption`, `addValue`, `emplace_back`, `values`, `valueRef`, `substEnvVars`, `writeTemplate`, `convertStrToVal`, `compareDoxyfile`, `writeXMLDoxyfile`, `writeXSDDoxyfile`, `init` …
- `class final` _(наследует: : public ConfigOption)_ — методы: `ConfigOption`, `setWidgetType`, `widgetType`, `setDefaultValue`, `valueRef`, `writeTemplate`, `compareDoxyfile`, `writeXMLDoxyfile`, `writeXSDDoxyfile`, `substEnvVars`, `init`, `emptyValueToDefault` …
- `class final` _(наследует: : public ConfigOption)_ — методы: `ConfigOption`, `valueStringRef`, `valueRef`, `minVal`, `maxVal`, `convertStrToVal`, `substEnvVars`, `writeTemplate`, `compareDoxyfile`, `writeXMLDoxyfile`, `writeXSDDoxyfile`, `init` …
- `class final` _(наследует: : public ConfigOption)_ — методы: `ConfigOption`, `valueStringRef`, `valueRef`, `convertStrToVal`, `substEnvVars`, `setValueString`, `writeTemplate`, `compareDoxyfile`, `writeXMLDoxyfile`, `writeXSDDoxyfile`, `init`, `isDefault`
- `class final` _(наследует: : public ConfigOption)_ — методы: `m_orgType`, `writeTemplate`, `compareDoxyfile`, `writeXMLDoxyfile`, `writeXSDDoxyfile`, `substEnvVars`, `orgType`, `valueListRef`, `valueStringRef`, `markAsPresent`, `isPresent`
- `class final` _(наследует: : public ConfigOption)_ — методы: `ConfigOption`, `writeTemplate`, `compareDoxyfile`, `writeXMLDoxyfile`, `writeXSDDoxyfile`, `substEnvVars`
- `class ConfigImpl` — методы: `ConfigImpl`, `instance`, `get`, `deleteInstance`, `reset`, `getString`, `getList`, `getEnum`, `getInt`, `getBool`, `addInfo`, `ConfigInfo` …

**Функции:** `kind()`, `name()`, `docs()`, `dependsOn()`, `addDependency(const char *dep)`, `setEncoding(const DString &e)`, `setUserComment(const DString &u)`, `convertStrToVal(Config::CompareMode)`, `emptyValueToDefault()`, `init()`, `isDefault()`, `ConfigOption(O_Info)`, `compareDoxyfile(TextStream &,Config::CompareMode)`, `writeXMLDoxyfile(TextStream &)`, `writeXSDDoxyfile(TextStream &t)` …

### `src/configimpl.h`

**Классы/структуры:**

- `class ConfigOption` — методы: `m_kind`, `fill`, `kind`, `name`, `docs`, `dependsOn`, `addDependency`, `setEncoding`, `setUserComment`, `convertStrToVal`, `emptyValueToDefault`, `init` …
- `class final` _(наследует: : public ConfigOption)_ — методы: `ConfigOption`, `writeTemplate`, `compareDoxyfile`, `writeXMLDoxyfile`, `writeXSDDoxyfile`, `substEnvVars`
- `class final` _(наследует: : public ConfigOption)_ — методы: `ConfigOption`, `addValue`, `emplace_back`, `setWidgetType`, `widgetType`, `valueRef`, `getDefault`, `emptyValueToDefault`, `writeTemplate`, `compareDoxyfile`, `writeXMLDoxyfile`, `writeXSDDoxyfile` …
- `class final` _(наследует: : public ConfigOption)_ — методы: `ConfigOption`, `addValue`, `emplace_back`, `values`, `valueRef`, `substEnvVars`, `writeTemplate`, `convertStrToVal`, `compareDoxyfile`, `writeXMLDoxyfile`, `writeXSDDoxyfile`, `init` …
- `class final` _(наследует: : public ConfigOption)_ — методы: `ConfigOption`, `setWidgetType`, `widgetType`, `setDefaultValue`, `valueRef`, `writeTemplate`, `compareDoxyfile`, `writeXMLDoxyfile`, `writeXSDDoxyfile`, `substEnvVars`, `init`, `emptyValueToDefault` …
- `class final` _(наследует: : public ConfigOption)_ — методы: `ConfigOption`, `valueStringRef`, `valueRef`, `minVal`, `maxVal`, `convertStrToVal`, `substEnvVars`, `writeTemplate`, `compareDoxyfile`, `writeXMLDoxyfile`, `writeXSDDoxyfile`, `init` …
- `class final` _(наследует: : public ConfigOption)_ — методы: `ConfigOption`, `valueStringRef`, `valueRef`, `convertStrToVal`, `substEnvVars`, `setValueString`, `writeTemplate`, `compareDoxyfile`, `writeXMLDoxyfile`, `writeXSDDoxyfile`, `init`, `isDefault`
- `class final` _(наследует: : public ConfigOption)_ — методы: `m_orgType`, `writeTemplate`, `compareDoxyfile`, `writeXMLDoxyfile`, `writeXSDDoxyfile`, `substEnvVars`, `orgType`, `valueListRef`, `valueStringRef`, `markAsPresent`, `isPresent`
- `class final` _(наследует: : public ConfigOption)_ — методы: `ConfigOption`, `writeTemplate`, `compareDoxyfile`, `writeXMLDoxyfile`, `writeXSDDoxyfile`, `substEnvVars`
- `class ConfigImpl` — методы: `ConfigImpl`, `instance`, `get`, `deleteInstance`, `reset`, `getString`, `getList`, `getEnum`, `getInt`, `getBool`, `addInfo`, `ConfigInfo` …

**Функции:** `kind()`, `name()`, `docs()`, `dependsOn()`, `addDependency(const char *dep)`, `setEncoding(const DString &e)`, `setUserComment(const DString &u)`, `convertStrToVal(Config::CompareMode)`, `emptyValueToDefault()`, `init()`, `isDefault()`, `ConfigOption(O_Info)`, `compareDoxyfile(TextStream &,Config::CompareMode)`, `writeXMLDoxyfile(TextStream &)`, `writeXSDDoxyfile(TextStream &t)` …

### `doxygen-master/src/translator_am.h`

**Классы/структуры:**

- `class TranslatorArmenian` _(наследует: : public TranslatorAdapter_1_8_0)_
- `class Invisible`
- `class Truncated` _(наследует: : public Invisible)_
- `class Undocumented`
- `class PublicBase` _(наследует: : public Truncated)_
- `class Templ`
- `class ProtectedBase`
- `class PrivateBase`
- `class Used`

**Функции:** `idLanguage()`, `latexLanguageSupportCommand()`, `trISOLang()`, `getLanguageString()`, `trRelatedFunctions()`, `trRelatedSubscript()`, `trDetailedDescription()`, `trDetails()`, `trMemberTypedefDocumentation()`, `trMemberEnumerationDocumentation()`, `trMemberFunctionDocumentation()`, `trMemberDataDocumentation()`, `trMore()`, `trListOfAllMembers()`, `trMemberList()` …

### `doxygen-master/src/translator_ar.h`

**Классы/структуры:**

- `class TranslatorArabic` _(наследует: : public TranslatorAdapter_1_4_6)_
- `class Invisible`
- `class Truncated` _(наследует: : public Invisible)_
- `class Undocumented`
- `class PublicBase` _(наследует: : public Truncated)_
- `class Templ`
- `class ProtectedBase`
- `class PrivateBase`
- `class Used`

**Функции:** `idLanguage()`, `latexLanguageSupportCommand()`, `latexCommandName()`, `trISOLang()`, `getLanguageString()`, `trRelatedFunctions()`, `trRelatedSubscript()`, `trDetailedDescription()`, `trDetails()`, `trMemberTypedefDocumentation()`, `trMemberEnumerationDocumentation()`, `trMemberFunctionDocumentation()`, `trMemberDataDocumentation()`, `trMore()`, `trListOfAllMembers()` …

### `doxygen-master/src/translator_bg.h`

**Классы/структуры:**

- `class TranslatorBulgarian` _(наследует: : public TranslatorAdapter_1_9_4)_
- `class Invisible`
- `class Truncated` _(наследует: : public Invisible)_
- `class Undocumented`
- `class PublicBase` _(наследует: : public Truncated)_
- `class Templ`
- `class ProtectedBase`
- `class PrivateBase`
- `class Used`

**Функции:** `idLanguage()`, `latexLanguageSupportCommand()`, `trISOLang()`, `getLanguageString()`, `trRelatedFunctions()`, `trRelatedSubscript()`, `trDetailedDescription()`, `trDetails()`, `trMemberTypedefDocumentation()`, `trMemberEnumerationDocumentation()`, `trMemberFunctionDocumentation()`, `trMemberDataDocumentation()`, `trMore()`, `trListOfAllMembers()`, `trMemberList()` …

### `doxygen-master/src/translator_br.h`

**Классы/структуры:**

- `class TranslatorBrazilian` _(наследует: : public Translator)_
- `class Invisible`
- `class Truncated` _(наследует: : public Invisible)_
- `class Undocumented`
- `class PublicBase` _(наследует: : public Truncated)_
- `class Templ`
- `class ProtectedBase`
- `class PrivateBase`
- `class Used`

**Функции:** `isClassMemberHighlightMasculine(ClassMemberHighlight::Enum hl)`, `isFileMemberHighlightMasculine(FileMemberHighlight::Enum hl)`, `isNamespaceMemberHighlightMasculine(NamespaceMemberHighlight::Enum hl)`, `isModuleMemberHighlightMasculine(ModuleMemberHighlight::Enum hl)`, `idLanguage()`, `latexLanguageSupportCommand()`, `trISOLang()`, `getLanguageString()`, `trRelatedFunctions()`, `trRelatedSubscript()`, `trDetailedDescription()`, `trDetails()`, `trMemberTypedefDocumentation()`, `trMemberEnumerationDocumentation()`, `trMemberFunctionDocumentation()` …

### `doxygen-master/src/translator_ca.h`

**Классы/структуры:**

- `class TranslatorCatalan` _(наследует: : public TranslatorAdapter_1_8_0)_
- `class Invisible`
- `class Truncated` _(наследует: : public Invisible)_
- `class Undocumented`
- `class PublicBase` _(наследует: : public Truncated)_
- `class Templ`
- `class ProtectedBase`
- `class PrivateBase`
- `class Used`

**Функции:** `idLanguage()`, `latexLanguageSupportCommand()`, `trISOLang()`, `getLanguageString()`, `trRelatedFunctions()`, `trRelatedSubscript()`, `trDetailedDescription()`, `trDetails()`, `trMemberTypedefDocumentation()`, `trMemberEnumerationDocumentation()`, `trMemberFunctionDocumentation()`, `trMemberDataDocumentation()`, `trMore()`, `trListOfAllMembers()`, `trMemberList()` …

## 13. Каталог тиддлеров (.tid)

Каждый `.tid` — это единица данных TiddlyWiki с полями заголовка и wikitext-телом. Проанализировано: **6 854**.

### `Alice in Wonderland`

- Путь: `editions/tw5.com/tiddlers/demonstrations/Alice in Wonderland.tid`
- Теги: `external-text`, `Demonstrations`
- Тело: 3 706 строк, заголовков: 12, списков: 10, блоков кода: 0

> //Included here as a demonstration of ExternalText text support. See the bottom for the license from Project Gutenberg// --- # ALICE'S ADVENTURES IN WONDERLAND ## Lewis Carroll THE MILLENNIUM FULCRUM 

### `$:/themes/tiddlywiki/vanilla/base`

- Путь: `themes/tiddlywiki/vanilla/base.tid`
- Теги: `[[$:/tags/Stylesheet]]`
- Тело: 3 670 строк, заголовков: 0, списков: 4, блоков кода: 0
- Макросы: `<<typeLength>>`, `<<colour>>`, `<<custom-background-datauri>>`, `<<if-background-attachment>>`, `<<margin-start>>`, `<<padding-start>>`, `<<margin-inline>>`, `<<padding-inline>>`, `<<lingo>>`, `<<sidebarbreakpoint-minus-one>>`, `<<if-no-sidebar>>`, `<<sidebarbreakpoint>>`
- Трансклюзии: `[[$:/core/macros/CSS/property]]`

> \define custom-background-datauri() <$set name="background" value={{$:/themes/tiddlywiki/vanilla/settings/backgroundimage}}> <$list filter="[<background>is[image]]"> `background: url(` <$list filter="

### `Alice in Wonderland`

- Путь: `editions/dynaviewdemo/tiddlers/alice/Alice in Wonderland.tid`
- Тело: 3 336 строк, заголовков: 12, списков: 10, блоков кода: 0

> # ALICE'S ADVENTURES IN WONDERLAND ## Lewis Carroll THE MILLENNIUM FULCRUM EDITION 3.0 !!! CHAPTER I. Down the Rabbit-Hole Alice was beginning to get very tired of sitting by her sister on the bank, a

### `$:/tw5.com/releases/procedures`

- Путь: `editions/tw5.com/tiddlers/releasenotes/ReleasesProcedures.tid`
- Теги: `$:/tags/Global`
- Тело: 394 строк, заголовков: 1, списков: 0, блоков кода: 0
- Макросы: `<<banner-credit-permalink>>`, `<<banner-credit-user-link>>`, `<<banner-credit-user-name>>`, `<<banner-credit-discussion-link>>`, `<<impact-type>>`, `<<state>>`, `<<default>>`, `<<change-note-type-badge>>`, `<<change-note-category-badge>>`, `<<change>>`, `<<impact>>`, `<<link>>`
- Трансклюзии: `[[master]]`, `[[other releases]]`

> <!-- Generate a link to the changes since the previous release --> \procedure github-release-changes-link(release) <a class="tc-tiddlylink-external" href=`https://github.com/TiddlyWiki/TiddlyWiki5/com

### `$:/plugins/tiddlywiki/xlsx-utils/controls`

- Путь: `plugins/tiddlywiki/xlsx-utils/controls.tid`
- Теги: `$:/tags/ControlPanel`
- Тело: 371 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<renameProxyTitle>>`, `<<currentTiddler>>`, `<<field>>`, `<<rename-current-tiddler>>`, `<<edit-field>>`, `<<up-down-buttons>>`, `<<row>>`, `<<view-field>>`, `<<sheet>>`, `<<list-fields>>`, `<<view-row-content>>`, `<<view-row>>`
- Трансклюзии: `[[$title$]]`

> \define help-button(state) <$button popup="""$:/state/expand-help/$state$""" class="tc-btn-invisible tc-popup-keep"> {{$:/core/images/help}} </$button> \end \define help-content(type,state) <$reveal t

### `$:/plugins/tiddlywiki/railroad/syntax`

- Путь: `plugins/tiddlywiki/railroad/doc/syntax.tid`
- Тело: 345 строк, заголовков: 0, списков: 20, блоков кода: 23
- Трансклюзии: `[[" x "]]`, `[[x]]`

> The railroad widget uses a special notation to construct the components defined below. `x` and `y` here stand for any component. Names (as opposed to quoted strings) are available when a value starts 

### `$:/editions/tw5.com/doc-styles`

- Путь: `editions/tw5.com/tiddlers/_tw_shared/doc-utilities/doc-styles.tid`
- Теги: `$:/tags/Stylesheet`
- Тело: 335 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<colour>>`, `<<color>>`, `<<background>>`, `<<box-shadow>>`

> .doc-def { font-style: normal; font-weight: bold; } .doc-em { font-style: italic; font-variant: small-caps; text-decoration: none; } .doc-strong { color: <<colour alert-highlight>>; font-style: normal

### `Alice in Wonderland License`

- Путь: `editions/dynaviewdemo/tiddlers/alice/Alice in Wonderland License.tid`
- Тело: 327 строк, заголовков: 0, списков: 0, блоков кода: 0

> THE FULL PROJECT GUTENBERG LICENSE PLEASE READ THIS BEFORE YOU DISTRIBUTE OR USE THIS WORK To protect the Project Gutenberg-tm mission of promoting the free distribution of electronic works, by using 

### `MarkdownTutorial`

- Путь: `editions/markdowndemo/tiddlers/MarkdownTutorial.tid`
- Тело: 297 строк, заголовков: 0, списков: 5, блоков кода: 0

> Markdown: Basics ================ Getting the Gist of Markdown's Formatting Syntax ------------------------------------------------ This page offers a brief overview of what it's like to use Markdown.

### `Release 5.2.0`

- Путь: `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.2.0.tid`
- Теги: `ReleaseNotes`
- Тело: 293 строк, заголовков: 25, списков: 120, блоков кода: 3
- Макросы: `<<createTiddler-title>>`, `<<mymacro>>`, `<<macro>>`
- Трансклюзии: `[[#5708]]`, `[[here]]`, `[[ActionCreateTiddlerWidget]]`, `[[Filter Parameter]]`, `[[Forums]]`, `[[ListWidget]]`, `[[ActionWidget Execution Modes]]`, `[[all Operator]]`

> //[[See GitHub for detailed change history of this release\|https://github.com/TiddlyWiki/TiddlyWiki5/compare/v5.1.23...v5.2.0]]// <<.banner-credits credit:"""Congratulations to Frank. B for his winnin

### `Release 5.1.23`

- Путь: `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.1.23.tid`
- Теги: `ReleaseNotes`
- Тело: 289 строк, заголовков: 26, списков: 167, блоков кода: 0
- Макросы: `<<colour>>`
- Трансклюзии: `[[Atronoush]]`, `[[SetVariableWidgets]]`, `[[browser selection outline]]`, `[[keyboard-driven-input Macro]]`, `[[lookup Operator]]`, `[[has Operator]]`, `[[edition Operator]]`, `[[:filter filter run prefix]]`

> //[[See GitHub for detailed change history of this release\|https://github.com/TiddlyWiki/TiddlyWiki5/compare/v5.1.22...v5.1.23]]// <<.banner-credits credit:"""Congratulations to [[Atronoush\|https://gi

### `csv-cases`

- Путь: `editions/test/tiddlers/tests/data/csv-cases.tid`
- Тело: 278 строк, заголовков: 0, списков: 0, блоков кода: 0

> [ { "name": "Empty string", "options": {}, "csv": "", "json": [], "jsonWithHeaders": [] }, { "name": "Null value", "options": {}, "csv": null, "json": [], "jsonWithHeaders": [] }, { "name": "Simple CS

### `$:/themes/tiddlywiki/vanilla/reset`

- Путь: `themes/tiddlywiki/vanilla/reset.tid`
- Тело: 274 строк, заголовков: 0, списков: 0, блоков кода: 0

> /*! modern-normalize v2.0.0 \| MIT License \| https://github.com/sindresorhus/modern-normalize */ /* Document ======== */ /** Use a better box model (opinionated). */ *, ::before, ::after { box-sizing: 

### `$:/editions/tw5.com/doc-macros`

- Путь: `editions/tw5.com/tiddlers/_tw_shared/doc-utilities/doc-macros.tid`
- Теги: `$:/tags/Macro`
- Тело: 269 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<_>>`, `<<tiddler>>`, `<<currentTiddler>>`, `<<title>>`, `<<listItem>>`, `<<create-tiddler-actions>>`, `<<to>>`, `<<target>>`, `<<tooltip>>`, `<<text>>`, `<<_f.tipClass>>`, `<<icon>>`
- Трансклюзии: `[["]]`, `[[doc-tabs]]`, `[[tc-btn-invisible tc-tiddlylink]]`, `[[<code class="doc-attr">]]`, `[[</code>]]`, `[[Show more information about the ']]`, `[[' attribute]]`, `[[doc-icon-block]]`

> \whitespace trim \function .concat(1,2,3,4,5) [[$(1)$$(2)$$(3)$$(4)$$(5)$]substitute[]] \function .word(_) [["]] [<_>] =[["]] +[join[]] \procedure .def(_) <dfn class="doc-def"><<_>></dfn> \procedure .

### `$:/plugins/tiddlywiki/tour/styles`

- Путь: `plugins/tiddlywiki/tour/styles.tid`
- Теги: `$:/tags/Stylesheet`
- Тело: 259 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<box-shadow>>`, `<<colour>>`, `<<color>>`

> \rules only filteredtranscludeinline transcludeinline macrodef macrocallinline macrocallblock .tc-tour-panel { position: fixed; bottom: 0; left: 0; width: 310px; height: 400px; overflow: auto; -webkit

### `$:/plugins/tiddlywiki/text-slicer/slicer-rules/html-by-paragraph.json`

- Путь: `plugins/tiddlywiki/text-slicer/modules/rules/html-by-paragraph.tid`
- Теги: `$:/tags/text-slicer/slicer-rules`
- Тело: 258 строк, заголовков: 0, списков: 0, блоков кода: 0

> [ { "selector": "address,center,fieldset,form,hr,iframe,isindex,noframes,noscript,pre,table", "actions": { "startNewChunk": { "toc-type": "paragraph" } } }, { "selector": "blockquote", "actions": { "s

### `$:/cards/styles`

- Путь: `editions/tw5.com/tiddlers/cards/card-styles.tid`
- Теги: `$:/tags/Stylesheet`
- Тело: 252 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<colour>>`

> \rules only filteredtranscludeinline transcludeinline macrodef macrocallinline macrocallblock .tc-cards { display: flex; flex-wrap: wrap; justify-content: center; width: 100%; padding: 0.5em; backgrou

### `$:/core/macros/toc`

- Путь: `core/wiki/macros/toc.tid`
- Теги: `$:/tags/Macro`
- Тело: 248 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<currentTiddler>>`, `<<__itemClassFilter__>>`, `<<toc-item-class>>`, `<<toc-level-indicator>>`, `<<toc-caption>>`, `<<item>>`, `<<__sort__>>`, `<<excluded>>`, `<<path>>`, `<<_level>>`, `<<__tag__>>`, `<<__exclude__>>`

> \define toc-open-icon() $:/core/images/down-arrow \define toc-closed-icon() $:/core/images/right-arrow \define toc-caption() \whitespace trim <span class="tc-toc-caption tc-tiny-gap-left"> <$set name=

### `$:/core/ui/ControlPanel/Modals/AddPlugins`

- Путь: `core/ui/ControlPanel/Modals/AddPlugins.tid`
- Тело: 227 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<assetInfo>>`, `<<url>>`, `<<dependency>>`, `<<install-plugin-actions>>`, `<<popup-state-macro>>`, `<<popup-state>>`, `<<install-plugin-button>>`, `<<display-plugin-info>>`, `<<load-plugin-library-button>>`, `<<connectionTiddler>>`, `<<tabs>>`, `<<qualify>>`
- Трансклюзии: `[[$:/core/ui/ControlPanel/Plugins/Add/Updates]]`, `[[$:/core/ui/ControlPanel/Plugins/Add/Plugins]]`, `[[$:/core/ui/ControlPanel/Plugins/Add/Themes]]`, `[[$:/core/ui/ControlPanel/Plugins/Add/Languages]]`

> \define install-plugin-actions() \whitespace trim <$action-sendmessage $message="tm-load-plugin-from-library" url={{!!url}} title={{$(assetInfo)$!!original-title}}/> <$set name="url" value={{!!url}}> 

### `syntax`

- Путь: `plugins/tiddlywiki/markdown/syntax.tid`
- Тело: 223 строк, заголовков: 15, списков: 0, блоков кода: 17
- Трансклюзии: `[[HTML block]]`, `[[Creating Footnotes]]`

> title: $:/plugins/tiddlywiki/markdown/syntax To review standard Markdown syntax, see: [ext[CommonMark quick reference\|https://commonmark.org/help/]]. For formal specification, consult the [ext[CommonM

### `$:/plugins/tiddlywiki/menubar/styles`

- Путь: `plugins/tiddlywiki/menubar/styles.tid`
- Теги: `[[$:/tags/Stylesheet]]`
- Тело: 219 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<itemCount>>`, `<<colour>>`, `<<box-shadow>>`, `<<sidebarbreakpoint-minus-one>>`, `<<breakpoint-plus-one>>`, `<<set-sidebar-scrollable-top-if-hamburger>>`, `<<set-sidebar-scrollable-top>>`

> \define breakpoint-plus-one() <$text text={{{ [{$:/config/plugins/menubar/breakpoint}removesuffix[px]add[1]addsuffix[px]] ~[{$:/config/plugins/menubar/breakpoint}] }}} /> \end \define sidebarbreakpoin

### `$:/plugins/tiddlywiki/twitter-archivist/macros`

- Путь: `plugins/tiddlywiki/twitter-archivist/macros.tid`
- Теги: `$:/tags/Macro`
- Тело: 219 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<__state__>>`, `<<tab>>`, `<<caption>>`, `<<currTab>>`, `<<list-archives-empty>>`, `<<currentTiddler>>`, `<<show-archive-attribute>>`, `<<show-archive-calculated-attribute>>`, `<<qualify>>`, `<<show-tweet>>`, `<<__caption__>>`, `<<__field__>>`

> \define skinny-tabs(tabNames,tabCaptions,defaultTab,state) <$let currTab={{{ [<__state__>get[text]else<__defaultTab__>] }}} > <div class="tc-tab-set"> <div class="tc-tab-buttons"> <$list filter="[enli

### `QuickDemo`

- Путь: `editions/markdowndemo/tiddlers/QuickDemo.tid`
- Тело: 217 строк, заголовков: 0, списков: 2, блоков кода: 2

> <style> .tc-image-loaded { width: 35%; } </style> # h1 Heading ## h2 Heading ### h3 Heading #### h4 Heading ##### h5 Heading ###### h6 Heading ## Horizontal Rules ____ --- **** ## Emphasis **This is b

### `TranscludeWidget`

- Путь: `editions/tw5.com/tiddlers/widgets/TranscludeWidget.tid`
- Теги: `Widgets`
- Тело: 216 строк, заголовков: 10, списков: 21, блоков кода: 13
- Макросы: `<<name>>`, `<<age>>`, `<<firstParameter>>`, `<<secondParameter>>`, `<<wikitext-example-without-html>>`
- Трансклюзии: `[[DataTiddler]]`, `[[plugin]]`, `[[Legacy Transclusion Recursion Marker]]`, `[[Pragma: \parameters]]`, `[[Pragma: \procedure]]`, `[[Pragma: \widget]]`, `[[Pragma: \define]]`, `[[parses text in two modes]]`

> ! Introduction Transclusion is the underlying mechanism for many higher level wikitext features, such as ''procedures'', ''functions'', ''custom widgets'' and ''macros''. The <<.wid transclude>> widge

### `$:/palettes/FlexokiLight`

- Путь: `core/palettes/FlexokiLight.tid`
- Теги: `$:/tags/Palette`
- Тело: 207 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<colour>>`, `<<color>>`

> flexoki-black: #100F0F flexoki-paper: #FFFCF0 flexoki-950: #1C1B1A flexoki-900: #282726 flexoki-850: #343331 flexoki-800: #403E3C flexoki-700: #575653 flexoki-600: #6F6E69 flexoki-500: #878580 flexoki

### `$:/palettes/FlexokiDark`

- Путь: `core/palettes/FlexokiDark.tid`
- Теги: `$:/tags/Palette`
- Тело: 205 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<colour>>`

> flexoki-paper: #FFFCF0 flexoki-999: #100F0F flexoki-950: #1C1B1A flexoki-900: #282726 flexoki-850: #343331 flexoki-800: #403E3C flexoki-700: #575653 flexoki-600: #6c6b66 flexoki-500: #878580 flexoki-3

### `Using ES2016 for Writing Plugins`

- Путь: `editions/dev/tiddlers/new/Using ES2016 for Writing Plugins.tid`
- Тело: 201 строк, заголовков: 8, списков: 1, блоков кода: 13
- Трансклюзии: `[[Babel.js]]`, `[[TiddlyWiki on Node.js]]`, `[[Modern.TiddlyDev]]`, `[[npm-scripts documentation]]`, `[[Startup Module]]`, `[[Macro]]`, `[[most browsers]]`, `[[Adding Babel Polyfill to TiddlyWiki]]`

> With the advent of ES2015 (also known as ES6) and the availability of [[Babel.js\|http://babeljs.io/]] plugin developers can leverage ES2015 when writing TiddlyWiki plugins. Understanding the nuances b

### `$:/tw5.com/releases/styles`

- Путь: `editions/tw5.com/tiddlers/releasenotes/ReleasesStyles.tid`
- Теги: `$:/tags/Stylesheet`
- Тело: 201 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<colour>>`

> .doc-release-note { } .tc-tab-set.doc-release-tabs { margin-top: 1rem; } .doc-release-tab-search { margin-bottom: 0.75em; } .doc-release-tab-search input { width: 100%; padding: 0.5em; border: 1px sol

### `Anchor Links using HTML`

- Путь: `editions/ja-JP/tiddlers/wikitext/Anchor Links using HTML.tid`
- Теги: `[[HTML`, `in`, `WikiText]]`
- Тело: 195 строк, заголовков: 4, списков: 30, блоков кода: 7
- Макросы: `<<qualify>>`
- Трансклюзии: `[[qualifyマクロ]]`, `[[属性のマクロ呼び出し構文]]`

> <a id=<<qualify "#Top">>></a> <h2 id="#Introduction:Anchor-Links-using-HTML">''TiddlersでのHTMLアンカーリンク''</h2> * <a href=<<qualify "##Introduction">>>何をするものか?</a> * <a href=<<qualify "##How-do-I-make-the

### `Anchor Links using HTML`

- Путь: `editions/tw5.com/tiddlers/wikitext/Anchor Links using HTML.tid`
- Теги: `[[HTML`, `in`, `WikiText]]`
- Тело: 195 строк, заголовков: 4, списков: 27, блоков кода: 7
- Макросы: `<<qualify>>`
- Трансклюзии: `[[qualify macro]]`, `[[macro invocation syntax for attributes]]`, `[[qualify Macro]]`

> <a id=<<qualify "#Top">>></a> <h2 id="#Introduction:Anchor-Links-using-HTML">''HTML Anchor Links in Tiddlers''</h2> * <a href=<<qualify "##Introduction">>>What do they do?</a> * <a href=<<qualify "##H

### `Documentation Macros`

- Путь: `editions/tw5.com/tiddlers/styleguide/Documentation Macros.tid`
- Теги: `[[Improving`, `TiddlyWiki`, `Documentation]]`
- Тело: 193 строк, заголовков: 20, списков: 0, блоков кода: 0
- Трансклюзии: `[[Icon Gallery]]`, `[[CheckboxWidget]]`

> The following macros are used throughout ~TiddlyWiki's documentation. Their names start with a dot to keep them out of the way of names that a user might try experimenting with. ! General \|Macro \|Used

### `New Section Creation Tool`

- Путь: `editions/resumebuilder/tiddlers/tools/New Section Creation Tool.tid`
- Теги: `Tools`
- Тело: 192 строк, заголовков: 0, списков: 0, блоков кода: 3
- Макросы: `<<thisInputTiddlerText>>`, `<<thisOptionsTiddlerText>>`, `<<thisTemplateTiddlerText>>`, `<<thisAddResumeSectionItem>>`, `<<ItemListFilter>>`, `<<SortedItemFilterList>>`, `<<DataTiddler>>`, `<<ItemSettingsTiddler>>`, `<<SectionName>>`, `<<SectionSettingsTiddler>>`, `<<SortedItemListFilter>>`
- Трансклюзии: `[[Section Display]]`, `[[Résumé Options]]`, `[[Layout Options]]`

> \define thisMakeDisplayTiddler() <$action-setfield $tiddler="""$:/display/$(ThisSection)$""" text="""<$transclude tiddler=GenericSectionDisplayTemplate mode=block/>""" tags="""[[Section Display]]""" s

### `$:/plugins/tiddlywiki/geospatial/docs/geomap`

- Путь: `plugins/tiddlywiki/geospatial/docs/geomap.tid`
- Теги: `$:/tags/GeospatialDocs`
- Тело: 188 строк, заголовков: 2, списков: 0, блоков кода: 1
- Макросы: `<<currentTiddler>>`, `<<qualify>>`
- Трансклюзии: `[[Leaflet.js]]`

> !! `<$geomap>` widget The `<$geomap>` widget displays an interactive map using [[Leaflet.js\|https://leafletjs.com/]]. `<$geolayer>` and `<$geobaselayer>` widgets inside the `<$geomap>` widget are used

### `$:/core/macros/tag-picker`

- Путь: `core/wiki/macros/tag-picker.tid`
- Теги: `$:/tags/Macro`
- Тело: 187 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<_tf.getTag>>`, `<<saveTiddler>>`, `<<tagField>>`, `<<actions>>`, `<<delete-tag-state-tiddlers>>`, `<<refreshTitle>>`, `<<cancel-delete-tiddler-actions>>`, `<<_tf.getUserInput>>`, `<<clear-tags-actions-inner>>`, `<<newTagNameTiddler>>`, `<<userInput>>`, `<<tf.get-tagpicker-focus-selector>>`
- Трансклюзии: `[[tc-edit-add-tag]]`, `[[false]]`, `[[$:/core/macros/tag-picker]]`, `[[$:/temp/NewTagName]]`, `[[$:/temp/NewTagName/input]]`

> <!-- Fields: "first-search-filter", "second-search-filter" are assigned to the keyboard-driven input macro with parameter: "configTiddlerFilter" They __need to be the same__ as used for variables: "no

### `Release 5.1.14`

- Путь: `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.1.14.tid`
- Теги: `ReleaseNotes`
- Тело: 186 строк, заголовков: 13, списков: 115, блоков кода: 0
- Трансклюзии: `[[SaveTrail Plugin]]`, `[[XLSX Utilities Edition]]`, `[[Twitter Plugin]]`, `[[KaTeX Plugin]]`, `[[v0.7.1 of KaTeX]]`, `[[Drag and Drop]]`, `[[tiddler manager]]`, `[[Added]]`

> //[[See GitHub for detailed change history of this release\|https://github.com/TiddlyWiki/TiddlyWiki5/compare/v5.1.13...v5.1.14]]// !! New and Improved Plugins * Added [[SaveTrail Plugin]] that continu

### `$:/plugins/tiddlywiki/katex/styles`

- Путь: `plugins/tiddlywiki/katex/styles.tid`
- Теги: `[[$:/tags/Stylesheet]]`
- Тело: 186 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<datauri>>`

> \rules only filteredtranscludeinline transcludeinline macrodef macrocallinline /* KaTeX styles */ {{$:/plugins/tiddlywiki/katex/katex.min.css}} /* Force text-rendering (see https://github.com/TiddlyWi

### `Release 5.1.9`

- Путь: `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.1.9.tid`
- Теги: `ReleaseNotes`
- Тело: 185 строк, заголовков: 16, списков: 60, блоков кода: 1
- Макросы: `<<custom-colour-picker>>`, `<<helloworld>>`, `<<greeting>>`, `<<me>>`, `<<sentence>>`
- Трансклюзии: `[[CSS unit]]`, `[[hidden settings]]`, `[[Hidden Setting: Search AutoFocus]]`, `[[Hidden Setting: Typing Refresh Delay]]`, `[[Added]]`, `[[Releases]]`, `[[KaTeX GitHub page]]`, `[[tv-tiddler-preview Variable]]`

> \define custom-colour-picker(tiddler,colour) <$edit-text tiddler="""$tiddler$""" index="""$colour$""" type="color" tag="input"/> \end //[[See GitHub for detailed change history of this release\|https:/

### `$:/palettes/SolarFlare`

- Путь: `core/palettes/SolarFlare.tid`
- Теги: `$:/tags/Palette`
- Тело: 182 строк, заголовков: 0, списков: 26, блоков кода: 0
- Макросы: `<<colour>>`

> # Background Tones base03: #002b36 base02: #073642 # Content Tones base01: #586e75 base00: #657b83 base0: #839496 base1: #93a1a1 # Background Tones base2: #eee8d5 base3: #fdf6e3 # Accent Colors yellow

### `Sample Text`

- Путь: `editions/text-slicer/tiddlers/Sample Text.tid`
- Тело: 182 строк, заголовков: 0, списков: 0, блоков кода: 0

> <?xml version="1.0" encoding="UTF-8"?> <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"> <html xmlns="http://www.w3.org/1999/xhtml"> <head> </head> <bod

### `$:/plugins/tiddlywiki/dynannotate/readme`

- Путь: `plugins/tiddlywiki/dynannotate/docs/readme.tid`
- Тело: 182 строк, заголовков: 7, списков: 20, блоков кода: 5
- Макросы: `<<list-links>>`

> The ''Dynannotate'' plugin allows annotations on textual content to be created and displayed. It has several components: * The dynannotate widget draws clickable textual annotations, search highlights

### `$:/plugins/tiddlywiki/text-slicer/slicer-rules/html-by-heading.json`

- Путь: `plugins/tiddlywiki/text-slicer/modules/rules/html-by-heading.tid`
- Теги: `$:/tags/text-slicer/slicer-rules`
- Тело: 181 строк, заголовков: 0, списков: 0, блоков кода: 0

> [ { "selector": "address,center,fieldset,form,hr,iframe,isindex,noframes,noscript,ol,ul,li,pre,table", "actions": {} }, { "selector": "blockquote", "actions": { "markup": { "wiki": { "prefix": "<<<\n"

### `$:/core/ui/EditTemplate/fields`

- Путь: `core/ui/EditTemplate/fields.tid`
- Теги: `$:/tags/EditTemplate`
- Тело: 178 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<storyTiddler>>`, `<<delete-state-tiddlers>>`, `<<focus-new-field-input>>`, `<<currentField>>`, `<<newFieldNameTiddler>>`, `<<userInput>>`, `<<refreshTitle>>`, `<<cancel-delete-tiddler-actions>>`, `<<new-field-actions>>`, `<<lingo>>`, `<<delete-field-actions>>`, `<<tf.field-cascade>>`
- Трансклюзии: `[[tc-edit-field-exists]]`, `[[$:/config/EditMode/fieldname-filter]]`, `[[false]]`, `[[/]]`

> \whitespace trim \procedure lingo-base() $:/language/EditTemplate/ \procedure delete-state-tiddlers() <$action-deletetiddler $filter="[<newFieldNameTiddler>] [<storeTitle>] [<searchListState>]"/> \pro

### `Release 5.3.6`

- Путь: `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.3.6.tid`
- Теги: `ReleaseNotes`
- Тело: 178 строк, заголовков: 13, списков: 97, блоков кода: 0
- Трансклюзии: `[[pmario]]`, `[[the translators edition]]`, `[[Release 5.3.4]]`, `[[TestCaseWidget]]`, `[[colour-picker Macro]]`, `[[keyboard-driven-input Macro]]`, `[[an HTML element]]`, `[[Table-of-Contents Macros]]`

> //[[See GitHub for detailed change history of this release\|https://github.com/TiddlyWiki/TiddlyWiki5/compare/v5.3.5...v5.3.6]]// <<.banner-credits credit:"""Congratulations to [[pmario\|https://talk.ti

### `Release 5.1.22`

- Путь: `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.1.22.tid`
- Теги: `ReleaseNotes`
- Тело: 177 строк, заголовков: 11, списков: 112, блоков кода: 0
- Трансклюзии: `[[Thomas Elmiger]]`, `[[can now]]`, `[[$:/ControlPanel]]`, `[[plugin listing]]`, `[[plugin chooser]]`, `[[GET /recipes/default/tiddlers.json]]`, `[[pull request on GitHub for more details]]`, `[[compare Operator]]`

> //[[See GitHub for detailed change history of this release\|https://github.com/TiddlyWiki/TiddlyWiki5/compare/v5.1.21...v5.1.22]]// <<.banner-credits credit:"""Congratulations to [[Thomas Elmiger\|https

### `Release 5.3.2`

- Путь: `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.3.2.tid`
- Теги: `ReleaseNotes`
- Тело: 175 строк, заголовков: 17, списков: 40, блоков кода: 5
- Макросы: `<<filter>>`, `<<currentTiddler>>`, `<<item>>`
- Трансклюзии: `[[catter-fly]]`, `[[shortcut syntax]]`, `[[ListWidgets]]`, `[[jsonset Operator]]`, `[[jsonextract Operator]]`, `[[jsonget Operator]]`, `[[jsontype Operator]]`, `[[encodebase64 Operator]]`

> //[[See GitHub for detailed change history of this release\|https://github.com/TiddlyWiki/TiddlyWiki5/compare/v5.3.1...v5.3.2]]// <<.banner-credits credit:"""Congratulations to [[catter-fly\|https://tal

### `$:/plugins/tiddlywiki/xlsx-utils/styles`

- Путь: `plugins/tiddlywiki/xlsx-utils/styles.tid`
- Теги: `[[$:/tags/Stylesheet]]`
- Тело: 173 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<quick-colour-selector-border>>`, `<<quick-colour-selector-background>>`, `<<quick-colour-editor-border>>`, `<<quick-colour-editor-background>>`, `<<colour>>`, `<<quick-colour-editor-controls>>`, `<<quick-colour-workbook-border>>`, `<<quick-colour-workbook-background>>`, `<<quick-colour-workbook-controls>>`, `<<quick-colour-sheet-border>>`, `<<quick-colour-sheet-background>>`, `<<quick-colour-sheet-controls>>`

> \define quick-colour-selector-background() #bac0f1 \define quick-colour-selector-border() #9196c1 \define quick-colour-editor-background() #bae3f1 \define quick-colour-editor-controls() #d2ffff \defin

### `$:/editions/tw5.com/doc-macros`

- Путь: `editions/fr-FR/tiddlers/$__editions_tw5.com_doc-macros.tid`
- Теги: `$:/tags/Macro`
- Тело: 168 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<__link__>>`, `<<__text__>>`, `<<__tiddler__>>`, `<<currentTiddler>>`, `<<__url__>>`
- Трансклюзии: `[[Macros Table des matières (Exemples)]]`

> \define .concat(1,2,3,4,5) $1$$2$$3$$4$$5$ \define .def(_) <dfn class="doc-def">$_$</dfn> \define .em(_) <em class="doc-em">$_$</em> \define .strong(_) <strong class="doc-strong">$_$</strong> \define 

### `GroupedLists/Bibliography`

- Путь: `editions/tw5.com/tiddlers/examples/GroupedLists/Bibliography.tid`
- Тело: 166 строк, заголовков: 0, списков: 0, блоков кода: 0

> title: 3DWiki2011 bibtex-entry-type: InProceedings bibtex-author: 3D Wiki Collective bibtex-title: Spatial Notes in Three Dimensions bibtex-date: 2011 + title: 3rdWave2014 bibtex-entry-type: Article b

### `$:/tiddlywiki/community/cards/Procedures`

- Путь: `community/tools/cards/Procedures.tid`
- Теги: `$:/tags/Global`
- Тело: 165 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<default>>`, `<<mode>>`, `<<fieldName>>`, `<<title>>`, `<<currentTiddler>>`, `<<community-card-display-jpeg-field>>`, `<<community-card-display-text-field>>`, `<<community-card-display-transclusion>>`, `<<personFilter>>`

> \procedure community-card-display-jpeg-field(fieldName,mode:"block",default) <$genesis $type={{{ [<mode>match[block]then[div]else[span]] }}} class={{{ tc-community-card-field-image [[tc-community-card

### `$:/tiddlywiki/community/cards/Procedures`

- Путь: `editions/ja-JP/tiddlers/community/tools/cards/Procedures.tid`
- Теги: `$:/tags/Global`
- Тело: 165 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<default>>`, `<<mode>>`, `<<fieldName>>`, `<<title>>`, `<<currentTiddler>>`, `<<community-card-display-jpeg-field>>`, `<<community-card-display-text-field>>`, `<<community-card-display-transclusion>>`, `<<personFilter>>`

> \procedure community-card-display-jpeg-field(fieldName,mode:"block",default) <$genesis $type={{{ [<mode>match[block]then[div]else[span]] }}} class={{{ tc-community-card-field-image [[tc-community-card

### `tiddlywiki.files Files`

- Путь: `editions/tw5.com/tiddlers/nodejs/tiddlywiki.files_Files.tid`
- Теги: `TiddlyWikiFolders`, `[[TiddlyWiki`, `on`, `Node.js]]`
- Тело: 165 строк, заголовков: 8, списков: 31, блоков кода: 3
- Трансклюзии: `[[a TiddlyWiki folder]]`, `[[Release 5.1.14]]`, `[[tiddler file]]`, `[[wiki folder]]`, `[[TiddlyWiki 5 GitHub repository]]`, `[[note]]`, `[[externalnote]]`, `[[.txt]]`

> ! Introduction A `tiddlywiki.files` JSON file in a sub-folder within [[a TiddlyWiki folder\|TiddlyWikiFolders]] overrides the usual logic for recursively scanning the folder for tiddler files. Instead,

### `tiddlywiki.files Files`

- Путь: `editions/ja-JP/tiddlers/nodejs/tiddlywiki.files_Files.tid`
- Теги: `TiddlyWikiFolders`, `[[TiddlyWiki`, `on`, `Node.js]]`
- Тело: 164 строк, заголовков: 8, списков: 31, блоков кода: 3
- Трансклюзии: `[[TiddlyWikiフォルダ]]`, `[[リリース 5.1.14]]`, `[[tiddlerファイル]]`, `[[Tiddlerファイル]]`, `[[Wikiフォルダ]]`, `[[TiddlyWiki 5 GitHub リポジトリ]]`, `[[note]]`, `[[externalnote]]`

> ! 紹介 [[TiddlyWikiフォルダ\|TiddlyWikiFolders]]内のサブフォルダーにあるJSONファイル`tiddlywiki.files`は、フォルダーを再帰的にスキャンしてTiddlerファイルを探す通常のロジックをオーバーライドします。代わりに、`tiddlywiki.files`ファイルは特定のファイルとフォルダーからTiddlerをロードするための指示を指定します。 フ

### `Release 5.1.20`

- Путь: `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.1.20.tid`
- Теги: `ReleaseNotes`
- Тело: 163 строк, заголовков: 15, списков: 96, блоков кода: 0
- Трансклюзии: `[[Conditional Operators]]`, `[[then Operator]]`, `[[else Operator]]`, `[[Mathematics Operators]]`, `[[negate]]`, `[[abs]]`, `[[ceil]]`, `[[floor]]`

> //[[See GitHub for detailed change history of this release\|https://github.com/TiddlyWiki/TiddlyWiki5/compare/v5.1.19...v5.1.20]]// !! New Conditional Operators [[Added\|https://github.com/TiddlyWiki/Ti

### `Documentation Macros`

- Путь: `editions/es-ES/tiddlers/Documentation_Macros.tid`
- Теги: `[[Improving`, `TiddlyWiki`, `Documentation]]`
- Тело: 162 строк, заголовков: 0, списков: 0, блоков кода: 0
- Трансклюзии: `[[enlaces]]`, `[[Panel de Control]]`

> Las siguientes son macros utilizadas en la documentación de ~TiddlyWiki. Sus nombres comienzan con un punto para mantenerlas fuera del alcance accidental de nombres con los que el usuario pueda intent

### `ListWidget`

- Путь: `editions/tw5.com/tiddlers/widgets/ListWidget.tid`
- Теги: `Widgets`, `Lists`
- Тело: 162 строк, заголовков: 10, списков: 16, блоков кода: 5
- Макросы: `<<currentTiddler>>`, `<<counter>>`, `<<counter-first>>`, `<<counter-last>>`, `<<item>>`
- Трансклюзии: `[[tiddler filter]]`, `[[DraftTiddlers]]`, `[[variable]]`, `[[tag macros]]`, `[[tag macro examples]]`, `[[WikiText]]`

> ! Introduction The list widget displays a sequence of tiddlers that match a [[tiddler filter\|Filters]]. It can be used for many purposes: * Displaying custom lists of links, like in TiddlyWiki5's side

### `HelloThere`

- Путь: `editions/katexdemo/tiddlers/HelloThere.tid`
- Тело: 161 строк, заголовков: 15, списков: 0, блоков кода: 11
- Трансклюзии: `[[$:/plugins/tiddlywiki/katex]]`

> This is a TiddlyWiki plugin for mathematical and chemical typesetting based on KaTeX from Khan Academy. It is completely self-contained, and doesn't need an Internet connection in order to work. It wo

### `Release 5.3.4`

- Путь: `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.3.4.tid`
- Теги: `ReleaseNotes`
- Тело: 161 строк, заголовков: 14, списков: 55, блоков кода: 0
- Макросы: `<<testcase>>`
- Трансклюзии: `[[duarte.framos]]`, `[[Leaflet.js]]`, `[[Turf.js]]`, `[[GeoJSON]]`, `[[TravelTime]]`, `[[geocoding]]`, `[[routing]]`, `[[isochrones]]`

> //[[See GitHub for detailed change history of this release\|https://github.com/TiddlyWiki/TiddlyWiki5/compare/v5.3.3...v5.3.4]]// <<.banner-credits credit:"""Congratulations to [[duarte.framos\|https://

### `$:/_tw5.com-styles`

- Путь: `editions/tw5.com/tiddlers/system/tw5.com-styles.tid`
- Теги: `$:/tags/Stylesheet`
- Тело: 160 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<colour>>`, `<<box-shadow>>`

> \rules only filteredtranscludeinline transcludeinline macrodef macrocallinline macrocallblock .tc-hero-heading a.tc-tiddlylink { font-weight: bold; } .tc-double-spaced-list li { padding-bottom: .5em; 

### `Documentation Macros`

- Путь: `editions/fr-FR/tiddlers/Documentation_Macros.tid`
- Теги: `[[Improving`, `TiddlyWiki`, `Documentation]]`
- Тело: 159 строк, заголовков: 0, списков: 0, блоков кода: 0

> Les macros suivantes sont utilisées tout au long de la documentation de ~TiddlyWiki. Leurs noms commencent par un point pour les séparer de celles que les utilisateurs ont l'habitude d'expérimenter. !

### `$:/HireJeremy/styles`

- Путь: `editions/tw5.com/tiddlers/hire-jeremy/HireJeremyStyles.tid`
- Теги: `[[$:/tags/Stylesheet]]`
- Тело: 159 строк, заголовков: 0, списков: 0, блоков кода: 0
- Макросы: `<<sidebarbreakpoint-minus-one>>`, `<<sidebarbreakpoint>>`

> \define sidebarbreakpoint() <$text text={{$:/themes/tiddlywiki/vanilla/metrics/sidebarbreakpoint}}/> \end \define sidebarbreakpoint-minus-one() <$text text={{{ [{$:/themes/tiddlywiki/vanilla/metrics/s

### Прочие тиддлеры (краткая таблица)

| Title | Путь | Тело, строк | Теги |
|---|---|---:|---|
| Release 5.3.0 | `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.3.0.tid` | 156 | ReleaseNotes |
| $:/plugins/tiddlywiki/tour/settings | `plugins/tiddlywiki/tour/settings.tid` | 156 | $:/tags/ControlPanel/SettingsTab |
| $:/tiddlywiki/community/cards/Styles | `community/tools/cards/Styles.tid` | 155 | $:/tags/Stylesheet |
| EventCatcherWidget | `editions/tw5.com/tiddlers/widgets/EventCatcherWidget.tid` | 155 | Widgets TriggeringWidgets |
| SyncAdaptorModules | `editions/dev/tiddlers/from tw5.com/moduletypes/SyncAdaptorModules.tid` | 154 | dev moduletypes |
| WidgetMessage: tm-edit-text-operation | `editions/tw5.com/tiddlers/messages/WidgetMessage_ tm-edit-text-operation.tid` | 153 | Messages |
| Release 5.2.2 | `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.2.2.tid` | 152 | ReleaseNotes |
| $:/core/ui/ImportListing | `core/ui/ImportListing.tid` | 151 |  |
| Release 5.1.16 | `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.1.16.tid` | 148 | ReleaseNotes |
| Release 5.1.18 | `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.1.18.tid` | 148 | ReleaseNotes |
| $:/core/ui/ControlPanel/KeyboardShortcuts | `core/ui/ControlPanel/KeyboardShortcuts.tid` | 147 | $:/tags/ControlPanel |
| $:/core/ui/testcases/DefaultTemplate | `core/ui/TestCases/DefaultTemplate.tid` | 146 |  |
| Résumé Wizard | `editions/resumebuilder/tiddlers/Resume Wizard.tid` | 145 |  |
| $:/core/macros/keyboard-driven-input | `core/wiki/macros/keyboard-driven-input.tid` | 144 | $:/tags/Macro |
| Release 5.2.3 | `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.2.3.tid` | 144 | ReleaseNotes |
| $:/palettes/Vanilla | `core/palettes/Vanilla.tid` | 143 | $:/tags/Palette |
| $:/plugins/tiddlywiki/text-slicer/styles | `plugins/tiddlywiki/text-slicer/styles.tid` | 143 | $:/tags/Stylesheet |
| Release 5.1.10 | `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.1.10.tid` | 142 | ReleaseNotes |
| SelectWidget | `editions/tw5.com/tiddlers/widgets/SelectWidget.tid` | 142 | TriggeringWidgets Widgets |
| $:/palettes/DesertSand | `core/palettes/DesertSand.tid` | 140 | $:/tags/Palette |
| $:/palettes/GruvboxDark | `core/palettes/GruvBoxDark.tid` | 140 | $:/tags/Palette |
| Release 5.2.6 | `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.2.6.tid` | 140 | ReleaseNotes |
| Variables | `editions/tw5.com/tiddlers/variables/Variables.tid` | 139 | Concepts WikiText |
| $:/core/macros/list | `core/wiki/macros/list.tid` | 138 | $:/tags/Macro |
| $:/plugins/tiddlywiki/geospatial/docs/flickr-helpers | `plugins/tiddlywiki/geospatial/docs/flickr.tid` | 137 | $:/tags/GeospatialDocs |
| Release 5.2.4 | `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.2.4.tid` | 136 | ReleaseNotes |
| $:/palettes/Nord | `core/palettes/Nord.tid` | 135 | $:/tags/Palette |
| Child widgets tutorial | `editions/dev/tiddlers/javascript-widget-tutorial/Child widgets tutorial.tid` | 135 |  |
| $:/plugins/tiddlywiki/github-fork-ribbon/styles | `plugins/tiddlywiki/github-fork-ribbon/styles.tid` | 135 |  |
| $:/plugins/tiddlywiki/katex/ui/config/macro | `plugins/tiddlywiki/katex/ui/config/macro.tid` | 133 | $:/tags/KaTeX/Config |
| $:/palettes/CupertinoDark | `core/palettes/CupertinoDark.tid` | 132 | $:/tags/Palette |
| Release 5.3.7 | `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.3.7.tid` | 131 | ReleaseNotes |
| SetWidget | `editions/tw5.com/tiddlers/widgets/SetWidget.tid` | 131 | Widgets |
| TiddlyWikiFolders | `editions/es-ES/tiddlers/TiddlyWikiFolders.tid` | 130 | [[TiddlyWiki on Node.js]] |
| $:/plugins/tiddlywiki/text-slicer/docs/model | `plugins/tiddlywiki/text-slicer/docs/docs-model.tid` | 129 | $:/plugins/tiddlywiki/text-slicer/docs |
| $:/plugins/tiddlywiki/innerwiki/examples | `plugins/tiddlywiki/innerwiki/doc/examples.tid` | 127 |  |
| ui/geomarker | `editions/geospatialdemo/tiddlers/ui/geomarker.tid` | 126 |  |
| $:/SplashScreen | `editions/tw5.com/tiddlers/system/$__SplashScreen.tid` | 125 | $:/tags/RawMarkupWikified/TopBody |
| $:/themes/tiddlywiki/snowwhite/base | `themes/tiddlywiki/snowwhite/base.tid` | 125 | [[$:/tags/Stylesheet]] |
| $:/core/ui/ControlPanel/WikiInformation | `core/ui/WikiInformation.tid` | 124 | $:/tags/ControlPanel/Info |
| Extended Listops Filters | `editions/tw5.com/tiddlers/widgets/Extended Listops Filters.tid` | 124 | Filters |
| How to create dynamic editor toolbar buttons | `editions/tw5.com/tiddlers/howtos/How to create dynamic editor toolbar buttons.tid` | 123 |  |
| $:/palettes/SolarizedDark | `core/palettes/SolarizedDark.tid` | 122 | $:/tags/Palette |
| $:/palettes/SolarizedLight | `core/palettes/SolarizedLight.tid` | 122 | $:/tags/Palette |
| How to Create a Custom Cascade Entry | `editions/dev/tiddlers/How to Create a Custom Cascade Entry.tid` | 122 |  |
| ActionListopsWidget | `editions/tw5.com/tiddlers/widgets/ActionListopsWidget.tid` | 122 | ActionWidgets Widgets |
| Linking in WikiText | `editions/fr-FR/tiddlers/Linking in WikiText.tid` | 119 | WikiText |
| Release 5.1.12 | `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.1.12.tid` | 119 | ReleaseNotes |
| $:/core/ui/AdvancedSearch/Shadows | `core/ui/AdvancedSearch/Shadows.tid` | 118 | $:/tags/AdvancedSearch |
| Linking in WikiText | `editions/ja-JP/tiddlers/wikitext/Linking in WikiText.tid` | 118 | WikiText |
| Linking in WikiText | `editions/tw5.com/tiddlers/wikitext/Linking in WikiText.tid` | 118 | WikiText |
| $:/palettes/Twilight | `core/palettes/Twilight.tid` | 117 | $:/tags/Palette |
| $:/core/ui/AdvancedSearch/System | `core/ui/AdvancedSearch/System.tid` | 117 | $:/tags/AdvancedSearch |
| $:/plugins/tiddlywiki/markdown/readme | `plugins/tiddlywiki/markdown/readme.tid` | 117 |  |
| Demonstration: keyboard-driven-input Macro | `editions/ja-JP/tiddlers/demonstrations/KeyboardDrivenInput/Demonstration_ keyboard-driven-input Macro.tid` | 115 | Learning KeyboardDrivenInput |
| Demonstration: keyboard-driven-input Macro | `editions/tw5.com/tiddlers/demonstrations/KeyboardDrivenInput/Demonstration_ keyboard-driven-input Macro.tid` | 115 | Learning KeyboardDrivenInput |
| $:/palettes/Muted | `core/palettes/BrightMute.tid` | 114 | $:/tags/Palette |
| $:/palettes/ContrastDark | `core/palettes/ContrastDark.tid` | 114 | $:/tags/Palette |
| $:/palettes/Rocker | `core/palettes/Rocker.tid` | 114 | $:/tags/Palette |
| $:/TagManager | `core/ui/TagManager.tid` | 114 |  |
| Makros in WikiText | `editions/de-AT/tiddlers/wikitext/Makros in WikiText.tid` | 114 | WikiText |
| Release 5.2.1 | `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.2.1.tid` | 114 | ReleaseNotes |
| $:/palettes/Blanca | `core/palettes/Blanca.tid` | 113 | $:/tags/Palette |
| $:/palettes/ContrastLight | `core/palettes/ContrastLight.tid` | 113 | $:/tags/Palette |
| $:/palettes/DarkPhotos | `core/palettes/DarkPhotos.tid` | 113 | $:/tags/Palette |
| WidgetMessage: tm-http-request Example - Zotero | `editions/tw5.com/tiddlers/messages/WidgetMessage_ tm-http-request Example Zotero.tid` | 113 | $:/tags/Macro $:/tags/Global |
| Multi-Valued Variables | `editions/tw5.com/tiddlers/variables/Multi-Valued Variables.tid` | 113 | Concepts Variables |
| Developing plugins using Node.js and GitHub | `editions/dev/tiddlers/from tw5.com/Developing plugins using Node.js and GitHub.tid` | 112 | howto |
| WidgetMessage: tm-http-request Examples | `editions/tw5.com/tiddlers/messages/WidgetMessage_ tm-http-request Examples.tid` | 112 |  |
| LinkWidget | `editions/tw5.com/tiddlers/widgets/LinkWidget.tid` | 112 | Widgets |
| $:/core/ui/EditTemplate/body/toolbar/button | `core/ui/EditTemplate/body-toolbar-button.tid` | 111 |  |
| HTML in WikiText | `editions/fr-FR/tiddlers/HTML in WikiText.tid` | 111 | WikiText |
| How to create keyboard shortcuts | `editions/tw5.com/tiddlers/howtos/How to create keyboard shortcuts.tid` | 111 | [[Customise TiddlyWiki]] Learning |
| Tables | `editions/classicparserdemo/tiddlers/Tables.tid` | 109 | Formatting |
| $:/palettes/Naporitan | `editions/tiddlywiki-surveys/tiddlers/app/palettes - Naporitan.tid` | 109 | $:/tags/Palette |
| $:/palettes/Blue | `core/palettes/Blue.tid` | 108 | $:/tags/Palette |
| $:/palettes/SpartanDay | `core/palettes/SpartanDay.tid` | 108 | $:/tags/Palette |
| $:/palettes/SpartanNight | `core/palettes/SpartanNight.tid` | 108 | $:/tags/Palette |
| $:/core/macros/list | `editions/fr-FR/tiddlers/system/$__core_macros_list.tid` | 108 | $:/tags/Macro |
| $:/core/macros/list | `editions/ja-JP/tiddlers/system/$_core_macros_list.tid` | 108 | $:/tags/Macro |
| GroupedLists/Example/SearchAnotherField | `editions/tw5.com/tiddlers/examples/GroupedLists/SearchAnotherField.tid` | 108 | $:/tags/wiki-test-spec GroupedLists |
| Table-of-Contents Macros | `editions/tw5.com/tiddlers/macros/TableOfContentsMacro.tid` | 108 | Macros [[Core Macros]] |
| $:/plugins/tiddlywiki/consent-banner/styles | `plugins/tiddlywiki/consent-banner/styles.tid` | 108 | $:/tags/Stylesheet |
| $:/plugins/tiddlywiki/dynannotate/examples/combined | `plugins/tiddlywiki/dynannotate/examples/combined.tid` | 107 | $:/tags/dynannotateExamples |
| $:/plugins/tiddlywiki/dynaview/examples/zoomable-diagram | `plugins/tiddlywiki/dynaview/examples/zoomable-diagram.tid` | 107 | $:/tags/dynaviewExamples |
| Tabellen in WikiText | `editions/de-AT/tiddlers/wikitext/Tabellen in WikiText.tid` | 106 | WikiText |
| Custom Widgets | `editions/tw5.com/tiddlers/widgets/Custom Widgets.tid` | 106 | Concepts |
| $:/plugins/tiddlywiki/codemirror/keyboard | `plugins/tiddlywiki/codemirror/keyboard.tid` | 105 |  |
| $:/core/ui/AdvancedSearch/Filter | `core/ui/AdvancedSearch/Filter.tid` | 104 | $:/tags/AdvancedSearch |
| TiddlerFiles | `editions/ja-JP/tiddlers/fileformats/TiddlerFiles.tid` | 104 | [[TiddlyWiki on Node.js]] |
| Pragma: \procedure | `editions/tw5.com/tiddlers/pragmas/Pragma_ _procedure.tid` | 104 | Pragmas |
| Variable Usage | `editions/tw5.com/tiddlers/variables/Variable Usage.tid` | 104 |  |
| $:/plugins/tiddlywiki/tour/simplified-tiddler-with-tags | `plugins/tiddlywiki/tour/simplified-tiddler-with-tags.tid` | 104 |  |
| $:/geospatialdemo/features/denver/bikerental | `editions/geospatialdemo/tiddlers/features/denver-bikerental.tid` | 103 | $:/tags/GeoFeature |
| GroupedLists/Example/TabsWithSearch | `editions/tw5.com/tiddlers/examples/GroupedLists/TabsWithSearch.tid` | 103 | $:/tags/wiki-test-spec GroupedLists |
| TiddlerFiles | `editions/tw5.com/tiddlers/fileformats/TiddlerFiles.tid` | 103 | [[TiddlyWiki on Node.js]] |
| $:/plugins/tiddlywiki/dynaview/docs | `plugins/tiddlywiki/dynaview/docs.tid` | 103 |  |
| $:/plugins/tiddlywiki/translators/macros/translatableStringEditor | `plugins/tiddlywiki/translators/macros/translatableStringEditor.tid` | 103 | $:/tags/Macro |
| TiddlyWikiFolders | `editions/fr-FR/tiddlers/TiddlyWikiFolders.tid` | 102 | [[TiddlyWiki on Node.js]] |
| How to create keyboard shortcuts | `editions/ja-JP/tiddlers/howtos/How to create keyboard shortcuts.tid` | 102 | [[Customise TiddlyWiki]] Learning |
| $:/plugins/tiddlywiki/tour/variables | `plugins/tiddlywiki/tour/variables.tid` | 102 |  |
| TestCaseWidget | `editions/tw5.com/tiddlers/widgets/TestCaseWidget.tid` | 101 | Widgets |
| $:/plugins/tiddlywiki/tour/panel | `plugins/tiddlywiki/tour/tour-panel.tid` | 101 | $:/tags/PageTemplate |
| $:/core/ui/Components/plugin-info | `core/ui/Components/plugin-info.tid` | 100 |  |
| $:/core/ui/SideBarSegments/search | `core/ui/SideBarSegments/search.tid` | 100 | $:/tags/SideBarSegment |
| $:/plugins/tiddlywiki/codemirror/styles | `plugins/tiddlywiki/codemirror/styles.tid` | 100 | [[$:/tags/Stylesheet]] |
| $:/palettes/Dev | `editions/dev/tiddlers/system/palettes-Dev.tid` | 99 | $:/tags/Palette |
| $:/plugins/tiddlywiki/translators/palette | `plugins/tiddlywiki/translators/palette.tid` | 99 | $:/tags/Palette |
| $:/themes/tiddlywiki/seamless/base | `themes/tiddlywiki/seamless/base.tid` | 99 | [[$:/tags/Stylesheet]] |
| Release 5.1.8 | `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.1.8.tid` | 98 | ReleaseNotes |
| Using the external JavaScript template | `editions/tw5.com/tiddlers/webserver/Using the external JavaScript template.tid` | 98 | [[WebServer Guides]] |
| ButtonWidget | `editions/tw5.com/tiddlers/widgets/ButtonWidget.tid` | 98 | Widgets TriggeringWidgets |
| Block Quotes in WikiText | `editions/tw5.com/tiddlers/wikitext/Block Quotes in WikiText.tid` | 98 | WikiText |
| Release 5.1.8 | `editions/fr-FR/tiddlers/Release_5.1.8.tid` | 97 | ReleaseNotes |
| Block Quotes in WikiText | `editions/ja-JP/tiddlers/wikitext/Block Quotes in WikiText.tid` | 97 | WikiText |
| $:/plugins/tiddlywiki/dynannotate/examples/viewtemplate/text | `plugins/tiddlywiki/dynannotate/examples/viewtemplate-text.tid` | 97 |  |
| $:/plugins/tiddlywiki/geospatial/helpers/Flickr | `plugins/tiddlywiki/geospatial/helpers/Flickr.tid` | 96 | $:/tags/Global |
| Data Storage in Single File TiddlyWiki | `editions/dev/tiddlers/new/Data Storage in Single File TiddlyWiki.tid` | 95 | Data-Storage doc [[Data Storage]] |
| real-estate-demo | `editions/geospatialdemo/tiddlers/real-estate-demo/real-estate-demo.tid` | 95 | $:/tags/GeospatialDemo |
| $:/themes/tiddlywiki/tight/base | `themes/tiddlywiki/tight/base.tid` | 95 | [[$:/tags/Stylesheet]] |
| Markup | `editions/classicparserdemo/tiddlers/Markup.tid` | 94 |  |
| ListWidget | `editions/es-ES/tiddlers/ListWidget.tid` | 94 | Widgets |
| $:/Manager | `core/ui/Manager.tid` | 93 |  |
| $:/language/Help/aws | `plugins/tiddlywiki/aws/docs/help.tid` | 93 |  |
| $:/plugins/tiddlywiki/text-slicer/docs/internals | `plugins/tiddlywiki/text-slicer/docs/docs-internals.tid` | 93 | $:/plugins/tiddlywiki/text-slicer/docs |
| $:/PaletteManager | `core/ui/PaletteManager.tid` | 92 |  |
| $:/plugins/tiddlywiki/railroad/syntax | `editions/fr-FR/tiddlers/$__plugins_tiddlywiki_railroad_syntax.tid` | 92 |  |
| Making a new section | `editions/resumebuilder/tiddlers/documentation/Making a new section.tid` | 92 |  |
| $:/core/templates/tiddlywiki2.template.html | `plugins/tiddlywiki/classictools/templates/tiddlywiki2.template.html.tid` | 92 |  |
| $:/plugins/tiddlywiki/dynannotate/examples/simple | `plugins/tiddlywiki/dynannotate/examples/simple.tid` | 92 | $:/tags/dynannotateExamples |
| Typisierte Blöcke in WikiText | `editions/de-AT/tiddlers/wikitext/Typisierte Blocke in WikiText.tid` | 91 | WikiText |
| Scripts for building tiddlywiki.com | `editions/dev/tiddlers/build/Scripts for building tiddlywiki.com.tid` | 91 |  |
| Transclusion in WikiText | `editions/ja-JP/tiddlers/wikitext/Transclusion in WikiText.tid` | 91 | WikiText |
| jsonget Operator | `editions/tw5.com/tiddlers/filters/jsonget.tid` | 91 | [[Filter Operators]] [[JSON Operators]] |
| Introduction to filter notation | `editions/es-ES/tiddlers/Introduction_to_filter_notation.tid` | 89 | Learning Filters |
| ListWidget | `editions/fr-FR/tiddlers/ListWidget.tid` | 89 | Widgets |
| Introduction to filter notation | `editions/ja-JP/tiddlers/filters/Introduction to filter notation.tid` | 89 | Learning Filters |
| Lists in WikiText | `editions/ja-JP/tiddlers/wikitext/Lists in WikiText.tid` | 89 | WikiText Lists |
| TiddlyWiki Pre-release Size Comparison | `editions/prerelease/tiddlers/system/TiddlyWiki Pre-release Size Comparison.tid` | 89 |  |
| Lists in WikiText | `editions/tw5.com/tiddlers/wikitext/Lists in WikiText.tid` | 89 | WikiText Lists |
| Transclusion in WikiText | `editions/tw5.com/tiddlers/wikitext/Transclusion in WikiText.tid` | 89 | WikiText |
| Introduction to filter notation | `editions/tw5.com/tiddlers/filters/Introduction to filter notation.tid` | 88 | Learning Filters |
| $:/plugins/tiddlywiki/geospatial/docs/geolocation | `plugins/tiddlywiki/geospatial/docs/geolocation.tid` | 88 | $:/tags/GeospatialDocs |
| Procedure Definition Syntax | `editions/tw5.com/tiddlers/macros/syntax/Procedure Definition Syntax.tid` | 87 | [[Call Syntax]] |
| WidgetMessage: tm-http-request Example - Random Dog | `editions/tw5.com/tiddlers/messages/WidgetMessage_ tm-http-request Example Random Dog.tid` | 87 | $:/tags/Macro $:/tags/Global |
| Filter Operators | `editions/dev/tiddlers/new/Filter Operators.tid` | 86 | dev |
| Lists in WikiText | `editions/fr-FR/tiddlers/wikitext/Lists in WikiText.tid` | 86 | Lists WikiText |
| Saving via WebDAV | `editions/ja-JP/tiddlers/saving/Saving via WebDAV.tid` | 86 | Android Chrome Firefox [[Internet Explorer]] |
| Tables in WikiText CSS Utility Classes | `editions/ja-JP/tiddlers/wikitext/Tables in WikiText CSS Utility Classes.tid` | 86 | [[Tables in WikiText]] |
| Release 5.1.5 | `editions/tw5.com/tiddlers/releasenotes/pre-5.4.0/Release 5.1.5.tid` | 86 | ReleaseNotes |

… и ещё 6644 тиддлеров.

## 14. Конфигурационные файлы

Всего: **39**.

- `deps/iconv_winbuild/.gitignore`
- `deps/svg/Makefile`
- `doc/.gitignore`
- `doc/Doxyfile`
- `doc/Doxyfile_chm`
- `doc_internal/Doxyfile.in`
- `doxygen-master/.dockerignore`
- `doxygen-master/.editorconfig`
- `doxygen-master/.github/dependabot.yml`
- `doxygen-master/.github/FUNDING.yml`
- `doxygen-master/.github/workflows/build_cmake.yml`
- `doxygen-master/.github/workflows/coverity.yml`
- `doxygen-master/.github/workflows/docker_publish.yml`
- `doxygen-master/.github/workflows/doxmlparser-publish.yml`
- `doxygen-master/.gitignore`
- `doxygen-master/deps/iconv_winbuild/.gitignore`
- `doxygen-master/deps/svg/Makefile`
- `doxygen-master/doc/.gitignore`
- `doxygen-master/doc/Doxyfile`
- `doxygen-master/doc/Doxyfile_chm`
- `doxygen-master/doc_internal/Doxyfile.in`
- `doxygen-master/Dockerfile`
- `doxygen-master/templates/html/.eslintrc.js`
- `doxygen-master/templates/xml/doxyfile.xsd`
- `doxygen-master/testing/Doxyfile`
- `eslint.config.mjs`
- `playwright.config.js`
- `templates/html/.eslintrc.js`
- `templates/xml/doxyfile.xsd`
- `testing/Doxyfile`
- `TiddlyWiki5-master/.github/ISSUE_TEMPLATE/config.yml`
- `TiddlyWiki5-master/.github/workflows/ci.yml`
- `TiddlyWiki5-master/.github/workflows/cla-check.yml`
- `TiddlyWiki5-master/.github/workflows/cla-signed.yml`
- `TiddlyWiki5-master/.github/workflows/eslint.yml`
- `TiddlyWiki5-master/.github/workflows/pr-check-build-size.yml`
- `TiddlyWiki5-master/.github/workflows/pr-comment-build-size.yml`
- `TiddlyWiki5-master/.github/workflows/pr-validation.yml`
- `TiddlyWiki5-master/.gitignore`

## 15. Документация проекта

Найдено **33** README-файлов. Оглавления каждого:

### `addon/doxmlparser/README.md`

_Заголовков нет; начало файла:_

```text
Doxmlparser
===========
This is a python package to make it easier to parse the XML output produced by doxygen.
The API is generated from the index.xsd and compound.xsd XML schema files using
```

### `addon/doxyapp/README`

_Заголовков нет; начало файла:_

```text
This directory contains an example of how to use doxygen as
an "source parsing engine" in an application. It shows how to configure doxygen
from the application and shows how to run doxygen without generating output.
Practically, it allows you to extract the symbols found in the source code.
```

### `addon/doxycommentview/README.md`

- Viewer for the content of a Doxygen style comment block
  - Contents
  - To prepare the server
  - To run the server invoke:

### `addon/doxyparse/README.md`

- Doxyparse
  - build dependencies
  - build
  - install
  - release
  - Authors

### `addon/doxywizard/README`

_Заголовков нет; начало файла:_

```text
Doxywizard is a graphical front-end to read/edit/write doxygen configuration
files and to launch doxygen. It requires Qt version 4.3 or higher.
```

### `bin/readme.md`

_Заголовков нет; начало файла:_

```text
<h1 class="">Script Files</h1><p>The <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/TiddlyWiki5.html">TiddlyWiki5</a> repository contains several scripts in the <code>bin</code> folder that you can use to automate common tasks, or as a useful starting point for your own scripts. See <a class="tc-tiddlylink tc-tiddlylink-missing" href="https://tiddlywiki.com/static/Scripts%2520for%2520building%2520tiddlywiki.com.html">Scripts for building tiddlywiki.com</a> for details of the scripts used to build and release <a class="tc-tiddlylink-external" href="https://tiddlywiki.com/" rel="noopener noreferrer" target="_blank">https://tiddlywiki.com/</a>.</p><p>All the scripts expect to be run from the root folder of the repository.</p><h2 class=""><code>serve</code>: serves tw5.com</h2><pre><code>./bin/serve.sh -h
./bin/serve.sh [edition dir] [username] [password] [host] [port]</code></pre><p>Or:</p><pre><code>./bin/serve.cmd -h
./bin/serve.cmd [edition dir] [username] [password] [host] [port]</code></pre><p>This script starts <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/TiddlyWiki5.html">TiddlyWiki5</a> running as an HTTP server, defaulting to the content from the <code>tw5.com-server</code> edition. By default, the Node.js serves on port 8080. If the optional <code>username</code> parameter is provided, it is used for signing edits. If the <code>password</code> is provided then HTTP basic authentication is used. Run the script with the <code>-h</code> parameter to see online help.</p><p>To experiment with this configuration, run the script and then visit <code>http://127.0.0.1:8080</code> in a browser.</p><p>Changes made in the browser propagate to the server over HTTP (use the browser developer console to see these requests). The server then syncs changes to the file system (and logs each change to the screen).</p><h2 class=""><code>test</code>: build and run tests</h2><p>This script runs the <code>test</code> edition of <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/TiddlyWiki.html">TiddlyWiki</a> on the server to perform the server-side tests and to build <code>test.html</code> for running the tests in the browser.</p><h2 class=""><code>lazy</code>: serves tw5.com with lazily loaded images</h2><pre><code>./bin/lazy.sh &lt;username&gt; [&lt;password&gt;]</code></pre><p>Or:</p><pre><code>./bin/lazy.cmd &lt;username&gt; [&lt;password&gt;]</code></pre><p>This script serves the <code>tw5.com-server</code> edition content with <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/LazyLoading.html">LazyLoading</a> applied to images.
</p>
```

### `community/readme.md`

- Community Records and Resources

### `core/modules/utils/diff-match-patch/README.md`

_Заголовков нет; начало файла:_

```text
The Diff Match and Patch libraries offer robust algorithms to perform the
operations required for synchronizing plain text.
1. Diff:
   * Compare two blocks of plain text and efficiently return a list of differences.
```

### `deps/fmt/README.md`

_Заголовков нет; начало файла:_

```text
The include dir contains a copy of the files in deps/spdlog/include/spdlog/fmt/bundled
which is based on fmt version 11.2.0 see https://github.com/fmtlib/fmt/releases
```

### `deps/spdlog/README.md`

- spdlog
  - Install
  - Platforms
  - Package managers:
  - Features
  - Usage samples
  - Benchmarks
  - Documentation

### `deps/sqlite3/README.md`

- Contents

### `deps/svg/README`

_Заголовков нет; начало файла:_

```text
Doxygen's svg.min.js script is composed of minified versions of the following
packages:
- svgdotjs           3.1.2: https://github.com/svgdotjs/svg.js
- svgpan-1.2mod.js     1.2: https://github.com/aleofreddi/svgpan
```

### `deps/TinyDeflate/README.md`

- TinyDeflate
  - Memory usage at aggressive settings (backtrackable input)
  - Memory usage at aggressive settings (non-backtrackable input)
  - Memory usage at default settings (backtrackable input)
  - Memory usage at default settings (non-backtrackable input)
  - Tuning
  - Unrequirements
  - Rationale
  - Caveats
  - Definitions
  - Requirements
  - Example use:
  - Misnomer

### `doxygen-master/addon/doxmlparser/README.md`

_Заголовков нет; начало файла:_

```text
Doxmlparser
===========
This is a python package to make it easier to parse the XML output produced by doxygen.
The API is generated from the index.xsd and compound.xsd XML schema files using
```

### `doxygen-master/addon/doxyapp/README`

_Заголовков нет; начало файла:_

```text
This directory contains an example of how to use doxygen as
an "source parsing engine" in an application. It shows how to configure doxygen
from the application and shows how to run doxygen without generating output.
Practically, it allows you to extract the symbols found in the source code.
```

### `doxygen-master/addon/doxycommentview/README.md`

- Viewer for the content of a Doxygen style comment block
  - Contents
  - To prepare the server
  - To run the server invoke:

### `doxygen-master/addon/doxyparse/README.md`

- Doxyparse
  - build dependencies
  - build
  - install
  - release
  - Authors

### `doxygen-master/addon/doxywizard/README`

_Заголовков нет; начало файла:_

```text
Doxywizard is a graphical front-end to read/edit/write doxygen configuration
files and to launch doxygen. It requires Qt version 4.3 or higher.
```

### `doxygen-master/deps/fmt/README.md`

_Заголовков нет; начало файла:_

```text
The include dir contains a copy of the files in deps/spdlog/include/spdlog/fmt/bundled
which is based on fmt version 11.2.0 see https://github.com/fmtlib/fmt/releases
```

### `doxygen-master/deps/spdlog/README.md`

- spdlog
  - Install
  - Platforms
  - Package managers:
  - Features
  - Usage samples
  - Benchmarks
  - Documentation

### `doxygen-master/deps/sqlite3/README.md`

- Contents

### `doxygen-master/deps/svg/README`

_Заголовков нет; начало файла:_

```text
Doxygen's svg.min.js script is composed of minified versions of the following
packages:
- svgdotjs           3.1.2: https://github.com/svgdotjs/svg.js
- svgpan-1.2mod.js     1.2: https://github.com/aleofreddi/svgpan
```

### `doxygen-master/deps/TinyDeflate/README.md`

- TinyDeflate
  - Memory usage at aggressive settings (backtrackable input)
  - Memory usage at aggressive settings (non-backtrackable input)
  - Memory usage at default settings (backtrackable input)
  - Memory usage at default settings (non-backtrackable input)
  - Tuning
  - Unrequirements
  - Rationale
  - Caveats
  - Definitions
  - Requirements
  - Example use:
  - Misnomer

### `doxygen-master/README.md`

_Заголовков нет; начало файла:_

```text
Doxygen
===============
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9HHLRBCC8B2B8)
Doxygen is the de facto standard tool for generating documentation from
```

### `editions/tiddlywiki-surveys/scripts/readme.md`

- Utility Scripts

### `languages/pl-PL/readme.md`

_Заголовков нет; начало файла:_

```text
Translation notes are available here: https://github.com/TiddlyWiki/TiddlyWiki5/discussions/6080
```

### `plugins/tiddlywiki/bibtex/files/README.md`

  - Using in Browser
  - Using in [Node.js](http://nodejs.org/)
  - Contributing
  - Credits

### `plugins/tiddlywiki/qrcode/files/html5-qrcode/README.md`

- Html5-QRCode
  - Lightweight & cross platform QR Code and Bar code scanning library for the web
  - Key highlights
  - We need your help!
  - Documentation
  - Supported platforms
  - Description - [View Demo](https://blog.minhazav.dev/research/html5-qrcode.html)
  - How to use
  - Demo
  - Screenshots
  - Documentation
  - Experimental features
  - How to modify and build
  - How to contribute
  - Support 💖

### `plugins/tiddlywiki/qrcode/files/qrcode/README.md`

- node-yaqrcode
  - Overview
  - Usage
  - License

### `plugins/tiddlywiki/sax/files/README.md`

- sax js
  - What This Is
  - What This Is (probably) Not
  - Regarding `<!DOCTYPE`s and `<!ENTITY`s
  - Usage
  - Arguments
  - Methods
  - Members
  - Events
  - Reporting Problems

### `plugins/tiddlywiki/xmldom/files/readme.md`

- XMLDOM [![Build Status](https://secure.travis-ci.org/bigeasy/xmldom.png?branch=master)](http://travis-ci.org/bigeasy/xmldom) [![Coverage Status](https://coveralls.io/repos/bigeasy/xmldom/badge.png?branch=master)](https://coveralls.io/r/bigeasy/xmldom) [![NPM version](https://badge.fury.io/js/xmldom.png)](http://badge.fury.io/js/xmldom)

### `readme.md`

_Заголовков нет; начало файла:_

```text
<h1 class="">Welcome</h1><p>Welcome to <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/TiddlyWiki.html">TiddlyWiki</a>, a non-linear personal web notebook that anyone can use and keep forever, independently of any corporation.</p><p>TiddlyWiki is a complete interactive wiki in JavaScript. It can be used as a single HTML file in the browser or as a powerful Node.js application. It is highly customisable: the entire user interface is itself implemented in hackable <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/WikiText.html">WikiText</a>.</p><h2 class="">Demo</h2><p>Learn more and see it in action at <a class="tc-tiddlylink-external" href="https://tiddlywiki.com/" rel="noopener noreferrer" target="_blank">https://tiddlywiki.com/</a></p><h2 class="">Developer Documentation</h2><p>Developer documentation is in progress at <a class="tc-tiddlylink-external" href="https://tiddlywiki.com/dev/" rel="noopener noreferrer" target="_blank">https://tiddlywiki.com/dev/</a></p><h2 class="">Pull Request Previews</h2><p>Pull request previews courtesy of <a class="tc-tiddlylink-external" href="https://netlify.com" rel="noopener noreferrer" target="_blank">Netlify</a></p><p><a href="https://www.netlify.com" rel="noopener noreferrer" target="_blank"><img alt="Deploys by Netlify" src="https://www.netlify.com/v3/img/components/netlify-light.svg"></a></p><h1 class="">Join the Community</h1><p>
<h2 class="">User forums</h2><h3 class="">Talk TiddlyWiki</h3><p>As the official TiddlyWiki forum, Talk TiddlyWiki is a place to talk about TiddlyWiki: requests for help, <a class="tc-tiddlylink-external" href="https://talk.tiddlywiki.org/c/announcements/20" rel="noopener noreferrer" target="_blank">announcements</a> of new releases and plugins, debating new features, or just sharing experiences. You can participate via the associated website, or subscribe via email.</p><p><a class="tc-tiddlylink-external" href="https://talk.tiddlywiki.org/" rel="noopener noreferrer" target="_blank">https://talk.tiddlywiki.org/</a></p><h3 class="">Google Groups</h3><p>For the convenience of existing users, we also continue to operate the original TiddlyWiki group (hosted on Google Groups since 2005): <a class="tc-tiddlylink-external" href="https://groups.google.com/group/TiddlyWiki" rel="noopener noreferrer" target="_blank">https://groups.google.com/group/TiddlyWiki</a></p><h2 class="">Developer forums</h2><ul><li><a class="tc-tiddlylink-external" href="https://tiddlywiki.com/dev" rel="noopener noreferrer" target="_blank">tiddlywiki.com/dev</a> is the official developer documentation</li><li>Get involved in the <a class="tc-tiddlylink-external" href="https://github.com/TiddlyWiki/TiddlyWiki5" rel="noopener noreferrer" target="_blank">development on GitHub</a></li><li><a class="tc-tiddlylink-external" href="https://github.com/TiddlyWiki/TiddlyWiki5/discussions" rel="noopener noreferrer" target="_blank">GitHub Discussions</a> are for Q&amp;A and open-ended discussion</li><li><a class="tc-tiddlylink-external" href="https://github.com/TiddlyWiki/TiddlyWiki5/issues" rel="noopener noreferrer" target="_blank">GitHub Issues</a> are for raising bug reports and proposing specific, actionable new ideas</li><li>See <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/Contributing.html">Contributing</a> for guidelines on how to contribute to the project.</li></ul><h2 class="">Other forums</h2><ul><li><a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/TiddlyWiki.html">TiddlyWiki</a> Subreddit: <a class="tc-tiddlylink-external" href="https://www.reddit.com/r/TiddlyWiki5/" rel="noopener noreferrer" target="_blank">/r/TiddlyWiki5</a></li><li>Chat on Discord at <a class="tc-tiddlylink-external" href="https://discord.gg/HFFZVQ8" rel="noopener noreferrer" target="_blank">https://discord.gg/HFFZVQ8</a></li></ul>
</p><hr><h1 class="">Installing TiddlyWiki on Node.js</h1><p>TiddlyWiki is a <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/SingleFileApplication.html">SingleFileApplication</a>, which is easy to use. For advanced users and developers there is a possibility to use a Node.js client / server configuration. This configuration is also used to build the TiddlyWiki <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/SinglePageApplication.html">SinglePageApplication</a></p><ol><li>Install <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/Node.js.html">Node.js</a><ul><li>Linux: <blockquote><div><em>Debian/Ubuntu</em>:<br><code>apt install nodejs</code><br>May need to be followed up by:<br><code>apt install npm</code></div><div><em>Arch Linux</em><br><code>yay -S tiddlywiki</code> <br>(installs node and tiddlywiki)</div></blockquote></li><li>Mac<blockquote><div><code>brew install node</code></div></blockquote></li><li>Android<blockquote><div><a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/Serving%2520TW5%2520from%2520Android.html">Termux for Android</a></div></blockquote></li><li>Other <blockquote><div>See <a class="tc-tiddlylink-external" href="http://nodejs.org" rel="noopener noreferrer" target="_blank">http://nodejs.org</a></div></blockquote></li></ul></li><li>Open a command line terminal and type:<blockquote><div><code>npm install -g tiddlywiki</code></div><div>If it fails with an error you may need to re-run the command as an administrator:</div><div><code>sudo npm install -g tiddlywiki</code> (Mac/Linux)</div></blockquote></li><li>Ensure TiddlyWiki is installed by typing:<blockquote><div><code>tiddlywiki --version</code></div></blockquote><ul><li>In response, you should see <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/TiddlyWiki.html">TiddlyWiki</a> report its current version (eg "5.4.1". You may also see other debugging information reported.)</li></ul></li><li>Try it out:<ol><li><code>tiddlywiki mynewwiki --init server</code> to create a folder for a new wiki that includes server-related components</li><li><code>tiddlywiki mynewwiki --listen</code> to start <a class="tc-tiddlylink tc-tiddlylink-resolves" href="https://tiddlywiki.com/static/TiddlyWiki.html">TiddlyWiki</a></li><li>Visit <a class="tc-tiddlylink-external" href="http://127.0.0.1:8080/" rel="noopener noreferrer" target="_blank">http://127.0.0.1:8080/</a> in your browser</li><li>Try editing and creating tiddlers</li></ol></li><li>Optionally, make an offline copy:<ul><li>click the <span class="doc-icon"><svg class="tc-image-save-button-dynamic tc-image-button" height="22pt" viewBox="0 0 128 128" width="22pt">
<g class="tc-image-save-button-dynamic-clean">
```

### `README.md`

_Заголовков нет; начало файла:_

```text
Doxygen
===============
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9HHLRBCC8B2B8)
Doxygen is the de facto standard tool for generating documentation from
```


## 16. Итоговое резюме

- Проект содержит **11 485 файлов** в **1 403 директориях**; суммарный объём текстового содержимого — ~**1 271 984 строк**.
- Это **объединённый workspace двух проектов**: нелинейной веб-записной книжки **TiddlyWiki5** (JavaScript/Node.js — `core/`, `plugins/`, `editions/`) и генератора документации **Doxygen** (C++/CMake — `src/`, `templates/`, `testing/`). Оба проекта дополняют друг друга: TiddlyWiki предоставляет интерактивный UI, а Doxygen — методологию deep-анализа исходников и структурированной extraction-документации.
- Доминирующие языки: C (32%), C++ (32%), Markdown/Wikitext (13%), JavaScript (10%).
- Обнаружено **113 плагинов TiddlyWiki** в `plugins/`.
- Найдено **876 C/C++ файлов** с документированными классами/функциями (`\brief`, классы с методами, сигнатуры).
- Тестовых файлов: **1 126**.
- Инструмент **Project Describer** интегрирован как плагин TiddlyWiki (`plugins/tiddlywiki/project-describer`) и CLI (`tools/project-describer/cli.js`) — полный отчёт по проекту получается одной кнопкой «Получить полное описание» или командой `node tools/project-describer/cli.js`.

---
*Отчёт создан инструментом Project Describer — интеграция TiddlyWiki5 (UI) и Doxygen (методология анализа исходников).*