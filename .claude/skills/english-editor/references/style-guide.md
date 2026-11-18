# Trident English style guide (MIT Sloan / IMD register)

The reference voice is the editorial register of MIT Sloan Management Review and IMD (Lausanne): written for executives, argued from evidence, plain in vocabulary. Write in that style. Never copy their sentences.

## Reader

The reader owns or runs a company: CEO, COO, CFO, managing partner, head of operations. Usually a Swiss or European SME with 20–500 people. They read on a phone between meetings. They are not engineers. They decide whether to spend money and time on Trident.

What this reader wants from every paragraph:

1. What problem in my business does this solve?
2. What does it change, in numbers: time, cost, error rate, cash?
3. What does it cost me, how long, and what is the risk?
4. Why should I believe you?

Copy that answers none of these four questions gets cut or rewritten.

## How the register sounds

| Trait | In practice |
|---|---|
| Claim, evidence, implication | "Invoices took 75 minutes to process. After the change they take 12. The clinic now bills the same week." |
| Management vocabulary, used precisely | operating model, cost to serve, cycle time, payback period, trade-off, decision rights, throughput, working capital, margin, headcount, process owner, baseline |
| The business outcome comes before the technology | "Orders reach the warehouse without retyping" before "via an ERP integration". |
| Concrete subjects | "Your dispatchers", "the finance team", not "stakeholders" or "users". |
| Measured confidence | State what was done and measured. No superlatives. |
| Short paragraphs | 2–4 sentences. One idea per paragraph. |
| Varied sentence length | Mostly 12–22 words, with an occasional short one for emphasis. |

## Rules

1. **Active voice.** "We built the integration in six weeks", not "The integration was built".
2. **Numbers instead of adjectives.** "fast" → "in 24 hours"; "many projects" → "100+ projects". Use only numbers that already exist in the text or the repo. Never invent a figure, client, certification or result.
3. **Keep every fact.** Figures, names, dates, prices, client descriptions and legal terms (revFADP, LAMal, TARDOC, nDSG) stay exactly as written. Tests in `src/data/__tests__/` check some numbers against source PDFs.
4. **British spelling.** optimise, organisation, centre, programme (a plan), program (software), licence (noun), analyse, labour, behaviour, modelling. Keep the Swiss number format already used on the site (`35 %`, `CHF 12'000`) as it is.
5. **Sentence case** for headings, buttons and titles. Proper nouns and product names keep their capitals.
6. **Plain verbs.** use (not utilise), help (not facilitate), start (not commence), build (not architect), show (not showcase).
7. **One term per thing.** If a page calls it "the platform", it stays "the platform" on that page.
8. **Calls to action say what happens next.** "Book a 30-minute call" beats "Get started". Do not promise anything the site does not offer (for example a free audit) unless the original text already offers it.
9. **Length.** The edited string is no longer than the original. UI labels (nav, buttons, badges, table headers) stay within ±20 % of the original length, so the layout does not break.
10. **SEO phrases stay.** In `meta.title`, `meta.description`, H1/hero titles and slugs, keep the main search phrase of the original. Check `docs/seo/semantic-seed-trident.md` when unsure.

## Banned clichés (on top of humanizer-rules.md)

innovative solutions, cutting-edge, state-of-the-art, seamless / seamlessly, end-to-end (unless literal), best-in-class, world-class, next-generation, game-changer, revolutionise, transform your business, unlock, empower, robust, holistic, synergy, tailored solutions, one-stop shop, take it to the next level, in today's fast-paced world, digital transformation journey, ready to start your project?, we are passionate about.

## Do not change

- JSON keys, object keys, slugs, URLs, image paths, IDs, CSS classes.
- ICU placeholders and tags: `{count}`, `{name}`, `<b>…</b>`, `<link>…</link>`.
- Markdown structure in blog `content` (headings, lists, links). Edit the words inside.
- Quotes attributed to a person (testimonials). Fix only typos.
- Names of people, companies, products, tech (Next.js, SAP, Bexio).

## Before and after

**Hero subtitle**

Before: "Custom platforms, AI integrations & embedded systems — built for Swiss and European SMEs. Fixed-price contracts, revFADP compliance, and 100+ projects delivered since 2009."

After: "We build custom software, AI integrations and embedded systems for Swiss and European SMEs. Fixed prices, revFADP-compliant, and more than 100 projects delivered since 2009."

Why: active subject ("We build"), em dash removed, "&" replaced in running text, same facts.

**Section CTA**

Before: "Ready to start your project? Tell us about your challenge. We respond within 24 hours."

After: "Tell us what you want to fix in your operations. We reply within 24 hours."

Why: the question opener is a cliché, and "challenge" is vague. The rewrite adds no promise the original did not make.

**Case-study paragraph**

Before: "The platform transforms disconnected operations into a streamlined command center."

After: "Ordering, warehouse and delivery now run on one system, so a missed order shows up the same day instead of at month-end."

Why: "transforms", "streamlined", "command center" are empty; the rewrite names what changed for the operator. Use the second clause only if the source text supports it.
