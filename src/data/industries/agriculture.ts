import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'agriculture',
  icon: 'sprout',
  techStack: ['Python', 'React', 'PostgreSQL', 'MQTT', 'LoRaWAN', 'PostGIS', 'AWS'],
  relatedCases: [],
  relatedServices: ['embedded-and-iot', 'software-engineering', 'ai-services'],
  content: {
    en: {
      title: 'Agriculture & AgriTech',
      tagline: 'Precision agriculture for Swiss farming',
      description:
        'Farm management systems, crop monitoring with satellite/drone data, livestock tracking, and agricultural IoT solutions for Swiss farmers and agri-businesses.',
      challenges: [
        {
          title: 'Remote connectivity',
          description: 'Reliable data collection in areas with poor cellular coverage.',
        },
        {
          title: 'Regulatory compliance',
          description: 'Swiss agricultural subsidies, organic certification, and cross-border food traceability.',
        },
        {
          title: 'Seasonal workflows',
          description: 'Software that adapts to planting, growing, and harvest cycles.',
        },
      ],
      solutions: [
        {
          title: 'Farm management',
          description: 'Crop planning, input tracking, and yield recording systems.',
        },
        {
          title: 'Precision monitoring',
          description: 'Satellite and drone imagery analysis for field health mapping.',
        },
        {
          title: 'Livestock tracking',
          description: 'RFID/GPS-based herd tracking and health monitoring.',
        },
        {
          title: 'Subsidy management',
          description: 'Swiss DZV subsidy application and compliance tracking.',
        },
      ],
      meta: {
        title: 'Agriculture & AgriTech Software | Trident Software',
        description:
          'AgriTech software — farm management, precision monitoring, livestock tracking, subsidy management. Swiss engineering.',
      },
    },
    de: {
      title: 'Landwirtschaft & AgriTech',
      tagline: 'Präzisionslandwirtschaft für Schweizer Betriebe',
      description:
        'Betriebsmanagement-Systeme, Kulturüberwachung mit Satelliten- und Drohnendaten, Tierverfolgung und IoT-Lösungen für Schweizer Landwirtinnen, Landwirte und Agrarunternehmen.',
      challenges: [
        {
          title: 'Funklöcher auf dem Feld',
          description: 'Zuverlässige Datenerfassung auch dort, wo das Mobilfunknetz schwach ist.',
        },
        {
          title: 'Direktzahlungen und Vorschriften',
          description:
            'Schweizer Agrarsubventionen, Bio-Zertifizierung und grenzüberschreitende Rückverfolgbarkeit von Lebensmitteln.',
        },
        {
          title: 'Arbeit im Takt der Saison',
          description: 'Software, die sich an Aussaat, Wachstum und Ernte anpasst.',
        },
      ],
      solutions: [
        {
          title: 'Betriebsmanagement',
          description: 'Anbauplanung, Erfassung von Betriebsmitteln und Ertragsaufzeichnung.',
        },
        {
          title: 'Präzisionsmonitoring',
          description: 'Auswertung von Satelliten- und Drohnenbildern für Zustandskarten der Felder.',
        },
        {
          title: 'Herdenüberwachung',
          description: 'Tierverfolgung per RFID/GPS und Überwachung der Tiergesundheit.',
        },
        {
          title: 'Beitragsverwaltung',
          description: 'Gesuche nach DZV und laufende Kontrolle der Beitragsvoraussetzungen.',
        },
      ],
      meta: {
        title: 'Software für Landwirtschaft & AgriTech | Trident Software',
        description:
          'AgriTech-Software für Betriebsmanagement, Präzisionsmonitoring, Herdenüberwachung und Direktzahlungen. Entwickelt in der Schweiz.',
      },
    },
    fr: {
      title: 'Agriculture & AgriTech',
      tagline: "L'agriculture de précision pour les exploitations suisses",
      description:
        "Logiciels de gestion d'exploitation, suivi des cultures par satellite et drone, traçabilité du bétail et solutions IoT agricoles pour les agriculteurs et les entreprises agricoles suisses.",
      challenges: [
        {
          title: 'Zones mal couvertes',
          description: 'Collecter des données fiables là où le réseau mobile passe mal.',
        },
        {
          title: 'Paiements directs et normes',
          description:
            'Subventions agricoles suisses, certification bio et traçabilité alimentaire au-delà des frontières.',
        },
        {
          title: 'Au rythme des saisons',
          description: 'Un logiciel qui suit les semis, la croissance et les récoltes.',
        },
      ],
      solutions: [
        {
          title: "Gestion d'exploitation",
          description: 'Planification des cultures, suivi des intrants et enregistrement des rendements.',
        },
        {
          title: 'Surveillance de précision',
          description: "Analyse d'images satellite et drone pour cartographier l'état des parcelles.",
        },
        {
          title: 'Suivi du troupeau',
          description: 'Localisation du bétail par RFID/GPS et surveillance de sa santé.',
        },
        {
          title: 'Gestion des contributions',
          description: "Demandes au titre de l'OPD et suivi du respect des conditions.",
        },
      ],
      meta: {
        title: 'Logiciel agricole & AgriTech | Trident Software',
        description:
          "Logiciels AgriTech : gestion d'exploitation, surveillance de précision, suivi du troupeau, paiements directs. Ingénierie suisse.",
      },
    },
    it: {
      title: 'Agricoltura & AgriTech',
      tagline: 'Agricoltura di precisione per le aziende agricole svizzere',
      description:
        'Gestionali aziendali, monitoraggio delle colture con dati satellitari e da drone, tracciamento del bestiame e soluzioni IoT per agricoltori e aziende agroalimentari svizzere.',
      challenges: [
        {
          title: 'Campi senza campo',
          description: 'Raccogliere dati affidabili anche dove la copertura mobile è scarsa.',
        },
        {
          title: 'Pagamenti diretti e norme',
          description: 'Sussidi agricoli svizzeri, certificazione bio e tracciabilità alimentare oltre confine.',
        },
        {
          title: 'Il ritmo delle stagioni',
          description: 'Un software che si adatta a semina, crescita e raccolto.',
        },
      ],
      solutions: [
        {
          title: 'Gestione aziendale',
          description: 'Pianificazione delle colture, registro dei mezzi di produzione e delle rese.',
        },
        {
          title: 'Monitoraggio di precisione',
          description: 'Analisi di immagini satellitari e da drone per mappare lo stato dei campi.',
        },
        {
          title: 'Controllo della mandria',
          description: 'Tracciamento del bestiame via RFID/GPS e monitoraggio della salute degli animali.',
        },
        {
          title: 'Gestione dei contributi',
          description: "Domande secondo l'OPD e verifica costante dei requisiti.",
        },
      ],
      meta: {
        title: 'Software per agricoltura & AgriTech | Trident Software',
        description:
          'Software AgriTech: gestione aziendale, monitoraggio di precisione, controllo della mandria, pagamenti diretti. Ingegneria svizzera.',
      },
    },
  },
}

export default record
