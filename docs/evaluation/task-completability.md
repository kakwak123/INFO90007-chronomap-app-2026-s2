# Can the five tasks actually be completed in the prototype?

Determined 29 Oct from a full audit of all 145 prototype reactions in the Figma file, plus a live
walkthrough of T1 and T2 in Present mode. This answers the question Yong asked repeatedly on the
call and that his readiness note ends on.

| Task | Verdict |
| --- | --- |
| T1 Join the clock tower session | **Passes** (walked live) |
| T2 Find your position, tell the host you are ready | **Reachable, but by the wrong control** |
| T3 Respond to the host, say which side needs photos | **Completable, but the sequence is backwards** |
| T4 Find the model and share it without the location | **Cannot be completed** |
| T5 Flag someone photographing strangers | **Passes** |

---

## T1. Passes

`01 Onboarding` to `02 Home` to the Clock Tower card to `09P Rally: participant view`. Walked in
Present mode and confirmed by node id. The participant lands on the participant rally, not the
host's screen, which was the defect Yong demonstrated.

## T2. Reachable, but the only route is "Share rally link"

`09P` has exactly two controls. One is the waiting status, which is correctly inert. The other is
**Share rally link**, and that is now the only way forward to `11 Briefing: your position`.

A participant asked to find their position has to tap *Share rally link* to get there. Nobody would
do that on purpose, and if they stumble into it we have learned nothing about the design. The task
is technically completable and practically broken.

**Fix:** give `09P` a real onward control. Either the waiting status becomes an active
**Continue** once quorum is met, or the screen advances on a delay as the host starts the session.
Then remove the Share-rally-link route to the briefing.

**Second issue:** `11` states the answer in its heading, "You: the north-east arch, 15 m away".
There is nothing to find. Keep it if you like, but the success criterion should say the
participant *read* their position rather than *located* it, and the report should not imply more.

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

Also note the radar label still prints the thin side as text, so this task tests reading a label
rather than reading the radar. That is recorded in the study kit and the moderator notes which
route the participant used.

## T4. Cannot be completed

Two separate problems.

**It loops.** `18 Artifact` to Share to `20 Share exhibit`, and `20`'s only wired control is
**Share**, which goes back to `18`. There is no completion state, so a participant can never finish.

**There is no location control.** The task asks them to share *without revealing the exact
location*. The audit found no reaction for any such toggle on `20`. Whatever the screen shows, a
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
