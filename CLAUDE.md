# CLAUDE.md

Project-level rules for Claude Code. Expo, EAS, routing and commands live in `AGENTS.md`; read
that first. This file covers the design system and the Figma workflow in both directions.

## Writing style

No em dashes and no en dashes, anywhere: Markdown, code comments, UI copy, commit messages, and
**Figma layer names**. Write `a - b` and `1-5` with a plain hyphen. This is the repo rule from
`AGENTS.md` and it applies to anything pushed into Figma too.

---

## Design system: source of truth

| | |
| --- | --- |
| Tokens in code | `src/ui/theme.ts` (33 lines) |
| Primitives in code | `src/ui/kit.tsx` (377 lines, 19 primitives plus 4 types) |
| Screens | `src/app/*.tsx`, Expo Router, every file is a route |
| Figma file key | `nGpbcLweFWROFc3oaonWrO` |
| Figma page | `Page 1 - Hi Fi` |
| Figma variable collection | `ChronoMap Tokens` |

`theme.ts` and the `ChronoMap Tokens` collection are **mirrors of each other**. Neither is
subordinate. Change one and you must change the other in the same piece of work, and say in your
summary which side you changed.

## Component rules

- **Always compose from `src/ui/kit.tsx`.** Never write a raw `View` or `Text` for something the
  kit already covers.
- Available primitives: `Screen`, `Btn`, `Card`, `H`, `H2`, `P`, `Label`, `Avatar`, `Pill`,
  `Field`, `Thumb`, `Note`, `Tabs`, `Stat`, `Bar`, `Radar`, `LegendDot`, `Toggle`, `NavBar`,
  plus the `IconName`, `Tone`, `Dot` and `Who` types.
- Every screen's root element is `<Screen>`. It owns safe-area insets, the header, the scroll
  container, the footer and the nav slot. Do not reimplement any of those.
- A genuinely new primitive goes in `kit.tsx` as `export function PascalCase(...)`, typed inline
  in the signature like the existing ones. Keep non-route code out of `src/app/`.
- **Import through the `@/` alias**, which is what the codebase uses: `import { C, R } from '@/ui/theme'`
  and `import { Screen, Btn } from '@/ui/kit'`. Only `kit.tsx` itself uses the relative
  `'./theme'`. Do not introduce deep relative chains like `'../../ui/theme'`.

## Styling rules

- **Never hardcode a color.** Use `C.*` from `theme.ts`. The palette is 17 named tokens.
- Radii come from `R`: `sm` 8, `md` 12, `lg` 16, `xl` 22, `pill` 999.
- Colors carry meaning, so do not repurpose them:
  - `C.amber` / `C.amberSoft` are reserved for **capture conditions and the host**. Nothing else.
  - `C.live` / `C.liveSoft` are reserved for **live state**.
  - `C.ink` is the primary action and the archival brand color.
- Tone props are closed unions. Respect them: `Btn` takes `primary | secondary | ghost | amber`,
  `Card` takes `amber | ink | live | good | alt`, `Pill` and the shared `Tone` take
  `outline | filled | accent | live | good`.

### Known gaps - do not paper over these

- **`S` is a dead token.** `theme.ts` exports `S = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 }`
  and **nothing imports it**. All 23 theme imports in the codebase are `{ C, R }` or `{ C }`, and
  there are zero `S.*` usages. Real spacing is hardcoded: most commonly 10, 12, 8, 6 and 14, and
  10, 6, 14, 18 and 22 are not on the 4px scale at all. Do not claim the project uses a spacing
  scale. Prefer `S` for new code and say so when you use it, but do not silently rewrite existing
  screens as a side effect of an unrelated task.
- **One raw hex remains:** `src/app/capture.tsx:37` uses `'#3A3E46'` for the viewfinder ground. If
  that shade is wanted permanently it belongs in `theme.ts` as a token.
- **No custom font is loaded.** There is no `useFonts` call and no `fontFamily` in the kit; the app
  renders in the system font. `src/components/themed-text.tsx` is leftover Expo scaffold and is not
  part of the design system.

### Typography

There is no typography token object. The scale lives inline in the kit and these are the values:

| Primitive | Size | Weight | Tracking |
| --- | --- | --- | --- |
| `H` | 24 | 800 | -0.4 |
| `H2` | 19 | 700 | -0.2 |
| `P` | 15 | 400, line height 22 | - |
| `Label` | 11 | 700 | +1, uppercase |
| Header title | 17 | 700 | - |
| `Btn` | 16 | 700 | - |

Tight negative tracking on headings is deliberate. Carry weight and size, not decoration.

## Avoid the generic look

These are bans, not preferences.

- **Palette:** no purple, indigo or violet in any form, and no gradients. The ground is the warm
  paper `C.bg` (#F6F5F2), never pure white or pure black. `C.surface` (#FFFFFF) is for cards
  sitting on that ground, which is fine; a full-bleed #FFFFFF or #000000 screen is not.
- **No glow.** No large blur radii, no neon shadows. Separation comes from `borderWidth: 1` with
  `C.border`, which is how `Card` and `Field` already do it.
- **Layout:** no three-up equal-height card grid with a top-left icon in each cell. Prefer what the
  app already uses - a `Stat` row, hairline-bordered `Card` stacks, `Note` blocks for guidance,
  `Field` lists for dense data, and asymmetric splits.
- **Shape:** `R.pill` is for `Pill` and `Avatar` only. Buttons use `R.md`, cards use `R.lg - 2`.
  Do not round a button to a capsule.

## Icons and assets

- **Ionicons only**, via `IconName` from the kit, which is typed off `@expo/vector-icons`.
- **Never add another icon package.** Not Lucide, not Feather, not an SVG icon library.
- If the Figma MCP server returns a localhost source for an image or SVG, use that source
  directly and do not invent a placeholder. Downloaded assets go in `assets/`.

## Figma MCP: design to code

Required flow for every Figma-driven change. Do not skip steps.

1. `create_session` with the file key as soon as you know it, including for read-only work.
2. `get_design_context` for the exact node. Pass a URL that includes `?node-id=...`; a bare file
   link gives you the file, not the frame.
3. If the response is truncated, `get_metadata` for the node map, then re-fetch only what you need.
4. `get_screenshot` for the visual reference.
5. Only then implement.
6. Validate the result against the screenshot before calling it done.

**The MCP returns React plus Tailwind. That output is a description of the design, not code to
paste.** This project is React Native: there is no Tailwind, no `className`, no DOM. Translate
every utility class into `StyleSheet` styles and `C` / `R` tokens, and reuse kit primitives rather
than rebuilding them. If MCP output mentions `divide-y`, `tracking-tight`, `rounded-full` or any
`bg-*` class, it has not been translated yet.

## Code to Figma: pushing the design back

- Load the `figma-use` skill before calling `use_figma`. Same for `figma-create-new-file` before
  `create_new_file`.
- **Seat limit:** writes need a Full seat. On this account that is **John's Starter team**
  (`team::1564092078663848355`, pro tier). The `sat11` and `John` teams are View-only, so a write
  there will fail on permissions rather than on your payload. Check with `whoami` if a write errors.
- **Code Connect is not available** on this account; it needs Organization or Enterprise. Do not
  propose it or write Code Connect config.
- Name layers after the kit export they represent (`Btn`, `Card`, `Pill`), with plain hyphens and
  no em or en dashes.
- When you change `theme.ts`, update the `ChronoMap Tokens` collection to match, and keep the
  comment at the top of `theme.ts` accurate about which Figma file and page it mirrors.

## Before declaring any task done

```bash
npx expo lint
npx tsc --noEmit
```
