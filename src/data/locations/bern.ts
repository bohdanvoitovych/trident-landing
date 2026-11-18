import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'bern',
  relatedServices: ['software-engineering', 'embedded-and-iot'],
  relatedCases: ['post-acute-clinic-network'],
  content: {
    en: {
      name: 'Bern',
      region: 'Canton of Bern',
      tagline: "Software for Switzerland's federal capital",
      description:
        "Bern is Switzerland's administrative centre, with federal ministries, cantonal governments, universities and healthcare institutions. We specialise in public sector digitalisation, secure data platforms and citizen portals built to Swiss government standards.",
      keyIndustries: ['Public sector', 'Healthcare', 'Education', 'Insurance', 'Defence & security'],
      highlights: [
        {
          title: 'Public sector digitalisation',
          description:
            'Citizen portals, permit management, and government workflow systems compliant with eCH standards and Swiss data residency requirements.',
        },
        {
          title: 'University & research software',
          description:
            "Research data platforms, lab management systems, and academic collaboration tools for Bern's universities and research institutes.",
        },
        {
          title: 'Healthcare IT integration',
          description:
            "HL7 FHIR interfaces, patient management systems, and eHealth platform integrations for Bern's hospital network.",
        },
      ],
      meta: {
        title: 'Software development Bern | Trident Software Switzerland',
        description:
          'Public sector digitalisation, healthcare IT and government software for Bern. Swiss data residency, eCH standards compliance. Development team based in Valais.',
      },
    },
    de: {
      name: 'Bern',
      region: 'Kanton Bern',
      tagline: 'Digitale Lösungen für die Bundesstadt',
      description:
        'Bern ist das Verwaltungszentrum der Schweiz: Bundesämter, Kantonsverwaltung, Hochschulen und Gesundheitseinrichtungen. Wir sind auf die Digitalisierung der öffentlichen Hand spezialisiert und bauen sichere Datenplattformen und Bürgerportale nach den Standards der Schweizer Verwaltung.',
      keyIndustries: ['Öffentliche Hand', 'Gesundheitswesen', 'Bildung', 'Versicherungen', 'Verteidigung & Sicherheit'],
      highlights: [
        {
          title: 'Digitalisierung der Verwaltung',
          description:
            'Bürgerportale, Bewilligungsverwaltung und Workflow-Systeme für Behörden, konform mit den eCH-Standards und den Schweizer Vorgaben zur Datenhaltung im Inland.',
        },
        {
          title: 'Software für Hochschulen und Forschung',
          description:
            'Forschungsdatenplattformen, Labormanagement-Systeme und Tools für die akademische Zusammenarbeit für die Berner Hochschulen und Forschungsinstitute.',
        },
        {
          title: 'IT-Integration im Gesundheitswesen',
          description:
            'HL7-FHIR-Schnittstellen, Patientenverwaltungssysteme und Anbindungen an E-Health-Plattformen für das Berner Spitalnetz.',
        },
      ],
      meta: {
        title: 'Softwareentwicklung Bern | Trident Software Schweiz',
        description:
          'Digitalisierung der Verwaltung, Gesundheits-IT und Behördensoftware für Bern. Datenhaltung in der Schweiz, eCH-konform. Entwicklungsteam im Wallis.',
      },
    },
    fr: {
      name: 'Berne',
      region: 'Canton de Berne',
      tagline: 'Des solutions numériques pour la ville fédérale',
      description:
        "Berne est le centre administratif de la Suisse : départements fédéraux, administration cantonale, hautes écoles et institutions de santé. Nous sommes spécialisés dans la numérisation du secteur public, les plateformes de données sécurisées et les portails citoyens conformes aux standards de l'administration suisse.",
      keyIndustries: ['Secteur public', 'Santé', 'Formation', 'Assurances', 'Défense & sécurité'],
      highlights: [
        {
          title: 'Numérisation du secteur public',
          description:
            "Portails citoyens, gestion des autorisations et systèmes de flux de travail administratifs conformes aux normes eCH et aux exigences suisses d'hébergement des données.",
        },
        {
          title: 'Logiciels pour les hautes écoles et la recherche',
          description:
            "Plateformes de données de recherche, systèmes de gestion de laboratoire et outils de collaboration académique pour les hautes écoles et instituts de recherche bernois.",
        },
        {
          title: 'Intégration informatique dans la santé',
          description:
            'Interfaces HL7 FHIR, systèmes de gestion des patients et intégrations aux plateformes de cybersanté pour le réseau hospitalier bernois.',
        },
      ],
      meta: {
        title: 'Développement logiciel Berne | Trident Software Suisse',
        description:
          'Numérisation du secteur public, informatique de santé et logiciels administratifs à Berne. Données hébergées en Suisse, normes eCH. Équipe basée en Valais.',
      },
    },
    it: {
      name: 'Berna',
      region: 'Cantone di Berna',
      tagline: 'Soluzioni digitali per la città federale',
      description:
        "Berna è il cuore amministrativo della Svizzera: dipartimenti federali, amministrazione cantonale, università e istituti sanitari. Siamo specializzati nella digitalizzazione del settore pubblico, in piattaforme dati sicure e in portali per i cittadini conformi agli standard dell'amministrazione svizzera.",
      keyIndustries: ['Settore pubblico', 'Sanità', 'Formazione', 'Assicurazioni', 'Difesa & sicurezza'],
      highlights: [
        {
          title: 'Digitalizzazione della pubblica amministrazione',
          description:
            'Portali per i cittadini, gestione delle autorizzazioni e sistemi di workflow per le amministrazioni, conformi agli standard eCH e ai requisiti svizzeri di residenza dei dati.',
        },
        {
          title: 'Software per università e ricerca',
          description:
            'Piattaforme per i dati di ricerca, sistemi di gestione dei laboratori e strumenti di collaborazione accademica per le università e gli istituti di ricerca bernesi.',
        },
        {
          title: 'Integrazione IT in ambito sanitario',
          description:
            'Interfacce HL7 FHIR, sistemi di gestione dei pazienti e integrazioni con piattaforme di sanità digitale per la rete ospedaliera bernese.',
        },
      ],
      meta: {
        title: 'Sviluppo software Berna | Trident Software Svizzera',
        description:
          "Digitalizzazione del settore pubblico, IT sanitario e software per l'amministrazione a Berna. Dati in Svizzera, standard eCH. Team con sede in Vallese.",
      },
    },
  },
}

export default record
