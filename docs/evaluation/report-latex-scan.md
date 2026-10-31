# Scan of the real report (Overleaf LaTeX), 31 Oct 2026

Read-only scan of the clone at `~/overleaf-a3` (latest Overleaf commit `c71db08`, "Reword the leading
evaluation tasks and reframe the rename as retest-pending"). It replaces the earlier checks that used the
markdown draft, which is behind the LaTeX. Compiler is pdfLaTeX; the draft marker switch is
`\draftmodetrue` in `main.tex` (flip to `\draftmodefalse` for the final PDF).

## What is already in good shape

- All handout sections exist as files: 01 Introduction, 02 Methods, 03 Results, 04 Discussion, 05 Conclusion,
  06 Contribution, 07 AI statement, 08 References, 09 Appendices.
- Figures are embedded: the seven Assignment 2 prototype images (satisfying "images of all initial
  prototypes"), 21 hi-fi figures in Results, and a 30-screen app gallery in the appendix.
- Section 3.4 already contains a **pilot narrative** (29 October, 3 min 40 s, the "station" collision), and the
  rename to "position" is recorded as made before any participant session. This matches how the repo now treats
  that session (Pilot, not counted).
- Section 4 Discussion has a researched market comparison and citations.
- Prose word count (tables, figures and markers excluded) is about **4,030** across sections 1 to 7. The
  handout limit is 3,000 to 5,000. Overleaf's own count is the one to trust.

## Open markers: 78 in total

| File                  | Markers | What they are                                                                                                                 |
| --------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `main.tex`            | 11      | Draft-mode box and legend, plus title-page checks                                                                             |
| `01-introduction.tex` | 2       | Placing the system among existing ones; one-line summary of what the evaluation showed                                        |
| `02-methods.tex`      | 10      | Participants and procedure, timeline table, design guidelines, a figure count                                                 |
| `03-results.tex`      | 30      | Screen count, A2 feedback row, iteration table, 3.4.2 task table, 3.4.3 questionnaire text, 3.4.4 findings table, 3.5 changes |
| `04-discussion.tex`   | 2       | Is it usable, and the problems not fixed                                                                                      |
| `05-conclusion.tex`   | 1       | The whole conclusion                                                                                                          |
| `06-contribution.tex` | 5       | Contribution table (4 rows) and peer-review check                                                                             |
| `07-ai-statement.tex` | 3       | Yes or no, explanation, logs                                                                                                  |
| `08-references.tex`   | 9       | Missing citations and access dates                                                                                            |
| `09-appendices.tex`   | 2       | Decision log, evaluation materials                                                                                            |

## Where the report disagrees with the repo or with itself

1. **Participant numbers are written as done.** Methods says "ten participants in total, none from the team, and
   no overlap". Right now there are two think-aloud recordings and no valid questionnaire responses. The text
   must say the real count when the evaluation closes.
2. **Participant codes.** A marker says to use P1 to P5 and Q1 to Q5. The repo now uses PT-1 to PT-5 and PQ-1 to PQ-5.
3. **Screen count.** Section 3.1 has a marker (`31 after the restructure`), the appendix is a 30-screen gallery,
   and the Figma flow now has about 36 frames (new: 14c, 18a, 20b to 20d). Decide what is counted and state it once.
4. **"station" in running text:** `02-methods.tex` line 86 (assigned station), `03-results.tex` lines 31 and
   33 (assigning stations, station assignment). The pilot narrative and the retest note in `04-discussion.tex` are
   deliberate and must stay.
5. **Task wording:** the task table and Methods should use the final T1 to T5 wording (T3 is now a scene with
   background; T2 no longer ends "without speaking").
6. **Instruments and form:** Methods describes ten SUS items, six custom items and two open questions; the
   live form matches. The form screenshots belong in Appendix D (evaluation materials, `09-appendices.tex`).
7. **Fixes made before testing** (timers, 14c, 18a, 20b to 20d, "Hold steady" removed, wording changes) need a
   separate place from findings-driven changes in section 3.5.

## Plan for edits (small commits, one section each)

1. Remove or fix stale wording (items 2 and 4) and the screen count (item 3).
2. Fill 2.4 participants and procedure from `participants.md`, with the real numbers.
3. Fill 3.4.2 task table (only from moderator-scored outcomes), 3.4.3 (only from real PQ responses), 3.4.4 findings
   from `findings-log.md`, 3.5 changes.
4. Add the form screenshots and the evaluation materials to the appendix (`appendix/appendix-questionnaire-form.tex`).
5. Fill contribution, AI statement with real tool use and logs, references and access dates.
6. Set `\draftmodefalse`, compile, search the PDF for `[`, `FILL`, `station`, and check the word count.

## Risks

- **No local TeX installation** on this Mac (`pdflatex`, `latexmk` and `tectonic` are all missing), so a LaTeX
  error would only show after pushing, when Overleaf compiles. Fix: install a compiler (for example `tectonic` with
  Homebrew) to test builds locally first, or push one section at a time and watch the Overleaf compile.
- **Teammates editing Overleaf in the browser** while commits are pulled or pushed can cause merge conflicts, and
  Git pushes can lose Overleaf comments and tracked changes. Tell the team before pushing.
- **Honest data only:** no estimated or interpretive numbers in 3.4.
