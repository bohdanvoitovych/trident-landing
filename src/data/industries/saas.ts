import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'saas',
  icon: 'cloud',
  techStack: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'Stripe', 'PostHog', 'AWS'],
  relatedCases: ['kleap-ai-builder'],
  relatedServices: ['software-engineering', 'ai-services', 'devops-and-sre'],
  content: {
    en: {
      title: 'SaaS & Software Products',
      tagline: 'From MVP to scalable multi-tenant platform',
      description:
        'We build SaaS products from the ground up — multi-tenant architecture, subscription billing, usage analytics, and white-label capabilities for software companies and startups.',
      challenges: [
        {
          title: 'Multi-tenancy',
          description: 'Isolated tenant data, custom domains, and per-tenant configuration at scale.',
        },
        {
          title: 'Billing complexity',
          description: 'Usage-based pricing, tiered plans, and trial conversions across markets.',
        },
        {
          title: 'Scaling architecture',
          description: 'Moving from MVP architecture to systems that handle 100x growth.',
        },
      ],
      solutions: [
        {
          title: 'SaaS architecture',
          description: 'Multi-tenant data isolation, custom domains, SSO and RBAC.',
        },
        {
          title: 'Subscription billing',
          description: 'Stripe integration with usage metering and dunning workflows.',
        },
        {
          title: 'Analytics & observability',
          description: 'Product analytics, feature flags, and SLO monitoring.',
        },
        {
          title: 'AI feature integration',
          description: 'LLM-powered features: copilots, search, content generation.',
        },
      ],
      meta: {
        title: 'SaaS Development Services | Trident Software',
        description:
          'SaaS product development — multi-tenant architecture, subscription billing, AI features. From MVP to scale. Swiss engineering.',
      },
    },
  },
}

export default record
