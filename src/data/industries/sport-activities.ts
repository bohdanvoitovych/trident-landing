import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'sport-activities',
  icon: 'dumbbell',
  techStack: ['React Native', 'React', 'Node.js', 'PostgreSQL', 'TimescaleDB', 'AWS', 'BLE/GPS SDKs'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'embedded-and-iot', 'ui-ux-design'],
  content: {
    en: {
      title: 'Sport & Fitness',
      tagline: 'Technology for active lifestyles and sports organisations',
      description:
        'Sports club management, event registration platforms, activity tracking apps, and athlete performance analytics for federations, fitness brands, and sports tech startups.',
      challenges: [
        {
          title: 'Registration and payment',
          description:
            'Handling race registrations, membership fees, and event ticketing with high concurrency at opening.',
        },
        {
          title: 'Real-time tracking',
          description: 'GPS and sensor data ingestion from thousands of athletes in a live event.',
        },
        {
          title: 'Community and engagement',
          description:
            'Keeping athletes engaged between events with training plans, social features, and progress tracking.',
        },
      ],
      solutions: [
        {
          title: 'Event registration platform',
          description: 'Race and event signup with wave assignment, payment, and BIB management.',
        },
        {
          title: 'Club management system',
          description: 'Membership, scheduling, facility booking, and coach communication.',
        },
        {
          title: 'Activity tracking app',
          description: 'Mobile app for logging workouts, routes, and personal records with social sharing.',
        },
        {
          title: 'Performance analytics',
          description: 'Athlete data dashboards with training load, recovery, and benchmark comparisons.',
        },
      ],
      meta: {
        title: 'Sport & Fitness Software Development | Trident Software',
        description:
          'Sports tech software — event registration, club management, activity tracking, performance analytics. Swiss engineering.',
      },
    },
  },
}

export default record
