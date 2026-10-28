# ChronoMap hi-fi prototype - Figma build scripts

Scripts that build the Assignment 3 high-fidelity prototype into the Figma file
**ChronoMap 3D - Low-Fi Prototype**, page **Page 1 - Hi Fi**.

- File key: `nGpbcLweFWROFc3oaonWrO`
- Page: `0:1` (`Page 1 - Hi Fi`). **Page 2 - Low fi holds the A2 wireframes - do not touch it**, the
  A2→A3 contrast is what the rubric asked us to justify.

Each file is a self-contained script for the Figma `use_figma` MCP tool. They re-resolve the
token collection, text styles and components by name at the top, so they carry no state between
runs and can be run in any order after the foundations exist.

## Build order

| Step | Script | Status |
|---|---|---|
| 1 | Tokens, type ramp, StatusBar / Button / Pill / Avatar | done |
| 2 | 40-icon component library | done |
| 3 | NavBar + screens 01-06 (discovery) | done |
| 4 | Screens 07-12 (session formation) | done |
| 5 | `screens-13-18.js` (capture & results) | **pending - Figma MCP rate limit** |
| 6 | `screens-19-22.js` (identity & governance) | **pending - Figma MCP rate limit** |
| 7 | `fixes-overflow.js` (trim screens 09, 10, 12) | **pending - Figma MCP rate limit** |

Each pending script needs the shared helpers prepended, e.g.

```bash
cat _helpers.js screens-13-18.js    # paste the result as the use_figma `code` argument
```

All three pass `node --check` when wrapped in an async IIFE.

## Why these stalled - and the way around it

`You've reached the Figma MCP tool call limit on the Starter plan.`

Per Figma's own rate-limit doc, a **Starter plan with a View seat gets 20 MCP tool calls per
month** - not per minute or per day. Steps 1-4 consumed the month's allowance. Waiting does not
help; the counter resets monthly. (`whoami` is exempt from the limit, which is why it still
answers while everything else fails.)

**Run it as a local development plugin instead.** It is the identical Plugin API code, executed
inside Figma rather than relayed through MCP, so no quota applies and it costs nothing:

1. `./build-plugin.sh` - regenerates `plugin/code.js` from the scripts in this folder.
2. Figma **desktop app** → open the ChronoMap file → menu → *Plugins → Development →
   Import plugin from manifest…* → pick `scripts/figma-hifi/plugin/manifest.json`.
3. *Plugins → Development → ChronoMap Hi-Fi Builder* → Run.

It switches to `Page 1 - Hi Fi` itself, builds screens 13-22, applies the overflow fixes, and
closes with a summary. Measurements land in the plugin console (*Plugins → Development → Show/Hide
console*). It must be the desktop app - plugin development is not available in the browser.

Re-running is safe in the sense that it will not error, but it will create a **second copy** of
screens 13-22 on top of the first. Delete the previous copies before a re-run.

The other route is a plan upgrade: Professional with a Full or Dev seat raises the limit to
200 calls/day.

## Known fixes already folded in

Two bugs were hit while building screens 01-06 and are already corrected in these scripts:

1. **Clipped titles.** A TEXT node in a filling column keeps its intrinsic width and slides under
   the trailing control. Every text helper here (`TF`) sets `layoutSizingHorizontal='FILL'` plus
   `textAutoResize='HEIGHT'` immediately after `appendChild`.
2. **Phantom white panels.** `figma.createAutoLayout()` returns a frame with a default white fill,
   invisible on white cards but obvious on tinted ones. The `AL` helper clears `fills` on creation;
   only deliberate fills (always variable-bound) survive.

## After running

Audit each new screen for vertical overflow - the device frame is 390×844 with `clipsContent`, so
content that exceeds it is silently cut rather than erroring, and nothing in the tool output hints
at it. The only reliable check is to look at the rendered frame.

Three screens were confirmed clipped by inspecting the canvas in the browser, and `fixes-overflow.js`
(step 7) repairs all three. It measures before and after, so its return value tells you whether the
fix actually landed:

| Screen | What was lost |
|---|---|
| 09 Rally | the `@ashlesha` "on the way" row |
| 10 Host briefing | the `@ashlesha` unassigned station row |
| 12 Two groups | the body of the "Queue yours for 3:10" option |

Run the same eyeball check over 13-22 after step 5 and 6; screens 16 (quick callouts, six message
rows) and 18 (results, three score cards) are the likeliest to spill.
