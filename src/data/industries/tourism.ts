import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'tourism',
  icon: 'map',
  techStack: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ui-ux-design', 'ai-services'],
  content: {
    en: {
      title: 'Tourism & Travel',
      tagline: 'Digital experiences for modern travellers',
      description:
        'Booking platforms, itinerary management, concierge apps, and travel intelligence systems for tour operators, hotels, and travel agencies across Switzerland and Europe.',
      challenges: [
        {
          title: 'Real-time availability',
          description: 'Synchronising inventory across channels — OTAs, direct booking, GDS — without overbooking.',
        },
        {
          title: 'Seasonal demand spikes',
          description: 'Infrastructure that scales for peak season without overprovisioning year-round.',
        },
        {
          title: 'Multi-currency & multi-language',
          description: 'Serving international guests in their language and currency with localised tax handling.',
        },
      ],
      solutions: [
        {
          title: 'Booking & reservation systems',
          description: 'Real-time availability, payment processing, and booking confirmation workflows.',
        },
        {
          title: 'Tour management platforms',
          description: 'Itinerary builder, guide assignment, and group management tools.',
        },
        {
          title: 'Concierge & guest apps',
          description: 'Mobile apps for check-in, activity booking, and in-destination recommendations.',
        },
        {
          title: 'Travel analytics',
          description: 'Demand forecasting, pricing optimisation, and customer lifetime value models.',
        },
      ],
      meta: {
        title: 'Tourism & Travel Software Development | Trident Software',
        description:
          'Travel tech software — booking platforms, tour management, concierge apps, travel analytics. Swiss engineering.',
      },
    },
  },
}

export default record
