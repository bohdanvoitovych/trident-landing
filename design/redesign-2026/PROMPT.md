# Task: re-skin the Trident site into the 2026 white design system (autonomous)

You are working in the `trident-landing` repo (Next.js 15 App Router, Payload 3, next-intl, Tailwind v4, Cloudflare via OpenNext). Implement the redesign described in `design/redesign-2026/` across the **whole** public site.

**Work autonomously. Do not ask me questions.**
- Every decision you need is in this file, `design/redesign-2026/README.md`, `design/redesign-2026/DESIGN-SYSTEM.md`, `design/redesign-2026/tokens.css` and the prototypes in `design/redesign-2026/prototypes/`.
- If something is still ambiguous, pick the option most consistent with the design system and log it in `design/redesign-2026/DECISIONS.md` (one line per decision, with the reason).
- Only stop if the build is broken and you cannot fix it.

---

## 0. Setup

1. Create a branch: `git checkout -b redesign-2026`. Commit after every numbered step below with a clear message. Do not push or deploy.
2. Read **all** of: `design/redesign-2026/README.md`, `DESIGN-SYSTEM.md`, `tokens.css`, every file in `prototypes/`, then `src/app/(frontend)/layout.tsx`, `styles.css`, `trident.css`, `src/components/**`, `messages/en.json`.
   - The old root `DESIGN.md` (dark theme) is **obsolete**. Ignore it, and at the end add one line at its top pointing to `design/redesign-2026/DESIGN-SYSTEM.md`.
3. The prototypes use a small template syntax: `{{ x }}` is a value, `<sc-for>` is a loop, `<sc-if>` is a conditional, `onClick="{{ fn }}"` is an event handler, and the data arrays live at the top of each `<script type="text/x-dc">`. Image paths `img/...` map to `public/images/...`.

## 1. Non-negotiables

- **Content:** do not change any copy.
  - Texts come from `messages/{en,de,fr,it}.json` and Payload.
  - New UI strings introduced by the redesign must be added as keys to **all four** locale files: EN text as given, DE/FR/IT copied from EN with a `TODO-translate` marker in `DECISIONS.md`. The new strings include "What happens next", "Other / not sure yet", "Didn't find your question?", "Search questions…", "Articles {from}–{to} of {total} · page {page} of {pages}", the agent-log lines and "Named references, available on request".
- **Platform:** keep every route, `generateMetadata`, JSON-LD, sitemap, robots, redirects, Payload collections and the next-intl routing.
- **Section placement on Home:** use exactly the 19-section order from README.
  - Sections that exist today but are not in the prototype (`AgentVsHire`, `Pricing`, `WhereWeSayNo`, `Integrations`, `Products`) are **moved, not deleted**:
    - `Pricing` + `AgentVsHire` → `/site-price`
    - `WhereWeSayNo` → `/use-cases` (as "Where we would not start")
    - `Integrations` → `/services`
    - `Products` → `/products`
  - Restyle them with the system.
- **Pages:** every page under `src/app/(frontend)` gets the new system: home, services (+ `[slug]`), solutions/*, use-cases, cases (+ `[slug]`), industries (+ `[slug]`), technologies (+ `[slug]`), locations (+ `[slug]`), products, site-price, about, team, blog (+ `[slug]`), contact, privacy, terms, imprint, cookies, not-found.
  - Add a new `/faq` route (content = full FAQ, with search) as in `prototypes/FAQ.dc.html`. Include it in the sitemap and the footer.
  - Pages without a prototype reuse the same header, footer, section head, cards, spacing and type. Do not invent new patterns.
- **Fonts:** Instrument Sans + IBM Plex Mono only, via `next/font/google` (already in `layout.tsx`), with `display: 'swap'`, `subsets: ['latin', 'latin-ext']` and only the weights used (400/500/600/700 sans, 400/500/600 mono). Remove `geist` imports and the dependency.

## 2. Implementation order

1. **Foundation.**
   - Bring `tokens.css` into `src/app/(frontend)/trident.css`. Expose the tokens in Tailwind v4 `@theme` (colours, fonts, radius 2/3 px).
   - Delete dark-theme and gradient leftovers from `styles.css`.
2. **Atoms.** `Button` (variants: primary, ink, outline; size sm), `Label`, `Tag` (blue/wash/ink), `Seg`, `Chip`, `TextLink`.
3. **Molecules.**
   - `SectionHeader` (label + h2 + optional lead + max one ink action, bottom-aligned)
   - `Card`, `StatCard` (mini-visual variants: bar, before/after, 12-month strip, ring, dot-matrix), `LogoTile`, `LogoMarquee` (two rows, opposite directions)
   - `TeamCard` (no country), `CaseCard` (image wipe + overlay metric + before/after bars), `BlogCard` (with author), `Pagination`
   - `ListDetail` (FAQ / use-case tour / agent capabilities), `AuditForm` (react-hook-form + the existing Resend route), `LanguageSwitcher` (segmented EN·DE·FR·IT, real next-intl switch, current locale highlighted, never auto-rotates)
   - `Reveal` (see §4)
4. **Organisms.** `Navbar` (sticky, blur, burger ≤ 860 px with an accessible dialog), `Footer` (Free-audit block with equal-height columns + five-column grid; contacts appear only here and on `/contact`), and the Home sections from the README table.
5. **Pages,** in this order: Home → Services → Use cases → Cases → About → Team → Blog (list with category filter + pagination + author; `[slug]` with author box) → FAQ → Contact → all remaining routes.
6. **Clean-up.** Remove unused components and CSS, run lint/typecheck, then go through §6.

## 3. Responsive (must be pixel-clean)

- **Breakpoints:** 1440 / 1280 / 1100 / 860 / 640 / 375.
- **Rules:** `split` and hero become one column ≤ 1100. 3- and 4-column grids become 2 ≤ 1100 and 1 ≤ 640, except `keep-2` (team, stats, logos, partners). Nav becomes a burger ≤ 860. All type uses the `clamp()` scale from the tokens.
- **Hero on tablet:** the image composition stacks under the text. The floating log card must never be clipped or overflow; give it a fixed max-width and keep it inside the container.
- **Overflow:** no horizontal scroll at any width (`overflow-x: clip` on the page root, plus checks on marquees and wide tables). All content edges align to the container.
- **Touch:** tap targets ≥ 44 px. Every hover effect has an equivalent focus-visible style. Do not rely on hover to reveal essential content (for example, the use-case "NEEDS" plate is always visible).
- **Long text:** check DE and FR (long words) at 375 px. Allow hyphenation (`hyphens: auto` with the correct `lang`) and make sure buttons and tags wrap gracefully.

## 4. Performance and animation budget

**Targets on mobile (Lighthouse, throttled):**

| Metric | Target |
|---|---|
| Performance | ≥ 90 |
| Accessibility / Best Practices / SEO | ≥ 95 |
| LCP | < 2.5 s |
| CLS | < 0.05 |
| INP | < 200 ms |
| Home JS (first load) | ≤ 130 kB gz |

**Architecture**
- Server Components by default. Only interactive islands are client components: hero log/tagline, language switcher, race, calculator, process scrubber, list–detail, filters, pagination, testimonials, form, burger.
- **No animation libraries** (no framer-motion, GSAP or Lottie). CSS transitions/animations plus one tiny shared `useInView` hook.

**Animation rules**
- Animate only `transform` and `opacity`. Never animate layout properties (`width`, `height`, `top`, `left`).
  - Bar fills use `transform: scaleX()` with `transform-origin: left`.
  - Rings use `stroke-dashoffset` on small SVGs only.
- One shared IntersectionObserver (`Reveal` provider) for `.reveal`, `.stagger`, `.wipe` and count-up.
  - Add a 350 ms fallback so nothing stays hidden.
  - Unobserve elements after they reveal.
  - Count-up runs once, with a single requestAnimationFrame loop.
- Every looping or timed animation **pauses when off-screen or when the tab is hidden**:
  - CSS loops (logo marquee, hero blobs, pulse, float): toggle `animation-play-state: paused` with a class set by IntersectionObserver.
  - JS timers (agent log, tagline scramble, testimonials autoplay, race, scrubber): stop them when their section leaves the viewport and on `visibilitychange`, and restart them on return.
- **During active scroll:**
  - pause the marquee and the hero blob animations with a passive scroll listener that adds `is-scrolling` to `<html>` and removes it 150 ms after the last scroll event (no `scroll-behavior` jank);
  - do not run new reveals more often than one frame (rAF-throttled).
- `will-change` only on elements actively animating, and remove it afterwards.
- Never use `backdrop-filter` beyond the sticky header.
- Hero blobs: use a single pre-blurred radial-gradient background instead of `filter: blur()`, or drop them on mobile.
- `prefers-reduced-motion: reduce` disables all motion and timers and shows the final state immediately.
- The marquee duplicates its list once (not more) and uses `translate3d`.

**Images**
- Always use `next/image` with correct `sizes`.
- Only the hero image gets `priority` + `fetchPriority="high"`. Everything else is lazy.
- Use AVIF/WebP via the Next image pipeline, check it works with OpenNext/Cloudflare, and keep the current loader if one exists.
- Explicit width/height or aspect-ratio boxes everywhere (no CLS).
- Logos are SVG where available. Team photos are ≤ 480 px wide.

**Other**
- Fonts: `display: swap`, only used weights; preload is handled by next/font.
- Third-party code: no new third-party scripts. The cookie banner must not block render.

## 5. SEO and accessibility (must not regress)

- **Metadata.** Keep and extend `generateMetadata` on every route: title, description, canonical, `alternates.languages` (hreflang for en/de/fr/it + x-default), Open Graph and Twitter. Add the same for `/faq`.
- **Structured data.** Keep the existing JSON-LD and add:
  - `FAQPage` on `/faq` and on the home FAQ;
  - `BlogPosting` with `author` (Person: Bohdan Voitovych) on articles;
  - `BreadcrumbList` on inner pages;
  - `Organization` / `LocalBusiness` (Sion address) unchanged.
- **Sitemap and robots.** Add `/faq` and every locale to the sitemap; keep robots.
- **Semantic HTML.** One `<h1>` per page and a logical h2/h3 order. Use `<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`. Lists are lists. Blockquotes are used for testimonials.
- **Text visibility.** The text inside interactive widgets must be present in the HTML for crawlers. Server-render the first state of the FAQ answers, use-case details and the agent chat; the client only toggles them.
- **Images.** Every image has meaningful `alt` text; decorative SVGs get `aria-hidden`.
- **Accessibility.**
  - Real buttons and links, labels on every input, a visible 2 px blue focus ring, and contrast ≥ 4.5:1 (the tokens already pass; do not lighten them).
  - ARIA: `aria-pressed` on segmented controls and filters, tabs with `role="tablist"`/`aria-selected`, `aria-expanded` on accordions, `aria-current` on pagination and the active nav item.
  - The burger menu traps focus and closes on Esc.

## 6. Verification (do this, then report)

1. `pnpm lint`, `pnpm tsc --noEmit` (or the project typecheck) and `pnpm build`: all must pass.
2. Start the app and use Playwright (or the existing test setup) to capture full-page screenshots of every route at 1440, 1100, 860 and 375 px in EN, plus DE at 375 px. Save them to `design/redesign-2026/qa/`.
3. Fix every clipping, overflow, misalignment and missing-image issue you find, and re-shoot.
4. Run Lighthouse (mobile) on `/`, `/services`, `/blog`, `/team` and `/faq`. Meet the §4 targets or document the reason in `DECISIONS.md`.
5. Check that `prefers-reduced-motion` shows all content, and that there is no CPU activity (DevTools Performance) when the page sits idle with every animated section scrolled out of view.
6. Finish with a short report in `design/redesign-2026/REPORT.md` covering what changed (by page), the decisions taken, Lighthouse scores, known TODOs (translations, etc.), and the list of commits.
