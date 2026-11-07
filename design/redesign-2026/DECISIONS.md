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
