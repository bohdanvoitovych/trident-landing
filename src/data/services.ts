export type ServiceFeature = {
  title: string
  description: string
}

export type ServiceData = {
  slug: string
  title: string
  tagline: string
  description: string
  icon: string
  features: ServiceFeature[]
  techStack: string[]
  relatedCases: string[]
  meta: {
    title: string
    description: string
  }
}

export const services: ServiceData[] = [
  {
    slug: 'ai-services',
    title: 'AI agents & LLM automation',
    tagline: 'Enquiry handling, document processing, recommendation, retrieval over corporate knowledge.',
    description:
      'Agents wired into real systems, not chat widgets.',
    icon: 'brain',
    features: [],
    techStack: [],
    relatedCases: ['post-acute-clinic-network', 'clinic-voice-documentation', 'fiduciary-mail-and-receipts'],
    meta: {
      title: 'AI agents & LLM automation | Trident Software',
      description: 'Enquiry handling, document processing, recommendation, retrieval over corporate knowledge. Agents wired into real systems, not chat widgets.',
    },
  },
  {
    slug: 'logistics-and-operations-platforms',
    title: 'Logistics & operations platforms',
    tagline: 'Order intake, dispatch and planning, driver applications, tracking, automated billing.',
    description: '',
    icon: 'truck',
    features: [],
    techStack: [],
    relatedCases: ['building-materials-order-to-load'],
    meta: {
      title: 'Logistics & operations platforms | Trident Software',
      description: 'Order intake, dispatch and planning, driver applications, tracking, automated billing.',
    },
  },
  {
    slug: 'software-engineering',
    title: 'Custom business systems',
    tagline: 'B2B portals, integrations with ERP and accounting, migrations off legacy stacks.',
    description: '',
    icon: 'code-2',
    features: [],
    techStack: [],
    relatedCases: [],
    meta: {
      title: 'Custom business systems | Trident Software',
      description: 'B2B portals, integrations with ERP and accounting, migrations off legacy stacks.',
    },
  },
  {
    slug: 'embedded-and-iot',
    title: 'IoT & connected products',
    tagline: 'Firmware, cloud platform, rules engines, dealer and consumer applications for physical devices.',
    description: '',
    icon: 'cpu',
    features: [],
    techStack: [],
    relatedCases: ['warranty-control-component-maker'],
    meta: {
      title: 'IoT & connected products | Trident Software',
      description: 'Firmware, cloud platform, rules engines, dealer and consumer applications for physical devices.',
    },
  },
  {
    slug: 'cto-as-a-service',
    title: 'CTO as a Service',
    tagline: 'Fractional and interim technical leadership for companies without an in-house CTO.',
    description: '',
    icon: 'users',
    features: [],
    techStack: [],
    relatedCases: [],
    meta: {
      title: 'CTO as a Service | Trident Software',
      description: 'Fractional and interim technical leadership for companies without an in-house CTO.',
    },
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}
