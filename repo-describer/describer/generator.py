"""Генерация wiki-тиссов (.tid, формат TiddlyWiki5) и сборка папки с .md.

Конвейер: Python извлекает структуру (tree-sitter, подход doxygen) ->
создаёт .tid-тиссы -> TiddlyWiki CLI конвертирует их в .html ->
html2text-подобный рендер превращает HTML в чистый Markdown.
GUI нигде не используется — только headless-режим tiddlywiki.
"""
from __future__ import annotations

import html
import re
import shutil
import subprocess
import tempfile
from pathlib import Path

from .analyzer import Analyzer
from .extractors import Definition
from .i18n import Loc

LEVELS = ("low", "medium", "high")


def _esc_title(title: str) -> str:
    return title.replace("\n", " ").strip()


def make_tid(title: str, tags: list[str], body: str, extra: dict | None = None) -> str:
    lines = [f"title: {_esc_title(title)}"]
    if tags:
        lines.append("tags: " + " ".join(_esc_title(t) for t in tags))
    if extra:
        for k, v in extra.items():
            lines.append(f"{k}: {v}")
    lines.append("created: 20261018120000000")
    lines.append("modified: 20261018120000000")
    lines.append("")
    lines.append(body.strip())
    lines.append("")
    return "\n".join(lines)


# ------------------------------------------------------------------ markdown helpers

def md_table(headers: list[str], rows: list[list[str]]) -> str:
    out = ["| " + " | ".join(headers) + " |",
           "|" + "|".join(["---"] * len(headers)) + "|"]
    for r in rows:
        cells = [str(c).replace("|", "\\|").replace("\n", " ") for c in r]
        out.append("| " + " | ".join(cells) + " |")
    return "\n".join(out)


def kind_defs(defs: list[Definition]) -> dict[str, list[Definition]]:
    groups: dict[str, list[Definition]] = {"class": [], "function": [], "method": [],
                                           "variable": [], "other": []}
    for d in defs:
        if d.kind in ("class", "struct", "union", "enum", "interface", "typedef"):
            groups["class"].append(d)
        elif d.kind == "function":
            groups["function"].append(d)
        elif d.kind == "method":
            groups["method"].append(d)
        elif d.kind == "variable":
            groups["variable"].append(d)
        else:
            groups["other"].append(d)
    return groups


def def_line(loc: Loc, d: Definition, level: str) -> str:
    """Строка описания одного определения в зависимости от уровня детализации."""
    doc = (d.doc or "").replace("\n", " ").strip()
    if level == "low":
        base = f"**{d.name}** ({loc.kind(d.kind)})"
        return base + (f" — {doc[:160]}" if doc else "")
    if level == "medium":
        base = f"**{d.name}** ({loc.kind(d.kind)}, {loc.t('mo_line')} {d.line})"
        if doc:
            base += f"\n  \n  {doc[:400]}"
        return base
    # high
    base = f"- **{d.name}** — {loc.kind(d.kind)}, {loc.t('mo_line')} {d.line}"
    if d.parent:
        base += f", владелец: `{d.parent}`"
    if d.signature:
        base += f"\n  ```\n  {html.escape(d.signature)}\n  ```"
    if doc:
        base += f"\n  \n  {doc}"
    else:
        base += f" — {loc.t('mo_doc_missing')}"
    return base


# ------------------------------------------------------------------ tiddler builders

def build_tiddlers(an: Analyzer, loc: Loc, level: str) -> list[tuple[str, list[str], str]]:
    """Возвращает список (title, tags, body_markdown)."""
    name = an.project_name()
    st = an.stats()
    tot = st["total"]
    out: list[tuple[str, list[str], str]] = []

    # ---- README / overview ----
    readme_body = an.readme if an.readme else loc.t("ov_no_readme")
    out.append((f"{name}/00-Обзор" if loc.lang == "ru" else f"{name}/00-Overview",
                ["index", name],
                f"# {loc.t('title_repo')}: {name}\n\n{readme_body}"))

    # ---- stats ----
    lang_rows = [[l, str(v["files"]), str(v["lines"]), str(v["code"]), str(v["comment"])]
                 for l, v in sorted(st["by_lang"].items(), key=lambda kv: -kv[1]["code"])]
    stats_md = (
        f"# {loc.t('stats')}: {name}\n\n"
        + md_table([loc.t("languages"), loc.t("ov_files_count"), loc.t("ov_total_lines"),
                    loc.t("ov_code_lines"), loc.t("ov_comment_lines")], lang_rows)
        + f"\n\n**{loc.t('ov_total_lines')}:** {tot['lines']} | "
        + f"**{loc.t('ov_code_lines')}:** {tot['code']} | "
        + f"**{loc.t('ov_comment_lines')}:** {tot['comment']} | "
        + f"**{loc.t('ov_defs')}:** {tot['defs']}"
    )
    out.append((f"{name}/Статистика" if loc.lang == "ru" else f"{name}/Statistics",
                ["index", name], stats_md))

    # ---- structure ----
    dir_rows = []
    role_names = {"src": loc.t("st_role_src"), "tests": loc.t("st_role_tests"),
                  "docs": loc.t("st_role_docs"), "build": loc.t("st_role_build"),
                  "assets": loc.t("st_role_assets"), "other": loc.t("st_role_other")}
    for d, v in an.dir_stats.items():
        dir_rows.append([f"`{d}/`" if d != "." else "`./`", role_names.get(v["role"], v["role"]),
                         str(v["files"]), str(v["code"])])
    struct_md = f"# {loc.t('structure')}: {name}\n\n{loc.t('st_note')}\n\n" + \
        md_table([loc.t("st_dir"), loc.t("overview"), loc.t("ov_files_count"),
                  loc.t("ov_code_lines")], dir_rows)
    entries = an.entry_points()
    if entries:
        struct_md += f"\n\n**{loc.t('ov_top_entry')}:** " + ", ".join(f"`{e}`" for e in entries)
    docs = an.docs_files()
    if docs and level != "low":
        struct_md += f"\n\n**{loc.t('ov_docs')}:** " + ", ".join(f"`{d}`" for d in docs[:30])
    out.append((f"{name}/Структура" if loc.lang == "ru" else f"{name}/Structure",
                ["index", name], struct_md))

    # ---- dependencies & build ----
    dep_md = f"# {loc.t('deps')}: {name}\n\n{loc.t('dep_note')}\n"
    if an.manifests:
        for mf, deps in an.manifests.items():
            dep_md += f"\n## `{mf}` — {len(deps)} {loc.t('dep_items').lower()}\n\n"
            dep_md += ", ".join(f"`{d}`" for d in deps) + "\n"
    else:
        dep_md += "\n" + loc.t("dep_none") + "\n"
    build_markers = []
    for marker in ("CMakeLists.txt", "Makefile", "package.json", "pyproject.toml",
                    "setup.py", "meson.build", "configure.ac", "Gruntfile.js",
                    "gulpfile.js", "webpack.config.js", "rollup.config.js"):
        if any(str(fi.path) == marker or str(fi.path).endswith("/" + marker)
               for fi in an.files):
            build_markers.append(marker)
    if build_markers:
        dep_md += f"\n## {loc.t('build')}\n\n{loc.t('build_note')}\n\n" + \
                  ", ".join(f"`{m}`" for m in build_markers) + "\n"
    out.append((f"{name}/Зависимости" if loc.lang == "ru" else f"{name}/Dependencies",
                ["index", name], dep_md))

    # ---- modules per source dir ----
    src_dirs = an.source_dirs() or ["."]
    for d in src_dirs:
        files = an.files_in_dir(d)
        if not files:
            continue
        label = d if d != "." else loc.t("root")
        parts = [f"# {loc.t('modules')}: `{label}`\n\n{loc.t('mo_note')}\n"]
        # сортировка по объёму кода
        files = sorted(files, key=lambda f: -f.code_lines)
        if level == "low":
            shown = files[:20]
        elif level == "medium":
            shown = files[:120]
        else:
            shown = files
        for fi in shown:
            g = kind_defs(fi.defs)
            head = f"## {loc.t('mo_file')}: `{fi.path}` ({fi.lines} {loc.t('ov_total_lines').lower()})"
            body = head + "\n"
            if fi.summary and level == "high":
                body += f"\n{fi.summary[:1500]}\n"
            first_doc = next((dd.doc for dd in fi.defs if dd.doc), None)
            if first_doc and level != "high":
                body += f"\n{first_doc[:600]}\n"
            for key, title_key in (("class", "mo_classes"), ("function", "mo_functions"),
                                   ("method", "mo_methods"), ("variable", "mo_vars"),
                                   ("other", "mo_other")):
                items = g[key]
                if not items:
                    continue
                if level == "low":
                    items = items[:15]
                elif level == "medium":
                    items = items[:60]
                body += f"\n### {loc.t(title_key)} ({len(g[key])})\n\n"
                if level == "high":
                    body += "\n".join(def_line(loc, dd, level) for dd in items) + "\n"
                else:
                    body += "\n".join("* " + def_line(loc, dd, level) for dd in items) + "\n"
            parts.append(body)
        out.append((f"{name}/Модули/{label}" if loc.lang == "ru"
                    else f"{name}/Modules/{label}", ["modules", name], "\n\n---\n\n".join(parts)))

    # ---- public API (medium/high) ----
    if level != "low":
        api_rows = []
        for fi in an.files:
            if not fi.lang:
                continue
            for dd in fi.defs:
                if dd.kind in ("class", "function", "interface", "struct", "trait",
                               "module", "namespace") and not dd.name.startswith(("_", "__")):
                    desc = (dd.doc or "").replace("\n", " ")[:120]
                    api_rows.append([f"`{dd.name}`", loc.kind(dd.kind), f"`{fi.path}`:{dd.line}", desc])
        api_rows.sort(key=lambda r: r[1])
        limit = 200 if level == "medium" else len(api_rows)
        api_md = f"# {loc.t('api')}: {name}\n\n{loc.t('api_note')}\n\n" + \
            md_table([loc.t("api_symbol"), loc.t("api_kind"), loc.t("api_where"),
                      loc.t("ov_desc")], api_rows[:limit])
        out.append((f"{name}/API" if True else "", ["index", name], api_md))

    # ---- index ----
    titles = [t for t, _, _ in out]
    idx = f"# {loc.t('toc')}: {name}\n\n"
    for t in titles:
        if t.endswith(("Обзор", "Overview", "Statistics", "Статистика", "Structure",
                       "Структура", "Dependencies", "Зависимости", "API")):
            idx += f"* [[{t}]]\n"
    for t in titles:
        if "/Модули/" in t or "/Modules/" in t:
            idx += f"* [[{t}]]\n"
    idx += f"\n>{loc.t('generated')} | {loc.t('level')}: {level} | lang: {loc.lang}\n"
    out.insert(0, (f"{name}/{loc.t('toc')}", ["index"], idx))
    return out


# ------------------------------------------------------------------ TiddlyWiki render

def tw_render(tid_dir: Path, loc: Loc) -> dict[str, str]:
    """Вызывает TiddlyWiki headless: load .tid -> --render каждого тисса в свой HTML -> читает.

    Возвращает {title: rendered_html}. Это «склейка» двух проектов: описание
    формируется средствами TiddlyWiki5 (движок рендера WikiText), а контент —
    анализатором (подход doxygen). Рендер идёт по документации TiddlyWiki5:
    команда `--render <фильтр> <имя-файла-фильтр> <тип>`, где имя файла берётся
    из поля `filename` тисса (adaptor `fs` пишет каждый тисс отдельным файлом).
    """
    wiki_dir = Path(tempfile.mkdtemp(prefix="tw-describe-"))
    out_dir = wiki_dir / "out"
    try:
        (wiki_dir / "tiddlers").mkdir()
        shutil.copytree(tid_dir, wiki_dir / "tiddlers", dirs_exist_ok=True)
        out_dir.mkdir()
        cmd = ["node", TW_JS,
               "+filesystem", "+tiddlyweb",          # серверные адапторы (headless CLI)
               str(wiki_dir),
               "--load", "tiddlers/",
               "--render", "[!is[system]]",
               "[enlist:file.\\' 'index[]removesuffix[ ]addsuffix[.html]]",
               "text/html"]
        res = subprocess.run(cmd, capture_output=True, text=True, timeout=600, cwd=str(out_dir))
        results: dict[str, str] = {}
        for hf in sorted(out_dir.glob("*.html")):
            content = hf.read_text(encoding="utf8", errors="replace")
            # заголовок первого уровня — название тисса
            m = re.search(r"<h1[^>]*>(.*?)</h1>", content, re.S)
            title = html.unescape(re.sub(r"<[^>]+>", "", m.group(1))).strip() if m else hf.stem
            results[title] = content
        if not results:
            raise RuntimeError((res.stderr or res.stdout)[-800:] or "no rendered files")
        return results
    finally:
        shutil.rmtree(wiki_dir, ignore_errors=True)


def find_tiddlywiki() -> str | None:
    for cand in (Path("/workspace/node_modules/tiddlywiki/tiddlywiki.js"),
                 Path.cwd() / "node_modules/tiddlywiki/tiddlywiki.js"):
        if cand.exists():
            return str(cand)
    return None


TW_JS = find_tiddlywiki() or ""


def html_to_md(fragment: str) -> str:
    """Минимальный HTML->Markdown (без GUI, только текстовый вывод)."""
    s = fragment
    s = re.sub(r"(?is)<script.*?</script>|<style.*?</style>", "", s)
    s = re.sub(r"(?i)<li[^>]*>", "\n* ", s)
    s = re.sub(r"(?i)<h1[^>]*>", "\n# ", s)
    s = re.sub(r"(?i)<h2[^>]*>", "\n## ", s)
    s = re.sub(r"(?i)<h3[^>]*>", "\n### ", s)
    s = re.sub(r"(?i)</(h[1-6]|p|div|ul|ol|table|blockquote)>", "\n", s)
    s = re.sub(r"(?i)<strong[^>]*>", "**", s)
    s = re.sub(r"(?i)</strong>", "**", s)
    s = re.sub(r"(?i)<em[^>]*>", "*", s)
    s = re.sub(r"(?i)</em>", "*", s)
    s = re.sub(r"(?i)<code[^>]*>", "`", s)
    s = re.sub(r"(?i)</code>", "`", s)
    s = re.sub(r"(?i)<pre[^>]*>", "\n```\n", s)
    s = re.sub(r"(?i)</pre>", "\n```\n", s)
    s = re.sub(r"(?i)<br\s*/?>", "\n", s)
    s = re.sub(r"(?is)<a\s+href=\"([^\"]*)\"[^>]*>(.*?)</a>", r"[\2](\1)", s)
    s = re.sub(r"(?s)<[^>]+>", "", s)
    s = html.unescape(s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip() + "\n"


def safe_filename(title: str) -> str:
    fn = re.sub(r"[^\w\-.\u0400-\u04FF/ ]+", "_", title.replace("/", "_")).strip()
    fn = re.sub(r"\s+", "-", fn)
    return fn[:120] or "tiddler"


def generate(repo_path: Path, out_dir: Path, level: str = "high",
             lang: str | None = None, use_wiki: bool = True,
             save_tid: bool = False, quiet: bool = False) -> int:
    """Точка входа: анализ -> .tid -> TiddlyWiki-рендер -> папка .md. Возвращает число файлов."""
    loc = Loc(lang)
    an = Analyzer(repo_path)
    if not quiet:
        print(loc.t("scanning"))
    an.run()
    tiddlers = build_tiddlers(an, loc, level)

    tid_dir = out_dir / ".tiddlers"
    tid_dir.mkdir(parents=True, exist_ok=True)
    for title, tags, body in tiddlers:
        fn = safe_filename(title)
        (tid_dir / (fn + ".tid")).write_text(
            make_tid(title, tags, body, extra={"filename": fn}), encoding="utf8")

    out_dir.mkdir(parents=True, exist_ok=True)
    written = 0
    rendered: dict[str, str] | None = None
    if use_wiki and TW_JS:
        if not quiet:
            print(loc.t("rendering"))
        try:
            rendered = tw_render(tid_dir, loc)
        except Exception as e:
            if not quiet:
                print(f"TiddlyWiki render unavailable ({e}); fallback to direct markdown.")
            rendered = None

    for title, tags, body in tiddlers:
        if rendered is not None:
            # находим отрендеренный кусок по заголовку; если нет — берём исходный markdown
            frag = None
            for rt, content in rendered.items():
                if rt and (rt in title or title.split("/")[-1].lower() in rt.lower()):
                    frag = content
                    break
            text = html_to_md(frag) if frag else body
        else:
            text = body
        header = f"<!-- {loc.t('generated')}: {title} -->\n\n"
        fname = safe_filename(title) + ".md"
        (out_dir / fname).write_text(header + text, encoding="utf8")
        written += 1

    if save_tid:
        keep = out_dir / "tiddlers"
        if keep.exists():
            shutil.rmtree(keep)
        shutil.copytree(tid_dir, keep)
    else:
        shutil.rmtree(tid_dir, ignore_errors=True)
    if not quiet:
        print(loc.t("done", n=written, p=out_dir))
    return written
