# Assignment 2 — Marker Feedback (ChronoMap 3D, Group 11)

Marker: **Cherie Sew**. Returned 2 Oct 2026. Overall: **16 / 25 (64%)**.
Source: LMS rubric panel + inline PDF comments on the submitted report.
Transcribed verbatim from the feedback screenshots so A3 can be written against it directly.

---

## 1. Rubric scores

| Criterion | Score | Band |
|---|---|---|
| Problem & proposed solution | **4** / 5 | Very Good/Great |
| Developing user interfaces | **2.5** / 5 | Competent/Good |
| Use of community heuristics | **3** / 5 | Very Good/Great |
| Overall quality of the report | **4** / 5 | Very Good/Great |
| Complexity and Creativity | **2.5** / 5 | Competent/Good |

### Rubric comments (verbatim)

**Problem & proposed solution — Very Good/Great**
> A very good description of the problem addressed, and the solution proposed. The appropriateness of the proposed solution to the identified problem is clearly explained. A very good attempt to align the solution in a collaborative, co-located, synchronous and crowdsourcing design space – but the suitability of the aforementioned design space is not adequately justified.

**Developing user interfaces — Competent/Good**
> Multiple prototyping techniques used, but their appropriateness in the design process is not adequately explained. A reasonable number of features proposed are clearly described using user interfaces. However, some interfaces are not suited for the solution. At least two iterations of prototypes presented. Meaningful changes between iterations are highlighted but are not adequately supported by clear justifications. A good proportion of the design decisions are well-justified based on literature or existing solutions.

**Use of community heuristics — Very Good/Great**
> A good set of heuristics has been used in the designing process. Demonstrates a very good understanding of the chosen heuristics. For the most part, applicability of the chosen heuristics to the proposed solution is well-justified. There is a clear link between application functionality and certain heuristics. Provides clear and detailed descriptions on how heuristics were used in the development process.

**Overall quality of the report — Very Good/Great**
> Ideas and arguments are coherent, and generally the work fits together as a unit. Report structure is logical and formal, with small divergences from typical academic standards. Generally clear, with small disruptions in flow. References are suitably synthesised but are too few or chosen arbitrarily. Adequately concise and meets word limits.

**Complexity and Creativity — Competent/Good**
> A reasonable solution both in terms of complexity and creativity. There is minimum focus on ensuring user engagement, motivation and quality of contributions.

---

## 2. Inline comments on the report (verbatim, by section)

### §1 Introduction
Anchored on the claim that tourists / accessibility-checkers are left with outdated 2D references:
> But in this case, why is depth important to a tourist or somebody checking where the accessibility ramps are? Wouldn't submitting normal photograph updates of the [...truncated in screenshot]

Anchored on "one person with one camera ... walking around and taking photos":
> Or they could also just use a 3D camera?

Anchored on the end of the introduction:
> Try to use references to motivate/proof the statements you're actually making.

### §3.3 / Figure 6 (the four low-fidelity screens)
> What about more collaborative features? Is it just taking photos to form a 3D reconstruction?

### §3.3.1 Session Discovery & Group Formation
> So does this only work at a specific set of locations? Who decides this? Is there a time limit for each session and how is it decided if there are multiple groups taking pictures on [...truncated in screenshot]

### §3.3.3 Capture Window & Redundancy
Anchored on "the host starts a capture window of a few minutes":
> Who is the host? Is this person just there monitoring the entire session?

### §3.3.4 Social Media Sharing & Contribution Rewards
Anchored on contribution badge / host badge:
> So there's a profile for users? The final iteration should contain these, especially if it's outlined as important features of the product.

### §3.4 Gamification, Social Dynamics & Quality
Anchored on the weather/seasonal "sets" mechanic:
> There's a lot of proposal of features and yet no mid-fidelity wireframes to actually show it.

### §4.2 Evaluation of Community Heuristics (Table 1)
Highlighting "local history and preservation" under Purpose / Idealism:
> How? The introduction used the hospital as an example of a constantly changing location, then the storyboard showed the eiffel tower but it's still not clear how it actuall [...truncated in screenshot]

Anchored on the Contribution / Targeted requests row:
> All of these are great in theory but there are almost no wireframe interfaces to speak of to show how it was actually applied.

---

## 3. What the feedback actually demands (grouped)

**A. Wireframes — the single most repeated complaint (3 separate comments + the 2.5 UI score).**
Every proposed feature needs its own interface. Features currently argued in prose with no screen: user profiles, badges/reputation, request list, targeted requests, events, seasonal/condition sets, moderation and rules, host tooling.

**B. The host is undefined.** "Who is the host? Is this person just there monitoring the entire session?" The role has no powers, no screen, and no reason to exist.

**C. Collaboration is thin.** "Is it just taking photos?" Co-presence alone is not collaboration — participants need to depend on each other's live actions.

**D. Session governance is unspecified.** Which locations? Who decides? Time limit? What happens if two groups capture the same place at once?

**E. Motivation and engagement are weak (2.5 on Complexity & Creativity).** Souvenirs and badges are asserted, not designed or evidenced.

**F. The premise is under-evidenced.** Why does depth beat updated 2D photos? Why not a consumer 3D camera? Needs citations, not assertion.

**G. The design space itself is not justified.** Why must this be collaborative + co-located + synchronous + crowdsourced at all? (Also the main deduction on rubric criterion 1.)

**H. References are too few / arbitrary.**

**I. Internal inconsistency in the running example.** The intro argues a constantly-changing hospital precinct; the storyboard shows the Eiffel Tower; the heuristics table claims local history and preservation. Three different pitches.

**J. Prototyping-technique choice is unexplained.** Why sketches, why Figma, why these two iterations, and what each technique was for.

---

## 4. How the A3 design direction maps onto it

Decisions taken 11 Oct 2026 (origin: the 10 Oct group discussion in `chat.md`):

| Decision | Feedback it answers |
|---|---|
| **Stranger-matching layer** — nearby presence, interest votes, quorum-gated rally | C, E, G — makes the crowd an actual crowd rather than four friends |
| **Leader-led positioning** — host reads the coverage radar, assigns sectors, redirects people | **B**, C, D — gives the host real powers and a screen of their own |
| **Split gather phase from capture window** — rally/briefing untimed + geofenced, the 5:00 clock starts on the host's Start | D, and Dhiraj's unanswered "what if people are too far away / time limit" objection |
| **Profile + reputation + souvenir shelf screens** | **A**, E, and the explicit "The final iteration should contain these" instruction |
| **One screen per feature in the Figma / Expo high-fidelity prototype** | **A** — directly, and the 2.5 UI score |
| Still outstanding | F, H, I, J — writing tasks, not design tasks |

**Note on I:** pick one running example and use it in the intro, the storyboard, the wireframes and the heuristics table. The repo's mock data already uses Royal Melbourne Hospital throughout — keeping that everywhere and dropping the Eiffel Tower resolves the inconsistency for free.
