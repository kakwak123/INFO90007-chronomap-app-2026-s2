# PT-1 and PT-2: what the questionnaire items might have been

**This is an analyst's reading of two transcripts. It is not participant data.**

- These are **not** ratings given by PT-1 or PT-2. Only they know what they would choose.
- Do **not** enter these numbers in the questionnaire form.
- Do **not** report them as SUS or ChronoMap scores, and do **not** average them into any result.
- Use it to understand their perspective, and as a prompt for what to ask or look for.

Source: `sessions/PT-1-2026-10-30-transcript.md` and `sessions/PT-2-2026-10-30-transcript.md`.
Codes only, no names. Both sessions ran with the pre-30-Oct prototype and the old task 3 wording.

How strong the evidence is: **strong** means the participant said something directly about it,
**medium** means it follows from their behaviour or comments, **weak** means a guess, and
**none** means the recording says nothing.

---

## Part A: System Usability Scale (1 strongly disagree to 5 strongly agree)

| #   | Statement                                  | PT-1   | PT-2   | Evidence                                                                                                                                   |
| --- | ------------------------------------------ | ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | I would like to use this system frequently | 1 to 2 | 1 to 2 | Strong. Neither would join strangers. PT-1: no benefit "when it's not even paid". PT-2: safety hazards.                                    |
| 2   | Unnecessarily complex                      | 4      | 3 to 4 | Medium. PT-1: "very confusing from the start". Both blame missing context more than the screens.                                           |
| 3   | Easy to use                                | 1 to 2 | 2      | Strong. PT-1: "I do not understand this instruction", "where the hell am I". PT-2 asked for a task to be repeated and said "I don't know". |
| 4   | Need a technical person                    | 3 to 4 | 3      | Weak. Both wanted the purpose explained, which is not quite the same.                                                                      |
| 5   | Functions well integrated                  | 2      | 3      | Weak. PT-1 found the quick replies did nothing.                                                                                            |
| 6   | Too much inconsistency                     | 3 to 4 | 3      | Weak. PT-1: "even if I click anything it doesn't do anything".                                                                             |
| 7   | Most people would learn it quickly         | 2      | 2 to 3 | Weak. Inferred from how lost they were.                                                                                                    |
| 8   | Very cumbersome                            | 4      | 3 to 4 | Medium. Dead buttons and unclear tasks.                                                                                                    |
| 9   | Felt very confident                        | 1      | 2      | Strong. PT-1: "I'm so confused, I don't even know the point of this". PT-2: "not really sure about the app yet".                           |
| 10  | Needed to learn a lot first                | 5      | 4 to 5 | Strong. PT-1: "we didn't have any prior knowledge". PT-2: "I had no context".                                                              |

Items 4 to 7 are mostly guesswork. Do not quote a SUS score from this table.

## Part B: ChronoMap items (1 strongly disagree to 5 strongly agree)

| #   | Statement                                             | PT-1   | PT-2   | Evidence                                                                                                                                         |
| --- | ----------------------------------------------------- | ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| C1  | Understood what it is for before doing anything       | 1      | 1 to 2 | Strong. PT-1: "no context for any background". PT-2: "I did not know what the app really was about".                                             |
| C2  | Willing to join a capture session with strangers      | 1 to 2 | 1      | Strong. PT-1: "why would I join it when it's not even paid". PT-2: "I do not like people" and "safety hazards".                                  |
| C3  | Comfortable joining the voice channel                 | 2      | 2      | Medium. PT-1: "I don't see the point of answering about voice channel". PT-2 chose quick replies because of "misunderstandings" across cultures. |
| C4  | Radar made it clear where to stand                    | 2      | 2 to 3 | Medium. PT-1: "where the hell am I". PT-2 saw "several dots" and "the yellow thing" with no context, but did name south-west in task 3.          |
| C5  | Trusted faces and exact locations are protected       | none   | none   | Neither recording mentions privacy. PT-1 asked "share the model to who, when and how", which says nothing about trust.                           |
| C6  | Model and badge would make me want to take part again | 2      | 2      | Weak. PT-1 reacted to "a souvenir and a score?" without enthusiasm and said "I don't know what is the benefit for me".                           |

## Part C: open questions (in their own words, from the debriefs)

These are not estimates. Each quote is from the transcript. The screen numbers are inferred from
where the participant was at the time, so check them against the audio.

| Question | PT-1 | PT-2 |
| --- | --- | --- |
| O1. Most confusing moment, and which screen | The whole start: "no context for any background. I was asked to do something." Sharpest points: task 3, "I do not understand this instruction" (screens 14 and 15, where the quick replies also did nothing), and task 4, "share the model to who, when and how?" (screens 18 and 20). | "I did not know what the app really was about." Then the position and radar screens: "several dots", "the yellow thing", "you're like the northeast", but "I had no context" (screens 11 and 14). |
| O2. What would stop you using this at a real landmark | No reason to be there: "why would I join it when it's not even paid?" and "I don't know what is the benefit for me". | Safety and strangers: "I do not like people", "some safety hazards", and voice could cause "misunderstandings" in "a diverse culture". |

## Their perspectives in short

- **PT-1:** the app gave no reason to be there. The difficulty was the purpose, not the buttons.
  Blunt about it: no background, no benefit, no sense of what to do.
- **PT-2:** cautious about strangers and safety. Preferred quick replies over voice because of
  possible misunderstandings across cultures, which supports the quick-reply design. Tried
  but never understood the app, and would change nothing "because I'm not really sure about the app yet".
- **Both:** a missing explanation of what ChronoMap is for. This is the finding, and it comes
  from the debriefs, not from any number.

## What this suggests checking

- Add a short purpose and context screen before the first task (onboarding already exists on
  screen 01, so check whether it explains the purpose in plain words).
- Wire the one-tap replies. PT-1 tapped "Need a hand" and "On my way" and nothing happened.
- Ask the questionnaire participants C1 and C2 carefully, because both PT participants would
  have scored them at the bottom of the scale.
- Privacy (C5) is untested by these two sessions. Ask about it in the remaining sessions.
