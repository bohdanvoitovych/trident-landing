import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'healthcare',
  icon: 'heart-pulse',
  techStack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'HL7 FHIR', 'Docker', 'Azure HIPAA'],
  relatedCases: ['aida-medicine'],
  relatedServices: ['ai-services', 'software-engineering', 'embedded-and-iot'],
  content: {
    en: {
      title: 'Healthcare & Medtech',
      tagline: 'Compliant software for the most regulated industry',
      description:
        'We build clinical decision support systems, patient portals, medical device software, and AI-powered diagnostics for hospitals, clinics, and medtech companies. All solutions comply with Swiss and EU medical device regulations.',
      challenges: [
        {
          title: 'Regulatory compliance',
          description: 'IEC 62304, MDR 2017/745, and Swiss Medtech Act requirements for software as a medical device.',
        },
        {
          title: 'Data privacy',
          description: 'Patient data under nFADP and GDPR with audit trails and role-based access.',
        },
        {
          title: 'System integration',
          description: 'HL7/FHIR integration with hospital information systems and laboratory equipment.',
        },
      ],
      solutions: [
        {
          title: 'Clinical decision support',
          description: 'AI-assisted diagnosis and treatment recommendation systems.',
        },
        {
          title: 'Patient portals',
          description: 'Secure portals for appointment booking, results, and communication.',
        },
        {
          title: 'Medical device software',
          description: 'IEC 62304-compliant embedded software for diagnostic devices.',
        },
        {
          title: 'AI diagnostics',
          description: 'Computer vision for radiology, pathology, and dermatology.',
        },
      ],
      meta: {
        title: 'Healthcare & Medtech Software Development | Trident Software',
        description:
          'Compliant medical software development — clinical systems, AI diagnostics, patient portals. IEC 62304, MDR, nFADP. Swiss team.',
      },
    },
  },
}

export default record
