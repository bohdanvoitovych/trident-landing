// Name and description for the JSON-LD of pages that have no data module of their own.
// Keep them in step with the page's metadata when that changes.
export type PageSchemaType =
  | 'WebPage'
  | 'AboutPage'
  | 'ContactPage'
  | 'CollectionPage'
  | 'ProfessionalService'

export const pageSchemas: Record<string, { type: PageSchemaType; name: string; description: string }> = {
  '/about': { type: 'AboutPage', name: 'About', description: 'Trident Software — Swiss AI-native software engineering company. Founded 2009 in Sion, Valais. 26 engineers, 27+ projects, 8 countries.' },
  '/services': { type: 'CollectionPage', name: 'Services', description: 'We build the systems companies run their daily work on — and the AI layer that removes the repetitive part of it.' },
  '/cases': { type: 'CollectionPage', name: 'Software Development Projects & Case Studies', description: 'Case studies from Trident Software: clinic admission and billing, voice documentation, fiduciary mail, warranty control, building-materials logistics and letting-agency enquiries.' },
  '/industries': { type: 'CollectionPage', name: 'Industries', description: 'Where AI agents and operational software pay back: clinics, real estate, e-commerce, hospitality, education, trade and building materials, professional services, startups.' },
  '/blog': { type: 'CollectionPage', name: 'Software Engineering Blog', description: 'Expert articles on AI integration, software architecture, cloud DevOps, embedded systems, and Swiss tech market trends. Written by the Trident Software engineering team.' },
  '/contact': { type: 'ContactPage', name: 'Contact', description: 'Talk to Trident Software in Sion, Valais. Book a free 45-minute audit of your operations and the systems behind them.' },
  '/products': { type: 'WebPage', name: '8Move — Logistics Platform', description: '8Move is our own logistics platform: order intake, dispatch, driver apps, tracking and automated invoicing. In production with operators in Switzerland and the EU.' },
  '/privacy': { type: 'WebPage', name: 'Privacy Policy', description: 'Privacy Policy for Trident Software Sàrl — how we collect, use, and protect your data.' },
  '/terms': { type: 'WebPage', name: 'Terms & Conditions', description: 'General Terms and Conditions of Trident Software Sàrl.' },
  '/cookies': { type: 'WebPage', name: 'Cookie Policy', description: 'Cookie Policy for trident-software.ch — what cookies we use and why.' },
  '/imprint': { type: 'WebPage', name: 'Imprint', description: 'Legal information about Trident Software Sàrl.' },
  '/team': { type: 'WebPage', name: 'Our Team', description: '26 senior engineers across Switzerland, Ukraine, and Israel. Backend, frontend, mobile, QA, and DevOps — no juniors on client projects.' },
  '/pricing': { type: 'WebPage', name: 'Pricing', description: 'AI agent pricing in three lines: a one-off integration fee of CHF 6,000–25,000, a monthly run fee from CHF 450, and an optional 70/30 outcome share. Integration is never buried in a monthly figure.' },
  '/use-cases': { type: 'CollectionPage', name: 'Use Cases', description: 'Where an AI agent pays for itself — with the mechanics, not the promise.' },
  '/solutions': { type: 'CollectionPage', name: 'Solutions', description: 'Software solutions built for Swiss SMEs — websites, e-commerce platforms, and custom B2B systems with fixed budgets and Swiss compliance.' },
  '/solutions/websites': { type: 'CollectionPage', name: 'Website Development Switzerland', description: 'Fixed-price website packages for Swiss SMEs. Web brochure from CHF 599. SME website, user portals, online stores. Delivered in 2 weeks to 2 months.' },
  '/solutions/websites/web-brochure': { type: 'WebPage', name: 'Web Brochure — Website Package', description: 'Your virtual business card — a concise, professional online presence that tells clients who you are and how to reach you.' },
  '/solutions/websites/sme-website': { type: 'WebPage', name: 'SME Website — Website Package', description: 'A full-featured website that showcases your business, generates leads, and converts visitors — built for Swiss SMEs.' },
  '/solutions/websites/user-portal': { type: 'WebPage', name: 'User Portal — Website Package', description: 'An interactive platform with authentication and personal accounts — for businesses serving registered clients, members, or partners.' },
  '/solutions/websites/online-boutique': { type: 'WebPage', name: 'Online Store — Website Package', description: 'A complete e-commerce solution for selling products online — catalog, checkout, order management, and inventory built in.' },
  '/products/iam-trade': { type: 'WebPage', name: 'iAM-Trade — B2B/B2C/B2X E-commerce Platform', description: 'iAM-Trade is a powerful Swiss e-commerce platform for B2B, B2C, and B2X commerce. 200+ integrations, 1M+ product support, dynamic pricing, and multi-entity account management.' },
  '/solutions/e-commerce': { type: 'WebPage', name: 'Custom E-commerce Development Switzerland', description: 'Custom B2B/B2C/B2X e-commerce platforms built for Swiss companies. From WooCommerce to fully bespoke solutions with ERP integration.' },
  '/locations': { type: 'CollectionPage', name: 'Software Development Across Switzerland', description: 'Custom software development for companies in Zurich, Geneva, Bern, Lausanne, Zug, Basel, and beyond. Swiss-based team, all cantons served.' },
  '/technologies': { type: 'CollectionPage', name: 'Technologies We Use', description: 'Next.js, Flutter, TypeScript, Python, React, Node.js, PostgreSQL, Docker — our technology stack for Swiss software development.' },
  '/services/ai-services': { type: 'ProfessionalService', name: 'Sales on Autopilot with AI', description: 'AI agents, AI assistants and chatbots that automate enquiry handling, advise your customers and close deals 24/7 — faster, more accurate and cheaper than a human rep.' },
}
