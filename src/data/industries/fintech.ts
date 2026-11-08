import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'fintech',
  icon: 'landmark',
  techStack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Kafka', 'HSM', 'Azure'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'cloud-consulting', 'devops-and-sre'],
  content: {
    en: {
      title: 'Fintech & Finance',
      tagline: 'Secure financial software under Swiss banking standards',
      description:
        'Banking integrations, payment processing, portfolio management tools, and regulatory reporting systems built to the highest Swiss financial sector standards.',
      challenges: [
        {
          title: 'Banking regulations',
          description: 'FINMA compliance, PSD2, and Swiss Banking Act requirements.',
        },
        {
          title: 'Security requirements',
          description: 'Multi-factor authentication, encryption at rest and in transit, penetration testing.',
        },
        {
          title: 'Core banking integration',
          description: 'API integration with Temenos, Avaloq, and legacy core banking systems.',
        },
      ],
      solutions: [
        {
          title: 'Banking integrations',
          description: 'Open banking API connectors and payment processing pipelines.',
        },
        {
          title: 'Portfolio management',
          description: 'Asset allocation, performance reporting, and risk dashboards.',
        },
        {
          title: 'Regulatory reporting',
          description: 'Automated MiFID II, FATCA, and FINMA reporting workflows.',
        },
        {
          title: 'Payment automation',
          description: 'SEPA, SIC, and cross-border payment orchestration.',
        },
      ],
      meta: {
        title: 'Fintech & Financial Software Development | Trident Software',
        description:
          'Fintech software development — banking integrations, payment processing, portfolio management. FINMA-compliant. Swiss engineering.',
      },
    },
    de: {
      title: 'Fintech & Finanzwesen',
      tagline: 'Sichere Finanzsoftware nach Schweizer Bankenstandards',
      description:
        'Bankanbindungen, Zahlungsverarbeitung, Tools für das Portfoliomanagement und Systeme für das regulatorische Reporting, gebaut nach den höchsten Standards des Schweizer Finanzsektors.',
      challenges: [
        {
          title: 'Bankenregulierung',
          description: 'FINMA-Konformität, PSD2 und die Anforderungen des Schweizer Bankengesetzes.',
        },
        {
          title: 'Hohe Sicherheitsanforderungen',
          description:
            'Mehrfaktor-Authentifizierung, Verschlüsselung gespeicherter und übertragener Daten, Penetrationstests.',
        },
        {
          title: 'Anbindung ans Kernbankensystem',
          description: 'API-Integration mit Temenos, Avaloq und älteren Kernbankensystemen.',
        },
      ],
      solutions: [
        {
          title: 'Bankanbindungen',
          description: 'Open-Banking-API-Konnektoren und Pipelines für die Zahlungsverarbeitung.',
        },
        {
          title: 'Portfoliomanagement',
          description: 'Asset Allocation, Performance-Reporting und Risiko-Dashboards.',
        },
        {
          title: 'Regulatorisches Reporting',
          description: 'Automatisierte Meldeprozesse für MiFID II, FATCA und FINMA.',
        },
        {
          title: 'Automatisierter Zahlungsverkehr',
          description: 'Steuerung von SEPA-, SIC- und grenzüberschreitenden Zahlungen.',
        },
      ],
      meta: {
        title: 'Fintech- & Finanzsoftware-Entwicklung | Trident Software',
        description:
          'Fintech-Softwareentwicklung: Bankanbindungen, Zahlungsverarbeitung, Portfoliomanagement. FINMA-konform. Engineering aus der Schweiz.',
      },
    },
    fr: {
      title: 'Fintech & Finance',
      tagline: 'Des logiciels financiers sécurisés aux standards bancaires suisses',
      description:
        'Intégrations bancaires, traitement des paiements, outils de gestion de portefeuille et systèmes de reporting réglementaire, conçus selon les standards les plus élevés de la place financière suisse.',
      challenges: [
        {
          title: 'Réglementation bancaire',
          description: 'Conformité FINMA, DSP2 et exigences de la loi suisse sur les banques.',
        },
        {
          title: 'Exigences de sécurité',
          description:
            "Authentification multifacteur, chiffrement des données stockées et en transit, tests d'intrusion.",
        },
        {
          title: 'Intégration au core banking',
          description: 'Intégration API avec Temenos, Avaloq et des systèmes bancaires centraux plus anciens.',
        },
      ],
      solutions: [
        {
          title: 'Intégrations bancaires',
          description: 'Connecteurs API open banking et chaînes de traitement des paiements.',
        },
        {
          title: 'Gestion de portefeuille',
          description: "Allocation d'actifs, reporting de performance et tableaux de bord des risques.",
        },
        {
          title: 'Reporting réglementaire',
          description: 'Processus de déclaration automatisés pour MiFID II, FATCA et la FINMA.',
        },
        {
          title: 'Paiements automatisés',
          description: 'Orchestration des paiements SEPA, SIC et transfrontaliers.',
        },
      ],
      meta: {
        title: 'Développement logiciel fintech & finance | Trident Software',
        description:
          'Développement fintech : intégrations bancaires, traitement des paiements, gestion de portefeuille. Conforme FINMA. Ingénierie suisse.',
      },
    },
    it: {
      title: 'Fintech & Finanza',
      tagline: 'Software finanziario sicuro secondo gli standard bancari svizzeri',
      description:
        'Integrazioni bancarie, elaborazione dei pagamenti, strumenti di gestione del portafoglio e sistemi di reporting normativo, costruiti secondo gli standard più alti della piazza finanziaria svizzera.',
      challenges: [
        {
          title: 'Regolamentazione bancaria',
          description: 'Conformità FINMA, PSD2 e requisiti della legge svizzera sulle banche.',
        },
        {
          title: 'Requisiti di sicurezza',
          description:
            'Autenticazione a più fattori, crittografia dei dati archiviati e in transito, penetration test.',
        },
        {
          title: 'Integrazione con il core banking',
          description: 'Integrazione API con Temenos, Avaloq e sistemi bancari centrali meno recenti.',
        },
      ],
      solutions: [
        {
          title: 'Integrazioni bancarie',
          description: "Connettori API di open banking e pipeline per l'elaborazione dei pagamenti.",
        },
        {
          title: 'Gestione del portafoglio',
          description: 'Asset allocation, reporting sulla performance e dashboard dei rischi.',
        },
        {
          title: 'Reporting normativo',
          description: 'Flussi di segnalazione automatizzati per MiFID II, FATCA e FINMA.',
        },
        {
          title: 'Pagamenti automatizzati',
          description: 'Orchestrazione dei pagamenti SEPA, SIC e transfrontalieri.',
        },
      ],
      meta: {
        title: 'Sviluppo software fintech & finanza | Trident Software',
        description:
          'Sviluppo fintech: integrazioni bancarie, elaborazione dei pagamenti, gestione del portafoglio. Conforme FINMA. Ingegneria svizzera.',
      },
    },
  },
}

export default record
