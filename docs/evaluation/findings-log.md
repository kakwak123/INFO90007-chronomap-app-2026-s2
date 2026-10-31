# Evaluation findings log

One row per distinct problem. Merge the same problem seen by several participants into one row and list their codes. Fill during analysis (Thu 29 Oct) from the session notes and the questionnaire open answers. This table becomes report §3.4.4 and §3.5.

Severity (Nielsen): 0 not a problem, 1 cosmetic, 2 minor, 3 major (important to fix), 4 catastrophic (blocks the task).

Decision: **fix** (made in version 2), **defer** (valid, not done, say why), **reject** (not acted on, say why).

**Status, 1 Nov 2026.** Evidence comes from PT-8 (29 Oct), PT-1 and PT-2 (our transcripts), two think-aloud sessions
written up in the team document by Dhiraj, and three valid questionnaire responses (PQ-3, PQ-4, PQ-5). **PT3d and PT4d
are Dhiraj's own labels (PT3 and PT4 in the team document); they clash with our allocation (PT-3 is Yong, PT-4 is Dhiraj,
PT-6 is his spare) and must be recoded before the report uses them.** Think-aloud notes are second-hand summaries, not
transcripts. PQ-1 and PQ-2 are excluded as not independent (see `questionnaire-results.md`). The transcripts are machine-made
and not yet checked against the audio. Severity and decisions are proposals for the team to agree.
F2 and F8 are fixes to the prototype made before or during testing: write them up under "changes made", not as problems users
found about the design.

| ID | Problem (one sentence, specific) | Screen # | Task | Evidence (quote or what was observed) | Participants (codes) | Severity | Heuristic (Nielsen # / community card) | Decision and reason | Change made in v2 | Before/after figure |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | 
| F1 | No plain-language explanation of what the app is for or why to take part, before the first task | 01, 02 | All, debrief | PT-1: "no context for any background". PT-2: "I did not know what the app really was about". PT3d: "the introduction screen is confusing". PQ-5: unsure how a session begins | PT-1, PT-2, PT3d, PQ-5 | 3 | #10 Help and documentation; #2 Match with the real world | Fix in v2 (proposed): a one-line purpose before task 1 | `[FILL after v2]` | `[FILL]` |
| F2 | The one-tap replies did nothing when tapped (a prototype fault) | 14, 15 | T2, T3 | PT-1: "it doesn't do anything" after tapping Need a hand and On my way | PT-1 | 3 | #1 Visibility of system status | Fix: wire the replies (prototype fault, report under changes made) | `[FILL after v2]` | `[FILL]` |
| F3 | Too many controls on the capture and briefing screens | 10, 11, 14 | T2, T3 | PT-8: "there's too many buttons", "the screen overall is too busy" | PT-8 | 3 | #8 Aesthetic and minimalist design | Fix: Hold steady removed, upload made automatic | Hold steady removed, upload automatic | `[FILL]` |
| F4 | Task 3 wording was unclear (a test fault, not a design fault) | 14, 15 | T3 | PT-1: "I do not understand this instruction". PT-2 asked for it to be repeated | PT-1, PT-2 | 2 | Instrument fault | Fix: task rewritten as a scene with background | Task text only | none |
| F5 | Sharing was unclear: who receives it, and where the exact-location control is | 18, 20 | T4 | PT-1: "share the model to who, when and how". PT-2: "What model?" | PT-1, PT-2 | 3 | #6 Recognition rather than recall | Fix: location toggle and shared end states (20b to 20d); retest | 20b, 20c, 20d added | `[FILL]` |
| F6 | The radar and the position wording are hard to read: people did not know which dot was theirs or where to go | 11, 14, 15 | T2, T3 | PT-2: "several dots... I had no context". PT3d: guessed the transparent icon was theirs and missed the instruction with the arrow. PT4d: guessed the wrong spot even after reading north east. PQ-5: unsure where they were | PT-1, PT-2, PT3d, PT4d, PQ-5 | 3 | #2 Match with the real world; #6 Recognition rather than recall | Open (team decision): mark "you" clearly and add a legend | `[FILL]` | `[FILL]` |
| F7 | Reluctance to join strangers: safety worries, wanting anonymity, no clear benefit | 07, 08 | Debrief | PT-1: "not even paid". PT-2: "some safety hazards". PT3d: would join only if anonymous. PT4d: friends, strangers only if safety is reassuring. PQ-5: not comfortable sharing location or microphone. PQ-4: needs reassurance on tracking | PT-8, PT-1, PT-2, PT3d, PT4d, PQ-4, PQ-5 | 2 | Community heuristics: trust and safety | Defer: a risk to the concept. Discuss it in the Discussion and show the safety screens | none | none |
| F8 | "Station" collided with a railway station name, so a landmark was named instead of a position | 10, 11 | T2 | PT-8: "[Flinders] street station is where I am" | PT-8 | 3 | #2 Match with the real world | Fix: renamed position, before the sessions | "station" became "position" | `[FILL]` |
| F9 | For an already captured landmark, sharing a model and requesting a new capture look alike | 22 | none | PT-8: "that doesn't make sense because I need to capture it right" | PT-8 | 2 | #4 Consistency and standards | Defer: not on a task path, seen once | none | none |
| F10 | Reporting a person is hard to find or misread: people used the general report page instead of the person-specific one, did not know how to report a stranger, and took the flag icon for a bookmark | 14, 14a, 23, 26 | T5 | PT3d and PT4d used the general report flow. PT4d: how do you report someone you do not know by name. PQ-4: the flag icon was taken for a bookmark | PT3d, PT4d, PQ-4 | 3 | #4 Consistency and standards; #6 Recognition rather than recall; #3 User control and freedom | Open (team decision): point the flag in the call to the person-specific flow and label it "Report" | `[FILL]` | `[FILL]` |
| F11 | It is unclear whether the microphone is on or off | 13, 14 | T3 | PT3d: confused whether their microphone was on | PT3d | 2 | #1 Visibility of system status | Open: show the mic state clearly | `[FILL]` | `[FILL]` |
| F12 | The screens are long on a phone, so people scroll and miss content, and one could not reach task 4 directly | Several | T4 | PT4d: UI too long on phone, could not navigate to task 4 (may be Figma specific). PQ-4: the interface needs scrolling | PT4d, PQ-4 | 2 | #8 Aesthetic and minimalist design | Defer or fix: check screen height in the prototype view; mostly a Figma presentation issue | `[FILL]` | `[FILL]` |
| F13 | The onboarding is skipped by one tap and cannot be viewed again | 01 | T1 | PQ-3: next went straight from the tutorial to the main app. PT3d: wants a better tutorial and an option to view it again | PQ-3, PT3d | 2 | #10 Help and documentation | Fix in v2 (proposed): slower onboarding and a way to reopen it | `[FILL after v2]` | `[FILL]` |

### Positive and mixed evidence (not problems)

- The badge was welcomed: PT4d had a happy reaction to the Golden hour badge; PQ-3 said the app seems fun; C6 (badge as motivation) is the highest questionnaire item, mean 4.3 on the valid rows.
- Quick replies are preferred with strangers and voice with people they know (PT-2, PT3d, PT4d, and PT-8), which supports the one-tap design.

## Evidence matrix: problem by participant

A tick means that participant's session or answers support the problem. Columns for Dhiraj's sessions use his labels (PT3d, PT4d). PQ-1 and PQ-2 are excluded. "Count" is the number of participants; "Sev." is the proposed severity.

| Problem | PT-8 | PT-1 | PT-2 | PT3d | PT4d | PQ-3 | PQ-4 | PQ-5 | Count | Sev. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| F1 Purpose and introduction unclear |  | x | x | x |  |  |  | x | 4 | 3 |
| F2 Quick replies did nothing |  | x |  |  |  |  |  |  | 1 | 3 |
| F3 Too many controls | x |  |  |  |  |  |  |  | 1 | 3 |
| F4 Task 3 wording unclear |  | x | x |  |  |  |  |  | 2 | 2 |
| F5 Sharing unclear |  | x | x |  |  |  |  |  | 2 | 3 |
| F6 Radar and position hard to read |  | x | x | x | x |  |  | x | 5 | 3 |
| F7 Reluctance to join strangers | x | x | x | x | x |  | x | x | 7 | 2 |
| F8 Station collision | x |  |  |  |  |  |  |  | 1 | 3 |
| F9 Share and request look alike | x |  |  |  |  |  |  |  | 1 | 2 |
| F10 Reporting a person confusing |  |  |  | x | x |  | x |  | 3 | 3 |
| F11 Mic state unclear |  |  |  | x |  |  |  |  | 1 | 2 |
| F12 Screens too long on a phone |  |  |  |  | x |  | x |  | 2 | 2 |
| F13 Onboarding skipped, cannot revisit |  |  |  | x |  | x |  |  | 2 | 2 |

Ranked by count, then severity: F7 (7), F6 (5), F1 (4), F10 (3), then F4, F5, F12, F13 (2 each), and the single-participant items. F7 is the most widely shared, but it is a risk to the concept, not a screen fix.

## Questionnaire tallies

All six rows are in `questionnaire-results.md` with two bases. Below: the independent rows (PQ-3, PQ-4, PQ-5, PQ-7).

| Participant | SUS score (0-100) | C1 purpose | C2 join strangers | C3 voice comfort | C4 radar clarity | C5 privacy trust | C6 motivation | Device | Tasks not completed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PQ-3 | 80.0 | 3 | 3 | 2 | 4 | 2 | 4 | Laptop | None |
| PQ-4 | 92.5 | 5 | 5 | 3 | 3 | 3 | 5 | Phone | None |
| PQ-5 | 42.5 | 2 | 2 | 2 | 4 | 2 | 4 | Phone | None |
| PQ-7 | 50.0 | 5 | 5 | 5 | 5 | 5 | 4 | Phone | None |
| **Mean (n = 4)** | 66.2 | 3.8 | 3.8 | 3.0 | 4.0 | 3.0 | 4.2 | | |

SUS standard deviation 23.8, range 42.5 to 92.5. PQ-7's score (50.0) comes from a pattern that looks like straight-lining, so treat it with care. Across all six rows the mean is 57.1 (SD 23.4).

SUS per-item means, independent rows (scored 0 to 4, higher is better):

| Item | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mean | 2.5 | 2.2 | 2.8 | 2.2 | 3.5 | 3.0 | 2.8 | 2.8 | 2.5 | 2.2 |

## Open-answer themes

| Theme | Example quote | Participants | Linked finding ID |
| ----- | ------------- | ------------ | ----------------- |
| No explanation of what the app is for | PT-1: "no context for any background". PT-2: "I did not know what the app really was about." | PT-1, PT-2 | F1 |
| Onboarding too fast, cannot revisit | PQ-3: "clicking next immediately went from the tutorial screen to the main app" | PQ-3, PT3d | F13 |
| Reporting is confusing | PQ-4: the flag icon was taken for a bookmark | PQ-4, PT3d, PT4d | F10 |
| Radar and position unclear | PT4d: guessed the wrong spot after reading north east | PT-2, PT3d, PT4d, PQ-5 | F6 |
| Safety, anonymity and strangers | PQ-5: "not comfortable... sharing my location or turning on my microphone" | PT-8, PT-1, PT-2, PT3d, PT4d, PQ-4, PQ-5 | F7 |
| Prefer a tap to speaking with strangers | PT3d: quick replies with strangers, voice only with familiar people | PT-8, PT-2, PT3d, PT4d | supports the one-tap design |
| Too busy, too many buttons | PT-8: "there's too many buttons" | PT-8 | F3 |
| Positive reaction to the badge and app | PT4d: surprised and happy at the badge; PQ-3: "The app seems fun to use"; PQ-7: "Nothing really confused me" | PT4d, PQ-3, PQ-7 | strength |
