# Version 2 change specification

Everything participants said, in full, from both halves of the evaluation, grouped by the screen
it applies to, with the item scores behind each point and a detailed specification of what to
change in Figma.

Nothing here is paraphrased. Quotes are verbatim. Spelling and grammar are left exactly as
written, including in the machine transcription, which is marked where it is unreliable.

- Participant codes: [`participants.md`](participants.md)
- Every item score and both open answers per person: [`participant-results.md`](participant-results.md)
- Which tasks could actually be completed in v1: [`task-completability.md`](task-completability.md)
- Finding IDs F1 to F9: the consolidated table in report Section 3.4

Sources: six questionnaire responses (31 Oct to 1 Nov), and five think-aloud sessions (29 to
30 Oct), of which one is transcribed in full.

---

# Part 0. What evidence actually exists

Read this before relying on anything below.

| Participant | Method | Evidence available |
| --- | --- | --- |
| PT-1 | Think-aloud, 8:06 | Findings attributed only (F1, F2, F4, F5, F6, F7). **No transcript or recording on this machine or in Drive.** |
| PT-2 | Think-aloud, 12:02 | Findings attributed only (F1, F4, F5, F6, F7), plus one quoted line. **No transcript or recording available.** |
| PT-3 | Think-aloud, about 6 to 7 min (provisional) | One attributed remark. Demographics given from the moderator's recollection on 1 Nov, not from a record. **No date, and no notes anywhere.** |
| PT-4 | Think-aloud, about 6 to 7 min (provisional) | One attributed remark. Provisional on the same basis as PT-3. **No date, and no notes anywhere.** |
| PT-5 | Think-aloud, 3:40 | **Full transcript and audio.** Four findings plus two design-validating results. |
| PQ-1 to PQ-7 | Questionnaire | Complete item scores and both open answers for all six. |

Two consequences:

1. **The think-aloud detail below is overwhelmingly PT-5.** That is one participant, a partial
   run on an earlier prototype, on a laptop. Weight it accordingly, and do not present PT-5's
   wording as though five people said it.
2. **The per-task completion table is now filled, and it complicates everything below.**
   Recorded on 1 Nov from the moderator's record: **all five participants completed all five
   tasks, unaided, 25 of 25 with zero assists.** Errors and times were not recorded. Two records
   in this repository disagree, PT-5's transcript at 2:26 and PQ-1's own questionnaire, and both
   are set out in the override note in
   [`participant-results.md`](participant-results.md).

   Nothing below changes as a result, but the framing of it does. Every quote on this page comes
   from somebody who **finished the task anyway**. These are not reports of failure, they are
   reports of difficulty on the way to success, and that is the stronger claim rather than the
   weaker one: the design does not block people, it makes them work out what is going on without
   help. Write the report that way and the 100 per cent completion rate stops contradicting the
   nine findings and starts supporting them.

---

# Part 1. The think-aloud sessions, in full

## PT-5, 29 October, 3:40, laptop, engineering student

Transcribed locally with faster-whisper. **The transcript is machine-generated and garbles
interface words**, so it is quoted here with the garbling intact and should be checked against
the audio before any of it reaches the report. `sessions/P1-2026-10-29-transcript.md`.

### Task 1: join the session at the clock tower

> **[0:12]** So the first task is to capture sessions is happening right now at the clock tower.
> Join it

> **[0:20]** I am very busy with a lot of things three people are now

> **[0:31]** Okay, I clicked a community because nearby there wasn't anything

> **[0:37]** Clicking the university clock tower for contributors to

They could not find the live session where the design assumes they would look, and reached it
through Community instead. This is finding **F-c**, severity 2, and it is the problem Yong later
demonstrated independently: the clock tower was not in the Live near you list at all.

### The capture-versus-share confusion

> **[0:44]** Request and they share this model. No, that's because it's been done already

> **[0:50]** Share but that doesn't make sense because

> **[0:54]** Because I need to capture it right capture again

Finding **F-d**, severity 2, later recorded as **F9**. On an already-captured landmark, sharing
the existing model and requesting a new capture look alike. They reasoned their way out of it,
but out loud and slowly.

### Through the capture flow

> **[1:06]** I stuck up to any four people clicking on that was created out but it works to send
> assignments

> **[1:16]** Captures I think it's happening now. I think the voice call is happening that folks

> **[1:20]** We'll hold steady and then let's see what it says on the position button

> **[1:27]** And I think I probably hold it in the steady

> **[1:31]** We'll capture a stop capture

> **[1:35]** It looks like everyone this worked upload my videos and then

> **[1:42]** Yeah, people are doing not if I am ready. **There's too many buttons**

### Task 2: the station collision

This is the clearest finding in the session, **F-a**, severity 3, later **F8**.

> **[1:58]** For task two you're in a session and I was as briefed everyone

> **[2:03]** Find out which station you begin and tell me what station

> **[2:08]** So there are for this street station

> **[2:14]** Clean the street station is where I am

> **[2:26]** **I can't continue what I've been to really what is this anyway**

Asked which **station** they had been assigned, they named a **landmark**: Flinders Street
Station, which was in the mock session list. One word, two meanings, on adjacent screens. **Task 2
was not completed.** The word was renamed to "position" before any later session.

### The closing debrief

> **[2:47]** The confusing moments were because there was **so many buttons** and I couldn't find
> out what's happening

> **[2:53]** In this stage, so

> **[2:58]** Even there's **so many buttons** that go moves on to the next button. I think it'd be
> better

> **[3:03]** Screenshot a little bit more simplified

> **[3:28]** Yeah, if there's anything to change I think

> **[3:32]** Yeah, **the screen overall is too busy** and I will go me so I would make it more
> simplified

"Too many buttons" was said **four separate times, unprompted**, and was their answer when asked
what they would change. Finding **F-b**, severity 3, later **F3**.

### Two results that support existing design decisions

**The one-tap callout design was validated, unprompted.** Asked about the voice channel:

> **[3:11]** capturing photos with back friends. Sorry. I would if you use voice channel

> **[3:17]** All you want to use I think **voice channel makes it a lot easier**

> **[3:21]** But in public I think maybe **there's a button that I can press that will be better**

A participant independently asking for a tap instead of speaking aloud in public is direct
evidence for the one-tap callouts, rather than an assertion that strangers find speaking awkward.

**But the stranger premise got a soft answer.**

> **[3:06]** I would join a session if I was interested in

> **[3:11]** capturing photos with back friends.

Friends, not strangers. One data point, and possibly a transcription slip for "with my friends",
but the entire concept rests on strangers cooperating. The questionnaire later said the same
thing in different words (C2 scored 2 by three of six respondents), so it is probably real.

## PT-2

Only one line survives in any file:

> something that I can press that will be better

Attributed in the report alongside PT-3 and PT-4: "PT-2, PT-3 and PT-4 said something similar:
quick replies with..."

PT-2 contributed to F1, F4, F5, F6 and F7. The session ran 12:02 and was recorded and
transcribed, but neither the recording nor the transcript is in this repository or in Drive.

## PT-1

No verbatim quotes exist in any available file. PT-1 contributed to **six of the nine findings**
(F1, F2, F4, F5, F6, F7), more than any other participant, and is the only source for **F2**, the
one-tap replies doing nothing when tapped. The session ran 8:06 on a laptop.

**This is the most valuable missing evidence in the evaluation.** If the recording exists on a
teammate's machine, it is worth retrieving before the report is finished.

## PT-3 and PT-4

Attributed once, jointly with PT-2, on wanting quick replies. Nothing else: no age, background,
device or duration recorded. Dhiraj, who moderated both, gave those from recollection on 1 Nov:
age 25, student, mobile, roughly 6 to 7 minutes each, and they are marked provisional in
[`participants.md`](participants.md). Neither session has a date, and the written notes the report
cites as the source are still not in the repository or in Drive.

---

# Part 2. The questionnaire open answers, in full

Both questions were free text. Reproduced complete.

## PQ-1 (SUS 35, phone, 5 minutes, failed task 3)

**Most confusing moment, and on which screen?**

> The whole start: "no context for any background. I was asked to do something." Sharpest points:
> task 3, "I do not understand this instruction for the context" and task 4, "share the model to
> who, when and how?" (screens 18 and 20).

**What would stop you using this at a real landmark?**

> No reason to be there: "why would I join it when it's not even paid?" and "I don't know what is
> the benefit for me".

*PQ-1 and PQ-2 were entered by a team member from a spoken debrief rather than typed by the
respondent, which is why the text carries quotation marks around the speech.*

## PQ-2 (SUS 42.5, phone, 6 minutes)

**Most confusing moment, and on which screen?**

> the position and radar screens: "several dots", "the yellow thing", "you're like the northeast",
> but "I had no context" (screens 11 and 14).

**What would stop you using this at a real landmark?**

> Safety and strangers: "I do not like people", "some safety hazards", and voice could cause
> "misunderstandings"

## PQ-3 (SUS 80, laptop, 3 minutes)

**Most confusing moment, and on which screen?**

> I found it confusing when clicking next immediately went from the tutorial screen to the main
> app. I did not get the time to process whether there were more pages to the tutorial screen or
> not.

**What would stop you using this at a real landmark?**

> Nothing. The app seems fun to use.

## PQ-4 (SUS 92.5, phone, 7 minutes)

**Most confusing moment, and on which screen?**

> I found the procedure of reporting the security risk the most confusing because I assumed that
> the flag icon was meant either for bookmarking my progress or simplifying retracing steps for
> editing/retracting. But I think this might be mostly because I'm not very tech-savvy (even in
> comparison to people of my age, so it's not a generational knowledge gap). The other confusions
> were results of me forgetting the starting instructions to (1) move on when stuck and (2) the
> current interface needs scrolling.

**What would stop you using this at a real landmark?**

> If I'm reasonably reassured that any security risks are minimal (eg: that people's
> identities/whereabouts are completely secure and not just nominally "unidentifiable" with only
> their eyes covered; that people can't be tracked when on voice call), I would probably be a
> regular user. The interface being slightly unintuitive at first will most probably not be a
> deal-breaker for me, as long as this program continues development in its current niche (which
> in my understanding, is a platform for people to collectively record locations).

## PQ-5 (SUS 42.5, phone, 16 minutes)

**Most confusing moment, and on which screen?**

> Joining a session, how a session even begins, or even understanding where I was based on the
> university clock tower rally interface?

**What would stop you using this at a real landmark?**

> I would not be comfortable either sharing my location or turning on my microphone and sharing it
> to strangers.

## PQ-7 (SUS 50, phone, 10 minutes)

**Most confusing moment, and on which screen?**

> Nothing really confused me

**What would stop you using this at a real landmark?**

> i did't found anything that that will stop me using this at any point

*PQ-7 answered 4 or 5 to every scale item, agreeing both that the system is easy to use and that
it is cumbersome. Read these answers in that light.*

---

# Part 3. Screen by screen

Each section gives the evidence from both methods, then the specification.

---

## 01 Onboarding: how it works

### Evidence, questionnaire

Three of six named the opening as their most confusing moment.

PQ-1:

> The whole start: "no context for any background. I was asked to do something."

PQ-3, who otherwise scored 80 and said nothing would stop them using it:

> I found it confusing when clicking next immediately went from the tutorial screen to the main
> app. I did not get the time to process whether there were more pages to the tutorial screen or
> not.

PQ-5:

> Joining a session, how a session even begins...

### Evidence, think-aloud

Finding **F1**, severity 3, from PT-1 and PT-2: no plain-language explanation of what the app is
for or why to take part, before the first task.

PT-5, two seconds into task 1, before touching anything:

> **[0:20]** I am very busy with a lot of things three people are now

### Supporting scores

C1 is "I understood what ChronoMap 3D is for before I had to do anything."

| | PQ-1 | PQ-2 | PQ-3 | PQ-4 | PQ-5 | PQ-7 |
| --- | --- | --- | --- | --- | --- | --- |
| C1 | **1** | **2** | 3 | 5 | **2** | 5 |

Three of six scored 2 or below. PQ-1 scored the minimum possible. SUS item 10, "I needed to learn
a lot of things before I could get going", is one of the three weakest items in the set.

### Specification

1. Add a **purpose line** as the first thing on 01, before any instruction or control. One
   sentence in plain language: what the app is for and what the person ends up with. Not a feature
   list.
2. Add a **progress indicator** to onboarding: dots, or "1 of 3". PQ-3's complaint is that Next
   gave no sense of how much remained, so arriving in the app felt like an error.
3. Make the final onboarding step say explicitly that it is the last one.
4. Repeat the purpose in one short line on **02 Home**, since somebody who skips onboarding
   currently gets no second chance at it.

---

## 02 Home and discovery

### Evidence, questionnaire

PQ-1, in full, on what would stop them:

> No reason to be there: "why would I join it when it's not even paid?" and "I don't know what is
> the benefit for me".

### Evidence, think-aloud

PT-5 could not find the live session at all:

> **[0:31]** Okay, I clicked a community because nearby there wasn't anything

Finding **F-c**, severity 2. The task asks them to join a session happening now at the clock
tower; it was not in Live near you, so they reached it through Community. Yong independently
confirmed this by clicking through: "That's not apparent on our join screens at all."

On willingness, PT-5:

> **[3:06]** I would join a session if I was interested in
> **[3:11]** capturing photos with back friends.

Friends, not strangers.

Finding **F7**, severity 2, reluctance to join strangers, raised by PT-1, PT-2 and PT-5. Deferred
in the report as a concept risk rather than a screen fix.

### Supporting scores

C2 is "I would be willing to join a capture session with people I do not know."

| | PQ-1 | PQ-2 | PQ-3 | PQ-4 | PQ-5 | PQ-7 |
| --- | --- | --- | --- | --- | --- | --- |
| C2 | **2** | **2** | 3 | 5 | **2** | 5 |

C6, "receiving the 3D model and a badge would make me want to take part again", is the **highest**
custom item at 4.25. The reward works; it is not visible early enough to answer "why would I
join".

### Specification

1. Keep the University Clock Tower in **Live near you** and make the card clickable. This was
   fixed after the 29 October call but is the reason PT-5's task 1 went the wrong way.
2. On the session card, state **what the participant gets**: the finished 3D model, a contribution
   score, a badge. At present this appears only after capture, by which point the question has
   been answered badly.
3. Do not try to solve all of F7 here. Safety belongs in the privacy section; this is the benefit
   half only.

---

## 22 Landmark page: capture versus share

### Evidence, think-aloud

PT-5, working through an already-captured landmark:

> **[0:44]** Request and they share this model. No, that's because it's been done already
> **[0:50]** Share but that doesn't make sense because
> **[0:54]** Because I need to capture it right capture again

Finding **F-d**, severity 2, recorded as **F9**. Deferred in the report as "not on a task path,
seen once".

### Specification

1. Distinguish **share this model** from **request a new capture** by placement and weight, not
   only wording. They currently read as alternatives of the same kind.
2. Say what a new capture is for on an already-captured landmark: a different condition, a later
   date, a changed building.
3. Low priority: one participant, off the task path. Worth doing only after items 1 to 5 in the
   work order.

---

## 09P Rally, participant view

### Evidence

PQ-5:

> Joining a session, how a session even begins, or even understanding where I was based on the
> university clock tower rally interface?

"Where I was" is about session state, not geography: they could not tell what stage of the process
the screen represented.

PT-5, on the rally:

> **[1:06]** I stuck up to any four people clicking on that was created out but it works to send
> assignments

### Specification

1. Add a line stating **what is happening and what happens next**: who is here, what the session
   is waiting for, what to do meanwhile.
2. 09P has no sensible onward control. The only route forward is **Share rally link**, which no
   participant would tap to proceed. Either make the waiting status an active **Continue** once
   quorum is met, or have the screen advance when the host starts.

Point 2 is a **wiring correction, not an evaluation finding**. It was introduced while making task
2 reachable at all. Keep it out of Section 3.5.

---

## 11 Your position, and 14 Filming: the coverage radar

### Evidence, questionnaire

PQ-2, in full:

> the position and radar screens: "several dots", "the yellow thing", "you're like the northeast",
> but "I had no context" (screens 11 and 14).

### Evidence, think-aloud

Finding **F6**, severity 2, from PT-1 and PT-2: radar dots, colours and the position wording make
no sense without context. **Still marked open** in the report, with a team decision pending on
whether to add a legend or defer.

PT-5 never reached a working reading of the radar; task 2 ended in the station collision first.

### Supporting scores

C4 is "the coverage radar made it clear where I should stand and what was still missing."

| | PQ-1 | PQ-2 | PQ-3 | PQ-4 | PQ-5 | PQ-7 |
| --- | --- | --- | --- | --- | --- | --- |
| C4 | **2** | 3 | 4 | 3 | 4 | 5 |

C4 averages 3.50, so it is not the worst item. PQ-2's answer shows what that number hides: they
described the radar's components accurately and still did not know what it meant.

### Specification

1. Add a **legend**: what a green dot means, what the amber dot means, what the rings represent.
2. **Name the amber dot in words** next to the radar, not only in the heading.
3. Keep the written position line ("You: the north-east arch"); it is what made task 2 completable.
4. For the report: because the position is printed as text, task 2 tests whether somebody can read
   **a label**, not the radar. The success criterion should say so rather than implying more.

The radar is the main visual evidence for the coordination claim, so leaving it unreadable weakens
the design argument and not only the usability score.

---

## 10 and 11 Briefing: the word "station"

### Evidence, think-aloud

PT-5, the clearest finding in the whole evaluation, **F-a** then **F8**, severity 3:

> **[2:03]** Find out which station you begin and tell me what station
> **[2:08]** So there are for this street station
> **[2:14]** Clean the street station is where I am
> **[2:26]** I can't continue what I've been to really what is this anyway

The prototype used *station* for an assigned position; the mock session list contained Flinders
Street Station as a place. **Task 2 was not completed.**

### Specification

Already fixed: renamed to "position" across the prototype, task sheets and report, and the
landmark ending in "Station" was removed from the discovery list.

**Still outstanding:** the replacement word has never been tested with anyone. PT-5 is the only
participant who met the briefing wording at all, and they met the broken version. Retest the
briefing in version 2 rather than assuming "position" works.

---

## 14 and 15: capture and host callouts

### Evidence, think-aloud

PT-5, unprompted, during capture:

> **[1:42]** Yeah, people are doing not if I am ready. **There's too many buttons**

And in the debrief:

> **[2:47]** The confusing moments were because there was so many buttons and I couldn't find out
> what's happening
> **[2:58]** Even there's so many buttons that go moves on to the next button
> **[3:32]** the screen overall is too busy and I will go me so I would make it more simplified

Four separate unprompted mentions, and their closing answer. Finding **F-b**, then **F3**,
severity 3.

On voice, PT-5:

> **[3:17]** I think voice channel makes it a lot easier
> **[3:21]** But in public I think maybe there's a button that I can press that will be better

PT-2, PT-3 and PT-4 all said something similar. PT-2's line:

> something that I can press that will be better

Finding **F2**, severity 3, from PT-1: the one-tap replies did nothing when tapped.

### Supporting scores

C3 is "I would be comfortable joining the voice channel during a capture." Tied for the **lowest**
custom item at 3.00.

| | PQ-1 | PQ-2 | PQ-3 | PQ-4 | PQ-5 | PQ-7 |
| --- | --- | --- | --- | --- | --- | --- |
| C3 | **2** | **2** | **2** | 3 | **2** | 5 |

Four of six scored 2. Only PQ-7, the straight-line respondent, scored above 3.

PQ-2 on voice:

> voice could cause "misunderstandings"

### Specification

1. **Wire the one-tap replies.** This is the single most requested thing in the whole evaluation:
   four of five think-aloud participants asked for a press-rather-than-speak option, and four of
   six questionnaire respondents scored voice comfort at 2.
2. Make the replies **visible during capture**, not behind a menu. The point is that somebody
   holding a camera can answer without stopping.
3. **Reduce the capture and briefing screens to one primary action each** and demote the rest.
   This is Nielsen's aesthetic and minimalist design, and it is the change PT-5 asked for four
   times. "Hold steady" has already been removed and photo upload made automatic; continue.
4. Make the voice channel visibly **optional**. At present joining reads as the expected path.
5. The host callout only appears after the participant taps "Hold steady", so a participant has to
   summon the message they are meant to be responding to. Either have the callout arrive on a
   timer, or reword task 3 to match what the prototype does.

---

## 18 Artifact and 20 Share

### Evidence, questionnaire

PQ-1, naming the screens:

> task 4, "share the model to who, when and how?" (screens 18 and 20)

### Evidence, think-aloud

Finding **F5**, severity 3, from PT-1 and PT-2: sharing was unclear, both who receives it and
where the exact-location control is.

PT-5 reached the artifact screen but the session ended at task 2:

> **[1:46]** View souvenirs in school

(garbled; the control is "View souvenir and score")

In version 1 **task 4 could not be completed at all**: screen 20's only wired control returned to
18, so the flow looped, and no location toggle was reachable.

### Supporting scores

C5 is "I trusted that faces and exact locations would be protected when sharing." Tied for the
**lowest** custom item at 3.00.

| | PQ-1 | PQ-2 | PQ-3 | PQ-4 | PQ-5 | PQ-7 |
| --- | --- | --- | --- | --- | --- | --- |
| C5 | 3 | **1** | **2** | 3 | **2** | 5 |

PQ-2 scored the minimum possible.

### Specification

1. Add a **working location toggle** on 20, with the two states visibly different.
2. Add a **completion state**: a posted or shared confirmation, so the task ends somewhere.
3. State **who receives** the shared model before it is shared. PQ-1 asked "to who, when and how",
   and the screen answers none of the three.
4. Show **what is hidden** when location is off, rather than asserting it is protected.
5. On 18, "View souvenir and score" currently jumps to Home. Point it at the souvenir screen.

Items 1, 2 and 5 are **corrections**. Items 3 and 4 come from the evaluation and belong in
Section 3.5.

---

## 26 and 14a: flagging a participant

### Evidence

PQ-4, in full:

> I found the procedure of reporting the security risk the most confusing because I assumed that
> the flag icon was meant either for bookmarking my progress or simplifying retracing steps for
> editing/retracting. But I think this might be mostly because I'm not very tech-savvy (even in
> comparison to people of my age, so it's not a generational knowledge gap).

PQ-4 scored **92.5**, the highest of the six, and still misread the control. That makes it an icon
problem rather than a comprehension problem. Their own explanation blames their tech-savviness,
but flag-means-bookmark is a widely held convention, not a personal quirk.

### Specification

1. Change the **flag icon** or label it. A flag commonly means "save for later". Alternatives: a
   shield, a person-with-exclamation, or a plain text label "Report".
2. Keep the three stated reasons on 14a; nobody complained about them.
3. Resolve the inconsistency: two flagging routes exist, 14 to 14a to 14b, and 13 to 26.
   Participants who find the second take a different path from everyone else. Decide which is
   canonical.

---

## Privacy, safety and voice, across screens

The largest single theme, crossing several screens.

### Evidence, in full

PQ-5:

> I would not be comfortable either sharing my location or turning on my microphone and sharing it
> to strangers.

PQ-2:

> Safety and strangers: "I do not like people", "some safety hazards", and voice could cause
> "misunderstandings"

PQ-4, who names a testable bar rather than a feeling:

> If I'm reasonably reassured that any security risks are minimal (eg: that people's
> identities/whereabouts are completely secure and not just nominally "unidentifiable" with only
> their eyes covered; that people can't be tracked when on voice call), I would probably be a
> regular user.

PT-5, choosing friends over strangers:

> I would join a session if I was interested in capturing photos with back friends.

### Supporting scores

The two lowest custom items are both in this theme:

| Item | Mean |
| --- | --- |
| C3, comfortable joining the voice channel | **3.00** |
| C5, trusted faces and exact locations would be protected | **3.00** |
| C6, model and badge would bring me back | 4.25 (highest) |

The pattern is consistent across both methods: **the reward is attractive, the social and privacy
exposure is not.** That is the central tension in the concept, and the design has to answer it
visibly.

### Specification

1. On the rules or safety screen, state the **anonymisation standard** concretely: faces and
   licence plates removed from the source photographs before reconstruction, not blurred eyes on
   the finished model. This is exactly the distinction PQ-4 drew.
2. State that **voice does not expose location or identity**, and that it can be left off.
3. Make voice **opt-in** in appearance as well as in fact.
4. Before any share, show a **preview of what others will see**, including whether exact
   coordinates are attached.
5. These are design answers to a concept-level objection. F7 was deferred for good reason: no
   screen makes a stranger want to meet strangers. But the privacy half is answerable and is
   currently not answered.

---

## Interface mechanics

### Evidence

PQ-4:

> The other confusions were results of me forgetting the starting instructions to (1) move on when
> stuck and (2) the current interface needs scrolling.

### Specification

1. Audit every frame for content below the fold. Where scrolling is needed, signal it: a cut-off
   element at the bottom edge, or a scroll indicator.
2. The briefing and moderator screens are the tallest in the file and the most likely to hide
   content.

---

# Part 4. The contrary evidence

Worth holding in view so version 2 does not overcorrect.

PQ-3, who scored 80:

> Nothing. The app seems fun to use.

PQ-7, who scored 50 but answered every item at 4 or 5:

> Nothing really confused me

> i did't found anything that that will stop me using this at any point

Scores ran **35, 42.5, 42.5, 50, 80, 92.5**. Two respondents found the prototype genuinely
straightforward. The problems above are real and repeated but not universal, and the spread itself
(35 to 92.5 on the same build, standard deviation 23.4) is the most interesting single result of
the evaluation.

A plausible reading, which the report should offer cautiously rather than assert: the people who
scored low are the ones who could not work out **why** the app existed, and the people who scored
high got past that quickly. PQ-1 scored C1 at 1 and SUS at 35; PQ-4 scored C1 at 5 and SUS at
92.5. If that holds, the purpose line on screen 01 is the highest-leverage change in this
document, not the most obvious one.

---

# Part 5. Work order

Ordered by weight of evidence, not by effort.

| | Screens | Change | Evidence | Type |
| --- | --- | --- | --- | --- |
| 1 | 18, 20 | Location toggle, completion state, say who receives it | F5 sev 3; task 4 impossible in v1; C5 lowest | Correction + improvement |
| 2 | 01, 02 | Purpose line, onboarding progress, state the payoff | F1 sev 3; 4 participants; C1 scored 1 and 2 | Improvement |
| 3 | 14, 15 | Wire one-tap replies; one primary action per screen | F2 and F3 sev 3; 4 of 5 asked for it; C3 lowest | Correction + improvement |
| 4 | Rules, 20 | State the anonymisation standard concretely | PQ-4's named bar; C5 lowest | Improvement |
| 5 | 11, 14 | Radar legend, amber dot named in words | F6, still open; PQ-2 | Improvement |
| 6 | 09P | A real onward control | Wiring defect | Correction |
| 7 | 26, 14a | Flag icon or label; one canonical flagging route | PQ-4, the highest scorer | Improvement |
| 8 | 10, 11 | Retest "position" with a participant | Never tested since the rename | Verification |
| 9 | All | Scroll affordance audit | PQ-4 | Improvement |
| 10 | 22 | Separate share from request-a-capture | F9, one participant, off task path | Improvement |

**Keep corrections and improvements separate when writing Section 3.5.** The rubric credits
changes the evaluation produced. A link wired wrongly, or a task that was impossible to complete,
teaches nothing about the design and belongs in the limitations as an instrument fault. Yong made
this point in the 29 October call and it still applies: "content errors can't be a design fix."

---

# Part 6. What to retrieve before the report is finished

1. **PT-1's recording or transcript.** PT-1 contributed to six of the nine findings and is the
   sole source for F2. No verbatim evidence survives anywhere accessible.
2. **PT-2's recording or transcript.** 12:02, recorded and transcribed per the participants
   record, but not in the repository or Drive.
3. **PT-3 and PT-4's moderator notes**, plus a date for each session. Their background, device
   and screening fields were supplied on 1 Nov; the age and duration are recollections.
4. **The record behind the task completion table**, and ideally errors and time on task with it.
   Completion and assists were given on 1 Nov, so there is a success rate to report, but the
   record itself is not in the repository and the other two quantitative columns are still empty.
5. **A decision on whether PT-5 completed task 2.** The completion record says yes, PT-5's
   transcript says no, and F8's severity 3 is currently written on the no.

Item 1 is now the most serious. The completion rate exists, but the evaluation's qualitative
weight rests almost entirely on PT-5, a 3:40 laptop session on an earlier prototype, while PT-1
contributed to six of the nine findings with no surviving quote at all.
