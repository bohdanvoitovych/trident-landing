import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'fmcg',
  icon: 'shopping-bag',
  techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Python', 'Docker', 'AWS'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ai-services', 'cloud-consulting'],
  content: {
    en: {
      title: 'FMCG & Consumer Goods',
      tagline: 'Supply chain and distribution tech for fast-moving goods',
      description:
        'Order management, route planning, HoReCa distribution platforms, and retail execution tools for food and beverage companies, FMCG distributors, and consumer goods brands.',
      challenges: [
        {
          title: 'High order volume',
          description: 'Processing thousands of daily orders across dozens of SKUs with tight delivery windows.',
        },
        {
          title: 'HoReCa complexity',
          description:
            'Managing restaurant and hotel accounts with custom pricing, credit limits, and delivery schedules.',
        },
        {
          title: 'Expiry and freshness tracking',
          description: 'FIFO inventory management with batch tracking and shelf-life alerts.',
        },
      ],
      solutions: [
        {
          title: 'Distribution management',
          description: 'Order intake, van loading, route optimisation, and proof-of-delivery.',
        },
        {
          title: 'HoReCa ordering platform',
          description: 'Self-service portal for restaurants with scheduled deliveries and invoice management.',
        },
        {
          title: 'Retail execution app',
          description: 'Field rep app for shelf audits, order taking, and competitor tracking.',
        },
        {
          title: 'Demand forecasting',
          description: 'AI-powered stock level predictions to reduce waste and out-of-stock events.',
        },
      ],
      meta: {
        title: 'FMCG & Consumer Goods Software | Trident Software',
        description:
          'FMCG software — distribution management, HoReCa platforms, retail execution, demand forecasting. Swiss engineering.',
      },
    },
  },
}

export default record
