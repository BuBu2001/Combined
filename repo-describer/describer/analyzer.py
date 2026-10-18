"""Анализ репозитория: обход файлов, метрики, структура каталогов, зависимости.

Опирается на extractors.py (tree-sitter) — подход, унаследованный от doxygen
(извлечение структуры + doxygen-комментариев), и на формат .tid TiddlyWiki5.
"""
from __future__ import annotations

import json
import re
import xml.etree.ElementTree as ET
from collections import defaultdict
from dataclasses import dataclass, field
from pathlib import Path

from .extractors import LANG_BY_EXT, extract_definitions, extract_tiddlywiki_meta

SKIP_DIRS = {".git", ".github", "node_modules", "__pycache__", ".venv", "venv",
             "dist", "build", ".cache", ".idea", ".vscode", "site-packages"}

DOC_SUFFIXES = {".md", ".markdown", ".rst", ".txt", ".tid", ".adoc"}

MANIFESTS = ["package.json", "requirements.txt", "pyproject.toml", "setup.py",
             "CMakeLists.txt", "Makefile", "configure.ac", "meson.build",
             "pom.xml", "build.gradle", "Cargo.toml", "go.mod", "Gemfile"]


@dataclass
class FileInfo:
    path: Path                      # относительный путь
    lang: str | None                # язык tree-sitter или None
    lines: int = 0
    code_lines: int = 0
    comment_lines: int = 0
    blank_lines: int = 0
    defs: list = field(default_factory=list)
    meta: dict = field(default_factory=dict)   # для .tid
    summary: str = ""                          # текст из README/docstring/комментария


def _count_lines(path: Path) -> tuple[int, int, int, int]:
    """(всего, код, комментарии, пустые) — эвристика по префиксам комментариев."""
    try:
        text = path.read_text(encoding="utf8", errors="replace")
    except OSError:
        return 0, 0, 0, 0
    total = code = com = blank = 0
    in_block = False
    prefixes = ("//", "#", "*", "--", ";", "<!--", "REM ", ">")
    for ln in text.splitlines():
        total += 1
        s = ln.strip()
        if not s:
            blank += 1
            continue
        if in_block:
            com += 1
            if "*/" in s or "'''" in s or '"""' in s:
                in_block = False
            continue
        if s.startswith(("/*", "/**")) and "*/" not in s:
            in_block = True
            com += 1
        elif s.startswith(("'''", '"""')) and s.count(s[:3]) == 1:
            in_block = True
            com += 1
        elif s.startswith(prefixes):
            com += 1
        else:
            code += 1
    return total, code, com, blank


def classify_dir(name: str) -> str:
    low = name.lower()
    if low in ("tests", "test", "t", "spec", "specs", "unittests"):
        return "tests"
    if low in ("docs", "doc", "documentation", "manual", "examples", "example"):
        return "docs"
    if low in ("src", "source", "sources", "lib", "libraries", "core", "plugins",
               "boot", "editions", "themes", "languages"):
        return "src"
    if low in ("build", "cmake", "scripts", "tools", "bin", ".github"):
        return "build"
    if low in ("images", "icons", "fonts", "css", "styles", "ui", "widgets", "story"):
        return "assets"
    return "other"


class Analyzer:
    def __init__(self, root: Path):
        self.root = Path(root).resolve()
        self.files: list[FileInfo] = []
        self.readme: str = ""
        self.readme_path: str = ""
        self.package_json: dict = {}
        self.manifests: dict[str, list[str]] = {}
        self.dir_stats: dict[str, dict] = {}

    # ---------- обход ----------
    def run(self) -> None:
        self._collect_files()
        self._readme()
        self._manifests()
        self._dir_stats()

    def _iter_files(self):
        for p in sorted(self.root.rglob("*")):
            rel_parts = p.relative_to(self.root).parts
            if any(part in SKIP_DIRS for part in rel_parts[:-1]):
                continue
            if p.is_file():
                yield p

    def _collect_files(self) -> None:
        for p in self._iter_files():
            rel = p.relative_to(self.root)
            ext = p.suffix.lower()
            fi = FileInfo(path=rel, lang=LANG_BY_EXT.get(ext))
            fi.lines, fi.code_lines, fi.comment_lines, fi.blank_lines = _count_lines(p)
            if fi.lang:
                fi.defs = extract_definitions(p)
            elif ext == ".tid":
                meta, body = extract_tiddlywiki_meta(p)
                fi.meta = meta
                fi.summary = body.strip()[:4000]
            elif ext in (".md", ".rst", ".txt", ".adoc"):
                try:
                    fi.summary = p.read_text(encoding="utf8", errors="replace").strip()[:4000]
                except OSError:
                    pass
            self.files.append(fi)

    def _readme(self) -> None:
        best = None
        for p in self.root.iterdir():
            if p.is_file() and re.match(r"(?i)^readme(\.(md|rst|txt))?$", p.name):
                score = 0 if p.suffix.lower() == ".md" else 1
                if best is None or score < best[0]:
                    best = (score, p)
        if best:
            self.readme_path = str(best[1].relative_to(self.root))
            try:
                self.readme = best[1].read_text(encoding="utf8", errors="replace")
            except OSError:
                self.readme = ""

    def _first_paragraph(self, text: str) -> str:
        for block in re.split(r"\n\s*\n", text):
            b = block.strip()
            if not b or b.startswith(("#", "<", "![")):
                continue
            b = re.sub(r"\s+", " ", b)
            return b[:600]
        return ""

    def short_description(self) -> str:
        if self.readme:
            d = self._first_paragraph(self.readme)
            if d:
                return d
        pj = self.package_json.get("description")
        if pj:
            return str(pj)
        # первый non-empty docstring/комментарий в корневых исходниках
        for fi in self.files:
            if fi.summary and fi.path.parent == Path("."):
                return self._first_paragraph(fi.summary)[:600]
        for fi in self.files:
            for df in fi.defs:
                if df.doc:
                    return self._first_paragraph(df.doc)[:600]
        return ""

    def project_name(self) -> str:
        pj_name = self.package_json.get("name")
        if pj_name:
            return str(pj_name)
        return self.root.name

    # ---------- манифесты ----------
    def _manifests(self) -> None:
        mapping = {
            "package.json": self._parse_package_json,
            "requirements.txt": self._parse_requirements,
            "Cargo.toml": self._parse_toml_deps,
            "pyproject.toml": self._parse_toml_deps,
            "go.mod": self._parse_go_mod,
            "pom.xml": self._parse_pom_xml,
            "CMakeLists.txt": self._parse_cmake,
        }
        for p in self._iter_files():
            rel = p.relative_to(self.root)
            if len(rel.parts) > 2:      # только верхние уровни
                continue
            fn = p.name
            if fn == "package.json":
                try:
                    data = json.loads(p.read_text(encoding="utf8", errors="replace"))
                except (OSError, json.JSONDecodeError):
                    continue
                if not self.package_json:
                    self.package_json = data
                deps = sorted(set(list(data.get("dependencies", {})) +
                                  list(data.get("peerDependencies", {}))))
                if deps:
                    self.manifests[str(rel)] = deps[:80]
            elif fn in mapping:
                deps = mapping[fn](p)
                if deps:
                    self.manifests[str(rel)] = deps[:80]

    def _parse_package_json(self, p: Path) -> list[str]:
        return []

    def _parse_requirements(self, p: Path) -> list[str]:
        out = []
        for ln in p.read_text(encoding="utf8", errors="replace").splitlines():
            m = re.match(r"^([A-Za-z0-9_.\-]+)", ln.strip())
            if m and not ln.strip().startswith(("#", "-")):
                out.append(m.group(1))
        return sorted(set(out))

    def _parse_toml_deps(self, p: Path) -> list[str]:
        text = p.read_text(encoding="utf8", errors="replace")
        out = []
        for m in re.finditer(r'^\s*"([A-Za-z0-9_.\-]+)(?:[<>=!~\[ ]|$)', text, re.M):
            out.append(m.group(1))
        for m in re.finditer(r'^\s*([A-Za-z0-9_.\-]+)\s*=\s*"', text, re.M):
            key = m.group(1)
            if key not in ("name", "version", "description", "edition"):
                out.append(key)
        return sorted(set(out))[:80]

    def _parse_go_mod(self, p: Path) -> list[str]:
        text = p.read_text(encoding="utf8", errors="replace")
        return sorted({m.group(1) for m in re.finditer(r"^\s*([a-z0-9.\-/]+\.[a-z]{2,}/[^\s]+)", text, re.M)})

    def _parse_pom_xml(self, p: Path) -> list[str]:
        try:
            tree = ET.parse(p)
        except ET.ParseError:
            return []
        out = []
        for dep in tree.iter("{http://maven.apache.org/POM/4.0.0}dependency"):
            g = dep.findtext("{http://maven.apache.org/POM/4.0.0}groupId", "")
            a = dep.findtext("{http://maven.apache.org/POM/4.0.0}artifactId", "")
            if g or a:
                out.append(f"{g}:{a}")
        return sorted(set(out))

    def _parse_cmake(self, p: Path) -> list[str]:
        text = p.read_text(encoding="utf8", errors="replace")
        out = []
        for m in re.finditer(r"find_package\s*\(\s*([A-Za-z0-9_]+)", text):
            out.append(m.group(1))
        for m in re.finditer(r"(?:target_link_libraries|add_subdirectory)\s*\(\s*([A-Za-z0-9_\-/]+)", text):
            out.append(m.group(1))
        return sorted(set(out))[:80]

    # ---------- агрегаты ----------
    def stats(self) -> dict:
        by_lang: dict[str, dict] = defaultdict(lambda: {"files": 0, "lines": 0, "code": 0, "comment": 0})
        tot = {"files": 0, "lines": 0, "code": 0, "comment": 0, "blank": 0, "defs": 0}
        for fi in self.files:
            if fi.lang:
                tot["files"] += 1
                tot["lines"] += fi.lines
                tot["code"] += fi.code_lines
                tot["comment"] += fi.comment_lines
                tot["blank"] += fi.blank_lines
                tot["defs"] += len(fi.defs)
                bl = by_lang[fi.lang]
                bl["files"] += 1
                bl["lines"] += fi.lines
                bl["code"] += fi.code_lines
                bl["comment"] += fi.comment_lines
        return {"total": tot, "by_lang": dict(by_lang)}

    def main_language(self) -> str:
        st = self.stats()["by_lang"]
        if not st:
            return ""
        return max(st.items(), key=lambda kv: kv[1]["code"])[0]

    def entry_points(self) -> list[str]:
        out = []
        cand = ["main.py", "index.js", "main.js", "app.js", "cli.js", "tiddlywiki.js",
                "main.cpp", "main.c", "index.ts", "manage.py", "__main__.py"]
        names = {str(fi.path): fi for fi in self.files}
        for c in cand:
            for full, fi in names.items():
                if full == c or full.endswith("/" + c):
                    out.append(full)
        binf = self.package_json.get("bin")
        if isinstance(binf, dict):
            out += [str(v) for v in binf.values()]
        elif isinstance(binf, str):
            out.append(binf)
        return sorted(set(out))[:10]

    def _dir_stats(self) -> None:
        agg: dict[str, dict] = {}
        for fi in self.files:
            parts = fi.path.parts
            top = parts[0] if len(parts) > 1 else "."
            d = agg.setdefault(top, {"files": 0, "code_files": 0, "lines": 0, "code": 0, "dirs": set()})
            d["files"] += 1
            if fi.lang:
                d["code_files"] += 1
                d["lines"] += fi.lines
                d["code"] += fi.code_lines
            if len(parts) > 2:
                d["dirs"].add(str(Path(*parts[:2])))
        for k, v in agg.items():
            v["role"] = classify_dir(k)
            v["subdirs"] = sorted(v.pop("dirs"))[:40]
        self.dir_stats = dict(sorted(agg.items(), key=lambda kv: -kv[1]["code"]))

    def source_dirs(self) -> list[str]:
        return [d for d, v in self.dir_stats.items()
                if v["role"] == "src" and v["code_files"] > 0]

    def files_in_dir(self, top: str) -> list[FileInfo]:
        res = []
        for fi in self.files:
            parts = fi.path.parts
            t = parts[0] if len(parts) > 1 else "."
            if t == top and fi.lang:
                res.append(fi)
        return res

    def docs_files(self) -> list[str]:
        out = []
        for fi in self.files:
            if not fi.lang and fi.path.suffix.lower() in DOC_SUFFIXES:
                out.append(str(fi.path))
        return out

    def tid_files(self) -> list[FileInfo]:
        return [fi for fi in self.files if fi.meta]
