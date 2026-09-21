export type SolutionPackage = {
  slug: string
  name: string
  price: string
  timeline: string
  target: string[]
  features: string[]
  highlighted?: boolean
  description: string
}

export type SolutionData = {
  slug: string
  title: string
  tagline: string
  description: string
  packages?: SolutionPackage[]
  features: { title: string; description: string }[]
  techStack: string[]
  meta: { title: string; description: string }
}

export const solutions: SolutionData[] = [
  {
    slug: 'websites',
    title: 'Website Development',
    tagline: 'From brochure sites to user portals — built for Swiss SMEs',
    description:
      'We build websites that combine clean aesthetics with solid engineering. From a simple web brochure to a full user portal with authentication, we deliver fixed-price packages with predictable timelines.',
    packages: [
      {
        slug: 'web-brochure',
        name: 'Web Brochure',
        price: 'CHF 599',
        timeline: '2 weeks',
        description: 'Your virtual business card — a concise, professional online presence that tells clients who you are and how to reach you.',
        target: ['Small businesses', 'Startups', 'Consultants', 'Non-profits'],
        features: [
          'Company info & contacts',
          'Gallery / portfolio',
          'Legal pages (Privacy, Terms, Cookies)',
          'SEO & analytics',
        ],
      },
      {
        slug: 'sme-website',
        name: 'SME Website',
        price: 'CHF 1,299',
        timeline: '1 month',
        highlighted: true,
        description: 'A full-featured website that showcases your business, generates leads, and converts visitors — built for Swiss SMEs.',
        target: ['SMEs', 'Service companies', 'Contractors'],
        features: [
          'Company overview + contacts',
          'Products & services pages',
          'Blog & FAQ',
          'Success stories',
          'SEO & analytics',
        ],
      },
      {
        slug: 'user-portal',
        name: 'User Portal',
        price: 'CHF 2,499',
        timeline: '1.5 months',
        description: 'An interactive platform with authentication and personal accounts — for businesses serving registered clients, members, or partners.',
        target: ['B2G/B2E companies', 'Educational institutions', 'Partner portals'],
        features: [
          'Everything in SME Website',
          'Sign-up / sign-in / password reset',
          'Personal cabinet',
          'User management',
        ],
      },
      {
        slug: 'online-boutique',
        name: 'Online Store',
        price: 'CHF 6,999',
        timeline: '2 months',
        description: 'A complete e-commerce solution for selling products online — catalog, checkout, order management, and inventory built in.',
        target: ['B2C / B2B sellers', 'Manufacturers', 'Distributors'],
        features: [
          'Everything in User Portal',
          'Product catalog + wishlist + cart',
          'Checkout + orders',
          'Products & order management',
        ],
      },
    ],
    features: [
      {
        title: 'Fixed price, fixed timeline',
        description:
          'Every package has a defined scope and delivery date. No hourly billing, no scope creep surprises.',
      },
      {
        title: 'Swiss SEO included',
        description:
          'Multilingual SEO setup (EN/DE/FR/IT), sitemap, structured data, and analytics from day one.',
      },
      {
        title: 'Mobile-first',
        description: 'All designs are mobile-first and tested across devices before delivery.',
      },
      {
        title: 'Money-back guarantee',
        description:
          'If we miss the agreed timeline without good reason, you get a partial refund.',
      },
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Payload CMS',
      'PostgreSQL',
      'Vercel',
      'Caddy',
    ],
    meta: {
      title: 'Website Development Switzerland — Trident Software',
      description:
        'Fixed-price website packages for Swiss SMEs. Web brochure from CHF 599. SME website, user portals, online stores. Delivered in 2 weeks to 2 months.',
    },
  },
  {
    slug: 'e-commerce',
    title: 'E-commerce Solutions',
    tagline: 'Custom B2B, B2C, and B2X platforms — from MVP to 1M+ products',
    description:
      'We build custom e-commerce platforms for Swiss and European businesses. From WooCommerce customization to fully bespoke B2B platforms with complex pricing, ERP integration, and 200+ connectors.',
    features: [
      {
        title: 'B2B & B2C Support',
        description:
          'Omnichannel strategy, custom CRM/ERP integration, scalable order management for both business and consumer markets.',
      },
      {
        title: 'Custom Platform Development',
        description:
          'Backend development, payment gateway integration, analytics dashboards — no SaaS lock-in.',
      },
      {
        title: 'AI-powered features',
        description:
          'Product recommendations, predictive analytics, chatbots and virtual assistants built in.',
      },
      {
        title: 'Marketplace Development',
        description:
          'Multi-vendor marketplaces with logistics, fulfillment, and customer loyalty programs.',
      },
      {
        title: 'ERP / CRM Integration',
        description:
          'Connect to SAP, Odoo, Salesforce, and 200+ other systems via our integration layer.',
      },
      {
        title: 'Cloud-native architecture',
        description:
          'AWS, GCP, or Azure — infrastructure that scales with your catalog and traffic.',
      },
    ],
    techStack: [
      'Python',
      'React.js',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'AWS',
      'Docker',
      'Kubernetes',
      'WooCommerce',
      'Shopify',
    ],
    meta: {
      title: 'Custom E-commerce Development Switzerland — Trident Software',
      description:
        'Custom B2B/B2C/B2X e-commerce platforms built for Swiss companies. From WooCommerce to fully bespoke solutions with ERP integration.',
    },
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile App Development',
    tagline: 'Native and cross-platform apps for iOS and Android',
    description:
      'We design and build mobile applications that are fast, intuitive, and built to scale. From consumer apps to enterprise mobile platforms — React Native or Flutter, delivered with the same Swiss quality standards as our web products.',
    features: [
      {
        title: 'Cross-platform (iOS + Android)',
        description:
          'One codebase, two stores. React Native and Flutter let us ship to iOS and Android simultaneously without sacrificing performance or native feel.',
      },
      {
        title: 'Offline-first architecture',
        description:
          'Apps that work without a connection — local data sync, queue-based operations, and seamless reconnect when network is restored.',
      },
      {
        title: 'Push notifications & analytics',
        description:
          'Engagement tools built in from day one — push campaigns, in-app events, crash reporting, and user retention analytics.',
      },
      {
        title: 'Secure authentication',
        description:
          'Biometric login, OAuth2, JWT, and role-based access control. All data encrypted in transit and at rest.',
      },
      {
        title: 'API & backend integration',
        description:
          'Seamless connection to your existing systems — REST, GraphQL, WebSockets, or third-party services via our integration layer.',
      },
      {
        title: 'App Store & Play Store delivery',
        description:
          'Full-cycle delivery including store submissions, review process support, versioning, and CI/CD for over-the-air updates.',
      },
    ],
    techStack: [
      'React Native',
      'Flutter',
      'TypeScript',
      'Expo',
      'Node.js',
      'PostgreSQL',
      'Firebase',
      'AWS',
      'Docker',
    ],
    meta: {
      title: 'Mobile App Development Switzerland — Trident Software',
      description:
        'Custom iOS and Android apps for Swiss SMEs and enterprises. React Native, Flutter, fixed timelines. From MVP to production-ready mobile platforms.',
    },
  },
  {
    slug: 'cloud-services',
    title: 'Cloud Services',
    tagline: 'Migration, architecture, and managed infrastructure — AWS, Azure, GCP',
    description:
      'From cloud migration strategy to 24/7 managed infrastructure — we design, deploy, and operate cloud environments built for reliability, security, and cost efficiency. Swiss data residency available.',
    features: [
      {
        title: 'Cloud migration',
        description:
          'Lift-and-shift or full modernisation — we assess your workloads, plan the migration, and execute with minimal downtime.',
      },
      {
        title: 'DevOps & CI/CD pipelines',
        description:
          'Automated build, test, and deploy workflows. GitHub Actions, GitLab CI, Jenkins — fully integrated with your development process.',
      },
      {
        title: 'Infrastructure as Code',
        description:
          'All infrastructure defined in Terraform or Pulumi — versioned, reviewable, reproducible. No snowflake servers.',
      },
      {
        title: 'Multi-cloud & hybrid cloud',
        description:
          'AWS, Azure, and GCP — or a hybrid setup connecting on-premise systems to public cloud. We architect for your constraints.',
      },
      {
        title: 'Monitoring & observability',
        description:
          'Grafana dashboards, Prometheus metrics, Datadog APM — full visibility into performance, errors, and infrastructure cost.',
      },
      {
        title: 'Security & compliance',
        description:
          'ISO 27000-27001 compatible security practices. Vulnerability scanning, secrets management, network isolation, and audit logging.',
      },
    ],
    techStack: [
      'AWS',
      'Azure',
      'GCP',
      'Terraform',
      'Docker',
      'Kubernetes',
      'Grafana',
      'Prometheus',
      'Datadog',
      'Jenkins',
      'GitHub Actions',
    ],
    meta: {
      title: 'Cloud Consulting Switzerland — Trident Software',
      description:
        'Cloud migration, DevOps, and managed infrastructure for Swiss businesses. AWS, Azure, GCP. ISO 27001-compatible. Swiss data residency available.',
    },
  },
  {
    slug: 'social-networks',
    title: 'Social Networks & Community Platforms',
    tagline: 'Scalable platforms for communities, marketplaces, and social experiences',
    description:
      'We build custom social platforms — from professional communities and B2B networks to consumer apps with user-generated content. Real-time messaging, content moderation, and privacy-first architecture from the ground up.',
    features: [
      {
        title: 'Real-time feeds & messaging',
        description:
          'WebSocket-based live feeds, direct messaging, and group channels that scale to millions of concurrent users.',
      },
      {
        title: 'User profiles & social graph',
        description:
          'Follow, connect, and recommend — graph-based relationships with flexible permission models for public and private networks.',
      },
      {
        title: 'Content moderation',
        description:
          'AI-assisted moderation pipelines, reporting workflows, and admin dashboards to keep communities safe and compliant.',
      },
      {
        title: 'Privacy & GDPR / nFADP',
        description:
          'Data minimisation, consent management, right-to-erasure workflows, and full compliance with Swiss nFADP and EU GDPR.',
      },
      {
        title: 'Notifications & engagement',
        description:
          'Push, email, and in-app notification systems with preference management and A/B-tested engagement flows.',
      },
      {
        title: 'Analytics & growth tooling',
        description:
          'Retention metrics, cohort analysis, funnel tracking — built into the platform so your growth team has the data they need.',
      },
    ],
    techStack: [
      'React',
      'React Native',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'WebSockets',
      'TypeScript',
      'AWS',
      'Docker',
      'Kubernetes',
    ],
    meta: {
      title: 'Social Network & Community Platform Development — Trident Software',
      description:
        'Custom social platforms and community networks for Swiss businesses. Real-time, GDPR-compliant, scalable. From MVP to production.',
    },
  },
  {
    slug: 'iot',
    title: 'IoT & Embedded Systems',
    tagline: 'Connected devices, firmware, and real-time data pipelines',
    description:
      'From device firmware to cloud integration — we build IoT solutions for automotive, healthcare, water management, and industrial automation. ISO 21434 automotive compliance and medical-grade software validation available.',
    features: [
      {
        title: 'Firmware & embedded software',
        description:
          'Full-cycle embedded development — requirements, architecture, implementation, testing, and deployment. C, C++, and RTOS expertise.',
      },
      {
        title: 'IoT device integration',
        description:
          'Connecting sensors, actuators, and edge devices to cloud backends via MQTT, CoAP, or custom protocols. Security and power optimisation built in.',
      },
      {
        title: 'Real-time data pipelines',
        description:
          'High-frequency sensor data ingestion, processing, and storage. Time-series databases, stream processing, and live dashboards.',
      },
      {
        title: 'Edge & cloud architecture',
        description:
          'Edge computing for latency-sensitive processing, with cloud sync for analytics, storage, and remote management.',
      },
      {
        title: 'Regulatory compliance',
        description:
          'ISO 21434 for automotive cybersecurity, IEC 62443 for industrial, and medical device software validation (IEC 62304) where needed.',
      },
      {
        title: 'Reliability testing',
        description:
          'Hardware-in-the-loop testing, long-duration stress tests, failure mode analysis, and over-the-air update systems.',
      },
    ],
    techStack: [
      'C / C++',
      'Python',
      'RTOS',
      'MQTT',
      'AWS IoT',
      'Azure IoT Hub',
      'InfluxDB',
      'Docker',
      'Kubernetes',
      'Grafana',
    ],
    meta: {
      title: 'IoT & Embedded Systems Development Switzerland — Trident Software',
      description:
        'IoT solutions and firmware development for automotive, healthcare, and industrial sectors. ISO 21434, medical-grade compliance. Based in Sion, Switzerland.',
    },
  },
]

export function getSolutionBySlug(slug: string): SolutionData | undefined {
  return solutions.find((s) => s.slug === slug)
}

export function getSolutionSlugs() {
  return solutions.map((s) => ({ slug: s.slug }))
}
