import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'proptech',
  icon: 'building-2',
  techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Twilio', 'Stripe', 'DocuSign'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ai-services', 'ui-ux-design'],
  content: {
    en: {
      title: 'Real Estate & PropTech',
      tagline: 'Digital transformation for the property sector',
      description:
        'Property management platforms, tenant portals, smart building integrations, and AI-powered property valuation tools for real estate companies and property managers.',
      challenges: [
        {
          title: 'Document complexity',
          description: 'Lease agreements, permits, and compliance documents across multiple jurisdictions.',
        },
        {
          title: 'Multi-stakeholder workflows',
          description: 'Coordinating landlords, tenants, contractors, and property managers.',
        },
        {
          title: 'Building system integration',
          description: 'BMS, access control, and energy monitoring system integrations.',
        },
      ],
      solutions: [
        {
          title: 'Property management',
          description: 'Unified platform for lease management, maintenance, and billing.',
        },
        {
          title: 'Tenant portals',
          description: 'Self-service portals for rent payment, maintenance requests, and documents.',
        },
        {
          title: 'Document AI',
          description: 'Automated lease extraction, compliance checks, and contract analysis.',
        },
        {
          title: 'Smart building integration',
          description: 'BMS and IoT integration for energy and access management.',
        },
      ],
      meta: {
        title: 'PropTech & Real Estate Software | Trident Software',
        description:
          'PropTech software development — property management, tenant portals, document AI, smart building integration. Swiss engineering.',
      },
    },
    de: {
      title: 'Immobilien & PropTech',
      tagline: 'Digitaler Wandel für die Immobilienbranche',
      description:
        'Plattformen für die Liegenschaftsverwaltung, Mieterportale, Smart-Building-Anbindungen und KI-gestützte Immobilienbewertung für Immobilienfirmen und Verwaltungen.',
      challenges: [
        {
          title: 'Dokumentenflut',
          description: 'Mietverträge, Bewilligungen und Compliance-Unterlagen aus verschiedenen Rechtsordnungen.',
        },
        {
          title: 'Viele Beteiligte',
          description: 'Abstimmung zwischen Eigentümern, Mietern, Handwerkern und Verwaltungen.',
        },
        {
          title: 'Anbindung der Gebäudetechnik',
          description: 'Integration von Gebäudeleittechnik, Zutrittskontrolle und Energiemonitoring.',
        },
      ],
      solutions: [
        {
          title: 'Liegenschaftsverwaltung',
          description: 'Eine Plattform für Mietverträge, Unterhalt und Abrechnung.',
        },
        {
          title: 'Mieterportale',
          description: 'Self-Service-Portale für Mietzahlungen, Reparaturmeldungen und Dokumente.',
        },
        {
          title: 'Dokumenten-KI',
          description: 'Automatisches Auslesen von Mietverträgen, Compliance-Prüfungen und Vertragsanalyse.',
        },
        {
          title: 'Smart-Building-Integration',
          description: 'Anbindung von Gebäudeleittechnik und IoT für Energie- und Zutrittsmanagement.',
        },
      ],
      meta: {
        title: 'PropTech- & Immobiliensoftware | Trident Software',
        description:
          'PropTech-Softwareentwicklung: Liegenschaftsverwaltung, Mieterportale, Dokumenten-KI, Smart-Building-Integration. Engineering aus der Schweiz.',
      },
    },
    fr: {
      title: 'Immobilier & PropTech',
      tagline: 'La transformation numérique du secteur immobilier',
      description:
        "Plateformes de gérance immobilière, portails locataires, intégrations smart building et outils d'estimation immobilière par IA pour les sociétés immobilières et les régies.",
      challenges: [
        {
          title: 'Masse documentaire',
          description: 'Baux, permis et documents de conformité relevant de plusieurs juridictions.',
        },
        {
          title: 'Nombreux intervenants',
          description: 'Coordination entre propriétaires, locataires, entreprises et régies.',
        },
        {
          title: 'Intégration des équipements techniques',
          description: "Intégration de la GTB, du contrôle d'accès et du suivi énergétique.",
        },
      ],
      solutions: [
        {
          title: 'Gérance immobilière',
          description: "Une seule plateforme pour les baux, l'entretien et la facturation.",
        },
        {
          title: 'Portails locataires',
          description:
            "Portails en libre-service pour le paiement du loyer, les demandes d'intervention et les documents.",
        },
        {
          title: 'IA documentaire',
          description: 'Extraction automatique des baux, contrôles de conformité et analyse de contrats.',
        },
        {
          title: 'Intégration smart building',
          description: "Intégration GTB et IoT pour la gestion de l'énergie et des accès.",
        },
      ],
      meta: {
        title: 'Logiciels PropTech & immobilier | Trident Software',
        description:
          'Développement PropTech : gérance immobilière, portails locataires, IA documentaire, intégration smart building. Ingénierie suisse.',
      },
    },
    it: {
      title: 'Immobiliare & PropTech',
      tagline: 'La trasformazione digitale del settore immobiliare',
      description:
        'Piattaforme di gestione immobiliare, portali per gli inquilini, integrazioni smart building e strumenti di valutazione immobiliare con IA per società immobiliari e amministrazioni.',
      challenges: [
        {
          title: 'Mole di documenti',
          description: 'Contratti di locazione, permessi e documenti di conformità soggetti a giurisdizioni diverse.',
        },
        {
          title: 'Molti attori coinvolti',
          description: 'Coordinare proprietari, inquilini, imprese e amministratori.',
        },
        {
          title: "Integrazione degli impianti dell'edificio",
          description: 'Integrazione di BMS, controllo accessi e monitoraggio energetico.',
        },
      ],
      solutions: [
        {
          title: 'Gestione immobiliare',
          description: "Un'unica piattaforma per locazioni, manutenzione e fatturazione.",
        },
        {
          title: 'Portali per gli inquilini',
          description: "Portali self-service per pagare l'affitto, segnalare interventi e consultare documenti.",
        },
        {
          title: 'IA documentale',
          description:
            'Estrazione automatica dai contratti di locazione, verifiche di conformità e analisi contrattuale.',
        },
        {
          title: 'Integrazione smart building',
          description: 'Integrazione BMS e IoT per la gestione di energia e accessi.',
        },
      ],
      meta: {
        title: 'Software PropTech & immobiliare | Trident Software',
        description:
          'Sviluppo PropTech: gestione immobiliare, portali inquilini, IA documentale, integrazione smart building. Ingegneria svizzera.',
      },
    },
  },
}

export default record
