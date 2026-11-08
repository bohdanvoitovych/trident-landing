import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'lucerne',
  relatedServices: ['software-engineering', 'ui-ux-design', 'ai-services', 'cto-as-a-service'],
  relatedCases: ['lapochette', 'iam-trade'],
  content: {
    en: {
      name: 'Lucerne',
      region: 'Canton of Lucerne',
      tagline: 'Hospitality tech and digital transformation for Central Switzerland',
      description:
        "Lucerne's tourism, hospitality, and financial services sector generates significant demand for custom digital tools. We build hotel management systems, booking engines, event platforms, and SME business software for Lucerne's companies — practical solutions that pay for themselves within the first season.",
      keyIndustries: ['Hospitality & Tourism', 'Financial Services', 'Events & Culture', 'Trade & SME', 'Healthcare'],
      highlights: [
        {
          title: 'Hospitality technology',
          description:
            'Property management systems, direct booking engines, and channel managers that reduce OTA dependency for Lucerne hotels and resorts.',
        },
        {
          title: 'Event & conference platforms',
          description:
            "Registration, scheduling, and audience engagement tools for Lucerne's festivals, conferences, and cultural institutions.",
        },
        {
          title: 'SME digitalization',
          description:
            "Practical ERP-lite systems, CRM integrations, and workflow automation for Central Switzerland's Mittelstand companies.",
        },
      ],
      meta: {
        title: 'Software Development Lucerne | Hospitality & SME Tech | Trident Software',
        description:
          'Hospitality technology, event platforms, and SME software for Lucerne. Booking engines, channel managers, CRM. Swiss development with Valais cost efficiency.',
      },
    },
  },
}

export default record
