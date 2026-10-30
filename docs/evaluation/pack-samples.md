# Worked samples - what a filled-in session and response look like

> ## ⚠️ THIS IS INVENTED DATA
>
> Nothing on this page came from a real participant. It exists only to show the team what a
> completed sheet looks like, so the first real session is not also the first time anyone has seen
> the form filled in.
>
> **None of this may be copied into the report, the findings log, or anything submitted.**
> Fabricated evaluation data in an academic submission is academic misconduct, and this one is
> worth 55% of the subject. Delete this file before submission if there is any chance of confusion.

---

# Sample A - think-aloud session notes (in person)

```
Participant: PT-1        Date/time: Fri 30 Oct, 2:10pm      Moderator: Yong En   Note-taker: John
Background: Masters student, not in INFO90007      3D-scan apps used before: no
Device: phone (own, iPhone)    Audio consent: yes     Recording file: p1-301025.m4a
```

**Warm-up - what they said the app is for:**

> "Taking photos of a building with other people? I think it makes like a 3D version of it. I'm not
> sure why you'd need other people though, can't you just walk around it yourself?"

*(Noted: purpose partly understood, but the reason for needing a group was not.)*

| Task | Outcome | Time | Assists | Errors / wrong taps | Quotes (verbatim) | Observed problem + screen |
| --- | --- | --- | --- | --- | --- | --- |
| T1 | **C** | 0:40 | 0 | - | "Oh there it is, live now." | - |
| T2 | **P** | 3:10 | 1 | Tapped the mic icon twice before finding the quick replies | "How do I tell them without talking? …Do I have to call them?" | Quick replies not discoverable; mic reads as the only way to respond - **screen 11** |
| T3 | **P** | 2:45 | 0 | Read the radar backwards - said north needed photos when north was covered | "Green means... done? Or green means go there?" | Radar legend ambiguous; colour meaning not self-evident - **screen 14** |
| T4 | **C** | 1:55 | 0 | - | "I'd definitely turn the location off, that's at my uni." | - |
| T5 | **F** | 5:00 | 1 | Looked in Settings, then the host panel | "I'd probably just tell them in person, to be honest." | No obvious route to flag someone mid-session - **screen 14a** |

**Debrief answers:**

- *Most confusing moment:* "The coloured dots. I couldn't tell if I was supposed to go to the green
  ones or avoid them."
- *Would join with strangers? why:* "At a uni, yeah. In a random suburb at night, no. Depends who
  else is there, and I'd want to see that they're real people."
- *Voice or quick replies:* "Quick replies, a hundred percent. I'm not talking to four strangers."
- *Would change:* "Make the flag thing obvious. And tell me what the colours mean without me having
  to guess."

**Note-taker's top 3 problems from this session:**

1. Radar colour semantics are ambiguous - participant inverted the meaning (screen 14)
2. Quick replies not discoverable; mic appears to be the only response channel (screen 11)
3. Flagging a participant is not findable under time pressure (screen 14a)

---

# Sample B - questionnaire response (remote)

```
Participant code: PQ-1      Device: phone      Time taken: about 12 minutes
Tasks not completed: Task 5 - couldn't find how to report someone
```

**Part A - usability scale.** Ratings 1-5 across the ten standard statements, giving a computed
score of **67.5** for this participant.

*How that was worked out:* odd-numbered statements score rating − 1, even-numbered score
5 − rating, sum the ten, multiply by 2.5. Lowest-scoring items for this person were the two about
complexity and needing to learn a lot before getting going.

**Part B - ChronoMap items** (1 = strongly disagree, 5 = strongly agree):

| Item | | Rating |
| --- | --- | --- |
| C1 | Understood the purpose before doing anything | 3 |
| C2 | Would join a session with people I don't know | 4 |
| C3 | Would be comfortable on the voice channel | **2** |
| C4 | Radar made it clear where to stand | **2** |
| C5 | Trusted faces and location would be protected | 4 |
| C6 | Model and badge would make me take part again | 3 |

**Part C - open questions:**

> **O1. Most confusing moment, and on which screen?**
> "The radar screen during filming. I understood there were gaps but not which gap was mine to
> fill. I ended up just taking photos where I already was."

> **O2. What would stop you using this at a real landmark?**
> "Honestly, standing around with strangers for five minutes feels awkward unless someone's clearly
> in charge. The host thing helps but I wasn't sure if the host was a real person or the app."

---

# Sample C - how those roll up into a finding

Two participants above hit the same problem in different ways. That becomes **one row**, not two:

| ID | Problem | Screen | Task | Evidence | Participants | Severity | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F1 | Radar colour coding is ambiguous: participants cannot tell whether a colour marks a covered area or one needing coverage | 14 | T3 | PT-1 inverted the meaning out loud ("green means done? or green means go there?"); Q1 rated radar clarity 2 and said they "didn't know which gap was mine" | PT-1, Q1 | **3 - major** | **Fix:** add an explicit legend and change the thin-area marker from a hollow dot to a labelled chip |

**Why severity 3:** it did not stop the task being completed, but it defeats the core coordination
idea. If people cannot read the radar, the whole argument that the design makes a group behave like
a camera array falls over.

### Things this sample illustrates

- **Merge, don't duplicate.** The same underlying problem seen by several people is one finding
  with several participant codes, and that count is what makes it credible.
- **Evidence means a quote or an observed action**, not "users found it confusing."
- **Severity is about consequence**, not how loudly someone complained.
- **Not everything becomes a fix.** PT-1's "I'd just tell them in person" is a real reaction but may
  be a *defer* - a prototype cannot test social dynamics that need real co-presence. Say so, with
  the reason. A deferral with an honest justification reads better than a silent omission.
- **A score near the published average of ~68 is not a result on its own.** Five people cannot
  support a statistical claim. Report it as a reference point, and let the qualitative findings do
  the real work.
