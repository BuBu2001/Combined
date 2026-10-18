#!/usr/bin/env python3
"""CLI: «Составить описание» для произвольного репозитория.

Примеры:
    python describe.py /path/to/repo -o out_repo --level high
    python describe.py /path/to/repo -o out_repo --level medium --lang ru
"""
import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from describer.generator import LEVELS, generate  # noqa: E402
from describer.i18n import Loc                    # noqa: E402


def main() -> int:
    loc = Loc()  # язык по локали системы (можно переопределить --lang)
    ap = argparse.ArgumentParser(description=loc.t("cli_desc"))
    ap.add_argument("repo", help=loc.t("cli_repo"))
    ap.add_argument("-o", "--out", default=None, help=loc.t("cli_out"))
    ap.add_argument("--level", choices=LEVELS, default="high", help=loc.t("cli_level"))
    ap.add_argument("--lang", choices=["ru", "en", "auto"], default="auto", help=loc.t("cli_lang"))
    ap.add_argument("--no-wiki", action="store_true", help=loc.t("cli_wiki"))
    ap.add_argument("--tid", action="store_true", help=loc.t("cli_tid"))
    ap.add_argument("-q", "--quiet", action="store_true")
    args = ap.parse_args()

    lang = None if args.lang == "auto" else args.lang
    loc = Loc(lang)
    repo = Path(args.repo)
    if not repo.exists():
        print(loc.t("err_no_path", p=repo), file=sys.stderr); return 2
    if not repo.is_dir():
        print(loc.t("err_not_dir", p=repo), file=sys.stderr); return 2
    out = Path(args.out) if args.out else Path(f"{repo.name}-description-{args.level}")
    generate(repo, out, level=args.level, lang=lang,
             use_wiki=not args.no_wiki, save_tid=args.tid, quiet=args.quiet)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
