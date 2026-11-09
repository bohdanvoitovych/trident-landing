import { pick, localesOf, type Localized } from '@/lib/localized'
import { PDF_CASES } from './case-studies'

export type CaseResult = {
  metric: string
  value: string
}

export type CaseTestimonial = {
  text: string
  author: string
  role: string
}

/** A free-form block of a long case study: a heading, paragraphs and/or a bullet list. */
export type CaseSection = {
  title: string
  paragraphs?: string[]
  items?: string[]
  /** Paragraphs that follow the bullet list. */
  closing?: string[]
}

/** A before/after comparison, one row per measured or modelled figure. */
export type CaseTable = {
  title: string
  beforeLabel: string
  afterLabel: string
  rows: Array<{ label: string; before: string; after: string }>
}

/**
 * Text fields of a case study, written once per locale. `hero.image` is the same in every locale.
 * Short cases fill challenge/approach/solution. Long cases (the PDF write-ups) leave them out
 * and use `sections`, `table` and the "next" / "elsewhere" lists instead.
 */
export type CaseText = {
  /** Anonymised client description, when it needs translating. Overrides the record's `client`. */
  client?: string
  industry: string
  hero: {
    title: string
    tagline: string
    image?: string
  }
  challenge?: string
  approach?: string
  solution?: string
  results: CaseResult[]
  /** One-line note under the hero: how the case is written up and where the figures come from. */
  note?: string
  sections?: CaseSection[]
  table?: CaseTable
  /** Paragraphs that explain the table, shown right below it. */
  afterTable?: string[]
  /** "What happens next": an optional lead-in sentence, then a numbered list. */
  nextIntro?: string
  next?: string[]
  /** "Where else this applies": a lead-in sentence, then a bullet list. */
  elsewhereIntro?: string
  elsewhere?: string[]
  /** A closing sentence after the "Where else this applies" list. */
  elsewhereOutro?: string
  testimonial?: CaseTestimonial
  meta: {
    title: string
    description: string
  }
}

export type CaseRecord = {
  slug: string
  client: string
  services: string[]
  techStack: string[]
  /** Whether the figures were counted in production or calculated from real volumes. */
  evidence?: 'measured' | 'modelled'
  relatedCases: string[]
  content: Localized<CaseText>
}

/** A case study with its text resolved to one locale. */
export type CaseData = Omit<CaseRecord, 'content'> & Omit<CaseText, 'client'>

const records: CaseRecord[] = [
  ...PDF_CASES,
  {
    slug: 'kleap-ai-builder',
    client: 'Kleap',
    services: ['ai-services', 'software-engineering'],
    techStack: ['Python', 'OpenAI API', 'React', 'Next.js', 'PostgreSQL', 'AWS'],
    relatedCases: ['post-acute-clinic-network', 'go-valais'],
    content: {
      en: {
        industry: 'SaaS / AI',
        hero: {
          title: 'Kleap — AI Website Builder',
          tagline: 'From prompt to published website in under 60 seconds',
          image: '/images/cases/kleap-home-website-screen.jpg',
        },
        challenge:
          'Kleap needed to build an AI-powered website generator that could produce complete, design-quality websites from a single text prompt — competing with Wix ADI and Squarespace AI while offering higher customization and developer-friendly output.',
        approach:
          'We designed a multi-step AI pipeline: intent extraction → content generation → layout composition → code output. The system uses GPT-4 for content, a proprietary layout engine for structure, and Next.js for the generated output. Each step is independently testable and cacheable.',
        solution:
          'A production SaaS platform where users enter a business description and receive a complete, editable website within 60 seconds. The pipeline generates SEO-optimized copy, selects appropriate imagery, and produces clean HTML/CSS output deployable to any host.',
        results: [
          {
            metric: 'Generation time',
            value: '<60 seconds',
          },
          {
            metric: 'User satisfaction (NPS)',
            value: '72',
          },
          {
            metric: 'Websites generated at launch',
            value: '2,000+',
          },
        ],
        meta: {
          title: 'Kleap AI Website Builder — Trident Software Case Study',
          description:
            'How we built an AI-powered website generator that creates complete sites from a single text prompt in under 60 seconds.',
        },
      },
      de: {
        industry: 'SaaS / KI',
        hero: {
          title: 'Kleap — KI-Website-Builder',
          tagline: 'Vom Prompt zur fertigen Website in unter 60 Sekunden',
          image: '/images/cases/kleap-home-website-screen.jpg',
        },
        challenge:
          'Kleap wollte einen KI-gestützten Website-Generator bauen, der aus einem einzigen Text-Prompt vollständige Websites in Designqualität erzeugt. Er sollte mit Wix ADI und Squarespace AI konkurrieren, aber mehr Anpassungsmöglichkeiten und entwicklerfreundlichen Code bieten.',
        approach:
          'Wir haben eine mehrstufige KI-Pipeline entworfen: Absicht erkennen → Inhalte generieren → Layout zusammensetzen → Code ausgeben. GPT-4 liefert die Inhalte, eine eigene Layout-Engine die Struktur, und Next.js erzeugt die fertige Ausgabe. Jeder Schritt lässt sich einzeln testen und cachen.',
        solution:
          'Eine produktive SaaS-Plattform: Nutzer beschreiben ihr Unternehmen und erhalten innert 60 Sekunden eine vollständige, bearbeitbare Website. Die Pipeline schreibt SEO-optimierte Texte, wählt passende Bilder und erzeugt sauberes HTML/CSS, das sich auf jedem Hosting betreiben lässt.',
        results: [
          {
            metric: 'Generierungszeit',
            value: '<60 Sekunden',
          },
          {
            metric: 'Nutzerzufriedenheit (NPS)',
            value: '72',
          },
          {
            metric: 'Generierte Websites zum Launch',
            value: '2,000+',
          },
        ],
        meta: {
          title: 'Kleap KI-Website-Builder — Fallstudie Trident Software',
          description:
            'Wie wir einen KI-Website-Generator gebaut haben, der aus einem einzigen Text-Prompt in unter 60 Sekunden eine komplette Website erstellt.',
        },
      },
      fr: {
        industry: 'SaaS / IA',
        hero: {
          title: 'Kleap — Créateur de sites web par IA',
          tagline: 'Du prompt au site en ligne en moins de 60 secondes',
          image: '/images/cases/kleap-home-website-screen.jpg',
        },
        challenge:
          "Kleap voulait un générateur de sites web propulsé par l'IA, capable de produire des sites complets et soignés à partir d'un seul prompt. L'outil devait rivaliser avec Wix ADI et Squarespace AI, tout en offrant plus de personnalisation et un code exploitable par les développeurs.",
        approach:
          "Nous avons conçu un pipeline d'IA en plusieurs étapes : extraction de l'intention → génération du contenu → composition de la mise en page → production du code. GPT-4 rédige le contenu, un moteur de mise en page maison définit la structure et Next.js génère le site final. Chaque étape se teste et se met en cache séparément.",
        solution:
          "Une plateforme SaaS en production : l'utilisateur décrit son entreprise et reçoit en 60 secondes un site complet et modifiable. Le pipeline rédige des textes optimisés pour le SEO, choisit des visuels adaptés et produit un HTML/CSS propre, déployable chez n'importe quel hébergeur.",
        results: [
          {
            metric: 'Temps de génération',
            value: '<60 secondes',
          },
          {
            metric: 'Satisfaction des utilisateurs (NPS)',
            value: '72',
          },
          {
            metric: 'Sites générés au lancement',
            value: '2,000+',
          },
        ],
        meta: {
          title: 'Kleap, créateur de sites par IA — Étude de cas Trident',
          description:
            "Comment nous avons créé un générateur de sites web par IA qui produit un site complet à partir d'un seul prompt en moins de 60 secondes.",
        },
      },
      it: {
        industry: 'SaaS / IA',
        hero: {
          title: 'Kleap — Website builder con IA',
          tagline: 'Dal prompt al sito pubblicato in meno di 60 secondi',
          image: '/images/cases/kleap-home-website-screen.jpg',
        },
        challenge:
          "Kleap voleva un generatore di siti web basato sull'IA, capace di creare siti completi e curati nel design partendo da un solo prompt testuale. Doveva competere con Wix ADI e Squarespace AI, offrendo però più personalizzazione e un codice a misura di sviluppatore.",
        approach:
          "Abbiamo progettato una pipeline di IA in più fasi: estrazione dell'intento → generazione dei contenuti → composizione del layout → produzione del codice. GPT-4 scrive i contenuti, un motore di layout proprietario definisce la struttura e Next.js genera il sito finale. Ogni fase si può testare e mettere in cache in modo indipendente.",
        solution:
          "Una piattaforma SaaS in produzione: l'utente descrive la propria attività e in 60 secondi riceve un sito completo e modificabile. La pipeline scrive testi ottimizzati per la SEO, sceglie immagini adatte e produce HTML/CSS pulito, pubblicabile su qualsiasi hosting.",
        results: [
          {
            metric: 'Tempo di generazione',
            value: '<60 secondi',
          },
          {
            metric: 'Soddisfazione utenti (NPS)',
            value: '72',
          },
          {
            metric: 'Siti generati al lancio',
            value: '2,000+',
          },
        ],
        meta: {
          title: 'Kleap, website builder con IA — Case study Trident Software',
          description:
            'Come abbiamo realizzato un generatore di siti con IA che crea un sito completo da un solo prompt testuale in meno di 60 secondi.',
        },
      },
    },
  },
  {
    slug: 'zenit-auto-b2b',
    client: 'Zenit Auto',
    services: ['software-engineering'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Elasticsearch', 'AWS'],
    relatedCases: [],
    content: {
      en: {
        industry: 'Automotive Parts / B2B E-commerce',
        hero: {
          title: 'Zenit Auto — B2B Auto Parts Platform',
          tagline: 'Tiered pricing, 500K SKUs, real-time stock',
          image: '/images/cases/zenitavto-b2b-checkout-screen.jpg',
        },
        challenge:
          'Zenit Auto needed to migrate from a legacy desktop ordering system to a modern B2B web platform. Key challenges: 500,000+ SKU catalog, complex tiered pricing (different prices per dealer level), real-time stock from multiple warehouses, and VIN-based parts search.',
        approach:
          'We built a modular platform with separate engines for catalog management, pricing calculation, and stock aggregation. Elasticsearch powers the parts search with VIN decode integration. PostgreSQL handles the complex pricing matrix with JSONB fields for flexibility.',
        solution:
          'A complete B2B e-commerce platform with VIN-based parts lookup, dealer-specific pricing, real-time multi-warehouse stock, order management, and an admin dashboard for catalog and pricing management.',
        results: [
          {
            metric: 'Order processing time',
            value: '-65%',
          },
          {
            metric: 'SKUs indexed',
            value: '500,000+',
          },
          {
            metric: 'Active dealers',
            value: '120+',
          },
          {
            metric: 'Search response time',
            value: '<200ms',
          },
        ],
        meta: {
          title: 'Zenit Auto B2B Platform — Trident Software Case Study',
          description:
            'B2B auto parts e-commerce platform with 500K SKUs, tiered dealer pricing, VIN search, and real-time multi-warehouse stock.',
        },
      },
      de: {
        industry: 'Autoteile / B2B-E-Commerce',
        hero: {
          title: 'Zenit Auto — B2B-Plattform für Autoteile',
          tagline: 'Staffelpreise, 500K Artikel, Lagerbestand in Echtzeit',
          image: '/images/cases/zenitavto-b2b-checkout-screen.jpg',
        },
        challenge:
          'Zenit Auto wollte sein veraltetes Desktop-Bestellsystem durch eine moderne B2B-Webplattform ersetzen. Die grössten Hürden: ein Katalog mit über 500,000 Artikeln, komplexe Staffelpreise je nach Händlerstufe, Echtzeit-Bestände aus mehreren Lagern und eine Teilesuche per Fahrgestellnummer (VIN).',
        approach:
          'Wir haben eine modulare Plattform mit getrennten Engines für Katalogverwaltung, Preisberechnung und Bestandsabgleich gebaut. Elasticsearch treibt die Teilesuche an, inklusive VIN-Dekodierung. PostgreSQL verwaltet die komplexe Preismatrix, JSONB-Felder sorgen für Flexibilität.',
        solution:
          'Eine vollständige B2B-E-Commerce-Plattform mit Teilesuche per VIN, händlerspezifischen Preisen, Echtzeit-Beständen über mehrere Lager, Auftragsverwaltung und einem Admin-Dashboard für Katalog und Preise.',
        results: [
          {
            metric: 'Bearbeitungszeit pro Bestellung',
            value: '-65%',
          },
          {
            metric: 'Indexierte Artikel',
            value: '500,000+',
          },
          {
            metric: 'Aktive Händler',
            value: '120+',
          },
          {
            metric: 'Antwortzeit der Suche',
            value: '<200ms',
          },
        ],
        meta: {
          title: 'Zenit Auto B2B-Plattform — Fallstudie Trident Software',
          description:
            'B2B-Shop für Autoteile mit 500K Artikeln, Staffelpreisen pro Händler, VIN-Suche und Echtzeit-Beständen aus mehreren Lagern.',
        },
      },
      fr: {
        industry: 'Pièces automobiles / E-commerce B2B',
        hero: {
          title: 'Zenit Auto — Plateforme B2B de pièces auto',
          tagline: 'Prix par paliers, 500K références, stock en temps réel',
          image: '/images/cases/zenitavto-b2b-checkout-screen.jpg',
        },
        challenge:
          'Zenit Auto devait quitter un ancien logiciel de commande sur poste fixe pour une plateforme web B2B moderne. Les principaux défis : un catalogue de plus de 500,000 références, des prix par paliers selon le niveau du revendeur, un stock en temps réel réparti sur plusieurs entrepôts et une recherche de pièces par numéro VIN.',
        approach:
          "Nous avons construit une plateforme modulaire, avec des moteurs distincts pour le catalogue, le calcul des prix et l'agrégation des stocks. Elasticsearch alimente la recherche de pièces, avec décodage du VIN intégré. PostgreSQL gère la matrice de prix complexe, avec des champs JSONB pour garder de la souplesse.",
        solution:
          "Une plateforme d'e-commerce B2B complète : recherche de pièces par VIN, prix propres à chaque revendeur, stock multi-entrepôts en temps réel, gestion des commandes et tableau de bord d'administration pour le catalogue et les prix.",
        results: [
          {
            metric: 'Temps de traitement des commandes',
            value: '-65%',
          },
          {
            metric: 'Références indexées',
            value: '500,000+',
          },
          {
            metric: 'Revendeurs actifs',
            value: '120+',
          },
          {
            metric: 'Temps de réponse de la recherche',
            value: '<200ms',
          },
        ],
        meta: {
          title: 'Zenit Auto, plateforme B2B — Étude de cas Trident Software',
          description:
            'E-commerce B2B de pièces auto : 500K références, prix par niveau de revendeur, recherche par VIN et stock multi-entrepôts en temps réel.',
        },
      },
      it: {
        industry: 'Ricambi auto / E-commerce B2B',
        hero: {
          title: 'Zenit Auto — Piattaforma B2B di ricambi auto',
          tagline: 'Prezzi a scaglioni, 500K articoli, magazzino in tempo reale',
          image: '/images/cases/zenitavto-b2b-checkout-screen.jpg',
        },
        challenge:
          'Zenit Auto doveva passare da un vecchio sistema di ordinazione desktop a una piattaforma web B2B moderna. Le sfide principali: un catalogo di oltre 500,000 articoli, prezzi a scaglioni diversi per ogni livello di rivenditore, giacenze in tempo reale da più magazzini e la ricerca dei ricambi tramite numero di telaio (VIN).',
        approach:
          "Abbiamo costruito una piattaforma modulare con motori separati per la gestione del catalogo, il calcolo dei prezzi e l'aggregazione delle giacenze. Elasticsearch gestisce la ricerca dei ricambi con decodifica del VIN integrata. PostgreSQL regge la complessa matrice dei prezzi, con campi JSONB per avere flessibilità.",
        solution:
          'Una piattaforma e-commerce B2B completa: ricerca dei ricambi tramite VIN, prezzi specifici per rivenditore, giacenze multi-magazzino in tempo reale, gestione degli ordini e una dashboard di amministrazione per catalogo e listini.',
        results: [
          {
            metric: 'Tempo di evasione degli ordini',
            value: '-65%',
          },
          {
            metric: 'Articoli indicizzati',
            value: '500,000+',
          },
          {
            metric: 'Rivenditori attivi',
            value: '120+',
          },
          {
            metric: 'Tempo di risposta della ricerca',
            value: '<200ms',
          },
        ],
        meta: {
          title: 'Zenit Auto, piattaforma B2B — Case study Trident Software',
          description:
            'E-commerce B2B di ricambi auto con 500K articoli, prezzi per livello di rivenditore, ricerca VIN e giacenze multi-magazzino in tempo reale.',
        },
      },
    },
  },
  {
    slug: '8move-driver',
    client: '8Move',
    services: ['logistics-and-operations-platforms', 'software-engineering'],
    techStack: ['Flutter', 'Dart', 'Google Maps API', 'WebSocket', 'Firebase'],
    relatedCases: [],
    content: {
      en: {
        industry: 'Logistics / Last-mile Delivery',
        hero: {
          title: '8Move Driver App',
          tagline: 'Real-time delivery management for last-mile drivers',
          image: '/images/cases/8move-driver-mobile.jpg',
        },
        challenge:
          '8Move needed a cross-platform mobile app for delivery drivers that handles real-time route assignment, delivery confirmation, proof-of-delivery capture, and live location sharing — with offline capability for areas with poor connectivity.',
        approach:
          'Flutter was chosen for single-codebase iOS/Android delivery. We implemented an offline-first architecture with local SQLite storage and background sync. Google Maps SDK handles routing with live traffic. WebSocket provides real-time dispatcher communication.',
        solution:
          'A production Flutter app used daily by 8Move drivers. Features: real-time route optimization, barcode/QR scanning for package tracking, photo proof-of-delivery, in-app messaging with dispatch, and offline-capable order management.',
        results: [
          {
            metric: 'Delivery success rate',
            value: '+18%',
          },
          {
            metric: 'Average delivery time',
            value: '-12 min',
          },
          {
            metric: 'Driver onboarding time',
            value: '<30 minutes',
          },
        ],
        meta: {
          title: '8Move Driver App — Trident Software Case Study',
          description:
            'Cross-platform Flutter app for last-mile delivery drivers with offline capability, real-time routing, and proof-of-delivery.',
        },
      },
      de: {
        industry: 'Logistik / Letzte Meile',
        hero: {
          title: '8Move Driver App',
          tagline: 'Lieferungen in Echtzeit steuern, für Fahrer auf der letzten Meile',
          image: '/images/cases/8move-driver-mobile.jpg',
        },
        challenge:
          '8Move brauchte eine plattformübergreifende App für Lieferfahrer: Routenzuweisung in Echtzeit, Zustellbestätigung, Liefernachweis und Live-Standortfreigabe. Dazu sollte sie auch offline funktionieren, wo der Empfang schlecht ist.',
        approach:
          'Wir haben Flutter gewählt, um iOS und Android mit einer Codebasis abzudecken. Die Architektur ist offline-first, mit lokalem SQLite-Speicher und Synchronisation im Hintergrund. Das Google Maps SDK übernimmt das Routing mit Live-Verkehr, WebSocket die Echtzeit-Kommunikation mit der Disposition.',
        solution:
          'Eine produktive Flutter-App, die 8Move-Fahrer täglich nutzen. Funktionen: Routenoptimierung in Echtzeit, Barcode- und QR-Scan zur Paketverfolgung, Liefernachweis per Foto, Chat mit der Disposition in der App und Auftragsverwaltung auch ohne Netz.',
        results: [
          {
            metric: 'Erfolgreiche Zustellungen',
            value: '+18%',
          },
          {
            metric: 'Durchschnittliche Lieferzeit',
            value: '-12 Min.',
          },
          {
            metric: 'Einarbeitungszeit neuer Fahrer',
            value: '<30 Minuten',
          },
        ],
        meta: {
          title: '8Move Driver App — Fallstudie Trident Software',
          description:
            'Plattformübergreifende Flutter-App für Lieferfahrer auf der letzten Meile: offlinefähig, Routing in Echtzeit, Liefernachweis.',
        },
      },
      fr: {
        industry: 'Logistique / Livraison du dernier kilomètre',
        hero: {
          title: '8Move Driver App',
          tagline: 'Les livraisons du dernier kilomètre pilotées en temps réel',
          image: '/images/cases/8move-driver-mobile.jpg',
        },
        challenge:
          "8Move avait besoin d'une application mobile multiplateforme pour ses livreurs : attribution des tournées en temps réel, confirmation de livraison, preuve de livraison et partage de position en direct. Elle devait aussi fonctionner hors ligne dans les zones mal couvertes.",
        approach:
          "Nous avons choisi Flutter pour couvrir iOS et Android avec une seule base de code. L'architecture est pensée hors ligne d'abord, avec stockage local SQLite et synchronisation en arrière-plan. Le SDK Google Maps calcule les itinéraires avec le trafic en direct, et WebSocket assure la communication en temps réel avec le dispatch.",
        solution:
          'Une application Flutter en production, utilisée chaque jour par les livreurs 8Move. Au menu : optimisation des tournées en temps réel, scan de codes-barres et QR pour le suivi des colis, preuve de livraison par photo, messagerie intégrée avec le dispatch et gestion des commandes même sans réseau.',
        results: [
          {
            metric: 'Taux de livraisons réussies',
            value: '+18%',
          },
          {
            metric: 'Durée moyenne de livraison',
            value: '-12 min',
          },
          {
            metric: 'Prise en main par un nouveau livreur',
            value: '<30 minutes',
          },
        ],
        meta: {
          title: '8Move Driver App — Étude de cas Trident Software',
          description:
            'Application Flutter multiplateforme pour les livreurs du dernier kilomètre : mode hors ligne, itinéraires en temps réel, preuve de livraison.',
        },
      },
      it: {
        industry: "Logistica / Consegne dell'ultimo miglio",
        hero: {
          title: '8Move Driver App',
          tagline: "Gestione in tempo reale delle consegne per gli autisti dell'ultimo miglio",
          image: '/images/cases/8move-driver-mobile.jpg',
        },
        challenge:
          "8Move aveva bisogno di un'app multipiattaforma per i suoi autisti: assegnazione dei percorsi in tempo reale, conferma di consegna, prova di consegna e condivisione della posizione dal vivo. L'app doveva funzionare anche offline, nelle zone con poca copertura.",
        approach:
          "Abbiamo scelto Flutter per coprire iOS e Android con un'unica base di codice. L'architettura è offline-first, con archiviazione locale su SQLite e sincronizzazione in background. Il Google Maps SDK calcola i percorsi con il traffico in tempo reale, mentre WebSocket gestisce la comunicazione istantanea con la centrale operativa.",
        solution:
          "Un'app Flutter in produzione, usata ogni giorno dagli autisti di 8Move. Funzioni: ottimizzazione dei percorsi in tempo reale, scansione di codici a barre e QR per tracciare i pacchi, prova di consegna con foto, chat integrata con la centrale e gestione degli ordini anche senza rete.",
        results: [
          {
            metric: 'Consegne andate a buon fine',
            value: '+18%',
          },
          {
            metric: 'Tempo medio di consegna',
            value: '-12 min',
          },
          {
            metric: 'Tempo di inserimento di un nuovo autista',
            value: '<30 minuti',
          },
        ],
        meta: {
          title: '8Move Driver App — Case study Trident Software',
          description:
            "App Flutter multipiattaforma per autisti dell'ultimo miglio: funziona offline, percorsi in tempo reale e prova di consegna.",
        },
      },
    },
  },
  {
    slug: 'tdsbot-iot',
    client: 'TDSbot',
    services: ['embedded-and-iot', 'software-engineering'],
    techStack: ['C++', 'ESP32', 'MQTT', 'InfluxDB', 'Grafana', 'Python', 'AWS IoT'],
    relatedCases: ['post-acute-clinic-network'],
    content: {
      en: {
        industry: 'Water Treatment / IoT',
        hero: {
          title: 'TDSbot — IoT Water Quality Monitor',
          tagline: 'Real-time water purity monitoring for industrial plants',
          image: '/images/cases/watertds-website-home-mobile.jpg',
        },
        challenge:
          'Industrial water purification facilities needed continuous monitoring of TDS (total dissolved solids), pH, and flow rates across multiple measurement points — with alerting when parameters drift outside safe ranges and historical data for compliance reporting.',
        approach:
          'We designed a sensor network using ESP32 microcontrollers with analog sensor interfaces. Data flows via MQTT to an AWS IoT Core broker, then into InfluxDB for time-series storage. Grafana provides the operations dashboard. Alert thresholds trigger SMS and email notifications.',
        solution:
          'An end-to-end IoT monitoring system: custom ESP32 sensor nodes → MQTT → AWS IoT → InfluxDB → Grafana dashboard. Plant operators see real-time readings, trend charts, and receive instant alerts. Compliance reports are auto-generated from historical data.',
        results: [
          {
            metric: 'Monitoring points',
            value: '24 per facility',
          },
          {
            metric: 'Alert response time',
            value: '<30 seconds',
          },
          {
            metric: 'Sensor uptime',
            value: '99.7%',
          },
          {
            metric: 'Manual checks eliminated',
            value: '85%',
          },
        ],
        meta: {
          title: 'TDSbot IoT Water Monitor — Trident Software Case Study',
          description:
            'IoT water quality monitoring system for industrial plants. ESP32 sensors, MQTT, InfluxDB, Grafana. Real-time alerting.',
        },
      },
      de: {
        industry: 'Wasseraufbereitung / IoT',
        hero: {
          title: 'TDSbot — IoT-Überwachung der Wasserqualität',
          tagline: 'Wasserreinheit in Industrieanlagen in Echtzeit überwachen',
          image: '/images/cases/watertds-website-home-mobile.jpg',
        },
        challenge:
          'Industrielle Wasseraufbereitungsanlagen mussten TDS (gelöste Feststoffe), pH-Wert und Durchfluss an mehreren Messpunkten laufend überwachen. Gefragt waren Alarme, sobald Werte den sicheren Bereich verlassen, sowie historische Daten für Compliance-Berichte.',
        approach:
          'Wir haben ein Sensornetz mit ESP32-Mikrocontrollern und analogen Sensorschnittstellen entworfen. Die Daten gelangen per MQTT zu einem AWS IoT Core Broker und von dort in InfluxDB als Zeitreihen. Grafana dient als Betriebs-Dashboard. Bei Überschreiten von Grenzwerten gehen Alarme per SMS und E-Mail raus.',
        solution:
          'Ein durchgängiges IoT-Überwachungssystem: eigene ESP32-Sensorknoten → MQTT → AWS IoT → InfluxDB → Grafana-Dashboard. Das Anlagenpersonal sieht Messwerte in Echtzeit und Trendkurven und erhält sofort Alarme. Compliance-Berichte entstehen automatisch aus den historischen Daten.',
        results: [
          {
            metric: 'Messpunkte',
            value: '24 pro Anlage',
          },
          {
            metric: 'Reaktionszeit bei Alarmen',
            value: '<30 Sekunden',
          },
          {
            metric: 'Verfügbarkeit der Sensoren',
            value: '99.7%',
          },
          {
            metric: 'Wegfallende manuelle Kontrollen',
            value: '85%',
          },
        ],
        meta: {
          title: 'TDSbot IoT-Wasserüberwachung — Fallstudie Trident Software',
          description:
            'IoT-System zur Überwachung der Wasserqualität in Industrieanlagen. ESP32-Sensoren, MQTT, InfluxDB, Grafana. Alarme in Echtzeit.',
        },
      },
      fr: {
        industry: "Traitement de l'eau / IoT",
        hero: {
          title: "TDSbot — Surveillance IoT de la qualité de l'eau",
          tagline: "La pureté de l'eau des sites industriels surveillée en temps réel",
          image: '/images/cases/watertds-website-home-mobile.jpg',
        },
        challenge:
          "Des installations industrielles de purification d'eau devaient surveiller en continu le TDS (matières dissoutes totales), le pH et les débits sur plusieurs points de mesure. Il fallait une alerte dès qu'un paramètre sortait de la plage sûre, ainsi qu'un historique pour les rapports de conformité.",
        approach:
          "Nous avons conçu un réseau de capteurs basé sur des microcontrôleurs ESP32 avec interfaces analogiques. Les données transitent par MQTT vers un broker AWS IoT Core, puis sont stockées en séries temporelles dans InfluxDB. Grafana sert de tableau de bord d'exploitation. Les seuils d'alerte déclenchent des notifications par SMS et e-mail.",
        solution:
          "Un système de surveillance IoT de bout en bout : capteurs ESP32 sur mesure → MQTT → AWS IoT → InfluxDB → tableau de bord Grafana. Les opérateurs voient les mesures en temps réel et les courbes de tendance, et reçoivent les alertes immédiatement. Les rapports de conformité sont générés automatiquement à partir de l'historique.",
        results: [
          {
            metric: 'Points de mesure',
            value: '24 par site',
          },
          {
            metric: 'Délai de réaction aux alertes',
            value: '<30 secondes',
          },
          {
            metric: 'Disponibilité des capteurs',
            value: '99.7%',
          },
          {
            metric: 'Contrôles manuels supprimés',
            value: '85%',
          },
        ],
        meta: {
          title: "TDSbot, surveillance IoT de l'eau — Étude de cas Trident",
          description:
            "Surveillance IoT de la qualité de l'eau pour sites industriels. Capteurs ESP32, MQTT, InfluxDB, Grafana. Alertes en temps réel.",
        },
      },
      it: {
        industry: 'Trattamento delle acque / IoT',
        hero: {
          title: "TDSbot — Monitoraggio IoT della qualità dell'acqua",
          tagline: "La purezza dell'acqua negli impianti industriali, controllata in tempo reale",
          image: '/images/cases/watertds-website-home-mobile.jpg',
        },
        challenge:
          "Alcuni impianti industriali di depurazione dell'acqua dovevano monitorare di continuo TDS (solidi disciolti totali), pH e portata su più punti di misura. Servivano allarmi quando i valori uscivano dai limiti di sicurezza e uno storico dei dati per i report di conformità.",
        approach:
          'Abbiamo progettato una rete di sensori basata su microcontrollori ESP32 con interfacce analogiche. I dati viaggiano via MQTT verso un broker AWS IoT Core e finiscono in InfluxDB come serie temporali. Grafana fa da dashboard operativa. Al superamento delle soglie partono notifiche via SMS ed e-mail.',
        solution:
          'Un sistema di monitoraggio IoT completo: nodi sensore ESP32 su misura → MQTT → AWS IoT → InfluxDB → dashboard Grafana. Gli operatori vedono le misure in tempo reale e i grafici di tendenza, e ricevono subito gli allarmi. I report di conformità si generano in automatico dallo storico.',
        results: [
          {
            metric: 'Punti di misura',
            value: '24 per impianto',
          },
          {
            metric: 'Tempo di risposta agli allarmi',
            value: '<30 secondi',
          },
          {
            metric: 'Disponibilità dei sensori',
            value: '99.7%',
          },
          {
            metric: 'Controlli manuali eliminati',
            value: '85%',
          },
        ],
        meta: {
          title: "TDSbot, monitoraggio IoT dell'acqua — Case study Trident",
          description:
            "Sistema IoT per monitorare la qualità dell'acqua negli impianti industriali. Sensori ESP32, MQTT, InfluxDB, Grafana. Allarmi in tempo reale.",
        },
      },
    },
  },
  {
    slug: 'lapochette',
    client: 'LaPochette',
    services: ['software-engineering'],
    techStack: ['React', 'Next.js', 'Node.js', 'Stripe', 'PostgreSQL', 'Cloudinary'],
    relatedCases: [],
    content: {
      en: {
        industry: 'Fashion & Luxury',
        hero: {
          title: 'LaPochette — Luxury Bag Rental Platform',
          tagline: 'The Airbnb of designer handbags',
          image: '/images/cases/mobile-lapochette-product-website-screen.jpg',
        },
        challenge:
          'LaPochette needed a marketplace platform for renting designer handbags (Chanel, Louis Vuitton, Gucci) between private owners and renters. Key challenges: trust & authenticity verification, damage deposit handling, rental period management, and a premium UX that matches the luxury segment.',
        approach:
          'We built a two-sided marketplace with separate flows for bag owners and renters. Stripe handles deposits and escrow. An authenticity verification workflow ensures bags are photographed from specific angles before each rental. Insurance integration covers damage claims.',
        solution:
          'A luxury rental marketplace with owner onboarding, bag authentication flow, renter search and booking, Stripe-based deposit management, rental period tracking, damage reporting, and review system. Premium UI designed to match the luxury brand positioning.',
        results: [
          {
            metric: 'Listed bags at launch',
            value: '200+',
          },
          {
            metric: 'Dispute rate',
            value: '<2%',
          },
          {
            metric: 'Average booking value',
            value: 'CHF 180',
          },
        ],
        meta: {
          title: 'LaPochette Luxury Bag Rental — Trident Software Case Study',
          description:
            'Two-sided marketplace for luxury designer handbag rentals. Stripe escrow, authenticity verification, premium UX.',
        },
      },
      de: {
        industry: 'Mode & Luxus',
        hero: {
          title: 'LaPochette — Mietplattform für Luxustaschen',
          tagline: 'Das Airbnb für Designer-Handtaschen',
          image: '/images/cases/mobile-lapochette-product-website-screen.jpg',
        },
        challenge:
          'LaPochette brauchte einen Marktplatz, auf dem Privatpersonen Designer-Handtaschen (Chanel, Louis Vuitton, Gucci) vermieten und mieten. Die Knackpunkte: Vertrauen und Echtheitsprüfung, Kautionen für Schäden, Verwaltung der Mietdauer und eine hochwertige UX, die zum Luxussegment passt.',
        approach:
          'Wir haben einen zweiseitigen Marktplatz mit getrennten Abläufen für Besitzer und Mieter gebaut. Stripe wickelt Kautionen und Treuhandzahlungen ab. Ein Prüfablauf zur Echtheit verlangt vor jeder Vermietung Fotos der Tasche aus festgelegten Blickwinkeln. Eine Versicherungsanbindung deckt Schadensfälle ab.',
        solution:
          'Ein Luxus-Mietmarktplatz mit Onboarding für Besitzer, Echtheitsprüfung, Suche und Buchung für Mieter, Kautionsverwaltung über Stripe, Verfolgung der Mietdauer, Schadensmeldung und Bewertungssystem. Das hochwertige UI passt zur Positionierung als Luxusmarke.',
        results: [
          {
            metric: 'Angebotene Taschen zum Start',
            value: '200+',
          },
          {
            metric: 'Streitfallquote',
            value: '<2%',
          },
          {
            metric: 'Durchschnittlicher Buchungswert',
            value: 'CHF 180',
          },
        ],
        meta: {
          title: 'LaPochette Luxustaschen-Vermietung — Fallstudie Trident',
          description:
            'Zweiseitiger Marktplatz für die Vermietung von Designer-Handtaschen. Stripe-Treuhand, Echtheitsprüfung, hochwertige UX.',
        },
      },
      fr: {
        industry: 'Mode & Luxe',
        hero: {
          title: 'LaPochette — Location de sacs de luxe',
          tagline: "L'Airbnb des sacs de créateurs",
          image: '/images/cases/mobile-lapochette-product-website-screen.jpg',
        },
        challenge:
          "LaPochette avait besoin d'une marketplace pour la location de sacs de créateurs (Chanel, Louis Vuitton, Gucci) entre particuliers. Les enjeux : la confiance et la vérification d'authenticité, les cautions en cas de dommage, la gestion des périodes de location et une UX haut de gamme, à la hauteur du segment luxe.",
        approach:
          'Nous avons construit une marketplace à deux faces, avec des parcours distincts pour les propriétaires et les locataires. Stripe gère les cautions et le séquestre. Un processus de vérification exige des photos du sac sous des angles précis avant chaque location. Une intégration avec un assureur couvre les sinistres.',
        solution:
          "Une marketplace de location de luxe avec inscription des propriétaires, authentification des sacs, recherche et réservation pour les locataires, gestion des cautions via Stripe, suivi des périodes de location, déclaration de dommages et système d'avis. Une interface soignée, alignée sur le positionnement luxe de la marque.",
        results: [
          {
            metric: 'Sacs proposés au lancement',
            value: '200+',
          },
          {
            metric: 'Taux de litiges',
            value: '<2%',
          },
          {
            metric: "Valeur moyenne d'une réservation",
            value: 'CHF 180',
          },
        ],
        meta: {
          title: 'LaPochette, location de sacs de luxe — Étude de cas Trident',
          description:
            "Marketplace à deux faces pour louer des sacs de créateurs. Séquestre Stripe, vérification d'authenticité, UX haut de gamme.",
        },
      },
      it: {
        industry: 'Moda & Lusso',
        hero: {
          title: 'LaPochette — Noleggio di borse di lusso',
          tagline: "L'Airbnb delle borse firmate",
          image: '/images/cases/mobile-lapochette-product-website-screen.jpg',
        },
        challenge:
          "LaPochette aveva bisogno di un marketplace per il noleggio di borse firmate (Chanel, Louis Vuitton, Gucci) tra privati. I nodi da sciogliere: fiducia e verifica dell'autenticità, cauzioni per eventuali danni, gestione dei periodi di noleggio e una UX di alto livello, all'altezza del segmento lusso.",
        approach:
          "Abbiamo costruito un marketplace a due lati, con percorsi separati per proprietari e noleggiatori. Stripe gestisce cauzioni e deposito a garanzia. Un processo di verifica richiede foto della borsa da angolazioni precise prima di ogni noleggio. Un'integrazione assicurativa copre i danni.",
        solution:
          "Un marketplace di noleggio di lusso con registrazione dei proprietari, verifica delle borse, ricerca e prenotazione per chi noleggia, gestione delle cauzioni tramite Stripe, monitoraggio dei periodi di noleggio, segnalazione dei danni e sistema di recensioni. Un'interfaccia raffinata, coerente con il posizionamento di lusso del marchio.",
        results: [
          {
            metric: 'Borse disponibili al lancio',
            value: '200+',
          },
          {
            metric: 'Tasso di contestazioni',
            value: '<2%',
          },
          {
            metric: 'Valore medio di una prenotazione',
            value: 'CHF 180',
          },
        ],
        meta: {
          title: 'LaPochette, noleggio borse di lusso — Case study Trident',
          description:
            'Marketplace a due lati per noleggiare borse firmate. Deposito a garanzia con Stripe, verifica di autenticità, UX di alto livello.',
        },
      },
    },
  },
  {
    slug: 'iam-trade',
    client: 'IAM Trade',
    services: ['software-engineering'],
    techStack: ['Python', 'React', 'PostgreSQL', 'AWS', 'Docker', 'Redis'],
    relatedCases: ['zenit-auto-b2b', 'kleap-ai-builder'],
    content: {
      en: {
        industry: 'B2B E-commerce',
        hero: {
          title: 'IAM Trade — B2B E-commerce Platform',
          tagline: 'Custom B2B/B2C/B2X platform handling up to 1M products with 200+ integrations',
        },
        challenge:
          'A Swiss trading company needed a flexible multi-channel e-commerce platform to handle complex B2B pricing, large product catalogs (up to 1M items), and seamless integration with existing ERP, CRM, WMS, and financial systems.',
        approach:
          'We designed a modular platform with separate functional domains: account management, product catalog, order processing, pricing engine, and delivery management. Each module is independently deployable and integrates via internal APIs.',
        solution:
          'Full-stack B2B/B2C/B2X e-commerce platform with personalized pricing, multilingual product catalogs with 3D views, automated order-to-invoice pipelines, multi-warehouse delivery management, and 200+ third-party integrations (ERP, CRM, WMS, PIM, TMS, payment gateways).',
        results: [
          {
            metric: 'Products supported',
            value: '1M+',
          },
          {
            metric: 'Integrations',
            value: '200+',
          },
          {
            metric: 'Order processing',
            value: 'Automated',
          },
          {
            metric: 'Time-to-market',
            value: '3 months',
          },
        ],
        meta: {
          title: 'IAM Trade B2B Platform — Trident Software',
          description:
            'Custom B2B/B2C/B2X e-commerce platform with 1M+ products and 200+ integrations built for a Swiss trading company.',
        },
      },
      de: {
        industry: 'B2B-E-Commerce',
        hero: {
          title: 'IAM Trade — B2B-E-Commerce-Plattform',
          tagline: 'Massgeschneiderte B2B/B2C/B2X-Plattform für bis zu 1M Produkte und über 200 Integrationen',
        },
        challenge:
          'Ein Schweizer Handelsunternehmen brauchte eine flexible Multichannel-E-Commerce-Plattform: für komplexe B2B-Preise, grosse Produktkataloge (bis zu 1M Artikel) und eine reibungslose Anbindung an bestehende ERP-, CRM-, WMS- und Finanzsysteme.',
        approach:
          'Wir haben eine modulare Plattform mit getrennten Fachbereichen entworfen: Kontoverwaltung, Produktkatalog, Auftragsabwicklung, Preis-Engine und Lieferverwaltung. Jedes Modul lässt sich einzeln deployen und ist über interne APIs angebunden.',
        solution:
          'Eine Full-Stack-E-Commerce-Plattform für B2B/B2C/B2X mit individuellen Preisen, mehrsprachigen Produktkatalogen mit 3D-Ansichten, automatisierten Abläufen von der Bestellung bis zur Rechnung, Lieferverwaltung über mehrere Lager und über 200 Drittanbieter-Integrationen (ERP, CRM, WMS, PIM, TMS, Zahlungsanbieter).',
        results: [
          {
            metric: 'Unterstützte Produkte',
            value: '1M+',
          },
          {
            metric: 'Integrationen',
            value: '200+',
          },
          {
            metric: 'Auftragsabwicklung',
            value: 'Automatisiert',
          },
          {
            metric: 'Time-to-Market',
            value: '3 Monate',
          },
        ],
        meta: {
          title: 'IAM Trade B2B-Plattform — Trident Software',
          description:
            'Massgeschneiderte B2B/B2C/B2X-E-Commerce-Plattform mit über 1M Produkten und 200+ Integrationen für ein Schweizer Handelsunternehmen.',
        },
      },
      fr: {
        industry: 'E-commerce B2B',
        hero: {
          title: "IAM Trade — Plateforme d'e-commerce B2B",
          tagline: "Plateforme B2B/B2C/B2X sur mesure, jusqu'à 1M de produits et plus de 200 intégrations",
        },
        challenge:
          "Une société de négoce suisse cherchait une plateforme d'e-commerce multicanal flexible, capable de gérer des prix B2B complexes, de grands catalogues (jusqu'à 1M d'articles) et de s'intégrer sans accroc aux systèmes ERP, CRM, WMS et financiers existants.",
        approach:
          'Nous avons conçu une plateforme modulaire découpée en domaines fonctionnels : gestion des comptes, catalogue produits, traitement des commandes, moteur de prix et gestion des livraisons. Chaque module se déploie indépendamment et communique via des API internes.',
        solution:
          "Une plateforme d'e-commerce full-stack B2B/B2C/B2X avec prix personnalisés, catalogues multilingues avec vues 3D, chaîne automatisée de la commande à la facture, livraisons multi-entrepôts et plus de 200 intégrations tierces (ERP, CRM, WMS, PIM, TMS, passerelles de paiement).",
        results: [
          {
            metric: 'Produits pris en charge',
            value: '1M+',
          },
          {
            metric: 'Intégrations',
            value: '200+',
          },
          {
            metric: 'Traitement des commandes',
            value: 'Automatisé',
          },
          {
            metric: 'Mise sur le marché',
            value: '3 mois',
          },
        ],
        meta: {
          title: 'IAM Trade, plateforme B2B — Trident Software',
          description:
            "Plateforme d'e-commerce B2B/B2C/B2X sur mesure, plus de 1M de produits et 200+ intégrations, réalisée pour une société de négoce suisse.",
        },
      },
      it: {
        industry: 'E-commerce B2B',
        hero: {
          title: 'IAM Trade — Piattaforma e-commerce B2B',
          tagline: 'Piattaforma B2B/B2C/B2X su misura, fino a 1M di prodotti e oltre 200 integrazioni',
        },
        challenge:
          "Un'azienda commerciale svizzera cercava una piattaforma e-commerce multicanale e flessibile, in grado di gestire prezzi B2B complessi, grandi cataloghi (fino a 1M di articoli) e di integrarsi senza intoppi con i sistemi ERP, CRM, WMS e contabili già in uso.",
        approach:
          'Abbiamo progettato una piattaforma modulare divisa in domini funzionali: gestione degli account, catalogo prodotti, elaborazione degli ordini, motore dei prezzi e gestione delle consegne. Ogni modulo si rilascia in modo indipendente e comunica tramite API interne.',
        solution:
          "Una piattaforma e-commerce full-stack B2B/B2C/B2X con prezzi personalizzati, cataloghi multilingue con viste 3D, flusso automatico dall'ordine alla fattura, consegne da più magazzini e oltre 200 integrazioni di terze parti (ERP, CRM, WMS, PIM, TMS, gateway di pagamento).",
        results: [
          {
            metric: 'Prodotti gestiti',
            value: '1M+',
          },
          {
            metric: 'Integrazioni',
            value: '200+',
          },
          {
            metric: 'Elaborazione degli ordini',
            value: 'Automatizzata',
          },
          {
            metric: 'Time-to-market',
            value: '3 mesi',
          },
        ],
        meta: {
          title: 'IAM Trade, piattaforma B2B — Trident Software',
          description:
            "Piattaforma e-commerce B2B/B2C/B2X su misura con oltre 1M di prodotti e 200+ integrazioni, creata per un'azienda commerciale svizzera.",
        },
      },
    },
  },
  {
    slug: 'arenawave',
    client: 'ArenaWave',
    services: ['software-engineering', 'embedded-and-iot'],
    techStack: ['React Native', 'Node.js', 'IoT', 'PostgreSQL', 'AWS', 'MQTT'],
    relatedCases: ['tdsbot-iot', '8move-driver'],
    content: {
      en: {
        industry: 'Sports Tech / IoT',
        hero: {
          title: 'ArenaWave — Smart Sports Court System',
          tagline: 'IoT-powered court management: automated booking, smart access, and facility analytics',
        },
        challenge:
          'Sports facility operators struggled with low court utilization, manual booking processes, and lack of visibility into facility performance. Managing lighting, access control, and scheduling across multiple courts required constant staff presence.',
        approach:
          'We designed an integrated system with three components: an IoT device layer embedded in each court, a mobile app for players, and a management dashboard for operators. All components communicate in real time via cloud infrastructure.',
        solution:
          'ArenaWave transforms traditional sports courts into IoT-enabled smart spaces. Players book and access courts via mobile app with smart lock integration. Operators control lighting, AC, and music remotely, view utilization analytics, and receive automated maintenance alerts. Supports squash, tennis, padel, and badminton.',
        results: [
          {
            metric: 'Court automation',
            value: '100%',
          },
          {
            metric: 'Sports supported',
            value: '4+',
          },
          {
            metric: 'Staff dependency',
            value: 'Reduced',
          },
        ],
        meta: {
          title: 'ArenaWave Smart Court System — Trident Software Case Study',
          description:
            'IoT-powered sports court management system with automated booking, smart access control, and facility analytics.',
        },
      },
      de: {
        industry: 'Sporttechnologie / IoT',
        hero: {
          title: 'ArenaWave — Smartes System für Sportplätze',
          tagline: 'Platzverwaltung mit IoT: automatische Buchung, smarter Zutritt und Auswertungen zur Anlage',
        },
        challenge:
          'Betreiber von Sportanlagen kämpften mit schlecht ausgelasteten Plätzen, manueller Buchung und fehlendem Überblick über die Leistung ihrer Anlage. Beleuchtung, Zutritt und Belegung über mehrere Plätze hinweg zu steuern, erforderte ständig Personal vor Ort.',
        approach:
          'Wir haben ein integriertes System aus drei Teilen entworfen: eine IoT-Geräteschicht in jedem Platz, eine mobile App für die Spieler und ein Verwaltungs-Dashboard für die Betreiber. Alle Teile kommunizieren in Echtzeit über eine Cloud-Infrastruktur.',
        solution:
          'ArenaWave macht aus klassischen Sportplätzen vernetzte, smarte Anlagen. Spieler buchen per App und öffnen den Platz über ein smartes Schloss. Betreiber steuern Licht, Klimaanlage und Musik aus der Ferne, sehen Auslastungsdaten und erhalten automatische Wartungshinweise. Unterstützt werden Squash, Tennis, Padel und Badminton.',
        results: [
          {
            metric: 'Automatisierung der Plätze',
            value: '100%',
          },
          {
            metric: 'Unterstützte Sportarten',
            value: '4+',
          },
          {
            metric: 'Abhängigkeit vom Personal',
            value: 'Reduziert',
          },
        ],
        meta: {
          title: 'ArenaWave Smart-Court-System — Fallstudie Trident Software',
          description:
            'IoT-System zur Verwaltung von Sportplätzen mit automatischer Buchung, smarter Zutrittskontrolle und Auslastungsanalysen.',
        },
      },
      fr: {
        industry: 'Sport Tech / IoT',
        hero: {
          title: 'ArenaWave — Système de terrains de sport connectés',
          tagline:
            "Gestion des terrains par l'IoT : réservation automatique, accès intelligent et analyse de l'activité",
        },
        challenge:
          "Les exploitants de centres sportifs faisaient face à des terrains sous-utilisés, à des réservations manuelles et à un manque de visibilité sur les performances de leur site. Gérer l'éclairage, les accès et le planning de plusieurs terrains exigeait une présence permanente du personnel.",
        approach:
          "Nous avons conçu un système intégré en trois volets : une couche d'objets connectés installée sur chaque terrain, une application mobile pour les joueurs et un tableau de bord de gestion pour les exploitants. Tous les éléments communiquent en temps réel via une infrastructure cloud.",
        solution:
          "ArenaWave transforme des terrains de sport classiques en espaces connectés. Les joueurs réservent depuis l'application et entrent grâce à une serrure connectée. Les exploitants pilotent à distance l'éclairage, la climatisation et la musique, consultent les taux d'occupation et reçoivent des alertes de maintenance automatiques. Squash, tennis, padel et badminton sont pris en charge.",
        results: [
          {
            metric: 'Automatisation des terrains',
            value: '100%',
          },
          {
            metric: 'Sports pris en charge',
            value: '4+',
          },
          {
            metric: 'Dépendance au personnel',
            value: 'Réduite',
          },
        ],
        meta: {
          title: 'ArenaWave, terrains connectés — Étude de cas Trident Software',
          description:
            "Gestion de terrains de sport par l'IoT : réservation automatique, contrôle d'accès intelligent et statistiques d'occupation.",
        },
      },
      it: {
        industry: 'Sport Tech / IoT',
        hero: {
          title: 'ArenaWave — Sistema smart per campi sportivi',
          tagline: "Gestione dei campi con l'IoT: prenotazioni automatiche, accesso smart e analisi della struttura",
        },
        challenge:
          "I gestori di impianti sportivi avevano campi poco sfruttati, prenotazioni gestite a mano e nessuna visione chiara sull'andamento della struttura. Controllare luci, accessi e calendario su più campi richiedeva personale sempre presente.",
        approach:
          "Abbiamo progettato un sistema integrato in tre parti: un livello di dispositivi IoT installato in ogni campo, un'app per i giocatori e una dashboard di gestione per i gestori. Tutte le parti comunicano in tempo reale tramite un'infrastruttura cloud.",
        solution:
          "ArenaWave trasforma i campi sportivi tradizionali in spazi smart connessi. I giocatori prenotano dall'app ed entrano grazie a una serratura smart. I gestori comandano a distanza luci, aria condizionata e musica, consultano i dati di utilizzo e ricevono avvisi di manutenzione automatici. Supporta squash, tennis, padel e badminton.",
        results: [
          {
            metric: 'Automazione dei campi',
            value: '100%',
          },
          {
            metric: 'Sport supportati',
            value: '4+',
          },
          {
            metric: 'Dipendenza dal personale',
            value: 'Ridotta',
          },
        ],
        meta: {
          title: 'ArenaWave, campi sportivi smart — Case study Trident Software',
          description:
            'Sistema IoT per la gestione di campi sportivi con prenotazioni automatiche, controllo accessi smart e analisi di utilizzo.',
        },
      },
    },
  },
  {
    slug: 'go-valais',
    client: 'GO-Valais Expat Club',
    services: ['software-engineering'],
    techStack: ['WordPress', 'PHP', 'MySQL', 'Elementor', 'WooCommerce'],
    relatedCases: ['kleap-ai-builder', 'lapochette'],
    content: {
      en: {
        industry: 'Community / NGO',
        hero: {
          title: 'GO-Valais — Expat Community Portal',
          tagline: 'Digital hub connecting expatriates in Valais, Switzerland',
          image: '/images/cases/conference-go-valais-website-screen-1.jpg',
        },
        challenge:
          'Expatriates relocating to Valais had no centralized platform to discover local events, access settlement resources, or connect with the international community. Event organizers lacked tools to reach the expat audience effectively.',
        approach:
          'We built a community-first web portal with a focus on event discovery and resource accessibility. The platform was designed to be self-managed by the GO-Valais team with minimal technical knowledge required.',
        solution:
          'A comprehensive community portal featuring an event calendar, resource library (healthcare, legal, job search), photo galleries, and multilingual content. The platform enabled GO-Valais to grow its membership and streamline event management across the Valais region.',
        results: [
          {
            metric: 'Community',
            value: 'Unified',
          },
          {
            metric: 'Languages',
            value: 'EN/FR/DE',
          },
          {
            metric: 'Event calendar',
            value: 'Self-managed',
          },
        ],
        testimonial: {
          text: 'This has greatly fostered development, unity and solidarity among our members.',
          author: 'David Ouedec',
          role: 'Head of GO-Valais Expat Club',
        },
        meta: {
          title: 'GO-Valais Expat Community Portal — Trident Software Case Study',
          description:
            'Community web portal for expatriates in Valais, Switzerland — event calendar, multilingual resources, and self-managed CMS.',
        },
      },
      de: {
        industry: 'Community / NGO',
        hero: {
          title: 'GO-Valais — Portal für die Expat-Community',
          tagline: 'Die digitale Anlaufstelle für Expats im Wallis',
          image: '/images/cases/conference-go-valais-website-screen-1.jpg',
        },
        challenge:
          'Expats, die ins Wallis zogen, hatten keine zentrale Plattform, um lokale Anlässe zu finden, Infos zum Ankommen abzurufen oder Kontakt zur internationalen Community zu knüpfen. Veranstalter wiederum fehlten die Mittel, um dieses Publikum gezielt zu erreichen.',
        approach:
          'Wir haben ein Webportal gebaut, das die Community ins Zentrum stellt, mit Fokus auf das Entdecken von Anlässen und leicht zugängliche Ressourcen. Das GO-Valais-Team kann die Plattform selbst pflegen, ohne viel technisches Wissen.',
        solution:
          'Ein umfassendes Community-Portal mit Veranstaltungskalender, Ressourcensammlung (Gesundheit, Recht, Stellensuche), Fotogalerien und mehrsprachigen Inhalten. Damit konnte GO-Valais seine Mitgliederzahl steigern und die Organisation von Anlässen im ganzen Wallis vereinfachen.',
        results: [
          {
            metric: 'Community',
            value: 'Vereint',
          },
          {
            metric: 'Sprachen',
            value: 'EN/FR/DE',
          },
          {
            metric: 'Veranstaltungskalender',
            value: 'Selbst verwaltet',
          },
        ],
        testimonial: {
          text: 'Das hat die Entwicklung, den Zusammenhalt und die Solidarität unter unseren Mitgliedern stark gefördert.',
          author: 'David Ouedec',
          role: 'Leiter des GO-Valais Expat Club',
        },
        meta: {
          title: 'GO-Valais Expat-Portal — Fallstudie Trident Software',
          description:
            'Community-Webportal für Expats im Wallis: Veranstaltungskalender, mehrsprachige Ressourcen und ein selbst verwaltetes CMS.',
        },
      },
      fr: {
        industry: 'Communauté / ONG',
        hero: {
          title: 'GO-Valais — Portail de la communauté expat',
          tagline: 'Le point de rencontre numérique des expatriés en Valais',
          image: '/images/cases/conference-go-valais-website-screen-1.jpg',
        },
        challenge:
          "Les expatriés qui s'installaient en Valais n'avaient aucune plateforme centrale pour découvrir les événements locaux, trouver des informations pratiques sur leur installation ou rencontrer la communauté internationale. Les organisateurs, eux, manquaient d'outils pour toucher ce public.",
        approach:
          "Nous avons construit un portail web centré sur la communauté, avec un accent sur la découverte d'événements et l'accès aux ressources. L'équipe de GO-Valais gère la plateforme elle-même, sans grandes connaissances techniques.",
        solution:
          "Un portail communautaire complet avec agenda des événements, centre de ressources (santé, droit, recherche d'emploi), galeries photos et contenus multilingues. La plateforme a permis à GO-Valais d'augmenter le nombre de ses membres et de simplifier l'organisation de ses événements dans tout le Valais.",
        results: [
          {
            metric: 'Communauté',
            value: 'Rassemblée',
          },
          {
            metric: 'Langues',
            value: 'EN/FR/DE',
          },
          {
            metric: 'Agenda des événements',
            value: 'Géré en autonomie',
          },
        ],
        testimonial: {
          text: "Cela a largement favorisé le développement, l'unité et la solidarité entre nos membres.",
          author: 'David Ouedec',
          role: 'Responsable du GO-Valais Expat Club',
        },
        meta: {
          title: 'GO-Valais, portail expat — Étude de cas Trident Software',
          description:
            'Portail communautaire pour les expatriés en Valais : agenda des événements, ressources multilingues et CMS géré en autonomie.',
        },
      },
      it: {
        industry: 'Comunità / ONG',
        hero: {
          title: 'GO-Valais — Portale della comunità expat',
          tagline: "Il punto d'incontro digitale degli expat in Vallese",
          image: '/images/cases/conference-go-valais-website-screen-1.jpg',
        },
        challenge:
          "Chi si trasferiva in Vallese dall'estero non aveva una piattaforma unica per scoprire gli eventi locali, trovare informazioni utili per sistemarsi o entrare in contatto con la comunità internazionale. Gli organizzatori di eventi, dal canto loro, non avevano strumenti per raggiungere questo pubblico.",
        approach:
          "Abbiamo realizzato un portale web pensato per la comunità, con l'accento sulla scoperta degli eventi e sull'accesso alle risorse. Il team di GO-Valais gestisce la piattaforma in autonomia, senza bisogno di grandi competenze tecniche.",
        solution:
          'Un portale comunitario completo con calendario eventi, raccolta di risorse (sanità, questioni legali, ricerca di lavoro), gallerie fotografiche e contenuti multilingue. Grazie alla piattaforma, GO-Valais ha aumentato i propri iscritti e semplificato la gestione degli eventi in tutto il Vallese.',
        results: [
          {
            metric: 'Comunità',
            value: 'Unita',
          },
          {
            metric: 'Lingue',
            value: 'EN/FR/DE',
          },
          {
            metric: 'Calendario eventi',
            value: 'Gestito in autonomia',
          },
        ],
        testimonial: {
          text: "Ha favorito molto la crescita, l'unità e la solidarietà tra i nostri membri.",
          author: 'David Ouedec',
          role: 'Responsabile del GO-Valais Expat Club',
        },
        meta: {
          title: 'GO-Valais, portale expat — Case study Trident Software',
          description:
            'Portale web per la comunità expat in Vallese: calendario eventi, risorse multilingue e un CMS gestito in autonomia.',
        },
      },
    },
  },
]

const localize = (r: CaseRecord, locale: string): CaseData => {
  const { content, ...rest } = r
  const { client, ...text } = pick(content, locale)
  return { ...rest, ...text, client: client ?? r.client }
}

/** Cases without a screenshot; their cards get a stock photo (the PDF cases use the homepage photos). */
const FALLBACK_IMAGE: Record<string, string> = {
  'iam-trade': '/images/stock/b2b-portal.jpg',
  arenawave: '/images/stock/iot-device.jpg',
  'post-acute-clinic-network': '/images/stock/clinic.jpg',
  'clinic-voice-documentation': '/images/stock/clinic-2.jpg',
  'warranty-control-component-maker': '/images/stock/water-telemetry.jpg',
  'fiduciary-mail-and-receipts': '/images/stock/office-2.jpg',
  'building-materials-order-to-load': '/images/stock/dispatch.jpg',
  'letting-agency-enquiry-to-viewing': '/images/stock/workspace.jpg',
}

/** The card photo of a case: its screenshot, else a stock photo. */
export function caseImage(c: CaseData) {
  return c.hero.image ?? FALLBACK_IMAGE[c.slug]
}

export function getCases(locale: string): CaseData[] {
  return records.map((r) => localize(r, locale))
}

export function getCaseBySlug(slug: string, locale: string): CaseData | undefined {
  const r = records.find((x) => x.slug === slug)
  return r && localize(r, locale)
}

export function getCaseSlugs(): string[] {
  return records.map((x) => x.slug)
}

export function getCaseLocales(slug: string) {
  const r = records.find((x) => x.slug === slug)
  return r ? localesOf(r.content) : []
}

export function getRelatedCases(slugs: string[], locale: string): CaseData[] {
  return getCases(locale).filter((c) => slugs.includes(c.slug))
}
