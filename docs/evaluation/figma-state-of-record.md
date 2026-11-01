# Figma: state of record, 1 Nov 2026

Written for whoever writes Section 3.5, so the report does not have to guess what is in the
prototype. Every line below was verified in the live file, not inferred from a plan or a to-do
list. Where something was checked by eye, it says so.

File `nGpbcLweFWROFc3oaonWrO`, page `Page 1 - Hi Fi`.

---

## The numbers Appendix A and Section 3.1 need

| | |
| --- | --- |
| Named screens | **36** |
| Sections | **7** (A to F, plus G Version 2) |
| Of which version 2 | **3**: `01 v2`, `02 v2`, `14 v2` |

So 33 screens of version 1, plus 3 version 2 screens. Any other figure in the report is stale.
The count has changed three times today, so recount rather than trusting this page if more work
happens after it.

Screens `20b`, `20c` and `20d` **do not exist** and never did under those names. If the report
names them, a marker following the appendix will not find them.

---

## Findings: what is actually fixed

### F6 is fixed. findings-log.md is stale.

The screen spec, the findings log and the report disagreed about F6. The prototype settles it.

Screen `11 Briefing: your position` now carries:

- a legend row under the radar reading **You / Covered / Needs photos**, node `424:862`
- the participant's own marker as the **blue location dot** with a soft halo, node `28:695`,
  renamed `you-dot`, with `you-halo` behind it

Verified by rendering screen 11 and looking at it. `14 v2` carries the same treatment.

**Anyone updating `findings-log.md` should move F6 from open to fixed.** The LaTeX already says
fixed and is correct; the Markdown is behind.

One caveat for the write-up: F6 was raised by PT-1, PT-2 and PQ-2, so the **finding** is
evaluation-driven. The **solution**, replacing amber with the map-convention blue dot, came from
the team reading a screenshot, not from a participant. Section 3.5 should say that rather than
implying a participant asked for blue.

### F5 is fixed, but not in the way the old text claimed

Screen `20 Share exhibit` and the `Share panel` component now have:

- a two-state location control (Location = On / Off) as a component set, so both states exist
- a line naming who sees the model
- a shared confirmation state, so the task can end

The old decision text said "added (20b to 20d)". Corrected on Overleaf already.

### F3 was already fixed before today

Screens 10 and 11 each carry a single `Type=Primary` button, and "Hold steady" is gone from 14.
No further work was needed.

### F9 was already fixed

Screen 22 has Share as `Type=Primary` and Request a recapture as `Type=Secondary`, with an
explainer line.

---

## Everything changed in the prototype today

| Screen | Change | Driven by | Checked |
| --- | --- | --- | --- |
| 11 | Radar legend and blue location dot | F6 (PT-1, PT-2, PQ-2) | Rendered and viewed |
| 07 | "removed from the photographs before the model is built, not blurred afterwards" | PQ-4's stated bar | Rendered and viewed |
| 20 and Share panel | Same privacy wording, both Location states | PQ-4, C5 lowest item | Rendered and viewed |
| 18 | Dark full-bleed viewer at 430px, heading names the landmark, caption trimmed | `CLAUDE.md` principle, not a finding | Rendered and viewed |
| 18, 22 | Report icon changed from flag to warning triangle | PQ-4 read the flag as a bookmark | Structural check |
| 01 v2, 02 v2, 14 v2 | Rebuilt after deletion | F1, F2, F6 | Rendered and viewed |

A token `accent/location` was added to the `ChronoMap Tokens` collection and mirrored as
`C.location` in `src/ui/theme.ts`, replacing a hardcoded hex. Both sides changed, as the rules
require.

### Scroll affordances: measured, deliberately unchanged

Item 9 of the work order. Measured on six screens. Only screen 10 hides anything (63px), and its
fold already falls **mid-card**, which is itself the signal that there is more. Screens 05, 03,
21, 25 and 27 hide nothing at all.

Adding a scroll hint where nothing is hidden would be invented chrome on screens already
criticised for being busy (F3, severity 3, said four times). So nothing was changed.

Worth reporting as a result rather than a gap: PQ-4's words were *"the other confusions were
results of me forgetting the starting instructions to (1) move on when stuck and (2) the current
interface needs scrolling"*. They were told and forgot. That is a protocol finding, not a layout
defect.

---

## Two warnings

### The PT-5 and PT-8 labels have already been flipped once

Earlier today the 29 October session was renumbered **from PT-8 to PT-5** across the report, on a
decision to count it as a participant. The Overleaf remote currently has **13 occurrences of PT-5
and zero of PT-8**.

A plan now proposes flipping it back to PT-8 and giving PT-5 to Ashlesha. That may well be right,
but it is a reversal, not a correction of an oversight, and it touches the LaTeX, three Markdown
files and `scripts/gen-participant-results.py`. Do it once, deliberately, and check the decision
log so the report does not record both schemes.

### Two agents have been writing to the Figma file

Section G and its three v2 screens were deleted mid-session by another session with write access,
and had to be rebuilt. Nothing prevents that happening again. Before relying on any screen named
here, confirm it still exists.
