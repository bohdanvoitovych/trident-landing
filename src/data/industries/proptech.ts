import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'proptech',
  icon: 'building-2',
  techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Twilio', 'Stripe', 'DocuSign'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ai-services', 'ui-ux-design'],
  content: {
    en: {
      title: 'Real Estate & PropTech',
      tagline: 'Digital transformation for the property sector',
      description:
        'Property management platforms, tenant portals, smart building integrations, and AI-powered property valuation tools for real estate companies and property managers.',
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
        {
          title: 'Property management',
          description: 'Unified platform for lease management, maintenance, and billing.',
        },
        {
          title: 'Tenant portals',
          description: 'Self-service portals for rent payment, maintenance requests, and documents.',
        },
        {
          title: 'Document AI',
          description: 'Automated lease extraction, compliance checks, and contract analysis.',
        },
        {
          title: 'Smart building integration',
          description: 'BMS and IoT integration for energy and access management.',
        },
      ],
      meta: {
        title: 'PropTech & Real Estate Software | Trident Software',
        description:
          'PropTech software development — property management, tenant portals, document AI, smart building integration. Swiss engineering.',
      },
    },
  },
}

export default record
