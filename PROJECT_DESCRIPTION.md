# Полное описание проекта

> Отчёт сгенерирован инструментом **Project Describer** автоматически путём
> последовательного анализа всех файлов и структур репозитория.

- Дата генерации: `2026-10-18T09:08:21.216Z`
- Корень проекта: `/workspace`

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
| Файл `VERSION` (Doxygen) | `1.19.0` |
| Директорий | 1 403 |
| Файлов | 11 485 |
| Тестовых файлов | 1 126 |
| Документация (md/txt/tid) | 6 991 (в т.ч. тиддлеров: 6 854) |
| Бинарных файлов | 217 |

### Выжимка из README (`addon/doxmlparser/README.md`)

```text
Doxmlparser
===========
This is a python package to make it easier to parse the XML output produced by doxygen.
The API is generated from the index.xsd and compound.xsd XML schema files using
Dave Kuhlman's generateDS https://www.davekuhlman.org/generateDS.html
The current code is generated with generateDS version 2.37.15.
See the examples directory to get an idea how to use the python module
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

| Язык | Файлов | Строк | Комментариев | Доля строк |
|---|---:|---:|---:|---:|
| C | 790 | 405 148 | 95 704 | 31.9% |
| C++ | 508 | 405 006 | 49 622 | 31.9% |
| Markdown/Wikitext | 6 923 | 166 856 | 0 | 13.1% |
| JavaScript | 731 | 128 515 | 15 190 | 10.1% |
| XML | 476 | 70 616 | 42 | 5.6% |
| Python | 50 | 37 252 | 1 814 | 2.9% |
| JSON | 158 | 14 251 | 0 | 1.1% |
| CSS | 47 | 11 953 | 216 | 0.9% |
| TypeScript | 16 | 10 096 | 0 | 0.8% |
| LaTeX | 16 | 7 502 | 0 | 0.6% |
| Text | 65 | 5 995 | 0 | 0.5% |
| CMake | 44 | 2 836 | 742 | 0.2% |
| YAML | 14 | 996 | 33 | 0.1% |
| Shell | 19 | 913 | 212 | 0.1% |
| HTML | 10 | 558 | 88 | 0.0% |
| INI/config | 62 | 404 | 0 | 0.0% |
| VHDL | 2 | 64 | 0 | 0.0% |

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

## 3. Модули и пакеты

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
| `themes` | 18 | 4 525 | — |
| `core-server` | 48 | 3 429 | — |
| `(корень)` | 15 | 3 221 | Корневые файлы обоих проектов (package.json, CMakeLists.txt, README) |
| `boot` | 5 | 3 087 | Загрузчик TiddlyWiki (boot.js) |
| `doc_internal` | 9 | 1 892 | Внутренняя документация разработчиков |
| `cmake` | 22 | 1 351 | Модули сборки CMake |
| `examples` | 66 | 1 320 | Примеры |
| `bin` | 24 | 1 113 | Служебные скрипты |
| `licenses` | 2 | 772 | — |
| `community` | 37 | 760 | Материалы сообщества |
| `libxml` | 3 | 646 | Обёртка libxml для Doxygen |
| `tools` | 2 | 637 | Инструмент интеграции — Project Describer |
| `TiddlyWiki5-master` | 15 | 517 | Резервная копия дерева TiddlyWiki5 |
| `libversion` | 5 | 105 | Модуль версионирования Doxygen |

### Плагины TiddlyWiki

| Название | Title | Тип | Зависимости | Описание |
|---|---|---|---|---|
| Core | `$:/core` | — | — | TiddlyWiki5 core |
| Core Server Components | `$:/core-server` | server | — | TiddlyWiki5 core server components |
| Hide Furniture | `$:/themes/tiddlywiki/hidefurniture` | — | $:/themes/tiddlywiki/centralised | Hides the normal user interface, presentational |
| ar-PS | `$:/languages/ar-PS` | — | — | العربية (فلسطين) |
| ca-ES | `$:/languages/ca-ES` | — | — | Català (Espanya) |
| cs-CZ | `$:/languages/cs-CZ` | — | — | Čeština (Česká republika) |
| da-DK | `$:/languages/da-DK` | — | — | Dansk (Danmark) |
| de-AT | `$:/languages/de-AT` | — | $:/languages/de-DE | Deutsch (Österreich) |
| de-CH | `$:/languages/de-CH` | — | $:/languages/de-DE | Deutsch (Schweiz) |
| de-DE | `$:/languages/de-DE` | — | — | Deutsch (Deutschland) |
| el-GR | `$:/languages/el-GR` | — | — | Ελληνικά (Ελλάδα) |
| en-PH | `$:/languages/en-PH` | — | — | English (Philippines) |
| en-US | `$:/languages/en-US` | — | $:/languages/en-GB | English (US) |
| es-ES | `$:/languages/es-ES` | — | — | Castellano. (España) |
| fa-IR | `$:/languages/fa-IR` | — | — | فارسی (ایران) |
| fr-FR | `$:/languages/fr-FR` | — | — | Français (France) |
| he-IL | `$:/languages/he-IL` | — | — | עברית (ישראל) |
| hi-IN | `$:/languages/hi-IN` | — | — | हिन्दी (भारत) |
| ia-IA | `$:/languages/ia-IA` | — | — | Interlingua (Interlingua) |
| it-IT | `$:/languages/it-IT` | — | — | Italiano (Italia) |
| ja-JP | `$:/languages/ja-JP` | — | — | 日本語 (日本) |
| ko-KR | `$:/languages/ko-KR` | — | — | 한국어 (대한민국) |
| mk-MK | `$:/languages/mk-MK` | — | — | Македонски (Македонија) |
| nl-NL | `$:/languages/nl-NL` | — | — | Nederlands (Nederland) |
| pa-IN | `$:/languages/pa-IN` | — | — | ਪੰਜਾਬੀ (ਭਾਰਤ) |
| pl-PL | `$:/languages/pl-PL` | — | — | Polski (Polska) |
| pt-BR | `$:/languages/pt-BR` | — | — | Português (Brasil) |
| pt-PT | `$:/languages/pt-PT` | — | — | Português (Portugal) |
| ru-RU | `$:/languages/ru-RU` | — | — | Русский (Россия) |
| sk-SK | `$:/languages/sk-SK` | — | — | Slovenčina (Slovensko) |
| sl-SI | `$:/languages/sl-SI` | — | — | Slovenščina (Slovenija) |
| sv-SE | `$:/languages/sv-SE` | — | — | Svenska (Sverige) |
| zh-CN | `$:/languages/zh-CN` | — | $:/languages/zh-Hans | 简体中文 (中国) |
| zh-Hans | `$:/languages/zh-Hans` | — | — | 简体中文 |
| zh-Hant | `$:/languages/zh-Hant` | — | — | 繁體中文 |
| zh-HK | `$:/languages/zh-HK` | — | $:/languages/zh-Hant | 繁體中文 (香港) |
| zh-TW | `$:/languages/zh-TW` | — | $:/languages/zh-Hant | 繁體中文 (台灣) |
| Async | `$:/plugins/tiddlywiki/async` | — | — | async.js library |
| AWS | `$:/plugins/tiddlywiki/aws` | — | $:/plugins/tiddlywiki/async, $:/plugins/tiddlywiki/jszip | Amazon Web Services extensions and tools |
| BibTeX | `$:/plugins/tiddlywiki/bibtex` | — | — | BibTeX importer |
| Browser Sniff | `$:/plugins/tiddlywiki/browser-sniff` | — | — | Browser feature detection |
| Browser Storage | `$:/plugins/tiddlywiki/browser-storage` | — | — | Local storage in the browser |
| Classic Tools | `$:/plugins/tiddlywiki/classictools` | — | — | TiddlyWiki Classic tools |
| CodeMirror | `$:/plugins/tiddlywiki/codemirror` | — | — | CodeMirror editor |
| CodeMirror Autocomplete | `$:/plugins/tiddlywiki/codemirror-autocomplete` | — | $:/plugins/tiddlywiki/codemirror-mode-css | Autocompletion for CodeMirror |
| CodeMirror Close Brackets | `$:/plugins/tiddlywiki/codemirror-closebrackets` | — | — | Close brackets for CodeMirror |
| CodeMirror Close Tag | `$:/plugins/tiddlywiki/codemirror-closetag` | — | — | Close tags automatically for CodeMirror |
| CodeMirror Fullscreen | `$:/plugins/tiddlywiki/codemirror-fullscreen` | — | — | Fullscreen editing for CodeMirror |
| CodeMirror Keymap Emacs | `$:/plugins/tiddlywiki/codemirror-keymap-emacs` | — | — | Keymap compatible with Emacs for CodeMirror |
| CodeMirror Keymap Sublime Text | `$:/plugins/tiddlywiki/codemirror-keymap-sublime-text` | — | $:/plugins/tiddlywiki/codemirror-search-replace, $:/plugins/tiddlywiki/codemirror-closebrackets | Keymap compatible with Sublime Text for CodeMirror |
| CodeMirror Keymap Vim | `$:/plugins/tiddlywiki/codemirror-keymap-vim` | — | $:/plugins/tiddlywiki/codemirror-search-replace, $:/plugins/tiddlywiki/codemirror-closebrackets | Keymap compatible with Vim for CodeMirror |
| CodeMirror Mode CSS | `$:/plugins/tiddlywiki/codemirror-mode-css` | — | — | CSS highlighting mode for CodeMirror |
| CodeMirror Mode HTML Embedded | `$:/plugins/tiddlywiki/codemirror-mode-htmlembedded` | — | $:/plugins/tiddlywiki/codemirror-mode-htmlmixed, $:/plugins/tiddlywiki/codemirror-mode-javascript, $:/plugins/tiddlywiki/codemirror-mode-css, $:/plugins/tiddlywiki/codemirror-mode-xml | Embedded HTML highlighting mode for CodeMirror |
| CodeMirror Mode HTML Mixed | `$:/plugins/tiddlywiki/codemirror-mode-htmlmixed` | — | $:/plugins/tiddlywiki/codemirror-mode-xml, $:/plugins/tiddlywiki/codemirror-mode-javascript, $:/plugins/tiddlywiki/codemirror-mode-css | HTML mixed highlighting mode for CodeMirror |
| CodeMirror Mode JavaScript | `$:/plugins/tiddlywiki/codemirror-mode-javascript` | — | — | JavaScript highlighting mode for CodeMirror |
| CodeMirror Mode Markdown | `$:/plugins/tiddlywiki/codemirror-mode-markdown` | — | $:/plugins/tiddlywiki/codemirror-mode-xml | Markdown highlighting mode for CodeMirror |
| CodeMirror Mode TiddlyWiki Classic | `$:/plugins/tiddlywiki/codemirror-mode-x-tiddlywiki` | — | — | Tiddlywiki Classic highlighting mode for CodeMirror |
| CodeMirror Mode XML | `$:/plugins/tiddlywiki/codemirror-mode-xml` | — | — | XML highlighting mode for CodeMirror |
| CodeMirror Search and Replace | `$:/plugins/tiddlywiki/codemirror-search-replace` | — | — | Search and replace for CodeMirror |
| CodeMirror Show Trailing Space | `$:/plugins/tiddlywiki/codemirror-trailingspace` | — | — | Show trailing space in CodeMirror |
| Comments | `$:/plugins/tiddlywiki/comments` | — | — | Threaded tiddler comments |
| Confetti | `$:/plugins/tiddlywiki/confetti` | — | — | Animated confetti effect |
| Consent Banner | `$:/plugins/tiddlywiki/consent-banner` | — | — | Consent banner for GDPR etc |
| Dom-to-image | `$:/plugins/tiddlywiki/dom-to-image` | — | — | Save DOM nodes as images |
| Dynannotate | `$:/plugins/tiddlywiki/dynannotate` | — | $:/plugins/tiddlywiki/dynaview | Dynamic content annotation |
| Dynaview | `$:/plugins/tiddlywiki/dynaview` | — | — | Dynamic scrolling and zooming effects |
| Evernote | `$:/plugins/tiddlywiki/evernote` | — | — | Evernote migration tools |
| External Attachments | `$:/plugins/tiddlywiki/external-attachments` | — | — | External attachments for TiddlyDesktop |
| Filesystem | `$:/plugins/tiddlywiki/filesystem` | server | — | Synchronize changes from the node.js server to the local filesystem |
| Freelinks | `$:/plugins/tiddlywiki/freelinks` | — | — | Freelinking of tiddler titles |
| Geospatial Utilities | `$:/plugins/tiddlywiki/geospatial` | — | — | Geospatial utilities |
| GitHub Fork Ribbon | `$:/plugins/tiddlywiki/github-fork-ribbon` | — | — | GitHub-inspired corner ribbon |
| Google Analytics | `$:/plugins/tiddlywiki/googleanalytics` | — | — | Website visitor statistics from Google |
| Help | `$:/plugins/tiddlywiki/help` | — | — | Floating help panel |
| Highlight | `$:/plugins/tiddlywiki/highlight` | — | — | Highlight.js syntax highlighting |
| Innerwiki | `$:/plugins/tiddlywiki/innerwiki` | — | — | Innerwikis for screenshots and hacking |
| Internals | `$:/plugins/tiddlywiki/internals` | — | — | Tools for exploring the internals of TiddlyWiki |
| Jasmine | `$:/plugins/tiddlywiki/jasmine` | — | — | Jasmine testing framework |
| JSZip | `$:/plugins/tiddlywiki/jszip` | — | — | JSZip library |
| KaTeX | `$:/plugins/tiddlywiki/katex` | — | — | KaTeX library for mathematical typography |
| Markdown | `$:/plugins/tiddlywiki/markdown` | — | — | Markdown parser based on markdown-it |
| Markdown (Legacy) | `$:/plugins/tiddlywiki/markdown-legacy` | — | — | Markdown parser based on remarkable by Jon Schlinkert and remarkable-katex by Br |
| Menu Bar | `$:/plugins/tiddlywiki/menubar` | — | — | Menu Bar |
| Plugin Library | `$:/plugins/tiddlywiki/pluginlibrary` | — | — | Plugin library builder |
| Powered By TiddlyWiki | `$:/plugins/tiddlywiki/powered-by-tiddlywiki` | — | — | Powered by TiddlyWiki banner |
| Project Describer | `$:/plugins/tiddlywiki/project-describer` | plugin | $:/plugins/tiddlywiki/filesystem | Полное описание проекта по анализу всех файлов и структур (интеграция TiddlyWiki |
| QR Code | `$:/plugins/tiddlywiki/qrcode` | — | — | QR Code generator |
| Railroad | `$:/plugins/tiddlywiki/railroad` | — | — | Railroad diagram generator |
| Save Trail | `$:/plugins/tiddlywiki/savetrail` | — | — | Automatically download modified tiddlers |
| sax js | `$:/plugins/tiddlywiki/sax` | — | — | sax.js library |
| Share | `$:/plugins/tiddlywiki/share` | — | — | Sharing tiddlers via URLs |
| Stacked View | `$:/plugins/tiddlywiki/stacked-view` | — | — | Stacked card storyview |
| Text Slicer | `$:/plugins/tiddlywiki/text-slicer` | — | $:/plugins/tiddlywiki/sax | Tools for slicing text into tiddlers |
| TiddlyWeb | `$:/plugins/tiddlywiki/tiddlyweb` | — | — | Sync changes from the browser to TW5 (node.js) or TiddlyWeb server |
| Tour | `$:/plugins/tiddlywiki/tour` | — | $:/plugins/tiddlywiki/confetti, $:/plugins/tiddlywiki/dynannotate | A tour of TiddlyWiki |
| Translators | `$:/plugins/tiddlywiki/translators` | — | — | Translation editing tools |
| TW2 Parser | `$:/plugins/tiddlywiki/tw2parser` | — | — | TiddlyWiki Classic parser |
| TW5.com Docs | `$:/plugins/tiddlywiki/tw5.com-docs` | — | — | Documentation from tiddlywiki.com |
| Twitter | `$:/plugins/tiddlywiki/twitter` | — | — | Twitter embedding tools |
| Twitter Archivist | `$:/plugins/tiddlywiki/twitter-archivist` | — | — | Twitter archiving tools |

## 4. Зависимости

**Dev:** `@eslint/js@9.36.0`, `eslint@9.36.0`, `eslint-plugin-es-x@9.1.0`, `@stylistic/eslint-plugin@5.4.0`, `globals@16.4.0`

**CMake `find_package`:** `LLVM`, `Clang`, `fmt`, `spdlog`, `SQLite3`, `Python`, `FLEX`, `BISON`, `Threads`, `Sanitizers`, `Iconv`, `HTMLHelp`, `generateDS`
**CMake подпроекты (`add_subdirectory`):** `deps`, `libversion`, `libxml`, `vhdlparser`, `src`, `doc`, `examples`, `doc_internal`, `addon`, `testing`

## 5. Точки входа и скрипты

- CLI: `tiddlywiki` → `./tiddlywiki.js`
- Main-модуль: `./boot/boot.js`
- npm-скрипты:
    - `npm run dev` → `node ./tiddlywiki.js ./editions/tw5.com-server --listen`
    - `npm run test` → `node ./tiddlywiki.js ./editions/test --verbose --version --build index`
    - `npm run lint` → `eslint .`
    - `npm run lint:fix` → `eslint . --fix`
    - `npm run lint:check` → `eslint . --fix-dry-run`
- Dockerfile:

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
```

## 6. Метрики кода

- Суммарный объём проанализированного текста: **1 268 961 строк**
- Доля комментариев в JavaScript: **11.8%**
- Доля комментариев в C++: **12.3%**

### 25 самых крупных файлов

| Файл | Размер | Строк |
|---|---:|---:|
| `deps/sqlite3/sqlite3.c` | 9.0 MB | 10 750 |
| `doxygen-master/deps/sqlite3/sqlite3.c` | 9.0 MB | 10 750 |
| `editions/geospatialdemo/tiddlers/features/canada-census-subdivision-millesime.geojson` | 7.3 MB | 1 |
| `doc/changelog.dox` | 1.4 MB | 3 087 |
| `doxygen-master/doc/changelog.dox` | 1.4 MB | 3 087 |
| `addon/doxmlparser/doxmlparser/compound.py` | 1.3 MB | 11 146 |
| `doxygen-master/addon/doxmlparser/doxmlparser/compound.py` | 1.3 MB | 11 146 |
| `editions/geospatialdemo/tiddlers/features/natural-earth-countries-low-res.json` | 964.7 KB | 1 |
| `plugins/tiddlywiki/xlsx-utils/files/xlsx.full.min.js` | 892.8 KB | 23 |
| `plugins/tiddlywiki/geospatial/files/leaflet.js/leaflet-src.js.map` | 846.0 KB | 1 |
| `deps/sqlite3/sqlite3.h` | 656.0 KB | 13 968 |
| `doxygen-master/deps/sqlite3/sqlite3.h` | 656.0 KB | 13 968 |
| `plugins/tiddlywiki/geospatial/files/turf.js/turf.6.5.0.js` | 590.4 KB | 88 |
| `doxygen-master/src/scanner.l` | 536.1 KB | 9 020 |
| `src/scanner.l` | 536.1 KB | 9 020 |
| `editions/dynaviewdemo/tiddlers/alice/Alice in Wonderland (sliced).json` | 502.8 KB | 7 311 |
| `doxygen-master/src/caseconvert.h` | 493.8 KB | 11 277 |
| `src/caseconvert.h` | 493.8 KB | 11 277 |
| `doxygen-master/src/doxygen.cpp` | 461.7 KB | 13 718 |
| `src/doxygen.cpp` | 461.7 KB | 13 718 |
| `plugins/tiddlywiki/xlsx-utils/files/cpexcel.js` | 460.7 KB | 1 506 |
| `editions/geospatialdemo/tiddlers/features/harvard-glb-volc-geojson.json` | 451.4 KB | 1 |
| `plugins/tiddlywiki/geospatial/files/leaflet.js/leaflet-src.js` | 439.7 KB | 14 512 |
| `plugins/tiddlywiki/qrcode/files/html5-qrcode/html5-qrcode.min.js` | 366.6 KB | 1 |
| `doxygen-master/vhdlparser/VhdlParser.cc` | 298.2 KB | 14 393 |

## 7. API-поверхность JavaScript-модулей

Проанализированы модули `core/`, `plugins/`, `boot/`, `src/`, `tools/` (CommonJS-экспорты).

| Модуль | Экспорты |
|---|---|
| `boot/boot.js` | `TiddlyWiki` |
| `boot/bootprefix.js` | `bootprefix` |
| `boot/sjcl.js` | — |
| `core/modules/background-actions.js` | `BackgroundActionDispatcher` |
| `core/modules/config.js` | `preferences`, `textPrimitives`, `htmlEntities`, `htmlVoidElements`, `htmlBlockElements`, `htmlUnsafeElements` |
| `core/modules/editor/engines/framed.js` | `FramedEngine` |
| `core/modules/editor/engines/simple.js` | `SimpleEngine` |
| `core/modules/editor/factory.js` | `editTextWidgetFactory` |
| `core/modules/filter-tracker.js` | `FilterTracker` |
| `core/modules/filterrunprefixes/all.js` | `all` |
| `core/modules/filterrunprefixes/and.js` | `and` |
| `core/modules/filterrunprefixes/cascade.js` | `cascade` |
| `core/modules/filterrunprefixes/else.js` | `else` |
| `core/modules/filterrunprefixes/except.js` | `except` |
| `core/modules/filterrunprefixes/filter.js` | `filter` |
| `core/modules/filterrunprefixes/intersection.js` | `intersection` |
| `core/modules/filterrunprefixes/let.js` | `let` |
| `core/modules/filterrunprefixes/map.js` | `map` |
| `core/modules/filterrunprefixes/or.js` | `or` |
| `core/modules/filterrunprefixes/reduce.js` | `reduce` |
| `core/modules/filterrunprefixes/sort.js` | `sort` |
| `core/modules/filterrunprefixes/then.js` | `then` |
| `core/modules/filters/addprefix.js` | `addprefix` |
| `core/modules/filters/addsuffix.js` | `addsuffix` |
| `core/modules/filters/after.js` | `after` |
| `core/modules/filters/all/current.js` | `current` |
| `core/modules/filters/all/missing.js` | `missing` |
| `core/modules/filters/all/orphans.js` | `orphans` |
| `core/modules/filters/all/shadows.js` | `shadows` |
| `core/modules/filters/all/tags.js` | `tags` |
| `core/modules/filters/all/tiddlers.js` | `tiddlers` |
| `core/modules/filters/all.js` | `all` |
| `core/modules/filters/backlinks.js` | `backlinks` |
| `core/modules/filters/backtranscludes.js` | `backtranscludes` |
| `core/modules/filters/before.js` | `before` |
| `core/modules/filters/commands.js` | `commands` |
| `core/modules/filters/compare.js` | `compare` |
| `core/modules/filters/contains.js` | `contains` |
| `core/modules/filters/count.js` | `count` |
| `core/modules/filters/crypto.js` | `sha256` |
| `core/modules/filters/days.js` | `days` |
| `core/modules/filters/deserializers.js` | `deserializers` |
| `core/modules/filters/duplicateslugs.js` | `duplicateslugs` |
| `core/modules/filters/each.js` | `each` |
| `core/modules/filters/eachday.js` | `eachday` |
| `core/modules/filters/editiondescription.js` | `editiondescription` |
| `core/modules/filters/editions.js` | `editions` |
| `core/modules/filters/else.js` | `else` |
| `core/modules/filters/encodings.js` | `decodebase64`, `encodebase64`, `decodeuricomponent`, `encodeuricomponent`, `decodeuri`, `encodeuri`, `decodehtml`, `encodehtml`, `stringify`, `jsonstringify` |
| `core/modules/filters/enlist.js` | `enlist` |
| `core/modules/filters/field.js` | `field` |
| `core/modules/filters/fields.js` | `fields` |
| `core/modules/filters/filter.js` | `filter` |
| `core/modules/filters/format/date.js` | `date` |
| `core/modules/filters/format/json.js` | `json` |
| `core/modules/filters/format/relativedate.js` | `relativedate` |
| `core/modules/filters/format/timestamp.js` | `timestamp` |
| `core/modules/filters/format/titlelist.js` | `titlelist` |
| `core/modules/filters/format.js` | `format` |
| `core/modules/filters/function.js` | `function` |
| `core/modules/filters/get.js` | `get` |
| `core/modules/filters/getindex.js` | `getindex` |
| `core/modules/filters/getvariable.js` | `getvariable` |
| `core/modules/filters/has.js` | `has` |
| `core/modules/filters/haschanged.js` | `haschanged` |
| `core/modules/filters/indexes.js` | `indexes` |
| `core/modules/filters/insertafter.js` | `insertafter` |
| `core/modules/filters/insertbefore.js` | `insertbefore` |
| `core/modules/filters/is/binary.js` | `binary` |
| `core/modules/filters/is/blank.js` | `blank` |
| `core/modules/filters/is/current.js` | `current` |
| `core/modules/filters/is/draft.js` | `draft` |
| `core/modules/filters/is/image.js` | `image` |
| `core/modules/filters/is/missing.js` | `missing` |
| `core/modules/filters/is/orphan.js` | `orphan` |
| `core/modules/filters/is/shadow.js` | `shadow` |
| `core/modules/filters/is/system.js` | `system` |
| `core/modules/filters/is/tag.js` | `tag` |
| `core/modules/filters/is/tiddler.js` | `tiddler` |
| `core/modules/filters/is/variable.js` | `variable` |
| `core/modules/filters/is.js` | `is` |
| `core/modules/filters/limit.js` | `limit` |
| `core/modules/filters/links.js` | `links` |
| `core/modules/filters/list.js` | `list` |
| `core/modules/filters/listed.js` | `listed` |
| `core/modules/filters/listops.js` | `order`, `reverse`, `first`, `last`, `rest`, `butfirst`, `bf`, `butlast`, `bl`, `nth` |
| `core/modules/filters/lookup.js` | `lookup` |
| `core/modules/filters/match.js` | `match` |
| `core/modules/filters/math.js` | `negate`, `abs`, `ceil`, `floor`, `round`, `trunc`, `untrunc`, `sign`, `add`, `subtract` |
| `core/modules/filters/minlength.js` | `minlength` |
| `core/modules/filters/moduleproperty.js` | `moduleproperty` |
| `core/modules/filters/modules.js` | `modules` |
| `core/modules/filters/moduletypes.js` | `moduletypes` |
| `core/modules/filters/next.js` | `next` |
| `core/modules/filters/plugintiddlers.js` | `plugintiddlers` |
| `core/modules/filters/prefix.js` | `prefix` |
| `core/modules/filters/previous.js` | `previous` |
| `core/modules/filters/range.js` | `range` |
| `core/modules/filters/reduce.js` | `reduce` |
| `core/modules/filters/regexp.js` | `regexp` |
| `core/modules/filters/removeprefix.js` | `removeprefix` |
| `core/modules/filters/removesuffix.js` | `removesuffix` |
| `core/modules/filters/sameday.js` | `sameday` |
| `core/modules/filters/search.js` | `search` |
| `core/modules/filters/shadowsource.js` | `shadowsource` |
| `core/modules/filters/slugify.js` | `slugify` |
| `core/modules/filters/sort.js` | `sort`, `nsort`, `sortan`, `sortcs`, `nsortcs` |
| `core/modules/filters/sortsub.js` | `sortsub` |
| `core/modules/filters/splitbefore.js` | `splitbefore` |
| `core/modules/filters/storyviews.js` | `storyviews` |
| `core/modules/filters/strings.js` | `length`, `uppercase`, `lowercase`, `sentencecase`, `titlecase`, `trim`, `split`, `join`, `levenshtein`, `makepatches` |
| `core/modules/filters/subfilter.js` | `subfilter` |
| `core/modules/filters/substitute.js` | `substitute` |
| `core/modules/filters/subtiddlerfields.js` | `subtiddlerfields` |
| `core/modules/filters/suffix.js` | `suffix` |
| `core/modules/filters/tag.js` | `tag` |
| `core/modules/filters/tagging.js` | `tagging` |
| `core/modules/filters/tags.js` | `tags` |
| `core/modules/filters/then.js` | `then` |
| `core/modules/filters/title.js` | `title` |
| `core/modules/filters/transcludes.js` | `transcludes` |
| `core/modules/filters/unknown.js` | — |
| `core/modules/filters/untagged.js` | `untagged` |
| `core/modules/filters/variables.js` | `variables` |
| `core/modules/filters/wikiparserrules.js` | `wikiparserrules` |
| `core/modules/filters/x-listops.js` | `putbefore`, `putafter`, `replace`, `putfirst`, `putlast`, `move`, `allafter`, `allbefore`, `append`, `prepend` |
| `core/modules/filters.js` | `parseFilter`, `getFilterOperators`, `getFilterRunPrefixes`, `filterTiddlers`, `compileFilter` |
| `core/modules/indexers/back-indexer.js` | `BackIndexer` |
| `core/modules/indexers/field-indexer.js` | `FieldIndexer` |
| `core/modules/indexers/tag-indexer.js` | `TagIndexer` |
| `core/modules/info/dimensions.js` | `getInfoTiddlerFields` |
| `core/modules/info/mediaquerytracker.js` | `getInfoTiddlerFields` |
| `core/modules/info/platform.js` | `getInfoTiddlerFields` |
| `core/modules/keyboard.js` | `KeyboardManager` |
| `core/modules/language.js` | `Language` |
| `core/modules/macros/changecount.js` | `name`, `params`, `run` |
| `core/modules/macros/contrastcolour.js` | `name`, `params`, `run` |
| `core/modules/macros/csvtiddlers.js` | `name`, `params`, `run` |
| `core/modules/macros/displayshortcuts.js` | `name`, `params`, `run` |
| `core/modules/macros/jsontiddler.js` | `name`, `params`, `run` |
| `core/modules/macros/jsontiddlers.js` | `name`, `params`, `run` |
| `core/modules/macros/makedatauri.js` | `name`, `params`, `run` |
| `core/modules/macros/now.js` | `name`, `params`, `run` |
| `core/modules/macros/qualify.js` | `name`, `params`, `run` |
| `core/modules/macros/resolvepath.js` | `name`, `params`, `run` |
| `core/modules/macros/unusedtitle.js` | `name`, `params`, `run` |
| `core/modules/macros/version.js` | `name`, `params`, `run` |
| `core/modules/parsers/parseutils.js` | `parseWhiteSpace`, `skipWhiteSpace`, `parseTokenString`, `parseTokenRegExp`, `parseStringLiteral`, `parseParameterDefinition`, `parseMacroParameters`, `parseMacroParameter`, `parseMacroInvocationAsTransclusion`, `parseMVVReferenceAsTransclusion` |
| `core/modules/parsers/wikiparser/rules/codeblock.js` | `name`, `types`, `init`, `parse` |
| `core/modules/parsers/wikiparser/rules/codeinline.js` | `name`, `types`, `init`, `parse` |

## 8. Документированные сущности C/C++ (Doxygen-комментарии)

| Файл | Элементы |
|---|---|
| `deps/libmscgen/mscgen_adraw.h` | \param ctx    The drawing context.; \param x1     The first x co-ordinate,; \param y1     The first y co-ordinate,; \param x2     The second x co-ordinate,; \pa |
| `deps/libmscgen/mscgen_api.c` | \param [in] l  Pointer to the input string to inspect.; \param [in,out] l     Input line of text which maybe modified if needed.; \param [in]     width Maximum  |
| `deps/libmscgen/mscgen_msc.c` | \param [in] attr  Head of the linked list to search.; \param [in] a     The attribute type to find. |
| `deps/libmscgen/mscgen_msc.h` | \param [in]     m      The MSC to analyse.; \param [in]     type   The option type to retrieve.; \param [in,out] f      Pointer to be filled with parsed value.; |
| `deps/libmscgen/mscgen_svg_out.c` | \param [in] cx,cy   Center of the ellipse.; \param [in] w,h     Ellipse width and height.; \param [in] a       Angle in degrees.; \param [in,out] x,y Pointer to |
| `doxygen-master/deps/libmscgen/mscgen_adraw.h` | \param ctx    The drawing context.; \param x1     The first x co-ordinate,; \param y1     The first y co-ordinate,; \param x2     The second x co-ordinate,; \pa |
| `doxygen-master/deps/libmscgen/mscgen_api.c` | \param [in] l  Pointer to the input string to inspect.; \param [in,out] l     Input line of text which maybe modified if needed.; \param [in]     width Maximum  |
| `doxygen-master/deps/libmscgen/mscgen_msc.c` | \param [in] attr  Head of the linked list to search.; \param [in] a     The attribute type to find. |
| `doxygen-master/deps/libmscgen/mscgen_msc.h` | \param [in]     m      The MSC to analyse.; \param [in]     type   The option type to retrieve.; \param [in,out] f      Pointer to be filled with parsed value.; |
| `doxygen-master/deps/libmscgen/mscgen_svg_out.c` | \param [in] cx,cy   Center of the ellipse.; \param [in] w,h     Ellipse width and height.; \param [in] a       Angle in degrees.; \param [in,out] x,y Pointer to |
| `doxygen-master/examples/author.cpp` | \brief Pretty nice class. |
| `doxygen-master/examples/autolink.cpp` | \file autolink.cpp; \fn typedef Autolink_Test B |
| `doxygen-master/examples/class.h` | \class Test class.h "inc/class.h"; \brief This is a test class. |
| `doxygen-master/examples/define.h` | \file define.h; \brief testing defines; \def MAX(x,y); \brief Computes the absolute value of its argument \a x.; \param x input value. |
| `doxygen-master/examples/file.h` | \file file.h |
| `doxygen-master/examples/func.h` | \class Fn_Test; \brief Fn_Test class.; \fn const char *Fn_Test::member(char c,int n); \brief A member function.; \param c a character.; \param n an integer. |
| `doxygen-master/examples/manual.c` | \file manual.c |
| `doxygen-master/examples/memgrp.cpp` | \file |
| `doxygen-master/examples/overload.cpp` | \class Overload_Test; \brief A short description.; \fn void Overload_Test::drawRect(int x,int y,int w,int h) |
| `doxygen-master/examples/structcmd.h` | \file structcmd.h; \brief A Documented file.; \def MAX(a,b); \brief A macro that returns the maximum of \a a and \a b.; \var typedef unsigned int UINT32; \brief |
| `doxygen-master/src/arguments.h` | \brief This class contains the information about the argument of a; \brief This class represents an function or template argument list. |
| `doxygen-master/src/config.h` | \brief Public function to deal with the configuration file. */; \param clearHeaderAndFooter set to true when writing header and footer templates.; \param compar |
| `doxygen-master/src/dot.cpp` | \param t text stream to write to; \param inFile just the basename part of the filename; \param outDir output directory; \param relPath relative path the to root |
| `doxygen-master/src/dotfilepatcher.cpp` | \param t the stream to which the result is written.; \param mapName the name of the map file.; \param relPath the relative path to the root of the output direct |
| `doxygen-master/src/doxygen.cpp` | \class , \\struct, \\union, or \\headerfile command ",; \file command is used without further; \file statement ", |
| `doxygen-master/src/doxygen.h` | \brief This class serves as a namespace for global variables used by doxygen. |
| `doxygen-master/src/eclipsehelp.cpp` | \brief Initialize the Eclipse generator; \brief Finish generation of the Eclipse specific help files; \brief Increase the level of content hierarchy; \brief Dec |
| `doxygen-master/src/entry.h` | \class , must be unique); \class ) |
| `doxygen-master/src/fortranscanner.h` | \brief Fortran language parser using state-based lexical scanning. |
| `doxygen-master/src/ftvhelp.cpp` | \param isDir true if the item is a directory, false if it is a text; \param name the name of the item.; \param nameAsHtml the name of the item in HTML format.;  |
| `doxygen-master/src/htags.cpp` | \param htmlDir of HTML directory generated by htags(1).; \param path path name |
| `doxygen-master/src/htmlattrib.h` | \brief Class representing a HTML attribute. */; \brief Class representing a list of HTML attributes. */ |
| `doxygen-master/src/htmlentity.h` | \param result Output target receiving the encoded entity or fallback text.; \param s Pointer to the start of a potential HTML entity in the input text.; \param  |
| `doxygen-master/src/htmlhelp.cpp` | \param level1 the string at level 1 in the index.; \param level2 the string at level 2 in the index (or 0 if not applicable).; \param url the url of the documen |
| `doxygen-master/src/indexlist.h` | \brief A list of index interfaces. |
| `doxygen-master/src/latexgen.cpp` | \def \\doxynewunicodechar#1#2{%\n" |
| `doxygen-master/src/lexscanner.h` | \brief Lex language parser using state-based lexical scanning. |
| `doxygen-master/src/main.cpp` | \file; \brief main entry point for doxygen |
| `doxygen-master/src/memberdef.cpp` | \param df File containing the definition of this member.; \param dl Line at which the member definition was found.; \param dc Column at which the member definit |
| `doxygen-master/src/outputlist.cpp` | \file |
| `doxygen-master/src/parserintf.h` | \brief Abstract interface for outline parsers.; \brief Abstract interface for code parsers.; \brief Manages programming language parsers. |
| `doxygen-master/src/perlmodgen.cpp` | \def \\Defcs#1{\\long\\expandafter\\def\\csname#1\\endcsname}\n"; \def \\IfEmpty#1{\\expandafter\\ifx\\csname#1\\endcsname\\Empty}\n"; \def \\StringNode#1{\\Def |
| `doxygen-master/src/pyscanner.h` | \brief Python Language parser using state-based lexical scanning. |
| `doxygen-master/src/scanner.h` | \brief C-like language parser using state-based lexical scanning. |
| `doxygen-master/src/translator_am.h` | \return command is used. */; \param command is used. */ |
| `doxygen-master/src/translator_ar.h` | \return command is used. */; \param command is used. */ |
| `doxygen-master/src/translator_bg.h` | \return command is used. */; \param command is used. */ |
| `doxygen-master/src/translator_br.h` | \return command is used. */; \param command is used. */ |
| `doxygen-master/src/translator_ca.h` | \return command is used. */; \param command is used. */ |
| `doxygen-master/src/translator_cn.h` | \return command is used. */; \param command is used. */ |
| `doxygen-master/src/translator_cz.h` | \return command is used. */; \param command is used. */ |
| `doxygen-master/src/translator_de.h` | \return command is used. */; \param command is used. */ |
| `doxygen-master/src/translator_dk.h` | \return command is used. */; \param command is used. */ |
| `doxygen-master/src/translator_en.h` | \return command is used. */; \param command is used. */ |
| `doxygen-master/src/translator_eo.h` | \return command is used. */; \param command is used. */ |
| `doxygen-master/src/translator_es.h` | \return command is used. */; \param command is used. */ |
| `doxygen-master/src/translator_fa.h` | \return command is used. */; \param command is used. */ |
| `doxygen-master/src/translator_fi.h` | \return command is used. */; \param command is used. */ |
| `doxygen-master/src/translator_fr.h` | \return command is used. */; \param command is used. */ |
| `doxygen-master/src/translator_gr.h` | \return command is used. */; \param command is used. */ |

## 9. Конфигурационные файлы

- `deps/iconv_winbuild/.gitignore`
- `deps/svg/Makefile`
- `doc/.gitignore`
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
- `doxygen-master/Dockerfile`
- `doxygen-master/templates/html/.eslintrc.js`
- `eslint.config.mjs`
- `playwright.config.js`
- `templates/html/.eslintrc.js`
- `TiddlyWiki5-master/.github/ISSUE_TEMPLATE/config.yml`
- `TiddlyWiki5-master/.github/workflows/ci.yml`
- `TiddlyWiki5-master/.github/workflows/cla-check.yml`
- `TiddlyWiki5-master/.github/workflows/cla-signed.yml`
- `TiddlyWiki5-master/.github/workflows/eslint.yml`
- `TiddlyWiki5-master/.github/workflows/pr-check-build-size.yml`
- `TiddlyWiki5-master/.github/workflows/pr-comment-build-size.yml`
- `TiddlyWiki5-master/.github/workflows/pr-validation.yml`
- `TiddlyWiki5-master/.gitignore`

## 10. Итоговое резюме

- Проект содержит **11 485 файлов** в **1 403 директориях**; суммарный объём текстового содержимого — ~**1 268 961 строк**.
- Это **объединённый workspace двух проектов**: нелинейной веб-записной книжки **TiddlyWiki5** (JavaScript/Node.js — `core/`, `plugins/`, `editions/`) и генератора документации **Doxygen** (C++/CMake — `src/`, `templates/`, `testing/`). Оба проекта дополняют друг друга: TiddlyWiki предоставляет интерактивный UI, а Doxygen — методологию deep-анализа исходников и структурированной extraction-документации.
- Доминирующие языки: C (32%), C++ (32%), Markdown/Wikitext (13%), JavaScript (10%).
- Обнаружено **113 плагинов TiddlyWiki** в `plugins/`.
- Найдено **216 C/C++ файлов** с Doxygen-комментариями (`\brief`, `\class`, `\param` …).
- Тестовых файлов: **1 126**.
- Инструмент **Project Describer** интегрирован как плагин TiddlyWiki (`plugins/tiddlywiki/project-describer`) и CLI (`tools/project-describer/cli.js`) — полный отчёт по проекту получается одной кнопкой «Получить полное описание» или командой `node tools/project-describer/cli.js`.

---
*Отчёт создан инструментом Project Describer — интеграция TiddlyWiki5 (UI) и Doxygen (методология анализа исходников).*