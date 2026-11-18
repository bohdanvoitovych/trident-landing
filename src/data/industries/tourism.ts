import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'tourism',
  icon: 'map',
  techStack: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ai-services'],
  content: {
    en: {
      title: 'Tourism & Travel',
      tagline: 'Software for tour operators and hotels',
      description:
        'Booking platforms, itinerary management, concierge apps, and travel intelligence systems for tour operators, hotels, and travel agencies across Switzerland and Europe.',
      challenges: [
        {
          title: 'Real-time availability',
          description: 'Synchronising inventory across OTAs, direct booking and GDS without overbooking.',
        },
        {
          title: 'Seasonal demand spikes',
          description: 'Infrastructure that scales for peak season without overprovisioning year-round.',
        },
        {
          title: 'Multi-currency & multi-language',
          description: 'Serving international guests in their language and currency with localised tax handling.',
        },
      ],
      solutions: [
        {
          title: 'Booking & reservation systems',
          description: 'Real-time availability, payment processing, and booking confirmation workflows.',
        },
        {
          title: 'Tour management platforms',
          description: 'Itinerary builder, guide assignment, and group management tools.',
        },
        {
          title: 'Concierge & guest apps',
          description: 'Mobile apps for check-in, activity booking, and in-destination recommendations.',
        },
        {
          title: 'Travel analytics',
          description: 'Demand forecasting, pricing optimisation, and customer lifetime value models.',
        },
      ],
      meta: {
        title: 'Tourism & travel software development | Trident Software',
        description:
          'Travel tech software: booking platforms, tour management, concierge apps, travel analytics. Swiss engineering.',
      },
    },
    de: {
      title: 'Tourismus & Reisen',
      tagline: 'Digitale Erlebnisse für heutige Reisende',
      description:
        'Buchungsplattformen, Reiseplanung, Concierge-Apps und Analysesysteme für Reiseveranstalter, Hotels und Reisebüros in der Schweiz und in Europa.',
      challenges: [
        {
          title: 'Verfügbarkeit in Echtzeit',
          description: 'Kontingente über alle Kanäle synchron halten (OTAs, Direktbuchung, GDS), ohne Überbuchungen.',
        },
        {
          title: 'Saisonale Nachfragespitzen',
          description: 'Infrastruktur, die in der Hochsaison skaliert, ohne das ganze Jahr Überkapazität zu bezahlen.',
        },
        {
          title: 'Viele Währungen, viele Sprachen',
          description:
            'Internationale Gäste in ihrer Sprache und Währung bedienen, mit korrekter Steuerbehandlung je Land.',
        },
      ],
      solutions: [
        {
          title: 'Buchungs- und Reservierungssysteme',
          description: 'Verfügbarkeit in Echtzeit, Zahlungsabwicklung und automatische Buchungsbestätigung.',
        },
        {
          title: 'Plattformen für Reiseveranstalter',
          description: 'Reiseprogramm-Baukasten, Einteilung der Guides und Verwaltung von Gruppen.',
        },
        {
          title: 'Concierge- und Gäste-Apps',
          description: 'Mobile Apps für Check-in, Aktivitätenbuchung und Empfehlungen vor Ort.',
        },
        {
          title: 'Reiseanalysen',
          description:
            'Nachfrageprognosen, Preisoptimierung und Modelle zum Kundenwert über die gesamte Kundenbeziehung.',
        },
      ],
      meta: {
        title: 'Software für Tourismus & Reisen | Trident Software',
        description:
          'Software für die Reisebranche: Buchungsplattformen, Reiseveranstalter-Tools, Concierge-Apps, Reiseanalysen. Entwickelt in der Schweiz.',
      },
    },
    fr: {
      title: 'Tourisme & voyages',
      tagline: "Des expériences numériques pour les voyageurs d'aujourd'hui",
      description:
        "Plateformes de réservation, gestion d'itinéraires, applications de conciergerie et outils d'analyse pour les voyagistes, les hôtels et les agences de voyages en Suisse et en Europe.",
      challenges: [
        {
          title: 'Disponibilités en temps réel',
          description:
            "Synchroniser l'inventaire sur tous les canaux (OTA, réservation directe, GDS) sans surréservation.",
        },
        {
          title: 'Pics de la haute saison',
          description:
            "Une infrastructure qui monte en charge en haute saison sans payer de surcapacité toute l'année.",
        },
        {
          title: 'Plusieurs devises, plusieurs langues',
          description:
            'Servir la clientèle internationale dans sa langue et sa devise, avec une fiscalité adaptée à chaque pays.',
        },
      ],
      solutions: [
        {
          title: 'Systèmes de réservation',
          description:
            'Disponibilités en temps réel, encaissement des paiements et confirmation automatique des réservations.',
        },
        {
          title: 'Plateformes pour voyagistes',
          description: "Création d'itinéraires, affectation des guides et gestion des groupes.",
        },
        {
          title: 'Applications de conciergerie',
          description:
            "Applications mobiles pour l'enregistrement, la réservation d'activités et les recommandations sur place.",
        },
        {
          title: 'Analyse touristique',
          description: 'Prévision de la demande, optimisation tarifaire et modèles de valeur vie client.',
        },
      ],
      meta: {
        title: 'Développement logiciel tourisme & voyages | Trident Software',
        description:
          'Logiciels pour le tourisme : plateformes de réservation, gestion de circuits, applications de conciergerie, analyse touristique. Ingénierie suisse.',
      },
    },
    it: {
      title: 'Turismo & viaggi',
      tagline: 'Esperienze digitali per chi viaggia oggi',
      description:
        'Piattaforme di prenotazione, gestione degli itinerari, app di concierge e sistemi di analisi per tour operator, hotel e agenzie di viaggio in Svizzera e in Europa.',
      challenges: [
        {
          title: 'Disponibilità in tempo reale',
          description:
            "Sincronizzare l'inventario su tutti i canali (OTA, prenotazione diretta, GDS) senza overbooking.",
        },
        {
          title: 'Picchi stagionali',
          description: "Un'infrastruttura che regge l'alta stagione senza pagare capacità in eccesso tutto l'anno.",
        },
        {
          title: 'Più valute, più lingue',
          description:
            'Accogliere gli ospiti internazionali nella loro lingua e valuta, con la fiscalità di ogni paese.',
        },
      ],
      solutions: [
        {
          title: 'Sistemi di prenotazione',
          description: 'Disponibilità in tempo reale, gestione dei pagamenti e conferma automatica delle prenotazioni.',
        },
        {
          title: 'Piattaforme per tour operator',
          description: 'Costruzione degli itinerari, assegnazione delle guide e gestione dei gruppi.',
        },
        {
          title: 'App di concierge per gli ospiti',
          description: 'App mobili per check-in, prenotazione di attività e consigli sul posto.',
        },
        {
          title: 'Analisi dei viaggi',
          description: 'Previsione della domanda, ottimizzazione dei prezzi e modelli di valore del cliente nel tempo.',
        },
      ],
      meta: {
        title: 'Sviluppo software per turismo & viaggi | Trident Software',
        description:
          'Software per il turismo: piattaforme di prenotazione, gestione tour, app di concierge, analisi dei viaggi. Ingegneria svizzera.',
      },
    },
  },
}

export default record
