import { pick, type Localized } from '@/lib/localized'

/**
 * Projects carried over from the old site's portfolio.
 *
 * These are deliberately lighter than `cases.ts`: title, sector, what was
 * built and the screenshot — the facts the old site published. The nine
 * entries in cases.ts keep their full write-ups; nothing here invents
 * challenges, approaches or result metrics for a client's project.
 */
export type ProjectText = {
  title: string
  summary: string
  sector: string
}

type ProjectRecord = {
  slug: string
  image: string
  /** Set when a full case study exists for the same work. */
  caseSlug?: string
  content: Localized<ProjectText>
}

export type Project = Omit<ProjectRecord, 'content'> & ProjectText

const records: ProjectRecord[] = [
  {
    slug: 'zenit-auto-b2b',
    image: '/images/cases/zenit-auto-b2b.jpg',
    caseSlug: 'zenit-auto-b2b',
    content: {
      en: {
        title: 'Zenit Auto B2B Platform',
        summary: 'B2B e-commerce for automotive parts with bulk ordering.',
        sector: 'Automotive',
      },
      de: {
        title: 'Zenit Auto B2B-Plattform',
        summary: 'B2B-E-Commerce für Autoteile mit Mengenbestellungen.',
        sector: 'Automobil',
      },
      fr: {
        title: 'Plateforme B2B Zenit Auto',
        summary: 'E-commerce B2B de pièces automobiles avec commandes en gros.',
        sector: 'Automobile',
      },
      it: {
        title: 'Piattaforma B2B Zenit Auto',
        summary: "E-commerce B2B di ricambi auto con ordini all'ingrosso.",
        sector: 'Automotive',
      },
    },
  },
  {
    slug: 'aida-medicine',
    image: '/images/cases/aida-medicine.jpg',
    caseSlug: 'aida-medicine',
    content: {
      en: {
        title: 'Aida Medicine Platform',
        summary: 'Medical management system for clinics and healthcare providers.',
        sector: 'Healthcare',
      },
      de: {
        title: 'Aida Medizinplattform',
        summary: 'Verwaltungssystem für Kliniken und Gesundheitsdienstleister.',
        sector: 'Gesundheitswesen',
      },
      fr: {
        title: 'Plateforme médicale Aida',
        summary: 'Système de gestion pour cliniques et prestataires de soins.',
        sector: 'Santé',
      },
      it: {
        title: 'Piattaforma medica Aida',
        summary: 'Sistema gestionale per cliniche e strutture sanitarie.',
        sector: 'Sanità',
      },
    },
  },
  {
    slug: 'tires-online-shop',
    image: '/images/cases/tires-online-shop.jpg',
    content: {
      en: {
        title: 'Tires Online Shop',
        summary: 'E-commerce platform for tire and rim sales in Canada.',
        sector: 'E-commerce',
      },
      de: {
        title: 'Online-Shop für Reifen',
        summary: 'E-Commerce-Plattform für den Verkauf von Reifen und Felgen in Kanada.',
        sector: 'E-Commerce',
      },
      fr: {
        title: 'Boutique en ligne de pneus',
        summary: "Plateforme d'e-commerce pour la vente de pneus et de jantes au Canada.",
        sector: 'E-commerce',
      },
      it: {
        title: 'Negozio online di pneumatici',
        summary: 'Piattaforma e-commerce per la vendita di pneumatici e cerchi in Canada.',
        sector: 'E-commerce',
      },
    },
  },
  {
    slug: 'affiliation-platform',
    image: '/images/cases/affiliation-platform.jpg',
    content: {
      en: {
        title: 'Affiliation Platform',
        summary: 'Web and mobile system for managing affiliation programmes.',
        sector: 'MarTech',
      },
      de: {
        title: 'Affiliate-Plattform',
        summary: 'Web- und Mobile-System zur Verwaltung von Affiliate-Programmen.',
        sector: 'MarTech',
      },
      fr: {
        title: "Plateforme d'affiliation",
        summary: "Système web et mobile pour gérer des programmes d'affiliation.",
        sector: 'MarTech',
      },
      it: {
        title: 'Piattaforma di affiliazione',
        summary: 'Sistema web e mobile per gestire programmi di affiliazione.',
        sector: 'MarTech',
      },
    },
  },
  {
    slug: 'vesna-auto-b2b',
    image: '/images/cases/vesna-auto-b2b.jpg',
    content: {
      en: {
        title: 'Vesna Auto B2B Shop',
        summary: 'Scalable B2B portal for wholesale automotive parts.',
        sector: 'Automotive',
      },
      de: {
        title: 'Vesna Auto B2B-Shop',
        summary: 'Skalierbares B2B-Portal für den Autoteile-Grosshandel.',
        sector: 'Automobil',
      },
      fr: {
        title: 'Boutique B2B Vesna Auto',
        summary: 'Portail B2B évolutif pour la vente en gros de pièces automobiles.',
        sector: 'Automobile',
      },
      it: {
        title: 'Shop B2B Vesna Auto',
        summary: "Portale B2B scalabile per la vendita all'ingrosso di ricambi auto.",
        sector: 'Automotive',
      },
    },
  },
  {
    slug: 'status-m-wms',
    image: '/images/cases/status-m-wms.jpg',
    content: {
      en: {
        title: 'Status-M WMS App',
        summary: 'Mobile warehouse management app with scanner integration.',
        sector: 'Logistics',
      },
      de: {
        title: 'Status-M WMS-App',
        summary: 'Mobile App für die Lagerverwaltung mit Scanner-Anbindung.',
        sector: 'Logistik',
      },
      fr: {
        title: 'Application WMS Status-M',
        summary: "Application mobile de gestion d'entrepôt, connectée aux scanners.",
        sector: 'Logistique',
      },
      it: {
        title: 'App WMS Status-M',
        summary: 'App mobile per la gestione del magazzino, integrata con gli scanner.',
        sector: 'Logistica',
      },
    },
  },
  {
    slug: '8move-driver',
    image: '/images/cases/8move-driver.jpg',
    caseSlug: '8move-driver',
    content: {
      en: {
        title: '8Move Driver App',
        summary: 'Application supporting delivery operations and route management.',
        sector: 'Logistics',
      },
      de: {
        title: '8Move Driver App',
        summary: 'App für den Lieferbetrieb und die Routenplanung.',
        sector: 'Logistik',
      },
      fr: {
        title: '8Move Driver App',
        summary: 'Application pour les opérations de livraison et la gestion des tournées.',
        sector: 'Logistique',
      },
      it: {
        title: '8Move Driver App',
        summary: 'App a supporto delle consegne e della gestione dei percorsi.',
        sector: 'Logistica',
      },
    },
  },
  {
    slug: '8move-admin',
    image: '/images/cases/8move-admin.jpg',
    content: {
      en: {
        title: '8Move Admin Platform',
        summary: 'Centralised control for products, orders and fleet operations.',
        sector: 'Logistics',
      },
      de: {
        title: '8Move Admin-Plattform',
        summary: 'Zentrale Steuerung von Produkten, Bestellungen und Flotte.',
        sector: 'Logistik',
      },
      fr: {
        title: "Plateforme d'administration 8Move",
        summary: 'Pilotage centralisé des produits, des commandes et de la flotte.',
        sector: 'Logistique',
      },
      it: {
        title: 'Piattaforma di amministrazione 8Move',
        summary: 'Controllo centralizzato di prodotti, ordini e flotta.',
        sector: 'Logistica',
      },
    },
  },
  {
    slug: '8move-client',
    image: '/images/cases/8move-client.jpg',
    content: {
      en: {
        title: '8Move Client App',
        summary: 'Mobile app for B2B and B2C ordering and delivery management.',
        sector: 'Logistics',
      },
      de: {
        title: '8Move Client App',
        summary: 'Mobile App für B2B- und B2C-Bestellungen und die Lieferverwaltung.',
        sector: 'Logistik',
      },
      fr: {
        title: '8Move Client App',
        summary: 'Application mobile pour commander en B2B et B2C et suivre les livraisons.',
        sector: 'Logistique',
      },
      it: {
        title: '8Move Client App',
        summary: 'App mobile per ordini B2B e B2C e gestione delle consegne.',
        sector: 'Logistica',
      },
    },
  },
  {
    slug: 'samange-ecommerce',
    image: '/images/cases/samange-ecommerce.jpg',
    content: {
      en: {
        title: 'Samange E-commerce',
        summary: 'B2B and B2C fashion store for boutique apparel and accessories.',
        sector: 'Retail',
      },
      de: {
        title: 'Samange E-Commerce',
        summary: 'B2B- und B2C-Modeshop für Boutique-Kleidung und Accessoires.',
        sector: 'Detailhandel',
      },
      fr: {
        title: 'E-commerce Samange',
        summary: 'Boutique de mode B2B et B2C pour vêtements et accessoires de créateurs.',
        sector: 'Commerce de détail',
      },
      it: {
        title: 'E-commerce Samange',
        summary: 'Negozio di moda B2B e B2C per abbigliamento e accessori di boutique.',
        sector: 'Retail',
      },
    },
  },
  {
    slug: 'dentyval',
    image: '/images/cases/dentyval.jpg',
    content: {
      en: {
        title: 'Dentyval Web App',
        summary: 'Web questionnaire for dental business evaluation.',
        sector: 'Healthcare',
      },
      de: {
        title: 'Dentyval Web-App',
        summary: 'Online-Fragebogen zur Bewertung von Zahnarztpraxen.',
        sector: 'Gesundheitswesen',
      },
      fr: {
        title: 'Application web Dentyval',
        summary: 'Questionnaire en ligne pour évaluer un cabinet dentaire.',
        sector: 'Santé',
      },
      it: {
        title: 'Web app Dentyval',
        summary: 'Questionario online per la valutazione di studi dentistici.',
        sector: 'Sanità',
      },
    },
  },
  {
    slug: 'lapochette',
    image: '/images/cases/lapochette.jpg',
    caseSlug: 'lapochette',
    content: {
      en: {
        title: 'Lapochette Online Shop',
        summary: 'Online store for hotel and restaurant accessories in Switzerland.',
        sector: 'HoReCa',
      },
      de: {
        title: 'Lapochette Online-Shop',
        summary: 'Online-Shop für Hotel- und Restaurantzubehör in der Schweiz.',
        sector: 'HoReCa',
      },
      fr: {
        title: 'Boutique en ligne Lapochette',
        summary: "Boutique en ligne d'accessoires pour l'hôtellerie et la restauration en Suisse.",
        sector: 'HoReCa',
      },
      it: {
        title: 'Negozio online Lapochette',
        summary: 'Negozio online di accessori per hotel e ristoranti in Svizzera.',
        sector: 'HoReCa',
      },
    },
  },
  {
    slug: 'kleap-ai-builder',
    image: '/images/cases/kleap-ai-builder.jpg',
    caseSlug: 'kleap-ai-builder',
    content: {
      en: {
        title: 'Kleap Website Builder',
        summary: 'AI-enhanced tool for creating websites and landing pages.',
        sector: 'SaaS',
      },
      de: {
        title: 'Kleap Website-Builder',
        summary: 'KI-gestütztes Tool zum Erstellen von Websites und Landingpages.',
        sector: 'SaaS',
      },
      fr: {
        title: 'Créateur de sites Kleap',
        summary: "Outil assisté par l'IA pour créer des sites web et des landing pages.",
        sector: 'SaaS',
      },
      it: {
        title: 'Website builder Kleap',
        summary: "Strumento potenziato dall'IA per creare siti web e landing page.",
        sector: 'SaaS',
      },
    },
  },
  {
    slug: 'flashhub',
    image: '/images/cases/flashhub.jpg',
    content: {
      en: {
        title: 'Flashhub Online Store',
        summary: 'B2B and B2C platform for luxury watches and jewellery.',
        sector: 'Retail',
      },
      de: {
        title: 'Flashhub Online-Shop',
        summary: 'B2B- und B2C-Plattform für Luxusuhren und Schmuck.',
        sector: 'Detailhandel',
      },
      fr: {
        title: 'Boutique en ligne Flashhub',
        summary: 'Plateforme B2B et B2C de montres de luxe et de bijoux.',
        sector: 'Commerce de détail',
      },
      it: {
        title: 'Negozio online Flashhub',
        summary: 'Piattaforma B2B e B2C per orologi di lusso e gioielli.',
        sector: 'Retail',
      },
    },
  },
  {
    slug: 'loundoun-decks',
    image: '/images/cases/loundoun-decks.jpg',
    content: {
      en: {
        title: 'Loundoun Decks Website',
        summary: 'Promotional site for a construction company specialising in decks.',
        sector: 'Construction',
      },
      de: {
        title: 'Loundoun Decks Website',
        summary: 'Werbewebsite für ein Bauunternehmen, das auf Terrassen spezialisiert ist.',
        sector: 'Bau',
      },
      fr: {
        title: 'Site web Loundoun Decks',
        summary: "Site vitrine d'une entreprise de construction spécialisée dans les terrasses.",
        sector: 'Construction',
      },
      it: {
        title: 'Sito web Loundoun Decks',
        summary: "Sito promozionale per un'impresa edile specializzata in terrazze in legno.",
        sector: 'Edilizia',
      },
    },
  },
  {
    slug: 'mastertool',
    image: '/images/cases/mastertool.jpg',
    content: {
      en: {
        title: 'Mastertool E-commerce',
        summary: 'Professional online store for tools and equipment.',
        sector: 'E-commerce',
      },
      de: {
        title: 'Mastertool E-Commerce',
        summary: 'Professioneller Online-Shop für Werkzeuge und Ausrüstung.',
        sector: 'E-Commerce',
      },
      fr: {
        title: 'E-commerce Mastertool',
        summary: "Boutique en ligne professionnelle d'outillage et d'équipement.",
        sector: 'E-commerce',
      },
      it: {
        title: 'E-commerce Mastertool',
        summary: 'Negozio online professionale di utensili e attrezzature.',
        sector: 'E-commerce',
      },
    },
  },
  {
    slug: 'ardevaz-sls',
    image: '/images/cases/ardevaz-sls.jpg',
    content: {
      en: {
        title: 'Ardevaz SLS Website',
        summary: 'Online presence for a language school, with courses and enrolment.',
        sector: 'Education',
      },
      de: {
        title: 'Ardevaz SLS Website',
        summary: 'Webauftritt einer Sprachschule mit Kursangebot und Anmeldung.',
        sector: 'Bildung',
      },
      fr: {
        title: 'Site web Ardevaz SLS',
        summary: "Site d'une école de langues, avec offre de cours et inscription.",
        sector: 'Formation',
      },
      it: {
        title: 'Sito web Ardevaz SLS',
        summary: 'Sito di una scuola di lingue, con offerta dei corsi e iscrizioni.',
        sector: 'Formazione',
      },
    },
  },
  {
    slug: 'didi-app',
    image: '/images/cases/didi-app.jpg',
    content: {
      en: {
        title: 'Didi Mobile App',
        summary: 'Interactive quiz and game mobile application.',
        sector: 'Consumer',
      },
      de: {
        title: 'Didi Mobile App',
        summary: 'Interaktive Quiz- und Spiele-App.',
        sector: 'Endkunden',
      },
      fr: {
        title: 'Application mobile Didi',
        summary: 'Application mobile de quiz et de jeux interactifs.',
        sector: 'Grand public',
      },
      it: {
        title: 'App mobile Didi',
        summary: 'App mobile di quiz e giochi interattivi.',
        sector: 'Consumer',
      },
    },
  },
  {
    slug: 'go-valais',
    image: '/images/cases/go-valais.jpg',
    caseSlug: 'go-valais',
    content: {
      en: {
        title: 'GO-Valais Website',
        summary: 'Digital community hub for expats and professionals in Valais.',
        sector: 'Community',
      },
      de: {
        title: 'GO-Valais Website',
        summary: 'Digitale Community-Plattform für Expats und Fachkräfte im Wallis.',
        sector: 'Community',
      },
      fr: {
        title: 'Site web GO-Valais',
        summary: 'Plateforme communautaire numérique pour expatriés et professionnels en Valais.',
        sector: 'Communauté',
      },
      it: {
        title: 'Sito web GO-Valais',
        summary: "Punto d'incontro digitale per expat e professionisti in Vallese.",
        sector: 'Comunità',
      },
    },
  },
  {
    slug: 'travel-executive',
    image: '/images/cases/travel-executive.jpg',
    content: {
      en: {
        title: 'Travel Executive Website',
        summary: 'Premium portal for curated trips and travel planning.',
        sector: 'Travel',
      },
      de: {
        title: 'Travel Executive Website',
        summary: 'Premium-Portal für ausgewählte Reisen und Reiseplanung.',
        sector: 'Reisen',
      },
      fr: {
        title: 'Site web Travel Executive',
        summary: "Portail haut de gamme de voyages sélectionnés et d'organisation de séjours.",
        sector: 'Voyage',
      },
      it: {
        title: 'Sito web Travel Executive',
        summary: 'Portale premium di viaggi selezionati e pianificazione su misura.',
        sector: 'Viaggi',
      },
    },
  },
  {
    slug: 'catapult-crown',
    image: '/images/cases/catapult-crown.jpg',
    content: {
      en: {
        title: 'Catapult Crown Portal',
        summary: 'Web platform for dental business investment management.',
        sector: 'Healthcare',
      },
      de: {
        title: 'Catapult Crown Portal',
        summary: 'Webplattform zur Verwaltung von Investitionen in Zahnarztpraxen.',
        sector: 'Gesundheitswesen',
      },
      fr: {
        title: 'Portail Catapult Crown',
        summary: 'Plateforme web de gestion des investissements dans des cabinets dentaires.',
        sector: 'Santé',
      },
      it: {
        title: 'Portale Catapult Crown',
        summary: 'Piattaforma web per gestire gli investimenti in studi dentistici.',
        sector: 'Sanità',
      },
    },
  },
  {
    slug: 'tdsbot-iot',
    image: '/images/cases/tdsbot-iot.jpg',
    caseSlug: 'tdsbot-iot',
    content: {
      en: {
        title: 'TDSbot Web & Mobile App',
        summary: 'B2B and B2C portal for water purification device monitoring.',
        sector: 'IoT',
      },
      de: {
        title: 'TDSbot Web- und Mobile-App',
        summary: 'B2B- und B2C-Portal zur Überwachung von Wasseraufbereitungsgeräten.',
        sector: 'IoT',
      },
      fr: {
        title: 'Application web et mobile TDSbot',
        summary: "Portail B2B et B2C de surveillance des appareils de purification d'eau.",
        sector: 'IoT',
      },
      it: {
        title: 'App web e mobile TDSbot',
        summary: "Portale B2B e B2C per il monitoraggio dei depuratori d'acqua.",
        sector: 'IoT',
      },
    },
  },
  {
    slug: 'tpoint',
    image: '/images/cases/tpoint.jpg',
    content: {
      en: {
        title: 'Tpoint Web & Mobile App',
        summary: 'Management solution for sports and fitness facilities.',
        sector: 'Sports',
      },
      de: {
        title: 'Tpoint Web- und Mobile-App',
        summary: 'Verwaltungslösung für Sport- und Fitnessanlagen.',
        sector: 'Sport',
      },
      fr: {
        title: 'Application web et mobile Tpoint',
        summary: 'Solution de gestion pour centres sportifs et salles de fitness.',
        sector: 'Sport',
      },
      it: {
        title: 'App web e mobile Tpoint',
        summary: 'Soluzione gestionale per impianti sportivi e centri fitness.',
        sector: 'Sport',
      },
    },
  },
  {
    slug: 'myastro',
    image: '/images/cases/myastro.jpg',
    content: {
      en: {
        title: 'MyAstro Web Portal',
        summary: 'Content platform blending astrology with personalised insights.',
        sector: 'Consumer',
      },
      de: {
        title: 'MyAstro Webportal',
        summary: 'Content-Plattform, die Astrologie mit persönlichen Einblicken verbindet.',
        sector: 'Endkunden',
      },
      fr: {
        title: 'Portail web MyAstro',
        summary: 'Plateforme de contenus qui associe astrologie et analyses personnalisées.',
        sector: 'Grand public',
      },
      it: {
        title: 'Portale web MyAstro',
        summary: "Piattaforma di contenuti che unisce l'astrologia a letture personalizzate.",
        sector: 'Consumer',
      },
    },
  },
  {
    slug: 'alio-shop',
    image: '/images/cases/alio-shop.jpg',
    content: {
      en: {
        title: 'Alio Online Shop',
        summary: 'B2C marketplace for lifestyle accessories.',
        sector: 'Retail',
      },
      de: {
        title: 'Alio Online-Shop',
        summary: 'B2C-Marktplatz für Lifestyle-Accessoires.',
        sector: 'Detailhandel',
      },
      fr: {
        title: 'Boutique en ligne Alio',
        summary: "Marketplace B2C d'accessoires lifestyle.",
        sector: 'Commerce de détail',
      },
      it: {
        title: 'Negozio online Alio',
        summary: 'Marketplace B2C di accessori lifestyle.',
        sector: 'Retail',
      },
    },
  },
  {
    slug: 'fishing-roi',
    image: '/images/cases/fishing-roi.jpg',
    content: {
      en: {
        title: 'Fishing Roi Online Shop',
        summary: 'Marketplace for fishing gear with educational content.',
        sector: 'Retail',
      },
      de: {
        title: 'Fishing Roi Online-Shop',
        summary: 'Marktplatz für Angelausrüstung mit Ratgeber-Inhalten.',
        sector: 'Detailhandel',
      },
      fr: {
        title: 'Boutique en ligne Fishing Roi',
        summary: 'Marketplace de matériel de pêche avec contenus pédagogiques.',
        sector: 'Commerce de détail',
      },
      it: {
        title: 'Negozio online Fishing Roi',
        summary: 'Marketplace di attrezzatura da pesca con contenuti formativi.',
        sector: 'Retail',
      },
    },
  },
  {
    slug: 'vbavto',
    image: '/images/cases/vbavto.jpg',
    content: {
      en: {
        title: 'Vbavto E-commerce',
        summary: 'Automotive parts marketplace serving B2B and B2C segments.',
        sector: 'Automotive',
      },
      de: {
        title: 'Vbavto E-Commerce',
        summary: 'Marktplatz für Autoteile für B2B- und B2C-Kunden.',
        sector: 'Automobil',
      },
      fr: {
        title: 'E-commerce Vbavto',
        summary: 'Marketplace de pièces automobiles pour les clients B2B et B2C.',
        sector: 'Automobile',
      },
      it: {
        title: 'E-commerce Vbavto',
        summary: 'Marketplace di ricambi auto per clienti B2B e B2C.',
        sector: 'Automotive',
      },
    },
  },
]

const localize = (r: ProjectRecord, locale: string): Project => {
  const { content, ...rest } = r
  return { ...rest, ...pick(content, locale) }
}

export function getProjects(locale: string): Project[] {
  return records.map((r) => localize(r, locale))
}

export function getProjectSectors(locale: string): string[] {
  return Array.from(new Set(getProjects(locale).map((p) => p.sector))).sort((a, b) => a.localeCompare(b, locale))
}
