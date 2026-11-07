# Redesign 2026 — decisions log

One line per decision taken during implementation, with the reason.

## Content and copy

- Copy source = the live components. Where a prototype string differs from the shipped copy (e.g. hero stat "−92 %" vs prototype "1 h → ~5 min"), the shipped copy wins — rule "do not change copy" outranks the prototype's sample data.
- Most site copy is hard-coded English inside components (not in `messages/*`). It stays where it is; only new UI strings go to `messages/*.json` under the `ui` namespace.
- TODO-translate: every key under `ui.*` in `messages/de.json`, `fr.json`, `it.json` is a copy of the English text and still needs translation.
- Swiss section: the four "DE/FR/IT/EN wording" cards are dropped — the approved prototype and README §12 specify six checked items only; the hero tagline already demonstrates the four languages.
- Calculator: widget follows README §10 (enquiries + minutes → freed hours, FTE, verdict at 150). The section H2/lead keep the shipped copy; the old CHF model (after-hours, deal value, scope) is replaced because the README defines the widget.
- Footer keeps the newsletter signup and social links in the brand column — not in the prototype, but removing working features is not a design decision.
- Footer link labels follow the prototype; "Logistics & operations" points to `/products` (8Move now lives there).
- Enquiry form keeps the shipped field copy where it existed (topic list, consent sentence); success text uses the prototype's "named engineer" line via `ui.audit.done`.

## System

- Old dark/gradient CSS and the `.tds` scoped prototype CSS are replaced, not layered: `trident.css` = tokens.css + site components, global (no scope class).
- `.float` and `.ring` from tokens.css are renamed `.floaty` / `.ring-arc` because Tailwind v4 ships utilities with those names.
- Tailwind radius scale is clamped to 2/3 px so no legacy `rounded-*` can produce a pill; `rounded-full` remains for round avatars only.
- Reveal fallback: instead of a 350 ms interval (which polls forever), one check runs 350 ms after mount and one after every scroll stop — same guarantee, zero idle CPU.
- Pulse, dot matrix, testimonial dots and bars are rebuilt on transform/opacity (prototype used box-shadow, background and width transitions).
- Hero blobs: pre-blurred radial gradients (no `filter: blur`), hidden ≤ 640 px.
- `[hidden]` is forced to `display:none !important` so server-rendered inactive panels (FAQ answers, chat tabs, quotes) stay out of view but in the HTML.
- Nav is flat (Services · Use cases · Projects · About · Blog · Contact) as in DESIGN-SYSTEM §5; secondary pages (solutions, industries, technologies, locations, products, pricing, FAQ) are linked from the footer "Explore" column.
- Mobile menu (≤ 860 px) is rendered outside `<header>`: the header's `backdrop-filter` would otherwise trap the fixed dialog.
- Language switcher keeps the cookie + `router.refresh()` mechanism (localePrefix is `never`, URLs do not change).
- New routes `/use-cases` and `/faq` are added: both are in the README page list with prototypes; no existing route changes.
- Hero lead, CTAs, tagline and photo use a transform-only rise (no opacity fade) so the LCP element is painted on the first frame.
- Hero log: older rows dim by colour, not opacity — opacity pushed the mono text under 4.5:1.
- "Median first reply" chip text is ink-2 with a green dot; green text on white fails contrast (`--ok` stays dot-only, as the spec says).
- Element resets (body, a, img, button, input) live in `@layer base`; unlayered they overrode every Tailwind colour utility on buttons.
- Instrument Sans is loaded as the variable font (400–700 axis = exactly the weights used): 2 files instead of 8. IBM Plex Mono has `preload: false` (labels only).
- `htmlLimitedBots: /.*/` in next.config: metadata is rendered in `<head>` for every client instead of being streamed into `<body>` (Lighthouse SEO flagged the meta description).
- Sections below the hero get `content-visibility: auto`; JS timers start only after `load` + idle — cuts home TBT from 330 ms to ~60 ms.
- Infinite CSS loops on pseudo-elements (`.pulse::after`) are paused too (`.is-off::after`); after scrolling away nothing animates.
- `/site-price` → `/pricing` 301 existed in both next.config and middleware but `/pricing` had no route (404). Added an `afterFiles` rewrite `/pricing → /site-price`; no redirect or route was removed. Footer links to `/pricing`, as the sitemap already did.
- Products section links point to 8move.com and watertds.com (the link texts already named those domains; the hrefs were `#`).
- Added `eslint.config.mjs` (next/core-web-vitals + next/typescript) and `@eslint/eslintrc`: the repo had no ESLint config, so `pnpm lint` stopped at an interactive prompt.
- Removed unused deps: geist, all @radix-ui packages, class-variance-authority, tw-animate-css; removed legacy atoms (button, badge, separator), `home/Contact.tsx`, `home/References.tsx`, `home/HomeInteractions.tsx`, `data/clients.ts`.
- Closing CTA bands on inner pages are light (`section--alt`/`section--line`), not dark: a dark band directly above the dark footer merged into one block.
- `/cases`: no measured/modelled tags on the nine case studies — `cases.ts` states neither, and inventing a label would break the honest-numbers rule. Pagination is not used there (the shared pager says "Articles"); the sector filter narrows the list.
- `/use-cases`: the prototype's per-case "tour" (situation / what the agent does / what it replaces) has no copy in the repo, so the page shows the eight cards + "Where we say no" only.
- `/faq`: no lead under the H1 (the prototype lead would be new copy); it is used as the meta description only.
- `/contact`: the old custom form is replaced by the shared AuditForm (light); its old success/error/demo strings are gone.
- `/team`: expertise tags kept under each card (content), country removed (design rule).
- `/imprint` keeps the e-mail in its legal "Contact" block (Swiss UWG requires it); this is the one exception to "contacts only in footer and /contact".
- QA screenshots are written to `design/redesign-2026/qa/` but git-ignored (≈110 MB of PNG).
- Lighthouse target LCP < 2.5 s is not met in the simulated (Lantern) run: 2.9–3.6 s. Observed LCP in the same runs is 0.1–0.3 s; Lantern adds the Next.js/React baseline chunks (≈102 kB shared) requested before LCP. Closing the gap needs a framework-level change (fewer client islands in the layout, or partial prerendering), not a design change.
- Home Performance is 86–89 (target 90) for the same reason plus the hero photo being the mobile LCP element.
