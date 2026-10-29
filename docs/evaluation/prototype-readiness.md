# Prototype readiness: what must be fixed before any session runs

Raised by **Yong En** in the team call, 29 October 2026, and confirmed by the A3 draft review the
same day. These are not findings and they are not improvements to write up later. They are reasons
a session would produce unusable data.

## The principle

Yong En's central point, said several ways across the call:

> "You join as not a host, but then the screen takes you and shows you that you're a host. That is
> not a valid design flaw that we can critique. That's just something that we didn't do correctly
> in the Figma."

> "Content errors can't be a design fix."

> "The logic of how these screens are sequenced together is already not sound."

The distinction matters for marks. A participant who fails a task because the prototype is wired
wrong gives us nothing we can report. The handout asks for improvements made in response to what
the evaluation taught us; a wiring mistake teaches us nothing about the design.

His summary of the goal:

> "We need to give them the best chance of succeeding at the tasks as they are."

---

## Blockers

### B1. The clock tower is not in the discovery screen

T1 asks the participant to join a session happening now at the clock tower. It does not appear
under Live near you, so there is nothing to find.

> "That's not apparent on our join screens at all."
> "In section A, the discovery section, we need to actually make one of those the uni clock tower.
> Since that seems to be our primary example."

Right now the only route is through Community, which is not what T1 describes. P1 found this in the
pilot and reached it through Community instead.

**Fix:** add the University Clock Tower to Live near you and make the card clickable.

### B2. Host and participant screens are mixed

Joining as a participant leads to a screen that says you are the host. There is no path to the
non-host version.

> "I tested, and there's no way. We need to actually link it to the page where you're not host.
> Because you go here, and suddenly you're not the host. It's not the host anymore."

Related: the participant screen shows "start capture, needs 4 on site", which is a host control.

> "This shouldn't say 'start capture needs four on site' because that should be for the host. So
> this screen needs to be different, essentially, to fit the participant and not host."

**Fix:** Dhiraj's proposal, agreed in the call: split the flow into a host onboarding path and a
user onboarding path, each with its own screens, with community and moderation likewise split into
user reporting and moderator action. The user path assumes a host is acting in the background.

### B3. Greyed-out controls in the join flow

> "This button is not working yet. If we click on any of these random ones, it's grayed out, but we
> can just tell them, this is supposed to. Or, we should make this not grayed out, to be honest."

**Fix:** make them live. Telling a participant to imagine a button works costs the data from that
moment.

### B4. No defined start screen for each task

> "We need to determine, like, what screen they start on."
> "For example, T2 is, like, you're in the session and the host has briefed everyone, then we need
> to actually navigate them to that session page to start."
> "Like in case they don't make it to that page, for example, from the previous task."

**Fix:** fill the "expected path" and start-screen columns in the study kit task table. Without
them, a moderator cannot reset between tasks and a failed T1 cascades into every task after it.

### B5. Task 3 has no defined success

Asked three separate times in the call and never resolved:

> "I'm a bit confused about how Task 3 is supposed to be executed. What's the flow that we expect
> them to go through?"
> "I don't completely understand what the path is that we expect them to take, like what we expect
> them to do during that task."
> "It would be useful to have an idea of what we expect each task to look like. What are we looking
> for in terms of what should they be clicking on for each one, to achieve the task success. And so
> then we have a measure, something to compare to."

**Fix:** write the expected path and the success criterion for T3 before anyone runs it. Until then
there is nothing to score C, P or F against.

---

## The same problem, found independently by the draft review

The A3 draft review raises two more instrument faults in the same class. Both change what the task
measures, so both belong on this list:

- **T2 is leading.** The wording "without speaking" gives away the success criterion. Either remove
  it, or stop treating avoidance of the microphone as a finding.
- **T3 shows the answer.** The screen prints "south-west thin" and the callout repeats it, so the
  task does not test whether anyone can read the radar. Hide the label for T3, or report T3 as a
  test of the label rather than of the radar.

And one consistency fault that reaches the materials:

- **The "station" rename is half-applied.** The report says it was corrected before sessions began,
  but T2 still says "station" in the tester pack, the assessor pack, the study kit and Table 2,
  while section 4.4 lists the rename as future work. Three parts of the submission disagree.

---

## Checklist before Saturday

- [ ] B1: clock tower in Live near you, clickable
- [ ] B2: host and participant flows separated
- [ ] B3: greyed-out join controls made live
- [ ] B4: start screen and expected path recorded for all five tasks
- [ ] B5: T3 expected path and success criterion written
- [ ] T2 reworded so it does not state the success criterion
- [ ] T3 radar label hidden, or the task redefined
- [ ] "station" renamed in Figma, tester pack, assessor pack, study kit and Table 2
- [ ] Yong En has walked all five tasks end to end and confirmed each is completable

The last line is the one that matters. Everything above is a guess until someone runs the tasks
against the prototype as a participant would.
