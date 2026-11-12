# FOLIO gallery redesign — 2026-11-12

Taste tool status: `GATE: OFF (no build active)`. This is not a Taste gate PASS.

The installed upstream skill is `Leonxlnx/taste-skill`, package name `design-taste-frontend`, version 2.5.1, pinned to `f6b76575f949707b4e3c37cd86cb44b0b98643e8`. Installed through the Codex skill installer into `E:/CodexHome/.codex/skills/design-taste-frontend`; no upstream installer shell scripts or hooks were executed. It becomes automatically discoverable on a new turn.

## Product change

FOLIO opens as an image-led gallery, with three navigation choices: 找画风 / 全部素材 / 我的常用. The existing discovery draft is integrated, retaining its attributed original prompts, separately labelled adapted prompts, brief forms, favorites and comparison flows.

- Two real cover examples (#036 and #604) lead directly to their original records.
- Five use cases filter eight curated style plans. Each plan shows a cover, short explanation and concrete outputs; detailed inputs and adaptation controls live in its dialog.
- Quiet cream and ink palette, larger visual hierarchy, compact filters, a single navigation bar, visible keyboard focus, skip link and reduced-motion treatment.
- Nine WebP gallery previews total 814,634 bytes. Originals remain available in detail views. Run `python scripts/make-discovery-previews.py` with Pillow to regenerate; the manifest falls back to the original if a source cover changes.
- Canonical library remains 680 entries: 567 images and 113 videos. Canonical SHA-256: `68b8341b2fb64979fde1a759c2d446395b437f00164e2842f0ad6dea2db6cee8`.

## Verified

- `npm run typecheck`: passed.
- `npm run build`: passed; existing large-bundle warning remains.
- `npm run data:check`: passed, no data rewritten.
- `node scripts/check-style-discovery.mjs http://127.0.0.1:8080/`: 36 checks passed.
- Same 36 checks against the final production preview: passed.
- Checked original/adapted clipboard contents, favorites after reload, maximum-three comparison, form updates invalidating stale generated text, source deep links, image/video search, featured art, use-case shortcut and responsive overflow.
- Desktop/mobile smoke render and production baseline comparison: real content present; zero page errors, zero horizontal overflow, no branding/auth warnings, no baseline divergence.
- Visually inspected desktop, mobile, tablet, gallery and mobile form captures.
- Sites checkout built with the Sites `build-site.mjs` helper using its existing Cloudflare preset. Client asset hashes match the verified main checkout.

## Check limitations and upstream guidance

The standard smoke command returns nonzero because the platform-injected `https://grok.com/grok-app-builder/extensions.js` is blocked by Chromium with `ERR_BLOCKED_BY_RESPONSE.NotSameOrigin`. The full raw error is retained in both smoke and interaction reports; app-origin error count is zero. The platform branding injector remains intact. This is not reported as a completely clean browser console.

`agent-browser` is installed without its Windows executable; after two failures, the repository's existing Playwright check ran in isolated headless contexts without user accounts or profiles.

Taste `consistency.mjs` ran at 1440, 1024, 820, 768 and 390px, plus narrow/slow/reduced-motion checks. The initial snapshot recorded 129 FAIL and 72 WARN; full findings and crops are in `screenshots/folio-taste-consistency/report.json`. This is a marketing-site checker, while this project is a working gallery. Its exact-screen hero/section requirements, section/card padding model, single heading per screen, equal-height editorial images, marketing footer and mandatory motion treatment were not imposed on the app. It also flagged an unused Tailwind outline utility, while its actual focus-visible checks passed. No broad waivers or checker changes were used to manufacture a PASS.

Actual issues identified by the check were corrected: 44px title targets, consistent mobile footer edges, a nearby bottom action, and lighter gallery previews. The slow-network Taste sweep was not rerun, so its corrected performance is not claimed as re-certified. Subsequent app checks verified the new preview images load and render at usable sizes. `gate.mjs` returned OFF and was not rerun per its own instructions.

Development and built captures: `screenshots/folio-taste-final-dev*.png`, `screenshots/folio-taste-built*.png`. Interaction evidence: `screenshots/discovery-dev-checks.json` and `screenshots/discovery-built-checks.json`.

## Publication

GitHub UI commit: `b30b78301a0b9fb06be93bb6d8c36bf63f800f56`, pushed to `origin/main`.
Sites source commit: `6510128709b2e46db1b1b28cc9527445349639fc`.
The local 148 MB archive upload timed out twice; publication fell back to the pushed source and the managed remote build. Version 13 deployment `appgdep_6af5993cadf08191af8ed70646477413` returned `succeeded` with no failure message on 2026-11-12. URL: https://folio-card.chrisqu6688.chatgpt.site . Existing custom audience retained.
