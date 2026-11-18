import { pick, localesOf, type Localized } from '@/lib/localized'

/** `slug` and `highlighted` are the same in every locale. */
export type SolutionPackage = {
  slug: string
  name: string
  price: string
  timeline: string
  target: string[]
  features: string[]
  highlighted?: boolean
  description: string
}

/** Text fields of a solution page, written once per locale. */
export type SolutionText = {
  title: string
  tagline: string
  description: string
  packages?: SolutionPackage[]
  features: { title: string; description: string }[]
  meta: { title: string; description: string }
}

type SolutionRecord = {
  slug: string
  techStack: string[]
  content: Localized<SolutionText>
}

/** A solution with its text resolved to one locale. */
export type SolutionData = Omit<SolutionRecord, 'content'> & SolutionText

const records: SolutionRecord[] = [
  {
    slug: 'websites',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Payload CMS', 'PostgreSQL', 'Vercel', 'Caddy'],
    content: {
      en: {
        title: 'Website development',
        tagline: 'From brochure sites to user portals, built for Swiss SMEs',
        description:
          'We build clean, well-engineered websites. From a simple web brochure to a full user portal with logins, each package has a fixed price and a fixed timeline.',
        packages: [
          {
            slug: 'web-brochure',
            name: 'Web Brochure',
            price: 'CHF 599',
            timeline: '2 weeks',
            description:
              'Your business card online: a short, professional site that tells clients who you are and how to reach you.',
            target: ['Small businesses', 'Startups', 'Consultants', 'Non-profits'],
            features: [
              'Company info & contacts',
              'Gallery / portfolio',
              'Legal pages (Privacy, Terms, Cookies)',
              'SEO & analytics',
            ],
          },
          {
            slug: 'sme-website',
            name: 'SME Website',
            price: 'CHF 1,299',
            timeline: '1 month',
            highlighted: true,
            description:
              'A complete website that presents your business and turns visitors into enquiries. Built for Swiss SMEs.',
            target: ['SMEs', 'Service companies', 'Contractors'],
            features: [
              'Company overview + contacts',
              'Products & services pages',
              'Blog & FAQ',
              'Success stories',
              'SEO & analytics',
            ],
          },
          {
            slug: 'user-portal',
            name: 'User Portal',
            price: 'CHF 2,499',
            timeline: '1.5 months',
            description:
              'A site with logins and personal accounts, for businesses that serve registered clients, members or partners.',
            target: ['B2G/B2E companies', 'Educational institutions', 'Partner portals'],
            features: [
              'Everything in SME Website',
              'Sign-up / sign-in / password reset',
              'Personal account',
              'User management',
            ],
          },
          {
            slug: 'online-boutique',
            name: 'Online Store',
            price: 'CHF 6,999',
            timeline: '2 months',
            description:
              'A complete online shop with catalogue, checkout, order management and inventory built in.',
            target: ['B2C / B2B sellers', 'Manufacturers', 'Distributors'],
            features: [
              'Everything in User Portal',
              'Catalogue + wishlist + cart',
              'Checkout + orders',
              'Products & order management',
            ],
          },
        ],
        features: [
          {
            title: 'Fixed price, fixed timeline',
            description:
              'Every package has a defined scope and delivery date. No hourly billing, no scope creep surprises.',
          },
          {
            title: 'Swiss SEO included',
            description: 'Multilingual SEO setup (EN/DE/FR/IT), sitemap, structured data, and analytics from day one.',
          },
          {
            title: 'Mobile-first',
            description: 'All designs are mobile-first and tested across devices before delivery.',
          },
          {
            title: 'Money-back guarantee',
            description: 'If we miss the agreed timeline without good reason, you get a partial refund.',
          },
        ],
        meta: {
          title: 'Website Development Switzerland — Trident Software',
          description:
            'Fixed-price website packages for Swiss SMEs. Web brochure from CHF 599. SME website, user portals, online stores. Delivered in 2 weeks to 2 months.',
        },
      },
      de: {
        title: 'Website-Entwicklung',
        tagline: 'Von der Visitenkarte bis zum Kundenportal, gebaut für Schweizer KMU',
        description:
          'Wir bauen Websites, die ein klares Design mit solider Technik verbinden. Von der einfachen Web-Broschüre bis zum Kundenportal mit Login: Wir liefern Pakete zum Festpreis mit planbaren Terminen.',
        packages: [
          {
            slug: 'web-brochure',
            name: 'Web-Broschüre',
            price: 'CHF 599',
            timeline: '2 Wochen',
            description:
              'Ihre digitale Visitenkarte: ein kompakter, professioneller Online-Auftritt, der Kunden zeigt, wer Sie sind und wie man Sie erreicht.',
            target: ['Kleinunternehmen', 'Startups', 'Beratende', 'Non-Profit-Organisationen'],
            features: [
              'Firmeninfos & Kontakt',
              'Galerie / Portfolio',
              'Rechtliche Seiten (Datenschutz, AGB, Cookies)',
              'SEO & Analytics',
            ],
          },
          {
            slug: 'sme-website',
            name: 'KMU-Website',
            price: 'CHF 1,299',
            timeline: '1 Monat',
            highlighted: true,
            description:
              'Eine vollwertige Website, die Ihr Unternehmen präsentiert, Anfragen generiert und Besucher zu Kunden macht. Gebaut für Schweizer KMU.',
            target: ['KMU', 'Dienstleistungsunternehmen', 'Handwerks- und Baubetriebe'],
            features: [
              'Firmenporträt + Kontakt',
              'Seiten für Produkte & Dienstleistungen',
              'Blog & FAQ',
              'Referenzen',
              'SEO & Analytics',
            ],
          },
          {
            slug: 'user-portal',
            name: 'Kundenportal',
            price: 'CHF 2,499',
            timeline: '1,5 Monate',
            description:
              'Eine interaktive Plattform mit Login und persönlichen Konten, für Unternehmen mit registrierten Kunden, Mitgliedern oder Partnern.',
            target: ['B2G-/B2E-Unternehmen', 'Bildungseinrichtungen', 'Partnerportale'],
            features: [
              'Alles aus der KMU-Website',
              'Registrierung / Anmeldung / Passwort zurücksetzen',
              'Persönlicher Bereich',
              'Benutzerverwaltung',
            ],
          },
          {
            slug: 'online-boutique',
            name: 'Onlineshop',
            price: 'CHF 6,999',
            timeline: '2 Monate',
            description:
              'Eine komplette E-Commerce-Lösung für den Onlineverkauf, mit Katalog, Checkout, Bestellverwaltung und Lagerverwaltung.',
            target: ['B2C-/B2B-Händler', 'Hersteller', 'Distributoren'],
            features: [
              'Alles aus dem Kundenportal',
              'Produktkatalog + Merkliste + Warenkorb',
              'Checkout + Bestellungen',
              'Produkt- & Bestellverwaltung',
            ],
          },
        ],
        features: [
          {
            title: 'Fester Preis, fester Termin',
            description:
              'Jedes Paket hat einen klar definierten Umfang und ein Lieferdatum. Keine Abrechnung nach Stunden, keine bösen Überraschungen beim Umfang.',
          },
          {
            title: 'SEO für die Schweiz inklusive',
            description:
              'Mehrsprachiges SEO (EN/DE/FR/IT), Sitemap, strukturierte Daten und Analytics ab dem ersten Tag.',
          },
          {
            title: 'Mobile-first',
            description:
              'Alle Designs entstehen zuerst für Mobilgeräte und werden vor der Übergabe auf verschiedenen Geräten getestet.',
          },
          {
            title: 'Geld-zurück-Garantie',
            description:
              'Verpassen wir den vereinbarten Termin ohne triftigen Grund, erhalten Sie einen Teil des Preises zurück.',
          },
        ],
        meta: {
          title: 'Website erstellen lassen Schweiz | Trident Software',
          description:
            'Website-Pakete zum Festpreis für Schweizer KMU. Web-Broschüre ab CHF 599. KMU-Website, Kundenportal, Onlineshop. Lieferung in 2 Wochen bis 2 Monaten.',
        },
      },
      fr: {
        title: 'Création de sites web',
        tagline: 'Du site vitrine au portail client, conçus pour les PME suisses',
        description:
          'Nous créons des sites web qui allient un design soigné à une technique solide. De la simple brochure en ligne au portail utilisateur complet avec authentification, nous proposons des forfaits à prix fixe et aux délais prévisibles.',
        packages: [
          {
            slug: 'web-brochure',
            name: 'Brochure web',
            price: 'CHF 599',
            timeline: '2 semaines',
            description:
              'Votre carte de visite en ligne : une présence web concise et professionnelle, qui dit à vos clients qui vous êtes et comment vous joindre.',
            target: ['Petites entreprises', 'Startups', 'Consultants', 'Associations à but non lucratif'],
            features: [
              'Présentation et coordonnées',
              'Galerie / portfolio',
              'Pages légales (confidentialité, conditions, cookies)',
              'SEO et statistiques',
            ],
          },
          {
            slug: 'sme-website',
            name: 'Site PME',
            price: 'CHF 1,299',
            timeline: '1 mois',
            highlighted: true,
            description:
              'Un site complet qui met en valeur votre entreprise, génère des demandes et transforme les visiteurs en clients. Conçu pour les PME suisses.',
            target: ['PME', 'Entreprises de services', 'Artisans et entrepreneurs'],
            features: [
              "Présentation de l'entreprise + coordonnées",
              'Pages produits et services',
              'Blog et FAQ',
              'Références clients',
              'SEO et statistiques',
            ],
          },
          {
            slug: 'user-portal',
            name: 'Portail utilisateur',
            price: 'CHF 2,499',
            timeline: '1,5 mois',
            description:
              'Une plateforme interactive avec authentification et comptes personnels, pour les entreprises qui servent des clients, membres ou partenaires inscrits.',
            target: ['Entreprises B2G/B2E', 'Établissements de formation', 'Portails partenaires'],
            features: [
              'Tout le contenu du Site PME',
              'Inscription / connexion / réinitialisation du mot de passe',
              'Espace personnel',
              'Gestion des utilisateurs',
            ],
          },
          {
            slug: 'online-boutique',
            name: 'Boutique en ligne',
            price: 'CHF 6,999',
            timeline: '2 mois',
            description:
              'Une solution e-commerce complète pour vendre en ligne : catalogue, paiement, gestion des commandes et des stocks inclus.',
            target: ['Vendeurs B2C / B2B', 'Fabricants', 'Distributeurs'],
            features: [
              'Tout le contenu du Portail utilisateur',
              'Catalogue produits + liste de souhaits + panier',
              'Paiement + commandes',
              'Gestion des produits et des commandes',
            ],
          },
        ],
        features: [
          {
            title: 'Prix fixe, délai fixe',
            description:
              "Chaque forfait a un périmètre et une date de livraison définis. Pas de facturation à l'heure, pas de mauvaise surprise sur le périmètre.",
          },
          {
            title: 'SEO suisse inclus',
            description:
              'Référencement multilingue (EN/DE/FR/IT), sitemap, données structurées et statistiques dès le premier jour.',
          },
          {
            title: 'Mobile-first',
            description:
              "Tous les designs sont pensés d'abord pour le mobile et testés sur différents appareils avant la livraison.",
          },
          {
            title: 'Garantie de remboursement',
            description: 'Si nous dépassons le délai convenu sans raison valable, vous êtes remboursé en partie.',
          },
        ],
        meta: {
          title: 'Création de site web en Suisse | Trident Software',
          description:
            'Sites web à prix fixe pour PME suisses. Brochure web dès CHF 599. Site PME, portail utilisateur, boutique en ligne. Livrés en 2 semaines à 2 mois.',
        },
      },
      it: {
        title: 'Sviluppo di siti web',
        tagline: 'Dal sito vetrina al portale utenti, pensati per le PMI svizzere',
        description:
          'Realizziamo siti web che uniscono un design pulito a una tecnica solida. Dalla semplice brochure online al portale utenti completo con autenticazione, offriamo pacchetti a prezzo fisso con tempi prevedibili.',
        packages: [
          {
            slug: 'web-brochure',
            name: 'Brochure web',
            price: 'CHF 599',
            timeline: '2 settimane',
            description:
              'Il tuo biglietto da visita digitale: una presenza online essenziale e professionale che dice ai clienti chi sei e come contattarti.',
            target: ['Piccole imprese', 'Startup', 'Consulenti', 'Organizzazioni non profit'],
            features: [
              'Informazioni aziendali e contatti',
              'Galleria / portfolio',
              'Pagine legali (privacy, condizioni, cookie)',
              'SEO e statistiche',
            ],
          },
          {
            slug: 'sme-website',
            name: 'Sito PMI',
            price: 'CHF 1,299',
            timeline: '1 mese',
            highlighted: true,
            description:
              'Un sito completo che presenta la tua azienda, genera contatti e trasforma i visitatori in clienti. Pensato per le PMI svizzere.',
            target: ['PMI', 'Aziende di servizi', 'Imprese edili e artigiani'],
            features: [
              'Presentazione aziendale + contatti',
              'Pagine prodotti e servizi',
              'Blog e FAQ',
              'Casi di successo',
              'SEO e statistiche',
            ],
          },
          {
            slug: 'user-portal',
            name: 'Portale utenti',
            price: 'CHF 2,499',
            timeline: '1,5 mesi',
            description:
              'Una piattaforma interattiva con autenticazione e account personali, per aziende che servono clienti, soci o partner registrati.',
            target: ['Aziende B2G/B2E', 'Istituti di formazione', 'Portali per partner'],
            features: [
              'Tutto ciò che include il Sito PMI',
              'Registrazione / accesso / recupero password',
              'Area personale',
              'Gestione utenti',
            ],
          },
          {
            slug: 'online-boutique',
            name: 'Negozio online',
            price: 'CHF 6,999',
            timeline: '2 mesi',
            description:
              'Una soluzione e-commerce completa per vendere online, con catalogo, checkout, gestione ordini e magazzino già inclusi.',
            target: ['Venditori B2C / B2B', 'Produttori', 'Distributori'],
            features: [
              'Tutto ciò che include il Portale utenti',
              'Catalogo prodotti + lista desideri + carrello',
              'Checkout + ordini',
              'Gestione prodotti e ordini',
            ],
          },
        ],
        features: [
          {
            title: 'Prezzo fisso, tempi fissi',
            description:
              'Ogni pacchetto ha un perimetro e una data di consegna definiti. Nessuna fatturazione a ore, nessuna sorpresa sul perimetro del progetto.',
          },
          {
            title: 'SEO per la Svizzera incluso',
            description: 'SEO multilingue (EN/DE/FR/IT), sitemap, dati strutturati e statistiche dal primo giorno.',
          },
          {
            title: 'Mobile-first',
            description:
              'Tutti i design nascono per il mobile e vengono testati su diversi dispositivi prima della consegna.',
          },
          {
            title: 'Garanzia soddisfatti o rimborsati',
            description: 'Se manchiamo la scadenza concordata senza un valido motivo, ricevi un rimborso parziale.',
          },
        ],
        meta: {
          title: 'Realizzazione siti web in Svizzera | Trident Software',
          description:
            'Pacchetti per siti web a prezzo fisso per PMI svizzere. Brochure web da CHF 599. Sito PMI, portale utenti, negozio online. Consegna in 2 settimane–2 mesi.',
        },
      },
    },
  },
  {
    slug: 'e-commerce',
    techStack: [
      'Python',
      'React.js',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'AWS',
      'Docker',
      'Kubernetes',
      'WooCommerce',
      'Shopify',
    ],
    content: {
      en: {
        title: 'E-commerce solutions',
        tagline: 'Custom B2B, B2C and B2X platforms, from MVP to 1M+ products',
        description:
          'We build e-commerce platforms for Swiss and European businesses, from customised WooCommerce shops to bespoke B2B platforms with complex pricing, ERP integration and 200+ connectors.',
        features: [
          {
            title: 'B2B & B2C support',
            description:
              'Omnichannel strategy, custom CRM/ERP integration and scalable order management for business and consumer markets.',
          },
          {
            title: 'Custom platform development',
            description: 'Backend development, payment gateway integration, analytics dashboards. No SaaS lock-in.',
          },
          {
            title: 'AI-powered features',
            description: 'Product recommendations, predictive analytics, chatbots and virtual assistants built in.',
          },
          {
            title: 'Marketplace development',
            description: 'Multi-vendor marketplaces with logistics, fulfilment and customer loyalty programmes.',
          },
          {
            title: 'ERP / CRM integration',
            description: 'Connect to SAP, Odoo, Salesforce, and 200+ other systems via our integration layer.',
          },
          {
            title: 'Cloud-native architecture',
            description: 'AWS, GCP or Azure infrastructure that scales with your catalogue and traffic.',
          },
        ],
        meta: {
          title: 'Custom E-commerce Development Switzerland — Trident Software',
          description:
            'Custom B2B/B2C/B2X e-commerce platforms built for Swiss companies. From WooCommerce to fully bespoke platforms with ERP integration.',
        },
      },
      de: {
        title: 'E-Commerce-Lösungen',
        tagline: 'Individuelle B2B-, B2C- und B2X-Plattformen, vom MVP bis zu über 1 Mio. Produkten',
        description:
          'Wir entwickeln individuelle E-Commerce-Plattformen für Unternehmen in der Schweiz und Europa. Von angepassten WooCommerce-Shops bis zu vollständig massgeschneiderten B2B-Plattformen mit komplexer Preislogik, ERP-Anbindung und über 200 Konnektoren.',
        features: [
          {
            title: 'B2B & B2C',
            description:
              'Omnichannel-Strategie, individuelle CRM-/ERP-Anbindung und skalierbare Bestellverwaltung für Geschäfts- und Privatkunden.',
          },
          {
            title: 'Individuelle Plattformentwicklung',
            description:
              'Backend-Entwicklung, Anbindung von Zahlungsanbietern, Analyse-Dashboards. Ohne Abhängigkeit von einem SaaS-Anbieter.',
          },
          {
            title: 'KI-gestützte Funktionen',
            description:
              'Produktempfehlungen, prädiktive Analysen, Chatbots und virtuelle Assistenten direkt integriert.',
          },
          {
            title: 'Entwicklung von Marktplätzen',
            description:
              'Marktplätze mit mehreren Anbietern, inklusive Logistik, Fulfillment und Kundenbindungsprogrammen.',
          },
          {
            title: 'ERP-/CRM-Integration',
            description:
              'Anbindung an SAP, Odoo, Salesforce und über 200 weitere Systeme über unsere Integrationsschicht.',
          },
          {
            title: 'Cloud-native Architektur',
            description: 'AWS, GCP oder Azure: Infrastruktur, die mit Ihrem Sortiment und Ihrem Traffic mitwächst.',
          },
        ],
        meta: {
          title: 'E-Commerce-Entwicklung Schweiz | Trident Software',
          description:
            'Individuelle B2B-, B2C- und B2X-Shops für Schweizer Unternehmen. Von WooCommerce bis zur massgeschneiderten Lösung mit ERP-Anbindung.',
        },
      },
      fr: {
        title: 'Solutions e-commerce',
        tagline: "Plateformes B2B, B2C et B2X sur mesure, du MVP à plus d'un million de produits",
        description:
          'Nous développons des plateformes e-commerce sur mesure pour les entreprises suisses et européennes. De la personnalisation de WooCommerce aux plateformes B2B entièrement sur mesure, avec tarification complexe, intégration ERP et plus de 200 connecteurs.',
        features: [
          {
            title: 'B2B et B2C',
            description:
              'Stratégie omnicanale, intégration CRM/ERP sur mesure et gestion des commandes évolutive, pour les clients professionnels comme pour les particuliers.',
          },
          {
            title: 'Développement de plateforme sur mesure',
            description:
              'Développement backend, intégration des moyens de paiement, tableaux de bord analytiques. Sans dépendance à un éditeur SaaS.',
          },
          {
            title: "Fonctionnalités basées sur l'IA",
            description: 'Recommandations de produits, analyses prédictives, chatbots et assistants virtuels intégrés.',
          },
          {
            title: 'Développement de marketplaces',
            description:
              'Marketplaces multi-vendeurs avec logistique, préparation des commandes et programmes de fidélité.',
          },
          {
            title: 'Intégration ERP / CRM',
            description:
              "Connexion à SAP, Odoo, Salesforce et plus de 200 autres systèmes via notre couche d'intégration.",
          },
          {
            title: 'Architecture cloud-native',
            description:
              'AWS, GCP ou Azure : une infrastructure qui suit la croissance de votre catalogue et de votre trafic.',
          },
        ],
        meta: {
          title: 'E-commerce sur mesure en Suisse | Trident Software',
          description:
            'Plateformes e-commerce B2B/B2C/B2X sur mesure pour entreprises suisses. De WooCommerce aux solutions entièrement sur mesure avec intégration ERP.',
        },
      },
      it: {
        title: 'Soluzioni e-commerce',
        tagline: 'Piattaforme B2B, B2C e B2X su misura, dal MVP a oltre 1 milione di prodotti',
        description:
          'Sviluppiamo piattaforme e-commerce su misura per aziende svizzere ed europee. Dalla personalizzazione di WooCommerce a piattaforme B2B completamente su misura, con prezzi complessi, integrazione ERP e oltre 200 connettori.',
        features: [
          {
            title: 'B2B e B2C',
            description:
              'Strategia omnicanale, integrazione CRM/ERP su misura e gestione ordini scalabile, sia per clienti aziendali sia per consumatori.',
          },
          {
            title: 'Sviluppo di piattaforme su misura',
            description:
              'Sviluppo backend, integrazione dei sistemi di pagamento, dashboard analitiche. Senza vincoli verso un fornitore SaaS.',
          },
          {
            title: "Funzioni basate sull'IA",
            description:
              'Raccomandazioni di prodotto, analisi predittive, chatbot e assistenti virtuali già integrati.',
          },
          {
            title: 'Sviluppo di marketplace',
            description: 'Marketplace multi-venditore con logistica, evasione degli ordini e programmi fedeltà.',
          },
          {
            title: 'Integrazione ERP / CRM',
            description:
              'Collegamento a SAP, Odoo, Salesforce e oltre 200 altri sistemi tramite il nostro livello di integrazione.',
          },
          {
            title: 'Architettura cloud-native',
            description: "AWS, GCP o Azure: un'infrastruttura che cresce con il tuo catalogo e il tuo traffico.",
          },
        ],
        meta: {
          title: 'Sviluppo e-commerce su misura Svizzera | Trident Software',
          description:
            'Piattaforme e-commerce B2B/B2C/B2X su misura per aziende svizzere. Da WooCommerce a soluzioni completamente personalizzate con integrazione ERP.',
        },
      },
    },
  },
  {
    slug: 'mobile-apps',
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Expo', 'Node.js', 'PostgreSQL', 'Firebase', 'AWS', 'Docker'],
    content: {
      en: {
        title: 'Mobile app development',
        tagline: 'Native and cross-platform apps for iOS and Android',
        description:
          'We design and build fast, easy-to-use mobile apps that scale, from consumer apps to enterprise platforms. We use React Native or Flutter and apply the same Swiss quality standards as on our web products.',
        features: [
          {
            title: 'Cross-platform (iOS + Android)',
            description:
              'One codebase, two stores. React Native and Flutter let us ship to iOS and Android at the same time without losing performance or native feel.',
          },
          {
            title: 'Offline-first architecture',
            description:
              'Apps that keep working offline: data is stored locally, actions are queued, and everything syncs when the connection returns.',
          },
          {
            title: 'Push notifications & analytics',
            description:
              'Engagement tools built in from day one: push campaigns, in-app events, crash reporting and user retention analytics.',
          },
          {
            title: 'Secure authentication',
            description:
              'Biometric login, OAuth2, JWT, and role-based access control. All data encrypted in transit and at rest.',
          },
          {
            title: 'API & backend integration',
            description:
              'Connection to your existing systems over REST, GraphQL or WebSockets, or to third-party services via our integration layer.',
          },
          {
            title: 'App Store & Play Store delivery',
            description:
              'We handle store submissions, the review process, versioning and CI/CD for over-the-air updates.',
          },
        ],
        meta: {
          title: 'Mobile App Development Switzerland — Trident Software',
          description:
            'Custom iOS and Android apps for Swiss SMEs and enterprises. React Native, Flutter, fixed timelines. From MVP to production-ready mobile platforms.',
        },
      },
      de: {
        title: 'App-Entwicklung',
        tagline: 'Native und plattformübergreifende Apps für iOS und Android',
        description:
          'Wir konzipieren und entwickeln mobile Apps, die schnell, intuitiv und skalierbar sind. Von Apps für Endkunden bis zu mobilen Unternehmensplattformen: mit React Native oder Flutter und mit derselben Schweizer Qualität wie unsere Webprodukte.',
        features: [
          {
            title: 'Plattformübergreifend (iOS + Android)',
            description:
              'Eine Codebasis, zwei Stores. Mit React Native und Flutter veröffentlichen wir gleichzeitig für iOS und Android, ohne Abstriche bei Performance oder nativem Gefühl.',
          },
          {
            title: 'Offline-first-Architektur',
            description:
              'Apps, die auch ohne Verbindung funktionieren: lokale Datensynchronisation, Operationen in Warteschlangen und reibungslose Wiederverbindung, sobald das Netz zurück ist.',
          },
          {
            title: 'Push-Nachrichten & Analytics',
            description:
              'Werkzeuge für die Nutzerbindung ab dem ersten Tag: Push-Kampagnen, In-App-Events, Absturzberichte und Analysen zur Nutzerbindung.',
          },
          {
            title: 'Sichere Anmeldung',
            description:
              'Biometrisches Login, OAuth2, JWT und rollenbasierte Zugriffskontrolle. Alle Daten verschlüsselt bei der Übertragung und im Speicher.',
          },
          {
            title: 'API- & Backend-Anbindung',
            description:
              'Reibungslose Verbindung mit Ihren bestehenden Systemen: REST, GraphQL, WebSockets oder externe Dienste über unsere Integrationsschicht.',
          },
          {
            title: 'Veröffentlichung im App Store & Play Store',
            description:
              'Komplette Abwicklung inklusive Einreichung in den Stores, Begleitung des Review-Prozesses, Versionierung und CI/CD für Over-the-Air-Updates.',
          },
        ],
        meta: {
          title: 'App-Entwicklung Schweiz | Trident Software',
          description:
            'Individuelle iOS- und Android-Apps für Schweizer KMU und Grossunternehmen. React Native, Flutter, feste Termine. Vom MVP bis zur produktionsreifen Plattform.',
        },
      },
      fr: {
        title: "Développement d'applications mobiles",
        tagline: 'Applications natives et multiplateformes pour iOS et Android',
        description:
          "Nous concevons et développons des applications mobiles rapides, intuitives et prêtes à grandir. Des applications grand public aux plateformes mobiles d'entreprise, avec React Native ou Flutter et la même exigence de qualité suisse que nos produits web.",
        features: [
          {
            title: 'Multiplateforme (iOS + Android)',
            description:
              'Une seule base de code, deux stores. React Native et Flutter nous permettent de publier en même temps sur iOS et Android, sans sacrifier les performances ni le rendu natif.',
          },
          {
            title: 'Architecture offline-first',
            description:
              "Des applications qui fonctionnent sans connexion : synchronisation locale des données, opérations mises en file d'attente et reconnexion transparente dès le retour du réseau.",
          },
          {
            title: 'Notifications push et statistiques',
            description:
              "Outils d'engagement intégrés dès le premier jour : campagnes push, événements in-app, rapports de plantage et analyse de la rétention.",
          },
          {
            title: 'Authentification sécurisée',
            description:
              "Connexion biométrique, OAuth2, JWT et contrôle d'accès basé sur les rôles. Toutes les données chiffrées en transit et au repos.",
          },
          {
            title: 'Intégration API et backend',
            description:
              "Connexion fluide à vos systèmes existants : REST, GraphQL, WebSockets ou services tiers via notre couche d'intégration.",
          },
          {
            title: "Publication sur l'App Store et le Play Store",
            description:
              'Livraison complète : soumission aux stores, accompagnement lors de la revue, gestion des versions et CI/CD pour les mises à jour over-the-air.',
          },
        ],
        meta: {
          title: "Développement d'apps mobiles Suisse | Trident Software",
          description:
            'Applications iOS et Android sur mesure pour PME et grandes entreprises suisses. React Native, Flutter, délais fixes. Du MVP à la plateforme en production.',
        },
      },
      it: {
        title: 'Sviluppo di app mobili',
        tagline: 'App native e multipiattaforma per iOS e Android',
        description:
          'Progettiamo e sviluppiamo app mobili veloci, intuitive e pronte a crescere. Dalle app per il grande pubblico alle piattaforme mobili aziendali, con React Native o Flutter e gli stessi standard di qualità svizzera dei nostri prodotti web.',
        features: [
          {
            title: 'Multipiattaforma (iOS + Android)',
            description:
              'Un solo codice, due store. Con React Native e Flutter pubblichiamo su iOS e Android in contemporanea, senza rinunciare a prestazioni o feeling nativo.',
          },
          {
            title: 'Architettura offline-first',
            description:
              'App che funzionano anche senza connessione: sincronizzazione locale dei dati, operazioni in coda e riconnessione senza intoppi quando torna la rete.',
          },
          {
            title: 'Notifiche push e statistiche',
            description:
              'Strumenti di coinvolgimento integrati dal primo giorno: campagne push, eventi in-app, report sui crash e analisi della fidelizzazione.',
          },
          {
            title: 'Autenticazione sicura',
            description:
              'Accesso biometrico, OAuth2, JWT e controllo degli accessi basato sui ruoli. Tutti i dati cifrati in transito e a riposo.',
          },
          {
            title: 'Integrazione API e backend',
            description:
              'Collegamento fluido ai tuoi sistemi esistenti: REST, GraphQL, WebSockets o servizi di terze parti tramite il nostro livello di integrazione.',
          },
          {
            title: 'Pubblicazione su App Store e Play Store',
            description:
              'Consegna completa: invio agli store, supporto durante la revisione, gestione delle versioni e CI/CD per gli aggiornamenti over-the-air.',
          },
        ],
        meta: {
          title: 'Sviluppo app mobili in Svizzera | Trident Software',
          description:
            'App iOS e Android su misura per PMI e grandi aziende svizzere. React Native, Flutter, tempi fissi. Dal MVP alla piattaforma mobile in produzione.',
        },
      },
    },
  },
  {
    slug: 'cloud-services',
    techStack: [
      'AWS',
      'Azure',
      'GCP',
      'Terraform',
      'Docker',
      'Kubernetes',
      'Grafana',
      'Prometheus',
      'Datadog',
      'Jenkins',
      'GitHub Actions',
    ],
    content: {
      en: {
        title: 'Cloud services',
        tagline: 'Migration, architecture and managed infrastructure on AWS, Azure, GCP',
        description:
          'We design, deploy and run cloud environments, from migration strategy to 24/7 managed infrastructure, with reliability, security and cost efficiency in mind. Swiss data residency available.',
        features: [
          {
            title: 'Cloud migration',
            description:
              'Lift-and-shift or full modernisation. We assess your workloads, plan the migration and run it with minimal downtime.',
          },
          {
            title: 'DevOps & CI/CD pipelines',
            description:
              'Automated build, test and deploy workflows in GitHub Actions, GitLab CI or Jenkins, wired into your development process.',
          },
          {
            title: 'Infrastructure as Code',
            description:
              'All infrastructure lives in Terraform or Pulumi: versioned, reviewable, reproducible. No snowflake servers.',
          },
          {
            title: 'Multi-cloud & hybrid cloud',
            description:
              'AWS, Azure and GCP, or a hybrid setup linking on-premise systems to public cloud. We design around your constraints.',
          },
          {
            title: 'Monitoring & observability',
            description:
              'Grafana dashboards, Prometheus metrics and Datadog APM show performance, errors and infrastructure cost.',
          },
          {
            title: 'Security & compliance',
            description:
              'ISO 27001-compatible security practices. Vulnerability scanning, secrets management, network isolation, and audit logging.',
          },
        ],
        meta: {
          title: 'Cloud Consulting Switzerland — Trident Software',
          description:
            'Cloud migration, DevOps, and managed infrastructure for Swiss businesses. AWS, Azure, GCP. ISO 27001-compatible. Swiss data residency available.',
        },
      },
      de: {
        title: 'Cloud-Services',
        tagline: 'Migration, Architektur und Managed Infrastructure auf AWS, Azure und GCP',
        description:
          'Von der Migrationsstrategie bis zur betreuten Infrastruktur rund um die Uhr: Wir planen, bauen und betreiben Cloud-Umgebungen, die zuverlässig, sicher und kosteneffizient sind. Datenhaltung in der Schweiz möglich.',
        features: [
          {
            title: 'Migration in die Cloud',
            description:
              'Lift-and-Shift oder komplette Modernisierung: Wir analysieren Ihre Workloads, planen die Migration und setzen sie mit minimaler Ausfallzeit um.',
          },
          {
            title: 'DevOps & CI/CD-Pipelines',
            description:
              'Automatisierte Abläufe für Build, Test und Deployment. GitHub Actions, GitLab CI, Jenkins, vollständig in Ihren Entwicklungsprozess integriert.',
          },
          {
            title: 'Infrastructure as Code',
            description:
              'Die gesamte Infrastruktur in Terraform oder Pulumi definiert: versioniert, überprüfbar, reproduzierbar. Keine Server, die niemand mehr nachbauen kann.',
          },
          {
            title: 'Multi-Cloud & Hybrid Cloud',
            description:
              'AWS, Azure und GCP, oder ein hybrides Setup, das On-Premise-Systeme mit der Public Cloud verbindet. Wir planen die Architektur nach Ihren Rahmenbedingungen.',
          },
          {
            title: 'Monitoring & Observability',
            description:
              'Grafana-Dashboards, Prometheus-Metriken, Datadog APM: voller Einblick in Performance, Fehler und Infrastrukturkosten.',
          },
          {
            title: 'Sicherheit & Compliance',
            description:
              'Sicherheitspraktiken kompatibel mit ISO 27001. Schwachstellen-Scans, Verwaltung von Secrets, Netzwerkisolation und Audit-Logging.',
          },
        ],
        meta: {
          title: 'Cloud-Services & Cloud-Beratung Schweiz | Trident Software',
          description:
            'Cloud-Migration, DevOps und Managed Infrastructure für Schweizer Unternehmen. AWS, Azure, GCP. ISO 27001-kompatibel. Datenhaltung in der Schweiz möglich.',
        },
      },
      fr: {
        title: 'Services cloud',
        tagline: 'Migration, architecture et infrastructure gérée sur AWS, Azure et GCP',
        description:
          "De la stratégie de migration à l'infrastructure gérée 24 h/24 et 7 j/7 : nous concevons, déployons et exploitons des environnements cloud fiables, sûrs et économiques. Hébergement des données en Suisse possible.",
        features: [
          {
            title: 'Migration de vos workloads',
            description:
              "Lift-and-shift ou modernisation complète : nous évaluons vos workloads, planifions la migration et l'exécutons avec un minimum d'interruption.",
          },
          {
            title: 'DevOps et pipelines CI/CD',
            description:
              'Processus automatisés de build, de test et de déploiement. GitHub Actions, GitLab CI, Jenkins, entièrement intégrés à votre développement.',
          },
          {
            title: 'Infrastructure as Code',
            description:
              "Toute l'infrastructure décrite dans Terraform ou Pulumi : versionnée, relue, reproductible. Fini les serveurs configurés à la main que personne ne sait reconstruire.",
          },
          {
            title: 'Multi-cloud et cloud hybride',
            description:
              "AWS, Azure et GCP, ou une configuration hybride qui relie vos systèmes on-premise au cloud public. Nous concevons l'architecture selon vos contraintes.",
          },
          {
            title: 'Monitoring et observabilité',
            description:
              "Tableaux de bord Grafana, métriques Prometheus, Datadog APM : une visibilité complète sur les performances, les erreurs et les coûts d'infrastructure.",
          },
          {
            title: 'Sécurité et conformité',
            description:
              "Pratiques de sécurité compatibles ISO 27001. Analyse des vulnérabilités, gestion des secrets, isolation réseau et journalisation d'audit.",
          },
        ],
        meta: {
          title: 'Services et conseil cloud en Suisse | Trident Software',
          description:
            'Migration cloud, DevOps et infrastructure gérée pour entreprises suisses. AWS, Azure, GCP. Compatible ISO 27001. Données hébergées en Suisse possible.',
        },
      },
      it: {
        title: 'Servizi cloud',
        tagline: 'Migrazione, architettura e infrastruttura gestita su AWS, Azure e GCP',
        description:
          "Dalla strategia di migrazione all'infrastruttura gestita 24/7: progettiamo, implementiamo e gestiamo ambienti cloud affidabili, sicuri ed efficienti nei costi. Dati ospitati in Svizzera su richiesta.",
        features: [
          {
            title: 'Trasferimento dei workload nel cloud',
            description:
              'Lift-and-shift o modernizzazione completa: analizziamo i tuoi workload, pianifichiamo la migrazione e la eseguiamo con tempi di fermo minimi.',
          },
          {
            title: 'DevOps e pipeline CI/CD',
            description:
              'Flussi automatizzati di build, test e deployment. GitHub Actions, GitLab CI, Jenkins, completamente integrati nel tuo processo di sviluppo.',
          },
          {
            title: 'Infrastructure as Code',
            description:
              "Tutta l'infrastruttura definita in Terraform o Pulumi: versionata, verificabile, riproducibile. Niente più server configurati a mano che nessuno sa ricostruire.",
          },
          {
            title: 'Multi-cloud e cloud ibrido',
            description:
              "AWS, Azure e GCP, oppure una configurazione ibrida che collega i sistemi on-premise al cloud pubblico. Progettiamo l'architettura in base ai tuoi vincoli.",
          },
          {
            title: 'Monitoraggio e osservabilità',
            description:
              "Dashboard Grafana, metriche Prometheus, Datadog APM: piena visibilità su prestazioni, errori e costi dell'infrastruttura.",
          },
          {
            title: 'Sicurezza e conformità',
            description:
              'Pratiche di sicurezza compatibili con ISO 27001. Scansione delle vulnerabilità, gestione dei secret, isolamento di rete e log di audit.',
          },
        ],
        meta: {
          title: 'Servizi e consulenza cloud in Svizzera | Trident Software',
          description:
            'Migrazione cloud, DevOps e infrastruttura gestita per aziende svizzere. AWS, Azure, GCP. Compatibile ISO 27001. Dati in Svizzera su richiesta.',
        },
      },
    },
  },
  {
    slug: 'social-networks',
    techStack: [
      'React',
      'React Native',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'WebSockets',
      'TypeScript',
      'AWS',
      'Docker',
      'Kubernetes',
    ],
    content: {
      en: {
        title: 'Social networks & community platforms',
        tagline: 'Scalable platforms for communities, marketplaces, and social experiences',
        description:
          'We build custom social platforms, from professional communities and B2B networks to consumer apps with user-generated content. Real-time messaging, content moderation and privacy are designed in from the start.',
        features: [
          {
            title: 'Real-time feeds & messaging',
            description:
              'WebSocket-based live feeds, direct messaging, and group channels that scale to millions of concurrent users.',
          },
          {
            title: 'User profiles & social graph',
            description:
              'Follow, connect and recommend: graph-based relationships with flexible permissions for public and private networks.',
          },
          {
            title: 'Content moderation',
            description:
              'AI-assisted moderation pipelines, reporting workflows, and admin dashboards to keep communities safe and compliant.',
          },
          {
            title: 'Privacy & GDPR / revFADP',
            description:
              'Data minimisation, consent management, right-to-erasure workflows, and full compliance with Swiss revFADP and EU GDPR.',
          },
          {
            title: 'Notifications & engagement',
            description:
              'Push, email, and in-app notification systems with preference management and A/B-tested engagement flows.',
          },
          {
            title: 'Analytics & growth tooling',
            description:
              'Retention metrics, cohort analysis and funnel tracking, built in so your growth team has the data it needs.',
          },
        ],
        meta: {
          title: 'Social Network & Community Platform Development — Trident Software',
          description:
            'Custom social platforms and community networks for Swiss businesses. Real-time, GDPR-compliant, scalable. From MVP to production.',
        },
      },
      de: {
        title: 'Soziale Netzwerke & Community-Plattformen',
        tagline: 'Skalierbare Plattformen für Communities, Marktplätze und soziale Erlebnisse',
        description:
          'Wir bauen individuelle soziale Plattformen, von Fach-Communities und B2B-Netzwerken bis zu Consumer-Apps mit nutzergenerierten Inhalten. Echtzeit-Messaging, Moderation von Inhalten und Datenschutz als Grundprinzip der Architektur.',
        features: [
          {
            title: 'Echtzeit-Feeds & Messaging',
            description:
              'Live-Feeds auf WebSocket-Basis, Direktnachrichten und Gruppenkanäle, die bis zu Millionen gleichzeitiger Nutzer skalieren.',
          },
          {
            title: 'Nutzerprofile & Social Graph',
            description:
              'Folgen, vernetzen, empfehlen: graphbasierte Beziehungen mit flexiblen Berechtigungen für öffentliche und private Netzwerke.',
          },
          {
            title: 'Moderation von Inhalten',
            description:
              'KI-gestützte Moderations-Pipelines, Meldeprozesse und Admin-Dashboards, damit Communities sicher und regelkonform bleiben.',
          },
          {
            title: 'Datenschutz, DSGVO & nDSG',
            description:
              'Datenminimierung, Einwilligungsmanagement, Prozesse für das Recht auf Löschung und volle Konformität mit dem Schweizer nDSG und der EU-DSGVO.',
          },
          {
            title: 'Benachrichtigungen & Nutzerbindung',
            description:
              'Push-, E-Mail- und In-App-Benachrichtigungen mit Einstellungsverwaltung und per A/B-Test optimierten Abläufen.',
          },
          {
            title: 'Analytics & Wachstumswerkzeuge',
            description:
              'Retention-Kennzahlen, Kohortenanalyse, Funnel-Tracking: direkt in der Plattform, damit Ihr Growth-Team die nötigen Daten hat.',
          },
        ],
        meta: {
          title: 'Community-Plattform entwickeln lassen | Trident Software',
          description:
            'Individuelle soziale Plattformen und Community-Netzwerke für Schweizer Unternehmen. Echtzeit, DSGVO-konform, skalierbar. Vom MVP bis zur Produktion.',
        },
      },
      fr: {
        title: 'Réseaux sociaux et plateformes communautaires',
        tagline: 'Des plateformes évolutives pour communautés, marketplaces et expériences sociales',
        description:
          'Nous créons des plateformes sociales sur mesure, des communautés professionnelles et réseaux B2B aux applications grand public avec contenu généré par les utilisateurs. Messagerie en temps réel, modération des contenus et protection de la vie privée intégrée dès la conception.',
        features: [
          {
            title: "Fils d'actualité et messagerie en temps réel",
            description:
              "Fils en direct basés sur WebSocket, messages privés et canaux de groupe qui tiennent la charge jusqu'à des millions d'utilisateurs simultanés.",
          },
          {
            title: 'Profils utilisateurs et graphe social',
            description:
              "Suivre, se connecter, recommander : relations basées sur un graphe, avec des modèles d'autorisations flexibles pour réseaux publics et privés.",
          },
          {
            title: 'Modération des contenus',
            description:
              "Pipelines de modération assistés par l'IA, processus de signalement et tableaux de bord d'administration pour des communautés sûres et conformes.",
          },
          {
            title: 'Vie privée, RGPD et nLPD',
            description:
              "Minimisation des données, gestion du consentement, processus de droit à l'effacement et conformité complète avec la nLPD suisse et le RGPD européen.",
          },
          {
            title: 'Notifications et engagement',
            description:
              "Notifications push, e-mail et in-app avec gestion des préférences et parcours d'engagement validés par tests A/B.",
          },
          {
            title: 'Statistiques et outils de croissance',
            description:
              'Métriques de rétention, analyse de cohortes, suivi des entonnoirs : intégrés à la plateforme pour que votre équipe growth dispose des données utiles.',
          },
        ],
        meta: {
          title: 'Développement de plateforme communautaire | Trident Software',
          description:
            'Plateformes sociales et réseaux communautaires sur mesure pour entreprises suisses. Temps réel, conformes au RGPD, évolutifs. Du MVP à la production.',
        },
      },
      it: {
        title: 'Social network e piattaforme community',
        tagline: 'Piattaforme scalabili per community, marketplace ed esperienze social',
        description:
          "Realizziamo piattaforme social su misura, dalle community professionali e reti B2B alle app consumer con contenuti generati dagli utenti. Messaggistica in tempo reale, moderazione dei contenuti e privacy integrata nell'architettura fin dall'inizio.",
        features: [
          {
            title: 'Feed e messaggistica in tempo reale',
            description:
              'Feed live basati su WebSocket, messaggi diretti e canali di gruppo che reggono milioni di utenti contemporanei.',
          },
          {
            title: 'Profili utente e grafo sociale',
            description:
              'Segui, collegati, consiglia: relazioni basate su grafo con modelli di permessi flessibili per reti pubbliche e private.',
          },
          {
            title: 'Moderazione dei contenuti',
            description:
              "Pipeline di moderazione assistite dall'IA, processi di segnalazione e dashboard di amministrazione per community sicure e conformi.",
          },
          {
            title: 'Privacy, GDPR e nLPD',
            description:
              'Minimizzazione dei dati, gestione del consenso, processi per il diritto alla cancellazione e piena conformità alla nLPD svizzera e al GDPR europeo.',
          },
          {
            title: 'Notifiche e coinvolgimento',
            description:
              'Notifiche push, e-mail e in-app con gestione delle preferenze e flussi di coinvolgimento ottimizzati con test A/B.',
          },
          {
            title: 'Statistiche e strumenti di crescita',
            description:
              'Metriche di fidelizzazione, analisi per coorti, monitoraggio dei funnel: integrati nella piattaforma, così il tuo team growth ha i dati che gli servono.',
          },
        ],
        meta: {
          title: 'Sviluppo piattaforme community | Trident Software',
          description:
            'Piattaforme social e community su misura per aziende svizzere. Tempo reale, conformi al GDPR, scalabili. Dal MVP alla produzione.',
        },
      },
    },
  },
  {
    slug: 'iot',
    techStack: [
      'C / C++',
      'Python',
      'RTOS',
      'MQTT',
      'AWS IoT',
      'Azure IoT Hub',
      'InfluxDB',
      'Docker',
      'Kubernetes',
      'Grafana',
    ],
    content: {
      en: {
        title: 'IoT & embedded systems',
        tagline: 'Connected devices, firmware, and real-time data pipelines',
        description:
          'We build IoT systems for automotive, healthcare, water management and industrial automation, from device firmware to cloud integration. ISO 21434 automotive compliance and medical-grade software validation available.',
        features: [
          {
            title: 'Firmware & embedded software',
            description:
              'Embedded development from requirements and architecture to implementation, testing and deployment, in C, C++ and RTOS.',
          },
          {
            title: 'IoT device integration',
            description:
              'Connecting sensors, actuators, and edge devices to cloud backends via MQTT, CoAP, or custom protocols. Security and power optimisation built in.',
          },
          {
            title: 'Real-time data pipelines',
            description:
              'High-frequency sensor data ingestion, processing, and storage. Time-series databases, stream processing, and live dashboards.',
          },
          {
            title: 'Edge & cloud architecture',
            description:
              'Edge computing for latency-sensitive processing, with cloud sync for analytics, storage, and remote management.',
          },
          {
            title: 'Regulatory compliance',
            description:
              'ISO 21434 for automotive cybersecurity, IEC 62443 for industrial, and medical device software validation (IEC 62304) where needed.',
          },
          {
            title: 'Reliability testing',
            description:
              'Hardware-in-the-loop testing, long-duration stress tests, failure mode analysis, and over-the-air update systems.',
          },
        ],
        meta: {
          title: 'IoT & Embedded Systems Development Switzerland — Trident Software',
          description:
            'IoT solutions and firmware development for automotive, healthcare, and industrial sectors. ISO 21434, medical-grade compliance. Based in Sion, Switzerland.',
        },
      },
      de: {
        title: 'IoT & Embedded Systems',
        tagline: 'Vernetzte Geräte, Firmware und Datenpipelines in Echtzeit',
        description:
          'Von der Geräte-Firmware bis zur Cloud-Anbindung: Wir entwickeln IoT-Lösungen für Automobilbranche, Gesundheitswesen, Wasserwirtschaft und Industrieautomation. Konformität mit ISO 21434 für die Automobilbranche und Validierung von Software nach Medizinstandard möglich.',
        features: [
          {
            title: 'Firmware & Embedded-Software',
            description:
              'Embedded-Entwicklung über den ganzen Zyklus: Anforderungen, Architektur, Umsetzung, Tests und Deployment. Know-how in C, C++ und RTOS.',
          },
          {
            title: 'Anbindung von IoT-Geräten',
            description:
              'Sensoren, Aktoren und Edge-Geräte per MQTT, CoAP oder eigenen Protokollen mit Cloud-Backends verbinden. Sicherheit und Energieoptimierung inklusive.',
          },
          {
            title: 'Datenpipelines in Echtzeit',
            description:
              'Erfassung, Verarbeitung und Speicherung hochfrequenter Sensordaten. Zeitreihen-Datenbanken, Stream Processing und Live-Dashboards.',
          },
          {
            title: 'Edge- & Cloud-Architektur',
            description:
              'Edge Computing für latenzkritische Verarbeitung, mit Cloud-Synchronisation für Analysen, Speicherung und Fernverwaltung.',
          },
          {
            title: 'Regulatorische Konformität',
            description:
              'ISO 21434 für Cybersecurity im Fahrzeug, IEC 62443 für die Industrie und Validierung von Medizinprodukte-Software (IEC 62304), wo erforderlich.',
          },
          {
            title: 'Zuverlässigkeitstests',
            description:
              'Hardware-in-the-Loop-Tests, Langzeit-Stresstests, Fehlermodusanalyse und Systeme für Over-the-Air-Updates.',
          },
        ],
        meta: {
          title: 'IoT- & Embedded-Entwicklung Schweiz | Trident Software',
          description:
            'IoT-Lösungen und Firmware für Automobilbranche, Gesundheitswesen und Industrie. ISO 21434, Konformität nach Medizinstandard. Mit Sitz in Sion.',
        },
      },
      fr: {
        title: 'IoT et systèmes embarqués',
        tagline: 'Objets connectés, firmware et flux de données en temps réel',
        description:
          "Du firmware des appareils à l'intégration cloud, nous développons des solutions IoT pour l'automobile, la santé, la gestion de l'eau et l'automatisation industrielle. Conformité ISO 21434 pour l'automobile et validation logicielle de niveau médical disponibles.",
        features: [
          {
            title: 'Firmware et logiciel embarqué',
            description:
              'Développement embarqué sur tout le cycle : exigences, architecture, réalisation, tests et déploiement. Expertise en C, C++ et RTOS.',
          },
          {
            title: "Intégration d'objets IoT",
            description:
              'Connexion de capteurs, actionneurs et équipements edge aux backends cloud via MQTT, CoAP ou des protocoles spécifiques. Sécurité et optimisation énergétique incluses.',
          },
          {
            title: 'Flux de données en temps réel',
            description:
              'Collecte, traitement et stockage de données de capteurs à haute fréquence. Bases de données de séries temporelles, traitement de flux et tableaux de bord en direct.',
          },
          {
            title: 'Architecture edge et cloud',
            description:
              "Edge computing pour les traitements sensibles à la latence, avec synchronisation cloud pour l'analyse, le stockage et la gestion à distance.",
          },
          {
            title: 'Conformité réglementaire',
            description:
              "ISO 21434 pour la cybersécurité automobile, IEC 62443 pour l'industrie et validation de logiciels de dispositifs médicaux (IEC 62304) si nécessaire.",
          },
          {
            title: 'Tests de fiabilité',
            description:
              "Tests hardware-in-the-loop, tests d'endurance de longue durée, analyse des modes de défaillance et systèmes de mise à jour over-the-air.",
          },
        ],
        meta: {
          title: 'IoT et systèmes embarqués en Suisse | Trident Software',
          description:
            "Solutions IoT et firmware pour l'automobile, la santé et l'industrie. ISO 21434, conformité de niveau médical. Basés à Sion, en Suisse.",
        },
      },
      it: {
        title: 'IoT e sistemi embedded',
        tagline: 'Dispositivi connessi, firmware e flussi di dati in tempo reale',
        description:
          "Dal firmware dei dispositivi all'integrazione cloud: realizziamo soluzioni IoT per automotive, sanità, gestione delle acque e automazione industriale. Disponibili conformità ISO 21434 per l'automotive e validazione del software di livello medicale.",
        features: [
          {
            title: 'Firmware e software embedded',
            description:
              "Sviluppo embedded sull'intero ciclo: requisiti, architettura, implementazione, test e rilascio. Competenze in C, C++ e RTOS.",
          },
          {
            title: 'Integrazione di dispositivi IoT',
            description:
              'Colleghiamo sensori, attuatori e dispositivi edge ai backend cloud tramite MQTT, CoAP o protocolli personalizzati. Sicurezza e ottimizzazione dei consumi incluse.',
          },
          {
            title: 'Flussi di dati in tempo reale',
            description:
              'Acquisizione, elaborazione e archiviazione di dati dei sensori ad alta frequenza. Database time-series, stream processing e dashboard live.',
          },
          {
            title: 'Architettura edge e cloud',
            description:
              'Edge computing per le elaborazioni sensibili alla latenza, con sincronizzazione cloud per analisi, archiviazione e gestione remota.',
          },
          {
            title: 'Conformità normativa',
            description:
              "ISO 21434 per la cybersecurity automotive, IEC 62443 per l'industria e validazione del software per dispositivi medici (IEC 62304) dove necessario.",
          },
          {
            title: 'Test di affidabilità',
            description:
              'Test hardware-in-the-loop, stress test di lunga durata, analisi dei modi di guasto e sistemi di aggiornamento over-the-air.',
          },
        ],
        meta: {
          title: 'Sviluppo IoT e sistemi embedded Svizzera | Trident Software',
          description:
            'Soluzioni IoT e sviluppo firmware per automotive, sanità e industria. ISO 21434, conformità di livello medicale. Con sede a Sion, Svizzera.',
        },
      },
    },
  },
]

const localize = (r: SolutionRecord, locale: string): SolutionData => {
  const { content, ...rest } = r
  return { ...rest, ...pick(content, locale) }
}

export function getSolutions(locale: string): SolutionData[] {
  return records.map((r) => localize(r, locale))
}

export function getSolutionBySlug(slug: string, locale: string): SolutionData | undefined {
  const r = records.find((x) => x.slug === slug)
  return r && localize(r, locale)
}

export function getSolutionSlugs(): string[] {
  return records.map((x) => x.slug)
}

export function getSolutionLocales(slug: string) {
  const r = records.find((x) => x.slug === slug)
  return r ? localesOf(r.content) : []
}
