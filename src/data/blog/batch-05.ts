import type { BlogPostRecord } from './types'

export const posts: BlogPostRecord[] = [
  {
    slug: "fixed-price-software-contracts-pros-cons",
    image: "/images/stock/dispatch.jpg",
    title: "Fixed-Price Software Contracts: When They Work and When They Blow Up",
    excerpt: "Fixed-price contracts promise predictability but can destroy projects when scoped wrong. Here's the decision framework we use to decide when to offer fixed-price, and what contract terms protect both sides.",
    content: `## The Client's Perspective Is Valid

Clients want fixed-price contracts for rational reasons. Budget approval processes require known costs. Financial planning requires certainty. "We'll bill you for whatever it takes" is not fundable in most organizations.

We offer fixed-price contracts. We also know exactly when they fail — and we've learned to say no to fixed-price engagements that are structurally doomed.

## When Fixed-Price Works

Fixed-price is appropriate when the scope is genuinely knowable in advance:

| Condition | Fixed-Price Safe? |
|---|---|
| Well-defined output (specific screens, specific integrations) | Yes |
| Similar project done before by the vendor | Yes |
| No dependency on third-party systems with unknown APIs | Yes |
| Client can review and sign off on spec before development | Yes |
| Requirements will not change during development | Yes (rare) |

The last row is the killer. Requirements changing mid-project under a fixed-price contract creates a conflict of interest: every change request is a renegotiation.

## When Fixed-Price Fails

- **Discovery phase skipped** — jumping to fixed-price before understanding the problem domain
- **Integration with unknown systems** — "connect to our ERP" when nobody has seen the ERP's API
- **Novel technical problems** — if nobody knows the answer, nobody knows the cost
- **Stakeholder disagreement** — clients who haven't internally aligned will change scope repeatedly

## What Our Fixed-Price Contracts Include

When we do offer fixed-price, the contract specifies:

1. **Scope document signed by client** — every screen, every integration, every edge case documented
2. **Change request procedure** — new requests go through written CR process, priced separately
3. **Milestone-based payment** — 30% upfront, 30% at mid-project delivery, 40% at acceptance
4. **Definition of done** — explicit acceptance criteria per deliverable
5. **Exclusions list** — what is explicitly NOT included

## Time-and-Materials as an Alternative

For exploratory work, we recommend T&M with a weekly cap and a mandatory scope review at week 4. This gives clients budget predictability while preserving the flexibility that complex projects require.

The right framing: fixed-price for execution, T&M for discovery. Run a 2–4 week discovery sprint on T&M, then write the fixed-price contract based on what you actually found.

## The Hybrid Approach

Our current preferred model: **fixed-price per phase, not per project**. Each phase is scoped, priced, and delivered independently. The client has cost certainty for each phase. We have scope certainty for each phase. Neither side is locked into a multi-month contract based on assumptions made in week one.`,
    author: "Bohdan Voitovych",
    authorRole: "Project Manager, Trident Software",
    publishedAt: "2025-11-05",
    readingTime: 6,
    tags: [
      "Project Management",
      "Contracts",
      "Software Development",
      "Client Relations",
    ],
    relatedPosts: [
      "the-power-of-outsourcing-unlocking-efficiency-and-innovation-in-short-term-projects",
      "custom-erp-vs-off-the-shelf",
      "swiss-startup-tech-stack-2026",
    ],
    faq: [
      {
        question: "Is fixed-price always more expensive than time-and-materials?",
        answer: "Not necessarily. Fixed-price includes a risk premium, but it also forces upfront scope discipline that prevents runaway T&M projects. For well-scoped work, fixed-price can be more economical.",
      },
      {
        question: "What happens if we discover the scope was wrong mid-project?",
        answer: "Under a proper fixed-price contract, you submit a change request. We scope and price the change separately. Nothing proceeds without written agreement on the additional cost.",
      },
      {
        question: "How long should a discovery phase take before a fixed-price contract?",
        answer: "Typically 2–4 weeks for projects under CHF 100K, 4–8 weeks for larger engagements. The output is a scope document detailed enough to write acceptance criteria for every deliverable.",
      },
      {
        question: "Do you offer fixed-price for MVP projects?",
        answer: "Only when the MVP scope is precisely defined. We will not offer fixed-price for \"build us an MVP\" without a complete spec. The discovery phase produces that spec.",
      },
    ],
    translations: {
      de: {
        title: "Festpreisverträge für Software: Wann sie funktionieren und wann nicht",
        excerpt: "Festpreisverträge versprechen Planungssicherheit, können aber Projekte zerstören, wenn der Umfang falsch definiert ist. Unser Entscheidungsrahmen für beide Vertragsmodelle.",
        meta: {
          title: "Festpreisverträge für Software — Trident Software Blog",
          description: "Wann Festpreisverträge funktionieren und wann sie scheitern. Entscheidungsrahmen und Vertragsklauseln, die beide Seiten schützen.",
        },
      },
      fr: {
        title: "Contrats à prix fixe : quand ça marche et quand ça explose",
        excerpt: "Les contrats à prix fixe promettent la prévisibilité mais peuvent ruiner des projets mal cadrés. Notre cadre décisionnel pour choisir entre prix fixe et régie.",
        meta: {
          title: "Contrats logiciels à prix fixe — Trident Software Blog",
          description: "Quand les contrats à prix fixe fonctionnent et quand ils échouent. Cadre décisionnel et clauses contractuelles qui protègent les deux parties.",
        },
      },
      it: {
        title: "Contratti a prezzo fisso: quando funzionano e quando falliscono",
        excerpt: "I contratti a prezzo fisso promettono prevedibilità ma possono distruggere i progetti se mal definiti. Il nostro framework decisionale per scegliere il modello contrattuale giusto.",
        meta: {
          title: "Contratti software a prezzo fisso — Trident Software Blog",
          description: "Quando i contratti a prezzo fisso funzionano e quando falliscono. Framework decisionale e clausole contrattuali che proteggono entrambe le parti.",
        },
      },
    },
    meta: {
      title: "Fixed-Price Software Contracts: Pros, Cons & When to Use Them",
      description: "Decision framework for fixed-price vs T&M software contracts. What terms protect both sides, when fixed-price fails, and the hybrid phase-based model that works.",
    },
  },
  {
    slug: "fadp-nfadp-saas-compliance-switzerland",
    image: "/images/stock/warehouse-2.jpg",
    title: "FADP / nFADP Compliance for SaaS Products: A Developer's Checklist",
    excerpt: "Switzerland's revised Federal Act on Data Protection came into force in September 2023. If you're building or operating a SaaS product for Swiss customers, here's what your engineering team must implement.",
    content: `## What Changed with nFADP

The revised Federal Act on Data Protection (nFADP, in force since September 2023) brought Swiss data protection law closer to GDPR while keeping Swiss-specific characteristics. For SaaS products with Swiss customers, the key engineering implications are:

- **Privacy by design and by default** is now a legal requirement, not a recommendation
- **Data breach notification** to the FDPIC within 72 hours for high-risk breaches
- **Data processing records** required for organizations with 250+ employees (recommended for all)
- **Profiling with high risk** requires explicit consent
- **International data transfers** require adequacy decisions or appropriate safeguards

## The Engineering Checklist

### Data Minimization

| Area | Requirement | Implementation |
|---|---|---|
| Registration forms | Collect only necessary fields | Audit every form field; remove optional-but-collected data |
| Analytics | No cross-site tracking without consent | Use privacy-respecting analytics (Plausible, Fathom) |
| Logs | No personal data in application logs | Scrub email, IP, names from log output |
| Backups | Deletion propagates to backups | Implement soft-delete with backup purge schedule |

### Consent Management

Consent must be:
- Freely given (no bundled consents)
- Specific (one consent per purpose)
- Informed (plain language, not legal boilerplate)
- Unambiguous (affirmative action, not pre-ticked boxes)
- Withdrawable (as easy to withdraw as to give)

Store consent records: who consented, to what, when, via what mechanism, and the consent text version shown.

### Right to Access and Erasure

Every SaaS product must implement:

\`\`\`typescript
// Minimum required endpoints
GET  /api/user/data-export     // Full personal data export (JSON/CSV)
POST /api/user/delete-account  // Initiates deletion workflow
GET  /api/user/consent-history // All consent records for the user
\`\`\`

Erasure must cascade: primary DB, analytics, email lists, support tickets, backups on next purge cycle.

### Data Processing Records (Verzeichnis der Bearbeitungstätigkeiten)

Maintain a register documenting:
- Purpose of each data processing activity
- Categories of data subjects
- Recipients (including sub-processors)
- Retention periods
- Technical and organizational security measures

This is a living document, not a one-time exercise. Update it when you add new third-party services.

### Sub-processor Management

Every third-party service you use that processes personal data is a sub-processor. Document them all:

Common sub-processors to review: Stripe, Intercom, HubSpot, Sentry, Datadog, AWS/GCP/Azure, Mailgun, Twilio.

Each requires a Data Processing Agreement (DPA). Most major providers offer these automatically; smaller vendors require manual DPA execution.

## Practical Priority Order

1. Audit current data collection — stop collecting what you don't need
2. Implement consent management for marketing data
3. Build data export and deletion endpoints
4. Write your processing register
5. Execute DPAs with all sub-processors
6. Set up breach detection and notification workflow`,
    author: "Bohdan Voitovych",
    authorRole: "Project Manager, Trident Software",
    publishedAt: "2025-11-19",
    readingTime: 9,
    tags: [
      "nFADP",
      "GDPR",
      "Data Privacy",
      "Switzerland",
      "SaaS",
      "Compliance",
    ],
    relatedPosts: [
      "on-premise-llm-swiss-companies",
      "strengthening-small-and-medium-sized-businesses-through-advanced-security-solutions",
      "swiss-startup-tech-stack-2026",
    ],
    faq: [
      {
        question: "Does nFADP apply to foreign SaaS companies with Swiss customers?",
        answer: "Yes. nFADP applies when processing personal data of persons in Switzerland, regardless of where the processor is located — similar to GDPR's extraterritorial scope.",
      },
      {
        question: "Is nFADP compliance the same as GDPR compliance?",
        answer: "Largely aligned but not identical. Key differences: nFADP's breach notification window is 72 hours (same as GDPR), but the definition of \"high risk\" and profiling rules differ. GDPR compliance provides a strong foundation but requires Swiss-specific gaps to be filled.",
      },
      {
        question: "What is the penalty for nFADP violations?",
        answer: "Fines up to CHF 250,000 for individuals (not companies — this is a Swiss peculiarity). Criminal sanctions target responsible persons within the organization, not the legal entity.",
      },
      {
        question: "Do startups with fewer than 250 employees need a processing register?",
        answer: "The 250-employee threshold applies to mandatory processing records under nFADP, but the FDPIC recommends all organizations maintain them. More importantly, if you process sensitive data or carry out high-risk processing, the register is required regardless of size.",
      },
    ],
    translations: {
      de: {
        title: "DSG / nDSG Compliance für SaaS-Produkte: Eine Entwickler-Checkliste",
        excerpt: "Das revidierte Datenschutzgesetz gilt seit September 2023. Was Ihr Engineering-Team für SaaS-Produkte mit Schweizer Kunden implementieren muss.",
        meta: {
          title: "nDSG Compliance für SaaS-Produkte — Trident Software Blog",
          description: "Entwickler-Checkliste für nDSG/nFADP: Datensparsamkeit, Einwilligung, Auskunftsrecht, Löschpflichten und Verarbeitungsverzeichnis für Schweizer SaaS-Produkte.",
        },
      },
      fr: {
        title: "Conformité LPD / nLPD pour les produits SaaS : checklist développeur",
        excerpt: "La loi révisée sur la protection des données est en vigueur depuis septembre 2023. Ce que votre équipe engineering doit implémenter pour les clients suisses.",
        meta: {
          title: "Conformité nLPD pour SaaS — Trident Software Blog",
          description: "Checklist développeur pour la conformité nLPD : minimisation des données, consentement, droit d'accès, effacement et registre des traitements.",
        },
      },
      it: {
        title: "Conformità LPD / nLPD per prodotti SaaS: checklist per sviluppatori",
        excerpt: "La legge federale sulla protezione dei dati rivista è in vigore dal settembre 2023. Cosa deve implementare il vostro team di ingegneria per i clienti svizzeri.",
        meta: {
          title: "Conformità nLPD per SaaS — Trident Software Blog",
          description: "Checklist per sviluppatori sulla conformità nLPD: minimizzazione dei dati, consenso, diritto di accesso, cancellazione e registro dei trattamenti.",
        },
      },
    },
    meta: {
      title: "FADP / nFADP SaaS Compliance Checklist for Developers — Trident",
      description: "Engineering checklist for Swiss nFADP compliance: data minimization, consent management, right to erasure, processing records, and sub-processor DPAs.",
    },
  },
  {
    slug: "postgresql-performance-tuning-mid-size-apps",
    image: "/images/stock/office-2.jpg",
    title: "PostgreSQL Performance Tuning for Mid-Size Applications",
    excerpt: "Before you shard or migrate to a distributed database, there's significant performance headroom in a single well-tuned PostgreSQL instance. Here's where to look first.",
    content: `## Most PostgreSQL Performance Problems Have Simple Causes

After diagnosing slow queries across dozens of mid-size applications, the distribution of root causes is remarkably consistent:

- **~60%** — missing indexes (the obvious ones and the composite ones)
- **~20%** — N+1 query patterns from ORMs
- **~10%** — misconfigured PostgreSQL memory settings
- **~10%** — inefficient query structure (full table scans where none needed)

Fix these before considering anything architectural.

## Step 1: Enable pg_stat_statements

You cannot optimize what you cannot measure. Enable the query statistics extension:

\`\`\`sql
-- postgresql.conf
shared_preload_libraries = 'pg_stat_statements'
pg_stat_statements.track = all

-- After restart
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;

-- Find your slowest queries
SELECT query, calls, total_exec_time / calls AS avg_ms, rows
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 20;
\`\`\`

Run this weekly. The results are almost always surprising.

## Step 2: Index Audit

| Index Type | When to Use |
|---|---|
| B-tree (default) | Equality and range queries on most column types |
| Partial index | Queries that always filter on a condition (e.g., \`WHERE deleted_at IS NULL\`) |
| Composite index | Queries filtering on multiple columns — order matters |
| GIN index | JSONB columns, full-text search, array containment |
| Covering index | Include extra columns to avoid table heap access |

Common miss: indexing foreign keys. PostgreSQL does not auto-create indexes on FK columns. Every FK that participates in a JOIN needs an explicit index.

\`\`\`sql
-- Find missing FK indexes
SELECT tc.table_name, kcu.column_name
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu
  ON tc.constraint_name = kcu.constraint_name
LEFT JOIN pg_indexes idx
  ON idx.tablename = tc.table_name
  AND idx.indexdef LIKE '%' || kcu.column_name || '%'
WHERE tc.constraint_type = 'FOREIGN KEY'
  AND idx.indexname IS NULL;
\`\`\`

## Step 3: Memory Configuration

Default PostgreSQL settings assume a shared server with minimal RAM. For a dedicated app server with 16GB RAM:

\`\`\`
shared_buffers = 4GB          # 25% of RAM
effective_cache_size = 12GB   # 75% of RAM (hint to planner)
work_mem = 64MB               # Per sort/hash operation — careful with concurrency
maintenance_work_mem = 1GB    # For VACUUM, index builds
\`\`\`

Increasing \`work_mem\` has the highest single-setting impact on complex queries. But remember: each parallel operation can use this much. 64MB × 100 connections × 4 operations = 25GB if you're not careful.

## Step 4: VACUUM and Autovacuum

Table bloat from dead tuples degrades performance silently. Check it:

\`\`\`sql
SELECT schemaname, tablename,
  n_dead_tup, n_live_tup,
  round(n_dead_tup * 100.0 / nullif(n_live_tup + n_dead_tup, 0), 2) AS dead_pct
FROM pg_stat_user_tables
WHERE n_dead_tup > 10000
ORDER BY dead_pct DESC;
\`\`\`

Tables with >20% dead tuples need manual \`VACUUM ANALYZE\` and autovacuum tuning.

## Step 5: Connection Pooling

PostgreSQL connection overhead is non-trivial. Use **PgBouncer** in transaction pooling mode for any application with more than 20 concurrent database connections. This alone can increase throughput by 3–5× for connection-heavy workloads.`,
    author: "Trident Software Team",
    authorRole: "Engineering Blog",
    publishedAt: "2025-12-03",
    readingTime: 8,
    tags: [
      "PostgreSQL",
      "Performance",
      "Database",
      "SQL",
      "Backend",
    ],
    relatedPosts: [
      "typescript-migration-legacy-codebases",
      "microservices-vs-monolith-startup-mvp",
      "automated-testing-pyramid-small-teams",
    ],
    faq: [
      {
        question: "At what scale should I consider moving away from a single PostgreSQL instance?",
        answer: "Most applications never need to. A well-tuned single PostgreSQL instance handles millions of rows and thousands of queries per second. Consider read replicas before sharding, and sharding before a distributed database.",
      },
      {
        question: "How much does adding the right indexes typically improve query performance?",
        answer: "For a query doing a sequential scan on a large table, adding the right index can reduce query time from seconds to milliseconds — a 100–10,000× improvement. It's the highest-ROI optimization available.",
      },
      {
        question: "Should I use EXPLAIN or EXPLAIN ANALYZE to diagnose slow queries?",
        answer: "EXPLAIN ANALYZE — it runs the actual query and shows real timing. EXPLAIN only shows the planner's estimate. The difference matters when estimates are off (which causes the performance problem in the first place).",
      },
      {
        question: "What is the safest way to add an index on a large production table?",
        answer: "Use CREATE INDEX CONCURRENTLY. It builds the index without locking writes to the table. Takes longer than a regular index build but won't block production traffic.",
      },
    ],
    translations: {
      de: {
        title: "PostgreSQL Performance-Tuning für mittelgroße Anwendungen",
        excerpt: "Bevor Sie auf eine verteilte Datenbank migrieren, gibt es erhebliches Potenzial in einer gut konfigurierten PostgreSQL-Instanz. Hier erfahren Sie, wo Sie zuerst suchen sollten.",
        meta: {
          title: "PostgreSQL Performance-Tuning — Trident Software Blog",
          description: "Praktische Anleitung zur PostgreSQL-Optimierung: fehlende Indizes, N+1-Abfragen, Speicherkonfiguration, VACUUM und Connection Pooling.",
        },
      },
      fr: {
        title: "Optimisation des performances PostgreSQL pour les applications mid-size",
        excerpt: "Avant de migrer vers une base distribuée, il y a une marge de performance significative dans une instance PostgreSQL bien configurée. Par où commencer.",
        meta: {
          title: "Optimisation PostgreSQL — Trident Software Blog",
          description: "Guide pratique d'optimisation PostgreSQL : index manquants, requêtes N+1, configuration mémoire, VACUUM et connection pooling.",
        },
      },
      it: {
        title: "Ottimizzazione delle performance di PostgreSQL per applicazioni di medie dimensioni",
        excerpt: "Prima di migrare a un database distribuito, c'è un margine di miglioramento significativo in una singola istanza PostgreSQL ben configurata.",
        meta: {
          title: "Performance Tuning PostgreSQL — Trident Software Blog",
          description: "Guida pratica all'ottimizzazione PostgreSQL: indici mancanti, query N+1, configurazione memoria, VACUUM e connection pooling.",
        },
      },
    },
    meta: {
      title: "PostgreSQL Performance Tuning for Mid-Size Apps — Trident Software",
      description: "Practical PostgreSQL optimization guide: finding slow queries with pg_stat_statements, index audit, memory configuration, autovacuum tuning, and PgBouncer.",
    },
  },
  {
    slug: "react-native-vs-flutter-swiss-mobile",
    image: "/images/stock/workspace.jpg",
    title: "React Native vs Flutter for Swiss Mobile Projects: A 2026 Decision Guide",
    excerpt: "Both frameworks are mature. The choice depends on your team, timeline, and integration requirements — not benchmarks. Here's how we decide which to recommend for Swiss clients.",
    content: `## The Framework War Is Over — Both Won

React Native and Flutter are both production-proven in 2026. The decision is no longer "which is more mature" — it's "which fits our specific situation."

After shipping 9 mobile apps on both frameworks for Swiss clients, here's the honest comparison.

## When We Recommend React Native

React Native makes sense when:

- **Your team already knows JavaScript/TypeScript** — the learning curve disappears
- **You're integrating with a Next.js or Node.js backend** — shared types, shared validation logic, shared team
- **You need maximum native module access** — RN's bridge to native code is battle-tested
- **The app is content-heavy** — React paradigms (components, hooks, state) map well

React Native rough edges in 2026: the New Architecture (JSI/Fabric) is stable but some popular libraries haven't migrated yet. Budget extra time for library vetting.

## When We Recommend Flutter

Flutter makes sense when:

- **Custom UI is the product** — Flutter's pixel-perfect rendering across platforms is unmatched
- **Performance is paramount** — no JS bridge, compiled to native ARM, smooth 120fps animations
- **Team is willing to learn Dart** — the language is approachable and the tooling is excellent
- **You need web + mobile from one codebase** — Flutter Web has matured significantly

Flutter rough edges: native integrations sometimes require writing platform channels, and the Dart ecosystem is smaller than npm.

## Side-by-Side Comparison

| Factor | React Native | Flutter |
|---|---|---|
| Language | TypeScript / JavaScript | Dart |
| Rendering | Native components | Custom Skia renderer |
| Performance | Good (excellent with New Architecture) | Excellent |
| UI customization | Native feel, harder to customize | Total control |
| Community packages | Very large (npm) | Growing but smaller |
| Web support | Limited (react-native-web) | Production-ready |
| Swiss team findability | High (JS devs everywhere) | Medium |
| CI/CD setup complexity | Medium | Medium |

## The Multilingual Question (DE/FR/IT/EN)

Swiss apps frequently need 4+ languages. Both frameworks handle this well:

- **React Native**: i18n-js or react-i18next (same libraries as web)
- **Flutter**: flutter_localizations + intl package (more boilerplate but solid)

RTL (Arabic) support is better in Flutter's layout system than in React Native, which matters if your app needs Arabic.

## Our Recommendation for Most Swiss SME Projects

**Default to React Native** if your team has web development background. The hiring pool is larger, the learning curve is lower, and the ecosystem overlap with your web stack reduces overall complexity.

**Choose Flutter** if the app is the product (not a companion to a web service), performance is critical, or you're building something with highly custom UI that would fight against native component constraints.`,
    author: "Trident Software Team",
    authorRole: "Engineering Blog",
    publishedAt: "2025-12-17",
    readingTime: 7,
    tags: [
      "React Native",
      "Flutter",
      "Mobile Development",
      "Switzerland",
      "Cross-Platform",
    ],
    relatedPosts: [
      "swiss-startup-tech-stack-2026",
      "nextjs-payload-cms-swiss-sme-websites",
      "typescript-migration-legacy-codebases",
    ],
    faq: [
      {
        question: "Can we share code between a Next.js web app and a React Native app?",
        answer: "Business logic, API clients, TypeScript types, and validation schemas can be shared via a monorepo. UI components cannot be shared — React Native uses different primitives than the DOM.",
      },
      {
        question: "Is Flutter suitable for enterprise mobile apps?",
        answer: "Yes. BMW, Alibaba, and eBay run Flutter in production. The framework has enterprise-grade stability and Google's long-term support commitment.",
      },
      {
        question: "How long does it take to ship a production app with either framework?",
        answer: "For an experienced team: 3–4 months for a solid MVP. Add 2–4 weeks for App Store/Play Store submission and review cycles. Swiss-specific requirements (multilingual, accessibility) add 2–3 weeks.",
      },
      {
        question: "What about Expo for React Native? Should we use it?",
        answer: "Expo managed workflow is excellent for projects that don't need custom native modules. Expo Go accelerates development. If you need Bluetooth, background processing, or custom SDKs, use Expo bare workflow or plain React Native.",
      },
    ],
    translations: {
      de: {
        title: "React Native vs Flutter für Schweizer Mobile-Projekte 2026",
        excerpt: "Beide Frameworks sind ausgereift. Die Wahl hängt von Ihrem Team, Zeitplan und Integrationsanforderungen ab — nicht von Benchmarks.",
        meta: {
          title: "React Native vs Flutter 2026 — Trident Software Blog",
          description: "Entscheidungsleitfaden für React Native vs Flutter in Schweizer Mobile-Projekten: Teamkompetenz, Performance, UI-Anpassung und mehrsprachige Unterstützung.",
        },
      },
      fr: {
        title: "React Native vs Flutter pour les projets mobiles suisses en 2026",
        excerpt: "Les deux frameworks sont matures. Le choix dépend de votre équipe, de votre calendrier et de vos besoins d'intégration — pas des benchmarks.",
        meta: {
          title: "React Native vs Flutter 2026 — Trident Software Blog",
          description: "Guide de décision React Native vs Flutter pour projets mobiles suisses : compétences de l'équipe, performance, personnalisation UI et support multilingue.",
        },
      },
      it: {
        title: "React Native vs Flutter per progetti mobile svizzeri nel 2026",
        excerpt: "Entrambi i framework sono maturi. La scelta dipende dal tuo team, dalla timeline e dai requisiti di integrazione — non dai benchmark.",
        meta: {
          title: "React Native vs Flutter 2026 — Trident Software Blog",
          description: "Guida decisionale React Native vs Flutter per progetti mobile svizzeri: competenze del team, performance, personalizzazione UI e supporto multilingue.",
        },
      },
    },
    meta: {
      title: "React Native vs Flutter for Swiss Mobile Projects 2026 — Trident",
      description: "Practical decision guide for React Native vs Flutter in Swiss mobile projects. Team skills, performance, UI customization, multilingual support, and hiring pool compared.",
    },
  },
  {
    slug: "gitlab-cicd-small-engineering-teams",
    image: "/images/stock/workspace-2.jpg",
    title: "GitLab CI/CD for Small Engineering Teams: A Practical Setup",
    excerpt: "You don't need a DevOps team to run good CI/CD. Here's the GitLab pipeline configuration we use for 2–8 person teams — covering testing, building, and deployment with minimal maintenance overhead.",
    content: `## The Goal: CI/CD That Doesn't Require a Dedicated DevOps Engineer

Large teams can afford pipeline specialists. Small teams need pipelines that mostly run themselves, are easy to debug when they fail, and don't require tribal knowledge to extend.

This is the configuration we've standardized on after running GitLab CI for 15+ projects.

## Pipeline Structure

A good small-team pipeline has four stages:

\`\`\`yaml
stages:
  - validate    # lint, type-check, security scan (fast, fail early)
  - test        # unit tests, integration tests
  - build       # Docker image or static bundle
  - deploy      # push to staging or production
\`\`\`

The critical rule: **validate before test, test before build**. Don't spend 5 minutes building an image for code that fails a 30-second type check.

## A Real .gitlab-ci.yml for a Node.js App

\`\`\`yaml
image: node:20-alpine

variables:
  DOCKER_TLS_CERTDIR: "/certs"

cache:
  key: \${CI_COMMIT_REF_SLUG}
  paths:
    - node_modules/
    - .pnpm-store/

validate:
  stage: validate
  script:
    - corepack enable && pnpm install --frozen-lockfile
    - pnpm lint
    - pnpm typecheck
  only:
    - merge_requests
    - main

test:
  stage: test
  script:
    - corepack enable && pnpm install --frozen-lockfile
    - pnpm test --coverage
  coverage: '/Liness*:s*(d+.?d*)%/'
  artifacts:
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage/cobertura-coverage.xml

build:
  stage: build
  image: docker:24
  services:
    - docker:24-dind
  script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .
    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
  only:
    - main

deploy_staging:
  stage: deploy
  environment: staging
  script:
    - ssh deploy@$STAGING_HOST "docker pull $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA && docker compose up -d"
  only:
    - main
  when: on_success
\`\`\`

## Caching: The Single Biggest Speed Improvement

For Node.js pipelines, \`node_modules\` caching is the difference between 3-minute and 8-minute pipelines. Key rules:

| Cache key strategy | When to use |
|---|---|
| Branch name | Feature branches (isolated cache per branch) |
| Lockfile hash | Share cache between branches with identical deps |
| Global | Monorepos where all packages share dependencies |

## Merge Request Pipelines vs Branch Pipelines

Use \`rules\` (not \`only/except\`) for modern GitLab CI. The pattern that works:

\`\`\`yaml
rules:
  - if: $CI_PIPELINE_SOURCE == "merge_request_event"  # runs on MR
  - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH        # runs on main
\`\`\`

This avoids duplicate pipelines (a common small-team frustration) while ensuring both MRs and main branch are covered.

## Environment Variables and Secrets

Never commit secrets. Use:
- **GitLab CI/CD Variables** (Settings → CI/CD → Variables) for production secrets
- **\`.env.example\`** in the repo documenting required variables without values
- **Masked variables** in GitLab to prevent accidental log exposure

Rotate secrets quarterly. Audit which pipelines have access to production variables — not all jobs should.`,
    author: "Trident Software Team",
    authorRole: "Engineering Blog",
    publishedAt: "2026-01-08",
    readingTime: 8,
    tags: [
      "GitLab",
      "CI/CD",
      "DevOps",
      "Docker",
      "Node.js",
    ],
    relatedPosts: [
      "docker-compose-local-dev",
      "automated-testing-pyramid-small-teams",
      "typescript-migration-legacy-codebases",
    ],
    faq: [
      {
        question: "How long should a CI pipeline take for a small team project?",
        answer: "Under 5 minutes for the validate+test stages combined. Build+deploy adds 3–5 minutes. If validate+test takes more than 8 minutes, split tests into parallel jobs or investigate slow test suites.",
      },
      {
        question: "Should we use GitLab-hosted runners or self-hosted?",
        answer: "GitLab-hosted runners (SaaS) for most small teams — zero maintenance, predictable costs. Self-host only if you need custom hardware (GPU builds, specific OS), very high usage volumes, or strict data residency requirements.",
      },
      {
        question: "How do we handle database migrations in CI/CD?",
        answer: "Run migrations as a separate job before deploy, with a rollback script ready. Never run migrations and deploy simultaneously — if the deploy fails, you can't easily undo migrations that already ran.",
      },
      {
        question: "What's the right way to handle staging vs production deployments?",
        answer: "Use GitLab environments with manual gates for production. main branch auto-deploys to staging. Production deployment requires a manual approval in the GitLab UI from a team lead.",
      },
    ],
    translations: {
      de: {
        title: "GitLab CI/CD für kleine Entwicklungsteams: Ein praktisches Setup",
        excerpt: "Sie brauchen kein DevOps-Team für gutes CI/CD. Unsere GitLab-Pipeline-Konfiguration für 2–8-Personen-Teams — Tests, Builds und Deployments mit minimalem Wartungsaufwand.",
        meta: {
          title: "GitLab CI/CD für kleine Teams — Trident Software Blog",
          description: "Praktische GitLab CI/CD-Konfiguration für kleine Entwicklungsteams: Pipeline-Struktur, Caching-Strategien, Secrets-Management und Environment-Deployments.",
        },
      },
      fr: {
        title: "GitLab CI/CD pour les petites équipes : une configuration pratique",
        excerpt: "Vous n'avez pas besoin d'une équipe DevOps dédiée pour un bon CI/CD. Notre configuration GitLab pour des équipes de 2 à 8 personnes.",
        meta: {
          title: "GitLab CI/CD pour petites équipes — Trident Software Blog",
          description: "Configuration pratique GitLab CI/CD pour petites équipes : structure de pipeline, stratégies de cache, gestion des secrets et déploiements par environnement.",
        },
      },
      it: {
        title: "GitLab CI/CD per piccoli team di sviluppo: una configurazione pratica",
        excerpt: "Non hai bisogno di un team DevOps dedicato per un buon CI/CD. La nostra configurazione GitLab per team da 2 a 8 persone.",
        meta: {
          title: "GitLab CI/CD per piccoli team — Trident Software Blog",
          description: "Configurazione pratica GitLab CI/CD per piccoli team: struttura pipeline, strategie di caching, gestione dei segreti e deployment per ambiente.",
        },
      },
    },
    meta: {
      title: "GitLab CI/CD for Small Engineering Teams — Trident Software Blog",
      description: "Practical GitLab CI/CD setup for 2–8 person teams. Pipeline structure, Node.js caching, Docker builds, environment deployments, and secrets management.",
    },
  },
  {
    slug: "custom-erp-vs-off-the-shelf",
    image: "/images/stock/clinic-2.jpg",
    title: "Custom ERP vs Off-the-Shelf: A Decision Framework for Swiss Companies",
    excerpt: "SAP, Abacus, and Bexio handle 80% of Swiss SME needs. The remaining 20% is where custom development earns its price. Here's how to identify which category your business is in.",
    content: `## The Default Answer Is Off-the-Shelf

Custom ERP development is expensive, time-consuming, and requires ongoing engineering investment. Before evaluating custom software, every Swiss company should honestly assess the major off-the-shelf options.

| Platform | Best For | Annual Cost Range |
|---|---|---|
| Bexio | Swiss SMEs <50 employees, simple ops | CHF 1,200–6,000 |
| Abacus | Swiss mid-market, accounting-heavy | CHF 8,000–50,000 |
| SAP Business One | 20–250 employee companies, complex ops | CHF 30,000–200,000 |
| Odoo | Growing companies needing modules | CHF 5,000–40,000 |

If your needs fit within one of these platforms, use it. The maintenance cost of off-the-shelf software is a fraction of custom software — and the feature set improves annually without your investment.

## The 20% Where Custom Development Wins

Custom ERP components make sense when:

**1. Your process is genuinely unique**
Not "we do things slightly differently" unique, but "no standard software models this" unique. Examples: multi-currency commodity trading with custom settlement logic, specialized Swiss regulatory reporting, industry-specific certification workflows.

**2. Integration with proprietary systems**
When your ERP needs to deeply integrate with hardware, legacy systems, or industry-specific platforms that off-the-shelf vendors don't support, custom middleware or modules become necessary.

**3. Volume economics**
At scale, per-seat SaaS pricing becomes significant. A 500-person company paying CHF 100/seat/month = CHF 600K/year. A custom system built for CHF 400K that runs for 5 years changes the math.

**4. Competitive differentiation**
If the operational software IS the competitive advantage (proprietary pricing logic, unique customer experience, algorithmic dispatch), it must be custom.

## The Hybrid Approach (Most Common Recommendation)

The most pragmatic answer for most Swiss companies: **off-the-shelf core + custom periphery**.

\`\`\`
[Abacus / SAP / Odoo]           ← Core ERP (financials, HR, standard ops)
        |
    [Custom API Layer]           ← Integration hub
        |
[Custom Modules]                 ← Unique processes only
[Customer Portal]
[Field Operations App]
[Industry-Specific Reporting]
\`\`\`

This approach preserves the stability of proven ERP software for financial data while allowing custom development exactly where it creates value.

## Questions to Answer Before Deciding

1. Can we configure (not customize) an off-the-shelf platform to handle this?
2. What is the 5-year total cost of ownership for each option?
3. What happens when our team grows from 50 to 200 people — does the system scale?
4. Who maintains this software when the original developers are unavailable?
5. If we build custom, what is the data export strategy if we switch later?

Question 4 is the one most clients skip. Custom software requires ongoing engineering. If your vendor disappears, the system becomes unmaintainable. Ensure you own the source code and can hire others to maintain it.`,
    author: "Bohdan Voitovych",
    authorRole: "Project Manager, Trident Software",
    publishedAt: "2026-01-22",
    readingTime: 7,
    tags: [
      "ERP",
      "Switzerland",
      "Software Architecture",
      "Project Management",
      "SMB",
    ],
    relatedPosts: [
      "fixed-price-software-contracts-pros-cons",
      "swiss-startup-tech-stack-2026",
      "microservices-vs-monolith-startup-mvp",
    ],
    faq: [
      {
        question: "Is Abacus ERP a good choice for Swiss companies?",
        answer: "Abacus is the dominant Swiss accounting and ERP platform and handles Swiss-specific requirements (VAT, payroll, OASI) out of the box. It's the right choice for most Swiss mid-market companies until operational complexity exceeds its module set.",
      },
      {
        question: "How long does custom ERP development take?",
        answer: "A complete custom ERP from scratch: 18–36 months. A custom module for an existing ERP: 3–9 months. A custom integration layer connecting multiple systems: 2–6 months. Scope determines timeline more than any other factor.",
      },
      {
        question: "What should we expect to pay for custom ERP development in Switzerland?",
        answer: "CHF 150–250/hour for Swiss development teams. A medium-complexity custom module (3–6 months, 2-developer team) costs CHF 150K–350K. Full custom ERP replacements start at CHF 500K.",
      },
      {
        question: "Can we start with off-the-shelf and migrate to custom later?",
        answer: "Yes, and this is often the right path. Start with Odoo or Abacus to validate your processes, identify where the standard software creates friction, and build custom components specifically for those friction points.",
      },
    ],
    translations: {
      de: {
        title: "Custom ERP vs. Standardsoftware: Ein Entscheidungsrahmen für Schweizer Unternehmen",
        excerpt: "SAP, Abacus und Bexio decken 80% der Schweizer KMU-Bedürfnisse ab. Die restlichen 20% sind der Bereich, wo individuelle Entwicklung ihren Preis rechtfertigt.",
        meta: {
          title: "Custom ERP vs Standardsoftware Schweiz — Trident Software Blog",
          description: "Entscheidungsrahmen für Custom ERP vs. Standardsoftware: Wann Bexio, Abacus und SAP reichen und wann individuelle Entwicklung sinnvoll ist.",
        },
      },
      fr: {
        title: "ERP sur mesure vs logiciel standard : cadre décisionnel pour entreprises suisses",
        excerpt: "SAP, Abacus et Bexio couvrent 80% des besoins des PME suisses. Les 20% restants justifient le développement sur mesure. Voici comment identifier votre cas.",
        meta: {
          title: "ERP sur mesure vs standard en Suisse — Trident Software Blog",
          description: "Cadre décisionnel ERP sur mesure vs logiciel standard : quand Bexio, Abacus et SAP suffisent et quand le développement personnalisé est justifié.",
        },
      },
      it: {
        title: "ERP personalizzato vs software standard: un framework decisionale per aziende svizzere",
        excerpt: "SAP, Abacus e Bexio coprono l'80% delle esigenze delle PMI svizzere. Il restante 20% è dove lo sviluppo personalizzato giustifica il suo costo.",
        meta: {
          title: "ERP personalizzato vs standard in Svizzera — Trident Software Blog",
          description: "Framework decisionale ERP personalizzato vs software standard: quando Bexio, Abacus e SAP bastano e quando lo sviluppo su misura è giustificato.",
        },
      },
    },
    meta: {
      title: "Custom ERP vs Off-the-Shelf for Swiss Companies — Trident Software",
      description: "Decision framework for Swiss companies choosing between custom ERP and platforms like SAP, Abacus, or Odoo. Cost comparison, hybrid approach, and when custom wins.",
    },
  },
  {
    slug: "ai-document-processing-invoices-contracts",
    image: "/images/stock/dispatch-2.jpg",
    title: "AI-Powered Document Processing for Invoices and Contracts",
    excerpt: "Extracting structured data from PDFs sounds simple until you face scanned faxes, multi-page contracts with tables, and invoices from 40 different suppliers with different formats. Here's what actually works.",
    content: `## The Document Processing Problem Is Harder Than It Looks

Ask any accountant how much time they spend on invoice data entry and the answer is "too much." The promise of AI document processing is automating this. The reality requires more engineering than a single API call.

After building document processing pipelines for 6 clients across finance, logistics, and legal, here's the honest architecture.

## Input Classification First

Not all documents are equal. Before extraction, classify:

| Document Type | Recommended Approach |
|---|---|
| Machine-generated PDF | pdfplumber / pypdf for direct text extraction (no AI needed) |
| Scanned PDF (good quality) | OCR (Tesseract or AWS Textract) → LLM extraction |
| Scanned PDF (poor quality) | Image preprocessing → OCR → LLM with validation |
| Multi-page with tables | AWS Textract or Azure Document Intelligence |
| Handwritten | GPT-4V or Claude 3.5 Sonnet vision directly |

The biggest optimization: use AI only where needed. Machine-generated PDFs with selectable text don't need vision models.

## The Extraction Architecture

\`\`\`
PDF Input
    │
    ▼
[PDF type detection]
    │
    ├── Machine PDF → [pdfplumber] → structured text
    │
    └── Scanned → [OCR] → raw text
                              │
                              ▼
                    [LLM Extraction Prompt]
                    "Extract: vendor, amount, date,
                     line items, VAT, IBAN"
                              │
                              ▼
                    [JSON Schema Validation]
                              │
                              ├── Valid → Store
                              └── Invalid → Human review queue
\`\`\`

## The Extraction Prompt That Works

Generic "extract data from this invoice" prompts produce inconsistent JSON. Use a typed schema prompt:

\`\`\`typescript
const extractionSchema = {
  vendor_name: "string",
  vendor_iban: "string | null",
  invoice_number: "string",
  invoice_date: "YYYY-MM-DD",
  due_date: "YYYY-MM-DD | null",
  currency: "CHF | EUR | USD",
  subtotal: "number",
  vat_rate: "number | null",
  vat_amount: "number | null",
  total: "number",
  line_items: [{ description: "string", quantity: "number", unit_price: "number", total: "number" }]
}

const prompt = \`Extract invoice data as JSON matching this schema exactly:
\${JSON.stringify(extractionSchema, null, 2)}

If a field is not found, use null. Do not invent values.
Invoice text: \${documentText}\`
\`\`\`

## Validation Layer (Critical)

Never trust LLM output directly. Validate:

- **Math check**: sum(line_items.total) ≈ subtotal (within 0.01 rounding)
- **Date sanity**: invoice_date < due_date, both within ±5 years of today
- **IBAN format**: validate checksum algorithmically
- **Currency consistency**: all amounts in stated currency

Failed validation → human review queue, not silent failure.

## Model Selection for Swiss Documents

For Swiss-specific documents (VAT, IBAN, CHF, DE/FR/IT text):

- **Claude 3.5 Sonnet**: Best for complex contracts with mixed languages
- **GPT-4V**: Comparable for invoices, slightly better table extraction
- **AWS Textract**: Best for high-volume standardized forms (same supplier repeatedly)

Cost comparison for 1,000 invoices/month: Claude API ~CHF 40, GPT-4V ~CHF 55, Textract ~CHF 15 (but requires more post-processing).`,
    author: "Trident Software Team",
    authorRole: "Engineering Blog",
    publishedAt: "2026-02-05",
    readingTime: 9,
    tags: [
      "AI",
      "Document Processing",
      "LLM",
      "Automation",
      "Invoice",
    ],
    relatedPosts: [
      "ai-agent-b2b-automation",
      "on-premise-llm-swiss-companies",
      "openai-vs-anthropic-api-cost-sme",
    ],
    faq: [
      {
        question: "What accuracy should we expect from AI invoice extraction?",
        answer: "For machine-generated PDFs: 95–99% field accuracy. For clean scans: 88–95%. For poor-quality scans or handwritten documents: 75–88%. Always build a human review queue for low-confidence extractions.",
      },
      {
        question: "Can this handle invoices in German, French, and Italian?",
        answer: "Yes. Claude 3.5 Sonnet and GPT-4V handle all Swiss national languages well. The extraction schema works regardless of invoice language — the model translates implicitly.",
      },
      {
        question: "How do we handle supplier-specific invoice formats that recur frequently?",
        answer: "For high-volume recurring suppliers, use a template-matching approach first (pattern matching on known fields positions) and fall back to LLM extraction only for new or unusual formats.",
      },
      {
        question: "What about GDPR/nFADP compliance for invoice data?",
        answer: "Invoice PDFs often contain personal data (employee names, individual vendor details). Sending them to external APIs requires DPAs with the providers. Consider on-premise processing for sensitive documents.",
      },
    ],
    translations: {
      de: {
        title: "KI-gestützte Dokumentenverarbeitung für Rechnungen und Verträge",
        excerpt: "Strukturierte Daten aus PDFs zu extrahieren klingt einfach, bis man es mit gescannten Faxen, mehrseitigen Verträgen und 40 verschiedenen Lieferantenformaten zu tun hat.",
        meta: {
          title: "KI-Dokumentenverarbeitung für Rechnungen — Trident Software Blog",
          description: "Architektur für KI-gestützte Rechnungs- und Vertragsverarbeitung: OCR, LLM-Extraktion, Validierung und Modellvergleich für Schweizer Dokumente.",
        },
      },
      fr: {
        title: "Traitement de documents par IA pour factures et contrats",
        excerpt: "Extraire des données structurées de PDF semble simple jusqu'à ce qu'on soit confronté à des fax scannés, des contrats multi-pages et 40 formats fournisseurs différents.",
        meta: {
          title: "Traitement IA de factures et contrats — Trident Software Blog",
          description: "Architecture pour le traitement de documents par IA : OCR, extraction LLM, validation et comparaison de modèles pour documents suisses.",
        },
      },
      it: {
        title: "Elaborazione documenti con AI per fatture e contratti",
        excerpt: "Estrarre dati strutturati dai PDF sembra semplice finché non si affrontano fax scansionati, contratti multipagina e 40 formati fornitore diversi.",
        meta: {
          title: "Elaborazione AI di fatture e contratti — Trident Software Blog",
          description: "Architettura per l'elaborazione AI di documenti: OCR, estrazione LLM, validazione e confronto modelli per documenti svizzeri.",
        },
      },
    },
    meta: {
      title: "AI Document Processing for Invoices and Contracts — Trident Software",
      description: "Real-world architecture for AI invoice and contract processing: document classification, OCR pipeline, LLM extraction prompts, validation layer, and model cost comparison.",
    },
  },
]
