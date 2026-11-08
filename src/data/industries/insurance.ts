import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'insurance',
  icon: 'shield-check',
  techStack: ['Java', 'Python', 'PostgreSQL', 'Kafka', 'Spark', 'Azure ML', 'Power BI'],
  relatedCases: [],
  relatedServices: ['ai-services', 'software-engineering', 'devops-and-sre'],
  content: {
    en: {
      title: 'Insurance & InsurTech',
      tagline: 'Modernizing the insurance value chain',
      description:
        'Claims automation, policy management systems, telematics-based underwriting, and AI fraud detection for Swiss insurers and InsurTech startups.',
      challenges: [
        {
          title: 'Legacy core systems',
          description: 'Integrating with mainframe-era policy administration systems.',
        },
        {
          title: 'Claims fraud',
          description: 'Detecting fraudulent claims patterns across structured and unstructured data.',
        },
        {
          title: 'Regulatory reporting',
          description: 'FINMA SST reporting, Solvency II, and IFRS 17 data pipelines.',
        },
      ],
      solutions: [
        {
          title: 'Claims automation',
          description: 'AI-powered claims triage, document extraction, and processing.',
        },
        {
          title: 'Policy management',
          description: 'Modern policy admin layer over legacy core systems.',
        },
        {
          title: 'Fraud detection',
          description: 'ML models detecting anomalies across claim submissions.',
        },
        {
          title: 'Telematics underwriting',
          description: 'UBI pricing engines using vehicle telematics data.',
        },
      ],
      meta: {
        title: 'Insurance & InsurTech Software | Trident Software',
        description:
          'InsurTech software — claims automation, fraud detection, policy management, telematics underwriting. Swiss engineering.',
      },
    },
    de: {
      title: 'Versicherungen & InsurTech',
      tagline: 'Die Wertschöpfungskette der Versicherer modernisieren',
      description:
        'Automatisierte Schadenbearbeitung, Policenverwaltung, telematikbasiertes Underwriting und KI-Betrugserkennung für Schweizer Versicherer und InsurTech-Startups.',
      challenges: [
        {
          title: 'Veraltete Kernsysteme',
          description: 'Integration mit Policenverwaltungssystemen aus der Mainframe-Ära.',
        },
        {
          title: 'Versicherungsbetrug',
          description: 'Betrugsmuster in strukturierten und unstrukturierten Schadendaten erkennen.',
        },
        {
          title: 'Aufsichtsrechtliches Reporting',
          description: 'Datenpipelines für FINMA-SST-Reporting, Solvency II und IFRS 17.',
        },
      ],
      solutions: [
        {
          title: 'Automatisierte Schadenbearbeitung',
          description: 'KI-gestützte Triage von Schadenfällen, Dokumentenauslese und Bearbeitung.',
        },
        {
          title: 'Policenverwaltung',
          description: 'Moderne Verwaltungsschicht über bestehenden Kernsystemen.',
        },
        {
          title: 'Betrugserkennung',
          description: 'ML-Modelle, die Auffälligkeiten in eingereichten Schadenmeldungen erkennen.',
        },
        {
          title: 'Telematik-Underwriting',
          description: 'Tarifierungs-Engines für nutzungsbasierte Versicherung (UBI) mit Fahrzeugtelematikdaten.',
        },
      ],
      meta: {
        title: 'Software für Versicherungen & InsurTech | Trident Software',
        description:
          'InsurTech-Software: automatisierte Schadenbearbeitung, Betrugserkennung, Policenverwaltung, Telematik-Underwriting. Engineering aus der Schweiz.',
      },
    },
    fr: {
      title: 'Assurance & InsurTech',
      tagline: "Moderniser la chaîne de valeur de l'assurance",
      description:
        'Automatisation des sinistres, systèmes de gestion des polices, souscription basée sur la télématique et détection de fraude par IA pour les assureurs suisses et les startups InsurTech.',
      challenges: [
        {
          title: 'Systèmes centraux vieillissants',
          description: "Intégration avec des systèmes de gestion des polices hérités de l'ère mainframe.",
        },
        {
          title: 'Fraude aux sinistres',
          description: 'Repérer les schémas de fraude dans les données structurées et non structurées.',
        },
        {
          title: 'Reporting prudentiel',
          description: 'Chaînes de données pour le reporting SST FINMA, Solvabilité II et IFRS 17.',
        },
      ],
      solutions: [
        {
          title: 'Automatisation des sinistres',
          description: 'Tri des sinistres, extraction de documents et traitement assistés par IA.',
        },
        {
          title: 'Gestion des polices',
          description: 'Couche moderne de gestion des polices au-dessus des systèmes centraux existants.',
        },
        {
          title: 'Détection de fraude',
          description: 'Modèles de ML qui repèrent les anomalies dans les déclarations de sinistre.',
        },
        {
          title: 'Souscription télématique',
          description:
            "Moteurs de tarification UBI (assurance à l'usage) exploitant les données télématiques des véhicules.",
        },
      ],
      meta: {
        title: 'Logiciels assurance & InsurTech | Trident Software',
        description:
          'Logiciels InsurTech : automatisation des sinistres, détection de fraude, gestion des polices, souscription télématique. Ingénierie suisse.',
      },
    },
    it: {
      title: 'Assicurazioni & InsurTech',
      tagline: 'Modernizzare la catena del valore assicurativa',
      description:
        'Automazione dei sinistri, sistemi di gestione delle polizze, sottoscrizione basata sulla telematica e rilevamento delle frodi con IA per assicuratori svizzeri e startup InsurTech.',
      challenges: [
        {
          title: 'Sistemi core datati',
          description: "Integrazione con sistemi di gestione delle polizze nati nell'era del mainframe.",
        },
        {
          title: 'Frodi sui sinistri',
          description: 'Individuare schemi fraudolenti in dati strutturati e non strutturati.',
        },
        {
          title: 'Reporting di vigilanza',
          description: 'Pipeline di dati per il reporting SST FINMA, Solvency II e IFRS 17.',
        },
      ],
      solutions: [
        {
          title: 'Automazione dei sinistri',
          description: "Smistamento dei sinistri, estrazione dai documenti e lavorazione con l'IA.",
        },
        {
          title: 'Gestione delle polizze',
          description: 'Uno strato moderno di gestione polizze sopra i sistemi core esistenti.',
        },
        {
          title: 'Rilevamento delle frodi',
          description: 'Modelli di ML che individuano anomalie nelle denunce di sinistro.',
        },
        {
          title: 'Sottoscrizione telematica',
          description: 'Motori di pricing UBI (assicurazione a consumo) basati sui dati telematici dei veicoli.',
        },
      ],
      meta: {
        title: 'Software per assicurazioni & InsurTech | Trident Software',
        description:
          'Software InsurTech: automazione dei sinistri, rilevamento frodi, gestione polizze, sottoscrizione telematica. Ingegneria svizzera.',
      },
    },
  },
}

export default record
