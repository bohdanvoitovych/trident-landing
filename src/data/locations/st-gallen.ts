import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'st-gallen',
  relatedServices: ['software-engineering', 'ai-services', 'embedded-and-iot', 'devops-and-sre'],
  relatedCases: ['8move-driver', 'zenit-auto-b2b', 'iam-trade'],
  content: {
    en: {
      name: 'St. Gallen',
      region: 'Canton of St. Gallen',
      tagline: 'Logistics and supply chain software for Eastern Switzerland',
      description:
        "St. Gallen is Eastern Switzerland's economic engine — textiles, logistics (Swiss Post, UPS, DHL have major operations), the renowned HSG university, and a strong industrial base. We build supply chain visibility platforms, warehouse management systems, and logistics automation tools for St. Gallen's distribution-heavy economy.",
      keyIndustries: [
        'Logistics & Supply Chain',
        'Textiles & Fashion',
        'Education & Research',
        'Manufacturing',
        'Retail',
      ],
      highlights: [
        {
          title: 'Supply chain visibility',
          description:
            'Real-time shipment tracking, carrier integration APIs, and exception management dashboards for 3PLs and logistics operators.',
        },
        {
          title: 'Warehouse & inventory systems',
          description:
            'WMS integrations, barcode/RFID scanning workflows, and replenishment automation for distribution centers.',
        },
        {
          title: 'B2B commerce platforms',
          description:
            "Wholesale order management, dealer portals, and EDI integrations for St. Gallen's manufacturing and textile exporters.",
        },
      ],
      meta: {
        title: 'Software Development St. Gallen | Logistics & Supply Chain Tech | Trident Software',
        description:
          'Logistics software, WMS, and supply chain platforms for St. Gallen companies. EDI integration, carrier APIs, warehouse automation. Swiss dev team.',
      },
    },
  },
}

export default record
