export type LocationData = {
  slug: string
  name: string
  region: string
  tagline: string
  description: string
  keyIndustries: string[]
  highlights: { title: string; description: string }[]
  relatedServices: string[]
  relatedCases: string[]
  meta: { title: string; description: string }
}

export const locations: LocationData[] = [
  {
    slug: 'zurich',
    name: 'Zurich',
    region: 'Canton of Zurich',
    tagline: "Custom software for Switzerland's technology capital",
    description:
      'Zurich hosts Google, Meta, Apple, UBS, Credit Suisse, and hundreds of fintech startups. We build custom web platforms, AI-powered tools, and enterprise integrations for Zurich-based companies — delivering Swiss quality with Valais efficiency.',
    keyIndustries: ['Fintech', 'Banking', 'Crypto', 'Enterprise SaaS', 'Deep Tech'],
    highlights: [
      {
        title: 'Fintech expertise',
        description:
          'Banking APIs, payment processing, KYC automation, and regulatory reporting for Swiss financial institutions.',
      },
      {
        title: 'Google-grade engineering',
        description:
          "Scalable architectures used by Zurich's tech giants — microservices, event-driven backends, observability stacks.",
      },
      {
        title: 'Crypto Valley ready',
        description:
          'Smart contract integrations, Web3 dashboards, and blockchain-backed audit trails for Crypto Valley startups.',
      },
    ],
    relatedServices: ['ai-services', 'software-engineering', 'cloud-consulting', 'devops-and-sre'],
    relatedCases: ['kleap-ai-builder', '8move-driver'],
    meta: {
      title: 'Software Development Zurich | Trident Software Switzerland',
      description:
        'Custom software development in Zurich. We build AI-powered tools, fintech platforms, and enterprise web apps for Zurich companies. Swiss quality, Valais pricing.',
    },
  },
  {
    slug: 'geneva',
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
        description:
          'GDPR, nFADP, and financial compliance baked into architecture, not bolted on later.',
      },
      {
        title: 'International org expertise',
        description:
          'Document management, reporting dashboards, and workflow automation for NGOs and international institutions.',
      },
    ],
    relatedServices: ['software-engineering', 'ai-services', 'ui-ux-design', 'cto-as-a-service'],
    relatedCases: ['iam-trade', 'kleap-ai-builder'],
    meta: {
      title: 'Software Development Geneva | Trident Software Switzerland',
      description:
        "Custom software for Geneva's international organizations, banks, and luxury brands. Multilingual platforms, compliance-first architecture. Swiss-based development team.",
    },
  },
  {
    slug: 'bern',
    name: 'Bern',
    region: 'Canton of Bern',
    tagline: "Digital solutions for Switzerland's federal capital",
    description:
      "Bern is Switzerland's administrative heart — federal ministries, cantonal governments, universities, and healthcare institutions. We specialize in public sector digitalization, secure data platforms, and citizen-facing portals built to Swiss government standards.",
    keyIndustries: ['Public Sector', 'Healthcare', 'Education', 'Insurance', 'Defense & Security'],
    highlights: [
      {
        title: 'Public sector digitalization',
        description:
          'Citizen portals, permit management, and government workflow systems compliant with eCH standards and Swiss data residency requirements.',
      },
      {
        title: 'University & research software',
        description:
          "Research data platforms, lab management systems, and academic collaboration tools for Bern's universities and ETH affiliates.",
      },
      {
        title: 'Healthcare IT integration',
        description:
          "HL7 FHIR interfaces, patient management systems, and eHealth platform integrations for Bern's hospital network.",
      },
    ],
    relatedServices: [
      'software-engineering',
      'cloud-consulting',
      'devops-and-sre',
      'embedded-and-iot',
    ],
    relatedCases: ['aida-medicine', 'tdsbot-iot'],
    meta: {
      title: 'Software Development Bern | Trident Software Switzerland',
      description:
        'Public sector digitalization, healthcare IT, and government software for Bern. Swiss data residency, eCH standards compliance. Development team based in Valais.',
    },
  },
  {
    slug: 'basel',
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
    relatedServices: [
      'software-engineering',
      'embedded-and-iot',
      'ai-services',
      'cloud-consulting',
    ],
    relatedCases: ['aida-medicine', 'tdsbot-iot'],
    meta: {
      title: 'Software Development Basel | Pharma & Life Sciences IT | Trident Software',
      description:
        "Medical device software, lab automation, and regulatory platforms for Basel's pharma and medtech sector. IEC 62304, GMP-compliant development. Swiss team.",
    },
  },
  {
    slug: 'lausanne',
    name: 'Lausanne',
    region: 'Canton of Vaud',
    tagline: "Startup-grade engineering for Lausanne's innovation ecosystem",
    description:
      "EPFL spinoffs, gaming studios (Ubisoft), the Olympic capital, and a thriving startup scene make Lausanne one of Europe's most innovative cities. We partner with Lausanne startups and scale-ups to build MVPs, scale engineering teams, and deliver production-ready products fast.",
    keyIndustries: ['Startups & Scale-ups', 'Gaming', 'Sports Tech', 'EdTech', 'Hospitality Tech'],
    highlights: [
      {
        title: 'EPFL-calibre engineering',
        description:
          "Technically rigorous software from first principles — not just framework glue. Used by Lausanne's deep-tech startups.",
      },
      {
        title: 'MVP to product',
        description:
          "From validated idea to production product in 8–16 weeks. We've done it for Lausanne founders raising seed and Series A.",
      },
      {
        title: 'Sports & events technology',
        description:
          "Event management platforms, ticketing systems, and fan engagement apps for Lausanne's sports organizations and the Olympic ecosystem.",
      },
    ],
    relatedServices: ['software-engineering', 'cto-as-a-service', 'ui-ux-design', 'ai-services'],
    relatedCases: ['kleap-ai-builder', 'lapochette', '8move-driver'],
    meta: {
      title: 'Software Development Lausanne | Startup Engineering | Trident Software',
      description:
        'MVP development, startup engineering, and CTO-as-a-service for Lausanne companies. EPFL ecosystem partner. Fast delivery, production quality.',
    },
  },
  {
    slug: 'zug',
    name: 'Zug',
    region: 'Canton of Zug',
    tagline: 'Blockchain, Web3, and enterprise software for Crypto Valley',
    description:
      "Zug's Crypto Valley hosts over 1,000 blockchain companies — Ethereum Foundation, Cardano, Polkadot, and hundreds of DeFi projects. We build Web3 infrastructure, token-gated platforms, smart contract integrations, and enterprise-grade crypto tools for Zug's digital asset ecosystem.",
    keyIndustries: [
      'Blockchain & Web3',
      'DeFi & Crypto',
      'International HQs',
      'Asset Management',
      'RegTech',
    ],
    highlights: [
      {
        title: 'Web3 & blockchain integration',
        description:
          'Smart contract dashboards, wallet interfaces, on-chain analytics, and DeFi protocol integrations built for production.',
      },
      {
        title: 'Token & DAO tooling',
        description:
          'Governance portals, treasury management systems, and member dashboards for DAOs and token-based organizations in Crypto Valley.',
      },
      {
        title: 'FINMA-aware architecture',
        description:
          'Regulatory-compliant platforms for FINMA-licensed digital asset service providers, including AML/KYC integration and audit trails.',
      },
    ],
    relatedServices: ['software-engineering', 'ai-services', 'cloud-consulting', 'devops-and-sre'],
    relatedCases: ['zenit-auto-b2b', 'kleap-ai-builder'],
    meta: {
      title: 'Software Development Zug | Crypto Valley Engineering | Trident Software',
      description:
        "Web3 platforms, blockchain integrations, and enterprise software for Zug's Crypto Valley. FINMA-compliant architecture. Swiss development team.",
    },
  },
  {
    slug: 'lucerne',
    name: 'Lucerne',
    region: 'Canton of Lucerne',
    tagline: 'Hospitality tech and digital transformation for Central Switzerland',
    description:
      "Lucerne's tourism, hospitality, and financial services sector generates significant demand for custom digital tools. We build hotel management systems, booking engines, event platforms, and SME business software for Lucerne's companies — practical solutions that pay for themselves within the first season.",
    keyIndustries: [
      'Hospitality & Tourism',
      'Financial Services',
      'Events & Culture',
      'Trade & SME',
      'Healthcare',
    ],
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
    relatedServices: ['software-engineering', 'ui-ux-design', 'ai-services', 'cto-as-a-service'],
    relatedCases: ['lapochette', 'iam-trade'],
    meta: {
      title: 'Software Development Lucerne | Hospitality & SME Tech | Trident Software',
      description:
        'Hospitality technology, event platforms, and SME software for Lucerne. Booking engines, channel managers, CRM. Swiss development with Valais cost efficiency.',
    },
  },
  {
    slug: 'sion',
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
    relatedServices: [
      'software-engineering',
      'embedded-and-iot',
      'ai-services',
      'cto-as-a-service',
    ],
    relatedCases: ['tdsbot-iot', '8move-driver', 'aida-medicine'],
    meta: {
      title: 'Software Agency Sion Valais | Trident Software — Local Partner',
      description:
        'Trident Software is based in Sion, Valais. Local software development for AgriTech, energy, tourism, and public sector. Your Swiss software partner, right here.',
    },
  },
  {
    slug: 'lugano',
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
    relatedServices: ['software-engineering', 'ui-ux-design', 'cloud-consulting', 'ai-services'],
    relatedCases: ['kleap-ai-builder', 'lapochette', 'zenit-auto-b2b'],
    meta: {
      title: 'Software Development Lugano Ticino | Trident Software Switzerland',
      description:
        "Software development for Lugano's private banks, cross-border businesses, and startups. Italian-market ready, Swiss quality. Trident Software — your Ticino tech partner.",
    },
  },
  {
    slug: 'st-gallen',
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
    relatedServices: [
      'software-engineering',
      'ai-services',
      'embedded-and-iot',
      'devops-and-sre',
    ],
    relatedCases: ['8move-driver', 'zenit-auto-b2b', 'iam-trade'],
    meta: {
      title: 'Software Development St. Gallen | Logistics & Supply Chain Tech | Trident Software',
      description:
        'Logistics software, WMS, and supply chain platforms for St. Gallen companies. EDI integration, carrier APIs, warehouse automation. Swiss dev team.',
    },
  },
  {
    slug: 'winterthur',
    name: 'Winterthur',
    region: 'Canton of Zurich',
    tagline: "Industrial software and engineering tools for Winterthur's manufacturers",
    description:
      "Winterthur hosts Sulzer, Rieter, ZHAW, and one of Switzerland's strongest engineering and manufacturing clusters. We build industrial IoT monitoring systems, predictive maintenance platforms, and production floor software for Winterthur's machinery and manufacturing companies.",
    keyIndustries: [
      'Manufacturing & Engineering',
      'Insurance & Finance',
      'Education (ZHAW)',
      'Energy & Utilities',
      'Healthcare',
    ],
    highlights: [
      {
        title: 'Industrial IoT & monitoring',
        description:
          "Sensor data ingestion, time-series dashboards, and anomaly detection for Winterthur's production machinery and industrial equipment.",
      },
      {
        title: 'Predictive maintenance software',
        description:
          'ML-based failure prediction, maintenance scheduling, and asset lifecycle management for machine-heavy manufacturers.',
      },
      {
        title: 'Engineering workflow tools',
        description:
          "Custom ERP extensions, project management integrations, and technical documentation platforms for Winterthur's engineering firms.",
      },
    ],
    relatedServices: ['embedded-and-iot', 'software-engineering', 'ai-services', 'devops-and-sre'],
    relatedCases: ['tdsbot-iot', '8move-driver', 'zenit-auto-b2b'],
    meta: {
      title: 'Industrial Software Winterthur | IoT & Manufacturing Tech | Trident Software',
      description:
        'Industrial IoT, predictive maintenance, and manufacturing software for Winterthur. Sensor integration, ML-based anomaly detection. Swiss engineering team.',
    },
  },
  {
    slug: 'fribourg',
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
    relatedServices: ['software-engineering', 'ui-ux-design', 'ai-services', 'cto-as-a-service'],
    relatedCases: ['kleap-ai-builder', 'lapochette', 'aida-medicine'],
    meta: {
      title: 'Software Development Fribourg | Bilingual Swiss Software | Trident Software',
      description:
        'Bilingual German-French software development in Fribourg. Food traceability, EdTech, and enterprise platforms. University of Fribourg ecosystem partner.',
    },
  },
]

export function getLocationSlugs(): string[] {
  return locations.map((l) => l.slug)
}

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug)
}
