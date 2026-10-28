# A3 report - LaTeX source for Overleaf

## Getting it into Overleaf

1. From this folder, zip the contents (`main.tex`, `sections/`, `figures/`, this README).
   A ready-made `chronomap-a3-overleaf.zip` sits in `latex/`.
2. Overleaf → **New Project → Upload Project** → choose the zip.
3. Set the compiler to **pdfLaTeX** (Menu → Compiler). It is the default.
4. Compile. No bibliography tool is needed - references are a manual `thebibliography`
   list in `sections/08-references.tex`.

Only standard packages are used (geometry, graphicx, booktabs, tabularx, caption,
enumitem, xcolor, microtype, hyperref), all present in Overleaf's default TeX Live.

## Draft markers

Three macros mark unfinished work, and they render in colour so nothing is missed:

| Macro | Means | Colour |
| --- | --- | --- |
| `\FILL{...}` | content the team still has to supply | red |
| `\DECIDE{...}` | a choice the team has to make | orange |
| `\VERIFY{...}` | a claim to check before it stays in | blue |

**Before submitting**, change `\draftmodetrue` to `\draftmodefalse` near the top of
`main.tex`. Every marker then disappears from the PDF. Do a full read after flipping it -
a vanished marker leaves a gap in the prose that has to read correctly without it.

## Where the content comes from

| Section | Source to port from |
| --- | --- |
| 1 Introduction | `docs/INFO90007_Assignment_3_Report.md` §1 |
| 2 Methods | same, §2; evaluation design from `docs/evaluation/study-kit.md` |
| 3.1 A2 response | `docs/A2-FEEDBACK.md` - all nine annotated comments, already transcribed |
| 3.2.1 Figures | `docs/a2-figures/`, captions already written |
| 3.4 Findings | `docs/evaluation/findings-log.md` once sessions are run |
| 4 Discussion | `docs/INFO90007_Assignment_3_Report.md` §4 |
| Appendix B | `docs/design-decision-log.md` |

## Word count

The limit is 3,000-5,000 words. Overleaf shows a count under Menu → Word Count, which
counts the compiled text. The markdown draft currently sits at ~4,294 body words with the
findings still to write, so there is roughly 700 words of headroom. Trim §2 and §4 before
trimming the evaluation - System Evaluation is 12.5 of the 50 marks.
