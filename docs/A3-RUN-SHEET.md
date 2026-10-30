# Assignment 3 run sheet - what is left, who does it, when

Written Thu 29 Oct 2026. Audited against the handout (`course-materials/Assignment 3.pdf`), the
Canvas rubric, and the current state of `INFO90007_Assignment_3_Report.md`.

**Report + Figma link due Mon 2 Nov, 11:59pm.** Four days. Late penalty is 10% of 55 marks -
**5.5 marks per day**, so a one-day slip costs more than the whole video component was worth.

| Deadline | When | Who |
| --- | --- | --- |
| Report PDF + Figma link, via Canvas | **Mon 2 Nov, 11:59pm** | one member submits for the group |
| Individual oral assessment | Thu 5 Nov, 3pm | everyone, bring student ID |
| FeedbackFruits peer review | Sun 9 Nov | everyone, individually |

---

## 1. The state of things

The report is **further along than it looks**: 4,294 words of body text against a 3,000-5,000
limit, every handout-required section present (Introduction, Methods, Results, Discussion,
Contribution, AI Use Statement), and a title page carrying both the Figma and YouTube links.

The evaluation is **not started**. Zero of ten participants. Every one of the ten `[FILL]` blocks
in the report is evaluation data, and `evaluation/findings-log.md` is an empty template.

That is the whole critical path. Everything else on this list is an hour or two of tidying.

---

## 2. What is missing - verified, not guessed

### A. Evaluation (blocks the report)

- [ ] 5 think-aloud participants (PT-1 to PT-5), in person, ~25 min each
- [ ] 5 questionnaire participants (PQ-1 to PQ-5), remote, ~15 min each - **different people**
- [ ] `findings-log.md` filled: F1-F8 with Nielsen severity and fix/defer/reject decisions
- [ ] SUS scores tallied, per-item means, open-answer themes
- [ ] **Version 2 of the prototype**, changed in response to findings, with before/after figures
      (v1 is the current build and is what gets tested)

The handout is explicit: *"Make improvements to your high-fidelity prototype based on lessons
learned from this evaluation."* A v2 is required, not a bonus. Report §3.5 and the `v1→v2` row of
the iteration table exist solely to hold it.

### B. Report gaps

- [ ] **No images embedded at all** (0 found). The handout requires *"images of all your initial
      prototypes"*. Seven figures are sitting unused in `a2-figures/` - sketches, storyboard,
      low-fi wireframes. This is free marks currently being left on the floor.
- [ ] **References: 4 of 8 entries are placeholders** (the community heuristics paper, the 3C
      model reading, the design-guidelines source, and lecture material). Two more need access
      dates. A2 was already marked down for references being *"too few or chosen arbitrarily"* -
      submitting with half the list unfilled repeats a known, already-paid-for mistake.
- [ ] **A2 annotated comments** (report line ~165) - all nine of the marker's inline comments are
      already transcribed in `A2-FEEDBACK.md`. Copy them across; no new work needed.
- [ ] **Market comparison** in §4 still has `[VERIFY]` placeholders for Street View, Mapillary and
      Polycam. The handout asks directly: *"How does it compare to similar systems in the market?"*
- [ ] **Screen-count claims** marked `[VERIFY: 27]` - confirm against what the Figma file actually
      contains before asserting a number a marker can check in one click.

### C. Submission mechanics - any one of these can cost the whole grade

- [ ] **Figma sharing set to "Anyone with the link - can view", verified in a logged-out private
      window.** If a marker cannot open the prototype, the prototype does not exist. The link in
      the report currently points at a file still named *"Low-Fi-Prototype"* - rename it.
- [ ] **Figma must be the complete journey.** The handout mandates Figma and a *link*, not a file.
      The Expo app does not satisfy this requirement, however good it is. The study kit assumes a
      fully-linked flow; confirm every one of the five evaluation tasks runs end to end.
- [ ] **YouTube link** reachable without sign-in, and not flagged "Made for Kids".
- [ ] **AI Use Statement with conversation logs.** Required whenever the answer is yes - not just
      a description, but shareable links to the actual chats.
- [ ] **Word budget:** 4,294 used of 5,000. Findings will need ~700. It is going to be tight;
      trim elsewhere rather than cutting the evaluation section, which is 12.5 of 50 marks.

### D. After submission

- [ ] FeedbackFruits peer review, Sun 9 Nov - individual
- [ ] Oral prep, Thu 5 Nov - 5 minutes each, 2-3 questions, **individually assessed**. Everyone
      must be able to justify design decisions they did not personally make.
      `design-decision-log.md` is the revision document for this.

---

## 3. Day by day

### Thursday 29 (today) - the leverage day

| # | Task | Owner | Why it is today |
| --- | --- | --- | --- |
| 1 | **Send the questionnaire out** (Google Form: SUS + 6 custom items + 2 open questions, per study kit §7) | Dhiraj | It is asynchronous. Sent tonight, the five responses arrive while think-alouds run. This alone buys a day. |
| 2 | **Rehearse all five tasks** on the Figma prototype; fix dead links; fill the "expected path" column | John | A dead link found mid-session burns a participant who cannot be replaced |
| 3 | **Confirm 10 named participants** | everyone - 2-3 each | Yong has 2, Dhiraj has 2-3. Roughly 5 short. |
| 4 | Fix the Figma share setting and file name | John | 2 minutes, and catastrophic if missed |

### Friday 30 - data collection

- Run PT-1 to PT-5 think-aloud sessions. Two team members per session: one moderates, one takes notes
  using the §8 template. Do not let the moderator also take notes.
- Chase questionnaire non-responders.
- In parallel, whoever is free: embed the seven A2 figures, fill the four placeholder references,
  paste the A2 annotated comments across. These need no evaluation data.

### Saturday 31 - analysis and version 2

- Fill `findings-log.md`. Merge the same problem seen by several participants into one row.
- Pick the fixes worth making. Change them in Figma. Screenshot before and after.
- A deferred finding with an honest reason scores better than a silently ignored one.

### Sunday 1 Nov - writing

- Fill the ten `[FILL]` blocks; write §3.4 and §3.5.
- Update the Discussion: is it usable, what is broken, what would change with more time.
- Finish the AI Use Statement with logs. Final word count check.

### Monday 2 Nov - submit

- Read end to end, out loud, by someone who did not write it.
- Export PDF. Verify both links from a logged-out browser one last time.
- Submit by early evening, not 11:58pm. A2 was submitted an hour before the deadline; do that again.

---

## 4. Suggested split

Swap freely - what matters is that each line has exactly one name against it.

| Person | Owns |
| --- | --- |
| **John** | Figma prototype and v2 changes, task rehearsal, submission mechanics, AI log export |
| **Yong En** | Evaluation design, moderating think-alouds, findings analysis |
| **Dhiraj** | Questionnaire build and distribution, SUS tallies, market comparison in §4 |
| **Ashlesha** | Recruitment coordination, references and figures, heuristics section, peer-review reminders |

---

## 5. Risk register

| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| Fewer than 10 participants by Sat | Medium | **High** - the minimum is stated in the handout; missing it is a direct hit on System Evaluation | Over-recruit to 12. Questionnaire half can be remote and does not need scheduling. |
| Figma link not publicly viewable | Low | **Catastrophic** | Test logged-out today, and again on submission day |
| Figma journey incomplete | Medium | **High** | Rehearsal today surfaces it while there is still time |
| Report exceeds 5,000 words | Medium | Medium | Trim §2 and §4 rather than the findings |
| Everything lands on Sunday | High | High | The questionnaire going out tonight is the main defence |

---

## 6. Definition of done

- [ ] 10 participants, 5 per technique, none from the team
- [ ] findings-log.md complete, every finding carrying a decision
- [ ] Prototype v2 built, before/after figures in the report
- [ ] Zero `[FILL]`, `[DECIDE]` or `[VERIFY]` markers remaining
- [ ] All initial prototype images embedded
- [ ] Every reference real, consistently formatted, with access dates
- [ ] Figma and YouTube links open from a logged-out browser
- [ ] AI Use Statement with logs
- [ ] 3,000-5,000 words
- [ ] Submitted to Canvas by one member, confirmed visible to the others
