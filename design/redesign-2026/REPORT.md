# Redesign 2026 — implementation report

Branch `redesign-2026` (not pushed, not deployed). The whole public site now uses the white 2026 design system from `design/redesign-2026/`. Copy, routes, Payload, next-intl routing, metadata and JSON-LD are kept; decisions are logged one per line in [DECISIONS.md](DECISIONS.md).

## Verification (step 6)

| Check | Result |
|---|---|
| `pnpm lint` | ✔ No ESLint warnings or errors (config added — the repo had none) |
| `npx tsc --noEmit` | ✔ 0 errors |
| `pnpm build` | ✔ passes; Home first-load JS **129 kB** (target ≤ 130 kB) |
| Screenshots | 30 routes × 1440 / 1100 / 860 / 375 px (EN) + all 30 at 375 px (DE) = 150 full-page shots in `qa/` (git-ignored, ≈110 MB) |
| Automated layout check on every shot | 150 / 150 pass: `scrollWidth == viewport` (no horizontal scroll), no element outside the viewport, no broken image, exactly one `<h1>`, no page errors |
| Reduced motion | every `.reveal / .stagger / .wipe` block is visible immediately (0 hidden), timers do not start |
| Idle CPU (home, scrolled to footer, 5 s) | 0 ms script, 0 layouts, 0 style recalcs, 0 running animations |

### Lighthouse, mobile (simulated throttling, production build)

| Page | Perf | A11y | Best pr. | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| `/` | 89 | 100 | 100 | 100 | 3.6 s | 0.008 | 60 ms |
| `/services` | 95 | 100 | 100 | 100 | 2.9 s | 0 | 10 ms |
| `/blog` | 92 | 100 | 100 | 100 | 3.3 s | 0.001 | 10 ms |
| `/team` | 94 | 100 | 100 | 100 | 3.0 s | 0 | 10 ms |
| `/faq` | 95 | 100 | 100 | 100 | 2.9 s | 0 | 10 ms |

Met: A11y / Best practices / SEO ≥ 95, CLS < 0.05, Perf ≥ 90 on four of five pages.
Not met: simulated LCP < 2.5 s (all five) and Perf ≥ 90 on the home page (89). Observed LCP in the same runs is 0.1–0.3 s; the simulation adds the Next.js/React baseline chunks loaded before LCP. See DECISIONS.md for the reasoning and what would close the gap. INP was not measured (lab run; TBT is the proxy).

## What changed, by area

**Foundation.** `trident.css` = `tokens.css` + all site components (header, hero, stat cards, list–detail, chat, race, gantt, calculator, cards, logos, footer, forms, pagination, accordion). Tokens exposed to Tailwind v4 (`bg-alt`, `text-ink-2`, `border-line`…), radius clamped to 2/3 px. Dark/gradient CSS removed. Fonts: Instrument Sans (variable 400–700) + IBM Plex Mono 400/500/600, `latin` + `latin-ext`, `display: swap`; Geist removed.

**Motion.** One `Reveal` observer (reveal, stagger, wipe, count-up in one rAF loop, 350 ms fallback after load and after scroll). Loops (`data-loop`) pause off-screen, in a hidden tab and during scroll; JS timers use one `useActive` hook (in view + tab visible + no reduced motion + after load/idle). Only transform and opacity animate.

**Components.** Atoms: Button/ButtonLink (primary, ink, outline, sm), Label, Tag, Seg, Chip, TextLink, SwissFlag. Molecules: SectionHeader, PageHero + Breadcrumbs, StatCard (bar, before/after, 12-month strip, ring, dot matrix, rows), CaseCard, BlogCard, Author, TeamCard, LogoTile, LogoMarquee, ListDetail, Accordion, FaqSearch, Pagination, AuditForm (react-hook-form → existing `/api/contact`), LanguageSwitcher (segmented, real next-intl switch). Organisms: Navbar (sticky, blur, burger dialog ≤ 860 px with focus trap and Esc), Footer (free-audit block + five columns).

**Pages.**
- **Home** — 19 sections in the README order; live agent log, language tagline, chat demo with EN/DE/FR/IT tabs, response race, gantt scrubber, calculator, list–detail FAQ (FAQPage JSON-LD added).
- **Moved from home** — Pricing + AgentVsHire → `/pricing`; WhereWeSayNo → `/use-cases`; Integrations → `/services`; Products → `/products`.
- **Services, service detail, Solutions (all), Use cases (new route).**
- **Projects (`/cases`)** with sector filter, case detail.
- **About** (timeline), **Team** (discipline filter, no country).
- **Blog** (category filter, pagination line, author on cards), **article** (author box, `BlogPosting` JSON-LD with Person author).
- **FAQ (new route)** with search, all answers server-rendered, FAQPage JSON-LD, added to sitemap and footer.
- **Contact** (only page besides the footer with contact details).
- **Industries, Technologies, Locations** (+ detail), **Products**, **Pricing**, **legal pages**, **404**.
- Every inner page has visible breadcrumbs and `BreadcrumbList` JSON-LD.

## Known TODOs

1. **Translations.** All `ui.*` keys in `messages/de.json`, `fr.json`, `it.json` are English copies (TODO-translate). Most site copy is still hard-coded English in components, as before.
2. **LCP / home Performance.** See the table above. A framework-level change would be needed: fewer client islands in the shared layout, or partial prerendering.
3. **Sitemap locales.** `localePrefix: 'never'` means one URL per page for all four locales. The sitemap lists each URL once; hreflang alternates still point to the same URL, as before.
4. **Imprint.** It still contains the placeholder `CHE-XXX.XXX.XXX MWST` (existing copy, not changed).
5. **`contact/layout.tsx`.** A comment still says the page is a client component; it is now a server component.
6. **Google Maps iframe on `/contact`.** It is blank in headless screenshots; check it in a real browser.
7. **Use-case tour.** The prototype's per-case "tour" detail has no copy in the repo, so it was not built.

## Commits

```
c1e077b docs(redesign): add 2026 design system handoff and decisions log
4e8f701 feat(redesign): foundation — 2026 tokens, Tailwind theme, fonts, reveal/motion runtime
3d4a47d feat(redesign): atoms — Button, Label, Tag, Seg, Chip, TextLink
68df856 feat(redesign): molecules — section head, stat/case/blog/team cards, logos, list-detail, pagination, audit form, language switcher
d0a593c feat(redesign): header with burger dialog, footer with free-audit block
e1134c6 feat(redesign): home page — 19 sections in approved order, …; move pricing/agent-vs-hire/where-we-say-no/integrations/products out of home
b21dc9c feat(redesign): PageHero and Breadcrumbs (with BreadcrumbList JSON-LD)
a41e2bb chore(redesign): drop geist, point obsolete DESIGN.md to the 2026 system
8751f9a chore(redesign): remove the geist dependency
2c279ea feat(redesign): services, use-cases (new route) and solutions pages
f54bcac feat(redesign): blog with filter, pagination and authors; article BlogPosting; new /faq with search; contact page
99403a8 feat(redesign): industries, technologies, locations, legal and 404 pages
b7bc5a0 feat(redesign): cases, about, team (discipline filter), products and pricing pages
b131cb6 fix(routing): serve the pricing page at /pricing, where /site-price already redirects
db1c85b chore(redesign): remove legacy atoms and unused deps (radix, cva, tw-animate), add ESLint flat config so pnpm lint runs
(final) perf/a11y fixes from QA + this report
```
