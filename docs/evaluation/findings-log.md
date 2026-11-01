# Evaluation findings log

One row per distinct problem. The same problem seen by several participants is merged into one row
with their codes listed. Filled 1 Nov 2026 from the session records and the questionnaire data.
This table becomes report §3.4.4 and §3.5.

Severity (Nielsen): 0 not a problem, 1 cosmetic, 2 minor, 3 major (important to fix), 4 catastrophic (blocks the task).

Decision: **fix** (made in version 2), **defer** (valid, not done, say why), **reject** (not acted on, say why).

Sources, and cite these rather than retyping numbers:

- Finding IDs, screens and severities: [`../feedback-register.md`](../feedback-register.md)
- Per-participant scores and open answers: [`participant-results.md`](participant-results.md)
- Verbatim quotes grouped by screen: [`v2-changes.md`](v2-changes.md)
- The v2 change actually specified per screen: [`v2-screen-spec.md`](v2-screen-spec.md)
- Which tasks were completable in v1 at all: [`task-completability.md`](task-completability.md)

**PT-5 is the participant recorded as "Pilot" in the feedback register.** The two codes are the
same person, counted as a participant on 1 Nov. See [`participants.md`](participants.md).

---

## Findings

| ID  | Problem (one sentence, specific) | Screen # | Task | Evidence (quote or what was observed) | Participants (codes) | Severity | Heuristic (Nielsen # / community card) | Decision and reason | Change made in v2 | Before/after figure |
| --- | -------------------------------- | -------- | ---- | ------------------------------------- | -------------------- | -------- | -------------------------------------- | ------------------- | ----------------- | ------------------- |
| F1  | No plain-language statement of what ChronoMap 3D is for before the first task begins | 01, 02 | T1 | PQ-1: "no context for any background. I was asked to do something." PQ-2: "I had no context". C1 scored 1 by PQ-1 and 2 by PQ-2 and PQ-5. PQ-3 clicked through onboarding before realising it had ended | PT-1, PT-2, PQ-1, PQ-2, PQ-3, PQ-5 | **3 major** | H10 help and documentation; H1 visibility of system status | **Fix.** Four participants, and the lowest SUS scorer (35) and the highest (92.5) differ most on C1, so purpose is the highest-leverage change in the set | Purpose line on `01`, onboarding progress indicator on `02`, payoff stated before the first task. Work order item 2 | `01` v1 `24:29` against `01 v2` `429:863`; `02` v1 `24:59` against `02 v2` `429:889` |
| F2  | The one-tap reply chips did nothing when tapped, so there was no way to answer the host | 14, 15 | T3 | PT-1 tapped a reply chip and nothing happened. PT-2, PT-3 and PT-4 separately asked for quick replies, PT-2: "something that I can press that will be better". PT-5, unprompted: "there's a button that I can press that will be better" | PT-1 (sole observer), PT-2, PT-3, PT-4, PT-5 | **3 major** | H1 visibility of system status | **Fix**, and the wiring half is an instrument fault, not a design finding. Keep the two apart in §3.5 | Reply chips wired on `14` and `15`, one primary action per screen. Work order item 3 | `14` v1 `64:587` against `14 v2` `429:968`. **No v2 frame for `15`** |
| F3  | Too many competing controls on the capture and briefing screens | 10, 11, 14 | T1, T2 | PT-5 said "too many buttons" **four separate times, unprompted**, and it was their answer when asked what they would change: "the screen overall is too busy... I would make it more simplified" | PT-5 | **3 major** | H8 aesthetic and minimalist design | **Fix.** One participant, but repeated four times and volunteered as the single change they wanted | One primary action per screen, the rest demoted. Covered by work order item 3 and the "one accent, one meaning, one place" rule in the screen spec | `14` only, v1 `64:587` against `14 v2` `429:968`. **No v2 frame for `10` or `11`** |
| F4  | Task 3's wording did not make clear what the participant was being asked to do | 14, 15 | T3 | PQ-1 failed task 3 and wrote "I do not understand this instruction for the context". PT-1 and PT-2 both needed the task restated | PT-1, PT-2, PQ-1 | **2 minor** | Instrument fault, not a Nielsen heuristic violation | **Fix to the instrument.** The task sheet was rewritten; this teaches nothing about the design and belongs in the limitations | Task 3 reworded on the task sheet so it no longer states its own success criterion. See [`prototype-readiness.md`](prototype-readiness.md) B5 | None, no screen changed |
| F5  | Sharing a model is unclear and the location control cannot be found, so task 4 cannot be completed | 18, 20 | T4 | PQ-1: "share the model to who, when and how?" Task 4 was **impossible to complete in v1**, see `task-completability.md`. C5 (trust that faces and locations are protected) is tied lowest at 2.67 | PT-1, PT-2, PQ-1 | **3 major** | H3 user control and freedom; H6 recognition rather than recall | **Fix**, and retest. Highest weight of evidence in the set: a severity 3 finding on top of a task that could not be done at all | Location toggle added, completion state shown, recipient named on `18` and `20`. Work order item 1 | **No v2 frame for either.** v1 is `18` `64:841` and `20` `274:817` |
| F6  | The coverage radar means nothing without context, so participants cannot tell where to stand | 11, 14, 15 | T2, T3 | PQ-2 described the radar accurately and still did not understand it: "several dots", "the yellow thing", "you are like the northeast", but "I had no context". PT-5 asked aloud what the position button meant | PT-1, PT-2, PQ-2, PT-5 | **2 minor** | H2 match between the system and the real world; H10 help and documentation | **Fix**, reversing the Open status in the earlier register. Cheap to close and countable in §3.5 | Legend added under the radar on `11` (You / Covered / Needs photos), and the participant's own marker changed to the blue location dot, the map-app convention. Work order item 5 | **Fixed in place on the v1 frame**, legend at `424:869` inside `11` `28:662`. No before state outside version history |
| F7  | Participants are reluctant to join a capture session with strangers, or to open the microphone to them | 07, 08 | T1 | C2 "would join with people I do not know" scored 2 by three of six. C3 voice comfort is tied lowest at 2.67. PQ-2: "I do not like people", "some safety hazards", voice could cause "misunderstandings". PQ-5 would not share "my location or turning on my microphone... to strangers". PT-5 would join "capturing photos with... friends", not strangers | PT-5, PT-1, PT-2, PQ-2, PQ-5 | **2 minor** | Community card: privacy, safety and social exposure. Not a usability defect | **Defer.** This is a concept risk, not an interface problem. The whole premise rests on strangers cooperating, and no screen change removes that. Report it as a finding against the concept | Partial only, and not a fix for the finding: the anonymisation standard is now stated concretely on the rules screen and `20`, answering the specific bar PQ-4 named. Work order item 4 | **Fixed in place on the v1 frame**, copy at `28:363` inside `07` `28:327`. No before state outside version history |
| F8  | "Station" named both the assigned shooting position and a landmark called a station, on adjacent screens | 10, 11 | T2 | PT-5, asked which station they had been assigned, named a landmark: "there are for this street station... [Flinders] street station is where I am", then "I can't continue... what is this anyway". **Task 2 was not completed** | PT-5 | **3 major** | H2 match between the system and the real world; H4 consistency and standards | **Fixed before any later session ran.** Found on 29 Oct and renamed the same week, which is why no other participant hit it | "Station" renamed to "position" throughout Figma, the tester pack, the assessor pack and the study kit | State that the rename predates the v2 pass. v1 is `10` `28:563` and `11` `28:662` |
| F9  | On an already-captured landmark, sharing the existing model and requesting a new capture look alike | 22 | T1 | PT-5 reasoned out loud and slowly: "Request and they share this model. No, that's because it's been done already... that doesn't make sense because... I need to capture it right capture again" | PT-5 | **2 minor** | H4 consistency and standards | **Fix**, upgraded from the earlier Defer. One participant and off the task path, but it closes a finding cheaply, so it is the last item inside Group 1 of the screen spec | Share made the primary action and Request a capture demoted to secondary on `22`. Work order item 10 | **No v2 frame.** v1 is `22` `133:675` |

### How the findings split for §3.5

The rubric credits changes the evaluation produced, so these three groups have to stay apart:

| Group | Findings | What it is |
| --- | --- | --- |
| Design findings fixed in v2 | F1, F3, F5, F6, F9 | Five findings, five screens changed, countable |
| Instrument faults | F2 (the wiring half), F4 | A dead link and a badly worded task teach nothing about the design. Limitations, not §3.5 |
| Concept risk, deferred | F7 | Valid, repeated across both methods, and not fixable by a screen change |

F8 sits outside all three: it was found and fixed before the main round of sessions, so it is
evidence that the pilot did its job rather than a v2 change.

---

## Questionnaire tallies

All six responses. Items are the raw 1 to 5 answers; SUS is the standard score. There is no PQ-6,
and PQ3 is missing its hyphen in the source data, written PQ-3 here.

| Participant | SUS score (0-100) | C1 purpose | C2 join strangers | C3 voice comfort | C4 radar clarity | C5 privacy trust | C6 motivation | Device | Tasks not completed |
| ----------- | ----------------- | ---------- | ----------------- | ---------------- | ---------------- | ---------------- | ------------- | ------ | ------------------- |
| PQ-1        | 35                | 1          | 2                 | 2                | 2                | 3                | 2             | Phone  | Task 3              |
| PQ-2        | 42.5              | 2          | 2                 | 2                | 3                | 1                | 2             | Phone  | None                |
| PQ-3        | 80                | 3          | 3                 | 2                | 4                | 2                | 4             | Laptop | None                |
| PQ-4        | 92.5              | 5          | 5                 | 3                | 3                | 3                | 5             | Phone  | None                |
| PQ-5        | 42.5              | 2          | 2                 | 2                | 4                | 2                | 4             | Phone  | None                |
| PQ-7        | 50                | 5          | 5                 | 5                | 5                | 5                | 4             | Phone  | None                |
| **Mean**    | **57.1**          | **3.00**   | **3.17**          | **2.67**         | **3.50**         | **2.67**         | **3.50**      | 5 phone, 1 laptop | 1 of 6 failed a task |

Read the **spread** before the mean: **35 to 92.5 on the same build**, standard deviation 23.4.
57.1 sits well below the usual 68 benchmark, but two of six respondents found the prototype
genuinely straightforward. Lowest custom items are C3 voice comfort and C5 privacy trust, both
2.67; highest are C4 and C6 at 3.50. The reward is attractive and the social and privacy exposure
is not, which is the same shape as F7.

Two caveats travel with every number above, and both belong in the limitations paragraph:
**PQ-1 and PQ-2 were entered from spoken debriefs** rather than completed by the respondent, and
**PQ-7 straight-lined**, agreeing that the system is both easy to use (5) and cumbersome (5).
Without PQ-7 the other five average 58.5; without the two debriefs the remaining four average 66.2.

SUS per-item means, raw 1 to 5 scale:

| Item | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mean | 3.00 | 3.00 | 3.17 | 2.83 | 3.83 | 2.50 | 3.67 | 2.33 | 3.17 | 3.33 |

Odd items are positively worded and even items negatively worded, so a low mean on item 5 and a
high mean on item 10 both mean the same thing. Converted to SUS contributions out of 4, the four
weakest are **item 10** at 1.67 (needed to learn a lot), **item 1** at 2.00 (would use it
frequently), **item 2** at 2.00 (unnecessarily complex) and **item 3** at 2.17 (easy to use).

The weak items are **learnability, not capability**: complexity, needing a technical person, and
having a lot to learn before getting going. That is the same thing the think-aloud sessions found
at the opening screens (F1) and at the radar (F6), so the two techniques agree.

---

## Open-answer themes

| Theme | Example quote | Participants | Linked finding ID |
| ----- | ------------- | ------------ | ----------------- |
| No context for what the app is or why you are here | "no context for any background. I was asked to do something." | PQ-1, PQ-2, PQ-5 | F1 |
| Onboarding ends before you realise it has | "Clicking next went straight from the tutorial screen to the main app. Did not get time to process whether there were more pages" | PQ-3 | F1 |
| The radar and position screens are described accurately and still not understood | "several dots", "the yellow thing", "you are like the northeast", but "I had no context" | PQ-2 | F6 |
| Sharing is unclear: who receives it, and when | "share the model to who, when and how?" | PQ-1, PT-1, PT-2 | F5 |
| Privacy must be real, not nominal | would use it if "identities are completely secure and not just nominally unidentifiable with only their eyes covered, and that people cannot be tracked on a voice call" | PQ-4 | F5, F7 |
| Exposure to strangers, location and microphone is the thing that would stop them | "I do not like people", "some safety hazards"; "would not be comfortable either sharing my location or turning on my microphone and sharing it to strangers" | PQ-2, PQ-5, PT-5 | F7 |
| No personal reason to take part | "why would I join it when it is not even paid?", "I do not know what is the benefit for me" | PQ-1 | F1 |
| The flag icon reads as a bookmark, not a report | assumed the flag icon "was for bookmarking progress or retracing steps for editing" | PQ-4 | New, see work order item 7 |
| The interface needs scrolling and does not say so | confusion came partly from "the interface needs scrolling" | PQ-4 | New, see work order item 9 |
| Too many controls competing on one screen | "the screen overall is too busy... I would make it more simplified" | PT-5 | F3 |
| A tap is wanted instead of speaking aloud in public | "voice channel makes it a lot easier... but in public I think maybe there's a button that I can press that will be better" | PT-5, PT-2, PT-3, PT-4 | F2 |
| Nothing confused them at all | "Nothing. The app seems fun to use."; "Nothing really confused me." | PQ-3, PQ-7 | None, and this is why the spread matters |

**Confusion is about context, not controls.** Nobody said a button was hard to press. They said
they did not know what the app was for, where they were in the session, or what the radar meant.
Three of the six name the opening or the rally screens specifically.

The last two rows in the table are the ones to resist editing out. The flag icon and the scroll
affordance both came from **PQ-4, the highest scorer at 92.5**, which is a useful corrective to
reading only the low scorers. And two of six respondents reported no confusion at all, which is
the other half of the 35-to-92.5 spread.

---

## Task completion

Recorded 1 Nov 2026 from the moderator's record. Full table in
[`participant-results.md`](participant-results.md).

| | |
| --- | --- |
| Tasks attempted | 25 (five participants, five tasks) |
| Completed | **25 of 25, 100 per cent** |
| Moderator assists | **0** |
| Errors and times | not recorded |

**This cuts against every finding in the table above, and the report has to handle that rather
than print both numbers and hope.** A 100 per cent unaided completion rate sitting beside nine
usability findings and a mean SUS of 57.1 is the first thing a marker will query.

The defensible reading, and the one to write: **completion measures whether a path exists, not
whether it was obvious.** Participants reached the end of every task and said at length how hard
it was to work out how. Severity in the findings table is scored on that difficulty, which is why
F1, F3 and F5 are severity 3 on tasks that were all completed. SUS and the custom items measure
the experience of getting there, and they are where the problem shows: the four weakest SUS items
are all learnability, not capability.

Two records in the repository disagree with the completion table, and both are stated in the
override note in `participant-results.md` rather than quietly dropped: **PT-5's transcript at
2:26** has them abandoning task 2, and **PQ-1's questionnaire** answers "Task 3" to the
could-not-complete field. Both belong in the limitations paragraph.

**F8 needs a decision before submission.** Its evidence column still reads "task 2 was not
completed", citing PT-5. If PT-5 completed T2, that sentence changes and F8's severity 3 rests on
the word collision and the stall instead. The finding itself survives either way; the wording
does not.

## What is still missing from this log

1. **Errors and time on task.** Completion and assists are recorded; per-task error counts and
   durations are not, so the quantitative half of the observation study is a completion rate and
   nothing else.
2. **Verbatim evidence for PT-1 and PT-2.** PT-1 contributed to six of the nine findings and is
   the sole observer of F2, and neither session's recording or transcript is in this repository
   or in Drive. PT-3 and PT-4's moderator notes are likewise missing, and although their detail
   was supplied on 1 Nov, their age and duration are recollections and neither session has a
   date.
3. **A dated record behind the completion table.** It was given on 1 Nov from the moderator's
   record, and that record is not in the repository either.

## State of the v2 frames in Figma, checked 1 Nov 2026

Read from file `nGpbcLweFWROFc3oaonWrO`, page `0:1`. **Only three v2 frames exist**, against the
ten screens `v2-screen-spec.md` names:

| v2 frame | Node | Covers |
| --- | --- | --- |
| `01 v2 Onboarding: purpose first` | `429:863` | F1 |
| `02 v2 Home: what you get` | `429:889` | F1 |
| `14 v2 Filming: replies and legend` | `429:968` | F2, F3 |

Two consequences for Section 3.5, which is marked on showing before and after:

1. **F5, F7 and F9 have no "after" frame at all.** Screens 15, 18, 20 and 22 are unchanged from
   v1. The changes are specified in `v2-screen-spec.md` and not yet executed.
2. **F6 and F7's partial fix were applied in place on the v1 frames, so there is no "before".**
   Screen `11` `28:662` already carries the legend at `424:869`, and screen `07` `28:363` already
   carries the new anonymisation copy. The v1 state of both exists only in Figma version history.
   Either pull it from there or present those two as specification-and-result rather than
   before-and-after.

### A contradiction the partial fix introduced

Screen `07` `28:363` now reads "Faces and licence plates are **removed from the photographs
before the model is built, not blurred afterwards**". Screen `22` `133:714` still reads "Faces and
licence plates are **blurred**". The two screens make incompatible privacy claims, and this is the
exact standard PQ-4 named as their condition for using the app, so the inconsistency sits on the
evidence for F7. Work order item 4 named the rules screen and `20` and missed `22`. Fix `22` or
drop the claim from it.

The figure column above gives node ids and capture instructions rather than figure numbers. Fill
the numbers in once the frames are exported, so the numbering matches the report rather than this
file.
