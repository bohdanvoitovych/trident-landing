import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'energy',
  icon: 'zap',
  techStack: ['Python', 'TimescaleDB', 'Grafana', 'OCPP', 'MQTT', 'FastAPI', 'Kubernetes'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'embedded-and-iot', 'cloud-consulting'],
  content: {
    en: {
      title: 'Energy & Utilities',
      tagline: 'Software for the energy transition',
      description:
        'Grid management systems, EV charging infrastructure software, renewable energy monitoring, and energy trading platforms for utilities and cleantech companies.',
      challenges: [
        {
          title: 'Grid complexity',
          description: 'Distributed energy resources, bi-directional power flow, and grid stability.',
        },
        {
          title: 'Regulatory framework',
          description: 'Swiss ElCom, EU energy directives, and metering regulations.',
        },
        {
          title: 'Real-time optimization',
          description: 'Energy dispatch optimization with sub-second response requirements.',
        },
      ],
      solutions: [
        {
          title: 'EV charging management',
          description: 'OCPP-compliant charging infrastructure management and billing.',
        },
        {
          title: 'Energy monitoring',
          description: 'Real-time dashboards for solar, wind, and storage assets.',
        },
        {
          title: 'Demand response',
          description: 'Automated load management responding to grid signals.',
        },
        {
          title: 'Energy trading',
          description: 'Day-ahead and intraday trading platform integrations.',
        },
      ],
      meta: {
        title: 'Energy & Utilities Software Development | Trident Software',
        description:
          'Energy software — EV charging management, grid monitoring, demand response, energy trading. Swiss engineering team.',
      },
    },
    de: {
      title: 'Energie & Versorgung',
      tagline: 'Software für die Energiewende',
      description:
        'Netzleitsysteme, Software für Ladeinfrastruktur, Monitoring erneuerbarer Energien und Plattformen für den Energiehandel, für Energieversorger und Cleantech-Unternehmen.',
      challenges: [
        {
          title: 'Komplexe Stromnetze',
          description: 'Dezentrale Erzeugung, Stromflüsse in beide Richtungen und Netzstabilität.',
        },
        {
          title: 'Regulatorischer Rahmen',
          description: 'Vorgaben der ElCom, EU-Energierichtlinien und Messvorschriften.',
        },
        {
          title: 'Optimierung in Echtzeit',
          description: 'Optimierter Kraftwerkseinsatz mit Reaktionszeiten unter einer Sekunde.',
        },
      ],
      solutions: [
        {
          title: 'Lademanagement für E-Fahrzeuge',
          description: 'OCPP-konforme Verwaltung und Abrechnung der Ladeinfrastruktur.',
        },
        {
          title: 'Energiemonitoring',
          description: 'Echtzeit-Dashboards für Solar-, Wind- und Speicheranlagen.',
        },
        {
          title: 'Lastmanagement',
          description: 'Automatische Laststeuerung als Reaktion auf Netzsignale.',
        },
        {
          title: 'Energiehandel',
          description: 'Anbindung an Day-Ahead- und Intraday-Handelsplattformen.',
        },
      ],
      meta: {
        title: 'Software für Energie & Versorgung | Trident Software',
        description:
          'Energiesoftware: Lademanagement für E-Fahrzeuge, Netzmonitoring, Lastmanagement, Energiehandel. Engineering-Team in der Schweiz.',
      },
    },
    fr: {
      title: 'Énergie & Services publics',
      tagline: 'Des logiciels pour la transition énergétique',
      description:
        "Systèmes de gestion de réseau, logiciels pour infrastructures de recharge, monitoring des énergies renouvelables et plateformes de négoce d'énergie pour les fournisseurs d'énergie et les entreprises cleantech.",
      challenges: [
        {
          title: 'Des réseaux plus complexes',
          description: "Production décentralisée, flux d'énergie bidirectionnels et stabilité du réseau.",
        },
        {
          title: 'Cadre réglementaire',
          description: "ElCom, directives européennes sur l'énergie et règles de comptage.",
        },
        {
          title: 'Optimisation en temps réel',
          description: "Optimisation de la répartition de l'énergie avec des temps de réponse inférieurs à la seconde.",
        },
      ],
      solutions: [
        {
          title: 'Gestion de la recharge électrique',
          description: "Gestion et facturation d'infrastructures de recharge conformes OCPP.",
        },
        {
          title: 'Monitoring énergétique',
          description: 'Tableaux de bord en temps réel pour installations solaires, éoliennes et de stockage.',
        },
        {
          title: 'Pilotage de la demande',
          description: 'Gestion automatique de la charge en réponse aux signaux du réseau.',
        },
        {
          title: "Négoce d'énergie",
          description: 'Intégrations avec les plateformes de négoce day-ahead et intraday.',
        },
      ],
      meta: {
        title: 'Développement logiciel énergie | Trident Software',
        description:
          "Logiciels énergie : gestion de la recharge électrique, monitoring réseau, pilotage de la demande, négoce d'énergie. Ingénieurs en Suisse.",
      },
    },
    it: {
      title: 'Energia & Utility',
      tagline: 'Software per la transizione energetica',
      description:
        'Sistemi di gestione della rete, software per infrastrutture di ricarica, monitoraggio delle rinnovabili e piattaforme di trading energetico per aziende di servizi energetici e imprese cleantech.',
      challenges: [
        {
          title: 'Reti sempre più complesse',
          description: 'Produzione distribuita, flussi di energia bidirezionali e stabilità della rete.',
        },
        {
          title: 'Quadro normativo',
          description: "ElCom, direttive europee sull'energia e norme sulla misurazione.",
        },
        {
          title: 'Ottimizzazione in tempo reale',
          description: "Dispacciamento dell'energia ottimizzato con tempi di risposta inferiori al secondo.",
        },
      ],
      solutions: [
        {
          title: 'Gestione della ricarica EV',
          description: 'Gestione e fatturazione di infrastrutture di ricarica conformi a OCPP.',
        },
        {
          title: 'Monitoraggio energetico',
          description: 'Dashboard in tempo reale per impianti solari, eolici e di accumulo.',
        },
        {
          title: 'Demand response',
          description: 'Gestione automatica dei carichi in risposta ai segnali della rete.',
        },
        {
          title: 'Trading energetico',
          description: 'Integrazioni con piattaforme di trading day-ahead e intraday.',
        },
      ],
      meta: {
        title: "Sviluppo software per l'energia | Trident Software",
        description:
          "Software per l'energia: gestione della ricarica EV, monitoraggio della rete, demand response, trading energetico. Team in Svizzera.",
      },
    },
  },
}

export default record
