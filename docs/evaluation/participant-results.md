# Participant results

Per-participant record of both halves of the evaluation, so the report can cite what somebody
actually did or answered rather than a mean.

Transcribed from `ChronoMap 3D - questionnaire responses` in Drive (six rows, A1:AB7), read
1 Nov 2026. **Every score on this page is computed from the raw item responses, not copied**,
by `scripts/gen-participant-results.py`. Regenerate rather than hand-editing.

Counting decisions and think-aloud participants live in [`participants.md`](participants.md).
All six responses are counted, per the 1 Nov decision.

**Codes only, no names.** Backgrounds are generalised.

What to change in Figma as a result, screen by screen with the evidence attached:
[`v2-changes.md`](v2-changes.md).

---

# Think-aloud (observation)

Five sessions. Findings are the IDs in the consolidated table in report Section 3.4.

| Code | Age | Background | Device | Date | Duration | Findings contributed |
| --- | --- | --- | --- | --- | --- | --- |
| PT-1 | 18-24 | Commerce student, marketing | Laptop | 30 Oct | 8:06 | F1, F2, F4, F5, F6, F7 |
| PT-2 | 18-24 | Science student | [confirm] | 30 Oct | 12:02 | F1, F4, F5, F6, F7 |
| PT-3 | not recorded | not recorded | not recorded | [awaiting notes] | not recorded | Quick replies, with PT-2 and PT-4 |
| PT-4 | not recorded | not recorded | not recorded | [awaiting notes] | not recorded | Quick replies, with PT-2 and PT-3 |
| PT-5 | 25-34 | Engineering student | Laptop | 29 Oct | 3:40 | F3, F7, F8, F9 |

**PT-1.** Longest of the recorded sessions. Contributed to six of the nine findings, more than any other participant.

**PT-2.** Asked for one-tap replies rather than speaking: wanted "something that I can press that will be better".

**PT-3.** No demographic data recorded. Reported from the moderator's written notes, which are not in the repository.

**PT-4.** No demographic data recorded, as above.

**PT-5.** Ran first, on an earlier prototype and the first task sheet. A partial run: reached T1 and T2 only, with T2 not completed. Found the "station" collision that stopped a task outright (F8).

### What this table shows about the observation half

Two of the five sessions, PT-3 and PT-4, have no recorded age, background, device or duration.
Two more, PT-1 and PT-5, ran on a laptop rather than a phone, so at least two of five sessions
were not conducted in the posture the design assumes. Both facts belong in the limitations
paragraph rather than being left for a marker to notice in the participants table.

PT-5 is the shortest session at 3:40 and reached only two tasks, yet produced four findings
including the one that stopped a task outright. Session length and usefulness are not the same
thing, which is worth a sentence in the report.

---

# Questionnaire (querying)

## Summary

| Code | SUS | Device | Minutes | Failed a task | Age | Background | Used 3D apps | Caveat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PQ-1 | **35** | Phone | 5 | Task 3 | 18-24 | Student, also a student experience manager | No | entered from a debrief |
| PQ-2 | **42.5** | Phone | 6 | None | 18-24 | Scientist | No | entered from a debrief |
| PQ-3 | **80** | Laptop | 3 | None | 25-34 | Student | No |  |
| PQ-4 | **92.5** | Phone | 7 | None | 25-34 | Student | No |  |
| PQ-5 | **42.5** | Phone | 16 | None | 18-24 | Student | No |  |
| PQ-7 | **50** | Phone | 10 | None | 18-24 | Student | Yes | straight-line answers |

| Set | Mean SUS |
| --- | --- |
| **All six, the figure the report carries** | **57.1** |
| The four not entered from debriefs | 66.2 |

Standard deviation across all six is **23.4**, range **35 to 92.5**. The published average is 68.

The spread matters more than the mean. On the same build and the same tasks, scores run from
the mid thirties to the low nineties. With six responses a mean is a weak statistic; the range
is the finding, and the report should lead with it.

Counting all six lowers the mean rather than raising it, because PQ-1 and PQ-2 are two of the
three lowest scores. Including them is the conservative choice.

---

## SUS item responses

1 = strongly disagree, 5 = strongly agree. Items marked (rev) are reverse-scored, so on those
a *lower* number is the better result.

| Item | PQ-1 | PQ-2 | PQ-3 | PQ-4 | PQ-5 | PQ-7 |
| --- | --- | --- | --- | --- | --- | --- |
| 1. I would like to use this system frequently | 2 | 2 | 3 | 5 | 2 | 4 |
| 2. I found the system unnecessarily complex (rev) | 4 | 3 | 1 | 2 | 4 | 4 |
| 3. I thought the system was easy to use | 2 | 2 | 4 | 4 | 2 | 5 |
| 4. I would need the support of a technical person (rev) | 3 | 3 | 1 | 1 | 4 | 5 |
| 5. The various functions were well integrated | 2 | 3 | 4 | 5 | 4 | 5 |
| 6. There was too much inconsistency (rev) | 4 | 3 | 1 | 1 | 1 | 5 |
| 7. Most people would learn to use this very quickly | 3 | 4 | 3 | 5 | 2 | 5 |
| 8. I found the system very cumbersome (rev) | 2 | 3 | 1 | 1 | 2 | 5 |
| 9. I felt very confident using the system | 3 | 2 | 3 | 4 | 2 | 5 |
| 10. I needed to learn a lot before getting going (rev) | 5 | 4 | 1 | 1 | 4 | 5 |
| **SUS score** | **35** | **42.5** | **80** | **92.5** | **42.5** | **50** |

### Weakest items across all six

| Item | Mean contribution (0-4) |
| --- | --- |
| 10. I needed to learn a lot before getting going (rev) | 1.67 |
| 1. I would like to use this system frequently | 2.00 |
| 2. I found the system unnecessarily complex (rev) | 2.00 |
| 3. I thought the system was easy to use | 2.17 |

The weakest are learnability rather than capability: complexity, needing a technical person,
and having a lot to learn before getting going. That matches what the think-aloud sessions
found at the opening screens (F1) and at the radar (F6), so the two methods agree.

---

## Custom items

| Item | PQ-1 | PQ-2 | PQ-3 | PQ-4 | PQ-5 | PQ-7 | Mean |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C1. Understood what ChronoMap 3D is for before doing anything | 1 | 2 | 3 | 5 | 2 | 5 | 3.00 |
| C2. Would join a capture session with people I do not know | 2 | 2 | 3 | 5 | 2 | 5 | 3.17 |
| C3. Would be comfortable joining the voice channel | 2 | 2 | 2 | 3 | 2 | 5 | 2.67 |
| C4. The coverage radar made it clear where to stand | 2 | 3 | 4 | 3 | 4 | 5 | 3.50 |
| C5. Trusted that faces and exact locations would be protected | 3 | 1 | 2 | 3 | 2 | 5 | 2.67 |
| C6. Receiving the model and a badge would make me take part again | 2 | 2 | 4 | 5 | 4 | 4 | 3.50 |

Lowest: **C3** at 2.67, and **C5** at 2.67.
Highest: **C6** at 3.50.

The pattern is consistent and uncomfortable for the concept: the reward is attractive, the
social and privacy exposure is not. These items measure stated intention rather than
behaviour, and the report should say so rather than treating them as evidence of what people
would do.

---

## Open answers

### PQ-1

**Most confusing moment.** The whole start: "no context for any background. I was asked to do something." Sharpest points: task 3, "I do not understand this instruction for the context", and task 4, "share the model to who, when and how?" (screens 18 and 20).

**What would stop you using this at a real landmark.** No reason to be there: "why would I join it when it is not even paid?" and "I do not know what is the benefit for me".

### PQ-2

**Most confusing moment.** The position and radar screens: "several dots", "the yellow thing", "you are like the northeast", but "I had no context" (screens 11 and 14).

**What would stop you using this at a real landmark.** Safety and strangers: "I do not like people", "some safety hazards", and voice could cause "misunderstandings".

### PQ-3

**Most confusing moment.** Clicking next went straight from the tutorial screen to the main app. Did not get time to process whether there were more pages to the tutorial.

**What would stop you using this at a real landmark.** Nothing. The app seems fun to use.

### PQ-4

**Most confusing moment.** Reporting the security risk was the most confusing: assumed the flag icon was for bookmarking progress or retracing steps for editing. Other confusions came from forgetting the starting instructions to move on when stuck, and that the interface needs scrolling.

**What would stop you using this at a real landmark.** Would be a regular user if reassured that security risks are minimal: that identities are completely secure and not just nominally unidentifiable with only their eyes covered, and that people cannot be tracked on a voice call. The interface being slightly unintuitive at first would not be a deal-breaker.

### PQ-5

**Most confusing moment.** Joining a session, how a session even begins, and understanding where I was based on the university clock tower rally interface.

**What would stop you using this at a real landmark.** Would not be comfortable either sharing my location or turning on my microphone and sharing it to strangers.

### PQ-7

**Most confusing moment.** Nothing really confused me.

**What would stop you using this at a real landmark.** Did not find anything that would stop me using this.

### Themes

**Confusion is about context, not controls.** Nobody said a button was hard to press. They
said they did not know what the app was for, where they were in the session, or what the radar
meant. Three of the six name the opening or the rally screens specifically.

**What would stop them is exposure.** Location sharing, the microphone, and being among
strangers. One respondent would use it if identities were genuinely protected rather than
nominally so, which is a design requirement, not a reassurance problem.

---

## Two caveats that must travel with these numbers

**PQ-1 and PQ-2 were entered from spoken debriefs**, not completed by the respondents, which
is why their answers carry quoted speech. A questionnaire mediated by a team member is a
different instrument from one filled in alone, and the moderator's phrasing can shape the
answer. If the speakers were PT-1 and PT-2, those two people sit in both technique groups.

**PQ-7 straight-lined.** Read down its column: 4 or 5 on every item, agreeing that the system
is both easy to use (5) and cumbersome (5), and that they felt confident (5) while needing to
learn a lot (5). Every reverse-scored item agrees with its opposite, which is an answering
pattern rather than a judgement. Without PQ-7 the other five average 58.5.

Both are disclosed in the report rather than resolved, because resolving either needs
information only the team has.

