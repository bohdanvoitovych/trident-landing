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
    relatedCases: ['post-acute-clinic-network', 'clinic-voice-documentation', 'fiduciary-mail-and-receipts'],
    content: {
      en: {
        title: 'AI agents & LLM automation',
        tagline: 'Enquiry handling, document processing, recommendation, retrieval over corporate knowledge.',
        description:
          'Agents wired into your real systems, not chat widgets. We connect LLMs, RAG, OCR and speech-to-text to the processes you already run, with on-premise options for Swiss data residency.',
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
          title: 'AI agents & LLM automation | Trident Software',
          description:
            'Enquiry handling, document processing, recommendation, retrieval over corporate knowledge. Agents wired into real systems, not chat widgets.',
        },
      },
      de: {
        title: 'KI-Agenten & LLM-Automatisierung',
        tagline: 'Anfragenbearbeitung, Dokumentenverarbeitung, Empfehlungen, Suche im Firmenwissen.',
        description:
          'Agenten, die an Ihre echten Systeme angebunden sind, keine Chat-Widgets. Wir verbinden LLMs, RAG, OCR und Spracherkennung mit den Abläufen, die Sie heute schon haben, auf Wunsch on-premise, damit Ihre Daten in der Schweiz bleiben.',
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
          title: 'KI-Agenten & LLM-Automatisierung | Trident Software',
          description:
            'Anfragenbearbeitung, Dokumentenverarbeitung, Empfehlungen, Suche im Firmenwissen. Agenten, die an Ihre echten Systeme angebunden sind, keine Chat-Widgets.',
        },
      },
      fr: {
        title: 'Agents IA & automatisation LLM',
        tagline: "Traitement des demandes et des documents, recommandations, recherche dans le savoir de l'entreprise.",
        description:
          'Des agents branchés sur vos vrais systèmes, pas des widgets de chat. Nous relions LLM, RAG, OCR et reconnaissance vocale aux processus que vous utilisez déjà, avec des options on-premise pour garder vos données en Suisse.',
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
          title: 'Agents IA & automatisation LLM | Trident Software',
          description:
            "Traitement des demandes et des documents, recommandations, recherche dans le savoir de l'entreprise. Des agents branchés sur vos vrais systèmes.",
        },
      },
      it: {
        title: 'Agenti AI & automazione LLM',
        tagline: 'Gestione delle richieste, elaborazione documenti, raccomandazioni, ricerca nel sapere aziendale.',
        description:
          'Agenti collegati ai tuoi sistemi reali, non widget di chat. Colleghiamo LLM, RAG, OCR e riconoscimento vocale ai processi che usi già, con opzioni on-premise per tenere i dati in Svizzera.',
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
          title: 'Agenti AI & automazione LLM | Trident Software',
          description:
            'Gestione delle richieste, elaborazione documenti, raccomandazioni, ricerca nel sapere aziendale. Agenti collegati ai tuoi sistemi reali.',
        },
      },
    },
  },
  {
    slug: 'logistics-and-operations-platforms',
    icon: 'truck',
    techStack: ['Python', 'Django', 'PostgreSQL', 'React', 'Flutter', 'AWS'],
    relatedCases: ['building-materials-order-to-load', '8move-driver'],
    content: {
      en: {
        title: 'Logistics & operations platforms',
        tagline: 'Order intake, dispatch and planning, driver applications, tracking, automated billing.',
        description:
          '8Move, our own logistics platform, is in production with paying customers. Its product line (Fleet Planner, Driver Pro, Transfer, Back Office) is where an enquiry becomes a job, a route or a delivery.',
        features: [
          {
            title: 'Fleet Planner',
            description: 'Planning and dispatch, where confirmed orders become routes.',
          },
          {
            title: 'Driver Pro',
            description: 'The driver application, with proof of delivery.',
          },
          {
            title: 'Arrival times that update themselves',
            description: 'Customers get the ETA before they ask for it, recalculated when the day changes.',
          },
        ],
        meta: {
          title: 'Logistics & operations platforms | Trident Software',
          description:
            'Order intake, dispatch and planning, driver apps, tracking, automated billing, from the team behind 8Move, our own logistics platform.',
        },
      },
      de: {
        title: 'Logistik- & Betriebsplattformen',
        tagline: 'Auftragserfassung, Disposition und Planung, Fahrer-Apps, Tracking, automatisierte Fakturierung.',
        description:
          '8Move, unsere eigene Logistikplattform, ist mit zahlenden Kunden in Produktion. In ihrer Produktlinie (Fleet Planner, Driver Pro, Transfer, Back Office) wird aus einer Anfrage ein Auftrag, eine Route oder eine Lieferung.',
        features: [
          {
            title: 'Fleet Planner',
            description: 'Planung und Disposition: Hier werden bestätigte Aufträge zu Routen.',
          },
          {
            title: 'Driver Pro',
            description: 'Die App für Fahrerinnen und Fahrer, mit Liefernachweis.',
          },
          {
            title: 'Ankunftszeiten, die sich selbst aktualisieren',
            description: 'Kunden erhalten die Ankunftszeit, bevor sie danach fragen, und sie wird neu berechnet, wenn sich der Tag ändert.',
          },
        ],
        meta: {
          title: 'Logistik- & Betriebsplattformen | Trident Software',
          description:
            'Auftragserfassung, Disposition, Fahrer-Apps, Tracking, automatisierte Fakturierung, vom Team hinter 8Move, unserer eigenen Logistikplattform.',
        },
      },
      fr: {
        title: 'Plateformes logistiques & opérationnelles',
        tagline: 'Prise de commande, dispatch et planification, applications chauffeurs, suivi, facturation automatisée.',
        description:
          '8Move, notre propre plateforme logistique, est en production chez des clients payants. Sa gamme (Fleet Planner, Driver Pro, Transfer, Back Office) transforme une demande en mission, en tournée ou en livraison.',
        features: [
          {
            title: 'Fleet Planner',
            description: 'Planification et dispatch : les commandes confirmées deviennent des tournées.',
          },
          {
            title: 'Driver Pro',
            description: "L'application des chauffeurs, avec preuve de livraison.",
          },
          {
            title: "Des heures d'arrivée qui se mettent à jour",
            description: "Les clients reçoivent l'heure d'arrivée avant de la demander, recalculée quand la journée change.",
          },
        ],
        meta: {
          title: 'Plateformes logistiques & opérationnelles | Trident Software',
          description:
            "Prise de commande, dispatch, apps chauffeurs, suivi, facturation automatisée, par l'équipe derrière 8Move, notre propre plateforme logistique.",
        },
      },
      it: {
        title: 'Piattaforme logistiche e operative',
        tagline: 'Acquisizione ordini, dispatch e pianificazione, app per autisti, tracciamento, fatturazione automatica.',
        description:
          '8Move, la nostra piattaforma logistica, è in produzione con clienti paganti. La sua linea di prodotti (Fleet Planner, Driver Pro, Transfer, Back Office) trasforma una richiesta in un incarico, un percorso o una consegna.',
        features: [
          {
            title: 'Fleet Planner',
            description: 'Pianificazione e dispatch: gli ordini confermati diventano percorsi.',
          },
          {
            title: 'Driver Pro',
            description: "L'app per gli autisti, con prova di consegna.",
          },
          {
            title: 'Orari di arrivo che si aggiornano da soli',
            description: "I clienti ricevono l'orario di arrivo prima di chiederlo, ricalcolato quando la giornata cambia.",
          },
        ],
        meta: {
          title: 'Piattaforme logistiche e operative | Trident Software',
          description:
            'Acquisizione ordini, dispatch, app per autisti, tracciamento, fatturazione automatica, dal team che ha creato 8Move, la nostra piattaforma logistica.',
        },
      },
    },
  },
  {
    slug: 'software-engineering',
    icon: 'code-2',
    techStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Flutter', 'PostgreSQL', 'Redis', 'Docker'],
    relatedCases: ['zenit-auto-b2b'],
    content: {
      en: {
        title: 'Custom business systems',
        tagline: 'B2B portals, integrations with ERP and accounting, migrations off legacy stacks.',
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
          title: 'Custom business systems | Trident Software',
          description:
            'B2B portals, integrations with ERP and accounting, migrations off legacy stacks.',
        },
      },
      de: {
        title: 'Individuelle Geschäftssysteme',
        tagline: 'B2B-Portale, ERP- und Buchhaltungsintegrationen, Ablösung von Altsystemen.',
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
          title: 'Individuelle Geschäftssysteme | Trident Software',
          description:
            'B2B-Portale, ERP- und Buchhaltungsintegrationen, Ablösung von Altsystemen.',
        },
      },
      fr: {
        title: 'Systèmes de gestion sur mesure',
        tagline: 'Portails B2B, intégrations ERP et comptables, migration de systèmes existants.',
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
          title: 'Systèmes de gestion sur mesure | Trident Software',
          description:
            'Portails B2B, intégrations ERP et comptables, migration de systèmes existants.',
        },
      },
      it: {
        title: 'Sistemi gestionali su misura',
        tagline: 'Portali B2B, integrazioni ERP e contabili, migrazione di sistemi esistenti.',
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
          title: 'Sistemi gestionali su misura | Trident Software',
          description:
            'Portali B2B, integrazioni ERP e contabili, migrazione di sistemi esistenti.',
        },
      },
    },
  },
  {
    slug: 'embedded-and-iot',
    icon: 'cpu',
    techStack: ['C', 'C++', 'Python', 'STM32', 'ESP32', 'MQTT', 'InfluxDB', 'Grafana', 'AWS IoT'],
    relatedCases: ['warranty-control-component-maker', 'tdsbot-iot'],
    content: {
      en: {
        title: 'IoT & connected products',
        tagline: 'Firmware, cloud platform, rules engines, dealer and consumer applications for physical devices.',
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
          title: 'IoT & connected products | Trident Software',
          description:
            'Firmware, cloud platform, rules engines, dealer and consumer applications for physical devices.',
        },
      },
      de: {
        title: 'IoT & vernetzte Produkte',
        tagline: 'Firmware, Cloud-Plattform, Regel-Engines, Apps für Händler und Endkunden rund um physische Geräte.',
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
          title: 'IoT & vernetzte Produkte | Trident Software',
          description:
            'Firmware, Cloud-Plattform, Regel-Engines, Apps für Händler und Endkunden rund um physische Geräte.',
        },
      },
      fr: {
        title: 'IoT & produits connectés',
        tagline: 'Firmware, plateforme cloud, moteurs de règles, applications pour revendeurs et clients finaux autour de vos appareils.',
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
          title: 'IoT & produits connectés | Trident Software',
          description:
            'Firmware, plateforme cloud, moteurs de règles, applications pour revendeurs et clients finaux autour de vos appareils.',
        },
      },
      it: {
        title: 'IoT & prodotti connessi',
        tagline: 'Firmware, piattaforma cloud, motori di regole, app per rivenditori e consumatori attorno ai dispositivi fisici.',
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
          title: 'IoT & prodotti connessi | Trident Software',
          description:
            'Firmware, piattaforma cloud, motori di regole, app per rivenditori e consumatori attorno ai dispositivi fisici.',
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
        title: 'CTO as a Service',
        tagline: 'Fractional and interim technical leadership for companies without an in-house CTO.',
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
          title: 'CTO as a Service | Trident Software',
          description:
            'Fractional and interim technical leadership for companies without an in-house CTO.',
        },
      },
      de: {
        title: 'CTO as a Service',
        tagline: 'Technische Führung in Teilzeit oder interimistisch für Unternehmen ohne eigenen CTO.',
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
          title: 'CTO as a Service | Trident Software',
          description:
            'Technische Führung in Teilzeit oder interimistisch für Unternehmen ohne eigenen CTO.',
        },
      },
      fr: {
        title: 'CTO as a Service',
        tagline: 'Direction technique à temps partiel ou par intérim pour les entreprises sans CTO interne.',
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
          title: 'CTO as a Service | Trident Software',
          description:
            'Direction technique à temps partiel ou par intérim pour les entreprises sans CTO interne.',
        },
      },
      it: {
        title: 'CTO as a Service',
        tagline: 'Guida tecnica part-time o ad interim per aziende senza un CTO interno.',
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
          title: 'CTO as a Service | Trident Software',
          description:
            'Guida tecnica part-time o ad interim per aziende senza un CTO interno.',
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
