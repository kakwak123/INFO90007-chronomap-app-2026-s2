# Assessor pack - running a ChronoMap evaluation session

For the team member running a session. Covers both techniques: the in-person **think-aloud**
(participants P1-P5) and the remote **questionnaire** (participants Q1-Q5).

Do not give this file to a participant. Hand them `pack-tester.md` instead - it deliberately leaves
out the success criteria so they are not led to the answer.

The underlying decisions and the full instrument live in `study-kit.md`. This pack is the practical
run-sheet; where the two disagree, the study kit wins.

---

## Before you start (once, ~15 minutes)

- [ ] Open the Figma prototype on the test phone and run the whole journey end to end.
- [ ] Attempt all five tasks yourself. Note the exact tap path for each - you need to know the
      intended route to recognise when someone has gone off it.
- [ ] Fix any dead link **now**. A broken link discovered mid-session wastes a participant you
      cannot replace.
- [ ] Print or open: the task cards (`pack-tester.md`), this pack, and a blank notes template
      (`study-kit.md` §8) per participant.
- [ ] Agree who moderates and who takes notes. **Two people.** One person cannot do both well.

---

## Part 1 - Think-aloud sessions (P1-P5, in person, ~25 min each)

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

### Success criteria - what counts as done

Keep these to yourself during the session.

| Task | Counts as complete when they… |
| --- | --- |
| T1 | Reach the rally screen for the clock tower session |
| T2 | Can say which position they have and where it is, **and** signal ready by any means. Record which method they chose; do not prompt rather than the mic |
| T3 | Use a quick reply to respond, **and** correctly name the side that still needs photos |
| T4 | Reach the share screen with exact location off and a story format selected |
| T5 | Open the participant menu and flag the person |

T2 and T3 are the ones to watch. They are the tasks that test whether the coordination design
actually works, and they are where the host/radar concept either proves itself or does not.

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

## Part 2 - Questionnaire (Q1-Q5, remote, ~15 min each)

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
