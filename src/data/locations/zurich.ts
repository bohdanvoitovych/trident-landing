import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'zurich',
  relatedServices: ['ai-services', 'software-engineering', 'cloud-consulting', 'devops-and-sre'],
  relatedCases: ['kleap-ai-builder', '8move-driver'],
  content: {
    en: {
      name: 'Zurich',
      region: 'Canton of Zurich',
      tagline: "Custom software for Switzerland's technology capital",
      description:
        'Zurich hosts Google, Meta, Apple, UBS, Credit Suisse, and hundreds of fintech startups. We build custom web platforms, AI-powered tools, and enterprise integrations for Zurich-based companies — delivering Swiss quality with Valais efficiency.',
      keyIndustries: ['Fintech', 'Banking', 'Crypto', 'Enterprise SaaS', 'Deep Tech'],
      highlights: [
        {
          title: 'Fintech expertise',
          description:
            'Banking APIs, payment processing, KYC automation, and regulatory reporting for Swiss financial institutions.',
        },
        {
          title: 'Google-grade engineering',
          description:
            "Scalable architectures used by Zurich's tech giants — microservices, event-driven backends, observability stacks.",
        },
        {
          title: 'Crypto Valley ready',
          description:
            'Smart contract integrations, Web3 dashboards, and blockchain-backed audit trails for Crypto Valley startups.',
        },
      ],
      meta: {
        title: 'Software Development Zurich | Trident Software Switzerland',
        description:
          'Custom software development in Zurich. We build AI-powered tools, fintech platforms, and enterprise web apps for Zurich companies. Swiss quality, Valais pricing.',
      },
    },
    de: {
      name: 'Zürich',
      region: 'Kanton Zürich',
      tagline: 'Individuelle Software für den Technologiestandort Nummer eins der Schweiz',
      description:
        'In Zürich sitzen Google, Meta, Apple, UBS, Credit Suisse und Hunderte Fintech-Startups. Wir entwickeln individuelle Webplattformen, KI-gestützte Tools und Unternehmensintegrationen für Firmen aus Zürich. Schweizer Qualität, mit der Effizienz aus dem Wallis.',
      keyIndustries: ['Fintech', 'Banken', 'Krypto', 'Enterprise SaaS', 'Deep Tech'],
      highlights: [
        {
          title: 'Erfahrung im Fintech-Bereich',
          description:
            'Banking-APIs, Zahlungsabwicklung, automatisierte KYC-Prüfung und regulatorisches Reporting für Schweizer Finanzinstitute.',
        },
        {
          title: 'Engineering auf Google-Niveau',
          description:
            'Skalierbare Architekturen, wie sie die Zürcher Tech-Konzerne einsetzen: Microservices, ereignisgesteuerte Backends, Observability-Stacks.',
        },
        {
          title: 'Bereit für das Crypto Valley',
          description:
            'Smart-Contract-Integrationen, Web3-Dashboards und blockchainbasierte Audit-Trails für Startups im Crypto Valley.',
        },
      ],
      meta: {
        title: 'Softwareentwicklung Zürich | Trident Software Schweiz',
        description:
          'Individuelle Softwareentwicklung in Zürich: KI-Tools, Fintech-Plattformen und Web-Apps für Zürcher Unternehmen. Schweizer Qualität zu Walliser Preisen.',
      },
    },
    fr: {
      name: 'Zurich',
      region: 'Canton de Zurich',
      tagline: 'Des logiciels sur mesure pour la capitale suisse de la technologie',
      description:
        "Zurich accueille Google, Meta, Apple, UBS, Credit Suisse et des centaines de startups fintech. Nous développons des plateformes web sur mesure, des outils basés sur l'IA et des intégrations d'entreprise pour les sociétés zurichoises, avec la qualité suisse et l'efficacité valaisanne.",
      keyIndustries: ['Fintech', 'Banque', 'Crypto', "SaaS d'entreprise", 'Deep Tech'],
      highlights: [
        {
          title: 'Expertise fintech',
          description:
            'API bancaires, traitement des paiements, automatisation KYC et reporting réglementaire pour les institutions financières suisses.',
        },
        {
          title: 'Une ingénierie au niveau de Google',
          description:
            "Des architectures évolutives comme celles des géants de la tech à Zurich : microservices, backends événementiels, stacks d'observabilité.",
        },
        {
          title: 'Prêts pour la Crypto Valley',
          description:
            "Intégrations de smart contracts, tableaux de bord Web3 et pistes d'audit adossées à la blockchain pour les startups de la Crypto Valley.",
        },
      ],
      meta: {
        title: 'Développement logiciel Zurich | Trident Software Suisse',
        description:
          'Développement logiciel sur mesure à Zurich : outils IA, plateformes fintech et applications web pour entreprises zurichoises. Qualité suisse, prix valaisans.',
      },
    },
    it: {
      name: 'Zurigo',
      region: 'Cantone di Zurigo',
      tagline: 'Software su misura per la capitale tecnologica della Svizzera',
      description:
        "A Zurigo hanno sede Google, Meta, Apple, UBS, Credit Suisse e centinaia di startup fintech. Sviluppiamo piattaforme web su misura, strumenti basati sull'IA e integrazioni aziendali per le imprese zurighesi, con qualità svizzera ed efficienza vallesana.",
      keyIndustries: ['Fintech', 'Banche', 'Cripto', 'SaaS aziendale', 'Deep Tech'],
      highlights: [
        {
          title: 'Competenza fintech',
          description:
            'API bancarie, elaborazione dei pagamenti, automazione KYC e reporting regolamentare per gli istituti finanziari svizzeri.',
        },
        {
          title: 'Ingegneria al livello di Google',
          description:
            'Architetture scalabili come quelle dei colossi tech di Zurigo: microservizi, backend event-driven, stack di osservabilità.',
        },
        {
          title: 'Pronti per la Crypto Valley',
          description:
            'Integrazioni di smart contract, dashboard Web3 e audit trail basati su blockchain per le startup della Crypto Valley.',
        },
      ],
      meta: {
        title: 'Sviluppo software Zurigo | Trident Software Svizzera',
        description:
          'Sviluppo software su misura a Zurigo: strumenti IA, piattaforme fintech e web app per le aziende zurighesi. Qualità svizzera a prezzi vallesani.',
      },
    },
  },
}

export default record
