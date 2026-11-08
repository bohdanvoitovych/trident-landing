import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'media-entertainment',
  icon: 'tv',
  techStack: ['Next.js', 'Node.js', 'FFmpeg', 'S3', 'CloudFront', 'PostgreSQL', 'OpenAI'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ai-services', 'devops-and-sre'],
  content: {
    en: {
      title: 'Media & Entertainment',
      tagline: 'Content platforms that scale',
      description:
        'Streaming platforms, content management systems, AI content generation tools, and audience analytics for media companies, publishers, and content creators.',
      challenges: [
        {
          title: 'Content at scale',
          description: 'Storing, transcoding, and delivering terabytes of video and audio content.',
        },
        {
          title: 'Rights management',
          description: 'Digital rights, geo-restrictions, and licensing expiry enforcement.',
        },
        {
          title: 'Audience personalization',
          description: 'Content recommendations that drive engagement without filter bubbles.',
        },
      ],
      solutions: [
        {
          title: 'Streaming infrastructure',
          description: 'Video transcoding, CDN distribution, and adaptive bitrate streaming.',
        },
        {
          title: 'CMS & publishing',
          description: 'Headless CMS with editorial workflows and multi-channel publishing.',
        },
        {
          title: 'AI content tools',
          description: 'LLM-powered article writing, SEO optimization, and translation.',
        },
        {
          title: 'Audience analytics',
          description: 'Engagement metrics, content performance, and churn prediction.',
        },
      ],
      meta: {
        title: 'Media & Entertainment Software | Trident Software',
        description:
          'Media software — streaming platforms, CMS, AI content tools, audience analytics. Swiss engineering team.',
      },
    },
  },
}

export default record
