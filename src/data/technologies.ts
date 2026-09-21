export type TechnologyData = {
  slug: string
  name: string
  iconSlug?: string
  category: string
  tagline: string
  description: string
  useCases: { title: string; description: string }[]
  benefits: string[]
  complementaryStack: string[]
  relatedServices: string[]
  relatedCases: string[]
  meta: { title: string; description: string }
}

export const technologies: TechnologyData[] = [
  {
    slug: 'nextjs',
    name: 'Next.js',
    iconSlug: 'nextdotjs',
    category: 'Frontend & Full-Stack',
    tagline: 'Production-grade web applications with Next.js for Swiss companies',
    description:
      'Next.js is our primary framework for building fast, SEO-optimised, and scalable web applications. We use Next.js App Router with TypeScript for everything from corporate websites to complex B2B portals and SaaS platforms. Swiss companies benefit from our deep experience across hundreds of Next.js deployments.',
    useCases: [
      {
        title: 'B2B SaaS platforms',
        description:
          'Multi-tenant dashboards, admin panels, and API-backed web apps with server-side auth and real-time data.',
      },
      {
        title: 'Marketing & landing pages',
        description:
          'Blazing-fast landing pages with 100 Lighthouse scores, ISR, and CMS integration via Payload or Sanity.',
      },
      {
        title: 'E-commerce storefronts',
        description:
          'Headless commerce frontends connecting to Shopify, WooCommerce, or custom product catalogs.',
      },
      {
        title: 'Customer portals',
        description:
          'Authenticated dashboards for end-customers: order tracking, document management, account self-service.',
      },
    ],
    benefits: [
      'App Router with RSC reduces client JS by 60–80%',
      'Built-in image optimisation and font subsetting',
      'Incremental Static Regeneration for always-fresh content',
      'First-class TypeScript support',
      'Standalone Docker output for VPS and Kubernetes',
    ],
    complementaryStack: [
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Payload CMS',
      'Docker',
      'Vercel / Coolify',
    ],
    relatedServices: ['software-engineering', 'ui-ux-design', 'cto-as-a-service'],
    relatedCases: ['kleap-ai-builder', 'lapochette', 'iam-trade'],
    meta: {
      title: 'Next.js Development Switzerland | Trident Software',
      description:
        'Expert Next.js development for Swiss companies. App Router, TypeScript, Payload CMS, Docker. From marketing sites to complex B2B platforms. Valais-based team.',
    },
  },
  {
    slug: 'flutter',
    name: 'Flutter',
    iconSlug: 'flutter',
    category: 'Mobile Development',
    tagline: 'One codebase. iOS and Android. Built in Switzerland.',
    description:
      "Flutter lets us ship production-quality iOS and Android apps from a single Dart codebase — cutting development time and maintenance cost in half. We've used Flutter for logistics driver apps, medical patient portals, and B2B field service applications across Switzerland and Europe.",
    useCases: [
      {
        title: 'Field service & logistics apps',
        description:
          'Driver apps, delivery confirmation, route optimisation, and offline-capable workflows for mobile workers.',
      },
      {
        title: 'B2B mobile portals',
        description:
          'Client-facing apps for order management, reporting, and real-time inventory visibility for Swiss wholesalers.',
      },
      {
        title: 'Medical & health apps',
        description:
          'Patient-facing apps with secure data sync, appointment booking, and HL7 FHIR integration.',
      },
      {
        title: 'Internal enterprise tools',
        description:
          'Mobile-first inspection checklists, audit tools, and warehouse scanning apps for operational teams.',
      },
    ],
    benefits: [
      'Single codebase = half the maintenance cost',
      'Near-native performance via Skia/Impeller rendering',
      'Strong typing via Dart — fewer runtime crashes',
      'Hot reload accelerates iteration speed 3x',
      'Works offline with local SQLite + sync on reconnect',
    ],
    complementaryStack: [
      'Dart',
      'Riverpod / Bloc',
      'Firebase',
      'REST / GraphQL',
      'SQLite (Drift)',
      'Fastlane CI/CD',
    ],
    relatedServices: ['software-engineering', 'embedded-and-iot', 'cto-as-a-service'],
    relatedCases: ['8move-driver', 'tdsbot-iot'],
    meta: {
      title: 'Flutter App Development Switzerland | iOS & Android | Trident Software',
      description:
        'Flutter mobile app development for Swiss companies. Single codebase, iOS + Android, offline-capable. Logistics, medical, B2B apps. Swiss development team.',
    },
  },
  {
    slug: 'typescript',
    name: 'TypeScript',
    iconSlug: 'typescript',
    category: 'Language & Full-Stack',
    tagline: 'Type-safe full-stack JavaScript for reliable Swiss software',
    description:
      'TypeScript is our default language across the entire stack — Node.js APIs, Next.js frontends, React components, and Payload CMS configuration. Type safety eliminates entire categories of runtime errors, reduces debugging time, and makes our code self-documenting. Every Trident project ships with strict TypeScript and zero any.',
    useCases: [
      {
        title: 'Full-stack type sharing',
        description:
          'Shared types between frontend and backend eliminate API contract drift — the #1 source of frontend bugs in distributed teams.',
      },
      {
        title: 'Complex domain modelling',
        description:
          'Discriminated unions, template literal types, and conditional types for modelling complex business logic with compiler guarantees.',
      },
      {
        title: 'API design',
        description:
          'Zod-validated request/response schemas with auto-generated OpenAPI documentation for your API consumers.',
      },
      {
        title: 'Refactoring at scale',
        description:
          "TypeScript's LSP makes large codebase refactors safe — rename a type and fix all 200 usages in seconds, not days.",
      },
    ],
    benefits: [
      'Catches 15–30% of bugs at compile time (Microsoft research)',
      'IDE autocomplete reduces lookup time',
      'Self-documenting code reduces onboarding time',
      'Strict null checks eliminate null-pointer exceptions',
      'Zero runtime overhead — compiles to plain JS',
    ],
    complementaryStack: [
      'Node.js',
      'Next.js',
      'Zod',
      'Prisma / Drizzle',
      'ESLint + strict tsconfig',
      'Vitest',
    ],
    relatedServices: ['software-engineering', 'devops-and-sre', 'cto-as-a-service'],
    relatedCases: ['kleap-ai-builder', 'iam-trade', 'lapochette'],
    meta: {
      title: 'TypeScript Development Switzerland | Trident Software',
      description:
        'Full-stack TypeScript development for Swiss companies. Strict typing, shared types, Zod validation. Node.js, Next.js, Payload. Zero any policy.',
    },
  },
  {
    slug: 'python',
    name: 'Python',
    iconSlug: 'python',
    category: 'AI, ML & Backend',
    tagline: 'AI pipelines, data engineering, and automation built in Python',
    description:
      'Python is our language of choice for AI/ML workloads, data pipelines, and automation scripts. From LLM-powered document processing and computer vision models to ETL pipelines and predictive analytics — we build Python backends that scale from prototype to production without rewriting.',
    useCases: [
      {
        title: 'LLM integration & RAG',
        description:
          'LangChain / LlamaIndex pipelines with OpenAI, Anthropic, or on-premise Llama for document Q&A, summarisation, and AI agents.',
      },
      {
        title: 'Computer vision',
        description:
          'YOLO-based object detection, OCR, and image classification for quality control, document digitisation, and medical imaging.',
      },
      {
        title: 'Data engineering',
        description:
          'ETL pipelines with Airflow or Prefect, data warehouse integration (BigQuery, Snowflake, DuckDB), and business intelligence feeds.',
      },
      {
        title: 'Process automation',
        description:
          'Web scraping, document generation, email automation, and API orchestration scripts replacing manual back-office work.',
      },
    ],
    benefits: [
      'Fastest prototyping speed of any language',
      'Richest ML/AI ecosystem (PyTorch, transformers, scikit-learn)',
      'FastAPI gives Go-like performance for Python APIs',
      'Notebooks for client-facing model transparency',
      'Huge talent pool — easy to hand off to internal team',
    ],
    complementaryStack: [
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Celery',
      'PyTorch / HuggingFace',
    ],
    relatedServices: ['ai-services', 'software-engineering', 'cloud-consulting'],
    relatedCases: ['kleap-ai-builder', 'aida-medicine', 'tdsbot-iot'],
    meta: {
      title: 'Python Development Switzerland | AI & ML Engineering | Trident Software',
      description:
        'Python development for AI, ML, and data engineering in Switzerland. LLM integration, computer vision, FastAPI backends. On-premise and cloud deployment.',
    },
  },
  {
    slug: 'react',
    name: 'React',
    iconSlug: 'react',
    category: 'Frontend',
    tagline: 'Component-based UIs that users actually enjoy',
    description:
      'React is the foundation of our frontend stack — whether inside Next.js, as a standalone SPA, or embedded in a legacy application. We build component libraries, design systems, and high-performance UIs for Swiss companies that need interfaces their customers return to.',
    useCases: [
      {
        title: 'Complex dashboards',
        description:
          'Real-time data visualisation, interactive charts, and filterable data tables for analytics and operational dashboards.',
      },
      {
        title: 'Form-heavy workflows',
        description:
          'Multi-step wizards, conditional field logic, and validation-heavy forms for insurance, finance, and compliance workflows.',
      },
      {
        title: 'Design system implementation',
        description:
          'Token-based component libraries in Radix UI or shadcn/ui that match your brand and scale across multiple products.',
      },
      {
        title: 'Progressive enhancement',
        description:
          'React components embedded in existing server-rendered apps — modernise without a full rewrite.',
      },
    ],
    benefits: [
      'Component reuse reduces UI dev time by 40%+',
      'React DevTools make debugging visual',
      'Server Components eliminate unnecessary client JS',
      'Ecosystem depth: 2M+ packages, every use case covered',
      'Stable API — no framework churn risk',
    ],
    complementaryStack: [
      'TypeScript',
      'Tailwind CSS',
      'Radix UI',
      'React Query / SWR',
      'Zustand / Jotai',
      'Storybook',
    ],
    relatedServices: ['software-engineering', 'ui-ux-design'],
    relatedCases: ['kleap-ai-builder', 'lapochette', 'iam-trade'],
    meta: {
      title: 'React Development Switzerland | UI Engineering | Trident Software',
      description:
        'React UI development for Swiss companies. Dashboards, design systems, SPAs, and component libraries. TypeScript, Radix UI, Tailwind. Swiss dev team.',
    },
  },
  {
    slug: 'nodejs',
    name: 'Node.js',
    iconSlug: 'nodedotjs',
    category: 'Backend & APIs',
    tagline: 'Event-driven APIs and microservices with Node.js',
    description:
      'Node.js powers our REST and GraphQL APIs, real-time WebSocket backends, and microservice architectures. Its non-blocking I/O model makes it ideal for high-concurrency Swiss applications — booking systems, notification hubs, and data aggregation services that need to handle thousands of simultaneous connections.',
    useCases: [
      {
        title: 'REST & GraphQL APIs',
        description:
          'Typed Express / Fastify or NestJS APIs with Zod validation, JWT auth, and OpenAPI documentation.',
      },
      {
        title: 'Real-time backends',
        description:
          'WebSocket servers, SSE event streams, and MQTT brokers for live dashboards, chat, and IoT telemetry.',
      },
      {
        title: 'BFF (Backend for Frontend)',
        description:
          'Thin orchestration layer aggregating multiple microservices into a single frontend-optimised API surface.',
      },
      {
        title: 'Webhook & integration hubs',
        description:
          'Event processing pipelines receiving webhooks from Stripe, GitHub, HubSpot, and other SaaS tools.',
      },
    ],
    benefits: [
      'Same language as frontend — smaller team surface',
      'Non-blocking I/O handles 10k+ concurrent connections',
      'npm ecosystem — fastest integration time for third-party APIs',
      'First-class TypeScript with ts-node / tsx',
      'Low memory footprint vs. JVM alternatives',
    ],
    complementaryStack: ['TypeScript', 'Fastify / NestJS', 'PostgreSQL', 'Redis', 'BullMQ', 'Docker'],
    relatedServices: ['software-engineering', 'devops-and-sre', 'cloud-consulting'],
    relatedCases: ['kleap-ai-builder', 'zenit-auto-b2b', '8move-driver'],
    meta: {
      title: 'Node.js Development Switzerland | API & Backend Engineering | Trident Software',
      description:
        'Node.js API and backend development for Swiss companies. REST, GraphQL, real-time WebSocket. TypeScript, Fastify, PostgreSQL. Swiss dev team.',
    },
  },
  {
    slug: 'postgresql',
    name: 'PostgreSQL',
    iconSlug: 'postgresql',
    category: 'Database',
    tagline: 'Battle-tested relational data for Swiss applications',
    description:
      "PostgreSQL is our default database for every project requiring structured data. Its JSONB support, full-text search, PostGIS spatial extension, and row-level security make it suitable for everything from simple CMS databases to complex multi-tenant SaaS architectures. We've been running Postgres in Swiss production since 2018.",
    useCases: [
      {
        title: 'Multi-tenant SaaS databases',
        description:
          'Row-level security policies enforce tenant isolation at the database layer — not the application layer.',
      },
      {
        title: 'Geospatial data (PostGIS)',
        description:
          'Location-based queries, radius searches, and route planning for logistics, real estate, and smart city apps.',
      },
      {
        title: 'Full-text search',
        description:
          'Swiss German, French, and Italian text search with tsvector and GIN indexes — no Elasticsearch needed for most use cases.',
      },
      {
        title: 'Financial data integrity',
        description:
          'ACID transactions, check constraints, and triggers for ledger systems, payment records, and audit trails.',
      },
    ],
    benefits: [
      'ACID compliance — no silent data corruption',
      'JSONB stores semi-structured data without a second database',
      'Logical replication for zero-downtime migrations',
      'pg_cron for scheduled database jobs',
      'Mature Swiss hosting options (Infomaniak, exoscale, Hetzner)',
    ],
    complementaryStack: [
      'Prisma / Drizzle ORM',
      'pgvector for AI embeddings',
      'pgBackRest for backups',
      'PostGIS',
      'Node.js / Python / Payload CMS',
    ],
    relatedServices: ['software-engineering', 'cloud-consulting', 'devops-and-sre'],
    relatedCases: ['kleap-ai-builder', 'zenit-auto-b2b', 'iam-trade'],
    meta: {
      title: 'PostgreSQL Development Switzerland | Database Engineering | Trident Software',
      description:
        'PostgreSQL database architecture for Swiss applications. Multi-tenant, PostGIS, full-text search. Swiss data residency. Production since 2018.',
    },
  },
  {
    slug: 'docker-kubernetes',
    name: 'Docker & Kubernetes',
    iconSlug: 'docker',
    category: 'DevOps & Infrastructure',
    tagline: 'Containerised deployments that stay up',
    description:
      'We containerise every application we build — Docker for packaging, Docker Compose for development parity, and Kubernetes for orchestrated production workloads. Swiss data residency is ensured by deploying on Swiss-region infrastructure: Infomaniak Cloud, exoscale, or Hetzner Falkenstein.',
    useCases: [
      {
        title: 'Reproducible environments',
        description:
          'Docker Compose ensures dev, staging, and production run identical software — no more "works on my machine" incidents.',
      },
      {
        title: 'GitLab CI/CD pipelines',
        description:
          'Kaniko-based image builds, automatic deployments, and rollback capabilities triggered on every git push to main.',
      },
      {
        title: 'Kubernetes workloads',
        description:
          'Horizontal pod autoscaling, rolling deployments, and health checks for SaaS platforms handling variable load.',
      },
      {
        title: 'Swiss data residency',
        description:
          'Deployment configurations targeting CH-region datacenters — Infomaniak Geneva, exoscale CH-GVA, Hetzner Falkenstein.',
      },
    ],
    benefits: [
      'Identical environments eliminate environment-specific bugs',
      'Container restart policy = automatic recovery from crashes',
      'Resource limits prevent noisy-neighbour incidents',
      'GitOps workflow — infrastructure as code',
      'nFADP compliance via Swiss-region deployment',
    ],
    complementaryStack: [
      'GitLab CI',
      'Caddy reverse proxy',
      'Traefik',
      'Prometheus + Grafana',
      'Portainer',
      'Helm',
    ],
    relatedServices: ['devops-and-sre', 'cloud-consulting', 'software-engineering'],
    relatedCases: ['kleap-ai-builder', '8move-driver', 'zenit-auto-b2b'],
    meta: {
      title: 'Docker & Kubernetes Switzerland | DevOps Engineering | Trident Software',
      description:
        'Docker and Kubernetes deployments for Swiss companies. GitLab CI/CD, Swiss data residency (Infomaniak, exoscale). Container-first engineering.',
    },
  },
  {
    slug: 'ai-llm-integration',
    name: 'AI & LLM Integration',
    iconSlug: 'openai',
    category: 'Artificial Intelligence',
    tagline: 'Embed AI capabilities into your existing business software',
    description:
      'We integrate large language models, computer vision, and machine learning into existing business applications — not as a demo, but as production-ready features. Whether you need an AI document assistant, an automated classification pipeline, or a conversational customer interface, we build it to the standard your Swiss business demands.',
    useCases: [
      {
        title: 'Document intelligence',
        description:
          'OCR + LLM pipelines that extract structured data from invoices, contracts, and forms — 95%+ accuracy on Swiss German documents.',
      },
      {
        title: 'RAG-based assistants',
        description:
          'Internal knowledge bases powered by Retrieval-Augmented Generation — your staff asks questions, the AI answers from your documents.',
      },
      {
        title: 'AI-assisted CRM',
        description:
          'Lead scoring, email drafting, and meeting summary generation integrated directly into your CRM or ERP workflow.',
      },
      {
        title: 'On-premise LLM deployment',
        description:
          'Llama 3, Mistral, or Qwen2 running on your own GPU server — no data leaves Switzerland, full nFADP compliance.',
      },
    ],
    benefits: [
      'On-premise options keep data in Switzerland',
      'LangChain + pgvector for production-ready RAG',
      'Model agnostic — OpenAI today, local LLM tomorrow',
      'Structured output (JSON mode) for reliable pipelines',
      'Evaluation harnesses prevent silent accuracy regression',
    ],
    complementaryStack: [
      'OpenAI / Anthropic API',
      'Ollama + Llama 3',
      'LangChain / LlamaIndex',
      'pgvector',
      'FastAPI',
      'Python',
    ],
    relatedServices: ['ai-services', 'software-engineering', 'cto-as-a-service'],
    relatedCases: ['kleap-ai-builder', 'aida-medicine'],
    meta: {
      title: 'AI & LLM Integration Switzerland | Trident Software',
      description:
        'Production AI integration for Swiss businesses. Document intelligence, RAG assistants, on-premise LLMs (nFADP compliant). We build AI that works in production.',
    },
  },
]

export function getTechnologySlugs(): string[] {
  return technologies.map((t) => t.slug)
}

export function getTechnologyBySlug(slug: string): TechnologyData | undefined {
  return technologies.find((t) => t.slug === slug)
}
