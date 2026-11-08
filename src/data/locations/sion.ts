import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'sion',
  relatedServices: ['software-engineering', 'embedded-and-iot', 'ai-services', 'cto-as-a-service'],
  relatedCases: ['tdsbot-iot', '8move-driver', 'aida-medicine'],
  content: {
    en: {
      name: 'Sion',
      region: 'Canton of Valais',
      tagline: 'Our home. Software built in and for Valais.',
      description:
        "Sion is where Trident Software was founded. We know Valais intimately — its AgriTech needs, energy sector, tourism industry, and the ambition of its entrepreneurs. We're your local partner, walking distance from your office, building software that fits your industry and canton.",
      keyIndustries: [
        'AgriTech & Viticulture',
        'Energy & Renewables',
        'Tourism & Alpine Sports',
        'Public Administration',
        'Construction & Real Estate',
      ],
      highlights: [
        {
          title: 'Local. Not outsourced.',
          description:
            "We're in Sion. You can visit. We attend the same industry events. Your project is not handed to a subcontractor on another continent.",
        },
        {
          title: 'Valais industry expertise',
          description:
            "Wine production tracking, smart vineyard IoT, alpine tourism booking, and cantonal public sector software — we've built it.",
        },
        {
          title: 'Energy & renewables software',
          description:
            "Monitoring dashboards, SCADA integration, and predictive maintenance for Valais's hydroelectric and solar energy operators.",
        },
      ],
      meta: {
        title: 'Software Agency Sion Valais | Trident Software — Local Partner',
        description:
          'Trident Software is based in Sion, Valais. Local software development for AgriTech, energy, tourism, and public sector. Your Swiss software partner, right here.',
      },
    },
  },
}

export default record
