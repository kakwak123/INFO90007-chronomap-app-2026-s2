"""Transcribe a ChronoMap evaluation session recording, locally.

Runs faster-whisper on this machine. The audio never leaves the computer, which matters because
participants consented to recording for note-taking only.

Usage:
    python scripts/transcribe-session.py <audio-file> <participant-code> [model]

    model defaults to "base". Use "small" or "medium" for better accuracy on accented speech or
    noisy rooms, at the cost of a longer run and a larger one-off model download.

Writes a Markdown transcript next to the sessions folder. The transcript is safe to commit; the
audio is gitignored.
"""
import io
import os
import sys
import time

from faster_whisper import WhisperModel

audio = sys.argv[1]
code = sys.argv[2]
model_size = sys.argv[3] if len(sys.argv) > 3 else "base"

out_dir = os.path.join("docs", "evaluation", "sessions")
os.makedirs(out_dir, exist_ok=True)
stem = os.path.splitext(os.path.basename(audio))[0]
out_path = os.path.join(out_dir, stem + "-transcript.md")

print("model: %s (downloads once, then cached)" % model_size, flush=True)
t0 = time.time()
model = WhisperModel(model_size, device="cpu", compute_type="int8")
print("model loaded in %.0fs" % (time.time() - t0), flush=True)

segments, info = model.transcribe(audio, vad_filter=True, beam_size=5)
print("detected language: %s (p=%.2f), duration %.0fs"
      % (info.language, info.language_probability, info.duration), flush=True)

def ts(seconds):
    m, s = divmod(int(seconds), 60)
    return "%d:%02d" % (m, s)

lines = []
count = 0
for seg in segments:
    text = seg.text.strip()
    if not text:
        continue
    lines.append("**[%s]** %s" % (ts(seg.start), text))
    count += 1
    if count % 10 == 0:
        print("  %d segments..." % count, flush=True)

header = [
    "# Session transcript - %s" % code,
    "",
    "| | |",
    "| --- | --- |",
    "| Participant | %s |" % code,
    "| Method | Think-aloud (observation) |",
    "| Recording | `sessions/audio/%s` (gitignored - personal data) |" % os.path.basename(audio),
    "| Duration | %s |" % ts(info.duration),
    "| Transcribed | locally, faster-whisper `%s`, language %s |" % (model_size, info.language),
    "",
    "> Machine transcription - **read it against the audio before quoting anything in the report.**",
    "> Whisper is confident even when wrong, and usability sessions are full of half-sentences,",
    "> overlapping speech and interface words it has never heard. Fix names of screens and",
    "> features by hand.",
    "",
    "Use participant codes only. If a real name is spoken, replace it here with the code.",
    "",
    "---",
    "",
]

io.open(out_path, "w", encoding="utf-8", newline="\n").write(
    "\n".join(header) + "\n\n".join(lines) + "\n")

print("\nwrote %s (%d segments, %.0fs total)" % (out_path, count, time.time() - t0))
