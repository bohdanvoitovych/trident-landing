import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'saas',
  icon: 'cloud',
  techStack: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'Stripe', 'PostHog', 'AWS'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ai-services'],
  content: {
    en: {
      title: 'SaaS & software products',
      tagline: 'From MVP to scalable multi-tenant platform',
      description:
        'We build SaaS products from the ground up: multi-tenant architecture, subscription billing, usage analytics and white-label capabilities for software companies and startups.',
      challenges: [
        {
          title: 'Multi-tenancy',
          description: 'Isolated tenant data, custom domains, and per-tenant configuration at scale.',
        },
        {
          title: 'Billing complexity',
          description: 'Usage-based pricing, tiered plans, and trial conversions across markets.',
        },
        {
          title: 'Scaling architecture',
          description: 'Moving from MVP architecture to systems that handle a hundredfold increase in load.',
        },
      ],
      solutions: [
        {
          title: 'SaaS architecture',
          description: 'Multi-tenant data isolation, custom domains, SSO and RBAC.',
        },
        {
          title: 'Subscription billing',
          description: 'Stripe integration with usage metering and dunning workflows.',
        },
        {
          title: 'Analytics & observability',
          description: 'Product analytics, feature flags, and SLO monitoring.',
        },
        {
          title: 'AI feature integration',
          description: 'LLM features: copilots, search, content generation.',
        },
      ],
      meta: {
        title: 'SaaS development services | Trident Software',
        description:
          'SaaS product development: multi-tenant architecture, subscription billing, AI features. From MVP to scale. Swiss company, engineering team since 2009.',
      },
    },
    de: {
      title: 'SaaS & Softwareprodukte',
      tagline: 'Vom MVP zur skalierbaren mandantenfähigen Plattform',
      description:
        'Wir bauen SaaS-Produkte von Grund auf: mandantenfähige Architektur, Abo-Abrechnung, Nutzungsanalysen und White-Label-Funktionen für Softwarefirmen und Startups.',
      challenges: [
        {
          title: 'Mandantenfähigkeit',
          description:
            'Getrennte Mandantendaten, eigene Domains und individuelle Konfiguration pro Mandant, auch bei vielen Kunden.',
        },
        {
          title: 'Komplexe Abrechnung',
          description: 'Nutzungsbasierte Preise, gestaffelte Pläne und Umwandlung von Testkunden in mehreren Märkten.',
        },
        {
          title: 'Architektur, die mitwächst',
          description: 'Der Schritt von der MVP-Architektur zu Systemen, die 100-faches Wachstum tragen.',
        },
      ],
      solutions: [
        {
          title: 'SaaS-Architektur',
          description: 'Datentrennung pro Mandant, eigene Domains, SSO und RBAC.',
        },
        {
          title: 'Abo-Abrechnung',
          description: 'Stripe-Integration mit Nutzungsmessung und automatisiertem Mahnwesen.',
        },
        {
          title: 'Analytics & Observability',
          description: 'Produktanalysen, Feature Flags und SLO-Monitoring.',
        },
        {
          title: 'KI-Funktionen integrieren',
          description: 'LLM-gestützte Funktionen: Copilots, Suche, Content-Generierung.',
        },
      ],
      meta: {
        title: 'SaaS-Entwicklung | Trident Software',
        description:
          'SaaS-Produktentwicklung: mandantenfähige Architektur, Abo-Abrechnung, KI-Funktionen. Vom MVP bis zur Skalierung. Schweizer Unternehmen, Engineering-Team seit 2009.',
      },
    },
    fr: {
      title: 'SaaS & Produits logiciels',
      tagline: 'Du MVP à la plateforme multi-tenant évolutive',
      description:
        "Nous construisons des produits SaaS de A à Z : architecture multi-tenant, facturation par abonnement, analyse d'usage et fonctions en marque blanche pour les éditeurs de logiciels et les startups.",
      challenges: [
        {
          title: 'Multi-tenancy',
          description:
            'Données isolées par client, domaines personnalisés et configuration propre à chaque tenant, même à grande échelle.',
        },
        {
          title: 'Facturation complexe',
          description: "Tarification à l'usage, offres par paliers et conversion des essais sur plusieurs marchés.",
        },
        {
          title: 'Une architecture qui suit la croissance',
          description: "Passer d'une architecture de MVP à des systèmes capables d'encaisser une croissance x100.",
        },
      ],
      solutions: [
        {
          title: 'Architecture SaaS',
          description: 'Isolation des données par tenant, domaines personnalisés, SSO et RBAC.',
        },
        {
          title: 'Facturation par abonnement',
          description: "Intégration Stripe avec mesure de l'usage et relances automatisées des impayés.",
        },
        {
          title: 'Analytics & observabilité',
          description: 'Analyse produit, feature flags et monitoring des SLO.',
        },
        {
          title: 'Intégration de fonctions IA',
          description: 'Fonctions basées sur des LLM : copilotes, recherche, génération de contenu.',
        },
      ],
      meta: {
        title: 'Développement SaaS | Trident Software',
        description:
          "Développement de produits SaaS : architecture multi-tenant, facturation par abonnement, fonctions IA. Du MVP à l'échelle. Entreprise suisse, équipe d'ingénierie depuis 2009.",
      },
    },
    it: {
      title: 'SaaS & Prodotti software',
      tagline: "Dall'MVP a una piattaforma multi-tenant scalabile",
      description:
        "Costruiamo prodotti SaaS da zero: architettura multi-tenant, fatturazione in abbonamento, analisi dell'utilizzo e funzioni white label per software house e startup.",
      challenges: [
        {
          title: 'Multi-tenancy',
          description:
            'Dati isolati per tenant, domini personalizzati e configurazione per singolo tenant, anche su larga scala.',
        },
        {
          title: 'Fatturazione complessa',
          description: 'Prezzi a consumo, piani a livelli e conversione delle prove gratuite su più mercati.',
        },
        {
          title: "Un'architettura che cresce",
          description: "Passare da un'architettura da MVP a sistemi che reggono una crescita di 100 volte.",
        },
      ],
      solutions: [
        {
          title: 'Architettura SaaS',
          description: 'Isolamento dei dati per tenant, domini personalizzati, SSO e RBAC.',
        },
        {
          title: 'Fatturazione in abbonamento',
          description: 'Integrazione Stripe con misurazione dei consumi e solleciti automatici dei pagamenti.',
        },
        {
          title: 'Analytics & osservabilità',
          description: 'Analytics di prodotto, feature flag e monitoraggio degli SLO.',
        },
        {
          title: 'Integrazione di funzioni IA',
          description: 'Funzioni basate su LLM: copilot, ricerca, generazione di contenuti.',
        },
      ],
      meta: {
        title: 'Sviluppo SaaS | Trident Software',
        description:
          "Sviluppo di prodotti SaaS: architettura multi-tenant, fatturazione in abbonamento, funzioni IA. Dall'MVP alla scala. Azienda svizzera, team di ingegneria dal 2009.",
      },
    },
  },
}

export default record
