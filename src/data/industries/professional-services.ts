import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'professional-services',
  icon: 'wrench',
  techStack: [],
  relatedCases: ['fiduciary-mail-and-receipts'],
  relatedServices: ['ai-services', 'software-engineering'],
  content: {
    en: {
      title: 'Professional services and trades',
      tagline:
        'Craftsmen, installers, consultancies: small teams, no reception, and every missed call is a lost mandate.',
      description: 'Lowest volume, but the highest value per conversation saved.',
      challenges: [
        {
          title: 'The bottleneck is reading the mail',
          description:
            "A Swiss fiduciary keeps its clients' books, so its raw material is other people's paper. Many client companies use the firm's address as their official correspondence address, so the morning post is the mail of dozens of separate legal entities in one pile. An operator opened every letter, scanned it, read it to work out which client it belonged to and which manager was responsible, judged urgency and routed it. That was slow, and easy to forget in a profession where deadlines are statutory.",
        },
        {
          title: 'Foreign-script receipts are a verification risk',
          description:
            'Clients send till receipts as phone photos or by post. A meaningful share arrive in Cyrillic, Chinese or Arabic, where an operator who cannot read the script cannot verify what they are keying.',
        },
        {
          title: 'Precondition',
          description:
            'Swiss rules permit destroying most operational documents after scanning only where the scanning procedure is documented and internally controlled and the archive meets the GeBüV requirements for the ten-year retention period. Contracts, securities and notarial deeds are excluded from replacement scanning entirely.',
        },
      ],
      solutions: [
        {
          title: 'Scan-and-route for incoming mail',
          description:
            'OCR reads the scan, the system identifies the client from the content and looks up the assigned manager, and an AI produces a short summary and priority. The system then creates a task and notifies the manager immediately or, where the letter needs the client to act, e-mails the client directly with the scan and the instruction.',
        },
        {
          title: 'Photo-and-post for expense receipts',
          description:
            'A mobile app the client uses at the moment of purchase: OCR for merchant, date, total and VAT, a domain model proposing the accounting category and payment method, and the result posted into the accounting system without re-entry.',
        },
      ],
      meta: {
        title: 'Professional services and trades | Trident Software',
        description:
          'Craftsmen, installers, consultancies: small teams, no reception, every missed call is a lost mandate. Low volume, high value per conversation.',
      },
    },
    de: {
      title: 'Dienstleister und Handwerk',
      tagline:
        'Handwerker, Installateure, Beratungsfirmen: kleine Teams, kein Empfang, und jeder verpasste Anruf ist ein verlorenes Mandat.',
      description: 'Das tiefste Volumen, aber der höchste Wert pro gerettetem Gespräch.',
      challenges: [
        {
          title: 'Der Engpass ist das Lesen der Post',
          description:
            'Ein Schweizer Treuhandbüro führt die Buchhaltung seiner Kunden, sein Rohstoff ist also das Papier anderer Leute. Viele Kundenfirmen nutzen die Adresse des Treuhänders als offizielle Korrespondenzadresse, und so ist die Morgenpost die Post Dutzender eigenständiger Rechtseinheiten auf einem Stapel. Jemand öffnete jeden Brief, scannte ihn, las ihn, um den Kunden und die zuständige Person zu bestimmen, schätzte die Dringlichkeit ein und leitete ihn weiter. Das war langsam, und in einem Beruf mit gesetzlichen Fristen geht dabei leicht etwas vergessen.',
        },
        {
          title: 'Belege in fremder Schrift sind ein Prüfrisiko',
          description:
            'Kunden schicken Kassenbelege als Handyfoto oder per Post. Ein beachtlicher Teil kommt auf Kyrillisch, Chinesisch oder Arabisch, und wer die Schrift nicht lesen kann, kann nicht prüfen, was er erfasst.',
        },
        {
          title: 'Voraussetzung',
          description:
            'Nach Schweizer Recht dürfen die meisten Geschäftsunterlagen nach dem Scannen nur vernichtet werden, wenn das Scanverfahren dokumentiert und intern kontrolliert ist und das Archiv die Anforderungen der GeBüV für die zehnjährige Aufbewahrungsfrist erfüllt. Verträge, Wertpapiere und notarielle Urkunden sind vom ersetzenden Scannen ganz ausgenommen.',
        },
      ],
      solutions: [
        {
          title: 'Eingangspost scannen und verteilen',
          description:
            'OCR liest den Scan, das System erkennt den Kunden am Inhalt und findet die zuständige Person, und eine KI erstellt eine kurze Zusammenfassung mit Priorität. Danach legt das System eine Aufgabe an und benachrichtigt die zuständige Person sofort. Muss der Kunde selbst handeln, erhält er den Scan und die Anweisung direkt per E-Mail.',
        },
        {
          title: 'Spesenbelege fotografieren und verbuchen',
          description:
            'Eine mobile App, die der Kunde direkt beim Einkauf nutzt: OCR für Händler, Datum, Betrag und MWST, ein Fachmodell, das Buchungskategorie und Zahlungsart vorschlägt, und die Verbuchung im Buchhaltungssystem ohne erneute Erfassung.',
        },
      ],
      meta: {
        title: 'Dienstleister und Handwerk | Trident Software',
        description:
          'Handwerker, Installateure, Beratungsfirmen: kleine Teams, kein Empfang, jeder verpasste Anruf ist ein verlorenes Mandat. Wenig Volumen, viel Wert pro Gespräch.',
      },
    },
    fr: {
      title: 'Services professionnels et artisanat',
      tagline:
        'Artisans, installateurs, cabinets de conseil : de petites équipes, pas de réception, et chaque appel manqué est un mandat perdu.',
      description: 'Le plus petit volume, mais la plus grande valeur par conversation sauvée.',
      challenges: [
        {
          title: "Le goulet d'étranglement, c'est la lecture du courrier",
          description:
            "Une fiduciaire suisse tient la comptabilité de ses clients : sa matière première, c'est le papier des autres. Beaucoup de sociétés clientes utilisent l'adresse de la fiduciaire comme adresse de correspondance officielle, si bien que le courrier du matin réunit en une pile celui de dizaines d'entités juridiques distinctes. Une personne ouvrait chaque lettre, la scannait, la lisait pour savoir à quel client elle appartenait et quel gestionnaire en était responsable, évaluait l'urgence et la transmettait. C'était lent, et un oubli arrive vite dans un métier où les délais sont fixés par la loi.",
        },
        {
          title: 'Les tickets en écriture étrangère sont un risque de vérification',
          description:
            "Les clients envoient leurs tickets de caisse en photo ou par la poste. Une part non négligeable est en cyrillique, en chinois ou en arabe, et une personne qui ne lit pas cette écriture ne peut pas vérifier ce qu'elle saisit.",
        },
        {
          title: 'Condition préalable',
          description:
            "En Suisse, la plupart des documents d'exploitation ne peuvent être détruits après numérisation que si la procédure de numérisation est documentée et contrôlée en interne et que l'archive respecte les exigences de l'Olico pour la durée de conservation de dix ans. Les contrats, les papiers-valeurs et les actes notariés sont entièrement exclus de la numérisation de substitution.",
        },
      ],
      solutions: [
        {
          title: 'Numériser et distribuer le courrier entrant',
          description:
            "L'OCR lit le scan, le système identifie le client d'après le contenu et retrouve le gestionnaire attitré, puis une IA rédige un court résumé avec une priorité. Le système crée ensuite une tâche et avertit aussitôt le gestionnaire. Si la lettre demande une action du client, celui-ci reçoit directement par e-mail le scan et la consigne.",
        },
        {
          title: 'Photographier et comptabiliser les notes de frais',
          description:
            "Une application mobile que le client utilise au moment de l'achat : OCR pour le commerçant, la date, le total et la TVA, un modèle métier qui propose la catégorie comptable et le moyen de paiement, puis la comptabilisation dans le logiciel comptable sans ressaisie.",
        },
      ],
      meta: {
        title: 'Services professionnels et artisanat | Trident Software',
        description:
          'Artisans, installateurs, cabinets de conseil : petites équipes, pas de réception, chaque appel manqué est un mandat perdu. Peu de volume, forte valeur.',
      },
    },
    it: {
      title: 'Studi professionali e artigiani',
      tagline:
        'Artigiani, installatori, società di consulenza: team piccoli, nessuna reception, e ogni chiamata persa è un mandato perso.',
      description: 'Il volume più basso, ma il valore più alto per ogni conversazione salvata.',
      challenges: [
        {
          title: 'Il collo di bottiglia è leggere la posta',
          description:
            "Una fiduciaria svizzera tiene la contabilità dei suoi clienti, quindi la sua materia prima è la carta degli altri. Molte società clienti usano l'indirizzo della fiduciaria come recapito ufficiale, così la posta del mattino è quella di decine di entità giuridiche distinte in un'unica pila. Una persona apriva ogni lettera, la scansionava, la leggeva per capire a quale cliente apparteneva e quale responsabile se ne occupava, ne valutava l'urgenza e la smistava. Era lento, e una dimenticanza è facile in una professione con scadenze di legge.",
        },
        {
          title: 'Gli scontrini in alfabeti stranieri sono un rischio di verifica',
          description:
            "I clienti mandano gli scontrini in foto o per posta. Una parte non trascurabile è in cirillico, cinese o arabo, e chi non legge quell'alfabeto non può verificare ciò che inserisce.",
        },
        {
          title: 'Presupposto',
          description:
            "In Svizzera la maggior parte dei documenti aziendali si può distruggere dopo la scansione solo se la procedura di scansione è documentata e controllata internamente e l'archivio rispetta i requisiti dell'OLC per il periodo di conservazione di dieci anni. Contratti, titoli di credito e atti notarili sono del tutto esclusi dalla scansione sostitutiva.",
        },
      ],
      solutions: [
        {
          title: 'Scansione e smistamento della posta in arrivo',
          description:
            "L'OCR legge la scansione, il sistema riconosce il cliente dal contenuto e trova il responsabile assegnato, poi un'IA produce un breve riassunto con la priorità. Il sistema crea quindi un'attività e avvisa subito il responsabile. Se la lettera richiede un'azione del cliente, questi riceve direttamente per e-mail la scansione e l'istruzione.",
        },
        {
          title: 'Foto e registrazione degli scontrini spese',
          description:
            "Un'app mobile che il cliente usa al momento dell'acquisto: OCR per esercente, data, totale e IVA, un modello di dominio che propone categoria contabile e metodo di pagamento, e la registrazione nel sistema contabile senza doverli reinserire.",
        },
      ],
      meta: {
        title: 'Studi professionali e artigiani | Trident Software',
        description:
          'Artigiani, installatori, consulenti: team piccoli, nessuna reception, ogni chiamata persa è un mandato perso. Volumi bassi, valore alto per conversazione.',
      },
    },
  },
}

export default record
