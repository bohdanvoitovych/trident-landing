import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'logistics',
  icon: 'truck',
  techStack: ['Python', 'Django', 'React Native', 'PostgreSQL', 'Redis', 'RabbitMQ', 'GCP'],
  relatedCases: ['8move-driver'],
  relatedServices: ['software-engineering', 'ai-services', 'mobile-development'],
  content: {
    en: {
      title: 'Logistics & Supply Chain',
      tagline: 'Visibility and automation for complex supply chains',
      description:
        'We build warehouse management systems, last-mile delivery platforms, route optimization tools, and supply chain visibility dashboards for logistics companies across Europe.',
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
        {
          title: 'Warehouse management',
          description: 'Barcode/RFID-based WMS with picking optimization and cycle counting.',
        },
        {
          title: 'Last-mile delivery',
          description: 'Driver apps, proof-of-delivery, and customer tracking portals.',
        },
        {
          title: 'Supply chain visibility',
          description: 'Multi-carrier tracking and exception management dashboards.',
        },
        {
          title: 'Route optimization',
          description: 'AI-based route planning reducing fuel costs and delivery windows.',
        },
      ],
      meta: {
        title: 'Logistics & Supply Chain Software | Trident Software',
        description:
          'Logistics software development — WMS, last-mile delivery, route optimization, supply chain visibility. Swiss engineering team.',
      },
    },
  },
}

export default record
