# ChronoMap 3D: Freezing Time for Open-Source Heritage

## Assignment 3: High-Fidelity Prototype and Evaluation

**INFO90007 Social Computing, Semester 2 2026, The University of Melbourne**

| Team member            | Student ID |
| ---------------------- | ---------- |
| John Minseok Kim       | 1079731    |
| Dhiraj Prakash Sajnani | 1841950    |
| Yong En Foo            | 1270432    |
| Ashlesha Chetan Patil  | 1852536    |

**Figma, final high-fidelity functional prototype:** https://www.figma.com/design/nGpbcLweFWROFc3oaonWrO/ChronoMap-3D-%E2%80%94-Low-Fi-Prototype?node-id=0-1&p=f&t=MmwNxBgv8EkFa0Hd-0
`[VERIFY: open this link in a private window while logged out of Figma. Sharing must be "Anyone with the link: can view". Add a second link to the Prototype (Present) view of the final flow so the marker lands in the clickable prototype, not the canvas.]`

**Demo video (YouTube):** https://www.youtube.com/watch?v=i1lIlsDkKQo

**Submission date:** 2 November 2026 (video submitted `[FILL: date]`)

---

> **HOW TO USE THIS DRAFT (delete this box before submission)**
>
> **Markers.** `[FILL: …]` needs real content from the team. `[DECIDE: …]` is a choice the team must make. `[VERIFY: …]` is a claim to check before it stays in. Everything else is draft text grounded in the sources listed below; rewrite it in your own words, especially Methods and Results, because the oral assessment checks that each of you can explain what is written.
>
> **Sources used for the drafted text.** The A2 report (`INFO90007_Assignment_2___ChronoMap_3D.pdf`), the design decision log (`design-decision-log.md`), the earlier A3 draft (`INFO90007_Assignment_3_ChronoMap_3D.md`, now superseded by this file), the A3 handout and Canvas rubric, and the lecture notes in `lecture-transcripts/assignment-3-notes.md`. Figures: `a2-figures/` (initial prototypes), `video-assets/` (hi-fi screens).
>
> **Rubric map.** Four rows of 12.5 marks each. Each section below names the row it serves and the top-band wording to aim at.
>
> | Rubric row                | Served mainly by       | Top band asks for                                                                                                                                                                                               |
> | ------------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | System Design             | §2.1–2.3, §3.1–3.3     | Multiple prototyping techniques, justified. Clear process flow shown with UIs. Several iterations, changes highlighted and their motivation explained. Decisions justified by literature or existing solutions. |
> | System Evaluation         | §2.4, §3.4–3.5         | One querying and one observation technique, justified. How the study was run, clearly. Results well presented with meaningful findings. How the prototype improved from them.                                   |
> | Overall Quality of Report | §1, §4, §5, references | Purpose clear. Placed among existing solutions. Strengths and limitations. Cohesive, formal structure. References synthesised. Within 3,000–5,000 words.                                                        |
> | Creativity and Complexity | §3.3, throughout       | Design aligned with the problem, creative features, usability focus, frequent reference to course material.                                                                                                     |
>
> **Word budget (target about 4,200 of the 3,000–5,000 allowed; tables and captions are not counted here, ask on Ed if that matters).**
>
> | Section          | Target                      |
> | ---------------- | --------------------------- |
> | 1 Introduction   | 400                         |
> | 2 Methods        | 950                         |
> | 3 Results        | 1,900                       |
> | 4 Discussion     | 750                         |
> | 5 Conclusion     | 150                         |
> | AI Use Statement | 50–300 (required, separate) |
>
> **Status at 25 Oct.** Evaluation not yet run (see `evaluation/study-kit.md`). A2 feedback: summary comment received, annotated comments not yet copied. Figma and video links received. Items 5–8 from the planning message still open: capture model decision, A3 working process, AI tools used per member, group number and oral slot.

---

## 1 Introduction

_Rubric: Report Quality (purpose well explained), Creativity (design aligned with the problem). Source: A2 §1, rewritten for A3; keep the motivation, change the example site._
_Status: drafted. ~400 words._

Three-dimensional models of real places are usually made with dedicated equipment, such as LiDAR scanners or purpose-built camera rigs, or they come from proprietary platforms such as Google Street View that decide which places are covered and when they are updated. A member of the public or a local organisation has no way to ask for a place to be captured, or captured again after it changes. This matters for places that change often, for example a campus building during construction works, where entrances, ramps and temporary walkways move and two-dimensional maps show layout but not depth. `[FILL: one sentence on why you chose heritage places and the University clock tower as the running example; A2 used the Royal Melbourne Hospital precinct, which the team removed because it is not a place people should be filming (decision log #30).]`

A 3D reconstruction can be built from ordinary photographs of the same place taken from different positions and stitched together. One person walking around a site can do this, but it takes minutes, and the scene does not stay still: light shifts, shadows lengthen, people and vehicles come and go. Stitching assumes the photographs show the same scene, ideally frozen at one instant [1]. ChronoMap 3D treats a group of separate phone cameras as one distributed camera. Participants who are already at the same place position themselves around a target and photograph it during a short, shared capture window, so every photo in the set is taken close together in time.

The concept rests on the three requirements set for this project:

- **Crowdsourcing.** Many contributors each supply a viewpoint, and a community request board says which places are wanted.
- **Co-location.** A session can only be joined from inside the landmark radius, and participants coordinate in person, by voice, while on site.
- **Synchronicity.** Everyone captures inside one shared window, with live coverage shown on a radar.

Assignment 2 argued the concept and tested it with paper sketches, a storyboard and low-fidelity wireframes. This report covers the next step: a high-fidelity, clickable prototype in Figma; the design rationale behind it; an evaluation with `[FILL: 10]` participants using one observation and one querying method; and the second version of the prototype built from what the evaluation found.

### 1.1 What changed since Assignment 2

| Area          | Assignment 2 (low-fi)               | Assignment 3 (hi-fi)                                                                                               |
| ------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Screens       | Four core screens, greyscale        | `[VERIFY: 27]` linked screens covering first launch to a shared 3D artifact, plus moderation                       |
| Coordination  | "People talk to each other on site" | Voice-channel join, live call strip, host callout and one-tap replies for people who prefer not to speak           |
| After capture | Result and share screen             | Capture complete, processing timeline, artifact exhibit, social share with privacy defaults                        |
| Moderation    | Rules screen described              | Report a model or location, flag a participant during capture, chat with per-message flags, moderator queue        |
| Members       | Not designed                        | Profile with stats, badges, recent captures                                                                        |
| Visual design | Unstyled wireframes                 | Two high-fidelity directions, contrast-audited to WCAG 2.1 AA                                                      |
| Evaluation    | None (not required)                 | `[FILL: method A]` with 5 participants and `[FILL: method B]` with 5 participants, then a second prototype version |

---

## 2 Methods

_Rubric: System Design (multiple prototyping techniques, their appropriateness justified) and System Evaluation (techniques justified, study clearly described)._

### 2.1 Ideation and concept development

_Source: A2 §2.1, condensed. Status: drafted. ~150 words._

The concept came from group brainstorming in tutorials and over WhatsApp, where each member proposed crowdsourced tasks (3D capture, live-event transcription, restaurant recommendation, and others). Each idea was tested against the three requirements: does crowdsourcing add real value, does the task need people in the same place, and does it benefit from happening at the same time. The restaurant recommender failed co-location; a nature-trail variant of the capture idea was dropped because a large scene does not suit a shared window and remote areas lack connectivity. The group also raised early the question of why a stranger would coordinate with people they do not know, which later shaped the reward and voice features.

For Assignment 3 the ideation continued in two ways. `[FILL: describe how new features were decided: for example the voice-channel screens were added because the lecture material treats co-located coordination as the core of the design space (decision log #3); the moderation screens came from a team discussion about bystanders and restricted places (log #24, #25). Say who proposed what and where it was discussed (Zoom, WhatsApp, tutorial).]`

### 2.2 Prototyping techniques and rounds

_Rubric: "multiple prototyping techniques used and their appropriateness well-justified" and "several iterations". Source: A2 §2.2 for rounds 1-3; decision log for rounds 4-5. Status: drafted, dates to confirm. ~300 words._

We prototyped in six rounds, raising fidelity only once the previous round had settled. Each technique was chosen for the question it could answer cheaply at that stage.

| Round | When                | Technique                                                     | Fidelity | What it was for                                                                                                   | How it was reviewed                                                        | Figures |
| ----- | ------------------- | ------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------- |
| 1     | Aug-Sep (A2)        | Hand-drawn paper sketches                                     | Low      | The three scenarios with most uncertainty: joining, recruiting passers-by, creating a session. Quick to redraw.   | Group review against the community heuristic cards                         | 1-4     |
| 2     | Sep (A2)            | Scenario storyboard                                           | Low      | Put the screens in a social situation (three friends at a landmark) to test whether the collaboration made sense. | Zoom review                                                                | 5       |
| 3     | Sep (A2)            | Greyscale Figma wireframes                                    | Low      | Structure and wording of the four core screens without visual design.                                             | Zoom review against heuristics and the co-location and synchronicity rules | 6       |
| 4     | `[FILL: ~8-16 Oct]` | High-fidelity interactive Figma prototype, version 1 (Page 1) | High     | The full journey, every screen linked, so the flow could be demonstrated and tested.                              | Tutor feedback `[FILL: which session]`, WCAG contrast audit, decision log  | 7-`[n]` |
| 5     | 16 Oct              | Editorial visual direction (Page 3)                           | High     | A second visual identity after a design critique found the first pass generic.                                    | Side-by-side comparison, contrast audit                                    | `[n]`   |
| 6     | `[FILL: 29-31 Oct]` | High-fidelity prototype, version 2                            | High     | Fixes motivated by the user evaluation (§3.5).                                                                    | Re-check of all prototype links                                            | `[n]`   |

Low fidelity was used first because it is cheap to change and invites criticism of structure rather than appearance. High fidelity was needed for Assignment 3 so that participants could use realistic content, real transitions and real wording, which is what the evaluation methods in §2.4 depend on. `[FILL: one sentence on what the Expo app build was for, if you want to mention it at all; the handout does not require it. If mentioned, call it an exploratory build and do not claim features the repo does not contain.]`

### 2.3 Design frameworks used

_Rubric: "design decisions justified based on literature or existing solutions". Tutorial 10 says to document how you applied the usability heuristics. Status: drafted. ~200 words._

Four sources were used to justify decisions, and §3.2.3 records which one motivated each change.

1. **Community heuristics for crowdsourcing platforms** (the card deck used in A2) [2]. At least one card from each of the six categories (purpose, moderation, members, common ground, contribution, platform) is addressed; Table `[n]` in §3.3 maps features to cards.
2. **Nielsen's ten usability heuristics** [3], used as a checklist when reviewing each high-fidelity round, for example visibility of system status (live coverage radar, session timer), recognition rather than recall (assigned station shown on the briefing screen, instructions repeated inside the capture screen), error prevention (quorum before capture can start, rules agreement before joining) and aesthetic and minimalist design (the create-session screen was simplified after it was judged overloaded).
3. **The 3C collaboration model** (communication, coordination, cooperation) [4], used to check that every social feature supports at least one of the three.
4. **Accessibility and platform conventions.** Every text and background pair was audited against WCAG 2.1 AA [5]; 16 failing pairs were corrected by darkening the foreground only. Control size and placement follow `[DECIDE: Apple Human Interface Guidelines or Material Design]` [6].

### 2.4 User evaluation

_Rubric: System Evaluation. The lecturer expects a justification of the two methods chosen and how they complement each other; there is no "right" pair. The full protocol, scripts and forms are in `evaluation/study-kit.md`. Status: designed, NOT YET RUN. ~300 words._

`[DECIDE: methods. Recommended pair below. The alternative is cooperative evaluation plus interviews, which gives richer "why" data but takes longer to analyse.]`

**Design.** Ten participants, none from the team, split into two groups of five, each person taking part in one method only.

| Item                | Detail                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Prototype tested    | `[DECIDE: high-fidelity version 1, Figma Page 1 (the complete, fully linked page used in the video), presented in Figma Present mode on a phone]`                                                                                                                                                                                                                                                                       |
| Observation method  | **Think-aloud**, 5 participants, in person, one at a time, in a quiet room. Participants complete five tasks (join a session, read the briefing, respond to a host callout during capture, find and share the artifact, flag a participant) while saying what they are thinking. The moderator does not help. Audio recorded with consent.                                                                              |
| Querying method     | **Questionnaire**, 5 different participants. They complete the same five tasks unobserved from a task sheet, then answer the System Usability Scale (SUS) [7], six custom items on the social aspects (willingness to join strangers, comfort with voice, clarity of the radar, trust in the privacy controls, motivation of the artifact and badges, clarity of purpose) and two open questions. Can be done remotely. |
| Participants        | `[FILL: who they were, how recruited, age band, familiarity with 3D capture or photogrammetry; aim for a mix, including some classmates who know the design space]`                                                                                                                                                                                                                                                     |
| Setting and dates   | `[FILL]`                                                                                                                                                                                                                                                                                                                                                                                                                |
| Measures            | Task success (complete, partial, failed), assists, errors, time per task, observed problems with severity (0-4), SUS score, custom item scores, open-text themes                                                                                                                                                                                                                                                        |
| Consent and privacy | Verbal consent to take part and to audio recording; participants identified by code only; recordings deleted after submission                                                                                                                                                                                                                                                                                           |

**Why these two.** Think-aloud was chosen because the main risk in a multi-screen flow is people getting lost or misreading a screen, and verbalised thought shows where and why that happens at the moment it happens. It is simple to run reliably in the time available. Its weaknesses are that it is subjective, that speaking slows people down, and that five people can disagree. The questionnaire complements it in two ways: SUS gives a comparable usability score rather than opinions, and the custom items measure the social constructs that watching someone click cannot reach, such as whether they would actually join a session with strangers or speak on the voice channel. We deliberately did not pair think-aloud with interviews because both would yield the same kind of qualitative, in-the-moment data.

**Synchronous behaviour in a single-user prototype.** The prototype cannot connect real participants, so the other people in a session are staged: the rally fills, the host's callout arrives, the radar updates. Participants were told this in the task briefing and asked to treat the staged people as real, which is the approach the lecturer recommended for synchronous systems.

**Analysis.** Problems from the five think-aloud sessions were logged with screen, evidence, number of participants affected and severity, then ranked by frequency and severity. SUS was scored per the standard method (0-100) and reported with the per-item pattern. Open answers were grouped into themes. Changes were made where a problem was frequent or severe and the fix was within scope; others were recorded as deferred with a reason (§3.5).

---

## 3 Results: prototypes and evaluation findings

_Rubric: System Design (iterations with motivated changes, clear process flow with UIs, decisions justified) and System Evaluation (results presented, improvements explained)._

### 3.1 Response to Assignment 2 feedback

_The lecturer said the design space is re-assessed against this feedback. Source: tutor comment of 2 Oct 2026. Status: summary comment received; annotated comments still to copy from Canvas._

Feedback received on Assignment 2 (Cherie Sew, 2 Oct 2026): the report was well structured, but much of the content came from assumptions, and the mid-fidelity wireframes were "severely lacking, especially for important features/user flows or how the heuristics were applied to improve the prototyping", with further comments annotated in the report.

| #   | Feedback                                                                    | Our response                                                                                                                                                                                                                                                                          | Where to see it      |
| --- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| 1   | Content based on assumptions rather than evidence                           | Claims about usability and motivation are now tested with ten participants (§3.4); design decisions cite the heuristic cards, Nielsen's heuristics and the 3C model (§2.3); the system is compared with existing products (§4.3)                                                      | §2.3, §3.4, §4.3     |
| 2   | Wireframes lacking for important features and user flows                    | The prototype now covers the whole journey in `[VERIFY: 27]` linked screens, including the flows that were only described in A2: voice coordination during capture, the post-capture pipeline, sharing, and moderation. Every screen is reachable from launch and none is a dead end. | §3.2.2, Figure `[n]` |
| 3   | Unclear how the heuristics were applied to improve the prototype            | §3.2.3 records each change between rounds with the heuristic or finding that motivated it                                                                                                                                                                                             | §3.2.3, Table `[n]`  |
| 4   | `[FILL: each annotated comment from the Canvas submission, quoted briefly]` | `[FILL]`                                                                                                                                                                                                                                                                              | `[FILL]`             |

`[FILL: A2 mark out of 25, if you want to state it; optional.]`

### 3.2 Prototype evolution

#### 3.2.1 Initial prototypes (Assignment 2)

_The handout requires "images of all your initial prototypes". Files are in `a2-figures/`. Captions are from the A2 report. Status: ready; insert the images._

- **Figure 1.** Paper sketch, scenario 1: joining a session by code, seeing the shared start time, capturing, receiving the model, sharing. (`fig1-scenario1-join-session.png`)
- **Figure 2.** Scenario 2: instant recruitment of passers-by with a QR code on a poster or held by a participant. (`fig2-scenario2-qr-recruitment.png`)
- **Figure 3.** Scenario 3: creating a session with date, time, location and duration, then sharing the code. (`fig3-scenario3-create-session.png`)
- **Figure 4.** Paper sketches of the four main screens: home and create session; camera and share. (`fig4a-…`, `fig4b-…`)
- **Figure 5.** Scenario storyboard: Alice, Bob and Charlie find ChronoMap through a QR poster, complete the tutorial, form a session, coordinate angles with coverage prompts, receive contribution scores. (`fig5-storyboard.png`)
- **Figure 6.** Low-fidelity Figma wireframes of the four core screens: discovery and lobby, coverage guide, capture window, result and sharing. (`fig6-lofi-figma-wireframes.png`)

In these rounds a session was a shared time window and each participant pressed the shutter freely. Reviewing the sketches exposed that nothing told people where to stand or showed how much of the site was covered, which produced the coverage guide and the move from a typed code to a list of nearby sessions (A2 §3.1).

#### 3.2.2 High-fidelity prototype, version 1

_Source: earlier A3 draft §3.1 and decision log #24-#31. Status: drafted; verify the inventory against the Figma file and export the missing screenshots._

The first high-fidelity version was built in Figma (Page 1) as a click-through prototype. Figure 7 shows the canvas with screens grouped by flow. `[FILL: export of the Figma canvas.]`

| #   | Screen                   | Purpose                                                                 | Screenshot available         |
| --- | ------------------------ | ----------------------------------------------------------------------- | ---------------------------- |
| 01  | Onboarding               | States the purpose before any account or permission request             | yes                          |
| 02  | Home: Nearby             | Live sessions nearby, "happening now" prompt, code or QR entry          | yes                          |
| 03  | Home: Requests           | Community demand board, places people want captured                     | yes                          |
| 04  | Home: Events             | Planned visits that strangers can join                                  | no, export                   |
| 05  | Request detail           | Votes, conditions still needed, nearby discussion                       | no, export                   |
| 06  | Notifications            | Rally pings, replies, earned badges                                     | no, export                   |
| 07  | Community rules          | Safety and privacy rules with explicit agreement                        | yes                          |
| 08  | Create a session         | Host sets location, target, condition, quorum, window                   | yes                          |
| 09  | Rally: gathering         | Quorum progress, who is on site, who is on the way                      | yes                          |
| 10  | Briefing (host)          | Host assigns stations on the coverage radar                             | yes                          |
| 11  | Briefing (participant)   | Each person sees their assigned station, with "you do not have to talk" | yes                          |
| 12  | Two groups, one landmark | Resolves a clash with another group at the same place                   | no, export                   |
| 13  | Voice channel: join      | Joins the on-site call, muted by default                                | yes                          |
| 14  | Filming: live call       | Timer, host voice cue, coverage radar, capture controls                 | yes (+14a menu, 14b flagged) |
| 15  | Filming: host callout    | Host moves someone; one-tap replies                                     | yes                          |
| 16  | Capture complete         | Session summary and each person's contribution                          | yes                          |
| 17  | Building the model       | Upload and reconstruction progress                                      | no, export                   |
| 18  | Artifact                 | The finished model presented as an exhibit                              | yes                          |
| 19  | Profile                  | Stats, badges, recent captures, settings                                | no, export                   |
| 20  | Share exhibit            | Social sharing with privacy defaults                                    | yes                          |
| 21  | Community feed           | What others have captured                                               | yes                          |
| 22  | Model viewing            | Open a community model                                                  | yes                          |
| 23  | Report                   | Report a model or location                                              | yes                          |
| 24  | Report sent              | Confirmation                                                            | no, export                   |
| 25  | Moderator queue          | Flagged items for moderators                                            | yes                          |
| 26  | In-session flag          | Flag a participant during capture                                       | `[VERIFY: same as 14a/14b?]` |
| 27  | Community chat           | Chat with per-message flags                                             | no, export                   |

The main path is 01 → 02 → 09 → 10 → 13 → 14 → 16 → 17 → 18 → 20. Other entries (requests, events, notifications, code or QR) lead into the same rally. `[VERIFY: "All 87 links were checked: every screen is reachable from 01 and none is a dead end." Re-run this check on the final page and update the number.]`

**Interactions deliberately not built.** `[FILL: the lecturer asked for this to be explicit. For example: only one admin or moderator screen (the queue) because the social capture flow is the focus; no account creation; no settings sub-screens; the 3D model is a static image, not an interactive viewer; voice is represented by a speaking indicator, not audio.]`

#### 3.2.3 Changes between rounds and what motivated them

_This table is the direct answer to the tutor's comment that it was unclear how heuristics improved the prototype, and to the rubric's "meaningful changes… supported by clear explanations as to what motivated them". Source: decision log. Status: drafted; add figure numbers and anything missing._

| Round | Change                                                                                               | Motivation                                                                                        | Framework reference                                |
| ----- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 3→4   | Voice-channel join, live call strip and host callout screens added                                   | A2 only said people "talk to each other"; co-located coordination is the core of the design space | Platform: virtual co-presence; 3C communication    |
| 3→4   | One-tap replies and "you do not have to talk" on the briefing                                        | Speaking to strangers is a barrier raised in brainstorming                                        | Members: self-presentation; Nielsen 3 user control |
| 3→4   | Capture complete, processing timeline and artifact exhibit added                                     | A2 had no screens between capture and sharing; the souvenir is the main motivator                 | Contribution: motivators; Nielsen 1 system status  |
| 3→4   | Community feed, model viewing, report, moderator queue, chat with per-message flags                  | Team discussion on bystanders and restricted places                                               | Moderation: monitoring, regulation, moderation     |
| 3→4   | Flag a participant from the live call (14a), red flagged state (14b)                                 | Someone photographing strangers must be stoppable during the session, not after                   | Moderation; Nielsen 5 error prevention             |
| 3→4   | Request board with vote chip, targeted "happening now" prompt                                        | Crowd chooses which places are captured                                                           | Contribution: request list, targeted requests      |
| 4     | 16 colour pairs fixed (amber on cream 2.4:1, white on amber 2.7:1, grey on tinted cards)             | WCAG AA audit of every text and background pair                                                   | WCAG 2.1 AA [5]                                    |
| 4     | Create-session screen simplified: quorum and window side by side, two notices merged, copy trimmed   | Screen judged overloaded                                                                          | Nielsen 8 aesthetic and minimalist design          |
| 4     | Lists made edge-to-edge; cards kept only for notices                                                 | Everything in a card gave flat hierarchy                                                          | Nielsen 8; design critique                         |
| 4     | Profile screen shortened to one screen height                                                        | Too long to scan                                                                                  | Nielsen 8                                          |
| 4     | Hospital replaced by the University clock tower as the capture location everywhere                   | A hospital is not a place people should be filming; real photo replaces AI render                 | Moderation: regulation; Purpose: clarity           |
| 4→5   | Editorial visual direction (paper, forest green, clay; Fraunces and Inter; 8-pt spacing; one accent) | First pass looked generic and had weak hierarchy                                                  | Platform: aesthetics                               |
| 5→6   | `[FILL: each change made after the evaluation, see §3.5]`                                            | `[FILL: finding ID]`                                                                              | `[FILL]`                                           |

#### 3.2.4 Visual design directions

_Source: earlier draft §4. Status: drafted; keep short. Figures: same screen in both directions (`video-assets/02-home.png` vs `editorial-02-home.png`, `14-live-capture` vs `editorial-14-live-capture`, `18-artifact` vs `editorial-18-artifact`)._

The first high-fidelity pass (navy and amber) was functionally complete but looked generic: nearly every element sat in a rounded card, hierarchy was weak and nothing suggested heritage or place. A second direction, an archival "field journal" look, was built on a separate Figma page so the two could be compared: warm paper background, forest green for primary actions, a single clay accent, Fraunces for headings and Inter for body text, an 8-point spacing scale, dividers and typography instead of nested cards, and one primary action per screen. `[DECIDE: which direction is the final prototype. If the editorial page stays incomplete (15 of 20 screens as of 21 Oct), present it as an explored direction and keep Page 1 as the final.]` `[FILL: if you want, a sentence on whether participants saw either direction and what they said.]`

#### 3.2.5 High-fidelity prototype, version 2

`[FILL after the evaluation: what version 2 is (which page, how many screens changed), with a figure of the canvas. Details of each change in §3.5.]`

### 3.3 Features and how they support social behaviour

_Rubric: Creativity and Complexity, System Design ("explain in detail the different features and how they support social behaviours, and justify the design decisions"). Source: earlier draft §3.2-3.4 and §5, A2 §3.3. Status: drafted; add screenshots and your own wording. ~600 words._

Table `[n]` summarises the mapping; the subsections explain the main decisions.

| Feature                                        | Social behaviour supported (3C)   | Community heuristic                                      | Screens     |
| ---------------------------------------------- | --------------------------------- | -------------------------------------------------------- | ----------- |
| Onboarding that states purpose first           | -                                 | Purpose: clarity, visibility; Platform: motive           | 01          |
| Nearby sessions, QR and four-letter code       | Coordination (finding each other) | Members: recruitment                                     | 02, 09      |
| Request board with votes and conditions        | Cooperation (crowd decides where) | Contribution: request list, targeted requests, threshold | 03, 05      |
| Events tab                                     | Coordination (strangers plan)     | Common ground: events                                    | 04          |
| Condition-based requests (golden hour, rain)   | Cooperation                       | Common ground: subgroups                                 | 03, 08      |
| Rules with explicit agreement                  | -                                 | Moderation: regulation                                   | 07          |
| Quorum before capture                          | Coordination                      | Contribution: threshold                                  | 08, 09      |
| Coverage radar with assigned stations          | Coordination                      | Platform: virtual co-presence, tools                     | 10, 11, 14  |
| Voice channel, muted by default                | Communication                     | Platform: virtual co-presence                            | 13, 14      |
| Host callout with one-tap replies              | Communication, coordination       | Members: self-presentation (opt-out)                     | 15          |
| Capture window with timer                      | Cooperation (shared instant)      | Platform: rituals                                        | 14          |
| Artifact exhibit, badges, S-rank               | -                                 | Contribution: motivators; Platform: reputation           | 16, 18, 19  |
| Share card with coordinates off, faces blurred | -                                 | Moderation: regulation                                   | 20          |
| Report, flag participant, moderator queue      | -                                 | Moderation: monitoring, moderation                       | 14a, 23, 25 |

#### 3.3.1 Finding a session and forming a group (crowdsourcing, recruitment)

`[FILL / rewrite from draft: nearby list, "happening now" prompt when the user is inside a landmark radius, QR poster and four-letter code for passers-by, request board where the community votes for places and conditions; the threshold (quorum) stops a capture starting with too few viewpoints.]`

#### 3.3.2 Coordinating on site (co-location, communication and coordination)

Assignment 2 assumed participants would "talk to each other". The prototype designs that explicitly. Voice is opened by the host from the briefing; everyone joins muted, so strangers are not forced to speak. During capture a voice strip shows who is speaking and the host's latest instruction next to the radar and the capture controls. The host can send a spatial instruction ("move 2 m left, aim at the clock face") and participants can answer with quick replies ("On my way", "Need a hand", "Ready") without talking. The briefing says "You do not have to talk". `[FILL: justify with course material: co-presence and virtual co-presence cards; the lecture point that intrinsic motivation and low social cost matter for strangers.]`

#### 3.3.3 The capture window and coverage (synchronicity, cooperation)

`[DECIDE: which capture model the report presents. A2 and the Figma prototype use a free capture window with a manual shutter and a timer; the exploratory app used a synchronised shutter with a sync score. Recommended: present the window model, consistent with A2 and the prototype, and mention the synchronised shutter as an alternative considered and why it was not chosen (harder to coordinate, more failure cases).]`

`[FILL / rewrite from A2 §3.3.2-3.3.3: the window keeps every photo close in time; redundancy across participants handles moving pedestrians and blocked views; the radar divides the site into stations and marks thin sides; window length trades consistency against coverage.]`

#### 3.3.4 After capture: artifact, badges and sharing (motivators)

`[FILL / rewrite from draft §3.3: capture complete shows each person's contribution; processing shows a staged timeline (uploaded, aligning cameras, building surface, texturing); the artifact is presented as a museum exhibit with number, coordinates, date, contributors; badges and S-rank; share card with format choice, caption, and two privacy defaults: exact coordinates off (about 100 m), faces and plates blurred. Link to the Strava-style "I helped create this" motivator from A2.]`

#### 3.3.5 Safety and moderation (regulation)

`[FILL / rewrite from decision log and draft §8: rules screen with explicit agreement; flag a participant live from the call (14a/14b) when someone photographs strangers; report a model or a location; per-message flags in chat; moderator queue; the hospital example as a restricted-area case.]`

### 3.4 Evaluation findings

_Rubric: System Evaluation, "results well-presented", "meaningful and interesting findings". Status: NOT YET RUN. Fill every table from `evaluation/findings-log.md` and the session notes. Do not write anything here that did not happen._

#### 3.4.1 Participants

| Code  | Method        | Role / background | Familiar with 3D capture? | Device   | Date     |
| ----- | ------------- | ----------------- | ------------------------- | -------- | -------- |
| P1    | Think-aloud   | `[FILL]`          | `[FILL]`                  | `[FILL]` | `[FILL]` |
| P2-P5 | Think-aloud   | …                 |                           |          |          |
| Q1-Q5 | Questionnaire | …                 |                           |          |          |

#### 3.4.2 Task performance (think-aloud group)

| Task                                                | Completed | Partial | Failed | Assists | Median time | Main problem observed |
| --------------------------------------------------- | --------- | ------- | ------ | ------- | ----------- | --------------------- |
| T1 Join the session at the clock tower              | `[FILL]`  |         |        |         |             |                       |
| T2 Find your station, reply without speaking        |           |         |        |         |             |                       |
| T3 Respond to the host callout, read the radar      |           |         |        |         |             |                       |
| T4 Find the model and share it with location hidden |           |         |        |         |             |                       |
| T5 Flag a participant                               |           |         |        |         |             |                       |

#### 3.4.3 Questionnaire results

- **SUS:** mean `[FILL]` (SD `[FILL]`), range `[FILL]`; benchmark average 68 [7]. Per-item pattern: `[FILL: which items scored lowest, e.g. "needed to learn a lot" or "complex"]`.
- **Custom items (1-5):** willingness to join strangers `[FILL]`; comfort with voice `[FILL]`; radar clarity `[FILL]`; trust in privacy controls `[FILL]`; motivation of artifact and badges `[FILL]`; clarity of purpose `[FILL]`.
- **Open answers, themes:** `[FILL]`

#### 3.4.4 Findings

_One row per problem. Keep the ones that matter; the lecturer wants "very specifically the problems that your users found"._

| ID  | Finding  | Evidence (quote or observation) | Participants | Severity (0-4) | Heuristic violated | Decision (fix / defer / reject, with reason) |
| --- | -------- | ------------------------------- | ------------ | -------------- | ------------------ | -------------------------------------------- |
| F1  | `[FILL]` | `[FILL]`                        | `[FILL]`     | `[FILL]`       | `[FILL]`           | `[FILL]`                                     |

### 3.5 Changes made to the prototype (version 2)

_Rubric: "How the prototypes were improved based on the evaluation findings is very well explained". Show before and after for each change, annotated. Status: NOT YET DONE._

| Finding | Change   | Screen(s) | Before → after figure |
| ------- | -------- | --------- | --------------------- |
| F1      | `[FILL]` | `[FILL]`  | Figure `[n]`          |

Changes considered but not made: `[FILL: with reasons, e.g. out of scope for a front-end prototype, contradicted by other participants, cosmetic].`

---

## 4 Discussion

_Rubric: Report Quality ("strengths and limitations", "well-placed among existing solutions") and the handout's questions: is it usable, what is it good for, what are its problems, what would you change, how does it compare._

### 4.1 Is the final prototype usable?

`[FILL after evaluation: answer with the SUS score, task completion and the severity profile; say what version 2 fixed and what remains; be honest about what five people per method can and cannot show.]`

### 4.2 What it is good for, and its problems

_Source: A2 §4.1 and §4.3, earlier draft §9. Status: drafted. ~250 words._

The system's strength is that each participant contributes a viewpoint the others do not have, at approximately the same moment, which is what single-person capture cannot do. Co-location adds a social benefit: people can point out a blocked view or a thin side in person, and the radar gives that conversation a shared picture of progress. Each person can see how their photos contributed to a shared outcome, which is the basis of the souvenir and badge motivators.

The problems are of two kinds. Some are properties of the concept and are unchanged from Assignment 2: a connection is needed on site; phone cameras differ in colour and focal length; the final model may still have uncovered areas. Others are limits of this prototype: reconstruction is simulated, so the core hypothesis (that a short shared window yields a usable model) is untested; voice and social posting are designed but not connected; other participants are staged, so the evaluation measured whether people understood the coordination, not whether strangers would actually do it. `[FILL: add the problems the evaluation found that were not fixed.]`

### 4.3 Comparison with similar systems

_Rubric: "well-placed among the existing solutions". Status: skeleton; I can research and verify each row on request. Do not submit unverified claims about products._

| System                                        | What it does                                                       | Who decides coverage       | Co-located, synchronous group capture? | How ChronoMap differs                                   |
| --------------------------------------------- | ------------------------------------------------------------------ | -------------------------- | -------------------------------------- | ------------------------------------------------------- |
| Google Street View (user contributions)       | `[VERIFY]`                                                         | `[VERIFY]`                 | No                                     | Community request board; group capture in one window    |
| Mapillary                                     | `[VERIFY: crowdsourced street-level imagery]`                      | Contributors, individually | No                                     | Synchronised, coordinated group; 3D artifact as reward  |
| Polycam / Scaniverse / Luma                   | `[VERIFY: single-user phone photogrammetry or Gaussian splatting]` | The individual user        | No                                     | Many phones at once; social coordination and moderation |
| `[FILL: any crowd photo or heritage project]` |                                                                    |                            |                                        |                                                         |

`[FILL: two or three sentences drawing the comparison together: existing tools either let one person scan slowly or let many people contribute asynchronously; none organise strangers at the same place into a timed capture, and none give the crowd a way to request a place.]`

### 4.4 Ethics, privacy and safety

_Source: earlier draft §8 and A2 §4.4. Status: drafted. ~150 words._

The rules screen and onboarding warn users to stay off roads and out of restricted areas, and a session can only be joined from inside the landmark radius. Faces and licence plates are blurred before reconstruction and this is repeated on the share screen; sharing hides exact coordinates unless the user opts in. Voice is muted by default with a non-spoken alternative. Models show their capture date and contributor count so viewers know how current and complete they are; a crowdsourced model does not establish whether a route is currently usable. The clock tower photograph was supplied by the team `[FILL: source and permission]`; other heritage images and the map texture are AI-generated placeholders and must not be presented as real captures. `[FILL: participants in the evaluation gave consent and are identified by code only.]`

### 4.5 What we would change with more time

`[FILL: from the deferred findings in §3.5 plus: connect a real reconstruction pipeline and run one real capture at the clock tower; test with real groups of strangers rather than staged peers; finish the editorial direction; replace placeholder imagery; add the souvenir and score screen.]`

---

## 5 Conclusion

_~150 words. Status: drafted; add the evaluation outcome._

ChronoMap 3D turns the Assignment 2 concept into a complete, testable experience: people find a place, gather on site, coordinate by voice and radar, capture together inside one window, receive a 3D artifact and share it. The high-fidelity prototype makes explicit what Assignment 2 only described, in particular how strangers coordinate without being forced to speak, what happens after capture, and how bystanders and restricted places are protected. `[FILL: one or two sentences on what the evaluation showed and what version 2 changed.]` The open question remains the one Assignment 2 ended on: whether a short shared window yields a usable model, and whether a souvenir is enough to bring strangers together to find out.

---

## 6 Contribution

Peer assessment is completed in FeedbackFruits (linked from the Canvas submission page) on `[FILL: date]`. `[FILL, optional: a short table of who led which part: ideation, Figma screens, visual design, evaluation sessions, analysis, report sections, video.]`

---

## AI Use Statement

_Required: 50-300 words plus logs of prompts and outputs. The lecturer said to write first and use AI to improve, and that AI-first text is recognisable; the oral assessment asks you to explain what is written. Status: draft; the team must make it accurate._

Yes. The group used AI tools in completing this assessment.

`[FILL: for each tool, who used it and for what. Starting point from A2 and this project: Claude (Anthropic) through Claude Code and the Figma integration was used to build and link Figma screens from the team's direction, run contrast and layout checks, transcribe and summarise lecture recordings and meeting notes, and draft report structure and sections from the team's notes and files; Figma's image generator produced placeholder photographs and the map texture; the clock tower photograph is the team's own. Gemini and ChatGPT: [FILL if used in A3]. AI transcription was used for think-aloud recordings for transcription only, not interpretation.]`

How the output was incorporated and why: `[FILL: the design decisions, the evaluation and the arguments are the team's; AI output was reviewed and edited before inclusion; the design decision log (Appendix B) records where the team corrected or rejected AI proposals.]`

Logs: `[FILL: shareable links or an appendix PDF of the chat logs, including the Claude Code sessions and any ChatGPT or Gemini chats.]`

---

## References

_Verify every entry before submission; format consistently (the A2 report used numbered Vancouver style)._

1. Schönberger JL, Frahm JM. Structure-from-motion revisited. In: Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR); 2016 Jun 27-30; Las Vegas, NV, USA. p. 4104-13.
2. `[FILL: the community heuristics paper from the Week 5 reading, "Community Heuristics for User Interface Evaluation of Crowdsourcing Platforms"; take the full citation from Canvas.]`
3. Nielsen J. 10 usability heuristics for user interface design. Nielsen Norman Group; 1994, updated 2024. https://www.nngroup.com/articles/ten-usability-heuristics/ `[VERIFY: access date]`
4. `[FILL: the 3C collaboration model reading from Week 2; take the citation from Canvas.]`
5. W3C. Web Content Accessibility Guidelines (WCAG) 2.1. W3C Recommendation; 2018. https://www.w3.org/TR/WCAG21/ `[VERIFY: access date]`
6. `[FILL: Apple Human Interface Guidelines or Material Design 3, whichever §2.3 names, with URL and access date.]`
7. Brooke J. SUS: a "quick and dirty" usability scale. In: Jordan PW, Thomas B, Weerdmeester BA, McClelland IL, editors. Usability evaluation in industry. London: Taylor & Francis; 1996. p. 189-94.
8. `[FILL: any lecture or tutorial material cited, and any product documentation used in §4.3.]`

---

## Appendix A: Figma file and flows

- File: _ChronoMap 3D - Low-Fi Prototype_ (the file keeps its A2 name). `Page 1 - Hi Fi` holds high-fidelity version 1 `[and version 2?]`; `Page 3 · Editorial` holds the editorial direction. Prototype flows: _ChronoMap · full journey_ (starts at 01) and _Home (skip onboarding)_.
- `[FILL: Present-mode link for the final flow.]`

## Appendix B: Design decision log

A dated record of the team's requests, corrections and decisions, including what the team changed or rejected from AI-generated first drafts, is in `design-decision-log.md`. `[FILL: add names and dates per entry; attach as an appendix or a link.]`

## Appendix C: Evaluation materials

Task sheet, moderator script, consent wording, questionnaire items and the findings log: `evaluation/study-kit.md` and `evaluation/findings-log.md`. `[FILL: attach the final versions used.]`

## Appendix D: Assignment 2 feedback

`[FILL: the full tutor comment and the annotated comments, copied from Canvas.]`
