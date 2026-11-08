import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'media-entertainment',
  icon: 'tv',
  techStack: ['Next.js', 'Node.js', 'FFmpeg', 'S3', 'CloudFront', 'PostgreSQL', 'OpenAI'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ai-services', 'devops-and-sre'],
  content: {
    en: {
      title: 'Media & Entertainment',
      tagline: 'Content platforms that scale',
      description:
        'Streaming platforms, content management systems, AI content generation tools, and audience analytics for media companies, publishers, and content creators.',
      challenges: [
        {
          title: 'Content at scale',
          description: 'Storing, transcoding, and delivering terabytes of video and audio content.',
        },
        {
          title: 'Rights management',
          description: 'Digital rights, geo-restrictions, and licensing expiry enforcement.',
        },
        {
          title: 'Audience personalization',
          description: 'Content recommendations that drive engagement without filter bubbles.',
        },
      ],
      solutions: [
        {
          title: 'Streaming infrastructure',
          description: 'Video transcoding, CDN distribution, and adaptive bitrate streaming.',
        },
        {
          title: 'CMS & publishing',
          description: 'Headless CMS with editorial workflows and multi-channel publishing.',
        },
        {
          title: 'AI content tools',
          description: 'LLM-powered article writing, SEO optimization, and translation.',
        },
        {
          title: 'Audience analytics',
          description: 'Engagement metrics, content performance, and churn prediction.',
        },
      ],
      meta: {
        title: 'Media & Entertainment Software | Trident Software',
        description:
          'Media software — streaming platforms, CMS, AI content tools, audience analytics. Swiss engineering team.',
      },
    },
    de: {
      title: 'Medien & Unterhaltung',
      tagline: 'Content-Plattformen, die mitwachsen',
      description:
        'Streaming-Plattformen, Content-Management-Systeme, KI-Werkzeuge für Inhalte und Publikumsanalysen für Medienhäuser, Verlage und Content Creators.',
      challenges: [
        {
          title: 'Riesige Inhaltsmengen',
          description: 'Terabytes an Video und Audio speichern, transkodieren und ausliefern.',
        },
        {
          title: 'Rechteverwaltung',
          description: 'Digitale Rechte, Geoblocking und das Durchsetzen ablaufender Lizenzen.',
        },
        {
          title: 'Personalisierung fürs Publikum',
          description: 'Empfehlungen, die Interaktion fördern, ohne Filterblasen zu erzeugen.',
        },
      ],
      solutions: [
        {
          title: 'Streaming-Infrastruktur',
          description: 'Video-Transkodierung, Auslieferung über CDN und adaptives Bitraten-Streaming.',
        },
        {
          title: 'CMS & Publishing',
          description: 'Headless CMS mit redaktionellen Workflows und Ausspielung auf mehrere Kanäle.',
        },
        {
          title: 'KI-Werkzeuge für Inhalte',
          description: 'Artikel schreiben, SEO-Optimierung und Übersetzung mit LLM-Unterstützung.',
        },
        {
          title: 'Publikumsanalyse',
          description: 'Interaktionskennzahlen, Performance einzelner Inhalte und Prognose von Abwanderung.',
        },
      ],
      meta: {
        title: 'Software für Medien & Unterhaltung | Trident Software',
        description:
          'Mediensoftware: Streaming-Plattformen, CMS, KI-Werkzeuge für Inhalte und Publikumsanalyse. Entwicklerteam aus der Schweiz.',
      },
    },
    fr: {
      title: 'Médias & divertissement',
      tagline: 'Des plateformes de contenu qui suivent la croissance',
      description:
        "Plateformes de streaming, systèmes de gestion de contenu, outils de génération de contenu par IA et analyse d'audience pour les groupes de médias, les éditeurs et les créateurs de contenu.",
      challenges: [
        {
          title: 'Des volumes énormes',
          description: "Stocker, transcoder et diffuser des téraoctets de vidéo et d'audio.",
        },
        {
          title: 'Gestion des droits',
          description: "Droits numériques, restrictions géographiques et respect des dates d'expiration des licences.",
        },
        {
          title: 'Personnalisation pour le public',
          description: "Des recommandations qui suscitent l'engagement sans enfermer dans une bulle de filtres.",
        },
      ],
      solutions: [
        {
          title: 'Infrastructure de streaming',
          description: 'Transcodage vidéo, diffusion via CDN et streaming à débit adaptatif.',
        },
        {
          title: 'CMS & publication',
          description: 'CMS headless avec circuits de validation éditoriale et publication multicanale.',
        },
        {
          title: 'Outils de contenu IA',
          description: "Rédaction d'articles, optimisation SEO et traduction assistées par LLM.",
        },
        {
          title: "Analyse d'audience",
          description: "Indicateurs d'engagement, performance des contenus et prévision du désabonnement.",
        },
      ],
      meta: {
        title: 'Logiciel médias & divertissement | Trident Software',
        description:
          "Logiciels pour les médias : plateformes de streaming, CMS, outils de contenu IA, analyse d'audience. Équipe d'ingénieurs suisse.",
      },
    },
    it: {
      title: 'Media & intrattenimento',
      tagline: 'Piattaforme di contenuti che crescono con te',
      description:
        'Piattaforme di streaming, sistemi di gestione dei contenuti, strumenti di generazione di contenuti con IA e analisi del pubblico per gruppi editoriali, editori e content creator.',
      challenges: [
        {
          title: 'Contenuti in grandi volumi',
          description: 'Archiviare, transcodificare e distribuire terabyte di video e audio.',
        },
        {
          title: 'Gestione dei diritti',
          description: 'Diritti digitali, restrizioni geografiche e rispetto delle scadenze delle licenze.',
        },
        {
          title: 'Personalizzazione per il pubblico',
          description: 'Raccomandazioni che aumentano il coinvolgimento senza creare bolle di filtraggio.',
        },
      ],
      solutions: [
        {
          title: 'Infrastruttura di streaming',
          description: 'Transcodifica video, distribuzione via CDN e streaming a bitrate adattivo.',
        },
        {
          title: 'CMS & pubblicazione',
          description: 'CMS headless con flussi redazionali e pubblicazione multicanale.',
        },
        {
          title: 'Strumenti IA per i contenuti',
          description: 'Stesura di articoli, ottimizzazione SEO e traduzione con il supporto di LLM.',
        },
        {
          title: 'Analisi del pubblico',
          description: 'Metriche di coinvolgimento, rendimento dei contenuti e previsione degli abbandoni.',
        },
      ],
      meta: {
        title: 'Software per media & intrattenimento | Trident Software',
        description:
          'Software per i media: piattaforme di streaming, CMS, strumenti IA per i contenuti, analisi del pubblico. Team di ingegneri svizzero.',
      },
    },
  },
}

export default record
