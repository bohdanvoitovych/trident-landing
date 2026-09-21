# Trident Software — Design System

Swiss AI-native software engineering company. Dark-first, technical, trustworthy. No gradients for decoration — only for emphasis. No rounded pill shapes — rectangular with subtle radius. Clean, dense, data-forward like Linear or Vercel.

---

## Brand Identity

**Company**: Trident Software Sàrl, Sion, Valais, Switzerland  
**Positioning**: Swiss quality + AI-native engineering. Senior engineers only. Fixed budgets.  
**Tone**: Direct, technical, confident. No marketing fluff. Numbers over adjectives.  
**Aesthetic**: Dark SaaS, Swiss precision — think Linear meets a Swiss bank's digital arm.

---

## Color Palette

### Primary Colors

| Token | Hex | Usage |
|---|---|---|
| Trident Blue | `#2772E0` | Primary actions, links, icons, active states |
| Trident Indigo | `#6366F1` | Gradient endpoint, secondary accent |
| Gradient | `#2772E0 → #6366F1` | CTA buttons, hero text highlight, key metrics |

### Background Scale (dark-first)

| Token | Hex | Usage |
|---|---|---|
| `--background` | `#080C14` | Page background |
| `--card` / `section-alt` | `#0D1117` | Cards, alternate sections, footer |
| `--secondary` | `#111827` | Elevated surfaces, hover states |

### Text Scale

| Token | Hex | Usage |
|---|---|---|
| `--foreground` | `#F0F6FF` | Primary text |
| `--secondary-foreground` | `#CBD5E1` | Secondary text |
| `--muted-foreground` | `#8899B4` | Captions, labels, metadata |

### Border

| Usage | Value |
|---|---|
| Default border | `rgba(255, 255, 255, 0.07)` |
| Input border | `rgba(255, 255, 255, 0.10)` |
| Hover border (cards) | `border-primary/30` = `rgba(39,114,224,0.3)` |

---

## Typography

**Font stack**: Geist Sans (display + body) / Geist Mono (code, labels, tech stack badges)  
**Loaded via**: `geist` npm package → `GeistSans.variable` + `GeistMono.variable` on `<html>`

### Scale

| Role | Class | Size |
|---|---|---|
| Hero H1 | `text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]` | 48–72px |
| Section H2 | `text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight` | 30–48px |
| Card H3 | `font-semibold` or `font-semibold text-sm` | 14–16px |
| Body | `text-base leading-relaxed` | 16px |
| Subtitle/lead | `text-xl text-muted-foreground leading-relaxed` | 20px |
| Caption | `text-sm text-muted-foreground` | 14px |
| Meta/label | `text-xs text-muted-foreground` | 12px |

### Gradient Text

Use sparingly — only for the most important word/phrase in hero titles or key metrics.

```html
<span class="gradient-text">AI-Native</span>
```

CSS:
```css
.gradient-text {
  background: linear-gradient(135deg, #2772E0 0%, #6366F1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## Spacing & Layout

**Max content width**: `max-w-7xl` (1280px) with `px-4 sm:px-6 lg:px-8`  
**Section padding**: `py-20 md:py-28` (standard) / `py-16` (compact)  
**Hero padding**: `py-24 md:py-32 lg:py-40`  
**Card gap**: `gap-4` for grids  
**Border radius**: `rounded-xl` for cards, `rounded-lg` for inputs/buttons, `rounded-2xl` for CTA blocks

---

## Components

### Button

4 main variants:

```tsx
// Primary CTA — gradient fill, use for the ONE main action per section
<Button variant="gradient" size="xl">Get a Quote <ArrowRight /></Button>

// Secondary CTA — outlined, for secondary actions
<Button variant="outline" size="xl">View Cases</Button>

// Default — solid primary fill
<Button variant="default">Submit</Button>

// Ghost — no background, for nav/subtle actions
<Button variant="ghost">Cancel</Button>
```

Sizes: `sm` (h-8), `default` (h-10), `lg` (h-12), `xl` (h-14)

**Rule**: never more than one `gradient` button per section. Pair with one `outline`.

---

### Badge

```tsx
<Badge variant="blue">AI Services</Badge>    // section labels, service tags
<Badge variant="purple">Phase 3</Badge>      // status, secondary category
<Badge variant="green">Live</Badge>          // positive status
<Badge variant="amber">Beta</Badge>          // warning/in-progress
<Badge variant="secondary">Next.js</Badge>  // tech stack, neutral tags
```

**Rule**: section hero badges use `variant="blue"` with `className="mb-6 text-sm px-4 py-1.5"`.

---

### Glass Card

Default surface for all content cards:

```tsx
<div className="glass-card rounded-xl p-6">...</div>
```

CSS:
```css
.glass-card {
  background: rgba(13, 17, 23, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.07);
}
```

On hover (interactive cards): add `hover:border-primary/30 transition-all duration-300`

---

### Section Header

```tsx
<SectionHeader
  badge="What we do"           // optional — blue badge above title
  title="Services we offer"    // required
  titleGradient               // optional — applies gradient-text to title
  subtitle="..."              // optional — muted lead text below title
  center                      // optional — centers alignment
  className="mb-12"
/>
```

---

### Hero Section Pattern

Every page hero:
- `relative overflow-hidden py-24 md:py-32`
- `absolute inset-0 gradient-bg opacity-50` background layer
- Optional grid pattern overlay at `opacity-[0.03]`
- Blue badge → H1 → subtitle → CTA buttons → trust signals row

```tsx
<section className="relative overflow-hidden py-24 md:py-32">
  <div className="absolute inset-0 gradient-bg opacity-50" />
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <Badge variant="blue" className="mb-6 text-sm px-4 py-1.5">Section Name</Badge>
    <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-6 leading-[1.1] max-w-4xl">
      Title with <span className="gradient-text">Key Phrase</span>
    </h1>
    <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">Subtitle.</p>
    <div className="flex flex-wrap gap-4">
      <Button variant="gradient" size="xl" asChild><Link href="/contact">CTA <ArrowRight /></Link></Button>
      <Button variant="outline" size="xl" asChild><Link href="/cases">Secondary</Link></Button>
    </div>
  </div>
</section>
```

---

### Alternating Sections

Alternate between `bg-background` (`#080C14`) and `section-alt` (`#0D1117`):

```
Hero         → bg-background (with gradient-bg overlay)
Stats bar    → section-alt + border-y border-border
Services     → bg-background
Cases        → section-alt
Trust/About  → bg-background
CTA          → section-alt
```

---

### CTA Block (bottom of page)

```tsx
<section className="py-20 section-alt">
  <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
    <div className="glass-card rounded-2xl p-10 glow-blue">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Title</h2>
      <p className="text-muted-foreground mb-8 text-lg">Subtitle.</p>
      <Button variant="gradient" size="xl" asChild>
        <Link href="/contact">CTA text <ArrowRight size={18} /></Link>
      </Button>
    </div>
  </div>
</section>
```

---

### Stats Bar

```tsx
<section className="border-y border-border py-10 section-alt">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-4xl font-bold gradient-text">{stat.value}</p>
          <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

### Icon Treatment

Icons from `lucide-react`. In cards:

```tsx
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
  <Icon size={16} className="text-primary" />
</div>
```

Sizes: `h-9 w-9` with `size={16}` icon (compact), `h-10 w-10` with `size={18}` (standard).

---

### Trust Signals Row (hero footer)

```tsx
<div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-muted-foreground">
  <div className="flex items-center gap-2">
    <MapPin size={14} className="text-primary" />
    Sion, Valais, Switzerland
  </div>
  <div className="flex items-center gap-2">
    <Shield size={14} className="text-primary" />
    ISO 27000 · nFADP
  </div>
</div>
```

---

## Grid Patterns

| Content | Grid |
|---|---|
| Services, industries | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4` |
| Cases | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4` |
| Stats | `grid-cols-2 md:grid-cols-4 gap-8` |
| Team breakdown | `grid-cols-2 gap-4` |
| Trust cards | `grid-cols-1 sm:grid-cols-2 gap-4` |
| Industries hub | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4` |
| 2-col (text + visual) | `grid-cols-1 lg:grid-cols-2 gap-12 items-center` |

---

## Navigation

**Navbar**: sticky, `bg-background/80 backdrop-blur-md`, h-16, max-w-7xl  
**Logo**: SVG icon (`/images/trident-icon-white.svg`) + "Trident" bold + "Software" muted  
**Nav links**: `text-sm text-muted-foreground hover:text-foreground`, active = `text-foreground bg-secondary`  
**Services**: dropdown with first 6 services + "All services →" link  
**CTA**: `Button variant="gradient" size="sm"` → `/contact`

**Footer**: 4-column grid — Brand+address / Services list / Company links / Resources+Legal

---

## Logo

SVG logo: `/public/images/trident-icon-white.svg`  
Two prongs: left = `rgba(255,255,255,0.5)`, right = `#2772E0`  
Use on dark backgrounds only. Black version: `/public/images/trident-logo-black.png`

---

## Animation

CSS-only (no Framer Motion). Available classes:

```css
.animate-fade-in-up   /* fadeInUp 0.5s ease-out — for hero content */
.animate-float        /* float 5s ease-in-out infinite — for decorative elements */
```

Interactive transitions: `transition-all duration-300` on cards, `transition-colors` on links/buttons.

**Rule**: `@media (prefers-reduced-motion: reduce)` — all animations disabled.

---

## Do / Don't

| Do | Don't |
|---|---|
| Dark backgrounds only | White/light pages |
| Numbers in stats (27+, 26, 8) | Vague adjectives ("great", "best") |
| `glass-card` for all content cards | Solid white card backgrounds |
| One `gradient` button per section | Multiple gradient buttons in a row |
| `gradient-text` on 1–3 words max | Full sentences in gradient |
| Icons from lucide-react | Emoji in UI |
| Swiss compliance signals in trust rows | Generic "trusted by" without specifics |
| `text-muted-foreground` for subtitles | Full-brightness text for secondary content |

---

## File Structure

```
src/
  app/(frontend)/
    styles.css              ← all design tokens
    page.tsx                ← Home
    about/page.tsx
    contact/page.tsx
    services/[slug]/page.tsx
    cases/[slug]/page.tsx
    industries/[slug]/page.tsx
    blog/[slug]/page.tsx
  components/
    atoms/button.tsx        ← Button (gradient/outline/default/ghost)
    atoms/badge.tsx         ← Badge (blue/purple/green/amber/secondary)
    molecules/SectionHeader.tsx
    molecules/ServiceCard.tsx
    molecules/CaseCard.tsx
    organisms/Navbar.tsx
    organisms/Footer.tsx
    templates/ServicePage.tsx
    templates/CasePage.tsx
    templates/IndustryPage.tsx
    templates/BlogPost.tsx
  data/
    services.ts             ← 8 services
    cases.ts                ← 6 cases
    industries.ts           ← 16 industries
    team.ts                 ← team members + stats
    blog.ts                 ← blog posts
public/
  images/
    trident-icon-white.svg  ← SVG logo for dark bg
    trident-logo-black.png  ← PNG wordmark for light bg
```
