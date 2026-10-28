# ChronoMap 3D: Human Design Direction Log

A record of the requests, corrections and decisions the team made while moving the prototype from AI-generated defaults to a human-directed design. It is built from the working conversation on 16 Oct 2026, in the order things happened.

**How to read this.** An AI assistant (Claude, through Claude Code and the Figma integration) carried out the edits. Every row below starts from something a team member asked for, corrected, rejected or chose. Entries marked `[TEAM TO CONFIRM]` need a team member to add detail or check the wording before this goes in the Assignment 3 submission.

Related file: `docs/INFO90007_Assignment_3_ChronoMap_3D.md` (the report), where this log can be cited as Appendix B and in the AI Use Statement.

---

## 1. What the team identified as "AI-generated" in the design

These are the team's own diagnoses (from the pasted critique and follow-up feedback), not the assistant's.

| Symptom                                                                    | Team's direction                                                                                                                   |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Everything sits in a rounded card, so the screens feel repetitive and flat | Use open layouts, dividers, type and spacing. Keep cards for notices and grouped information                                       |
| No identity: could be an app for anything                                  | Archival field journal, contemporary museum, editorial cartography. Warm paper, forest green, charcoal text, restrained terracotta |
| Weak hierarchy: titles, metadata and actions weigh the same                | One dominant element and one primary action per screen                                                                             |
| Generic placeholder squares and icons                                      | Real or meaningful imagery: heritage photos, maps, coordinates, dates                                                              |
| Same layout repeated on every screen                                       | Varied, deliberate compositions                                                                                                    |
| Standard navy buttons, pale backgrounds, trendy effects                    | No gradients, glassmorphism or decorative blobs; consistent tokens                                                                 |

---

## 2. Chronological log of human requests and decisions

Type: **Direction** (new work asked for), **Correction** (something was wrong), **Decision** (team chose between options), **Constraint** (a rule to follow), **Feedback** (reaction to a screenshot).

| #   | Team request or decision (quoted or closely paraphrased)                                                           | Type                   | What changed                                                                                                                  |
| --- | ------------------------------------------------------------------------------------------------------------------ | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 1   | Connect to the Figma file. Location should be corrected to "where we are, amphitheatre"                            | Direction / Correction | Figma connected. Location text moved from a hospital to the team's real campus location                                       |
| 2   | "Like button… maybe correct it"                                                                                    | Correction             | The faint "21 want this" text became a bordered thumbs-up chip showing the count only                                         |
| 3   | "More screens for voice call while filming, as that is what is meant to be done for collocation"                   | Direction              | Voice-channel join, live call and host-callout screens added (13, 14, 15)                                                     |
| 4   | "Artifact and after-filming screen is not there"                                                                   | Direction              | Capture complete, building the model and artifact screens added (16, 17, 18)                                                  |
| 5   | Shared the updated Figma link and approved access when asked                                                       | Constraint             | Work continued on the renamed ChronoMap file                                                                                  |
| 6   | Pasted colour theory and white-space principles and asked to apply them (plan first)                               | Direction              | Contrast audit run; 16 failing colour pairs fixed; semantic tokens added                                                      |
| 7   | Chose the Figma light theme as the source of truth and "audit + fix tokens" first                                  | Decision               | Layouts left as they were in the first pass                                                                                   |
| 8   | "Add the workflow between screens, don't forget that at the end" (asked three times as screens grew)               | Direction              | Click-through prototype links added; flow start points set                                                                    |
| 9   | Pasted a critique of what makes the design look AI-generated, with an art direction                                | Direction              | Led to the editorial redesign (see 1)                                                                                         |
| 10  | Chose: build the redesign on a new Figma page; use generated placeholder imagery                                   | Decision               | `Page 3 · Editorial` created; placeholder photos generated                                                                    |
| 11  | Pasted a full redesign brief (principles, constraints, workflow)                                                   | Constraint             | Followed for tokens, type and screens (Fraunces and Inter, 8-point spacing, one accent)                                       |
| 12  | Asked whether to build in Figma or the app: answered "only Figma"                                                  | Decision               | App code left alone for the redesign                                                                                          |
| 13  | "Lets go" after the pilot screens, then "improve the design" while the rest was built                              | Direction              | Remaining screens built; clipped text and wrapping fixed                                                                      |
| 14  | "Each container is a little more taller and wider" with a screenshot                                               | Feedback               | Chose Page 1 only, "taller and edge to edge": cards fill the screen width with more height                                    |
| 15  | "Cards are nice for 7… it's more like notices… I might get rid of the outlines"                                    | Correction / Decision  | Screen 7 containers restored as inset, rounded, tonal notices. Design language: lists are edge to edge, notices are inset     |
| 16  | "Check box is funny in screen 7"                                                                                   | Correction             | Tick icon re-centred in the checkbox                                                                                          |
| 17  | "Screen 8 is overloading"                                                                                          | Correction             | Quorum and window paired side by side; two notices merged into one card; copy trimmed                                         |
| 18  | "You can just 4" (screenshot of the quorum field)                                                                  | Correction             | Quorum value shortened to "4"; label shortened so it no longer collides                                                       |
| 19  | "Base the profile screen on the app prototype's profile screen, make it there"                                     | Direction              | Profile (screen 19) built from `src/app/(tabs)/you.tsx`                                                                       |
| 20  | "This profile screen is too long"                                                                                  | Correction             | Resized to 844 px like other screens and tightened spacing                                                                    |
| 21  | "What about sharing it to social media for the artifact created"                                                   | Direction              | Share exhibit screen (20) with preview, format, caption, targets and privacy controls                                         |
| 22  | Context: the app recreates real places; this is Assignment 3 prep. Asked for a full markdown document              | Direction              | Assignment 3 report draft written, with placeholders for real data                                                            |
| 23  | Provided lecture transcripts and asked what the oral assessment covers                                             | Direction              | Oral assessment details and Assignment 3 hints extracted                                                                      |
| 24  | "Viewing page, community page between 2 and 3, report this 3D, flag location so moderators and admins are there"   | Direction              | Community tab and feed, model viewing, report, report sent, and moderator queue (21-25)                                       |
| 25  | "Flag the user or in the call itself… if they are photographing strangers, and chat in the feed"                   | Direction              | In-session flag screen (26) and community chat with per-message flags (27)                                                    |
| 26  | "Sort the pages well in the structure"                                                                             | Direction              | Screens grouped into labelled sections by flow, on both pages                                                                 |
| 27  | "Don't use a white background"                                                                                     | Constraint             | Section backgrounds changed to warm neutrals                                                                                  |
| 28  | "The image of the amphitheatre is incorrect" (supplied a real photo)                                               | Correction             | AI render of a stone ruin replaced by the team's photo                                                                        |
| 29  | Supplied a clock tower photo: "use that instead for photo taking". Chose "make it the capture location everywhere" | Direction / Decision   | Location, imagery, app landmark list and report switched to the University clock tower                                        |
| 30  | "Can we remove Royal Melbourne Hospital, it is not really a place for people to be filming"                        | Correction             | Replaced across Figma and the app. Kept once as the moderation-queue example of a flagged restricted area `[TEAM TO CONFIRM]` |
| 31  | "Tap the user and options come down to flag them, and make the flag red" (screenshot of screens 14 and 15)         | Direction              | Participant dropdown (14a) and red flagged state (14b) added                                                                  |
| 32  | "Keep a record of all the human requests, from AI-generated to human design"                                       | Direction              | This document                                                                                                                 |

---

## 3. Things the assistant did that the team changed or rejected

This is the clearest evidence that decisions were human-led.

| Assistant proposal                                                         | Team response                                 | Result                                            |
| -------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------- |
| Edge-to-edge cards on every screen, including the rules notices (screen 7) | "Cards are nice for 7… it's like notices"     | Reverted for notices; edge-to-edge kept for lists |
| AI-generated stone amphitheatre render as the artifact image               | "Image of the amphitheatre is incorrect"      | Replaced with a real photo, then the clock tower  |
| Hospital as a capture location                                             | "Not really a place for people to be filming" | Removed from demo content and the app             |
| Quorum shown as "4 people on site"                                         | "You can just 4"                              | Shortened                                         |
| Long profile and crowded create-session screens                            | "Too long", "overloading"                     | Shortened and simplified                          |
| White section backgrounds on the canvas                                    | "Don't use a white background"                | Warm neutral                                      |

---

## 4. Principles the team set (reuse when reviewing new screens)

1. One dominant element and one primary action per screen.
2. Lists are open rows; cards are for notices and grouped information only.
3. Real places and real photos, never generic placeholders, and never a place people should not be filming.
4. Voice and collocation are designed explicitly, with a non-spoken option.
5. Safety and moderation are visible: report a model or location, flag a person live, flag chat messages, and a moderator queue.
6. Every screen is linked into a click-through flow so the journey can be demonstrated.
7. Accessibility checked (WCAG AA) before sign-off.

---

## 5. Open items

- Image #15 (screens 14 and 15, clock tower, flag in the header): shared without a stated request. `[TEAM TO CONFIRM: what should change on these screens?]`
- Add dates and the name of the team member who made each decision. `[TEAM TO CONFIRM]`
- The clock tower and amphitheatre photographs were supplied by the team. `[TEAM TO CONFIRM: source and licence.]`
- Placeholder AI imagery that remains (for example the Royal Exhibition Building photo and the map texture) is still to be replaced with real photographs.
