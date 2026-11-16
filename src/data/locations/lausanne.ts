import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'lausanne',
  relatedServices: ['software-engineering', 'cto-as-a-service', 'ai-services'],
  relatedCases: [],
  content: {
    en: {
      name: 'Lausanne',
      region: 'Canton of Vaud',
      tagline: "Startup-grade engineering for Lausanne's innovation ecosystem",
      description:
        "EPFL spinoffs, gaming studios (Ubisoft), the Olympic capital, and a thriving startup scene make Lausanne one of Europe's most innovative cities. We partner with Lausanne startups and scale-ups to build MVPs, scale engineering teams, and deliver production-ready products fast.",
      keyIndustries: ['Startups & Scale-ups', 'Gaming', 'Sports Tech', 'EdTech', 'Hospitality Tech'],
      highlights: [
        {
          title: 'EPFL-calibre engineering',
          description:
            "Technically rigorous software from first principles — not just framework glue. Used by Lausanne's deep-tech startups.",
        },
        {
          title: 'MVP to product',
          description:
            "From validated idea to production product in 8–16 weeks. We've done it for Lausanne founders raising seed and Series A.",
        },
        {
          title: 'Sports & events technology',
          description:
            "Event management platforms, ticketing systems, and fan engagement apps for Lausanne's sports organizations and the Olympic ecosystem.",
        },
      ],
      meta: {
        title: 'Software Development Lausanne | Startup Engineering | Trident Software',
        description:
          'MVP development, startup engineering, and CTO-as-a-service for Lausanne companies. EPFL ecosystem partner. Fast delivery, production quality.',
      },
    },
    de: {
      name: 'Lausanne',
      region: 'Kanton Waadt',
      tagline: 'Startup-Engineering für das Innovationsökosystem von Lausanne',
      description:
        'EPFL-Spin-offs, Gaming-Studios wie Ubisoft, die Olympische Hauptstadt und eine lebendige Startup-Szene machen Lausanne zu einer der innovativsten Städte Europas. Wir arbeiten mit Startups und Scale-ups aus Lausanne zusammen: Wir bauen MVPs, verstärken Entwicklungsteams und liefern schnell produktionsreife Produkte.',
      keyIndustries: ['Startups & Scale-ups', 'Gaming', 'Sports Tech', 'EdTech', 'Hotellerie-Tech'],
      highlights: [
        {
          title: 'Engineering auf EPFL-Niveau',
          description:
            'Technisch fundierte Software, von Grund auf durchdacht statt nur Frameworks zusammengesteckt. Im Einsatz bei Deep-Tech-Startups aus Lausanne.',
        },
        {
          title: 'Vom MVP zum Produkt',
          description:
            'Von der validierten Idee zum produktiven Produkt in 8–16 Wochen. Das haben wir bereits für Gründer aus Lausanne in Seed- und Series-A-Runden umgesetzt.',
        },
        {
          title: 'Technologie für Sport und Events',
          description:
            'Eventmanagement-Plattformen, Ticketing-Systeme und Fan-Apps für Sportorganisationen in Lausanne und das olympische Umfeld.',
        },
      ],
      meta: {
        title: 'Softwareentwicklung Lausanne | Startup-Engineering | Trident',
        description:
          'MVP-Entwicklung, Startup-Engineering und CTO-as-a-Service für Unternehmen in Lausanne. Partner im EPFL-Ökosystem. Schnell geliefert, produktionsreif.',
      },
    },
    fr: {
      name: 'Lausanne',
      region: 'Canton de Vaud',
      tagline: "Une ingénierie digne d'une startup pour l'écosystème d'innovation lausannois",
      description:
        "Spin-offs de l'EPFL, studios de jeux vidéo (Ubisoft), capitale olympique et scène startup foisonnante : Lausanne compte parmi les villes les plus innovantes d'Europe. Nous accompagnons les startups et scale-ups lausannoises pour construire des MVP, renforcer leurs équipes techniques et livrer rapidement des produits prêts pour la production.",
      keyIndustries: ['Startups & scale-ups', 'Jeux vidéo', 'Sports Tech', 'EdTech', "Tech pour l'hôtellerie"],
      highlights: [
        {
          title: "Une ingénierie à la hauteur de l'EPFL",
          description:
            "Des logiciels techniquement rigoureux, pensés à partir des fondamentaux plutôt qu'un simple assemblage de frameworks. Utilisés par les startups deep tech de Lausanne.",
        },
        {
          title: 'Du MVP au produit',
          description:
            "De l'idée validée au produit en production en 8 à 16 semaines. Nous l'avons fait pour des fondateurs lausannois en levée de fonds seed et série A.",
        },
        {
          title: "Technologies pour le sport et l'événementiel",
          description:
            "Plateformes de gestion d'événements, systèmes de billetterie et applications d'engagement des fans pour les organisations sportives lausannoises et l'écosystème olympique.",
        },
      ],
      meta: {
        title: 'Développement logiciel Lausanne | Startups | Trident Software',
        description:
          "Développement de MVP, ingénierie pour startups et CTO à temps partagé pour les entreprises lausannoises. Partenaire de l'écosystème EPFL. Livraison rapide.",
      },
    },
    it: {
      name: 'Losanna',
      region: 'Cantone di Vaud',
      tagline: "Ingegneria da startup per l'ecosistema dell'innovazione di Losanna",
      description:
        "Spin-off dell'EPFL, studi di videogiochi (Ubisoft), la capitale olimpica e una scena startup vivacissima fanno di Losanna una delle città più innovative d'Europa. Affianchiamo startup e scale-up di Losanna per costruire MVP, far crescere i team di sviluppo e consegnare in tempi rapidi prodotti pronti per la produzione.",
      keyIndustries: ['Startup & scale-up', 'Videogiochi', 'Sports Tech', 'EdTech', "Tecnologia per l'ospitalità"],
      highlights: [
        {
          title: "Ingegneria all'altezza dell'EPFL",
          description:
            'Software tecnicamente rigoroso, costruito partendo dai fondamenti e non solo incollando framework. Lo usano le startup deep tech di Losanna.',
        },
        {
          title: "Dall'MVP al prodotto",
          description:
            "Dall'idea validata al prodotto in produzione in 8–16 settimane. L'abbiamo già fatto per founder di Losanna impegnati in round seed e Series A.",
        },
        {
          title: 'Tecnologia per sport ed eventi',
          description:
            "Piattaforme di gestione eventi, sistemi di ticketing e app di coinvolgimento dei fan per le organizzazioni sportive di Losanna e l'ecosistema olimpico.",
        },
      ],
      meta: {
        title: 'Sviluppo software Losanna | Startup engineering | Trident',
        description:
          "Sviluppo di MVP, ingegneria per startup e CTO-as-a-service per le aziende di Losanna. Partner dell'ecosistema EPFL. Consegne rapide, qualità da produzione.",
      },
    },
  },
}

export default record
