import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'fashion-lifestyle',
  icon: 'shirt',
  techStack: ['Next.js', 'Shopify', 'Sanity', 'PostgreSQL', 'Cloudinary', 'Vercel', 'OpenAI'],
  relatedCases: ['lapochette'],
  relatedServices: ['software-engineering', 'ui-ux-design', 'ai-services'],
  content: {
    en: {
      title: 'Fashion & Lifestyle',
      tagline: 'Technology for brands with taste',
      description:
        'E-commerce platforms, product configurators, influencer management tools, and AI-powered creative assistants for fashion brands and lifestyle companies.',
      challenges: [
        {
          title: 'Visual complexity',
          description: 'High-resolution product photography, 360° views, and AR try-on experiences.',
        },
        {
          title: 'Seasonal demand',
          description: 'Spike traffic during launches and sales without over-provisioning year-round.',
        },
        {
          title: 'Global sizing',
          description: 'Size conversion and fit recommendation across markets.',
        },
      ],
      solutions: [
        {
          title: 'Custom storefronts',
          description: 'Headless commerce with editorial-quality design and performance.',
        },
        {
          title: 'Product configurators',
          description: 'Custom jewelry, apparel, and accessory configuration tools.',
        },
        {
          title: 'AI creative tools',
          description: 'LLM-powered product descriptions, lookbook generation, and copy.',
        },
        {
          title: 'Influencer platforms',
          description: 'Tracking, commission management, and UGC aggregation tools.',
        },
      ],
      meta: {
        title: 'Fashion & Lifestyle Software | Trident Software',
        description:
          'Fashion tech software — headless storefronts, product configurators, AI creative tools, influencer platforms. Swiss engineering.',
      },
    },
  },
}

export default record
