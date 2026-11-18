import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'sport-activities',
  icon: 'dumbbell',
  techStack: ['React Native', 'React', 'Node.js', 'PostgreSQL', 'TimescaleDB', 'AWS', 'BLE/GPS SDKs'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'embedded-and-iot'],
  content: {
    en: {
      title: 'Sport & Fitness',
      tagline: 'Technology for active lifestyles and sports organisations',
      description:
        'Sports club management, event registration platforms, activity tracking apps, and athlete performance analytics for federations, fitness brands, and sports tech startups.',
      challenges: [
        {
          title: 'Registration and payment',
          description:
            'Handling race registrations, membership fees, and event ticketing with high concurrency at opening.',
        },
        {
          title: 'Real-time tracking',
          description: 'GPS and sensor data ingestion from thousands of athletes in a live event.',
        },
        {
          title: 'Community and engagement',
          description:
            'Keeping athletes engaged between events with training plans, social features, and progress tracking.',
        },
      ],
      solutions: [
        {
          title: 'Event registration platform',
          description: 'Race and event signup with wave assignment, payment and bib management.',
        },
        {
          title: 'Club management system',
          description: 'Membership, scheduling, facility booking, and coach communication.',
        },
        {
          title: 'Activity tracking app',
          description: 'Mobile app for logging workouts, routes, and personal records with social sharing.',
        },
        {
          title: 'Performance analytics',
          description: 'Athlete data dashboards with training load, recovery, and benchmark comparisons.',
        },
      ],
      meta: {
        title: 'Sport & fitness software development | Trident Software',
        description:
          'Sports tech software: event registration, club management, activity tracking, performance analytics. Swiss engineering.',
      },
    },
    de: {
      title: 'Sport & Fitness',
      tagline: 'Technologie für Sportvereine und einen aktiven Lebensstil',
      description:
        'Vereinsverwaltung, Anmeldeplattformen für Events, Apps zur Aktivitätserfassung und Leistungsanalysen für Verbände, Fitnessmarken und Sporttech-Startups.',
      challenges: [
        {
          title: 'Anmeldung und Zahlung',
          description:
            'Rennanmeldungen, Mitgliederbeiträge und Ticketverkauf abwickeln, auch wenn beim Anmeldestart alle gleichzeitig zugreifen.',
        },
        {
          title: 'Live-Tracking',
          description: 'GPS- und Sensordaten von Tausenden Teilnehmenden während eines laufenden Events verarbeiten.',
        },
        {
          title: 'Bindung zwischen den Events',
          description:
            'Sportlerinnen und Sportler mit Trainingsplänen, sozialen Funktionen und Fortschrittsanzeigen bei der Stange halten.',
        },
      ],
      solutions: [
        {
          title: 'Plattform für Eventanmeldungen',
          description: 'Anmeldung für Rennen und Events mit Startwellen, Zahlung und Verwaltung der Startnummern.',
        },
        {
          title: 'Vereinsverwaltung',
          description: 'Mitglieder, Terminplanung, Reservierung von Anlagen und Kommunikation mit den Trainern.',
        },
        {
          title: 'App für Aktivitäten',
          description:
            'Mobile App zum Erfassen von Trainings, Strecken und persönlichen Bestleistungen, mit Teilen in der Community.',
        },
        {
          title: 'Leistungsanalyse',
          description: 'Dashboards mit Trainingsbelastung, Erholung und Vergleichswerten für Athletinnen und Athleten.',
        },
      ],
      meta: {
        title: 'Softwareentwicklung für Sport & Fitness | Trident Software',
        description:
          'Sporttech-Software: Eventanmeldung, Vereinsverwaltung, Aktivitäts-Apps, Leistungsanalyse. Entwickelt in der Schweiz.',
      },
    },
    fr: {
      title: 'Sport & fitness',
      tagline: 'La technologie au service des sportifs et des clubs',
      description:
        "Gestion de clubs sportifs, plateformes d'inscription aux événements, applications de suivi d'activité et analyse de la performance pour les fédérations, les marques de fitness et les startups de la sport tech.",
      challenges: [
        {
          title: 'Inscriptions et paiements',
          description:
            "Gérer inscriptions aux courses, cotisations et billetterie quand tout le monde se connecte à l'ouverture.",
        },
        {
          title: 'Suivi en direct',
          description: 'Ingérer les données GPS et capteurs de milliers de participants pendant une épreuve.',
        },
        {
          title: 'Garder le lien entre deux épreuves',
          description:
            "Maintenir l'intérêt des sportifs avec des plans d'entraînement, des fonctions sociales et un suivi des progrès.",
        },
      ],
      solutions: [
        {
          title: "Plateforme d'inscription",
          description:
            'Inscription aux courses et événements avec répartition par vagues, paiement et gestion des dossards.',
        },
        {
          title: 'Gestion de club',
          description: 'Membres, plannings, réservation des installations et communication avec les entraîneurs.',
        },
        {
          title: "Application de suivi d'activité",
          description: 'Application mobile pour noter séances, parcours et records personnels, avec partage social.',
        },
        {
          title: 'Analyse de la performance',
          description:
            "Tableaux de bord sur la charge d'entraînement, la récupération et les comparaisons de référence.",
        },
      ],
      meta: {
        title: 'Développement logiciel sport & fitness | Trident Software',
        description:
          "Logiciels sport tech : inscriptions aux événements, gestion de club, suivi d'activité, analyse de la performance. Ingénierie suisse.",
      },
    },
    it: {
      title: 'Sport & fitness',
      tagline: 'Tecnologia per chi fa sport e per le società sportive',
      description:
        'Gestione di società sportive, piattaforme di iscrizione agli eventi, app di tracciamento delle attività e analisi delle prestazioni per federazioni, marchi del fitness e startup della sport tech.',
      challenges: [
        {
          title: 'Iscrizioni e pagamenti',
          description:
            "Gestire iscrizioni alle gare, quote associative e biglietteria quando all'apertura si collegano tutti insieme.",
        },
        {
          title: 'Tracciamento in diretta',
          description: 'Acquisire dati GPS e dei sensori da migliaia di atleti durante un evento in corso.',
        },
        {
          title: "Tenere vivo l'interesse tra una gara e l'altra",
          description:
            'Mantenere gli atleti coinvolti con piani di allenamento, funzioni social e monitoraggio dei progressi.',
        },
      ],
      solutions: [
        {
          title: 'Piattaforma di iscrizione agli eventi',
          description:
            'Iscrizione a gare ed eventi con assegnazione delle griglie di partenza, pagamento e gestione dei pettorali.',
        },
        {
          title: 'Gestionale per società sportive',
          description: 'Soci, calendari, prenotazione degli impianti e comunicazione con gli allenatori.',
        },
        {
          title: 'App per le attività',
          description: 'App mobile per registrare allenamenti, percorsi e record personali, con condivisione social.',
        },
        {
          title: 'Analisi delle prestazioni',
          description:
            'Dashboard sui dati degli atleti con carico di allenamento, recupero e confronti di riferimento.',
        },
      ],
      meta: {
        title: 'Sviluppo software per sport & fitness | Trident Software',
        description:
          'Software sport tech: iscrizioni agli eventi, gestione delle società, tracciamento attività, analisi delle prestazioni. Ingegneria svizzera.',
      },
    },
  },
}

export default record
