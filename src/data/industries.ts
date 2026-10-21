export type IndustryData = {
  slug: string
  title: string
  tagline: string
  description: string
  icon: string
  challenges: { title: string; description: string }[]
  /** Line under "What we solve". Undefined uses the generic sentence; an empty string hides it. */
  challengesSubtitle?: string
  solutions: { title: string; description: string }[]
  /** Line under "Solutions we deliver". Undefined uses the generic sentence; an empty string hides it. */
  solutionsSubtitle?: string
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
    slug: 'trade-and-building-materials',
    title: 'Trade, wholesale and building materials',
    tagline: 'High enquiry volume, repetitive product and availability questions, orders that must become deliveries.',
    description:
      'The natural hand-off into Fleet Planner and Driver Pro is the reason this sits first.',
    icon: 'truck',
    challenges: [
      {
        title: 'Growth capped by how many people can answer the phone',
        description:
          'Orders arrive by telephone and messenger, and each one occupies a person for several minutes. Demand follows the building season, so the desk that needs six people in May needs three in February — and hiring for the peak means dismissing four months later, with notice periods and training paid twice a year.',
      },
      {
        title: 'Confirming a load means four calendars agreeing',
        description:
          'The customer\'s time window, the plant\'s loading slots and weighbridge queue, the carrier\'s driving-time rules, and — for removals and cross-border loads — a disposal facility and the customs and waste paperwork in place before the truck leaves.',
      },
    ],
    solutions: [
      {
        title: 'What the agent does',
        description:
          'Takes reorders from known customers end to end: recognises the account, prices on their agreed terms, checks stock, and books a slot the dispatch model has confirmed is deliverable. Pushes ETAs before the site asks for them and recalculates when reality moves.',
      },
      {
        title: 'Result',
        description:
          'Sixty-five per cent of reorder volume taken without a person. Dispatch planning fell from four to six hours a day to thirty minutes of approval, and transport cost is down six per cent.',
      },
    ],
    techStack: [],
    relatedCases: ['building-materials-order-to-load'],
    relatedServices: ['ai-services', 'software-engineering'],
    meta: {
      title: 'Trade, wholesale and building materials | Trident Software',
      description: 'High enquiry volume, repetitive product and availability questions, orders that must become deliveries — the natural hand-off into Fleet Planner and Driver Pro.',
    },
  },
  {
    slug: 'proptech',
    title: 'Real estate and property management',
    tagline: 'Viewing requests arrive in the evening; a tenant reporting a broken boiler at 22:00 needs triage, not a voicemail box.',
    description:
      'Qualification and scheduling are almost entirely rule-based.',
    icon: 'building-2',
    challenges: [
      {
        title: 'Why it pays here specifically',
        description:
          'Published survey data puts the median agent response to a new web enquiry at over 900 minutes — more than fifteen hours — while 78 % of buyers end up working with the first agent who responds. Answering in a minute is not a service improvement in this market; it is a different position in the queue.',
      },
      {
        title: 'And it collects less, not more',
        description:
          'Swiss rules on tenant application forms allow only data with a direct connection to the tenancy, permit payslips and a debt-collection extract only once an applicant is seriously considered, and require the unsuccessful applicants\' files to be destroyed after signature. An agent built to those rules asks the minimum at first contact and requests documents only at shortlist stage — which a shared inbox cannot do reliably.',
      },
      {
        title: 'Precondition',
        description:
          'The listing data has to be machine-readable and current. If availability lives in one colleague\'s head and the portal still shows a flat that was let last week, the agent will confirm viewings for a flat that no longer exists — faster and more confidently than a person would.',
      },
    ],
    challengesSubtitle: '',
    solutions: [],
    techStack: [],
    relatedCases: ['letting-agency-enquiry-to-viewing'],
    relatedServices: ['software-engineering', 'ai-services'],
    meta: {
      title: 'Real estate and property management | Trident Software',
      description: 'Viewing requests arrive in the evening; a tenant reporting a broken boiler at 22:00 needs triage, not voicemail. Qualification and scheduling are rule-based.',
    },
  },
  {
    slug: 'healthcare',
    title: 'Clinics, dental and veterinary practices',
    tagline: 'Two different places to automate — the front desk and documenting — and the money is in the second one.',
    description:
      'The expensive minutes in a Swiss practice are not spent on the phone, they are spent on documentation.',
    icon: 'heart-pulse',
    challenges: [
      {
        title: 'Front desk',
        description:
          'Booking, rescheduling and reminders — the no-show rate alone usually pays for the deployment. Enquiries in four languages, evenings and weekends, without an answering machine. Triage yes; diagnosis never.',
      },
      {
        title: 'Documenting — voice assistants for doctors and nursing staff',
        description:
          'A voice assistant sits between the clinician and the record:',
      },
      {
        title: 'The limits, stated before the demo',
        description:
          'Patient data is sensitive personal data under the revFADP and is covered by professional secrecy under Art. 321 of the Criminal Code — deployments run on Swiss-hosted infrastructure over HIN-secured channels, with no training on your data and a documented processing agreement. Spoken Swiss German dialect remains the weakest link in every speech stack on the market; standard German, French, Italian and English dictation is production-grade today, dialect is not, and we scope around that rather than promise through it. And every clinical output is a draft for a clinician to correct and sign — the assistant writes, the professional decides.',
      },
    ],
    challengesSubtitle: '',
    solutions: [
      {
        title: 'Dictation into the record during and after consultation',
        description:
          'history, findings, procedures written back into structured fields rather than typed at 19:00.',
      },
      {
        title: 'Ward round and Spitex home visits hands-free',
        description:
          'vitals, wound status, medication changes captured while gloved, then filed to the right patient.',
      },
      {
        title: 'Report and referral drafting',
        description:
          'discharge letter, referral, insurance justification drafted from the consultation and put in front of the clinician to correct and sign. Drafting only; the signature stays human.',
      },
      {
        title: 'Spoken queries against the record and internal guidelines',
        description:
          'last lab value, allergy, current dosage, house protocol — instead of clicking through screens mid-consultation.',
      },
      {
        title: 'Coding support for invoicing',
        description:
          'proposing tariff positions from what was documented, flagging the gaps a rejected invoice would come back on.',
      },
      {
        title: 'Practice management (ambulatory)',
        description:
          'vitomed (Vitodata), amétiq siMed, AESKULAP, WinMed, Axenita, Curamed, Tomedo, E-PAT',
      },
      {
        title: 'Hospital information systems',
        description:
          'KISIM (Cistec), Epic, Meierhofer M-KIS / M-PDMS, Nexus',
      },
      {
        title: 'Standards and exchange',
        description:
          'HL7 v2 and FHIR, DICOM for imaging, the Forum Datenaustausch formats for tariff invoicing, EPR/EPD connectors',
      },
      {
        title: 'Secure communication',
        description:
          'HIN identity and encrypted mail — the channel Swiss healthcare actually runs on',
      },
      {
        title: 'Scheduling and reminders',
        description:
          'The practice calendar, SMS and WhatsApp reminders, patient portals',
      },
    ],
    solutionsSubtitle: '',
    techStack: [],
    relatedCases: ['post-acute-clinic-network', 'clinic-voice-documentation'],
    relatedServices: ['ai-services', 'software-engineering', 'embedded-and-iot'],
    meta: {
      title: 'Clinics, dental and veterinary practices | Trident Software',
      description: 'Two different places to automate — the front desk and documenting — and the money is in the second one.',
    },
  },
  {
    slug: 'retail-ecommerce',
    title: 'E-commerce and D2C',
    tagline: 'Order status, sizing, returns, cross-sell at the moment of intent.',
    description:
      'Highest message volume, lowest value per message — automation economics at their cleanest.',
    icon: 'shopping-bag',
    challenges: [
      {
        title: 'The situation',
        description:
          'A shop with a catalogue deep enough that customers cannot self-serve: technical parts, equipment with variants, anything where picking the wrong item means a return. The pre-purchase questions land in chat, on WhatsApp and by e-mail — will this fit my model, what is the difference between these two, when would it arrive, do you deliver to Ticino. Sales answers them one by one, and the ones that arrive after six in the evening convert worse than the ones that arrive at ten in the morning, for no reason other than the wait.',
      },
      {
        title: 'What it replaces',
        description:
          'The pre-purchase question queue, and a share of the returns caused by customers guessing at compatibility on their own.',
      },
      {
        title: 'Precondition',
        description:
          'Product data that supports a decision. Compatibility rules, dimensions, real variants, live stock. A catalogue where half the articles have a name and a price and nothing else cannot be reasoned over — the agent will recommend confidently and wrongly, and returns will go up rather than down. This case is worth doing only where someone has already done the boring work on the product data, or is willing to do it as part of the project.',
      },
    ],
    challengesSubtitle: '',
    solutions: [
      {
        title: 'What the agent does',
        description:
          'Reads the question, works out what the customer actually has — the machine, the vehicle, the installation — and narrows the catalogue to what fits. Explains the difference between two candidates in the customer\'s terms rather than reciting spec sheets. Checks live stock and gives a real delivery date, including the honest one: this is not in stock, it lands in eleven days, here is what is available now instead. Applies the customer\'s own pricing if they are a B2B account with agreed terms. Assembles the basket, takes the order, issues the QR-bill or payment link, and confirms. After the sale it stays useful: order status, invoice copies, and the start of a return — which for a shop is the difference between a complaint and a transaction.',
      },
    ],
    solutionsSubtitle: '',
    techStack: [],
    relatedCases: ['lapochette'],
    relatedServices: ['software-engineering', 'ai-services'],
    meta: {
      title: 'E-commerce and D2C | Trident Software',
      description: 'Order status, sizing, returns, cross-sell at the moment of intent. Highest message volume, lowest value per message — automation economics at their cleanest.',
    },
  },
  {
    slug: 'hospitality',
    title: 'Hospitality and restaurants',
    tagline: 'Reservations, group enquiries, allergen and menu questions in four languages during service, when nobody can answer the phone.',
    description: '',
    icon: 'hotel',
    challenges: [],
    solutions: [],
    techStack: [],
    relatedCases: [],
    relatedServices: ['software-engineering', 'ai-services'],
    meta: {
      title: 'Hospitality and restaurants | Trident Software',
      description: 'Reservations, group enquiries, allergen and menu questions in four languages during service, when nobody can answer the phone.',
    },
  },
  {
    slug: 'professional-services',
    title: 'Professional services and trades',
    tagline: 'Craftsmen, installers, consultancies — small teams, no reception, every missed call is a lost mandate.',
    description:
      'Lowest volume, but the highest value per conversation saved.',
    icon: 'wrench',
    challenges: [
      {
        title: 'The bottleneck is reading, not accounting',
        description:
          'A Swiss fiduciary keeps its clients\' books, so its raw material is other people\'s paper — and many client companies use the firm\'s address as their official correspondence address, so the morning post is the mail of dozens of separate legal entities in one pile. An operator opened every letter, scanned it, read it to work out which client it belonged to and which manager was responsible, judged urgency and routed it — slow, and forgettable in a profession where deadlines are statutory.',
      },
      {
        title: 'Foreign-script receipts are a verification risk',
        description:
          'Clients send till receipts as phone photos or by post. A meaningful share arrive in Cyrillic, Chinese or Arabic, where an operator who cannot read the script cannot verify what they are keying.',
      },
      {
        title: 'Precondition',
        description:
          'Swiss rules permit destroying most operational documents after scanning only where the scanning procedure is documented and internally controlled and the archive meets the GeBüV requirements for the ten-year retention period — with contracts, securities and notarial deeds excluded from replacement scanning entirely.',
      },
    ],
    solutions: [
      {
        title: 'Scan-and-route for incoming mail',
        description:
          'OCR reads the scan, the system identifies the client from the content and looks up the assigned manager, an AI produces a short summary and priority, and the system creates a task with the manager notified immediately — or, where the letter needs the client to act, e-mails the client directly with the scan and the instruction.',
      },
      {
        title: 'Photo-and-post for expense receipts',
        description:
          'A mobile app the client uses at the moment of purchase: OCR for merchant, date, total and VAT, a domain model proposing the accounting category and payment method, and the result posted into the accounting system without re-entry.',
      },
    ],
    techStack: [],
    relatedCases: ['fiduciary-mail-and-receipts'],
    relatedServices: ['ai-services', 'software-engineering'],
    meta: {
      title: 'Professional services and trades | Trident Software',
      description: 'Craftsmen, installers, consultancies — small teams, no reception, every missed call is a lost mandate. Low volume, high value per conversation.',
    },
  },
  {
    slug: 'education',
    title: 'Education and training providers',
    tagline: 'Course enquiries, prerequisites, dates, enrolment — seasonal peaks that would otherwise need temporary staff.',
    description: '',
    icon: 'graduation-cap',
    challenges: [],
    solutions: [],
    techStack: [],
    relatedCases: [],
    relatedServices: ['software-engineering', 'ai-services'],
    meta: {
      title: 'Education and training providers | Trident Software',
      description: 'Course enquiries, prerequisites, dates, enrolment — seasonal peaks that would otherwise need temporary staff.',
    },
  },
  {
    slug: 'startups-cto',
    title: 'Startups and scale-ups — CTO as a Service',
    tagline: 'The one entry on this list that is not an agent.',
    description:
      'A founding team with no technical leader, or one that has outgrown its first developers, buys days per month of ours instead of a hire: what to automate and what to leave alone, build versus buy, which model provider and where the data sits, what the architecture has to survive at ten times the volume, and who to hire first. Also used the other way round — technical due diligence on a software asset before an investment, and interim leadership after it. Bought in days, not in headcount, and the deliverable is a decision you can defend to a board.',
    icon: 'users',
    challenges: [
      {
        title: 'What a technical co-founder would normally decide',
        description:
          'What to automate and what to leave alone, build versus buy, which model provider and where the data sits, what the architecture has to survive at ten times the volume, and who to hire first.',
      },
    ],
    solutions: [
      {
        title: 'Bought in days, not headcount',
        description: 'Days per month of ours instead of a hire, and the deliverable is a decision you can defend to a board.',
      },
      {
        title: 'Works the other way round too',
        description: 'Technical due diligence on a software asset before an investment, and interim leadership after it.',
      },
    ],
    techStack: [],
    relatedCases: [],
    relatedServices: ['cto-as-a-service', 'ai-services'],
    meta: {
      title: 'Startups and scale-ups — CTO as a Service | Trident Software',
      description: 'Fractional CTO for founders without a technical leader: build versus buy, architecture, and who to hire first — billed in days per month, not a hire.',
    },
  },
  {
    slug: 'automotive',
    title: 'Automotive',
    tagline: 'B2B e-commerce for automotive parts with bulk ordering.',
    description:
      'B2B e-commerce for automotive parts with bulk ordering. The first step is a free 45-minute audit.',
    icon: 'car',
    challenges: [],
    solutions: [],
    techStack: [],
    relatedCases: ['zenit-auto-b2b'],
    relatedServices: ['software-engineering', 'ai-services'],
    meta: {
      title: 'Automotive | Trident Software',
      description: 'B2B e-commerce for automotive parts with bulk ordering. The first step is a free 45-minute audit.',
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
    techStack: ['Python', 'Django', 'React Native', 'PostgreSQL', 'Redis', 'RabbitMQ', 'AWS'],
    relatedCases: ['8move-driver'],
    relatedServices: ['software-engineering', 'ai-services', 'mobile-development'],
    meta: {
      title: 'Logistics & Supply Chain Software | Trident Software',
      description: 'Logistics software development — WMS, last-mile delivery, route optimization, supply chain visibility. Swiss engineering team.',
    },
  },
  {
    slug: 'fintech',
    title: 'Fintech',
    tagline: 'Enabling financial technology solutions for modern business needs.',
    description:
      'Enabling financial technology solutions for modern business needs. The first step is a free 45-minute audit.',
    icon: 'landmark',
    challenges: [],
    solutions: [],
    techStack: [],
    relatedCases: [],
    relatedServices: ['software-engineering'],
    meta: {
      title: 'Fintech | Trident Software',
      description: 'Enabling financial technology solutions for modern business needs.',
    },
  },
  {
    slug: 'saas',
    title: 'SaaS',
    tagline: 'We own a product, not just a service business.',
    description:
      '8Move is our own logistics platform, in production with paying customers. The first step is a free 45-minute audit.',
    icon: 'cloud',
    challenges: [],
    solutions: [],
    techStack: [],
    relatedCases: ['kleap-ai-builder'],
    relatedServices: ['software-engineering', 'ai-services'],
    meta: {
      title: 'SaaS | Trident Software',
      description: '8Move is our own logistics platform, in production with paying customers. The first step is a free 45-minute audit.',
    },
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    tagline: 'From paying for every claim to measuring the cause — and selling the measurement.',
    description:
      'Wherever a manufacturer carries a warranty obligation for a product that fails because of how it is used, in conditions the manufacturer cannot see. The first step is a free 45-minute audit.',
    icon: 'factory',
    challenges: [
      {
        title: 'Warranty cost was structural, not accidental',
        description:
          'Warranty service was costing 1.37 % of revenue — above the average published for appliance and HVAC manufacturers. Field analysis put as much as 85 % of failures down to water rather than manufacturing defects, but the contract requires water within specification and nothing measured it, so every claim got paid because there were no grounds to refuse a bad-water repair.',
      },
      {
        title: 'Precondition',
        description:
          'A component set that can be measured in a circuit, OEM customers willing to have the device fitted, and a service network that will work in the portal. This only becomes a revenue line if the machine manufacturers see the warranty evidence as their instrument too.',
      },
    ],
    solutions: [
      {
        title: 'Measure the cause, not just the symptom',
        description:
          'A device in the water line measures TDS before and after the filter, plus flow and temperature. Telemetry streams to a platform that raises alerts carrying the cause rather than the symptom, with an equipment portal for the manufacturer and a predictive model that schedules service by litres passed.',
      },
      {
        title: 'Result',
        description:
          'Warranty service cost fell from 1.37 % to 0.51 % of revenue. Service scheduling moved from the calendar to litres passed, and the cost centre became a product line: the device sells once per installation, the subscription runs every month the machine runs.',
      },
    ],
    techStack: [],
    relatedCases: ['warranty-control-component-maker'],
    relatedServices: ['embedded-and-iot', 'ai-services'],
    meta: {
      title: 'Manufacturing | Trident Software',
      description: "Wherever a manufacturer carries a warranty obligation for misuse in conditions they can't see. Starts with a free 45-minute audit.",
    },
  },
  {
    slug: 'fashion-lifestyle',
    title: 'Fashion & Luxury',
    tagline: 'Transforming fashion businesses with technology-driven insights.',
    description:
      'Transforming fashion businesses with technology-driven insights. The first step is a free 45-minute audit.',
    icon: 'shirt',
    challenges: [],
    solutions: [],
    techStack: [],
    relatedCases: ['lapochette'],
    relatedServices: ['software-engineering', 'ai-services'],
    meta: {
      title: 'Fashion & Luxury | Trident Software',
      description: 'Transforming fashion businesses with technology-driven insights. The first step is a free 45-minute audit.',
    },
  },
  {
    slug: 'tourism',
    title: 'Tourism',
    tagline: 'Enhancing travel experiences with digital tools and strategies.',
    description:
      'Enhancing travel experiences with digital tools and strategies. The first step is a free 45-minute audit.',
    icon: 'map',
    challenges: [],
    solutions: [],
    techStack: [],
    relatedCases: [],
    relatedServices: ['software-engineering', 'ai-services'],
    meta: {
      title: 'Tourism | Trident Software',
      description: 'Enhancing travel experiences with digital tools and strategies.',
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
    relatedServices: ['software-engineering', 'ai-services'],
    meta: {
      title: 'FMCG & Consumer Goods Software | Trident Software',
      description: 'FMCG software — distribution management, HoReCa platforms, retail execution, demand forecasting. Swiss engineering.',
    },
  },
  {
    slug: 'diy-tools',
    title: 'DIY',
    tagline: 'Empowering DIY brands to reach their audience through digital platforms.',
    description:
      'Empowering DIY brands to reach their audience through digital platforms. The first step is a free 45-minute audit.',
    icon: 'wrench',
    challenges: [],
    solutions: [],
    techStack: [],
    relatedCases: [],
    relatedServices: ['software-engineering'],
    meta: {
      title: 'DIY | Trident Software',
      description: 'Empowering DIY brands to reach their audience through digital platforms.',
    },
  },
  {
    slug: 'catering',
    title: 'Catering',
    tagline: 'Supporting the catering industry with digital ordering and management tools.',
    description:
      'Supporting the catering industry with digital ordering and management tools. The first step is a free 45-minute audit.',
    icon: 'utensils',
    challenges: [],
    solutions: [],
    techStack: [],
    relatedCases: [],
    relatedServices: ['software-engineering', 'ai-services'],
    meta: {
      title: 'Catering | Trident Software',
      description: 'Supporting the catering industry with digital ordering and management tools.',
    },
  },
  {
    slug: 'blockchain',
    title: 'Blockchain',
    tagline: 'Offering blockchain solutions for secure and transparent transactions.',
    description:
      'Offering blockchain solutions for secure and transparent transactions. The first step is a free 45-minute audit.',
    icon: 'link',
    challenges: [],
    solutions: [],
    techStack: [],
    relatedCases: [],
    relatedServices: ['software-engineering', 'ai-services'],
    meta: {
      title: 'Blockchain | Trident Software',
      description: 'Offering blockchain solutions for secure and transparent transactions.',
    },
  },
  {
    slug: 'social-media',
    title: 'Social Media',
    tagline: 'Solutions for social media engagement and reach for brands.',
    description:
      'Solutions for social media engagement and reach for brands. The first step is a free 45-minute audit.',
    icon: 'users',
    challenges: [],
    solutions: [],
    techStack: [],
    relatedCases: [],
    relatedServices: ['software-engineering', 'ai-services'],
    meta: {
      title: 'Social Media | Trident Software',
      description: 'Solutions for social media engagement and reach for brands.',
    },
  },
  {
    slug: 'games',
    title: 'Games',
    tagline: 'Developing interactive gaming solutions for entertainment and engagement.',
    description:
      'Developing interactive gaming solutions for entertainment and engagement. The first step is a free 45-minute audit.',
    icon: 'gamepad-2',
    challenges: [],
    solutions: [],
    techStack: [],
    relatedCases: [],
    relatedServices: ['software-engineering'],
    meta: {
      title: 'Games | Trident Software',
      description: 'Developing interactive gaming solutions for entertainment and engagement.',
    },
  },
  {
    slug: 'sport-activities',
    title: 'Sport & Activities',
    tagline: 'Enhancing sports and activities industries with tech solutions in Switzerland.',
    description:
      'Enhancing sports and activities industries with tech solutions in Switzerland. The first step is a free 45-minute audit.',
    icon: 'dumbbell',
    challenges: [],
    solutions: [],
    techStack: [],
    relatedCases: [],
    relatedServices: ['software-engineering', 'embedded-and-iot'],
    meta: {
      title: 'Sport & Activities | Trident Software',
      description: 'Enhancing sports and activities industries with tech solutions in Switzerland.',
    },
  },
]

export function getIndustrySlugs() {
  return industries.map((i) => i.slug)
}

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug)
}
