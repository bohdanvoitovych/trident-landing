import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'fribourg',
  relatedServices: ['software-engineering', 'ui-ux-design', 'ai-services', 'cto-as-a-service'],
  relatedCases: ['kleap-ai-builder', 'lapochette', 'aida-medicine'],
  content: {
    en: {
      name: 'Fribourg',
      region: 'Canton of Fribourg',
      tagline: "Bilingual software solutions for Switzerland's crossroads",
      description:
        'Fribourg sits at the French-German language border, making it uniquely suited for bilingual digital products. With Nestlé nearby in Vevey, a strong food industry, and the University of Fribourg, we build multilingual enterprise systems, food traceability platforms, and educational software for this distinctive canton.',
      keyIndustries: [
        'Food & Agri Industry',
        'Education & Research',
        'Bilingual Services',
        'Healthcare',
        'Construction',
      ],
      highlights: [
        {
          title: 'True bilingualism',
          description:
            'German-French bilingual products where both languages are treated as first-class citizens — proper locale switching, RTL-safe layouts, and native translations.',
        },
        {
          title: 'Food industry traceability',
          description:
            'Farm-to-fork tracking, quality control systems, and EU food labeling compliance platforms for the Fribourg-Vevey food corridor.',
        },
        {
          title: 'University & EdTech solutions',
          description:
            "Learning management systems, research data platforms, and student portals for Fribourg's academic institutions.",
        },
      ],
      meta: {
        title: 'Software Development Fribourg | Bilingual Swiss Software | Trident Software',
        description:
          'Bilingual German-French software development in Fribourg. Food traceability, EdTech, and enterprise platforms. University of Fribourg ecosystem partner.',
      },
    },
  },
}

export default record
