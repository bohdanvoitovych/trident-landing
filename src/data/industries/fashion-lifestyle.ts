import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'fashion-lifestyle',
  icon: 'shirt',
  techStack: ['Next.js', 'Shopify', 'Sanity', 'PostgreSQL', 'Cloudinary', 'Vercel', 'OpenAI'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ai-services'],
  content: {
    en: {
      title: 'Fashion & lifestyle',
      tagline: 'E-commerce for fashion and lifestyle brands',
      description:
        'E-commerce platforms, product configurators, influencer management tools, and AI-powered creative assistants for fashion brands and lifestyle companies.',
      challenges: [
        {
          title: 'Visual complexity',
          description: 'High-resolution product photography, 360° views, and AR try-on experiences.',
        },
        {
          title: 'Seasonal demand',
          description: 'Traffic spikes at launches and sales, without over-provisioning all year.',
        },
        {
          title: 'Global sizing',
          description: 'Size conversion and fit recommendation across markets.',
        },
      ],
      solutions: [
        {
          title: 'Custom storefronts',
          description: 'Headless commerce with editorial-quality design and performance.',
        },
        {
          title: 'Product configurators',
          description: 'Custom jewellery, apparel and accessory configurators.',
        },
        {
          title: 'AI creative tools',
          description: 'Product descriptions, lookbooks and copy drafted with LLMs.',
        },
        {
          title: 'Influencer platforms',
          description: 'Tracking, commission management, and UGC aggregation tools.',
        },
      ],
      meta: {
        title: 'Fashion & lifestyle software | Trident Software',
        description:
          'Fashion tech software: headless storefronts, product configurators, AI creative tools, influencer platforms. Swiss company, engineering team since 2009.',
      },
    },
    de: {
      title: 'Mode & Lifestyle',
      tagline: 'Technologie für Marken mit Stil',
      description:
        'E-Commerce-Plattformen, Produktkonfiguratoren, Tools für das Influencer-Management und KI-gestützte Kreativassistenten für Modemarken und Lifestyle-Unternehmen.',
      challenges: [
        {
          title: 'Anspruchsvolle Bildwelten',
          description: 'Hochauflösende Produktfotos, 360°-Ansichten und virtuelle Anprobe mit AR.',
        },
        {
          title: 'Saisonale Spitzen',
          description: 'Ansturm bei Launches und Sales abfangen, ohne das ganze Jahr Überkapazität zu bezahlen.',
        },
        {
          title: 'Grössen weltweit',
          description: 'Grössenumrechnung und Passformempfehlungen für verschiedene Märkte.',
        },
      ],
      solutions: [
        {
          title: 'Massgeschneiderte Shops',
          description: 'Headless Commerce mit Design auf Magazin-Niveau und hoher Performance.',
        },
        {
          title: 'Konfiguratoren für Schmuck & Mode',
          description: 'Tools zur individuellen Gestaltung von Schmuck, Kleidung und Accessoires.',
        },
        {
          title: 'KI-Kreativtools',
          description: 'LLM-gestützte Produktbeschreibungen, Lookbooks und Werbetexte.',
        },
        {
          title: 'Influencer-Plattformen',
          description: 'Tools für Tracking, Provisionsverwaltung und das Bündeln von UGC.',
        },
      ],
      meta: {
        title: 'Software für Mode & Lifestyle | Trident Software',
        description:
          'Fashion-Tech-Software: Headless-Shops, Produktkonfiguratoren, KI-Kreativtools, Influencer-Plattformen. Schweizer Unternehmen, Engineering-Team seit 2009.',
      },
    },
    fr: {
      title: 'Mode & Lifestyle',
      tagline: 'De la technologie pour les marques qui ont du goût',
      description:
        'Plateformes e-commerce, configurateurs de produits, outils de gestion des influenceurs et assistants créatifs par IA pour les marques de mode et les entreprises lifestyle.',
      challenges: [
        {
          title: 'Exigence visuelle',
          description: 'Photos produits haute résolution, vues à 360° et essayage virtuel en réalité augmentée.',
        },
        {
          title: 'Pics saisonniers',
          description:
            "Encaisser les pics de trafic des lancements et des soldes sans surdimensionner l'infrastructure toute l'année.",
        },
        {
          title: 'Tailles internationales',
          description: 'Conversion des tailles et conseils de taille adaptés à chaque marché.',
        },
      ],
      solutions: [
        {
          title: 'E-shops sur mesure',
          description: "Commerce headless au design digne d'un magazine, avec de hautes performances.",
        },
        {
          title: 'Configurateurs bijoux & mode',
          description: 'Outils de personnalisation pour bijoux, vêtements et accessoires.',
        },
        {
          title: 'Outils créatifs IA',
          description: "Descriptions produits, lookbooks et textes générés à l'aide de LLM.",
        },
        {
          title: "Plateformes d'influence",
          description: "Outils de suivi, de gestion des commissions et d'agrégation d'UGC.",
        },
      ],
      meta: {
        title: 'Logiciels mode & lifestyle | Trident Software',
        description:
          "Logiciels fashion tech : boutiques headless, configurateurs de produits, outils créatifs IA, plateformes d'influence. Entreprise suisse, équipe d'ingénierie depuis 2009.",
      },
    },
    it: {
      title: 'Moda & Lifestyle',
      tagline: 'Tecnologia per brand con gusto',
      description:
        'Piattaforme e-commerce, configuratori di prodotto, strumenti di gestione degli influencer e assistenti creativi con IA per brand di moda e aziende lifestyle.',
      challenges: [
        {
          title: 'Complessità visiva',
          description: 'Foto di prodotto ad alta risoluzione, viste a 360° e prova virtuale in realtà aumentata.',
        },
        {
          title: 'Picchi stagionali',
          description: "Reggere i picchi di traffico di lanci e saldi senza sovradimensionare tutto l'anno.",
        },
        {
          title: 'Taglie nel mondo',
          description: 'Conversione delle taglie e consigli sulla vestibilità per ogni mercato.',
        },
      ],
      solutions: [
        {
          title: 'Shop online su misura',
          description: 'Headless commerce con un design da rivista e prestazioni elevate.',
        },
        {
          title: 'Configuratori per gioielli e moda',
          description: 'Strumenti di personalizzazione per gioielli, abbigliamento e accessori.',
        },
        {
          title: 'Strumenti creativi con IA',
          description: 'Descrizioni di prodotto, lookbook e testi generati con LLM.',
        },
        {
          title: 'Piattaforme per influencer',
          description: 'Strumenti per tracciamento, gestione delle commissioni e raccolta di UGC.',
        },
      ],
      meta: {
        title: 'Software per moda & lifestyle | Trident Software',
        description:
          'Software fashion tech: shop headless, configuratori di prodotto, strumenti creativi con IA, piattaforme per influencer. Azienda svizzera, team di ingegneria dal 2009.',
      },
    },
  },
}

export default record
