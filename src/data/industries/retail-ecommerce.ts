import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'retail-ecommerce',
  icon: 'shopping-bag',
  techStack: [],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ai-services'],
  content: {
    en: {
      title: 'E-commerce and D2C',
      tagline: 'Order status, sizing, returns, cross-sell at the moment of intent.',
      description: 'Highest message volume, lowest value per message: automation economics at their cleanest.',
      challengesLead: '',
      challenges: [
        {
          title: 'The situation',
          description:
            'A shop with a catalogue deep enough that customers cannot self-serve: technical parts, equipment with variants, anything where picking the wrong item means a return. The pre-purchase questions land in chat, on WhatsApp and by e-mail: will this fit my model, what is the difference between these two, when would it arrive, do you deliver to Ticino. Sales answers them one by one, and the ones that arrive after six in the evening convert worse than the ones that arrive at ten in the morning, only because of the wait.',
        },
        {
          title: 'What it replaces',
          description:
            'The pre-purchase question queue, and a share of the returns caused by customers guessing at compatibility on their own.',
        },
        {
          title: 'Precondition',
          description:
            'Product data that supports a decision: compatibility rules, dimensions, real variants, live stock. A catalogue where half the articles have a name and a price and nothing else cannot be reasoned over. The agent will recommend confidently and wrongly, and returns will go up rather than down. This case is worth doing only where someone has already done the boring work on the product data, or is willing to do it as part of the project.',
        },
      ],
      solutionsLead: '',
      solutions: [
        {
          title: 'What the agent does',
          description:
            "Reads the question, works out what the customer actually has (the machine, the vehicle, the installation) and narrows the catalogue to what fits. Explains the difference between two candidates in the customer's terms rather than reciting spec sheets. Checks live stock and gives a real delivery date, including the honest one: this is not in stock, it lands in eleven days, here is what is available now instead. Applies the customer's own pricing if they are a B2B account with agreed terms. Assembles the basket, takes the order, issues the QR-bill or payment link, and confirms. After the sale it stays useful: order status, invoice copies, and the start of a return, which for a shop is the difference between a complaint and a transaction.",
        },
      ],
      meta: {
        title: 'E-commerce and D2C | Trident Software',
        description:
          'Order status, sizing, returns, cross-sell at the moment of intent. Highest message volume, lowest value per message: automation pays off most clearly here.',
      },
    },
    de: {
      title: 'E-Commerce und D2C',
      tagline: 'Bestellstatus, Grössen, Retouren, Cross-Selling im Moment der Kaufabsicht.',
      description: 'Höchstes Nachrichtenvolumen, tiefster Wert pro Nachricht: Hier rechnet sich Automatisierung am klarsten.',
      challengesLead: '',
      challenges: [
        {
          title: 'Die Ausgangslage',
          description:
            'Ein Shop mit einem so tiefen Sortiment, dass sich Kunden nicht selbst zurechtfinden: technische Ersatzteile, Geräte mit Varianten, alles, wo der falsche Artikel eine Retoure bedeutet. Die Fragen vor dem Kauf landen im Chat, auf WhatsApp und per E-Mail: Passt das zu meinem Modell, was ist der Unterschied zwischen diesen beiden, wann kommt es an, liefern Sie ins Tessin? Der Verkauf beantwortet sie einzeln, und Anfragen nach sechs Uhr abends konvertieren schlechter als jene um zehn Uhr morgens, nur wegen der Wartezeit.',
        },
        {
          title: 'Was es ersetzt',
          description:
            'Die Warteschlange der Fragen vor dem Kauf und einen Teil der Retouren, die entstehen, weil Kunden die Kompatibilität selbst erraten.',
        },
        {
          title: 'Voraussetzung',
          description:
            'Produktdaten, die eine Entscheidung tragen: Kompatibilitätsregeln, Masse, echte Varianten, aktueller Bestand. Mit einem Katalog, in dem die Hälfte der Artikel nur Name und Preis hat, kann man nicht arbeiten. Der Agent empfiehlt dann selbstsicher das Falsche, und die Retouren steigen statt zu sinken. Das Projekt lohnt sich nur, wo jemand die mühsame Arbeit an den Produktdaten schon erledigt hat oder bereit ist, sie im Projekt zu erledigen.',
        },
      ],
      solutionsLead: '',
      solutions: [
        {
          title: 'Was der Agent übernimmt',
          description:
            'Er liest die Frage, findet heraus, was der Kunde tatsächlich hat (die Maschine, das Fahrzeug, die Anlage), und grenzt das Sortiment auf das ein, was passt. Er erklärt den Unterschied zwischen zwei Artikeln in den Worten des Kunden, statt Datenblätter aufzusagen. Er prüft den aktuellen Bestand und nennt ein echtes Lieferdatum, auch das ehrliche: nicht an Lager, Eingang in elf Tagen, sofort verfügbar ist stattdessen dies. Bei B2B-Konten mit vereinbarten Konditionen rechnet er zu den Preisen des Kunden. Er stellt den Warenkorb zusammen, nimmt die Bestellung auf, stellt die QR-Rechnung oder den Zahlungslink aus und bestätigt. Nach dem Kauf bleibt er nützlich: Bestellstatus, Rechnungskopien und der Start einer Retoure. Für einen Shop ist das der Unterschied zwischen einer Reklamation und einem Geschäftsvorgang.',
        },
      ],
      meta: {
        title: 'E-Commerce und D2C | Trident Software',
        description:
          'Bestellstatus, Grössen, Retouren, Cross-Selling im Moment der Kaufabsicht. Viele Nachrichten, wenig Wert pro Nachricht: Hier rechnet sich Automatisierung.',
      },
    },
    fr: {
      title: 'E-commerce et D2C',
      tagline: "Statut de commande, tailles, retours, vente complémentaire au moment de l'intention d'achat.",
      description:
        "Le plus grand volume de messages, la plus faible valeur par message : c'est là que l'automatisation se rentabilise le plus clairement.",
      challengesLead: '',
      challenges: [
        {
          title: 'La situation',
          description:
            "Une boutique dont le catalogue est trop profond pour que les clients s'y retrouvent seuls : pièces techniques, équipements avec variantes, tout ce qui finit en retour quand on choisit le mauvais article. Les questions avant achat arrivent par chat, sur WhatsApp et par e-mail : est-ce compatible avec mon modèle, quelle différence entre ces deux articles, quand sera-t-il livré, livrez-vous au Tessin ? Le service commercial y répond une par une, et celles qui arrivent après 18 heures convertissent moins bien que celles de 10 heures du matin, uniquement à cause de l'attente.",
        },
        {
          title: 'Ce que cela remplace',
          description:
            'La file des questions avant achat, et une partie des retours dus aux clients qui devinent seuls la compatibilité.',
        },
        {
          title: 'Condition préalable',
          description:
            "Des données produit sur lesquelles on peut décider : règles de compatibilité, dimensions, vraies variantes, stock en temps réel. Avec un catalogue où la moitié des articles n'ont qu'un nom et un prix, aucun raisonnement n'est possible. L'agent recommandera avec assurance le mauvais article, et les retours augmenteront au lieu de baisser. Ce projet ne vaut la peine que si quelqu'un a déjà fait le travail ingrat sur les données produit, ou accepte de le faire dans le cadre du projet.",
        },
      ],
      solutionsLead: '',
      solutions: [
        {
          title: "Ce que fait l'agent",
          description:
            "Il lit la question, identifie ce que le client possède réellement (la machine, le véhicule, l'installation) et réduit le catalogue à ce qui convient. Il explique la différence entre deux articles dans les mots du client au lieu de réciter des fiches techniques. Il vérifie le stock en temps réel et donne une vraie date de livraison, y compris la réponse honnête : pas en stock, arrivée dans onze jours, voici ce qui est disponible tout de suite. Pour un compte B2B avec des conditions convenues, il applique les prix du client. Il compose le panier, prend la commande, émet la QR-facture ou le lien de paiement et confirme. Après la vente, il reste utile : statut de commande, copies de factures et ouverture d'un retour. Pour une boutique, c'est la différence entre une réclamation et une transaction.",
        },
      ],
      meta: {
        title: 'E-commerce et D2C | Trident Software',
        description:
          "Statut de commande, tailles, retours, vente complémentaire au bon moment. Beaucoup de messages, peu de valeur par message : l'automatisation se rentabilise.",
      },
    },
    it: {
      title: 'E-commerce e D2C',
      tagline: "Stato dell'ordine, taglie, resi, vendite aggiuntive nel momento in cui il cliente vuole comprare.",
      description:
        "Il volume di messaggi più alto, il valore per messaggio più basso: qui l'automazione ha i conti più chiari.",
      challengesLead: '',
      challenges: [
        {
          title: 'La situazione',
          description:
            "Un negozio con un catalogo così ampio che i clienti non riescono a orientarsi da soli: ricambi tecnici, apparecchi con varianti, tutto ciò in cui l'articolo sbagliato significa un reso. Le domande prima dell'acquisto arrivano in chat, su WhatsApp e per e-mail: è compatibile con il mio modello, che differenza c'è tra questi due, quando arriva, consegnate in Ticino? Le vendite rispondono una per una, e le richieste che arrivano dopo le sei di sera convertono peggio di quelle delle dieci del mattino, solo per via dell'attesa.",
        },
        {
          title: 'Cosa sostituisce',
          description:
            "La coda delle domande prima dell'acquisto e una parte dei resi causati da clienti che indovinano da soli la compatibilità.",
        },
        {
          title: 'Presupposto',
          description:
            "Dati di prodotto su cui si può decidere: regole di compatibilità, dimensioni, varianti reali, scorte in tempo reale. Su un catalogo in cui metà degli articoli ha solo un nome e un prezzo non si può ragionare. L'agente consiglierà con sicurezza l'articolo sbagliato e i resi aumenteranno invece di diminuire. Il progetto vale la pena solo dove qualcuno ha già fatto il lavoro noioso sui dati di prodotto, o è disposto a farlo nell'ambito del progetto.",
        },
      ],
      solutionsLead: '',
      solutions: [
        {
          title: "Cosa fa l'agente",
          description:
            "Legge la domanda, capisce cosa ha davvero il cliente (la macchina, il veicolo, l'impianto) e restringe il catalogo a ciò che è compatibile. Spiega la differenza tra due articoli con le parole del cliente invece di recitare schede tecniche. Controlla le scorte in tempo reale e dà una data di consegna vera, anche quella onesta: non disponibile, arriva tra undici giorni, ecco cosa c'è subito. Per un conto B2B con condizioni concordate applica i prezzi del cliente. Compone il carrello, prende l'ordine, emette la QR-fattura o il link di pagamento e conferma. Dopo la vendita resta utile: stato dell'ordine, copie delle fatture e avvio di un reso. Per un negozio è la differenza tra un reclamo e una transazione.",
        },
      ],
      meta: {
        title: 'E-commerce e D2C | Trident Software',
        description:
          "Stato dell'ordine, taglie, resi, vendite aggiuntive al momento giusto. Molti messaggi, poco valore per messaggio: l'automazione rende di più.",
      },
    },
  },
}

export default record
