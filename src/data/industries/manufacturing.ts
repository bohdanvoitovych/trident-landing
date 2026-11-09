import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'manufacturing',
  icon: 'factory',
  techStack: [],
  relatedCases: ['warranty-control-component-maker'],
  relatedServices: ['embedded-and-iot', 'ai-services'],
  content: {
    en: {
      title: 'Manufacturing',
      tagline: 'From paying for every claim to measuring the cause, and selling the measurement.',
      description:
        'Wherever a manufacturer carries a warranty obligation for a product that fails because of how it is used, in conditions the manufacturer cannot see. The first step is a free 45-minute audit.',
      challenges: [
        {
          title: 'Warranty cost was structural, not accidental',
          description:
            'Warranty service was costing 1.37 % of revenue, above the average published for appliance and HVAC manufacturers. Field analysis put as much as 85 % of failures down to water rather than manufacturing defects. The contract requires water within specification, but nothing measured it, so every claim got paid: there were no grounds to refuse a bad-water repair.',
        },
        {
          title: 'Precondition',
          description:
            'A component set that can be measured in a circuit, OEM customers willing to have the device fitted, and a service network that will work in the portal. This only becomes a revenue line if the machine manufacturers see the warranty evidence as their instrument too.',
        },
      ],
      solutions: [
        {
          title: 'Measure the cause, not just the symptom',
          description:
            'A device in the water line measures TDS before and after the filter, plus flow and temperature. Telemetry streams to a platform that raises alerts carrying the cause rather than the symptom, with an equipment portal for the manufacturer and a predictive model that schedules service by litres passed.',
        },
        {
          title: 'Result',
          description:
            'Warranty service cost fell from 1.37 % to 0.51 % of revenue. Service scheduling moved from the calendar to litres passed, and the cost centre became a product line: the device sells once per installation, the subscription runs every month the machine runs.',
        },
      ],
      meta: {
        title: 'Manufacturing | Trident Software',
        description:
          "Wherever a manufacturer carries a warranty obligation for misuse in conditions they can't see. Starts with a free 45-minute audit.",
      },
    },
    de: {
      title: 'Fertigung',
      tagline: 'Statt jeden Garantiefall zu bezahlen, die Ursache messen und die Messung verkaufen.',
      description:
        'Überall dort, wo ein Hersteller eine Garantiepflicht für ein Produkt trägt, das wegen seiner Nutzung ausfällt, unter Bedingungen, die er nicht sieht. Der erste Schritt ist ein kostenloses Audit von 45 Minuten.',
      challenges: [
        {
          title: 'Die Garantiekosten waren strukturell, nicht zufällig',
          description:
            'Der Garantieservice kostete 1.37 % des Umsatzes, mehr als der veröffentlichte Durchschnitt für Hersteller von Haushaltgeräten und Klimatechnik. Laut Feldanalyse gingen bis zu 85 % der Ausfälle auf das Wasser zurück und nicht auf Fertigungsfehler. Der Vertrag verlangt Wasser innerhalb der Spezifikation, aber niemand hat es gemessen, also wurde jeder Fall bezahlt: Es gab keinen Grund, eine Reparatur wegen schlechten Wassers abzulehnen.',
        },
        {
          title: 'Voraussetzung',
          description:
            'Komponenten, die sich in einem Kreislauf messen lassen, OEM-Kunden, die das Gerät einbauen lassen, und ein Servicenetz, das mit dem Portal arbeitet. Zur Umsatzquelle wird das erst, wenn auch die Maschinenhersteller den Garantienachweis als ihr eigenes Instrument sehen.',
        },
      ],
      solutions: [
        {
          title: 'Die Ursache messen, nicht nur das Symptom',
          description:
            'Ein Gerät in der Wasserleitung misst TDS vor und nach dem Filter, dazu Durchfluss und Temperatur. Die Telemetrie läuft auf eine Plattform, deren Alarme die Ursache statt des Symptoms nennen, mit einem Geräteportal für den Hersteller und einem Prognosemodell, das den Service nach durchgeflossenen Litern plant.',
        },
        {
          title: 'Ergebnis',
          description:
            'Die Garantiekosten sanken von 1.37 % auf 0.51 % des Umsatzes. Der Service richtet sich nicht mehr nach dem Kalender, sondern nach durchgeflossenen Litern, und aus der Kostenstelle wurde eine Produktlinie: Das Gerät wird einmal pro Installation verkauft, das Abonnement läuft jeden Monat, in dem die Maschine läuft.',
        },
      ],
      meta: {
        title: 'Fertigung | Trident Software',
        description:
          'Für Hersteller mit Garantiepflicht für Produkte, die unter unsichtbaren Bedingungen falsch genutzt werden. Start mit einem kostenlosen Audit von 45 Minuten.',
      },
    },
    fr: {
      title: 'Industrie',
      tagline: 'Ne plus payer chaque réclamation, mesurer la cause et vendre la mesure.',
      description:
        "Partout où un fabricant porte une obligation de garantie pour un produit qui tombe en panne à cause de son usage, dans des conditions qu'il ne voit pas. La première étape est un audit gratuit de 45 minutes.",
      challenges: [
        {
          title: 'Le coût de garantie était structurel, pas accidentel',
          description:
            "Le service de garantie coûtait 1.37 % du chiffre d'affaires, au-dessus de la moyenne publiée pour les fabricants d'électroménager et de CVC. L'analyse terrain attribuait jusqu'à 85 % des pannes à l'eau plutôt qu'à des défauts de fabrication. Le contrat exige une eau conforme, mais personne ne la mesurait, donc chaque réclamation était payée : rien ne permettait de refuser une réparation due à une mauvaise eau.",
        },
        {
          title: 'Condition préalable',
          description:
            "Des composants mesurables dans un circuit, des clients OEM prêts à faire installer l'appareil et un réseau de service qui travaille dans le portail. Cela ne devient une source de revenus que si les constructeurs de machines voient aussi la preuve de garantie comme leur propre outil.",
        },
      ],
      solutions: [
        {
          title: 'Mesurer la cause, pas seulement le symptôme',
          description:
            "Un appareil sur la conduite d'eau mesure le TDS avant et après le filtre, plus le débit et la température. La télémétrie alimente une plateforme dont les alertes indiquent la cause plutôt que le symptôme, avec un portail équipements pour le fabricant et un modèle prédictif qui planifie l'entretien selon les litres passés.",
        },
        {
          title: 'Résultat',
          description:
            "Le coût du service de garantie est passé de 1.37 % à 0.51 % du chiffre d'affaires. L'entretien suit désormais les litres passés et non le calendrier, et le centre de coûts est devenu une ligne de produits : l'appareil se vend une fois par installation, l'abonnement court chaque mois où la machine tourne.",
        },
      ],
      meta: {
        title: 'Industrie | Trident Software',
        description:
          "Pour les fabricants qui garantissent des produits mal utilisés dans des conditions qu'ils ne voient pas. On commence par un audit gratuit de 45 minutes.",
      },
    },
    it: {
      title: 'Manifattura',
      tagline: 'Da pagare ogni richiesta di garanzia a misurarne la causa, e a vendere la misura.',
      description:
        "Ovunque un produttore abbia un obbligo di garanzia per un prodotto che si guasta per come viene usato, in condizioni che non vede. Il primo passo è un audit gratuito di 45 minuti.",
      challenges: [
        {
          title: 'Il costo della garanzia era strutturale, non casuale',
          description:
            "Il servizio di garanzia costava l'1.37 % del fatturato, sopra la media pubblicata per i produttori di elettrodomestici e impianti HVAC. L'analisi sul campo attribuiva fino all'85 % dei guasti all'acqua e non a difetti di fabbricazione. Il contratto richiede acqua entro specifica, ma nessuno la misurava, quindi ogni richiesta veniva pagata: non c'erano motivi per rifiutare una riparazione dovuta ad acqua cattiva.",
        },
        {
          title: 'Presupposto',
          description:
            "Componenti misurabili in un circuito, clienti OEM disposti a far installare il dispositivo e una rete di assistenza che lavori nel portale. Diventa una linea di ricavo solo se anche i costruttori di macchine vedono la prova di garanzia come un loro strumento.",
        },
      ],
      solutions: [
        {
          title: 'Misurare la causa, non solo il sintomo',
          description:
            "Un dispositivo sulla linea dell'acqua misura il TDS prima e dopo il filtro, più flusso e temperatura. La telemetria arriva a una piattaforma i cui allarmi riportano la causa invece del sintomo, con un portale apparecchi per il produttore e un modello predittivo che pianifica l'assistenza in base ai litri passati.",
        },
        {
          title: 'Risultato',
          description:
            "Il costo del servizio di garanzia è sceso dall'1.37 % allo 0.51 % del fatturato. L'assistenza segue i litri passati e non più il calendario, e il centro di costo è diventato una linea di prodotto: il dispositivo si vende una volta per installazione, l'abbonamento corre ogni mese in cui la macchina lavora.",
        },
      ],
      meta: {
        title: 'Manifattura | Trident Software',
        description:
          "Per i produttori che garantiscono prodotti usati male in condizioni che non vedono. Si parte da un audit gratuito di 45 minuti.",
      },
    },
  },
}

export default record
