import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'games',
  icon: 'gamepad-2',
  techStack: ['Go', 'Node.js', 'Redis', 'PostgreSQL', 'WebSockets', 'Kubernetes', 'AWS'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'cloud-consulting', 'devops-and-sre'],
  content: {
    en: {
      title: 'Gaming & Interactive',
      tagline: 'Backend and tooling for game studios',
      description:
        'Game backend services, matchmaking systems, in-game economy platforms, and live ops tooling for mobile game studios, indie developers, and serious game companies.',
      challenges: [
        {
          title: 'Latency and scalability',
          description: 'Sub-100ms response for multiplayer actions and burst scaling for new game launches.',
        },
        {
          title: 'In-game economy balance',
          description: 'Preventing inflation, exploits, and pay-to-win imbalance in virtual economies.',
        },
        {
          title: 'Live ops and events',
          description: 'Deploying seasonal content, A/B tests, and balance patches without downtime.',
        },
      ],
      solutions: [
        {
          title: 'Game backend services',
          description: 'Authentication, leaderboards, player data, and cloud saves as managed services.',
        },
        {
          title: 'Matchmaking systems',
          description: 'Skill-based matchmaking with region-aware routing and anti-cheat integration.',
        },
        {
          title: 'Virtual economy platform',
          description: 'In-game currencies, item shops, trading systems, and economy analytics.',
        },
        {
          title: 'Live ops dashboard',
          description: 'Content scheduling, player segmentation, and event management for live games.',
        },
      ],
      meta: {
        title: 'Game Development Backend & Infrastructure | Trident Software',
        description:
          'Game backend services — matchmaking, live ops, virtual economies, player data. Swiss engineering for game studios.',
      },
    },
    de: {
      title: 'Games & interaktive Medien',
      tagline: 'Backend und Tools für Game-Studios',
      description:
        'Game-Backend-Services, Matchmaking-Systeme, Plattformen für In-Game-Ökonomien und Live-Ops-Tools für Mobile-Game-Studios, Indie-Entwickler und Anbieter von Serious Games.',
      challenges: [
        {
          title: 'Latenz und Lastspitzen',
          description:
            'Antwortzeiten unter 100 ms bei Multiplayer-Aktionen und schnelles Hochskalieren beim Launch neuer Spiele.',
        },
        {
          title: 'Ausgewogene In-Game-Ökonomie',
          description:
            'Inflation, Exploits und Pay-to-Win-Ungleichgewichte in virtuellen Wirtschaftssystemen verhindern.',
        },
        {
          title: 'Live Ops und Events',
          description: 'Saisonale Inhalte, A/B-Tests und Balance-Patches ohne Ausfallzeit ausrollen.',
        },
      ],
      solutions: [
        {
          title: 'Game-Backend-Services',
          description: 'Authentifizierung, Bestenlisten, Spielerdaten und Cloud-Spielstände als Managed Services.',
        },
        {
          title: 'Matchmaking-Systeme',
          description: 'Matchmaking nach Spielstärke mit regionsbezogenem Routing und Anti-Cheat-Anbindung.',
        },
        {
          title: 'Plattform für virtuelle Ökonomien',
          description: 'In-Game-Währungen, Item-Shops, Handelssysteme und Analysen der Spielökonomie.',
        },
        {
          title: 'Live-Ops-Dashboard',
          description: 'Planung von Inhalten, Segmentierung der Spieler und Eventverwaltung für Live-Games.',
        },
      ],
      meta: {
        title: 'Game-Backend & Infrastruktur entwickeln | Trident Software',
        description:
          'Game-Backend-Services: Matchmaking, Live Ops, virtuelle Ökonomien, Spielerdaten. Schweizer Entwicklung für Game-Studios.',
      },
    },
    fr: {
      title: 'Jeux vidéo & interactif',
      tagline: 'Backend et outillage pour les studios de jeux',
      description:
        "Services backend de jeu, systèmes de matchmaking, plateformes d'économie in-game et outils de live ops pour les studios de jeux mobiles, les développeurs indépendants et les éditeurs de serious games.",
      challenges: [
        {
          title: 'Latence et montée en charge',
          description:
            "Moins de 100 ms de réponse pour les actions multijoueur et une montée en charge rapide au lancement d'un jeu.",
        },
        {
          title: "Équilibre de l'économie in-game",
          description:
            "Éviter l'inflation, les exploits et les déséquilibres pay-to-win dans les économies virtuelles.",
        },
        {
          title: 'Live ops et événements',
          description:
            "Déployer contenus saisonniers, tests A/B et correctifs d'équilibrage sans interruption de service.",
        },
      ],
      solutions: [
        {
          title: 'Services backend de jeu',
          description: 'Authentification, classements, données joueurs et sauvegardes cloud en services managés.',
        },
        {
          title: 'Systèmes de matchmaking',
          description: 'Matchmaking selon le niveau des joueurs, avec routage par région et intégration anti-triche.',
        },
        {
          title: "Plateforme d'économie virtuelle",
          description: "Monnaies in-game, boutiques d'objets, systèmes d'échange et analyse de l'économie du jeu.",
        },
        {
          title: 'Tableau de bord live ops',
          description:
            'Programmation des contenus, segmentation des joueurs et gestion des événements pour les jeux en service.',
        },
      ],
      meta: {
        title: 'Backend et infrastructure de jeux vidéo | Trident Software',
        description:
          'Services backend de jeu : matchmaking, live ops, économies virtuelles, données joueurs. Ingénierie suisse pour studios de jeux.',
      },
    },
    it: {
      title: 'Videogiochi & interattività',
      tagline: 'Backend e strumenti per studi di videogiochi',
      description:
        'Servizi backend per giochi, sistemi di matchmaking, piattaforme per economie in-game e strumenti di live ops per studi di giochi mobile, sviluppatori indipendenti e aziende di serious game.',
      challenges: [
        {
          title: 'Latenza e picchi di carico',
          description:
            'Risposte sotto i 100 ms per le azioni multiplayer e scalabilità immediata al lancio di un nuovo gioco.',
        },
        {
          title: "Un'economia di gioco in equilibrio",
          description: 'Evitare inflazione, exploit e squilibri pay-to-win nelle economie virtuali.',
        },
        {
          title: 'Live ops ed eventi',
          description: 'Rilasciare contenuti stagionali, test A/B e patch di bilanciamento senza interruzioni.',
        },
      ],
      solutions: [
        {
          title: 'Servizi backend per giochi',
          description: 'Autenticazione, classifiche, dati dei giocatori e salvataggi cloud come servizi gestiti.',
        },
        {
          title: 'Sistemi di matchmaking',
          description: "Matchmaking basato sull'abilità, con instradamento per regione e integrazione anti-cheat.",
        },
        {
          title: 'Piattaforma per economie virtuali',
          description: "Valute in-game, negozi di oggetti, sistemi di scambio e analisi dell'economia di gioco.",
        },
        {
          title: 'Dashboard live ops',
          description:
            'Programmazione dei contenuti, segmentazione dei giocatori e gestione degli eventi per giochi live.',
        },
      ],
      meta: {
        title: 'Backend e infrastruttura per videogiochi | Trident Software',
        description:
          'Servizi backend per giochi: matchmaking, live ops, economie virtuali, dati dei giocatori. Ingegneria svizzera per studi di videogiochi.',
      },
    },
  },
}

export default record
