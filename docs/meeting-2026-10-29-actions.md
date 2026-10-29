# Action items: team meeting, 29 Oct 2026, 11:01 to 11:35

All four present. Source: the two Zoom transcripts of the same call (the second runs to 35:00).
Zoom transcribed in Korean, so quotes below are cleaned from the recoverable English.

**Deadline: report and Figma link, Mon 2 Nov 11:59pm.**

## The decision that changes the order of work

The call started assuming: run evaluations, then fix Figma, then write. It ended the other way
round. Yong demonstrated live that the prototype's screen logic is wrong, not just unfinished:

> "you join as not a host, but then the screen takes you and shows you that you're a host. That is
> not a valid design flaw that we can critique. That's just something that we didn't do correctly
> in the Figma."
> "Like content errors can't be a design fix."

John agreed: "let's get the Figma fixed, and then we start the questionnaires."

**This matters for marks, not just tidiness.** Section 3.5 is assessed on improvements the
evaluation produced. A wiring error that gets fixed is not a finding, and logging it as one
weakens the section. Running sessions against a prototype where Task 1 cannot be completed would
also waste participants who cannot be replaced.

---

## A. Figma, blocking everything else

| # | Action | Owner | By |
| --- | --- | --- | --- |
| A1 | **Split into two entry points: host onboarding and user onboarding.** Host branch keeps host screens; user branch assumes a host is acting in the background and strips host labelling. Branches rejoin at sections C and D. Dhiraj proposed, Yong and Ashlesha agreed. | Dhiraj + John | Thu |
| A2 | **Put the University Clock Tower in discovery / "Live near you" and make it clickable.** Task 1 currently cannot be completed: "that's not apparent on our join screens at all". Yong: making it clickable "immediately is task one complete". | John | Thu |
| A3 | **Remove host-only content from participant screens.** Two found live: the "you are host" state, and "start capture, needs 4 on site", which Yong noted "should be for the host". | John + Yong | Thu |
| A4 | **Split community and moderation** into user reporting and moderator action, per A1. | Dhiraj | Thu |
| A5 | **Un-grey or wire the dead buttons** found while clicking through. | John | Thu |
| A6 | **Rename the assigned position.** Separate from this meeting: the pilot tester abandoned a task because "station" collided with landmark names ending in "Station". | John | Thu |

## B. Tasks and protocol, blocked by A

| # | Action | Owner | By |
| --- | --- | --- | --- |
| B1 | **Write the expected path and success criteria for each of the five tasks.** Yong asked three times and it is still open: "what are we looking for in terms of what should they be clicking on for each one... so then we have something to compare to." | Yong | Thu |
| B2 | **Task 3 specifically** has no agreed flow: "I don't completely understand the path that we expect them to take." | Yong + John | Thu |
| B3 | **Name the starting screen for each task**, so a participant who ends task N in the wrong place still starts task N+1 correctly. A1 makes this easier: each task now begins at a known entry point. | Yong | Thu |
| B4 | **Build the questionnaire form and send it.** All items are written and paste-ready in `evaluation/study-kit.md` section 7. Participant code must be the first question. | John | Thu night |

## C. Recruitment

| # | Action | Owner | By |
| --- | --- | --- | --- |
| C1 | 3 to 5 participants | Dhiraj | Fri |
| C2 | 3 to 5 participants | Ashlesha | Fri |
| C3 | 1 think-aloud + 1 questionnaire, **different people** | Yong | Fri |
| C4 | Run think-aloud sessions on a phone, two team members per session | all | Fri |

Ten total, five per technique, no one doing both. Over-recruit to twelve.

## D. Report

| # | Action | Owner | By |
| --- | --- | --- | --- |
| D1 | **State what the evaluation set out to learn.** Dhiraj's review, and the sharpest point in the call: "nowhere does the report say what the evaluation set out to learn. The task and items imply four questions, but the report never states them." | assistant | Thu |
| D2 | **Watch the word count.** 4,310 words excluding references and appendices; 4,965 counting everything, which is what most tools report. Roughly 690 words of headroom and the findings still to write. Trim sections 2 and 4 before trimming the evaluation. | assistant | ongoing |
| D3 | **Say how the app differs from what exists.** Raised by John. Already written in section 4.3 with a comparison table and prior-art citations; needs the team to read and agree it. | all to review | Fri |
| D4 | Dhiraj to send his list of unanswered questions from the PDF review. | Dhiraj | Thu |
| D5 | AI Use Statement, 50 to 300 words plus conversation logs. | John | Sun |

## E. Parked, deliberately

Dhiraj raised the voice-call and camera conflict: "if I'm on the camera screen, do you expect me
to close it and then join the voice call? Isn't that inconvenient?" His suggested fix was an
overlay on the camera screen, or simply a direction arrow pointing where to move.

John parked it: "I'll just leave it and then we'll change it after." Reasonable under time
pressure, and it is a real candidate for the "what we would change with more time" section.

**One caution.** Dhiraj also suggested framing feature ideas as role-based feedback, for example
"users want a better profile screen" or "hosts want to take part in moderation". These are good
design rationale, but they are not evaluation findings unless a participant actually says them.
In section 3.4 they read as data; in section 3.3 or the decision log they read as reasoning, which
is what they are.
