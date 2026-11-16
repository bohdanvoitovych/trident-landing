import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'geneva',
  relatedServices: ['software-engineering', 'ai-services', 'cto-as-a-service'],
  relatedCases: [],
  content: {
    en: {
      name: 'Geneva',
      region: 'Canton of Geneva',
      tagline: "Technology solutions for Geneva's international ecosystem",
      description:
        "Geneva is home to the UN, WHO, WTO, CERN, and a thriving luxury and private banking sector. We build multilingual enterprise platforms, compliance systems, and data management tools for Geneva's international organizations and financial institutions.",
      keyIndustries: [
        'International Organizations',
        'Private Banking',
        'Luxury Goods',
        'Life Sciences',
        'Diplomacy & NGOs',
      ],
      highlights: [
        {
          title: 'Multilingual from day one',
          description:
            "EN/FR/DE/IT interfaces built with proper i18n — not an afterthought. Essential for Geneva's international clientele.",
        },
        {
          title: 'Compliance-first development',
          description: 'GDPR, revFADP, and financial compliance baked into architecture, not bolted on later.',
        },
        {
          title: 'International org expertise',
          description:
            'Document management, reporting dashboards, and workflow automation for NGOs and international institutions.',
        },
      ],
      meta: {
        title: 'Software Development Geneva | Trident Software Switzerland',
        description:
          "Custom software for Geneva's international organizations, banks, and luxury brands. Multilingual platforms, compliance-first architecture. Swiss-based team.",
      },
    },
    de: {
      name: 'Genf',
      region: 'Kanton Genf',
      tagline: 'Technologie für das internationale Genf',
      description:
        'Genf beherbergt die UNO, die WHO, die WTO und das CERN, dazu eine starke Luxus- und Privatbankenbranche. Wir entwickeln mehrsprachige Unternehmensplattformen, Compliance-Systeme und Datenmanagement-Tools für internationale Organisationen und Finanzinstitute in Genf.',
      keyIndustries: [
        'Internationale Organisationen',
        'Private Banking',
        'Luxusgüter',
        'Life Sciences',
        'Diplomatie & NGOs',
      ],
      highlights: [
        {
          title: 'Mehrsprachig vom ersten Tag an',
          description:
            'Oberflächen in EN/FR/DE/IT mit sauberer i18n, von Anfang an mitgedacht statt nachgerüstet. Unverzichtbar für die internationale Kundschaft in Genf.',
        },
        {
          title: 'Compliance als Ausgangspunkt',
          description:
            'DSGVO, nDSG und Finanzregulierung sind fester Teil der Architektur und werden nicht nachträglich angeflanscht.',
        },
        {
          title: 'Erfahrung mit internationalen Organisationen',
          description:
            'Dokumentenmanagement, Reporting-Dashboards und Workflow-Automatisierung für NGOs und internationale Institutionen.',
        },
      ],
      meta: {
        title: 'Softwareentwicklung Genf | Trident Software Schweiz',
        description:
          'Individuelle Software für internationale Organisationen, Banken und Luxusmarken in Genf. Mehrsprachige Plattformen, Compliance by Design. Team in der Schweiz.',
      },
    },
    fr: {
      name: 'Genève',
      region: 'Canton de Genève',
      tagline: 'Des solutions technologiques pour la Genève internationale',
      description:
        "Genève abrite l'ONU, l'OMS, l'OMC et le CERN, ainsi qu'un secteur du luxe et de la banque privée très dynamique. Nous développons des plateformes d'entreprise multilingues, des systèmes de conformité et des outils de gestion des données pour les organisations internationales et les institutions financières genevoises.",
      keyIndustries: [
        'Organisations internationales',
        'Banque privée',
        'Produits de luxe',
        'Sciences de la vie',
        'Diplomatie & ONG',
      ],
      highlights: [
        {
          title: 'Multilingue dès le premier jour',
          description:
            'Des interfaces EN/FR/DE/IT conçues avec une vraie i18n, pensée dès le départ et non ajoutée après coup. Indispensable pour la clientèle internationale de Genève.',
        },
        {
          title: 'La conformité au cœur du développement',
          description: "RGPD, nLPD et conformité financière intégrés à l'architecture, et non greffés plus tard.",
        },
        {
          title: 'Expertise des organisations internationales',
          description:
            'Gestion documentaire, tableaux de bord de reporting et automatisation des processus pour les ONG et les institutions internationales.',
        },
      ],
      meta: {
        title: 'Développement logiciel Genève | Trident Software Suisse',
        description:
          'Logiciels sur mesure pour les organisations internationales, banques et marques de luxe à Genève. Plateformes multilingues, conformité intégrée. Équipe suisse.',
      },
    },
    it: {
      name: 'Ginevra',
      region: 'Cantone di Ginevra',
      tagline: 'Soluzioni tecnologiche per la Ginevra internazionale',
      description:
        'Ginevra ospita ONU, OMS, OMC e CERN, oltre a un vivace settore del lusso e del private banking. Sviluppiamo piattaforme aziendali multilingue, sistemi di compliance e strumenti di gestione dei dati per le organizzazioni internazionali e gli istituti finanziari ginevrini.',
      keyIndustries: [
        'Organizzazioni internazionali',
        'Private banking',
        'Beni di lusso',
        'Scienze della vita',
        'Diplomazia & ONG',
      ],
      highlights: [
        {
          title: 'Multilingue fin dal primo giorno',
          description:
            "Interfacce EN/FR/DE/IT costruite con una vera i18n, prevista dall'inizio e non aggiunta in seguito. Indispensabile per la clientela internazionale di Ginevra.",
        },
        {
          title: 'Sviluppo con la compliance al centro',
          description: "GDPR, nLPD e conformità finanziaria integrati nell'architettura, non aggiunti dopo.",
        },
        {
          title: 'Esperienza con le organizzazioni internazionali',
          description:
            'Gestione documentale, dashboard di reporting e automazione dei flussi di lavoro per ONG e istituzioni internazionali.',
        },
      ],
      meta: {
        title: 'Sviluppo software Ginevra | Trident Software Svizzera',
        description:
          'Software su misura per organizzazioni internazionali, banche e marchi del lusso a Ginevra. Piattaforme multilingue, compliance integrata. Team svizzero.',
      },
    },
  },
}

export default record
