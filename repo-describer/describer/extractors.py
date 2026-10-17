"""Извлечение структуры из исходников через tree-sitter.

Поддерживаемые языки: python, javascript, typescript, c, cpp, java, go, rust.
Для C/C++ дополнительно парсятся doxygen-комментарии (/** ... */ и ///).
"""
from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path

from tree_sitter import Node, Parser
from tree_sitter_language_pack import get_parser

# расширение -> язык tree-sitter
LANG_BY_EXT = {
    ".py": "python",
    ".js": "javascript", ".mjs": "javascript", ".cjs": "javascript", ".jsx": "javascript",
    ".ts": "typescript", ".tsx": "tsx",
    ".c": "c", ".h": "c",
    ".cpp": "cpp", ".cc": "cpp", ".cxx": "cpp", ".hpp": "cpp", ".hh": "cpp",
    ".java": "java",
    ".go": "go",
    ".rs": "rust",
}

NAME_NODE_KINDS = {"identifier", "type_identifier", "field_identifier", "name",
                   "constant", "property_identifier"}

EXPRESSION_STATEMENT_LANGS = {"javascript", "typescript", "tsx"}

DEFINITION_NODE_TYPES = {
    "python": ["function_definition", "class_definition", "decorated_definition"],
    "javascript": ["function_declaration", "generator_function_declaration", "class_declaration",
                   "lexical_declaration", "variable_declaration", "expression_statement"],
    "typescript": ["function_declaration", "generator_function_declaration", "class_declaration",
                   "lexical_declaration", "variable_declaration", "interface_declaration",
                   "type_alias_declaration", "enum_declaration", "abstract_class_declaration",
                   "expression_statement"],
    "tsx": ["function_declaration", "generator_function_declaration", "class_declaration",
            "lexical_declaration", "variable_declaration", "interface_declaration",
            "type_alias_declaration", "enum_declaration", "abstract_class_declaration",
            "expression_statement"],
    "c": ["function_definition", "declaration", "type_definition"],
    "cpp": ["function_definition", "class_specifier", "struct_specifier", "union_specifier",
            "enum_specifier", "namespace_definition", "declaration", "type_definition",
            "template_declaration", "linkage_specification"],
    "java": ["class_declaration", "interface_declaration", "enum_declaration",
             "record_declaration", "annotation_type_declaration"],
    "go": ["function_declaration", "method_declaration", "type_declaration",
           "const_declaration", "var_declaration"],
    "rust": ["function_item", "struct_item", "enum_item", "union_item", "trait_item",
             "impl_item", "mod_item", "macro_definition"],
}


@dataclass
class Definition:
    kind: str                 # class / function / method / struct / enum / namespace / variable...
    name: str
    line: int
    doc: str | None = None
    signature: str = ""
    parent: str | None = None


def _clean_comment(text: str) -> str:
    """Убрать маркеры комментариев и doxygen-команды, оставить читаемый текст."""
    lines = []
    for ln in text.splitlines():
        ln = ln.strip()
        ln = re.sub(r"^/\*+", "", ln)
        ln = re.sub(r"\*+/$", "", ln)
        ln = re.sub(r"^//+", "", ln)
        ln = re.sub(r"^!*\*+\s?", "", ln)
        ln = ln.strip()
        if not ln:
            continue
        ln = re.sub(r"^[\\@](brief|details|note|warning|deprecated|see|todo|remark|par|"
                    r"ingroup|addtogroup|defgroup|file|author|version|date|since)\b[:\s]*",
                    "", ln).strip()
        if ln.startswith(("\\", "@")):  # остальные команды выкидываем целиком
            continue
        lines.append(ln)
    return "\n".join(lines).strip()


def _node_text(src: bytes, node: Node) -> str:
    return src[node.start_byte:node.end_byte].decode("utf8", "replace")


def _find_name_node(node: Node) -> Node | None:
    for child in node.children:
        if child.type in NAME_NODE_KINDS or child.type == "qualified_identifier":
            return child
        if child.type in ("declarator", "init_declarator", "function_declarator",
                          "pointer_declarator", "reference_declarator", "array_declarator"):
            inner = _find_name_node(child)
            if inner is not None:
                return inner
    return None


def _prev_comment(src: bytes, node: Node) -> str | None:
    prev = node.prev_sibling
    while prev is not None and prev.type in ("comment", "block_comment"):
        raw = _node_text(src, prev)
        cleaned = _clean_comment(raw)
        if cleaned and len(cleaned) > 3:
            return cleaned
        prev = prev.prev_sibling
    return None


def _get_py_docstring(src: bytes, func_node: Node) -> str | None:
    body = func_node.child_by_field_name("body")
    if body is None or not body.children:
        return None
    first = body.children[0]
    if first.type == "expression_statement" and first.children and \
       first.children[0].type == "string":
        raw = _node_text(src, first.children[0])
        raw = re.sub(r'^u?[rR]?("""|\'\'\'|"|\')', "", raw)
        raw = re.sub(r'("""|\'\'\'|"|\')$', "", raw)
        cleaned = raw.strip()
        return cleaned or None
    return None


def _sig(src: bytes, node: Node) -> str:
    return _node_text(src, node).splitlines()[0].strip()[:200]


def _walk(lang: str, src: bytes, node: Node, defs: list[Definition], parent: str | None) -> None:
    targets = DEFINITION_NODE_TYPES.get(lang, [])
    for ch in node.children:
        if ch.type in targets:
            _extract_from_node(lang, src, ch, defs, parent)


def _extract_from_node(lang: str, src: bytes, node: Node, defs: list[Definition],
                       parent: str | None) -> None:
    name_node = _find_name_node(node)
    name = _node_text(src, name_node) if name_node is not None else None

    # ---------- python ----------
    if lang == "python":
        if node.type == "decorated_definition":
            inner = next((c for c in node.children
                          if c.type in ("function_definition", "class_definition")), None)
            if inner is not None:
                _extract_from_node(lang, src, inner, defs, parent)
            return
        if node.type == "class_definition":
            nn = node.child_by_field_name("name")
            if nn is None:
                return
            cname = _node_text(src, nn)
            body = node.child_by_field_name("body")
            doc = _get_py_docstring(src, node) or _prev_comment(src, node)
            defs.append(Definition("class", cname, node.start_point[0] + 1, doc, _sig(src, node), parent))
            if body is not None:
                for m in body.children:
                    target = m
                    if m.type == "decorated_definition":
                        target = next((c for c in m.children if c.type == "function_definition"), None)
                        if target is None:
                            continue
                    if target.type == "function_definition":
                        fn = target.child_by_field_name("name")
                        if fn is not None:
                            defs.append(Definition(
                                "method", _node_text(src, fn), target.start_point[0] + 1,
                                _get_py_docstring(src, target) or _prev_comment(src, target),
                                _sig(src, target), cname))
            return
        if node.type == "function_definition":
            fn = node.child_by_field_name("name")
            if fn is None:
                return
            defs.append(Definition("function", _node_text(src, fn), node.start_point[0] + 1,
                                   _get_py_docstring(src, node) or _prev_comment(src, node),
                                   _sig(src, node), parent))
            return

    # ---------- js / ts ----------
    if lang in ("javascript", "typescript", "tsx"):
        if node.type == "expression_statement":
            inner = next((c for c in node.children if c.type == "assignment_expression"), None)
            if inner is None:
                return
            left = inner.child_by_field_name("left")
            right = inner.child_by_field_name("right")
            if left is None or right is None:
                return
            lname = _node_text(src, left)
            base = lname.split(".")[-1].split("[")[0]
            doc = _prev_comment(src, node)
            if right.type in ("function", "arrow_function", "function_expression",
                              "generator_function"):
                defs.append(Definition("function", base, node.start_point[0] + 1, doc,
                                       _sig(src, inner), parent))
            elif right.type in ("class", "class_declaration"):
                defs.append(Definition("class", base, node.start_point[0] + 1, doc,
                                       _sig(src, inner), parent))
            return
        if node.type in ("class_declaration", "abstract_class_declaration"):
            cn = node.child_by_field_name("name") or name_node
            if cn is None:
                return
            cname = _node_text(src, cn)
            doc = _prev_comment(src, node)
            defs.append(Definition("class", cname, node.start_point[0] + 1, doc, _sig(src, node), parent))
            body = node.child_by_field_name("body")
            if body is not None:
                for m in body.children:
                    if m.type == "method_definition":
                        mn = m.child_by_field_name("name")
                        if mn is not None:
                            defs.append(Definition("method", _node_text(src, mn),
                                                   m.start_point[0] + 1, _prev_comment(src, m),
                                                   _sig(src, m), cname))
            return
        if node.type in ("function_declaration", "generator_function_declaration"):
            fn = node.child_by_field_name("name") or name_node
            if fn is None:
                return
            defs.append(Definition("function", _node_text(src, fn), node.start_point[0] + 1,
                                   _prev_comment(src, node), _sig(src, node), parent))
            return
        if node.type in ("lexical_declaration", "variable_declaration"):
            for ch in node.children:
                if ch.type != "variable_declarator":
                    continue
                vn = ch.child_by_field_name("name") or _find_name_node(ch)
                if vn is None:
                    continue
                vname = _node_text(src, vn)
                value = ch.child_by_field_name("value")
                doc = _prev_comment(src, node)
                if value is not None and value.type in ("class", "class_declaration"):
                    defs.append(Definition("class", vname, node.start_point[0] + 1, doc,
                                           _sig(src, node), parent))
                    body = value.child_by_field_name("body")
                    if body is not None:
                        for m in body.children:
                            if m.type == "method_definition":
                                mn = m.child_by_field_name("name")
                                if mn is not None:
                                    defs.append(Definition("method", _node_text(src, mn),
                                                           m.start_point[0] + 1,
                                                           _prev_comment(src, m), _sig(src, m), vname))
                elif value is not None and value.type in ("arrow_function", "function",
                                                          "function_expression", "class"):
                    k = "class" if value.type == "class" else "function"
                    defs.append(Definition(k, vname, node.start_point[0] + 1, doc,
                                           _sig(src, node), parent))
                else:
                    defs.append(Definition("variable", vname, node.start_point[0] + 1, doc,
                                           _sig(src, node), parent))
            return
        if node.type == "interface_declaration":
            iname = node.child_by_field_name("name") or name_node
            if iname is not None:
                defs.append(Definition("interface", _node_text(src, iname),
                                       node.start_point[0] + 1, _prev_comment(src, node),
                                       _sig(src, node), parent))
            return
        if node.type == "type_alias_declaration":
            tn = node.child_by_field_name("name") or name_node
            if tn is not None:
                defs.append(Definition("typedef", _node_text(src, tn), node.start_point[0] + 1,
                                       _prev_comment(src, node), _sig(src, node), parent))
            return
        if node.type == "enum_declaration":
            en = node.child_by_field_name("name") or name_node
            if en is not None:
                defs.append(Definition("enum", _node_text(src, en), node.start_point[0] + 1,
                                       _prev_comment(src, node), _sig(src, node), parent))
            return

    # ---------- c / cpp ----------
    if lang in ("c", "cpp"):
        if node.type == "function_definition":
            fn = _find_name_node(node.child_by_field_name("declarator")
                                 if node.child_by_field_name("declarator") else node)
            if fn is None:
                return
            fname = _node_text(src, fn)
            doc = _prev_comment(src, node)
            # внутри класса в cpp — это метод
            defs.append(Definition("function" if parent is None else "method",
                                   fname, node.start_point[0] + 1, doc, _sig(src, node), parent))
            return
        if node.type == "namespace_definition":
            nn = node.child_by_field_name("name")
            nname = _node_text(src, nn) if nn is not None else "(anonymous)"
            defs.append(Definition("namespace", nname, node.start_point[0] + 1,
                                   _prev_comment(src, node), f"namespace {nname}", parent))
            body = node.child_by_field_name("body")
            if body is not None:
                _walk(lang, src, body, defs, nname)
            return
        if node.type in ("class_specifier", "struct_specifier", "union_specifier", "enum_specifier"):
            nn = node.child_by_field_name("name") or name_node
            if nn is None:
                return
            k = {"class_specifier": "class", "struct_specifier": "struct",
                 "union_specifier": "union", "enum_specifier": "enum"}[node.type]
            sname = _node_text(src, nn)
            doc = _prev_comment(src, node)
            defs.append(Definition(k, sname, node.start_point[0] + 1, doc, _sig(src, node), parent))
            if lang == "cpp":
                field_body = node.child_by_field_name("body")
                if field_body is not None:
                    for m in field_body.children:
                        if m.type == "function_definition":
                            fm = _find_name_node(m)
                            if fm is not None:
                                defs.append(Definition("method", _node_text(src, fm),
                                                       m.start_point[0] + 1,
                                                       _prev_comment(src, m), _sig(src, m), sname))
            return
        if node.type == "template_declaration":
            inner = next((c for c in node.children
                          if c.type in DEFINITION_NODE_TYPES["cpp"]), None)
            if inner is not None:
                _extract_from_node(lang, src, inner, defs, parent)
            return
        if node.type == "linkage_specification":
            body = next((c for c in node.children if c.type == "declaration_list"), None)
            if body is not None:
                _walk(lang, src, body, defs, parent)
            return
        if node.type == "type_definition":
            td = _find_name_node(node)
            if td is not None:
                defs.append(Definition("typedef", _node_text(src, td), node.start_point[0] + 1,
                                       _prev_comment(src, node), _sig(src, node), parent))
            return
        if node.type == "declaration":
            txt = _node_text(src, node)
            first = txt.splitlines()[0].strip() if txt else ""
            decl = node.child_by_field_name("declarator")
            dn = _find_name_node(decl) if decl is not None else _find_name_node(node)
            if dn is None:
                return
            dname = _node_text(src, dn)
            if "(" in first and ";" in first and "=" not in first.split("(")[0]:
                kind = "function"      # прототип
            elif decl is not None and decl.type == "function_declarator":
                kind = "function"
            else:
                kind = "variable"
            defs.append(Definition(kind, dname, node.start_point[0] + 1,
                                   _prev_comment(src, node), first.rstrip(";")[:200], parent))
            return

    # ---------- java ----------
    if lang == "java":
        if name is None:
            return
        kmap = {"class_declaration": "class", "interface_declaration": "interface",
                "enum_declaration": "enum", "record_declaration": "class",
                "annotation_type_declaration": "interface"}
        kind = kmap.get(node.type, "class")
        defs.append(Definition(kind, name, node.start_point[0] + 1,
                               _prev_comment(src, node), _sig(src, node), parent))
        body = node.child_by_field_name("body")
        if body is not None:
            for m in body.children:
                if m.type in ("method_declaration", "constructor_declaration"):
                    mm = m.child_by_field_name("name")
                    if mm is not None:
                        defs.append(Definition("method", _node_text(src, mm),
                                               m.start_point[0] + 1, _prev_comment(src, m),
                                               _sig(src, m), name))
        return

    # ---------- go ----------
    if lang == "go":
        if node.type in ("function_declaration", "method_declaration"):
            fn = node.child_by_field_name("name")
            if fn is None:
                return
            recv = node.child_by_field_name("receiver")
            k = "method" if recv is not None else "function"
            defs.append(Definition(k, _node_text(src, fn), node.start_point[0] + 1,
                                   _prev_comment(src, node), _sig(src, node), parent))
            return
        if node.type == "type_declaration":
            for ch in node.children:
                if ch.type == "type_spec":
                    tn = ch.child_by_field_name("name")
                    tt = ch.child_by_field_name("type")
                    if tn is None:
                        continue
                    k = "struct" if tt is not None and tt.type == "struct_type" else \
                        "interface" if tt is not None and tt.type == "interface_type" else "type"
                    defs.append(Definition(k, _node_text(src, tn), ch.start_point[0] + 1,
                                           _prev_comment(src, ch), _sig(src, node), parent))
            return
        if node.type in ("const_declaration", "var_declaration"):
            for ch in node.children:
                spec = ch.child_by_field_name("name") or _find_name_node(ch)
                if spec is not None:
                    defs.append(Definition("variable", _node_text(src, spec),
                                           ch.start_point[0] + 1, _prev_comment(src, ch),
                                           _sig(src, ch), parent))
            return

    # ---------- rust ----------
    if lang == "rust":
        if node.type == "impl_item":
            body = node.child_by_field_name("body")
            ty = node.child_by_field_name("type")
            trait = node.child_by_field_name("trait")
            pname = (_node_text(src, ty) if ty is not None else "impl")
            if trait is not None:
                pname += f" ({_node_text(src, trait)})"
            if body is not None:
                for ch in body.children:
                    if ch.type == "function_item":
                        fn = ch.child_by_field_name("name")
                        if fn is not None:
                            defs.append(Definition("method", _node_text(src, fn),
                                                   ch.start_point[0] + 1, _prev_comment(src, ch),
                                                   _sig(src, ch), pname))
            return
        if node.type == "mod_item":
            nn = node.child_by_field_name("name")
            if nn is None:
                return
            mname = _node_text(src, nn)
            defs.append(Definition("module", mname, node.start_point[0] + 1,
                                   _prev_comment(src, node), _sig(src, node), parent))
            body = node.child_by_field_name("body")
            if body is not None:
                _walk(lang, src, body, defs, mname)
            return
        kmap = {"function_item": "function", "struct_item": "struct", "enum_item": "enum",
                "union_item": "union", "trait_item": "interface", "macro_definition": "macro"}
        kind = kmap.get(node.type)
        if kind is None or name is None:
            return
        defs.append(Definition(kind, name, node.start_point[0] + 1,
                               _prev_comment(src, node), _sig(src, node), parent))
        return


def extract_definitions(path: Path) -> list[Definition]:
    ext = path.suffix.lower()
    lang = LANG_BY_EXT.get(ext)
    if lang is None:
        return []
    try:
        src = path.read_bytes()
    except OSError:
        return []
    if not src:
        return []
    try:
        parser: Parser = get_parser(lang)
        tree = parser.parse(src)
    except Exception:
        return []
    defs: list[Definition] = []
    _walk(lang, src, tree.root_node, defs, None)
    return defs


# ---------- вспомогательное для не-кодовых файлов ----------

def extract_tiddlywiki_meta(path: Path) -> tuple[dict, str]:
    """Для .tid: поля метаданных до пустой строки; тело — описание."""
    try:
        text = path.read_text(encoding="utf8", errors="replace")
    except OSError:
        return {}, ""
    meta: dict[str, str] = {}
    lines = text.split("\n")
    i = 0
    while i < len(lines):
        ln = lines[i]
        if ln.strip() == "":
            i += 1
            break
        m = re.match(r"^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$", ln)
        if m:
            meta[m.group(1)] = m.group(2).strip()
            i += 1
        else:
            break
    return meta, "\n".join(lines[i:])


def first_block_comment(path: Path) -> str:
    """Первый крупный комментарий в файле — fallback-описание."""
    try:
        text = path.read_text(encoding="utf8", errors="replace")
    except OSError:
        return ""
    m = re.search(r"/\*+(.*?)\*+/", text, re.S)
    if m and len(m.group(1)) > 40:
        return _clean_comment(m.group(0))
    m = re.match(r'\s*(?:#[^\n]*\n)*\s*("""|\'\'\')(.*?)\1', text, re.S)
    if m:
        return m.group(2).strip()
    return ""
