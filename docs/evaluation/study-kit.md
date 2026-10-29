# ChronoMap 3D user evaluation: study kit

Everything needed to run the Assignment 3 evaluation this week. Built from the A3 handout (one querying and one observation technique, at least 10 participants, 5 per technique), the Week 9 lecture and Tutorial 10 protocols, and the lecturer's advice in the feedback sessions. Fill the `[FILL]` items, print the task sheet, and go.

Deadline logic: report due Mon 2 Nov. Sessions Mon 26 to Wed 28 Oct, analysis Thu 29, prototype version 2 Thu 29 to Fri 30, write-up Fri 30 to Sat 31, read-through Sun 1 Nov.

---

## 1. Decisions to make before the first session

| Decision                | Recommendation                                                                                 | Why                                                                                                                                                                                                                                                                  |
| ----------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Which prototype to test | Figma **Page 1** (high-fidelity **v1**, the current build), Present mode, flow _ChronoMap · full journey_, on a phone | It is complete and fully linked. An incomplete page produces dead-end findings that are about missing screens, not design.                                                                                                                                           |
| Observation method      | **Think-aloud**                                                                                | Simplest to run reliably; shows where people get stuck and why, in the moment.                                                                                                                                                                                       |
| Querying method         | **Questionnaire**: SUS + 6 custom items + 2 open questions                                     | Complements think-aloud with a comparable usability number and measures the social constructs observation cannot (willingness, trust, comfort). The lecturer said the query method should gather what observation could not. Can be done remotely, which saves days. |
| Device                  | One phone, prototype opened in the Figma app or mobile browser, fitted to screen               | Realistic context. Laptop is acceptable if the phone link misbehaves; note which was used.                                                                                                                                                                           |
| Recording               | Audio only, with verbal consent; plus a screen recording if easy                               | Lecturer: record audio, avoid video, AI transcription allowed for transcription only.                                                                                                                                                                                |
| Participants            | 10 people, none from the team, **5 + 5 different people**                                      | Handout and lecturer. Pick critical people; some classmates who know the design space are a good idea.                                                                                                                                                               |

---

## 2. Recruitment

Target 10 to 12 people (two spares). Record for each: code (P1 to P5 think-aloud, Q1 to Q5 questionnaire), role or background, age band, whether they have used any 3D scanning or photogrammetry app, whether they are in INFO90007. Aim for a mix of classmates and non-classmates.

Message to send: _"We are testing a prototype of a student app for a university assignment. It takes about 25 minutes [think-aloud] / 15 minutes [questionnaire]. Nothing you do is a test of you; we are testing the design. Audio may be recorded for note-taking and deleted after the assignment. No names are published."_

---

## 3. Setup checklist (do once)

- [ ] Open the Figma prototype on the test phone and run the full journey end to end. Fix any dead link now.
- [ ] Confirm the five tasks below can each be completed from the stated start screen. Note the exact tap path for each (the "expected path" column) so assists are recorded correctly.
- [ ] Prepare the questionnaire as a form (Google Forms is fine) with the items in §7, in that order, plus a participant-code field.
- [ ] Print or open: task sheet (§5), moderator script (§6), session notes template (§8).
- [ ] Decide who moderates and who takes notes for each think-aloud session (two team members is ideal).

---

## 4. Context briefing (read aloud to every participant, both groups)

> "ChronoMap 3D is an app where people who are at the same place photograph it together during a short time window, and the photos are combined into one 3D model of that place.
>
> Imagine you are standing at the University of Melbourne clock tower on a sunny afternoon. Three other people you have never met are there with the app. In this prototype the other people are staged: things will sometimes happen on their own, like the group filling up or the host sending you an instruction. Please treat them as if they were real.
>
> This is a prototype, so some buttons are not wired. If something does not respond, say so and move on; that is useful for us."

The staged-peer wording follows the lecturer's advice for synchronous systems: make it clear in the instructions that other users are acting.

---

## 5. Tasks (same five for both groups)

Give one task at a time. Read it aloud and hand over the card. **Reset the prototype to the start
screen before each task**, so a participant who gets lost in T2 still begins T3 correctly.

Two tasks were reworded on 29 Oct after the draft review found them leading. The wording below is
the one to use.

| # | Task as read to the participant | Start screen | Expected path | Success criterion |
| --- | --- | --- | --- | --- |
| T1 | "A capture session is happening right now at the clock tower. Join it." | 02 Home: Nearby | 02 Home, tap the Clock Tower card in Live near you, arrive at 09P | Reaches **09P Rally: participant view** |
| T2 | "You are in the session and the host has briefed everyone. Find out which position you have been given and where it is, then let the host know you are ready." | 09P Rally | 09P, continue to 11 Briefing: your position, use any reply control | States their position and roughly where it is, **and** signals ready by any means. **Record which method they chose.** |
| T3 | "Capture has started. The host asks you to move two metres to your left. Respond to them, then tell me which side of the tower still needs photos." | 14 Filming: live call | 14, acknowledge the callout (15), read the coverage state | Acknowledges the host, **and** names a side that needs photos. **Record whether they read it from the radar or from the written label.** |
| T4 | "The capture is finished. Find the finished 3D model and share it, but do not reveal the exact location." | 16 After filming | 16, 17, 18 Artifact, 20 Share, turn the location control off | Reaches **20 Share** with exact location off |
| T5 | "During a session you notice another participant is photographing strangers' faces. Do something about it." | 14 Filming: live call | 14, tap the participant, 14a options, flag, 14b flagged | Opens the participant menu and flags the person |

Optional T6 if time allows: "Suggest a place you want captured, and vote for one that is already
listed." (02 to 03 to 05)

Timing: about 3 minutes per task. Stop at 5 minutes and record the task as failed.

### Why T2 and T3 were reworded

**T2 previously ended "without speaking".** That states the success criterion inside the task. If
a participant then uses a one-tap reply, it shows only that they followed an instruction, and the
report cannot claim people preferred tapping to speaking. The phrase is removed, and **which
method they choose unprompted is now the finding**. If most reach for a tap over the microphone
without being told to, that is evidence; if they reach for the mic, that is a more interesting
result and the design argument needs revisiting.

**T3 is partly given away by the interface.** The capture screen prints the thin side as text and
the host callout repeats it, so a participant can answer without reading the radar at all. We are
not hiding the label, because changing the design to suit the test would make the result say less,
not more. Instead the success criterion is "names a side", and the moderator records **how** they
got there. If everyone reads the label and nobody reads the radar, that is a finding about the
radar being redundant, and it belongs in the report as one.

---

## 6. Think-aloud protocol (P1 to P5, in person)

From Tutorial 10: the participant works **alone**; make them comfortable; do not provide solutions; let them resolve problems. Record audio with consent.

**Script.**

1. _Welcome and consent (2 min)._ "Thanks for helping. We are testing the design, not you. Mistakes show the system's limitations, not your ability. I will ask you to think out loud: say what you are looking at, what you expect to happen, and what you are trying to do. I will not help unless you are completely stuck. May I record audio for note-taking? It will be deleted after the assignment is submitted." Record the answer.
2. _Context briefing (1 min)._ Read §4.
3. _Warm-up (1 min)._ "Open the app and tell me what you think it is for." (Observe 01 Onboarding; note whether the purpose is understood before any tap.)
4. _Tasks (15 min)._ One at a time. If silence lasts more than 10 seconds: "What are you thinking?" or "What do you expect that to do?" If stuck for 60 seconds, give the smallest hint, record it as an **assist**, and continue. Never explain why something is designed as it is.
5. _After each task (1 min)._ "What did you expect to happen there?" and "Was anything unclear?"
6. _Debrief (3 min)._ "What was the most confusing moment?" "Would you join a session like this with people you do not know? Why or why not?" "Would you use the voice channel or the quick replies?" "Anything you would change?"
7. Thank them. Note the end time.

**Note-taker records** (template in §8): task outcome, assists, errors, time, verbatim quotes, observed problems with the screen number. Do not interpret during the session.

---

## 7. Questionnaire protocol (Q1 to Q5, can be remote)

1. Send the prototype link, the context briefing (§4) and the five tasks (§5) as a task sheet. Ask them to complete the tasks alone, in order, then fill the form straight after. Ask them to note roughly how long the tasks took.
2. The form, in this order:

**Part A. System Usability Scale** (Brooke 1996). Rate 1 = strongly disagree to 5 = strongly agree.

1. I think that I would like to use this system frequently.
2. I found the system unnecessarily complex.
3. I thought the system was easy to use.
4. I think that I would need the support of a technical person to be able to use this system.
5. I found the various functions in this system were well integrated.
6. I thought there was too much inconsistency in this system.
7. I would imagine that most people would learn to use this system very quickly.
8. I found the system very cumbersome to use.
9. I felt very confident using the system.
10. I needed to learn a lot of things before I could get going with this system.

**Part B. ChronoMap items** (same 1 to 5 scale).

- C1. I understood what ChronoMap 3D is for before I had to do anything.
- C2. I would be willing to join a capture session with people I do not know.
- C3. I would be comfortable joining the voice channel during a capture.
- C4. The coverage radar made it clear where I should stand and what was still missing.
- C5. I trusted that faces and exact locations would be protected when sharing.
- C6. Receiving the 3D model and a badge would make me want to take part again.

**Part C. Open questions.**

- O1. What was the most confusing moment, and on which screen?
- O2. What would stop you using this at a real landmark?

**Part D.** Participant code; which device; roughly how long the tasks took; any task you could not complete.

**SUS scoring.** For odd items, score = rating − 1. For even items, score = 5 − rating. Sum the ten scores and multiply by 2.5 to get 0 to 100. Report the mean, SD and range across the five participants, and the per-item means. A score around 68 is the published average; treat it as a reference, not a target.

---

## 8. Session notes template (one per think-aloud participant)

```
Participant: P_   Date/time:        Moderator:        Note-taker:
Background:                       3D-scan apps used before: yes/no   In INFO90007: yes/no
Device: phone / laptop            Audio consent: yes/no   Recording file:

Warm-up: what they said the app is for:

Task | Outcome (C/P/F) | Time | Assists | Errors / wrong taps | Quotes (verbatim) | Observed problem + screen #
T1   |                 |      |         |                     |                   |
T2   |                 |      |         |                     |                   |
T3   |                 |      |         |                     |                   |
T4   |                 |      |         |                     |                   |
T5   |                 |      |         |                     |                   |

Debrief answers:
- Most confusing moment:
- Would join with strangers? why:
- Voice or quick replies:
- Would change:

Note-taker's top 3 problems from this session (fill right after, before the next session):
1.
2.
3.
```

C = completed without help, P = completed with an assist or after an error, F = not completed.

---

## 9. Analysis (Thu 29 Oct)

1. Transfer every observed problem into `findings-log.md`. Merge duplicates across participants; count how many participants hit each one.
2. Rate severity 0 to 4 (Nielsen's scale: 0 not a problem, 1 cosmetic, 2 minor, 3 major, 4 catastrophic). Decide as a group, not individually.
3. Score SUS and the custom items; compute per-item means. Code the open answers into themes (three to six themes is normal).
4. Rank findings by frequency × severity. For each, decide **fix**, **defer** (with reason: out of scope for a front-end prototype, needs the real system, time) or **reject** (with reason: contradicted by other participants, cosmetic, not a usability issue). The lecturer said not everything users say should be implemented, but changing nothing is not credible.
5. For each fix, take a **before** screenshot now, make the change in Figma, take the **after** screenshot, and annotate both. These are the figures for report §3.5.
6. Re-run the full-journey link check on version 2.

---

## 10. What goes in the report

| Report section               | Comes from                                                           |
| ---------------------------- | -------------------------------------------------------------------- |
| §2.4 Method                  | §1 decisions, §2 participants, §5 tasks, §6-7 protocols, §9 analysis |
| §3.4.1 Participants table    | recruitment records (codes only)                                     |
| §3.4.2 Task performance      | session notes, task rows                                             |
| §3.4.3 Questionnaire results | form responses, SUS scoring                                          |
| §3.4.4 Findings              | findings-log.md, ranked                                              |
| §3.5 Changes                 | findings-log.md decision column, before/after figures                |
| §4.1 Usability               | SUS, completion rates, severity profile                              |
| Appendix C                   | this kit, final version                                              |
