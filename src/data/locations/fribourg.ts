import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'fribourg',
  relatedServices: ['software-engineering', 'ai-services', 'cto-as-a-service'],
  relatedCases: ['kleap-ai-builder', 'lapochette', 'post-acute-clinic-network'],
  content: {
    en: {
      name: 'Fribourg',
      region: 'Canton of Fribourg',
      tagline: "Bilingual software solutions for Switzerland's crossroads",
      description:
        'Fribourg sits at the French-German language border, making it uniquely suited for bilingual digital products. With Nestlé nearby in Vevey, a strong food industry, and the University of Fribourg, we build multilingual enterprise systems, food traceability platforms, and educational software for this distinctive canton.',
      keyIndustries: [
        'Food & Agri Industry',
        'Education & Research',
        'Bilingual Services',
        'Healthcare',
        'Construction',
      ],
      highlights: [
        {
          title: 'True bilingualism',
          description:
            'German-French bilingual products where both languages are treated as first-class citizens — proper locale switching, RTL-safe layouts, and native translations.',
        },
        {
          title: 'Food industry traceability',
          description:
            'Farm-to-fork tracking, quality control systems, and EU food labeling compliance platforms for the Fribourg-Vevey food corridor.',
        },
        {
          title: 'University & EdTech solutions',
          description:
            "Learning management systems, research data platforms, and student portals for Fribourg's academic institutions.",
        },
      ],
      meta: {
        title: 'Software Development Fribourg | Bilingual Swiss Software | Trident Software',
        description:
          'Bilingual German-French software development in Fribourg. Food traceability, EdTech, and enterprise platforms. University of Fribourg ecosystem partner.',
      },
    },
    de: {
      name: 'Freiburg',
      region: 'Kanton Freiburg',
      tagline: 'Zweisprachige Softwarelösungen an der Schweizer Sprachgrenze',
      description:
        'Freiburg liegt an der deutsch-französischen Sprachgrenze und eignet sich deshalb besonders für zweisprachige digitale Produkte. Mit Nestlé im nahen Vevey, einer starken Lebensmittelindustrie und der Universität Freiburg entwickeln wir für diesen besonderen Kanton mehrsprachige Unternehmenssysteme, Plattformen für die Lebensmittel-Rückverfolgbarkeit und Bildungssoftware.',
      keyIndustries: [
        'Lebensmittel- & Agrarindustrie',
        'Bildung & Forschung',
        'Zweisprachige Dienstleistungen',
        'Gesundheitswesen',
        'Bau',
      ],
      highlights: [
        {
          title: 'Echte Zweisprachigkeit',
          description:
            'Deutsch-französische Produkte, in denen beide Sprachen gleichwertig behandelt werden: sauberer Sprachwechsel, RTL-sichere Layouts und Übersetzungen von Muttersprachlern.',
        },
        {
          title: 'Rückverfolgbarkeit in der Lebensmittelindustrie',
          description:
            'Rückverfolgung vom Feld bis auf den Teller, Qualitätskontrollsysteme und Plattformen für die EU-konforme Lebensmittelkennzeichnung im Lebensmittelkorridor Freiburg–Vevey.',
        },
        {
          title: 'Lösungen für Hochschulen und EdTech',
          description:
            'Lernmanagementsysteme, Forschungsdatenplattformen und Studierendenportale für die Freiburger Hochschulen.',
        },
      ],
      meta: {
        title: 'Softwareentwicklung Freiburg | Zweisprachig | Trident',
        description:
          'Zweisprachige Softwareentwicklung (DE/FR) in Freiburg: Lebensmittel-Rückverfolgung, EdTech, Unternehmensplattformen. Partner im Umfeld der Uni Freiburg.',
      },
    },
    fr: {
      name: 'Fribourg',
      region: 'Canton de Fribourg',
      tagline: 'Des solutions logicielles bilingues au carrefour de la Suisse',
      description:
        "Situé sur la frontière linguistique entre français et allemand, Fribourg est le terrain idéal pour des produits numériques bilingues. Avec Nestlé tout près à Vevey, une industrie alimentaire solide et l'Université de Fribourg, nous développons pour ce canton singulier des systèmes d'entreprise multilingues, des plateformes de traçabilité alimentaire et des logiciels éducatifs.",
      keyIndustries: ['Agroalimentaire', 'Formation & recherche', 'Services bilingues', 'Santé', 'Construction'],
      highlights: [
        {
          title: 'Un vrai bilinguisme',
          description:
            "Des produits bilingues allemand-français où les deux langues sont traitées sur un pied d'égalité : changement de langue soigné, mises en page compatibles RTL et traductions natives.",
        },
        {
          title: "Traçabilité dans l'industrie alimentaire",
          description:
            "Suivi de la fourche à la fourchette, systèmes de contrôle qualité et plateformes de conformité à l'étiquetage alimentaire UE pour le corridor agroalimentaire Fribourg-Vevey.",
        },
        {
          title: "Solutions pour l'université et l'EdTech",
          description:
            "Plateformes d'apprentissage en ligne, plateformes de données de recherche et portails étudiants pour les institutions académiques fribourgeoises.",
        },
      ],
      meta: {
        title: 'Développement logiciel Fribourg | Bilingue | Trident Software',
        description:
          "Développement logiciel bilingue français-allemand à Fribourg : traçabilité alimentaire, EdTech, plateformes d'entreprise. Partenaire de l'écosystème Unifr.",
      },
    },
    it: {
      name: 'Friburgo',
      region: 'Cantone di Friburgo',
      tagline: 'Soluzioni software bilingui al crocevia della Svizzera',
      description:
        "Friburgo si trova sul confine linguistico tra francese e tedesco, il che la rende ideale per prodotti digitali bilingui. Con Nestlé a pochi chilometri, a Vevey, una forte industria alimentare e l'Università di Friburgo, sviluppiamo per questo cantone particolare sistemi aziendali multilingue, piattaforme di tracciabilità alimentare e software per la formazione.",
      keyIndustries: ['Industria agroalimentare', 'Formazione & ricerca', 'Servizi bilingui', 'Sanità', 'Edilizia'],
      highlights: [
        {
          title: 'Bilinguismo autentico',
          description:
            'Prodotti bilingui tedesco-francese in cui entrambe le lingue hanno pari dignità: cambio lingua fatto bene, layout compatibili con RTL e traduzioni madrelingua.',
        },
        {
          title: "Tracciabilità nell'industria alimentare",
          description:
            "Tracciamento dal campo alla tavola, sistemi di controllo qualità e piattaforme per la conformità all'etichettatura alimentare UE nel corridoio agroalimentare Friburgo-Vevey.",
        },
        {
          title: 'Soluzioni per università ed EdTech',
          description:
            'Piattaforme di e-learning, piattaforme per i dati di ricerca e portali per studenti per gli istituti accademici di Friburgo.',
        },
      ],
      meta: {
        title: 'Sviluppo software Friburgo | Software bilingue | Trident',
        description:
          "Sviluppo software bilingue tedesco-francese a Friburgo: tracciabilità alimentare, EdTech e piattaforme aziendali. Partner dell'ecosistema Unifr.",
      },
    },
  },
}

export default record
