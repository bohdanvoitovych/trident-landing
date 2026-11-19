import { pick, type Localized } from '@/lib/localized'

/**
 * Projects carried over from the old site's portfolio (27 entries, same order).
 *
 * Only the facts the old site published: title, the two description paragraphs,
 * tags and the screenshot. Nothing here invents challenges, approaches or result
 * metrics for a client's project.
 */
export type ProjectText = {
  title: string
  summary: string
  sector: string
  /** The two paragraphs the old site's portfolio published, word for word. */
  details: string[]
  /** The old site's tags for the project. */
  tags: string[]
}

type ProjectRecord = {
  slug: string
  image: string
  /** Set when a case study tells the story of the same work. */
  caseSlug?: string
  content: Localized<ProjectText>
}

export type Project = Omit<ProjectRecord, 'content'> & ProjectText

const records: ProjectRecord[] = [
  {
    slug: 'zenit-auto-b2b',
    image: '/images/cases/zenit-auto-b2b.jpg',
    content: {
      en: {
        title: 'Zenit Auto B2B Platform',
        summary: 'B2B e-commerce for automotive parts with bulk ordering.',
        sector: 'Automotive',
        details: [
          'A B2B e-commerce platform for automotive parts and related products, built for business customers, bulk ordering and complex pricing rules.',
          'The platform covers product, stock and client management, order processing and delivery.',
        ],
        tags: ['Automotive', 'B2B', 'E-commerce', 'Web'],
      },
      de: {
        title: 'Zenit Auto B2B-Plattform',
        summary: 'B2B-E-Commerce für Autoteile mit Mengenbestellungen.',
        sector: 'Automobil',
        details: [
          'B2B-E-Commerce-Plattform für Autoteile und verwandte Produkte, die für Geschäftskunden, Großbestellungen und komplexe Preisregeln entwickelt wurde.',
          'Die Plattform integriert die Verwaltung von Produkten, Beständen und Kunden, die Bearbeitung von Bestellungen und die Lieferung.',
        ],
        tags: ['Automobil', 'B2B', 'E-Commerce', 'Web'],
      },
      fr: {
        title: 'Plateforme B2B Zenit Auto',
        summary: 'E-commerce B2B de pièces automobiles avec commandes en gros.',
        sector: 'Automobile',
        details: [
          'Plate-forme de commerce électronique B2B pour les pièces détachées automobiles et les produits connexes, conçue pour prendre en charge les clients professionnels, les commandes groupées et les règles de tarification complexes.',
          'La plateforme intègre la gestion des produits, des stocks et des clients, le traitement des commandes et la livraison.',
        ],
        tags: ['Automobile', 'B2B', 'E-commerce', 'Web'],
      },
      it: {
        title: 'Piattaforma B2B Zenit Auto',
        summary: "E-commerce B2B di ricambi auto con ordini all'ingrosso.",
        sector: 'Automotive',
        details: [
          "Piattaforma e-commerce B2B per ricambi auto e prodotti correlati, pensata per clienti business, ordini all'ingrosso e regole di prezzo complesse.",
          'La piattaforma integra la gestione dei prodotti, delle scorte e dei clienti, l’elaborazione degli ordini e la consegna.',
        ],
        tags: ['Automobilistico', 'B2B', 'E-commerce', 'Web'],
      },
    },
  },
  {
    slug: 'aida-medicine',
    image: '/images/cases/aida-medicine.jpg',
    caseSlug: 'post-acute-clinic-network',
    content: {
      en: {
        title: 'Aida Medicine Platform',
        summary: 'Medical platform for clinics: patient records, documentation and consultations in one place.',
        sector: 'Healthcare',
        details: [
          'A medical management platform built for clinics and healthcare providers.',
          'It centralises patient records, medical documentation, staff management and consultation workflows in one secure environment.',
        ],
        tags: ['Healthcare', 'Admin panel', 'Mobile apps'],
      },
      de: {
        title: 'Aida Medizin-Plattform',
        summary: 'Medizinische Plattform für Kliniken: Patientenakten, Dokumentation und Konsultationen an einem Ort.',
        sector: 'Gesundheitswesen',
        details: [
          'Medizinische Verwaltungsplattform für Kliniken und Gesundheitsdienstleister.',
          'Das System zentralisiert Patientenakten, medizinische Dokumentation, Personalverwaltung und Beratungsabläufe in einer sicheren Umgebung.',
        ],
        tags: ['Gesundheit', 'Admin-Panel', 'Mobile Apps'],
      },
      fr: {
        title: 'Plateforme médicale Aida',
        summary: 'Plateforme médicale pour cliniques : dossiers patients, documentation et consultations au même endroit.',
        sector: 'Santé',
        details: [
          'Plateforme de gestion médicale conçue pour les cliniques et les prestataires de soins de santé.',
          'Le système centralise les dossiers des patients, la documentation médicale, la gestion du personnel et les flux de travail de consultation dans un environnement sécurisé.',
        ],
        tags: ['Santé', 'Panneau d\'administration', 'Applications mobiles'],
      },
      it: {
        title: 'Piattaforma medica Aida',
        summary: 'Piattaforma medica per cliniche: cartelle dei pazienti, documentazione e visite in un unico posto.',
        sector: 'Sanità',
        details: [
          'Piattaforma di gestione medica realizzata per cliniche e fornitori di servizi sanitari.',
          'Il sistema centralizza le cartelle cliniche dei pazienti, la documentazione medica, la gestione del personale e i flussi di lavoro di consultazione in un unico ambiente sicuro.',
        ],
        tags: ['Sanità', 'Pannello di amministrazione', 'Applicazioni mobili'],
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
        details: [
          'An e-commerce platform for selling tires and rims in Canada.',
          'The platform supports product catalogue management, search and filtering by vehicle specifications and models, and a simple checkout and delivery process.',
        ],
        tags: ['Automotive', 'B2C', 'E-commerce', 'Web'],
      },
      de: {
        title: 'Online-Shop für Reifen',
        summary: 'E-Commerce-Plattform für den Verkauf von Reifen und Felgen in Kanada.',
        sector: 'E-Commerce',
        details: [
          'E-Commerce-Plattform für den Verkauf von Reifen und Felgen in Kanada.',
          'Die Lösung unterstützt die Verwaltung des Produktkatalogs, die Suche und Filterung nach Fahrzeugspezifikationen und -modellen sowie einen optimierten Kauf- und Lieferprozess.',
        ],
        tags: ['Automobil', 'B2C', 'E-Commerce', 'Web'],
      },
      fr: {
        title: 'Boutique en ligne de pneus',
        summary: "Plateforme d'e-commerce pour la vente de pneus et de jantes au Canada.",
        sector: 'E-commerce',
        details: [
          'Plate-forme de commerce électronique pour la vente de pneus et de jantes au Canada.',
          'La solution prend en charge la gestion du catalogue de produits, la recherche et le filtrage par spécifications et modèles de véhicules, ainsi qu’un processus simplifié de paiement et de livraison.',
        ],
        tags: ['Automobile', 'B2C', 'E-commerce', 'Web'],
      },
      it: {
        title: 'Negozio online di pneumatici',
        summary: 'Piattaforma e-commerce per la vendita di pneumatici e cerchi in Canada.',
        sector: 'E-commerce',
        details: [
          'Piattaforma e-commerce per la vendita di pneumatici e cerchi in Canada.',
          'La soluzione supporta la gestione del catalogo prodotti, la ricerca e il filtraggio per specifiche e modelli di veicoli e un processo di acquisto e consegna semplificato.',
        ],
        tags: ['Automobilistico', 'B2C', 'E-commerce', 'Web'],
      },
    },
  },
  {
    slug: 'affiliation-platform',
    image: '/images/cases/affiliation-platform.jpg',
    content: {
      en: {
        title: 'Affiliation Platform',
        summary: 'Web and mobile system for managing affiliate programmes.',
        sector: 'MarTech',
        details: [
          'A web and mobile platform for managing affiliate programmes end to end.',
          'The system provides a centralised admin panel for controlling partners, tracking performance, managing budgets, and generating detailed reports in real time.',
        ],
        tags: ['Marketing', 'Admin panel', 'Mobile apps'],
      },
      de: {
        title: 'Affiliate-Plattform',
        summary: 'Web- und Mobile-System zur Verwaltung von Affiliate-Programmen.',
        sector: 'MarTech',
        details: [
          'Web-/Mobilplattform für die Verwaltung von Mitgliedschaftsprogrammen von Anfang bis Ende.',
          'Das System bietet eine zentrale Verwaltungsoberfläche für die Kontrolle der Partner, die Verfolgung der Leistung, die Verwaltung von Budgets und die Erstellung detaillierter Berichte in Echtzeit.',
        ],
        tags: ['Marketing', 'Verwaltungsbereich', 'Mobile Apps'],
      },
      fr: {
        title: "Plateforme d'affiliation",
        summary: "Système web et mobile pour gérer des programmes d'affiliation.",
        sector: 'MarTech',
        details: [
          'Plateforme web/mobile pour la gestion des programmes d’affiliation de bout en bout.',
          'Le système offre un panneau d’administration centralisé permettant de contrôler les partenaires, de suivre les performances, de gérer les budgets et de générer des rapports détaillés en temps réel.',
        ],
        tags: ['Marketing', 'Panneau d\'administration', 'Applications mobiles'],
      },
      it: {
        title: 'Piattaforma di affiliazione',
        summary: 'Sistema web e mobile per gestire programmi di affiliazione.',
        sector: 'MarTech',
        details: [
          'Piattaforma web/mobile per la gestione dei programmi di affiliazione end-to-end.',
          'Il sistema offre un pannello di amministrazione centralizzato per controllare i partner, monitorare le prestazioni, gestire i budget e generare report dettagliati in tempo reale.',
        ],
        tags: ['Marketing', 'Pannello di amministrazione', 'Applicazioni mobili'],
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
        details: [
          'A scalable B2B e-commerce portal for wholesale automotive parts.',
          'The portal improves the customer experience with advanced search, catalogue sorting, order and delivery flows, and pricing based on client tiers.',
        ],
        tags: ['Automotive', 'B2B', 'E-commerce', 'Web'],
      },
      de: {
        title: 'Vesna Auto B2B-Shop',
        summary: 'Skalierbares B2B-Portal für den Autoteile-Grosshandel.',
        sector: 'Automobil',
        details: [
          'Skalierbares B2B-E-Commerce-Portal für den Großhandel mit Autoteilen.',
          'Die Lösung verbessert das Kundenerlebnis durch eine erweiterte Suche, Katalogsortierung, Bestell- und Lieferabläufe und eine integrierte Preislogik, die auf Kundenebenen basiert.',
        ],
        tags: ['Automobil', 'B2B', 'E-Commerce', 'Web'],
      },
      fr: {
        title: 'Boutique B2B Vesna Auto',
        summary: 'Portail B2B évolutif pour la vente en gros de pièces automobiles.',
        sector: 'Automobile',
        details: [
          'Portail de commerce électronique B2B évolutif pour la vente en gros de pièces automobiles.',
          'La solution améliore l’expérience du client grâce à la recherche avancée, au tri du catalogue, aux flux de commande et de livraison, et à la logique de tarification intégrée basée sur les catégories de clients.',
        ],
        tags: ['Automobile', 'B2B', 'E-commerce', 'Web'],
      },
      it: {
        title: 'Shop B2B Vesna Auto',
        summary: "Portale B2B scalabile per la vendita all'ingrosso di ricambi auto.",
        sector: 'Automotive',
        details: [
          'Portale e-commerce B2B scalabile per la vendita all’ingrosso di ricambi per auto.',
          'La soluzione migliora l’esperienza del cliente grazie alla ricerca avanzata, all’ordinamento del catalogo, ai flussi d’ordine e di consegna e alla logica di prezzo integrata basata sui livelli dei clienti.',
        ],
        tags: ['Automobilistico', 'B2B', 'E-commerce', 'Web'],
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
        details: [
          'A mobile app designed for a finger-worn scanner, a cheaper alternative to traditional industrial data collection terminals.',
          'The app runs real-time warehouse operations, inventory and order processing.',
        ],
        tags: ['Automotive', 'WMS', 'Mobile apps'],
      },
      de: {
        title: 'Status-M WMS-App',
        summary: 'Mobile App für die Lagerverwaltung mit Scanner-Anbindung.',
        sector: 'Logistik',
        details: [
          'Mobile App, die mit einem am Finger befestigten Scanner funktioniert und eine kostengünstige Alternative zu herkömmlichen industriellen Datenerfassungsterminals darstellt.',
          'Die App unterstützt den Lagerbetrieb, den Bestand und die Auftragsabwicklung in Echtzeit.',
        ],
        tags: ['Automobil', 'WMS', 'Mobile Apps'],
      },
      fr: {
        title: 'Application WMS Status-M',
        summary: "Application mobile de gestion d'entrepôt, connectée aux scanners.",
        sector: 'Logistique',
        details: [
          'Application mobile conçue pour fonctionner avec un scanner attaché au doigt, servant d’alternative rentable aux terminaux traditionnels de collecte de données industrielles.',
          'L’application prend en charge les opérations d’entreposage, l’inventaire et le traitement des commandes en temps réel.',
        ],
        tags: ['Automobile', 'WMS', 'Applications mobiles'],
      },
      it: {
        title: 'App WMS Status-M',
        summary: 'App mobile per la gestione del magazzino, integrata con gli scanner.',
        sector: 'Logistica',
        details: [
          'Un’applicazione mobile progettata per funzionare con uno scanner collegato a un dito, che rappresenta un’alternativa economica ai tradizionali terminali di raccolta dati industriali.',
          'L’app supporta le operazioni di magazzino in tempo reale, l’inventario e l’elaborazione degli ordini.',
        ],
        tags: ['Automobilistico', 'WMS', 'Applicazioni mobili'],
      },
    },
  },
  {
    slug: '8move-driver',
    image: '/images/cases/8move-driver.jpg',
    content: {
      en: {
        title: '8Move Driver App',
        summary: 'Driver app for delivery operations and route management.',
        sector: 'Logistics',
        details: [
          'The app helps drivers with delivery operations. It provides route information, task management, and real-time updates during delivery processes.',
          'Built to be reliable and easy to use, the app supports drivers in daily work and helps make deliveries faster and more accurate, so customers are happier.',
        ],
        tags: ['Logistics', 'B2B', 'E-commerce', 'Mobile apps'],
      },
      de: {
        title: '8Move Driver App',
        summary: 'App für den Lieferbetrieb und die Routenplanung.',
        sector: 'Logistik',
        details: [
          'Anwendung für Fahrer zur Unterstützung von Liefervorgängen. Die App bietet Routeninformationen, Aufgabenverwaltung und Echtzeit-Updates während des Liefervorgangs.',
          'Die auf Zuverlässigkeit und Benutzerfreundlichkeit ausgelegte App unterstützt die Fahrer bei ihren täglichen Aufgaben und sorgt gleichzeitig für schnellere und präzisere Lieferungen und höhere Kundenzufriedenheit.',
        ],
        tags: ['Logistik', 'B2B', 'E-Commerce', 'Mobile Apps'],
      },
      fr: {
        title: '8Move Driver App',
        summary: 'Application pour les opérations de livraison et la gestion des tournées.',
        sector: 'Logistique',
        details: [
          'Application destinée aux chauffeurs pour soutenir les opérations de livraison. L’application fournit des informations sur les itinéraires, la gestion des tâches et des mises à jour en temps réel pendant les processus de livraison.',
          'Conçue pour être fiable et facile à utiliser, l’application aide les conducteurs dans leurs opérations quotidiennes tout en contribuant à assurer des livraisons plus rapides et plus précises ainsi qu’une plus grande satisfaction des clients.',
        ],
        tags: ['Logistique', 'B2B', 'E-commerce', 'Applications mobiles'],
      },
      it: {
        title: '8Move Driver App',
        summary: 'App a supporto delle consegne e della gestione dei percorsi.',
        sector: 'Logistica',
        details: [
          'Applicazione per autisti a supporto delle operazioni di consegna. L’applicazione fornisce informazioni sul percorso, gestione delle attività e aggiornamenti in tempo reale durante i processi di consegna.',
          'Progettata per garantire affidabilità e facilità d’uso, l’app supporta gli autisti nelle operazioni quotidiane e contribuisce a garantire consegne più rapide e accurate e una maggiore soddisfazione dei clienti.',
        ],
        tags: ['Logistica', 'B2B', 'E-commerce', 'Applicazioni mobili'],
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
        details: [
          'A central platform for managing products, customers, orders and fleet operations. It shows every operational workflow and supports decisions with structured data and reports.',
          'The platform is the control centre for the whole system.',
        ],
        tags: ['Wholesale', 'B2B', 'B2C', 'E-commerce', 'Admin panel', 'Web'],
      },
      de: {
        title: '8Move Admin-Plattform',
        summary: 'Zentrale Steuerung von Produkten, Bestellungen und Flotte.',
        sector: 'Logistik',
        details: [
          'Zentralisierte Plattform für die Verwaltung von Produkten, Kunden, Aufträgen und Flottenoperationen. Das System bietet vollständige Transparenz der betrieblichen Abläufe und unterstützt die Entscheidungsfindung durch strukturierte Daten und Berichte.',
          'Die Plattform fungiert als zentrales Kontrollzentrum für das gesamte Ökosystem.',
        ],
        tags: ['Großhandel', 'B2B', 'B2C', 'E-Commerce', 'Verwaltungsbereich', 'Web'],
      },
      fr: {
        title: "Plateforme d'administration 8Move",
        summary: 'Pilotage centralisé des produits, des commandes et de la flotte.',
        sector: 'Logistique',
        details: [
          'Plate-forme centralisée pour la gestion des produits, des clients, des commandes et des opérations de la flotte. Le système offre une visibilité totale des flux de travail opérationnels et facilite la prise de décision grâce à des données et des rapports structurés.',
          'La plateforme joue le rôle de centre de contrôle pour l’ensemble de l’écosystème.',
        ],
        tags: ['Vente en gros', 'B2B', 'B2C', 'E-commerce', 'Panneau d\'administration', 'Web'],
      },
      it: {
        title: 'Piattaforma di amministrazione 8Move',
        summary: 'Controllo centralizzato di prodotti, ordini e flotta.',
        sector: 'Logistica',
        details: [
          'Piattaforma centralizzata per la gestione di prodotti, clienti, ordini e operazioni della flotta. Il sistema offre una visibilità completa dei flussi di lavoro operativi e supporta il processo decisionale grazie a dati e report strutturati.',
          'La piattaforma funge da centro di controllo per l’intero ecosistema.',
        ],
        tags: ['Vendite all\'ingrosso', 'B2B', 'B2C', 'E-commerce', 'Pannello di amministrazione', 'Web'],
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
        details: [
          'A mobile app for B2B and B2C clients to place orders, manage deliveries, and complete online payments.',
          'The app makes ordering simple and connects to the admin and logistics systems, so clients can track every order and rely on delivery.',
        ],
        tags: ['Wholesale', 'B2B', 'B2C', 'E-commerce', 'Mobile apps'],
      },
      de: {
        title: '8Move Client App',
        summary: 'Mobile App für B2B- und B2C-Bestellungen und die Lieferverwaltung.',
        sector: 'Logistik',
        details: [
          'Mobile Anwendung für B2B/B2C-Kunden, um Bestellungen aufzugeben, Lieferungen zu verwalten und Online-Zahlungen durchzuführen.',
          'Die App bietet ein vereinfachtes Bestellverfahren und ist gleichzeitig mit Verwaltungs- und Logistiksystemen integriert, um eine transparente Auftragsverfolgung, eine zuverlässige Lieferung und ein reibungsloses Kundenerlebnis zu gewährleisten.',
        ],
        tags: ['Großhandel', 'B2B', 'B2C', 'E-Commerce', 'Mobile Apps'],
      },
      fr: {
        title: '8Move Client App',
        summary: 'Application mobile pour commander en B2B et B2C et suivre les livraisons.',
        sector: 'Logistique',
        details: [
          'Application mobile permettant aux clients B2B/B2C de passer des commandes, de gérer les livraisons et d’effectuer des paiements en ligne.',
          'L’application offre une expérience de commande simplifiée tout en s’intégrant aux systèmes administratifs et logistiques, garantissant un suivi transparent des commandes, une livraison fiable et une expérience client harmonieuse.',
        ],
        tags: ['Vente en gros', 'B2B', 'B2C', 'E-commerce', 'Applications mobiles'],
      },
      it: {
        title: '8Move Client App',
        summary: 'App mobile per ordini B2B e B2C e gestione delle consegne.',
        sector: 'Logistica',
        details: [
          'Applicazione mobile per clienti B2B/B2C per effettuare ordini, gestire le consegne e completare i pagamenti online.',
          'L’app offre un’esperienza d’ordine semplificata e si integra con i sistemi amministrativi e logistici, garantendo una tracciabilità trasparente dell’ordine, una consegna affidabile e un’esperienza cliente senza problemi.',
        ],
        tags: ['Vendite all\'ingrosso', 'B2B', 'B2C', 'E-commerce', 'Applicazioni mobili'],
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
        details: [
          'A B2B and B2C online fashion store for boutique apparel and accessories.',
          'The website combines visual storytelling with clean navigation and promotional spotlights. The platform supports multi-currency pricing, size/variant selection, wishlists and social sharing of looks.',
        ],
        tags: ['Fashion & luxury', 'B2B', 'B2C', 'E-commerce', 'Web'],
      },
      de: {
        title: 'Samange E-Commerce',
        summary: 'B2B- und B2C-Modeshop für Boutique-Kleidung und Accessoires.',
        sector: 'Detailhandel',
        details: [
          'B2B- und B2C-Online-Modegeschäft für Boutique-Kleidung und Accessoires.',
          'Die Website kombiniert visuelles Storytelling mit einer klaren Navigation und Werbespots. Die Plattform unterstützt die Preisgestaltung in mehreren Währungen, die Auswahl von Größen/Varianten, die Funktion der Wunschliste und die Integration sozialer Netzwerke zum Teilen von Looks.',
        ],
        tags: ['Mode und Luxus', 'B2B', 'B2C', 'E-Commerce', 'Web'],
      },
      fr: {
        title: 'E-commerce Samange',
        summary: 'Boutique de mode B2B et B2C pour vêtements et accessoires de créateurs.',
        sector: 'Commerce de détail',
        details: [
          'Boutique de mode en ligne B2B et B2C créée pour les vêtements et accessoires de niveau boutique.',
          'Le site web combine une narration visuelle avec une navigation claire et des spots promotionnels. La plateforme prend en charge la tarification multidevises, la sélection des tailles/variantes, la fonctionnalité de liste de souhaits et l’intégration sociale pour le partage des looks.',
        ],
        tags: ['Mode et Luxe', 'B2B', 'B2C', 'E-commerce', 'Web'],
      },
      it: {
        title: 'E-commerce Samange',
        summary: 'Negozio di moda B2B e B2C per abbigliamento e accessori di boutique.',
        sector: 'Retail',
        details: [
          'Negozio di moda online B2B e B2C creato per abbigliamento e accessori di livello boutique.',
          'Il sito web combina una narrazione visiva con una navigazione pulita e spot promozionali. La piattaforma supporta prezzi multivaluta, selezione di taglie/varianti, funzionalità wishlist e integrazione social per la condivisione dei look.',
        ],
        tags: ['Moda e Lusso', 'B2B', 'B2C', 'E-commerce', 'Web'],
      },
    },
  },
  {
    slug: 'dentyval',
    image: '/images/cases/dentyval.jpg',
    content: {
      en: {
        title: 'Dentyval Web App',
        summary: 'Web questionnaire for valuing dental practices.',
        sector: 'Healthcare',
        details: [
          'A web questionnaire for valuing dental practices, based on proprietary algorithms.',
          'The platform gives full control over the questionnaire logic, answer sets and results dashboard, so respondents and evaluation data can be managed in real time.',
        ],
        tags: ['Healthcare', 'Admin panel', 'Web'],
      },
      de: {
        title: 'Dentyval Web-App',
        summary: 'Online-Fragebogen zur Bewertung von Zahnarztpraxen.',
        sector: 'Gesundheitswesen',
        details: [
          'Web-Fragebogen für die Bewertung von Dentalunternehmen auf der Grundlage spezieller Algorithmen.',
          'Die Plattform bietet die vollständige Kontrolle über die Fragebogenlogik, die Antwortsätze und das Ergebnis-Dashboard und ermöglicht so die Verwaltung von Befragten und Auswertungsdaten in Echtzeit.',
        ],
        tags: ['Gesundheit', 'Admin-Panel', 'Web'],
      },
      fr: {
        title: 'Application web Dentyval',
        summary: 'Questionnaire en ligne pour évaluer un cabinet dentaire.',
        sector: 'Santé',
        details: [
          'Questionnaire web pour l’évaluation des entreprises dentaires basé sur des algorithmes spéciaux.',
          'La plateforme offre un contrôle complet sur la logique du questionnaire, les ensembles de réponses et le tableau de bord des résultats, ce qui permet une gestion en temps réel des répondants et des données d’évaluation.',
        ],
        tags: ['Santé', 'Panneau d\'administration', 'Web'],
      },
      it: {
        title: 'Web app Dentyval',
        summary: 'Questionario online per la valutazione di studi dentistici.',
        sector: 'Sanità',
        details: [
          'Questionario web per la valutazione dell’attività odontoiatrica basato su algoritmi speciali.',
          'La piattaforma offre un controllo completo sulla logica del questionario, sui set di risposte e sul cruscotto dei risultati, consentendo la gestione in tempo reale dei rispondenti e dei dati di valutazione.',
        ],
        tags: ['Sanità', 'Pannello di amministrazione', 'Web'],
      },
    },
  },
  {
    slug: 'lapochette',
    image: '/images/cases/lapochette.jpg',
    content: {
      en: {
        title: 'Lapochette Online Shop',
        summary: 'Online store for hotel and restaurant accessories in Switzerland.',
        sector: 'Hospitality',
        details: [
          'An online store for hotel and restaurant accessories in Switzerland.',
          'The website presents categories and products. Customers can order ready-made accessories, request a quote, or commission the design and production of new samples. Guests and registered users can both order.',
        ],
        tags: ['Accessories', 'B2B', 'B2C', 'E-commerce', 'Web'],
      },
      de: {
        title: 'Lapochette Online-Shop',
        summary: 'Online-Shop für Hotel- und Restaurantzubehör in der Schweiz.',
        sector: 'HoReCa',
        details: [
          'Online Shop für Zubehör für Hotels und Restaurants in der Schweiz.',
          'Die Website präsentiert Kategorien und Produkte mit der Möglichkeit, fertige Accessoires zu bestellen, einen Preis anzufordern und das Design und die Produktion neuer Muster in Auftrag zu geben. Die Plattform unterstützt eine vereinfachte Bestellung, die Arbeit mit Gästen und registrierten Benutzern.',
        ],
        tags: ['Accessoires', 'B2B', 'B2C', 'E-Commerce', 'Web'],
      },
      fr: {
        title: 'Boutique en ligne Lapochette',
        summary: "Boutique en ligne d'accessoires pour l'hôtellerie et la restauration en Suisse.",
        sector: 'HoReCa',
        details: [
          'Boutique en ligne d’accessoires pour hôtels et restaurants en Suisse.',
          'Le site web présente les catégories et les produits, avec la possibilité de commander des accessoires prêts à l’emploi, de demander un prix et de commander la conception et la production de nouveaux échantillons. La plateforme permet de simplifier les commandes, de travailler avec des invités et des utilisateurs enregistrés.',
        ],
        tags: ['Accessoires', 'B2B', 'B2C', 'E-commerce', 'Web'],
      },
      it: {
        title: 'Negozio online Lapochette',
        summary: 'Negozio online di accessori per hotel e ristoranti in Svizzera.',
        sector: 'HoReCa',
        details: [
          'Negozio online di accessori per hotel e ristoranti in Svizzera.',
          'Il sito web presenta categorie e prodotti con la possibilità di ordinare accessori già pronti, richiedere un prezzo e ordinare la progettazione e la produzione di nuovi campioni. La piattaforma supporta la semplificazione degli ordini, il lavoro con gli ospiti e gli utenti registrati.',
        ],
        tags: ['Accessori', 'B2B', 'B2C', 'E-commerce', 'Web'],
      },
    },
  },
  {
    slug: 'kleap-ai-builder',
    image: '/images/cases/kleap-ai-builder.jpg',
    content: {
      en: {
        title: 'Kleap Website Builder',
        summary: 'AI-enhanced tool for creating websites and landing pages.',
        sector: 'SaaS',
        details: [
          'An AI-enhanced website creation and management tool for users who want simplicity without sacrificing power.',
          'It uses generative content models and pre-built components to help users build landing pages, service sites, and small business portals in minutes.',
        ],
        tags: ['AI', 'SaaS', 'Web'],
      },
      de: {
        title: 'Kleap Website-Builder',
        summary: 'KI-gestütztes Tool zum Erstellen von Websites und Landingpages.',
        sector: 'SaaS',
        details: [
          'KI-gestütztes Tool zur Erstellung und Verwaltung von Websites für Benutzer, die Einfachheit wünschen, ohne auf Leistung verzichten zu müssen.',
          'Die Lösung nutzt generative Inhaltsmodelle und vorgefertigte Komponenten, um Landing Pages, Service-Websites und Portale für kleine Unternehmen in wenigen Minuten zu erstellen.',
        ],
        tags: ['AI', 'SaaS', 'Web'],
      },
      fr: {
        title: 'Créateur de sites Kleap',
        summary: "Outil assisté par l'IA pour créer des sites web et des landing pages.",
        sector: 'SaaS',
        details: [
          'Outil de création et de gestion de sites Web amélioré par l’IA, conçu pour les utilisateurs qui recherchent la simplicité sans sacrifier la puissance.',
          'La solution s’appuie sur des modèles de contenu génératifs et des composants prédéfinis pour aider les utilisateurs à créer des pages d’atterrissage, des sites de services et des portails de petites entreprises en quelques minutes.',
        ],
        tags: ['AI', 'SaaS', 'Web'],
      },
      it: {
        title: 'Website builder Kleap',
        summary: "Strumento potenziato dall'IA per creare siti web e landing page.",
        sector: 'SaaS',
        details: [
          'Strumento di creazione e gestione di siti web potenziato dall’intelligenza artificiale, progettato per gli utenti che desiderano la semplicità senza rinunciare alla potenza.',
          'La soluzione sfrutta modelli di contenuto generativi e componenti precostituiti per aiutare gli utenti a creare landing page, siti di servizi e portali di piccole imprese in pochi minuti.',
        ],
        tags: ['AI', 'SaaS', 'Web'],
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
        details: [
          'A B2B and B2C e-commerce platform for luxury watches, jewellery and gift products.',
          'The project combines elegant design with solid catalogue management and clear navigation, so customers can browse and buy high-value items with confidence.',
        ],
        tags: ['Fashion & luxury', 'B2B', 'B2C', 'E-commerce', 'Web'],
      },
      de: {
        title: 'Flashhub Online-Shop',
        summary: 'B2B- und B2C-Plattform für Luxusuhren und Schmuck.',
        sector: 'Detailhandel',
        details: [
          'B2B- und B2C-E-Commerce-Plattform für Luxusuhren, Schmuck und Geschenkartikel.',
          'Project kombiniert ein elegantes Design mit einer robusten Katalogverwaltung und einer intuitiven Navigation, so dass die Kunden vertrauensvoll hochwertige Artikel durchsuchen und kaufen können.',
        ],
        tags: ['Mode und Luxus', 'B2B', 'B2C', 'E-Commerce', 'Web'],
      },
      fr: {
        title: 'Boutique en ligne Flashhub',
        summary: 'Plateforme B2B et B2C de montres de luxe et de bijoux.',
        sector: 'Commerce de détail',
        details: [
          'Plate-forme de commerce électronique B2B et B2C conçue pour les montres de luxe, les bijoux et les cadeaux.',
          'Le projet associe un design élégant à une gestion de catalogue robuste et à une navigation intuitive, permettant aux clients de parcourir et d’acheter des articles de grande valeur en toute confiance.',
        ],
        tags: ['Mode et Luxe', 'B2B', 'B2C', 'E-commerce', 'Web'],
      },
      it: {
        title: 'Negozio online Flashhub',
        summary: 'Piattaforma B2B e B2C per orologi di lusso e gioielli.',
        sector: 'Retail',
        details: [
          'Piattaforma di e-commerce B2B e B2C progettata per orologi di lusso, gioielli e prodotti da regalo.',
          'Il progetto combina un design elegante con una solida gestione del catalogo e una navigazione intuitiva, consentendo ai clienti di sfogliare e acquistare articoli di alto valore in tutta tranquillità.',
        ],
        tags: ['Moda e Lusso', 'B2B', 'B2C', 'E-commerce', 'Web'],
      },
    },
  },
  {
    slug: 'loundoun-decks',
    image: '/images/cases/loundoun-decks.jpg',
    content: {
      en: {
        title: 'Loudoun Decks Website',
        summary: 'Promotional site for a construction company specialising in decks.',
        sector: 'Construction',
        details: [
          'A promotional website for a US construction company specialising in decks and outdoor structures.',
          'The site focuses on clear presentation of services, completed projects, and trust-building elements for local customers.',
        ],
        tags: ['Construction', 'Websites'],
      },
      de: {
        title: 'Loudoun Decks Website',
        summary: 'Werbewebsite für ein Bauunternehmen, das auf Terrassen spezialisiert ist.',
        sector: 'Bau',
        details: [
          'Promo-Website eines Bauunternehmens, das sich auf Terrassen und Außenanlagen in den USA spezialisiert hat.',
          'Die Website konzentriert sich auf eine klare Präsentation der Dienstleistungen, der abgeschlossenen Projekte und der vertrauensbildenden Elemente für lokale Kunden.',
        ],
        tags: ['Bauwesen', 'Webseiten'],
      },
      fr: {
        title: 'Site web Loudoun Decks',
        summary: "Site vitrine d'une entreprise de construction spécialisée dans les terrasses.",
        sector: 'Construction',
        details: [
          'Site promotionnel d’une entreprise de construction spécialisée dans les terrasses et les structures extérieures aux États-Unis.',
          'Le site met l’accent sur une présentation claire des services, des projets réalisés et des éléments de confiance pour les clients locaux.',
        ],
        tags: ['La construction', 'Sites web'],
      },
      it: {
        title: 'Sito web Loudoun Decks',
        summary: "Sito promozionale per un'impresa edile specializzata in terrazze in legno.",
        sector: 'Edilizia',
        details: [
          'Sito promozionale di un’impresa di costruzioni specializzata in terrazze e strutture per esterni negli Stati Uniti.',
          'Il sito si concentra sulla presentazione chiara dei servizi, dei progetti completati e degli elementi che creano fiducia nei clienti locali.',
        ],
        tags: ['Costruzione', 'Siti web'],
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
        details: [
          'A professional online store for tools and equipment, built for both retail and trade customers.',
          'The website offers detailed product specifications, compatibility filters, secure checkout and warranty information. Built to be reliable and to scale, it is a digital showroom for tool suppliers.',
        ],
        tags: ['DIY & tools', 'B2B', 'B2C', 'E-commerce', 'Web'],
      },
      de: {
        title: 'Mastertool E-Commerce',
        summary: 'Professioneller Online-Shop für Werkzeuge und Ausrüstung.',
        sector: 'E-Commerce',
        details: [
          'Professioneller Online-Shop für Werkzeuge und Ausrüstung, der sich sowohl an Einzelhändler als auch an gewerbliche Kunden richtet.',
          'Die Website bietet detaillierte Produktspezifikationen, Kompatibilitätsfilter, eine sichere Kaufabwicklung und Informationsmodule zur Garantie. Sie wurde für Robustheit und Skalierbarkeit entwickelt und dient als zuverlässiger digitaler Showroom für Werkzeuglieferanten.',
        ],
        tags: ['Heimwerken und Werkzeuge', 'B2B', 'B2C', 'E-Commerce', 'Web'],
      },
      fr: {
        title: 'E-commerce Mastertool',
        summary: "Boutique en ligne professionnelle d'outillage et d'équipement.",
        sector: 'E-commerce',
        details: [
          'Magasin professionnel en ligne d’outils et d’équipements, conçu pour les particuliers et les professionnels.',
          'Le site web fournit des spécifications détaillées sur les produits, des filtres de compatibilité, un système de paiement sécurisé et des modules d’information sur la garantie. Conçu pour être robuste et évolutif, il sert de salle d’exposition numérique fiable pour les fournisseurs d’outils.',
        ],
        tags: ['Bricolage et Outils', 'B2B', 'B2C', 'E-commerce', 'Web'],
      },
      it: {
        title: 'E-commerce Mastertool',
        summary: 'Negozio online professionale di utensili e attrezzature.',
        sector: 'E-commerce',
        details: [
          'Negozio online professionale di utensili e attrezzature, dedicato sia ai clienti al dettaglio che a quelli commerciali.',
          'Il sito web fornisce specifiche dettagliate dei prodotti, filtri di compatibilità, moduli di acquisto sicuri e informazioni sulla garanzia. Costruito per essere robusto e scalabile, funge da affidabile showroom digitale per i fornitori di utensili.',
        ],
        tags: ['Fai da te e Attrezzi', 'B2B', 'B2C', 'E-commerce', 'Web'],
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
        details: [
          'A complete online presence for a language school in Switzerland, with course catalogues, enrolment forms, schedules, and faculty profiles.',
          'The site improves user engagement with clear calls to action, interactive elements, and easy access to learning resources.',
        ],
        tags: ['Education', 'Websites'],
      },
      de: {
        title: 'Ardevaz SLS Website',
        summary: 'Webauftritt einer Sprachschule mit Kursangebot und Anmeldung.',
        sector: 'Bildung',
        details: [
          'Umfassende Online-Präsenz einer Sprachschule in der Schweiz mit Kurskatalogen, Einschreibeformularen, Stundenplänen und Profilen der Lehrkräfte.',
          'Die Website verbessert das Engagement der Benutzer durch klare Handlungsaufforderungen, interaktive Elemente und einen einfachen Zugang zu Lernressourcen.',
        ],
        tags: ['Bildung', 'Webseiten'],
      },
      fr: {
        title: 'Site web Ardevaz SLS',
        summary: "Site d'une école de langues, avec offre de cours et inscription.",
        sector: 'Formation',
        details: [
          'Présence en ligne complète pour une école de langues en Suisse qui comprend des catalogues de cours, des formulaires d’inscription, des horaires et des profils de professeurs.',
          'Le site améliore l’engagement des utilisateurs grâce à des appels à l’action clairs, des éléments interactifs et un accès facile aux ressources d’apprentissage.',
        ],
        tags: ['Éducation', 'Sites web'],
      },
      it: {
        title: 'Sito web Ardevaz SLS',
        summary: 'Sito di una scuola di lingue, con offerta dei corsi e iscrizioni.',
        sector: 'Formazione',
        details: [
          'Una presenza online completa per una scuola di lingue in Svizzera che include cataloghi dei corsi, moduli di iscrizione, orari e profili dei docenti.',
          'Il sito migliora il coinvolgimento degli utenti grazie a chiare chiamate all’azione, elementi interattivi e un facile accesso alle risorse didattiche.',
        ],
        tags: ['Istruzione', 'Siti web'],
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
        details: [
          'An interactive quiz and game app that engages users with real-time questions, scoring and progression mechanics.',
          'The app lets players challenge friends, track achievements and compete in themed rounds.',
        ],
        tags: ['Travel', 'Games', 'Mobile apps'],
      },
      de: {
        title: 'Didi Mobile App',
        summary: 'Interaktive Quiz- und Spiele-App.',
        sector: 'Endkunden',
        details: [
          'Interaktive Quiz- und Spielanwendung, die entwickelt wurde, um Benutzer mit Echtzeit-Fragen, Punktevergabe und Mechanismen zur Benutzerprogression zu beschäftigen.',
          'Mit der App können Sie Freunde herausfordern, Erfolge verfolgen und in thematischen Runden gegeneinander antreten.',
        ],
        tags: ['Reisen', 'Spiele', 'Mobile Apps'],
      },
      fr: {
        title: 'Application mobile Didi',
        summary: 'Application mobile de quiz et de jeux interactifs.',
        sector: 'Grand public',
        details: [
          'Application mobile interactive de quiz et de jeu développée pour engager les utilisateurs avec des questions en temps réel, un système de notation et des mécanismes de progression de l’utilisateur.',
          'L’application permet aux joueurs de défier leurs amis, de suivre leurs exploits et de s’affronter lors de tournois à thème.',
        ],
        tags: ['Voyages', 'Jeux', 'Applications mobiles'],
      },
      it: {
        title: 'App mobile Didi',
        summary: 'App mobile di quiz e giochi interattivi.',
        sector: 'Consumer',
        details: [
          'Applicazione mobile interattiva a quiz e giochi sviluppata per coinvolgere gli utenti con domande in tempo reale, punteggi e meccaniche di progressione dell’utente.',
          'L’app permette ai giocatori di sfidare gli amici, di tenere traccia dei risultati ottenuti e di gareggiare in round tematici.',
        ],
        tags: ['Viaggiare', 'Giochi', 'Applicazioni mobili'],
      },
    },
  },
  {
    slug: 'go-valais',
    image: '/images/cases/go-valais.jpg',
    content: {
      en: {
        title: 'GO-Valais Website',
        summary: 'Digital community hub for expats and professionals in Valais.',
        sector: 'Community',
        details: [
          'A digital community hub for expats and local professionals in Valais.',
          'The website offers information about events, membership options, cultural highlights and relocation resources. The project builds community engagement through event calendars, newsletter integration and simple contact modules.',
        ],
        tags: ['Social', 'Websites'],
      },
      de: {
        title: 'GO-Valais Website',
        summary: 'Digitale Community-Plattform für Expats und Fachkräfte im Wallis.',
        sector: 'Community',
        details: [
          'Digitaler Community-Hub für Expats und lokale Fachleute im Wallis.',
          'Die Website bietet Informationen über Veranstaltungen, Mitgliedschaftsoptionen, kulturelle Highlights und Umzugsressourcen. Das Projekt konzentriert sich auf die Förderung des Engagements der Gemeinschaft durch Veranstaltungskalender, Integration von Newslettern und benutzerfreundliche Kontaktmodule.',
        ],
        tags: ['Sozial', 'Webseiten'],
      },
      fr: {
        title: 'Site web GO-Valais',
        summary: 'Plateforme communautaire numérique pour expatriés et professionnels en Valais.',
        sector: 'Communauté',
        details: [
          'Centre de communauté numérique pour les expatriés et les professionnels locaux situés en Valais.',
          'Le site web propose des informations sur les événements, les options d’adhésion, les points forts de la culture et les ressources en matière de relocalisation. Le projet met l’accent sur l’engagement de la communauté grâce à des calendriers d’événements, à l’intégration de bulletins d’information et à des modules de contact conviviaux.',
        ],
        tags: ['Social', 'Sites web'],
      },
      it: {
        title: 'Sito web GO-Valais',
        summary: "Punto d'incontro digitale per expat e professionisti in Vallese.",
        sector: 'Comunità',
        details: [
          'Un centro di comunità digitale per espatriati e professionisti locali situato in Vallese.',
          'Il sito web offre informazioni sugli eventi, sulle opzioni di iscrizione, sui punti di interesse culturale e sulle risorse per il trasferimento. Il progetto si concentra sul coinvolgimento della comunità attraverso il calendario degli eventi, l’integrazione della newsletter e moduli di contatto facili da usare.',
        ],
        tags: ['Sociale', 'Siti web'],
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
        details: [
          'A premium travel services portal designed for curated trip experiences and executive travel planning.',
          'With destination pages, package options and enquiry forms, the site relies on visual storytelling to inspire travel.',
        ],
        tags: ['Tourism', 'Admin panel', 'Websites'],
      },
      de: {
        title: 'Travel Executive Website',
        summary: 'Premium-Portal für ausgewählte Reisen und Reiseplanung.',
        sector: 'Reisen',
        details: [
          'Ein Premium-Reiseservice-Portal für kuratierte Reiseerlebnisse und die Planung von Geschäftsreisen.',
          'Auf dieser Website werden Reiseziele, Pauschalangebote und Anfrageformulare vorgestellt, wobei der Schwerpunkt auf visuellem Storytelling liegt, um Sie zum Entdecken zu inspirieren.',
        ],
        tags: ['Tourismus', 'Admin-Panel', 'Webseiten'],
      },
      fr: {
        title: 'Site web Travel Executive',
        summary: "Portail haut de gamme de voyages sélectionnés et d'organisation de séjours.",
        sector: 'Voyage',
        details: [
          'Un portail de services de voyage haut de gamme conçu pour des expériences de voyages personnalisés et la planification de voyages d’affaires.',
          'Présentant des vitrines de destinations, des options de forfaits et des formulaires de demande de renseignements, ce site met l’accent sur la narration visuelle pour inspirer l’exploration.',
        ],
        tags: ['Tourisme', 'Panneau d\'administration', 'Sites web'],
      },
      it: {
        title: 'Sito web Travel Executive',
        summary: 'Portale premium di viaggi selezionati e pianificazione su misura.',
        sector: 'Viaggi',
        details: [
          'Un portale di servizi di viaggio di alto livello progettato per esperienze di viaggio curate e per la pianificazione di viaggi executive.',
          'Con una vetrina di destinazioni, opzioni di pacchetti e moduli di richiesta, questo sito enfatizza la narrazione visiva per ispirare l’esplorazione.',
        ],
        tags: ['Turismo', 'Pannello di amministrazione', 'Siti web'],
      },
    },
  },
  {
    slug: 'catapult-crown',
    image: '/images/cases/catapult-crown.jpg',
    content: {
      en: {
        title: 'Catapult Crown Portal',
        summary: 'Investment management platform for US dental practices.',
        sector: 'Healthcare',
        details: [
          'A web platform for investors in US dental practices.',
          'The system lets the client manage the whole investment lifecycle on its own, from publishing and updating detailed offers to processing investor applications and managing tiered access to exclusive information.',
        ],
        tags: ['Investment', 'Healthcare', 'Admin panel', 'User portal'],
      },
      de: {
        title: 'Catapult Crown Portal',
        summary: 'Webplattform zur Verwaltung von Investitionen in Zahnarztpraxen.',
        sector: 'Gesundheitswesen',
        details: [
          'Web-Plattform für Investoren in der Dentalbranche in den USA.',
          'System ermöglicht es dem Kunden, den gesamten Lebenszyklus der Anlagemöglichkeiten selbständig zu verwalten – von der Veröffentlichung und Aktualisierung detaillierter Angebote über die Bearbeitung von Anlegeranträgen bis hin zur Verwaltung des abgestuften Benutzerzugangs zu exklusiven Informationen.',
        ],
        tags: ['Investition', 'Gesundheit', 'Admin-Panel', 'Benutzerportal'],
      },
      fr: {
        title: 'Portail Catapult Crown',
        summary: 'Plateforme web de gestion des investissements dans des cabinets dentaires.',
        sector: 'Santé',
        details: [
          'Plate-forme web conçue pour les investisseurs dans le secteur dentaire aux États-Unis.',
          'Le système permet au client de gérer de manière indépendante l’ensemble du cycle de vie des opportunités d’investissement, depuis la publication et la mise à jour d’offres détaillées jusqu’au traitement des demandes des investisseurs et à la gestion de l’accès des utilisateurs à des informations exclusives.',
        ],
        tags: ['Investissement', 'Santé', 'Panneau d\'administration', 'Portail utilisateur'],
      },
      it: {
        title: 'Portale Catapult Crown',
        summary: 'Piattaforma web per gestire gli investimenti in studi dentistici.',
        sector: 'Sanità',
        details: [
          'Piattaforma web costruita per gli investitori del settore dentale negli Stati Uniti.',
          'Il sistema consente al cliente di gestire in modo indipendente l’intero ciclo di vita dell’opportunità di investimento, dalla pubblicazione e l’aggiornamento delle offerte dettagliate all’elaborazione delle domande degli investitori e alla gestione dell’accesso graduale degli utenti alle informazioni esclusive.',
        ],
        tags: ['Investimento', 'Sanità', 'Pannello di amministrazione', 'Portale Utente'],
      },
    },
  },
  {
    slug: 'tdsbot-iot',
    image: '/images/cases/tdsbot-iot.jpg',
    content: {
      en: {
        title: 'TDSbot Web & Mobile App',
        summary: 'B2B and B2C portal for water purification device monitoring.',
        sector: 'IoT',
        details: [
          'A unified B2B and B2C portal and mobile app for a dedicated measurement device installed on water purification systems.',
          'The system includes e-commerce, customer and user management, device monitoring dashboards, service scheduling and an installation flow. The apps sync data in real time, so users can track system performance and maintenance alerts.',
        ],
        tags: ['IoT', 'Environment', 'B2B', 'B2C', 'E-commerce', 'Websites', 'Admin panel', 'Mobile apps'],
      },
      de: {
        title: 'TDSbot Web- und Mobile-App',
        summary: 'B2B- und B2C-Portal zur Überwachung von Wasseraufbereitungsgeräten.',
        sector: 'IoT',
        details: [
          'B2B/B2C einheitliches Portal und mobile App für ein spezielles Messgerät, das in Wasseraufbereitungsanlagen installiert wird.',
          'Das System umfasst E-Commerce, Kunden- und Benutzerverwaltung, Dashboards zur Geräteüberwachung, Serviceplanung und Installationsablauf. App-Schnittstellen synchronisieren Daten in Echtzeit, so dass Benutzer die Systemleistung und Wartungswarnungen verfolgen können.',
        ],
        tags: ['IoT', 'Ökologie', 'B2B', 'B2C', 'E-Commerce', 'Webseiten', 'Admin-Panel', 'Mobile Apps'],
      },
      fr: {
        title: 'Application web et mobile TDSbot',
        summary: "Portail B2B et B2C de surveillance des appareils de purification d'eau.",
        sector: 'IoT',
        details: [
          'Portail unifié B2B/B2C et application mobile pour un appareil de mesure spécial installé sur les systèmes de purification de l’eau.',
          'Le système comprend le commerce électronique, la gestion des clients et des utilisateurs, les tableaux de bord de surveillance des appareils, la programmation des services et le flux d’installation. Les interfaces applicatives synchronisent les données en temps réel, ce qui permet aux utilisateurs de suivre les performances du système et les alertes de maintenance.',
        ],
        tags: ['IoT', 'Écologie', 'B2B', 'B2C', 'E-commerce', 'Sites web', 'Panneau d\'administration', 'Applications mobiles'],
      },
      it: {
        title: 'App web e mobile TDSbot',
        summary: "Portale B2B e B2C per il monitoraggio dei depuratori d'acqua.",
        sector: 'IoT',
        details: [
          'Portale unificato B2B/B2C e applicazione mobile realizzati per uno speciale dispositivo di misurazione installato sui sistemi di depurazione dell’acqua.',
          'Il sistema include l’e-commerce, la gestione dei clienti e degli utenti, i cruscotti di monitoraggio dei dispositivi, la programmazione dei servizi e il flusso di installazione. Le interfacce delle app sincronizzano i dati in tempo reale, consentendo agli utenti di monitorare le prestazioni del sistema e gli avvisi di manutenzione.',
        ],
        tags: ['IoT', 'Ecologia', 'B2B', 'B2C', 'E-commerce', 'Siti web', 'Pannello di amministrazione', 'Applicazioni mobili'],
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
        details: [
          'A management system for sports and fitness facilities, particularly squash and badminton courts.',
          'The platform includes booking calendars, user accounts, payment integrations, analytics dashboards and push notifications for reservations. It works across platforms for both facility managers and players. Real-time availability and automated reminders help reduce no-shows and improve court utilisation.',
        ],
        tags: ['Sport', 'Websites', 'Admin panel', 'Mobile apps'],
      },
      de: {
        title: 'Tpoint Web- und Mobile-App',
        summary: 'Verwaltungslösung für Sport- und Fitnessanlagen.',
        sector: 'Sport',
        details: [
          'Verwaltungslösung für Sport- und Fitnessanlagen, insbesondere für Squash- und Badmintonplätze.',
          'Die Plattform umfasst Buchungskalender, Benutzerkonten, Zahlungsintegrationen, Analyse-Dashboards und Push-Benachrichtigungen für Reservierungen. Das plattformübergreifende Design sorgt für ein nahtloses Erlebnis für Facility Manager und Spieler. Die Verfügbarkeit in Echtzeit und automatische Erinnerungen tragen dazu bei, dass weniger Spieler nicht erscheinen und die Auslastung der Plätze optimiert wird.',
        ],
        tags: ['Sport', 'Webseiten', 'Admin-Panel', 'Mobile Apps'],
      },
      fr: {
        title: 'Application web et mobile Tpoint',
        summary: 'Solution de gestion pour centres sportifs et salles de fitness.',
        sector: 'Sport',
        details: [
          'Solution de gestion pour les installations sportives et de remise en forme, en particulier les terrains de squash et de badminton.',
          'La plateforme comprend des calendriers de réservation, des comptes d’utilisateurs, des intégrations de paiement, des tableaux de bord analytiques et des notifications push pour les réservations. La conception multiplateforme garantit une expérience transparente pour les gestionnaires d’installations et les joueurs. La disponibilité en temps réel et les rappels automatisés permettent de réduire les absences et d’optimiser l’utilisation des terrains.',
        ],
        tags: ['Sport', 'Sites web', 'Panneau d\'administration', 'Applications mobiles'],
      },
      it: {
        title: 'App web e mobile Tpoint',
        summary: 'Soluzione gestionale per impianti sportivi e centri fitness.',
        sector: 'Sport',
        details: [
          'Soluzione di gestione per strutture sportive e di fitness, in particolare per campi da squash e badminton.',
          'La piattaforma include calendari di prenotazione, account utente, integrazioni di pagamento, dashboard di analisi e notifiche push per le prenotazioni. Il design multipiattaforma garantisce un’esperienza perfetta sia per i gestori delle strutture che per i giocatori. La disponibilità in tempo reale e i promemoria automatici aiutano a ridurre i no-show e a ottimizzare l’utilizzo dei campi da gioco.',
        ],
        tags: ['Sport', 'Siti web', 'Pannello di amministrazione', 'Applicazioni mobili'],
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
        details: [
          'A content platform that combines astrology with personalised psychological content.',
          'The project engages users through dynamic profiles, daily readings and tailored recommendations. The site includes social sharing, newsletter segmentation and comments to increase retention and community participation. It mixes editorial design with personalisation logic.',
        ],
        tags: ['Social', 'Websites', 'User portal'],
      },
      de: {
        title: 'MyAstro Webportal',
        summary: 'Content-Plattform, die Astrologie mit persönlichen Einblicken verbindet.',
        sector: 'Endkunden',
        details: [
          'Inhaltsorientierte Webplattform, die astrologische Erkenntnisse mit personalisierten psychologischen Inhalten verbindet.',
          'Project bindet die Nutzer durch dynamische Profile, tägliche Lektüre und maßgeschneiderte Empfehlungen ein. Die Seite integriert Social Sharing, Newsletter-Segmentierung und Kommentarmodule, um die Bindung und die Beteiligung der Community zu erhöhen. Das Projekt demonstriert eine Mischung aus redaktionellem Design und Logik der Benutzerpersonalisierung.',
        ],
        tags: ['Sozial', 'Webseiten', 'Benutzerportal'],
      },
      fr: {
        title: 'Portail web MyAstro',
        summary: 'Plateforme de contenus qui associe astrologie et analyses personnalisées.',
        sector: 'Grand public',
        details: [
          'Plate-forme web centrée sur le contenu, combinant des informations astrologiques avec un contenu psychologique personnalisé.',
          'Le projet fait participer les utilisateurs grâce à des profils dynamiques, des lectures quotidiennes et des recommandations personnalisées. Le site intègre le partage social, la segmentation de la newsletter et des modules de commentaires pour augmenter la rétention et la participation de la communauté. Le projet démontre un mélange de conception éditoriale et de logique de personnalisation de l’utilisateur.',
        ],
        tags: ['Social', 'Sites web', 'Portail utilisateur'],
      },
      it: {
        title: 'Portale web MyAstro',
        summary: "Piattaforma di contenuti che unisce l'astrologia a letture personalizzate.",
        sector: 'Consumer',
        details: [
          'Piattaforma web incentrata sui contenuti che unisce approfondimenti astrologici a contenuti psicologici personalizzati.',
          'Il progetto coinvolge gli utenti attraverso profili dinamici, letture quotidiane e consigli personalizzati. Il sito integra la condivisione sui social, la segmentazione delle newsletter e i moduli di commento per aumentare la fidelizzazione e la partecipazione alla comunità. Il progetto dimostra un mix di design editoriale e logica di personalizzazione degli utenti.',
        ],
        tags: ['Sociale', 'Siti web', 'Portale Utente'],
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
        details: [
          'A B2C marketplace for lifestyle accessories across tech, fashion and everyday essentials.',
          'The website focuses on easy browsing, simple search filters, clear product options and a short order process.',
        ],
        tags: ['Accessories', 'E-commerce', 'Websites'],
      },
      de: {
        title: 'Alio Online-Shop',
        summary: 'B2C-Marktplatz für Lifestyle-Accessoires.',
        sector: 'Detailhandel',
        details: [
          'B2C-Marktplatz für Lifestyle-Accessoires aus den Bereichen Technik, Mode und Alltagsgegenstände.',
          'Die Website konzentriert sich auf eine übersichtliche Navigation, einfache Suchfilter, die Präsentation von Produktoptionen und einen einfachen Bestellvorgang.',
        ],
        tags: ['Accessoires', 'E-Commerce', 'Webseiten'],
      },
      fr: {
        title: 'Boutique en ligne Alio',
        summary: "Marketplace B2C d'accessoires lifestyle.",
        sector: 'Commerce de détail',
        details: [
          'Place de marché B2C proposant des accessoires de style de vie dans les domaines de la technologie, de la mode et des produits de première nécessité.',
          'Le site web met l’accent sur une navigation rationalisée, des filtres de recherche faciles, une présentation des options des produits et un processus de commande simple.',
        ],
        tags: ['Accessoires', 'E-commerce', 'Sites web'],
      },
      it: {
        title: 'Negozio online Alio',
        summary: 'Marketplace B2C di accessori lifestyle.',
        sector: 'Retail',
        details: [
          'Mercato B2C che offre accessori per lo stile di vita che spaziano dalla tecnologia alla moda e agli oggetti di uso quotidiano.',
          'Il sito web si concentra su una navigazione snella, filtri di ricerca facili, presentazione delle opzioni dei prodotti e un processo d’ordine semplice.',
        ],
        tags: ['Accessori', 'E-commerce', 'Siti web'],
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
        details: [
          'An online marketplace for fishing gear and outdoor equipment that combines category highlights with educational content and product guides.',
          'The shop supports wishlists, product bundles and seasonal promotions to increase engagement. In the admin panel, staff schedule campaigns and get stock alerts, which makes peak seasons easier to manage.',
        ],
        tags: ['Sport', 'B2B', 'B2C', 'E-commerce', 'Web'],
      },
      de: {
        title: 'Fishing Roi Online-Shop',
        summary: 'Marktplatz für Angelausrüstung mit Ratgeber-Inhalten.',
        sector: 'Detailhandel',
        details: [
          'Online-Marktplatz für Angel- und Outdoor-Ausrüstung, der Kategorie-Highlights mit Bildungsinhalten und Produktführern kombiniert.',
          'Der Shop unterstützt Wunschzettel-Funktionen, Produktbündel und saisonale Werbeaktionen, um das Engagement zu erhöhen. Das Admin-Panel bietet Administratoren die Möglichkeit, Kampagnen zu planen und Lagerbestände zu melden, was die Verwaltung von Saisonspitzen erleichtert.',
        ],
        tags: ['Sport', 'B2B', 'B2C', 'E-Commerce', 'Web'],
      },
      fr: {
        title: 'Boutique en ligne Fishing Roi',
        summary: 'Marketplace de matériel de pêche avec contenus pédagogiques.',
        sector: 'Commerce de détail',
        details: [
          'Place de marché en ligne pour le matériel de pêche et les équipements de plein air, qui associe des catégories à un contenu éducatif et à des guides de produits.',
          'La boutique prend en charge les fonctions de liste de souhaits, les offres groupées de produits et les promotions saisonnières afin d’accroître l’engagement. Le panneau d’administration permet aux administrateurs de programmer des campagnes et d’émettre des alertes sur les stocks, ce qui facilite la gestion des périodes de pointe.',
        ],
        tags: ['Sport', 'B2B', 'B2C', 'E-commerce', 'Web'],
      },
      it: {
        title: 'Negozio online Fishing Roi',
        summary: 'Marketplace di attrezzatura da pesca con contenuti formativi.',
        sector: 'Retail',
        details: [
          'Mercato online di articoli per la pesca e attrezzature per l’outdoor che combina le caratteristiche delle categorie con contenuti educativi e guide ai prodotti.',
          'Il negozio supporta le funzioni di wishlist, i bundle di prodotti e le promozioni stagionali per aumentare il coinvolgimento. Il pannello di amministrazione consente agli amministratori di programmare le campagne e di ricevere avvisi sulle scorte, rendendo più facile la gestione dei periodi di punta.',
        ],
        tags: ['Sport', 'B2B', 'B2C', 'E-commerce', 'Web'],
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
        details: [
          'An automotive parts marketplace serving both B2B and B2C customers.',
          'Adaptive pricing, buyer tiers and volume discounts simplify sales across industries. Advanced search, brand filters and compatibility checks help buyers find the right part.',
        ],
        tags: ['Automotive', 'E-commerce', 'Web'],
      },
      de: {
        title: 'Vbavto E-Commerce',
        summary: 'Marktplatz für Autoteile für B2B- und B2C-Kunden.',
        sector: 'Automobil',
        details: [
          'Vielseitiger Marktplatz für Autoteile, der sowohl B2B- als auch B2C-Kundensegmente bedient.',
          'Mit adaptiver Preisgestaltung, Käuferstufen und Mengenrabattlogik rationalisiert es den Verkauf in verschiedenen Branchen. Erweiterte Suche, Markenfilter und Kompatibilitätsprüfungen verbessern die Produktfindung.',
        ],
        tags: ['Automobil', 'E-Commerce', 'Web'],
      },
      fr: {
        title: 'E-commerce Vbavto',
        summary: 'Marketplace de pièces automobiles pour les clients B2B et B2C.',
        sector: 'Automobile',
        details: [
          'Place de marché polyvalente pour les pièces détachées automobiles desservant à la fois les segments de clientèle B2B et B2C.',
          'Grâce à la tarification adaptative, aux paliers d’acheteurs et à la logique des remises en fonction du volume, il rationalise les ventes dans tous les secteurs d’activité. La recherche avancée, les filtres de marque et les contrôles de compatibilité améliorent la découverte des produits.',
        ],
        tags: ['Automobile', 'E-commerce', 'Web'],
      },
      it: {
        title: 'E-commerce Vbavto',
        summary: 'Marketplace di ricambi auto per clienti B2B e B2C.',
        sector: 'Automotive',
        details: [
          'Un mercato versatile di ricambi per auto che serve sia i segmenti B2B che B2C.',
          'Grazie ai prezzi adattivi, ai livelli di acquisto e alla logica degli sconti per volume, ottimizza le vendite in tutti i settori. La ricerca avanzata, i filtri per i marchi e i controlli di compatibilità migliorano la scoperta dei prodotti.',
        ],
        tags: ['Automobilistico', 'E-commerce', 'Web'],
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
