import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'catering',
  icon: 'utensils',
  techStack: ['React', 'Node.js', 'PostgreSQL', 'React Native', 'Docker'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ui-ux-design', 'ai-services'],
  content: {
    en: {
      title: 'Catering & Food Service',
      tagline: 'Operations software for professional kitchens and caterers',
      description:
        'Event catering management, recipe costing, staff scheduling, and client ordering platforms for catering companies, contract food service operators, and cloud kitchens.',
      challenges: [
        {
          title: 'Event-driven operations',
          description: 'Planning menus, staffing, and procurement around unpredictable event schedules.',
        },
        {
          title: 'Food cost control',
          description: 'Tracking recipe costs against purchasing prices in real time as ingredient prices fluctuate.',
        },
        {
          title: 'Dietary and allergen compliance',
          description: 'Accurate allergen labelling and menu customisation for dietary requirements at scale.',
        },
      ],
      solutions: [
        {
          title: 'Event catering management',
          description: 'Quote builder, menu planner, staffing, and production sheet generation.',
        },
        {
          title: 'Recipe & cost management',
          description: 'Recipe database with live cost calculation linked to supplier pricing.',
        },
        {
          title: 'Client ordering portal',
          description: 'Self-service ordering for corporate clients with approval workflows.',
        },
        {
          title: 'Staff scheduling',
          description: 'Shift planning, time tracking, and labour cost reporting for kitchen teams.',
        },
      ],
      meta: {
        title: 'Catering & Food Service Software | Trident Software',
        description:
          'Catering software — event management, recipe costing, client ordering portals, staff scheduling. Swiss engineering.',
      },
    },
    de: {
      title: 'Catering & Gemeinschaftsgastronomie',
      tagline: 'Betriebssoftware für Profiküchen und Caterer',
      description:
        'Verwaltung von Event-Caterings, Rezeptkalkulation, Personalplanung und Bestellplattformen für Cateringunternehmen, Betreiber in der Gemeinschaftsgastronomie und Cloud Kitchens.',
      challenges: [
        {
          title: 'Planen ohne festen Rhythmus',
          description: 'Menüs, Personal und Einkauf rund um schwer vorhersehbare Eventtermine planen.',
        },
        {
          title: 'Wareneinsatz unter Kontrolle',
          description: 'Rezeptkosten laufend mit den Einkaufspreisen abgleichen, wenn die Zutatenpreise schwanken.',
        },
        {
          title: 'Allergene und Ernährungsformen',
          description:
            'Korrekte Allergenkennzeichnung und angepasste Menüs für besondere Ernährungsbedürfnisse, auch in grossen Mengen.',
        },
      ],
      solutions: [
        {
          title: 'Event-Catering-Verwaltung',
          description: 'Offerten-Generator, Menüplanung, Personaleinsatz und automatisch erstellte Produktionsblätter.',
        },
        {
          title: 'Rezept- und Kostenverwaltung',
          description: 'Rezeptdatenbank mit laufender Kalkulation, verknüpft mit den Lieferantenpreisen.',
        },
        {
          title: 'Bestellportal für Firmenkunden',
          description: 'Self-Service-Bestellungen für Firmenkunden mit Freigabeprozessen.',
        },
        {
          title: 'Personaleinsatzplanung',
          description: 'Schichtplanung, Zeiterfassung und Auswertung der Personalkosten für Küchenteams.',
        },
      ],
      meta: {
        title: 'Software für Catering & Gastronomie | Trident Software',
        description:
          'Catering-Software: Eventverwaltung, Rezeptkalkulation, Bestellportale für Firmenkunden, Personalplanung. Entwickelt in der Schweiz.',
      },
    },
    fr: {
      title: 'Traiteur & restauration collective',
      tagline: 'Logiciels de gestion pour cuisines professionnelles et traiteurs',
      description:
        'Gestion des prestations événementielles, calcul du coût des recettes, planification du personnel et plateformes de commande pour les traiteurs, les sociétés de restauration collective et les cuisines virtuelles.',
      challenges: [
        {
          title: 'Au gré des événements',
          description: "Planifier menus, personnel et achats autour d'un calendrier d'événements imprévisible.",
        },
        {
          title: 'Maîtrise du coût matière',
          description:
            "Comparer en temps réel le coût des recettes aux prix d'achat quand le prix des ingrédients varie.",
        },
        {
          title: 'Allergènes et régimes alimentaires',
          description:
            'Étiquetage exact des allergènes et menus adaptés aux régimes particuliers, même en grandes quantités.',
        },
      ],
      solutions: [
        {
          title: 'Gestion des prestations traiteur',
          description:
            'Création de devis, planification des menus, affectation du personnel et fiches de production générées automatiquement.',
        },
        {
          title: 'Fiches recettes & coûts',
          description: 'Base de recettes avec calcul du coût en direct, reliée aux tarifs des fournisseurs.',
        },
        {
          title: 'Portail de commande entreprises',
          description: 'Commandes en libre-service pour les clients entreprises, avec circuits de validation.',
        },
        {
          title: 'Plannings du personnel',
          description: "Planification des équipes, pointage et suivi du coût de la main-d'œuvre en cuisine.",
        },
      ],
      meta: {
        title: 'Logiciel traiteur & restauration | Trident Software',
        description:
          "Logiciels pour traiteurs : gestion d'événements, coût des recettes, portails de commande, plannings du personnel. Ingénierie suisse.",
      },
    },
    it: {
      title: 'Catering & ristorazione collettiva',
      tagline: 'Software gestionale per cucine professionali e catering',
      description:
        'Gestione del catering per eventi, calcolo del costo delle ricette, pianificazione del personale e piattaforme di ordinazione per aziende di catering, operatori della ristorazione collettiva e cloud kitchen.',
      challenges: [
        {
          title: 'Lavorare a ritmo di eventi',
          description: 'Pianificare menu, personale e acquisti attorno a un calendario di eventi imprevedibile.',
        },
        {
          title: 'Food cost sotto controllo',
          description:
            "Confrontare in tempo reale il costo delle ricette con i prezzi d'acquisto, mentre i prezzi degli ingredienti oscillano.",
        },
        {
          title: 'Allergeni e diete speciali',
          description:
            'Etichettatura precisa degli allergeni e menu adattati alle esigenze alimentari, anche su grandi numeri.',
        },
      ],
      solutions: [
        {
          title: 'Gestione catering per eventi',
          description:
            'Creazione di preventivi, pianificazione dei menu, personale e schede di produzione generate in automatico.',
        },
        {
          title: 'Ricette & costi',
          description: 'Database di ricette con calcolo dei costi aggiornato, collegato ai listini dei fornitori.',
        },
        {
          title: 'Portale ordini per aziende',
          description: 'Ordini self-service per i clienti aziendali, con flussi di approvazione.',
        },
        {
          title: 'Turni del personale',
          description:
            'Pianificazione dei turni, rilevazione delle ore e report sul costo del lavoro per le brigate di cucina.',
        },
      ],
      meta: {
        title: 'Software per catering & ristorazione | Trident Software',
        description:
          'Software per il catering: gestione eventi, calcolo del costo ricette, portali ordini per aziende, turni del personale. Ingegneria svizzera.',
      },
    },
  },
}

export default record
