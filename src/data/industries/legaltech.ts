import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'legaltech',
  icon: 'scale',
  techStack: ['Python', 'LangChain', 'Llama', 'PostgreSQL', 'React', 'FastAPI', 'Docker'],
  relatedCases: [],
  relatedServices: ['ai-services', 'software-engineering', 'cto-as-a-service'],
  content: {
    en: {
      title: 'Legal Tech',
      tagline: 'AI-powered tools for legal professionals',
      description:
        'Contract management systems, legal document automation, AI-assisted legal research, and matter management platforms for law firms and corporate legal departments.',
      challenges: [
        {
          title: 'Document complexity',
          description: 'Extracting structured data from complex legal documents across jurisdictions.',
        },
        {
          title: 'Confidentiality',
          description: 'Attorney-client privilege requires on-premise AI deployment in many cases.',
        },
        {
          title: 'Accuracy requirements',
          description: 'Legal errors have high consequences — AI must augment, not replace, human judgment.',
        },
      ],
      solutions: [
        {
          title: 'Contract analysis',
          description: 'AI extraction of key clauses, dates, and obligations from contracts.',
        },
        {
          title: 'Document automation',
          description: 'Template-based generation of standard legal documents.',
        },
        {
          title: 'Matter management',
          description: 'Case tracking, deadline management, and billing integration.',
        },
        {
          title: 'On-premise LLM',
          description: 'Llama/Mistral deployment on client infrastructure for maximum confidentiality.',
        },
      ],
      meta: {
        title: 'Legal Tech Software Development | Trident Software',
        description:
          'Legal tech software — contract AI, document automation, matter management, on-premise LLM. Swiss engineering.',
      },
    },
  },
}

export default record
