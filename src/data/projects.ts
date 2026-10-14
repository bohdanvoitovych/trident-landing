/**
 * Projects carried over from the old site's portfolio.
 *
 * These are deliberately lighter than `cases.ts`: title, sector, what was
 * built and the screenshot — the facts the old site published. The nine
 * entries in cases.ts keep their full write-ups; nothing here invents
 * challenges, approaches or result metrics for a client's project.
 */
export type Project = {
  slug: string
  title: string
  summary: string
  sector: string
  image: string
  /** Set when a full case study exists for the same work. */
  caseSlug?: string
}

export const projects: Project[] = [
  {
    slug: 'zenit-auto-b2b',
    title: 'Zenit Auto B2B Platform',
    summary: 'B2B e-commerce for automotive parts with bulk ordering.',
    sector: 'Automotive',
    image: '/images/cases/zenit-auto-b2b.jpg',
    caseSlug: 'zenit-auto-b2b',
  },
  {
    slug: 'aida-medicine',
    title: 'Aida Medicine Platform',
    summary: 'Medical management system for clinics and healthcare providers.',
    sector: 'Healthcare',
    image: '/images/cases/aida-medicine.jpg',
    caseSlug: 'aida-medicine',
  },
  {
    slug: 'tires-online-shop',
    title: 'Tires Online Shop',
    summary: 'E-commerce platform for tire and rim sales in Canada.',
    sector: 'E-commerce',
    image: '/images/cases/tires-online-shop.jpg',
  },
  {
    slug: 'affiliation-platform',
    title: 'Affiliation Platform',
    summary: 'Web and mobile system for managing affiliation programmes.',
    sector: 'MarTech',
    image: '/images/cases/affiliation-platform.jpg',
  },
  {
    slug: 'vesna-auto-b2b',
    title: 'Vesna Auto B2B Shop',
    summary: 'Scalable B2B portal for wholesale automotive parts.',
    sector: 'Automotive',
    image: '/images/cases/vesna-auto-b2b.jpg',
  },
  {
    slug: 'status-m-wms',
    title: 'Status-M WMS App',
    summary: 'Mobile warehouse management app with scanner integration.',
    sector: 'Logistics',
    image: '/images/cases/status-m-wms.jpg',
  },
  {
    slug: '8move-driver',
    title: '8Move Driver App',
    summary: 'Application supporting delivery operations and route management.',
    sector: 'Logistics',
    image: '/images/cases/8move-driver.jpg',
    caseSlug: '8move-driver',
  },
  {
    slug: '8move-admin',
    title: '8Move Admin Platform',
    summary: 'Centralised control for products, orders and fleet operations.',
    sector: 'Logistics',
    image: '/images/cases/8move-admin.jpg',
  },
  {
    slug: '8move-client',
    title: '8Move Client App',
    summary: 'Mobile app for B2B and B2C ordering and delivery management.',
    sector: 'Logistics',
    image: '/images/cases/8move-client.jpg',
  },
  {
    slug: 'samange-ecommerce',
    title: 'Samange E-commerce',
    summary: 'B2B and B2C fashion store for boutique apparel and accessories.',
    sector: 'Retail',
    image: '/images/cases/samange-ecommerce.jpg',
  },
  {
    slug: 'dentyval',
    title: 'Dentyval Web App',
    summary: 'Web questionnaire for dental business evaluation.',
    sector: 'Healthcare',
    image: '/images/cases/dentyval.jpg',
  },
  {
    slug: 'lapochette',
    title: 'Lapochette Online Shop',
    summary: 'Online store for hotel and restaurant accessories in Switzerland.',
    sector: 'HoReCa',
    image: '/images/cases/lapochette.jpg',
    caseSlug: 'lapochette',
  },
  {
    slug: 'kleap-ai-builder',
    title: 'Kleap Website Builder',
    summary: 'AI-enhanced tool for creating websites and landing pages.',
    sector: 'SaaS',
    image: '/images/cases/kleap-ai-builder.jpg',
    caseSlug: 'kleap-ai-builder',
  },
  {
    slug: 'flashhub',
    title: 'Flashhub Online Store',
    summary: 'B2B and B2C platform for luxury watches and jewellery.',
    sector: 'Retail',
    image: '/images/cases/flashhub.jpg',
  },
  {
    slug: 'loundoun-decks',
    title: 'Loundoun Decks Website',
    summary: 'Promotional site for a construction company specialising in decks.',
    sector: 'Construction',
    image: '/images/cases/loundoun-decks.jpg',
  },
  {
    slug: 'mastertool',
    title: 'Mastertool E-commerce',
    summary: 'Professional online store for tools and equipment.',
    sector: 'E-commerce',
    image: '/images/cases/mastertool.jpg',
  },
  {
    slug: 'ardevaz-sls',
    title: 'Ardevaz SLS Website',
    summary: 'Online presence for a language school, with courses and enrolment.',
    sector: 'Education',
    image: '/images/cases/ardevaz-sls.jpg',
  },
  {
    slug: 'didi-app',
    title: 'Didi Mobile App',
    summary: 'Interactive quiz and game mobile application.',
    sector: 'Consumer',
    image: '/images/cases/didi-app.jpg',
  },
  {
    slug: 'go-valais',
    title: 'GO-Valais Website',
    summary: 'Digital community hub for expats and professionals in Valais.',
    sector: 'Community',
    image: '/images/cases/go-valais.jpg',
    caseSlug: 'go-valais',
  },
  {
    slug: 'travel-executive',
    title: 'Travel Executive Website',
    summary: 'Premium portal for curated trips and travel planning.',
    sector: 'Travel',
    image: '/images/cases/travel-executive.jpg',
  },
  {
    slug: 'catapult-crown',
    title: 'Catapult Crown Portal',
    summary: 'Web platform for dental business investment management.',
    sector: 'Healthcare',
    image: '/images/cases/catapult-crown.jpg',
  },
  {
    slug: 'tdsbot-iot',
    title: 'TDSbot Web & Mobile App',
    summary: 'B2B and B2C portal for water purification device monitoring.',
    sector: 'IoT',
    image: '/images/cases/tdsbot-iot.jpg',
    caseSlug: 'tdsbot-iot',
  },
  {
    slug: 'tpoint',
    title: 'Tpoint Web & Mobile App',
    summary: 'Management solution for sports and fitness facilities.',
    sector: 'Sports',
    image: '/images/cases/tpoint.jpg',
  },
  {
    slug: 'myastro',
    title: 'MyAstro Web Portal',
    summary: 'Content platform blending astrology with personalised insights.',
    sector: 'Consumer',
    image: '/images/cases/myastro.jpg',
  },
  {
    slug: 'alio-shop',
    title: 'Alio Online Shop',
    summary: 'B2C marketplace for lifestyle accessories.',
    sector: 'Retail',
    image: '/images/cases/alio-shop.jpg',
  },
  {
    slug: 'fishing-roi',
    title: 'Fishing Roi Online Shop',
    summary: 'Marketplace for fishing gear with educational content.',
    sector: 'Retail',
    image: '/images/cases/fishing-roi.jpg',
  },
  {
    slug: 'vbavto',
    title: 'Vbavto E-commerce',
    summary: 'Automotive parts marketplace serving B2B and B2C segments.',
    sector: 'Automotive',
    image: '/images/cases/vbavto.jpg',
  },
]

export const projectSectors = Array.from(new Set(projects.map((p) => p.sector))).sort()

/**
 * The six case studies written up from the source-of-truth PDF. They are
 * kept apart from `projects` so the sector filter of the older portfolio is
 * not affected. Order matches the homepage.
 */
export const featuredProjects: Project[] = [
  {
    slug: 'post-acute-clinic-network',
    title: 'From a bundle of paper to a coded SwissDRG invoice',
    summary:
      'Admission, discharge letter and invoice for a post-acute clinic network, without anyone retyping a document.',
    sector: 'Healthcare · Switzerland',
    image: '/images/stock/clinic.jpg',
    caseSlug: 'post-acute-clinic-network',
  },
  {
    slug: 'clinic-voice-documentation',
    title: 'Voice consultation to TARDOC invoice',
    summary:
      'A recorded consultation becomes the report and the coded invoice. Documentation time from 35 % to 15 % of the working year.',
    sector: 'Healthcare · Switzerland',
    image: '/images/stock/clinic-2.jpg',
    caseSlug: 'clinic-voice-documentation',
  },
  {
    slug: 'warranty-control-component-maker',
    title: 'Up to 85 % of failures came from water, not defects',
    summary:
      'A device, telemetry and portals turned every warranty claim into a decision based on data.',
    sector: 'Manufacturing · Italy',
    image: '/images/stock/water-telemetry.jpg',
    caseSlug: 'warranty-control-component-maker',
  },
  {
    slug: 'fiduciary-mail-and-receipts',
    title: 'Incoming mail and receipts without re-entry',
    summary:
      'Two paper queues replaced by scan-and-route and photo-and-post. About 135 operator hours a month returned, modelled.',
    sector: 'Professional services · Switzerland',
    image: '/images/stock/office-2.jpg',
    caseSlug: 'fiduciary-mail-and-receipts',
  },
  {
    slug: 'building-materials-order-to-load',
    title: 'Order desk to delivered load, without seasonal hiring',
    summary:
      'From a phone call to a planned load, an invoiced delivery and a cleared border. 65 % of reorders without a person.',
    sector: 'Construction-materials logistics',
    image: '/images/stock/dispatch.jpg',
    caseSlug: 'building-materials-order-to-load',
  },
  {
    slug: 'letting-agency-enquiry-to-viewing',
    title: 'Portal enquiry to booked viewing',
    summary:
      'A letting agency in Romandie answers within seconds, in seven languages, and books the viewing in the same conversation.',
    sector: 'Residential letting · Switzerland',
    image: '/images/stock/workspace.jpg',
    caseSlug: 'letting-agency-enquiry-to-viewing',
  },
]
