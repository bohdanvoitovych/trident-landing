import { pick, localesOf, type Localized } from '@/lib/localized'

export type ServiceFeature = {
  title: string
  description: string
}

/** Text fields of a service, written once per locale. */
export type ServiceText = {
  title: string
  tagline: string
  description: string
  features: ServiceFeature[]
  meta: {
    title: string
    description: string
  }
}

type ServiceRecord = {
  slug: string
  icon: string
  techStack: string[]
  relatedCases: string[]
  content: Localized<ServiceText>
}

/** A service with its text resolved to one locale. */
export type ServiceData = Omit<ServiceRecord, 'content'> & ServiceText

const records: ServiceRecord[] = [
  {
    slug: 'ai-services',
    icon: 'brain',
    techStack: [
      'Python',
      'LangChain',
      'LlamaIndex',
      'OpenAI API',
      'Anthropic Claude',
      'Ollama',
      'FastAPI',
      'PostgreSQL + pgvector',
    ],
    relatedCases: ['kleap-ai-builder', 'aida-medicine'],
    content: {
      en: {
        title: 'AI Services for Business',
        tagline: 'Practical AI that ships to production',
        description:
          'We integrate LLMs, RAG systems, OCR, STT, and AI agents into your existing business processes. No hype — only production-ready implementations that solve real problems.',
        features: [
          {
            title: 'LLM Integration & RAG',
            description:
              'Connect your documents and data to language models. On-premise options available for Swiss data residency.',
          },
          {
            title: 'OCR & Document Processing',
            description: 'Automate invoice, contract, and form processing with AI-powered extraction pipelines.',
          },
          {
            title: 'AI Agents & Automation',
            description:
              'Custom AI agents that handle repetitive workflows, data enrichment, and cross-system orchestration.',
          },
          {
            title: 'Speech-to-Text (STT)',
            description:
              'Multilingual transcription and voice command systems for industrial and healthcare applications.',
          },
          {
            title: 'AI Model Fine-tuning',
            description: 'Domain-specific model training on your proprietary data for better accuracy and compliance.',
          },
          {
            title: 'On-premise LLM Deployment',
            description:
              'Deploy open-source models (Llama, Mistral) on your infrastructure. Data never leaves your servers.',
          },
        ],
        meta: {
          title: 'AI Services for Business — Trident Software Switzerland',
          description:
            'Production-ready AI integrations: LLM, RAG, OCR, AI agents. Swiss data residency. On-premise deployment available.',
        },
      },
      de: {
        title: 'KI-Services für Unternehmen',
        tagline: 'Praxistaugliche KI, die in Produktion geht',
        description:
          'Wir integrieren LLMs, RAG-Systeme, OCR, STT und KI-Agenten in Ihre bestehenden Geschäftsprozesse. Kein Hype, sondern produktionsreife Lösungen für echte Probleme.',
        features: [
          {
            title: 'LLM-Integration & RAG',
            description:
              'Verbinden Sie Ihre Dokumente und Daten mit Sprachmodellen. Auf Wunsch on-premise, damit Ihre Daten in der Schweiz bleiben.',
          },
          {
            title: 'OCR & Dokumentenverarbeitung',
            description:
              'Rechnungen, Verträge und Formulare automatisch verarbeiten, mit KI-gestützten Extraktions-Pipelines.',
          },
          {
            title: 'KI-Agenten & Automatisierung',
            description:
              'Massgeschneiderte KI-Agenten für wiederkehrende Abläufe, Datenanreicherung und die Steuerung über mehrere Systeme hinweg.',
          },
          {
            title: 'Spracherkennung (STT)',
            description:
              'Mehrsprachige Transkription und Sprachsteuerung für Anwendungen in Industrie und Gesundheitswesen.',
          },
          {
            title: 'Fine-Tuning von KI-Modellen',
            description: 'Branchenspezifisches Training mit Ihren eigenen Daten für mehr Genauigkeit und Compliance.',
          },
          {
            title: 'LLM-Betrieb on-premise',
            description:
              'Open-Source-Modelle (Llama, Mistral) auf Ihrer eigenen Infrastruktur. Ihre Daten verlassen Ihre Server nie.',
          },
        ],
        meta: {
          title: 'KI-Services für Unternehmen Schweiz | Trident Software',
          description:
            'Produktionsreife KI-Integrationen: LLM, RAG, OCR, KI-Agenten. Datenhaltung in der Schweiz, Betrieb on-premise möglich.',
        },
      },
      fr: {
        title: "Services d'IA pour les entreprises",
        tagline: "Une IA concrète, qui arrive jusqu'en production",
        description:
          "Nous intégrons LLM, systèmes RAG, OCR, STT et agents IA dans vos processus métier existants. Pas d'effet de mode : des mises en œuvre prêtes pour la production, qui résolvent de vrais problèmes.",
        features: [
          {
            title: 'Intégration LLM et RAG',
            description:
              'Reliez vos documents et vos données à des modèles de langage. Options on-premise disponibles pour garder vos données en Suisse.',
          },
          {
            title: 'OCR et traitement de documents',
            description:
              "Automatisez le traitement des factures, contrats et formulaires grâce à des pipelines d'extraction basés sur l'IA.",
          },
          {
            title: 'Agents IA et automatisation',
            description:
              "Des agents IA sur mesure pour les tâches répétitives, l'enrichissement de données et l'orchestration entre plusieurs systèmes.",
          },
          {
            title: 'Reconnaissance vocale (STT)',
            description: "Transcription multilingue et commande vocale pour l'industrie et le secteur de la santé.",
          },
          {
            title: "Fine-tuning de modèles d'IA",
            description:
              'Entraînement de modèles spécialisés sur vos propres données, pour plus de précision et une meilleure conformité.',
          },
          {
            title: 'LLM déployés on-premise',
            description:
              'Déploiement de modèles open source (Llama, Mistral) sur votre infrastructure. Vos données ne quittent jamais vos serveurs.',
          },
        ],
        meta: {
          title: "Services d'IA pour entreprises en Suisse | Trident Software",
          description:
            "Intégrations d'IA prêtes pour la production : LLM, RAG, OCR, agents IA. Données hébergées en Suisse. Déploiement on-premise possible.",
        },
      },
      it: {
        title: 'Servizi di IA per le aziende',
        tagline: 'IA concreta, che arriva fino in produzione',
        description:
          'Integriamo LLM, sistemi RAG, OCR, STT e agenti IA nei tuoi processi aziendali esistenti. Niente hype: solo implementazioni pronte per la produzione che risolvono problemi reali.',
        features: [
          {
            title: 'Integrazione LLM e RAG',
            description:
              'Collega i tuoi documenti e i tuoi dati ai modelli linguistici. Opzioni on-premise disponibili per tenere i dati in Svizzera.',
          },
          {
            title: 'OCR ed elaborazione documenti',
            description:
              "Automatizza l'elaborazione di fatture, contratti e moduli con pipeline di estrazione basate sull'IA.",
          },
          {
            title: 'Agenti IA e automazione',
            description:
              'Agenti IA su misura per flussi di lavoro ripetitivi, arricchimento dei dati e coordinamento tra più sistemi.',
          },
          {
            title: 'Riconoscimento vocale (STT)',
            description: 'Trascrizione multilingue e comandi vocali per applicazioni industriali e sanitarie.',
          },
          {
            title: 'Fine-tuning di modelli IA',
            description:
              'Addestramento di modelli specifici per il tuo settore sui tuoi dati, per una maggiore precisione e conformità.',
          },
          {
            title: 'LLM installati on-premise',
            description:
              'Installiamo modelli open source (Llama, Mistral) sulla tua infrastruttura. I dati non lasciano mai i tuoi server.',
          },
        ],
        meta: {
          title: 'Servizi di IA per aziende in Svizzera | Trident Software',
          description:
            'Integrazioni IA pronte per la produzione: LLM, RAG, OCR, agenti IA. Dati ospitati in Svizzera. Installazione on-premise disponibile.',
        },
      },
    },
  },
  {
    slug: 'software-engineering',
    icon: 'code-2',
    techStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Flutter', 'PostgreSQL', 'Redis', 'Docker'],
    relatedCases: ['zenit-auto-b2b', 'status-m-wms', 'affiliation-platform'],
    content: {
      en: {
        title: 'Software Engineering',
        tagline: 'Full-stack custom software, delivered',
        description:
          'From B2B e-commerce platforms to enterprise internal tools — we design, build, and maintain custom software with a focus on reliability and scalability.',
        features: [
          {
            title: 'Custom Web Applications',
            description: 'React, Next.js, and Node.js applications built for performance and maintainability.',
          },
          {
            title: 'B2B Platform Development',
            description: 'Complex business logic, tiered pricing, multi-role access, and third-party integrations.',
          },
          {
            title: 'API Design & Integration',
            description: 'RESTful and GraphQL APIs, webhook systems, and third-party service integrations.',
          },
          {
            title: 'Legacy System Migration',
            description: 'Modernize outdated systems with minimal disruption to ongoing operations.',
          },
          {
            title: 'Mobile Applications',
            description: 'Cross-platform apps with Flutter for driver, client, and admin workflows.',
          },
          {
            title: 'QA & Testing',
            description: 'Automated testing pipelines, load testing, and continuous quality assurance.',
          },
        ],
        meta: {
          title: 'Custom Software Engineering — Trident Software Switzerland',
          description:
            'Full-stack custom software development: web apps, B2B platforms, APIs, mobile. Fixed budgets, Swiss quality.',
        },
      },
      de: {
        title: 'Software Engineering',
        tagline: 'Individualsoftware aus einer Hand, fertig geliefert',
        description:
          'Von B2B-E-Commerce-Plattformen bis zu internen Unternehmenstools: Wir konzipieren, entwickeln und warten Individualsoftware, bei der Zuverlässigkeit und Skalierbarkeit im Vordergrund stehen.',
        features: [
          {
            title: 'Individuelle Webanwendungen',
            description: 'Anwendungen mit React, Next.js und Node.js, gebaut für Performance und einfache Wartung.',
          },
          {
            title: 'Entwicklung von B2B-Plattformen',
            description:
              'Komplexe Geschäftslogik, Staffelpreise, Zugriff mit mehreren Rollen und Anbindung von Drittsystemen.',
          },
          {
            title: 'API-Design & Integration',
            description: 'REST- und GraphQL-APIs, Webhook-Systeme und die Anbindung externer Dienste.',
          },
          {
            title: 'Ablösung von Altsystemen',
            description: 'Veraltete Systeme modernisieren, ohne den laufenden Betrieb wesentlich zu stören.',
          },
          {
            title: 'Mobile Apps',
            description: 'Plattformübergreifende Apps mit Flutter für Fahrer, Kunden und Administration.',
          },
          {
            title: 'Qualitätssicherung & Tests',
            description: 'Automatisierte Test-Pipelines, Lasttests und laufende Qualitätssicherung.',
          },
        ],
        meta: {
          title: 'Softwareentwicklung Schweiz | Trident Software',
          description:
            'Individuelle Softwareentwicklung: Web-Apps, B2B-Plattformen, APIs, Mobile. Feste Budgets, Schweizer Qualität.',
        },
      },
      fr: {
        title: 'Ingénierie logicielle',
        tagline: 'Des logiciels sur mesure, du front au back, livrés',
        description:
          "Des plateformes e-commerce B2B aux outils internes d'entreprise : nous concevons, développons et maintenons des logiciels sur mesure, avec la fiabilité et la scalabilité comme priorités.",
        features: [
          {
            title: 'Applications web sur mesure',
            description:
              'Applications React, Next.js et Node.js conçues pour la performance et une maintenance facile.',
          },
          {
            title: 'Développement de plateformes B2B',
            description:
              'Logique métier complexe, tarifs par paliers, accès multi-rôles et intégrations avec des services tiers.',
          },
          {
            title: "Conception et intégration d'API",
            description: 'API REST et GraphQL, systèmes de webhooks et intégration de services tiers.',
          },
          {
            title: 'Migration de systèmes existants',
            description: "Modernisez des systèmes vieillissants en perturbant le moins possible l'activité en cours.",
          },
          {
            title: 'Applications mobiles',
            description:
              "Applications multiplateformes avec Flutter pour les chauffeurs, les clients et l'administration.",
          },
          {
            title: 'Assurance qualité et tests',
            description: 'Pipelines de tests automatisés, tests de charge et contrôle qualité en continu.',
          },
        ],
        meta: {
          title: 'Développement logiciel sur mesure Suisse | Trident Software',
          description:
            'Développement de logiciels sur mesure : applications web, plateformes B2B, API, mobile. Budgets fixes, qualité suisse.',
        },
      },
      it: {
        title: 'Ingegneria del software',
        tagline: 'Software su misura completo, consegnato',
        description:
          'Dalle piattaforme e-commerce B2B agli strumenti interni aziendali: progettiamo, sviluppiamo e manteniamo software su misura puntando su affidabilità e scalabilità.',
        features: [
          {
            title: 'Applicazioni web su misura',
            description:
              'Applicazioni React, Next.js e Node.js costruite per prestazioni elevate e una manutenzione semplice.',
          },
          {
            title: 'Sviluppo di piattaforme B2B',
            description:
              'Logica di business complessa, prezzi a scaglioni, accessi con più ruoli e integrazioni con servizi di terze parti.',
          },
          {
            title: 'Progettazione e integrazione di API',
            description: 'API REST e GraphQL, sistemi di webhook e integrazione di servizi di terze parti.',
          },
          {
            title: 'Migrazione di sistemi legacy',
            description: "Modernizza i sistemi obsoleti disturbando il meno possibile l'operatività quotidiana.",
          },
          {
            title: 'App mobili',
            description: 'App multipiattaforma con Flutter per autisti, clienti e amministrazione.',
          },
          {
            title: 'Controllo qualità e test',
            description: 'Pipeline di test automatizzati, test di carico e controllo qualità continuo.',
          },
        ],
        meta: {
          title: 'Sviluppo software su misura Svizzera | Trident Software',
          description:
            'Sviluppo di software su misura: web app, piattaforme B2B, API, mobile. Budget fissi, qualità svizzera.',
        },
      },
    },
  },
  {
    slug: 'embedded-and-iot',
    icon: 'cpu',
    techStack: ['C', 'C++', 'Python', 'STM32', 'ESP32', 'MQTT', 'InfluxDB', 'Grafana', 'AWS IoT'],
    relatedCases: ['tdsbot-iot'],
    content: {
      en: {
        title: 'Embedded & IoT',
        tagline: 'Software for the physical world',
        description:
          'Firmware development, IoT sensor integration, and industrial monitoring systems. We work with automotive, medical, and industrial clients on mission-critical embedded software.',
        features: [
          {
            title: 'Firmware Development',
            description: 'Bare-metal and RTOS-based firmware for STM32, ESP32, Raspberry Pi, and custom hardware.',
          },
          {
            title: 'IoT Sensor Integration',
            description: 'End-to-end IoT pipelines: sensor → gateway → cloud → dashboard, with alerting and analytics.',
          },
          {
            title: 'Industrial Monitoring',
            description: 'Real-time monitoring systems for water treatment, manufacturing, and environmental control.',
          },
          {
            title: 'CAN Bus & Automotive Protocols',
            description: 'Vehicle diagnostics, OBD integration, and automotive communication protocols.',
          },
          {
            title: 'Medical Device Software',
            description: 'Software for medical devices with compliance considerations for regulated environments.',
          },
          {
            title: 'Hardware-Software Integration',
            description: 'Bridging custom hardware designs with robust software stacks and cloud connectivity.',
          },
        ],
        meta: {
          title: 'Embedded Software & IoT Development — Trident Software Switzerland',
          description:
            'Firmware, IoT, and industrial monitoring systems. Automotive, medical, and industrial clients. Swiss engineering.',
        },
      },
      de: {
        title: 'Embedded & IoT',
        tagline: 'Software für die physische Welt',
        description:
          'Firmware-Entwicklung, Anbindung von IoT-Sensoren und industrielle Überwachungssysteme. Für Kunden aus Automobilbranche, Medizintechnik und Industrie entwickeln wir Embedded-Software, bei der Ausfälle keine Option sind.',
        features: [
          {
            title: 'Firmware-Entwicklung',
            description:
              'Bare-Metal- und RTOS-basierte Firmware für STM32, ESP32, Raspberry Pi und kundenspezifische Hardware.',
          },
          {
            title: 'Anbindung von IoT-Sensoren',
            description:
              'Durchgängige IoT-Pipelines: Sensor → Gateway → Cloud → Dashboard, mit Alarmierung und Auswertungen.',
          },
          {
            title: 'Industrielle Überwachung',
            description: 'Echtzeit-Monitoring für Wasseraufbereitung, Fertigung und Umweltsteuerung.',
          },
          {
            title: 'CAN-Bus & Fahrzeugprotokolle',
            description: 'Fahrzeugdiagnose, OBD-Anbindung und Kommunikationsprotokolle aus dem Automobilbereich.',
          },
          {
            title: 'Software für Medizinprodukte',
            description: 'Software für Medizinprodukte, die die Anforderungen regulierter Umgebungen berücksichtigt.',
          },
          {
            title: 'Hardware-Software-Integration',
            description: 'Wir verbinden kundenspezifische Hardware mit robusten Software-Stacks und Cloud-Anbindung.',
          },
        ],
        meta: {
          title: 'Embedded-Software & IoT-Entwicklung | Trident Software',
          description:
            'Firmware, IoT und industrielle Überwachungssysteme für Kunden aus Automobilbranche, Medizintechnik und Industrie. Schweizer Engineering.',
        },
      },
      fr: {
        title: 'Embarqué et IoT',
        tagline: 'Du logiciel pour le monde physique',
        description:
          "Développement de firmware, intégration de capteurs IoT et systèmes de surveillance industrielle. Nous travaillons avec des clients de l'automobile, du médical et de l'industrie sur des logiciels embarqués critiques.",
        features: [
          {
            title: 'Développement de firmware',
            description:
              'Firmware bare-metal ou basé sur un RTOS pour STM32, ESP32, Raspberry Pi et matériel spécifique.',
          },
          {
            title: 'Intégration de capteurs IoT',
            description:
              'Chaînes IoT de bout en bout : capteur → passerelle → cloud → tableau de bord, avec alertes et analyses.',
          },
          {
            title: 'Surveillance industrielle',
            description:
              "Systèmes de surveillance en temps réel pour le traitement de l'eau, la production et le contrôle environnemental.",
          },
          {
            title: 'Bus CAN et protocoles automobiles',
            description: 'Diagnostic de véhicules, intégration OBD et protocoles de communication automobiles.',
          },
          {
            title: 'Logiciels pour dispositifs médicaux',
            description:
              'Logiciels pour dispositifs médicaux, conçus en tenant compte des exigences des environnements réglementés.',
          },
          {
            title: 'Intégration matériel-logiciel',
            description:
              'Nous relions du matériel conçu sur mesure à des piles logicielles robustes et à une connectivité cloud.',
          },
        ],
        meta: {
          title: 'Logiciel embarqué et IoT en Suisse | Trident Software',
          description:
            "Firmware, IoT et surveillance industrielle pour clients de l'automobile, du médical et de l'industrie. Ingénierie suisse.",
        },
      },
      it: {
        title: 'Embedded e IoT',
        tagline: 'Software per il mondo fisico',
        description:
          'Sviluppo firmware, integrazione di sensori IoT e sistemi di monitoraggio industriale. Lavoriamo con clienti del settore automobilistico, medicale e industriale su software embedded critico.',
        features: [
          {
            title: 'Sviluppo firmware',
            description:
              'Firmware bare-metal e basato su RTOS per STM32, ESP32, Raspberry Pi e hardware personalizzato.',
          },
          {
            title: 'Integrazione di sensori IoT',
            description: 'Pipeline IoT complete: sensore → gateway → cloud → dashboard, con allarmi e analisi.',
          },
          {
            title: 'Monitoraggio industriale',
            description:
              'Sistemi di monitoraggio in tempo reale per trattamento delle acque, produzione e controllo ambientale.',
          },
          {
            title: 'CAN bus e protocolli automotive',
            description: 'Diagnostica dei veicoli, integrazione OBD e protocolli di comunicazione automobilistici.',
          },
          {
            title: 'Software per dispositivi medici',
            description:
              'Software per dispositivi medici sviluppato tenendo conto dei requisiti degli ambienti regolamentati.',
          },
          {
            title: 'Integrazione hardware-software',
            description:
              'Colleghiamo hardware progettato su misura a stack software robusti e alla connettività cloud.',
          },
        ],
        meta: {
          title: 'Sviluppo software embedded e IoT | Trident Software',
          description:
            'Firmware, IoT e sistemi di monitoraggio industriale per clienti automotive, medicali e industriali. Ingegneria svizzera.',
        },
      },
    },
  },
  {
    slug: 'cto-as-a-service',
    icon: 'shield-check',
    techStack: ['Architecture Review', 'AWS / GCP / Azure', 'Security Auditing', 'Process Design', 'Team Leadership'],
    relatedCases: ['kleap-ai-builder', 'go-valais'],
    content: {
      en: {
        title: 'CTO-as-a-Service',
        tagline: 'Technical leadership without the full-time cost',
        description:
          'For startups and scale-ups that need senior technical leadership: architecture decisions, team building, technology strategy, and hands-on delivery oversight.',
        features: [
          {
            title: 'Architecture & Tech Strategy',
            description:
              'Define the right technology stack, cloud strategy, and scalability plan for your growth stage.',
          },
          {
            title: 'Team Building & Hiring',
            description: 'Technical interviews, team structure, onboarding processes, and engineering culture.',
          },
          {
            title: 'MVP to Product',
            description: 'Guide your product from prototype to production-ready, avoiding common scaling pitfalls.',
          },
          {
            title: 'Vendor & Agency Management',
            description: 'Evaluate and manage outsourced teams, agencies, and technology vendors.',
          },
          {
            title: 'Security & Compliance Review',
            description: 'Technical security audits, GDPR/revFADP compliance, and ISO 27001 readiness assessment.',
          },
          {
            title: 'Investor & Board Reporting',
            description: 'Technical due diligence preparation and engineering KPI reporting for investors.',
          },
        ],
        meta: {
          title: 'CTO-as-a-Service — Trident Software Switzerland',
          description:
            'Fractional CTO services for startups and SMEs. Architecture, team building, tech strategy. Swiss-based.',
        },
      },
      de: {
        title: 'CTO-as-a-Service',
        tagline: 'Technische Führung ohne die Kosten einer Vollzeitstelle',
        description:
          'Für Startups und Scale-ups, die erfahrene technische Führung brauchen: Architekturentscheide, Teamaufbau, Technologiestrategie und Begleitung der Umsetzung direkt im Projekt.',
        features: [
          {
            title: 'Architektur & Technologiestrategie',
            description:
              'Den passenden Technologie-Stack, die Cloud-Strategie und den Skalierungsplan für Ihre Wachstumsphase festlegen.',
          },
          {
            title: 'Teamaufbau & Rekrutierung',
            description:
              'Technische Interviews, Teamstruktur, Einarbeitung neuer Mitarbeitender und Engineering-Kultur.',
          },
          {
            title: 'Vom MVP zum Produkt',
            description:
              'Wir führen Ihr Produkt vom Prototyp zur Produktionsreife und umgehen die typischen Stolpersteine beim Skalieren.',
          },
          {
            title: 'Steuerung von Dienstleistern & Agenturen',
            description: 'Externe Teams, Agenturen und Technologieanbieter beurteilen und führen.',
          },
          {
            title: 'Prüfung von Sicherheit & Compliance',
            description:
              'Technische Sicherheitsaudits, Konformität mit DSGVO und nDSG sowie Einschätzung der Bereitschaft für ISO 27001.',
          },
          {
            title: 'Reporting für Investoren & Verwaltungsrat',
            description: 'Vorbereitung der technischen Due Diligence und Engineering-KPIs für Investoren.',
          },
        ],
        meta: {
          title: 'CTO-as-a-Service Schweiz | Trident Software',
          description:
            'Fractional CTO für Startups und KMU: Architektur, Teamaufbau, Technologiestrategie. Mit Sitz in der Schweiz.',
        },
      },
      fr: {
        title: 'CTO-as-a-Service',
        tagline: "Une direction technique sans le coût d'un poste à plein temps",
        description:
          "Pour les startups et scale-ups qui ont besoin d'une direction technique expérimentée : choix d'architecture, constitution d'équipe, stratégie technologique et suivi concret de la réalisation.",
        features: [
          {
            title: 'Architecture et stratégie technologique',
            description:
              'Définir la bonne pile technologique, la stratégie cloud et le plan de montée en charge adaptés à votre stade de croissance.',
          },
          {
            title: "Constitution d'équipe et recrutement",
            description:
              "Entretiens techniques, structure d'équipe, intégration des nouveaux arrivants et culture d'ingénierie.",
          },
          {
            title: 'Du MVP au produit',
            description:
              "Nous accompagnons votre produit du prototype jusqu'à la mise en production, en évitant les pièges classiques de la croissance.",
          },
          {
            title: 'Pilotage des prestataires et agences',
            description:
              'Évaluer et piloter les équipes externalisées, les agences et les fournisseurs technologiques.',
          },
          {
            title: 'Revue sécurité et conformité',
            description:
              "Audits de sécurité techniques, conformité RGPD et nLPD, évaluation de la préparation à l'ISO 27001.",
          },
          {
            title: "Reporting pour investisseurs et conseil d'administration",
            description:
              "Préparation de la due diligence technique et suivi des KPI d'ingénierie pour les investisseurs.",
          },
        ],
        meta: {
          title: 'CTO-as-a-Service en Suisse | Trident Software',
          description:
            "CTO à temps partiel pour startups et PME. Architecture, constitution d'équipe, stratégie technologique. Basé en Suisse.",
        },
      },
      it: {
        title: 'CTO-as-a-Service',
        tagline: 'Leadership tecnica senza il costo di un tempo pieno',
        description:
          'Per startup e scale-up che hanno bisogno di una guida tecnica esperta: scelte di architettura, costruzione del team, strategia tecnologica e supervisione diretta della realizzazione.',
        features: [
          {
            title: 'Architettura e strategia tecnologica',
            description:
              'Definiamo lo stack tecnologico giusto, la strategia cloud e il piano di scalabilità adatti alla tua fase di crescita.',
          },
          {
            title: 'Costruzione del team e selezione',
            description: 'Colloqui tecnici, struttura del team, processi di inserimento e cultura ingegneristica.',
          },
          {
            title: 'Dal MVP al prodotto',
            description:
              'Accompagniamo il tuo prodotto dal prototipo alla produzione, evitando gli errori tipici quando si cresce.',
          },
          {
            title: 'Gestione di fornitori e agenzie',
            description: 'Valutiamo e gestiamo team esterni, agenzie e fornitori di tecnologia.',
          },
          {
            title: 'Verifica di sicurezza e conformità',
            description:
              'Audit tecnici di sicurezza, conformità GDPR e nLPD e valutazione della preparazione alla ISO 27001.',
          },
          {
            title: 'Reporting per investitori e CdA',
            description:
              'Preparazione della due diligence tecnica e reporting dei KPI di ingegneria per gli investitori.',
          },
        ],
        meta: {
          title: 'CTO-as-a-Service in Svizzera | Trident Software',
          description:
            'CTO part-time per startup e PMI. Architettura, costruzione del team, strategia tecnologica. Con sede in Svizzera.',
        },
      },
    },
  },
  {
    slug: 'cloud-consulting',
    icon: 'cloud',
    techStack: ['AWS', 'GCP', 'Azure', 'Terraform', 'Kubernetes', 'Docker', 'Helm', 'Datadog', 'Prometheus'],
    relatedCases: ['8move-admin'],
    content: {
      en: {
        title: 'Cloud Consulting',
        tagline: 'Cloud infrastructure that scales with your business',
        description:
          'Cloud architecture, migration, and optimization on AWS, GCP, and Azure. Infrastructure as code, cost optimization, and multi-region deployments.',
        features: [
          {
            title: 'Cloud Migration',
            description: 'Move from on-premise or legacy cloud to modern, cost-efficient infrastructure.',
          },
          {
            title: 'Infrastructure as Code',
            description: 'Terraform, Pulumi, and CloudFormation for repeatable, version-controlled infra.',
          },
          {
            title: 'Kubernetes & Container Orchestration',
            description: 'Production-grade Kubernetes clusters with monitoring, autoscaling, and GitOps.',
          },
          {
            title: 'Cost Optimization',
            description:
              'Analyze and reduce cloud spend through right-sizing, reserved capacity, and architecture review.',
          },
          {
            title: 'Multi-region & HA',
            description: 'High-availability designs with failover, data replication, and disaster recovery.',
          },
          {
            title: 'Swiss Data Residency',
            description: 'Architecture that keeps data within Swiss borders for revFADP and compliance requirements.',
          },
        ],
        meta: {
          title: 'Cloud Consulting & Infrastructure — Trident Software Switzerland',
          description:
            'AWS, GCP, Azure cloud architecture, migration, and optimization. Terraform, Kubernetes, Swiss data residency.',
        },
      },
      de: {
        title: 'Cloud-Beratung',
        tagline: 'Cloud-Infrastruktur, die mit Ihrem Unternehmen wächst',
        description:
          'Cloud-Architektur, Migration und Optimierung auf AWS, GCP und Azure. Infrastructure as Code, Kostenoptimierung und Deployments über mehrere Regionen.',
        features: [
          {
            title: 'Cloud-Migration',
            description:
              'Der Wechsel von On-Premise oder einer veralteten Cloud auf moderne, kosteneffiziente Infrastruktur.',
          },
          {
            title: 'Infrastructure as Code',
            description: 'Terraform, Pulumi und CloudFormation für reproduzierbare, versionierte Infrastruktur.',
          },
          {
            title: 'Kubernetes & Container-Orchestrierung',
            description: 'Produktionsreife Kubernetes-Cluster mit Monitoring, Autoscaling und GitOps.',
          },
          {
            title: 'Kostenoptimierung',
            description:
              'Cloud-Ausgaben analysieren und senken: passende Dimensionierung, reservierte Kapazitäten und Architektur-Review.',
          },
          {
            title: 'Multi-Region & Hochverfügbarkeit',
            description: 'Hochverfügbare Architekturen mit Failover, Datenreplikation und Disaster Recovery.',
          },
          {
            title: 'Datenhaltung in der Schweiz',
            description:
              'Eine Architektur, die Ihre Daten innerhalb der Schweiz hält, für das nDSG und weitere Compliance-Vorgaben.',
          },
        ],
        meta: {
          title: 'Cloud-Beratung & Infrastruktur Schweiz | Trident Software',
          description:
            'Cloud-Architektur, Migration und Optimierung auf AWS, GCP und Azure. Terraform, Kubernetes, Datenhaltung in der Schweiz.',
        },
      },
      fr: {
        title: 'Conseil cloud',
        tagline: 'Une infrastructure cloud qui grandit avec votre entreprise',
        description:
          'Architecture, migration et optimisation cloud sur AWS, GCP et Azure. Infrastructure as Code, optimisation des coûts et déploiements multi-régions.',
        features: [
          {
            title: 'Migration vers le cloud',
            description:
              "Passez de l'on-premise ou d'un cloud vieillissant à une infrastructure moderne et économique.",
          },
          {
            title: 'Infrastructure as Code',
            description: 'Terraform, Pulumi et CloudFormation pour une infrastructure reproductible et versionnée.',
          },
          {
            title: 'Kubernetes et orchestration de conteneurs',
            description: 'Clusters Kubernetes prêts pour la production, avec monitoring, autoscaling et GitOps.',
          },
          {
            title: 'Optimisation des coûts',
            description:
              "Analysez et réduisez vos dépenses cloud : dimensionnement adapté, capacité réservée et revue d'architecture.",
          },
          {
            title: 'Multi-régions et haute disponibilité',
            description:
              'Architectures haute disponibilité avec basculement, réplication des données et reprise après sinistre.',
          },
          {
            title: 'Données hébergées en Suisse',
            description:
              'Une architecture qui garde les données sur le territoire suisse, pour répondre à la nLPD et aux autres exigences de conformité.',
          },
        ],
        meta: {
          title: 'Conseil cloud et infrastructure en Suisse | Trident Software',
          description:
            'Architecture, migration et optimisation cloud sur AWS, GCP et Azure. Terraform, Kubernetes, données hébergées en Suisse.',
        },
      },
      it: {
        title: 'Consulenza cloud',
        tagline: "Un'infrastruttura cloud che cresce con la tua azienda",
        description:
          'Architettura, migrazione e ottimizzazione cloud su AWS, GCP e Azure. Infrastructure as Code, riduzione dei costi e deployment su più regioni.',
        features: [
          {
            title: 'Migrazione al cloud',
            description:
              "Passa dall'on-premise o da un cloud datato a un'infrastruttura moderna ed efficiente nei costi.",
          },
          {
            title: 'Infrastructure as Code',
            description:
              "Terraform, Pulumi e CloudFormation per un'infrastruttura riproducibile e sotto controllo di versione.",
          },
          {
            title: 'Kubernetes e orchestrazione di container',
            description: 'Cluster Kubernetes pronti per la produzione, con monitoraggio, autoscaling e GitOps.',
          },
          {
            title: 'Ottimizzazione dei costi',
            description:
              "Analizziamo e riduciamo la spesa cloud con il giusto dimensionamento, capacità riservata e revisione dell'architettura.",
          },
          {
            title: 'Multi-region e alta disponibilità',
            description: 'Architetture ad alta disponibilità con failover, replica dei dati e disaster recovery.',
          },
          {
            title: 'Dati ospitati in Svizzera',
            description:
              "Un'architettura che mantiene i dati entro i confini svizzeri, per la nLPD e gli altri requisiti di conformità.",
          },
        ],
        meta: {
          title: 'Consulenza cloud e infrastruttura | Trident Software',
          description:
            'Architettura, migrazione e ottimizzazione cloud su AWS, GCP e Azure. Terraform, Kubernetes, dati ospitati in Svizzera.',
        },
      },
    },
  },
  {
    slug: 'devops-and-sre',
    icon: 'git-branch',
    techStack: [
      'GitHub Actions',
      'GitLab CI',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Datadog',
      'Prometheus',
      'Grafana',
      'Vault',
    ],
    relatedCases: ['8move-admin'],
    content: {
      en: {
        title: 'DevOps & SRE',
        tagline: 'Ship faster, fail less',
        description:
          'CI/CD pipelines, monitoring, incident response, and reliability engineering. We embed DevOps practices into your development workflow from day one.',
        features: [
          {
            title: 'CI/CD Pipeline Design',
            description: 'GitHub Actions, GitLab CI, Jenkins — automated build, test, and deployment pipelines.',
          },
          {
            title: 'Monitoring & Alerting',
            description: 'Datadog, Prometheus, Grafana, and Loki for full observability across your stack.',
          },
          {
            title: 'Incident Management',
            description: 'On-call processes, runbooks, post-mortems, and SLA/SLO definition.',
          },
          {
            title: 'Security Hardening',
            description: 'Secrets management, vulnerability scanning, and SAST/DAST integration.',
          },
          {
            title: 'Database Operations',
            description: 'Backup strategies, replication, migrations, and performance tuning.',
          },
          {
            title: 'Platform Engineering',
            description: 'Internal developer platforms that improve engineering velocity and standardization.',
          },
        ],
        meta: {
          title: 'DevOps & SRE Services — Trident Software Switzerland',
          description:
            'CI/CD, monitoring, incident management, and platform engineering. Swiss-based DevOps consultancy.',
        },
      },
      de: {
        title: 'DevOps & SRE',
        tagline: 'Schneller ausliefern, seltener ausfallen',
        description:
          'CI/CD-Pipelines, Monitoring, Incident Response und Reliability Engineering. Wir verankern DevOps-Praktiken vom ersten Tag an in Ihrem Entwicklungsprozess.',
        features: [
          {
            title: 'Aufbau von CI/CD-Pipelines',
            description: 'GitHub Actions, GitLab CI, Jenkins: automatisierte Pipelines für Build, Test und Deployment.',
          },
          {
            title: 'Monitoring & Alarmierung',
            description: 'Datadog, Prometheus, Grafana und Loki für volle Transparenz über Ihren gesamten Stack.',
          },
          {
            title: 'Incident Management',
            description: 'Pikett-Prozesse, Runbooks, Post-Mortems und die Definition von SLAs und SLOs.',
          },
          {
            title: 'Security Hardening',
            description: 'Verwaltung von Secrets, Schwachstellen-Scans und Integration von SAST/DAST.',
          },
          {
            title: 'Datenbankbetrieb',
            description: 'Backup-Strategien, Replikation, Migrationen und Performance-Tuning.',
          },
          {
            title: 'Platform Engineering',
            description: 'Interne Entwicklerplattformen, die Ihr Engineering schneller und einheitlicher machen.',
          },
        ],
        meta: {
          title: 'DevOps & SRE Services Schweiz | Trident Software',
          description:
            'CI/CD, Monitoring, Incident Management und Platform Engineering. DevOps-Beratung mit Sitz in der Schweiz.',
        },
      },
      fr: {
        title: 'DevOps et SRE',
        tagline: 'Livrer plus vite, tomber moins souvent',
        description:
          'Pipelines CI/CD, monitoring, gestion des incidents et ingénierie de la fiabilité. Nous intégrons les pratiques DevOps à votre processus de développement dès le premier jour.',
        features: [
          {
            title: 'Conception de pipelines CI/CD',
            description:
              'GitHub Actions, GitLab CI, Jenkins : pipelines automatisés de build, de test et de déploiement.',
          },
          {
            title: 'Monitoring et alertes',
            description: 'Datadog, Prometheus, Grafana et Loki pour une observabilité complète de toute votre stack.',
          },
          {
            title: 'Gestion des incidents',
            description: 'Organisation des astreintes, runbooks, post-mortems et définition des SLA et SLO.',
          },
          {
            title: 'Durcissement de la sécurité',
            description: 'Gestion des secrets, analyse des vulnérabilités et intégration SAST/DAST.',
          },
          {
            title: 'Exploitation des bases de données',
            description: 'Stratégies de sauvegarde, réplication, migrations et optimisation des performances.',
          },
          {
            title: 'Platform Engineering',
            description:
              'Des plateformes internes pour développeurs qui accélèrent et standardisent le travail de vos équipes.',
          },
        ],
        meta: {
          title: 'Services DevOps et SRE en Suisse | Trident Software',
          description:
            'CI/CD, monitoring, gestion des incidents et platform engineering. Conseil DevOps basé en Suisse.',
        },
      },
      it: {
        title: 'DevOps e SRE',
        tagline: 'Rilasci più rapidi, meno guasti',
        description:
          "Pipeline CI/CD, monitoraggio, gestione degli incidenti e ingegneria dell'affidabilità. Inseriamo le pratiche DevOps nel tuo flusso di sviluppo fin dal primo giorno.",
        features: [
          {
            title: 'Progettazione di pipeline CI/CD',
            description: 'GitHub Actions, GitLab CI, Jenkins: pipeline automatizzate di build, test e deployment.',
          },
          {
            title: 'Monitoraggio e allarmi',
            description: "Datadog, Prometheus, Grafana e Loki per un'osservabilità completa di tutto il tuo stack.",
          },
          {
            title: 'Gestione degli incidenti',
            description: 'Turni di reperibilità, runbook, post-mortem e definizione di SLA e SLO.',
          },
          {
            title: 'Rafforzamento della sicurezza',
            description: 'Gestione dei secret, scansione delle vulnerabilità e integrazione SAST/DAST.',
          },
          {
            title: 'Gestione dei database',
            description: 'Strategie di backup, replica, migrazioni e ottimizzazione delle prestazioni.',
          },
          {
            title: 'Platform Engineering',
            description: 'Piattaforme interne per sviluppatori che rendono il lavoro dei team più veloce e uniforme.',
          },
        ],
        meta: {
          title: 'Servizi DevOps e SRE in Svizzera | Trident Software',
          description:
            'CI/CD, monitoraggio, gestione degli incidenti e platform engineering. Consulenza DevOps con sede in Svizzera.',
        },
      },
    },
  },
  {
    slug: 'ui-ux-design',
    icon: 'palette',
    techStack: ['Figma', 'Framer', 'Storybook', 'React', 'Tailwind CSS', 'shadcn/ui'],
    relatedCases: ['8move-driver', 'samange-fashion', 'lapochette'],
    content: {
      en: {
        title: 'UI/UX Design',
        tagline: 'Interfaces that convert and delight',
        description:
          'Product design from wireframes to production-ready UI systems. We design for B2B enterprise dashboards, e-commerce, and consumer mobile apps.',
        features: [
          {
            title: 'UX Research & Audit',
            description: 'User interviews, usability testing, and heuristic evaluation of existing products.',
          },
          {
            title: 'Information Architecture',
            description: 'Site maps, user flows, and navigation design that reduce cognitive load.',
          },
          {
            title: 'Wireframing & Prototyping',
            description: 'Low and high-fidelity prototypes in Figma for validation before development.',
          },
          {
            title: 'Design System Creation',
            description: 'Scalable component libraries with tokens, variants, and documentation for engineering teams.',
          },
          {
            title: 'B2B Dashboard Design',
            description: 'Data-dense admin interfaces, analytics dashboards, and enterprise management tools.',
          },
          {
            title: 'Mobile UI Design',
            description: 'iOS and Android design following platform guidelines and accessibility standards.',
          },
        ],
        meta: {
          title: 'UI/UX Design Services — Trident Software Switzerland',
          description:
            'Product design, design systems, B2B dashboards, mobile UI. Figma-based workflow. Swiss design studio.',
        },
      },
      de: {
        title: 'UI/UX-Design',
        tagline: 'Oberflächen, die überzeugen und Freude machen',
        description:
          'Produktdesign von Wireframes bis zu produktionsreifen UI-Systemen. Wir gestalten B2B-Dashboards für Unternehmen, E-Commerce und mobile Apps für Endkunden.',
        features: [
          {
            title: 'UX-Research & Audit',
            description: 'Nutzerinterviews, Usability-Tests und heuristische Bewertung bestehender Produkte.',
          },
          {
            title: 'Informationsarchitektur',
            description: 'Sitemaps, User Flows und eine Navigation, die Nutzer gedanklich entlastet.',
          },
          {
            title: 'Wireframes & Prototypen',
            description: 'Low- und High-Fidelity-Prototypen in Figma, um Ideen vor der Entwicklung zu validieren.',
          },
          {
            title: 'Aufbau von Designsystemen',
            description:
              'Skalierbare Komponentenbibliotheken mit Tokens, Varianten und Dokumentation für Entwicklungsteams.',
          },
          {
            title: 'Design von B2B-Dashboards',
            description: 'Datenreiche Admin-Oberflächen, Analyse-Dashboards und Verwaltungstools für Unternehmen.',
          },
          {
            title: 'Mobile UI-Design',
            description:
              'Design für iOS und Android nach den Plattform-Richtlinien und Standards der Barrierefreiheit.',
          },
        ],
        meta: {
          title: 'UI/UX-Design Agentur Schweiz | Trident Software',
          description:
            'Produktdesign, Designsysteme, B2B-Dashboards, mobile UI. Arbeitsweise in Figma. Designstudio aus der Schweiz.',
        },
      },
      fr: {
        title: 'Design UI/UX',
        tagline: "Des interfaces qui convertissent et qu'on aime utiliser",
        description:
          "Design produit, des wireframes jusqu'aux systèmes d'interface prêts pour la production. Nous concevons des tableaux de bord B2B pour les entreprises, des sites e-commerce et des applications mobiles grand public.",
        features: [
          {
            title: 'Recherche et audit UX',
            description:
              "Entretiens utilisateurs, tests d'utilisabilité et évaluation heuristique de produits existants.",
          },
          {
            title: "Architecture de l'information",
            description: "Plans de site, parcours utilisateurs et navigation pensés pour réduire l'effort mental.",
          },
          {
            title: 'Wireframes et prototypes',
            description:
              'Prototypes basse et haute fidélité dans Figma, pour valider les choix avant le développement.',
          },
          {
            title: 'Création de design systems',
            description:
              'Bibliothèques de composants évolutives, avec tokens, variantes et documentation pour les équipes de développement.',
          },
          {
            title: 'Design de tableaux de bord B2B',
            description:
              "Interfaces d'administration riches en données, tableaux de bord analytiques et outils de gestion pour les entreprises.",
          },
          {
            title: "Design d'interfaces mobiles",
            description:
              "Design iOS et Android conforme aux recommandations de chaque plateforme et aux normes d'accessibilité.",
          },
        ],
        meta: {
          title: 'Agence de design UI/UX en Suisse | Trident Software',
          description:
            'Design produit, design systems, tableaux de bord B2B, UI mobile. Méthode de travail basée sur Figma. Studio de design suisse.',
        },
      },
      it: {
        title: 'Design UI/UX',
        tagline: 'Interfacce che convertono e piacciono',
        description:
          'Product design dai wireframe ai sistemi UI pronti per la produzione. Progettiamo dashboard B2B per le aziende, e-commerce e app mobili per il grande pubblico.',
        features: [
          {
            title: 'Ricerca e audit UX',
            description: 'Interviste agli utenti, test di usabilità e valutazione euristica di prodotti esistenti.',
          },
          {
            title: "Architettura dell'informazione",
            description: 'Mappe del sito, flussi utente e una navigazione che riduce lo sforzo mentale.',
          },
          {
            title: 'Wireframe e prototipi',
            description: 'Prototipi a bassa e alta fedeltà in Figma, per validare le scelte prima dello sviluppo.',
          },
          {
            title: 'Creazione di design system',
            description:
              'Librerie di componenti scalabili con token, varianti e documentazione per i team di sviluppo.',
          },
          {
            title: 'Design di dashboard B2B',
            description:
              'Interfacce di amministrazione ricche di dati, dashboard analitiche e strumenti gestionali per le aziende.',
          },
          {
            title: 'Design di interfacce mobili',
            description:
              'Design per iOS e Android secondo le linee guida delle piattaforme e gli standard di accessibilità.',
          },
        ],
        meta: {
          title: 'Agenzia di design UI/UX in Svizzera | Trident Software',
          description:
            'Product design, design system, dashboard B2B, UI mobile. Flusso di lavoro basato su Figma. Studio di design svizzero.',
        },
      },
    },
  },
  {
    slug: 'team-extension',
    icon: 'users',
    techStack: ['TypeScript', 'Python', 'React', 'Flutter', 'DevOps', 'ML/AI'],
    relatedCases: [],
    content: {
      en: {
        title: 'Team Extension',
        tagline: 'Senior engineers, embedded in your team',
        description:
          'Augment your in-house team with senior engineers from our CH+IL+UA talent pool. Full-time or part-time, short-term or long-term — with Swiss accountability.',
        features: [
          {
            title: 'Senior Engineer Placement',
            description: 'Backend, frontend, mobile, DevOps, and ML engineers with 5+ years of commercial experience.',
          },
          {
            title: 'Flexible Engagement',
            description: 'Part-time (20h/week), full-time (40h/week), or project-based engagements.',
          },
          {
            title: 'Swiss Contract & Accountability',
            description: 'All engagements are under Swiss law with NDA, IP transfer, and performance metrics.',
          },
          {
            title: 'Rapid Onboarding',
            description: 'Engineers ready in 1–2 weeks. We handle vetting, onboarding, and performance management.',
          },
          {
            title: 'Time Zone Coverage',
            description: 'CH+IL+UA team spans CET+1 to CET+2, providing near-seamless overlap with European teams.',
          },
          {
            title: 'Knowledge Transfer',
            description: 'Documentation, code reviews, and handover processes built into every engagement.',
          },
        ],
        meta: {
          title: 'Team Extension Services — Trident Software Switzerland',
          description:
            'Senior software engineers for team augmentation. Swiss contract, CET timezone, 1–2 week start. Backend, frontend, DevOps, ML.',
        },
      },
      de: {
        title: 'Team-Erweiterung',
        tagline: 'Erfahrene Entwickler, direkt in Ihrem Team',
        description:
          'Verstärken Sie Ihr internes Team mit Senior-Entwicklern aus unserem Talentpool in CH, IL und UA. Vollzeit oder Teilzeit, kurz- oder langfristig, mit Verantwortung nach Schweizer Massstab.',
        features: [
          {
            title: 'Vermittlung von Senior-Entwicklern',
            description:
              'Backend-, Frontend-, Mobile-, DevOps- und ML-Entwickler mit mehr als 5 Jahren Berufserfahrung.',
          },
          {
            title: 'Flexible Einsatzmodelle',
            description: 'Teilzeit (20 Std./Woche), Vollzeit (40 Std./Woche) oder projektbasiert.',
          },
          {
            title: 'Schweizer Vertrag & klare Verantwortung',
            description:
              'Alle Einsätze unterstehen Schweizer Recht, mit NDA, Übertragung der Rechte am geistigen Eigentum und Leistungskennzahlen.',
          },
          {
            title: 'Schneller Einstieg',
            description:
              'Entwickler sind innert 1–2 Wochen einsatzbereit. Auswahl, Einarbeitung und Leistungssteuerung übernehmen wir.',
          },
          {
            title: 'Abdeckung der Zeitzonen',
            description:
              'Das Team in CH, IL und UA deckt MEZ+1 bis MEZ+2 ab und überschneidet sich damit fast vollständig mit europäischen Teams.',
          },
          {
            title: 'Wissenstransfer',
            description: 'Dokumentation, Code-Reviews und geregelte Übergaben gehören zu jedem Einsatz.',
          },
        ],
        meta: {
          title: 'Team-Erweiterung mit Senior-Entwicklern | Trident Software',
          description:
            'Senior-Softwareentwickler zur Verstärkung Ihres Teams. Schweizer Vertrag, MEZ-Zeitzone, Start innert 1–2 Wochen. Backend, Frontend, DevOps, ML.',
        },
      },
      fr: {
        title: "Renfort d'équipe",
        tagline: 'Des ingénieurs seniors intégrés à votre équipe',
        description:
          'Renforcez votre équipe interne avec des ingénieurs seniors issus de notre vivier de talents en Suisse, en Israël et en Ukraine. À plein temps ou à temps partiel, à court ou à long terme, avec un engagement de responsabilité suisse.',
        features: [
          {
            title: "Mise à disposition d'ingénieurs seniors",
            description:
              "Ingénieurs backend, frontend, mobile, DevOps et ML avec plus de 5 ans d'expérience professionnelle.",
          },
          {
            title: 'Formules flexibles',
            description: 'Temps partiel (20 h/semaine), temps plein (40 h/semaine) ou mission au projet.',
          },
          {
            title: 'Contrat suisse et responsabilité claire',
            description:
              'Toutes les missions relèvent du droit suisse, avec accord de confidentialité, cession de la propriété intellectuelle et indicateurs de performance.',
          },
          {
            title: 'Démarrage rapide',
            description:
              "Ingénieurs opérationnels en 1 à 2 semaines. Nous gérons la sélection, l'intégration et le suivi des performances.",
          },
          {
            title: 'Couverture des fuseaux horaires',
            description:
              "L'équipe CH+IL+UA couvre CET+1 à CET+2 et travaille ainsi presque aux mêmes heures que les équipes européennes.",
          },
          {
            title: 'Transfert de connaissances',
            description: 'Documentation, revues de code et processus de passation font partie de chaque mission.',
          },
        ],
        meta: {
          title: "Renfort d'équipe avec ingénieurs seniors | Trident Software",
          description:
            'Ingénieurs logiciels seniors pour renforcer votre équipe. Contrat suisse, fuseau CET, démarrage en 1 à 2 semaines. Backend, frontend, DevOps, ML.',
        },
      },
      it: {
        title: 'Estensione del team',
        tagline: 'Ingegneri senior, inseriti nel tuo team',
        description:
          'Rafforza il tuo team interno con ingegneri senior dal nostro bacino di talenti in Svizzera, Israele e Ucraina. A tempo pieno o parziale, per periodi brevi o lunghi, con responsabilità svizzera.',
        features: [
          {
            title: 'Inserimento di ingegneri senior',
            description:
              'Ingegneri backend, frontend, mobile, DevOps e ML con oltre 5 anni di esperienza professionale.',
          },
          {
            title: 'Collaborazione flessibile',
            description: 'Part-time (20 h/settimana), tempo pieno (40 h/settimana) o a progetto.',
          },
          {
            title: 'Contratto svizzero e responsabilità chiare',
            description:
              'Tutti gli incarichi sono regolati dal diritto svizzero, con NDA, cessione della proprietà intellettuale e indicatori di performance.',
          },
          {
            title: 'Inserimento rapido',
            description:
              'Ingegneri operativi in 1–2 settimane. Selezione, inserimento e gestione delle performance sono a carico nostro.',
          },
          {
            title: 'Copertura dei fusi orari',
            description:
              'Il team CH+IL+UA copre da CET+1 a CET+2 e lavora quindi quasi in contemporanea con i team europei.',
          },
          {
            title: 'Trasferimento di know-how',
            description:
              'Documentazione, code review e processi di passaggio di consegne fanno parte di ogni incarico.',
          },
        ],
        meta: {
          title: 'Estensione del team con ingegneri senior | Trident Software',
          description:
            'Ingegneri software senior per rafforzare il tuo team. Contratto svizzero, fuso CET, avvio in 1–2 settimane. Backend, frontend, DevOps, ML.',
        },
      },
    },
  },
]

const localize = (r: ServiceRecord, locale: string): ServiceData => {
  const { content, ...rest } = r
  return { ...rest, ...pick(content, locale) }
}

export function getServices(locale: string): ServiceData[] {
  return records.map((r) => localize(r, locale))
}

export function getServiceBySlug(slug: string, locale: string): ServiceData | undefined {
  const r = records.find((s) => s.slug === slug)
  return r && localize(r, locale)
}

export function getServiceSlugs(): string[] {
  return records.map((s) => s.slug)
}

export function getServiceLocales(slug: string) {
  const r = records.find((s) => s.slug === slug)
  return r ? localesOf(r.content) : []
}
