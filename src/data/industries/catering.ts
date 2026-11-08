import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'catering',
  icon: 'utensils',
  techStack: ['React', 'Node.js', 'PostgreSQL', 'React Native', 'Docker'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ui-ux-design', 'ai-services'],
  content: {
    en: {
      title: 'Catering & Food Service',
      tagline: 'Operations software for professional kitchens and caterers',
      description:
        'Event catering management, recipe costing, staff scheduling, and client ordering platforms for catering companies, contract food service operators, and cloud kitchens.',
      challenges: [
        {
          title: 'Event-driven operations',
          description: 'Planning menus, staffing, and procurement around unpredictable event schedules.',
        },
        {
          title: 'Food cost control',
          description: 'Tracking recipe costs against purchasing prices in real time as ingredient prices fluctuate.',
        },
        {
          title: 'Dietary and allergen compliance',
          description: 'Accurate allergen labelling and menu customisation for dietary requirements at scale.',
        },
      ],
      solutions: [
        {
          title: 'Event catering management',
          description: 'Quote builder, menu planner, staffing, and production sheet generation.',
        },
        {
          title: 'Recipe & cost management',
          description: 'Recipe database with live cost calculation linked to supplier pricing.',
        },
        {
          title: 'Client ordering portal',
          description: 'Self-service ordering for corporate clients with approval workflows.',
        },
        {
          title: 'Staff scheduling',
          description: 'Shift planning, time tracking, and labour cost reporting for kitchen teams.',
        },
      ],
      meta: {
        title: 'Catering & Food Service Software | Trident Software',
        description:
          'Catering software — event management, recipe costing, client ordering portals, staff scheduling. Swiss engineering.',
      },
    },
  },
}

export default record
