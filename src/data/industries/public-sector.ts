import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'public-sector',
  icon: 'landmark',
  techStack: ['React', 'Java', 'PostgreSQL', 'Exoscale', 'Keycloak', 'Docker', 'OpenAPI'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'cloud-consulting', 'cto-as-a-service'],
  content: {
    en: {
      title: 'Public Sector & GovTech',
      tagline: 'Digital government for Swiss communities',
      description:
        'Citizen portals, municipal management systems, grant administration tools, and smart city integrations for Swiss cantonal and municipal administrations.',
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
        {
          title: 'Citizen portals',
          description: 'Self-service portals for permits, registrations, and municipal services.',
        },
        {
          title: 'Grant management',
          description: 'Application, review, and disbursement workflows for public grants.',
        },
        {
          title: 'Smart city integration',
          description: 'Sensor data aggregation for parking, waste, and traffic management.',
        },
        {
          title: 'Document management',
          description: 'Secure archiving and retrieval of public records.',
        },
      ],
      meta: {
        title: 'Public Sector & GovTech Software | Trident Software',
        description:
          'GovTech software — citizen portals, grant management, smart city, document management. Swiss data residency. Swiss engineering.',
      },
    },
  },
}

export default record
