# Trident redesign 2026: handoff for implementation

**Audience:** Claude Code, or any developer working in the `trident-landing` repo (Next.js 15 + Payload 3 + next-intl + Tailwind v4).

**Goal:** re-skin the existing site into the approved **white** design system. Keep the content, routes, CMS, i18n and SEO exactly as they are.

## What is in this folder

| File | What it is |
|---|---|
| `DESIGN-SYSTEM.md` | The rules: colour, type, spacing, alignment, components, motion, a11y, don'ts. **Read it first.** It replaces the old dark `DESIGN.md` in the repo root. |
| `tokens.css` | CSS variables and base component classes (buttons, labels, cards, tags, logo tile, inputs, grids, reveal/stagger/wipe/marquee animations, breakpoints). Drop it in as the foundation. |
| `prototypes/*.dc.html` | Approved page prototypes: Home, Services, UseCases, Projects, About, Team, Blog, FAQ, Contact. These are the visual source of truth. |

### How to read the prototypes

Each file is HTML plus one `<script type="text/x-dc">` holding a `Component` class.

- **Template syntax:** `{{ path }}` inserts a value, `<sc-for list as>` is a loop, `<sc-if value>` is a conditional, and `onClick="{{ fn }}"` is an event handler.
- **Data:** the arrays at the top of the script (`FEED`, `CASES`, `PROCESS`, `QUOTES`, …) show which data each section needs.
- **Styles:** in the prototypes they are inline. In the real site, express them through `tokens.css` classes and Tailwind, not inline styles.
- **Images:** the prototypes reference `img/...`. In the repo these are `public/images/{stock,team,clients,partners,blog}`, the same files.

## Ground rules

1. **Do not change copy.**
   - All text must keep coming from `messages/{en,de,fr,it}.json` and Payload.
   - English strings in the prototypes are taken from the live site. If a prototype string is missing from `messages/*`, add the key in EN and leave DE/FR/IT for translation, marked TODO.
   - **New strings added in the redesign** (stub `en.json` and mark them for translation):
     - "What happens next"
     - "Other / not sure yet"
     - "Didn't find your question?"
     - the agent-log events
     - "Search questions…"
     - the "Articles x–y of z" pagination line
2. **Keep the platform.** Routes, `generateMetadata`, JSON-LD, sitemap, Payload collections and next-intl routing stay. The language switcher must actually switch the locale through next-intl.
3. **Fonts.** Use Instrument Sans + IBM Plex Mono via `next/font/google`; `layout.tsx` already loads both. Remove Geist usage.
4. **Components first.** Build or restyle the atoms and molecules below, then the organisms, then the pages. Replace one-off inline styles.
5. **Numbers keep their labels.** Every case figure shows *measured* or *modelled* exactly as in the source.
6. **A11y and reduced motion** as described in `DESIGN-SYSTEM.md` §6–7. The IntersectionObserver reveal must have the 350 ms fallback so content never stays hidden.

## Build order

1. **Foundation.**
   - Import `tokens.css` from `src/app/(frontend)/trident.css`, or merge it there.
   - Map the tokens into Tailwind v4 `@theme`: colours, fonts, radius.
   - Delete dark-theme leftovers.
2. **Atoms.** `Button` (primary / ink / outline / sm), `Label`, `Tag`, `Seg`/`Chip`, `Link`.
3. **Molecules.**
   - `SectionHeader`: label + h2 + lead, with **one** optional action on the right, bottom-aligned.
   - `Card`, `StatCard` (with mini-visual variants), `LogoTile`, `LogoMarquee` (two rows)
   - `TeamCard`, `CaseCard` (image + overlay metric + before/after bars), `BlogCard` (with author)
   - `Pagination`, `ListDetail` (used by FAQ, use-case tour and agent capabilities)
   - `AuditForm`, `LanguageSwitcher`
   - `Reveal` (a client component that adds `.js-rv`, observes `.reveal`/`.stagger`/`.wipe`, and runs the count-up on `[data-count]`)
4. **Organisms.** `Navbar`, `Footer` (audit block + five-column grid), and the home sections below.
5. **Pages,** in this order: Home → Services → Use cases → Projects (`/cases`) → About → Team → Blog (+ `[slug]` with author) → FAQ (new route `/faq`, content from the home FAQ) → Contact.
6. **Pages without a prototype.** Apply the same system: `/site-price` (pricing), `/industries/[slug]`, `/technologies/[slug]`, `/locations/[slug]`, `/solutions/*`, `/products`, service/case/blog detail templates, legal pages. Use the same header, footer, section head, cards and spacing; do not invent new patterns.

## Home: section order and mapping to existing components

| # | Prototype section | Existing component | Notes |
|---|---|---|---|
| 1 | Hero + 4 stat cards | `Hero` | **Left column:** words reveal, mono tagline scramble (DE/FR/IT/EN demo), two CTAs. **Right column:** `public/images/stock/ai-agent.jpg` with a blue overlay, a floating live agent log (one coherent story: Valais Materials, Saturday evening) and a floating "conversations today" chip. **Below:** 4 stat cards with mini-visuals. No background grid. |
| 2 | The problem | `Problem` | 77 % and 3 % as 100-dot matrices with count-up. Four stat cards: 21× (bars), 3 channels (bars), 85 % (ring), 13 % (ring). Sources in mono. |
| 3 | What we do | `Services` | Cards with photos. The first card is wide (span 2). A dark "Stack" band spans the full row. |
| 4 | The AI agent | `Agent` + `AgentChat` | **Left:** list–detail of 3 capabilities. **Right:** dark chat with EN/DE/FR/IT conversation tabs (this is a demo, separate from the site locale), plus a CRM fields strip. |
| 5 | Response race | (new, in `Agent` or its own component) | Dark band. A button runs the agent (4 s) against the market median (>15 h). Labelled modelled. |
| 6 | Use cases | `UseCases` | 2-column cards: number column, title, description, and a wash "NEEDS" plate that is always visible. Head action: "All use cases". |
| 7 | Results | `Cases` | Three cards: photo wipe, overlay metric, tag (MEASURED), title, description, two before/after bar rows. Then three compact MODELLED cards. Head action: "All case studies". |
| 8 | Industries | `Industries` | A 4×2 grid of rank cards (#1–#8 with a decreasing blue bar). On hover the card fills ink with white text. No photo. |
| 9 | How we work | `Process` | A Gantt in a white panel. Day slider + Play. The days label sits **above** each bar in mono. The active stage is blue. |
| 10 | Calculator | `Calculator` | Ink section. Enquiries and minutes sliders, freed hours, FTE, and a verdict ("Worth an audit" / "Not yet" below 150). |
| 11 | Why us | `WhyUs` | A 3×2 grid of cards with glyph tiles. |
| 12 | Swiss by jurisdiction | `Swiss` | Small Swiss-flag glyph in the label, six checked items in two columns. No big cross graphic. |
| 13 | Team | `Team` | Eight people, 4:5 photos, name and role, no country. Head action: "Meet the team" → `/team`. |
| 14 | Clients + references | `Logos` + `References` | Two-row logo marquee inside the container, using black logos that turn into a blue tile with a white logo on hover. Below it a "More references on request" row of chips (country tag + name + note). No head button. |
| 15 | Testimonials | `Testimonials` | Dark. One big quote, prev/next, dots, auto-advance. |
| 16 | Partners and platforms | `Partners` | Compact: head on the left, a 4×2 logo-tile grid on the right. Below it a wash panel "What we are looking for" (four points, two columns). |
| 17 | FAQ | `Faq` | List–detail: six questions on the left, a dark answer panel on the right, and "Ask us directly". Head action: "All questions" → `/faq`. |
| 18 | Blog | `Blog` | Four cards with image wipe, date and title. Head action: "All articles" → `/blog`. |
| 19 | Footer | `Contact` + `Footer` | Free-audit block (H2 + "What happens next" on the left, form on the right, equal height) followed by the five-column footer. Contacts appear **only** here. |

**Not in the approved home prototype:** `AgentVsHire`, `Pricing`, `WhereWeSayNo`, `Integrations`, `Products`. Recommendation (confirm with the owner before deleting anything):

- `Pricing` + `AgentVsHire` → `/site-price`
- `WhereWeSayNo` → `/use-cases` (the prototype already has "Where we would not start")
- `Integrations` → `/services` or `/technologies`
- `Products` (8Move, TDSBot, document recognition) → `/cases` or `/products`

## Acceptance checklist

- [ ] Only tokens from `tokens.css` are used. There are no hard-coded colours outside them, and no Geist, indigo, gradients or pills.
- [ ] Every section head follows the label + h2 (+ lead) + ≤ 1 bottom-aligned ink action pattern. Labels have no numbers and no caps.
- [ ] Edges align to the container on every section, including marquees and footer lines.
- [ ] Layouts are checked at 1440, 1100, 860, 640 and 375 px: nothing is clipped, no horizontal scroll, and the hero stacks cleanly on tablet.
- [ ] The language switcher really changes the locale and never rotates by itself.
- [ ] Logos are visible in every state.
- [ ] The contact block appears only in the footer and on `/contact`.
- [ ] Every figure keeps its source and its measured/modelled label.
- [ ] Reveal never leaves content hidden (fallback works) and reduced motion is respected.
- [ ] All interactive elements are real buttons/links with visible focus. Lighthouse a11y ≥ 95.
- [ ] Blog has pagination and an author on cards and articles. Team has a discipline filter. FAQ has search.
- [ ] Copy is unchanged versus `messages/*` and the CMS. New keys are added to all four locale files, with TODO for translation.
