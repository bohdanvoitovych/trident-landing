import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'agriculture',
  icon: 'sprout',
  techStack: ['Python', 'React', 'PostgreSQL', 'MQTT', 'LoRaWAN', 'PostGIS', 'AWS'],
  relatedCases: [],
  relatedServices: ['embedded-and-iot', 'software-engineering', 'ai-services'],
  content: {
    en: {
      title: 'Agriculture & AgriTech',
      tagline: 'Precision agriculture for Swiss farming',
      description:
        'Farm management systems, crop monitoring with satellite/drone data, livestock tracking, and agricultural IoT solutions for Swiss farmers and agri-businesses.',
      challenges: [
        {
          title: 'Remote connectivity',
          description: 'Reliable data collection in areas with poor cellular coverage.',
        },
        {
          title: 'Regulatory compliance',
          description: 'Swiss agricultural subsidies, organic certification, and cross-border food traceability.',
        },
        {
          title: 'Seasonal workflows',
          description: 'Software that adapts to planting, growing, and harvest cycles.',
        },
      ],
      solutions: [
        {
          title: 'Farm management',
          description: 'Crop planning, input tracking, and yield recording systems.',
        },
        {
          title: 'Precision monitoring',
          description: 'Satellite and drone imagery analysis for field health mapping.',
        },
        {
          title: 'Livestock tracking',
          description: 'RFID/GPS-based herd tracking and health monitoring.',
        },
        {
          title: 'Subsidy management',
          description: 'Swiss DZV subsidy application and compliance tracking.',
        },
      ],
      meta: {
        title: 'Agriculture & AgriTech Software | Trident Software',
        description:
          'AgriTech software — farm management, precision monitoring, livestock tracking, subsidy management. Swiss engineering.',
      },
    },
  },
}

export default record
