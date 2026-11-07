# Trident Software — Design System 2026 (white)

This system replaces the old dark-first `DESIGN.md` in the repo root. Where they differ, follow this one.

Visual reference: the HTML prototypes in `prototypes/`. Tokens and base component CSS: `tokens.css`.

---

## 1. Principles

1. **White site, dark accents.** The page background is white. Use `--alt` (#F6F7F8) for every second section, and dark sections (`--deep` / `--ink`) for 2–4 emphasis moments per page: response race, calculator, testimonials, footer.
2. **One accent colour.** Trident Blue `#2772E0` is the only accent. It is used for CTAs, numbers, active states and labels. The old gradient and indigo `#6366F1` are not used. Red appears only in the 16–18 px Swiss flag glyph.
3. **Show the product, not stock.** Illustrate with UI that the agent really produces: chat, CRM fields, QR-bill, live log, Gantt, before/after bars. Photos come from `public/images/stock` and are always secondary.
4. **Motion with a purpose.** Every animation either explains something (a log writing, numbers counting, bars filling, a timeline scrubbing) or gives feedback (hover, focus). Nothing loops for decoration, except the client-logo marquee and the soft hero blobs.
5. **Honest numbers.** Every figure keeps its source and its *measured* / *modelled* label.
6. **One system.** Use the same section head, button, card, label, spacing and hover everywhere. If a component is needed twice, it goes into `components/atoms|molecules`.

---

## 2. Colour

| Token | Hex | Use |
|---|---|---|
| `--ink` | #111318 | Text, dark buttons, ink sections |
| `--ink-2` | #4A4F57 | Secondary text |
| `--ink-3` | #6B7078 | Meta, captions, mono labels |
| `--line` | #E3E5E8 | Hairlines, card borders |
| `--line-2` | #C9CDD2 | Input and outline-button borders, stronger dividers |
| `--alt` | #F6F7F8 | Alternate section background, tiles, input background |
| `--blue` | #2772E0 | Primary CTA, big numbers, active state, focus ring |
| `--blue-d` | #1B57B8 | Primary hover, blue text on light (labels, numbers ≤ 18 px) |
| `--blue-l` | #8FB6F4 | Blue text on dark backgrounds only |
| `--wash` | #EEF3FD | Tag background, highlight panels, "NEEDS" plates |
| `--deep` | #0F1216 | Darkest sections, floating cards, footer |
| `--surface-d` | #171B20 | Cards and inputs inside dark sections |
| `--swiss-red` | #DA291C | Swiss flag glyph only |
| `--ok` | #1F9D55 | "Online / live" dot only |

**Contrast rules**
- Body text is `--ink` or `--ink-2`.
- Small text is never lighter than `--ink-3` on white.
- On dark backgrounds, use `#fff`, `rgba(255,255,255,.74)` or `.62` for meta.
- Never put `--blue` text on dark (it fails contrast). Use `--blue-l` instead.

---

## 3. Typography

- **Sans:** Instrument Sans 400/500/600/700, loaded as `--font-instrument-sans` via `next/font`.
- **Mono:** IBM Plex Mono 400/500/600, loaded as `--font-ibm-plex-mono`. Use it for labels, meta, numbers in UI widgets, tags and the language switcher.
- **Remove:** Geist is no longer used.

| Role | Size | Line height | Tracking | Weight |
|---|---|---|---|---|
| H1 | clamp(40px, 5.4vw, 76px) | 1.0 | −0.045em | 600 |
| H2 | clamp(32px, 3.9vw, 54px) | 1.03 | −0.04em | 600 |
| H3 / card title | 19–28px | 1.15–1.25 | −0.015 to −0.02em | 600 |
| Lead | clamp(16px, 1.35vw, 19px) | 1.6 | 0 | 400 |
| Body | 15px | 1.55 | 0 | 400 |
| Small | 13–14px | 1.45 | 0 | 400 |
| Section label | 13px mono | 1 | 0 | 500 |
| Meta / caption | 11–12px mono | 1.4 | 0 | 400–600 |
| Big stat | 40–96px | 0.9–1 | −0.05em | 600, colour `--blue` |

**Section label**
- 18 × 2 px blue rule, then the text in mono blue.
- **No numbering** ("01 · The problem" is forbidden) and **no uppercase**.
- Style it with CSS, never inline.

---

## 4. Layout and spacing

- **Container:** max-width 1280 px. Gutter `clamp(20px, 4.5vw, 64px)`.
- **Section padding:** `clamp(72px, 9vw, 128px)` top and bottom. Exceptions: compact bands (partners, race) use `clamp(56px, 6vw, 104px)`.
- **Head to content:** `clamp(36px, 4vw, 56px)`.
- **Grid gap:** 20 px for cards, 14–16 px for compact tiles, 24 px for text columns.
- **Radius:** 2 px for buttons, inputs and tags. 3 px for cards, panels and images. No pills, no 999 px radii.
- **Breakpoints:**
  - ≤ 1100 px (tablet): splits stack, 3- and 4-column grids become 2.
  - ≤ 860 px: nav links hide (use a burger), 2-column grids become 1.
  - ≤ 640 px (phone): all grids become 1, except `keep-2` (team, stats, logos).

**Alignment rules**
1. **Section head.** Label, H2 and optional lead sit on the left. At most **one** action sits on the right: a `btn--ink` such as "All articles", "All services", "All use cases", "Meet the team" or "All questions". It is **bottom-aligned** to the head block. Never add a second button.
2. **Edges.** Everything aligns to the container edges, including marquees, dividers and footer lines. Never let a border run into the gutter: put borders on inner elements, not on `.container`.
3. **Two-column blocks.** In form + text or list + detail layouts, both columns start at the H2 top and end at the same bottom (`align-items: stretch`).
4. **Contacts.** Email, phone and address appear **once**, in the footer. They also appear on the Contact page.

---

## 5. Components

| Component | Spec |
|---|---|
| **Header** | Sticky, 68 px, white at 86 % with a 14 px blur and a bottom hairline. Logo on the left. Nav: Services · Use cases · Projects · About · Blog · Contact (active item in ink, 600). On the right: language switcher (segmented EN·DE·FR·IT, wired to next-intl, **never auto-rotates**, current locale shown in ink) and a primary "Free audit" button. |
| **Primary button** | Blue. On hover, `--blue-d` sweeps left→right in 0.4 s and the arrow moves 5 px. |
| **Ink button** | Used for section-head actions. Ink background with a blue sweep on hover. |
| **Outline button** | Only next to a primary (hero "See results"), and for pagination prev/next. |
| **Card** | White, 1 px `--line` border, 3 px radius. On hover: lifts 4 px, shadow-hover, border `--line-2`, image scales 1.06, arrow moves 6 px. |
| **Tag** | Mono 11 px, 2 px radius. Three variants: blue (MEASURED), wash (MODELLED / category), ink (country). |
| **Logo tile** | 200 × 104 px, `--alt` background, logo forced black (`filter: brightness(0)`). On hover the tile turns blue and the logo white. Logos must stay visible in both states. |
| **Inputs** | `--alt` background with a 1 px `--line` border. Focus: blue border plus a 3 px wash ring. In dark sections use a `--deep` background. Each input has its own `<label>`. Choice chips always include an "Other / not sure yet" option and are optional. |
| **Stat card** | Mono source line, big blue number, mini-visual (bar, before/after, 12-month strip, ring, dot matrix) and a description. Never a plain black number. |
| **Accordion / list–detail** | Use list + detail rather than long accordions on the homepage (FAQ, use-case tour, AI-agent capabilities). The left list has numbers; the active item gets a wash background and a 3 px blue inset bar. The right panel is dark with an answer fade. |
| **Team card** | 4:5 photo (cut-out on a wash→line gradient), then name and role under a 2 px blue left rule. **No country.** |
| **Testimonials** | Dark section. One large quote (22–34 px), initials avatar, name and company. Prev/next buttons, dots, auto-advance every 7 s that stops after user interaction. |
| **Footer** | Deep background. Free-audit block: label above, H2 + "What happens next" (4 steps) on the left, form on the right. Below that a five-column grid: brand (logo, one-line description, CH/EU · revFADP · GDPR tags), Services, Company, Explore, Contact. Bottom row: © on the left, Privacy · Terms · Imprint · Cookies on the right. Hairlines align to the container. |
| **Pagination** | "Articles 1–6 of 11 · page 1 of 2" in mono, then ← Prev, numbered squares (active in ink), Next →. Disabled ends show at 40 % opacity. |
| **Author** | 34 px round photo, name (600) and role (ink-3). It appears on every blog card and on the article page. |

---

## 6. Motion

| Pattern | Spec |
|---|---|
| Reveal | Sections and blocks: opacity 0 → 1 and translateY 28 → 0 over 0.9 s with `--ease`, triggered by an IntersectionObserver (threshold 0.15). Add a fallback check every 350 ms so content never stays hidden. |
| Stagger | Children of a grid reveal one after another, 80 ms apart. |
| Image wipe | Case and blog images reveal top→down with `clip-path` over 1.2 s. |
| Count-up | Big numbers (77, 3, 21, 85, 13) count from 0 with easeOutCubic over 1.4 s when revealed. |
| Bars / rings | Before/after bars fill over 1.6 s. Rings draw over 1.8 s. The 100-dot matrix fills dot by dot, 12 ms apart. |
| Hero | Words slide up one by one, 70 ms apart. The logo mark draws its stroke, then fills. The tagline rotates through DE/FR/IT/EN with a mono "scramble" effect. This is a demo of the four languages, not a language switch. |
| Live log | A new row arrives every 2 s with a blue flash. Older rows fade out. It tells one coherent story of one Saturday evening for one client. |
| Marquee | Two logo rows moving in opposite directions (60 s / 70 s), edge fade, paused on hover. It scales to any number of clients. |
| Reduced motion | `prefers-reduced-motion` turns off every animation and shows all content immediately. |

---

## 7. Accessibility

- Use real `<button>`, `<a href>` and `<input>` + `<label>` elements. Never use clickable divs.
- Segmented controls and filters use `aria-pressed`. Tabs use `role="tablist"` / `aria-selected`. Accordions use `aria-expanded`. Pagination uses `aria-current="page"`.
- The focus ring is 2 px `--blue` with a 2 px offset on every interactive element.
- Decorative SVG gets `aria-hidden="true"`. Logos need meaningful `alt` text.
- Text contrast must be ≥ 4.5:1. The tokens above are chosen to pass; do not lighten them.

---

## 8. Don'ts

- No numbered section labels, and no all-caps labels.
- No gradients on buttons or text. No indigo. No pills.
- No grid or dot backgrounds behind the hero (they were removed in review).
- No country next to team members.
- No language auto-switching.
- Do not duplicate contacts outside the footer and the Contact page.
- No more than one action in a section head. Never full-bleed content next to contained content.
- Never use white logos on white, and no hover state that makes a logo invisible.
