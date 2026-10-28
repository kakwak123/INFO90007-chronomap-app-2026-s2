// Overflow fixes for screens 09, 10 and 12 (verified clipped in the browser on 11 Oct 2026).
// RUN AS: cat _helpers.js fixes-overflow.js   and pass the result as the use_figma `code` argument.
//
// The device frame is 390x844 with clipsContent = true, so content taller than the frame is
// silently CUT rather than throwing. Each of these three screens lost its last row:
//   09 Rally          - the "@ashlesha on the way" row
//   10 Host briefing  - the "@ashlesha unassigned" station row
//   12 Two groups     - the "Queue yours for 3:10" option body
//
// Strategy: measure first, apply the targeted reduction, measure again, then fall back to a
// generic gap/padding shrink only if the screen still overflows.

const byName = n => figma.currentPage.findOne(x => x.type === 'FRAME' && x.name === n);

// Body = the vertical auto-layout child set to FILL vertically (between app bar and footer).
const bodyOf = screen => screen.children.find(c => {
  if (c.type !== 'FRAME' || c.layoutMode !== 'VERTICAL') return false;
  try { return c.layoutSizingVertical === 'FILL'; } catch (e) { return false; }
});

// Height the body's children actually need, versus the height it has been given.
const measure = body => {
  const kids = body.children.filter(c => c.visible);
  const content = kids.reduce((a, c) => a + c.height, 0)
    + body.itemSpacing * Math.max(0, kids.length - 1)
    + body.paddingTop + body.paddingBottom;
  return { content: Math.round(content), available: Math.round(body.height), over: Math.round(content - body.height) };
};

const shrink = (body, minGap) => {
  // Pull in the column gap first (cheapest visually), then card padding.
  if (body.itemSpacing > (minGap || 9)) { body.itemSpacing -= 1; return true; }
  let changed = false;
  for (const c of body.children) {
    if (c.type === 'FRAME' && 'paddingTop' in c && c.paddingTop > 9) { c.paddingTop -= 1; c.paddingBottom -= 1; changed = true; }
  }
  return changed;
};

const report = {};
const mutated = [];

// ---- 09 Rally: shorten the geofence illustration ----
{
  const s = byName('09 · Rally - gathering quorum');
  if (s) {
    const b = bodyOf(s);
    report.rallyBefore = measure(b);
    // The 80m-radius block is decorative; it does not need 120px.
    const geo = b.children.find(c => c.type === 'FRAME' && c.height > 100 && c.children.some(k => k.type === 'FRAME'));
    if (geo) { geo.resize(geo.width, 84); mutated.push(geo.id); }
    b.itemSpacing = 10;
    for (let i = 0; i < 40 && measure(b).over > 0; i++) if (!shrink(b)) break;
    report.rallyAfter = measure(b);
    mutated.push(b.id);
  }
}

// ---- 10 Host briefing: smaller radar ----
{
  const s = byName('10 · Briefing - host assigns stations');
  if (s) {
    const b = bodyOf(s);
    report.briefingBefore = measure(b);
    const radar = s.findOne(n => n.name === 'coverage-radar');
    if (radar) {
      // Scale the radar and every absolutely-positioned child with it.
      const k = 200 / radar.width;
      const kids = radar.children.map(c => ({ c, x: c.x, y: c.y, w: c.width, h: c.height }));
      radar.resize(200, 200);
      for (const { c, x, y, w, h } of kids) { c.resize(Math.max(1, w * k), Math.max(1, h * k)); c.x = x * k; c.y = y * k; }
      mutated.push(radar.id);
      const wrap = radar.parent;
      if (wrap && wrap.type === 'FRAME') wrap.resize(wrap.width, 200);
    }
    b.itemSpacing = 10;
    for (let i = 0; i < 40 && measure(b).over > 0; i++) if (!shrink(b)) break;
    report.briefingAfter = measure(b);
    mutated.push(b.id);
  }
}

// ---- 12 Two groups: tighten copy and spacing ----
{
  const s = byName('12 · Two groups, one landmark');
  if (s) {
    const b = bodyOf(s);
    report.conflictBefore = measure(b);
    const long = s.findAllWithCriteria({ types: ['TEXT'] })
      .find(t => t.characters.startsWith('Useful if your group needs'));
    if (long) { long.characters = 'Use this only if your group wants a different target.'; mutated.push(long.id); }
    const intro = s.findAllWithCriteria({ types: ['TEXT'] })
      .find(t => t.characters.startsWith('Two overlapping windows'));
    if (intro) { intro.characters = 'Two overlapping windows split the crowd and produce two thin models instead of one good one.'; mutated.push(intro.id); }
    b.itemSpacing = 10;
    for (let i = 0; i < 40 && measure(b).over > 0; i++) if (!shrink(b)) break;
    report.conflictAfter = measure(b);
    mutated.push(b.id);
  }
}

return { mutatedNodeIds: mutated, report };
