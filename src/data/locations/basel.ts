import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'basel',
  relatedServices: ['software-engineering', 'embedded-and-iot', 'ai-services', 'cloud-consulting'],
  relatedCases: ['aida-medicine', 'tdsbot-iot'],
  content: {
    en: {
      name: 'Basel',
      region: 'Canton of Basel-City',
      tagline: "Enterprise software for Basel's pharma and life sciences leaders",
      description:
        "Basel is home to Roche, Novartis, Lonza, and hundreds of medtech and chemical companies. We build IEC 62304-compliant medical device software, laboratory automation tools, and regulatory submission platforms for Basel's life sciences industry.",
      keyIndustries: ['Pharma', 'Medtech', 'Chemical Industry', 'Biotech', 'Financial Services'],
      highlights: [
        {
          title: 'Medical device software',
          description:
            'IEC 62304-compliant development for Class I–III medical devices. Full documentation package for regulatory submission.',
        },
        {
          title: 'Lab & manufacturing automation',
          description:
            'LIMS integration, batch record systems, and IoT-connected manufacturing floor monitoring for pharma production lines.',
        },
        {
          title: 'Regulatory data management',
          description:
            'eCTD submission tools, clinical trial data platforms, and audit trail systems meeting ICH E6(R3) and 21 CFR Part 11.',
        },
      ],
      meta: {
        title: 'Software Development Basel | Pharma & Life Sciences IT | Trident Software',
        description:
          "Medical device software, lab automation, and regulatory platforms for Basel's pharma and medtech sector. IEC 62304, GMP-compliant development. Swiss team.",
      },
    },
  },
}

export default record
