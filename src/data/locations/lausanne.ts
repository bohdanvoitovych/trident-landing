import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'lausanne',
  relatedServices: ['software-engineering', 'cto-as-a-service', 'ui-ux-design', 'ai-services'],
  relatedCases: ['kleap-ai-builder', 'lapochette', '8move-driver'],
  content: {
    en: {
      name: 'Lausanne',
      region: 'Canton of Vaud',
      tagline: "Startup-grade engineering for Lausanne's innovation ecosystem",
      description:
        "EPFL spinoffs, gaming studios (Ubisoft), the Olympic capital, and a thriving startup scene make Lausanne one of Europe's most innovative cities. We partner with Lausanne startups and scale-ups to build MVPs, scale engineering teams, and deliver production-ready products fast.",
      keyIndustries: ['Startups & Scale-ups', 'Gaming', 'Sports Tech', 'EdTech', 'Hospitality Tech'],
      highlights: [
        {
          title: 'EPFL-calibre engineering',
          description:
            "Technically rigorous software from first principles — not just framework glue. Used by Lausanne's deep-tech startups.",
        },
        {
          title: 'MVP to product',
          description:
            "From validated idea to production product in 8–16 weeks. We've done it for Lausanne founders raising seed and Series A.",
        },
        {
          title: 'Sports & events technology',
          description:
            "Event management platforms, ticketing systems, and fan engagement apps for Lausanne's sports organizations and the Olympic ecosystem.",
        },
      ],
      meta: {
        title: 'Software Development Lausanne | Startup Engineering | Trident Software',
        description:
          'MVP development, startup engineering, and CTO-as-a-service for Lausanne companies. EPFL ecosystem partner. Fast delivery, production quality.',
      },
    },
  },
}

export default record
