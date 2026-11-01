#!/usr/bin/env python3
"""Render the assessor pack as standalone cards, one PNG per card.

`pack-assessor.md` is a run sheet. As a wall of Markdown it is unreadable in the report, and
that is how it currently reaches the appendix. This cuts it into nine self-contained cards, each
one thing a moderator does, and renders each to its own image so they can be placed individually
or as a grid.

The styling is the app's own: the warm paper ground, the archival blue ink, hairline borders
rather than shadows, and amber used once, for the cautions, because in ChronoMap amber means
"pay attention to this". Tokens are taken from `src/ui/theme.ts`.

Usage:  python scripts/gen-pack-cards.py
Output: docs/evaluation/cards/pack-assessor-01.png ... -09.png

Requires Chrome (headless) and Pillow. Chrome renders at 2x for a crisp figure; Pillow trims
the render down to the card's own bounds.
"""

import os
import shutil
import subprocess
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "docs" / "evaluation" / "cards"
WORK = Path(os.environ.get("TEMP", "/tmp")) / "chronomap-pack-cards"

CHROME_CANDIDATES = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    "/usr/bin/google-chrome",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
]

CARD_W = 760          # CSS px, the card itself
SCALE = 2             # device pixel ratio, so the figure survives being printed
PAD = 28              # paper margin around the card in the render

# Tokens, mirrored from src/ui/theme.ts
CSS = """
:root {
  --bg: #F6F5F2; --surface: #FFFFFF; --surfaceAlt: #EDEBE6;
  --border: #DCD9D2; --thin: #908D87;
  --text: #15171C; --dim: #676B75;
  --ink: #1E3A5F; --inkSoft: #E8EDF4;
  --amber: #E0892E; --amberSoft: #FBEEDC; --amberInk: #9F6121;
  --good: #2E7D5B;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: var(--bg); }
body {
  font-family: 'IBM Plex Sans', 'Segoe UI', system-ui, -apple-system, sans-serif;
  color: var(--text);
  padding: PADpx;
  -webkit-font-smoothing: antialiased;
}
.card {
  width: CARDWpx; background: var(--surface);
  border: 1px solid var(--border); border-radius: 14px;
  padding: 26px 28px 28px;
}
.eyebrow {
  font-size: 10.5px; font-weight: 700; letter-spacing: 1.1px;
  text-transform: uppercase; color: var(--dim);
}
h1 {
  font-size: 23px; font-weight: 700; letter-spacing: -0.4px;
  margin: 7px 0 0; color: var(--ink); text-wrap: balance;
}
.lede { margin: 9px 0 0; font-size: 13.5px; line-height: 1.5; color: var(--dim); }
.rule { height: 1px; background: var(--border); margin: 18px 0 0; }

table { width: 100%; border-collapse: collapse; margin-top: 18px; font-size: 13.5px; }
th {
  text-align: left; font-size: 10.5px; font-weight: 700; letter-spacing: 1px;
  text-transform: uppercase; color: var(--dim);
  padding: 0 12px 8px 0; border-bottom: 1px solid var(--thin);
}
td { padding: 11px 12px 11px 0; border-bottom: 1px solid var(--border); vertical-align: top;
     line-height: 1.45; }
tr:last-child td { border-bottom: 0; padding-bottom: 0; }
th:last-child, td:last-child { padding-right: 0; }
.num { font-variant-numeric: tabular-nums; white-space: nowrap; color: var(--dim); }
.code { font-weight: 700; color: var(--ink); white-space: nowrap; }

ol.steps, ul.plain { margin: 18px 0 0; padding: 0; list-style: none; }
ol.steps > li, ul.plain > li {
  display: grid; grid-template-columns: 26px 1fr; gap: 12px;
  padding: 11px 0; border-bottom: 1px solid var(--border);
  font-size: 13.5px; line-height: 1.5;
}
ol.steps > li:last-child, ul.plain > li:last-child { border-bottom: 0; padding-bottom: 0; }
.marker {
  font-size: 11.5px; font-weight: 700; color: var(--ink);
  font-variant-numeric: tabular-nums; padding-top: 2px;
}
.box { width: 14px; height: 14px; border: 1.5px solid var(--thin); border-radius: 3px;
       margin-top: 4px; }

b, strong { font-weight: 700; }
.q { color: var(--ink); font-style: italic; }
.say { color: var(--dim); font-style: italic; }
.q::before, .say::before { content: "“"; }
.q::after,  .say::after  { content: "”"; }

.note {
  margin-top: 18px; padding: 13px 15px; border-radius: 10px;
  background: var(--amberSoft); font-size: 13px; line-height: 1.5; color: var(--amberInk);
}
.note b { color: var(--amberInk); }
.note.cool { background: var(--inkSoft); color: var(--ink); }
.note.cool b { color: var(--ink); }

.foot { margin-top: 20px; font-size: 11.5px; color: var(--dim); letter-spacing: 0.1px; }
"""


def card(n, eyebrow, title, lede, body, note=None, note_tone="", foot=None):
    return {
        "n": n,
        "html": f"""<div class="card">
<div class="eyebrow">{eyebrow}</div>
<h1>{title}</h1>
{f'<p class="lede">{lede}</p>' if lede else ''}
<div class="rule"></div>
{body}
{f'<div class="note {note_tone}">{note}</div>' if note else ''}
{f'<div class="foot">{foot}</div>' if foot else ''}
</div>""",
    }


def checklist(items):
    li = "".join(f'<li><div class="box"></div><div>{t}</div></li>' for t in items)
    return f'<ul class="plain">{li}</ul>'


def steps(items):
    li = "".join(
        f'<li><div class="marker">{i}</div><div>{t}</div></li>'
        for i, t in enumerate(items, 1)
    )
    return f'<ol class="steps">{li}</ol>'


def table(headers, rows, widths=None):
    th = "".join(
        f'<th{f" style=\"width:{widths[i]}\"" if widths else ""}>{h}</th>'
        for i, h in enumerate(headers)
    )
    tr = "".join("<tr>" + "".join(f"<td>{c}</td>" for c in r) + "</tr>" for r in rows)
    return f"<table><thead><tr>{th}</tr></thead><tbody>{tr}</tbody></table>"


EY = "ChronoMap 3D &middot; assessor pack"

CARDS = [
    card(
        1, f"{EY} &middot; 1 of 9", "Before you start",
        "Once, about fifteen minutes, before the first participant arrives.",
        checklist([
            "Open the Figma prototype on the test phone and run the whole journey end to end.",
            "Attempt all five tasks yourself. Note the exact tap path for each, so you can "
            "recognise when someone has gone off it.",
            "Fix any dead link <b>now</b>. A broken link found mid-session wastes a participant "
            "you cannot replace.",
            "Print or open the task cards, this pack, and a blank notes sheet per participant.",
            "Agree who moderates and who takes notes. <b>Two people.</b> One person cannot do "
            "both well.",
        ]),
        note="<b>Do not give this pack to a participant.</b> It carries the success criteria. "
             "Hand them the tester pack, which deliberately leaves them out.",
    ),
    card(
        2, f"{EY} &middot; 2 of 9", "Session shape",
        "Think-aloud, in person, about twenty-five minutes per participant.",
        table(["Stage", "Time", "What happens"], [
            ["Welcome and consent", '<span class="num">2 min</span>',
             "Explain, ask about audio recording, record their answer"],
            ["Context briefing", '<span class="num">1 min</span>',
             "Read the briefing aloud, word for word"],
            ["Warm-up", '<span class="num">1 min</span>',
             '<span class="q">Open the app and tell me what you think it is for</span>'],
            ["Tasks", '<span class="num">15 min</span>',
             "Five tasks, one at a time, about three minutes each"],
            ["Debrief", '<span class="num">3 min</span>', "Four questions"],
            ["Wrap", '<span class="num">2 min</span>', "Thanks, note the end time"],
        ], widths=["30%", "16%", "54%"]),
        foot="Where this pack and the study kit disagree, the study kit wins.",
    ),
    card(
        3, f"{EY} &middot; 3 of 9", "The four rules",
        "The whole method rests on these. Everything else is logistics.",
        steps([
            "<b>Do not help.</b> Let them struggle. Struggling is the data.",
            'If they go quiet for <b>ten seconds</b>, prompt: <span class="q">What are you '
            'thinking?</span> or <span class="q">What do you expect that to do?</span> What you '
            'must never say is <span class="say">Have you tried the button at the top?</span>',
            "If they are stuck for <b>sixty seconds</b>, give the smallest possible hint, write "
            "it down as an assist, and move on. A task completed after an assist scores P, not C.",
            '<b>Never explain why something is designed the way it is.</b> If they ask, say '
            '<span class="q">I will explain after we finish. What would you expect it to '
            'do?</span>',
        ]),
        note="Defending the design mid-session contaminates everything that comes after it.",
    ),
    card(
        4, f"{EY} &middot; 4 of 9", "Scoring a task", None,
        table(["Code", "Meaning"], [
            ['<span class="code">C</span>', "Completed with no help and no wrong turns"],
            ['<span class="code">P</span>',
             "Completed, but needed an assist or went the wrong way first"],
            ['<span class="code">F</span>', "Not completed, or abandoned at five minutes"],
        ], widths=["18%", "82%"]),
        note="Stop a task at <b>five minutes</b> and record F. Do not let one task eat the "
             "session.",
    ),
    card(
        5, f"{EY} &middot; 5 of 9", "What counts as done",
        "Keep these to yourself during the session.",
        table(["Task", "Complete when they"], [
            ['<span class="code">T1</span>',
             "Reach the rally screen for the clock tower session"],
            ['<span class="code">T2</span>',
             "Can say which position they have and where it is, <b>and</b> signal ready by any "
             "means. Record which method they chose rather than prompting for the mic"],
            ['<span class="code">T3</span>',
             "Use a quick reply to respond, <b>and</b> correctly name the side that still needs "
             "photos"],
            ['<span class="code">T4</span>',
             "Reach the share screen with exact location off and a story format selected"],
            ['<span class="code">T5</span>', "Open the participant menu and flag the person"],
        ], widths=["14%", "86%"]),
        note="<b>T2 and T3 are the ones to watch.</b> They test whether the coordination design "
             "actually works, and they are where the host and radar concept either proves itself "
             "or does not.",
    ),
    card(
        6, f"{EY} &middot; 6 of 9", "Debrief",
        "Ask all four, in this order, and write the answers verbatim.",
        steps([
            "What was the most confusing moment?",
            "Would you join a session like this with people you do not know? Why or why not?",
            "Would you use the voice channel, or the quick replies?",
            "Anything you would change?",
        ]),
        note="Before the next participant, write down your <b>top three problems from this "
             "session</b> while it is fresh. Five sessions blur together fast.",
    ),
    card(
        7, f"{EY} &middot; 7 of 9", "Questionnaire",
        "Remote, about fifteen minutes. Five different people from the think-aloud five.",
        table(["Part", "Contents", "Scale"], [
            ['<span class="code">A</span>', "The ten standard System Usability Scale statements",
             '<span class="num">1 to 5</span>'],
            ['<span class="code">B</span>',
             "Six ChronoMap items: purpose, joining strangers, voice comfort, radar clarity, "
             "privacy trust, motivation", '<span class="num">1 to 5</span>'],
            ['<span class="code">C</span>', "Two open questions", "Free text"],
            ['<span class="code">D</span>',
             "Participant code, device, rough time taken, any task not completed", "Short answer"],
        ], widths=["12%", "64%", "24%"]),
        note="Put the participant code <b>first</b>, not last. People abandon forms at the end, "
             "and a response you cannot attribute is hard to use.",
        foot="Send three things together: the prototype link verified logged out, the tester "
             "pack, and the form.",
    ),
    card(
        8, f"{EY} &middot; 8 of 9", "Scoring the usability scale", None,
        steps([
            "For the <b>odd-numbered</b> statements, subtract 1 from the rating.",
            "For the <b>even-numbered</b> statements, subtract the rating from 5.",
            "Add the ten results and multiply by <b>2.5</b>, giving a score from 0 to 100.",
            "Report the mean, the spread, and the per-item means.",
        ]),
        note="Around <b>68</b> is the published average. Treat it as a point of reference, not a "
             "pass mark, and do not claim statistical significance from five people.",
        note_tone="cool",
    ),
    card(
        9, f"{EY} &middot; 9 of 9", "If something goes wrong", None,
        table(["Problem", "What to do"], [
            ["A link is dead mid-session",
             'Note the screen number, say <span class="q">that one is not wired up, let us move '
             'on</span>, continue. Record it as a finding.'],
            ["They ask whether they did it right",
             '<span class="q">There is no right answer. I am interested in what you '
             'expected.</span>'],
            ["They refuse audio recording",
             "Fine. Written notes only. Record the refusal on the notes sheet."],
            ["They finish very early",
             "Use the optional sixth task, or go deeper in the debrief."],
            ["They want to talk about the idea, not the interface",
             "Let them, briefly. Willingness to join strangers is one of the things you are "
             "trying to learn. Then steer back."],
        ], widths=["34%", "66%"]),
        note="The most common mistakes: moderating alone, helping too early, interpreting during "
             "the session, and paraphrasing quotes. Verbatim or not at all.",
    ),
]


def find_chrome():
    for c in CHROME_CANDIDATES:
        if Path(c).exists():
            return c
    found = shutil.which("chrome") or shutil.which("google-chrome")
    if found:
        return found
    sys.exit("Chrome not found. Add its path to CHROME_CANDIDATES.")


def main():
    chrome = find_chrome()
    WORK.mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)
    css = CSS.replace("CARDW", str(CARD_W)).replace("PAD", str(PAD))

    written = []
    for c in CARDS:
        name = f"pack-assessor-{c['n']:02d}"
        html = WORK / f"{name}.html"
        html.write_text(
            "<!doctype html><meta charset='utf-8'>"
            "<link rel='stylesheet' href='https://fonts.googleapis.com/css2?"
            "family=IBM+Plex+Sans:wght@400;500;600;700&display=swap'>"
            f"<style>{css}</style>{c['html']}",
            encoding="utf-8",
        )
        raw = WORK / f"{name}-raw.png"
        subprocess.run([
            chrome, "--headless=new", "--disable-gpu", "--hide-scrollbars",
            f"--force-device-scale-factor={SCALE}",
            f"--window-size={CARD_W + PAD * 2},1600",
            f"--screenshot={raw}", f"--virtual-time-budget=4000",
            html.as_uri(),
        ], check=True, capture_output=True)

        # Chrome renders the full window height, so trim back to the card plus its paper margin.
        im = Image.open(raw).convert("RGB")
        bg = im.getpixel((2, 2))
        diff = Image.new("RGB", im.size, bg)
        from PIL import ImageChops
        bbox = ImageChops.difference(im, diff).getbbox()
        if bbox:
            m = PAD * SCALE
            im = im.crop((
                max(0, bbox[0] - m), max(0, bbox[1] - m),
                min(im.width, bbox[2] + m), min(im.height, bbox[3] + m),
            ))
        dest = OUT / f"{name}.png"
        im.save(dest, optimize=True)
        written.append((dest, im.size))

    for d, (w, h) in written:
        print(f"{d.relative_to(ROOT)}  {w}x{h}")
    print(f"\n{len(written)} cards at {SCALE}x. Card width {CARD_W}px.")


if __name__ == "__main__":
    main()
