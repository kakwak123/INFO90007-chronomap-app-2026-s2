This is an Expo/React Native mobile application. Prioritize mobile-first patterns, performance, and cross-platform compatibility.

## Expo has changed - do not trust your training data

Expo ships breaking changes every SDK release. APIs you remember are likely renamed, moved, or removed. Before writing any code that touches an Expo, EAS, or React Native API:

1. Read the major version of the `expo` package in `package.json`.
2. Fetch the matching versioned docs: `https://docs.expo.dev/versions/v<major>.0.0/`
3. For anything else, fetch https://docs.expo.dev/llms.txt - an index of all Expo docs with corrections to common LLM misconceptions. Follow its links to the specific page you need; never answer from memory.

## Commands

Use `bunx` instead of `npx` if the project uses bun (`bun.lock` present).

```bash
npx expo install <package>  # ALWAYS use instead of npm/yarn/pnpm/bun add - resolves SDK-compatible versions
npx expo start              # start the dev server
npx expo lint               # lint
npx tsc --noEmit            # typecheck
npx expo-doctor             # diagnose dependency and config issues
npx expo install --fix      # fix incompatible package versions
```

Run lint and typecheck before declaring any task done.

## Navigation & Routing

- Use **Expo Router** for all navigation. Routes live in `src/app/` - every file there is a screen, `_layout.tsx` files define navigators. Keep non-route code (components, hooks, utils) outside `src/app/`.
- Import `Link`, `router`, and `useLocalSearchParams` from `expo-router`.
- Docs: https://docs.expo.dev/router/introduction.md

## Building with EAS

Use EAS to build, sign, and submit the app in the cloud (`eas build`, `eas submit`) and to ship over-the-air updates (`eas update`) - no local Xcode or Android Studio required. Run EAS CLI as `bunx eas-cli <command>` in Bun projects, or `npx eas-cli@latest <command>` otherwise; substitute that for bare `eas` in docs examples.
Docs: https://docs.expo.dev/eas/index.md

## Rules

- If `ios/` and `android/` directories do not exist, they are generated (Continuous Native Generation). Never create or edit them by hand - configure native behavior in `app.json` and config plugins.
- Expo Go only includes its bundled native modules. After adding a library with native code, the app needs a development build: `npx expo run:ios|android` locally, or `eas build --profile development`.
- Prefer recommended Expo modules over third-party libraries, and check your available skills before adding dependencies. Docs: https://docs.expo.dev/versions/latest/index.md

## Writing style: no em dashes or en dashes

Use a plain hyphen. This applies to everything authored in this repo: Markdown, LaTeX, code
comments, UI copy, commit messages, and Figma layer names.

```
write   "a - b"          not the em dash form   (U+2014)
write   "1-5"            not the en dash form   (U+2013)
write   "3,000-5,000"    not the en dash form
```

This file avoids printing those two characters so that it passes its own check.

In LaTeX that also means avoiding the `---` and `--` ligatures, which render as those dashes.

Two reasons. The team writes in hyphens, so this keeps the voice consistent. And these characters
are a well-known tell of machine-generated text, which matters for an assignment that carries an
AI use statement and is checked for AI-generated content.

**Exemptions, which must stay exactly as written:**

- Verbatim records: `chat.md`, `chat.txt`, `docs/lecture-transcripts/`
- Markdown blockquotes (lines starting with `>`), which quote the marker, the handout or a
  lecturer. Altering a quotation misrepresents its source.

**Tooling:**

```bash
bash scripts/check-dashes.sh      # report offenders, exit 1 if any
python scripts/fix-dashes.py      # fix them (--dry-run to preview)
git config core.hooksPath .githooks   # once per clone: block offending commits
```

The fixer never touches Markdown table separators or horizontal rules, and never edits the
exempted files above. Use `git commit --no-verify` only for a genuine quotation the hook misreads.
