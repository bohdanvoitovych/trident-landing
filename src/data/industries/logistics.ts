import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'logistics',
  icon: 'truck',
  techStack: ['Python', 'Django', 'React Native', 'PostgreSQL', 'Redis', 'RabbitMQ', 'AWS'],
  relatedCases: ['8move-driver'],
  relatedServices: ['software-engineering', 'ai-services', 'mobile-development'],
  content: {
    en: {
      title: 'Logistics & Supply Chain',
      tagline: 'Visibility and automation for complex supply chains',
      description:
        'We build warehouse management systems, last-mile delivery platforms, route optimization tools, and supply chain visibility dashboards for logistics companies across Europe.',
      challenges: [
        {
          title: 'Real-time tracking',
          description: 'GPS and IoT sensor integration for shipment and asset tracking at scale.',
        },
        {
          title: 'Route optimization',
          description: 'Dynamic routing with traffic, capacity, and time-window constraints.',
        },
        {
          title: 'WMS integration',
          description: 'Integration with SAP, Oracle, and legacy warehouse management systems.',
        },
      ],
      solutions: [
        {
          title: 'Warehouse management',
          description: 'Barcode/RFID-based WMS with picking optimization and cycle counting.',
        },
        {
          title: 'Last-mile delivery',
          description: 'Driver apps, proof-of-delivery, and customer tracking portals.',
        },
        {
          title: 'Supply chain visibility',
          description: 'Multi-carrier tracking and exception management dashboards.',
        },
        {
          title: 'Route optimization',
          description: 'AI-based route planning reducing fuel costs and delivery windows.',
        },
      ],
      meta: {
        title: 'Logistics & Supply Chain Software | Trident Software',
        description:
          'Logistics software development — WMS, last-mile delivery, route optimization, supply chain visibility. Swiss engineering team.',
      },
    },
    de: {
      title: 'Logistik & Supply Chain',
      tagline: 'Transparenz und Automatisierung für komplexe Lieferketten',
      description:
        'Wir entwickeln Lagerverwaltungssysteme, Plattformen für die letzte Meile, Tools zur Routenoptimierung und Dashboards für transparente Lieferketten, für Logistikunternehmen in ganz Europa.',
      challenges: [
        {
          title: 'Sendungsverfolgung in Echtzeit',
          description: 'GPS- und IoT-Sensoren für die Ortung von Sendungen und Assets in grossem Umfang.',
        },
        {
          title: 'Dynamische Tourenplanung',
          description: 'Flexible Routen unter Berücksichtigung von Verkehr, Kapazität und Zeitfenstern.',
        },
        {
          title: 'Anbindung an das WMS',
          description: 'Integration mit SAP, Oracle und älteren Lagerverwaltungssystemen.',
        },
      ],
      solutions: [
        {
          title: 'Lagerverwaltung',
          description: 'WMS auf Basis von Barcode und RFID, mit optimierter Kommissionierung und permanenter Inventur.',
        },
        {
          title: 'Zustellung auf der letzten Meile',
          description: 'Fahrer-Apps, digitaler Zustellnachweis und Tracking-Portale für Kunden.',
        },
        {
          title: 'Transparente Lieferketten',
          description: 'Dashboards für Tracking über mehrere Carrier und das Management von Abweichungen.',
        },
        {
          title: 'Routenoptimierung',
          description: 'KI-basierte Tourenplanung, die Treibstoffkosten senkt und Lieferfenster verkürzt.',
        },
      ],
      meta: {
        title: 'Software für Logistik & Supply Chain | Trident Software',
        description:
          'Logistiksoftware-Entwicklung: WMS, Zustellung auf der letzten Meile, Routenoptimierung, transparente Lieferketten. Engineering-Team in der Schweiz.',
      },
    },
    fr: {
      title: 'Logistique & Supply Chain',
      tagline: "Visibilité et automatisation pour des chaînes d'approvisionnement complexes",
      description:
        "Nous développons des systèmes de gestion d'entrepôt, des plateformes de livraison du dernier kilomètre, des outils d'optimisation des tournées et des tableaux de bord de suivi de la supply chain pour des entreprises logistiques dans toute l'Europe.",
      challenges: [
        {
          title: 'Suivi en temps réel',
          description: 'Capteurs GPS et IoT pour suivre envois et équipements à grande échelle.',
        },
        {
          title: 'Tournées sous contraintes',
          description: 'Itinéraires dynamiques qui tiennent compte du trafic, de la capacité et des créneaux horaires.',
        },
        {
          title: 'Intégration au WMS',
          description: "Intégration avec SAP, Oracle et des systèmes de gestion d'entrepôt plus anciens.",
        },
      ],
      solutions: [
        {
          title: "Gestion d'entrepôt",
          description:
            'WMS basé sur codes-barres et RFID, avec préparation de commandes optimisée et inventaires tournants.',
        },
        {
          title: 'Livraison du dernier kilomètre',
          description: 'Applications chauffeurs, preuve de livraison et portails de suivi pour les clients.',
        },
        {
          title: 'Visibilité de la supply chain',
          description: 'Tableaux de bord de suivi multi-transporteurs et de gestion des incidents.',
        },
        {
          title: 'Optimisation des itinéraires',
          description:
            'Planification des tournées par IA qui réduit les coûts de carburant et resserre les créneaux de livraison.',
        },
      ],
      meta: {
        title: 'Logiciels logistique & supply chain | Trident Software',
        description:
          "Développement logiciel logistique : WMS, dernier kilomètre, optimisation des tournées, visibilité supply chain. Équipe d'ingénieurs en Suisse.",
      },
    },
    it: {
      title: 'Logistica & Supply Chain',
      tagline: 'Visibilità e automazione per catene di fornitura complesse',
      description:
        "Sviluppiamo sistemi di gestione del magazzino, piattaforme per l'ultimo miglio, strumenti di ottimizzazione dei percorsi e dashboard di visibilità sulla supply chain per aziende di logistica in tutta Europa.",
      challenges: [
        {
          title: 'Tracciamento in tempo reale',
          description: 'Integrazione di sensori GPS e IoT per seguire spedizioni e asset su larga scala.',
        },
        {
          title: 'Percorsi con vincoli',
          description: 'Instradamento dinamico che tiene conto di traffico, capacità e finestre orarie.',
        },
        {
          title: 'Integrazione con il WMS',
          description: 'Integrazione con SAP, Oracle e sistemi di gestione del magazzino meno recenti.',
        },
      ],
      solutions: [
        {
          title: 'Gestione del magazzino',
          description: 'WMS basato su codici a barre e RFID, con picking ottimizzato e inventario a rotazione.',
        },
        {
          title: "Consegna dell'ultimo miglio",
          description: 'App per autisti, prova di consegna e portali di tracciamento per i clienti.',
        },
        {
          title: 'Visibilità sulla supply chain',
          description: 'Dashboard per il tracciamento multi-vettore e la gestione delle anomalie.',
        },
        {
          title: 'Ottimizzazione dei percorsi',
          description:
            "Pianificazione dei giri basata sull'IA che riduce i costi di carburante e restringe le finestre di consegna.",
        },
      ],
      meta: {
        title: 'Software per logistica & supply chain | Trident Software',
        description:
          'Sviluppo software per la logistica: WMS, ultimo miglio, ottimizzazione dei percorsi, visibilità sulla supply chain. Team di ingegneri in Svizzera.',
      },
    },
  },
}

export default record
