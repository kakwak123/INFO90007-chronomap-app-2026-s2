# Version 2 screen specification, executable

Every change to make, by screen, with the node id and the evidence behind it. Written so a session
with Figma MCP write access can execute it as a script rather than by clicking.

Nothing here is cosmetic churn. Each item is justified by a participant quote, a numbered finding,
or a principle from `CLAUDE.md`. Where there is no justification, the screen is left alone.

- Feedback and findings: [`v2-changes.md`](v2-changes.md), [`participant-results.md`](participant-results.md)
- Design rules and the positive direction: `CLAUDE.md`
- File: `nGpbcLweFWROFc3oaonWrO`, page `0:1` Page 1 Hi Fi

**Order matters.** Group 1 closes evaluation findings and is what report Section 3.5 is marked on.
Group 2 applies the design principles and helps the demo, the oral and criterion 5. Group 3 is
polish. Stop after Group 1 if time runs out.

---

# Group 1. Closes an evaluation finding

## 11 Briefing: your position (`28:662`) - closes F6

**Evidence.** F6, severity 2, from PT-1 and PT-2, still marked **Open** in the report. PQ-2, in
full: *"the position and radar screens: 'several dots', 'the yellow thing', 'you're like the
northeast', but 'I had no context' (screens 11 and 14)."* They described the radar accurately and
still did not know what it meant.

**Changes.**

1. Add a legend row directly under the radar, matching the one already on `14 v2`: three inline
   items, each a 9px dot plus an 11px label, 16px gap, centred.
   - Blue `#007AFF` dot, white 1.5px stroke, label **You**
   - Green `state/success` dot, label **Covered**
   - Grey `line/strong` dot, label **Needs photos**
2. Make the participant's own marker on the radar the **blue location dot**: fill `#007AFF`, white
   2.5px stroke, with a soft halo behind it at `#007AFF` 18% opacity, about 2.1x the dot diameter.
   This is the map-app convention, which is why it needs no explaining.

**Insert point.** The radar sits in a horizontal centring wrapper inside a vertical column. The
legend must be inserted into the **vertical** parent, after that wrapper. Pasting into the
horizontal wrapper squeezes the radar; this has already been tried and reverted.

## 26 Flag a participant (`134:674`) and 14a Participant options (`148:883`)

**Evidence.** PQ-4, who scored the prototype 92.5, the highest of the six: *"I found the procedure
of reporting the security risk the most confusing because I assumed that the flag icon was meant
either for bookmarking my progress or simplifying retracing steps for editing/retracting."* The
highest scorer misread the control, so this is an icon problem, not comprehension.

**Changes.**

1. Replace the flag icon with `icon/alert-triangle`, which already exists in the file, or keep the
   flag and add the visible text label **Report**. Ionicons only, per `CLAUDE.md`.
2. Resolve the duplicate route: flagging exists both as `14` to `14a` to `14b` and as `13` to
   `26`. Pick one as canonical. Recommend `14a`, since that is the path the evaluation tasks use.

## 15 Filming: host callout over call (`64:664`) - closes the rest of F2

**Evidence.** F2 is recorded against **screens 14 and 15**, severity 3, from PT-1: the one-tap
replies did nothing when tapped. The reply chips have been added to `14 v2` but **not to 15**, so
half the finding is still open. This is the single most requested thing in the whole evaluation:
four of five think-aloud participants asked for a press-rather-than-speak option, and four of six
questionnaire respondents scored voice comfort at 2.

PT-5: *"voice channel makes it a lot easier... but in public I think maybe there's a button that I
can press that will be better."* PT-2, echoed by PT-3 and PT-4: *"something that I can press that
will be better."*

**Changes.**

1. Add the same reply block as `14 v2`: a light `bg/surfaceAlt` card headed **REPLY WITHOUT
   SPEAKING**, with three white chips, `line/border` stroke, dark ink labels: *On my way*, *In
   position*, *Cannot get there*.
2. The host callout is the message being answered, so the chips belong directly under it, not in
   a menu. The point is that somebody holding a camera can reply without stopping.

## 07 Community rules and safety (`28:327`) - states the bar PQ-4 named

**Evidence.** PQ-4 gave the most useful single answer in the study, because it names a testable
condition rather than a feeling: *"If I'm reasonably reassured that any security risks are minimal
(eg: that people's identities/whereabouts are completely secure and not just nominally
'unidentifiable' with only their eyes covered; that people can't be tracked when on voice call), I
would probably be a regular user."*

C5, trust that faces and exact locations are protected, is tied for the **lowest** custom item at
3.00, and PQ-2 scored it the minimum possible.

The share panel now carries this wording, but the rules screen is where somebody reads the promise
**before** they join, which is when it matters.

**Changes.**

1. State the anonymisation standard concretely: faces and licence plates are removed from the
   source photographs **before the model is built**, not blurred on the finished model. The word
   "blurred" is what PQ-4 specifically rejected.
2. State that the voice channel does not expose location or identity, and can be left off.

## 22 Viewing a community model (`133:675`) - closes F9

**Evidence.** F9, severity 2, from PT-5, currently deferred. Their words while working it out:
*"Request and they share this model. No, that's because it's been done already... that doesn't
make sense because I need to capture it right."*

**Changes.**

1. **Share this model** stays `Type=Primary`. **Request a recapture** becomes `Type=Secondary`.
   They currently read as two options of equal weight.
2. Add one line under the recapture control saying what it is for: a different condition, a later
   date, or a changed building.

---

# Group 2. Applies the design principles

## 18 Artifact (`64:841`) - the largest gap in the file

**Evidence.** First principle in `CLAUDE.md`: *the artifact is the hero.* The app exists to
produce a 3D model of a place, and this screen shows a small grey box glyph where that model
belongs. No participant raised it, so it is a design-review change, not a finding, and Section 3.5
should say so.

**Changes.**

1. **Model viewer dark and full bleed**, about 55% of screen height, using the same dark ground as
   `14 Filming`. Darkness is the signal that you are looking at the thing itself; it is not
   decoration, so no other screen gets darkened.
2. **Stats as icon chips**, not three equal boxes: photos, coverage, contributors. Each chip is an
   icon plus a value plus a short label, sized to content. `CLAUDE.md` already bans the three-up
   equal grid.
3. **Heading names the thing**: "University Clock Tower, as it was this morning" rather than
   "Artifact ready".
4. **One primary action.** "View souvenir and score" is primary; Share and Back to Explore demote
   to secondary and ghost.
5. **Fix the dead link.** "View souvenir and score" currently jumps to `02 Home`. Point it at
   `18a Souvenir and score` (`277:822`).
6. **Cut the caption** "Drag to orbit · pinch to zoom". The middle-dot join is template chrome and
   one verb is enough.

## 13 Voice channel: join the call (`64:516`) - make the opt-out visible

**Evidence.** C3, comfort joining the voice channel, is tied for the **lowest** custom item at
3.00. Four of six respondents scored it 2; only PQ-7, the straight-line responder, scored it above
3.

PQ-5: *"I would not be comfortable either sharing my location or turning on my microphone and
sharing it to strangers."* PQ-2: voice could cause *"misunderstandings"*.

At present joining the call reads as the expected path, so a participant who does not want to
speak has to work out that they can decline.

**Changes.**

1. Make the opt-out as prominent as the join: a clearly labelled **Continue without voice** rather
   than a quiet dismiss.
2. One line saying the one-tap replies cover the same job, which is true now that `14 v2` and `15`
   carry them.

## Headings that name the specific thing

**Evidence.** `CLAUDE.md`: *"University Clock Tower, as it was this morning" tells the reader what
they made. "Artifact ready" tells them a process finished.*

Apply only where the heading is currently generic:

| Screen | Now | Change to |
| --- | --- | --- |
| `17` Building the model (`64:784`) | "Building the model" | "Building the University Clock Tower" |
| `16` Capture complete (`64:729`) | "Nice work, everyone" | keep, it is already warm and specific enough |
| `24` Report submitted (`133:776`) | "Thanks, we have your report" | keep |

Leave the rest. Renaming headings that already work is churn.

## One accent, one meaning, one place

**Evidence.** `CLAUDE.md`: `C.amber` means capture conditions and the host; `C.live` means live.
An accent used twice on a screen stops being a signal.

**Audit, do not assume.** On each screen count the amber and the live-red elements. Where a screen
has two, demote the one that matters less. Known candidates: `02 Home` (amber "3 people here now"
plus a live badge on the clock tower card), `10 Briefing` (amber instruction banner plus the amber
host dot on the radar).

---

# Group 3. Polish, only if Groups 1 and 2 are done

## Scroll affordances

**Evidence.** PQ-4: *"The other confusions were results of me forgetting the starting instructions
to (1) move on when stuck and (2) the current interface needs scrolling."*

On the tallest screens, make it visible that there is more below: let a card clip at the bottom
edge rather than ending flush. Candidates: `10 Briefing` (`28:563`), `25 Moderator queue`
(`133:816`), `05 Request detail` (`24:479`).

## 09P Rally: participant view (`233:737`)

Has no sensible onward control. The only route forward is "Share rally link", which no participant
would tap to proceed. Either make the waiting status an active **Continue** once quorum is met, or
advance on a delay when the host starts.

This is a **wiring correction, not an evaluation finding.** Keep it out of Section 3.5.

---

# Execution notes for whoever runs this

Learned the hard way through the browser tonight; a script avoids most of them, but the layout
facts still apply.

1. **Screens live inside sections**, not as direct children of the page. Find frames by descendant
   search, not `page.children`.
2. **Inside a section, a frame's x and y are relative to the section**, not absolute.
3. **Resizing a component set does not resize its variants.** Resize the variant.
4. **Edit the component master, not instances.** The Share panel is a component set with Location
   On and Off variants; editing the master propagated to screen 20 for free.
5. **Check whether a container is horizontal before inserting into it.** The radar on `11` sits in
   a horizontal centring wrapper; inserting there squeezes it.
6. **Use literal colours if a variable lookup might miss.** A token lookup that falls through to a
   dark default turned a light card into a black slab earlier.
7. **Screenshot after every write.** The MCP returns nothing on success or failure.

---

# What this does not cover, and why

Two corrections to an earlier version of this file, which claimed the omitted screens were "left
alone deliberately" because "no participant raised them". That was wrong.

**Screens 01, 02 and 20 are omitted because the work was already done**, not because nobody raised
them. F1 names 01 and 02, F5 names 18 and 20, and both are severity 3. Specifically:

- `20 Share exhibit` already carries the location toggle as a two-state component, a line naming
  who sees the model, and a shared confirmation. Verified in the file on 1 Nov.
- `01` and `02` were covered by `01 v2` and `02 v2` in section G. **Those screens have since been
  deleted from the file**, so that work is lost and needs rebuilding before the report can show a
  before and after pair.

**The remaining screens in sections A, B, C and D are left alone deliberately.** No participant
raised them and no principle is clearly violated. Changing them would be churn, and every change
made after the evaluation has to be defensible in Section 3.5 as either a finding or a stated
design-review decision.

## Where this file disagrees with v2-changes.md

Reconciled 1 Nov. Where the two differ, this file is the later decision and says why.

| Point | `v2-changes.md` | Here | Why |
| --- | --- | --- | --- |
| The radar marker | "Name the amber dot in words" | Replace it with the blue location dot | A learned convention needs no label. PQ-2 described the amber dot accurately and still did not know it meant them. The legend keeps a You entry as well. |
| Screen 22 priority | "Low priority: one participant, off the task path" | Group 1 | It closes a finding, and closing a finding is cheap and countable in Section 3.5. Still the last item inside Group 1. |
| `09P` onward control | Work order item 6 | Group 3 | It is a wiring correction, not a design finding, so it earns nothing in 3.5. It is listed in `task-completability.md` as a task blocker, which is the right place for it. |
| Flag icon | "a shield, a person-with-exclamation, or a plain text label" | `icon/alert-triangle` | That component already exists in the file. Note its name follows a non-Ionicons convention; the Ionicons equivalent is `warning`. |
| Screen 18 provenance | Typed against F5 | Design-review change, not a finding | F5 is about sharing on 18 and 20. The hero treatment of the model viewer is a principle, and no participant asked for it. Both are true of screen 18; the report must not present the second as evaluation-driven. |
