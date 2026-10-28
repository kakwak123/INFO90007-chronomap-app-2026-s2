// Prototype data. Handles rather than first names on purpose: the A2 feedback was that the
// concept read as four friends on a group project rather than crowdsourcing, so everyone the user
// meets here is a stranger with a visible track record.

import type { Dot, Tone, Who } from './kit';

export const SESSIONS = [
  { id: '1', name: 'Royal Melbourne Hospital', detail: '4 people · 2 min left', tag: 'LIVE', tone: 'live' as Tone },
  { id: '2', name: 'Flinders Street Station', detail: '5 people · 4 min left', tag: 'LIVE', tone: 'live' as Tone },
  { id: '3', name: 'State Library Victoria', detail: '2 of 4 joined · rallying', tag: '12 MIN', tone: 'outline' as Tone },
];

/** Capture requests: aggregated demand. This is the crowdsourcing layer. */
export const REQUESTS = [
  { id: 'r1', name: 'Melbourne Museum', detail: 'No captures yet · 1.2 km', needs: 'Any conditions', votes: 21 },
  { id: 'r2', name: 'Royal Botanic Gardens', detail: '1 capture · Spring · 2.1 km', needs: 'Needs: Summer', votes: 14 },
  { id: 'r3', name: 'Shrine of Remembrance', detail: '2 captures · Daytime · 2.8 km', needs: 'Needs: Golden hour', votes: 9 },
  { id: 'r4', name: 'Old Melbourne Gaol', detail: '1 capture · Autumn · 3.4 km', needs: 'Needs: Winter', votes: 6 },
];

export const EVENTS = [
  { id: 'e1', name: 'Royal Botanic Gardens', when: 'Sat 18 Oct · 10:00 · golden hour', who: '6 going · hosted by @mapfox', cond: 'Summer' },
  { id: 'e2', name: 'Queen Victoria Market', when: 'Sun 19 Oct · 08:30', who: '3 going · hosted by @dhiraj_s', cond: 'Any' },
  { id: 'e3', name: 'Melbourne Museum', when: 'Sat 25 Oct · 14:00', who: '2 going · hosted by @ashlesha', cond: 'Any' },
];

export const ON_SITE = [
  { initial: 'M', handle: '@mapfox', detail: 'Host · arrived 4 min ago', host: true },
  { initial: 'J', handle: '@you', detail: 'You · on site', you: true },
];

export const ON_THE_WAY = [
  { initial: 'D', handle: '@dhiraj_s', detail: '300 m away · about 4 min' },
  { initial: 'A', handle: '@ashlesha', detail: '900 m away · about 11 min' },
];

export const STATIONS = [
  { initial: 'M', handle: '@mapfox', station: 'North arch', tone: 'good' as Tone, host: true },
  { initial: 'J', handle: '@you', station: 'East face', tone: 'good' as Tone, you: true },
  { initial: 'D', handle: '@dhiraj_s', station: 'South-west wall', tone: 'good' as Tone },
  { initial: 'A', handle: '@ashlesha', station: 'Unassigned', tone: 'outline' as Tone },
];

export const NUDGES = [
  { initial: 'A', handle: '@ashlesha', detail: 'Idle 40s · standing where @you already shot', action: 'Move to west' },
  { initial: 'D', handle: '@dhiraj_s', detail: '12 photos, all one angle', action: 'Ask to step back' },
];

export const SCORES = [
  { initial: 'M', handle: '@mapfox', photos: 42, score: 96, badge: 'Host', host: true },
  { initial: 'J', handle: '@you', photos: 35, score: 81, badge: 'Unique angles', you: true },
  { initial: 'D', handle: '@dhiraj_s', photos: 31, score: 74, badge: 'Contributor' },
  { initial: 'A', handle: '@ashlesha', photos: 20, score: 58, badge: 'Contributor' },
];

/** One-tap messages. Strangers will not shout at strangers - see the callouts screen. */
export const CALLOUTS: { icon: 'navigate-outline' | 'checkmark-circle-outline' | 'people-outline' | 'warning-outline' | 'time-outline' | 'walk-outline'; text: string }[] = [
  { icon: 'navigate-outline', text: 'I’m moving to the west side' },
  { icon: 'checkmark-circle-outline', text: 'My side is done' },
  { icon: 'people-outline', text: 'Someone take the north arch' },
  { icon: 'warning-outline', text: 'Something is blocking my view' },
  { icon: 'time-outline', text: 'I need two more minutes' },
  { icon: 'walk-outline', text: 'Watch out - bikes coming through' },
];

export const CONDITIONS: { icon: 'sunny-outline' | 'rainy-outline' | 'moon-outline' | 'partly-sunny-outline'; name: string; detail: string; done: boolean }[] = [
  { icon: 'partly-sunny-outline', name: 'Golden hour', detail: 'Captured Oct 2026 · 4 people', done: true },
  { icon: 'sunny-outline', name: 'Daytime', detail: 'Captured Aug 2026 · 6 people', done: true },
  { icon: 'rainy-outline', name: 'Rain', detail: 'Nobody has captured this', done: false },
  { icon: 'moon-outline', name: 'Night', detail: 'Nobody has captured this', done: false },
];

export const BADGES: { label: string; tone: Tone }[] = [
  { label: 'Golden hour', tone: 'accent' },
  { label: 'First host', tone: 'good' },
  { label: 'Hard to sync', tone: 'accent' },
  { label: 'Gap filler', tone: 'good' },
  { label: 'Winter set', tone: 'outline' },
];

export const SOUVENIRS = [
  { name: 'Royal Melbourne', cond: 'Golden hour' },
  { name: 'Flinders St', cond: 'Daytime' },
  { name: 'State Library', cond: 'Spring' },
];

export const REPORT_REASONS: { icon: 'eye-off-outline' | 'warning-outline' | 'people-outline' | 'flag-outline' | 'lock-closed-outline' | 'chatbubble-ellipses-outline'; label: string }[] = [
  { icon: 'eye-off-outline', label: 'Photographing people, not the place' },
  { icon: 'warning-outline', label: 'Harassment or abuse' },
  { icon: 'people-outline', label: 'Blocking or crowding others' },
  { icon: 'flag-outline', label: 'Off-topic or junk photos' },
  { icon: 'lock-closed-outline', label: 'Captured a restricted area' },
  { icon: 'chatbubble-ellipses-outline', label: 'Something else' },
];

// Radar fixtures
export const COVERAGE_DOTS: Dot[] = [
  { a: 0, r: 0.78, s: 'ok' },
  { a: 55, r: 0.78, s: 'ok' },
  { a: 110, r: 0.78, s: 'thin' },
  { a: 160, r: 0.6, s: 'ok' },
  { a: 215, r: 0.78, s: 'ok' },
  { a: 290, r: 0.78, s: 'thin' },
];

export const HOST_DOTS: Dot[] = [
  { a: 20, r: 0.8, s: 'ok' },
  { a: 80, r: 0.8, s: 'ok' },
  { a: 130, r: 0.8, s: 'thin' },
  { a: 200, r: 0.8, s: 'ok' },
  { a: 290, r: 0.8, s: 'thin' },
];

export const HOST_PEOPLE: Who[] = [
  { a: 45, r: 0.42, i: 'M', host: true },
  { a: 135, r: 0.42, i: 'J' },
  { a: 225, r: 0.42, i: 'D' },
  { a: 315, r: 0.42, i: 'A' },
];

export const STATION_DOTS: Dot[] = [
  { a: 45, r: 0.78, s: 'me' },
  { a: 160, r: 0.78, s: 'ok' },
  { a: 250, r: 0.78, s: 'ok' },
  { a: 300, r: 0.78, s: 'thin' },
];
