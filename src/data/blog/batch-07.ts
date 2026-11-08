import type { BlogPostRecord } from './types'

export const posts: BlogPostRecord[] = [
  {
    slug: "docker-compose-local-dev",
    image: "/images/stock/dispatch.jpg",
    title: "Docker Compose for Local Development Environments: The Setup That Eliminates \"Works on My Machine\"",
    excerpt: "A well-configured Docker Compose setup makes onboarding a new developer a 10-minute process and eliminates environment-related bugs entirely. Here's the configuration patterns that work for full-stack JavaScript projects.",
    content: `## The Problem Docker Compose Solves for Dev Teams

Every team that has relied on "install Node, install PostgreSQL, set environment variables" for onboarding knows the pain: 20% of developers have something wrong with their local setup at any given time. Database versions differ. Environment variables get mis-set. Ports conflict.

Docker Compose makes the local environment a first-class artifact, versioned alongside the code.

## A Complete docker-compose.yml for a Next.js + PostgreSQL Project

\`\`\`yaml
# docker-compose.yml
version: '3.9'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules   # Prevent overwrite
    environment:
      - DATABASE_URL=postgresql://dev:dev@postgres:5432/appdb
      - REDIS_URL=redis://redis:6379
      - NODE_ENV=development
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_started

  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: dev
      POSTGRES_PASSWORD: dev
      POSTGRES_DB: appdb
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U dev -d appdb"]
      interval: 5s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  maildev:
    image: maildev/maildev
    ports:
      - "1080:1080"   # Web UI
      - "1025:1025"   # SMTP

volumes:
  postgres_data:
\`\`\`

## The Dockerfile.dev That Enables Hot Reload

\`\`\`dockerfile
# Dockerfile.dev
FROM node:20-alpine
WORKDIR /app

# Copy package files first (better layer caching)
COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 3000
CMD ["pnpm", "dev"]
\`\`\`

The key: mount your source code as a volume so changes in the host immediately reflect inside the container without rebuilding.

## Key Patterns for Developer Experience

| Pattern | Config | Benefit |
|---|---|---|
| Health checks on DB | \`healthcheck\` + \`condition: service_healthy\` | App waits until DB is ready |
| Named volumes | \`postgres_data:/var/lib/postgresql/data\` | Data persists across \`docker compose down\` |
| Exclude node_modules | \`/app/node_modules\` anonymous volume | Host modules don't overwrite container |
| Local mail server | maildev/maildev | Test emails without real SMTP |
| .env.example | Documented in repo | Developers know what to set |

## One-Command Onboarding

With this setup, onboarding becomes:
\`\`\`bash
git clone repo
cp .env.example .env.local
docker compose up
# App is running at localhost:3000
\`\`\`

That's the target. No "install Homebrew, then install nvm, then install Node, then..."

## Production vs Development Compose Files

Use override files for production differences:

\`\`\`bash
# Development
docker compose up

# Production
docker compose -f docker-compose.yml -f docker-compose.prod.yml up
\`\`\`

The prod override removes volume mounts, sets NODE_ENV=production, and uses environment variables from secrets management rather than an .env file.

## Common Mistakes

**Port conflicts:** Always expose on host ports above 5000. PostgreSQL on 5432 conflicts with local installs. Solution: map to 15432 on the host.

**Volume permissions on Linux:** Files created inside containers may be owned by root. Fix with \`user: "\${UID}:\${GID}"\` in the service definition.

**Not version-pinning images:** \`postgres:latest\` will silently upgrade and break your setup. Always pin: \`postgres:16.3-alpine\`.`,
    author: "Trident Software Team",
    authorRole: "Engineering Blog",
    publishedAt: "2026-01-08",
    readingTime: 8,
    tags: [
      "Docker",
      "DevOps",
      "Local Development",
      "PostgreSQL",
      "Developer Experience",
    ],
    relatedPosts: [
      "gitlab-cicd-small-engineering-teams",
      "postgresql-performance-tuning-mid-size-apps",
      "swiss-startup-tech-stack-2026",
    ],
    faq: [
      {
        question: "Should the development Docker setup match production exactly?",
        answer: "Match the service versions (same PostgreSQL major version, same Redis version) but not the configuration. Dev uses simpler auth, local volumes, and exposed ports. Production uses secrets management, persistent storage solutions, and internal networking. The goal is consistent behavior, not identical configuration.",
      },
      {
        question: "Does Docker Compose slow down development compared to running services natively?",
        answer: "On Linux: minimal difference. On macOS: noticeable file sync latency with large projects. The fix is using Docker Desktop's VirtioFS (faster) and placing the project on the native filesystem rather than a network mount. Hot reload performance is acceptable for most projects.",
      },
      {
        question: "How do we handle database migrations in Docker Compose?",
        answer: "Add a migration step to your startup sequence. Either run migrations as part of the app startup (safe with idempotent migrations), or add a separate migrate service that runs and exits. Use Drizzle Kit or Prisma Migrate for schema management — both work well in containerised environments.",
      },
      {
        question: "Can we use Docker Compose for a team that uses both Mac and Linux?",
        answer: "Yes, with minor adjustments. The main difference: line endings (use .gitattributes to normalize), UID/GID (Linux users need user: \"${UID}:${GID}\" in compose, Mac users don't), and file performance (macOS needs VirtioFS enabled). Document these in your CONTRIBUTING.md.",
      },
    ],
    meta: {
      title: "Docker Compose for Local Dev Environments — Trident Software Blog",
      description: "Docker Compose configuration for full-stack JavaScript projects: complete setup with PostgreSQL, Redis, mail server, hot reload, one-command onboarding, and common pitfalls.",
    },
  },
  {
    slug: "wcag-accessibility-swiss-public-sector",
    image: "/images/stock/warehouse-2.jpg",
    title: "WCAG 2.1 Accessibility for Swiss Public Sector Apps: Compliance and Practical Implementation",
    excerpt: "Swiss federal and cantonal law requires digital accessibility for public sector applications. Here's what compliance actually means, which WCAG 2.1 criteria are most commonly failed, and how to audit and fix them efficiently.",
    content: `## The Legal Requirement in Switzerland

Switzerland's Federal Act on the Elimination of Inequalities for People with Disabilities (BehiG) and the corresponding ordinance (BehiV) require federal, cantonal, and communal authorities to make digital services accessible. The technical standard referenced is WCAG 2.1 at level AA.

For private companies serving the public sector or receiving public funding, accessibility is increasingly a procurement requirement, not just best practice.

## WCAG 2.1 AA: The 13 Most Commonly Failed Criteria

Based on accessibility audits across Swiss public sector websites, these criteria fail most often:

| Criterion | Issue | WCAG Number |
|---|---|---|
| Non-text contrast | Icon buttons without accessible labels | 1.1.1 |
| Color contrast | Text below 4.5:1 ratio against background | 1.4.3 |
| Keyboard navigation | Focus not visible, focus traps in modals | 2.4.7, 2.1.2 |
| Form labels | Inputs missing associated \`<label>\` | 1.3.1 |
| Error identification | Errors shown only by color | 1.4.1, 3.3.1 |
| Language declaration | Missing \`lang\` attribute on \`<html>\` | 3.1.1 |
| Skip navigation | No skip-to-content link | 2.4.1 |
| ARIA misuse | role/aria-* applied incorrectly | 4.1.2 |

## Practical Fixes for Each Category

**Color Contrast**
Use a systematic approach: audit with axe DevTools browser extension, then fix at the design token level:
\`\`\`css
/* Before: fails 4.5:1 on white */
--color-secondary-text: #9CA3AF;

/* After: passes 4.5:1 on white */
--color-secondary-text: #6B7280;
\`\`\`

**Keyboard Focus**
Every interactive element needs a visible focus indicator. The minimum:
\`\`\`css
:focus-visible {
  outline: 2px solid #0052CC;
  outline-offset: 2px;
  border-radius: 2px;
}
\`\`\`
Never use \`outline: none\` without providing an alternative.

**Form Labels**
\`\`\`html
<!-- Wrong: placeholder is not a label -->
<input type="email" placeholder="E-Mail-Adresse">

<!-- Correct: explicit label association -->
<label for="email">E-Mail-Adresse</label>
<input type="email" id="email" name="email">
\`\`\`

**Skip Navigation**
\`\`\`html
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4">
  Zum Hauptinhalt springen
</a>
<main id="main-content">...</main>
\`\`\`

## Automated Testing Integration

Automated tools catch approximately 30–40% of WCAG violations. Add to CI:

\`\`\`bash
# Install axe-playwright for automated checks
npm install --save-dev @axe-core/playwright

# In your test suite:
import { checkA11y } from 'axe-playwright'
await checkA11y(page, undefined, {
  runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] }
})
\`\`\`

The remaining 60–70% requires manual testing, including keyboard navigation testing and screen reader testing with NVDA (Windows) or VoiceOver (macOS/iOS).

## Swiss Language Considerations

Public sector apps serve users in DE, FR, IT, and RM. WCAG 3.1.2 requires marking language changes inline:

\`\`\`html
<p>Dieser Dienst ist verfügbar in:
  <span lang="fr">français</span>,
  <span lang="it">italiano</span>,
  <span lang="rm">rumantsch</span>
</p>
\`\`\`

Screen readers use the \`lang\` attribute to select the correct pronunciation engine.

## Audit Toolset for Swiss Teams

- **axe DevTools** (browser extension): free, catches most automated violations
- **WAVE**: visual overlay showing accessibility errors
- **Lighthouse accessibility score**: built into Chrome DevTools
- **Manual screen reader**: VoiceOver (Mac/iOS, free), NVDA (Windows, free)

Budget 2–3 days for an initial accessibility audit of a medium-complexity web application. Budget one sprint to remediate findings on a codebase with no existing accessibility work.`,
    author: "Bohdan Voitovych",
    authorRole: "Project Manager, Trident Software",
    publishedAt: "2026-01-29",
    readingTime: 10,
    tags: [
      "Accessibility",
      "WCAG",
      "Switzerland",
      "Public Sector",
      "Frontend",
    ],
    relatedPosts: [
      "tailwind-css-design-systems-product-companies",
      "fadp-nfadp-saas-compliance-switzerland",
      "nextjs-payload-cms-swiss-sme-websites",
    ],
    faq: [
      {
        question: "Is WCAG 2.1 AA legally required for private Swiss companies?",
        answer: "For private companies, the legal requirement applies when providing services to public authorities, receiving public funding, or offering services that fall under anti-discrimination rules. In practice, any company doing business with Swiss cantonal or federal government is expected to meet accessibility requirements.",
      },
      {
        question: "What is the difference between WCAG 2.1 and WCAG 2.2?",
        answer: "WCAG 2.2 (published 2023) adds 9 new success criteria, primarily focused on mobile accessibility and cognitive disabilities. Swiss law currently references 2.1 AA, but 2.2 is backward compatible — meeting 2.2 AA satisfies all 2.1 AA requirements. Building to 2.2 from the start is the pragmatic choice for new projects.",
      },
      {
        question: "How long does a full accessibility audit take?",
        answer: "For a medium-complexity web application (15–30 pages, standard forms and navigation): 2–3 days for automated + manual audit, plus 1–2 weeks to remediate findings. For large portals with custom UI components, multiply by 3. The audit itself is the fast part; remediation depends on how much accessibility was considered during original development.",
      },
      {
        question: "Which screen reader should we test with for Swiss German-language apps?",
        answer: "NVDA on Windows (free) for broad coverage — most assistive technology users on Windows. VoiceOver on macOS/iOS for Apple ecosystem coverage. Both support German. Test with German system language set to ensure the screen reader uses German pronunciation rules for DE content.",
      },
    ],
    translations: {
      de: {
        title: "WCAG 2.1 Barrierefreiheit für Schweizer Behördenanwendungen: Compliance und Umsetzung",
        excerpt: "Schweizer Bundes- und Kantonsrecht schreibt digitale Barrierefreiheit für Behördenanwendungen vor. Was Compliance bedeutet und wie man effizient auditiert und umsetzt.",
        meta: {
          title: "WCAG 2.1 Barrierefreiheit Schweiz Behörden — Trident Software Blog",
          description: "WCAG 2.1 AA für Schweizer Behördenanwendungen: rechtliche Grundlagen, häufige Fehler, praktische Korrekturen und automatisierte Testintegration.",
        },
      },
      fr: {
        title: "Accessibilité WCAG 2.1 pour les applications du secteur public suisse",
        excerpt: "La loi fédérale et cantonale suisse exige l'accessibilité numérique pour les applications du secteur public. Ce que la conformité signifie et comment auditer efficacement.",
        meta: {
          title: "WCAG 2.1 accessibilité secteur public suisse — Trident Software Blog",
          description: "WCAG 2.1 AA pour les applications publiques suisses : bases légales, erreurs fréquentes, correctifs pratiques et tests automatisés.",
        },
      },
      it: {
        title: "Accessibilità WCAG 2.1 per applicazioni del settore pubblico svizzero",
        excerpt: "La legge federale e cantonale svizzera richiede l'accessibilità digitale per le applicazioni del settore pubblico. Cosa significa la conformità e come effettuare audit.",
        meta: {
          title: "WCAG 2.1 accessibilità settore pubblico svizzero — Trident Software Blog",
          description: "WCAG 2.1 AA per applicazioni pubbliche svizzere: basi legali, errori frequenti, correzioni pratiche e testing automatizzato.",
        },
      },
    },
    meta: {
      title: "WCAG 2.1 Accessibility for Swiss Public Sector Apps — Trident Software Blog",
      description: "Swiss BehiG/BehiV accessibility compliance guide: most commonly failed WCAG 2.1 AA criteria, practical code fixes, automated testing with axe, and screen reader testing.",
    },
  },
  {
    slug: "openai-vs-anthropic-api-cost-sme",
    image: "/images/stock/office-2.jpg",
    title: "OpenAI vs Anthropic API Cost Comparison for SMEs: What the Pricing Pages Don't Tell You",
    excerpt: "API pricing tables look simple until you factor in context window usage, caching, and your actual workload. Here's a realistic cost comparison for the most common SME use cases in 2026.",
    content: `## Why Simple Price Comparisons Mislead

The OpenAI vs Anthropic pricing page comparison shows cost per million tokens. Real workloads don't look like "1M input tokens, 1M output tokens." The actual cost depends on your context window usage, cache hit rate, output-to-input ratio, and which model tier you actually need.

This comparison models realistic SME workloads rather than benchmark comparisons.

## Current Pricing (May 2026)

| Model | Input (per 1M) | Output (per 1M) | Context | Best For |
|---|---|---|---|---|
| GPT-4o | $2.50 | $10.00 | 128K | General-purpose, vision |
| GPT-4o mini | $0.15 | $0.60 | 128K | High-volume simple tasks |
| o3-mini | $1.10 | $4.40 | 200K | Reasoning tasks |
| Claude 3.5 Sonnet | $3.00 | $15.00 | 200K | Complex analysis, coding |
| Claude 3.5 Haiku | $0.80 | $4.00 | 200K | Balanced cost/quality |
| Claude 3 Haiku | $0.25 | $1.25 | 200K | High-volume simple tasks |

*Prices approximate — check current provider pages before budgeting*

## Realistic Workload Models

**Document Analysis (Invoice/Contract Processing)**
Assumptions: 200 documents/day, avg 2,000 tokens each, 200 token output

\`\`\`
Monthly volume: 6,000 documents
Input tokens: 12M (200 chars × 6K docs × ~4 chars/token = estimate)
Output tokens: 1.2M

GPT-4o mini: $1.80 input + $0.72 output = $2.52/month
Claude 3.5 Haiku: $9.60 input + $4.80 output = $14.40/month
Claude 3 Haiku: $3.00 input + $1.50 output = $4.50/month

Winner: GPT-4o mini by 2×
\`\`\`

**Customer Support Chatbot**
Assumptions: 500 conversations/day, 10 turns each, system prompt 1,500 tokens

Without caching:
\`\`\`
System prompt repeated per call: 1,500 × 5,000 calls/day = 7.5M tokens/day
\`\`\`

With Claude prompt caching (system prompt cached):
\`\`\`
Cached input: $0.30/1M (90% discount)
Effective cost reduction: 60–70% on system prompt portion

GPT-4o mini (no caching): $33.75/day
Claude 3.5 Haiku (with caching): ~$9.80/day
\`\`\`

For workloads with large repeated system prompts, Claude's prompt caching changes the economics significantly.

**Code Review / Generation**
Assumptions: 50 engineers, 20 AI-assisted completions/day, 500 input + 300 output tokens avg

\`\`\`
Daily: 50,000 input tokens, 30,000 output tokens
Monthly: 1.5M input, 900K output

GPT-4o: $3.75 + $9.00 = $12.75/month
Claude 3.5 Sonnet: $4.50 + $13.50 = $18.00/month
GPT-4o mini: $0.23 + $0.54 = $0.77/month
\`\`\`

For code generation, GPT-4o mini delivers surprisingly strong results relative to cost.

## The Caching Factor

Anthropic's prompt caching gives 90% discount on repeated prompt content (minimum 1,024 tokens). For any workload where you send the same system prompt or context repeatedly, this changes the comparison:

- Customer support bots with large knowledge bases: Claude wins on cost
- Document processing with short prompts: OpenAI mini models win
- Long-context document analysis (50K+ token docs): Claude's 200K context avoids chunking overhead

## Quality vs Cost Decision Framework

1. **Is quality the primary constraint?** Use Claude 3.5 Sonnet or GPT-4o. Test both; pick the one with better task-specific output.
2. **Is cost the primary constraint?** Use GPT-4o mini or Claude 3 Haiku. Both handle simple tasks well.
3. **Do you have large repeated contexts?** Claude with prompt caching often wins.
4. **Do you need Swiss data residency?** Neither provider has Swiss-resident processing. Consider on-premise LLMs.

## Our Recommendation

Start with Claude 3.5 Haiku for most SME workloads — balanced quality, 200K context, and caching available. Test against GPT-4o mini for your specific task. The 5–10% quality difference between tiers rarely justifies 5–8× the cost for routine tasks.`,
    author: "Bohdan Voitovych",
    authorRole: "Project Manager, Trident Software",
    publishedAt: "2026-02-26",
    readingTime: 9,
    tags: [
      "AI",
      "OpenAI",
      "Anthropic",
      "Cost",
      "SME",
    ],
    relatedPosts: [
      "on-premise-llm-swiss-companies",
      "ai-agent-b2b-automation",
      "ai-document-processing-invoices-contracts",
    ],
    faq: [
      {
        question: "Which model is better for Swiss multilingual content (DE/FR/IT)?",
        answer: "Both GPT-4o and Claude 3.5 Sonnet handle Swiss national languages very well. Claude has a slight edge on Italian, GPT-4o on German — the differences are marginal for most use cases. Test with a sample of your actual input language distribution.",
      },
      {
        question: "Does Anthropic or OpenAI offer volume discounts for SMEs?",
        answer: "Both offer committed-use discounts for high-volume enterprise customers (typically $10K+/month spend). For SMEs under that threshold, the price difference is what's on the pricing page. Neither offers SME-specific pricing programs as of mid-2026.",
      },
      {
        question: "What is prompt caching and how do we enable it?",
        answer: "Prompt caching lets you mark portions of your prompt (system prompt, large context documents) to be cached server-side. Subsequent requests that use the identical cached prefix pay 90% less for those tokens. Enable it with cache_control: {type: \"ephemeral\"} on the relevant content blocks in the Anthropic API.",
      },
      {
        question: "Should we build on one provider or both?",
        answer: "Build with an abstraction layer (LangChain, or a thin wrapper) that makes switching models a configuration change, not a code change. This lets you switch providers if pricing changes, and run cost/quality comparisons on production traffic. Avoid deep provider-specific features that make migration expensive.",
      },
    ],
    meta: {
      title: "OpenAI vs Anthropic API Cost Comparison for SMEs — Trident Software Blog",
      description: "Realistic API cost comparison for SME workloads: document processing, chatbots, code generation. Includes prompt caching impact and decision framework for model selection.",
    },
  },
  {
    slug: "automated-testing-pyramid-small-teams",
    image: "/images/stock/workspace.jpg",
    title: "The Automated Testing Pyramid for Small Teams: What to Test and What to Skip",
    excerpt: "Small engineering teams cannot afford comprehensive test coverage everywhere. Here's how to apply the testing pyramid pragmatically — maximum bug detection with minimum maintenance overhead.",
    content: `## Why Most Testing Advice Doesn't Apply to Small Teams

The standard testing pyramid assumes you have dedicated QA engineers and the time to maintain a large test suite. A 3-person team shipping features weekly operates under different constraints: tests must catch real bugs, run fast, and not break on every refactor.

This guide is for teams of 2–8 engineers who want tests that actually help rather than slow them down.

## The Practical Testing Pyramid for Small Teams

\`\`\`
         /\\
        /  \\
       / E2E \\   ← 5–10 critical user flows only
      /      \\
     /--------\\
    / Integration \\   ← API endpoints, DB queries
   /              \\
  /----------------\\
 /    Unit Tests    \\   ← Pure functions, business logic
/____________________\\
\`\`\`

The ratios: approximately 60% unit, 30% integration, 10% E2E. For small teams, the absolute numbers matter more than ratios — 50 unit tests, 20 integration tests, 5 E2E flows is a realistic and maintainable target.

## Unit Tests: What Deserves Coverage

Test pure functions and business logic. Skip everything that just calls a framework API:

**High value — test these:**
- Price calculation with discounts, taxes, rounding
- Permission checking logic
- Data validation and transformation
- Date arithmetic, especially timezone edge cases

**Low value — skip these:**
- React components that just render data (visual testing or E2E instead)
- Database model definitions
- Configuration files
- Trivial getters and setters

\`\`\`typescript
// Worth testing: business logic
it('applies discount only to eligible products', () => {
  const cart = [
    { sku: 'A1', price: 100, discountEligible: true },
    { sku: 'B2', price: 50, discountEligible: false },
  ]
  expect(applyDiscount(cart, 0.1)).toEqual([90, 50])
})

// Not worth testing: framework integration
it('renders a button', () => {
  render(<Button>Click</Button>)
  expect(screen.getByRole('button')).toBeInTheDocument()
  // This test survives zero refactors and catches zero real bugs
})
\`\`\`

## Integration Tests: The Highest ROI Layer

Integration tests catch the bugs that unit tests miss: wrong SQL, missing JOIN, incorrect auth middleware order. For a Next.js/PostgreSQL stack:

\`\`\`typescript
// test/api/orders.test.ts
import { testClient } from '../helpers/test-client'
import { seedTestData, cleanTestData } from '../helpers/seed'

beforeEach(async () => { await seedTestData() })
afterEach(async () => { await cleanTestData() })

it('returns 403 when user requests another user's order', async () => {
  const res = await testClient
    .get('/api/orders/order-user-b-123')
    .set('Authorization', 'Bearer token-user-a')
  expect(res.status).toBe(403)
})

it('creates order and reduces inventory atomically', async () => {
  const before = await getInventory('SKU-001')
  await testClient.post('/api/orders').send({ sku: 'SKU-001', qty: 3 })
  const after = await getInventory('SKU-001')
  expect(after).toBe(before - 3)
})
\`\`\`

## E2E Tests: 5–10 Critical Flows, Nothing More

With Playwright, cover only the flows that, if broken, would block revenue:

| Flow | Priority |
|---|---|
| User registration + email confirmation | Critical |
| Login + auth token refresh | Critical |
| Checkout: add to cart → payment → confirmation | Critical |
| Password reset | High |
| Core CRUD for primary entity | High |

\`\`\`typescript
test('complete checkout flow', async ({ page }) => {
  await page.goto('/products/test-product')
  await page.click('[data-testid="add-to-cart"]')
  await page.click('[data-testid="checkout"]')
  await page.fill('#email', 'test@example.com')
  await page.fill('#card-number', '4242424242424242')
  await page.click('[data-testid="confirm-purchase"]')
  await expect(page.locator('[data-testid="order-confirmation"]')).toBeVisible()
})
\`\`\`

## CI Configuration That Doesn't Slow Down Shipping

\`\`\`yaml
# .github/workflows/test.yml
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16-alpine
        env: { POSTGRES_PASSWORD: test }
    steps:
      - run: pnpm test:unit         # <30 seconds
      - run: pnpm test:integration  # <2 minutes
      - run: pnpm test:e2e          # <5 minutes (5 flows)
\`\`\`

Target: total CI test time under 8 minutes. Beyond that, developers start skipping tests locally and the pipeline loses credibility.`,
    author: "Trident Software Team",
    authorRole: "Engineering Blog",
    publishedAt: "2026-03-12",
    readingTime: 9,
    tags: [
      "Testing",
      "CI/CD",
      "Playwright",
      "Vitest",
      "Engineering",
    ],
    relatedPosts: [
      "gitlab-cicd-small-engineering-teams",
      "typescript-migration-legacy-codebases",
      "docker-compose-local-dev",
    ],
    faq: [
      {
        question: "Should we use Jest or Vitest for unit testing in 2026?",
        answer: "Vitest for any project using Vite, Next.js, or modern ESM. It's 3–10× faster than Jest for typical test suites and has identical API. Jest remains valid for projects already using it — migration ROI is usually low unless test suite is very slow.",
      },
      {
        question: "How do we test Next.js server actions and API routes?",
        answer: "For API routes, use supertest or a thin test client that calls the route handler directly (no network). For server actions, test the underlying function with mocked dependencies rather than invoking the server action wrapper — it's faster and less fragile.",
      },
      {
        question: "What code coverage target should small teams aim for?",
        answer: "70–80% on business logic modules; 0% on configuration, migrations, and generated code. A blanket coverage target incentivizes writing tests for easy-to-cover trivial code instead of hard-to-cover important logic. Target coverage by module type, not codebase-wide.",
      },
      {
        question: "How do we prevent E2E tests from becoming flaky?",
        answer: "Three rules: (1) Never use sleep() — use Playwright's waitForSelector or expect().toBeVisible(). (2) Use data-testid attributes, not CSS classes — CSS refactors should not break tests. (3) Seed test data deterministically before each test, never depend on leftover state.",
      },
    ],
    translations: {
      de: {
        title: "Die automatisierte Testpyramide für kleine Teams: Was testen und was überspringen",
        excerpt: "Kleine Entwicklungsteams können keine vollständige Testabdeckung leisten. Die Testpyramide pragmatisch anwenden: maximale Fehlererkennung bei minimalem Wartungsaufwand.",
        meta: {
          title: "Testpyramide für kleine Teams — Trident Software Blog",
          description: "Praktische automatisierte Testpyramide für 2–8 Entwickler: Unit-Tests für Geschäftslogik, Integrationstests mit höchstem ROI, 5–10 E2E-Flows und schnelle CI-Konfiguration.",
        },
      },
      fr: {
        title: "La pyramide de tests automatisés pour petites équipes : quoi tester et quoi ignorer",
        excerpt: "Les petites équipes ne peuvent pas se permettre une couverture de tests complète. Appliquer la pyramide de tests pragmatiquement : détection max de bugs, maintenance minimale.",
        meta: {
          title: "Pyramide de tests pour petites équipes — Trident Software Blog",
          description: "Pyramide de tests automatisés pour équipes de 2–8 développeurs : tests unitaires pour logique métier, intégration à ROI élevé, 5–10 flows E2E et CI rapide.",
        },
      },
      it: {
        title: "La piramide di test automatizzati per piccoli team: cosa testare e cosa saltare",
        excerpt: "I piccoli team non possono permettersi una copertura completa dei test. Applicare la piramide di test pragmaticamente: massimo rilevamento bug, minimo overhead di manutenzione.",
        meta: {
          title: "Piramide di test per piccoli team — Trident Software Blog",
          description: "Piramide di test automatizzati per team di 2–8 sviluppatori: unit test per logica di business, integration test ad alto ROI, 5–10 flow E2E e CI veloce.",
        },
      },
    },
    meta: {
      title: "Automated Testing Pyramid for Small Teams — Trident Software Blog",
      description: "Pragmatic testing strategy for 2–8 engineer teams: what to unit test (business logic only), high-ROI integration tests, 5–10 E2E flows, and CI under 8 minutes.",
    },
  },
]
