import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'hospitality',
  icon: 'hotel',
  techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Twilio', 'AWS'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ui-ux-design', 'ai-services'],
  content: {
    en: {
      title: 'Hospitality & Tourism',
      tagline: 'Digital experiences for hospitality leaders',
      description:
        'Hotel management systems, booking platforms, guest apps, and revenue management tools for Swiss hotels, resorts, and tourism operators.',
      challenges: [
        {
          title: 'PMS integration',
          description: 'Connecting to Opera, Protel, and other property management systems via API.',
        },
        {
          title: 'Multi-language guests',
          description: 'Guest-facing interfaces in EN/DE/FR/IT as required in Switzerland.',
        },
        {
          title: 'Revenue optimization',
          description: 'Dynamic pricing and availability across OTA channels.',
        },
      ],
      solutions: [
        {
          title: 'Guest portals',
          description: 'Mobile-first check-in, room service ordering, and concierge apps.',
        },
        {
          title: 'Channel management',
          description: 'Real-time availability sync across Booking.com, Expedia, and GDS.',
        },
        {
          title: 'Revenue management',
          description: 'Demand forecasting and dynamic pricing recommendation engine.',
        },
        {
          title: 'Loyalty programs',
          description: 'Custom loyalty and CRM systems for hotel groups.',
        },
      ],
      meta: {
        title: 'Hospitality & Tourism Software | Trident Software',
        description:
          'Hospitality software — hotel management, guest apps, channel management, revenue optimization. Swiss engineering team.',
      },
    },
    de: {
      title: 'Hotellerie & Tourismus',
      tagline: 'Digitale Erlebnisse für führende Gastgeber',
      description:
        'Hotelmanagementsysteme, Buchungsplattformen, Gäste-Apps und Revenue-Management-Tools für Schweizer Hotels, Resorts und Tourismusanbieter.',
      challenges: [
        {
          title: 'PMS-Anbindung',
          description: 'Verbindung zu Opera, Protel und anderen Hotelverwaltungssystemen per API.',
        },
        {
          title: 'Gäste aus allen Sprachregionen',
          description: 'Gästeoberflächen auf EN/DE/FR/IT, wie es in der Schweiz erwartet wird.',
        },
        {
          title: 'Ertragsoptimierung',
          description: 'Dynamische Preise und Verfügbarkeiten über alle OTA-Kanäle.',
        },
      ],
      solutions: [
        {
          title: 'Gästeportale',
          description: 'Mobile-first Check-in, Zimmerservice-Bestellung und Concierge-Apps.',
        },
        {
          title: 'Channel Management',
          description: 'Verfügbarkeiten in Echtzeit synchron auf Booking.com, Expedia und GDS.',
        },
        {
          title: 'Revenue Management',
          description: 'Nachfrageprognose und Engine für dynamische Preisempfehlungen.',
        },
        {
          title: 'Treueprogramme',
          description: 'Individuelle Loyalty- und CRM-Systeme für Hotelgruppen.',
        },
      ],
      meta: {
        title: 'Software für Hotellerie & Tourismus | Trident Software',
        description:
          'Hotelsoftware: Hotelmanagement, Gäste-Apps, Channel Management, Ertragsoptimierung. Engineering-Team in der Schweiz.',
      },
    },
    fr: {
      title: 'Hôtellerie & Tourisme',
      tagline: "Des expériences numériques pour les acteurs de l'hospitalité",
      description:
        'Systèmes de gestion hôtelière, plateformes de réservation, applications pour les clients et outils de revenue management pour les hôtels, resorts et acteurs du tourisme en Suisse.',
      challenges: [
        {
          title: 'Intégration PMS',
          description: "Connexion à Opera, Protel et d'autres systèmes de gestion hôtelière via API.",
        },
        {
          title: 'Des clients de toutes langues',
          description: "Interfaces clients en EN/DE/FR/IT, comme l'exige le contexte suisse.",
        },
        {
          title: 'Optimisation des revenus',
          description: 'Prix et disponibilités dynamiques sur tous les canaux OTA.',
        },
      ],
      solutions: [
        {
          title: 'Portails clients',
          description: 'Check-in, commande au room service et applications de conciergerie pensés pour le mobile.',
        },
        {
          title: 'Channel management',
          description: 'Synchronisation des disponibilités en temps réel sur Booking.com, Expedia et les GDS.',
        },
        {
          title: 'Revenue management',
          description: 'Prévision de la demande et moteur de recommandation de prix dynamiques.',
        },
        {
          title: 'Programmes de fidélité',
          description: 'Systèmes de fidélité et CRM sur mesure pour les groupes hôteliers.',
        },
      ],
      meta: {
        title: 'Logiciels hôtellerie & tourisme | Trident Software',
        description:
          "Logiciels hôteliers : gestion hôtelière, applications clients, channel management, optimisation des revenus. Équipe d'ingénieurs en Suisse.",
      },
    },
    it: {
      title: 'Ospitalità & Turismo',
      tagline: "Esperienze digitali per chi guida l'ospitalità",
      description:
        'Sistemi di gestione alberghiera, piattaforme di prenotazione, app per gli ospiti e strumenti di revenue management per hotel, resort e operatori turistici svizzeri.',
      challenges: [
        {
          title: 'Integrazione PMS',
          description: 'Collegamento via API a Opera, Protel e altri sistemi di gestione alberghiera.',
        },
        {
          title: 'Ospiti di ogni lingua',
          description: 'Interfacce per gli ospiti in EN/DE/FR/IT, come richiesto in Svizzera.',
        },
        {
          title: 'Ottimizzazione dei ricavi',
          description: 'Prezzi e disponibilità dinamici su tutti i canali OTA.',
        },
      ],
      solutions: [
        {
          title: 'Portali per gli ospiti',
          description: 'Check-in, ordini al room service e app di concierge pensati per il mobile.',
        },
        {
          title: 'Channel management',
          description: 'Sincronizzazione delle disponibilità in tempo reale su Booking.com, Expedia e GDS.',
        },
        {
          title: 'Revenue management',
          description: 'Previsione della domanda e motore di raccomandazione per i prezzi dinamici.',
        },
        {
          title: 'Programmi fedeltà',
          description: 'Sistemi di loyalty e CRM su misura per gruppi alberghieri.',
        },
      ],
      meta: {
        title: 'Software per ospitalità & turismo | Trident Software',
        description:
          'Software alberghiero: gestione hotel, app per gli ospiti, channel management, ottimizzazione dei ricavi. Team di ingegneri in Svizzera.',
      },
    },
  },
}

export default record
