import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'automotive',
  icon: 'car',
  techStack: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'MQTT', 'Kubernetes', 'AWS'],
  relatedCases: ['zenit-auto-b2b'],
  relatedServices: ['software-engineering', 'ai-services', 'cloud-consulting'],
  content: {
    en: {
      title: 'Automotive',
      tagline: 'Software for connected and electric vehicles',
      description:
        'From B2B dealer platforms to EV fleet management and in-vehicle software, we deliver automotive solutions that meet the precision and reliability standards of the industry.',
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
        {
          title: 'Dealer management systems',
          description: 'B2B platforms for vehicle ordering, pricing, and inventory.',
        },
        {
          title: 'EV fleet management',
          description: 'Charging optimization, range prediction, and fleet analytics.',
        },
        {
          title: 'Telematics platforms',
          description: 'Real-time vehicle data processing and driver behavior analytics.',
        },
        {
          title: 'Document automation',
          description: 'AI-powered vehicle documentation and compliance workflows.',
        },
      ],
      meta: {
        title: 'Automotive Software Development | Trident Software',
        description:
          'Automotive software — dealer platforms, EV fleet management, telematics, and vehicle documentation automation. Swiss engineering.',
      },
    },
  },
}

export default record
