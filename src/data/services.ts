export type ServiceFeature = {
  title: string
  description: string
}

export type ServiceData = {
  slug: string
  title: string
  tagline: string
  description: string
  icon: string
  features: ServiceFeature[]
  techStack: string[]
  relatedCases: string[]
  meta: {
    title: string
    description: string
  }
}

export const services: ServiceData[] = [
  {
    slug: 'ai-services',
    title: 'AI Services for Business',
    tagline: 'Practical AI that ships to production',
    description:
      'We integrate LLMs, RAG systems, OCR, STT, and AI agents into your existing business processes. No hype — only production-ready implementations that solve real problems.',
    icon: 'brain',
    features: [
      {
        title: 'LLM Integration & RAG',
        description:
          'Connect your documents and data to language models. On-premise options available for Swiss data residency.',
      },
      {
        title: 'OCR & Document Processing',
        description:
          'Automate invoice, contract, and form processing with AI-powered extraction pipelines.',
      },
      {
        title: 'AI Agents & Automation',
        description:
          'Custom AI agents that handle repetitive workflows, data enrichment, and cross-system orchestration.',
      },
      {
        title: 'Speech-to-Text (STT)',
        description:
          'Multilingual transcription and voice command systems for industrial and healthcare applications.',
      },
      {
        title: 'AI Model Fine-tuning',
        description:
          'Domain-specific model training on your proprietary data for better accuracy and compliance.',
      },
      {
        title: 'On-premise LLM Deployment',
        description:
          'Deploy open-source models (Llama, Mistral) on your infrastructure. Data never leaves your servers.',
      },
    ],
    techStack: [
      'Python',
      'LangChain',
      'LlamaIndex',
      'OpenAI API',
      'Anthropic Claude',
      'Ollama',
      'FastAPI',
      'PostgreSQL + pgvector',
    ],
    relatedCases: ['kleap-ai-builder', 'aida-medicine'],
    meta: {
      title: 'AI Services for Business — Trident Software Switzerland',
      description:
        'Production-ready AI integrations: LLM, RAG, OCR, AI agents. Swiss data residency. On-premise deployment available.',
    },
  },
  {
    slug: 'software-engineering',
    title: 'Software Engineering',
    tagline: 'Full-stack custom software, delivered',
    description:
      'From B2B e-commerce platforms to enterprise internal tools — we design, build, and maintain custom software with a focus on reliability and scalability.',
    icon: 'code-2',
    features: [
      {
        title: 'Custom Web Applications',
        description:
          'React, Next.js, and Node.js applications built for performance and maintainability.',
      },
      {
        title: 'B2B Platform Development',
        description:
          'Complex business logic, tiered pricing, multi-role access, and third-party integrations.',
      },
      {
        title: 'API Design & Integration',
        description:
          'RESTful and GraphQL APIs, webhook systems, and third-party service integrations.',
      },
      {
        title: 'Legacy System Migration',
        description:
          'Modernize outdated systems with minimal disruption to ongoing operations.',
      },
      {
        title: 'Mobile Applications',
        description:
          'Cross-platform apps with Flutter for driver, client, and admin workflows.',
      },
      {
        title: 'QA & Testing',
        description:
          'Automated testing pipelines, load testing, and continuous quality assurance.',
      },
    ],
    techStack: [
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Python',
      'Flutter',
      'PostgreSQL',
      'Redis',
      'Docker',
    ],
    relatedCases: ['zenit-auto-b2b', 'status-m-wms', 'affiliation-platform'],
    meta: {
      title: 'Custom Software Engineering — Trident Software Switzerland',
      description:
        'Full-stack custom software development: web apps, B2B platforms, APIs, mobile. Fixed budgets, Swiss quality.',
    },
  },
  {
    slug: 'embedded-and-iot',
    title: 'Embedded & IoT',
    tagline: 'Software for the physical world',
    description:
      'Firmware development, IoT sensor integration, and industrial monitoring systems. We work with automotive, medical, and industrial clients on mission-critical embedded software.',
    icon: 'cpu',
    features: [
      {
        title: 'Firmware Development',
        description:
          'Bare-metal and RTOS-based firmware for STM32, ESP32, Raspberry Pi, and custom hardware.',
      },
      {
        title: 'IoT Sensor Integration',
        description:
          'End-to-end IoT pipelines: sensor → gateway → cloud → dashboard, with alerting and analytics.',
      },
      {
        title: 'Industrial Monitoring',
        description:
          'Real-time monitoring systems for water treatment, manufacturing, and environmental control.',
      },
      {
        title: 'CAN Bus & Automotive Protocols',
        description:
          'Vehicle diagnostics, OBD integration, and automotive communication protocols.',
      },
      {
        title: 'Medical Device Software',
        description:
          'Software for medical devices with compliance considerations for regulated environments.',
      },
      {
        title: 'Hardware-Software Integration',
        description:
          'Bridging custom hardware designs with robust software stacks and cloud connectivity.',
      },
    ],
    techStack: ['C', 'C++', 'Python', 'STM32', 'ESP32', 'MQTT', 'InfluxDB', 'Grafana', 'AWS IoT'],
    relatedCases: ['tdsbot-iot'],
    meta: {
      title: 'Embedded Software & IoT Development — Trident Software Switzerland',
      description:
        'Firmware, IoT, and industrial monitoring systems. Automotive, medical, and industrial clients. Swiss engineering.',
    },
  },
  {
    slug: 'cto-as-a-service',
    title: 'CTO-as-a-Service',
    tagline: 'Technical leadership without the full-time cost',
    description:
      'For startups and scale-ups that need senior technical leadership: architecture decisions, team building, technology strategy, and hands-on delivery oversight.',
    icon: 'shield-check',
    features: [
      {
        title: 'Architecture & Tech Strategy',
        description:
          'Define the right technology stack, cloud strategy, and scalability plan for your growth stage.',
      },
      {
        title: 'Team Building & Hiring',
        description:
          'Technical interviews, team structure, onboarding processes, and engineering culture.',
      },
      {
        title: 'MVP to Product',
        description:
          'Guide your product from prototype to production-ready, avoiding common scaling pitfalls.',
      },
      {
        title: 'Vendor & Agency Management',
        description:
          'Evaluate and manage outsourced teams, agencies, and technology vendors.',
      },
      {
        title: 'Security & Compliance Review',
        description:
          'Technical security audits, GDPR/nFADP compliance, and ISO 27001 readiness assessment.',
      },
      {
        title: 'Investor & Board Reporting',
        description:
          'Technical due diligence preparation and engineering KPI reporting for investors.',
      },
    ],
    techStack: [
      'Architecture Review',
      'AWS / GCP / Azure',
      'Security Auditing',
      'Process Design',
      'Team Leadership',
    ],
    relatedCases: ['kleap-ai-builder', 'go-valais'],
    meta: {
      title: 'CTO-as-a-Service — Trident Software Switzerland',
      description:
        'Fractional CTO services for startups and SMEs. Architecture, team building, tech strategy. Swiss-based.',
    },
  },
  {
    slug: 'cloud-consulting',
    title: 'Cloud Consulting',
    tagline: 'Cloud infrastructure that scales with your business',
    description:
      'Cloud architecture, migration, and optimization on AWS, GCP, and Azure. Infrastructure as code, cost optimization, and multi-region deployments.',
    icon: 'cloud',
    features: [
      {
        title: 'Cloud Migration',
        description:
          'Move from on-premise or legacy cloud to modern, cost-efficient infrastructure.',
      },
      {
        title: 'Infrastructure as Code',
        description: 'Terraform, Pulumi, and CloudFormation for repeatable, version-controlled infra.',
      },
      {
        title: 'Kubernetes & Container Orchestration',
        description: 'Production-grade Kubernetes clusters with monitoring, autoscaling, and GitOps.',
      },
      {
        title: 'Cost Optimization',
        description:
          'Analyze and reduce cloud spend through right-sizing, reserved capacity, and architecture review.',
      },
      {
        title: 'Multi-region & HA',
        description:
          'High-availability designs with failover, data replication, and disaster recovery.',
      },
      {
        title: 'Swiss Data Residency',
        description:
          'Architecture that keeps data within Swiss borders for nFADP and compliance requirements.',
      },
    ],
    techStack: ['AWS', 'GCP', 'Azure', 'Terraform', 'Kubernetes', 'Docker', 'Helm', 'Datadog', 'Prometheus'],
    relatedCases: ['8move-admin'],
    meta: {
      title: 'Cloud Consulting & Infrastructure — Trident Software Switzerland',
      description:
        'AWS, GCP, Azure cloud architecture, migration, and optimization. Terraform, Kubernetes, Swiss data residency.',
    },
  },
  {
    slug: 'devops-and-sre',
    title: 'DevOps & SRE',
    tagline: 'Ship faster, fail less',
    description:
      'CI/CD pipelines, monitoring, incident response, and reliability engineering. We embed DevOps practices into your development workflow from day one.',
    icon: 'git-branch',
    features: [
      {
        title: 'CI/CD Pipeline Design',
        description: 'GitHub Actions, GitLab CI, Jenkins — automated build, test, and deployment pipelines.',
      },
      {
        title: 'Monitoring & Alerting',
        description: 'Datadog, Prometheus, Grafana, and Loki for full observability across your stack.',
      },
      {
        title: 'Incident Management',
        description: 'On-call processes, runbooks, post-mortems, and SLA/SLO definition.',
      },
      {
        title: 'Security Hardening',
        description: 'Secrets management, vulnerability scanning, and SAST/DAST integration.',
      },
      {
        title: 'Database Operations',
        description: 'Backup strategies, replication, migrations, and performance tuning.',
      },
      {
        title: 'Platform Engineering',
        description: 'Internal developer platforms that improve engineering velocity and standardization.',
      },
    ],
    techStack: [
      'GitHub Actions',
      'GitLab CI',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Datadog',
      'Prometheus',
      'Grafana',
      'Vault',
    ],
    relatedCases: ['8move-admin'],
    meta: {
      title: 'DevOps & SRE Services — Trident Software Switzerland',
      description:
        'CI/CD, monitoring, incident management, and platform engineering. Swiss-based DevOps consultancy.',
    },
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    tagline: 'Interfaces that convert and delight',
    description:
      'Product design from wireframes to production-ready UI systems. We design for B2B enterprise dashboards, e-commerce, and consumer mobile apps.',
    icon: 'palette',
    features: [
      {
        title: 'UX Research & Audit',
        description: 'User interviews, usability testing, and heuristic evaluation of existing products.',
      },
      {
        title: 'Information Architecture',
        description: 'Site maps, user flows, and navigation design that reduce cognitive load.',
      },
      {
        title: 'Wireframing & Prototyping',
        description: 'Low and high-fidelity prototypes in Figma for validation before development.',
      },
      {
        title: 'Design System Creation',
        description:
          'Scalable component libraries with tokens, variants, and documentation for engineering teams.',
      },
      {
        title: 'B2B Dashboard Design',
        description:
          'Data-dense admin interfaces, analytics dashboards, and enterprise management tools.',
      },
      {
        title: 'Mobile UI Design',
        description: 'iOS and Android design following platform guidelines and accessibility standards.',
      },
    ],
    techStack: ['Figma', 'Framer', 'Storybook', 'React', 'Tailwind CSS', 'shadcn/ui'],
    relatedCases: ['8move-driver', 'samange-fashion', 'lapochette'],
    meta: {
      title: 'UI/UX Design Services — Trident Software Switzerland',
      description:
        'Product design, design systems, B2B dashboards, mobile UI. Figma-based workflow. Swiss design studio.',
    },
  },
  {
    slug: 'team-extension',
    title: 'Team Extension',
    tagline: 'Senior engineers, embedded in your team',
    description:
      'Augment your in-house team with senior engineers from our CH+IL+UA talent pool. Full-time or part-time, short-term or long-term — with Swiss accountability.',
    icon: 'users',
    features: [
      {
        title: 'Senior Engineer Placement',
        description:
          'Backend, frontend, mobile, DevOps, and ML engineers with 5+ years of commercial experience.',
      },
      {
        title: 'Flexible Engagement',
        description: 'Part-time (20h/week), full-time (40h/week), or project-based engagements.',
      },
      {
        title: 'Swiss Contract & Accountability',
        description:
          'All engagements are under Swiss law with NDA, IP transfer, and performance metrics.',
      },
      {
        title: 'Rapid Onboarding',
        description: 'Engineers ready in 1–2 weeks. We handle vetting, onboarding, and performance management.',
      },
      {
        title: 'Time Zone Coverage',
        description: 'CH+IL+UA team spans CET+1 to CET+2, providing near-seamless overlap with European teams.',
      },
      {
        title: 'Knowledge Transfer',
        description: 'Documentation, code reviews, and handover processes built into every engagement.',
      },
    ],
    techStack: ['TypeScript', 'Python', 'React', 'Flutter', 'DevOps', 'ML/AI'],
    relatedCases: [],
    meta: {
      title: 'Team Extension Services — Trident Software Switzerland',
      description:
        'Senior software engineers for team augmentation. Swiss contract, CET timezone, 1–2 week start. Backend, frontend, DevOps, ML.',
    },
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}
