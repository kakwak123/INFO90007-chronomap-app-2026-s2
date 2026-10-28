# ChronoMap 3D: High-Fidelity Prototype and Evaluation

**INFO90007 Social Computing, Assignment 3**
The University of Melbourne

| Team member            | Student ID |
| ---------------------- | ---------- |
| John Minseok Kim       | 1079731    |
| Dhiraj Prakash Sajnani | 1841950    |
| Yong En Foo            | 1270432    |
| Ashlesha Chetan Patil  | 1852536    |

Submission date: `[INSERT DATE]`

> **How to use this draft.** Everything in plain text is grounded in our Assignment 2 report, the Figma file and the app source. Anything in `[INSERT: …]` needs our real data (user test results, tutor and peer feedback, dates, figures). Do not submit placeholders. Remove this box before submitting.

---

## 1. Introduction

ChronoMap 3D lets groups of people who are standing at the same real place photograph it together during a short, shared capture window, so the photos can be combined into one 3D recreation of that place. Assignment 2 argued the concept and tested it with paper sketches, a storyboard and low-fidelity wireframes. This report covers the next step: a high-fidelity prototype, its design rationale, a working mobile implementation, and an evaluation with users.

The prototype addresses the three course requirements the same way Assignment 2 did:

- **Crowdsourcing.** Many contributors each supply viewpoints, and a community request list says which places are wanted.
- **Collocation.** A session can only be joined from inside the landmark radius, and participants coordinate by voice while on site.
- **Synchronicity.** Everyone captures inside one shared time window, with live coverage shown on a radar.

### 1.1 What changed since Assignment 2

| Area           | Assignment 2 (low-fi)               | Assignment 3 (hi-fi)                                                                                                                             |
| -------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Visual design  | Greyscale wireframes                | Two high-fidelity directions: an original prototype (navy and amber) and an editorial "field journal" redesign (paper, forest green, terracotta) |
| Coordination   | Described as people talking on site | Explicit voice-channel screens during capture, a host callout, and one-tap replies for people who prefer not to speak                            |
| After capture  | Result and share screen             | Capture-complete, processing timeline, artifact exhibit, and a social share screen                                                               |
| Members        | Not designed                        | A profile screen with stats, badges and recent captures                                                                                          |
| Flow           | Screens shown separately            | Every screen linked into a click-through prototype                                                                                               |
| Implementation | None                                | A working Expo (React Native) app that runs the capture flow                                                                                     |

`[INSERT: one or two sentences on the specific tutor or peer feedback from Assignment 2 that drove these changes. See Section 2.]`

---

## 2. Feedback and Response

`[INSERT: complete this table from the real Assignment 2 feedback. Only list feedback we actually received.]`

| #   | Feedback received | Source           | Design response | Where to see it      |
| --- | ----------------- | ---------------- | --------------- | -------------------- |
| 1   | `[INSERT]`        | `[Tutor / peer]` | `[INSERT]`      | `[Screen / section]` |
| 2   | `[INSERT]`        | `[Tutor / peer]` | `[INSERT]`      | `[Screen / section]` |
| 3   | `[INSERT]`        | `[Tutor / peer]` | `[INSERT]`      | `[Screen / section]` |

---

## 3. The High-Fidelity Prototype

The prototype has 20 screens in Figma, covering the full journey from first launch to a shared 3D artifact. Figure 1 lists them in order.

`[INSERT: Figure 1, a photo or export of the Figma canvas showing all screens in flow order.]`

### 3.1 Screen inventory and user journey

| #   | Screen                   | Purpose                                                                       |
| --- | ------------------------ | ----------------------------------------------------------------------------- |
| 01  | Onboarding               | Explains the purpose before any account or permission request                 |
| 02  | Home: Nearby             | Live sessions near the user, a "happening now" prompt, and a code or QR entry |
| 03  | Home: Requests           | The community demand board (places people want captured)                      |
| 04  | Home: Events             | Planned visits that strangers can join                                        |
| 05  | Request detail           | Votes, conditions still needed, nearby discussion                             |
| 06  | Notifications            | Rally pings, replies and earned badges                                        |
| 07  | Community rules          | Safety and privacy rules, with explicit agreement                             |
| 08  | Create a session         | Host sets location, target, condition, quorum and window                      |
| 09  | Rally: gathering         | Quorum progress, who is on site and who is on the way                         |
| 10  | Briefing (host)          | Host assigns stations on a coverage radar                                     |
| 11  | Briefing (participant)   | Each person sees their assigned station                                       |
| 12  | Two groups, one landmark | Resolves a clash with another group at the same place                         |
| 13  | Voice channel: join      | Joins the on-site call before capture                                         |
| 14  | Filming: live call       | Timer, host voice cue, coverage, capture controls                             |
| 15  | Filming: host callout    | Host moves someone; one-tap replies                                           |
| 16  | Capture complete         | Session summary and each person's contribution                                |
| 17  | Building the model       | Upload and reconstruction progress                                            |
| 18  | Artifact                 | The finished 3D model presented as an exhibit                                 |
| 19  | Profile                  | Stats, badges, recent captures, settings                                      |
| 20  | Share exhibit            | Social sharing of the artifact                                                |

The main path is 01 → 02 → 09 → 10 → 13 → 14 → 16 → 17 → 18 → 20. Other entry points (the request board, events, notifications and a code or QR entry) lead into the same rally. All 87 links in the original prototype were checked for reachability: every screen can be reached from screen 01 and none is a dead end. The editorial version links the 15 screens built so far.

### 3.2 Collocation: voice during capture

Assignment 2 said participants "talk to each other to co-ordinate where each person is taking their photos from". The prototype now designs that explicitly rather than assuming it:

- **Join the call (13).** Voice is opened by the host from the briefing. Everyone joins muted by default, so strangers are not forced to speak.
- **Live capture (14).** A voice strip shows who is speaking and the host's latest instruction, next to the coverage radar and the capture controls.
- **Host callout (15).** The host can send a spatial instruction (for example "move 2 m left, aim at the clock face"). Quick replies ("On my way", "Need a hand", "Ready") let people respond without talking.
- **Opt-out (11).** The briefing says "You do not have to talk" and offers the one-tap alternative, because speaking to strangers can be uncomfortable.

### 3.3 After filming: artifact and sharing

After the window closes, the capture-complete screen (16) shows what the group made and each person's own contribution, then processing (17) shows a staged timeline (photos uploaded, aligning cameras, building the surface, texturing). The artifact (18) gives the model most of the screen and presents it like a museum exhibit: exhibit number, coordinates, capture date, contributors, photos and coverage. The badge earned and any missing angle are shown with a route back to capture again.

The share screen (20) supports the "I helped create this" motivator described in Assignment 2 (Section 3.3.4). The user previews a share card, picks a format (story, square or link only), edits the caption, and chooses a destination. Two privacy controls apply by default: exact coordinates are off (location is shown to about 100 m), and faces and licence plates are blurred before reconstruction, consistent with Assignment 2 Section 4.4.

### 3.4 Profile

The profile (19) was based on the app's profile screen. It shows a name and role, three stats (models, average sync, hosted), badges (Room Host, S-Rank, Blind-spot closer, Flash mob starter, Priority rendering), recent captures and settings, including a demo-location switch and links back to the tutorial and community rules.

---

## 4. Visual Design System

### 4.1 Why we redesigned

The first high-fidelity pass was functionally complete but looked generic: nearly everything was a rounded card, hierarchy was weak, and nothing suggested heritage or place. We therefore built a second direction, an editorial "archival field journal" look, in a separate Figma page so the original stays available for comparison. The two directions are evaluated in Section 7.

### 4.2 Editorial direction

| Token     | Value     | Use                                                   |
| --------- | --------- | ----------------------------------------------------- |
| Paper     | `#F4F0E7` | Background (the 60%)                                  |
| Forest    | `#263C32` | Primary actions, headings (the 30%)                   |
| Ink       | `#282A27` | Body text                                             |
| Clay      | `#C77743` | The single accent (the 10%), used for fills and lines |
| Clay text | `#8F4A1F` | Accent text (Clay alone is only 3:1 on paper)         |
| Stone     | `#DCDDD4` | Disabled states and dividers                          |

Type pairs **Fraunces** (headings) with **Inter** (body and controls). Spacing follows an 8-point scale, with a single 8 px corner radius. Layouts use dividers and typography instead of nested cards, keeping cards for notices and genuinely grouped information. The 3D model and heritage imagery are the visual focus, and each screen has one primary action.

### 4.3 Accessibility

We audited every text and background pair against WCAG 2.1 AA (4.5:1 for body text, 3:1 for large text). On the original prototype, 16 colour pairs failed (about 80 text elements), mainly amber on cream (2.4:1), white on amber (2.7:1) and grey on tinted cards (4.1-4.4:1). We fixed these by darkening the foreground only, so the appearance is unchanged. After the fix the audit reports zero failures. The editorial pilot screens also pass. `[INSERT: re-run the audit on the final editorial screens and update this paragraph.]`

Colour is never the only signal: states carry text labels (for example "LIVE", "Thin - assign"), and primary buttons are 48-52 px tall. `[INSERT: confirm touch-target sizes for links and small controls.]`

### 4.4 Imagery

The prototype's main capture location is the University of Melbourne clock tower, shown with a photograph supplied by the team. `[INSERT: photo source and licence or permission.]` The other heritage photographs (for example the Royal Exhibition Building), the map texture and the road-map style imagery are AI-generated placeholders (see the AI Use Statement). They show what real content would look like and must be replaced with real captures and licensed photographs before any public release.

---

## 5. Mapping to the Community Heuristics

This extends Table 1 of Assignment 2 with heuristics the new screens address.

| Category      | Heuristic                       | How the hi-fi prototype addresses it                                                        |
| ------------- | ------------------------------- | ------------------------------------------------------------------------------------------- |
| Purpose       | Clarity, Visibility             | Onboarding states the purpose first; "How ChronoMap works" can be replayed from the profile |
| Moderation    | Regulation                      | Rules screen with explicit agreement; privacy blur; report and block noted in the rules     |
| Members       | Self-presentation               | Profile with name, role, stats and badges                                                   |
| Members       | Recruitment                     | QR and four-letter code entry; share card; rally link                                       |
| Common ground | Events                          | Events tab with planned visits and who is going                                             |
| Common ground | Subgroups                       | Condition-based requests (for example golden hour) form natural interest groups             |
| Contribution  | Request list, Targeted requests | Requests tab; "happening now" prompt when the user is at a landmark                         |
| Contribution  | Threshold                       | Quorum ("needs 4 on site") before capture can start                                         |
| Contribution  | Motivators                      | Badges, S-Rank, souvenir artifact, social sharing                                           |
| Platform      | Virtual co-presence             | Live voice strip, host callout, coverage radar                                              |
| Platform      | Rituals                         | Join, brief, capture window, reveal                                                         |
| Platform      | Aesthetics                      | The editorial direction (Section 4)                                                         |

`[INSERT: remove any rows we do not want to claim after reading the heuristic cards again.]`

---

## 6. Working Implementation

The prototype also exists as a runnable mobile app in this repository, so the interactions in the Figma prototype are exercised in code.

### 6.1 Stack

- **Expo SDK 57** with **React Native 0.86**, TypeScript, and **Expo Router** for file-based navigation (`src/app`).
- State in a **zustand** store (`src/store`).
- Device capabilities through Expo modules: camera (`expo-camera`), location (`expo-location`), motion sensors (`expo-sensors`), haptics, clipboard, and network status.
- A QR code is generated for rally posters and invitations (`react-native-qrcode-svg`).

### 6.2 Architecture

Application logic is kept apart from screens, in `src/domain`:

- **Sessions** (`session.ts`): create, join, leave, claim a position, ready check, start sequence, record a shot, retake.
- **Coverage ring** (`ring.ts`): divides the site into 4, 8 or 12 slices and reports which are held, which are empty and whether the ring is closed. A "blind spot" demonstration marks the southern side as uncovered.
- **Sync scoring** (`sync.ts`): scores each participant from how steady the phone was at the shutter (gyroscope rotation rate) and how tightly the group fired, then ranks the result S, A, B or C.
- **Geography** (`geo.ts`): distances and bearings, used to place people on the radar and to check the user is inside the landmark radius.
- **Landmarks** (`landmarks.ts`): the places available to capture, now including the University Clock Tower. _Its coordinates are approximate and must be replaced with the surveyed position._

Services (`src/services`) wrap photos, sessions, connectivity and reconstruction. Domain logic has unit tests (`src/domain/__tests__`) for geography, the ring, sessions, sync scoring and miscellaneous helpers. The suite currently passes: 5 test suites, 35 tests.

### 6.3 What is simulated

We want to be clear about the boundary between prototype and product:

- **Reconstruction is stubbed.** Upload and model generation drive the processing screen but nothing is sent anywhere and no 3D model is produced. A real pipeline (storage, structure-from-motion, or Gaussian splatting) would implement the same interface.
- **Other participants are simulated.** Demo sessions and peers let one device walk through the whole flow.
- **A demo-location switch** places the user about 120 m from a landmark so sessions appear without travelling.
- **Voice and social posting are designed in Figma** but are not connected to real services in the app.

### 6.4 Difference from the Assignment 2 capture model

Assignment 2 described a capture _window_ in which people photograph freely for a few minutes. The app implements a stricter variant: participants claim positions on a coverage ring, then fire a synchronised shutter sequence, and a sync score reflects steadiness and timing. The Figma prototype keeps the window model for the live-call screens. `[INSERT: state which model we are presenting and justify it, or note it as a design decision still under evaluation.]`

---

## 7. User Evaluation

`[INSERT: all content in this section must come from the real study.]`

### 7.1 Method

| Item             | Detail                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| Participants     | `[INSERT: number, who they were, how recruited]`                                                        |
| Prototype tested | `[INSERT: original, editorial, or both; Figma or app]`                                                  |
| Tasks            | `[INSERT: for example join a session, host a rally, take part in capture, find the artifact, share it]` |
| Measures         | `[INSERT: task success, time, errors, SUS or other survey, open comments]`                              |
| Setting and date | `[INSERT]`                                                                                              |

### 7.2 Results

| Measure    | Result     |
| ---------- | ---------- |
| `[INSERT]` | `[INSERT]` |
| `[INSERT]` | `[INSERT]` |

### 7.3 Findings and design changes

| Finding    | Evidence   | Change made |
| ---------- | ---------- | ----------- |
| `[INSERT]` | `[INSERT]` | `[INSERT]`  |

Changes already made during development (before or alongside testing): contrast fixes (Section 4.3), a full-width card treatment for list screens with inset cards reserved for notices, a simpler session-creation screen (quorum and window shown side by side, two notices merged into one), and a shorter profile screen.

---

## 8. Ethics, Privacy and Safety

- **Safety.** The rules screen and onboarding warn users to stay off roads and out of restricted areas, and sessions verify that the user is inside the landmark radius.
- **Privacy of bystanders.** Faces and licence plates are detected and blurred before reconstruction, and this is repeated on the share screen. Sharing hides exact coordinates unless the user opts in.
- **Voice.** Joining the call is muted by default, with a non-spoken alternative, to respect people who do not want to talk to strangers. `[INSERT: any moderation, reporting or recording policy for voice.]`
- **Heritage places.** Recreating real places carries responsibilities about access, accuracy and attribution. Models show their capture date and contributor count so viewers know how current and complete they are. A crowdsourced model does not establish whether a route is currently usable, a limit stated in Assignment 2.
- **Imagery.** The clock tower photograph is a real photo supplied by the team (licence to be confirmed). The remaining placeholder photographs are AI-generated and must not be presented as genuine historical images.

---

## 9. Limitations and Future Work

- The core hypothesis, that a short shared window yields a usable 3D model, is still untested because reconstruction is simulated.
- Voice and posting to social platforms are designs, not integrations.
- Internet access, camera variation and uncaptured areas remain as set out in Assignment 2 Section 4.3.
- The editorial redesign is built for 15 of 20 screens so far. `[INSERT: update when complete.]`
- Next steps: connect a real reconstruction pipeline, run a small real-world capture at a landmark, add a souvenir and score screen, and replace placeholder imagery with licensed photographs.

---

## 10. Conclusion

The high-fidelity prototype turns the Assignment 2 concept into a complete, testable experience: people find a place, gather on site, coordinate by voice, capture together, receive a 3D artifact and share it. A working app implements the capture logic, and an accessibility-checked design system gives it a distinct identity suited to heritage places. `[INSERT: one or two sentences summarising what the evaluation showed and what we would change next.]`

---

## AI Use Statement

`[CONFIRM AND EDIT: this is a draft for the team to verify and make accurate before submission.]`

Yes. The group used AI tools during this assignment. Claude (Anthropic) was used through Claude Code and the Figma integration to help build the Figma prototype screens and prototype links, run contrast and layout checks, implement parts of the Expo app, and draft this document from our notes and project files. Figma's image generator was used to produce some placeholder photographs and the map texture. The clock tower photograph was supplied by the team and was not AI-generated. `[INSERT: any other tools used, for example Gemini, ChatGPT or Codex, and for what.]` The design decisions, the evaluation and the arguments are the team's own. We reviewed and edited AI-assisted output before including it.

---

## References

1. Schönberger JL, Frahm JM. Structure-from-motion revisited. In: Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR); 2016 Jun 27-30; Las Vegas, NV, USA. p. 4104-13.
2. W3C. Web Content Accessibility Guidelines (WCAG) 2.1. `[INSERT: URL and access date]`
3. `[INSERT: any further sources cited, such as the community heuristics framework from the subject materials.]`

---

## Appendix A: Figma and repository

- Figma file: `ChronoMap 3D - Low-Fi Prototype`. `Page 1 - Hi Fi` holds the original prototype, and `Page 3 · Editorial` holds the editorial redesign. `[INSERT: shareable view link.]`
- Repository: `INFO90007-chronomap-app-2026-s2`. Start the app with `npx expo start`.
- Assignment 2 report: `docs/INFO90007_Assignment_2___ChronoMap_3D.pdf`.

## Appendix B: Design decision log

A dated record of the team's requests, corrections and decisions that shaped the prototype, including what the team changed or rejected from AI-generated first drafts, is in `docs/design-decision-log.md`. `[INSERT: confirm names and dates before submitting.]`
