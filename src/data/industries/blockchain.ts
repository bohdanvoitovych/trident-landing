import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'blockchain',
  icon: 'link',
  techStack: ['Solidity', 'Rust', 'Ethereum', 'Polygon', 'IPFS', 'TypeScript', 'Hardhat', 'The Graph'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ai-services', 'cloud-consulting'],
  content: {
    en: {
      title: 'Blockchain & Web3',
      tagline: 'Smart contracts and decentralised applications',
      description:
        'Smart contract development, NFT platforms, tokenisation infrastructure, and DeFi protocol integrations for Web3 startups, financial institutions, and enterprise blockchain projects.',
      challenges: [
        {
          title: 'Smart contract security',
          description: 'Preventing re-entrancy, overflow, and access control vulnerabilities in on-chain code.',
        },
        {
          title: 'Gas optimisation',
          description: 'Minimising transaction costs without sacrificing functionality or security.',
        },
        {
          title: 'Regulatory compliance',
          description: 'Navigating Swiss FINMA guidance and MiCA for tokenised assets and DeFi protocols.',
        },
      ],
      solutions: [
        {
          title: 'Smart contract development',
          description: 'Solidity and Rust contracts with formal verification and audit preparation.',
        },
        {
          title: 'NFT platforms',
          description: 'Minting, marketplace, and royalty management for digital assets.',
        },
        {
          title: 'Tokenisation infrastructure',
          description: 'Real-world asset tokenisation with compliance and transfer restrictions.',
        },
        {
          title: 'Web3 frontend integration',
          description: 'dApp frontends with wallet connection, on-chain reads, and transaction signing.',
        },
      ],
      meta: {
        title: 'Blockchain & Web3 Development | Trident Software',
        description:
          'Blockchain development — smart contracts, NFT platforms, tokenisation, DeFi integrations. Swiss engineering team.',
      },
    },
  },
}

export default record
