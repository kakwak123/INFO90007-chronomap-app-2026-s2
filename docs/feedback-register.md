# Who said what about ChronoMap 3D

Every piece of feedback the app has received, by person, with where it is recorded. Compiled
1 Nov 2026 from the A2 marking, the A3 draft review, the 29 October team call, and the evaluation
sessions now recorded in the Overleaf report.

Three groups: the teaching team, our own team, and the people we tested on.

---

## 1. Cherie Sew, subject tutor and A2 marker

**16 / 25 (64%).** Full record in [`A2-FEEDBACK.md`](A2-FEEDBACK.md). She also runs every tutorial
and is the person who will most likely mark A3.

| Criterion | Score |
| --- | --- |
| Problem and proposed solution | 4 / 5 |
| Developing user interfaces | **2.5 / 5** |
| Use of community heuristics | 3 / 5 |
| Overall quality of the report | 4 / 5 |
| Complexity and creativity | **2.5 / 5** |

Her ten inline comments reduce to this, in rough order of how often she repeated it:

1. **Features are argued in prose with no screen to show them.** Said three separate times. "There
   is a lot of proposal of features and yet no mid-fidelity wireframes to actually show it."
   "All of these are great in theory but there are almost no wireframe interfaces to speak of."
2. **The host is undefined.** "Who is the host? Is this person just there monitoring the entire
   session?"
3. **Collaboration is thin.** "What about more collaborative features? Is it just taking photos to
   form a 3D reconstruction?"
4. **Session governance is unspecified.** Which locations, who decides, is there a time limit, what
   happens if two groups capture the same place at once.
5. **The premise is not evidenced.** "Why is depth important to a tourist?" and "Or they could also
   just use a 3D camera?" Both still unanswered in the current draft.
6. **Use references.** "Try to use references to motivate/proof the statements you're actually
   making."
7. **The design space is not justified.** This is the deduction on criterion 1, and the single
   most expensive comment in the set.
8. **The running example keeps changing.** Hospital precinct in the introduction, Eiffel Tower in
   the storyboard, local history in the heuristics table.
9. **Profiles must exist as screens.** "So there's a profile for users? The final iteration should
   contain these, especially if it's outlined as important features of the product."

---

## 2. Dhiraj Prakash Sajnani, team

Two separate contributions: an eight-page structured review of the A3 draft, and design proposals
in the 29 October call.

### The draft review

He predicted the mark both ways: **about 19.5/50 (39%) as it stood**, and **about 30.5/50 (61%)
if every placeholder were completed as described**.

His verdict: "the design work and evaluation protocol are much stronger than A2. The report still
repeats A2's two main problems, design decisions argued without literature, and community
heuristics claimed but not shown in the screens."

**The sharpest single point, and the one most worth acting on:**

> Nowhere does the report say what the evaluation set out to learn. The tasks and items imply four
> questions; the report never states them.

He supplied the four:

| | Question | Measured by |
| --- | --- | --- |
| EQ1 | Can people act on coordination? | T2, T3, C4 |
| EQ2 | (stated in his table, tied to the task set) | |
| EQ3 | Do they trust safety and privacy? | T5, C5 |
| EQ4 | Do they understand the purpose and want to return? | Warm-up, C1, C6 |

**Instrument faults he found:**

- **T2 is leading.** "Without speaking" gives away the success criterion. Remove it, or stop
  treating microphone avoidance as a finding.
- **T3 shows the answer.** The screen prints "south-west thin" and the callout repeats it. Hide
  the label for T3, or report T3 as testing the label rather than the radar.
- **C2, C3, C6 measure stated intention, not behaviour.** Say so plainly and report the spread,
  not only means.
- **The remote questionnaire group has nobody confirming task completion.** Keep it out of the
  table that holds observed data.

**Other concrete items:**

- Two citations do not support what they are cited for (the SUS average, and the severity scale).
  Cite Sauro 2011 or Lewis 2018 for the SUS benchmark of 68, and Nielsen's severity-ratings
  article rather than the heuristics page.
- Cite published versions of PanoSwarm (IUI 2016) and Bortolon (J Real-Time Image Processing 2021)
  rather than the arXiv preprints.
- The Mapillary "no longer available" claim is uncited.
- Passages are written in the past tense as if the study had already happened, when at review time
  only the pilot had run.
- Several sentences address the marker directly. Cut them.
- **Word count is the only hard requirement at real risk.** About 5,010 with tables and captions
  against a 5,000 limit, with placeholders still to fill.
- Add a compact table with one row per feature: community heuristic, 3C dimension, screen number,
  evaluation evidence. "About 150 words, and it serves three criteria at once."

### In the call

- **Proposed the host and participant split**, agreed by Yong and Ashlesha: two entry points, each
  assuming the other party acts in the background, rejoining at the shared outcome screens.
- **Raised the voice and camera conflict**: "If I'm on the camera screen, do you expect me to close
  it and then join the voice call? Isn't that inconvenient?" Suggested an overlay, or a direction
  arrow. Parked by John for later.

---

## 3. Yong En Foo, team

Full record in [`evaluation/prototype-readiness.md`](evaluation/prototype-readiness.md). He
demonstrated the problems live rather than describing them.

**His principle, said several ways:**

> "You join as not a host, but then the screen takes you and shows you that you're a host. That is
> not a valid design flaw that we can critique. That's just something that we didn't do correctly
> in the Figma."

> "Content errors can't be a design fix."

> "We need to give them the best chance of succeeding at the tasks as they are."

**Five blockers he found by clicking through:**

| | Problem |
| --- | --- |
| B1 | The clock tower is not in the discovery screen, so T1 has nothing to find. "That's not apparent on our join screens at all." |
| B2 | Host and participant screens are mixed. "I tested, and there's no way" to reach the non-host version. The participant screen shows "start capture, needs 4 on site", a host control. |
| B3 | Greyed-out controls in the join flow. Telling a participant to imagine a button works costs the data from that moment. |
| B4 | No defined start screen per task, so a failed T1 cascades into every task after it. |
| B5 | T3 has no defined success. He asked three separate times in one call and it was never resolved. |

---

## 4. Ashlesha Chetan Patil, team

Agreed with the host and participant split. Took recruitment for three to five participants. No
separate design critique recorded.

## 5. John Kim, team

Raised that the report must say how the app differs from what already exists. That is now written
as the comparison table and prior-art paragraph in Discussion 4.3.

---

## 6. The people we tested on

Ten participants, five per technique, recorded in the Overleaf report.

### PT-8, the first session (29 Oct, 3 min 40 s, recorded and transcribed)

- **"Station" collided with railway station names.** Asked which station they had been given, they
  named a landmark instead of a position. Serious enough to end the task. Led to the rename to
  "position" across the prototype and all packs.
- **"Too many buttons."** Raised unprompted four times in a single short session, and was their
  closing answer when asked what they would change.
- Reluctance to join strangers.
- For an already captured landmark, sharing a model and requesting a new capture look alike.

### PT-1 and PT-2 (30 Oct, think-aloud)

- **No plain-language explanation of what the app is for**, or why to take part, before the first
  task. Severity 3.
- **The one-tap replies did nothing when tapped** (PT-1). A prototype fault, severity 3.
- **Task 3 wording was unclear** so they could not tell what to do. A test fault, not a design
  fault.
- **Sharing was unclear**: who receives it, and where the exact-location control is. Severity 3.
- **Radar dots, colours and position wording make no sense without context.** Still open.
- Reluctance to join strangers: safety worries and no clear benefit.

### PT3 and PT4

Mentioned only once in the report, agreeing with PT-2 that quick replies were wanted: "something
that I can press that will be better."

### PQ-1 to PQ-5 (31 Oct, questionnaire)

Three students, one working professional, one scientist. Four on phone, one on laptop. Their item
responses are not yet summarised in this register.

---

## Consolidated findings as they stand in the report

| ID | Screens | Problem | From | Sev | Decision |
| --- | --- | --- | --- | --- | --- |
| F1 | 01, 02 | No plain-language purpose before the first task | PT-1, PT-2 | 3 | Fix in v2 |
| F2 | 14, 15 | One-tap replies did nothing | PT-1 | 3 | Fix, wired in v2 |
| F3 | 10, 11, 14 | Too many controls on capture and briefing | Pilot | 3 | Fixed |
| F4 | 14, 15 | Task 3 wording unclear | PT-1, PT-2 | 2 | Task rewritten |
| F5 | 18, 20 | Sharing unclear, location control not findable | PT-1, PT-2 | 3 | Fix, retest needed |
| F6 | 11, 14, 15 | Radar makes no sense without context | PT-1, PT-2 | 2 | **Open** |
| F7 | 07, 08 | Reluctance to join strangers | Pilot, PT-1, PT-2 | 2 | Defer, concept risk |
| F8 | 10, 11 | "Station" collided with a station name | Pilot | 3 | Fixed, renamed |
| F9 | 22 | Share and request-capture look alike | Pilot | 2 | Defer |

---

## Three inconsistencies worth fixing before submission

These come out of assembling the above, and none is anyone's feedback as such.

1. **The pilot is counted twice over.** Methods 2.4 says "Pilot data is reported separately and is
   not counted toward the ten participants." The participants table lists PT-8 as one of the five
   think-aloud participants, and PT-8 is the pilot. Either it counts or it does not; at the moment
   the report says both.

2. **Participant codes are inconsistent.** PT-1, PT-2 and PT-8 are hyphenated; PT3 and PT4 are
   not. A marker reading the findings table will wonder whether they are the same scheme.

3. **PT3 and PT4 have no recorded data at all**, not even a date, yet they count towards the ten.
   Two of five think-aloud participants with every demographic field reading "Not recorded" is
   visible, and the draft review already warned that methods text written in advance has to match
   what actually happened.
