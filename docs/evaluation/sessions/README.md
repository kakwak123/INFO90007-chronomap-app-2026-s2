# Evaluation sessions

One folder per study. Audio stays local; transcripts and findings are committed.

```
sessions/
  audio/                       gitignored - participant recordings, personal data
    P1-2026-10-29.m4a
  P1-2026-10-29-transcript.md  machine transcript, checked by hand before quoting
  P1-2026-10-29-findings.md    first-pass findings from that session
```

## Naming

`<code>-<yyyy-mm-dd>` where code is **P1-P5** (think-aloud) or **Q1-Q5** (questionnaire), per
`../study-kit.md`. Codes only - no participant names anywhere in this folder, including inside
transcripts. If a name is spoken, replace it with the code when you check the transcript.

## Why audio is gitignored

This repository is **public**. Participants were told audio is recorded for note-taking and
deleted after the assignment. Publishing a recording of someone's voice to a public repository
would break that. `.gitignore` excludes `*.m4a`, `*.mp3`, `*.wav`, `*.mp4` and this folder's
`audio/` directory. Delete the recordings once the report is submitted.

## Transcribing

```bash
python scripts/transcribe-session.py docs/evaluation/sessions/audio/P1-2026-10-29.m4a P1 base
```

Runs **locally** via faster-whisper - nothing is uploaded. `base` is quick and adequate for a
quiet room; use `small` or `medium` for accented speech or background noise, at the cost of a
longer run.

Machine transcription is confident even when wrong, and usability sessions are full of
half-sentences and interface words the model has never heard. Read the transcript against the
audio before quoting anything in the report.

## Workflow per session

1. Record (with verbal consent), save to `audio/` with the participant code.
2. Transcribe.
3. Check the transcript against the audio; fix screen and feature names; strip any real names.
4. Write a first-pass findings file for that session.
5. Merge into `../findings-log.md`, combining the same problem seen by several participants into
   one row with all their codes.
