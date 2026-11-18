import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'diy-tools',
  icon: 'wrench',
  techStack: ['React', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'Docker', 'AWS'],
  relatedCases: [],
  relatedServices: ['software-engineering'],
  content: {
    en: {
      title: 'DIY & Tools',
      tagline: 'E-commerce and product intelligence for tool retailers',
      description:
        'Product catalogue management, compatibility finders, B2B dealer portals, and inventory systems for power tool brands, hardware retailers, and professional tool distributors.',
      challenges: [
        {
          title: 'Complex product catalogues',
          description:
            'Thousands of SKUs with detailed technical specs, compatibility matrices, and accessory relationships.',
        },
        {
          title: 'Pro vs consumer segmentation',
          description:
            'Serving both trade professionals (bulk pricing, invoicing) and retail consumers from a single platform.',
        },
        {
          title: 'Part finder and compatibility',
          description: 'Helping customers find the right part, blade, or battery for their specific model.',
        },
      ],
      solutions: [
        {
          title: 'Product catalogue & PIM',
          description: 'Product data management with specs, compatibility tables and media.',
        },
        {
          title: 'B2B dealer portal',
          description: 'Trade pricing, account management, bulk ordering, and stock visibility.',
        },
        {
          title: 'Compatibility finder',
          description: 'Tool-to-accessory matching engine with guided selection.',
        },
        {
          title: 'Inventory management',
          description: 'Multi-warehouse stock control with reorder point automation.',
        },
      ],
      meta: {
        title: 'DIY & tools software development | Trident Software',
        description:
          'DIY and tools software: product catalogues, B2B dealer portals, compatibility finders, inventory systems. Swiss engineering.',
      },
    },
    de: {
      title: 'Heimwerken & Werkzeuge',
      tagline: 'E-Commerce und Produktdaten für den Werkzeughandel',
      description:
        'Verwaltung von Produktkatalogen, Kompatibilitätsfinder, B2B-Händlerportale und Lagersysteme für Elektrowerkzeugmarken, Baumärkte und Fachhändler für Profiwerkzeug.',
      challenges: [
        {
          title: 'Umfangreiche Produktkataloge',
          description:
            'Tausende Artikel mit detaillierten technischen Daten, Kompatibilitätsmatrizen und Zubehörbeziehungen.',
        },
        {
          title: 'Profis und Privatkunden zugleich',
          description:
            'Handwerksbetriebe (Mengenpreise, Rechnung) und Privatkundschaft über eine einzige Plattform bedienen.',
        },
        {
          title: 'Das passende Ersatzteil finden',
          description:
            'Kundinnen und Kunden helfen, das richtige Teil, Sägeblatt oder den richtigen Akku für ihr Modell zu finden.',
        },
      ],
      solutions: [
        {
          title: 'Produktkatalog & PIM',
          description: 'Umfassende Produktdatenverwaltung mit technischen Daten, Kompatibilitätstabellen und Medien.',
        },
        {
          title: 'B2B-Händlerportal',
          description: 'Händlerpreise, Kontoverwaltung, Grossbestellungen und Einblick in den Lagerbestand.',
        },
        {
          title: 'Kompatibilitätsfinder',
          description: 'Zuordnung von Werkzeug zu Zubehör mit geführter Auswahl.',
        },
        {
          title: 'Lagerverwaltung',
          description: 'Bestandsführung über mehrere Lager mit automatischen Meldebeständen.',
        },
      ],
      meta: {
        title: 'Software für Heimwerk- & Werkzeughandel | Trident Software',
        description:
          'Software für den Werkzeughandel: Produktkataloge, B2B-Händlerportale, Kompatibilitätsfinder, Lagersysteme. Entwickelt in der Schweiz.',
      },
    },
    fr: {
      title: 'Bricolage & outillage',
      tagline: "E-commerce et données produit pour les vendeurs d'outillage",
      description:
        "Gestion de catalogues produits, outils de recherche de compatibilité, portails revendeurs B2B et systèmes de stock pour les marques d'outillage électroportatif, les magasins de bricolage et les distributeurs d'outillage professionnel.",
      challenges: [
        {
          title: 'Des catalogues touffus',
          description:
            'Des milliers de références avec fiches techniques détaillées, matrices de compatibilité et liens vers les accessoires.',
        },
        {
          title: 'Pros et particuliers sur un même site',
          description:
            'Servir les artisans (prix de gros, facturation) et les particuliers depuis une seule plateforme.',
        },
        {
          title: 'Trouver la bonne pièce',
          description: 'Aider le client à trouver la pièce, la lame ou la batterie qui correspond à son modèle.',
        },
      ],
      solutions: [
        {
          title: 'Catalogue produits & PIM',
          description:
            'Gestion complète des données produit avec caractéristiques, tableaux de compatibilité et médias.',
        },
        {
          title: 'Portail revendeurs B2B',
          description: 'Prix revendeurs, gestion des comptes, commandes en volume et visibilité sur les stocks.',
        },
        {
          title: 'Moteur de compatibilité',
          description: 'Association outil-accessoire avec sélection guidée.',
        },
        {
          title: 'Gestion des stocks',
          description: 'Gestion multi-entrepôts avec réapprovisionnement automatique au point de commande.',
        },
      ],
      meta: {
        title: 'Logiciel bricolage & outillage | Trident Software',
        description:
          "Logiciels pour l'outillage : catalogues produits, portails revendeurs B2B, moteurs de compatibilité, gestion des stocks. Ingénierie suisse.",
      },
    },
    it: {
      title: 'Fai da te & utensili',
      tagline: 'E-commerce e dati di prodotto per chi vende utensili',
      description:
        'Gestione dei cataloghi prodotto, ricerca di compatibilità, portali B2B per rivenditori e sistemi di magazzino per marchi di elettroutensili, negozi di ferramenta e distributori di utensili professionali.',
      challenges: [
        {
          title: 'Cataloghi sterminati',
          description:
            'Migliaia di articoli con schede tecniche dettagliate, matrici di compatibilità e legami con gli accessori.',
        },
        {
          title: 'Professionisti e privati insieme',
          description: "Servire artigiani (prezzi a volume, fatturazione) e clienti privati da un'unica piattaforma.",
        },
        {
          title: 'Il ricambio giusto',
          description: 'Aiutare i clienti a trovare il pezzo, la lama o la batteria adatti al loro modello.',
        },
      ],
      solutions: [
        {
          title: 'Catalogo prodotti & PIM',
          description:
            'Gestione completa dei dati di prodotto con specifiche, tabelle di compatibilità e contenuti multimediali.',
        },
        {
          title: 'Portale B2B per rivenditori',
          description:
            "Prezzi per rivenditori, gestione degli account, ordini all'ingrosso e visibilità sulle giacenze.",
        },
        {
          title: 'Ricerca compatibilità',
          description: 'Motore che abbina utensili e accessori con una selezione guidata.',
        },
        {
          title: 'Gestione del magazzino',
          description: 'Controllo delle scorte su più magazzini con riordino automatico al punto di riordino.',
        },
      ],
      meta: {
        title: 'Software per fai da te & utensili | Trident Software',
        description:
          'Software per il settore utensili: cataloghi prodotto, portali B2B per rivenditori, ricerca compatibilità, magazzino. Ingegneria svizzera.',
      },
    },
  },
}

export default record
