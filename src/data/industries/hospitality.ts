import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'hospitality',
  icon: 'hotel',
  techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Twilio', 'AWS'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ui-ux-design', 'ai-services'],
  content: {
    en: {
      title: 'Hospitality & Tourism',
      tagline: 'Digital experiences for hospitality leaders',
      description:
        'Hotel management systems, booking platforms, guest apps, and revenue management tools for Swiss hotels, resorts, and tourism operators.',
      challenges: [
        {
          title: 'PMS integration',
          description: 'Connecting to Opera, Protel, and other property management systems via API.',
        },
        {
          title: 'Multi-language guests',
          description: 'Guest-facing interfaces in EN/DE/FR/IT as required in Switzerland.',
        },
        {
          title: 'Revenue optimization',
          description: 'Dynamic pricing and availability across OTA channels.',
        },
      ],
      solutions: [
        {
          title: 'Guest portals',
          description: 'Mobile-first check-in, room service ordering, and concierge apps.',
        },
        {
          title: 'Channel management',
          description: 'Real-time availability sync across Booking.com, Expedia, and GDS.',
        },
        {
          title: 'Revenue management',
          description: 'Demand forecasting and dynamic pricing recommendation engine.',
        },
        {
          title: 'Loyalty programs',
          description: 'Custom loyalty and CRM systems for hotel groups.',
        },
      ],
      meta: {
        title: 'Hospitality & Tourism Software | Trident Software',
        description:
          'Hospitality software — hotel management, guest apps, channel management, revenue optimization. Swiss engineering team.',
      },
    },
  },
}

export default record
