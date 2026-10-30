/**
 * Creates the ChronoMap 3D questionnaire (PQ-1 to PQ-5) as a Google Form, plus a linked responses sheet.
 *
 * How to run (once, as the person who should own the form):
 *   1. Go to https://script.google.com and create a new project.
 *   2. Paste this whole file over the default code and save.
 *   3. Choose the function createQuestionnaire in the toolbar and press Run.
 *   4. Approve the permissions (Forms, Sheets, Drive). Google will show a warning because the script
 *      is unverified. That is expected for your own script.
 *   5. Open View > Logs. Copy the three links it prints: the edit link, the link to send to
 *      participants, and the responses sheet. Paste them into docs/PROJECT-LINKS.md.
 *   6. Fill the form in yourself as participant code PQ-0, check the sheet, then delete that row.
 *
 * The wording is copied from docs/evaluation/study-kit.md section 7. If the study kit changes, change
 * it here too, and re-run to make a fresh form (do not run it twice on the same day without deleting
 * the old one, because each run creates a new form).
 */

// Set to true once the team has agreed the reworded C5 and C6 (see the notes next to them below).
var USE_REVISED_ITEMS = false;

// Paste the five per-task Figma links here once the v1 copy is shared. Leave empty to skip the section.
var TASK_LINKS = {
  T1: "",
  T2: "",
  T3: "",
  T4: "",
  T5: "",
};

var SUS = [
  "I think that I would like to use this system frequently.",
  "I found the system unnecessarily complex.",
  "I thought the system was easy to use.",
  "I think that I would need the support of a technical person to be able to use this system.",
  "I found the various functions in this system were well integrated.",
  "I thought there was too much inconsistency in this system.",
  "I would imagine that most people would learn to use this system very quickly.",
  "I found the system very cumbersome to use.",
  "I felt very confident using the system.",
  "I needed to learn a lot of things before I could get going with this system.",
];

var CHRONOMAP = [
  "C1. I understood what ChronoMap 3D is for before I had to do anything.",
  "C2. I would be willing to join a capture session with people I do not know.",
  "C3. I would be comfortable joining the voice channel during a capture.",
  "C4. The coverage radar made it clear where I should stand and what was still missing.",
  // C5 as written in the study kit asks about two things at once (faces and exact locations).
  USE_REVISED_ITEMS
    ? "C5. I trusted that my exact location would be protected when sharing."
    : "C5. I trusted that faces and exact locations would be protected when sharing.",
  // C6 as written is double-barrelled and leading ("would make me want to").
  USE_REVISED_ITEMS
    ? "C6. I would want to take part in another capture session."
    : "C6. Receiving the 3D model and a badge would make me want to take part again.",
];

var SCALE = ["1", "2", "3", "4", "5"];

function createQuestionnaire() {
  var form = FormApp.create("ChronoMap 3D - usability questionnaire");
  form.setDescription(
    "Thank you for helping. We are testing a design, not you, so there are no right answers. " +
      "This takes about 15 minutes including the tasks. Your answers are anonymous: we only use the " +
      "participant code you were given, never your name. You can stop at any time without giving a reason.",
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setProgressBar(true);
  form.setConfirmationMessage("Thank you. Your response has been recorded.");

  // Participant code goes first so every response can be attributed.
  form
    .addTextItem()
    .setTitle("Participant code")
    .setHelpText(
      "The code you were given, for example PQ-1. Please do not enter your name.",
    )
    .setRequired(true);

  form
    .addCheckboxItem()
    .setTitle("Consent")
    .setChoiceValues([
      "I agree to my anonymous answers being used for this university assignment.",
    ])
    .setRequired(true);

  // Tasks and the prototype links, so a remote participant can do everything from the form.
  var taskText = [
    "Work through the five tasks on your phone if you can, alone and in order. Then answer the questions below straight away.",
    "Some buttons are not wired up in the prototype. If something does not respond, just move on.",
    "",
    "Task 1: A capture session is happening right now at the clock tower. Join it.",
    "Task 2: You are in the session and the host has briefed everyone. Find out which position you have been given and where it is, then let the host know you are ready.",
    "Task 3: Capture has started. You are one of four people photographing the clock tower together, and you are all on a voice call. The host of the session is @mapfox. Assume @mapfox has just told you on the call to move two metres to your left and aim at the clock face. Do that, physically, then let them know. (The same instruction appears on screen after a few seconds. Really stand up and move.)",
    "Task 4: The capture is finished. Find the finished 3D model and share it, but do not reveal the exact location.",
    "Task 5: During a session you notice another participant is photographing strangers' faces. Do something about it.",
  ];
  var links = [];
  for (var t in TASK_LINKS) {
    if (TASK_LINKS[t]) links.push(t + " start link: " + TASK_LINKS[t]);
  }
  if (links.length) {
    taskText.push(
      "",
      "Start each task from its own link so you begin on the right screen:",
    );
    taskText = taskText.concat(links);
  }
  form
    .addSectionHeaderItem()
    .setTitle("The five tasks")
    .setHelpText(taskText.join("\n"));

  // Part A: System Usability Scale.
  form
    .addPageBreakItem()
    .setTitle("Part A: how the app felt to use")
    .setHelpText(
      "Rate each statement from 1 (strongly disagree) to 5 (strongly agree).",
    );
  var sus = form
    .addGridItem()
    .setTitle("System Usability Scale")
    .setRows(
      SUS.map(function (s, i) {
        return i + 1 + ". " + s;
      }),
    )
    .setColumns(SCALE)
    .setRequired(true);

  // Part B: ChronoMap-specific items.
  form
    .addPageBreakItem()
    .setTitle("Part B: ChronoMap 3D")
    .setHelpText("Same scale: 1 (strongly disagree) to 5 (strongly agree).");
  form
    .addGridItem()
    .setTitle("About ChronoMap 3D")
    .setRows(CHRONOMAP)
    .setColumns(SCALE)
    .setRequired(true);

  // Part C: open questions.
  form.addPageBreakItem().setTitle("Part C: in your own words");
  form
    .addParagraphTextItem()
    .setTitle("O1. What was the most confusing moment, and on which screen?");
  form
    .addParagraphTextItem()
    .setTitle("O2. What would stop you using this at a real landmark?");

  // Part D: about you and your session.
  form.addPageBreakItem().setTitle("Part D: about you and your session");
  form
    .addMultipleChoiceItem()
    .setTitle("Which device did you use?")
    .setChoiceValues(["Phone", "Laptop", "Tablet"])
    .setRequired(true);
  form
    .addTextItem()
    .setTitle("Roughly how long did the five tasks take you?")
    .setHelpText("For example: 12 minutes.")
    .setRequired(true);
  form
    .addParagraphTextItem()
    .setTitle(
      "Was there any task you could not complete? Which one, and what happened?",
    )
    .setHelpText('Write "none" if you finished them all.')
    .setRequired(true);
  form
    .addMultipleChoiceItem()
    .setTitle("Age band")
    .setChoiceValues([
      "18-24",
      "25-34",
      "35-44",
      "45 or over",
      "Prefer not to say",
    ]);
  form
    .addTextItem()
    .setTitle("Background (for example student, engineer, designer)");
  form
    .addMultipleChoiceItem()
    .setTitle("Are you enrolled in INFO90007?")
    .setChoiceValues(["Yes", "No"]);
  form
    .addMultipleChoiceItem()
    .setTitle("Have you used a 3D scanning or photogrammetry app before?")
    .setChoiceValues(["Yes", "No"]);

  // Responses go to a linked sheet so the SUS scores can be computed.
  var ss = SpreadsheetApp.create("ChronoMap 3D - questionnaire responses");
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  Logger.log("Edit the form:        " + form.getEditUrl());
  Logger.log("SEND THIS TO PEOPLE:  " + form.getPublishedUrl());
  Logger.log("Responses sheet:      " + ss.getUrl());
}
