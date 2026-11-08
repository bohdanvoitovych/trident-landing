import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'diy-tools',
  icon: 'wrench',
  techStack: ['React', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'Docker', 'AWS'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ui-ux-design', 'cloud-consulting'],
  content: {
    en: {
      title: 'DIY & Tools',
      tagline: 'E-commerce and product intelligence for tool retailers',
      description:
        'Product catalogue management, compatibility finders, B2B dealer portals, and inventory systems for power tool brands, hardware retailers, and professional tool distributors.',
      challenges: [
        {
          title: 'Complex product catalogues',
          description:
            'Thousands of SKUs with detailed technical specs, compatibility matrices, and accessory relationships.',
        },
        {
          title: 'Pro vs consumer segmentation',
          description:
            'Serving both trade professionals (bulk pricing, invoicing) and retail consumers from a single platform.',
        },
        {
          title: 'Part finder and compatibility',
          description: 'Helping customers find the right part, blade, or battery for their specific model.',
        },
      ],
      solutions: [
        {
          title: 'Product catalogue & PIM',
          description: 'Rich product data management with specs, compatibility tables, and media.',
        },
        {
          title: 'B2B dealer portal',
          description: 'Trade pricing, account management, bulk ordering, and stock visibility.',
        },
        {
          title: 'Compatibility finder',
          description: 'Tool-to-accessory matching engine with guided selection.',
        },
        {
          title: 'Inventory management',
          description: 'Multi-warehouse stock control with reorder point automation.',
        },
      ],
      meta: {
        title: 'DIY & Tools Software Development | Trident Software',
        description:
          'DIY and tools software — product catalogues, B2B dealer portals, compatibility finders, inventory systems. Swiss engineering.',
      },
    },
  },
}

export default record
