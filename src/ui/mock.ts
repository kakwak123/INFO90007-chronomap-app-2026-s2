export const SESSIONS = [
  { id: '1', name: 'Royal Melbourne Hospital', people: 4, status: 'Live now', live: true },
  { id: '2', name: 'State Library Victoria', people: 2, status: 'Starts in 5 min', live: false },
  { id: '3', name: 'Flinders Street Station', people: 5, status: 'Live now', live: true },
];

// "Request list": places the community still wants captured.
export const REQUESTS = [
  { id: 'r1', name: 'Melbourne Museum', note: 'No captures yet', needs: 'Any conditions' },
  { id: 'r2', name: 'Royal Botanic Gardens', note: '1 capture · Spring', needs: 'Needs: Summer' },
  { id: 'r3', name: 'Shrine of Remembrance', note: '2 captures · Daytime', needs: 'Needs: Golden hour' },
  { id: 'r4', name: 'Old Melbourne Gaol', note: '1 capture · Autumn', needs: 'Needs: Winter' },
];

// "Events": user-planned visits others can join.
export const EVENTS = [
  { id: 'e1', name: 'Royal Botanic Gardens', when: 'Sat 11 Oct · 10:00', going: 3, host: 'Dhiraj' },
  { id: 'e2', name: 'Queen Victoria Market', when: 'Sun 12 Oct · 08:30', going: 6, host: 'Yong' },
  { id: 'e3', name: 'Melbourne Museum', when: 'Sat 18 Oct · 14:00', going: 2, host: 'Ashlesha' },
];

export const MEMBERS = [
  { name: 'John', initial: 'J', host: true, you: true },
  { name: 'Dhiraj', initial: 'D' },
  { name: 'Yong', initial: 'Y' },
  { name: 'Ashlesha', initial: 'A' },
];

export const SCORES = [
  { name: 'John', initial: 'J', photos: 42, score: 96, badge: 'Host' },
  { name: 'Dhiraj', initial: 'D', photos: 35, score: 81, badge: 'Contributor' },
  { name: 'Yong', initial: 'Y', photos: 31, score: 74, badge: 'Contributor' },
  { name: 'Ashlesha', initial: 'A', photos: 20, score: 58, badge: 'Contributor' },
];

// Fake voice-call chatter shown in the call bar while capturing.
export const CALL_LINES = [
  { name: 'Dhiraj', text: 'Swing wide, I\'ve got the front entrance.' },
  { name: 'Yong', text: 'Heading round to the east side now.' },
  { name: 'Ashlesha', text: 'Light\'s good on the north wall, grabbing a few.' },
  { name: 'Dhiraj', text: 'Watch the car park exit, cars coming through.' },
];
