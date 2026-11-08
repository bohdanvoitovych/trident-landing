import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'lugano',
  relatedServices: ['software-engineering', 'ui-ux-design', 'cloud-consulting', 'ai-services'],
  relatedCases: ['kleap-ai-builder', 'lapochette', 'zenit-auto-b2b'],
  content: {
    en: {
      name: 'Lugano',
      region: 'Canton of Ticino',
      tagline: "Italian Switzerland's gateway to digital innovation",
      description:
        "Lugano bridges Switzerland and Italy — private banking, luxury goods, gaming, and a growing startup scene fed by USI and SUPSI. We build Italian-facing platforms, cross-border commerce solutions, and private wealth management tools for Ticino's companies.",
      keyIndustries: [
        'Private Banking & Wealth',
        'Cross-border Commerce',
        'Gaming & Entertainment',
        'Real Estate',
        'Fashion & Luxury',
      ],
      highlights: [
        {
          title: 'Italian-market software',
          description:
            'Italian language interfaces, Italian fiscal compliance (fattura elettronica), and Italy-Switzerland cross-border logistics platforms.',
        },
        {
          title: 'Private wealth technology',
          description:
            "Client portals, portfolio dashboards, and CRM systems for Lugano's private banks and wealth management firms.",
        },
        {
          title: 'Gaming & entertainment platforms',
          description:
            "Multiplayer backends, leaderboard systems, and tournament management tools for Ticino's growing gaming industry.",
        },
      ],
      meta: {
        title: 'Software Development Lugano Ticino | Trident Software Switzerland',
        description:
          "Software development for Lugano's private banks, cross-border businesses, and startups. Italian-market ready, Swiss quality. Trident Software — your Ticino tech partner.",
      },
    },
  },
}

export default record
