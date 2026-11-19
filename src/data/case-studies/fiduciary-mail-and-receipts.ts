import type { CaseRecord } from '../cases'

const record: CaseRecord = {
  slug: 'fiduciary-mail-and-receipts',
  publishedAt: '2026-10-14',
  client: 'Fiduciary, Switzerland',
  services: ['ai-services', 'software-engineering'],
  techStack: [],
  evidence: 'modelled',
  relatedCases: [],
  content: {
    en: {
      client: 'Fiduciary, Switzerland',
      industry: 'Professional services · Switzerland',
      hero: {
        title: 'Fiduciary: incoming mail and expense receipts, read by machine',
        tagline: "Two paper queues that ran through one operator's eyes, replaced by scan-and-route and photo-and-post",
      },
      note: "Two delivered workstreams for a Swiss fiduciary, written up without the client's name. Both are in production. The process changes are what was delivered; the figures in Results are modelled from the firm's volumes and marked as such, pending the client's own measurement.",
      results: [
        { metric: 'Operator time on mail, per day', value: '~2 h 30 → ~40 min' },
        { metric: 'Operator time on receipts, per month', value: '~105 h → ~12 h' },
        { metric: 'Operator hours returned, per month', value: '~135 h ≈ 0.8 FTE' },
      ],
      sections: [
        {
          title: 'The business',
          paragraphs: [
            'A Swiss fiduciary (accounting and trust) firm: accounting, payroll and tax for a book of SME clients, run in French with clients writing in several languages.',
            "Two things about that business model matter here. First, the firm keeps its clients' books, so the raw material is other people's paper: supplier invoices, till receipts, official letters. Second, many client companies use the firm's address as their official correspondence address, so the mail that arrives each morning is not the firm's own. It is the mail of dozens of separate legal entities, mixed in one pile.",
            'Both facts lead to the same bottleneck: someone has to read every document before anything can happen.',
          ],
        },
        {
          title: 'Before the change: the morning mail',
          paragraphs: [
            'Every day an operator opened the incoming mail, scanned it by hand, and then read each document to work out two things: which client it belonged to, and which manager inside the firm was responsible for that client. Then they judged its urgency and routed it: notify the manager, or forward the document to the end client.',
            'The process was slow and, worse, easy to get wrong unnoticed. A letter that needed an answer within days could sit in the wrong pile, and nothing in the process would notice. Deadlines in this profession are statutory, and the failure mode is liability, not embarrassment.',
          ],
        },
        {
          title: 'The expense receipts',
          paragraphs: [
            'Clients sent their till receipts as phone photos or on paper by mail. An operator digitised each one, then identified the merchant, the amount and the VAT, assigned the accounting category, noted how it was paid (cash, company card, personal card) and keyed all of it into the system.',
            'Entirely manual, and error-prone in a specific way that is easy to underestimate: a meaningful share of receipts arrived in foreign languages and non-Latin scripts such as Cyrillic, Chinese and Arabic. An operator who cannot read the script cannot verify what they are typing, and the transcription error rate rises exactly where the audit trail matters.',
          ],
        },
        {
          title: 'One bottleneck, two queues',
          paragraphs: [
            'Both queues consumed the same scarce resource, a person reading documents, and neither task used any judgement that a trained accountant is paid for. The firm was buying professional attention and spending it on data entry.',
          ],
        },
        {
          title: 'What we built',
          paragraphs: ['Two applications, delivered separately, feeding the same accounting system.'],
        },
        {
          title: '1. Mail: scanning becomes the only manual step',
          paragraphs: [
            'A letter arrives, and the operator scans it, which a multifunction scanner makes close to instant. Nothing else about the letter is a human task any more.',
          ],
        },
        {
          title: '2. The client and the responsible manager are identified from the content',
          paragraphs: [
            "OCR reads the scan, and the application matches the document to the client company from what is written on it, then looks up the assigned manager in the firm's internal database. The two questions that used to require reading the whole letter are answered before anyone sees it.",
          ],
        },
        {
          title: '3. A summary and a priority instead of a raw scan',
          paragraphs: [
            'A language model reads the letter and produces a short, clear summary of what it says, plus a priority estimate: normal, high, urgent. The manager reads that summary first, which lets them triage a pile of scans at a glance.',
          ],
        },
        {
          title: '4. Then one of two things happens automatically',
          items: [
            'The letter needs the firm to act. A task is created in the internal platform and the responsible manager is notified immediately, with the summary and the scanned documents attached.',
            'The letter needs the client to act, most often to pay an invoice. The application e-mails the client directly with the scan attached and a plain instruction to proceed with payment. The manager is not involved at all: the chain runs from paper in an envelope to a notified client without a person in the middle.',
          ],
        },
        {
          title: '5. Receipts: captured at the moment of purchase',
          paragraphs: [
            'A mobile application. The client photographs the receipt when they get it, instead of keeping paper in a wallet to archive and send weeks later, which is also the point at which receipts get lost.',
          ],
        },
        {
          title: '6. OCR plus a domain model does the accounting reading',
          paragraphs: [
            'Integrated OCR extracts the merchant, the date, the total and the VAT. A model trained on accounting categories then proposes the accounting category (meals, transport and the rest) along with the other parameters the posting needs, including how it was paid.',
            'Multi-language OCR removes the problem of non-Latin receipts: the script stops being a barrier to accurate capture, and with it goes the class of transcription errors nobody downstream could catch.',
          ],
        },
        {
          title: '7. Straight into the accounting system',
          paragraphs: [
            "The digitised receipt and the recognised data go into the firm's accounting system without manual re-entry. Expense data is available in the accounts in real time rather than at month end, which changes what the fiduciary can tell a client and when.",
            'One constraint shaped the design. Swiss rules allow most operational documents (supplier invoices, till receipts, bank statements) to be destroyed after scanning, but only where the scanning procedure is documented and internally controlled, and archiving satisfies GeBüV: unalterable, available and systematically filed for the ten-year retention period. The tax authority can still ask for an original in a VAT audit, and documents of title and similar instruments (contracts, securities, notarial deeds) are excluded from replacement scanning entirely. So the system was built to produce an archive that survives an audit, not merely a searchable folder.',
          ],
        },
        {
          title: 'The volumes the results are calculated on',
          paragraphs: [
            "A book of roughly 120 SME clients, of which some 40 use the firm's address as their correspondence address. That produces about 50 letters a working day, and about 2'500 expense receipts a month across the book. An operator's loaded cost is taken at CHF 55 an hour.",
          ],
        },
      ],
      table: {
        title: 'Results',
        beforeLabel: 'Before',
        afterLabel: 'After',
        rows: [
          { label: 'Handling one incoming letter', before: '~3 min: open, scan, read to find the client, look up the manager, judge urgency, route', after: '~30 s of scanning; everything after it is automatic' },
          { label: 'Operator time on mail, per day', before: '~2 h 30', after: '~40 min, exceptions included' },
          { label: 'Letters that reach a manager at all', before: '100 %', after: '~65 %; the rest are client-action letters routed straight to the client' },
          { label: 'Time from a letter arriving to the right person knowing about it', before: 'same day if the pile was worked through, next day if not', after: 'minutes, and urgent items are flagged first' },
          { label: 'Documents lost or misrouted', before: '1–2 a month, found late', after: 'none: every letter scanned, summarised, archived, traceable' },
          { label: 'Handling one expense receipt', before: '~2 min 30: read merchant, amount, VAT, assign category and payment method, key it in', after: '~40 s, and only on the ~15 % the model flags for review' },
          { label: 'Operator time on receipts, per month', before: '~105 h', after: '~12 h' },
          { label: 'Field-level errors on foreign-script receipts', before: '~3–4 % of captured fields', after: 'under 1 %' },
          { label: 'Expense data available in the accounts', before: '3–4 weeks, whenever the batch was worked through', after: 'same day' },
          { label: 'Client effort per month on receipts', before: '30–45 min collecting, photographing and sending', after: '~10 s per receipt, at the till' },
          { label: 'Operator hours returned, per month', before: 'n/a', after: "~135 h ≈ CHF 7'400 ≈ 0.8 FTE" },
        ],
      },
      next: [
        'Payment initiation from a recognised invoice: the step immediately after the client notification, with approval kept human.',
        'Confidence thresholds and exception review: as volume grows, low-confidence extractions go to an operator queue instead of passing through silently.',
        'Extending capture to the rest of the document mix. Bank documents, contracts and official forms have different rules and different risks; receipts and letters were the right two to do first.',
        'Client-side visibility: letting the client see what arrived at their correspondence address, and what was done with it, without asking the firm.',
      ],
      elsewhereIntro:
        "Wherever a professional firm's raw material is other people's paper, arriving unpredictably and requiring a person to read it before anything can be filed:",
      elsewhere: [
        'fiduciaries, accountants and payroll bureaux',
        'law firms and notaries handling correspondence for clients',
        "domiciliation and company-formation services, whose address is the client's official address by design",
        'property management, where incoming mail concerns a building rather than a company',
        'any back office where an operator sorts documents to find the responsible colleague',
      ],
      meta: {
        title: 'Fiduciary mail & receipts, machine-read | Trident Software',
        description:
          'Two paper queues replaced by scan-and-route and photo-and-post. About 135 operator hours a month returned, modelled from the firm’s volumes.',
      },
    },
    de: {
      client: 'Treuhandbüro, Schweiz',
      industry: 'Dienstleistungen · Schweiz',
      hero: {
        title: 'Treuhand: Posteingang und Spesenbelege, maschinell gelesen',
        tagline: 'Zwei Papierstapel, die durch die Hände einer einzigen Person liefen, ersetzt durch Scannen und Zuweisen sowie Fotografieren und Verbuchen',
      },
      note: 'Zwei umgesetzte Arbeitspakete für ein Schweizer Treuhandbüro, beschrieben ohne den Namen des Kunden. Beide sind im Betrieb. Geliefert wurden die Prozessänderungen; die Zahlen unter Ergebnisse sind aus den Volumen des Büros modelliert und als solche gekennzeichnet, bis der Kunde selbst gemessen hat.',
      results: [
        { metric: 'Zeit für die Post, pro Tag', value: '~2 h 30 → ~40 min' },
        { metric: 'Zeit für Belege, pro Monat', value: '~105 h → ~12 h' },
        { metric: 'Zurückgewonnene Stunden, pro Monat', value: '~135 h ≈ 0.8 VZÄ' },
      ],
      sections: [
        {
          title: 'Das Unternehmen',
          paragraphs: [
            'Ein Schweizer Treuhandbüro: Buchhaltung, Lohn und Steuern für einen Stamm von KMU-Kunden, geführt auf Französisch, mit Kunden, die in mehreren Sprachen schreiben.',
            'Zwei Eigenschaften dieses Geschäftsmodells sind hier entscheidend. Erstens führt das Büro die Buchhaltung seiner Kunden, sein Rohstoff ist also das Papier anderer: Lieferantenrechnungen, Kassenzettel, amtliche Schreiben. Zweitens nutzen viele Kundenfirmen die Adresse des Büros als offizielle Korrespondenzadresse. Die Post, die jeden Morgen eintrifft, ist also nicht die eigene Post des Treuhänders, sondern die Post Dutzender eigenständiger Rechtseinheiten, gemischt auf einem Stapel.',
            'Beides führt zum selben Engpass: Jemand muss jedes Dokument lesen, bevor irgendetwas geschehen kann.',
          ],
        },
        {
          title: 'Vorher: die Morgenpost',
          paragraphs: [
            'Jeden Tag öffnete eine Mitarbeiterin die eingehende Post, scannte sie von Hand und las dann jedes Dokument, um zwei Dinge herauszufinden: zu welchem Kunden es gehört und welche Mandatsleitung im Büro für diesen Kunden zuständig ist. Danach schätzte sie die Dringlichkeit ein und leitete weiter: die Mandatsleitung informieren oder das Dokument an den Endkunden schicken.',
            'Das war langsam und, schlimmer noch, fehleranfällig. Ein Brief, der innert Tagen eine Antwort brauchte, konnte auf dem falschen Stapel liegen, ohne dass der Ablauf es bemerkte. In diesem Beruf sind Fristen gesetzlich, und das Risiko ist die Haftung, nicht bloss eine Peinlichkeit.',
          ],
        },
        {
          title: 'Die Spesenbelege',
          paragraphs: [
            'Die Kunden schickten ihre Kassenzettel als Handyfotos oder per Post. Eine Mitarbeiterin digitalisierte jeden einzelnen, bestimmte Händler, Betrag und MWST, ordnete das Buchhaltungskonto zu, notierte die Zahlungsart (bar, Firmenkarte, private Karte) und tippte alles ins System.',
            'Alles von Hand und auf eine Art fehleranfällig, die man leicht unterschätzt: Ein spürbarer Teil der Belege kam in Fremdsprachen und nichtlateinischen Schriften wie Kyrillisch, Chinesisch und Arabisch. Wer die Schrift nicht lesen kann, kann nicht prüfen, was er eintippt, und die Fehlerquote steigt genau dort, wo der Prüfpfad zählt.',
          ],
        },
        {
          title: 'Ein Engpass, zwei Stapel',
          paragraphs: [
            'Beide Stapel verbrauchten dieselbe knappe Ressource, eine Person, die Dokumente liest, und keine der beiden Aufgaben verlangte das Urteilsvermögen, für das eine ausgebildete Fachperson bezahlt wird. Das Büro kaufte Fachkompetenz und setzte sie für Datenerfassung ein.',
          ],
        },
        {
          title: 'Was wir gebaut haben',
          paragraphs: ['Zwei Anwendungen, getrennt geliefert, die in dieselbe Buchhaltung schreiben.'],
        },
        {
          title: '1. Post: Scannen wird der einzige manuelle Schritt',
          paragraphs: [
            'Ein Brief kommt an, und die Mitarbeiterin scannt ihn, was mit einem Multifunktionsgerät fast sofort geht. Alles andere an diesem Brief ist keine Aufgabe für einen Menschen mehr.',
          ],
        },
        {
          title: '2. Kunde und Mandatsleitung werden aus dem Inhalt erkannt',
          paragraphs: [
            'Die OCR liest den Scan, die Anwendung ordnet das Dokument anhand seines Inhalts der Kundenfirma zu und sucht die zuständige Mandatsleitung in der internen Datenbank des Büros. Die zwei Fragen, für die man früher den ganzen Brief lesen musste, sind beantwortet, bevor ihn jemand sieht.',
          ],
        },
        {
          title: '3. Eine Zusammenfassung und eine Priorität statt eines Scans',
          paragraphs: [
            'Eine KI liest den Brief und erstellt eine kurze, klare Zusammenfassung seines Inhalts sowie eine Einschätzung der Priorität: normal, hoch, dringend. Die Mandatsleitung liest zuerst diese Zusammenfassung, und so lässt sich ein Stapel Scans auf einen Blick sortieren.',
          ],
        },
        {
          title: '4. Danach geschieht automatisch eines von zwei Dingen',
          items: [
            'Das Büro muss handeln. Auf der internen Plattform wird eine Aufgabe erstellt, und die zuständige Mandatsleitung wird sofort benachrichtigt, mit Zusammenfassung und Scans im Anhang.',
            'Der Kunde muss handeln, meist eine Rechnung bezahlen. Die Anwendung schickt dem Kunden direkt eine E-Mail mit dem Scan und der klaren Anweisung, die Zahlung auszulösen. Die Mandatsleitung ist gar nicht beteiligt: Die Kette reicht vom Papier im Couvert bis zum informierten Kunden, ohne dass ein Mensch dazwischen steht.',
          ],
        },
        {
          title: '5. Belege: erfasst im Moment des Kaufs',
          paragraphs: [
            'Eine mobile App. Der Kunde fotografiert den Beleg, wenn er ihn erhält, statt Papier im Portemonnaie aufzubewahren und Wochen später abzulegen und zu verschicken, also genau dann, wenn Belege verloren gehen.',
          ],
        },
        {
          title: '6. OCR und ein Fachmodell übernehmen das buchhalterische Lesen',
          paragraphs: [
            'Die integrierte OCR erfasst Händler, Datum, Gesamtbetrag und MWST. Eine auf das Fachgebiet trainierte KI schlägt dann das Buchhaltungskonto vor (Verpflegung, Transport und so weiter) sowie die übrigen Angaben, die die Buchung braucht, einschliesslich der Zahlungsart.',
            'Mit mehrsprachiger OCR sind Belege in nichtlateinischer Schrift kein Problem mehr: Die Schrift verhindert keine genaue Erfassung, und mit ihr verschwinden die Abtippfehler, die später niemand mehr hätte entdecken können.',
          ],
        },
        {
          title: '7. Direkt in die Buchhaltung',
          paragraphs: [
            'Der digitalisierte Beleg und die erkannten Daten gehen ohne erneute Erfassung in die Buchhaltung des Büros. Spesendaten stehen in Echtzeit in der Buchhaltung statt erst am Monatsende, und das ändert, was der Treuhänder einem Kunden wann sagen kann.',
            'Eine Vorgabe hat das Design geprägt. Schweizer Regeln erlauben, die meisten Geschäftsunterlagen (Lieferantenrechnungen, Kassenzettel, Kontoauszüge) nach dem Scannen zu vernichten, aber nur, wenn das Scanverfahren dokumentiert und intern kontrolliert ist und die Archivierung die GeBüV erfüllt: unveränderbar, verfügbar und systematisch abgelegt während der zehnjährigen Aufbewahrungsfrist. Die Steuerverwaltung kann bei einer MWST-Kontrolle trotzdem ein Original verlangen, und Urkunden mit Wertpapiercharakter (Verträge, Wertpapiere, notarielle Urkunden) sind vom ersetzenden Scannen ganz ausgenommen. Deshalb erzeugt das System ein Archiv, das eine Prüfung übersteht, und nicht bloss einen durchsuchbaren Ordner.',
          ],
        },
        {
          title: 'Die Volumen, auf denen die Ergebnisse beruhen',
          paragraphs: [
            "Ein Stamm von rund 120 KMU-Kunden, von denen etwa 40 die Adresse des Büros als Korrespondenzadresse nutzen. Das ergibt rund 50 Briefe pro Arbeitstag und rund 2'500 Spesenbelege pro Monat über alle Kunden. Die Vollkosten einer Mitarbeiterin sind mit CHF 55 pro Stunde angesetzt.",
          ],
        },
      ],
      table: {
        title: 'Ergebnisse',
        beforeLabel: 'Vorher',
        afterLabel: 'Nachher',
        rows: [
          { label: 'Bearbeitung eines eingehenden Briefs', before: '~3 min: öffnen, scannen, lesen, um den Kunden zu finden, Mandatsleitung nachschlagen, Dringlichkeit einschätzen, weiterleiten', after: '~30 s Scannen; alles danach läuft automatisch' },
          { label: 'Zeit für die Post, pro Tag', before: '~2 h 30', after: '~40 min, Ausnahmen inbegriffen' },
          { label: 'Briefe, die überhaupt bei einer Mandatsleitung landen', before: '100 %', after: '~65 %; der Rest sind Briefe, bei denen der Kunde handeln muss, und gehen direkt an ihn' },
          { label: 'Zeit vom Eingang eines Briefs, bis die richtige Person davon weiss', before: 'am selben Tag, wenn der Stapel abgearbeitet wurde, sonst am nächsten Tag', after: 'Minuten, Dringendes wird zuerst markiert' },
          { label: 'Verlorene oder falsch weitergeleitete Dokumente', before: '1–2 pro Monat, spät entdeckt', after: 'keine: jeder Brief gescannt, zusammengefasst, archiviert, nachvollziehbar' },
          { label: 'Bearbeitung eines Spesenbelegs', before: '~2 min 30: Händler, Betrag, MWST lesen, Konto und Zahlungsart zuordnen, eintippen', after: '~40 s, und nur bei den ~15 %, die das Modell zur Prüfung markiert' },
          { label: 'Zeit für Belege, pro Monat', before: '~105 h', after: '~12 h' },
          { label: 'Feldfehler bei Belegen in fremder Schrift', before: '~3–4 % der erfassten Felder', after: 'unter 1 %' },
          { label: 'Spesendaten in der Buchhaltung verfügbar', before: '3–4 Wochen, je nachdem, wann der Stapel abgearbeitet wurde', after: 'am selben Tag' },
          { label: 'Aufwand des Kunden pro Monat für Belege', before: '30–45 min Sammeln, Fotografieren und Verschicken', after: '~10 s pro Beleg, an der Kasse' },
          { label: 'Zurückgewonnene Stunden, pro Monat', before: 'entfällt', after: "~135 h ≈ CHF 7'400 ≈ 0.8 VZÄ" },
        ],
      },
      next: [
        'Zahlungsauslösung aus einer erkannten Rechnung: der Schritt direkt nach der Benachrichtigung des Kunden, wobei die Freigabe bei einem Menschen bleibt.',
        'Vertrauensschwellen und Prüfung von Ausnahmen: Mit wachsendem Volumen gehen unsichere Erkennungen in eine Prüfwarteschlange, statt stillschweigend durchzulaufen.',
        'Erfassung der übrigen Dokumente. Bankunterlagen, Verträge und amtliche Formulare folgen anderen Regeln und bergen andere Risiken; Belege und Briefe waren die richtigen zwei für den Anfang.',
        'Sicht für den Kunden: Der Kunde sieht, was an seine Korrespondenzadresse kam und was damit geschah, ohne beim Büro nachzufragen.',
      ],
      elsewhereIntro:
        'Überall dort, wo der Rohstoff eines Dienstleisters das Papier anderer ist, das unvorhersehbar eintrifft und von jemandem gelesen werden muss, bevor es abgelegt werden kann:',
      elsewhere: [
        'Treuhandbüros, Buchhaltungen und Lohnbüros',
        'Anwaltskanzleien und Notariate, die Korrespondenz für Kunden bearbeiten',
        'Domizil- und Gründungsdienste, deren Adresse per Definition die offizielle Adresse des Kunden ist',
        'Liegenschaftsverwaltungen, bei denen die Post ein Gebäude betrifft und keine Firma',
        'jedes Backoffice, in dem jemand Dokumente sortiert, um die zuständige Person zu finden',
      ],
      meta: {
        title: 'Treuhand: Post und Belege ohne erneutes Abtippen | Trident Software',
        description:
          'Morgenpost scannen und zuweisen, Belege fotografieren und verbuchen, beides im Betrieb. Rund 135 Stunden pro Monat zurück, modelliert aus den Volumen des Büros.',
      },
    },
    fr: {
      client: 'Fiduciaire, Suisse',
      industry: 'Services professionnels · Suisse',
      hero: {
        title: 'Fiduciaire : courrier entrant et justificatifs de frais, lus par la machine',
        tagline: "Deux piles de papier qui passaient par les mains d'une seule personne, remplacées par « scanner et router » et « photographier et comptabiliser »",
      },
      note: "Deux chantiers livrés pour une fiduciaire suisse, décrits sans le nom du client. Les deux sont en production. Ce qui a été livré, ce sont les changements de processus ; les chiffres des résultats sont modélisés à partir des volumes de la fiduciaire et signalés comme tels, en attendant la mesure du client lui-même.",
      results: [
        { metric: 'Temps consacré au courrier, par jour', value: '~2 h 30 → ~40 min' },
        { metric: 'Temps consacré aux justificatifs, par mois', value: '~105 h → ~12 h' },
        { metric: 'Heures rendues, par mois', value: '~135 h ≈ 0.8 EPT' },
      ],
      sections: [
        {
          title: "L'entreprise",
          paragraphs: [
            "Une fiduciaire suisse : comptabilité, salaires et impôts pour un portefeuille de PME clientes, gérée en français, avec des clients qui écrivent en plusieurs langues.",
            "Deux traits de ce modèle d'affaires comptent ici. D'abord, la fiduciaire tient la comptabilité de ses clients, sa matière première est donc le papier des autres : factures fournisseurs, tickets de caisse, courriers officiels. Ensuite, beaucoup d'entreprises clientes utilisent l'adresse de la fiduciaire comme adresse officielle de correspondance. Le courrier qui arrive chaque matin n'est donc pas celui de la fiduciaire, mais celui de dizaines d'entités juridiques distinctes, mélangé en une seule pile.",
            "Les deux mènent au même goulet d'étranglement : quelqu'un doit lire chaque document avant que quoi que ce soit puisse se passer.",
          ],
        },
        {
          title: 'Avant : le courrier du matin',
          paragraphs: [
            "Chaque jour, une collaboratrice ouvrait le courrier, le scannait à la main, puis lisait chaque document pour savoir deux choses : à quel client il appartenait et quel gestionnaire de la fiduciaire suivait ce client. Elle évaluait ensuite l'urgence et aiguillait : prévenir le gestionnaire ou transmettre le document au client final.",
            "C'était lent et, pire, facile à oublier. Une lettre qui demandait une réponse sous quelques jours pouvait rester sur la mauvaise pile sans que rien dans le processus ne s'en aperçoive. Dans ce métier, les délais sont légaux, et le risque n'est pas l'embarras mais la responsabilité.",
          ],
        },
        {
          title: 'Les justificatifs de frais',
          paragraphs: [
            "Les clients envoyaient leurs tickets de caisse en photo depuis leur téléphone ou par la poste. Une collaboratrice numérisait chacun d'eux, identifiait le commerçant, le montant et la TVA, attribuait la catégorie comptable, notait le moyen de paiement (espèces, carte de l'entreprise, carte personnelle) et saisissait le tout.",
            "Tout était manuel, et sujet à des erreurs d'un type qu'on sous-estime facilement : une part non négligeable des justificatifs arrivait en langues étrangères et en écritures non latines, comme le cyrillique, le chinois ou l'arabe. Quelqu'un qui ne sait pas lire l'écriture ne peut pas vérifier ce qu'il saisit, et le taux d'erreur augmente précisément là où la piste d'audit compte.",
          ],
        },
        {
          title: "Un goulet d'étranglement, deux piles",
          paragraphs: [
            "Les deux piles consommaient la même ressource rare, une personne qui lit des documents, et aucune des deux tâches ne demandait le jugement pour lequel un comptable qualifié est payé. La fiduciaire achetait de l'attention professionnelle et la dépensait en saisie.",
          ],
        },
        {
          title: 'Ce que nous avons construit',
          paragraphs: ['Deux applications, livrées séparément, qui alimentent la même comptabilité.'],
        },
        {
          title: '1. Courrier : le scan devient la seule étape manuelle',
          paragraphs: [
            "Une lettre arrive et la collaboratrice la scanne, ce qu'un appareil multifonction rend presque instantané. Plus rien d'autre dans le traitement de cette lettre n'est une tâche humaine.",
          ],
        },
        {
          title: '2. Le client et le gestionnaire responsable sont identifiés à partir du contenu',
          paragraphs: [
            "L'OCR lit le scan, l'application rattache le document à l'entreprise cliente d'après ce qui y est écrit, puis cherche le gestionnaire attitré dans la base interne de la fiduciaire. Les deux questions qui exigeaient de lire toute la lettre sont réglées avant que quiconque la voie.",
          ],
        },
        {
          title: "3. Un résumé et une priorité au lieu d'un scan brut",
          paragraphs: [
            "Une IA lit la lettre et produit un résumé court et clair de son contenu, avec une estimation de priorité : normale, haute, urgente. Le gestionnaire lit d'abord ce résumé, ce qui permet de trier une pile de scans d'un coup d'œil.",
          ],
        },
        {
          title: "4. Ensuite, l'une de deux choses se produit automatiquement",
          items: [
            "La fiduciaire doit agir. Une tâche est créée sur la plateforme interne et le gestionnaire responsable est prévenu aussitôt, avec le résumé et les documents scannés en pièce jointe.",
            "Le client doit agir, le plus souvent payer une facture. L'application envoie directement un e-mail au client avec le scan et une consigne simple : procéder au paiement. Le gestionnaire n'intervient pas du tout : la chaîne va du papier dans l'enveloppe au client informé, sans personne au milieu.",
          ],
        },
        {
          title: "5. Justificatifs : saisis au moment de l'achat",
          paragraphs: [
            "Une application mobile. Le client photographie le ticket dès qu'il le reçoit, au lieu de garder le papier dans son portefeuille pour le classer et l'envoyer des semaines plus tard, ce qui est justement le moment où les justificatifs se perdent.",
          ],
        },
        {
          title: '6. OCR et modèle métier font la lecture comptable',
          paragraphs: [
            "L'OCR intégrée extrait le commerçant, la date, le total et la TVA. Une IA métier propose ensuite la catégorie comptable (repas, transport, etc.) ainsi que les autres paramètres dont l'écriture a besoin, y compris le moyen de paiement.",
            "Avec une OCR multilingue, les tickets en écriture non latine ne posent plus de problème : l'écriture n'empêche plus une saisie exacte, et avec elle disparaissent les erreurs de transcription que personne en aval n'aurait pu repérer.",
          ],
        },
        {
          title: '7. Directement dans la comptabilité',
          paragraphs: [
            "Le justificatif numérisé et les données reconnues entrent dans la comptabilité de la fiduciaire sans ressaisie. Les frais apparaissent dans les comptes en temps réel et non en fin de mois, ce qui change ce que la fiduciaire peut dire à un client, et quand.",
            "Une contrainte a façonné la conception. Les règles suisses permettent de détruire la plupart des pièces courantes (factures fournisseurs, tickets de caisse, relevés bancaires) après numérisation, mais seulement si la procédure de numérisation est documentée et contrôlée en interne, et si l'archivage respecte l'ordonnance concernant la tenue et la conservation des livres de comptes (Olico) : inaltérable, disponible et classé de manière systématique pendant le délai de conservation de dix ans. L'administration fiscale peut toujours exiger un original lors d'un contrôle TVA, et les titres ayant valeur de gage ou de titre (contrats, papiers-valeurs, actes notariés) sont totalement exclus de la numérisation de substitution. Le système a donc été conçu pour produire une archive qui résiste à un audit, et pas seulement un dossier où l'on peut chercher.",
          ],
        },
        {
          title: 'Les volumes sur lesquels reposent les résultats',
          paragraphs: [
            "Un portefeuille d'environ 120 PME clientes, dont quelque 40 utilisent l'adresse de la fiduciaire comme adresse de correspondance. Cela représente environ 50 lettres par jour ouvrable et environ 2'500 justificatifs de frais par mois sur l'ensemble du portefeuille. Le coût complet d'une collaboratrice est fixé à CHF 55 de l'heure.",
          ],
        },
      ],
      table: {
        title: 'Résultats',
        beforeLabel: 'Avant',
        afterLabel: 'Après',
        rows: [
          { label: "Traitement d'une lettre entrante", before: '~3 min : ouvrir, scanner, lire pour trouver le client, chercher le gestionnaire, évaluer l’urgence, aiguiller', after: "~30 s de scan ; tout le reste est automatique" },
          { label: 'Temps consacré au courrier, par jour', before: '~2 h 30', after: '~40 min, exceptions comprises' },
          { label: 'Lettres qui passent par un gestionnaire', before: '100 %', after: "~65 % ; les autres demandent une action du client et lui sont envoyées directement" },
          { label: "Délai entre l'arrivée d'une lettre et le moment où la bonne personne est au courant", before: "le jour même si la pile a été traitée, sinon le lendemain", after: 'quelques minutes, les urgences sont signalées en premier' },
          { label: 'Documents perdus ou mal aiguillés', before: '1–2 par mois, découverts tard', after: 'aucun : chaque lettre scannée, résumée, archivée, traçable' },
          { label: "Traitement d'un justificatif", before: '~2 min 30 : lire commerçant, montant, TVA, attribuer catégorie et moyen de paiement, saisir', after: "~40 s, et seulement pour les ~15 % que le modèle signale à vérifier" },
          { label: 'Temps consacré aux justificatifs, par mois', before: '~105 h', after: '~12 h' },
          { label: 'Erreurs de champ sur les justificatifs en écriture étrangère', before: '~3–4 % des champs saisis', after: 'moins de 1 %' },
          { label: 'Frais disponibles dans les comptes', before: '3–4 semaines, selon le moment où la pile était traitée', after: 'le jour même' },
          { label: 'Effort du client par mois pour les justificatifs', before: '30–45 min pour rassembler, photographier et envoyer', after: '~10 s par ticket, à la caisse' },
          { label: 'Heures rendues, par mois', before: 'sans objet', after: "~135 h ≈ CHF 7'400 ≈ 0.8 EPT" },
        ],
      },
      next: [
        "Déclenchement du paiement à partir d'une facture reconnue : l'étape qui suit directement la notification du client, la validation restant humaine.",
        "Seuils de confiance et revue des exceptions : à mesure que le volume augmente, les extractions peu sûres vont dans une file de contrôle au lieu de passer en silence.",
        "Étendre la saisie au reste des documents. Documents bancaires, contrats et formulaires officiels obéissent à d'autres règles et présentent d'autres risques ; tickets et lettres étaient les deux bons par où commencer.",
        "Visibilité côté client : permettre au client de voir ce qui est arrivé à son adresse de correspondance et ce qui en a été fait, sans le demander à la fiduciaire.",
      ],
      elsewhereIntro:
        "Partout où la matière première d'un cabinet est le papier des autres, qui arrive de façon imprévisible et doit être lu par quelqu'un avant de pouvoir être classé :",
      elsewhere: [
        'fiduciaires, comptables et bureaux de gestion des salaires',
        'études d’avocats et de notaires qui traitent la correspondance de leurs clients',
        "services de domiciliation et de création d'entreprises, dont l'adresse est par définition l'adresse officielle du client",
        "gérances immobilières, où le courrier concerne un immeuble plutôt qu'une entreprise",
        "tout back-office où quelqu'un trie des documents pour trouver le collègue responsable",
      ],
      meta: {
        title: 'Fiduciaire : courrier et justificatifs sans ressaisie | Trident Software',
        description:
          "Courrier scanné et aiguillé, tickets photographiés et comptabilisés, les deux en production. Environ 135 heures rendues par mois, selon un modèle.",
      },
    },
    it: {
      client: 'Fiduciaria, Svizzera',
      industry: 'Servizi professionali · Svizzera',
      hero: {
        title: 'Fiduciaria: posta in entrata e giustificativi di spesa, letti dalla macchina',
        tagline: "Due pile di carta che passavano per le mani di una sola persona, sostituite da «scansiona e smista» e «fotografa e registra»",
      },
      note: "Due progetti realizzati per una fiduciaria svizzera, descritti senza il nome del cliente. Entrambi sono in produzione. Sono stati consegnati i cambiamenti di processo; le cifre dei risultati sono modellate sui volumi della fiduciaria e indicate come tali, in attesa della misurazione del cliente stesso.",
      results: [
        { metric: 'Tempo dedicato alla posta, al giorno', value: '~2 h 30 → ~40 min' },
        { metric: 'Tempo dedicato ai giustificativi, al mese', value: '~105 h → ~12 h' },
        { metric: 'Ore restituite, al mese', value: '~135 h ≈ 0.8 ETP' },
      ],
      sections: [
        {
          title: "L'azienda",
          paragraphs: [
            "Una fiduciaria svizzera: contabilità, stipendi e imposte per un portafoglio di PMI clienti, gestita in francese, con clienti che scrivono in più lingue.",
            "Due aspetti di questo modello di business contano qui. Primo, la fiduciaria tiene la contabilità dei clienti, quindi la sua materia prima è la carta degli altri: fatture dei fornitori, scontrini, lettere ufficiali. Secondo, molte aziende clienti usano l'indirizzo della fiduciaria come indirizzo ufficiale di corrispondenza. La posta che arriva ogni mattina non è quindi quella della fiduciaria, ma quella di decine di entità giuridiche distinte, mescolata in un'unica pila.",
            "Entrambi portano allo stesso collo di bottiglia: qualcuno deve leggere ogni documento prima che possa succedere qualsiasi cosa.",
          ],
        },
        {
          title: 'Prima: la posta del mattino',
          paragraphs: [
            "Ogni giorno una collaboratrice apriva la posta, la scansionava a mano e poi leggeva ogni documento per capire due cose: a quale cliente apparteneva e quale responsabile della fiduciaria seguiva quel cliente. Poi ne valutava l'urgenza e lo smistava: avvisare il responsabile o inoltrare il documento al cliente finale.",
            "Lento e, peggio ancora, facile da dimenticare. Una lettera che richiedeva una risposta entro pochi giorni poteva finire sulla pila sbagliata senza che il processo se ne accorgesse. In questo mestiere le scadenze sono di legge, e il rischio non è una brutta figura ma la responsabilità.",
          ],
        },
        {
          title: 'I giustificativi di spesa',
          paragraphs: [
            "I clienti mandavano gli scontrini come foto dal telefono o per posta. Una collaboratrice li digitalizzava uno per uno, individuava esercente, importo e IVA, assegnava la categoria contabile, annotava il mezzo di pagamento (contanti, carta aziendale, carta personale) e inseriva tutto nel sistema.",
            "Tutto a mano, e soggetto a errori di un tipo che si sottovaluta facilmente: una parte consistente degli scontrini arrivava in lingue straniere e in alfabeti non latini come il cirillico, il cinese e l'arabo. Chi non sa leggere l'alfabeto non può verificare ciò che digita, e il tasso di errore sale proprio dove la tracciabilità conta.",
          ],
        },
        {
          title: 'Un collo di bottiglia, due pile',
          paragraphs: [
            "Le due pile consumavano la stessa risorsa scarsa, una persona che legge documenti, e nessuno dei due compiti richiedeva il giudizio per cui si paga un contabile qualificato. La fiduciaria comprava attenzione professionale e la spendeva in inserimento dati.",
          ],
        },
        {
          title: 'Che cosa abbiamo realizzato',
          paragraphs: ['Due applicazioni, consegnate separatamente, che alimentano la stessa contabilità.'],
        },
        {
          title: "1. Posta: la scansione diventa l'unico passaggio manuale",
          paragraphs: [
            "Arriva una lettera e la collaboratrice la scansiona, cosa che una multifunzione rende quasi istantanea. Nient'altro di quella lettera è più un compito per una persona.",
          ],
        },
        {
          title: '2. Il cliente e il responsabile vengono riconosciuti dal contenuto',
          paragraphs: [
            "L'OCR legge la scansione, l'applicazione abbina il documento all'azienda cliente in base a ciò che vi è scritto e cerca il responsabile assegnato nella banca dati interna della fiduciaria. Le due domande che richiedevano la lettura dell'intera lettera hanno risposta prima che qualcuno la veda.",
          ],
        },
        {
          title: '3. Un riassunto e una priorità invece di una semplice scansione',
          paragraphs: [
            "Un'IA legge la lettera e produce un riassunto breve e chiaro del contenuto, più una stima della priorità: normale, alta, urgente. Il responsabile legge prima questo riassunto, e così una pila di scansioni si smista a colpo d'occhio.",
          ],
        },
        {
          title: '4. Poi succede automaticamente una di due cose',
          items: [
            "La fiduciaria deve agire. Sulla piattaforma interna viene creata un'attività e il responsabile viene avvisato subito, con il riassunto e i documenti scansionati in allegato.",
            "Il cliente deve agire, di solito pagare una fattura. L'applicazione invia direttamente un'e-mail al cliente con la scansione e un'indicazione semplice: procedere al pagamento. Il responsabile non è coinvolto affatto: la catena va dalla carta nella busta al cliente avvisato, senza nessuno in mezzo.",
          ],
        },
        {
          title: "5. Giustificativi: acquisiti al momento dell'acquisto",
          paragraphs: [
            "Un'app mobile. Il cliente fotografa lo scontrino appena lo riceve, invece di tenerlo nel portafoglio per archiviarlo e spedirlo settimane dopo, che è proprio il momento in cui gli scontrini si perdono.",
          ],
        },
        {
          title: '6. OCR e un modello di dominio fanno la lettura contabile',
          paragraphs: [
            "L'OCR integrato estrae esercente, data, totale e IVA. Un'IA specifica per il settore propone poi la categoria contabile (pasti, trasporti e così via) e gli altri parametri che la registrazione richiede, compreso il mezzo di pagamento.",
            "Con un OCR multilingue gli scontrini in alfabeti non latini non sono più un problema: l'alfabeto non impedisce più un'acquisizione accurata, e con esso spariscono gli errori di trascrizione che nessuno a valle avrebbe potuto scoprire.",
          ],
        },
        {
          title: '7. Direttamente nella contabilità',
          paragraphs: [
            "Lo scontrino digitalizzato e i dati riconosciuti entrano nella contabilità della fiduciaria senza essere ridigitati. Le spese compaiono nei conti in tempo reale invece che a fine mese, e questo cambia ciò che la fiduciaria può dire a un cliente, e quando.",
            "Un vincolo ha dato forma al progetto. Le norme svizzere permettono di distruggere la maggior parte dei documenti correnti (fatture dei fornitori, scontrini, estratti conto) dopo la scansione, ma solo se la procedura di scansione è documentata e controllata internamente e se l'archiviazione rispetta l'ordinanza sulla tenuta e la conservazione dei libri di commercio (GeBüV): inalterabile, disponibile e ordinata sistematicamente per il periodo di conservazione di dieci anni. L'autorità fiscale può comunque chiedere un originale in una verifica IVA, e i documenti con carattere di titolo (contratti, titoli di credito, atti notarili) sono del tutto esclusi dalla scansione sostitutiva. Il sistema è stato quindi costruito per produrre un archivio che regga a una verifica, non solo una cartella in cui cercare.",
          ],
        },
        {
          title: 'I volumi su cui si basano i risultati',
          paragraphs: [
            "Un portafoglio di circa 120 PMI clienti, di cui circa 40 usano l'indirizzo della fiduciaria come indirizzo di corrispondenza. Ne risultano circa 50 lettere per giorno lavorativo e circa 2'500 giustificativi di spesa al mese sull'intero portafoglio. Il costo pieno di una collaboratrice è stimato in CHF 55 all'ora.",
          ],
        },
      ],
      table: {
        title: 'Risultati',
        beforeLabel: 'Prima',
        afterLabel: 'Dopo',
        rows: [
          { label: 'Gestione di una lettera in entrata', before: "~3 min: aprire, scansionare, leggere per trovare il cliente, cercare il responsabile, valutare l'urgenza, smistare", after: '~30 s di scansione; tutto il resto è automatico' },
          { label: 'Tempo dedicato alla posta, al giorno', before: '~2 h 30', after: '~40 min, eccezioni comprese' },
          { label: 'Lettere che arrivano a un responsabile', before: '100 %', after: '~65 %; le altre richiedono un intervento del cliente e vanno direttamente a lui' },
          { label: "Tempo tra l'arrivo di una lettera e il momento in cui la persona giusta lo sa", before: 'in giornata se la pila veniva smaltita, altrimenti il giorno dopo', after: 'pochi minuti, le urgenze sono segnalate per prime' },
          { label: 'Documenti persi o smistati male', before: '1–2 al mese, scoperti tardi', after: 'nessuno: ogni lettera scansionata, riassunta, archiviata, tracciabile' },
          { label: 'Gestione di un giustificativo', before: '~2 min 30: leggere esercente, importo, IVA, assegnare categoria e mezzo di pagamento, digitare', after: '~40 s, e solo per il ~15 % che il modello segnala da controllare' },
          { label: 'Tempo dedicato ai giustificativi, al mese', before: '~105 h', after: '~12 h' },
          { label: 'Errori di campo sugli scontrini in alfabeti stranieri', before: '~3–4 % dei campi acquisiti', after: 'meno dell’1 %' },
          { label: 'Spese disponibili nei conti', before: '3–4 settimane, a seconda di quando veniva smaltita la pila', after: 'in giornata' },
          { label: 'Impegno del cliente al mese per i giustificativi', before: '30–45 min per raccogliere, fotografare e spedire', after: '~10 s per scontrino, alla cassa' },
          { label: 'Ore restituite, al mese', before: 'non applicabile', after: "~135 h ≈ CHF 7'400 ≈ 0.8 ETP" },
        ],
      },
      next: [
        "Avvio del pagamento da una fattura riconosciuta: il passaggio subito dopo l'avviso al cliente, con l'approvazione che resta umana.",
        "Soglie di affidabilità e controllo delle eccezioni: con l'aumento dei volumi, le estrazioni poco affidabili finiscono in una coda di verifica invece di passare in silenzio.",
        "Estendere l'acquisizione al resto dei documenti. Documenti bancari, contratti e moduli ufficiali seguono regole diverse e comportano rischi diversi; scontrini e lettere erano i due giusti da cui partire.",
        "Visibilità per il cliente: permettere al cliente di vedere che cosa è arrivato al suo indirizzo di corrispondenza e che cosa ne è stato fatto, senza chiederlo alla fiduciaria.",
      ],
      elsewhereIntro:
        "Ovunque la materia prima di uno studio professionale sia la carta degli altri, che arriva in modo imprevedibile e deve essere letta da qualcuno prima di poter essere archiviata:",
      elsewhere: [
        'fiduciarie, contabili e uffici paghe',
        'studi legali e notarili che gestiscono la corrispondenza dei clienti',
        "servizi di domiciliazione e di costituzione di società, il cui indirizzo è per definizione quello ufficiale del cliente",
        "amministrazioni immobiliari, dove la posta riguarda un edificio e non un'azienda",
        "qualsiasi back office in cui qualcuno smista documenti per trovare il collega responsabile",
      ],
      meta: {
        title: 'Fiduciaria: posta e giustificativi senza ridigitare | Trident Software',
        description:
          'Posta scansionata e smistata, scontrini fotografati e registrati, entrambi in produzione. Circa 135 ore al mese restituite, modellate sui volumi dello studio.',
      },
    },
  },
}

export default record
