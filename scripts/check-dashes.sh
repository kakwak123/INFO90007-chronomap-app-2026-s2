#!/usr/bin/env bash
# Fails if em dashes or en dashes appear in authored text.
#
# Why: the team writes in plain hyphens. Em and en dashes also read as a tell that text came
# straight out of a language model, which matters for an assignment with an AI use statement.
#
# Verbatim records are exempt, because altering them would misrepresent what someone actually
# said: chat exports, lecture transcripts, and any Markdown blockquote (a quotation of a marker,
# the handout, or a lecturer).
#
# Usage:  scripts/check-dashes.sh [files...]     (defaults to all tracked text files)

set -uo pipefail
cd "$(git rev-parse --show-toplevel 2>/dev/null || echo .)"

EXCLUDE_RE='^(chat\.(md|txt)|docs/lecture-transcripts/|node_modules/|package-lock\.json|\.git/)'

if [ "$#" -gt 0 ]; then
  FILES=("$@")
else
  mapfile -t FILES < <(git ls-files '*.md' '*.tex' '*.ts' '*.tsx' '*.js' '*.sh' '*.json' '*.txt' 2>/dev/null)
fi

fail=0
for f in "${FILES[@]}"; do
  [ -f "$f" ] || continue
  [[ "$f" =~ $EXCLUDE_RE ]] && continue
  # Report offending lines, skipping Markdown blockquotes (quotations).
  hits=$(grep -nP '[\x{2013}\x{2014}]' "$f" 2>/dev/null | grep -vP '^\d+:\s*>' || true)
  if [ -n "$hits" ]; then
    fail=1
    echo "$f"
    echo "$hits" | sed 's/^/    /'
  fi
done

if [ "$fail" -ne 0 ]; then
  cat <<'MSG'

Em dash (U+2014) or en dash (U+2013) found. Use a plain hyphen instead:
    write "a - b"  and  "1-5"
Quotations inside Markdown blockquotes (lines starting with >) are exempt and were skipped.
Run: scripts/fix-dashes.py   to correct these automatically.
MSG
  exit 1
fi

echo "No em or en dashes found."
