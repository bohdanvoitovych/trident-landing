import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'social-media',
  icon: 'users',
  techStack: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Kafka', 'Elasticsearch', 'AWS'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ai-services', 'cloud-consulting', 'devops-and-sre'],
  content: {
    en: {
      title: 'Social Media & Community',
      tagline: 'Platforms that connect people at scale',
      description:
        'Social networking platforms, community management tools, creator economy infrastructure, and moderation systems for social apps, professional networks, and niche communities.',
      challenges: [
        {
          title: 'Feed algorithms',
          description: 'Relevance ranking, engagement prediction, and content diversity at millions of posts per day.',
        },
        {
          title: 'Content moderation',
          description: 'Automated and human-in-the-loop moderation at scale without false positives.',
        },
        {
          title: 'Real-time interactions',
          description:
            'Low-latency notifications, live feeds, and presence indicators across millions of concurrent users.',
        },
      ],
      solutions: [
        {
          title: 'Community platform',
          description: 'User profiles, follow graphs, feeds, reactions, and direct messaging.',
        },
        {
          title: 'Creator tools',
          description: 'Monetisation, subscriber management, and content scheduling for creators.',
        },
        {
          title: 'Moderation infrastructure',
          description: 'AI-assisted content moderation with appeal workflows and audit logs.',
        },
        {
          title: 'Social analytics',
          description: 'Engagement metrics, growth tracking, and audience insights dashboards.',
        },
      ],
      meta: {
        title: 'Social Media & Community Platform Development | Trident Software',
        description:
          'Social platform development — community apps, creator tools, moderation systems, social analytics. Swiss engineering.',
      },
    },
  },
}

export default record
