# Evaluation findings log

One row per distinct problem. Merge the same problem seen by several participants into one row and list their codes. Fill during analysis (Thu 29 Oct) from the session notes and the questionnaire open answers. This table becomes report §3.4.4 and §3.5.

Severity (Nielsen): 0 not a problem, 1 cosmetic, 2 minor, 3 major (important to fix), 4 catastrophic (blocks the task).

Decision: **fix** (made in version 2), **defer** (valid, not done, say why), **reject** (not acted on, say why).

**Status, 31 Oct 2026.** Filled from the pilot, PT-1 and PT-2 transcripts only. The quotes are
machine-transcribed and **not yet checked against the audio**. Severity and decisions are proposals for
the team to agree, not results. Questionnaire tallies stay empty until real PQ responses arrive.
F2 and F8 are fixes to the prototype made before or during testing: write them up under "changes made", not
as problems users found about the design. A pilot finding fixed before the sessions (the live session not
findable under Nearby, because the clock tower card was missing) is a wiring gap and is not listed here.

| ID  | Problem (one sentence, specific) | Screen # | Task | Evidence (quote or what was observed) | Participants (codes) | Severity | Heuristic (Nielsen # / community card) | Decision and reason | Change made in v2 | Before/after figure |
| --- | -------------------------------- | -------- | ---- | ------------------------------------- | -------------------- | -------- | -------------------------------------- | ------------------- | ----------------- | ------------------- |
| F1 | No plain-language explanation of what ChronoMap is for or why to take part, before the first task | 01, 02 | All, debrief | PT-1: "no context for any background. I was asked to do something." PT-2: "I did not know what the app really was about." | PT-1, PT-2 | 3 | #10 Help and documentation; #2 Match with the real world | Fix (proposed): one-line purpose on 01 and 02, shown before task 1 | `[FILL after v2]` | `[FILL]` |
| F2 | One-tap replies on the live screens did nothing when tapped | 14, 15 | T2, T3 | PT-1: "it doesn't do anything" after tapping Need a hand and On my way | PT-1 | 3 | #1 Visibility of system status | Fix: wire the replies. This is a prototype fault, so report it under changes made, not as a design finding | `[FILL after v2]` | `[FILL]` |
| F3 | Too many controls on the capture and briefing screens; people could not tell what mattered | 14, 10, 11 | T2, T3 | Pilot: "there's too many buttons", "the screen overall is too busy... I would make it more simplified" | Pilot | 3 | #8 Aesthetic and minimalist design | Fix: Hold steady removed from 14, 14c, 14a, 14b; upload made automatic on 16 | Hold steady removed, upload automatic | `[FILL]` |
| F4 | Task 3 wording was unclear, so people could not tell what they were being asked to do | 14, 15 | T3 | PT-1: "I do not understand this instruction". PT-2 asked for the question to be repeated. | PT-1, PT-2 | 2 | Not a design heuristic: an instrument fault | Fix: task rewritten as a scene with background and a physical move (study kit, tester pack) | Task text only, no screen change | none |
| F5 | Sharing was unclear: who it goes to, and where the exact-location control is | 18, 20 | T4 | PT-1: "share the model to who, when and how", "what is this even about". PT-2: "What model?", "I don't know". | PT-1, PT-2 | 3 | #6 Recognition rather than recall; #7 Flexibility and efficiency | Fix: location toggle and shared end states built (20b to 20d), but these sessions ran before they existed, so retest | 20b, 20c, 20d added | `[FILL]` |
| F6 | Radar dots, colours and position wording make no sense without context | 11, 14, 15 | T2, T3 | PT-2: "several dots... the yellow thing... you're like the northeast... I had no context". PT-1: "where the hell am I", "doesn't mean I have to walk around". | PT-1, PT-2 | 2 | #2 Match with the real world; #6 Recognition rather than recall | Defer or fix (team decision): add a small legend, or reword the position line | `[FILL]` | `[FILL]` |
| F7 | Reluctance to join strangers: safety worries and no clear benefit | 07, 08 | Debrief | PT-1: "why would I join it when it's not even paid?" PT-2: "I do not like people", "some safety hazards". Pilot: would join "friends". | Pilot, PT-1, PT-2 | 2 | Community heuristics: trust and safety | Defer: a concept risk, not a screen fix. State it honestly in the Discussion | none | none |
| F8 | The word "station" collided with a railway station name, so the participant named a landmark | 10, 11 | T2 | Pilot: "[Flinders] street station is where I am", then stalled | Pilot | 3 | #2 Match with the real world | Fix: renamed to position on screens 10 and 11, before PT-1 and PT-2 sessions ran | "station" became "position" | `[FILL]` |
| F9 | On a landmark that is already captured, sharing a model and requesting a new capture look alike | 22 | none | Pilot: "No, that's because it's been done already... that doesn't make sense because I need to capture it right" | Pilot | 2 | #4 Consistency and standards | Defer: not on a task path, one participant | none | none |

## Questionnaire tallies

| Participant | SUS score (0-100) | C1 purpose | C2 join strangers | C3 voice comfort | C4 radar clarity | C5 privacy trust | C6 motivation | Device | Tasks not completed |
| ----------- | ----------------- | ---------- | ----------------- | ---------------- | ---------------- | ---------------- | ------------- | ------ | ------------------- |
| PQ-1         |                   |            |                   |                  |                  |                  |               |        |                     |
| PQ-2         |                   |            |                   |                  |                  |                  |               |        |                     |
| PQ-3         |                   |            |                   |                  |                  |                  |               |        |                     |
| PQ-4         |                   |            |                   |                  |                  |                  |               |        |                     |
| PQ-5         |                   |            |                   |                  |                  |                  |               |        |                     |
| **Mean**    |                   |            |                   |                  |                  |                  |               |        |                     |

SUS per-item means (1-10):

| Item | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mean |     |     |     |     |     |     |     |     |     |     |

## Open-answer themes

| Theme | Example quote | Participants | Linked finding ID |
| ----- | ------------- | ------------ | ----------------- |
| No explanation of what the app is for | PT-1: "no context for any background". PT-2: "I did not know what the app really was about." | PT-1, PT-2 | F1 |
| Would not join strangers | PT-1: "why would I join it when it's not even paid?" PT-2: "I do not like people". | PT-1, PT-2 | F7 |
| Prefer a tap to speaking | PT-2: quick replies, because voice could cause "misunderstandings". Pilot: "maybe there's a button that I can press". | PT-2, Pilot | supports the one-tap design |
| Too busy, too many buttons | Pilot: "there's too many buttons". | Pilot | F3 |
