import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'zurich',
  relatedServices: ['ai-services', 'software-engineering', 'cloud-consulting', 'devops-and-sre'],
  relatedCases: ['kleap-ai-builder', '8move-driver'],
  content: {
    en: {
      name: 'Zurich',
      region: 'Canton of Zurich',
      tagline: "Custom software for Switzerland's technology capital",
      description:
        'Zurich hosts Google, Meta, Apple, UBS, Credit Suisse, and hundreds of fintech startups. We build custom web platforms, AI-powered tools, and enterprise integrations for Zurich-based companies — delivering Swiss quality with Valais efficiency.',
      keyIndustries: ['Fintech', 'Banking', 'Crypto', 'Enterprise SaaS', 'Deep Tech'],
      highlights: [
        {
          title: 'Fintech expertise',
          description:
            'Banking APIs, payment processing, KYC automation, and regulatory reporting for Swiss financial institutions.',
        },
        {
          title: 'Google-grade engineering',
          description:
            "Scalable architectures used by Zurich's tech giants — microservices, event-driven backends, observability stacks.",
        },
        {
          title: 'Crypto Valley ready',
          description:
            'Smart contract integrations, Web3 dashboards, and blockchain-backed audit trails for Crypto Valley startups.',
        },
      ],
      meta: {
        title: 'Software Development Zurich | Trident Software Switzerland',
        description:
          'Custom software development in Zurich. We build AI-powered tools, fintech platforms, and enterprise web apps for Zurich companies. Swiss quality, Valais pricing.',
      },
    },
  },
}

export default record
