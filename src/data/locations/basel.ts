import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'basel',
  relatedServices: ['software-engineering', 'embedded-and-iot', 'ai-services'],
  relatedCases: ['aida-medicine', 'tdsbot-iot'],
  content: {
    en: {
      name: 'Basel',
      region: 'Canton of Basel-City',
      tagline: "Enterprise software for Basel's pharma and life sciences leaders",
      description:
        "Basel is home to Roche, Novartis, Lonza, and hundreds of medtech and chemical companies. We build IEC 62304-compliant medical device software, laboratory automation tools, and regulatory submission platforms for Basel's life sciences industry.",
      keyIndustries: ['Pharma', 'Medtech', 'Chemical Industry', 'Biotech', 'Financial Services'],
      highlights: [
        {
          title: 'Medical device software',
          description:
            'IEC 62304-compliant development for Class I–III medical devices. Full documentation package for regulatory submission.',
        },
        {
          title: 'Lab & manufacturing automation',
          description:
            'LIMS integration, batch record systems, and IoT-connected manufacturing floor monitoring for pharma production lines.',
        },
        {
          title: 'Regulatory data management',
          description:
            'eCTD submission tools, clinical trial data platforms, and audit trail systems meeting ICH E6(R3) and 21 CFR Part 11.',
        },
      ],
      meta: {
        title: 'Software Development Basel | Pharma & Life Sciences IT | Trident Software',
        description:
          "Medical device software, lab automation, and regulatory platforms for Basel's pharma and medtech sector. IEC 62304, GMP-compliant development. Swiss team.",
      },
    },
    de: {
      name: 'Basel',
      region: 'Kanton Basel-Stadt',
      tagline: 'Unternehmenssoftware für die Pharma- und Life-Sciences-Branche in Basel',
      description:
        'In Basel sind Roche, Novartis und Lonza zu Hause, dazu Hunderte Medtech- und Chemieunternehmen. Wir entwickeln Medizinprodukte-Software nach IEC 62304, Tools für die Laborautomation und Plattformen für Zulassungseinreichungen für die Basler Life-Sciences-Industrie.',
      keyIndustries: ['Pharma', 'Medtech', 'Chemische Industrie', 'Biotech', 'Finanzdienstleistungen'],
      highlights: [
        {
          title: 'Software für Medizinprodukte',
          description:
            'Entwicklung nach IEC 62304 für Medizinprodukte der Klassen I bis III. Vollständige Dokumentation für die Zulassungseinreichung.',
        },
        {
          title: 'Labor- und Produktionsautomation',
          description:
            'LIMS-Integration, Systeme für Chargenprotokolle und IoT-gestützte Überwachung der Produktionshalle für Pharma-Produktionslinien.',
        },
        {
          title: 'Regulatorisches Datenmanagement',
          description:
            'Tools für eCTD-Einreichungen, Plattformen für Daten aus klinischen Studien und Audit-Trail-Systeme gemäss ICH E6(R3) und 21 CFR Part 11.',
        },
      ],
      meta: {
        title: 'Softwareentwicklung Basel | Pharma & Life Sciences | Trident',
        description:
          'Medizinprodukte-Software, Laborautomation und Zulassungsplattformen für Pharma und Medtech in Basel. Entwicklung nach IEC 62304 und GMP. Schweizer Team.',
      },
    },
    fr: {
      name: 'Bâle',
      region: 'Canton de Bâle-Ville',
      tagline: "Des logiciels d'entreprise pour les leaders bâlois de la pharma et des sciences de la vie",
      description:
        "Bâle abrite Roche, Novartis, Lonza et des centaines d'entreprises medtech et chimiques. Nous développons des logiciels de dispositifs médicaux conformes à la norme IEC 62304, des outils d'automatisation de laboratoire et des plateformes de soumission réglementaire pour l'industrie bâloise des sciences de la vie.",
      keyIndustries: ['Pharma', 'Medtech', 'Industrie chimique', 'Biotech', 'Services financiers'],
      highlights: [
        {
          title: 'Logiciels de dispositifs médicaux',
          description:
            'Développement conforme IEC 62304 pour les dispositifs médicaux de classe I à III. Dossier documentaire complet pour la soumission réglementaire.',
        },
        {
          title: 'Automatisation du laboratoire et de la production',
          description:
            'Intégration LIMS, systèmes de dossiers de lot et surveillance IoT des ateliers de fabrication pour les lignes de production pharmaceutique.',
        },
        {
          title: 'Gestion des données réglementaires',
          description:
            "Outils de soumission eCTD, plateformes de données d'essais cliniques et systèmes de piste d'audit conformes à ICH E6(R3) et 21 CFR Part 11.",
        },
      ],
      meta: {
        title: 'Développement logiciel Bâle | Pharma & medtech | Trident',
        description:
          'Logiciels de dispositifs médicaux, automatisation de laboratoire et plateformes réglementaires pour la pharma et la medtech bâloises. IEC 62304, BPF.',
      },
    },
    it: {
      name: 'Basilea',
      region: 'Cantone di Basilea Città',
      tagline: 'Software aziendale per i leader basilesi della farmaceutica e delle scienze della vita',
      description:
        "Basilea ospita Roche, Novartis, Lonza e centinaia di aziende medtech e chimiche. Sviluppiamo software per dispositivi medici conforme a IEC 62304, strumenti di automazione di laboratorio e piattaforme per le sottomissioni regolatorie per l'industria basilese delle scienze della vita.",
      keyIndustries: ['Farmaceutica', 'Medtech', 'Industria chimica', 'Biotech', 'Servizi finanziari'],
      highlights: [
        {
          title: 'Software per dispositivi medici',
          description:
            'Sviluppo conforme a IEC 62304 per dispositivi medici di classe I–III. Pacchetto documentale completo per la sottomissione regolatoria.',
        },
        {
          title: 'Automazione di laboratorio e produzione',
          description:
            'Integrazione LIMS, sistemi per i batch record e monitoraggio IoT dei reparti produttivi per le linee di produzione farmaceutica.',
        },
        {
          title: 'Gestione dei dati regolatori',
          description:
            'Strumenti per le sottomissioni eCTD, piattaforme per i dati degli studi clinici e sistemi di audit trail conformi a ICH E6(R3) e 21 CFR Part 11.',
        },
      ],
      meta: {
        title: 'Sviluppo software Basilea | Farma & life sciences | Trident',
        description:
          'Software per dispositivi medici, automazione di laboratorio e piattaforme regolatorie per farma e medtech a Basilea. IEC 62304, conformità GMP. Team svizzero.',
      },
    },
  },
}

export default record
