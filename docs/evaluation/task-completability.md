# Can the five tasks actually be completed in the prototype?

Determined 29 Oct from a full audit of all 145 prototype reactions in the Figma file, plus a live
walkthrough of T1 and T2 in Present mode. This answers the question Yong asked repeatedly on the
call and that his readiness note ends on.

| Task                                                | Verdict                                        |
| --------------------------------------------------- | ---------------------------------------------- |
| T1 Join the clock tower session                     | **Passes** (walked live)                       |
| T2 Find your position, tell the host you are ready  | **Reachable, but by the wrong control**        |
| T3 Respond to the host, say which side needs photos | **Completable, but the sequence is backwards** |
| T4 Find the model and share it without the location | **Cannot be completed**                        |
| T5 Flag someone photographing strangers             | **Passes**                                     |

---

## T1. Passes

`01 Onboarding` to `02 Home` to the Clock Tower card to `09P Rally: participant view`. Walked in
Present mode and confirmed by node id. The participant lands on the participant rally, not the
host's screen, which was the defect Yong demonstrated.

## T2. Reachable, but the only route is "Share rally link"

`09P` has exactly two controls. One is the waiting status, which is correctly inert. The other is
**Share rally link**, and that is now the only way forward to `11 Briefing: your position`.

A participant asked to find their position has to tap _Share rally link_ to get there. Nobody would
do that on purpose, and if they stumble into it we have learned nothing about the design. The task
is technically completable and practically broken.

**Fix:** give `09P` a real onward control. Either the waiting status becomes an active
**Continue** once quorum is met, or the screen advances on a delay as the host starts the session.
Then remove the Share-rally-link route to the briefing.

**Second issue:** `11` states the answer in its heading, "You: the north-east arch, 15 m away".
There is nothing to find. Keep it if you like, but the success criterion should say the
participant _read_ their position rather than _located_ it, and the report should not imply more.

## T3. Completable, but you have to summon the callout

The wiring is:

```
14 Filming --"Hold steady"--> 15 Host callout --"I'm in position"--> 14 Filming
```

The task says the host asks you to move, and you respond. In the prototype the participant must
first tap **Hold steady** to make the host's callout appear. They are not responding to a callout,
they are triggering one, and no participant will guess that.

**Fix, cheapest version:** change the task wording so it matches what the prototype does, for
example "The host is sending instructions during capture. Find and respond to the latest one."
**Fix, better version:** have `14` advance to `15` on a timed delay so the callout arrives on its
own, which is what the design claims happens.

Also note the radar label still prints the side that needs photos as text, so this task tests reading a label
rather than reading the radar. That is recorded in the study kit and the moderator notes which
route the participant used.

## T4. Cannot be completed

Two separate problems.

**It loops.** `18 Artifact` to Share to `20 Share exhibit`, and `20`'s only wired control is
**Share**, which goes back to `18`. There is no completion state, so a participant can never finish.

**There is no location control.** The task asks them to share _without revealing the exact
location_. The audit found no reaction for any such toggle on `20`. Whatever the screen shows, a
participant cannot act on it.

**Fix:** `20` needs a location toggle the participant can operate and a confirm that leads to a
posted or shared state. Until both exist, T4 should be removed from the session rather than run
and scored as failed, because the failure is ours and produces no usable finding.

## T5. Passes

```
14 Filming --tap a participant avatar--> 14a Participant options
          --"Photographing strangers without consent"--> 14b Participant flagged
```

Three reasons are wired, and `14b` offers Undo. Clean, and the task matches the flow.

**One inconsistency worth knowing:** a second, different flagging route exists from `13 Voice
channel` to `26 Flag a participant`, whose "Flag now" returns to `14`. Two flows for one action. It
does not block T5, but if a participant finds the other one their path differs from everyone
else's.

---

## What to fix before Friday, in order

1. **T4**: add the location toggle and a completion state on `20 Share exhibit`. This is the only
   task that cannot be completed at all.
2. **09P**: add a Continue so T2 does not depend on Share rally link.
3. **T3**: either time the callout to arrive on `14`, or reword the task to match the prototype.

If only one gets done, make it T4.

## What does not need doing before Friday

The host and participant entry split, and the seven-section reorganisation. All five tasks are
participant tasks; the host flow is never exercised by the study. It matters for the report and
the oral, not for the sessions.

---

## Status after the fixes (29 Oct, evening)

Re-traced against the live Figma reactions (file `nGpbcLweFWROFc3oaonWrO`). All five tasks now have a
complete path from their start screen.

| Task | Start screen | Path now wired | Result |
| --- | --- | --- | --- |
| T1 | 02 Home | Clock Tower card, Join, 09P | Pass |
| T2 | 09P | Timed advance (8 s, host starts), 11, I'm in position | Pass |
| T3 | 14 | Timed callout (5 s), 15, I'm in position, 14c | Pass |
| T4 | 16 | 17, 18, Share, 20 (exact location ON), toggle to 20b, Share, 20c Shared: location hidden | Pass |
| T5 | 14c | Tap participant, 14a, reason, 14b flagged | Pass |

### What changed in Figma

- **T4.** 20 Share exhibit starts with exact coordinates ON. The toggle row leads to **20b** (off). Share
  on 20 leads to **20d** (shared, exact location); Share on 20b leads to **20c** (shared, location
  hidden). 20b and 20c mask the coordinates on the image overlay. The old 20 to 18 loop is gone.
- **T2.** 09P advances to 11 after 8 s. Share rally link on 09P no longer leads to the briefing and now
  has no action.
- **T3.** 14 advances to 15 after 5 s. Everything that returned to 14 (15 buttons, 14a, 14b Undo, 26
  Flag now) now returns to **14c**, a copy of 14 with no timer, so the callout does not re-fire and
  T5 is not hijacked. Hold steady on 14 still opens 15.
- **New frames:** 14c, 20b, 20c, 20d (four, so the file now has 35 frames in the flow; settle report 3.1 and Appendix A).

### Still open

- **Share rally link on 09P is a dead button.** Wire it or grey it before sessions.
- **Two flag routes remain** (13 to 26, and 14 to 14a). Not on any task path. Record in moderator notes.
- 25 Moderator queue, 27 Community chat and 27a are dead ends. None is on a task path.
- Timers only run in Present mode. Walk all five tasks once on a phone before Friday.
- 11 still states the position in its heading, so T2 tests reading, not finding.

### Changes after teammate feedback (29 Oct, 8:30 pm)

- **Hold steady removed** from 14, 14c, 14a and 14b. A teammate could not tell what it was for or why it
  opened the callout. The callout already arrives on its own, so the button had no job.
- **Upload is automatic.** 16 no longer has an Upload my photos button. It shows "Uploading your 88 photos
  automatically", moves to 17 after 6 s, and 17 moves to 18 after 6 s. Notify me when ready on 17 still works.
- **Back to Explore** added to 18, 18a, 20c and 20d, so no end screen is a dead end.
- **18a Souvenir & score** is new and View souvenir & score on 18 now links to it.
- Frames added in total: 14c, 18a, 20b, 20c, 20d.

### T3 rewritten (30 Oct)

T3 asked for two things and said the host had already asked for a move before any callout appeared. It is
now one goal: carry out the host's instruction and let them know. Naming the side that needs photos is a recorded
probe after the task, not part of the score. Study kit, tester pack and assessor pack all match.

### "Thin" removed from participant-facing text (30 Oct)

"Thin" was our own jargon for the side of the tower with the fewest photos. Screens 14, 14a, 14b and 14c now
say "3 of 4 sides covered · south-west needs photos", and the callout on 15 says "South-west needs more
photos". The host briefing on 10 says "Tap a side that needs photos" and "Needs photos - assign".
