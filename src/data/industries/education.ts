import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'education',
  icon: 'graduation-cap',
  techStack: ['React', 'Node.js', 'PostgreSQL', 'Python', 'OpenAI', 'AWS', 'FFmpeg'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ai-services', 'ui-ux-design'],
  content: {
    en: {
      title: 'Education & EdTech',
      tagline: 'Learning platforms for the digital classroom',
      description:
        'LMS platforms, adaptive learning engines, skill assessment tools, and student management systems for schools, universities, corporate training departments, and online course providers.',
      challenges: [
        {
          title: 'Engagement and completion',
          description: 'Keeping learners motivated through gamification, progress tracking, and timely nudges.',
        },
        {
          title: 'Diverse content formats',
          description: 'Delivering video, quizzes, interactive simulations, and live sessions from one platform.',
        },
        {
          title: 'Privacy and compliance',
          description: 'FERPA, GDPR, and Swiss nFADP compliance for student data including minors.',
        },
      ],
      solutions: [
        {
          title: 'LMS platform',
          description: 'Course creation, content delivery, progress tracking, and certificate issuance.',
        },
        {
          title: 'Adaptive learning engine',
          description: 'AI-driven content sequencing based on learner performance and knowledge gaps.',
        },
        {
          title: 'Assessment & proctoring',
          description: 'Quiz builder, automated grading, and remote proctoring integrations.',
        },
        {
          title: 'Corporate training portal',
          description: 'Employee onboarding, compliance training, and skills tracking dashboards.',
        },
      ],
      meta: {
        title: 'EdTech & Education Software Development | Trident Software',
        description:
          'Education software — LMS platforms, adaptive learning, assessment tools, corporate training portals. Swiss engineering.',
      },
    },
  },
}

export default record
