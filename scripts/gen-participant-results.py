"""Generate docs/evaluation/questionnaire-results.md from the raw form responses.

Scores are computed here, never transcribed, so the page cannot drift from the data.
All six responses are counted, per the 1 Nov decision recorded in participants.md.
"""
import statistics as st

SUS_ITEMS = [
    "1. I would like to use this system frequently",
    "2. I found the system unnecessarily complex (rev)",
    "3. I thought the system was easy to use",
    "4. I would need the support of a technical person (rev)",
    "5. The various functions were well integrated",
    "6. There was too much inconsistency (rev)",
    "7. Most people would learn to use this very quickly",
    "8. I found the system very cumbersome (rev)",
    "9. I felt very confident using the system",
    "10. I needed to learn a lot before getting going (rev)",
]
C_ITEMS = [
    "C1. Understood what ChronoMap 3D is for before doing anything",
    "C2. Would join a capture session with people I do not know",
    "C3. Would be comfortable joining the voice channel",
    "C4. The coverage radar made it clear where to stand",
    "C5. Trusted that faces and exact locations would be protected",
    "C6. Receiving the model and a badge would make me take part again",
]

P = {
    "PQ-1": dict(
        sus=[2, 4, 2, 3, 2, 4, 3, 2, 3, 5], c=[1, 2, 2, 2, 3, 2],
        dev="Phone", mins="5", fail="Task 3", age="18-24",
        bg="Student, also a student experience manager", sub="No", td="No",
        ts="31 Oct 11:00", caveat="debrief",
        o1='The whole start: "no context for any background. I was asked to do something." '
           'Sharpest points: task 3, "I do not understand this instruction for the context", '
           'and task 4, "share the model to who, when and how?" (screens 18 and 20).',
        o2='No reason to be there: "why would I join it when it is not even paid?" and '
           '"I do not know what is the benefit for me".'),
    "PQ-2": dict(
        sus=[2, 3, 2, 3, 3, 3, 4, 3, 2, 4], c=[2, 2, 2, 3, 1, 2],
        dev="Phone", mins="6", fail="None", age="18-24",
        bg="Scientist", sub="No", td="No",
        ts="31 Oct 11:03", caveat="debrief",
        o1='The position and radar screens: "several dots", "the yellow thing", '
           '"you are like the northeast", but "I had no context" (screens 11 and 14).',
        o2='Safety and strangers: "I do not like people", "some safety hazards", and voice '
           'could cause "misunderstandings".'),
    "PQ-3": dict(
        sus=[3, 1, 4, 1, 4, 1, 3, 1, 3, 1], c=[3, 3, 2, 4, 2, 4],
        dev="Laptop", mins="3", fail="None", age="25-34",
        bg="Student", sub="No", td="No",
        ts="31 Oct 15:25", caveat=None,
        o1="Clicking next went straight from the tutorial screen to the main app. Did not get "
           "time to process whether there were more pages to the tutorial.",
        o2="Nothing. The app seems fun to use."),
    "PQ-4": dict(
        sus=[5, 2, 4, 1, 5, 1, 5, 1, 4, 1], c=[5, 5, 3, 3, 3, 5],
        dev="Phone", mins="7", fail="None", age="25-34",
        bg="Student", sub="No", td="No",
        ts="31 Oct 16:22", caveat=None,
        o1="Reporting the security risk was the most confusing: assumed the flag icon was for "
           "bookmarking progress or retracing steps for editing. Other confusions came from "
           "forgetting the starting instructions to move on when stuck, and that the interface "
           "needs scrolling.",
        o2="Would be a regular user if reassured that security risks are minimal: that "
           "identities are completely secure and not just nominally unidentifiable with only "
           "their eyes covered, and that people cannot be tracked on a voice call. The "
           "interface being slightly unintuitive at first would not be a deal-breaker."),
    "PQ-5": dict(
        sus=[2, 4, 2, 4, 4, 1, 2, 2, 2, 4], c=[2, 2, 2, 4, 2, 4],
        dev="Phone", mins="16", fail="None", age="18-24",
        bg="Student", sub="No", td="No",
        ts="31 Oct 14:03", caveat=None,
        o1="Joining a session, how a session even begins, and understanding where I was based "
           "on the university clock tower rally interface.",
        o2="Would not be comfortable either sharing my location or turning on my microphone "
           "and sharing it to strangers."),
    "PQ-7": dict(
        sus=[4, 4, 5, 5, 5, 5, 5, 5, 5, 5], c=[5, 5, 5, 5, 5, 4],
        dev="Phone", mins="10", fail="None", age="18-24",
        bg="Student", sub="No", td="Yes",
        ts="1 Nov 01:29", caveat="straight-line",
        o1="Nothing really confused me.",
        o2="Did not find anything that would stop me using this."),
}

ORDER = ["PQ-1", "PQ-2", "PQ-3", "PQ-4", "PQ-5", "PQ-7"]
NO_DEBRIEF = ["PQ-3", "PQ-4", "PQ-5", "PQ-7"]


def sus_score(v):
    odd = sum(v[i] - 1 for i in range(0, 10, 2))
    even = sum(5 - v[i] for i in range(1, 10, 2))
    return (odd + even) * 2.5


for d in P.values():
    d["score"] = sus_score(d["sus"])

allv = [P[k]["score"] for k in ORDER]
ndv = [P[k]["score"] for k in NO_DEBRIEF]

TA = [
    dict(code="PT-1", age="18-24", bg="Commerce student, marketing", dev="Laptop",
         date="30 Oct", dur="8:06", sub="No", td="No",
         findings="F1, F2, F4, F5, F6, F7",
         note="Longest of the recorded sessions. Contributed to six of the nine findings, more "
              "than any other participant."),
    dict(code="PT-2", age="18-24", bg="Science student", dev="[confirm]",
         date="30 Oct", dur="12:02", sub="No", td="No",
         findings="F1, F4, F5, F6, F7",
         note="Asked for one-tap replies rather than speaking: wanted \"something that I can "
              "press that will be better\"."),
    dict(code="PT-3", age="", bg="", dev="", date="[awaiting notes]", dur="", sub="", td="",
         findings="Quick replies, with PT-2 and PT-4",
         note="No demographic data recorded. Reported from the moderator's written notes, which "
              "are not in the repository."),
    dict(code="PT-4", age="", bg="", dev="", date="[awaiting notes]", dur="", sub="", td="",
         findings="Quick replies, with PT-2 and PT-3",
         note="No demographic data recorded, as above."),
    dict(code="PT-5", age="25-34", bg="Engineering student", dev="Laptop",
         date="29 Oct", dur="3:40", sub="[confirm]", td="[confirm]",
         findings="F3, F7, F8, F9",
         note="Ran first, on an earlier prototype and the first task sheet. A partial run: "
              "reached T1 and T2 only, with T2 not completed. Found the \"station\" collision "
              "that stopped a task outright (F8)."),
]

L = []
w = L.append

w("# Participant results")
w("")
w("Per-participant record of both halves of the evaluation, so the report can cite what somebody")
w("actually did or answered rather than a mean.")
w("")
w("Transcribed from `ChronoMap 3D - questionnaire responses` in Drive (six rows, A1:AB7), read")
w("1 Nov 2026. **Every score on this page is computed from the raw item responses, not copied**,")
w("by `scripts/gen-participant-results.py`. Regenerate rather than hand-editing.")
w("")
w("Counting decisions and think-aloud participants live in [`participants.md`](participants.md).")
w("All six responses are counted, per the 1 Nov decision.")
w("")
w("**Codes only, no names.** Backgrounds are generalised.")
w("")
w("What to change in Figma as a result, screen by screen with the evidence attached:")
w("[`v2-changes.md`](v2-changes.md).")
w("")
w("---")
w("")
w("# Think-aloud (observation)")
w("")
w("Five sessions. Findings are the IDs in the consolidated table in report Section 3.4.")
w("")
w("| Code | Age | Background | Device | Date | Duration | Findings contributed |")
w("| --- | --- | --- | --- | --- | --- | --- |")
for t in TA:
    w("| {} | {} | {} | {} | {} | {} | {} |".format(
        t["code"], t["age"] or "not recorded", t["bg"] or "not recorded",
        t["dev"] or "not recorded", t["date"], t["dur"] or "not recorded", t["findings"]))
w("")
for t in TA:
    w("**{}.** {}".format(t["code"], t["note"]))
    w("")
w("### What this table shows about the observation half")
w("")
w("Two of the five sessions, PT-3 and PT-4, have no recorded age, background, device or duration.")
w("Two more, PT-1 and PT-5, ran on a laptop rather than a phone, so at least two of five sessions")
w("were not conducted in the posture the design assumes. Both facts belong in the limitations")
w("paragraph rather than being left for a marker to notice in the participants table.")
w("")
w("PT-5 is the shortest session at 3:40 and reached only two tasks, yet produced four findings")
w("including the one that stopped a task outright. Session length and usefulness are not the same")
w("thing, which is worth a sentence in the report.")
w("")
w("---")
w("")
w("# Questionnaire (querying)")
w("")
w("## Summary")
w("")
w("| Code | SUS | Device | Minutes | Failed a task | Age | Background | Used 3D apps | Caveat |")
w("| --- | --- | --- | --- | --- | --- | --- | --- | --- |")
for k in ORDER:
    d = P[k]
    cav = {"debrief": "entered from a debrief",
           "straight-line": "straight-line answers"}.get(d["caveat"], "")
    w("| {} | **{:g}** | {} | {} | {} | {} | {} | {} | {} |".format(
        k, d["score"], d["dev"], d["mins"], d["fail"], d["age"], d["bg"], d["td"], cav))
w("")
w("| Set | Mean SUS |")
w("| --- | --- |")
w("| **All six, the figure the report carries** | **{:.1f}** |".format(st.mean(allv)))
w("| The four not entered from debriefs | {:.1f} |".format(st.mean(ndv)))
w("")
w("Standard deviation across all six is **{:.1f}**, range **{:g} to {:g}**. "
  "The published average is 68.".format(st.stdev(allv), min(allv), max(allv)))
w("")
w("The spread matters more than the mean. On the same build and the same tasks, scores run from")
w("the mid thirties to the low nineties. With six responses a mean is a weak statistic; the range")
w("is the finding, and the report should lead with it.")
w("")
w("Counting all six lowers the mean rather than raising it, because PQ-1 and PQ-2 are two of the")
w("three lowest scores. Including them is the conservative choice.")
w("")
w("---")
w("")
w("## SUS item responses")
w("")
w("1 = strongly disagree, 5 = strongly agree. Items marked (rev) are reverse-scored, so on those")
w("a *lower* number is the better result.")
w("")
w("| Item | " + " | ".join(ORDER) + " |")
w("| --- | " + " | ".join("---" for _ in ORDER) + " |")
for i, label in enumerate(SUS_ITEMS):
    w("| {} | ".format(label) + " | ".join(str(P[k]["sus"][i]) for k in ORDER) + " |")
w("| **SUS score** | " + " | ".join("**{:g}**".format(P[k]["score"]) for k in ORDER) + " |")
w("")
w("### Weakest items across all six")
w("")
w("| Item | Mean contribution (0-4) |")
w("| --- | --- |")
contrib = []
for i in range(10):
    vals = [(P[k]["sus"][i] - 1) if i % 2 == 0 else (5 - P[k]["sus"][i]) for k in ORDER]
    contrib.append((st.mean(vals), SUS_ITEMS[i]))
for m, label in sorted(contrib)[:4]:
    w("| {} | {:.2f} |".format(label, m))
w("")
w("The weakest are learnability rather than capability: complexity, needing a technical person,")
w("and having a lot to learn before getting going. That matches what the think-aloud sessions")
w("found at the opening screens (F1) and at the radar (F6), so the two methods agree.")
w("")
w("---")
w("")
w("## Custom items")
w("")
w("| Item | " + " | ".join(ORDER) + " | Mean |")
w("| --- | " + " | ".join("---" for _ in ORDER) + " | --- |")
for i, label in enumerate(C_ITEMS):
    vals = [P[k]["c"][i] for k in ORDER]
    w("| {} | ".format(label) + " | ".join(str(P[k]["c"][i]) for k in ORDER) +
      " | {:.2f} |".format(st.mean(vals)))
w("")
cmeans = sorted((st.mean([P[k]["c"][i] for k in ORDER]), C_ITEMS[i]) for i in range(6))
w("Lowest: **{}** at {:.2f}, and **{}** at {:.2f}.".format(
    cmeans[0][1].split(".")[0], cmeans[0][0], cmeans[1][1].split(".")[0], cmeans[1][0]))
w("Highest: **{}** at {:.2f}.".format(cmeans[-1][1].split(".")[0], cmeans[-1][0]))
w("")
w("The pattern is consistent and uncomfortable for the concept: the reward is attractive, the")
w("social and privacy exposure is not. These items measure stated intention rather than")
w("behaviour, and the report should say so rather than treating them as evidence of what people")
w("would do.")
w("")
w("---")
w("")
w("## Open answers")
w("")
for k in ORDER:
    d = P[k]
    w("### {}".format(k))
    w("")
    w("**Most confusing moment.** {}".format(d["o1"]))
    w("")
    w("**What would stop you using this at a real landmark.** {}".format(d["o2"]))
    w("")
w("### Themes")
w("")
w("**Confusion is about context, not controls.** Nobody said a button was hard to press. They")
w("said they did not know what the app was for, where they were in the session, or what the radar")
w("meant. Three of the six name the opening or the rally screens specifically.")
w("")
w("**What would stop them is exposure.** Location sharing, the microphone, and being among")
w("strangers. One respondent would use it if identities were genuinely protected rather than")
w("nominally so, which is a design requirement, not a reassurance problem.")
w("")
w("---")
w("")
w("## Two caveats that must travel with these numbers")
w("")
w("**PQ-1 and PQ-2 were entered from spoken debriefs**, not completed by the respondents, which")
w("is why their answers carry quoted speech. A questionnaire mediated by a team member is a")
w("different instrument from one filled in alone, and the moderator's phrasing can shape the")
w("answer. If the speakers were PT-1 and PT-2, those two people sit in both technique groups.")
w("")
w("**PQ-7 straight-lined.** Read down its column: 4 or 5 on every item, agreeing that the system")
w("is both easy to use (5) and cumbersome (5), and that they felt confident (5) while needing to")
w("learn a lot (5). Every reverse-scored item agrees with its opposite, which is an answering")
w("pattern rather than a judgement. Without PQ-7 the other five average {:.1f}.".format(
    st.mean([P[k]["score"] for k in ORDER if k != "PQ-7"])))
w("")
w("Both are disclosed in the report rather than resolved, because resolving either needs")
w("information only the team has.")
w("")

out = "docs/evaluation/participant-results.md"
with open(out, "w", encoding="utf-8") as f:
    f.write("\n".join(L) + "\n")
print("wrote", out, len(L), "lines")
print("all six mean {:.2f} sd {:.2f}".format(st.mean(allv), st.stdev(allv)))
print("no-debrief four {:.2f}".format(st.mean(ndv)))
print("without PQ-7 {:.2f}".format(st.mean([P[k]["score"] for k in ORDER if k != "PQ-7"])))
print("per-respondent:", {k: P[k]["score"] for k in ORDER})
