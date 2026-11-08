import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'insurance',
  icon: 'shield-check',
  techStack: ['Java', 'Python', 'PostgreSQL', 'Kafka', 'Spark', 'Azure ML', 'Power BI'],
  relatedCases: [],
  relatedServices: ['ai-services', 'software-engineering', 'devops-and-sre'],
  content: {
    en: {
      title: 'Insurance & InsurTech',
      tagline: 'Modernizing the insurance value chain',
      description:
        'Claims automation, policy management systems, telematics-based underwriting, and AI fraud detection for Swiss insurers and InsurTech startups.',
      challenges: [
        {
          title: 'Legacy core systems',
          description: 'Integrating with mainframe-era policy administration systems.',
        },
        {
          title: 'Claims fraud',
          description: 'Detecting fraudulent claims patterns across structured and unstructured data.',
        },
        {
          title: 'Regulatory reporting',
          description: 'FINMA SST reporting, Solvency II, and IFRS 17 data pipelines.',
        },
      ],
      solutions: [
        {
          title: 'Claims automation',
          description: 'AI-powered claims triage, document extraction, and processing.',
        },
        {
          title: 'Policy management',
          description: 'Modern policy admin layer over legacy core systems.',
        },
        {
          title: 'Fraud detection',
          description: 'ML models detecting anomalies across claim submissions.',
        },
        {
          title: 'Telematics underwriting',
          description: 'UBI pricing engines using vehicle telematics data.',
        },
      ],
      meta: {
        title: 'Insurance & InsurTech Software | Trident Software',
        description:
          'InsurTech software — claims automation, fraud detection, policy management, telematics underwriting. Swiss engineering.',
      },
    },
  },
}

export default record
