import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'fintech',
  icon: 'landmark',
  techStack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Kafka', 'HSM', 'Azure'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'cloud-consulting', 'devops-and-sre'],
  content: {
    en: {
      title: 'Fintech & Finance',
      tagline: 'Secure financial software under Swiss banking standards',
      description:
        'Banking integrations, payment processing, portfolio management tools, and regulatory reporting systems built to the highest Swiss financial sector standards.',
      challenges: [
        {
          title: 'Banking regulations',
          description: 'FINMA compliance, PSD2, and Swiss Banking Act requirements.',
        },
        {
          title: 'Security requirements',
          description: 'Multi-factor authentication, encryption at rest and in transit, penetration testing.',
        },
        {
          title: 'Core banking integration',
          description: 'API integration with Temenos, Avaloq, and legacy core banking systems.',
        },
      ],
      solutions: [
        {
          title: 'Banking integrations',
          description: 'Open banking API connectors and payment processing pipelines.',
        },
        {
          title: 'Portfolio management',
          description: 'Asset allocation, performance reporting, and risk dashboards.',
        },
        {
          title: 'Regulatory reporting',
          description: 'Automated MiFID II, FATCA, and FINMA reporting workflows.',
        },
        {
          title: 'Payment automation',
          description: 'SEPA, SIC, and cross-border payment orchestration.',
        },
      ],
      meta: {
        title: 'Fintech & Financial Software Development | Trident Software',
        description:
          'Fintech software development — banking integrations, payment processing, portfolio management. FINMA-compliant. Swiss engineering.',
      },
    },
  },
}

export default record
