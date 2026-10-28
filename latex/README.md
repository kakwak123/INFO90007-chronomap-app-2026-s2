# A3 report source

The LaTeX source is **not kept in this repository**. It lives in the Overleaf project, which is the
single editable copy:

**<https://www.overleaf.com/project/6ae265a36fca9830f321ba4e>** - "INFO90007 Assignment 3 - ChronoMap 3D"

A copy used to sit here as `latex/a3-report/`. It was removed because it drifted out of step with
Overleaf within a day, and two editable copies of the same document before a deadline is a hazard,
not a backup. Overleaf keeps its own version history.

## Editing in the browser

Open the project link and type. Nothing else needed.

## Editing over git

Overleaf exposes the project as a git remote. Clone it **outside this repository** so you do not
nest one git repo inside another:

```bash
git clone https://git.overleaf.com/6ae265a36fca9830f321ba4e C:/Users/kakwa/Documents/overleaf-a3
```

Username can be anything (`git` works); the password is an Overleaf Git token, generated once at
Account settings -> Git integration -> Generate token. Windows Credential Manager remembers it.

Then the normal loop:

```bash
git pull                  # take what others changed in the browser
# ...edit...
git commit -am "..."
git push                  # Overleaf reflects it immediately
```

Both routes write to the same project, so pull before you start and push when you stop.

## Two things that bite

**Em and en dashes.** This repo's pre-commit hook rejects them, but **the Overleaf clone has no
hook**. Run the checker there by hand before pushing:

```bash
bash /path/to/this/repo/scripts/check-dashes.sh
python /path/to/this/repo/scripts/fix-dashes.py
```

**Compile before you push.** A push that breaks the build leaves the project showing "No PDF" for
anyone who opens it. Recompile in Overleaf and confirm a PDF appears before treating a change as
done.

## Where the content comes from

| Report section | Source in this repo |
| --- | --- |
| 3.1 A2 response, Appendix D | `docs/A2-FEEDBACK.md` |
| 3.2.1 figures | `docs/a2-figures/` |
| 3.3 and Appendix A screens | `docs/video-assets/` |
| 3.4 findings | `docs/evaluation/findings-log.md`, `docs/evaluation/sessions/` |
| Appendix B | `docs/design-decision-log.md` |
| Links and submission checks | `docs/PROJECT-LINKS.md` |
| What is still outstanding | `docs/A3-RUN-SHEET.md` |
