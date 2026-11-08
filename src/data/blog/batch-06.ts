import type { BlogPostRecord } from './types'

export const posts: BlogPostRecord[] = [
  {
    slug: "microservices-vs-monolith-startup-mvp",
    image: "/images/stock/water-telemetry.jpg",
    title: "Microservices vs Monolith for Startup MVPs: Stop Defaulting to the Wrong One",
    excerpt: "Microservices are overengineered for most MVPs. But \"just build a monolith\" also fails teams that can't refactor later. Here's how to choose the right architecture for where you actually are.",
    content: `## The Microservices Mistake

Startups read about Netflix and Uber, attend talks about distributed systems, and build their MVP as 12 services communicating over Kafka. Six months later, they're debugging distributed transactions and can't ship features.

The pattern repeats because microservices solve real problems — just not the problems a 3-person team building an MVP actually has.

## What Problems Each Architecture Solves

| Problem | Monolith Solves It | Microservices Solves It |
|---|---|---|
| Fast feature iteration | Yes | No (deployment overhead) |
| Team autonomy at scale (10+ teams) | No | Yes |
| Independent scaling of components | No | Yes |
| Simple debugging and tracing | Yes | No |
| Technology diversity | No | Yes |
| Deployment simplicity | Yes | No |
| Organizational complexity | No | Yes (Conway's Law) |

The decisive observation: **the problems microservices solve are organizational, not technical**. They matter when you have enough teams that coordination becomes the bottleneck.

## The Modular Monolith: The Middle Path

The architecture we recommend for most Swiss startup MVPs is the **modular monolith**:

\`\`\`
[Single deployable unit]
│
├── /modules
│   ├── /auth          ← Clear boundary, own DB tables
│   ├── /billing       ← Clear boundary, own DB tables
│   ├── /notifications ← Clear boundary, own DB tables
│   └── /core          ← Shared domain logic
│
└── Single PostgreSQL instance with schema-per-module
\`\`\`

The rules:
- Modules communicate via function calls (not HTTP)
- No cross-module direct DB queries (only public APIs)
- Each module owns its database tables

This gives you monolith deployment simplicity today and a clear extraction path to services later — if you ever actually need it.

## When Microservices Are Justified from Day One

Genuinely justified for MVPs:
- **Separate security domains** — payment processing that must be isolated for PCI-DSS
- **Truly different scaling requirements** — video processing that needs GPU clusters separate from web API
- **Regulatory isolation** — FADP-sensitive data that must not touch the main application
- **Multiple client teams** — different companies building on your platform from day one

## The Extraction Path

If you build a modular monolith correctly, extracting a service later is a 2-week project, not a 6-month rewrite:

1. Identify the module with scaling pressure
2. Add an HTTP API in front of the module's public interface
3. Stand up the module as a separate service
4. Route traffic to the service
5. Remove the module from the monolith

This only works if you maintained the module boundaries throughout development. Skip that discipline and you've built a distributed monolith — the worst of both worlds.

## Practical Recommendation

Build a modular monolith. Enforce module boundaries in code review from day one. Plan your service extraction points but don't extract until you have load data proving you need it.

The Swiss engineering maxim applies: don't pay for infrastructure complexity you don't yet need.`,
    author: "Trident Software Team",
    authorRole: "Engineering Blog",
    publishedAt: "2026-02-19",
    readingTime: 7,
    tags: [
      "Architecture",
      "Microservices",
      "Monolith",
      "Startup",
      "Backend",
    ],
    relatedPosts: [
      "swiss-startup-tech-stack-2026",
      "postgresql-performance-tuning-mid-size-apps",
      "docker-compose-local-dev",
    ],
    faq: [
      {
        question: "Is it expensive to refactor a monolith into services later?",
        answer: "It depends entirely on internal discipline. A well-structured modular monolith with clean boundaries can be extracted service by service in weeks. A tightly-coupled monolith can cost months. The investment is in maintaining boundaries, not in the initial choice.",
      },
      {
        question: "At what team size should we consider moving to microservices?",
        answer: "When you have 3+ teams working on the same codebase and deployment coordination becomes the bottleneck for shipping. For most Swiss SMEs this never happens. For VC-backed scale-ups, consider at 50+ engineers.",
      },
      {
        question: "Does Next.js work well as a monolith backend?",
        answer: "For frontend-heavy applications, yes. Next.js API routes + Payload CMS (or similar) provide enough backend capability for most MVP use cases. When you need complex background jobs or heavy computation, add a separate service then.",
      },
      {
        question: "What about GraphQL federation for microservices?",
        answer: "GraphQL federation is the API gateway pattern for microservices at scale. It's powerful and also complex. Don't introduce it until you have the service complexity that justifies it — typically 5+ services with overlapping data models.",
      },
    ],
    translations: {
      de: {
        title: "Microservices vs. Monolith für Startup-MVPs: Hören Sie auf, standardmäßig die falsche Wahl zu treffen",
        excerpt: "Microservices sind für die meisten MVPs überentwickelt. Aber auch \"einfach ein Monolith bauen\" scheitert. So treffen Sie die richtige Architekturentscheidung.",
        meta: {
          title: "Microservices vs Monolith für Startup MVPs — Trident Software Blog",
          description: "Architekturentscheidung Microservices vs. modularer Monolith für Startup-MVPs: welche Probleme jede Architektur löst und der Extraktionspfad für später.",
        },
      },
      fr: {
        title: "Microservices vs monolithe pour les MVPs de startups : arrêtez de choisir par défaut",
        excerpt: "Les microservices sont sur-ingéniés pour la plupart des MVPs. Mais \"construire un monolithe\" échoue aussi. Voici comment choisir la bonne architecture.",
        meta: {
          title: "Microservices vs monolithe pour MVP — Trident Software Blog",
          description: "Décision d'architecture microservices vs monolithe modulaire pour MVP : quels problèmes chaque architecture résout et le chemin d'extraction pour plus tard.",
        },
      },
      it: {
        title: "Microservizi vs monolite per MVP di startup: smettila di scegliere quello sbagliato",
        excerpt: "I microservizi sono sovra-ingegnerizzati per la maggior parte degli MVP. Ma anche \"costruisci un monolite\" fallisce. Ecco come scegliere l'architettura giusta.",
        meta: {
          title: "Microservizi vs monolite per MVP — Trident Software Blog",
          description: "Decisione architetturale microservizi vs monolite modulare per MVP: quali problemi risolve ciascuna architettura e il percorso di estrazione per dopo.",
        },
      },
    },
    meta: {
      title: "Microservices vs Monolith for Startup MVPs — Trident Software Blog",
      description: "Why microservices are wrong for most MVPs, what problems they actually solve, the modular monolith middle path, and when services are genuinely justified from day one.",
    },
  },
  {
    slug: "tailwind-css-design-systems-product-companies",
    image: "/images/stock/water-device.jpg",
    title: "Tailwind CSS Design Systems for Product Companies: Beyond Utility Classes",
    excerpt: "Utility-first CSS scales surprisingly well when you build a proper design system on top of it. Here's how product teams use Tailwind tokens, component libraries, and constraints to ship consistent UI fast.",
    content: `## Why Tailwind Alone Is Not a Design System

Tailwind CSS gives you a constraint-based toolkit — spacing scale, color palette, typography — but a bag of utility classes is not a design system. Without structure, teams accumulate one-off colors, inconsistent spacing combinations, and components that diverge between engineers.

The good news: Tailwind's configuration model is exactly the right foundation for a proper design system. The work is in the layer above the utilities.

## Step 1: Lock Your Design Tokens in tailwind.config

Every design decision that should be consistent across the product becomes a named token:

\`\`\`typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0F4C81',
          secondary: '#E8F0FE',
          accent: '#FF6B2C',
        },
        surface: {
          base: '#FFFFFF',
          raised: '#F8FAFC',
          overlay: '#F1F5F9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      spacing: {
        'section': '5rem',
        'card': '1.5rem',
      },
    },
  },
}
\`\`\`

The rule: **never use raw hex values in components**. Use only token names. This makes global updates a one-line config change.

## Step 2: Semantic Component Variants

Avoid condition-heavy inline classes. Define a small set of variants per component using \`cva\` (class-variance-authority):

\`\`\`typescript
import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-[2px] font-medium transition-colors',
  {
    variants: {
      intent: {
        primary: 'bg-brand-primary text-white hover:bg-brand-primary/90',
        secondary: 'bg-surface-raised text-brand-primary border border-brand-primary/20',
        ghost: 'text-brand-primary hover:bg-brand-secondary',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: { intent: 'primary', size: 'md' },
  }
)
\`\`\`

This pattern keeps component APIs clean, eliminates ternary chains in JSX, and makes variants discoverable via TypeScript autocomplete.

## Step 3: The Component Audit Workflow

For existing codebases with Tailwind sprawl, run a component audit:

| Issue | Detection | Fix |
|---|---|---|
| Hardcoded hex colors | grep -r '#[0-9A-Fa-f]{6}' | Replace with token |
| Duplicate spacing combos | Audit with Tailwind Radar | Extract to component |
| Inconsistent border-radius | List all rounded-* usages | Standardize to 2-3 values |
| One-off font sizes | List all text-* overrides | Remove or add to config |

## Storybook as Living Documentation

Every component variant should have a Storybook story. For product companies, this is not optional — it's the contract between design and engineering. When a designer asks "does we have a secondary button with icon?", the Storybook answer is authoritative.

The pattern that works: generate stories automatically from your CVA variant definitions. One config object → one story per variant combination.

## Practical Results

Teams that follow this pattern consistently report: 40% faster component development after setup, near-zero UI inconsistencies in QA, and junior engineers shipping pixel-perfect components without senior review on every PR.`,
    author: "Trident Software Team",
    authorRole: "Engineering Blog",
    publishedAt: "2025-10-08",
    readingTime: 8,
    tags: [
      "Tailwind CSS",
      "Design System",
      "Frontend",
      "React",
      "UI",
    ],
    relatedPosts: [
      "nextjs-payload-cms-swiss-sme-websites",
      "react-native-vs-flutter-swiss-mobile",
      "websocket-realtime-nextjs",
    ],
    faq: [
      {
        question: "Should we use Tailwind CSS or CSS Modules for a large product?",
        answer: "Both scale well with discipline. Tailwind wins on speed for teams comfortable with utility classes and willing to invest in a proper config. CSS Modules win when you have strict isolation requirements or a team that prefers traditional CSS. The design system layer matters more than the tool.",
      },
      {
        question: "What is the best Tailwind component library to build on top of?",
        answer: "shadcn/ui has become the de facto standard for 2025–2026 React product development. It gives you unstyled primitives you own and can extend — unlike Chakra or MUI which fight you when you diverge from their defaults. Pair it with Radix UI primitives for accessibility.",
      },
      {
        question: "How do we enforce design tokens across a large team?",
        answer: "Three layers: (1) ESLint plugin tailwindcss with strict config to flag unknown classes. (2) Storybook as the single source of truth for component variants. (3) Design review in PRs for any new component that introduces classes not in the system.",
      },
      {
        question: "Can Tailwind handle dark mode properly?",
        answer: "Yes. Use the `dark:` variant systematically. The key is mapping your semantic tokens to light/dark values in your CSS variables and referencing those variables in tailwind.config — never hardcode two separate color sets in components.",
      },
    ],
    translations: {
      de: {
        title: "Tailwind CSS Design-Systeme für Produktunternehmen: Mehr als Utility-Klassen",
        excerpt: "Utility-first CSS skaliert gut, wenn man ein echtes Design-System darüber aufbaut. Wie Produktteams Tailwind-Tokens und Komponentenbibliotheken für konsistente UI nutzen.",
        meta: {
          title: "Tailwind CSS Design-System für Produkte — Trident Software Blog",
          description: "Schritt-für-Schritt-Anleitung zum Aufbau eines Tailwind CSS Design-Systems: Tokens, CVA-Varianten, Storybook-Dokumentation und Komponenten-Audit.",
        },
      },
      fr: {
        title: "Systèmes de design Tailwind CSS pour les entreprises produit : au-delà des classes utilitaires",
        excerpt: "Le CSS utility-first évolue bien avec un vrai système de design. Voici comment les équipes produit utilisent les tokens Tailwind pour une UI cohérente.",
        meta: {
          title: "Système de design Tailwind CSS — Trident Software Blog",
          description: "Guide pour construire un système de design Tailwind CSS : tokens, variantes CVA, documentation Storybook et audit de composants.",
        },
      },
      it: {
        title: "Sistemi di design Tailwind CSS per le aziende prodotto: oltre le classi utility",
        excerpt: "Il CSS utility-first scala bene con un sistema di design appropriato. Come i team di prodotto usano i token Tailwind per UI coerente.",
        meta: {
          title: "Sistema di design Tailwind CSS — Trident Software Blog",
          description: "Guida per costruire un sistema di design Tailwind CSS: token, varianti CVA, documentazione Storybook e audit componenti.",
        },
      },
    },
    meta: {
      title: "Tailwind CSS Design Systems for Product Companies — Trident Software Blog",
      description: "How to build a real design system on top of Tailwind CSS: design tokens in config, CVA component variants, Storybook documentation, and component audit workflow.",
    },
  },
  {
    slug: "api-gateway-patterns-b2b-integrations",
    image: "/images/stock/ai-agent.jpg",
    title: "API Gateway Patterns for B2B Integrations: What to Standardize and What to Leave Alone",
    excerpt: "B2B integrations fail when teams treat every partner as a custom project. The right API gateway pattern gives you standard auth, rate limiting, and observability while staying flexible for partner-specific schemas.",
    content: `## Why B2B Integrations Break at Scale

A single partner integration is straightforward. Ten partners is a maintenance nightmare. The failure pattern is consistent: each integration gets built by whoever was available, with whatever auth method the partner needed, with bespoke error handling that only the original developer understands.

An API gateway layer solves this by defining what must be standardized and explicitly allowing variation where it's necessary.

## The Four Layers of a B2B Gateway

\`\`\`
Partner System
      │
      ▼
[1. Auth & Identity Layer]   ← OAuth2, API keys, mTLS — standardized
      │
      ▼
[2. Rate Limiting & Quotas]  ← Per-partner limits, burst handling
      │
      ▼
[3. Transform & Route Layer] ← Schema normalization, partner-specific adapters
      │
      ▼
[4. Core Business Logic]     ← Your domain, clean of partner concerns
\`\`\`

Layers 1 and 2 must be identical for every partner. Layers 3 is where partner-specific adapters live. Layer 4 never sees partner-specific code.

## Authentication Patterns by Partner Type

| Partner Type | Recommended Auth | Notes |
|---|---|---|
| Large enterprise (SAP, Oracle users) | OAuth 2.0 Client Credentials | Standard, well-supported |
| Mid-market SaaS | API key + HMAC signature | Simple, auditable |
| Legacy systems (EDI, FTP) | mTLS with cert pinning | Required for financial data |
| Webhooks inbound | Shared secret + timestamp validation | Prevent replay attacks |
| Real-time bidirectional | WebSocket + JWT | For sub-100ms requirements |

## Rate Limiting That Partners Respect

Soft limits with clear feedback work better than hard blocks that cause partner support tickets:

\`\`\`typescript
// Return in response headers
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 847
X-RateLimit-Reset: 1716825600
X-RateLimit-Window: 3600

// On limit hit: 429 with Retry-After
{
  "error": "rate_limit_exceeded",
  "retry_after_seconds": 43,
  "limit": 1000,
  "window": "1h"
}
\`\`\`

Partners who receive clear rate limit headers build backoff logic themselves. Partners who receive opaque 429 errors open support tickets.

## The Adapter Pattern for Schema Normalization

Each partner gets an adapter that maps their schema to your canonical model:

\`\`\`typescript
interface OrderAdapter {
  toCanonical(partnerPayload: unknown): CanonicalOrder
  fromCanonical(order: CanonicalOrder): unknown
}

class SAPOrderAdapter implements OrderAdapter {
  toCanonical(payload: SAPOrderPayload): CanonicalOrder {
    return {
      id: payload.VBELN,
      customerId: payload.KUNNR,
      lineItems: payload.VBAP.map(item => ({
        sku: item.MATNR,
        quantity: Number(item.KWMENG),
        price: Number(item.NETWR),
      })),
    }
  }
}
\`\`\`

This pattern keeps your business logic clean and makes adding a new partner a matter of writing one adapter, not modifying core code.

## Observability Non-Negotiables

Every B2B API call must log: partner ID, endpoint, request latency, response status, payload size (not contents), and correlation ID. When a partner reports "your API returned an error Tuesday at 14:32," you need to find that log in 30 seconds.

Use structured logging with a consistent schema from day one. Retrofitting observability onto an undisciplined gateway is painful.`,
    author: "Trident Software Team",
    authorRole: "Engineering Blog",
    publishedAt: "2025-10-22",
    readingTime: 9,
    tags: [
      "API",
      "B2B",
      "Integration",
      "Backend",
      "Architecture",
    ],
    relatedPosts: [
      "microservices-vs-monolith-startup-mvp",
      "ai-agent-b2b-automation",
      "websocket-realtime-nextjs",
    ],
    faq: [
      {
        question: "Should we use a managed API gateway like Kong or AWS API Gateway?",
        answer: "For 5+ partners with serious traffic, yes — the operational overhead of building rate limiting, auth, and observability yourself outweighs licensing costs. Kong (self-hosted) or AWS API Gateway are both solid choices. For 1–4 partners, a thin middleware layer in your application is usually sufficient.",
      },
      {
        question: "How do we handle partner schema changes without breaking our system?",
        answer: "The adapter pattern is exactly for this. When a partner changes their schema, only their adapter changes — not your core business logic. Add schema versioning to the adapter: PartnerAdapterV1, PartnerAdapterV2. Maintain both until migration is complete.",
      },
      {
        question: "What is the right SLA to offer B2B partners for API availability?",
        answer: "99.9% uptime (8.7 hours downtime/year) is the standard B2B SLA. 99.5% is acceptable for non-critical integrations. If partners are integrating for revenue-critical flows, 99.9% with maintenance windows requires a proper load-balanced setup and database failover.",
      },
    ],
    translations: {
      de: {
        title: "API-Gateway-Muster für B2B-Integrationen: Was zu standardisieren ist",
        excerpt: "B2B-Integrationen scheitern, wenn jeder Partner als eigenes Projekt behandelt wird. Das richtige API-Gateway-Muster bietet Standard-Auth, Rate-Limiting und Flexibilität.",
        meta: {
          title: "API-Gateway für B2B-Integrationen — Trident Software Blog",
          description: "API-Gateway-Muster für B2B-Integrationen: Auth-Schichten, Rate Limiting, Adapter-Pattern für Schema-Normalisierung und Observability.",
        },
      },
      fr: {
        title: "Patterns de gateway API pour intégrations B2B : ce qu'il faut standardiser",
        excerpt: "Les intégrations B2B échouent quand chaque partenaire est traité comme un projet custom. Le bon pattern de gateway API donne auth, rate limiting et flexibilité.",
        meta: {
          title: "Gateway API pour intégrations B2B — Trident Software Blog",
          description: "Patterns de gateway API pour B2B : couches d'authentification, rate limiting, pattern adaptateur pour normalisation de schéma et observabilité.",
        },
      },
      it: {
        title: "Pattern API gateway per integrazioni B2B: cosa standardizzare",
        excerpt: "Le integrazioni B2B falliscono quando ogni partner viene trattato come un progetto personalizzato. Il giusto pattern gateway API offre auth, rate limiting e flessibilità.",
        meta: {
          title: "API gateway per integrazioni B2B — Trident Software Blog",
          description: "Pattern API gateway per B2B: layer di autenticazione, rate limiting, pattern adapter per normalizzazione schemi e osservabilità.",
        },
      },
    },
    meta: {
      title: "API Gateway Patterns for B2B Integrations — Trident Software Blog",
      description: "Standardize B2B integrations with the right API gateway pattern: auth layers by partner type, rate limiting feedback, adapter pattern for schema normalization, and observability requirements.",
    },
  },
  {
    slug: "load-testing-k6-swiss-ecommerce",
    image: "/images/stock/logistics.jpg",
    title: "Load Testing with k6 for Swiss E-Commerce: Preparing for Black Friday Traffic",
    excerpt: "k6 is the most developer-friendly load testing tool available in 2026. Here's how Swiss e-commerce teams use it to find capacity limits before peak sales events — and what fixes actually help.",
    content: `## Why Load Testing Gets Skipped

The most common answer when I ask e-commerce teams about load testing: "We planned to but never got around to it." The second most common: "We did a test once, it passed, and we moved on."

Neither approach prepares you for the spike when a newsletter goes out to 80,000 subscribers or a product goes viral on social media. Black Friday traffic for Swiss e-commerce typically peaks at 8–15× baseline — a number that surprises teams who haven't tested it.

## k6 Basics: Your First Load Test in 10 Minutes

Install and run:

\`\`\`bash
# Install k6
brew install k6

# Run a basic test
k6 run script.js
\`\`\`

A minimal checkout flow test:

\`\`\`javascript
import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
  stages: [
    { duration: '2m', target: 50 },   // Ramp to 50 users
    { duration: '5m', target: 50 },   // Hold at 50 users
    { duration: '2m', target: 200 },  // Spike to 200 users
    { duration: '5m', target: 200 },  // Hold peak
    { duration: '2m', target: 0 },    // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],  // 95% of requests under 500ms
    http_req_failed: ['rate<0.01'],    // Error rate under 1%
  },
}

export default function () {
  const res = http.get('https://your-shop.ch/products')
  check(res, { 'status is 200': (r) => r.status === 200 })
  sleep(1)
}
\`\`\`

## Critical Scenarios to Test for E-Commerce

| Scenario | Target Users | What to Watch |
|---|---|---|
| Product listing browse | 500 concurrent | CDN hit rate, DB query count |
| Product detail page | 300 concurrent | Image serving, related products query |
| Add to cart | 100 concurrent | Session handling, inventory lock |
| Checkout flow | 50 concurrent | Payment gateway latency, transaction safety |
| Search | 200 concurrent | Elasticsearch/Typesense load, query time |

Run these separately first, then combine them in a realistic mixed-traffic scenario (70% browse, 20% product detail, 7% cart, 3% checkout).

## What Actually Fixes Performance Under Load

After load testing 12 Swiss e-commerce platforms, the bottlenecks are predictable:

1. **N+1 queries** — Product listings that hit the DB once per product. Fix: eager load with joins.
2. **Session store saturation** — Redis connections exhausted at 200+ concurrent users. Fix: connection pooling.
3. **Synchronous image processing** — Resizing on upload, not ahead of time. Fix: pre-generate all sizes.
4. **No CDN for static assets** — Every JS/CSS/image served from the app server. Fix: Cloudflare or Fastly.
5. **Missing database indexes** — Category + price + availability filter queries doing full table scans. Fix: composite indexes.

## Swiss Hosting Considerations

Swiss data residency requirements affect architecture choices. Cloudflare has a Swiss data localization option. AWS Zurich (eu-central-2) and Exoscale (Lausanne/Geneva) are the primary Swiss cloud options. Load test against production or a staging environment in the same region — latency from Zurich to Frankfurt is real and will affect your numbers.

## Setting Pass/Fail Criteria

Define thresholds before the test, not after:
- p(95) response time < 500ms for product pages
- p(99) response time < 2,000ms for checkout
- Error rate < 0.1% at peak load
- Zero 5xx errors during steady state

If your system fails these under test, you have weeks to fix it before the actual event.`,
    author: "Trident Software Team",
    authorRole: "Engineering Blog",
    publishedAt: "2025-11-05",
    readingTime: 8,
    tags: [
      "Load Testing",
      "k6",
      "E-Commerce",
      "Performance",
      "Switzerland",
    ],
    relatedPosts: [
      "postgresql-performance-tuning-mid-size-apps",
      "docker-compose-local-dev",
      "automated-testing-pyramid-small-teams",
    ],
    faq: [
      {
        question: "How is k6 different from JMeter or Locust?",
        answer: "k6 uses JavaScript for test scripts (familiar to most web developers), has excellent CLI output, and integrates natively with Grafana for visualization. JMeter has more plugins but an outdated XML-based config. Locust uses Python and is fine for Python teams. For JavaScript/TypeScript shops, k6 is the fastest to adopt.",
      },
      {
        question: "Should we load test against production or staging?",
        answer: "Staging if it matches production infrastructure. The most common mistake is load testing a staging environment with 1/4 the RAM and a shared database — the results are meaningless. Either match your staging infrastructure or test against production with a feature flag limiting the test traffic.",
      },
      {
        question: "What is a realistic baseline for a Swiss e-commerce site?",
        answer: "Swiss online retail typically sees 2–5 concurrent users per 1,000 monthly visitors during normal hours. Black Friday peaks at 8–15× baseline. If your shop has 50,000 monthly visitors, test to 750 concurrent users minimum for Black Friday readiness.",
      },
      {
        question: "How do we test without affecting real users or orders?",
        answer: "Use a dedicated test account with test products at CHF 0.01 price and a sandbox payment gateway. Tag all test sessions with a header and filter them from analytics. Run tests between 02:00–05:00 CET to minimize real user impact.",
      },
    ],
    meta: {
      title: "Load Testing with k6 for Swiss E-Commerce — Trident Software Blog",
      description: "How Swiss e-commerce teams use k6 for load testing: test scenarios for checkout flows, common performance bottlenecks, Swiss hosting considerations, and pass/fail thresholds.",
    },
  },
  {
    slug: "typescript-migration-legacy-codebases",
    image: "/images/stock/iot-device.jpg",
    title: "TypeScript Migration Strategies for Legacy Codebases: The Incremental Path That Works",
    excerpt: "Rewriting everything at once fails. The incremental TypeScript migration — strict mode boundary by boundary — is how real teams ship the migration without stopping feature development.",
    content: `## Why Big-Bang TypeScript Migrations Fail

The appeal of a dedicated "TypeScript sprint" is real: two weeks, convert everything, done. In practice, a 50K-line JavaScript codebase takes 3–6 months of dedicated effort to migrate properly. During that time, features pile up in a branch that diverges from main, merge conflicts multiply, and the team loses momentum.

The incremental approach is harder to plan but consistently more successful.

## Phase 1: Setup Without Breaking Anything

Start with the most permissive configuration possible:

\`\`\`json
// tsconfig.json — Phase 1 (permissive)
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowJs": true,
    "checkJs": false,
    "strict": false,
    "noEmit": true,
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["src/**/*"]
}
\`\`\`

With \`allowJs: true\` and \`checkJs: false\`, TypeScript compiles your JS files without complaining. You can now migrate file by file, renaming \`.js\` to \`.ts\` and adding types as you go.

## Phase 2: Prioritize High-Value Files First

Not all files benefit equally from types. Migrate in this order:

| Priority | Files | Reason |
|---|---|---|
| 1 (highest) | API clients, HTTP layer | Types catch entire classes of runtime errors |
| 2 | Data models, domain types | Shared types propagate benefits across codebase |
| 3 | Utility functions | High reuse → types help many callers |
| 4 | React components (props) | PropTypes replacement, better DX |
| 5 (lowest) | Config files, scripts | Low leverage, migrate last |

## The \`any\` Budget

Allow yourself a controlled use of \`any\` during migration — but track it:

\`\`\`bash
# Count any usages — set a budget and reduce it each sprint
grep -r ': any' src --include="*.ts" --include="*.tsx" | wc -l
\`\`\`

Start with however many you have, and require that each PR either reduces the count or holds it flat. Never allow PRs that increase it.

## Phase 3: Tighten Strictness Boundary by Boundary

Once 80% of files are TypeScript, enable strict options incrementally:

\`\`\`json
// tsconfig.json — Phase 3 (tightening)
{
  "compilerOptions": {
    "strictNullChecks": true,      // Enable first — catches most bugs
    "noImplicitAny": true,         // Enable second
    "strictFunctionTypes": true,   // Enable third
    "strict": true                 // Full strict — final goal
  }
}
\`\`\`

Enable one option, fix all errors it reveals, commit, repeat. Don't enable two options simultaneously — the error count explodes and the team loses confidence.

## Common Patterns for Hard-to-Type Code

**Third-party libraries without types:**
\`\`\`bash
npm install --save-dev @types/lodash @types/express
# If no @types available:
echo 'declare module "legacy-lib"' > src/types/legacy-lib.d.ts
\`\`\`

**Dynamic object shapes (config, API responses):**
Use \`unknown\` + type guards instead of \`any\`:
\`\`\`typescript
function isUserObject(val: unknown): val is { id: string; email: string } {
  return typeof val === 'object' && val !== null &&
    'id' in val && 'email' in val
}
\`\`\`

## Realistic Timeline

For a 50K-line JavaScript codebase with a 2-developer team:
- Phase 1 setup: 1 day
- Phase 2 (80% file migration): 6–10 weeks at 20% sprint capacity
- Phase 3 (strict mode): 4–6 weeks
- Total: 10–16 weeks without stopping feature work

The teams that succeed treat it as ongoing hygiene, not a project with a deadline.`,
    author: "Bohdan Voitovych",
    authorRole: "Project Manager, Trident Software",
    publishedAt: "2025-11-19",
    readingTime: 9,
    tags: [
      "TypeScript",
      "JavaScript",
      "Migration",
      "Frontend",
      "Engineering",
    ],
    relatedPosts: [
      "nextjs-payload-cms-swiss-sme-websites",
      "automated-testing-pyramid-small-teams",
      "gitlab-cicd-small-engineering-teams",
    ],
    faq: [
      {
        question: "Should we use strict: true from the start?",
        answer: "For a greenfield project, yes — start strict and never relax it. For a migration, no — start permissive and tighten incrementally. Enabling strict: true on a 50K-line JavaScript codebase will produce thousands of errors and kill momentum.",
      },
      {
        question: "How do we handle third-party libraries that don't have TypeScript types?",
        answer: "Check DefinitelyTyped first (npm install @types/package-name). If no community types exist, write a minimal declaration file (declare module \"package-name\") that types only the functions you actually use. Do not use @ts-ignore — it hides future breakage.",
      },
      {
        question: "What TypeScript version should we target in 2026?",
        answer: "TypeScript 5.x — specifically 5.5 or later for the improved type narrowing and decorator support. Avoid pinning to a minor version; TypeScript patch releases are safe to update continuously.",
      },
      {
        question: "Is a TypeScript migration worth the investment for a stable legacy app?",
        answer: "For apps that are actively developed: yes, strongly. For apps in pure maintenance mode with no planned features: the ROI is lower. The primary value comes from catching errors during development, not after migration is complete.",
      },
    ],
    translations: {
      de: {
        title: "TypeScript-Migrationsstrategie für Legacy-Codebasen: Der inkrementelle Weg",
        excerpt: "Alles auf einmal umzuschreiben scheitert. Die inkrementelle TypeScript-Migration — Strict-Mode Grenze für Grenze — ermöglicht die Migration ohne Feature-Stopp.",
        meta: {
          title: "TypeScript-Migration Legacy-Codebasis — Trident Software Blog",
          description: "Inkrementelle TypeScript-Migrationsstrategie: permissive Konfiguration, Datei-Priorisierung, any-Budget und schrittweise Strict-Mode-Aktivierung.",
        },
      },
      fr: {
        title: "Stratégies de migration TypeScript pour bases de code legacy : la voie incrémentale",
        excerpt: "Tout réécrire d'un coup échoue. La migration TypeScript incrémentale — boundary par boundary en mode strict — permet de migrer sans arrêter le développement.",
        meta: {
          title: "Migration TypeScript legacy — Trident Software Blog",
          description: "Stratégie de migration TypeScript incrémentale : configuration permissive, priorisation des fichiers, budget any et activation progressive du mode strict.",
        },
      },
      it: {
        title: "Strategie di migrazione TypeScript per codebase legacy: il percorso incrementale",
        excerpt: "Riscrivere tutto in una volta fallisce. La migrazione TypeScript incrementale — boundary per boundary in strict mode — permette la migrazione senza fermare le feature.",
        meta: {
          title: "Migrazione TypeScript legacy — Trident Software Blog",
          description: "Strategia di migrazione TypeScript incrementale: configurazione permissiva, priorità dei file, budget any e attivazione progressiva dello strict mode.",
        },
      },
    },
    meta: {
      title: "TypeScript Migration for Legacy Codebases — Trident Software Blog",
      description: "Incremental TypeScript migration strategy that works: permissive Phase 1 setup, file prioritization by value, any budget tracking, and strict mode activation in stages.",
    },
  },
  {
    slug: "swiss-startup-tech-stack-2026",
    image: "/images/stock/b2b-portal.jpg",
    title: "Swiss Startup Tech Stack Recommendations 2026: What We'd Choose Today",
    excerpt: "After delivering 30+ projects for Swiss startups and SMEs, here's the technology stack we recommend for new projects in 2026 — and the reasoning behind each choice.",
    content: `## Why Stack Choices Matter More for Small Teams

A large company can afford to carry a framework that has been superseded. A 5-person startup cannot. Tech debt in the wrong stack compounds: hiring gets harder, security patches get skipped, and integrations with modern tools become painful.

These recommendations are for Swiss startups and SMEs building in 2026, with teams of 2–15 engineers.

## The Core Stack We Recommend

| Layer | Recommendation | Alternatives | Avoid |
|---|---|---|---|
| Frontend framework | Next.js 15 | Remix, SvelteKit | Create React App (unmaintained) |
| UI library | shadcn/ui + Radix | Mantine | Chakra UI (performance issues) |
| Styling | Tailwind CSS 4 | CSS Modules | Styled-components (bundle size) |
| Backend | Next.js API routes / Hono | Fastify | Express (legacy, slow ecosystem) |
| ORM | Drizzle ORM | Prisma | Raw SQL without ORM for new projects |
| Database | PostgreSQL 16 | SQLite (small projects) | MySQL for new projects |
| Auth | Better Auth / Auth.js | Clerk (hosted) | Roll your own |
| File storage | Cloudflare R2 | AWS S3 | Local filesystem in production |
| Email | Resend | Postmark | SendGrid (pricing complexity) |
| CMS (if needed) | Payload CMS 3 | Sanity | WordPress (security surface) |

## Mobile: React Native or Flutter?

For Swiss apps requiring both iOS and Android:
- **React Native (Expo)** — for web teams extending to mobile. Code sharing with Next.js front-end.
- **Flutter** — for mobile-first products requiring pixel-perfect custom UI.

We lean React Native for 70% of projects — the web team can contribute, and Expo's managed workflow has removed most pain points.

## Infrastructure for Swiss Compliance

Swiss data residency is a real requirement for healthcare, finance, and public sector work:

- **Cloud:** AWS eu-central-2 (Zurich) or Exoscale (Swiss-owned)
- **CDN:** Cloudflare with Swiss data localization, or Fastly
- **Deployment:** Docker Compose + Kamal for small teams, ECS or Kubernetes for larger
- **CI/CD:** GitHub Actions or GitLab CI — both are fine

## AI Integration in 2026

Every new product should have an AI integration plan. Our default recommendation:

\`\`\`
API calls → Anthropic Claude 3.5 Sonnet (primary)
Embeddings → OpenAI text-embedding-3-small
Vector DB → pgvector (in existing PostgreSQL) or Qdrant
On-premise → Ollama + Llama 3.3 for nFADP-sensitive data
\`\`\`

## What We've Stopped Recommending

- **GraphQL for new projects** — REST + tRPC covers 95% of use cases with less complexity
- **Kubernetes for teams under 10** — operational overhead is not worth it
- **Supabase as primary database** — vendor lock-in risk for core data
- **Vercel for Swiss compliance projects** — data residency guarantees are limited

## Budget Estimates for a Swiss MVP

A typical B2B SaaS MVP with our recommended stack costs CHF 3,000–8,000/year in infrastructure:
- Hetzner or AWS (smallest production setup): CHF 80–200/month
- Cloudflare R2 storage: CHF 5–20/month
- Resend email: CHF 0–20/month
- PostgreSQL (managed): CHF 20–80/month

Start small. Add capacity when you have traffic data proving you need it.`,
    author: "Bohdan Voitovych",
    authorRole: "Project Manager, Trident Software",
    publishedAt: "2025-12-03",
    readingTime: 10,
    tags: [
      "Switzerland",
      "Tech Stack",
      "Startup",
      "Next.js",
      "Architecture",
    ],
    relatedPosts: [
      "nextjs-payload-cms-swiss-sme-websites",
      "microservices-vs-monolith-startup-mvp",
      "react-native-vs-flutter-swiss-mobile",
    ],
    faq: [
      {
        question: "Is Next.js still the right choice for Swiss startups in 2026?",
        answer: "Yes for most teams. The App Router has matured, the ecosystem is large, and hiring is straightforward. The main caveat: avoid Vercel lock-in by testing self-hosted deployment early. Next.js standalone output runs on any Docker host.",
      },
      {
        question: "Should we use a monorepo from the start?",
        answer: "Only if you have 2+ separate deployable apps sharing code from day one (e.g., web app + mobile app + admin panel). For a single product, a monorepo adds tooling complexity without benefit. Add it when you actually need the code sharing.",
      },
      {
        question: "What is the most common Swiss startup tech mistake you see?",
        answer: "Over-engineering the infrastructure before validating the product. We regularly see 3-person teams with Kubernetes clusters and 8 microservices before they have 100 paying customers. Start simple, add complexity when you have the usage data that demands it.",
      },
      {
        question: "How do we handle Swiss German, French, and Italian localisation from day one?",
        answer: "Use next-intl for Next.js projects — it handles App Router well, supports RTL if needed, and has good TypeScript integration. Structure your message keys by feature domain, not by page — it scales better as the app grows.",
      },
    ],
    translations: {
      de: {
        title: "Tech-Stack-Empfehlungen für Schweizer Startups 2026: Was wir heute wählen würden",
        excerpt: "Nach 30+ Projekten für Schweizer Startups: der Technologie-Stack, den wir 2026 für neue Projekte empfehlen — mit Begründungen für jede Wahl.",
        meta: {
          title: "Tech-Stack für Schweizer Startups 2026 — Trident Software Blog",
          description: "Tech-Stack-Empfehlungen für Schweizer Startups 2026: Next.js, Drizzle, PostgreSQL, Tailwind, Auth.js — und warum wir bestimmte Alternativen vermeiden.",
        },
      },
      fr: {
        title: "Recommandations de stack technique pour startups suisses 2026 : notre choix aujourd'hui",
        excerpt: "Après 30+ projets pour des startups et PME suisses : la stack technologique recommandée pour 2026 — avec les raisons derrière chaque choix.",
        meta: {
          title: "Stack technique startups suisses 2026 — Trident Software Blog",
          description: "Recommandations stack tech pour startups suisses 2026 : Next.js, Drizzle, PostgreSQL, Tailwind, Auth.js — et pourquoi éviter certaines alternatives.",
        },
      },
      it: {
        title: "Raccomandazioni tech stack per startup svizzere 2026: cosa sceglieremmo oggi",
        excerpt: "Dopo 30+ progetti per startup e PMI svizzere: lo stack tecnologico consigliato per il 2026 — con le motivazioni per ogni scelta.",
        meta: {
          title: "Tech stack startup svizzere 2026 — Trident Software Blog",
          description: "Raccomandazioni tech stack per startup svizzere 2026: Next.js, Drizzle, PostgreSQL, Tailwind, Auth.js — e perché evitare certe alternative.",
        },
      },
    },
    meta: {
      title: "Swiss Startup Tech Stack Recommendations 2026 — Trident Software Blog",
      description: "Tech stack recommendations for Swiss startups in 2026: frontend, backend, database, auth, infrastructure, AI integration, and what we've stopped recommending.",
    },
  },
  {
    slug: "websocket-realtime-nextjs",
    image: "/images/stock/clinic.jpg",
    title: "WebSocket Real-Time Features in Next.js: A Practical Implementation Guide",
    excerpt: "Next.js API routes are stateless — they're the wrong abstraction for WebSockets. Here's the architecture that actually works: a standalone WebSocket server alongside your Next.js app, connected through a clean event bus.",
    content: `## The Next.js WebSocket Misconception

The first thing developers try: WebSockets in Next.js API routes. This fails because API routes are serverless functions — they spin up, handle a request, and terminate. A persistent WebSocket connection needs a persistent process.

The correct architecture separates concerns cleanly.

## Architecture Overview

\`\`\`
Browser
  │  WebSocket (ws://api.app.ch/ws)
  ▼
[WebSocket Server]   ← Standalone Node.js process (ws or Socket.io)
  │  Event bus (Redis pub/sub or in-memory EventEmitter)
  ▼
[Next.js App]        ← REST API for data, WebSocket server for events
  │
  ▼
[PostgreSQL + Redis]
\`\`\`

The Next.js app handles all business logic, auth, and data. The WebSocket server handles connection management and message routing. They communicate through Redis pub/sub (for multi-instance deployments) or in-memory EventEmitter (for single-instance).

## Setting Up the WebSocket Server

\`\`\`typescript
// server/websocket.ts
import { WebSocketServer, WebSocket } from 'ws'
import { createClient } from 'redis'

const wss = new WebSocketServer({ port: 3001 })
const redis = createClient({ url: process.env.REDIS_URL })

await redis.connect()
const subscriber = redis.duplicate()
await subscriber.connect()

// Subscribe to events from Next.js app
await subscriber.subscribe('app:events', (message) => {
  const event = JSON.parse(message)
  broadcastToRoom(event.roomId, event.payload)
})

const rooms = new Map<string, Set<WebSocket>>()

wss.on('connection', (ws, req) => {
  const roomId = new URL(req.url!, 'ws://localhost').searchParams.get('room')
  if (!roomId) { ws.close(); return }

  if (!rooms.has(roomId)) rooms.set(roomId, new Set())
  rooms.get(roomId)!.add(ws)

  ws.on('close', () => rooms.get(roomId)?.delete(ws))
})

function broadcastToRoom(roomId: string, data: unknown) {
  rooms.get(roomId)?.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data))
    }
  })
}
\`\`\`

## Publishing Events from Next.js

From any Next.js API route or server action:

\`\`\`typescript
// lib/events.ts
import { createClient } from 'redis'

const publisher = createClient({ url: process.env.REDIS_URL })
await publisher.connect()

export async function publishEvent(roomId: string, payload: unknown) {
  await publisher.publish('app:events', JSON.stringify({ roomId, payload }))
}

// Usage in API route
export async function POST(req: Request) {
  const order = await createOrder(await req.json())
  await publishEvent(\`user:\${order.userId}\`, {
    type: 'ORDER_CREATED',
    orderId: order.id,
  })
  return Response.json(order)
}
\`\`\`

## React Hook for WebSocket Connection

\`\`\`typescript
// hooks/useWebSocket.ts
import { useEffect, useRef, useState } from 'react'

export function useWebSocket(roomId: string) {
  const ws = useRef<WebSocket | null>(null)
  const [lastMessage, setLastMessage] = useState<unknown>(null)

  useEffect(() => {
    ws.current = new WebSocket(\`\${process.env.NEXT_PUBLIC_WS_URL}?room=\${roomId}\`)
    ws.current.onmessage = (e) => setLastMessage(JSON.parse(e.data))
    return () => ws.current?.close()
  }, [roomId])

  return lastMessage
}
\`\`\`

## Use Cases and Complexity Tradeoff

| Feature | WebSocket Needed? | Alternative |
|---|---|---|
| Live order status | Yes | Server-Sent Events (simpler) |
| Collaborative editing | Yes, bidirectional | — |
| Dashboard metrics | No | Polling every 30s |
| Chat | Yes | — |
| Notifications | No | Server-Sent Events |

Server-Sent Events (SSE) are often the better choice for one-directional updates. They work over standard HTTP, require no separate server, and have excellent browser support. Reach for WebSockets only when you need bidirectional real-time communication.`,
    author: "Trident Software Team",
    authorRole: "Engineering Blog",
    publishedAt: "2025-12-17",
    readingTime: 9,
    tags: [
      "WebSocket",
      "Next.js",
      "Real-Time",
      "Node.js",
      "Redis",
    ],
    relatedPosts: [
      "nextjs-payload-cms-swiss-sme-websites",
      "api-gateway-patterns-b2b-integrations",
      "docker-compose-local-dev",
    ],
    faq: [
      {
        question: "Can I use Socket.io instead of the raw ws library?",
        answer: "Yes. Socket.io adds automatic reconnection, room management, and fallback to long-polling — which simplifies the server code. The tradeoff is a heavier client bundle and a custom protocol that requires the Socket.io client library. For internal apps, Socket.io is fine. For public APIs where third parties might connect, prefer raw WebSockets.",
      },
      {
        question: "How do WebSockets work with Next.js deployed on Vercel?",
        answer: "They don't — Vercel's serverless infrastructure doesn't support persistent connections. You need a separate WebSocket server hosted on a traditional compute instance (EC2, Hetzner, Fly.io). This is a genuine reason to self-host Next.js if real-time features are core to your product.",
      },
      {
        question: "What is the difference between WebSockets and Server-Sent Events?",
        answer: "WebSockets are full-duplex (client sends and receives). Server-Sent Events are server-to-client only, but work over standard HTTP/2, require no separate server setup, and have built-in reconnection. Use SSE for notifications, dashboards, and status updates. Use WebSockets for chat, collaborative features, and bidirectional real-time data.",
      },
    ],
    translations: {
      de: {
        title: "WebSocket Real-Time-Features in Next.js: Ein praktischer Implementierungsleitfaden",
        excerpt: "Next.js API-Routen sind zustandslos — falsche Abstraktion für WebSockets. Die funktionierende Architektur: ein eigenständiger WebSocket-Server neben der Next.js-App.",
        meta: {
          title: "WebSocket Real-Time in Next.js — Trident Software Blog",
          description: "Praktische Implementierung von WebSocket-Features in Next.js: eigenständiger WebSocket-Server, Redis Pub/Sub, React Hook und SSE-Vergleich.",
        },
      },
      fr: {
        title: "Fonctionnalités temps réel WebSocket dans Next.js : guide d'implémentation pratique",
        excerpt: "Les routes API Next.js sont sans état — mauvaise abstraction pour WebSockets. L'architecture qui fonctionne : un serveur WebSocket standalone aux côtés de l'app Next.js.",
        meta: {
          title: "WebSocket temps réel dans Next.js — Trident Software Blog",
          description: "Implémentation pratique de WebSocket dans Next.js : serveur WebSocket standalone, Redis pub/sub, hook React et comparaison avec SSE.",
        },
      },
      it: {
        title: "Funzionalità real-time WebSocket in Next.js: guida pratica all'implementazione",
        excerpt: "Le API route di Next.js sono stateless — astrazione sbagliata per WebSocket. L'architettura che funziona: un server WebSocket standalone accanto all'app Next.js.",
        meta: {
          title: "WebSocket real-time in Next.js — Trident Software Blog",
          description: "Implementazione pratica WebSocket in Next.js: server WebSocket standalone, Redis pub/sub, React hook e confronto con SSE.",
        },
      },
    },
    meta: {
      title: "WebSocket Real-Time Features in Next.js — Trident Software Blog",
      description: "How to implement WebSocket real-time features alongside Next.js: standalone WebSocket server, Redis pub/sub event bus, React hooks, and when to use Server-Sent Events instead.",
    },
  },
]
