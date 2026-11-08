import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'zug',
  relatedServices: ['software-engineering', 'ai-services', 'cloud-consulting', 'devops-and-sre'],
  relatedCases: ['zenit-auto-b2b', 'kleap-ai-builder'],
  content: {
    en: {
      name: 'Zug',
      region: 'Canton of Zug',
      tagline: 'Blockchain, Web3, and enterprise software for Crypto Valley',
      description:
        "Zug's Crypto Valley hosts over 1,000 blockchain companies — Ethereum Foundation, Cardano, Polkadot, and hundreds of DeFi projects. We build Web3 infrastructure, token-gated platforms, smart contract integrations, and enterprise-grade crypto tools for Zug's digital asset ecosystem.",
      keyIndustries: ['Blockchain & Web3', 'DeFi & Crypto', 'International HQs', 'Asset Management', 'RegTech'],
      highlights: [
        {
          title: 'Web3 & blockchain integration',
          description:
            'Smart contract dashboards, wallet interfaces, on-chain analytics, and DeFi protocol integrations built for production.',
        },
        {
          title: 'Token & DAO tooling',
          description:
            'Governance portals, treasury management systems, and member dashboards for DAOs and token-based organizations in Crypto Valley.',
        },
        {
          title: 'FINMA-aware architecture',
          description:
            'Regulatory-compliant platforms for FINMA-licensed digital asset service providers, including AML/KYC integration and audit trails.',
        },
      ],
      meta: {
        title: 'Software Development Zug | Crypto Valley Engineering | Trident Software',
        description:
          "Web3 platforms, blockchain integrations, and enterprise software for Zug's Crypto Valley. FINMA-compliant architecture. Swiss development team.",
      },
    },
  },
}

export default record
