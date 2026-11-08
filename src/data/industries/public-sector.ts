import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'public-sector',
  icon: 'landmark',
  techStack: ['React', 'Java', 'PostgreSQL', 'Exoscale', 'Keycloak', 'Docker', 'OpenAPI'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'cloud-consulting', 'cto-as-a-service'],
  content: {
    en: {
      title: 'Public Sector & GovTech',
      tagline: 'Digital government for Swiss communities',
      description:
        'Citizen portals, municipal management systems, grant administration tools, and smart city integrations for Swiss cantonal and municipal administrations.',
      challenges: [
        {
          title: 'Data sovereignty',
          description: 'Swiss public data must remain on Swiss infrastructure — no US cloud hyperscalers.',
        },
        {
          title: 'Accessibility',
          description: 'WCAG 2.1 AA compliance and multilingual interfaces for all four national languages.',
        },
        {
          title: 'Procurement rules',
          description: 'Public procurement via SIMAP with detailed technical specification requirements.',
        },
      ],
      solutions: [
        {
          title: 'Citizen portals',
          description: 'Self-service portals for permits, registrations, and municipal services.',
        },
        {
          title: 'Grant management',
          description: 'Application, review, and disbursement workflows for public grants.',
        },
        {
          title: 'Smart city integration',
          description: 'Sensor data aggregation for parking, waste, and traffic management.',
        },
        {
          title: 'Document management',
          description: 'Secure archiving and retrieval of public records.',
        },
      ],
      meta: {
        title: 'Public Sector & GovTech Software | Trident Software',
        description:
          'GovTech software — citizen portals, grant management, smart city, document management. Swiss data residency. Swiss engineering.',
      },
    },
    de: {
      title: 'Öffentliche Verwaltung & GovTech',
      tagline: 'Digitale Verwaltung für Schweizer Gemeinden',
      description:
        'Bürgerportale, Systeme für die Gemeindeverwaltung, Werkzeuge für die Fördermittelvergabe und Smart-City-Integrationen für Kantone und Gemeinden.',
      challenges: [
        {
          title: 'Datenhoheit',
          description: 'Öffentliche Daten der Schweiz bleiben auf Schweizer Infrastruktur, nicht bei US-Hyperscalern.',
        },
        {
          title: 'Barrierefreiheit',
          description: 'Konformität mit WCAG 2.1 AA und Oberflächen in allen vier Landessprachen.',
        },
        {
          title: 'Beschaffungsrecht',
          description: 'Öffentliche Ausschreibungen über SIMAP mit detaillierten technischen Pflichtenheften.',
        },
      ],
      solutions: [
        {
          title: 'Bürgerportale',
          description: 'Online-Schalter für Bewilligungen, Anmeldungen und Gemeindedienste.',
        },
        {
          title: 'Fördermittelverwaltung',
          description: 'Abläufe für Gesuch, Prüfung und Auszahlung öffentlicher Beiträge.',
        },
        {
          title: 'Smart-City-Anbindung',
          description: 'Bündelung von Sensordaten für Parkierung, Abfallwirtschaft und Verkehrssteuerung.',
        },
        {
          title: 'Dokumentenverwaltung',
          description: 'Sichere Archivierung und schneller Zugriff auf amtliche Akten.',
        },
      ],
      meta: {
        title: 'Software für Verwaltung & GovTech | Trident Software',
        description:
          'GovTech-Software: Bürgerportale, Fördermittelverwaltung, Smart City, Dokumentenverwaltung. Datenhaltung in der Schweiz, Entwicklung in der Schweiz.',
      },
    },
    fr: {
      title: 'Secteur public & GovTech',
      tagline: "L'administration numérique pour les collectivités suisses",
      description:
        "Guichets en ligne, systèmes de gestion communale, outils d'attribution de subventions et intégrations smart city pour les administrations cantonales et communales suisses.",
      challenges: [
        {
          title: 'Souveraineté des données',
          description:
            'Les données publiques suisses restent sur une infrastructure suisse, pas chez les hyperscalers américains.',
        },
        {
          title: 'Accessibilité',
          description: 'Conformité WCAG 2.1 AA et interfaces dans les quatre langues nationales.',
        },
        {
          title: 'Règles des marchés publics',
          description: "Appels d'offres publics via SIMAP, avec des cahiers des charges techniques détaillés.",
        },
      ],
      solutions: [
        {
          title: 'Guichets en ligne',
          description: 'Portails libre-service pour les autorisations, les inscriptions et les services communaux.',
        },
        {
          title: 'Gestion des subventions',
          description: "Circuits de demande, d'examen et de versement des aides publiques.",
        },
        {
          title: 'Intégration smart city',
          description: 'Agrégation des données de capteurs pour le stationnement, les déchets et la circulation.',
        },
        {
          title: 'Gestion documentaire',
          description: 'Archivage sécurisé et consultation des documents officiels.',
        },
      ],
      meta: {
        title: 'Logiciel secteur public & GovTech | Trident Software',
        description:
          'Logiciels GovTech : guichets en ligne, gestion des subventions, smart city, gestion documentaire. Données hébergées et développées en Suisse.',
      },
    },
    it: {
      title: 'Settore pubblico & GovTech',
      tagline: 'Amministrazione digitale per i comuni svizzeri',
      description:
        "Sportelli online per i cittadini, sistemi di gestione comunale, strumenti per l'erogazione di contributi e integrazioni smart city per amministrazioni cantonali e comunali svizzere.",
      challenges: [
        {
          title: 'Sovranità dei dati',
          description: 'I dati pubblici svizzeri restano su infrastruttura svizzera, non sugli hyperscaler americani.',
        },
        {
          title: 'Accessibilità',
          description: 'Conformità WCAG 2.1 AA e interfacce in tutte e quattro le lingue nazionali.',
        },
        {
          title: 'Regole degli appalti',
          description: 'Appalti pubblici tramite SIMAP con capitolati tecnici dettagliati.',
        },
      ],
      solutions: [
        {
          title: 'Sportelli online',
          description: 'Portali self-service per permessi, notifiche di arrivo e servizi comunali.',
        },
        {
          title: 'Gestione dei contributi pubblici',
          description: 'Flussi di domanda, valutazione ed erogazione dei contributi pubblici.',
        },
        {
          title: 'Integrazione smart city',
          description: 'Aggregazione dei dati dei sensori per parcheggi, rifiuti e gestione del traffico.',
        },
        {
          title: 'Gestione documentale',
          description: 'Archiviazione sicura e consultazione degli atti pubblici.',
        },
      ],
      meta: {
        title: 'Software per settore pubblico & GovTech | Trident Software',
        description:
          'Software GovTech: sportelli online, gestione dei contributi, smart city, gestione documentale. Dati in Svizzera. Ingegneria svizzera.',
      },
    },
  },
}

export default record
