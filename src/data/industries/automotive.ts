import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'automotive',
  icon: 'car',
  techStack: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'MQTT', 'Kubernetes', 'AWS'],
  relatedCases: ['zenit-auto-b2b'],
  relatedServices: ['software-engineering', 'ai-services'],
  content: {
    en: {
      title: 'Automotive',
      tagline: 'Software for connected and electric vehicles',
      description:
        'From B2B dealer platforms to EV fleet management and in-vehicle software, we deliver automotive solutions that meet the precision and reliability standards of the industry.',
      challenges: [
        {
          title: 'Complex B2B workflows',
          description: 'Multi-tenant dealer platforms with pricing, inventory, and approval chains.',
        },
        {
          title: 'Real-time telemetry',
          description: 'Vehicle data ingestion and processing at scale for EV and fleet applications.',
        },
        {
          title: 'Regulatory compliance',
          description: 'Homologation documentation, recall management, and type-approval workflows.',
        },
      ],
      solutions: [
        {
          title: 'Dealer management systems',
          description: 'B2B platforms for vehicle ordering, pricing, and inventory.',
        },
        {
          title: 'EV fleet management',
          description: 'Charging optimization, range prediction, and fleet analytics.',
        },
        {
          title: 'Telematics platforms',
          description: 'Real-time vehicle data processing and driver behavior analytics.',
        },
        {
          title: 'Document automation',
          description: 'AI-powered vehicle documentation and compliance workflows.',
        },
      ],
      meta: {
        title: 'Automotive Software Development | Trident Software',
        description:
          'Automotive software — dealer platforms, EV fleet management, telematics, and vehicle documentation automation. Swiss engineering.',
      },
    },
    de: {
      title: 'Automobilbranche',
      tagline: 'Software für vernetzte und elektrische Fahrzeuge',
      description:
        'Von B2B-Händlerplattformen über E-Flottenmanagement bis zur Software im Fahrzeug: Wir liefern Automotive-Lösungen, die den Ansprüchen der Branche an Präzision und Zuverlässigkeit genügen.',
      challenges: [
        {
          title: 'Verschachtelte B2B-Prozesse',
          description: 'Mandantenfähige Händlerplattformen mit Preisgestaltung, Lagerbestand und Freigabeketten.',
        },
        {
          title: 'Telemetrie in Echtzeit',
          description: 'Erfassung und Verarbeitung grosser Fahrzeugdatenmengen für E-Fahrzeuge und Flotten.',
        },
        {
          title: 'Zulassung und Homologation',
          description: 'Homologationsunterlagen, Rückrufmanagement und Abläufe für die Typgenehmigung.',
        },
      ],
      solutions: [
        {
          title: 'Dealer-Management-Systeme',
          description: 'B2B-Plattformen für Fahrzeugbestellung, Preise und Lagerbestand.',
        },
        {
          title: 'E-Flottenmanagement',
          description: 'Optimiertes Laden, Reichweitenprognose und Flottenauswertungen.',
        },
        {
          title: 'Telematik-Plattformen',
          description: 'Fahrzeugdaten in Echtzeit verarbeiten und das Fahrverhalten analysieren.',
        },
        {
          title: 'Automatisierte Fahrzeugdokumente',
          description: 'KI-gestützte Fahrzeugdokumentation und Compliance-Abläufe.',
        },
      ],
      meta: {
        title: 'Automotive-Softwareentwicklung | Trident Software',
        description:
          'Automotive-Software: Händlerplattformen, E-Flottenmanagement, Telematik und automatisierte Fahrzeugdokumentation. Engineering aus der Schweiz.',
      },
    },
    fr: {
      title: 'Automobile',
      tagline: 'Des logiciels pour véhicules connectés et électriques',
      description:
        'Des plateformes B2B pour concessionnaires à la gestion de flottes électriques en passant par le logiciel embarqué, nous livrons des solutions automobiles à la hauteur des exigences de précision et de fiabilité du secteur.',
      challenges: [
        {
          title: 'Processus B2B imbriqués',
          description:
            'Plateformes multi-clients pour concessionnaires, avec tarification, stocks et circuits de validation.',
        },
        {
          title: 'Télémétrie en temps réel',
          description:
            'Collecte et traitement de gros volumes de données véhicules pour les flottes et les véhicules électriques.',
        },
        {
          title: 'Homologation et conformité',
          description: "Dossiers d'homologation, gestion des rappels et processus de réception par type.",
        },
      ],
      solutions: [
        {
          title: 'Systèmes de gestion pour concessionnaires',
          description: 'Plateformes B2B pour la commande de véhicules, les prix et les stocks.',
        },
        {
          title: 'Gestion de flottes électriques',
          description: "Recharge optimisée, prévision d'autonomie et analyses de flotte.",
        },
        {
          title: 'Plateformes télématiques',
          description: 'Traitement des données véhicules en temps réel et analyse du comportement de conduite.',
        },
        {
          title: 'Documents véhicules automatisés',
          description: 'Documentation véhicule et processus de conformité assistés par IA.',
        },
      ],
      meta: {
        title: 'Développement logiciel automobile | Trident Software',
        description:
          'Logiciels automobiles : plateformes concessionnaires, flottes électriques, télématique et documentation véhicule automatisée. Ingénierie suisse.',
      },
    },
    it: {
      title: 'Automotive',
      tagline: 'Software per veicoli connessi ed elettrici',
      description:
        "Dalle piattaforme B2B per concessionari alla gestione di flotte elettriche fino al software di bordo, realizziamo soluzioni automotive all'altezza degli standard di precisione e affidabilità del settore.",
      challenges: [
        {
          title: 'Processi B2B articolati',
          description: 'Piattaforme multi-tenant per concessionari, con listini, magazzino e catene di approvazione.',
        },
        {
          title: 'Telemetria in tempo reale',
          description: 'Acquisizione ed elaborazione di grandi volumi di dati dei veicoli per flotte ed EV.',
        },
        {
          title: 'Omologazione e conformità',
          description: 'Documentazione di omologazione, gestione dei richiami e processi di approvazione del tipo.',
        },
      ],
      solutions: [
        {
          title: 'Gestionali per concessionari',
          description: 'Piattaforme B2B per ordini di veicoli, prezzi e magazzino.',
        },
        {
          title: 'Gestione di flotte elettriche',
          description: "Ricarica ottimizzata, previsione dell'autonomia e analisi della flotta.",
        },
        {
          title: 'Piattaforme telematiche',
          description: 'Elaborazione in tempo reale dei dati dei veicoli e analisi dello stile di guida.',
        },
        {
          title: 'Documenti dei veicoli automatizzati',
          description: "Documentazione dei veicoli e processi di conformità supportati dall'IA.",
        },
      ],
      meta: {
        title: 'Sviluppo software automotive | Trident Software',
        description:
          'Software automotive: piattaforme per concessionari, flotte elettriche, telematica e documentazione dei veicoli automatizzata. Ingegneria svizzera.',
      },
    },
  },
}

export default record
