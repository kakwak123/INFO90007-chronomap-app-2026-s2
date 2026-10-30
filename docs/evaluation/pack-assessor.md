# Assessor pack - running a ChronoMap evaluation session

For the team member running a session. Covers both techniques: the in-person **think-aloud**
(participants PT-1 to PT-5) and the remote **questionnaire** (participants PQ-1 to PQ-5).

Do not give this file to a participant. Hand them `pack-tester.md` instead - it deliberately leaves
out the success criteria so they are not led to the answer.

The underlying decisions and the full instrument live in `study-kit.md`. This pack is the practical
run-sheet; where the two disagree, the study kit wins.

---

## Before you start (once, ~15 minutes)

- [ ] Open the Figma prototype on the test phone and run the whole journey end to end.
- [ ] Attempt all five tasks yourself from their reset screens (see the run cards in Part 1).
      Wait for the two timed screens in T2 and T3. Confirm each ends on the screen the card names.
- [ ] Fix any dead link **now**. A broken link discovered mid-session wastes a participant you
      cannot replace.
- [ ] Print or open: the task cards (`pack-tester.md`), this pack, and a blank notes template
      (`study-kit.md` §8) per participant.
- [ ] Agree who moderates and who takes notes. **Two people.** One person cannot do both well.

---

## Part 1 - Think-aloud sessions (PT-1 to PT-5, in person, ~25 min each)

### Timing

| Stage | Time | What happens |
| --- | --- | --- |
| Welcome and consent | 2 min | Explain, ask about audio recording, record their answer |
| Context briefing | 1 min | Read the briefing aloud, word for word |
| Warm-up | 1 min | "Open the app and tell me what you think it is for" |
| Tasks | 15 min | Five tasks, one at a time, ~3 min each |
| Debrief | 3 min | Four questions |
| Wrap | 2 min | Thanks, note the end time |

### The four rules

1. **Do not help.** Let them struggle. Struggling is the data.
2. **If they go quiet for 10 seconds**, prompt: *"What are you thinking?"* or *"What do you expect
   that to do?"* Never *"Have you tried the button at the top?"*
3. **If they are stuck for 60 seconds**, give the smallest possible hint, write it down as an
   **assist**, and move on. A task completed after an assist is scored P, not C.
4. **Never explain why something is designed the way it is.** If they ask, say *"I'll explain
   after we finish - what would you expect it to do?"* Defending the design mid-session contaminates
   everything after it.

### Scoring each task

| Code | Meaning |
| --- | --- |
| **C** | Completed with no help and no wrong turns |
| **P** | Completed, but needed an assist or went the wrong way first |
| **F** | Not completed, or abandoned at 5 minutes |

Stop a task at 5 minutes and record F. Do not let one task eat the session.

### Run cards - one per task

Keep this section to yourself. Before **every** task: reset the prototype to the start screen,
read the task aloud, start the timer. The prototype moves on by itself in two places (see T2 and
T3), so do not be surprised when a screen changes without a tap.

For each task, tick what you see, write the time, then circle C, P or F. The stop time is 5 minutes.

#### T1 - Join the clock tower session

| Item | Detail |
| --- | --- |
| Start screen | `02 Home: Nearby` |
| Intended path | Clock Tower card in Live near you, Join, arrive at `09P Rally: participant view` |
| Done when | They are on `09P` |
| Watch for | Did they look in Community or Requests first (the pilot did)? Did they find the card without scrolling? |
| Tick | [ ] found card unaided  [ ] went to another tab first  [ ] hesitated over Join |

#### T2 - Find your position and tell the host you are ready

| Item | Detail |
| --- | --- |
| Start screen | `09P Rally: participant view` |
| Intended path | Wait about 8 s (the host "starts" by itself), arrive at `11 Briefing: your position`, tap I'm in position |
| Done when | They say their position and roughly where it is, **and** signal ready |
| Watch for | Which signal did they use: the I'm in position button, a quick reply, or speaking? Write it down, do not prompt. Did they tap Share rally link while waiting (it does nothing)? |
| Tick | [ ] said position correctly  [ ] signalled by button  [ ] signalled by quick reply  [ ] signalled by voice  [ ] tapped Share rally link |
| Note | `11` shows the position in its heading, so this tests reading it, not finding it |

#### T3 - Move when the host asks, and let them know

**What this task tests.** Whether a participant who is mid-capture notices an instruction from the
host, understands what it asks, does it, and tells the host. It is the main test of the coordination
design: the host sees everyone on a radar and directs people by voice and callout. It is **not** a
test of whether they can read the radar. That is the probe afterwards, and it is recorded, not scored.

| Item | Detail |
| --- | --- |
| Start screen | `14 Filming: live call` (reset here before reading the task) |
| Background to read | "Capture has started. You are one of four people photographing the clock tower together, and you are all on a voice call. The host of the session is @mapfox." |
| Task to read | "Assume @mapfox has just told you on the call to move two metres to your left and aim at the clock face. Do that, physically, then let them know." |
| Intended path | `14`, callout appears (`15`), participant physically steps to their left and aims the phone, taps I'm in position or a quick reply, back on `14c` |
| Done when | They physically make the move **and** acknowledge the host with any control |
| Remote participants | They read the same background and task and see the same callout. Their form answer cannot confirm they moved |

**What happens on screen, and when.** Start the timer when you say "go".

| Time | Screen | What the participant sees |
| --- | --- | --- |
| 0 s | `14` | Live capture: radar, coverage line ("3 of 4 sides covered, south-west needs photos"), mic and Stop capture |
| about 5 s | `15` | The screen changes by itself. A callout reads "Move 2 m left, aim at the clock face", with the one-tap replies On my way, Need a hand, Ready, and the buttons I'm in position and Mute mic |
| after a reply | `14c` | Back on the live capture screen. This copy has no timer, so the callout does not come back |

You do not speak as the host and you do not tap anything. If they ask "did that screen change by
itself?", say "yes, that is part of the prototype" and note that they asked.

**How to run it**

1. Reset the prototype to `14`. Check the participant can see the whole phone screen.
2. Read the background, pause, then read the task. Read both exactly as written.
3. Say "go" and start the timer. Then stay quiet and watch their feet as well as their hands.
4. When they have replied (you are on `14c`), stop the timer and write the time.
5. Ask the probe: "Which side of the tower still needs photos, and how do you know?" Write the answer word for word and tick whether it came from the radar, the label or the callout text.
6. Move on. Do not say whether they did it right.

**Scoring T3**

| Code | When to use it for T3 |
| --- | --- |
| **C** | They move as asked **and** acknowledge the host, with no help and no wrong turns |
| **P** | They do both, but needed a hint, or went to another screen first (for example Mute mic, Stop capture or the flag icon) |
| **F** | They never acknowledge the host, or reach 5 minutes, or only acknowledge without moving when you could see they did not move |

Moving but not replying is **F**. Replying but not moving is **P** at best: write "replied without
moving" in the notes, because it may mean they read the task as a screen task.

**What to watch for and record**

- Did they notice the callout on their own, or wait for you? Write the number of seconds between the callout appearing and their first reaction.
- Did they move **before** they replied, **after**, or not at all? Which way did they go?
- Which control did they use: I'm in position, a quick reply (which one), or speaking aloud?
- Did they look at the radar at any point? Did they say anything about the south-west dot or the coloured dots?
- Did they tap anything other than a reply? Mute mic also returns to `14c` without answering the host, so count it as a wrong turn.
- Any verbatim comment about the host, for example "who is mapfox?" or "is that a real person?"

**If something goes off script**

| Situation | What to do |
| --- | --- |
| They ask "do I really have to move?" | "Do whatever you would do if you were really there." Record the question |
| They move and wait for you to confirm | Stay quiet for 10 seconds, then prompt: "What are you thinking?" Never say "tap the button" |
| The callout has not appeared after 10 seconds | The timer did not fire. Say "that one hasn't changed, let's move on", record a dead screen for `14`, and skip to `15` by hand so the task can continue. Note that you did |
| They tapped something and ended on the wrong screen | Do not correct them. Record where they ended. T4 starts on `16`, so reset there before reading it |
| They start the task before you finish reading it | Let them. Note it |
| They ask what "the host" is | "The person running the session, @mapfox." That is background, not a hint |

**Probe: what "needs photos" means.** The side of the tower with the least coverage so far. On screen
14 it is the side named in the coverage line (south-west), and the radar shows it as the gap. A
correct answer is south-west. Record the answer **and** where it came from. If they say "I don't
know", that is a valid answer. Do not explain.

| When | Tick |
| --- | --- |
| During | [ ] noticed callout unaided  [ ] moved left  [ ] moved before replying  [ ] replied by button  [ ] replied by quick reply  [ ] replied by voice  [ ] wrong turn |
| Probe | [ ] said south-west  [ ] read from radar  [ ] read from label  [ ] read from callout  [ ] did not know |

#### T4 - Share the model without the exact location

| Item | Detail |
| --- | --- |
| Start screen | `16 After filming: capture complete` |
| Intended path | `16` uploads by itself and moves on after about 6 s, `17` moves on after about 6 s, `18 Artifact`, Share, `20 Share exhibit`, turn off Include exact coordinates (goes to `20b`), Share, arrive at `20c Shared: location hidden` |
| Done when | They are on **`20c`**. If they are on `20d` they shared the exact location: score F |
| Watch for | Did they notice the coordinates toggle before tapping Share? Did they share first, then try to undo? Did they tap View souvenir & score (goes to `18a`, a detour, record as a wrong turn) or Back to Explore (leaves the task)? |
| Tick | [ ] waited through the automatic upload  [ ] found the toggle  [ ] turned it off before sharing  [ ] ended on 20c  [ ] ended on 20d |

#### T5 - Flag the participant photographing strangers

| Item | Detail |
| --- | --- |
| Start screen | `14c Filming: live call (no timer)` |
| Intended path | Tap a participant, `14a` options, pick a reason, arrive at `14b Participant flagged` |
| Done when | They are on `14b` |
| Watch for | Which reason did they pick? Did they look for a report control elsewhere (flag icon, voice channel)? |
| Tick | [ ] tapped the participant  [ ] picked Photographing strangers  [ ] used another route |

**Reset screens** (in Present mode, jump to these frames by name, or open the prototype link at that frame):

| Task | Reset to |
| --- | --- |
| T1 | `02 Home: Nearby` |
| T2 | `09P Rally: participant view` |
| T3 | `14 Filming: live call` |
| T4 | `16 After filming: capture complete` |
| T5 | `14c Filming: live call (no timer)` |

There is no Hold steady button any more. If a participant asks about it, they have seen an old copy of the prototype.

T2 and T3 are the ones to watch. They are the tasks that test whether the coordination design
actually works, and they are where the host/radar concept either proves itself or does not.

### Scoring sheet - one per participant

Copy this block for each think-aloud participant. Fill it in during the session, in pen if printed.

Participant: P__ | Date/time: ________ | Moderator: ________ | Note-taker: ________

Audio consent: yes / no | Device: phone / laptop | Started on 02 Home: yes / no

| Task | Start | End | Time | Assists | Wrong turns | Outcome | Route to record |
| --- | --- | --- | --- | --- | --- | --- | --- |
| T1 | | | | | | C / P / F | |
| T2 | | | | | | C / P / F | button, reply or voice |
| T3 | | | | | | C / P / F | moved? button, reply or voice. Probe: radar, label or callout |
| T4 | | | | | | C / P / F | ended on 20c or 20d |
| T5 | | | | | | C / P / F | reason picked |

- Dead or broken screens met (screen number and what happened):
- Best quote per task (verbatim, with the task number):
- Top 3 problems (write straight after, before the next participant):
  1. ________
  2. ________
  3. ________

After the session, copy the outcomes into one row per participant here:

| Participant | T1 | T2 | T3 | T4 | T5 | Total time | Assists |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PT-1 | | | | | | | |
| PT-2 | | | | | | | |
| PT-3 | | | | | | | |
| PT-4 | | | | | | | |
| PT-5 | | | | | | | |

Questionnaire participants (PQ-1 to PQ-5) have no moderator, so there is no outcome row for them: use the
form's "any task you could not complete" answer instead.

### Debrief questions

Ask all four, in this order, and write the answers verbatim:

1. What was the most confusing moment?
2. Would you join a session like this with people you do not know? Why or why not?
3. Would you use the voice channel, or the quick replies?
4. Anything you would change?

### Immediately after - before the next participant

Write down **your top three problems from this session** while it is fresh. Five sessions blur
together fast, and a problem you cannot remember at analysis time may as well not have happened.

---

## Part 2 - Questionnaire (PQ-1 to PQ-5, remote, ~15 min each)

These must be **five different people** from the think-aloud five. The handout requires ten
participants, five per technique.

### Sending it out

Send three things together:

1. The prototype link (the shareable Figma link, verified it opens when logged out).
2. The tester pack - the context briefing and the five tasks.
3. The form link.

Ask them to do the tasks alone, in order, and fill the form **straight afterwards** while it is
fresh. Ask them to note roughly how long the tasks took.

### Building the form

Google Forms is fine. Four parts, in this order - the full item list is in `study-kit.md` §7:

| Part | Contents | Scale |
| --- | --- | --- |
| A | The ten standard System Usability Scale statements | 1-5, strongly disagree to strongly agree |
| B | Six ChronoMap items (C1-C6): purpose, joining strangers, voice comfort, radar clarity, privacy trust, motivation | same 1-5 |
| C | Two open questions (O1, O2) | free text |
| D | Participant code, device used, rough time taken, any task not completed | short answer |

Add the participant code field as the **first** question, not the last - people abandon forms at the
end, and a response you cannot attribute is hard to use.

### Scoring the usability scale

For the odd-numbered statements, subtract 1 from the rating. For the even-numbered ones, subtract
the rating from 5. Add the ten results and multiply by 2.5. That gives a score from 0 to 100.

Report the mean, the spread, and the per-item means across your five participants. Around 68 is the
published average - treat it as a point of reference, not a pass mark, and do not claim statistical
significance from five people.

---

## Common mistakes

- **Moderating and note-taking alone.** You will do both badly and lose the quotes.
- **Helping too early.** The instinct to rescue someone is strong. Sixty seconds is longer than it
  feels; count it.
- **Interpreting during the session.** Write what happened, not what it means. Interpretation is
  Saturday's job, done as a group.
- **Paraphrasing quotes.** Verbatim or not at all. A real sentence in the report is worth more than
  a tidy summary.
- **Letting the participant think they are being tested.** Say it twice if you need to: we are
  testing the design, not them.
- **Skipping the warm-up.** Whether someone understands the purpose before they tap anything is
  itself a finding, and you only get one chance per person to observe it.

---

## If something goes wrong

| Problem | What to do |
| --- | --- |
| A link is dead mid-session | Note the screen number, say *"that one isn't wired up - let's move on"*, continue. Record it as a finding. |
| They ask whether they did it right | *"There's no right answer - I'm interested in what you expected."* |
| They refuse audio recording | Fine. Take written notes only. Record the refusal on the notes sheet. |
| They finish very early | Use the optional sixth task in `study-kit.md` §5, or go deeper in the debrief. |
| They want to talk about the idea, not the interface | Let them - briefly. Willingness to join strangers is one of the things you are trying to learn. Then steer back. |

---

## Where it all ends up

Everything recorded here flows into `findings-log.md` on Saturday, and from there into report
§3.4 and §3.5. Both are already scaffolded and waiting on this data.
