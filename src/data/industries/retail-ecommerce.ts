import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'retail-ecommerce',
  icon: 'shopping-bag',
  techStack: ['Next.js', 'Shopify', 'Medusa.js', 'PostgreSQL', 'Redis', 'Algolia', 'Vercel'],
  relatedCases: ['lapochette'],
  relatedServices: ['software-engineering', 'ui-ux-design', 'ai-services'],
  content: {
    en: {
      title: 'Retail & E-commerce',
      tagline: 'Conversion-focused commerce platforms',
      description:
        'Custom e-commerce platforms, product configurators, inventory management systems, and AI-powered personalization for European retailers and D2C brands.',
      challenges: [
        {
          title: 'Performance at scale',
          description: 'Handling peak traffic during sales events without degradation.',
        },
        {
          title: 'Personalization',
          description: 'Product recommendations, dynamic pricing, and behavioral segmentation.',
        },
        {
          title: 'Omnichannel integration',
          description: 'Unified inventory and customer data across web, mobile, and physical stores.',
        },
      ],
      solutions: [
        {
          title: 'Custom storefronts',
          description: 'Headless commerce with Next.js frontend and composable backends.',
        },
        {
          title: 'Product configurators',
          description: '3D/AR product customization tools for complex goods.',
        },
        {
          title: 'AI personalization',
          description: 'Recommendation engines and dynamic content based on user behavior.',
        },
        {
          title: 'Inventory management',
          description: 'Multi-warehouse stock tracking with demand forecasting.',
        },
      ],
      meta: {
        title: 'Retail & E-commerce Software Development | Trident Software',
        description:
          'E-commerce software development — headless storefronts, product configurators, AI personalization. Swiss engineering team.',
      },
    },
  },
}

export default record
