"""Convert the evaluation packs from Markdown to printable PDFs.

No third-party dependencies. Renders a deliberately small subset of Markdown (the subset the packs
actually use) to styled HTML, then drives headless Chrome to print it.

Usage:
    python scripts/md-to-pdf.py docs/evaluation/pack-tester.md [more.md ...]
    python scripts/md-to-pdf.py --out-dir docs/evaluation/pdf docs/evaluation/pack-*.md

Supported: headings, paragraphs, bold, italic, inline code, links, bullet and numbered lists,
blockquotes, fenced code, horizontal rules, and pipe tables (which the packs lean on heavily).
"""
import html
import os
import re
import subprocess
import sys
import tempfile

CHROME_CANDIDATES = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    os.path.expandvars(r"%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe"),
]

CSS = """
@page { size: A4; margin: 18mm 16mm; }
body { font: 11pt/1.5 "Segoe UI", Calibri, system-ui, sans-serif; color: #1a1a1a; max-width: 100%; }
h1 { font-size: 20pt; margin: 0 0 4pt; border-bottom: 2px solid #1a1a1a; padding-bottom: 6pt; }
h2 { font-size: 14pt; margin: 18pt 0 6pt; page-break-after: avoid; }
h3 { font-size: 12pt; margin: 14pt 0 4pt; page-break-after: avoid; }
h4 { font-size: 11pt; margin: 12pt 0 4pt; page-break-after: avoid; }
p, li { orphans: 3; widows: 3; }
ul, ol { margin: 6pt 0 6pt 0; padding-left: 20pt; }
li { margin: 2pt 0; }
code { font-family: Consolas, monospace; font-size: 9.5pt; background: #f2f2f0; padding: 1pt 3pt;
       border-radius: 3px; }
pre { background: #f2f2f0; padding: 8pt; border-radius: 4px; overflow-x: auto;
      page-break-inside: avoid; }
pre code { background: none; padding: 0; }
blockquote { margin: 8pt 0; padding: 6pt 12pt; border-left: 3px solid #c8c4bc; background: #faf9f7;
             page-break-inside: avoid; }
blockquote p { margin: 2pt 0; }
table { border-collapse: collapse; width: 100%; margin: 8pt 0; font-size: 9.5pt;
        page-break-inside: avoid; }
th, td { border: 1px solid #ccc8c0; padding: 4pt 6pt; text-align: left; vertical-align: top; }
th { background: #f2f0ec; font-weight: 600; }
hr { border: none; border-top: 1px solid #ddd; margin: 14pt 0; }
a { color: #1e3a5f; }
strong { font-weight: 600; }
"""


def inline(text):
    """Inline markup. Escape first, then re-introduce the tags we support."""
    text = html.escape(text)
    text = re.sub(r"`([^`]+)`", r"<code>\1</code>", text)
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"(?<![\w*])\*([^*\n]+)\*(?![\w*])", r"<em>\1</em>", text)
    text = re.sub(r"(?<![\w_])_([^_\n]+)_(?![\w_])", r"<em>\1</em>", text)
    return text


def is_table_sep(line):
    return bool(re.match(r"^\s*\|?[\s:|-]+\|[\s:|-]*$", line)) and "-" in line


def cells(line):
    out = line.strip()
    if out.startswith("|"):
        out = out[1:]
    if out.endswith("|"):
        out = out[:-1]
    return [c.strip() for c in out.split("|")]


def convert(md):
    lines = md.replace("\r\n", "\n").split("\n")
    out, i, n = [], 0, len(lines)
    list_stack = []

    def close_lists():
        while list_stack:
            out.append("</%s>" % list_stack.pop())

    while i < n:
        line = lines[i]
        stripped = line.strip()

        if stripped.startswith("```"):
            close_lists()
            i += 1
            buf = []
            while i < n and not lines[i].strip().startswith("```"):
                buf.append(html.escape(lines[i]))
                i += 1
            i += 1
            out.append("<pre><code>%s</code></pre>" % "\n".join(buf))
            continue

        if not stripped:
            close_lists()
            i += 1
            continue

        if re.match(r"^(-{3,}|\*{3,}|_{3,})$", stripped):
            close_lists()
            out.append("<hr>")
            i += 1
            continue

        m = re.match(r"^(#{1,6})\s+(.*)$", stripped)
        if m:
            close_lists()
            lvl = len(m.group(1))
            out.append("<h%d>%s</h%d>" % (lvl, inline(m.group(2)), lvl))
            i += 1
            continue

        # pipe table: header row followed by a separator row
        if "|" in stripped and i + 1 < n and is_table_sep(lines[i + 1]):
            close_lists()
            head = cells(stripped)
            i += 2
            rows = []
            while i < n and "|" in lines[i] and lines[i].strip():
                rows.append(cells(lines[i]))
                i += 1
            out.append("<table><thead><tr>%s</tr></thead><tbody>" %
                       "".join("<th>%s</th>" % inline(c) for c in head))
            for r in rows:
                r += [""] * (len(head) - len(r))
                out.append("<tr>%s</tr>" % "".join("<td>%s</td>" % inline(c) for c in r[:len(head)]))
            out.append("</tbody></table>")
            continue

        if stripped.startswith(">"):
            close_lists()
            buf = []
            while i < n and lines[i].strip().startswith(">"):
                buf.append(inline(lines[i].strip().lstrip(">").strip()))
                i += 1
            out.append("<blockquote><p>%s</p></blockquote>" % "<br>".join(buf))
            continue

        m = re.match(r"^\s*[-*+]\s+(.*)$", line)
        if m:
            if not list_stack or list_stack[-1] != "ul":
                close_lists()
                list_stack.append("ul")
                out.append("<ul>")
            out.append("<li>%s</li>" % inline(m.group(1)))
            i += 1
            continue

        m = re.match(r"^\s*\d+[.)]\s+(.*)$", line)
        if m:
            if not list_stack or list_stack[-1] != "ol":
                close_lists()
                list_stack.append("ol")
                out.append("<ol>")
            out.append("<li>%s</li>" % inline(m.group(1)))
            i += 1
            continue

        close_lists()
        para = [stripped]
        i += 1
        while i < n and lines[i].strip() and not re.match(
                r"^\s*([-*+]\s|\d+[.)]\s|#{1,6}\s|>|```)", lines[i]) and "|" not in lines[i]:
            para.append(lines[i].strip())
            i += 1
        out.append("<p>%s</p>" % inline(" ".join(para)))

    close_lists()
    return "\n".join(out)


def find_chrome():
    for p in CHROME_CANDIDATES:
        if os.path.isfile(p):
            return p
    raise SystemExit("Chrome not found. Checked:\n  " + "\n  ".join(CHROME_CANDIDATES))


def main():
    args = sys.argv[1:]
    out_dir = None
    if "--out-dir" in args:
        k = args.index("--out-dir")
        out_dir = args[k + 1]
        del args[k:k + 2]
    if not args:
        raise SystemExit(__doc__)

    chrome = find_chrome()
    for src in args:
        md = open(src, encoding="utf-8").read()
        title = os.path.splitext(os.path.basename(src))[0]
        body = convert(md)
        page = ("<!doctype html><html><head><meta charset='utf-8'>"
                "<title>%s</title><style>%s</style></head><body>%s</body></html>"
                % (html.escape(title), CSS, body))

        tmp = os.path.join(tempfile.gettempdir(), title + ".html")
        open(tmp, "w", encoding="utf-8").write(page)

        # Chrome resolves neither relative output paths nor POSIX-style paths, so both the
        # output file and the file:// URL must be absolute, forward-slashed Windows paths.
        dest_dir = os.path.abspath(out_dir or os.path.dirname(os.path.abspath(src)))
        os.makedirs(dest_dir, exist_ok=True)
        pdf = os.path.join(dest_dir, title + ".pdf")
        pdf_arg = os.path.abspath(pdf).replace("\\", "/")
        url = "file:///" + os.path.abspath(tmp).replace("\\", "/")

        proc = subprocess.run([
            chrome, "--headless=new", "--disable-gpu", "--no-sandbox",
            "--no-pdf-header-footer", "--virtual-time-budget=3000",
            "--print-to-pdf=" + pdf_arg, url,
        ], capture_output=True, text=True, timeout=180)

        size = os.path.getsize(pdf) if os.path.exists(pdf) else 0
        if size == 0:
            noise = "external_registry_loader"
            err = "\n".join(l for l in (proc.stderr or "").splitlines() if noise not in l)
            raise SystemExit("FAILED to produce %s\n%s" % (pdf, err[:1000]))
        print("%-24s -> %-46s %6d KB" % (os.path.basename(src), pdf_arg, size // 1024))
        os.remove(tmp)


if __name__ == "__main__":
    main()
