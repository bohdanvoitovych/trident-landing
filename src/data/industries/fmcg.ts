import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'fmcg',
  icon: 'shopping-bag',
  techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Python', 'Docker', 'AWS'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ai-services'],
  content: {
    en: {
      title: 'FMCG & Consumer Goods',
      tagline: 'Supply chain and distribution tech for fast-moving goods',
      description:
        'Order management, route planning, HoReCa distribution platforms, and retail execution tools for food and beverage companies, FMCG distributors, and consumer goods brands.',
      challenges: [
        {
          title: 'High order volume',
          description: 'Processing thousands of daily orders across dozens of SKUs with tight delivery windows.',
        },
        {
          title: 'HoReCa complexity',
          description:
            'Managing restaurant and hotel accounts with custom pricing, credit limits, and delivery schedules.',
        },
        {
          title: 'Expiry and freshness tracking',
          description: 'FIFO inventory management with batch tracking and shelf-life alerts.',
        },
      ],
      solutions: [
        {
          title: 'Distribution management',
          description: 'Order intake, van loading, route optimisation, and proof-of-delivery.',
        },
        {
          title: 'HoReCa ordering platform',
          description: 'Self-service portal for restaurants with scheduled deliveries and invoice management.',
        },
        {
          title: 'Retail execution app',
          description: 'Field rep app for shelf audits, order taking, and competitor tracking.',
        },
        {
          title: 'Demand forecasting',
          description: 'AI-powered stock level predictions to reduce waste and out-of-stock events.',
        },
      ],
      meta: {
        title: 'FMCG & Consumer Goods Software | Trident Software',
        description:
          'FMCG software — distribution management, HoReCa platforms, retail execution, demand forecasting. Swiss engineering.',
      },
    },
    de: {
      title: 'FMCG & Konsumgüter',
      tagline: 'Lieferketten- und Vertriebstechnik für schnelldrehende Güter',
      description:
        'Auftragsverwaltung, Tourenplanung, Vertriebsplattformen für die Gastronomie und Tools für die Verkaufsförderung im Handel, für Lebensmittel- und Getränkeunternehmen, FMCG-Grossisten und Konsumgütermarken.',
      challenges: [
        {
          title: 'Hohes Bestellvolumen',
          description: 'Tausende Bestellungen pro Tag über Dutzende Artikel, mit engen Lieferfenstern.',
        },
        {
          title: 'Gastronomiekunden sind anspruchsvoll',
          description: 'Restaurants und Hotels mit individuellen Preisen, Kreditlimiten und Lieferplänen betreuen.',
        },
        {
          title: 'Haltbarkeit und Frische im Blick',
          description: 'Lagerführung nach FIFO mit Chargenverfolgung und Warnungen vor Ablauf des Haltbarkeitsdatums.',
        },
      ],
      solutions: [
        {
          title: 'Vertriebsmanagement',
          description: 'Auftragseingang, Fahrzeugbeladung, Tourenoptimierung und Liefernachweis.',
        },
        {
          title: 'Bestellplattform für die Gastronomie',
          description: 'Self-Service-Portal für Restaurants mit geplanten Lieferungen und Rechnungsverwaltung.',
        },
        {
          title: 'App für den Aussendienst',
          description: 'App für Regalkontrollen, Auftragserfassung und Beobachtung der Konkurrenz am Verkaufspunkt.',
        },
        {
          title: 'Bedarfsprognose',
          description: 'KI-gestützte Vorhersage der Lagerbestände, um Verderb und leere Regale zu reduzieren.',
        },
      ],
      meta: {
        title: 'Software für FMCG & Konsumgüter | Trident Software',
        description:
          'FMCG-Software: Vertriebsmanagement, Bestellplattformen für die Gastronomie, Aussendienst-Apps, Bedarfsprognose. Entwickelt in der Schweiz.',
      },
    },
    fr: {
      title: 'Biens de grande consommation',
      tagline: 'Logistique et distribution pour les produits à rotation rapide',
      description:
        "Gestion des commandes, planification des tournées, plateformes de distribution pour la restauration et outils d'exécution en magasin pour les entreprises alimentaires et de boissons, les distributeurs de produits de grande consommation et les marques grand public.",
      challenges: [
        {
          title: 'Des commandes par milliers',
          description:
            'Traiter des milliers de commandes par jour sur des dizaines de références, avec des créneaux de livraison serrés.',
        },
        {
          title: 'La restauration, un client exigeant',
          description:
            "Gérer les comptes de restaurants et d'hôtels avec prix personnalisés, plafonds de crédit et calendriers de livraison.",
        },
        {
          title: 'Dates de péremption et fraîcheur',
          description: 'Gestion des stocks en FIFO avec suivi des lots et alertes de date limite.',
        },
      ],
      solutions: [
        {
          title: 'Gestion de la distribution',
          description: 'Prise de commande, chargement des véhicules, optimisation des tournées et preuve de livraison.',
        },
        {
          title: 'Plateforme de commande CHR',
          description:
            'Portail libre-service pour les restaurants, avec livraisons planifiées et gestion des factures.',
        },
        {
          title: 'Application terrain pour la vente',
          description:
            'Application pour les commerciaux : relevés de linéaires, prise de commande et veille concurrentielle.',
        },
        {
          title: 'Prévision de la demande',
          description: 'Prévision des niveaux de stock par IA pour limiter le gaspillage et les ruptures.',
        },
      ],
      meta: {
        title: 'Logiciel biens de grande consommation | Trident Software',
        description:
          'Logiciels FMCG : gestion de la distribution, plateformes CHR, exécution en magasin, prévision de la demande. Ingénierie suisse.',
      },
    },
    it: {
      title: 'FMCG & beni di consumo',
      tagline: 'Tecnologia per la filiera e la distribuzione dei beni di largo consumo',
      description:
        'Gestione degli ordini, pianificazione dei giri di consegna, piattaforme di distribuzione per il canale Ho.Re.Ca. e strumenti per la vendita sul punto vendita, per aziende alimentari e di bevande, distributori FMCG e marchi di beni di consumo.',
      challenges: [
        {
          title: 'Migliaia di ordini al giorno',
          description: 'Evadere migliaia di ordini quotidiani su decine di articoli, con finestre di consegna strette.',
        },
        {
          title: "Le esigenze dell'Ho.Re.Ca.",
          description:
            'Gestire ristoranti e hotel con listini personalizzati, limiti di credito e calendari di consegna.',
        },
        {
          title: 'Scadenze e freschezza',
          description: 'Gestione del magazzino FIFO con tracciabilità dei lotti e avvisi di scadenza.',
        },
      ],
      solutions: [
        {
          title: 'Gestione della distribuzione',
          description: 'Ricezione ordini, carico dei furgoni, ottimizzazione dei percorsi e prova di consegna.',
        },
        {
          title: 'Piattaforma ordini Ho.Re.Ca.',
          description: 'Portale self-service per ristoranti con consegne programmate e gestione delle fatture.',
        },
        {
          title: 'App per la forza vendita',
          description:
            'App per gli agenti sul campo: controllo degli scaffali, raccolta ordini e monitoraggio della concorrenza.',
        },
        {
          title: 'Previsione della domanda',
          description: "Previsione delle scorte con l'IA per ridurre sprechi e rotture di stock.",
        },
      ],
      meta: {
        title: 'Software per FMCG & beni di consumo | Trident Software',
        description:
          'Software FMCG: gestione della distribuzione, piattaforme Ho.Re.Ca., app per la forza vendita, previsione della domanda. Ingegneria svizzera.',
      },
    },
  },
}

export default record
