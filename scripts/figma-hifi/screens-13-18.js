// Screens 13-18 - capture and results flow. Row y = 2520.
// RUN AS: cat _helpers.js screens-13-18.js   and pass the result as the use_figma `code` argument.

const created = [];
const Y = 2520;

// ============ 13. CAPTURE - YOUR STATION ============
// Dark viewfinder. The amber directive banner is the whole point: the participant is told where
// to stand, so the host's briefing assignment stays visible during the window.
{
  const s = SCREEN('13 · Capture - your station', X(0), Y, 'text/primary');
  const top = AL('HORIZONTAL', { itemSpacing: 10, paddingLeft: 16, paddingRight: 16, paddingTop: 4, paddingBottom: 10 });
  top.counterAxisAlignItems = 'CENTER'; s.appendChild(top); top.layoutSizingHorizontal = 'FILL';
  top.appendChild(ICON('x', 24, 'text/onInk'));
  SPACER(top);
  const tm = AL('HORIZONTAL', { itemSpacing: 6, paddingLeft: 12, paddingRight: 12, paddingTop: 5, paddingBottom: 5 });
  tm.counterAxisAlignItems = 'CENTER'; tm.cornerRadius = 999; tm.fills = [PO('text/onInk', 0.16)]; top.appendChild(tm);
  tm.appendChild(ICON('clock', 15, 'text/onInk'));
  tm.appendChild(T('Window 3:42', 'Caption', 'text/onInk'));
  SPACER(top);
  top.appendChild(ICON('eye-off', 22, 'text/onInk'));

  const vf = AL('VERTICAL', { itemSpacing: 0 }); vf.fills = [PO('text/dim', 0.35)]; vf.cornerRadius = 16;
  s.appendChild(vf); vf.layoutSizingHorizontal = 'FILL'; vf.layoutSizingVertical = 'FILL';
  vf.paddingLeft = 14; vf.paddingRight = 14; vf.paddingTop = 14; vf.paddingBottom = 14;
  const dir = AL('HORIZONTAL', { itemSpacing: 8, paddingLeft: 12, paddingRight: 12, paddingTop: 7, paddingBottom: 7 });
  dir.counterAxisAlignItems = 'CENTER'; dir.cornerRadius = 10; dir.fills = [P('accent/amber')];
  vf.appendChild(dir);
  dir.appendChild(ICON('navigation', 16, 'text/onInk'));
  dir.appendChild(T('YOU: NORTH-EAST ARCH', 'Label', 'text/onInk'));
  const mid = AL('VERTICAL', { itemSpacing: 10 }); mid.primaryAxisAlignItems = 'CENTER'; mid.counterAxisAlignItems = 'CENTER';
  vf.appendChild(mid); mid.layoutSizingHorizontal = 'FILL'; mid.layoutSizingVertical = 'FILL';
  mid.appendChild(ICON('box', 110, 'text/onInk'));
  const toast = AL('HORIZONTAL', { itemSpacing: 8, paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8 });
  toast.counterAxisAlignItems = 'CENTER'; toast.cornerRadius = 10; toast.fills = [P('bg/surface')];
  mid.appendChild(toast);
  toast.appendChild(ICON('users', 16, 'brand/ink'));
  toast.appendChild(T('@dhiraj_s has this angle - try the pillar', 'Caption', 'text/primary'));
  const hint = T('Keep the arch filling the frame. Move a few steps between shots.', 'Caption', 'text/onInk');
  vf.appendChild(hint); hint.layoutSizingHorizontal = 'FILL'; hint.textAutoResize = 'HEIGHT'; hint.textAlignHorizontal = 'CENTER'; hint.opacity = 0.8;

  const ctr = AL('HORIZONTAL', { itemSpacing: 0, paddingTop: 16, paddingBottom: 8, paddingLeft: 24, paddingRight: 24 });
  ctr.counterAxisAlignItems = 'CENTER'; ctr.primaryAxisAlignItems = 'SPACE_BETWEEN';
  s.appendChild(ctr); ctr.layoutSizingHorizontal = 'FILL';
  const sideBtn = (icon, label) => {
    const col = AL('VERTICAL', { itemSpacing: 5 }); col.counterAxisAlignItems = 'CENTER'; ctr.appendChild(col);
    const bx = AL('HORIZONTAL'); bx.resize(50, 50); bx.primaryAxisSizingMode = 'FIXED'; bx.counterAxisSizingMode = 'FIXED';
    bx.primaryAxisAlignItems = 'CENTER'; bx.counterAxisAlignItems = 'CENTER'; bx.cornerRadius = 12; bx.fills = [PO('text/onInk', 0.16)];
    col.appendChild(bx); bx.appendChild(ICON(icon, 24, 'text/onInk'));
    col.appendChild(T(label, 'Caption', 'text/onInk'));
  };
  sideBtn('radio', 'Coverage');
  const shut = AL('HORIZONTAL'); shut.resize(82, 82); shut.primaryAxisSizingMode = 'FIXED'; shut.counterAxisSizingMode = 'FIXED';
  shut.primaryAxisAlignItems = 'CENTER'; shut.counterAxisAlignItems = 'CENTER'; shut.cornerRadius = 41;
  shut.strokes = [P('text/onInk')]; shut.strokeWeight = 4; ctr.appendChild(shut);
  const sin = figma.createEllipse(); sin.resize(62, 62); sin.fills = [P('text/onInk')]; shut.appendChild(sin);
  sideBtn('message', 'Callout');
  const fo = AL('VERTICAL', { itemSpacing: 4, paddingBottom: 22 }); fo.counterAxisAlignItems = 'CENTER';
  s.appendChild(fo); fo.layoutSizingHorizontal = 'FILL';
  const st = T('4 capturing · 128 photos · your 31', 'Caption', 'text/onInk'); fo.appendChild(st); st.opacity = 0.75;
  created.push(s.id);
}

// ============ 14. COVERAGE GUIDE - PARTICIPANT ============
{
  const s = SCREEN('14 · Coverage guide - participant', X(1), Y);
  APPBAR(s, 'Coverage guide', 'Window 3:42 remaining');
  const b = BODY(s, 14);
  const row = AL('HORIZONTAL', { itemSpacing: 10 }); row.primaryAxisAlignItems = 'CENTER'; b.appendChild(row); row.layoutSizingHorizontal = 'FILL';
  [['M', 'Amber'], ['J', 'Filled'], ['D', 'Default'], ['A', 'Default']].forEach(([i2, t2]) => row.appendChild(AV(i2, t2, 38)));
  CENTER(b, PILL('Fewer photos on the west side', 'Accent'));
  CENTER(b, RADAR(230, [{ a: 0, r: 0.78, s: 'ok' }, { a: 55, r: 0.78, s: 'ok' }, { a: 110, r: 0.78, s: 'thin' }, { a: 160, r: 0.6, s: 'ok' }, { a: 215, r: 0.78, s: 'ok' }, { a: 290, r: 0.78, s: 'thin' }], []));
  const lg = AL('HORIZONTAL', { itemSpacing: 22 }); lg.primaryAxisAlignItems = 'CENTER'; b.appendChild(lg); lg.layoutSizingHorizontal = 'FILL';
  [['state/success', 'Well covered'], ['line/strong', 'Try photos here']].forEach(([c, l]) => {
    const r = AL('HORIZONTAL', { itemSpacing: 6 }); r.counterAxisAlignItems = 'CENTER'; lg.appendChild(r);
    const d = figma.createEllipse(); d.resize(11, 11); d.fills = [P(c)]; r.appendChild(d);
    r.appendChild(T(l, 'Caption', 'text/dim'));
  });
  NOTE(b, 'message', 'This is a guide, not proof', 'Positions are estimated from your phones. Call a thin side out to the group so somebody can walk across and fill it.');
  const f = FOOT(s);
  const a = BTN('Back to camera', 'Primary'); f.appendChild(a); a.layoutSizingHorizontal = 'FILL';
  created.push(s.id);
}

// ============ 15. COVERAGE - HOST LIVE CONTROL ============
// The host screen that gives the role actual powers - answers the marker's "who is the host?
// is this person just there monitoring?"
{
  const s = SCREEN('15 · Coverage - host live control', X(2), Y);
  APPBAR(s, 'Coverage · host', 'Window 3:42 remaining');
  const b = BODY(s, 12);
  const stats = AL('HORIZONTAL', { itemSpacing: 10 }); b.appendChild(stats); stats.layoutSizingHorizontal = 'FILL';
  [['128', 'photos'], ['4', 'capturing'], ['68%', 'covered']].forEach(([v, l]) => {
    const c = CARD('VERTICAL', 2); stats.appendChild(c); c.layoutGrow = 1; c.layoutSizingHorizontal = 'FILL'; c.paddingTop = 10; c.paddingBottom = 10;
    c.appendChild(T(v, 'Num', 'text/primary')); c.appendChild(T(l, 'Caption', 'text/dim'));
  });
  CENTER(b, RADAR(190, [{ a: 20, r: 0.8, s: 'ok' }, { a: 80, r: 0.8, s: 'ok' }, { a: 130, r: 0.8, s: 'thin' }, { a: 200, r: 0.8, s: 'ok' }, { a: 290, r: 0.8, s: 'thin' }],
    [{ a: 45, r: 0.42, i: 'M', host: true }, { a: 135, r: 0.42, i: 'J' }, { a: 225, r: 0.42, i: 'D' }, { a: 315, r: 0.42, i: 'A' }]));
  LBL(b, 'NEEDS A NUDGE');
  [['A', '@ashlesha', 'Idle 40s · standing where @you already shot', 'Move to west'],
   ['D', '@dhiraj_s', '12 photos, all one angle', 'Ask to step back']].forEach(([i2, n1, n2, act]) => {
    const c = CARD('HORIZONTAL', 10); b.appendChild(c); c.layoutSizingHorizontal = 'FILL'; c.paddingTop = 10; c.paddingBottom = 10;
    c.appendChild(AV(i2, 'Default', 30));
    const col = AL('VERTICAL', { itemSpacing: 1 }); c.appendChild(col); col.layoutGrow = 1; col.layoutSizingHorizontal = 'FILL';
    TF(col, n1, 'Title', 'text/primary'); TF(col, n2, 'Caption', 'text/dim');
    const bt = BTN(act, 'Primary'); c.appendChild(bt); bt.resize(104, 34); bt.cornerRadius = 9; bt.paddingLeft = 10; bt.paddingRight = 10;
    bt.findOne(n => n.type === 'TEXT').textStyleId = TS['Caption'].id;
  });
  const f = FOOT(s);
  const ptt = AL('HORIZONTAL', { itemSpacing: 10 }); ptt.primaryAxisAlignItems = 'CENTER'; ptt.counterAxisAlignItems = 'CENTER';
  ptt.cornerRadius = 12; ptt.fills = [P('accent/amber')]; f.appendChild(ptt); ptt.layoutSizingHorizontal = 'FILL';
  ptt.resize(ptt.width, 52); ptt.counterAxisSizingMode = 'FIXED';
  ptt.appendChild(ICON('mic', 20, 'text/onInk'));
  ptt.appendChild(T('Hold to talk to all 4', 'Btn', 'text/onInk'));
  const a = BTN('End window early', 'Secondary'); f.appendChild(a); a.layoutSizingHorizontal = 'FILL';
  created.push(s.id);
}

// ============ 16. QUICK CALLOUTS ============
// Designed around stranger awkwardness rather than assuming it away - one-tap messages so the
// collaboration does not depend on people being willing to shout at strangers.
{
  const s = SCREEN('16 · Quick callouts (no talking required)', X(3), Y, 'text/primary');
  const dim = AL('VERTICAL', { itemSpacing: 10, paddingLeft: 20, paddingRight: 20, paddingTop: 20 });
  dim.counterAxisAlignItems = 'CENTER'; s.appendChild(dim); dim.layoutSizingHorizontal = 'FILL'; dim.layoutSizingVertical = 'FILL';
  const ph = ICON('camera', 72, 'text/onInk'); dim.appendChild(ph); ph.opacity = 0.25;
  const hint = T('Capture paused while the sheet is open', 'Caption', 'text/onInk'); dim.appendChild(hint); hint.opacity = 0.5;
  const sheet = AL('VERTICAL', { itemSpacing: 12, paddingLeft: 20, paddingRight: 20, paddingTop: 12, paddingBottom: 26 });
  sheet.fills = [P('bg/surface')]; sheet.cornerRadius = 22; sheet.counterAxisAlignItems = 'MIN';
  s.appendChild(sheet); sheet.layoutSizingHorizontal = 'FILL';
  const grab = figma.createRectangle(); grab.resize(44, 5); grab.cornerRadius = 3; grab.fills = [P('line/strong')];
  const gw = AL('HORIZONTAL'); gw.primaryAxisAlignItems = 'CENTER'; sheet.appendChild(gw); gw.layoutSizingHorizontal = 'FILL'; gw.appendChild(grab);
  TF(sheet, 'Send a quick callout', 'H2', 'text/primary');
  TF(sheet, 'Goes to everyone in the session. Most people will not speak up to strangers mid-capture - tap instead.', 'BodySm', 'text/dim');
  [['navigation', 'I’m moving to the west side'], ['check-circle', 'My side is done'], ['users', 'Someone take the north arch'],
   ['alert-triangle', 'Something is blocking my view'], ['clock', 'I need two more minutes'], ['walk', 'Watch out - bikes coming through']].forEach(([ic, m]) => {
    const r = AL('HORIZONTAL', { itemSpacing: 12, paddingLeft: 14, paddingRight: 14, paddingTop: 11, paddingBottom: 11 });
    r.counterAxisAlignItems = 'CENTER'; r.cornerRadius = 12; r.fills = [P('bg/base')]; r.strokes = [P('line/border')]; r.strokeWeight = 1;
    sheet.appendChild(r); r.layoutSizingHorizontal = 'FILL';
    r.appendChild(ICON(ic, 20, 'brand/ink'));
    TF(r, m, 'Body', 'text/primary');
    r.appendChild(ICON('send', 18, 'text/dim'));
  });
  const ptt = AL('HORIZONTAL', { itemSpacing: 10 }); ptt.primaryAxisAlignItems = 'CENTER'; ptt.counterAxisAlignItems = 'CENTER';
  ptt.cornerRadius = 12; ptt.fills = [P('bg/surfaceAlt')]; sheet.appendChild(ptt); ptt.layoutSizingHorizontal = 'FILL';
  ptt.resize(ptt.width, 50); ptt.counterAxisSizingMode = 'FIXED';
  ptt.appendChild(ICON('mic', 20, 'text/primary'));
  ptt.appendChild(T('Or hold to talk', 'Btn', 'text/primary'));
  created.push(s.id);
}

// ============ 17. PROCESSING ============
{
  const s = SCREEN('17 · Processing', X(4), Y);
  APPBAR(s, 'Session complete', 'Royal Melbourne Hospital');
  const b = BODY(s, 16);
  const hero = AL('VERTICAL', { itemSpacing: 10, paddingTop: 16 }); hero.counterAxisAlignItems = 'CENTER'; b.appendChild(hero); hero.layoutSizingHorizontal = 'FILL';
  const ring = AL('HORIZONTAL'); ring.resize(124, 124); ring.primaryAxisSizingMode = 'FIXED'; ring.counterAxisSizingMode = 'FIXED';
  ring.primaryAxisAlignItems = 'CENTER'; ring.counterAxisAlignItems = 'CENTER'; ring.cornerRadius = 62;
  ring.fills = [P('brand/inkSoft')]; ring.strokes = [P('brand/ink')]; ring.strokeWeight = 3;
  hero.appendChild(ring); ring.appendChild(ICON('box', 58, 'brand/ink'));
  hero.appendChild(T('Building your ChronoMap', 'H1', 'text/primary'));
  const sub = T('You can close the app - we will notify you.', 'Body', 'text/dim'); hero.appendChild(sub); sub.textAlignHorizontal = 'CENTER';
  BAR(b, 0.62, 'brand/ink');
  const steps = CARD('VERTICAL', 14); b.appendChild(steps); steps.layoutSizingHorizontal = 'FILL'; steps.counterAxisAlignItems = 'MIN';
  [['Uploaded 128 photos from 4 people', true], ['Quality and overlap checks', true], ['Blurring faces and licence plates', true],
   ['Reconstructing the 3D model', false], ['Scoring each contribution', false]].forEach(([l, done]) => {
    const r = AL('HORIZONTAL', { itemSpacing: 12 }); r.counterAxisAlignItems = 'CENTER'; steps.appendChild(r); r.layoutSizingHorizontal = 'FILL';
    r.appendChild(ICON(done ? 'check-circle' : 'clock', 20, done ? 'state/success' : 'text/dim'));
    TF(r, l, 'Body', done ? 'text/primary' : 'text/dim');
  });
  NOTE(b, 'shield', 'Privacy pass runs before reconstruction', 'Faces and plates are removed from the source photos, not just the final model. Photos centred on people are discarded entirely.');
  const f = FOOT(s);
  const a = BTN('Preview result', 'Primary'); f.appendChild(a); a.layoutSizingHorizontal = 'FILL';
  created.push(s.id);
}

// ============ 18. RESULTS & CONTRIBUTION ============
{
  const s = SCREEN('18 · Results & contribution', X(5), Y);
  APPBAR(s, 'Your ChronoMap is ready', 'Royal Melbourne Hospital · golden hour');
  const b = BODY(s, 11);
  const prev = AL('VERTICAL', { itemSpacing: 6 }); prev.primaryAxisAlignItems = 'CENTER'; prev.counterAxisAlignItems = 'CENTER';
  prev.fills = [P('bg/placeholder')]; prev.cornerRadius = 14;
  b.appendChild(prev); prev.layoutSizingHorizontal = 'FILL'; prev.resize(prev.width, 160); prev.counterAxisSizingMode = 'FIXED';
  prev.appendChild(ICON('box', 68, 'text/dim'));
  prev.appendChild(T('Drag to rotate', 'Caption', 'text/dim'));
  const stats = AL('HORIZONTAL', { itemSpacing: 10 }); b.appendChild(stats); stats.layoutSizingHorizontal = 'FILL';
  [['128', 'photos'], ['4', 'people'], ['5:00', 'window']].forEach(([v, l]) => {
    const c = CARD('VERTICAL', 2); stats.appendChild(c); c.layoutGrow = 1; c.layoutSizingHorizontal = 'FILL'; c.paddingTop = 9; c.paddingBottom = 9;
    c.appendChild(T(v, 'Num', 'text/primary')); c.appendChild(T(l, 'Caption', 'text/dim'));
  });
  const nc = TINT('HORIZONTAL', 10, 'state/successSoft'); b.appendChild(nc); nc.layoutSizingHorizontal = 'FILL'; nc.paddingTop = 11; nc.paddingBottom = 11;
  nc.appendChild(ICON('sun', 20, 'state/success'));
  TF(nc, 'Golden hour added - this landmark now has 2 of 6 conditions.', 'BodySm', 'text/primary');
  LBL(b, 'CONTRIBUTION SCORES');
  [['M', '@mapfox', 42, 96, 'Host'], ['J', '@you', 35, 81, 'Unique angles'], ['D', '@dhiraj_s', 31, 74, 'Contributor']].forEach(([i2, n1, ph, sc, bd]) => {
    const c = CARD('VERTICAL', 7); b.appendChild(c); c.layoutSizingHorizontal = 'FILL'; c.counterAxisAlignItems = 'MIN'; c.paddingTop = 10; c.paddingBottom = 10;
    const r = AL('HORIZONTAL', { itemSpacing: 10 }); r.counterAxisAlignItems = 'CENTER'; c.appendChild(r); r.layoutSizingHorizontal = 'FILL';
    r.appendChild(AV(i2, bd === 'Host' ? 'Amber' : 'Filled', 30));
    const col = AL('VERTICAL', { itemSpacing: 1 }); r.appendChild(col); col.layoutGrow = 1; col.layoutSizingHorizontal = 'FILL';
    TF(col, n1, 'Title', 'text/primary');
    TF(col, ph + ' photos · ' + bd, 'Caption', 'text/dim');
    r.appendChild(T(String(sc), 'Num', 'text/primary'));
    BAR(c, sc / 100, 'brand/ink');
  });
  TF(b, 'Score weights how much new surface your photos added, not how many you took.', 'Caption', 'text/dim');
  const f = FOOT(s);
  const a = BTN('Share this model', 'Primary'); f.appendChild(a); a.layoutSizingHorizontal = 'FILL';
  created.push(s.id);
}

return { createdNodeIds: created, screens: created.length };
