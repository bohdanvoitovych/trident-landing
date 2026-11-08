import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'energy',
  icon: 'zap',
  techStack: ['Python', 'TimescaleDB', 'Grafana', 'OCPP', 'MQTT', 'FastAPI', 'Kubernetes'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'embedded-and-iot', 'cloud-consulting'],
  content: {
    en: {
      title: 'Energy & Utilities',
      tagline: 'Software for the energy transition',
      description:
        'Grid management systems, EV charging infrastructure software, renewable energy monitoring, and energy trading platforms for utilities and cleantech companies.',
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
        {
          title: 'EV charging management',
          description: 'OCPP-compliant charging infrastructure management and billing.',
        },
        {
          title: 'Energy monitoring',
          description: 'Real-time dashboards for solar, wind, and storage assets.',
        },
        {
          title: 'Demand response',
          description: 'Automated load management responding to grid signals.',
        },
        {
          title: 'Energy trading',
          description: 'Day-ahead and intraday trading platform integrations.',
        },
      ],
      meta: {
        title: 'Energy & Utilities Software Development | Trident Software',
        description:
          'Energy software — EV charging management, grid monitoring, demand response, energy trading. Swiss engineering team.',
      },
    },
  },
}

export default record
