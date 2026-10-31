# Report against the Assignment 3 handout

Checked Sat 31 Oct 2026 against `../course-materials/Assignment 3.pdf` and the draft in
`../INFO90007_Assignment_3_Report.md`. The real report is in Overleaf, so this table must be re-checked
against the LaTeX once it is scanned (see `../A3-RUN-SHEET.md`). Report and Figma link are due **Mon 2 Nov,
11:59pm**.

Status: **done**, **partial**, **missing**, or **check** (cannot be confirmed from the repo).

## Requirements stated in the handout

| #   | Requirement (handout wording, shortened)                                                 | Report section      | Status  | What is left                                                                                                                     |
| --- | ---------------------------------------------------------------------------------------- | ------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Group of 3 or 4                                                                          | Title page          | done    | Four members listed with IDs                                                                                                     |
| 2   | Report submitted as a PDF                                                                | n/a                 | check   | Export from Overleaf and open it                                                                                                 |
| 3   | 3000 to 5000 words                                                                       | whole report        | check   | Draft body is about 5,100 words before evaluation text. Count in Overleaf; trim sections 2 and 4 and appendices first            |
| 4   | Images of all initial prototypes                                                         | 3.2, figures 1 to 6 | missing | None embedded. Files are in `../a2-figures/` (seven images)                                                                      |
| 5   | Title page: system name, member names                                                    | Title page          | done    | Keep                                                                                                                             |
| 6   | Title page: link to the Figma project                                                    | Title page          | partial | Link still points at the old "Low-Fi Prototype" file. Replace with the final file and the frozen v1 copy; set to anyone can view |
| 7   | Title page: link to the YouTube demo                                                     | Title page          | done    | Confirm it opens signed out and is not "Made for Kids"; fill the video date                                                      |
| 8   | Introduction: the system and its main purpose                                            | 1                   | done    | Fix screen count in the A2 to A3 table                                                                                           |
| 9   | Methods: a thorough description of the evaluation techniques                             | 2.4                 | partial | Still has decision and fill markers: participants, setting, dates, prototype tested                                              |
| 10  | Results: prototypes and how they evolved from the evaluation                             | 3.2, 3.5            | partial | 3.5 (version 2 changes) is empty                                                                                                 |
| 11  | Results: features and how they support social behaviours                                 | 3.3                 | partial | Drafted; four blocks still say rewrite or fill                                                                                   |
| 12  | Results: justify design decisions                                                        | 3.3, appendix B     | partial | Check each major decision has a reason                                                                                           |
| 13  | Results: how the user evaluation changed the system                                      | 3.4, 3.5            | missing | 3.4 findings tables are templates. Source: `findings-log.md`                                                                     |
| 14  | Discussion: is the final prototype usable                                                | 4.1                 | missing | Placeholder. Write from real SUS and task data                                                                                   |
| 15  | Discussion: what it is good for, problems                                                | 4.2                 | check   | Read against the findings                                                                                                        |
| 16  | Discussion: what to change with more time                                                | 4.5                 | partial | Fill from deferred findings                                                                                                      |
| 17  | Discussion: comparison with similar systems                                              | 4.3                 | partial | Street View, Mapillary, Polycam rows unverified                                                                                  |
| 18  | Contribution via FeedbackFruits                                                          | 6                   | partial | Fill the date; optional table of who led what                                                                                    |
| 19  | AI Use Statement, yes or no, 50 to 300 words, logs of prompts and outputs                | AI Use Statement    | missing | Write honestly; attach or link the logs, including Claude Code sessions                                                          |
| 20  | Evaluation: one querying and one observation technique, 10 participants, 5 per technique | 2.4, 3.4            | partial | Two think-aloud recorded, no real questionnaire responses yet. Report the real count                                             |
| 21  | Improve the prototype from the evaluation                                                | 3.5, Figma          | partial | Version 2 changes must come from findings                                                                                        |
| 22  | High-fidelity functional prototype in Figma with all interactions                        | Appendix A          | partial | Task paths fixed; link and screen count to verify                                                                                |
| 23  | 3-minute video demo on YouTube                                                           | Title page          | check   | Handout deadline for the video was 18 Oct                                                                                        |
| 24  | Individual oral assessment                                                               | n/a                 | n/a     | Not part of the report. Prepare using `design-decision-log.md`                                                                   |

## Assessed on (handout)

| Criterion                                               | Where the report addresses it           |
| ------------------------------------------------------- | --------------------------------------- |
| Overall quality of the report                           | Whole document, references, consistency |
| UI and functionality fit for the design space           | 3.2, 3.3                                |
| Methods and techniques in design and evaluation         | 2.x, especially 2.4                     |
| Demo effectiveness and how it supports social behaviour | Video, 3.3                              |
| Complexity and creativity of the system                 | 1, 3.3                                  |
| Individual oral                                         | not in the report                       |

## Draft scaffolding to remove

- "How to use this draft" box on the title page.
- Eleven italic rubric lines.
- About ninety fill, decide and verify markers.
- Appendices that only point to files in this repo.

## Stale content to correct

- "station" becomes "position" (screen table, 3.3, 3.4.2 task table).
- Task table: final T1 to T5 wording; T3 is a scene with background.
- Participant codes: PT-1 to PT-5, PQ-1 to PQ-5, pilot excluded.
- Screen and link counts against Figma.
- Appendix A: the file was renamed; say which file is v1 (frozen copy) and which is the working file.

## Data rules for every edit

- Only real participant responses and transcript quotes. The first two form responses were not from independent
  participants and are excluded.
- State the real sample size.
- Codes only, no names or emails.

## Checked against the compiled title page (31 Oct)

From a screenshot of the compiled PDF's title page (the LaTeX itself is not scanned yet):

- Names, student IDs, submission date, a Figma design link, a Figma Present link and the YouTube link are all
  there, with a linked video thumbnail. This is further along than the markdown draft.
- A "Draft build" box and coloured markers show: there is a `\draftmodefalse` switch in the preamble that hides
  them. **Turn it off for the final PDF and check no marker survives.**
- The title page says both Figma links were confirmed readable in a logged-out window, and that the video is
  public and not "Made for Kids". Checked on 31 Oct from a signed-out browser: both Figma links open, the video
  plays signed out (3:00), and no restriction text appears. Re-check on submission day.
- Missing: a link to the frozen v1 copy of the prototype (not yet shared publicly), and the video date.
- Word limit is stated in the draft box; the count itself is not visible from the title page.

## Questionnaire form pages for the appendix

Five signed-out screenshots of the live form are in `appendix/`, with LaTeX in
`appendix/appendix-questionnaire-form.tex`. Page 1 (title, consent, code, tasks) is the main page. Nothing was
entered or submitted. Retake the screenshots if the form wording changes (for example C5 and C6).
