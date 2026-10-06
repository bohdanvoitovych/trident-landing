export type CaseResult = {
  metric: string
  value: string
}

export type CaseTestimonial = {
  text: string
  author: string
  role: string
}

export type CaseData = {
  slug: string
  client: string
  industry: string
  services: string[]
  techStack: string[]
  hero: {
    title: string
    tagline: string
    image?: string
  }
  challenge: string
  approach: string
  solution: string
  results: CaseResult[]
  testimonial?: CaseTestimonial
  relatedCases: string[]
  meta: {
    title: string
    description: string
  }
}

export const cases: CaseData[] = [
  {
    slug: 'kleap-ai-builder',
    client: 'Kleap',
    industry: 'SaaS / AI',
    services: ['ai-services', 'software-engineering'],
    techStack: ['Python', 'OpenAI API', 'React', 'Next.js', 'PostgreSQL', 'AWS'],
    hero: {
      title: 'Kleap — AI Website Builder',
      tagline: 'From prompt to published website in under 60 seconds',
      image: '/images/cases/kleap-home-website-screen.jpg',
    },
    challenge:
      'Kleap needed to build an AI-powered website generator that could produce complete, design-quality websites from a single text prompt — competing with Wix ADI and Squarespace AI while offering higher customization and developer-friendly output.',
    approach:
      'We designed a multi-step AI pipeline: intent extraction → content generation → layout composition → code output. The system uses GPT-4 for content, a proprietary layout engine for structure, and Next.js for the generated output. Each step is independently testable and cacheable.',
    solution:
      'A production SaaS platform where users enter a business description and receive a complete, editable website within 60 seconds. The pipeline generates SEO-optimized copy, selects appropriate imagery, and produces clean HTML/CSS output deployable to any host.',
    results: [
      { metric: 'Generation time', value: '<60 seconds' },
      { metric: 'User satisfaction (NPS)', value: '72' },
      { metric: 'Websites generated at launch', value: '2,000+' },
    ],
    relatedCases: ['aida-medicine', 'go-valais'],
    meta: {
      title: 'Kleap AI Website Builder — Trident Software Case Study',
      description:
        'How we built an AI-powered website generator that creates complete sites from a single text prompt in under 60 seconds.',
    },
  },
  {
    slug: 'zenit-auto-b2b',
    client: 'Zenit Auto',
    industry: 'Automotive Parts / B2B E-commerce',
    services: ['software-engineering'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Elasticsearch', 'AWS'],
    hero: {
      title: 'Zenit Auto — B2B Auto Parts Platform',
      tagline: 'Tiered pricing, 500K SKUs, real-time stock',
      image: '/images/cases/zenitavto-b2b-checkout-screen.jpg',
    },
    challenge:
      'Zenit Auto needed to migrate from a legacy desktop ordering system to a modern B2B web platform. Key challenges: 500,000+ SKU catalog, complex tiered pricing (different prices per dealer level), real-time stock from multiple warehouses, and VIN-based parts search.',
    approach:
      'We built a modular platform with separate engines for catalog management, pricing calculation, and stock aggregation. Elasticsearch powers the parts search with VIN decode integration. PostgreSQL handles the complex pricing matrix with JSONB fields for flexibility.',
    solution:
      'A complete B2B e-commerce platform with VIN-based parts lookup, dealer-specific pricing, real-time multi-warehouse stock, order management, and an admin dashboard for catalog and pricing management.',
    results: [
      { metric: 'Order processing time', value: '-65%' },
      { metric: 'SKUs indexed', value: '500,000+' },
      { metric: 'Active dealers', value: '120+' },
      { metric: 'Search response time', value: '<200ms' },
    ],
    relatedCases: ['vesna-auto-b2b', 'tires-online-shop'],
    meta: {
      title: 'Zenit Auto B2B Platform — Trident Software Case Study',
      description:
        'B2B auto parts e-commerce platform with 500K SKUs, tiered dealer pricing, VIN search, and real-time multi-warehouse stock.',
    },
  },
  {
    slug: '8move-driver',
    client: '8Move',
    industry: 'Logistics / Last-mile Delivery',
    services: ['software-engineering', 'ui-ux-design'],
    techStack: ['Flutter', 'Dart', 'Google Maps API', 'WebSocket', 'Firebase'],
    hero: {
      title: '8Move Driver App',
      tagline: 'Real-time delivery management for last-mile drivers',
      image: '/images/cases/8move-driver-mobile.jpg',
    },
    challenge:
      '8Move needed a cross-platform mobile app for delivery drivers that handles real-time route assignment, delivery confirmation, proof-of-delivery capture, and live location sharing — with offline capability for areas with poor connectivity.',
    approach:
      'Flutter was chosen for single-codebase iOS/Android delivery. We implemented an offline-first architecture with local SQLite storage and background sync. Google Maps SDK handles routing with live traffic. WebSocket provides real-time dispatcher communication.',
    solution:
      'A production Flutter app used daily by 8Move drivers. Features: real-time route optimization, barcode/QR scanning for package tracking, photo proof-of-delivery, in-app messaging with dispatch, and offline-capable order management.',
    results: [
      { metric: 'Delivery success rate', value: '+18%' },
      { metric: 'Average delivery time', value: '-12 min' },
      { metric: 'Driver onboarding time', value: '<30 minutes' },
    ],
    relatedCases: ['8move-admin', '8move-client'],
    meta: {
      title: '8Move Driver App — Trident Software Case Study',
      description:
        'Cross-platform Flutter app for last-mile delivery drivers with offline capability, real-time routing, and proof-of-delivery.',
    },
  },
  {
    slug: 'tdsbot-iot',
    client: 'TDSbot',
    industry: 'Water Treatment / IoT',
    services: ['embedded-and-iot', 'software-engineering'],
    techStack: ['C++', 'ESP32', 'MQTT', 'InfluxDB', 'Grafana', 'Python', 'AWS IoT'],
    hero: {
      title: 'TDSbot — IoT Water Quality Monitor',
      tagline: 'Real-time water purity monitoring for industrial plants',
      image: '/images/cases/watertds-website-home-mobile.jpg',
    },
    challenge:
      'Industrial water purification facilities needed continuous monitoring of TDS (total dissolved solids), pH, and flow rates across multiple measurement points — with alerting when parameters drift outside safe ranges and historical data for compliance reporting.',
    approach:
      'We designed a sensor network using ESP32 microcontrollers with analog sensor interfaces. Data flows via MQTT to an AWS IoT Core broker, then into InfluxDB for time-series storage. Grafana provides the operations dashboard. Alert thresholds trigger SMS and email notifications.',
    solution:
      'An end-to-end IoT monitoring system: custom ESP32 sensor nodes → MQTT → AWS IoT → InfluxDB → Grafana dashboard. Plant operators see real-time readings, trend charts, and receive instant alerts. Compliance reports are auto-generated from historical data.',
    results: [
      { metric: 'Monitoring points', value: '24 per facility' },
      { metric: 'Alert response time', value: '<30 seconds' },
      { metric: 'Sensor uptime', value: '99.7%' },
      { metric: 'Manual checks eliminated', value: '85%' },
    ],
    relatedCases: ['aida-medicine'],
    meta: {
      title: 'TDSbot IoT Water Monitor — Trident Software Case Study',
      description:
        'IoT water quality monitoring system for industrial plants. ESP32 sensors, MQTT, InfluxDB, Grafana. Real-time alerting.',
    },
  },
  {
    slug: 'aida-medicine',
    client: 'Aida Medicine',
    industry: 'Healthcare',
    services: ['software-engineering', 'ai-services', 'ui-ux-design'],
    techStack: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'HIPAA-compliant infrastructure'],
    hero: {
      title: 'Aida — Healthcare Management Platform',
      tagline: 'Patient management and clinical workflow automation',
      image: '/images/cases/aida-desktop-consultations.jpg',
    },
    challenge:
      'A healthcare provider needed to replace paper-based patient management with a digital platform that handles appointments, patient records, clinical notes, and billing — while maintaining strict data privacy and compliance with healthcare regulations.',
    approach:
      'We implemented a role-based access system (doctor, nurse, receptionist, admin) with field-level encryption for sensitive patient data. The clinical notes module uses structured templates with free-text AI assistance for faster documentation. Billing integrates with Swiss health insurance codes.',
    solution:
      'A comprehensive healthcare platform covering patient lifecycle management: registration, appointment scheduling, clinical notes, prescription management, lab results tracking, and insurance billing. Mobile-responsive for tablet use in clinical settings.',
    results: [
      { metric: 'Documentation time per patient', value: '-40%' },
      { metric: 'Appointment no-shows', value: '-25%' },
      { metric: 'Billing processing time', value: '-60%' },
    ],
    relatedCases: ['dentyval', 'catapult-crown'],
    meta: {
      title: 'Aida Healthcare Platform — Trident Software Case Study',
      description:
        'Healthcare management platform with patient records, appointment scheduling, clinical notes, and billing. Swiss data residency.',
    },
  },
  {
    slug: 'lapochette',
    client: 'LaPochette',
    industry: 'Fashion & Luxury',
    services: ['software-engineering', 'ui-ux-design'],
    techStack: ['React', 'Next.js', 'Node.js', 'Stripe', 'PostgreSQL', 'Cloudinary'],
    hero: {
      title: 'LaPochette — Luxury Bag Rental Platform',
      tagline: 'The Airbnb of designer handbags',
      image: '/images/cases/mobile-lapochette-product-website-screen.jpg',
    },
    challenge:
      'LaPochette needed a marketplace platform for renting designer handbags (Chanel, Louis Vuitton, Gucci) between private owners and renters. Key challenges: trust & authenticity verification, damage deposit handling, rental period management, and a premium UX that matches the luxury segment.',
    approach:
      'We built a two-sided marketplace with separate flows for bag owners and renters. Stripe handles deposits and escrow. An authenticity verification workflow ensures bags are photographed from specific angles before each rental. Insurance integration covers damage claims.',
    solution:
      'A luxury rental marketplace with owner onboarding, bag authentication flow, renter search and booking, Stripe-based deposit management, rental period tracking, damage reporting, and review system. Premium UI designed to match the luxury brand positioning.',
    results: [
      { metric: 'Listed bags at launch', value: '200+' },
      { metric: 'Dispute rate', value: '<2%' },
      { metric: 'Average booking value', value: 'CHF 180' },
    ],
    relatedCases: ['samange-fashion', 'flashhub'],
    meta: {
      title: 'LaPochette Luxury Bag Rental — Trident Software Case Study',
      description:
        'Two-sided marketplace for luxury designer handbag rentals. Stripe escrow, authenticity verification, premium UX.',
    },
  },
  {
    slug: 'iam-trade',
    client: 'IAM Trade',
    industry: 'B2B E-commerce',
    services: ['software-engineering', 'cloud-consulting'],
    techStack: ['Python', 'React', 'PostgreSQL', 'AWS', 'Docker', 'Redis'],
    hero: {
      title: 'IAM Trade — B2B E-commerce Platform',
      tagline: 'Custom B2B/B2C/B2X platform handling up to 1M products with 200+ integrations',
    },
    challenge:
      'A Swiss trading company needed a flexible multi-channel e-commerce platform to handle complex B2B pricing, large product catalogs (up to 1M items), and seamless integration with existing ERP, CRM, WMS, and financial systems.',
    approach:
      'We designed a modular platform with separate functional domains: account management, product catalog, order processing, pricing engine, and delivery management. Each module is independently deployable and integrates via internal APIs.',
    solution:
      'Full-stack B2B/B2C/B2X e-commerce platform with personalized pricing, multilingual product catalogs with 3D views, automated order-to-invoice pipelines, multi-warehouse delivery management, and 200+ third-party integrations (ERP, CRM, WMS, PIM, TMS, payment gateways).',
    results: [
      { metric: 'Products supported', value: '1M+' },
      { metric: 'Integrations', value: '200+' },
      { metric: 'Order processing', value: 'Automated' },
      { metric: 'Time-to-market', value: '3 months' },
    ],
    relatedCases: ['zenit-auto-b2b', 'kleap-ai-builder'],
    meta: {
      title: 'IAM Trade B2B Platform — Trident Software',
      description: 'Custom B2B/B2C/B2X e-commerce platform with 1M+ products and 200+ integrations built for a Swiss trading company.',
    },
  },
  {
    slug: 'arenawave',
    client: 'ArenaWave',
    industry: 'Sports Tech / IoT',
    services: ['software-engineering', 'embedded-and-iot'],
    techStack: ['React Native', 'Node.js', 'IoT', 'PostgreSQL', 'AWS', 'MQTT'],
    hero: {
      title: 'ArenaWave — Smart Sports Court System',
      tagline: 'IoT-powered court management: automated booking, smart access, and facility analytics',
    },
    challenge:
      'Sports facility operators struggled with low court utilization, manual booking processes, and lack of visibility into facility performance. Managing lighting, access control, and scheduling across multiple courts required constant staff presence.',
    approach:
      'We designed an integrated system with three components: an IoT device layer embedded in each court, a mobile app for players, and a management dashboard for operators. All components communicate in real time via cloud infrastructure.',
    solution:
      'ArenaWave transforms traditional sports courts into IoT-enabled smart spaces. Players book and access courts via mobile app with smart lock integration. Operators control lighting, AC, and music remotely, view utilization analytics, and receive automated maintenance alerts. Supports squash, tennis, padel, and badminton.',
    results: [
      { metric: 'Court automation', value: '100%' },
      { metric: 'Sports supported', value: '4+' },
      { metric: 'Staff dependency', value: 'Reduced' },
    ],
    relatedCases: ['tdsbot-iot', '8move-driver'],
    meta: {
      title: 'ArenaWave Smart Court System — Trident Software Case Study',
      description: 'IoT-powered sports court management system with automated booking, smart access control, and facility analytics.',
    },
  },
  {
    slug: 'go-valais',
    client: 'GO-Valais Expat Club',
    industry: 'Community / NGO',
    services: ['software-engineering', 'ui-ux-design'],
    techStack: ['WordPress', 'PHP', 'MySQL', 'Elementor', 'WooCommerce'],
    hero: {
      title: 'GO-Valais — Expat Community Portal',
      tagline: 'Digital hub connecting expatriates in Valais, Switzerland',
      image: '/images/cases/conference-go-valais-website-screen-1.jpg',
    },
    challenge:
      'Expatriates relocating to Valais had no centralized platform to discover local events, access settlement resources, or connect with the international community. Event organizers lacked tools to reach the expat audience effectively.',
    approach:
      'We built a community-first web portal with a focus on event discovery and resource accessibility. The platform was designed to be self-managed by the GO-Valais team with minimal technical knowledge required.',
    solution:
      'A comprehensive community portal featuring an event calendar, resource library (healthcare, legal, job search), photo galleries, and multilingual content. The platform enabled GO-Valais to grow its membership and streamline event management across the Valais region.',
    results: [
      { metric: 'Community', value: 'Unified' },
      { metric: 'Languages', value: 'EN/FR/DE' },
      { metric: 'Event calendar', value: 'Self-managed' },
    ],
    testimonial: {
      text: 'This has greatly fostered development, unity and solidarity among our members.',
      author: 'David Ouedec',
      role: 'Head of GO-Valais Expat Club',
    },
    relatedCases: ['kleap-ai-builder', 'lapochette'],
    meta: {
      title: 'GO-Valais Expat Community Portal — Trident Software Case Study',
      description: 'Community web portal for expatriates in Valais, Switzerland — event calendar, multilingual resources, and self-managed CMS.',
    },
  },
]

export function getCaseBySlug(slug: string): CaseData | undefined {
  return cases.find((c) => c.slug === slug)
}

export function getCaseSlugs(): string[] {
  return cases.map((c) => c.slug)
}

export function getRelatedCases(slugs: string[]): CaseData[] {
  return cases.filter((c) => slugs.includes(c.slug))
}
