import { pick, localesOf, type Localized } from '@/lib/localized'

/** Text fields of a technology page, written once per locale. */
export type TechnologyText = {
  category: string
  tagline: string
  description: string
  useCases: { title: string; description: string }[]
  benefits: string[]
  meta: { title: string; description: string }
}

type TechnologyRecord = {
  slug: string
  name: string
  iconSlug?: string
  complementaryStack: string[]
  relatedServices: string[]
  relatedCases: string[]
  content: Localized<TechnologyText>
}

/** A technology with its text resolved to one locale. */
export type TechnologyData = Omit<TechnologyRecord, 'content'> & TechnologyText

const records: TechnologyRecord[] = [
  {
    slug: 'nextjs',
    name: 'Next.js',
    iconSlug: 'nextdotjs',
    complementaryStack: ['TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Payload CMS', 'Docker', 'Vercel / Coolify'],
    relatedServices: ['software-engineering', 'cto-as-a-service'],
    relatedCases: [],
    content: {
      en: {
        category: 'Frontend & full-stack',
        tagline: 'Production-grade web applications with Next.js for Swiss companies',
        description:
          'Next.js is our main framework for fast, SEO-optimised web applications that scale. We use the App Router with TypeScript for everything from corporate websites to complex B2B portals and SaaS platforms, and we have run hundreds of Next.js deployments.',
        useCases: [
          {
            title: 'B2B SaaS platforms',
            description:
              'Multi-tenant dashboards, admin panels, and API-backed web apps with server-side auth and real-time data.',
          },
          {
            title: 'Marketing & landing pages',
            description:
              'Landing pages that score 100 in Lighthouse, with ISR and CMS integration via Payload or Sanity.',
          },
          {
            title: 'E-commerce storefronts',
            description: 'Headless commerce frontends connected to Shopify, WooCommerce or custom product catalogues.',
          },
          {
            title: 'Customer portals',
            description:
              'Logged-in dashboards for your customers: order tracking, document management, account self-service.',
          },
        ],
        benefits: [
          'App Router with RSC reduces client JS by 60–80%',
          'Built-in image optimisation and font subsetting',
          'Incremental Static Regeneration for always-fresh content',
          'First-class TypeScript support',
          'Standalone Docker output for VPS and Kubernetes',
        ],
        meta: {
          title: 'Next.js Development Switzerland | Trident Software',
          description:
            'Next.js development for Swiss companies. App Router, TypeScript, Payload CMS, Docker. From marketing sites to complex B2B platforms. Valais-based team.',
        },
      },
      de: {
        category: 'Frontend & Full-Stack',
        tagline: 'Produktionsreife Webanwendungen mit Next.js für Schweizer Unternehmen',
        description:
          'Next.js ist unser wichtigstes Framework für schnelle, SEO-optimierte und skalierbare Webanwendungen. Wir setzen den Next.js App Router mit TypeScript ein, von der Firmenwebsite bis zum komplexen B2B-Portal und zur SaaS-Plattform. Schweizer Unternehmen profitieren von unserer Erfahrung aus Hunderten von Next.js-Deployments.',
        useCases: [
          {
            title: 'B2B-SaaS-Plattformen',
            description:
              'Mandantenfähige Dashboards, Admin-Bereiche und API-gestützte Web-Apps mit serverseitiger Authentifizierung und Echtzeitdaten.',
          },
          {
            title: 'Marketing- und Landingpages',
            description:
              'Extrem schnelle Landingpages mit Lighthouse-Score 100, ISR und CMS-Anbindung über Payload oder Sanity.',
          },
          {
            title: 'Onlineshop-Frontends',
            description:
              'Headless-Commerce-Frontends mit Anbindung an Shopify, WooCommerce oder eigene Produktkataloge.',
          },
          {
            title: 'Kundenportale',
            description:
              'Geschützte Dashboards für Endkunden: Bestellverfolgung, Dokumentenverwaltung, Self-Service fürs Kundenkonto.',
          },
        ],
        benefits: [
          'App Router mit RSC reduziert das Client-JavaScript um 60–80%',
          'Integrierte Bildoptimierung und Font-Subsetting',
          'Incremental Static Regeneration für stets aktuelle Inhalte',
          'Erstklassige TypeScript-Unterstützung',
          'Standalone-Docker-Build für VPS und Kubernetes',
        ],
        meta: {
          title: 'Next.js Entwicklung Schweiz | Trident Software',
          description:
            'Next.js-Entwicklung für Schweizer Unternehmen: App Router, TypeScript, Payload CMS, Docker. Von Marketing-Websites bis zu B2B-Plattformen. Team im Wallis.',
        },
      },
      fr: {
        category: 'Frontend & Full-Stack',
        tagline: 'Des applications web prêtes pour la production avec Next.js, pour les entreprises suisses',
        description:
          "Next.js est notre framework principal pour créer des applications web rapides, optimisées pour le SEO et évolutives. Nous utilisons l'App Router de Next.js avec TypeScript, du site d'entreprise au portail B2B complexe en passant par les plateformes SaaS. Les entreprises suisses profitent de notre expérience acquise sur des centaines de déploiements Next.js.",
        useCases: [
          {
            title: 'Plateformes SaaS B2B',
            description:
              "Tableaux de bord multi-clients, espaces d'administration et applications web adossées à des API, avec authentification côté serveur et données en temps réel.",
          },
          {
            title: 'Pages marketing et landing pages',
            description:
              'Des landing pages ultra-rapides avec un score Lighthouse de 100, ISR et intégration CMS via Payload ou Sanity.',
          },
          {
            title: 'Boutiques en ligne',
            description:
              'Frontends headless commerce connectés à Shopify, WooCommerce ou à vos propres catalogues produits.',
          },
          {
            title: 'Portails clients',
            description:
              'Espaces sécurisés pour vos clients finaux : suivi des commandes, gestion des documents, gestion autonome du compte.',
          },
        ],
        benefits: [
          "L'App Router avec RSC réduit le JavaScript côté client de 60 à 80 %",
          'Optimisation des images et subsetting des polices intégrés',
          'Incremental Static Regeneration pour un contenu toujours à jour',
          'Prise en charge native de TypeScript',
          'Build Docker standalone pour VPS et Kubernetes',
        ],
        meta: {
          title: 'Développement Next.js en Suisse | Trident Software',
          description:
            'Développement Next.js pour les entreprises suisses : App Router, TypeScript, Payload CMS, Docker. Du site marketing à la plateforme B2B. Équipe en Valais.',
        },
      },
      it: {
        category: 'Frontend & Full-Stack',
        tagline: 'Applicazioni web pronte per la produzione con Next.js per aziende svizzere',
        description:
          "Next.js è il nostro framework principale per applicazioni web veloci, ottimizzate per la SEO e scalabili. Usiamo l'App Router di Next.js con TypeScript per tutto, dal sito aziendale al portale B2B complesso fino alle piattaforme SaaS. Le aziende svizzere beneficiano della nostra esperienza maturata in centinaia di deployment Next.js.",
        useCases: [
          {
            title: 'Piattaforme SaaS B2B',
            description:
              'Dashboard multi-tenant, pannelli di amministrazione e web app basate su API, con autenticazione lato server e dati in tempo reale.',
          },
          {
            title: 'Pagine marketing e landing page',
            description:
              'Landing page velocissime con punteggio Lighthouse 100, ISR e integrazione CMS tramite Payload o Sanity.',
          },
          {
            title: 'Negozi online',
            description:
              'Frontend headless commerce collegati a Shopify, WooCommerce o a cataloghi prodotti su misura.',
          },
          {
            title: 'Portali clienti',
            description:
              "Aree riservate per i clienti finali: tracciamento degli ordini, gestione dei documenti, gestione autonoma dell'account.",
          },
        ],
        benefits: [
          "L'App Router con RSC riduce il JavaScript lato client del 60–80%",
          'Ottimizzazione delle immagini e subsetting dei font integrati',
          'Incremental Static Regeneration per contenuti sempre aggiornati',
          'Supporto TypeScript di prima classe',
          'Build Docker standalone per VPS e Kubernetes',
        ],
        meta: {
          title: 'Sviluppo Next.js in Svizzera | Trident Software',
          description:
            'Sviluppo Next.js per aziende svizzere: App Router, TypeScript, Payload CMS, Docker. Dai siti marketing alle piattaforme B2B complesse. Team in Vallese.',
        },
      },
    },
  },
  {
    slug: 'flutter',
    name: 'Flutter',
    iconSlug: 'flutter',
    complementaryStack: ['Dart', 'Riverpod / Bloc', 'Firebase', 'REST / GraphQL', 'SQLite (Drift)', 'Fastlane CI/CD'],
    relatedServices: ['software-engineering', 'embedded-and-iot', 'cto-as-a-service'],
    relatedCases: [],
    content: {
      en: {
        category: 'Mobile development',
        tagline: 'One codebase. iOS and Android. Built in Switzerland.',
        description:
          "Flutter lets us ship production-quality iOS and Android apps from a single Dart codebase, which halves development time and maintenance cost. We have used it for logistics driver apps, medical patient portals and B2B field service apps across Switzerland and Europe.",
        useCases: [
          {
            title: 'Field service & logistics apps',
            description:
              'Driver apps, delivery confirmation, route optimisation, and offline-capable workflows for mobile workers.',
          },
          {
            title: 'B2B mobile portals',
            description:
              'Client-facing apps for order management, reporting, and real-time inventory visibility for Swiss wholesalers.',
          },
          {
            title: 'Medical & health apps',
            description: 'Patient-facing apps with secure data sync, appointment booking, and HL7 FHIR integration.',
          },
          {
            title: 'Internal enterprise tools',
            description:
              'Mobile-first inspection checklists, audit tools, and warehouse scanning apps for operational teams.',
          },
        ],
        benefits: [
          'One codebase, half the maintenance cost',
          'Near-native performance via Skia/Impeller rendering',
          'Dart strong typing: fewer runtime crashes',
          'Hot reload makes iteration 3x faster',
          'Works offline with local SQLite + sync on reconnect',
        ],
        meta: {
          title: 'Flutter App Development Switzerland | iOS & Android | Trident Software',
          description:
            'Flutter mobile app development for Swiss companies. Single codebase, iOS + Android, offline-capable. Logistics, medical, B2B apps. Swiss development team.',
        },
      },
      de: {
        category: 'Mobile-Entwicklung',
        tagline: 'Eine Codebasis. iOS und Android. Entwickelt in der Schweiz.',
        description:
          'Mit Flutter liefern wir iOS- und Android-Apps in Produktionsqualität aus einer einzigen Dart-Codebasis. Das halbiert Entwicklungszeit und Wartungskosten. Wir haben Flutter für Fahrer-Apps in der Logistik, medizinische Patientenportale und B2B-Aussendienst-Apps in der Schweiz und in Europa eingesetzt.',
        useCases: [
          {
            title: 'Apps für Aussendienst und Logistik',
            description:
              'Fahrer-Apps, Zustellbestätigung, Routenoptimierung und offlinefähige Abläufe für mobile Mitarbeitende.',
          },
          {
            title: 'Mobile B2B-Portale',
            description:
              'Kunden-Apps für Bestellverwaltung, Reporting und Lagerbestände in Echtzeit für Schweizer Grosshändler.',
          },
          {
            title: 'Medizin- und Gesundheits-Apps',
            description:
              'Apps für Patientinnen und Patienten mit sicherer Datensynchronisation, Terminbuchung und HL7-FHIR-Anbindung.',
          },
          {
            title: 'Interne Unternehmens-Tools',
            description: 'Mobile Inspektions-Checklisten, Audit-Tools und Lager-Scanner-Apps für operative Teams.',
          },
        ],
        benefits: [
          'Eine Codebasis = halbe Wartungskosten',
          'Nahezu native Performance dank Skia/Impeller-Rendering',
          'Strenge Typisierung mit Dart, weniger Abstürze zur Laufzeit',
          'Hot Reload beschleunigt Iterationen um das Dreifache',
          'Funktioniert offline mit lokalem SQLite und Sync bei Verbindung',
        ],
        meta: {
          title: 'Flutter App-Entwicklung Schweiz | iOS & Android | Trident Software',
          description:
            'Flutter-App-Entwicklung für Schweizer Unternehmen. Eine Codebasis für iOS und Android, offlinefähig. Apps für Logistik, Medizin und B2B. Team in der Schweiz.',
        },
      },
      fr: {
        category: 'Développement mobile',
        tagline: 'Un seul code. iOS et Android. Conçu en Suisse.',
        description:
          "Flutter nous permet de livrer des applications iOS et Android de qualité production à partir d'un seul code Dart. Le temps de développement et les coûts de maintenance sont divisés par deux. Nous avons utilisé Flutter pour des applications de chauffeurs en logistique, des portails patients et des applications B2B d'intervention terrain en Suisse et en Europe.",
        useCases: [
          {
            title: 'Applications terrain et logistique',
            description:
              'Applications pour chauffeurs, confirmation de livraison, optimisation des tournées et processus utilisables hors ligne pour les équipes mobiles.',
          },
          {
            title: 'Portails mobiles B2B',
            description:
              'Applications clients pour la gestion des commandes, le reporting et la visibilité des stocks en temps réel, pour les grossistes suisses.',
          },
          {
            title: 'Applications médicales et de santé',
            description:
              'Applications pour les patients avec synchronisation sécurisée des données, prise de rendez-vous et intégration HL7 FHIR.',
          },
          {
            title: "Outils internes d'entreprise",
            description:
              "Check-lists d'inspection, outils d'audit et applications de scan en entrepôt, pensés d'abord pour le mobile et destinés aux équipes opérationnelles.",
          },
        ],
        benefits: [
          'Un seul code = deux fois moins de maintenance',
          'Performances quasi natives grâce au rendu Skia/Impeller',
          "Typage strict avec Dart, moins de plantages à l'exécution",
          'Le hot reload accélère les itérations par trois',
          'Fonctionne hors ligne avec SQLite local et synchronisation au retour du réseau',
        ],
        meta: {
          title: "Développement d'apps Flutter en Suisse | iOS & Android | Trident Software",
          description:
            "Développement d'applications mobiles Flutter pour les entreprises suisses. Un seul code pour iOS et Android, mode hors ligne. Logistique, médical, B2B.",
        },
      },
      it: {
        category: 'Sviluppo mobile',
        tagline: 'Un solo codice. iOS e Android. Sviluppato in Svizzera.',
        description:
          'Con Flutter rilasciamo app iOS e Android di qualità produttiva da un unico codice Dart, dimezzando tempi di sviluppo e costi di manutenzione. Abbiamo usato Flutter per app per autisti nella logistica, portali medici per pazienti e app B2B per il servizio esterno in Svizzera e in Europa.',
        useCases: [
          {
            title: 'App per servizio esterno e logistica',
            description:
              'App per autisti, conferma di consegna, ottimizzazione dei percorsi e flussi utilizzabili offline per il personale in mobilità.',
          },
          {
            title: 'Portali mobili B2B',
            description:
              'App per i clienti dei grossisti svizzeri: gestione degli ordini, reportistica e visibilità sulle scorte in tempo reale.',
          },
          {
            title: 'App mediche e per la salute',
            description:
              'App per i pazienti con sincronizzazione sicura dei dati, prenotazione di appuntamenti e integrazione HL7 FHIR.',
          },
          {
            title: 'Strumenti aziendali interni',
            description:
              'Checklist di ispezione, strumenti di audit e app di scansione per il magazzino, pensati per il mobile e per i team operativi.',
          },
        ],
        benefits: [
          'Un solo codice = metà dei costi di manutenzione',
          'Prestazioni quasi native grazie al rendering Skia/Impeller',
          'Tipizzazione forte con Dart, meno crash in esecuzione',
          "L'hot reload rende le iterazioni 3 volte più rapide",
          'Funziona offline con SQLite locale e sincronizza alla riconnessione',
        ],
        meta: {
          title: 'Sviluppo app Flutter in Svizzera | iOS & Android | Trident Software',
          description:
            'Sviluppo di app mobili Flutter per aziende svizzere. Un solo codice per iOS e Android, funziona offline. App per logistica, sanità e B2B. Team svizzero.',
        },
      },
    },
  },
  {
    slug: 'typescript',
    name: 'TypeScript',
    iconSlug: 'typescript',
    complementaryStack: ['Node.js', 'Next.js', 'Zod', 'Prisma / Drizzle', 'ESLint + strict tsconfig', 'Vitest'],
    relatedServices: ['software-engineering', 'cto-as-a-service'],
    relatedCases: [],
    content: {
      en: {
        category: 'Language & full-stack',
        tagline: 'Type-safe full-stack JavaScript for reliable Swiss software',
        description:
          'TypeScript is our default language across the stack: Node.js APIs, Next.js frontends, React components and Payload CMS configuration. Type checks remove whole classes of runtime errors, cut debugging time and make the code easier to read. Every Trident project ships with strict TypeScript and no "any" types.',
        useCases: [
          {
            title: 'Full-stack type sharing',
            description:
              'Shared types between frontend and backend stop API contract drift, the #1 source of frontend bugs in distributed teams.',
          },
          {
            title: 'Complex domain modelling',
            description:
              'Discriminated unions, template literal types, and conditional types for modelling complex business logic with compiler guarantees.',
          },
          {
            title: 'API design',
            description:
              'Zod-validated request/response schemas with auto-generated OpenAPI documentation for your API consumers.',
          },
          {
            title: 'Refactoring at scale',
            description:
              "TypeScript's LSP makes large refactors safe: rename a type and update all 200 usages in seconds, not days.",
          },
        ],
        benefits: [
          'Catches 15–30% of bugs at compile time (Microsoft research)',
          'IDE autocomplete reduces lookup time',
          'Self-documenting code reduces onboarding time',
          'Strict null checks eliminate null-pointer exceptions',
          'Zero runtime overhead: compiles to plain JS',
        ],
        meta: {
          title: 'TypeScript Development Switzerland | Trident Software',
          description:
            'Full-stack TypeScript development for Swiss companies. Strict typing, shared types, Zod validation. Node.js, Next.js, Payload. Zero any policy.',
        },
      },
      de: {
        category: 'Sprache & Full-Stack',
        tagline: 'Typsicheres Full-Stack-JavaScript für zuverlässige Software aus der Schweiz',
        description:
          'TypeScript ist unsere Standardsprache im gesamten Stack: Node.js-APIs, Next.js-Frontends, React-Komponenten und Payload-CMS-Konfiguration. Typsicherheit beseitigt ganze Kategorien von Laufzeitfehlern, verkürzt die Fehlersuche und macht den Code selbsterklärend. Jedes Trident-Projekt läuft mit strengem TypeScript und ohne ein einziges any.',
        useCases: [
          {
            title: 'Gemeinsame Typen im ganzen Stack',
            description:
              'Gemeinsame Typen für Frontend und Backend verhindern, dass der API-Vertrag auseinanderläuft. Das ist die häufigste Ursache für Frontend-Bugs in verteilten Teams.',
          },
          {
            title: 'Komplexe Fachmodelle',
            description:
              'Discriminated Unions, Template-Literal-Typen und Conditional Types bilden komplexe Geschäftslogik ab, abgesichert durch den Compiler.',
          },
          {
            title: 'API-Design',
            description:
              'Mit Zod validierte Request- und Response-Schemas samt automatisch generierter OpenAPI-Dokumentation für alle, die Ihre API nutzen.',
          },
          {
            title: 'Refactoring im grossen Stil',
            description:
              'Der TypeScript-LSP macht Umbauten in grossen Codebasen sicher: Typ umbenennen und alle 200 Verwendungen in Sekunden statt Tagen anpassen.',
          },
        ],
        benefits: [
          'Findet 15–30% der Bugs schon beim Kompilieren (Microsoft-Studie)',
          'IDE-Autovervollständigung spart Nachschlagezeit',
          'Selbsterklärender Code verkürzt die Einarbeitung',
          'Strikte Null-Checks verhindern Null-Pointer-Fehler',
          'Kein Laufzeit-Overhead, kompiliert zu reinem JS',
        ],
        meta: {
          title: 'TypeScript Entwicklung Schweiz | Trident Software',
          description:
            'Full-Stack-Entwicklung mit TypeScript für Schweizer Unternehmen. Strenge Typisierung, gemeinsame Typen, Zod-Validierung. Node.js, Next.js, Payload. Kein any.',
        },
      },
      fr: {
        category: 'Langage & Full-Stack',
        tagline: 'Du JavaScript full-stack typé pour des logiciels suisses fiables',
        description:
          "TypeScript est notre langage par défaut sur toute la stack : API Node.js, frontends Next.js, composants React et configuration de Payload CMS. Le typage élimine des catégories entières d'erreurs à l'exécution, réduit le temps de débogage et rend le code auto-documenté. Chaque projet Trident est livré en TypeScript strict, sans aucun any.",
        useCases: [
          {
            title: 'Types partagés sur toute la stack',
            description:
              "Des types communs au frontend et au backend évitent que le contrat d'API ne dérive. C'est la première source de bugs frontend dans les équipes distribuées.",
          },
          {
            title: 'Modélisation métier complexe',
            description:
              'Unions discriminées, template literal types et types conditionnels pour modéliser une logique métier complexe, avec les garanties du compilateur.',
          },
          {
            title: "Conception d'API",
            description:
              'Schémas de requête et de réponse validés par Zod, avec documentation OpenAPI générée automatiquement pour les utilisateurs de votre API.',
          },
          {
            title: 'Refactoring à grande échelle',
            description:
              'Le LSP de TypeScript sécurise les refontes de grandes bases de code : renommez un type et corrigez ses 200 occurrences en quelques secondes, pas en quelques jours.',
          },
        ],
        benefits: [
          'Détecte 15 à 30 % des bugs dès la compilation (étude Microsoft)',
          "L'autocomplétion de l'IDE évite les recherches",
          "Un code auto-documenté raccourcit l'intégration des nouveaux développeurs",
          'Les contrôles stricts de null éliminent les erreurs de pointeur nul',
          "Aucun surcoût à l'exécution, compile en JS standard",
        ],
        meta: {
          title: 'Développement TypeScript en Suisse | Trident Software',
          description:
            'Développement full-stack TypeScript pour les entreprises suisses. Typage strict, types partagés, validation Zod. Node.js, Next.js, Payload. Zéro any.',
        },
      },
      it: {
        category: 'Linguaggio & Full-Stack',
        tagline: 'JavaScript full-stack tipizzato per software svizzero affidabile',
        description:
          'TypeScript è il nostro linguaggio predefinito su tutto lo stack: API Node.js, frontend Next.js, componenti React e configurazione di Payload CMS. La tipizzazione elimina intere categorie di errori in esecuzione, riduce il tempo di debug e rende il codice autoesplicativo. Ogni progetto Trident usa TypeScript in modalità strict, senza un solo any.',
        useCases: [
          {
            title: 'Tipi condivisi su tutto lo stack',
            description:
              'Tipi comuni a frontend e backend evitano che il contratto delle API si disallinei, la prima causa di bug frontend nei team distribuiti.',
          },
          {
            title: 'Modellazione di domini complessi',
            description:
              'Discriminated union, template literal type e tipi condizionali per modellare logiche di business complesse con le garanzie del compilatore.',
          },
          {
            title: 'Progettazione di API',
            description:
              'Schemi di richiesta e risposta validati con Zod e documentazione OpenAPI generata automaticamente per chi usa la tua API.',
          },
          {
            title: 'Refactoring su larga scala',
            description:
              'Il LSP di TypeScript rende sicuri i refactoring di grandi codebase: rinomini un tipo e correggi tutti i 200 utilizzi in pochi secondi, non in giorni.',
          },
        ],
        benefits: [
          'Intercetta il 15–30% dei bug già in compilazione (studio Microsoft)',
          "L'autocompletamento dell'IDE riduce le ricerche",
          "Il codice autoesplicativo accorcia l'inserimento dei nuovi sviluppatori",
          'I controlli strict sui null eliminano gli errori di puntatore nullo',
          'Nessun overhead in esecuzione, compila in JS puro',
        ],
        meta: {
          title: 'Sviluppo TypeScript in Svizzera | Trident Software',
          description:
            'Sviluppo full-stack in TypeScript per aziende svizzere. Tipizzazione strict, tipi condivisi, validazione Zod. Node.js, Next.js, Payload. Zero any.',
        },
      },
    },
  },
  {
    slug: 'python',
    name: 'Python',
    iconSlug: 'python',
    complementaryStack: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Celery', 'PyTorch / HuggingFace'],
    relatedServices: ['ai-services', 'software-engineering'],
    relatedCases: ['post-acute-clinic-network'],
    content: {
      en: {
        category: 'AI, ML & Backend',
        tagline: 'AI pipelines, data engineering, and automation built in Python',
        description:
          'Python is our language of choice for AI/ML workloads, data pipelines and automation scripts. From LLM document processing and computer vision models to ETL pipelines and predictive analytics, we build Python backends that go from prototype to production without a rewrite.',
        useCases: [
          {
            title: 'LLM integration & RAG',
            description:
              'LangChain / LlamaIndex pipelines with OpenAI, Anthropic, or on-premise Llama for document Q&A, summarisation, and AI agents.',
          },
          {
            title: 'Computer vision',
            description:
              'YOLO-based object detection, OCR, and image classification for quality control, document digitisation, and medical imaging.',
          },
          {
            title: 'Data engineering',
            description:
              'ETL pipelines with Airflow or Prefect, data warehouse integration (BigQuery, Snowflake, DuckDB), and business intelligence feeds.',
          },
          {
            title: 'Process automation',
            description:
              'Scripts for web scraping, document generation, email and API orchestration that replace manual back-office work.',
          },
        ],
        benefits: [
          'Fastest prototyping speed of any language',
          'Richest ML/AI ecosystem (PyTorch, transformers, scikit-learn)',
          'FastAPI gives Go-like performance for Python APIs',
          'Notebooks show clients how the model works',
          'Large talent pool, easy to hand off to your team',
        ],
        meta: {
          title: 'Python Development Switzerland | AI & ML Engineering | Trident Software',
          description:
            'Python development for AI, ML, and data engineering in Switzerland. LLM integration, computer vision, FastAPI backends. On-premise and cloud deployment.',
        },
      },
      de: {
        category: 'KI, ML & Backend',
        tagline: 'KI-Pipelines, Data Engineering und Automatisierung mit Python',
        description:
          'Python ist unsere Sprache für KI- und ML-Anwendungen, Datenpipelines und Automatisierungsskripte. Ob LLM-gestützte Dokumentenverarbeitung, Computer-Vision-Modelle, ETL-Pipelines oder Predictive Analytics: Wir bauen Python-Backends, die vom Prototyp bis zur Produktion wachsen, ohne neu geschrieben zu werden.',
        useCases: [
          {
            title: 'LLM-Integration & RAG',
            description:
              'LangChain- und LlamaIndex-Pipelines mit OpenAI, Anthropic oder lokal betriebenem Llama für Fragen an Dokumente, Zusammenfassungen und KI-Agenten.',
          },
          {
            title: 'Computer Vision',
            description:
              'Objekterkennung mit YOLO, OCR und Bildklassifikation für Qualitätskontrolle, Digitalisierung von Dokumenten und medizinische Bildgebung.',
          },
          {
            title: 'Data Engineering',
            description:
              'ETL-Pipelines mit Airflow oder Prefect, Anbindung an Data Warehouses (BigQuery, Snowflake, DuckDB) und Datenfeeds für Business Intelligence.',
          },
          {
            title: 'Prozessautomatisierung',
            description:
              'Web-Scraping, Dokumentenerstellung, E-Mail-Automatisierung und API-Orchestrierung ersetzen manuelle Arbeit im Backoffice.',
          },
        ],
        benefits: [
          'Schnellstes Prototyping aller Programmiersprachen',
          'Reichstes ML/KI-Ökosystem (PyTorch, transformers, scikit-learn)',
          'FastAPI bringt Python-APIs auf Go-ähnliche Performance',
          'Notebooks machen Modelle für Kunden nachvollziehbar',
          'Riesiger Fachkräftepool, einfache Übergabe an Ihr internes Team',
        ],
        meta: {
          title: 'Python Entwicklung Schweiz | KI & ML | Trident Software',
          description:
            'Python-Entwicklung für KI, ML und Data Engineering in der Schweiz. LLM-Integration, Computer Vision, FastAPI-Backends. Betrieb On-Premise oder in der Cloud.',
        },
      },
      fr: {
        category: 'IA, ML & Backend',
        tagline: "Pipelines d'IA, data engineering et automatisation en Python",
        description:
          "Python est notre langage de prédilection pour l'IA et le machine learning, les pipelines de données et les scripts d'automatisation. Traitement de documents par LLM, modèles de vision par ordinateur, pipelines ETL ou analyse prédictive : nous construisons des backends Python qui passent du prototype à la production sans réécriture.",
        useCases: [
          {
            title: 'Intégration de LLM et RAG',
            description:
              'Pipelines LangChain / LlamaIndex avec OpenAI, Anthropic ou Llama sur site pour interroger des documents, produire des résumés et créer des agents IA.',
          },
          {
            title: 'Vision par ordinateur',
            description:
              "Détection d'objets avec YOLO, OCR et classification d'images pour le contrôle qualité, la numérisation de documents et l'imagerie médicale.",
          },
          {
            title: 'Data engineering',
            description:
              'Pipelines ETL avec Airflow ou Prefect, intégration aux entrepôts de données (BigQuery, Snowflake, DuckDB) et flux pour la business intelligence.',
          },
          {
            title: 'Automatisation des processus',
            description:
              "Web scraping, génération de documents, automatisation des e-mails et orchestration d'API pour remplacer le travail manuel du back-office.",
          },
        ],
        benefits: [
          'Le prototypage le plus rapide de tous les langages',
          "L'écosystème ML/IA le plus riche (PyTorch, transformers, scikit-learn)",
          'FastAPI offre aux API Python des performances proches de Go',
          'Des notebooks pour rendre les modèles transparents pour le client',
          'Un vivier de talents immense, transmission facile à votre équipe interne',
        ],
        meta: {
          title: 'Développement Python en Suisse | IA & ML | Trident Software',
          description:
            "Développement Python pour l'IA, le ML et le data engineering en Suisse. Intégration de LLM, vision par ordinateur, backends FastAPI. Sur site ou dans le cloud.",
        },
      },
      it: {
        category: 'IA, ML & Backend',
        tagline: 'Pipeline di IA, data engineering e automazione in Python',
        description:
          "Python è il nostro linguaggio d'elezione per IA e machine learning, pipeline di dati e script di automazione. Dall'elaborazione di documenti con LLM ai modelli di computer vision, dalle pipeline ETL all'analisi predittiva: costruiamo backend Python che passano dal prototipo alla produzione senza essere riscritti.",
        useCases: [
          {
            title: 'Integrazione LLM e RAG',
            description:
              'Pipeline LangChain / LlamaIndex con OpenAI, Anthropic o Llama on-premise per domande sui documenti, riassunti e agenti IA.',
          },
          {
            title: 'Computer vision',
            description:
              'Rilevamento di oggetti con YOLO, OCR e classificazione di immagini per controllo qualità, digitalizzazione di documenti e imaging medico.',
          },
          {
            title: 'Data engineering',
            description:
              'Pipeline ETL con Airflow o Prefect, integrazione con data warehouse (BigQuery, Snowflake, DuckDB) e flussi di dati per la business intelligence.',
          },
          {
            title: 'Automazione dei processi',
            description:
              'Web scraping, generazione di documenti, automazione delle e-mail e orchestrazione di API al posto del lavoro manuale in back office.',
          },
        ],
        benefits: [
          'La prototipazione più rapida tra tutti i linguaggi',
          "L'ecosistema ML/IA più ricco (PyTorch, transformers, scikit-learn)",
          'FastAPI porta le API Python a prestazioni simili a Go',
          'Notebook per rendere i modelli trasparenti ai clienti',
          'Enorme bacino di talenti, facile passaggio al tuo team interno',
        ],
        meta: {
          title: 'Sviluppo Python in Svizzera | IA & ML | Trident Software',
          description:
            'Sviluppo Python per IA, ML e data engineering in Svizzera. Integrazione LLM, computer vision, backend FastAPI. Deployment on-premise e in cloud.',
        },
      },
    },
  },
  {
    slug: 'react',
    name: 'React',
    iconSlug: 'react',
    complementaryStack: ['TypeScript', 'Tailwind CSS', 'Radix UI', 'React Query / SWR', 'Zustand / Jotai', 'Storybook'],
    relatedServices: ['software-engineering'],
    relatedCases: [],
    content: {
      en: {
        category: 'Frontend',
        tagline: 'Component-based UIs that users actually enjoy',
        description:
          'React is the base of our frontend stack, inside Next.js, as a standalone SPA or embedded in a legacy application. We build component libraries, design systems and fast UIs for Swiss companies that need interfaces their customers come back to.',
        useCases: [
          {
            title: 'Complex dashboards',
            description:
              'Real-time data visualisation, interactive charts, and filterable data tables for analytics and operational dashboards.',
          },
          {
            title: 'Form-heavy workflows',
            description:
              'Multi-step wizards, conditional field logic, and validation-heavy forms for insurance, finance, and compliance workflows.',
          },
          {
            title: 'Design system implementation',
            description:
              'Token-based component libraries in Radix UI or shadcn/ui that match your brand and scale across multiple products.',
          },
          {
            title: 'Progressive enhancement',
            description:
              'React components inside existing server-rendered apps: modernise without a full rewrite.',
          },
        ],
        benefits: [
          'Component reuse reduces UI dev time by 40%+',
          'React DevTools make debugging visual',
          'Server Components eliminate unnecessary client JS',
          '2M+ packages cover almost any use case',
          'Stable API, little framework churn',
        ],
        meta: {
          title: 'React Development Switzerland | UI Engineering | Trident Software',
          description:
            'React UI development for Swiss companies. Dashboards, design systems, SPAs, and component libraries. TypeScript, Radix UI, Tailwind. Swiss dev team.',
        },
      },
      de: {
        category: 'Frontend',
        tagline: 'Komponentenbasierte Oberflächen, die Nutzer gerne verwenden',
        description:
          'React ist die Grundlage unseres Frontend-Stacks, ob in Next.js, als eigenständige SPA oder eingebettet in eine bestehende Anwendung. Wir bauen Komponentenbibliotheken, Design-Systeme und schnelle Oberflächen für Schweizer Unternehmen, deren Kunden immer wieder zurückkommen sollen.',
        useCases: [
          {
            title: 'Komplexe Dashboards',
            description:
              'Datenvisualisierung in Echtzeit, interaktive Diagramme und filterbare Tabellen für Analyse- und Betriebs-Dashboards.',
          },
          {
            title: 'Formularlastige Abläufe',
            description:
              'Mehrstufige Assistenten, bedingte Feldlogik und umfangreich validierte Formulare für Versicherung, Finanzen und Compliance.',
          },
          {
            title: 'Umsetzung von Design-Systemen',
            description:
              'Token-basierte Komponentenbibliotheken mit Radix UI oder shadcn/ui, passend zu Ihrer Marke und über mehrere Produkte skalierbar.',
          },
          {
            title: 'Schrittweise Modernisierung',
            description:
              'React-Komponenten in bestehenden serverseitig gerenderten Apps: modernisieren ohne kompletten Neubau.',
          },
        ],
        benefits: [
          'Wiederverwendbare Komponenten senken den UI-Aufwand um 40%+',
          'React DevTools machen Debugging sichtbar',
          'Server Components vermeiden unnötiges Client-JavaScript',
          'Riesiges Ökosystem: über 2 Mio. Pakete für jeden Anwendungsfall',
          'Stabile API, kein Risiko ständiger Framework-Wechsel',
        ],
        meta: {
          title: 'React Entwicklung Schweiz | UI-Engineering | Trident Software',
          description:
            'React-Entwicklung für Schweizer Unternehmen. Dashboards, Design-Systeme, SPAs und Komponentenbibliotheken. TypeScript, Radix UI, Tailwind. Team in der Schweiz.',
        },
      },
      fr: {
        category: 'Frontend',
        tagline: 'Des interfaces à composants que les utilisateurs apprécient vraiment',
        description:
          'React est la base de notre stack frontend, que ce soit dans Next.js, en SPA autonome ou intégré à une application existante. Nous créons des bibliothèques de composants, des design systems et des interfaces performantes pour les entreprises suisses qui veulent que leurs clients reviennent.',
        useCases: [
          {
            title: 'Tableaux de bord complexes',
            description:
              "Visualisation de données en temps réel, graphiques interactifs et tableaux filtrables pour l'analyse et le pilotage opérationnel.",
          },
          {
            title: 'Parcours riches en formulaires',
            description:
              "Assistants en plusieurs étapes, champs conditionnels et formulaires à validation poussée pour l'assurance, la finance et la conformité.",
          },
          {
            title: "Mise en place d'un design system",
            description:
              'Bibliothèques de composants basées sur des tokens, avec Radix UI ou shadcn/ui, fidèles à votre marque et réutilisables sur plusieurs produits.',
          },
          {
            title: 'Modernisation progressive',
            description:
              'Composants React intégrés dans des applications existantes rendues côté serveur : moderniser sans tout réécrire.',
          },
        ],
        benefits: [
          'La réutilisation des composants réduit le temps de développement UI de plus de 40 %',
          'React DevTools rend le débogage visuel',
          'Les Server Components évitent le JavaScript client inutile',
          'Un écosystème immense : plus de 2 millions de paquets pour chaque besoin',
          'API stable, sans risque de devoir changer de framework',
        ],
        meta: {
          title: 'Développement React en Suisse | Interfaces | Trident Software',
          description:
            "Développement d'interfaces React pour les entreprises suisses. Tableaux de bord, design systems, SPA, composants. TypeScript, Radix UI, Tailwind.",
        },
      },
      it: {
        category: 'Frontend',
        tagline: 'Interfacce a componenti che gli utenti usano volentieri',
        description:
          "React è la base del nostro stack frontend, dentro Next.js, come SPA autonoma o integrato in un'applicazione esistente. Realizziamo librerie di componenti, design system e interfacce ad alte prestazioni per aziende svizzere che vogliono interfacce a cui i clienti tornano.",
        useCases: [
          {
            title: 'Dashboard complesse',
            description:
              'Visualizzazione dei dati in tempo reale, grafici interattivi e tabelle filtrabili per dashboard analitiche e operative.',
          },
          {
            title: 'Flussi ricchi di moduli',
            description:
              'Procedure guidate in più passaggi, logica condizionale dei campi e moduli con validazioni estese per assicurazioni, finanza e compliance.',
          },
          {
            title: 'Implementazione di design system',
            description:
              'Librerie di componenti basate su token con Radix UI o shadcn/ui, coerenti con il tuo brand e scalabili su più prodotti.',
          },
          {
            title: 'Modernizzazione graduale',
            description:
              'Componenti React inseriti in app esistenti renderizzate lato server: modernizzi senza riscrivere tutto.',
          },
        ],
        benefits: [
          'Il riuso dei componenti riduce i tempi di sviluppo UI di oltre il 40%',
          'React DevTools rende il debug visivo',
          'I Server Components eliminano il JavaScript client superfluo',
          'Ecosistema vastissimo: oltre 2 milioni di pacchetti per ogni esigenza',
          'API stabile, nessun rischio di dover cambiare framework',
        ],
        meta: {
          title: 'Sviluppo React in Svizzera | Interfacce UI | Trident Software',
          description:
            'Sviluppo di interfacce React per aziende svizzere. Dashboard, design system, SPA e librerie di componenti. TypeScript, Radix UI, Tailwind. Team svizzero.',
        },
      },
    },
  },
  {
    slug: 'nodejs',
    name: 'Node.js',
    iconSlug: 'nodedotjs',
    complementaryStack: ['TypeScript', 'Fastify / NestJS', 'PostgreSQL', 'Redis', 'BullMQ', 'Docker'],
    relatedServices: ['software-engineering'],
    relatedCases: [],
    content: {
      en: {
        category: 'Backend & APIs',
        tagline: 'Event-driven APIs and microservices with Node.js',
        description:
          'We use Node.js for REST and GraphQL APIs, real-time WebSocket backends and microservices. Its non-blocking I/O suits high-concurrency Swiss applications: booking systems, notification hubs and data aggregation services that handle thousands of simultaneous connections.',
        useCases: [
          {
            title: 'REST & GraphQL APIs',
            description:
              'Typed Express / Fastify or NestJS APIs with Zod validation, JWT auth, and OpenAPI documentation.',
          },
          {
            title: 'Real-time backends',
            description:
              'WebSocket servers, SSE event streams, and MQTT brokers for live dashboards, chat, and IoT telemetry.',
          },
          {
            title: 'BFF (Backend for Frontend)',
            description:
              'A thin layer that combines several microservices into one API shaped for the frontend.',
          },
          {
            title: 'Webhook & integration hubs',
            description:
              'Pipelines that receive and process webhooks from Stripe, GitHub, HubSpot and other SaaS tools.',
          },
        ],
        benefits: [
          'One language for frontend and backend',
          'Non-blocking I/O handles 10k+ concurrent connections',
          'npm packages speed up third-party API integration',
          'First-class TypeScript with ts-node / tsx',
          'Low memory footprint vs. JVM alternatives',
        ],
        meta: {
          title: 'Node.js Development Switzerland | API & Backend Engineering | Trident Software',
          description:
            'Node.js API and backend development for Swiss companies. REST, GraphQL, real-time WebSocket. TypeScript, Fastify, PostgreSQL. Swiss dev team.',
        },
      },
      de: {
        category: 'Backend & APIs',
        tagline: 'Ereignisgesteuerte APIs und Microservices mit Node.js',
        description:
          'Node.js treibt unsere REST- und GraphQL-APIs, WebSocket-Backends in Echtzeit und Microservice-Architekturen an. Dank nicht blockierender I/O eignet es sich ideal für Schweizer Anwendungen mit vielen gleichzeitigen Zugriffen: Buchungssysteme, Benachrichtigungsdienste und Datenaggregation mit Tausenden paralleler Verbindungen.',
        useCases: [
          {
            title: 'REST- & GraphQL-APIs',
            description:
              'Typisierte APIs mit Express, Fastify oder NestJS, mit Zod-Validierung, JWT-Authentifizierung und OpenAPI-Dokumentation.',
          },
          {
            title: 'Echtzeit-Backends',
            description:
              'WebSocket-Server, SSE-Event-Streams und MQTT-Broker für Live-Dashboards, Chat und IoT-Telemetrie.',
          },
          {
            title: 'BFF (Backend for Frontend)',
            description:
              'Schlanke Orchestrierungsschicht, die mehrere Microservices zu einer einzigen, fürs Frontend optimierten API bündelt.',
          },
          {
            title: 'Webhook- und Integrations-Hubs',
            description:
              'Event-Pipelines, die Webhooks von Stripe, GitHub, HubSpot und anderen SaaS-Tools verarbeiten.',
          },
        ],
        benefits: [
          'Gleiche Sprache wie im Frontend, kleineres Team nötig',
          "Nicht blockierende I/O bewältigt über 10'000 gleichzeitige Verbindungen",
          'npm-Ökosystem: schnellste Anbindung von Drittanbieter-APIs',
          'Erstklassiges TypeScript mit ts-node / tsx',
          'Geringer Speicherbedarf im Vergleich zu JVM-Lösungen',
        ],
        meta: {
          title: 'Node.js Entwicklung Schweiz | API & Backend | Trident Software',
          description:
            'Node.js-Entwicklung von APIs und Backends für Schweizer Unternehmen. REST, GraphQL, WebSocket in Echtzeit. TypeScript, Fastify, PostgreSQL. Team in der Schweiz.',
        },
      },
      fr: {
        category: 'Backend & API',
        tagline: 'API événementielles et microservices avec Node.js',
        description:
          "Node.js fait tourner nos API REST et GraphQL, nos backends WebSocket en temps réel et nos architectures de microservices. Ses entrées/sorties non bloquantes en font un choix idéal pour les applications suisses à forte concurrence : systèmes de réservation, centres de notifications et services d'agrégation de données qui gèrent des milliers de connexions simultanées.",
        useCases: [
          {
            title: 'API REST et GraphQL',
            description:
              'API typées avec Express, Fastify ou NestJS, validation Zod, authentification JWT et documentation OpenAPI.',
          },
          {
            title: 'Backends temps réel',
            description:
              "Serveurs WebSocket, flux d'événements SSE et brokers MQTT pour tableaux de bord en direct, chat et télémétrie IoT.",
          },
          {
            title: 'BFF (Backend for Frontend)',
            description:
              "Une fine couche d'orchestration qui regroupe plusieurs microservices en une seule API optimisée pour le frontend.",
          },
          {
            title: "Hubs de webhooks et d'intégration",
            description:
              "Pipelines de traitement d'événements qui reçoivent les webhooks de Stripe, GitHub, HubSpot et d'autres outils SaaS.",
          },
        ],
        benefits: [
          'Même langage que le frontend, équipe plus resserrée',
          'Les E/S non bloquantes gèrent plus de 10 000 connexions simultanées',
          'Écosystème npm : intégration la plus rapide des API tierces',
          'TypeScript de premier ordre avec ts-node / tsx',
          'Faible consommation mémoire par rapport aux solutions JVM',
        ],
        meta: {
          title: 'Développement Node.js en Suisse | API & Backend | Trident Software',
          description:
            "Développement d'API et de backends Node.js pour les entreprises suisses. REST, GraphQL, WebSocket temps réel. TypeScript, Fastify, PostgreSQL.",
        },
      },
      it: {
        category: 'Backend & API',
        tagline: 'API event-driven e microservizi con Node.js',
        description:
          "Node.js alimenta le nostre API REST e GraphQL, i backend WebSocket in tempo reale e le architetture a microservizi. L'I/O non bloccante lo rende ideale per applicazioni svizzere ad alta concorrenza: sistemi di prenotazione, hub di notifiche e servizi di aggregazione dati che gestiscono migliaia di connessioni simultanee.",
        useCases: [
          {
            title: 'API REST e GraphQL',
            description:
              'API tipizzate con Express, Fastify o NestJS, validazione Zod, autenticazione JWT e documentazione OpenAPI.',
          },
          {
            title: 'Backend in tempo reale',
            description:
              'Server WebSocket, stream di eventi SSE e broker MQTT per dashboard live, chat e telemetria IoT.',
          },
          {
            title: 'BFF (Backend for Frontend)',
            description:
              "Un sottile livello di orchestrazione che riunisce più microservizi in un'unica API ottimizzata per il frontend.",
          },
          {
            title: 'Hub per webhook e integrazioni',
            description:
              'Pipeline di elaborazione eventi che ricevono webhook da Stripe, GitHub, HubSpot e altri strumenti SaaS.',
          },
        ],
        benefits: [
          'Stesso linguaggio del frontend, team più snello',
          "L'I/O non bloccante gestisce oltre 10'000 connessioni simultanee",
          'Ecosistema npm: integrazione più rapida delle API di terze parti',
          'TypeScript di prima classe con ts-node / tsx',
          'Basso consumo di memoria rispetto alle alternative JVM',
        ],
        meta: {
          title: 'Sviluppo Node.js in Svizzera | API & Backend | Trident Software',
          description:
            'Sviluppo di API e backend Node.js per aziende svizzere. REST, GraphQL, WebSocket in tempo reale. TypeScript, Fastify, PostgreSQL. Team svizzero.',
        },
      },
    },
  },
  {
    slug: 'postgresql',
    name: 'PostgreSQL',
    iconSlug: 'postgresql',
    complementaryStack: [
      'Prisma / Drizzle ORM',
      'pgvector (AI embeddings)',
      'pgBackRest (backups)',
      'PostGIS',
      'Node.js / Python / Payload CMS',
    ],
    relatedServices: ['software-engineering'],
    relatedCases: [],
    content: {
      en: {
        category: 'Database',
        tagline: 'A proven relational database for Swiss applications',
        description:
          "PostgreSQL is our default database for every project with structured data. JSONB, full-text search, the PostGIS spatial extension and row-level security make it fit everything from simple CMS databases to complex multi-tenant SaaS. We have run Postgres in production in Switzerland since 2018.",
        useCases: [
          {
            title: 'Multi-tenant SaaS databases',
            description:
              'Row-level security policies enforce tenant isolation in the database, not in application code.',
          },
          {
            title: 'Geospatial data (PostGIS)',
            description:
              'Location-based queries, radius searches, and route planning for logistics, real estate, and smart city apps.',
          },
          {
            title: 'Full-text search',
            description:
              'Search in Swiss German, French and Italian with tsvector and GIN indexes. Most projects need no Elasticsearch.',
          },
          {
            title: 'Financial data integrity',
            description:
              'ACID transactions, check constraints, and triggers for ledger systems, payment records, and audit trails.',
          },
        ],
        benefits: [
          'ACID compliance — no silent data corruption',
          'JSONB stores semi-structured data without a second database',
          'Logical replication for zero-downtime migrations',
          'pg_cron for scheduled database jobs',
          'Mature Swiss hosting options (Infomaniak, exoscale)',
        ],
        meta: {
          title: 'PostgreSQL Development Switzerland | Database Engineering | Trident Software',
          description:
            'PostgreSQL database architecture for Swiss applications. Multi-tenant, PostGIS, full-text search. Swiss data residency. Production since 2018.',
        },
      },
      de: {
        category: 'Datenbank',
        tagline: 'Bewährte relationale Datenbank für Schweizer Anwendungen',
        description:
          'PostgreSQL ist unsere Standarddatenbank für jedes Projekt mit strukturierten Daten. JSONB, Volltextsuche, die räumliche Erweiterung PostGIS und Row-Level Security machen sie für alles geeignet, von der einfachen CMS-Datenbank bis zur komplexen mandantenfähigen SaaS-Architektur. Wir betreiben Postgres seit 2018 produktiv in der Schweiz.',
        useCases: [
          {
            title: 'Mandantenfähige SaaS-Datenbanken',
            description:
              'Row-Level-Security-Richtlinien trennen die Mandanten direkt in der Datenbank, nicht erst in der Anwendung.',
          },
          {
            title: 'Geodaten (PostGIS)',
            description:
              'Standortbezogene Abfragen, Umkreissuche und Routenplanung für Logistik, Immobilien und Smart-City-Apps.',
          },
          {
            title: 'Volltextsuche',
            description:
              'Textsuche auf Schweizerdeutsch, Französisch und Italienisch mit tsvector und GIN-Indizes. In den meisten Fällen braucht es kein Elasticsearch.',
          },
          {
            title: 'Integrität von Finanzdaten',
            description:
              'ACID-Transaktionen, Check-Constraints und Trigger für Buchhaltungssysteme, Zahlungsdaten und Audit-Trails.',
          },
        ],
        benefits: [
          'ACID-konform, keine unbemerkten Datenfehler',
          'JSONB speichert halbstrukturierte Daten ohne zweite Datenbank',
          'Logische Replikation für Migrationen ohne Ausfallzeit',
          'pg_cron für geplante Datenbank-Jobs',
          'Bewährte Hosting-Optionen in der Schweiz (Infomaniak, exoscale)',
        ],
        meta: {
          title: 'PostgreSQL Entwicklung Schweiz | Datenbanken | Trident Software',
          description:
            'PostgreSQL-Datenbankarchitektur für Schweizer Anwendungen. Mandantenfähig, PostGIS, Volltextsuche. Datenhaltung in der Schweiz. Produktiv seit 2018.',
        },
      },
      fr: {
        category: 'Base de données',
        tagline: 'Une base relationnelle éprouvée pour les applications suisses',
        description:
          "PostgreSQL est notre base de données par défaut pour tout projet à données structurées. JSONB, recherche plein texte, extension spatiale PostGIS et row-level security la rendent adaptée à tout, de la simple base CMS à l'architecture SaaS multi-clients complexe. Nous exploitons Postgres en production en Suisse depuis 2018.",
        useCases: [
          {
            title: 'Bases SaaS multi-clients',
            description:
              "Des politiques de row-level security isolent chaque client au niveau de la base de données, pas de l'application.",
          },
          {
            title: 'Données géospatiales (PostGIS)',
            description:
              "Requêtes géolocalisées, recherches par rayon et planification d'itinéraires pour la logistique, l'immobilier et la smart city.",
          },
          {
            title: 'Recherche plein texte',
            description:
              'Recherche en suisse allemand, en français et en italien avec tsvector et index GIN. Dans la plupart des cas, Elasticsearch est inutile.',
          },
          {
            title: 'Intégrité des données financières',
            description:
              "Transactions ACID, contraintes de vérification et triggers pour les grands livres, les paiements et les pistes d'audit.",
          },
        ],
        benefits: [
          'Conformité ACID, aucune corruption silencieuse des données',
          'JSONB stocke les données semi-structurées sans seconde base',
          'Réplication logique pour des migrations sans interruption',
          'pg_cron pour les tâches planifiées en base',
          'Hébergement suisse éprouvé (Infomaniak, exoscale)',
        ],
        meta: {
          title: 'Développement PostgreSQL en Suisse | Bases de données | Trident Software',
          description:
            'Architecture de bases PostgreSQL pour applications suisses. Multi-clients, PostGIS, recherche plein texte. Données hébergées en Suisse. En production depuis 2018.',
        },
      },
      it: {
        category: 'Database',
        tagline: 'Dati relazionali collaudati per le applicazioni svizzere',
        description:
          "PostgreSQL è il nostro database predefinito per ogni progetto con dati strutturati. JSONB, ricerca full-text, l'estensione spaziale PostGIS e la row-level security lo rendono adatto a tutto, dal semplice database di un CMS alle architetture SaaS multi-tenant complesse. Gestiamo Postgres in produzione in Svizzera dal 2018.",
        useCases: [
          {
            title: 'Database SaaS multi-tenant',
            description:
              'Le policy di row-level security isolano i tenant direttamente nel database, non a livello di applicazione.',
          },
          {
            title: 'Dati geospaziali (PostGIS)',
            description:
              'Query basate sulla posizione, ricerche per raggio e pianificazione dei percorsi per logistica, immobiliare e app smart city.',
          },
          {
            title: 'Ricerca full-text',
            description:
              'Ricerca testuale in svizzero tedesco, francese e italiano con tsvector e indici GIN. Nella maggior parte dei casi Elasticsearch non serve.',
          },
          {
            title: 'Integrità dei dati finanziari',
            description:
              'Transazioni ACID, vincoli di controllo e trigger per sistemi contabili, registri dei pagamenti e audit trail.',
          },
        ],
        benefits: [
          'Conformità ACID, nessuna corruzione silenziosa dei dati',
          'JSONB memorizza dati semi-strutturati senza un secondo database',
          'Replica logica per migrazioni senza interruzioni',
          'pg_cron per i job pianificati nel database',
          'Opzioni di hosting svizzere collaudate (Infomaniak, exoscale)',
        ],
        meta: {
          title: 'Sviluppo PostgreSQL in Svizzera | Database | Trident Software',
          description:
            'Architettura di database PostgreSQL per applicazioni svizzere. Multi-tenant, PostGIS, ricerca full-text. Dati residenti in Svizzera. In produzione dal 2018.',
        },
      },
    },
  },
  {
    slug: 'docker-kubernetes',
    name: 'Docker & Kubernetes',
    iconSlug: 'docker',
    complementaryStack: ['GitLab CI', 'Caddy reverse proxy', 'Traefik', 'Prometheus + Grafana', 'Portainer', 'Helm'],
    relatedServices: ['software-engineering'],
    relatedCases: [],
    content: {
      en: {
        category: 'DevOps & Infrastructure',
        tagline: 'Containerised deployments that stay up',
        description:
          'We containerise every application we build: Docker for packaging, Docker Compose to match development to production, and Kubernetes for production workloads. We keep data in Switzerland by deploying on Swiss-region infrastructure: Infomaniak Cloud or exoscale.',
        useCases: [
          {
            title: 'Reproducible environments',
            description:
              'Docker Compose runs identical software in dev, staging and production, so "works on my machine" incidents stop.',
          },
          {
            title: 'GitLab CI/CD pipelines',
            description:
              'Kaniko image builds, automatic deployments and rollbacks, triggered by every git push to main.',
          },
          {
            title: 'Kubernetes workloads',
            description:
              'Horizontal pod autoscaling, rolling deployments, and health checks for SaaS platforms handling variable load.',
          },
          {
            title: 'Swiss data residency',
            description:
              'Deployments to CH-region data centres: Infomaniak Geneva, exoscale CH-GVA.',
          },
        ],
        benefits: [
          'Identical environments eliminate environment-specific bugs',
          'Restart policies bring crashed containers back',
          'Resource limits prevent noisy-neighbour incidents',
          'GitOps workflow — infrastructure as code',
          'revFADP compliance via Swiss-region deployment',
        ],
        meta: {
          title: 'Docker & Kubernetes Switzerland | DevOps Engineering | Trident Software',
          description:
            'Docker and Kubernetes deployments for Swiss companies. GitLab CI/CD, Swiss data residency (Infomaniak, exoscale). Container-first engineering.',
        },
      },
      de: {
        category: 'DevOps & Infrastruktur',
        tagline: 'Container-Deployments, die einfach laufen',
        description:
          'Wir containerisieren jede Anwendung, die wir bauen: Docker für die Pakete, Docker Compose für identische Entwicklungsumgebungen und Kubernetes für orchestrierte Produktivsysteme. Die Datenhaltung in der Schweiz sichern wir durch Infrastruktur in Schweizer Regionen: Infomaniak Cloud oder exoscale.',
        useCases: [
          {
            title: 'Reproduzierbare Umgebungen',
            description:
              'Mit Docker Compose laufen Entwicklung, Staging und Produktion mit identischer Software. Schluss mit «bei mir funktioniert es».',
          },
          {
            title: 'GitLab-CI/CD-Pipelines',
            description:
              'Image-Builds mit Kaniko, automatische Deployments und Rollbacks, ausgelöst bei jedem Git-Push auf main.',
          },
          {
            title: 'Kubernetes-Workloads',
            description:
              'Horizontales Pod-Autoscaling, Rolling Deployments und Health Checks für SaaS-Plattformen mit schwankender Last.',
          },
          {
            title: 'Datenhaltung in der Schweiz',
            description:
              'Deployment-Konfigurationen für Rechenzentren in der Region CH: Infomaniak Genf, exoscale CH-GVA.',
          },
        ],
        benefits: [
          'Identische Umgebungen verhindern umgebungsspezifische Bugs',
          'Restart-Policy der Container = automatische Wiederherstellung nach Abstürzen',
          'Ressourcenlimits verhindern, dass ein Dienst andere ausbremst',
          'GitOps-Workflow: Infrastructure as Code',
          'nDSG-Konformität durch Deployment in Schweizer Regionen',
        ],
        meta: {
          title: 'Docker & Kubernetes Schweiz | DevOps | Trident Software',
          description:
            'Docker- und Kubernetes-Deployments für Schweizer Unternehmen. GitLab CI/CD, Datenhaltung in der Schweiz (Infomaniak, exoscale). Container-first.',
        },
      },
      fr: {
        category: 'DevOps & Infrastructure',
        tagline: 'Des déploiements conteneurisés qui tiennent la route',
        description:
          "Nous conteneurisons chaque application que nous développons : Docker pour l'empaquetage, Docker Compose pour des environnements de développement identiques et Kubernetes pour l'orchestration en production. Les données restent en Suisse grâce à une infrastructure hébergée dans des régions suisses : Infomaniak Cloud ou exoscale.",
        useCases: [
          {
            title: 'Environnements reproductibles',
            description:
              'Avec Docker Compose, développement, staging et production font tourner exactement le même logiciel. Fini les « ça marche sur ma machine ».',
          },
          {
            title: 'Pipelines CI/CD GitLab',
            description:
              "Builds d'images avec Kaniko, déploiements automatiques et retours arrière, déclenchés à chaque git push sur main.",
          },
          {
            title: 'Charges de travail Kubernetes',
            description:
              'Autoscaling horizontal des pods, déploiements progressifs et health checks pour les plateformes SaaS à charge variable.',
          },
          {
            title: 'Données hébergées en Suisse',
            description:
              'Configurations de déploiement ciblant des datacenters en région CH : Infomaniak Genève, exoscale CH-GVA.',
          },
        ],
        benefits: [
          'Des environnements identiques éliminent les bugs propres à un environnement',
          'Politique de redémarrage des conteneurs = reprise automatique après un plantage',
          "Les limites de ressources empêchent un service d'en pénaliser un autre",
          "Workflow GitOps : l'infrastructure en tant que code",
          'Conformité nLPD grâce au déploiement en région suisse',
        ],
        meta: {
          title: 'Docker & Kubernetes en Suisse | DevOps | Trident Software',
          description:
            'Déploiements Docker et Kubernetes pour les entreprises suisses. CI/CD GitLab, données hébergées en Suisse (Infomaniak, exoscale). Approche container-first.',
        },
      },
      it: {
        category: 'DevOps & Infrastruttura',
        tagline: 'Deployment containerizzati che restano in piedi',
        description:
          "Containerizziamo ogni applicazione che sviluppiamo: Docker per il packaging, Docker Compose per ambienti di sviluppo identici e Kubernetes per l'orchestrazione in produzione. La residenza dei dati in Svizzera è garantita da infrastrutture in regioni svizzere: Infomaniak Cloud o exoscale.",
        useCases: [
          {
            title: 'Ambienti riproducibili',
            description:
              'Con Docker Compose sviluppo, staging e produzione eseguono lo stesso identico software. Basta con i «sul mio computer funziona».',
          },
          {
            title: 'Pipeline CI/CD GitLab',
            description:
              'Build delle immagini con Kaniko, deployment automatici e rollback, avviati a ogni git push su main.',
          },
          {
            title: 'Workload Kubernetes',
            description:
              'Autoscaling orizzontale dei pod, rolling deployment e health check per piattaforme SaaS con carico variabile.',
          },
          {
            title: 'Dati residenti in Svizzera',
            description:
              'Configurazioni di deployment per data center nella regione CH: Infomaniak Ginevra, exoscale CH-GVA.',
          },
        ],
        benefits: [
          'Ambienti identici eliminano i bug legati al singolo ambiente',
          'Restart policy dei container = ripristino automatico dopo un crash',
          'I limiti di risorse impediscono che un servizio rallenti gli altri',
          'Workflow GitOps: infrastruttura come codice',
          'Conformità nLPD grazie al deployment in regioni svizzere',
        ],
        meta: {
          title: 'Docker & Kubernetes in Svizzera | DevOps | Trident Software',
          description:
            'Deployment Docker e Kubernetes per aziende svizzere. CI/CD GitLab, dati residenti in Svizzera (Infomaniak, exoscale). Approccio container-first.',
        },
      },
    },
  },
  {
    slug: 'ai-llm-integration',
    name: 'AI & LLM Integration',
    iconSlug: 'openai',
    complementaryStack: [
      'OpenAI / Anthropic API',
      'Ollama + Llama 3',
      'LangChain / LlamaIndex',
      'pgvector',
      'FastAPI',
      'Python',
    ],
    relatedServices: ['ai-services', 'software-engineering', 'cto-as-a-service'],
    relatedCases: ['post-acute-clinic-network'],
    content: {
      en: {
        category: 'Artificial intelligence',
        tagline: 'Add AI to the business software you already use',
        description:
          'We build large language models, computer vision and machine learning into existing business applications as production features, not demos. Typical requests are an AI document assistant, an automated classification pipeline or a conversational interface for customers.',
        useCases: [
          {
            title: 'Document intelligence',
            description:
              'OCR + LLM pipelines extract structured data from invoices, contracts and forms, with 95%+ accuracy on Swiss German documents.',
          },
          {
            title: 'RAG-based assistants',
            description:
              'Internal knowledge bases built on retrieval-augmented generation: your staff ask questions, the AI answers from your documents.',
          },
          {
            title: 'AI-assisted CRM',
            description:
              'Lead scoring, email drafts and meeting summaries inside your CRM or ERP workflow.',
          },
          {
            title: 'On-premise LLM deployment',
            description:
              'Llama 3, Mistral or Qwen2 on your own GPU server. No data leaves Switzerland, and you stay revFADP-compliant.',
          },
        ],
        benefits: [
          'On-premise options keep data in Switzerland',
          'LangChain + pgvector for production-ready RAG',
          'Model-agnostic: OpenAI today, local LLM tomorrow',
          'Structured output (JSON mode) for reliable pipelines',
          'Evaluation harnesses prevent silent accuracy regression',
        ],
        meta: {
          title: 'AI & LLM Integration Switzerland | Trident Software',
          description:
            'Production AI integration for Swiss businesses. Document intelligence, RAG assistants, on-premise LLMs (revFADP compliant). We build AI that works.',
        },
      },
      de: {
        category: 'Künstliche Intelligenz',
        tagline: 'KI-Funktionen in Ihre bestehende Unternehmenssoftware einbauen',
        description:
          'Wir integrieren Large Language Models, Computer Vision und Machine Learning in bestehende Geschäftsanwendungen, nicht als Demo, sondern als produktionsreife Funktionen. Ob KI-Dokumentenassistent, automatische Klassifizierung oder dialogfähige Kundenschnittstelle: Wir bauen es so, wie es Ihr Schweizer Unternehmen erwartet.',
        useCases: [
          {
            title: 'Intelligente Dokumentenverarbeitung',
            description:
              'OCR- und LLM-Pipelines lesen strukturierte Daten aus Rechnungen, Verträgen und Formularen aus, mit über 95% Genauigkeit bei deutschsprachigen Schweizer Dokumenten.',
          },
          {
            title: 'RAG-basierte Assistenten',
            description:
              'Interne Wissensdatenbanken mit Retrieval-Augmented Generation: Ihre Mitarbeitenden stellen Fragen, die KI antwortet aus Ihren Dokumenten.',
          },
          {
            title: 'KI-gestütztes CRM',
            description:
              'Lead-Scoring, E-Mail-Entwürfe und Gesprächszusammenfassungen direkt in Ihrem CRM- oder ERP-Ablauf.',
          },
          {
            title: 'LLM im eigenen Rechenzentrum',
            description:
              'Llama 3, Mistral oder Qwen2 auf Ihrem eigenen GPU-Server. Keine Daten verlassen die Schweiz, volle nDSG-Konformität.',
          },
        ],
        benefits: [
          'On-Premise-Optionen halten die Daten in der Schweiz',
          'LangChain + pgvector für produktionsreifes RAG',
          'Modellunabhängig: heute OpenAI, morgen ein lokales LLM',
          'Strukturierte Ausgabe (JSON-Modus) für zuverlässige Pipelines',
          'Evaluations-Setups verhindern unbemerkte Qualitätsverluste',
        ],
        meta: {
          title: 'KI- & LLM-Integration Schweiz | Trident Software',
          description:
            'KI-Integration für Schweizer Unternehmen: Dokumentenverarbeitung, RAG-Assistenten, On-Premise-LLMs (nDSG-konform). KI, die im Betrieb funktioniert.',
        },
      },
      fr: {
        category: 'Intelligence artificielle',
        tagline: "Intégrez l'IA dans vos logiciels métier existants",
        description:
          "Nous intégrons des grands modèles de langage, la vision par ordinateur et le machine learning dans vos applications métier existantes, non pas comme une démo, mais comme des fonctionnalités prêtes pour la production. Assistant documentaire IA, classification automatique ou interface conversationnelle pour vos clients : nous le construisons au niveau d'exigence qu'attend votre entreprise suisse.",
        useCases: [
          {
            title: 'Traitement intelligent des documents',
            description:
              'Des pipelines OCR + LLM extraient des données structurées des factures, contrats et formulaires, avec plus de 95 % de précision sur des documents suisses alémaniques.',
          },
          {
            title: 'Assistants basés sur le RAG',
            description:
              "Bases de connaissances internes avec Retrieval-Augmented Generation : vos collaborateurs posent leurs questions, l'IA répond à partir de vos documents.",
          },
          {
            title: "CRM assisté par l'IA",
            description:
              "Scoring des leads, rédaction d'e-mails et résumés de réunions intégrés directement dans votre CRM ou votre ERP.",
          },
          {
            title: 'LLM déployé sur site',
            description:
              'Llama 3, Mistral ou Qwen2 sur votre propre serveur GPU. Aucune donnée ne quitte la Suisse, conformité nLPD complète.',
          },
        ],
        benefits: [
          'Les options sur site gardent les données en Suisse',
          'LangChain + pgvector pour un RAG prêt pour la production',
          "Indépendant du modèle : OpenAI aujourd'hui, LLM local demain",
          'Sorties structurées (mode JSON) pour des pipelines fiables',
          "Des bancs d'évaluation évitent toute baisse de précision inaperçue",
        ],
        meta: {
          title: 'Intégration IA & LLM en Suisse | Trident Software',
          description:
            "Intégration de l'IA pour les entreprises suisses : traitement de documents, assistants RAG, LLM sur site (conformes nLPD). Une IA qui fonctionne en production.",
        },
      },
      it: {
        category: 'Intelligenza artificiale',
        tagline: "Porta l'IA nel software aziendale che usi già",
        description:
          "Integriamo modelli linguistici di grandi dimensioni, computer vision e machine learning nelle applicazioni aziendali esistenti, non come demo ma come funzionalità pronte per la produzione. Che ti serva un assistente IA per i documenti, una pipeline di classificazione automatica o un'interfaccia conversazionale per i clienti, lo realizziamo con lo standard che la tua azienda svizzera richiede.",
        useCases: [
          {
            title: 'Elaborazione intelligente dei documenti',
            description:
              'Pipeline OCR + LLM che estraggono dati strutturati da fatture, contratti e moduli, con oltre il 95% di precisione su documenti in svizzero tedesco.',
          },
          {
            title: 'Assistenti basati su RAG',
            description:
              "Knowledge base interne con Retrieval-Augmented Generation: i tuoi collaboratori fanno domande, l'IA risponde partendo dai tuoi documenti.",
          },
          {
            title: "CRM assistito dall'IA",
            description:
              'Lead scoring, bozze di e-mail e riassunti delle riunioni integrati direttamente nel tuo CRM o ERP.',
          },
          {
            title: 'LLM on-premise',
            description:
              'Llama 3, Mistral o Qwen2 sul tuo server GPU. Nessun dato lascia la Svizzera, piena conformità nLPD.',
          },
        ],
        benefits: [
          'Le opzioni on-premise mantengono i dati in Svizzera',
          'LangChain + pgvector per una RAG pronta per la produzione',
          'Indipendente dal modello: oggi OpenAI, domani un LLM locale',
          'Output strutturato (modalità JSON) per pipeline affidabili',
          'Sistemi di valutazione evitano cali di precisione inosservati',
        ],
        meta: {
          title: 'Integrazione IA & LLM in Svizzera | Trident Software',
          description:
            "Integrazione dell'IA per aziende svizzere: elaborazione documenti, assistenti RAG, LLM on-premise conformi nLPD. IA che funziona davvero in produzione.",
        },
      },
    },
  },
]

const localize = (r: TechnologyRecord, locale: string): TechnologyData => {
  const { content, ...rest } = r
  return { ...rest, ...pick(content, locale) }
}

export function getTechnologies(locale: string): TechnologyData[] {
  return records.map((r) => localize(r, locale))
}

export function getTechnologyBySlug(slug: string, locale: string): TechnologyData | undefined {
  const r = records.find((x) => x.slug === slug)
  return r && localize(r, locale)
}

export function getTechnologySlugs(): string[] {
  return records.map((x) => x.slug)
}

export function getTechnologyLocales(slug: string) {
  const r = records.find((x) => x.slug === slug)
  return r ? localesOf(r.content) : []
}
