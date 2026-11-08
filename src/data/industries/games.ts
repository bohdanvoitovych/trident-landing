import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'games',
  icon: 'gamepad-2',
  techStack: ['Go', 'Node.js', 'Redis', 'PostgreSQL', 'WebSockets', 'Kubernetes', 'AWS'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'cloud-consulting', 'devops-and-sre'],
  content: {
    en: {
      title: 'Gaming & Interactive',
      tagline: 'Backend and tooling for game studios',
      description:
        'Game backend services, matchmaking systems, in-game economy platforms, and live ops tooling for mobile game studios, indie developers, and serious game companies.',
      challenges: [
        {
          title: 'Latency and scalability',
          description: 'Sub-100ms response for multiplayer actions and burst scaling for new game launches.',
        },
        {
          title: 'In-game economy balance',
          description: 'Preventing inflation, exploits, and pay-to-win imbalance in virtual economies.',
        },
        {
          title: 'Live ops and events',
          description: 'Deploying seasonal content, A/B tests, and balance patches without downtime.',
        },
      ],
      solutions: [
        {
          title: 'Game backend services',
          description: 'Authentication, leaderboards, player data, and cloud saves as managed services.',
        },
        {
          title: 'Matchmaking systems',
          description: 'Skill-based matchmaking with region-aware routing and anti-cheat integration.',
        },
        {
          title: 'Virtual economy platform',
          description: 'In-game currencies, item shops, trading systems, and economy analytics.',
        },
        {
          title: 'Live ops dashboard',
          description: 'Content scheduling, player segmentation, and event management for live games.',
        },
      ],
      meta: {
        title: 'Game Development Backend & Infrastructure | Trident Software',
        description:
          'Game backend services — matchmaking, live ops, virtual economies, player data. Swiss engineering for game studios.',
      },
    },
  },
}

export default record
