import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'social-media',
  icon: 'users',
  techStack: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Kafka', 'Elasticsearch', 'AWS'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ai-services'],
  content: {
    en: {
      title: 'Social Media & Community',
      tagline: 'Platforms that connect people at scale',
      description:
        'Social networking platforms, community management tools, creator economy infrastructure, and moderation systems for social apps, professional networks, and niche communities.',
      challenges: [
        {
          title: 'Feed algorithms',
          description: 'Relevance ranking, engagement prediction, and content diversity at millions of posts per day.',
        },
        {
          title: 'Content moderation',
          description: 'Automated and human-in-the-loop moderation at scale without false positives.',
        },
        {
          title: 'Real-time interactions',
          description:
            'Low-latency notifications, live feeds, and presence indicators across millions of concurrent users.',
        },
      ],
      solutions: [
        {
          title: 'Community platform',
          description: 'User profiles, follow graphs, feeds, reactions, and direct messaging.',
        },
        {
          title: 'Creator tools',
          description: 'Monetisation, subscriber management, and content scheduling for creators.',
        },
        {
          title: 'Moderation infrastructure',
          description: 'AI-assisted content moderation with appeal workflows and audit logs.',
        },
        {
          title: 'Social analytics',
          description: 'Engagement metrics, growth tracking, and audience insights dashboards.',
        },
      ],
      meta: {
        title: 'Social Media & Community Platform Development | Trident Software',
        description:
          'Social platform development — community apps, creator tools, moderation systems, social analytics. Swiss engineering.',
      },
    },
    de: {
      title: 'Social Media & Communitys',
      tagline: 'Plattformen, die Menschen in grosser Zahl verbinden',
      description:
        'Soziale Netzwerke, Werkzeuge für Community-Management, Infrastruktur für die Creator Economy und Moderationssysteme für Social Apps, Berufsnetzwerke und Nischen-Communitys.',
      challenges: [
        {
          title: 'Feed-Algorithmen',
          description:
            'Relevanz-Ranking, Interaktionsprognose und inhaltliche Vielfalt bei Millionen von Beiträgen pro Tag.',
        },
        {
          title: 'Moderation von Inhalten',
          description: 'Automatisierte Moderation mit menschlicher Kontrolle, in grossem Massstab und ohne Fehlalarme.',
        },
        {
          title: 'Interaktion ohne Verzögerung',
          description:
            'Benachrichtigungen mit geringer Latenz, Live-Feeds und Online-Status für Millionen gleichzeitiger Nutzerinnen und Nutzer.',
        },
      ],
      solutions: [
        {
          title: 'Community-Plattform',
          description: 'Profile, Follower-Beziehungen, Feeds, Reaktionen und Direktnachrichten.',
        },
        {
          title: 'Werkzeuge für Creators',
          description: 'Monetarisierung, Abonnentenverwaltung und Planung von Beiträgen für Creators.',
        },
        {
          title: 'Moderations-Infrastruktur',
          description: 'KI-gestützte Moderation mit Einspracheverfahren und Audit-Protokollen.',
        },
        {
          title: 'Social Analytics',
          description: 'Dashboards für Interaktionskennzahlen, Wachstum und Erkenntnisse über das Publikum.',
        },
      ],
      meta: {
        title: 'Social- & Community-Plattformen | Trident Software',
        description:
          'Entwicklung sozialer Plattformen: Community-Apps, Creator-Tools, Moderationssysteme, Social Analytics. Entwickelt in der Schweiz.',
      },
    },
    fr: {
      title: 'Réseaux sociaux & communautés',
      tagline: 'Des plateformes qui relient les gens à grande échelle',
      description:
        "Réseaux sociaux, outils de gestion de communauté, infrastructure pour l'économie des créateurs et systèmes de modération pour les applications sociales, les réseaux professionnels et les communautés de niche.",
      challenges: [
        {
          title: "Algorithmes de fil d'actualité",
          description:
            "Classement par pertinence, prédiction de l'engagement et diversité des contenus sur des millions de publications par jour.",
        },
        {
          title: 'Modération des contenus',
          description: 'Modération automatisée avec intervention humaine, à grande échelle et sans faux positifs.',
        },
        {
          title: 'Interactions instantanées',
          description:
            "Notifications à faible latence, fils en direct et indicateurs de présence pour des millions d'utilisateurs simultanés.",
        },
      ],
      solutions: [
        {
          title: 'Plateforme communautaire',
          description: "Profils, abonnements, fils d'actualité, réactions et messagerie privée.",
        },
        {
          title: 'Outils pour créateurs',
          description: 'Monétisation, gestion des abonnés et programmation des publications pour les créateurs.',
        },
        {
          title: 'Infrastructure de modération',
          description: "Modération assistée par IA avec procédures de recours et journaux d'audit.",
        },
        {
          title: 'Analyse sociale',
          description: "Tableaux de bord sur l'engagement, la croissance et la connaissance de l'audience.",
        },
      ],
      meta: {
        title: 'Développement de plateformes sociales | Trident Software',
        description:
          'Développement de plateformes sociales : applications communautaires, outils créateurs, modération, analyse sociale. Ingénierie suisse.',
      },
    },
    it: {
      title: 'Social media & community',
      tagline: 'Piattaforme che mettono in contatto milioni di persone',
      description:
        'Social network, strumenti di gestione delle community, infrastruttura per la creator economy e sistemi di moderazione per app social, reti professionali e community di nicchia.',
      challenges: [
        {
          title: 'Algoritmi del feed',
          description:
            'Ranking per rilevanza, previsione del coinvolgimento e varietà dei contenuti su milioni di post al giorno.',
        },
        {
          title: 'Moderazione dei contenuti',
          description: 'Moderazione automatica con supervisione umana, su larga scala e senza falsi positivi.',
        },
        {
          title: 'Interazioni istantanee',
          description:
            'Notifiche a bassa latenza, feed in diretta e indicatori di presenza per milioni di utenti connessi insieme.',
        },
      ],
      solutions: [
        {
          title: 'Piattaforma per community',
          description: 'Profili utente, rete di follower, feed, reazioni e messaggi diretti.',
        },
        {
          title: 'Strumenti per creator',
          description: 'Monetizzazione, gestione degli abbonati e programmazione dei contenuti per i creator.',
        },
        {
          title: 'Infrastruttura di moderazione',
          description: "Moderazione assistita dall'IA con procedure di ricorso e log di audit.",
        },
        {
          title: 'Analisi social',
          description: 'Dashboard su coinvolgimento, crescita e conoscenza del pubblico.',
        },
      ],
      meta: {
        title: 'Sviluppo piattaforme social e community | Trident Software',
        description:
          'Sviluppo di piattaforme social: app per community, strumenti per creator, moderazione, analisi social. Ingegneria svizzera.',
      },
    },
  },
}

export default record
