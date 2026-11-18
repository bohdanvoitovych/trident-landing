import type { CaseRecord } from '../cases'

const record: CaseRecord = {
  slug: 'building-materials-order-to-load',
  publishedAt: '2026-10-14',
  client: 'Construction-materials logistics · Switzerland, cross-border with France',
  services: ['ai-services', 'software-engineering'],
  techStack: [],
  evidence: 'modelled',
  relatedCases: [],
  content: {
    en: {
      client: 'Construction-materials logistics · Switzerland, cross-border with France',
      industry: 'Construction-materials logistics',
      hero: {
        title: 'Building materials: from order desk to delivered load',
        tagline: 'From a phone call to a planned load, an invoiced delivery and a cleared border',
      },
      note: 'Industry scenario. Built on live project work and on published industry benchmarks. The figures are the effect the design is engineered to produce; the mechanism behind each one is given in Results.',
      results: [
        { metric: 'Repeat orders taken without a person', value: '65 % of reorder volume' },
        { metric: 'Dispatch planning time', value: '~4–6 h → 30 min of approval' },
        { metric: 'Transport cost', value: '−6 %' },
      ],
      sections: [
        {
          title: 'The business',
          paragraphs: ['A construction-materials logistics business with three revenue lines that share one fleet and one order desk:'],
          items: [
            'Material delivery. Aggregates (sand, gravel, crushed stone) and cement, bought at quarries and delivered to contractors and building sites. Bulk goods sold by weight, not a catalogue of packaged items.',
            'Soil and construction-waste removal. A business in its own right rather than a return leg: separate runs from site to disposal facility, much of it won through tenders. Pairing a removal with a delivery in one round trip is an optimisation on top, not the operating model.',
            'Skip hire. Containers dropped at small sites, left for the duration of the work, then collected or swapped: an asset-rental cycle rather than a delivery.',
          ],
          closing: [
            'Transport runs on contracted hauliers, own trucks or both. Where the flow crosses a border (materials coming in, excavated soil going out), customs and waste-shipment paperwork must be in place before the truck moves. Revenue is contract-driven and sharply seasonal.',
          ],
        },
        {
          title: 'Before the change: 1. Growth is capped by how many people can answer the phone',
          paragraphs: [
            "Orders arrive by telephone and messenger. Each one takes a person several minutes: identify the customer, check the price list and the customer's agreed terms, check availability, confirm a delivery window, and enter it into the system. Volume therefore scales with headcount, and headcount is the one thing this business cannot scale.",
            "The reason is structural, not managerial. Demand follows the building season and the contract pipeline: when the frost lifts and three contracts run in parallel, the order desk needs twice the people it needs in February. Hiring for the peak means carrying, and then dismissing, those people three or four months later, with notice periods, recruitment cost, and three months of training paid twice a year. Temporary staff cost more per hour and know neither the product range nor the customers' agreed terms.",
            'So the problem is a capacity ceiling on revenue, and customer service is only where it shows.',
          ],
        },
        {
          title: '2. Every order has to be agreed with three or four parties at once',
          paragraphs: ['A delivery is only confirmable when four calendars agree:'],
          items: [
            'Customer: expects a time window, or a standing rule ("every Tuesday before 07:00", "call one hour ahead", "crane available only 13:00–16:00")',
            'Producer or plant: own opening hours, loading slots, queue at the weighbridge, batch schedules',
            'Carrier or driver: must physically make every stop, with driving-time rules and a vehicle that fits the site',
            'Disposal facility: for removals, accepted material classes, opening hours, weighbridge, tipping fee per tonne, and the right to refuse the load on arrival',
            'Customs and waste paperwork: for cross-border loads, the customs declaration and preference documents and, for waste leaving the country, the consignment note and any notification consent',
          ],
          closing: [
            'Coordinating those four by telephone is what the order desk actually spends its day on. Every change (a plant running late, a site not ready, a truck breaking down) restarts the chain of calls. The plan for tomorrow is built by hand today, by one dispatcher, and it is obsolete by 09:00.',
          ],
        },
        {
          title: '3. What the day actually looked like',
          items: [
            "Dispatch was one person, allocating tomorrow's transport today, from a whiteboard and their own memory of which driver handles which site. Deliveries, removals and skip movements were planned separately, with no shared view of the fleet.",
            'Skips lived on a spreadsheet: which container is where, since when, and whether anybody had asked for it back.',
            'Invoicing was manual, one manager typing invoices out of delivery notes, days after the fact.',
            'Customs meant e-mailing documents back and forth with the broker for every export load.',
            'The order desk sat on the phone all day, and stopped selling the moment it got busy.',
          ],
          closing: ['Everything worked. Nothing scaled.'],
        },
        {
          title: 'What we built: 1. Digitalised commercial core',
          items: [
            'Pricing: customer-specific price lists, contract prices, volume scales and surcharges (fuel, distance, small quantity) applied automatically instead of being remembered.',
            'Order management: one order object from enquiry to execution to invoice, in three types that share a fleet: delivery, removal (site to disposal facility, standalone), and skip (drop, dwell, collect or swap). The agreed rule is attached to the customer, not to the person who took the call.',
            'Disposal and tipping: accepted material classes, facility opening hours and tipping fees per tonne held as data, so a removal is quoted and planned against the site that will actually take the load.',
            'Invoicing: issued, sent and tracked automatically, with the customer notified.',
          ],
        },
        {
          title: '2. Automatic dispatch with an AI planning model',
          items: [
            "Transport is assigned automatically across own fleet and contracted hauliers, against vehicle type, site access, plant slots, driving times and the customer's window. Carriers and drivers are notified without a phone call.",
            'Deliveries, removals and skip movements are planned in one pass over one fleet, instead of three people planning the same trucks. Where a delivery and a removal fit the same round trip, the model proposes the pairing as an optimisation it finds, not as an assumption the business is built on.',
            'Skips are tracked as assets, not as jobs: where every container is, how long it has stood there, and which ones are due for collection or swap. Idle containers on finished sites are what quietly caps a skip fleet.',
            'ETAs are calculated and pushed to the customer, and recalculated when reality moves, which it does daily.',
            'The planner stops producing the plan and starts approving it, which is the part a human is actually better at.',
          ],
        },
        {
          title: "3. Invoicing on the customer's agreed rhythm",
          paragraphs: ['Because the terms differ per customer and are contractual, the system bills the way each contract says:'],
          items: [
            'per order or per delivery;',
            'collected weekly, monthly, or on any agreed period;',
            'or triggered when an accumulated balance reaches an agreed amount.',
          ],
        },
        {
          title: '4. AI agents on the customer-facing side',
          items: [
            'Take orders from existing customers: recognised by number, priced on their own terms, checked against availability, confirmed into a slot.',
            'Register new customers: qualify, collect the commercial data, open the account, route the credit decision to a human.',
            'Notify on ETA and on problems, proactively, before the site calls to ask, and answer the delivery questions that follow.',
            'Take removal and skip requests (volume or container size, material class, access, and the collection date) and qualify them in the conversation, so dispatch gets a plannable job rather than "come and take it away".',
            'Tell customers about relevant new products and services, only where they fit what they actually buy. On a site already receiving material, the removal and the skip are the obvious offer.',
          ],
        },
      ],
      table: {
        title: 'Results',
        beforeLabel: 'Expected range',
        afterLabel: 'Where it comes from',
        rows: [
          { label: 'Repeat orders taken without a person', before: '65 % of reorder volume', after: 'Reorders are the most rule-bound transaction in the business: known customer, known product, known terms. This is the single largest effect' },
          { label: 'Peak season absorbed without seasonal hiring', before: 'Order desk flat while peak volume grows 55 %', after: 'Capacity ceiling removed at the point where it binds. The saving is the seasonal hire that no longer happens, plus its recruitment and training cost' },
          { label: 'Dispatch planning time', before: 'From ~4–6 hours a day to 30 minutes of approval', after: "Planning becomes generation plus review. The dispatcher's day moves to exceptions and carrier relationships" },
          { label: 'Transport cost', before: '−6 %', after: 'The published range for mid-market shippers moving to optimised planning. Comes from fewer empty runs, better load consolidation and fewer trucks doing the same work' },
          { label: 'Cost per invoice', before: 'From roughly CHF 30–54 to CHF 2–3', after: 'Industry benchmark for manual versus automated invoice processing. On 200 invoices a month that is CHF 2,000–2,800 of clerical work, of which some CHF 1,400–2,400 disappears' },
          { label: 'DSO', before: '−25 %, commonly 5–8 days', after: 'Invoices leave the same day as the delivery instead of days later, and arrive complete with delivery note, weighbridge ticket and proof of delivery attached, which is what disputes are made of' },
          { label: '"Where is my truck?" calls', before: '−70 %', after: 'Proactive ETA notification removes the reason for the call. This is the effect customers notice first' },
          { label: 'Customs handling per export load', before: 'Hours to minutes of human attention', after: 'The declaration is pre-filled from the order and linked to the transport declaration in Passar, the Swiss customs system that replaced e-dec, so the truck is released at the border without a counter visit' },
          { label: 'Delivery/removal pairing found automatically', before: '15–32 % of removal runs paired', after: 'Planning all three order types over one fleet in one pass surfaces pairings a human planner has no time to look for. Upside only: the removal business does not depend on it' },
          { label: 'Skip fleet utilisation', before: 'Idle dwell down, more jobs per container', after: 'Containers standing on finished sites are invisible on a spreadsheet and obvious on a tracked asset. Fill-level sensing, where fitted, cuts a further 15–20 % of stops by skipping containers that are not ready' },
          { label: 'Attach rate on relevant offers', before: 'New revenue line, low single-digit % of order value', after: 'Nobody had time to make these offers before. The agent makes them on every order, only where they fit' },
          { label: 'Margin visibility per delivery', before: 'New capability, not a saving', after: 'Once every order, route and invoice is structured data, true margin per customer, per product and per route becomes measurable. Several clients discover here that a large customer is unprofitable' },
        ],
      },
      afterTable: [
        "What decides where you land in those ranges: the quality of the price and customer master data, whether delivery rules are actually written down or live in someone's head, whether plants share their slot data, and whether management is willing to let the system's plan stand when it disagrees with habit.",
      ],
      nextIntro:
        'With intake, dispatch and invoicing working on the contract business, the next moves are at the two ends the current setup still leaves manual:',
      next: [
        'Small quantities and self-service skip hire: the segment the contract desk has never had time to serve. Small sites order one container or half a load, which is all margin and all administration. An agent that quotes, books and invoices it without a person is what makes the segment worth having.',
        'Tender response for removal contracts: much of the removal business is won on tender, and tender preparation is still hand-assembled. Pre-filling the volume, disposal and pricing sections from the operational data is the obvious next automation.',
        'Fill-level and container sensing, where the economics justify fitting it, so collections are planned against what a container actually holds rather than against a date.',
      ],
      elsewhereIntro: 'The same machinery applies wherever a bulk order has to become a coordinated physical movement:',
      elsewhere: [
        'ready-mix concrete and asphalt, where the plant slot is even less forgiving',
        'fuel and pellet distribution: same weight-based billing, same delivery windows',
        'agricultural bulk goods, with the seasonality even sharper',
        'container and skip operations as a standalone business',
        'any tender-driven haulage where the paperwork gates the movement',
      ],
      elsewhereOutro:
        'The delivery side of this scenario runs on the 8Move platform: Fleet Planner for planning and dispatch, Driver Pro for the driver and proof of delivery. Start where the ceiling is. In this business it is the order desk in May, not the invoice run in November.',
      meta: {
        title: 'Building materials: desk to delivery | Trident Software',
        description:
          'Modelled scenario: order desk, dispatch, invoicing and customs for a building-materials hauler. 65 % of reorders taken without a person, transport cost −6 %.',
      },
    },
    de: {
      client: 'Baustofflogistik · Schweiz, grenzüberschreitend mit Frankreich',
      industry: 'Baustofflogistik',
      hero: {
        title: 'Baustoffe: von der Bestellannahme bis zur gelieferten Ladung',
        tagline: 'Vom Telefonanruf zur geplanten Ladung, zur verrechneten Lieferung und zur verzollten Grenzfahrt',
      },
      note: 'Branchenszenario. Es beruht auf laufender Projektarbeit und auf veröffentlichten Branchenbenchmarks. Die Zahlen beschreiben die Wirkung, für die das System ausgelegt ist; den Mechanismus hinter jeder Zahl nennt die Tabelle Ergebnisse.',
      results: [
        { metric: 'Nachbestellungen ohne Mitarbeitende', value: '65 % des Nachbestellvolumens' },
        { metric: 'Zeit für die Disposition', value: '~4–6 h → 30 min Freigabe' },
        { metric: 'Transportkosten', value: '−6 %' },
      ],
      sections: [
        {
          title: 'Das Unternehmen',
          paragraphs: ['Ein Logistikbetrieb für Baustoffe mit drei Umsatzlinien, die sich eine Flotte und eine Bestellannahme teilen:'],
          items: [
            'Materiallieferung. Gesteinskörnungen (Sand, Kies, Schotter) und Zement, in Kieswerken und Steinbrüchen eingekauft und an Bauunternehmen und Baustellen geliefert. Schüttgut, das nach Gewicht verkauft wird, kein Katalog verpackter Artikel.',
            'Abtransport von Aushub und Bauabfällen. Ein eigenes Geschäft und keine Rückfahrt: separate Fahrten von der Baustelle zur Deponie, vieles davon über Ausschreibungen gewonnen. Einen Abtransport mit einer Lieferung in einer Tour zu kombinieren, ist eine zusätzliche Optimierung und nicht das Betriebsmodell.',
            'Mulden. Container, die auf kleinen Baustellen abgestellt werden, für die Dauer der Arbeiten stehen bleiben und dann abgeholt oder getauscht werden: eher ein Mietzyklus als eine Lieferung.',
          ],
          closing: [
            'Transportiert wird mit beauftragten Transportunternehmen, eigenen Lastwagen oder beidem. Wo der Fluss eine Grenze überquert (Material herein, Aushub hinaus), müssen Zoll- und Abfallpapiere bereit sein, bevor der Lastwagen losfährt. Der Umsatz hängt an Aufträgen und ist stark saisonal.',
          ],
        },
        {
          title: 'Vorher: 1. Das Wachstum hängt daran, wie viele Leute ans Telefon gehen',
          paragraphs: [
            'Bestellungen kommen per Telefon und Messenger. Jede kostet jemanden mehrere Minuten: Kunden identifizieren, Preisliste und vereinbarte Konditionen prüfen, Verfügbarkeit prüfen, ein Lieferfenster bestätigen und alles ins System eingeben. Das Volumen wächst also nur mit dem Personal, und das Personal ist genau das, was dieser Betrieb nicht skalieren kann.',
            'Der Grund liegt in der Struktur, nicht in der Führung. Die Nachfrage folgt der Bausaison und der Auftragslage: Wenn der Frost weicht und drei Aufträge parallel laufen, braucht die Bestellannahme doppelt so viele Leute wie im Februar. Wer für die Spitze einstellt, muss diese Leute tragen und drei oder vier Monate später wieder entlassen, mit Kündigungsfristen, Rekrutierungskosten und drei Monaten Einarbeitung, zweimal im Jahr bezahlt. Temporäre Kräfte kosten pro Stunde mehr und kennen weder das Sortiment noch die vereinbarten Konditionen der Kunden.',
            'Das Problem ist also eine Kapazitätsgrenze für den Umsatz; im Kundendienst wird sie nur sichtbar.',
          ],
        },
        {
          title: '2. Jede Bestellung muss mit drei oder vier Parteien gleichzeitig abgestimmt werden',
          paragraphs: ['Eine Lieferung lässt sich erst bestätigen, wenn vier Kalender zusammenpassen:'],
          items: [
            'Kunde: erwartet ein Zeitfenster oder eine feste Regel («jeden Dienstag vor 07:00», «eine Stunde vorher anrufen», «Kran nur 13:00–16:00 verfügbar»)',
            'Werk oder Lieferant: eigene Öffnungszeiten, Ladefenster, Warteschlange an der Brückenwaage, Produktionspläne',
            'Transporteur oder Fahrer: muss jeden Halt tatsächlich schaffen, mit Lenkzeitvorschriften und einem Fahrzeug, das zur Baustelle passt',
            'Deponie: bei Abtransporten zugelassene Materialklassen, Öffnungszeiten, Brückenwaage, Annahmegebühr pro Tonne und das Recht, die Ladung bei Ankunft abzulehnen',
            'Zoll- und Abfallpapiere: bei grenzüberschreitenden Fahrten die Zollanmeldung und die Ursprungsnachweise sowie, bei Abfall, der das Land verlässt, der Begleitschein und eine allfällige Notifizierungszustimmung',
          ],
          closing: [
            'Diese vier per Telefon zu koordinieren, ist das, womit die Bestellannahme tatsächlich ihren Tag verbringt. Jede Änderung (ein Werk im Verzug, eine Baustelle nicht bereit, ein Lastwagen mit Panne) startet die Anrufkette neu. Der Plan für morgen entsteht heute von Hand, bei einer einzigen Person in der Disposition, und um 09:00 ist er veraltet.',
          ],
        },
        {
          title: '3. Wie der Tag tatsächlich aussah',
          items: [
            'Die Disposition war eine Person, die heute die Transporte für morgen verteilte, mit einem Whiteboard und dem eigenen Gedächtnis dafür, welcher Fahrer welche Baustelle kennt. Lieferungen, Abtransporte und Muldenbewegungen wurden getrennt geplant, ohne gemeinsame Sicht auf die Flotte.',
            'Die Mulden standen in einer Tabelle: welcher Container wo steht, seit wann und ob jemand die Abholung verlangt hat.',
            'Die Rechnungen entstanden von Hand: Eine Führungskraft tippte sie Tage später aus den Lieferscheinen ab.',
            'Zoll hiess, für jede Exportladung Dokumente per E-Mail mit dem Spediteur hin- und herzuschicken.',
            'Die Bestellannahme hing den ganzen Tag am Telefon und hörte auf zu verkaufen, sobald es hektisch wurde.',
          ],
          closing: ['Alles funktionierte. Nichts liess sich skalieren.'],
        },
        {
          title: 'Was wir gebaut haben: 1. Digitalisierter kaufmännischer Kern',
          items: [
            'Preise: kundenspezifische Preislisten, Vertragspreise, Mengenstaffeln und Zuschläge (Treibstoff, Distanz, Kleinmenge) werden automatisch angewendet, statt im Kopf behalten zu werden.',
            'Auftragsverwaltung: ein Auftragsobjekt von der Anfrage über die Ausführung bis zur Rechnung, in drei Typen, die sich eine Flotte teilen: Lieferung, Abtransport (Baustelle zur Deponie, eigenständig) und Mulde (Abstellen, Standzeit, Abholen oder Tauschen). Die vereinbarte Regel hängt am Kunden, nicht an der Person, die den Anruf entgegengenommen hat.',
            'Entsorgung und Deponie: zugelassene Materialklassen, Öffnungszeiten und Annahmegebühren pro Tonne als Daten hinterlegt, damit ein Abtransport für die Deponie offeriert und geplant wird, die die Ladung tatsächlich annimmt.',
            'Rechnungen: automatisch erstellt, versendet und verfolgt, mit Benachrichtigung an den Kunden.',
          ],
        },
        {
          title: '2. Automatische Disposition mit einem KI-Planungsmodell',
          items: [
            'Transporte werden automatisch auf eigene Flotte und beauftragte Transporteure verteilt, unter Berücksichtigung von Fahrzeugtyp, Zufahrt zur Baustelle, Ladefenstern im Werk, Lenkzeiten und dem Zeitfenster des Kunden. Transporteure und Fahrer werden ohne Anruf informiert.',
            'Lieferungen, Abtransporte und Muldenbewegungen werden in einem Durchgang über eine Flotte geplant, statt dass drei Personen dieselben Lastwagen verplanen. Wo eine Lieferung und ein Abtransport in dieselbe Tour passen, schlägt das Modell die Kombination vor, als gefundene Optimierung und nicht als Annahme, auf der das Geschäft beruht.',
            'Mulden werden als Anlagen verfolgt und nicht als Aufträge: wo jeder Container steht, wie lange schon und welche zur Abholung oder zum Tausch fällig sind. Ungenutzte Container auf abgeschlossenen Baustellen bremsen eine Muldenflotte, ohne dass es auffällt.',
            'Ankunftszeiten werden berechnet und an den Kunden geschickt und neu berechnet, wenn sich die Lage ändert, was täglich passiert.',
            'Die Disposition erstellt den Plan nicht mehr selbst, sondern gibt ihn frei, und das ist der Teil, den ein Mensch tatsächlich besser kann.',
          ],
        },
        {
          title: '3. Rechnungen im vereinbarten Rhythmus des Kunden',
          paragraphs: ['Weil die Konditionen je Kunde verschieden und vertraglich festgelegt sind, rechnet das System so ab, wie es der jeweilige Vertrag vorsieht:'],
          items: [
            'pro Auftrag oder pro Lieferung;',
            'gesammelt wöchentlich, monatlich oder in einem anderen vereinbarten Zeitraum;',
            'oder ausgelöst, wenn ein aufgelaufener Saldo einen vereinbarten Betrag erreicht.',
          ],
        },
        {
          title: '4. KI-Agenten im Kontakt mit den Kunden',
          items: [
            'Bestellungen bestehender Kunden annehmen: an der Kundennummer erkannt, zu den eigenen Konditionen bepreist, gegen die Verfügbarkeit geprüft und in einem Zeitfenster bestätigt.',
            'Neue Kunden erfassen: qualifizieren, kaufmännische Daten erheben, das Konto eröffnen und den Kreditentscheid an einen Menschen weitergeben.',
            'Über Ankunftszeit und Probleme informieren, proaktiv, bevor die Baustelle anruft, und die Fragen zur Lieferung beantworten, die danach kommen.',
            'Anfragen für Abtransporte und Mulden aufnehmen (Volumen oder Containergrösse, Materialklasse, Zufahrt und Abholdatum) und im Gespräch qualifizieren, damit die Disposition einen planbaren Auftrag erhält und nicht bloss «holt das ab».',
            'Kunden auf passende neue Produkte und Dienstleistungen hinweisen, nur dort, wo sie zu dem passen, was sie tatsächlich kaufen. Auf einer Baustelle, die bereits Material bekommt, sind Abtransport und Mulde das naheliegende Angebot.',
          ],
        },
      ],
      table: {
        title: 'Ergebnisse',
        beforeLabel: 'Erwartete Spanne',
        afterLabel: 'Woher sie kommt',
        rows: [
          { label: 'Nachbestellungen ohne Mitarbeitende', before: '65 % des Nachbestellvolumens', after: 'Nachbestellungen sind das regelgebundenste Geschäft im Betrieb: bekannter Kunde, bekanntes Produkt, bekannte Konditionen. Das ist der grösste einzelne Effekt' },
          { label: 'Hochsaison ohne Saisonpersonal bewältigt', before: 'Bestellannahme gleich gross, während das Spitzenvolumen um 55 % wächst', after: 'Die Kapazitätsgrenze fällt genau dort, wo sie greift. Gespart wird die Saisonanstellung, die nicht mehr nötig ist, samt Rekrutierungs- und Einarbeitungskosten' },
          { label: 'Zeit für die Disposition', before: 'Von ~4–6 Stunden pro Tag auf 30 Minuten Freigabe', after: 'Planen heisst nun Erzeugen plus Prüfen. Der Tag der Disposition verschiebt sich zu Ausnahmen und zur Pflege der Transporteure' },
          { label: 'Transportkosten', before: '−6 %', after: 'Die veröffentlichte Spanne für mittelgrosse Verlader, die auf optimierte Planung umstellen. Sie kommt von weniger Leerfahrten, besserer Bündelung der Ladungen und weniger Lastwagen für dieselbe Arbeit' },
          { label: 'Kosten pro Rechnung', before: 'Von rund CHF 30–54 auf CHF 2–3', after: "Branchenbenchmark für manuelle gegenüber automatisierter Rechnungsverarbeitung. Bei 200 Rechnungen pro Monat sind das CHF 2'000–2'800 Büroarbeit, von denen rund CHF 1'400–2'400 wegfallen" },
          { label: 'DSO', before: '−25 %, meist 5–8 Tage', after: 'Rechnungen gehen am Tag der Lieferung hinaus statt Tage später und kommen vollständig an, mit Lieferschein, Wägeschein und Liefernachweis im Anhang, also mit genau dem, worum sich Streitfälle drehen' },
          { label: 'Anrufe «Wo ist mein Lastwagen?»', before: '−70 %', after: 'Proaktive Meldung der Ankunftszeit nimmt dem Anruf den Grund. Diesen Effekt bemerken die Kunden zuerst' },
          { label: 'Zollabwicklung pro Exportladung', before: 'Von Stunden auf Minuten menschlicher Aufmerksamkeit', after: 'Die Anmeldung wird aus dem Auftrag vorausgefüllt und mit der Transportanmeldung in Passar verknüpft, dem Schweizer Zollsystem, das e-dec abgelöst hat, sodass der Lastwagen ohne Gang zum Schalter über die Grenze kommt' },
          { label: 'Automatisch gefundene Kombination Lieferung/Abtransport', before: '15–32 % der Abtransporte kombiniert', after: 'Wer alle drei Auftragstypen in einem Durchgang über eine Flotte plant, findet Kombinationen, für deren Suche einer Person die Zeit fehlt. Reiner Zusatznutzen: Das Abtransportgeschäft hängt nicht davon ab' },
          { label: 'Auslastung der Muldenflotte', before: 'Weniger Leerstandzeit, mehr Aufträge pro Container', after: 'Container auf abgeschlossenen Baustellen sind in einer Tabelle unsichtbar und bei einer verfolgten Anlage offensichtlich. Füllstandssensoren sparen, wo eingebaut, weitere 15–20 % der Anfahrten, weil nicht volle Container ausgelassen werden' },
          { label: 'Abschlussquote bei passenden Angeboten', before: 'Neue Umsatzlinie, tiefer einstelliger %-Anteil am Auftragswert', after: 'Für diese Angebote hatte vorher niemand Zeit. Der Agent macht sie bei jedem Auftrag, nur wo sie passen' },
          { label: 'Sicht auf die Marge pro Lieferung', before: 'Neue Fähigkeit, keine Einsparung', after: 'Sobald jeder Auftrag, jede Route und jede Rechnung strukturierte Daten sind, wird die echte Marge pro Kunde, Produkt und Route messbar. Mehrere Kunden stellen dabei fest, dass ein grosser Kunde unrentabel ist' },
        ],
      },
      afterTable: [
        'Wo Sie in diesen Spannen landen, hängt ab von der Qualität der Preis- und Kundenstammdaten, davon, ob Lieferregeln wirklich aufgeschrieben sind oder nur in jemandes Kopf existieren, ob die Werke ihre Ladefenster teilen und ob die Geschäftsleitung den Plan des Systems gelten lässt, wenn er der Gewohnheit widerspricht.',
      ],
      nextIntro:
        'Wenn Annahme, Disposition und Abrechnung im Vertragsgeschäft laufen, setzen die nächsten Schritte an den zwei Enden an, die heute noch von Hand laufen:',
      next: [
        'Kleinmengen und Mulden im Self-Service: das Segment, für das die Bestellannahme nie Zeit hatte. Kleine Baustellen bestellen einen Container oder eine halbe Ladung, das ist reine Marge und reine Administration. Ein Agent, der ohne Menschen offeriert, bucht und verrechnet, macht das Segment erst lohnend.',
        'Offerten für Ausschreibungen im Abtransport: Ein grosser Teil dieses Geschäfts wird über Ausschreibungen gewonnen, und die Eingaben werden noch von Hand zusammengestellt. Volumen, Entsorgung und Preise aus den Betriebsdaten vorauszufüllen, ist die naheliegende nächste Automatisierung.',
        'Füllstands- und Containersensorik, wo sich der Einbau rechnet, damit Abholungen nach dem tatsächlichen Inhalt eines Containers geplant werden und nicht nach einem Datum.',
      ],
      elsewhereIntro: 'Dieselbe Technik passt überall dort, wo aus einer Schüttgutbestellung eine koordinierte physische Bewegung werden muss:',
      elsewhere: [
        'Transportbeton und Asphalt, wo das Werkfenster noch weniger Spielraum lässt',
        'Heizöl- und Pelletverteilung: dieselbe Abrechnung nach Gewicht, dieselben Lieferfenster',
        'landwirtschaftliches Schüttgut, mit noch ausgeprägterer Saisonalität',
        'Container- und Muldenbetriebe als eigenständiges Geschäft',
        'jeder ausschreibungsgetriebene Transport, bei dem die Papiere die Fahrt freigeben',
      ],
      elsewhereOutro:
        'Die Lieferseite dieses Szenarios läuft auf der 8Move-Plattform: Fleet Planner für Planung und Disposition, Driver Pro für den Fahrer und den Liefernachweis. Beginnen Sie dort, wo die Grenze liegt. In diesem Geschäft ist das die Bestellannahme im Mai, nicht der Rechnungslauf im November.',
      meta: {
        title: 'Baustoff-Szenario: 65 % der Nachbestellungen automatisch | Trident Software',
        description:
          'Modelliertes Szenario: Bestellannahme, Disposition, Abrechnung und Zoll für einen Baustofftransporteur. 65 % der Nachbestellungen ohne Personal, Transport −6 %.',
      },
    },
    fr: {
      client: 'Logistique de matériaux de construction · Suisse, transfrontalier avec la France',
      industry: 'Logistique de matériaux de construction',
      hero: {
        title: 'Matériaux de construction : de la prise de commande au chargement livré',
        tagline: "D'un appel téléphonique à un chargement planifié, une livraison facturée et une frontière franchie",
      },
      note: "Scénario sectoriel. Il s'appuie sur des projets en cours et sur des références sectorielles publiées. Les chiffres décrivent l'effet pour lequel le système est conçu ; le mécanisme derrière chacun est indiqué dans les résultats.",
      results: [
        { metric: 'Commandes répétées prises sans intervention humaine', value: '65 % du volume de réassort' },
        { metric: 'Temps de planification du dispatch', value: '~4–6 h → 30 min de validation' },
        { metric: 'Coût de transport', value: '−6 %' },
      ],
      sections: [
        {
          title: "L'entreprise",
          paragraphs: ["Une entreprise de logistique de matériaux de construction avec trois activités qui partagent une flotte et un service commandes :"],
          items: [
            "Livraison de matériaux. Granulats (sable, gravier, concassé) et ciment, achetés en carrière et livrés aux entreprises et aux chantiers. Du vrac vendu au poids, pas un catalogue d'articles emballés.",
            "Évacuation de terres et de déchets de chantier. Une activité à part entière et non un trajet retour : des rotations distinctes du chantier à la décharge, souvent gagnées sur appel d'offres. Combiner une évacuation et une livraison dans une même tournée est une optimisation en plus, pas le modèle d'exploitation.",
            "Location de bennes. Des conteneurs déposés sur de petits chantiers, laissés pendant la durée des travaux, puis repris ou échangés : un cycle de location plutôt qu'une livraison.",
          ],
          closing: [
            "Le transport repose sur des transporteurs sous contrat, des camions propres ou les deux. Quand le flux franchit une frontière (matériaux qui entrent, déblais qui sortent), les documents douaniers et de transfert de déchets doivent être prêts avant que le camion ne parte. Le chiffre d'affaires dépend des contrats et est très saisonnier.",
          ],
        },
        {
          title: 'Avant : 1. La croissance est limitée par le nombre de personnes qui peuvent décrocher',
          paragraphs: [
            "Les commandes arrivent par téléphone et par messagerie. Chacune prend plusieurs minutes à quelqu'un : identifier le client, vérifier la liste de prix et les conditions convenues, vérifier la disponibilité, confirmer une fenêtre de livraison et tout saisir. Le volume grandit donc avec l'effectif, et l'effectif est justement ce que cette entreprise ne peut pas faire grandir.",
            "La raison est structurelle, pas managériale. La demande suit la saison du bâtiment et les contrats : quand le gel se lève et que trois chantiers tournent en parallèle, le service commandes a besoin de deux fois plus de monde qu'en février. Recruter pour le pic, c'est porter ces personnes puis s'en séparer trois ou quatre mois plus tard, avec préavis, frais de recrutement et trois mois de formation payés deux fois par an. Les intérimaires coûtent plus cher à l'heure et ne connaissent ni la gamme ni les conditions convenues avec les clients.",
            "Le problème est donc un plafond de capacité sur le chiffre d'affaires ; le service client est seulement l'endroit où il se voit.",
          ],
        },
        {
          title: '2. Chaque commande doit être calée avec trois ou quatre parties à la fois',
          paragraphs: ['Une livraison ne peut être confirmée que lorsque quatre agendas concordent :'],
          items: [
            "Client : attend une fenêtre horaire ou une règle fixe (« chaque mardi avant 07:00 », « appeler une heure avant », « grue disponible seulement 13:00–16:00 »)",
            "Producteur ou centrale : ses horaires, ses créneaux de chargement, la file au pont-bascule, ses plannings de production",
            "Transporteur ou chauffeur : doit réellement assurer chaque arrêt, avec les règles de temps de conduite et un véhicule adapté au chantier",
            "Décharge : pour les évacuations, classes de matériaux acceptées, horaires, pont-bascule, taxe de mise en décharge à la tonne et droit de refuser le chargement à l'arrivée",
            "Documents douaniers et déchets : pour les chargements transfrontaliers, la déclaration en douane et les preuves d'origine et, pour les déchets qui quittent le pays, le document de mouvement et l'éventuel consentement de notification",
          ],
          closing: [
            "Coordonner ces quatre par téléphone, c'est à cela que le service commandes passe réellement sa journée. Chaque changement (une centrale en retard, un chantier pas prêt, un camion en panne) relance la chaîne d'appels. Le plan du lendemain est construit à la main le jour même par un seul dispatcheur, et il est dépassé à 09:00.",
          ],
        },
        {
          title: '3. À quoi ressemblait vraiment la journée',
          items: [
            "Le dispatch, c'était une personne qui répartissait aujourd'hui les transports de demain, avec un tableau blanc et sa propre mémoire de quel chauffeur connaît quel chantier. Livraisons, évacuations et mouvements de bennes étaient planifiés séparément, sans vue commune sur la flotte.",
            "Les bennes vivaient dans un tableur : quel conteneur est où, depuis quand, et si quelqu'un avait demandé à ce qu'on le reprenne.",
            "La facturation était manuelle : un responsable tapait les factures à partir des bons de livraison, des jours plus tard.",
            "La douane, c'étaient des échanges d'e-mails avec le transitaire pour chaque chargement à l'export.",
            "Le service commandes passait la journée au téléphone et cessait de vendre dès que ça s'accélérait.",
          ],
          closing: ['Tout fonctionnait. Rien ne passait à l’échelle.'],
        },
        {
          title: 'Ce que nous avons construit : 1. Un cœur commercial numérisé',
          items: [
            "Tarification : listes de prix par client, prix contractuels, barèmes de volume et suppléments (carburant, distance, petite quantité) appliqués automatiquement au lieu d'être retenus de tête.",
            "Gestion des commandes : un seul objet commande de la demande à l'exécution puis à la facture, en trois types qui partagent une flotte : livraison, évacuation (du chantier à la décharge, autonome) et benne (dépôt, stationnement, reprise ou échange). La règle convenue est attachée au client, pas à la personne qui a pris l'appel.",
            "Décharges et taxes : classes de matériaux acceptées, horaires et taxes à la tonne enregistrés comme données, pour qu'une évacuation soit chiffrée et planifiée vers le site qui acceptera vraiment le chargement.",
            "Facturation : émise, envoyée et suivie automatiquement, avec notification du client.",
          ],
        },
        {
          title: "2. Dispatch automatique avec un modèle de planification par IA",
          items: [
            "Les transports sont attribués automatiquement entre flotte propre et transporteurs sous contrat, selon le type de véhicule, l'accès au chantier, les créneaux de la centrale, les temps de conduite et la fenêtre du client. Transporteurs et chauffeurs sont prévenus sans appel téléphonique.",
            "Livraisons, évacuations et mouvements de bennes sont planifiés en une seule passe sur une seule flotte, au lieu de trois personnes qui planifient les mêmes camions. Quand une livraison et une évacuation tiennent dans la même tournée, le modèle propose la combinaison, comme une optimisation qu'il trouve et non comme une hypothèse sur laquelle repose l'activité.",
            "Les bennes sont suivies comme des actifs, pas comme des missions : où se trouve chaque conteneur, depuis combien de temps, et lesquels sont à reprendre ou à échanger. Les conteneurs oubliés sur des chantiers terminés sont ce qui limite discrètement un parc de bennes.",
            "Les heures d'arrivée sont calculées et envoyées au client, puis recalculées quand la réalité bouge, ce qui arrive tous les jours.",
            "Le planificateur ne produit plus le plan, il le valide, et c'est la partie où un humain est réellement meilleur.",
          ],
        },
        {
          title: '3. Facturation au rythme convenu avec le client',
          paragraphs: ['Comme les conditions diffèrent selon le client et sont contractuelles, le système facture comme le prévoit chaque contrat :'],
          items: [
            'par commande ou par livraison ;',
            'regroupée chaque semaine, chaque mois ou sur toute autre période convenue ;',
            "ou déclenchée quand un solde cumulé atteint un montant convenu.",
          ],
        },
        {
          title: "4. Des agents IA côté client",
          items: [
            "Prendre les commandes des clients existants : reconnus par leur numéro, chiffrées selon leurs propres conditions, vérifiées contre la disponibilité et confirmées dans un créneau.",
            "Enregistrer les nouveaux clients : qualifier, recueillir les données commerciales, ouvrir le compte et transmettre la décision de crédit à un humain.",
            "Informer de l'heure d'arrivée et des problèmes, de façon proactive, avant que le chantier n'appelle, et répondre aux questions de livraison qui suivent.",
            "Prendre les demandes d'évacuation et de benne (volume ou taille du conteneur, classe de matériau, accès et date de reprise) et les qualifier pendant l'échange, pour que le dispatch reçoive une mission planifiable et pas un simple « venez l'enlever ».",
            "Présenter aux clients les nouveaux produits et services pertinents, uniquement s'ils correspondent à ce qu'ils achètent vraiment. Sur un chantier qui reçoit déjà du matériau, l'évacuation et la benne sont l'offre qui va de soi.",
          ],
        },
      ],
      table: {
        title: 'Résultats',
        beforeLabel: 'Fourchette attendue',
        afterLabel: "D'où elle vient",
        rows: [
          { label: 'Commandes répétées prises sans intervention humaine', before: '65 % du volume de réassort', after: "Le réassort est la transaction la plus encadrée par des règles : client connu, produit connu, conditions connues. C'est l'effet le plus important" },
          { label: 'Haute saison absorbée sans recrutement saisonnier', before: 'Service commandes stable pendant que le volume de pointe croît de 55 %', after: "Le plafond de capacité saute à l'endroit où il bloque. L'économie, c'est l'embauche saisonnière qui n'a plus lieu, avec ses frais de recrutement et de formation" },
          { label: 'Temps de planification du dispatch', before: "De ~4–6 heures par jour à 30 minutes de validation", after: "Planifier devient générer puis vérifier. La journée du dispatcheur se déplace vers les exceptions et la relation avec les transporteurs" },
          { label: 'Coût de transport', before: '−6 %', after: "La fourchette publiée pour les chargeurs de taille moyenne qui passent à une planification optimisée. Elle vient de moins de trajets à vide, d'un meilleur groupage et de moins de camions pour le même travail" },
          { label: 'Coût par facture', before: "D'environ CHF 30–54 à CHF 2–3", after: "Référence sectorielle pour le traitement manuel ou automatisé des factures. Sur 200 factures par mois, cela représente CHF 2'000–2'800 de travail administratif, dont quelque CHF 1'400–2'400 disparaissent" },
          { label: 'DSO', before: '−25 %, souvent 5–8 jours', after: "Les factures partent le jour de la livraison et non des jours après, et arrivent complètes, avec bon de livraison, ticket de pesée et preuve de livraison joints, c'est-à-dire tout ce dont sont faits les litiges" },
          { label: 'Appels « Où est mon camion ? »', before: '−70 %', after: "La notification proactive de l'heure d'arrivée supprime la raison de l'appel. C'est l'effet que les clients remarquent en premier" },
          { label: 'Traitement douanier par chargement export', before: "D'heures à minutes d'attention humaine", after: "La déclaration est préremplie à partir de la commande et reliée à la déclaration de transport dans Passar, le système douanier suisse qui a remplacé e-dec, si bien que le camion passe la frontière sans passage au guichet" },
          { label: 'Combinaison livraison/évacuation trouvée automatiquement', before: '15–32 % des évacuations combinées', after: "Planifier les trois types de commande en une passe sur une seule flotte fait apparaître des combinaisons qu'un planificateur n'a pas le temps de chercher. Un gain en plus : l'activité d'évacuation n'en dépend pas" },
          { label: 'Utilisation du parc de bennes', before: "Moins d'immobilisation, plus de missions par conteneur", after: "Les conteneurs sur des chantiers terminés sont invisibles dans un tableur et évidents sur un actif suivi. Les capteurs de remplissage, là où ils sont installés, suppriment encore 15–20 % des passages en sautant les conteneurs pas prêts" },
          { label: 'Taux de vente additionnelle sur offres pertinentes', before: 'Nouvelle source de revenus, quelques % de la valeur de commande', after: "Personne n'avait le temps de faire ces offres avant. L'agent les fait à chaque commande, uniquement quand elles sont pertinentes" },
          { label: 'Visibilité de la marge par livraison', before: 'Nouvelle capacité, pas une économie', after: "Dès que chaque commande, chaque trajet et chaque facture sont des données structurées, la vraie marge par client, par produit et par trajet devient mesurable. Plusieurs clients découvrent alors qu'un gros client n'est pas rentable" },
        ],
      },
      afterTable: [
        "Ce qui décide où vous vous situez dans ces fourchettes : la qualité des données de base sur les prix et les clients, le fait que les règles de livraison soient vraiment écrites ou seulement dans la tête de quelqu'un, le partage des créneaux par les centrales, et la volonté de la direction de laisser le plan du système s'appliquer quand il contredit l'habitude.",
      ],
      nextIntro:
        "Une fois l'admission des commandes, le dispatch et la facturation en place sur l'activité contractuelle, les prochaines étapes portent sur les deux extrémités qui restent manuelles :",
      next: [
        "Petites quantités et location de bennes en libre-service : le segment que le service commandes n'a jamais eu le temps de servir. Les petits chantiers commandent un conteneur ou un demi-chargement, ce qui est à la fois toute la marge et toute l'administration. Un agent qui chiffre, réserve et facture sans intervention humaine rend ce segment rentable.",
        "Réponse aux appels d'offres d'évacuation : une grande partie de cette activité se gagne sur appel d'offres, et les dossiers sont encore assemblés à la main. Préremplir les volumes, la mise en décharge et les prix à partir des données d'exploitation est la prochaine automatisation évidente.",
        "Capteurs de remplissage et de conteneurs, là où l'investissement se justifie, pour planifier les reprises selon ce que contient vraiment un conteneur plutôt que selon une date.",
      ],
      elsewhereIntro: "Le même mécanisme s'applique partout où une commande de vrac doit devenir un mouvement physique coordonné :",
      elsewhere: [
        "béton prêt à l'emploi et enrobés, où le créneau de la centrale laisse encore moins de marge",
        "distribution de mazout et de pellets : même facturation au poids, mêmes fenêtres de livraison",
        "vrac agricole, avec une saisonnalité encore plus marquée",
        "location de conteneurs et de bennes comme activité à part entière",
        "tout transport lié à des appels d'offres où les documents conditionnent le départ",
      ],
      elsewhereOutro:
        "Le volet livraison de ce scénario tourne sur la plateforme 8Move : Fleet Planner pour la planification et le dispatch, Driver Pro pour le chauffeur et la preuve de livraison. Commencez là où se trouve le plafond. Dans cette activité, c'est le service commandes en mai, pas la facturation en novembre.",
      meta: {
        title: 'Scénario matériaux : 65 % du réassort sans intervention | Trident Software',
        description:
          "Scénario modélisé : commandes, dispatch, facturation et douane pour un transporteur de matériaux. 65 % du réassort sans intervention humaine, transport −6 %.",
      },
    },
    it: {
      client: 'Logistica di materiali edili · Svizzera, transfrontaliera con la Francia',
      industry: 'Logistica di materiali edili',
      hero: {
        title: "Materiali edili: dall'ufficio ordini al carico consegnato",
        tagline: 'Da una telefonata a un carico pianificato, una consegna fatturata e una frontiera sdoganata',
      },
      note: "Scenario di settore. Si basa su progetti in corso e su benchmark di settore pubblicati. Le cifre descrivono l'effetto per cui il sistema è progettato; il meccanismo dietro ciascuna è indicato nei risultati.",
      results: [
        { metric: 'Riordini presi senza una persona', value: '65 % del volume di riordino' },
        { metric: 'Tempo di pianificazione dei trasporti', value: '~4–6 h → 30 min di approvazione' },
        { metric: 'Costo di trasporto', value: '−6 %' },
      ],
      sections: [
        {
          title: "L'azienda",
          paragraphs: ["Un'azienda di logistica di materiali edili con tre linee di ricavo che condividono una flotta e un ufficio ordini:"],
          items: [
            "Consegna di materiali. Inerti (sabbia, ghiaia, pietrisco) e cemento, acquistati in cava e consegnati a imprese e cantieri. Merce sfusa venduta a peso, non un catalogo di articoli confezionati.",
            "Smaltimento di terre e rifiuti edili. Un'attività a sé e non un viaggio di ritorno: corse separate dal cantiere alla discarica, in gran parte vinte con gare d'appalto. Abbinare uno smaltimento a una consegna nello stesso giro è un'ottimizzazione in più, non il modello operativo.",
            "Noleggio di cassoni. Container lasciati in piccoli cantieri per la durata dei lavori, poi ritirati o sostituiti: un ciclo di noleggio più che una consegna.",
          ],
          closing: [
            "Il trasporto si appoggia a trasportatori in contratto, a camion propri o a entrambi. Dove il flusso attraversa una frontiera (materiali in entrata, terre di scavo in uscita), i documenti doganali e quelli per il trasporto dei rifiuti devono essere pronti prima che il camion parta. I ricavi dipendono dai contratti e sono fortemente stagionali.",
          ],
        },
        {
          title: 'Prima: 1. La crescita è limitata da quante persone possono rispondere al telefono',
          paragraphs: [
            "Gli ordini arrivano per telefono e via messaggi. Ognuno costa a qualcuno diversi minuti: identificare il cliente, controllare il listino e le condizioni concordate, verificare la disponibilità, confermare una finestra di consegna e inserire tutto nel sistema. Il volume cresce quindi solo con il personale, e il personale è proprio ciò che questa azienda non può far crescere.",
            "La ragione è strutturale, non gestionale. La domanda segue la stagione edile e i contratti: quando il gelo finisce e tre cantieri corrono in parallelo, l'ufficio ordini ha bisogno del doppio delle persone di febbraio. Assumere per il picco significa mantenere queste persone e poi lasciarle andare tre o quattro mesi dopo, con preavvisi, costi di selezione e tre mesi di formazione pagati due volte l'anno. I lavoratori temporanei costano di più all'ora e non conoscono né la gamma né le condizioni concordate con i clienti.",
            "Il problema è quindi un tetto di capacità sui ricavi; il servizio clienti è solo il punto in cui si vede.",
          ],
        },
        {
          title: '2. Ogni ordine va concordato con tre o quattro parti alla volta',
          paragraphs: ['Una consegna si può confermare solo quando quattro calendari coincidono:'],
          items: [
            "Cliente: si aspetta una finestra oraria o una regola fissa («ogni martedì prima delle 07:00», «chiamare un'ora prima», «gru disponibile solo 13:00–16:00»)",
            "Produttore o impianto: propri orari, finestre di carico, coda alla pesa, piani di produzione",
            "Trasportatore o autista: deve fare davvero ogni fermata, con le regole sui tempi di guida e un mezzo adatto al cantiere",
            "Discarica: per gli smaltimenti, classi di materiale accettate, orari, pesa, tariffa di conferimento per tonnellata e diritto di rifiutare il carico all'arrivo",
            "Documenti doganali e rifiuti: per i carichi transfrontalieri, la dichiarazione doganale e le prove d'origine e, per i rifiuti che lasciano il Paese, il documento di movimento e l'eventuale consenso alla notifica",
          ],
          closing: [
            "Coordinare questi quattro al telefono è ciò a cui l'ufficio ordini dedica davvero la giornata. Ogni cambiamento (un impianto in ritardo, un cantiere non pronto, un camion in panne) fa ripartire la catena di telefonate. Il piano di domani viene costruito a mano oggi, da un solo addetto ai trasporti, e alle 09:00 è già superato.",
          ],
        },
        {
          title: '3. Com’era davvero la giornata',
          items: [
            "La pianificazione dei trasporti era una persona che oggi distribuiva i trasporti di domani, con una lavagna e la propria memoria di quale autista conosce quale cantiere. Consegne, smaltimenti e movimenti dei cassoni erano pianificati separatamente, senza una visione comune della flotta.",
            "I cassoni stavano in un foglio di calcolo: quale container è dove, da quando, e se qualcuno ne aveva chiesto il ritiro.",
            "La fatturazione era manuale: un responsabile batteva le fatture dalle bolle di consegna, giorni dopo.",
            "La dogana significava mandare documenti avanti e indietro via e-mail con lo spedizioniere per ogni carico in esportazione.",
            "L'ufficio ordini stava al telefono tutto il giorno e smetteva di vendere appena c'era un po' di ressa.",
          ],
          closing: ['Tutto funzionava. Niente cresceva con il volume.'],
        },
        {
          title: 'Che cosa abbiamo realizzato: 1. Un nucleo commerciale digitalizzato',
          items: [
            "Prezzi: listini per cliente, prezzi contrattuali, scaglioni di volume e supplementi (carburante, distanza, piccole quantità) applicati automaticamente invece di essere ricordati a memoria.",
            "Gestione ordini: un unico oggetto ordine dalla richiesta all'esecuzione fino alla fattura, in tre tipi che condividono una flotta: consegna, smaltimento (dal cantiere alla discarica, a sé stante) e cassone (posa, sosta, ritiro o sostituzione). La regola concordata è legata al cliente, non alla persona che ha preso la telefonata.",
            "Smaltimento e conferimento: classi di materiale accettate, orari degli impianti e tariffe per tonnellata registrati come dati, così uno smaltimento viene quotato e pianificato verso il sito che accetterà davvero il carico.",
            "Fatturazione: emessa, inviata e seguita automaticamente, con avviso al cliente.",
          ],
        },
        {
          title: "2. Pianificazione automatica dei trasporti con un modello di IA",
          items: [
            "I trasporti vengono assegnati automaticamente tra flotta propria e trasportatori in contratto, in base a tipo di mezzo, accesso al cantiere, finestre dell'impianto, tempi di guida e finestra del cliente. Trasportatori e autisti vengono avvisati senza una telefonata.",
            "Consegne, smaltimenti e movimenti dei cassoni vengono pianificati in un solo passaggio su un'unica flotta, invece che da tre persone che pianificano gli stessi camion. Quando una consegna e uno smaltimento stanno nello stesso giro, il modello propone l'abbinamento come un'ottimizzazione che trova, non come un presupposto su cui si regge l'attività.",
            "I cassoni sono seguiti come beni, non come incarichi: dove si trova ogni container, da quanto tempo e quali sono da ritirare o sostituire. I container fermi su cantieri finiti sono ciò che limita silenziosamente una flotta di cassoni.",
            "Gli orari di arrivo vengono calcolati e inviati al cliente, e ricalcolati quando la realtà cambia, cosa che succede ogni giorno.",
            "Chi pianifica non produce più il piano ma lo approva, che è la parte in cui una persona è davvero più brava.",
          ],
        },
        {
          title: '3. Fatturazione al ritmo concordato con il cliente',
          paragraphs: ['Poiché le condizioni variano da cliente a cliente e sono contrattuali, il sistema fattura come prevede ogni contratto:'],
          items: [
            'per ordine o per consegna;',
            'raggruppata ogni settimana, ogni mese o in qualsiasi periodo concordato;',
            "oppure quando un saldo accumulato raggiunge un importo concordato.",
          ],
        },
        {
          title: '4. Agenti IA a contatto con i clienti',
          items: [
            "Prendere gli ordini dei clienti esistenti: riconosciuti dal numero, prezzati secondo le loro condizioni, verificati sulla disponibilità e confermati in una finestra.",
            "Registrare i nuovi clienti: qualificarli, raccogliere i dati commerciali, aprire il conto e passare la decisione sul credito a una persona.",
            "Avvisare sull'orario di arrivo e sui problemi, in modo proattivo, prima che il cantiere chiami, e rispondere alle domande sulla consegna che seguono.",
            "Raccogliere le richieste di smaltimento e di cassoni (volume o misura del container, classe di materiale, accesso e data di ritiro) e qualificarle nella conversazione, così la pianificazione riceve un incarico pianificabile e non un semplice «venite a portarlo via».",
            "Segnalare ai clienti nuovi prodotti e servizi pertinenti, solo se corrispondono a ciò che comprano davvero. In un cantiere che già riceve materiale, lo smaltimento e il cassone sono l'offerta più naturale.",
          ],
        },
      ],
      table: {
        title: 'Risultati',
        beforeLabel: 'Intervallo atteso',
        afterLabel: 'Da dove viene',
        rows: [
          { label: 'Riordini presi senza una persona', before: '65 % del volume di riordino', after: "I riordini sono la transazione più regolata dell'attività: cliente noto, prodotto noto, condizioni note. È l'effetto singolo più grande" },
          { label: 'Alta stagione gestita senza assunzioni stagionali', before: "Ufficio ordini invariato mentre il volume di picco cresce del 55 %", after: "Il tetto di capacità salta proprio dove blocca. Il risparmio è l'assunzione stagionale che non serve più, con i suoi costi di selezione e formazione" },
          { label: 'Tempo di pianificazione dei trasporti', before: 'Da ~4–6 ore al giorno a 30 minuti di approvazione', after: "Pianificare diventa generare più controllare. La giornata di chi pianifica si sposta su eccezioni e rapporti con i trasportatori" },
          { label: 'Costo di trasporto', before: '−6 %', after: "L'intervallo pubblicato per caricatori di medie dimensioni che passano a una pianificazione ottimizzata. Viene da meno viaggi a vuoto, migliore consolidamento dei carichi e meno camion per lo stesso lavoro" },
          { label: 'Costo per fattura', before: 'Da circa CHF 30–54 a CHF 2–3', after: "Benchmark di settore per l'elaborazione manuale rispetto a quella automatizzata delle fatture. Su 200 fatture al mese sono CHF 2'000–2'800 di lavoro d'ufficio, di cui circa CHF 1'400–2'400 spariscono" },
          { label: 'DSO', before: '−25 %, di solito 5–8 giorni', after: "Le fatture partono il giorno della consegna invece che giorni dopo, e arrivano complete di bolla, scontrino di pesata e prova di consegna allegati, cioè di tutto ciò su cui nascono le contestazioni" },
          { label: 'Chiamate «Dov’è il mio camion?»', before: '−70 %', after: "L'avviso proattivo dell'orario di arrivo toglie il motivo della chiamata. È l'effetto che i clienti notano per primo" },
          { label: 'Gestione doganale per carico in esportazione', before: "Da ore a minuti di attenzione umana", after: "La dichiarazione viene precompilata dall'ordine e collegata alla dichiarazione di trasporto in Passar, il sistema doganale svizzero che ha sostituito e-dec, così il camion passa la frontiera senza fermarsi allo sportello" },
          { label: 'Abbinamento consegna/smaltimento trovato automaticamente', before: '15–32 % degli smaltimenti abbinati', after: "Pianificare i tre tipi di ordine in un solo passaggio su un'unica flotta fa emergere abbinamenti che una persona non ha il tempo di cercare. Solo un vantaggio in più: lo smaltimento non ne dipende" },
          { label: 'Utilizzo della flotta di cassoni', before: 'Meno soste inutili, più incarichi per container', after: "I container fermi su cantieri finiti sono invisibili in un foglio di calcolo ed evidenti su un bene tracciato. I sensori di riempimento, dove installati, tagliano un ulteriore 15–20 % delle fermate saltando i container non pronti" },
          { label: 'Tasso di adesione alle offerte pertinenti', before: "Nuova linea di ricavo, pochi % del valore dell'ordine", after: "Prima nessuno aveva il tempo di fare queste offerte. L'agente le fa a ogni ordine, solo dove sono pertinenti" },
          { label: 'Visibilità del margine per consegna', before: 'Nuova capacità, non un risparmio', after: "Quando ogni ordine, percorso e fattura diventa un dato strutturato, il margine reale per cliente, prodotto e percorso diventa misurabile. Diversi clienti scoprono qui che un grande cliente non è redditizio" },
        ],
      },
      afterTable: [
        "Dove vi collocherete in questi intervalli dipende dalla qualità dei dati anagrafici su prezzi e clienti, dal fatto che le regole di consegna siano davvero scritte o vivano nella testa di qualcuno, dalla disponibilità degli impianti a condividere le finestre di carico e dalla volontà della direzione di lasciar valere il piano del sistema quando contraddice l'abitudine.",
      ],
      nextIntro:
        "Con raccolta ordini, pianificazione e fatturazione a regime sull'attività contrattuale, i prossimi passi riguardano i due estremi che oggi restano manuali:",
      next: [
        "Piccole quantità e noleggio di cassoni in self-service: il segmento che l'ufficio ordini non ha mai avuto il tempo di servire. I piccoli cantieri ordinano un container o mezzo carico, che è tutto margine e tutta amministrazione. Un agente che quota, prenota e fattura senza una persona rende questo segmento conveniente.",
        "Risposta alle gare per gli smaltimenti: gran parte di questa attività si vince con gare d'appalto, e le offerte vengono ancora assemblate a mano. Precompilare volumi, smaltimento e prezzi dai dati operativi è la prossima automazione ovvia.",
        "Sensori di riempimento e dei container, dove l'investimento si ripaga, per pianificare i ritiri in base a ciò che un container contiene davvero e non a una data.",
      ],
      elsewhereIntro: "Lo stesso meccanismo vale ovunque un ordine di merce sfusa debba diventare un movimento fisico coordinato:",
      elsewhere: [
        "calcestruzzo preconfezionato e asfalto, dove la finestra dell'impianto lascia ancora meno margine",
        "distribuzione di gasolio e pellet: stessa fatturazione a peso, stesse finestre di consegna",
        "merci agricole sfuse, con una stagionalità ancora più marcata",
        "noleggio di container e cassoni come attività a sé",
        "qualsiasi trasporto legato a gare d'appalto in cui i documenti sbloccano il viaggio",
      ],
      elsewhereOutro:
        "La parte di consegna di questo scenario gira sulla piattaforma 8Move: Fleet Planner per pianificazione e assegnazione dei trasporti, Driver Pro per l'autista e la prova di consegna. Partite da dove sta il tetto. In questa attività è l'ufficio ordini a maggio, non la fatturazione a novembre.",
      meta: {
        title: 'Scenario materiali edili: 65 % dei riordini automatici | Trident Software',
        description:
          "Scenario modellato: ordini, trasporti, fatturazione e dogana per un trasportatore di materiali edili. 65 % dei riordini senza una persona, trasporti −6 %.",
      },
    },
  },
}

export default record
