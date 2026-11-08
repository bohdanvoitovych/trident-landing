import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'geneva',
  relatedServices: ['software-engineering', 'ai-services', 'ui-ux-design', 'cto-as-a-service'],
  relatedCases: ['iam-trade', 'kleap-ai-builder'],
  content: {
    en: {
      name: 'Geneva',
      region: 'Canton of Geneva',
      tagline: "Technology solutions for Geneva's international ecosystem",
      description:
        "Geneva is home to the UN, WHO, WTO, CERN, and a thriving luxury and private banking sector. We build multilingual enterprise platforms, compliance systems, and data management tools for Geneva's international organizations and financial institutions.",
      keyIndustries: [
        'International Organizations',
        'Private Banking',
        'Luxury Goods',
        'Life Sciences',
        'Diplomacy & NGOs',
      ],
      highlights: [
        {
          title: 'Multilingual from day one',
          description:
            "EN/FR/DE/IT interfaces built with proper i18n — not an afterthought. Essential for Geneva's international clientele.",
        },
        {
          title: 'Compliance-first development',
          description: 'GDPR, nFADP, and financial compliance baked into architecture, not bolted on later.',
        },
        {
          title: 'International org expertise',
          description:
            'Document management, reporting dashboards, and workflow automation for NGOs and international institutions.',
        },
      ],
      meta: {
        title: 'Software Development Geneva | Trident Software Switzerland',
        description:
          "Custom software for Geneva's international organizations, banks, and luxury brands. Multilingual platforms, compliance-first architecture. Swiss-based development team.",
      },
    },
  },
}

export default record
