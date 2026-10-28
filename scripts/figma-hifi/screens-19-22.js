// Screens 19-22 - identity, archive and governance. Row y = 3480.
// RUN AS: cat _helpers.js screens-19-22.js   and pass the result as the use_figma `code` argument.
//
// Screen 20 (Profile) exists because the marker asked for it directly: "So there's a profile for
// users? The final iteration should contain these, especially if it's outlined as important
// features of the product."

const created = [];
const Y = 3480;

// Bottom nav lookup (built in the screens 01-06 pass)
const navComp = COMPS['NavBar'];
const NAV = (parent, active) => {
  const i = navComp.createInstance();
  parent.appendChild(i); i.layoutSizingHorizontal = 'FILL';
  for (let k = 0; k < 4; k++) {
    const col = i.findOne(n => n.name === 'nav-item-' + k);
    if (!col) continue;
    const c = k === active ? 'brand/ink' : 'text/dim';
    for (const n of col.findAll(n => 'strokes' in n && n.strokes && n.strokes.length)) n.strokes = [P(c)];
    const tx = col.findOne(n => n.type === 'TEXT'); if (tx) tx.fills = [P(c)];
  }
  return i;
};

// ============ 19. SHARE ============
{
  const s = SCREEN('19 · Share the model', X(0), Y);
  APPBAR(s, 'Share', 'Royal Melbourne Hospital');
  const b = BODY(s, 14);
  LBL(b, 'POST PREVIEW');
  const c = CARD('VERTICAL', 12); b.appendChild(c); c.layoutSizingHorizontal = 'FILL'; c.counterAxisAlignItems = 'MIN';
  const img = AL('VERTICAL'); img.primaryAxisAlignItems = 'CENTER'; img.counterAxisAlignItems = 'CENTER';
  img.fills = [P('bg/placeholder')]; img.cornerRadius = 10;
  c.appendChild(img); img.layoutSizingHorizontal = 'FILL'; img.resize(img.width, 150); img.counterAxisSizingMode = 'FIXED';
  img.appendChild(ICON('box', 58, 'text/dim'));
  TF(c, 'I helped build this', 'H2', 'text/primary');
  TF(c, 'Royal Melbourne Hospital at golden hour, captured with 3 strangers in a 5 minute window.', 'BodySm', 'text/dim');
  const lk = AL('HORIZONTAL', { itemSpacing: 8 }); lk.counterAxisAlignItems = 'CENTER'; c.appendChild(lk); lk.layoutSizingHorizontal = 'FILL';
  lk.appendChild(ICON('send', 16, 'brand/ink'));
  TF(lk, 'link.chronomap.app/3d/merf', 'Caption', 'brand/ink');

  [['Include my contributor name', true], ['Credit the other 3 contributors', true], ['Allow reuse under CC BY-SA', false]].forEach(([l, on]) => {
    const r = AL('HORIZONTAL', { itemSpacing: 10, paddingLeft: 14, paddingRight: 14, paddingTop: 12, paddingBottom: 12 });
    r.counterAxisAlignItems = 'CENTER'; r.cornerRadius = 12; r.fills = [P('bg/surface')]; r.strokes = [P('line/border')]; r.strokeWeight = 1;
    b.appendChild(r); r.layoutSizingHorizontal = 'FILL';
    TF(r, l, 'Body', 'text/primary');
    const tg = AL('HORIZONTAL'); tg.resize(46, 27); tg.primaryAxisSizingMode = 'FIXED'; tg.counterAxisSizingMode = 'FIXED';
    tg.cornerRadius = 14; tg.paddingLeft = 3; tg.paddingRight = 3; tg.counterAxisAlignItems = 'CENTER';
    tg.primaryAxisAlignItems = on ? 'MAX' : 'MIN';
    tg.fills = [P(on ? 'brand/ink' : 'bg/surfaceAlt')];
    r.appendChild(tg);
    const kn = figma.createEllipse(); kn.resize(21, 21); kn.fills = [P('bg/surface')]; tg.appendChild(kn);
  });
  LBL(b, 'SHARE VIA');
  const apps = AL('HORIZONTAL', { itemSpacing: 14 }); apps.primaryAxisAlignItems = 'CENTER'; b.appendChild(apps); apps.layoutSizingHorizontal = 'FILL';
  [['image', 'Instagram'], ['message', 'WhatsApp'], ['send', 'Link'], ['grid', 'QR']].forEach(([ic, nm]) => {
    const col = AL('VERTICAL', { itemSpacing: 6 }); col.counterAxisAlignItems = 'CENTER'; apps.appendChild(col);
    const bx = AL('HORIZONTAL'); bx.resize(56, 56); bx.primaryAxisSizingMode = 'FIXED'; bx.counterAxisSizingMode = 'FIXED';
    bx.primaryAxisAlignItems = 'CENTER'; bx.counterAxisAlignItems = 'CENTER'; bx.cornerRadius = 28;
    bx.fills = [P('bg/surface')]; bx.strokes = [P('brand/ink')]; bx.strokeWeight = 1.5;
    col.appendChild(bx); bx.appendChild(ICON(ic, 24, 'brand/ink'));
    col.appendChild(T(nm, 'Caption', 'text/dim'));
  });
  const f = FOOT(s);
  const a = BTN('Copy link', 'Primary'); f.appendChild(a); a.layoutSizingHorizontal = 'FILL';
  created.push(s.id);
}

// ============ 20. PROFILE - REPUTATION & SOUVENIRS ============
{
  const s = SCREEN('20 · Profile - reputation & souvenirs', X(1), Y);
  APPBAR(s, '@you', 'Joined March 2026');
  const b = BODY(s, 12);
  const hd = AL('HORIZONTAL', { itemSpacing: 14 }); hd.counterAxisAlignItems = 'CENTER'; b.appendChild(hd); hd.layoutSizingHorizontal = 'FILL';
  hd.appendChild(AV('J', 'Filled', 62));
  const hc = AL('VERTICAL', { itemSpacing: 4 }); hd.appendChild(hc); hc.layoutGrow = 1; hc.layoutSizingHorizontal = 'FILL';
  TF(hc, 'John K.', 'H1', 'text/primary');
  const bg = AL('HORIZONTAL', { itemSpacing: 6 }); hc.appendChild(bg); bg.layoutSizingHorizontal = 'FILL';
  bg.appendChild(PILL('Trusted host', 'Good'));
  bg.appendChild(PILL('14 sessions', 'Outline'));

  const stats = AL('HORIZONTAL', { itemSpacing: 10 }); b.appendChild(stats); stats.layoutSizingHorizontal = 'FILL';
  [['14', 'sessions'], ['9', 'hosted'], ['512', 'photos'], ['4.9', 'rating']].forEach(([v, l]) => {
    const c = CARD('VERTICAL', 2); stats.appendChild(c); c.layoutGrow = 1; c.layoutSizingHorizontal = 'FILL';
    c.paddingTop = 10; c.paddingBottom = 10; c.paddingLeft = 6; c.paddingRight = 6;
    c.appendChild(T(v, 'Num', 'text/primary')); c.appendChild(T(l, 'Caption', 'text/dim'));
  });
  NOTE(b, 'shield', 'Why reputation matters here', 'You are joining sessions with strangers. A visible history of real contributions is what makes a stranger worth standing next to for five minutes.');
  LBL(b, 'BADGES');
  const bw = AL('HORIZONTAL', { itemSpacing: 8 }); bw.layoutWrap = 'WRAP'; bw.counterAxisSpacing = 8; b.appendChild(bw); bw.layoutSizingHorizontal = 'FILL';
  [['Golden hour', 'Accent'], ['First host', 'Good'], ['Hard to sync', 'Accent'], ['Gap filler', 'Good'], ['Winter set', 'Outline']].forEach(([l, t2]) => bw.appendChild(PILL(l, t2)));
  LBL(b, 'YOUR SOUVENIRS');
  const shelf = AL('HORIZONTAL', { itemSpacing: 10 }); b.appendChild(shelf); shelf.layoutSizingHorizontal = 'FILL';
  [['Royal Melbourne', 'Golden hour'], ['Flinders St', 'Daytime'], ['State Library', 'Spring']].forEach(([n1, n2]) => {
    const col = AL('VERTICAL', { itemSpacing: 6 }); shelf.appendChild(col); col.layoutGrow = 1; col.layoutSizingHorizontal = 'FILL';
    const bx = AL('VERTICAL'); bx.primaryAxisAlignItems = 'CENTER'; bx.counterAxisAlignItems = 'CENTER';
    bx.fills = [P('bg/placeholder')]; bx.cornerRadius = 10;
    col.appendChild(bx); bx.layoutSizingHorizontal = 'FILL'; bx.resize(bx.width, 86); bx.counterAxisSizingMode = 'FIXED';
    bx.appendChild(ICON('box', 32, 'text/dim'));
    TF(col, n1, 'Caption', 'text/primary');
    TF(col, n2, 'Caption', 'text/dim');
  });
  NAV(s, 3);
  created.push(s.id);
}

// ============ 21. LANDMARK - THE ARCHIVE OVER TIME ============
// Makes the "Chrono" in ChronoMap do work: a landmark is never finished, which is also the
// structural reason the task needs a crowd rather than one group.
{
  const s = SCREEN('21 · Landmark - conditions & history', X(2), Y);
  APPBAR(s, 'Royal Melbourne Hospital', 'Parkville · 3 captures');
  const b = BODY(s, 12);
  const hero = AL('VERTICAL', { itemSpacing: 6 }); hero.primaryAxisAlignItems = 'CENTER'; hero.counterAxisAlignItems = 'CENTER';
  hero.fills = [P('bg/placeholder')]; hero.cornerRadius = 14;
  b.appendChild(hero); hero.layoutSizingHorizontal = 'FILL'; hero.resize(hero.width, 140); hero.counterAxisSizingMode = 'FIXED';
  hero.appendChild(ICON('box', 58, 'text/dim'));
  hero.appendChild(T('Latest model · golden hour, Oct 2026', 'Caption', 'text/dim'));

  const pr = AL('HORIZONTAL', { itemSpacing: 10 }); pr.counterAxisAlignItems = 'CENTER'; b.appendChild(pr); pr.layoutSizingHorizontal = 'FILL';
  TF(pr, 'ARCHIVE COMPLETENESS', 'Label', 'text/dim');
  pr.appendChild(PILL('2 of 6', 'Accent'));
  BAR(b, 2 / 6, 'accent/amber');
  TF(b, 'A place is never "done". Each condition needs its own synchronised session - which is why no single group can finish a landmark alone.', 'BodySm', 'text/dim');

  LBL(b, 'CONDITIONS');
  const grid = AL('VERTICAL', { itemSpacing: 8 }); b.appendChild(grid); grid.layoutSizingHorizontal = 'FILL';
  [['sun', 'Golden hour', 'Captured Oct 2026 · 4 people', 'Good', '✓'],
   ['sun', 'Daytime', 'Captured Aug 2026 · 6 people', 'Good', '✓'],
   ['cloud-rain', 'Rain', 'Nobody has captured this', 'Accent', 'Open'],
   ['clock', 'Night', 'Nobody has captured this', 'Accent', 'Open']].forEach(([ic, n1, n2, pt, pl]) => {
    const c = CARD('HORIZONTAL', 10); grid.appendChild(c); c.layoutSizingHorizontal = 'FILL'; c.paddingTop = 11; c.paddingBottom = 11;
    c.appendChild(ICON(ic, 20, pt === 'Good' ? 'state/success' : 'accent/amber'));
    const col = AL('VERTICAL', { itemSpacing: 1 }); c.appendChild(col); col.layoutGrow = 1; col.layoutSizingHorizontal = 'FILL';
    TF(col, n1, 'Title', 'text/primary'); TF(col, n2, 'Caption', 'text/dim');
    c.appendChild(PILL(pl, pt));
  });
  const f = FOOT(s);
  const a = BTN('Request a rain capture', 'Primary'); f.appendChild(a); a.layoutSizingHorizontal = 'FILL';
  const a2 = BTN('Compare the two models', 'Secondary'); f.appendChild(a2); a2.layoutSizingHorizontal = 'FILL';
  created.push(s.id);
}

// ============ 22. REPORT & BLOCK ============
// Stranger collaboration without a safety route is a hole a marker will find.
{
  const s = SCREEN('22 · Report or block a participant', X(3), Y);
  APPBAR(s, 'Report @kira', 'Flinders Street Station session');
  const b = BODY(s, 12);
  const who = CARD('HORIZONTAL', 12); b.appendChild(who); who.layoutSizingHorizontal = 'FILL';
  who.appendChild(AV('K', 'Default', 40));
  const wc = AL('VERTICAL', { itemSpacing: 2 }); who.appendChild(wc); wc.layoutGrow = 1; wc.layoutSizingHorizontal = 'FILL';
  TF(wc, '@kira', 'Title', 'text/primary');
  TF(wc, 'In this session · 2 captures total', 'Caption', 'text/dim');
  TF(b, 'Reports are reviewed by moderators. Blocking takes effect immediately and you will never be matched into a session with this person again.', 'BodySm', 'text/dim');
  LBL(b, 'WHAT HAPPENED?');
  [['eye-off', 'Photographing people, not the place'], ['alert-triangle', 'Harassment or abuse'], ['users', 'Blocking or crowding others'],
   ['flag', 'Off-topic or junk photos'], ['lock', 'Captured a restricted area'], ['message', 'Something else']].forEach(([ic, l], i) => {
    const r = AL('HORIZONTAL', { itemSpacing: 12, paddingLeft: 14, paddingRight: 14, paddingTop: 12, paddingBottom: 12 });
    r.counterAxisAlignItems = 'CENTER'; r.cornerRadius = 12;
    r.fills = [P(i === 0 ? 'state/liveSoft' : 'bg/surface')];
    r.strokes = [P(i === 0 ? 'state/live' : 'line/border')]; r.strokeWeight = i === 0 ? 2 : 1;
    b.appendChild(r); r.layoutSizingHorizontal = 'FILL';
    r.appendChild(ICON(ic, 20, i === 0 ? 'state/live' : 'text/dim'));
    TF(r, l, 'Body', 'text/primary');
    if (i === 0) r.appendChild(ICON('check-circle', 20, 'state/live'));
  });
  NOTE(b, 'shield', 'The session keeps running', 'Reporting does not end the capture for everyone else. Their photos are quarantined pending review, not deleted from the group’s work.');
  const f = FOOT(s);
  const a = BTN('Submit report', 'Primary'); f.appendChild(a); a.layoutSizingHorizontal = 'FILL';
  const a2 = BTN('Block without reporting', 'Secondary'); f.appendChild(a2); a2.layoutSizingHorizontal = 'FILL';
  created.push(s.id);
}

return { createdNodeIds: created, screens: created.length };
