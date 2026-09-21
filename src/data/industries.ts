export type IndustryData = {
  slug: string
  title: string
  tagline: string
  description: string
  icon: string
  challenges: { title: string; description: string }[]
  solutions: { title: string; description: string }[]
  techStack: string[]
  relatedCases: string[]
  relatedServices: string[]
  meta: {
    title: string
    description: string
  }
}

export const industries: IndustryData[] = [
  {
    slug: 'healthcare',
    title: 'Healthcare & Medtech',
    tagline: 'Compliant software for the most regulated industry',
    description:
      'We build clinical decision support systems, patient portals, medical device software, and AI-powered diagnostics for hospitals, clinics, and medtech companies. All solutions comply with Swiss and EU medical device regulations.',
    icon: 'heart-pulse',
    challenges: [
      {
        title: 'Regulatory compliance',
        description: 'IEC 62304, MDR 2017/745, and Swiss Medtech Act requirements for software as a medical device.',
      },
      {
        title: 'Data privacy',
        description: 'Patient data under nFADP and GDPR with audit trails and role-based access.',
      },
      {
        title: 'System integration',
        description: 'HL7/FHIR integration with hospital information systems and laboratory equipment.',
      },
    ],
    solutions: [
      { title: 'Clinical decision support', description: 'AI-assisted diagnosis and treatment recommendation systems.' },
      { title: 'Patient portals', description: 'Secure portals for appointment booking, results, and communication.' },
      { title: 'Medical device software', description: 'IEC 62304-compliant embedded software for diagnostic devices.' },
      { title: 'AI diagnostics', description: 'Computer vision for radiology, pathology, and dermatology.' },
    ],
    techStack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'HL7 FHIR', 'Docker', 'Azure HIPAA'],
    relatedCases: ['aida-medicine'],
    relatedServices: ['ai-services', 'software-engineering', 'embedded-and-iot'],
    meta: {
      title: 'Healthcare & Medtech Software Development | Trident Software',
      description: 'Compliant medical software development — clinical systems, AI diagnostics, patient portals. IEC 62304, MDR, nFADP. Swiss team.',
    },
  },
  {
    slug: 'automotive',
    title: 'Automotive',
    tagline: 'Software for connected and electric vehicles',
    description:
      'From B2B dealer platforms to EV fleet management and in-vehicle software, we deliver automotive solutions that meet the precision and reliability standards of the industry.',
    icon: 'car',
    challenges: [
      {
        title: 'Complex B2B workflows',
        description: 'Multi-tenant dealer platforms with pricing, inventory, and approval chains.',
      },
      {
        title: 'Real-time telemetry',
        description: 'Vehicle data ingestion and processing at scale for EV and fleet applications.',
      },
      {
        title: 'Regulatory compliance',
        description: 'Homologation documentation, recall management, and type-approval workflows.',
      },
    ],
    solutions: [
      { title: 'Dealer management systems', description: 'B2B platforms for vehicle ordering, pricing, and inventory.' },
      { title: 'EV fleet management', description: 'Charging optimization, range prediction, and fleet analytics.' },
      { title: 'Telematics platforms', description: 'Real-time vehicle data processing and driver behavior analytics.' },
      { title: 'Document automation', description: 'AI-powered vehicle documentation and compliance workflows.' },
    ],
    techStack: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'MQTT', 'Kubernetes', 'AWS'],
    relatedCases: ['zenit-auto-b2b'],
    relatedServices: ['software-engineering', 'ai-services', 'cloud-consulting'],
    meta: {
      title: 'Automotive Software Development | Trident Software',
      description: 'Automotive software — dealer platforms, EV fleet management, telematics, and vehicle documentation automation. Swiss engineering.',
    },
  },
  {
    slug: 'logistics',
    title: 'Logistics & Supply Chain',
    tagline: 'Visibility and automation for complex supply chains',
    description:
      'We build warehouse management systems, last-mile delivery platforms, route optimization tools, and supply chain visibility dashboards for logistics companies across Europe.',
    icon: 'truck',
    challenges: [
      {
        title: 'Real-time tracking',
        description: 'GPS and IoT sensor integration for shipment and asset tracking at scale.',
      },
      {
        title: 'Route optimization',
        description: 'Dynamic routing with traffic, capacity, and time-window constraints.',
      },
      {
        title: 'WMS integration',
        description: 'Integration with SAP, Oracle, and legacy warehouse management systems.',
      },
    ],
    solutions: [
      { title: 'Warehouse management', description: 'Barcode/RFID-based WMS with picking optimization and cycle counting.' },
      { title: 'Last-mile delivery', description: 'Driver apps, proof-of-delivery, and customer tracking portals.' },
      { title: 'Supply chain visibility', description: 'Multi-carrier tracking and exception management dashboards.' },
      { title: 'Route optimization', description: 'AI-based route planning reducing fuel costs and delivery windows.' },
    ],
    techStack: ['Python', 'Django', 'React Native', 'PostgreSQL', 'Redis', 'RabbitMQ', 'GCP'],
    relatedCases: ['8move-driver'],
    relatedServices: ['software-engineering', 'ai-services', 'mobile-development'],
    meta: {
      title: 'Logistics & Supply Chain Software | Trident Software',
      description: 'Logistics software development — WMS, last-mile delivery, route optimization, supply chain visibility. Swiss engineering team.',
    },
  },
  {
    slug: 'fintech',
    title: 'Fintech & Finance',
    tagline: 'Secure financial software under Swiss banking standards',
    description:
      'Banking integrations, payment processing, portfolio management tools, and regulatory reporting systems built to the highest Swiss financial sector standards.',
    icon: 'landmark',
    challenges: [
      {
        title: 'Banking regulations',
        description: 'FINMA compliance, PSD2, and Swiss Banking Act requirements.',
      },
      {
        title: 'Security requirements',
        description: 'Multi-factor authentication, encryption at rest and in transit, penetration testing.',
      },
      {
        title: 'Core banking integration',
        description: 'API integration with Temenos, Avaloq, and legacy core banking systems.',
      },
    ],
    solutions: [
      { title: 'Banking integrations', description: 'Open banking API connectors and payment processing pipelines.' },
      { title: 'Portfolio management', description: 'Asset allocation, performance reporting, and risk dashboards.' },
      { title: 'Regulatory reporting', description: 'Automated MiFID II, FATCA, and FINMA reporting workflows.' },
      { title: 'Payment automation', description: 'SEPA, SIC, and cross-border payment orchestration.' },
    ],
    techStack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Kafka', 'HSM', 'Azure'],
    relatedCases: [],
    relatedServices: ['software-engineering', 'cloud-consulting', 'devops-and-sre'],
    meta: {
      title: 'Fintech & Financial Software Development | Trident Software',
      description: 'Fintech software development — banking integrations, payment processing, portfolio management. FINMA-compliant. Swiss engineering.',
    },
  },
  {
    slug: 'retail-ecommerce',
    title: 'Retail & E-commerce',
    tagline: 'Conversion-focused commerce platforms',
    description:
      'Custom e-commerce platforms, product configurators, inventory management systems, and AI-powered personalization for European retailers and D2C brands.',
    icon: 'shopping-bag',
    challenges: [
      {
        title: 'Performance at scale',
        description: 'Handling peak traffic during sales events without degradation.',
      },
      {
        title: 'Personalization',
        description: 'Product recommendations, dynamic pricing, and behavioral segmentation.',
      },
      {
        title: 'Omnichannel integration',
        description: 'Unified inventory and customer data across web, mobile, and physical stores.',
      },
    ],
    solutions: [
      { title: 'Custom storefronts', description: 'Headless commerce with Next.js frontend and composable backends.' },
      { title: 'Product configurators', description: '3D/AR product customization tools for complex goods.' },
      { title: 'AI personalization', description: 'Recommendation engines and dynamic content based on user behavior.' },
      { title: 'Inventory management', description: 'Multi-warehouse stock tracking with demand forecasting.' },
    ],
    techStack: ['Next.js', 'Shopify', 'Medusa.js', 'PostgreSQL', 'Redis', 'Algolia', 'Vercel'],
    relatedCases: ['lapochette'],
    relatedServices: ['software-engineering', 'ui-ux-design', 'ai-services'],
    meta: {
      title: 'Retail & E-commerce Software Development | Trident Software',
      description: 'E-commerce software development — headless storefronts, product configurators, AI personalization. Swiss engineering team.',
    },
  },
  {
    slug: 'saas',
    title: 'SaaS & Software Products',
    tagline: 'From MVP to scalable multi-tenant platform',
    description:
      'We build SaaS products from the ground up — multi-tenant architecture, subscription billing, usage analytics, and white-label capabilities for software companies and startups.',
    icon: 'cloud',
    challenges: [
      {
        title: 'Multi-tenancy',
        description: 'Isolated tenant data, custom domains, and per-tenant configuration at scale.',
      },
      {
        title: 'Billing complexity',
        description: 'Usage-based pricing, tiered plans, and trial conversions across markets.',
      },
      {
        title: 'Scaling architecture',
        description: 'Moving from MVP architecture to systems that handle 100x growth.',
      },
    ],
    solutions: [
      { title: 'SaaS architecture', description: 'Multi-tenant data isolation, custom domains, SSO and RBAC.' },
      { title: 'Subscription billing', description: 'Stripe integration with usage metering and dunning workflows.' },
      { title: 'Analytics & observability', description: 'Product analytics, feature flags, and SLO monitoring.' },
      { title: 'AI feature integration', description: 'LLM-powered features: copilots, search, content generation.' },
    ],
    techStack: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'Stripe', 'PostHog', 'AWS'],
    relatedCases: ['kleap-ai-builder'],
    relatedServices: ['software-engineering', 'ai-services', 'devops-and-sre'],
    meta: {
      title: 'SaaS Development Services | Trident Software',
      description: 'SaaS product development — multi-tenant architecture, subscription billing, AI features. From MVP to scale. Swiss engineering.',
    },
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing & Industry 4.0',
    tagline: 'Connecting the factory floor to the cloud',
    description:
      'IoT sensor integration, SCADA/HMI modernization, predictive maintenance systems, and production monitoring dashboards for Swiss and European manufacturers.',
    icon: 'factory',
    challenges: [
      {
        title: 'OT/IT integration',
        description: 'Bridging legacy PLC/SCADA systems with modern cloud infrastructure.',
      },
      {
        title: 'Real-time processing',
        description: 'Sub-second sensor data processing for quality control and anomaly detection.',
      },
      {
        title: 'Harsh environments',
        description: 'Industrial-grade embedded software for vibration, temperature, and EMI conditions.',
      },
    ],
    solutions: [
      { title: 'IoT sensor integration', description: 'MQTT/OPC-UA connectors for PLCs, sensors, and edge devices.' },
      { title: 'Predictive maintenance', description: 'ML models detecting equipment failure before it happens.' },
      { title: 'MES/SCADA modernization', description: 'Web-based HMI replacing legacy SCADA with real-time dashboards.' },
      { title: 'Quality control AI', description: 'Computer vision for defect detection on production lines.' },
    ],
    techStack: ['C/C++', 'Python', 'MQTT', 'OPC-UA', 'InfluxDB', 'Grafana', 'Azure IoT'],
    relatedCases: ['tdsbot-iot'],
    relatedServices: ['embedded-and-iot', 'ai-services', 'cloud-consulting'],
    meta: {
      title: 'Manufacturing & Industry 4.0 Software | Trident Software',
      description: 'Industry 4.0 software — IoT integration, predictive maintenance, SCADA modernization, quality control AI. Swiss engineering.',
    },
  },
  {
    slug: 'proptech',
    title: 'Real Estate & PropTech',
    tagline: 'Digital transformation for the property sector',
    description:
      'Property management platforms, tenant portals, smart building integrations, and AI-powered property valuation tools for real estate companies and property managers.',
    icon: 'building-2',
    challenges: [
      {
        title: 'Document complexity',
        description: 'Lease agreements, permits, and compliance documents across multiple jurisdictions.',
      },
      {
        title: 'Multi-stakeholder workflows',
        description: 'Coordinating landlords, tenants, contractors, and property managers.',
      },
      {
        title: 'Building system integration',
        description: 'BMS, access control, and energy monitoring system integrations.',
      },
    ],
    solutions: [
      { title: 'Property management', description: 'Unified platform for lease management, maintenance, and billing.' },
      { title: 'Tenant portals', description: 'Self-service portals for rent payment, maintenance requests, and documents.' },
      { title: 'Document AI', description: 'Automated lease extraction, compliance checks, and contract analysis.' },
      { title: 'Smart building integration', description: 'BMS and IoT integration for energy and access management.' },
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Twilio', 'Stripe', 'DocuSign'],
    relatedCases: [],
    relatedServices: ['software-engineering', 'ai-services', 'ui-ux-design'],
    meta: {
      title: 'PropTech & Real Estate Software | Trident Software',
      description: 'PropTech software development — property management, tenant portals, document AI, smart building integration. Swiss engineering.',
    },
  },
  {
    slug: 'energy',
    title: 'Energy & Utilities',
    tagline: 'Software for the energy transition',
    description:
      'Grid management systems, EV charging infrastructure software, renewable energy monitoring, and energy trading platforms for utilities and cleantech companies.',
    icon: 'zap',
    challenges: [
      {
        title: 'Grid complexity',
        description: 'Distributed energy resources, bi-directional power flow, and grid stability.',
      },
      {
        title: 'Regulatory framework',
        description: 'Swiss ElCom, EU energy directives, and metering regulations.',
      },
      {
        title: 'Real-time optimization',
        description: 'Energy dispatch optimization with sub-second response requirements.',
      },
    ],
    solutions: [
      { title: 'EV charging management', description: 'OCPP-compliant charging infrastructure management and billing.' },
      { title: 'Energy monitoring', description: 'Real-time dashboards for solar, wind, and storage assets.' },
      { title: 'Demand response', description: 'Automated load management responding to grid signals.' },
      { title: 'Energy trading', description: 'Day-ahead and intraday trading platform integrations.' },
    ],
    techStack: ['Python', 'TimescaleDB', 'Grafana', 'OCPP', 'MQTT', 'FastAPI', 'Kubernetes'],
    relatedCases: [],
    relatedServices: ['software-engineering', 'embedded-and-iot', 'cloud-consulting'],
    meta: {
      title: 'Energy & Utilities Software Development | Trident Software',
      description: 'Energy software — EV charging management, grid monitoring, demand response, energy trading. Swiss engineering team.',
    },
  },
  {
    slug: 'insurance',
    title: 'Insurance & InsurTech',
    tagline: 'Modernizing the insurance value chain',
    description:
      'Claims automation, policy management systems, telematics-based underwriting, and AI fraud detection for Swiss insurers and InsurTech startups.',
    icon: 'shield-check',
    challenges: [
      {
        title: 'Legacy core systems',
        description: 'Integrating with mainframe-era policy administration systems.',
      },
      {
        title: 'Claims fraud',
        description: 'Detecting fraudulent claims patterns across structured and unstructured data.',
      },
      {
        title: 'Regulatory reporting',
        description: 'FINMA SST reporting, Solvency II, and IFRS 17 data pipelines.',
      },
    ],
    solutions: [
      { title: 'Claims automation', description: 'AI-powered claims triage, document extraction, and processing.' },
      { title: 'Policy management', description: 'Modern policy admin layer over legacy core systems.' },
      { title: 'Fraud detection', description: 'ML models detecting anomalies across claim submissions.' },
      { title: 'Telematics underwriting', description: 'UBI pricing engines using vehicle telematics data.' },
    ],
    techStack: ['Java', 'Python', 'PostgreSQL', 'Kafka', 'Spark', 'Azure ML', 'Power BI'],
    relatedCases: [],
    relatedServices: ['ai-services', 'software-engineering', 'devops-and-sre'],
    meta: {
      title: 'Insurance & InsurTech Software | Trident Software',
      description: 'InsurTech software — claims automation, fraud detection, policy management, telematics underwriting. Swiss engineering.',
    },
  },
  {
    slug: 'hospitality',
    title: 'Hospitality & Tourism',
    tagline: 'Digital experiences for hospitality leaders',
    description:
      'Hotel management systems, booking platforms, guest apps, and revenue management tools for Swiss hotels, resorts, and tourism operators.',
    icon: 'hotel',
    challenges: [
      {
        title: 'PMS integration',
        description: 'Connecting to Opera, Protel, and other property management systems via API.',
      },
      {
        title: 'Multi-language guests',
        description: 'Guest-facing interfaces in EN/DE/FR/IT as required in Switzerland.',
      },
      {
        title: 'Revenue optimization',
        description: 'Dynamic pricing and availability across OTA channels.',
      },
    ],
    solutions: [
      { title: 'Guest portals', description: 'Mobile-first check-in, room service ordering, and concierge apps.' },
      { title: 'Channel management', description: 'Real-time availability sync across Booking.com, Expedia, and GDS.' },
      { title: 'Revenue management', description: 'Demand forecasting and dynamic pricing recommendation engine.' },
      { title: 'Loyalty programs', description: 'Custom loyalty and CRM systems for hotel groups.' },
    ],
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Twilio', 'AWS'],
    relatedCases: [],
    relatedServices: ['software-engineering', 'ui-ux-design', 'ai-services'],
    meta: {
      title: 'Hospitality & Tourism Software | Trident Software',
      description: 'Hospitality software — hotel management, guest apps, channel management, revenue optimization. Swiss engineering team.',
    },
  },
  {
    slug: 'legaltech',
    title: 'Legal Tech',
    tagline: 'AI-powered tools for legal professionals',
    description:
      'Contract management systems, legal document automation, AI-assisted legal research, and matter management platforms for law firms and corporate legal departments.',
    icon: 'scale',
    challenges: [
      {
        title: 'Document complexity',
        description: 'Extracting structured data from complex legal documents across jurisdictions.',
      },
      {
        title: 'Confidentiality',
        description: 'Attorney-client privilege requires on-premise AI deployment in many cases.',
      },
      {
        title: 'Accuracy requirements',
        description: 'Legal errors have high consequences — AI must augment, not replace, human judgment.',
      },
    ],
    solutions: [
      { title: 'Contract analysis', description: 'AI extraction of key clauses, dates, and obligations from contracts.' },
      { title: 'Document automation', description: 'Template-based generation of standard legal documents.' },
      { title: 'Matter management', description: 'Case tracking, deadline management, and billing integration.' },
      { title: 'On-premise LLM', description: 'Llama/Mistral deployment on client infrastructure for maximum confidentiality.' },
    ],
    techStack: ['Python', 'LangChain', 'Llama', 'PostgreSQL', 'React', 'FastAPI', 'Docker'],
    relatedCases: [],
    relatedServices: ['ai-services', 'software-engineering', 'cto-as-a-service'],
    meta: {
      title: 'Legal Tech Software Development | Trident Software',
      description: 'Legal tech software — contract AI, document automation, matter management, on-premise LLM. Swiss engineering.',
    },
  },
  {
    slug: 'fashion-lifestyle',
    title: 'Fashion & Lifestyle',
    tagline: 'Technology for brands with taste',
    description:
      'E-commerce platforms, product configurators, influencer management tools, and AI-powered creative assistants for fashion brands and lifestyle companies.',
    icon: 'shirt',
    challenges: [
      {
        title: 'Visual complexity',
        description: 'High-resolution product photography, 360° views, and AR try-on experiences.',
      },
      {
        title: 'Seasonal demand',
        description: 'Spike traffic during launches and sales without over-provisioning year-round.',
      },
      {
        title: 'Global sizing',
        description: 'Size conversion and fit recommendation across markets.',
      },
    ],
    solutions: [
      { title: 'Custom storefronts', description: 'Headless commerce with editorial-quality design and performance.' },
      { title: 'Product configurators', description: 'Custom jewelry, apparel, and accessory configuration tools.' },
      { title: 'AI creative tools', description: 'LLM-powered product descriptions, lookbook generation, and copy.' },
      { title: 'Influencer platforms', description: 'Tracking, commission management, and UGC aggregation tools.' },
    ],
    techStack: ['Next.js', 'Shopify', 'Sanity', 'PostgreSQL', 'Cloudinary', 'Vercel', 'OpenAI'],
    relatedCases: ['lapochette'],
    relatedServices: ['software-engineering', 'ui-ux-design', 'ai-services'],
    meta: {
      title: 'Fashion & Lifestyle Software | Trident Software',
      description: 'Fashion tech software — headless storefronts, product configurators, AI creative tools, influencer platforms. Swiss engineering.',
    },
  },
  {
    slug: 'agriculture',
    title: 'Agriculture & AgriTech',
    tagline: 'Precision agriculture for Swiss farming',
    description:
      'Farm management systems, crop monitoring with satellite/drone data, livestock tracking, and agricultural IoT solutions for Swiss farmers and agri-businesses.',
    icon: 'sprout',
    challenges: [
      {
        title: 'Remote connectivity',
        description: 'Reliable data collection in areas with poor cellular coverage.',
      },
      {
        title: 'Regulatory compliance',
        description: 'Swiss agricultural subsidies, organic certification, and cross-border food traceability.',
      },
      {
        title: 'Seasonal workflows',
        description: 'Software that adapts to planting, growing, and harvest cycles.',
      },
    ],
    solutions: [
      { title: 'Farm management', description: 'Crop planning, input tracking, and yield recording systems.' },
      { title: 'Precision monitoring', description: 'Satellite and drone imagery analysis for field health mapping.' },
      { title: 'Livestock tracking', description: 'RFID/GPS-based herd tracking and health monitoring.' },
      { title: 'Subsidy management', description: 'Swiss DZV subsidy application and compliance tracking.' },
    ],
    techStack: ['Python', 'React', 'PostgreSQL', 'MQTT', 'LoRaWAN', 'PostGIS', 'AWS'],
    relatedCases: [],
    relatedServices: ['embedded-and-iot', 'software-engineering', 'ai-services'],
    meta: {
      title: 'Agriculture & AgriTech Software | Trident Software',
      description: 'AgriTech software — farm management, precision monitoring, livestock tracking, subsidy management. Swiss engineering.',
    },
  },
  {
    slug: 'public-sector',
    title: 'Public Sector & GovTech',
    tagline: 'Digital government for Swiss communities',
    description:
      'Citizen portals, municipal management systems, grant administration tools, and smart city integrations for Swiss cantonal and municipal administrations.',
    icon: 'landmark',
    challenges: [
      {
        title: 'Data sovereignty',
        description: 'Swiss public data must remain on Swiss infrastructure — no US cloud hyperscalers.',
      },
      {
        title: 'Accessibility',
        description: 'WCAG 2.1 AA compliance and multilingual interfaces for all four national languages.',
      },
      {
        title: 'Procurement rules',
        description: 'Public procurement via SIMAP with detailed technical specification requirements.',
      },
    ],
    solutions: [
      { title: 'Citizen portals', description: 'Self-service portals for permits, registrations, and municipal services.' },
      { title: 'Grant management', description: 'Application, review, and disbursement workflows for public grants.' },
      { title: 'Smart city integration', description: 'Sensor data aggregation for parking, waste, and traffic management.' },
      { title: 'Document management', description: 'Secure archiving and retrieval of public records.' },
    ],
    techStack: ['React', 'Java', 'PostgreSQL', 'Exoscale', 'Keycloak', 'Docker', 'OpenAPI'],
    relatedCases: [],
    relatedServices: ['software-engineering', 'cloud-consulting', 'cto-as-a-service'],
    meta: {
      title: 'Public Sector & GovTech Software | Trident Software',
      description: 'GovTech software — citizen portals, grant management, smart city, document management. Swiss data residency. Swiss engineering.',
    },
  },
  {
    slug: 'media-entertainment',
    title: 'Media & Entertainment',
    tagline: 'Content platforms that scale',
    description:
      'Streaming platforms, content management systems, AI content generation tools, and audience analytics for media companies, publishers, and content creators.',
    icon: 'tv',
    challenges: [
      {
        title: 'Content at scale',
        description: 'Storing, transcoding, and delivering terabytes of video and audio content.',
      },
      {
        title: 'Rights management',
        description: 'Digital rights, geo-restrictions, and licensing expiry enforcement.',
      },
      {
        title: 'Audience personalization',
        description: 'Content recommendations that drive engagement without filter bubbles.',
      },
    ],
    solutions: [
      { title: 'Streaming infrastructure', description: 'Video transcoding, CDN distribution, and adaptive bitrate streaming.' },
      { title: 'CMS & publishing', description: 'Headless CMS with editorial workflows and multi-channel publishing.' },
      { title: 'AI content tools', description: 'LLM-powered article writing, SEO optimization, and translation.' },
      { title: 'Audience analytics', description: 'Engagement metrics, content performance, and churn prediction.' },
    ],
    techStack: ['Next.js', 'Node.js', 'FFmpeg', 'S3', 'CloudFront', 'PostgreSQL', 'OpenAI'],
    relatedCases: [],
    relatedServices: ['software-engineering', 'ai-services', 'devops-and-sre'],
    meta: {
      title: 'Media & Entertainment Software | Trident Software',
      description: 'Media software — streaming platforms, CMS, AI content tools, audience analytics. Swiss engineering team.',
    },
  },
  {
    slug: 'tourism',
    title: 'Tourism & Travel',
    tagline: 'Digital experiences for modern travellers',
    description:
      'Booking platforms, itinerary management, concierge apps, and travel intelligence systems for tour operators, hotels, and travel agencies across Switzerland and Europe.',
    icon: 'map',
    challenges: [
      {
        title: 'Real-time availability',
        description: 'Synchronising inventory across channels — OTAs, direct booking, GDS — without overbooking.',
      },
      {
        title: 'Seasonal demand spikes',
        description: 'Infrastructure that scales for peak season without overprovisioning year-round.',
      },
      {
        title: 'Multi-currency & multi-language',
        description: 'Serving international guests in their language and currency with localised tax handling.',
      },
    ],
    solutions: [
      { title: 'Booking & reservation systems', description: 'Real-time availability, payment processing, and booking confirmation workflows.' },
      { title: 'Tour management platforms', description: 'Itinerary builder, guide assignment, and group management tools.' },
      { title: 'Concierge & guest apps', description: 'Mobile apps for check-in, activity booking, and in-destination recommendations.' },
      { title: 'Travel analytics', description: 'Demand forecasting, pricing optimisation, and customer lifetime value models.' },
    ],
    techStack: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
    relatedCases: [],
    relatedServices: ['software-engineering', 'ui-ux-design', 'ai-services'],
    meta: {
      title: 'Tourism & Travel Software Development | Trident Software',
      description: 'Travel tech software — booking platforms, tour management, concierge apps, travel analytics. Swiss engineering.',
    },
  },
  {
    slug: 'fmcg',
    title: 'FMCG & Consumer Goods',
    tagline: 'Supply chain and distribution tech for fast-moving goods',
    description:
      'Order management, route planning, HoReCa distribution platforms, and retail execution tools for food and beverage companies, FMCG distributors, and consumer goods brands.',
    icon: 'shopping-bag',
    challenges: [
      {
        title: 'High order volume',
        description: 'Processing thousands of daily orders across dozens of SKUs with tight delivery windows.',
      },
      {
        title: 'HoReCa complexity',
        description: 'Managing restaurant and hotel accounts with custom pricing, credit limits, and delivery schedules.',
      },
      {
        title: 'Expiry and freshness tracking',
        description: 'FIFO inventory management with batch tracking and shelf-life alerts.',
      },
    ],
    solutions: [
      { title: 'Distribution management', description: 'Order intake, van loading, route optimisation, and proof-of-delivery.' },
      { title: 'HoReCa ordering platform', description: 'Self-service portal for restaurants with scheduled deliveries and invoice management.' },
      { title: 'Retail execution app', description: 'Field rep app for shelf audits, order taking, and competitor tracking.' },
      { title: 'Demand forecasting', description: 'AI-powered stock level predictions to reduce waste and out-of-stock events.' },
    ],
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Python', 'Docker', 'AWS'],
    relatedCases: [],
    relatedServices: ['software-engineering', 'ai-services', 'cloud-consulting'],
    meta: {
      title: 'FMCG & Consumer Goods Software | Trident Software',
      description: 'FMCG software — distribution management, HoReCa platforms, retail execution, demand forecasting. Swiss engineering.',
    },
  },
  {
    slug: 'diy-tools',
    title: 'DIY & Tools',
    tagline: 'E-commerce and product intelligence for tool retailers',
    description:
      'Product catalogue management, compatibility finders, B2B dealer portals, and inventory systems for power tool brands, hardware retailers, and professional tool distributors.',
    icon: 'wrench',
    challenges: [
      {
        title: 'Complex product catalogues',
        description: 'Thousands of SKUs with detailed technical specs, compatibility matrices, and accessory relationships.',
      },
      {
        title: 'Pro vs consumer segmentation',
        description: 'Serving both trade professionals (bulk pricing, invoicing) and retail consumers from a single platform.',
      },
      {
        title: 'Part finder and compatibility',
        description: 'Helping customers find the right part, blade, or battery for their specific model.',
      },
    ],
    solutions: [
      { title: 'Product catalogue & PIM', description: 'Rich product data management with specs, compatibility tables, and media.' },
      { title: 'B2B dealer portal', description: 'Trade pricing, account management, bulk ordering, and stock visibility.' },
      { title: 'Compatibility finder', description: 'Tool-to-accessory matching engine with guided selection.' },
      { title: 'Inventory management', description: 'Multi-warehouse stock control with reorder point automation.' },
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'Docker', 'AWS'],
    relatedCases: [],
    relatedServices: ['software-engineering', 'ui-ux-design', 'cloud-consulting'],
    meta: {
      title: 'DIY & Tools Software Development | Trident Software',
      description: 'DIY and tools software — product catalogues, B2B dealer portals, compatibility finders, inventory systems. Swiss engineering.',
    },
  },
  {
    slug: 'catering',
    title: 'Catering & Food Service',
    tagline: 'Operations software for professional kitchens and caterers',
    description:
      'Event catering management, recipe costing, staff scheduling, and client ordering platforms for catering companies, contract food service operators, and cloud kitchens.',
    icon: 'utensils',
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
      { title: 'Event catering management', description: 'Quote builder, menu planner, staffing, and production sheet generation.' },
      { title: 'Recipe & cost management', description: 'Recipe database with live cost calculation linked to supplier pricing.' },
      { title: 'Client ordering portal', description: 'Self-service ordering for corporate clients with approval workflows.' },
      { title: 'Staff scheduling', description: 'Shift planning, time tracking, and labour cost reporting for kitchen teams.' },
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'React Native', 'Docker'],
    relatedCases: [],
    relatedServices: ['software-engineering', 'ui-ux-design', 'ai-services'],
    meta: {
      title: 'Catering & Food Service Software | Trident Software',
      description: 'Catering software — event management, recipe costing, client ordering portals, staff scheduling. Swiss engineering.',
    },
  },
  {
    slug: 'blockchain',
    title: 'Blockchain & Web3',
    tagline: 'Smart contracts and decentralised applications',
    description:
      'Smart contract development, NFT platforms, tokenisation infrastructure, and DeFi protocol integrations for Web3 startups, financial institutions, and enterprise blockchain projects.',
    icon: 'link',
    challenges: [
      {
        title: 'Smart contract security',
        description: 'Preventing re-entrancy, overflow, and access control vulnerabilities in on-chain code.',
      },
      {
        title: 'Gas optimisation',
        description: 'Minimising transaction costs without sacrificing functionality or security.',
      },
      {
        title: 'Regulatory compliance',
        description: 'Navigating Swiss FINMA guidance and MiCA for tokenised assets and DeFi protocols.',
      },
    ],
    solutions: [
      { title: 'Smart contract development', description: 'Solidity and Rust contracts with formal verification and audit preparation.' },
      { title: 'NFT platforms', description: 'Minting, marketplace, and royalty management for digital assets.' },
      { title: 'Tokenisation infrastructure', description: 'Real-world asset tokenisation with compliance and transfer restrictions.' },
      { title: 'Web3 frontend integration', description: 'dApp frontends with wallet connection, on-chain reads, and transaction signing.' },
    ],
    techStack: ['Solidity', 'Rust', 'Ethereum', 'Polygon', 'IPFS', 'TypeScript', 'Hardhat', 'The Graph'],
    relatedCases: [],
    relatedServices: ['software-engineering', 'ai-services', 'cloud-consulting'],
    meta: {
      title: 'Blockchain & Web3 Development | Trident Software',
      description: 'Blockchain development — smart contracts, NFT platforms, tokenisation, DeFi integrations. Swiss engineering team.',
    },
  },
  {
    slug: 'social-media',
    title: 'Social Media & Community',
    tagline: 'Platforms that connect people at scale',
    description:
      'Social networking platforms, community management tools, creator economy infrastructure, and moderation systems for social apps, professional networks, and niche communities.',
    icon: 'users',
    challenges: [
      {
        title: 'Feed algorithms',
        description: 'Relevance ranking, engagement prediction, and content diversity at millions of posts per day.',
      },
      {
        title: 'Content moderation',
        description: 'Automated and human-in-the-loop moderation at scale without false positives.',
      },
      {
        title: 'Real-time interactions',
        description: 'Low-latency notifications, live feeds, and presence indicators across millions of concurrent users.',
      },
    ],
    solutions: [
      { title: 'Community platform', description: 'User profiles, follow graphs, feeds, reactions, and direct messaging.' },
      { title: 'Creator tools', description: 'Monetisation, subscriber management, and content scheduling for creators.' },
      { title: 'Moderation infrastructure', description: 'AI-assisted content moderation with appeal workflows and audit logs.' },
      { title: 'Social analytics', description: 'Engagement metrics, growth tracking, and audience insights dashboards.' },
    ],
    techStack: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Kafka', 'Elasticsearch', 'AWS'],
    relatedCases: [],
    relatedServices: ['software-engineering', 'ai-services', 'cloud-consulting', 'devops-and-sre'],
    meta: {
      title: 'Social Media & Community Platform Development | Trident Software',
      description: 'Social platform development — community apps, creator tools, moderation systems, social analytics. Swiss engineering.',
    },
  },
  {
    slug: 'games',
    title: 'Gaming & Interactive',
    tagline: 'Backend and tooling for game studios',
    description:
      'Game backend services, matchmaking systems, in-game economy platforms, and live ops tooling for mobile game studios, indie developers, and serious game companies.',
    icon: 'gamepad-2',
    challenges: [
      {
        title: 'Latency and scalability',
        description: 'Sub-100ms response for multiplayer actions and burst scaling for new game launches.',
      },
      {
        title: 'In-game economy balance',
        description: 'Preventing inflation, exploits, and pay-to-win imbalance in virtual economies.',
      },
      {
        title: 'Live ops and events',
        description: 'Deploying seasonal content, A/B tests, and balance patches without downtime.',
      },
    ],
    solutions: [
      { title: 'Game backend services', description: 'Authentication, leaderboards, player data, and cloud saves as managed services.' },
      { title: 'Matchmaking systems', description: 'Skill-based matchmaking with region-aware routing and anti-cheat integration.' },
      { title: 'Virtual economy platform', description: 'In-game currencies, item shops, trading systems, and economy analytics.' },
      { title: 'Live ops dashboard', description: 'Content scheduling, player segmentation, and event management for live games.' },
    ],
    techStack: ['Go', 'Node.js', 'Redis', 'PostgreSQL', 'WebSockets', 'Kubernetes', 'AWS'],
    relatedCases: [],
    relatedServices: ['software-engineering', 'cloud-consulting', 'devops-and-sre'],
    meta: {
      title: 'Game Development Backend & Infrastructure | Trident Software',
      description: 'Game backend services — matchmaking, live ops, virtual economies, player data. Swiss engineering for game studios.',
    },
  },
  {
    slug: 'sport-activities',
    title: 'Sport & Fitness',
    tagline: 'Technology for active lifestyles and sports organisations',
    description:
      'Sports club management, event registration platforms, activity tracking apps, and athlete performance analytics for federations, fitness brands, and sports tech startups.',
    icon: 'dumbbell',
    challenges: [
      {
        title: 'Registration and payment',
        description: 'Handling race registrations, membership fees, and event ticketing with high concurrency at opening.',
      },
      {
        title: 'Real-time tracking',
        description: 'GPS and sensor data ingestion from thousands of athletes in a live event.',
      },
      {
        title: 'Community and engagement',
        description: 'Keeping athletes engaged between events with training plans, social features, and progress tracking.',
      },
    ],
    solutions: [
      { title: 'Event registration platform', description: 'Race and event signup with wave assignment, payment, and BIB management.' },
      { title: 'Club management system', description: 'Membership, scheduling, facility booking, and coach communication.' },
      { title: 'Activity tracking app', description: 'Mobile app for logging workouts, routes, and personal records with social sharing.' },
      { title: 'Performance analytics', description: 'Athlete data dashboards with training load, recovery, and benchmark comparisons.' },
    ],
    techStack: ['React Native', 'React', 'Node.js', 'PostgreSQL', 'TimescaleDB', 'AWS', 'BLE/GPS SDKs'],
    relatedCases: [],
    relatedServices: ['software-engineering', 'embedded-and-iot', 'ui-ux-design'],
    meta: {
      title: 'Sport & Fitness Software Development | Trident Software',
      description: 'Sports tech software — event registration, club management, activity tracking, performance analytics. Swiss engineering.',
    },
  },
  {
    slug: 'education',
    title: 'Education & EdTech',
    tagline: 'Learning platforms for the digital classroom',
    description:
      'LMS platforms, adaptive learning engines, skill assessment tools, and student management systems for schools, universities, corporate training departments, and online course providers.',
    icon: 'graduation-cap',
    challenges: [
      {
        title: 'Engagement and completion',
        description: 'Keeping learners motivated through gamification, progress tracking, and timely nudges.',
      },
      {
        title: 'Diverse content formats',
        description: 'Delivering video, quizzes, interactive simulations, and live sessions from one platform.',
      },
      {
        title: 'Privacy and compliance',
        description: 'FERPA, GDPR, and Swiss nFADP compliance for student data including minors.',
      },
    ],
    solutions: [
      { title: 'LMS platform', description: 'Course creation, content delivery, progress tracking, and certificate issuance.' },
      { title: 'Adaptive learning engine', description: 'AI-driven content sequencing based on learner performance and knowledge gaps.' },
      { title: 'Assessment & proctoring', description: 'Quiz builder, automated grading, and remote proctoring integrations.' },
      { title: 'Corporate training portal', description: 'Employee onboarding, compliance training, and skills tracking dashboards.' },
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Python', 'OpenAI', 'AWS', 'FFmpeg'],
    relatedCases: [],
    relatedServices: ['software-engineering', 'ai-services', 'ui-ux-design'],
    meta: {
      title: 'EdTech & Education Software Development | Trident Software',
      description: 'Education software — LMS platforms, adaptive learning, assessment tools, corporate training portals. Swiss engineering.',
    },
  },
]

export function getIndustrySlugs() {
  return industries.map((i) => i.slug)
}

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug)
}
