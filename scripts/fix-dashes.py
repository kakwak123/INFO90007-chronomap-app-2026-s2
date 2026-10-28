#!/usr/bin/env python
"""Replace em dashes and en dashes with plain hyphens across authored text.

Rules:
  en dash  (U+2013)  -> "-"          ranges such as 3,000-5,000 and P1-P5 come out correct
  em dash  (U+2014)  -> " - "        when spaced, "-" when not
  LaTeX    "---"     -> "-"          and a standalone "--" -> "-"

Never touched:
  * chat exports and lecture transcripts, which are verbatim records of what people said
  * Markdown blockquote lines (starting with ">"), which quote the marker, the handout or a
    lecturer, and must stay exactly as written
  * binaries, node_modules, package-lock.json

Usage:  python scripts/fix-dashes.py [--dry-run] [files...]
"""
import os
import re
import subprocess
import sys

EXCLUDE = re.compile(r'^(chat\.(md|txt)|docs/lecture-transcripts/|node_modules/|package-lock\.json|\.git/)')
EXTS = ('.md', '.tex', '.ts', '.tsx', '.js', '.sh', '.json', '.txt', '.py')

EN, EM = chr(0x2013), chr(0x2014)   # by code point, so this file passes its own check


def fix_line(line: str, is_tex: bool) -> str:
    line = line.replace(f' {EM} ', ' - ').replace(EM, '-')
    line = line.replace(EN, '-')
    # LaTeX ligatures only. In Markdown "---" is a table separator or a horizontal rule,
    # and rewriting it would wreck every table in the repo.
    if is_tex:
        line = re.sub(r'(?<!-)---(?!-)', '-', line)
        line = re.sub(r'(?<![-\w])--(?![-\w])', '-', line)
    return line


def repo_files():
    try:
        out = subprocess.check_output(['git', 'ls-files'], text=True)
        return [f for f in out.splitlines() if f.endswith(EXTS)]
    except Exception:
        found = []
        for root, dirs, names in os.walk('.'):
            dirs[:] = [d for d in dirs if d not in ('.git', 'node_modules')]
            for n in names:
                if n.endswith(EXTS):
                    found.append(os.path.relpath(os.path.join(root, n), '.').replace('\\', '/'))
        return found


def main() -> int:
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    dry = '--dry-run' in sys.argv
    files = args or repo_files()

    changed, total = [], 0
    for path in files:
        p = path.replace('\\', '/')
        if EXCLUDE.match(p) or not os.path.isfile(p):
            continue
        try:
            text = open(p, encoding='utf-8').read()
        except (UnicodeDecodeError, OSError):
            continue
        if EN not in text and EM not in text and not (p.endswith('.tex') and '--' in text):
            continue

        is_tex = p.endswith('.tex')
        out, n = [], 0
        for line in text.split('\n'):
            # Preserve quotations verbatim.
            if p.endswith('.md') and line.lstrip().startswith('>'):
                out.append(line)
                continue
            new = fix_line(line, is_tex)
            if new != line:
                n += line.count(EN) + line.count(EM) + (line.count('---') if is_tex else 0)
            out.append(new)

        if n:
            total += n
            changed.append((p, n))
            if not dry:
                open(p, 'w', encoding='utf-8', newline='\n').write('\n'.join(out))

    for p, n in sorted(changed, key=lambda x: -x[1]):
        print(f'{n:5d}  {p}')
    print(f'\n{"would change" if dry else "changed"}: {len(changed)} files, {total} replacements')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
