// Shared preamble for the ChronoMap hi-fi Figma build scripts.
//
// use_figma scripts are self-contained — no state survives between calls — so this block is
// pasted at the top of each screen script rather than imported. Keep this file as the source of
// truth and copy it forward when editing.
//
// Everything is resolved BY NAME, so the screen scripts never hold stale node ids.

const coll = (await figma.variables.getLocalVariableCollectionsAsync()).find(c => c.name === 'ChronoMap Tokens');
const V = {}; for (const id of coll.variableIds) { const v = await figma.variables.getVariableByIdAsync(id); V[v.name] = v; }
const TS = {}; for (const t of await figma.getLocalTextStylesAsync()) TS[t.name] = t;
const COMPS = {}; for (const c of figma.currentPage.findAllWithCriteria({ types: ['COMPONENT', 'COMPONENT_SET'] })) COMPS[c.name] = c;
await Promise.all(['Regular', 'Medium', 'Semi Bold', 'Bold'].map(s => figma.loadFontAsync({ family: 'Inter', style: s })));

// Variable-bound paint. Never hardcode a hex in a screen script.
const P = n => figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }, 'color', V[n]);
// Same, at partial opacity — opacity lives on the paint, not the color.
const PO = (n, o) => { const p = P(n); return { ...p, opacity: o }; };

const T = (chars, style, color) => { const t = figma.createText(); t.fontName = { family: 'Inter', style: 'Regular' }; t.characters = chars; t.textStyleId = TS[style].id; t.fills = [P(color)]; return t; };

// createAutoLayout returns a frame with a default WHITE fill — invisible on white cards, obvious
// on tinted ones. Always clear it; deliberate fills are set explicitly and are variable-bound.
const AL = (dir, props) => { const f = figma.createAutoLayout(dir, props || {}); f.fills = []; return f; };

// Append text AND make it fill its column. Without this a TEXT node keeps its intrinsic width and
// slides underneath whatever trailing control shares the row.
const TF = (parent, chars, style, color) => { const t = T(chars, style, color); parent.appendChild(t); try { t.layoutSizingHorizontal = 'FILL'; t.textAutoResize = 'HEIGHT'; } catch (e) {} return t; };

const ICON = (name, size, color) => { const i = COMPS['icon/' + name].createInstance(); i.resize(size, size); for (const n of i.findAll(n => 'strokes' in n && n.strokes && n.strokes.length)) n.strokes = [P(color)]; return i; };
const BTN = (label, type) => { const s = COMPS['Button']; const v = s.children.find(c => c.name === 'Type=' + type) || s.defaultVariant; const i = v.createInstance(); i.findOne(n => n.type === 'TEXT').characters = label; return i; };
const SBTN = (label, type, w) => { const i = BTN(label, type); i.resize(w || 84, 34); i.cornerRadius = 9; i.paddingLeft = 12; i.paddingRight = 12; i.findOne(n => n.type === 'TEXT').textStyleId = TS['Caption'].id; return i; };
const PILL = (label, type) => { const s = COMPS['Pill']; const v = s.children.find(c => c.name === 'Type=' + type) || s.defaultVariant; const i = v.createInstance(); i.findOne(n => n.type === 'TEXT').characters = label; return i; };
const AV = (init, type, size) => { const s = COMPS['Avatar']; const v = s.children.find(c => c.name === 'Type=' + type) || s.defaultVariant; const i = v.createInstance(); i.resize(size || 34, size || 34); i.cornerRadius = (size || 34) / 2; i.findOne(n => n.type === 'TEXT').characters = init; return i; };
const CARD = (dir, gap) => { const f = AL(dir || 'VERTICAL', { itemSpacing: gap == null ? 10 : gap, paddingTop: 14, paddingBottom: 14, paddingLeft: 14, paddingRight: 14 }); f.fills = [P('bg/surface')]; f.strokes = [P('line/border')]; f.strokeWeight = 1; f.cornerRadius = 14; f.counterAxisAlignItems = 'CENTER'; return f; };
const TINT = (dir, gap, bg) => { const f = CARD(dir, gap); f.fills = [P(bg)]; f.strokes = []; return f; };
const SPACER = p => { const r = figma.createFrame(); r.fills = []; r.resize(8, 1); p.appendChild(r); r.layoutGrow = 1; return r; };
const LBL = (parent, s) => { const t = T(s, 'Label', 'text/dim'); parent.appendChild(t); return t; };
const CENTER = (parent, child) => { const w = AL('HORIZONTAL'); w.primaryAxisAlignItems = 'CENTER'; w.counterAxisAlignItems = 'CENTER'; parent.appendChild(w); w.layoutSizingHorizontal = 'FILL'; w.appendChild(child); return w; };

// 390x844 device frame. clipsContent is true, so overflowing content is silently CUT — audit each
// screen visually after building.
const SCREEN = (name, x, y, bg) => {
  const f = AL('VERTICAL', { name, itemSpacing: 0 });
  f.resize(390, 844); f.primaryAxisSizingMode = 'FIXED'; f.counterAxisSizingMode = 'FIXED';
  f.fills = [P(bg || 'bg/base')]; f.x = x; f.y = y; f.clipsContent = true;
  const sb = COMPS['StatusBar'].createInstance(); f.appendChild(sb); sb.layoutSizingHorizontal = 'FILL';
  if (bg === 'text/primary') { for (const n of sb.findAll(n => 'fills' in n && Array.isArray(n.fills) && n.fills.length)) n.fills = [P('text/onInk')]; }
  return f;
};
const BODY = (parent, gap) => { const b = AL('VERTICAL', { itemSpacing: gap == null ? 14 : gap, paddingLeft: 20, paddingRight: 20, paddingTop: 8, paddingBottom: 16 }); parent.appendChild(b); b.layoutSizingHorizontal = 'FILL'; b.layoutSizingVertical = 'FILL'; return b; };
const FOOT = parent => { const f = AL('VERTICAL', { itemSpacing: 10, paddingLeft: 20, paddingRight: 20, paddingTop: 12, paddingBottom: 24 }); parent.appendChild(f); f.layoutSizingHorizontal = 'FILL'; return f; };
const APPBAR = (parent, title, sub) => {
  const bar = AL('HORIZONTAL', { itemSpacing: 8, paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 10 });
  bar.counterAxisAlignItems = 'CENTER'; parent.appendChild(bar); bar.layoutSizingHorizontal = 'FILL';
  bar.appendChild(ICON('arrow-left', 22, 'text/primary'));
  const col = AL('VERTICAL', { itemSpacing: 1 }); bar.appendChild(col); col.layoutGrow = 1; col.layoutSizingHorizontal = 'FILL';
  const t = TF(col, title, 'Title', 'text/primary'); t.textAlignHorizontal = 'CENTER';
  if (sub) { const s2 = TF(col, sub, 'Caption', 'text/dim'); s2.textAlignHorizontal = 'CENTER'; }
  const sp = figma.createFrame(); sp.resize(22, 22); sp.fills = []; bar.appendChild(sp);
  return bar;
};
const NOTE = (parent, icon, title, body) => {
  const c = TINT('HORIZONTAL', 12, 'bg/surfaceAlt'); c.counterAxisAlignItems = 'MIN';
  parent.appendChild(c); c.layoutSizingHorizontal = 'FILL';
  c.appendChild(ICON(icon, 22, 'text/primary'));
  const col = AL('VERTICAL', { itemSpacing: 3 }); c.appendChild(col); col.layoutGrow = 1; col.layoutSizingHorizontal = 'FILL';
  TF(col, title, 'Title', 'text/primary'); TF(col, body, 'BodySm', 'text/dim');
  return c;
};
const BAR = (parent, pct, color) => {
  const track = AL('HORIZONTAL'); track.fills = [P('bg/surfaceAlt')]; track.cornerRadius = 5;
  parent.appendChild(track); track.layoutSizingHorizontal = 'FILL'; track.resize(track.width, 8); track.counterAxisSizingMode = 'FIXED'; track.primaryAxisSizingMode = 'FIXED';
  const fill = figma.createRectangle(); fill.resize(Math.max(8, track.width * pct), 8); fill.cornerRadius = 5; fill.fills = [P(color || 'brand/ink')];
  track.appendChild(fill); return track;
};
// Coverage radar. dots: [{a:deg from north, r:0..1, s:'ok'|'thin'|'me'}], people: [{a,r,i,host}]
const RADAR = (size, dots, people) => {
  const f = figma.createFrame(); f.resize(size, size); f.fills = []; f.clipsContent = false; f.name = 'coverage-radar';
  const R = size / 2;
  [1, 0.66, 0.33].forEach(k => { const e = figma.createEllipse(); e.resize(size * k, size * k); e.x = R - size * k / 2; e.y = R - size * k / 2;
    e.fills = k === 1 ? [P('bg/surface')] : []; e.strokes = [P('line/border')]; e.strokeWeight = 1; f.appendChild(e); });
  const n = T('N', 'Label', 'text/dim'); f.appendChild(n); n.x = R - 5; n.y = 6;
  const c = figma.createEllipse(); c.resize(18, 18); c.x = R - 9; c.y = R - 9; c.fills = [P('brand/ink')]; f.appendChild(c);
  (dots || []).forEach(d => { const e = figma.createEllipse(); const sz = d.me ? 18 : 15; e.resize(sz, sz);
    const rad = d.a * Math.PI / 180; e.x = R + Math.sin(rad) * R * d.r - sz / 2; e.y = R - Math.cos(rad) * R * d.r - sz / 2;
    e.fills = [P(d.s === 'ok' ? 'state/success' : d.s === 'me' ? 'accent/amber' : 'bg/surface')];
    e.strokes = [P(d.s === 'ok' ? 'state/success' : d.s === 'me' ? 'accent/amber' : 'line/strong')]; e.strokeWeight = 2; f.appendChild(e); });
  (people || []).forEach(p => { const rad = p.a * Math.PI / 180; const chip = AV(p.i, p.host ? 'Amber' : 'Filled', 30);
    f.appendChild(chip); chip.x = R + Math.sin(rad) * R * p.r - 15; chip.y = R - Math.cos(rad) * R * p.r - 15; });
  return f;
};

// Canvas grid: 6 screens per row, 450px pitch.
const X = i => i * 450;
// Row origins: 600 (01-06), 1560 (07-12), 2520 (13-18), 3480 (19-22)
