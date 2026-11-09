import type { CaseRecord } from '../cases'

const record: CaseRecord = {
  slug: 'clinic-voice-documentation',
  publishedAt: '2026-10-14',
  client: 'Multi-disciplinary practice, Switzerland',
  services: ['ai-services', 'software-engineering'],
  techStack: [],
  relatedCases: ['post-acute-clinic-network'],
  content: {
    en: {
      client: 'Multi-disciplinary practice, Switzerland',
      industry: 'Healthcare · Switzerland',
      hero: {
        title: 'Voice documentation for a multi-disciplinary clinic',
        tagline: 'From a recorded consultation to a coded TARDOC invoice, without the doctor typing it',
      },
      note: "A delivered project for a Swiss multi-disciplinary practice, written up without the client's name. The before-figures are the clinic's own measured baseline. Named references are given under NDA on request.",
      results: [
        { metric: 'Physician working time spent documenting', value: '35 % → 15 %' },
        { metric: 'Average handling time per invoice', value: '75 → 12 min' },
        { metric: 'Average time to payment', value: '~60 → ~17 days' },
      ],
      sections: [
        {
          title: 'The business',
          paragraphs: [
            'A private multi-disciplinary practice in Switzerland. Several physicians across different specialties work under one roof, alongside non-medical services: physiotherapy, nutrition, aesthetics, and wellness offerings that sit outside basic health insurance.',
            'That mix makes administration hard. A single patient can generate services billed three different ways in the same visit: reimbursed under LAMal, covered by supplementary insurance, or paid privately.',
          ],
        },
        {
          title: 'Before the change: documentation eats a third of clinical time',
          paragraphs: [
            '35% of physician working time goes into documenting consultations. That is time spent writing about having treated patients, not treating them. Notes are typed between appointments, finished in the evening, and increasingly written from memory hours after the fact.',
          ],
        },
        {
          title: 'The billing desk works as a translation layer',
          paragraphs: [
            'The person responsible for invoicing could not bill from the notes as written. Diagnoses stated in shorthand, procedures implied rather than recorded, missing detail that determines which tariff position applies.',
            "So every ambiguous consultation became a conversation: catch the doctor between patients, ask what exactly was done, ask which diagnosis was retained, reconstruct the visit from two people's memory.",
            'Average handling time per invoice: 75 minutes, counting the chasing, the clarification and the correction.',
          ],
        },
        {
          title: 'Payers push back, and payment waits',
          paragraphs: [
            'Roughly one invoice in eight came back: queried, corrected, resubmitted. Each return restarts the cycle and pushes payment further out.',
            'The clinic bills a mix of payers, each with its own rules on what is admissible and how it must be coded: basic and supplementary health insurers, accident insurance including SUVA, disability and military insurance, cantonal social services, and patients paying directly for deductibles and for the non-medical services.',
            'That mix is why a note that merely reads well is not enough. It has to be codable. Average time from consultation to money received: around 60 days.',
          ],
        },
        {
          title: 'What we built',
          paragraphs: [
            "A voice documentation assistant: a standalone system, not a module inside the clinic's software.",
            'It runs on its own and delivers its output into the systems the clinic already uses. Nothing in the existing stack had to be replaced, rebuilt or opened up for the assistant to work, and the clinic can stop using it without unwinding anything.',
          ],
        },
        {
          title: '1. The doctor records',
          paragraphs: [
            'The consultation is recorded: the exchange with the patient, and the exchanges with staff around the case. No template to fill, no dictation format to learn. The doctor works the way they already work.',
          ],
        },
        {
          title: '2. The assistant transcribes',
          paragraphs: [
            'Speech-to-text across the languages of the practice, with medical vocabulary, drug names, and anatomical terms recognized rather than approximated.',
          ],
        },
        {
          title: '3. It produces two documents, not one',
          paragraphs: [
            "The consultation report, structured as the clinic's own template requires: history, findings, diagnosis, procedures performed, plan.",
            'The TARDOC invoice, coded. Positions are derived from what was actually said and done in the recording, respecting the 2026 rules, including which services are billed individually and which trigger an outpatient flat rate. That distinction produces most of the rejections.',
          ],
        },
        {
          title: '4. It delivers into the medical information system',
          paragraphs: [
            "Reported and coded services arrive in the clinic's MIS as structured records. The assistant holds its own data and pushes the finished result across: no retyping, no copy-paste between two screens, and no dependency on the MIS vendor's roadmap.",
          ],
        },
        {
          title: '5. It notifies the billing desk',
          paragraphs: [
            'The person responsible receives the invoice ready for review, with the transcript attached. Where the assistant is uncertain, for example an ambiguous procedure or a missing detail that changes the tariff position, it flags the specific point rather than producing a confident guess.',
            'The billing desk stops interrogating doctors and starts reviewing drafts.',
          ],
        },
      ],
      table: {
        title: 'Results',
        beforeLabel: 'Before',
        afterLabel: 'After',
        rows: [
          { label: 'Share of physician working time spent documenting', before: '35 %', after: '15 %' },
          { label: 'Average handling time per invoice', before: '75 min', after: '12 min' },
          { label: 'Average time to payment', before: '~60 days', after: '~17 days, 3.5× faster' },
          { label: 'Physician cost per consultation', before: '~CHF 58', after: '~CHF 45, 23.5 % lower' },
        ],
      },
      afterTable: [
        'The middle row is the one the clinic felt first: the billing desk went from reconstructing consultations to checking them.',
        'The third row compounds. An invoice that is correct on first submission is not rejected, not corrected, not resubmitted, and the 3.5× improvement comes mostly from removing that loop rather than from making any single step faster.',
        'Why the first row is a cost figure and not a comfort figure: documentation is paid physician time. Moving it from 35 % to 15 % of the working year does not make the doctor cheaper; it changes what share of that salary produces consultations. Clinical time goes from 65 % to 85 % of paid hours, so the same cost now covers 30.8 % more consultations, and the physician cost carried by each one falls by 23.5 %.',
        'In francs, for one physician: a loaded cost of CHF 220 000 a year (an employed specialist in a Geneva practice, salary around CHF 185 000 plus social charges), 42 hours a week over 46 weeks, and a 20-minute consultation. That is 3 767 consultations a year before and 4 927 after, so physician cost per consultation drops from CHF 58.4 to CHF 44.7, a saving of CHF 13.70 each. Where the appointment book cannot absorb the extra capacity, the same twenty points show up as 386 physician hours a year handed back, roughly CHF 44 000 per doctor, a fifth of an FTE.',
        'Salary basis: employed Swiss specialists sit at a median of CHF 140 000–172 000 and physicians in their own practice average around CHF 320 000; CHF 220 000 loaded is the middle of that range for a private multi-disciplinary practice. Substitute your own figure: the 23.5 % holds whatever the salary is, because it comes from the ratio of clinical time, not from its price.',
        'The first row is why the physicians agreed to it. Twenty points of working time returned to clinical work: for a practice of several doctors, that is capacity that would otherwise have to be hired.',
      ],
      nextIntro:
        'With documentation working, the clinic moved to the other end of the patient journey: getting the appointment booked at all. An enquiry arriving by phone at 19:00, or by message on a Sunday, waits until the reception desk opens. The patient does not wait; they call the next practice. The clinic is now automating appointment intake with a chatbot and an AI voice assistant. Three stated objectives:',
      next: [
        'Response time under 10 seconds, on every channel',
        'Bookings accepted outside working hours: evenings, weekends, holidays',
        'Reception costs reduced by removing the call volume that consists of "do you have anything Thursday afternoon", while the desk itself stays',
      ],
      elsewhereIntro:
        'The same machinery applies wherever a spoken professional interaction has to become a coded, billable, auditable record:',
      elsewhere: [
        'specialist practices and group clinics',
        'physiotherapy and rehabilitation, where session documentation drives reimbursement',
        'veterinary practices',
        'home care organisations, where documentation happens between visits, in the car',
      ],
      meta: {
        title: 'Clinic voice documentation | Trident Software',
        description:
          'A recorded consultation becomes the report and a coded TARDOC invoice. Documentation time from 35 % to 15 %, invoice handling from 75 to 12 minutes.',
      },
    },
    de: {
      client: 'Interdisziplinäre Praxis, Schweiz',
      industry: 'Gesundheitswesen · Schweiz',
      hero: {
        title: 'Sprachdokumentation für eine interdisziplinäre Praxis',
        tagline: 'Von der aufgezeichneten Konsultation zur codierten TARDOC-Rechnung, ohne dass die Ärztin oder der Arzt tippt',
      },
      note: 'Ein umgesetztes Projekt für eine interdisziplinäre Praxis in der Schweiz, beschrieben ohne den Namen des Kunden. Die Vorher-Werte sind die eigene gemessene Ausgangslage der Praxis. Namentliche Referenzen gibt es auf Anfrage unter NDA.',
      results: [
        { metric: 'Anteil der ärztlichen Arbeitszeit für Dokumentation', value: '35 % → 15 %' },
        { metric: 'Durchschnittliche Bearbeitungszeit pro Rechnung', value: '75 → 12 min' },
        { metric: 'Durchschnittliche Zeit bis zur Zahlung', value: '~60 → ~17 Tage' },
      ],
      sections: [
        {
          title: 'Das Unternehmen',
          paragraphs: [
            'Eine private interdisziplinäre Praxis in der Schweiz. Mehrere Ärztinnen und Ärzte verschiedener Fachrichtungen arbeiten unter einem Dach, daneben gibt es nichtärztliche Angebote: Physiotherapie, Ernährungsberatung, Ästhetik und Wellness, die nicht über die Grundversicherung laufen.',
            'Diese Mischung macht die Administration schwierig. Eine einzige Person kann beim selben Besuch Leistungen auslösen, die auf drei Arten abgerechnet werden: über das KVG vergütet, von der Zusatzversicherung gedeckt oder privat bezahlt.',
          ],
        },
        {
          title: 'Vorher: Die Dokumentation frisst ein Drittel der klinischen Zeit',
          paragraphs: [
            '35% der ärztlichen Arbeitszeit fliessen in die Dokumentation von Konsultationen. Das ist Zeit, in der über Behandlungen geschrieben statt behandelt wird. Notizen entstehen zwischen zwei Terminen, werden am Abend fertiggestellt und immer öfter Stunden später aus dem Gedächtnis geschrieben.',
          ],
        },
        {
          title: 'Die Abrechnung arbeitet als Übersetzungsstelle',
          paragraphs: [
            'Die für die Rechnungsstellung zuständige Person konnte aus den Notizen, so wie sie dastanden, nicht abrechnen. Diagnosen in Kurzform, Leistungen nur angedeutet statt festgehalten, fehlende Details, die über die Tarifposition entscheiden.',
            'Also wurde jede unklare Konsultation zu einem Gespräch: die Ärztin oder den Arzt zwischen zwei Patienten abfangen, fragen, was genau gemacht wurde, welche Diagnose gilt, und den Besuch aus dem Gedächtnis zweier Personen rekonstruieren.',
            'Durchschnittliche Bearbeitungszeit pro Rechnung: 75 Minuten, mit Nachfragen, Klären und Korrigieren.',
          ],
        },
        {
          title: 'Kostenträger haken nach, und die Zahlung wartet',
          paragraphs: [
            'Etwa jede achte Rechnung kam zurück: beanstandet, korrigiert, neu eingereicht. Jede Rückweisung startet den Zyklus neu und schiebt die Zahlung weiter hinaus.',
            'Die Praxis rechnet mit verschiedenen Kostenträgern ab, jeder mit eigenen Regeln, was zulässig ist und wie es codiert werden muss: Grund- und Zusatzversicherer, Unfallversicherung inklusive Suva, Invaliden- und Militärversicherung, kantonale Sozialdienste sowie Patientinnen und Patienten, die Franchisen und nichtärztliche Leistungen direkt bezahlen.',
            'Wegen dieser Mischung reicht eine Notiz, die sich gut liest, nicht aus. Sie muss sich codieren lassen. Durchschnittliche Zeit von der Konsultation bis zum Geldeingang: rund 60 Tage.',
          ],
        },
        {
          title: 'Was wir gebaut haben',
          paragraphs: [
            'Einen Assistenten für Sprachdokumentation: ein eigenständiges System, kein Modul in der Software der Praxis.',
            'Er läuft für sich und liefert sein Ergebnis in die Systeme, die die Praxis bereits nutzt. Nichts im bestehenden Stack musste ersetzt, umgebaut oder geöffnet werden, und die Praxis kann den Assistenten abschalten, ohne etwas rückbauen zu müssen.',
          ],
        },
        {
          title: '1. Die Ärztin oder der Arzt nimmt auf',
          paragraphs: [
            'Die Konsultation wird aufgezeichnet: das Gespräch mit der Patientin oder dem Patienten und der Austausch mit dem Team rund um den Fall. Keine Vorlage zum Ausfüllen, kein Diktatformat zum Lernen. Gearbeitet wird so wie bisher.',
          ],
        },
        {
          title: '2. Der Assistent transkribiert',
          paragraphs: [
            'Spracherkennung in den Sprachen der Praxis, wobei medizinisches Vokabular, Medikamentennamen und anatomische Begriffe korrekt erkannt und nicht nur angenähert werden.',
          ],
        },
        {
          title: '3. Er erstellt zwei Dokumente statt einem',
          paragraphs: [
            'Den Konsultationsbericht, gegliedert nach der Vorlage der Praxis: Anamnese, Befund, Diagnose, erbrachte Leistungen, Vorgehen.',
            'Die TARDOC-Rechnung, codiert. Die Positionen leiten sich aus dem ab, was in der Aufnahme tatsächlich gesagt und gemacht wurde, nach den Regeln von 2026, auch dazu, welche Leistungen einzeln abgerechnet werden und welche eine ambulante Pauschale auslösen. An dieser Unterscheidung scheitern die meisten Rechnungen.',
          ],
        },
        {
          title: '4. Er liefert ins Praxisinformationssystem',
          paragraphs: [
            'Erfasste und codierte Leistungen kommen als strukturierte Datensätze im Praxisinformationssystem an. Der Assistent hält eigene Daten und überträgt das fertige Ergebnis: kein Abtippen, kein Kopieren zwischen zwei Bildschirmen und keine Abhängigkeit von der Roadmap des Softwareherstellers.',
          ],
        },
        {
          title: '5. Er benachrichtigt die Abrechnung',
          paragraphs: [
            'Die zuständige Person erhält die Rechnung zur Prüfung, mit dem Transkript im Anhang. Wo der Assistent unsicher ist, etwa bei einer unklaren Leistung oder einem fehlenden Detail, das die Tarifposition ändert, markiert er genau diese Stelle, statt selbstsicher zu raten.',
            'Die Abrechnung muss die Ärzteschaft nicht mehr ausfragen und prüft stattdessen Entwürfe.',
          ],
        },
      ],
      table: {
        title: 'Ergebnisse',
        beforeLabel: 'Vorher',
        afterLabel: 'Nachher',
        rows: [
          { label: 'Anteil der ärztlichen Arbeitszeit für Dokumentation', before: '35 %', after: '15 %' },
          { label: 'Durchschnittliche Bearbeitungszeit pro Rechnung', before: '75 min', after: '12 min' },
          { label: 'Durchschnittliche Zeit bis zur Zahlung', before: '~60 Tage', after: '~17 Tage, 3.5× schneller' },
          { label: 'Ärztliche Kosten pro Konsultation', before: '~CHF 58', after: '~CHF 45, 23.5 % tiefer' },
        ],
      },
      afterTable: [
        'Die mittlere Zeile hat die Praxis als Erstes gespürt: Die Abrechnung rekonstruiert keine Konsultationen mehr, sie prüft sie.',
        'Die dritte Zeile verstärkt sich selbst. Eine Rechnung, die beim ersten Einreichen stimmt, wird nicht zurückgewiesen, nicht korrigiert und nicht neu eingereicht. Die 3.5-fache Beschleunigung kommt vor allem daher, dass diese Schleife wegfällt, und weniger davon, dass ein einzelner Schritt schneller wird.',
        'Warum die erste Zeile eine Kostenzahl ist und keine Komfortzahl: Dokumentation ist bezahlte ärztliche Zeit. Sinkt sie von 35 % auf 15 % des Arbeitsjahres, wird die Ärztin oder der Arzt nicht billiger; es ändert sich, welcher Anteil des Lohns Konsultationen hervorbringt. Die klinische Zeit steigt von 65 % auf 85 % der bezahlten Stunden, dieselben Kosten decken also 30.8 % mehr Konsultationen, und die ärztlichen Kosten pro Konsultation sinken um 23.5 %.',
        "In Franken, für eine Ärztin oder einen Arzt: Vollkosten von CHF 220'000 pro Jahr (angestellte Fachärztin oder angestellter Facharzt in einer Genfer Praxis, Lohn rund CHF 185'000 plus Sozialabgaben), 42 Stunden pro Woche während 46 Wochen und eine Konsultation von 20 Minuten. Das ergibt vorher 3'767 Konsultationen pro Jahr und nachher 4'927, die ärztlichen Kosten pro Konsultation sinken also von CHF 58.4 auf CHF 44.7, eine Einsparung von CHF 13.70 pro Konsultation. Wo die Agenda die zusätzliche Kapazität nicht aufnehmen kann, zeigen sich dieselben zwanzig Prozentpunkte als 386 zurückgewonnene ärztliche Stunden pro Jahr, rund CHF 44'000 pro Ärztin oder Arzt, ein Fünftel einer Vollzeitstelle.",
        "Lohnbasis: Angestellte Fachärztinnen und Fachärzte in der Schweiz liegen im Median bei CHF 140'000–172'000, Ärztinnen und Ärzte mit eigener Praxis im Schnitt bei rund CHF 320'000; CHF 220'000 Vollkosten liegen für eine private interdisziplinäre Praxis in der Mitte dieser Spanne. Setzen Sie Ihre eigene Zahl ein: Die 23.5 % gelten bei jedem Lohn, weil sie aus dem Verhältnis der klinischen Zeit kommen und nicht aus deren Preis.",
        'Die erste Zeile ist der Grund, warum die Ärztinnen und Ärzte zugestimmt haben. Zwanzig Prozentpunkte Arbeitszeit fliessen zurück in die klinische Arbeit: Für eine Praxis mit mehreren Ärztinnen und Ärzten ist das Kapazität, die man sonst einstellen müsste.',
      ],
      nextIntro:
        'Mit funktionierender Dokumentation ging die Praxis ans andere Ende des Patientenwegs: überhaupt einen Termin zu vergeben. Eine Anfrage, die um 19:00 per Telefon oder am Sonntag per Nachricht eintrifft, wartet, bis der Empfang öffnet. Die Patientin wartet nicht; sie ruft die nächste Praxis an. Die Praxis automatisiert nun die Terminannahme mit einem Chatbot und einem KI-Sprachassistenten. Drei erklärte Ziele:',
      next: [
        'Antwortzeit unter 10 Sekunden, auf jedem Kanal',
        'Buchungen auch ausserhalb der Arbeitszeit: abends, am Wochenende, an Feiertagen',
        'Tiefere Kosten am Empfang, weil die Anrufe vom Typ «Haben Sie am Donnerstagnachmittag noch etwas frei?» wegfallen, während der Empfang selbst bleibt',
      ],
      elsewhereIntro:
        'Dieselbe Technik passt überall dort, wo aus einem gesprochenen Fachgespräch ein codiertes, abrechenbares und prüfbares Dossier werden muss:',
      elsewhere: [
        'Facharztpraxen und Gruppenpraxen',
        'Physiotherapie und Rehabilitation, wo die Dokumentation der Sitzungen über die Vergütung entscheidet',
        'Tierarztpraxen',
        'Spitex-Organisationen, wo zwischen den Einsätzen im Auto dokumentiert wird',
      ],
      meta: {
        title: 'Praxis: Dokumentationszeit von 35 % auf 15 % gesenkt | Trident Software',
        description:
          'Die aufgezeichnete Konsultation wird zum Bericht und zur codierten TARDOC-Rechnung. Dokumentation von 35 % auf 15 %, Rechnung in 12 statt 75 Minuten.',
      },
    },
    fr: {
      client: 'Cabinet pluridisciplinaire, Suisse',
      industry: 'Santé · Suisse',
      hero: {
        title: 'Documentation vocale pour un cabinet pluridisciplinaire',
        tagline: "De la consultation enregistrée à la facture TARDOC codée, sans que le médecin ne tape une ligne",
      },
      note: "Un projet livré pour un cabinet pluridisciplinaire suisse, décrit sans le nom du client. Les chiffres « avant » sont la situation de départ mesurée par le cabinet lui-même. Des références nominatives sont communiquées sur demande, sous NDA.",
      results: [
        { metric: 'Part du temps médical consacrée à la documentation', value: '35 % → 15 %' },
        { metric: 'Temps de traitement moyen par facture', value: '75 → 12 min' },
        { metric: 'Délai moyen de paiement', value: '~60 → ~17 jours' },
      ],
      sections: [
        {
          title: "L'entreprise",
          paragraphs: [
            "Un cabinet privé pluridisciplinaire en Suisse. Plusieurs médecins de spécialités différentes y travaillent sous le même toit, à côté de prestations non médicales : physiothérapie, nutrition, esthétique et bien-être, hors assurance de base.",
            "Ce mélange complique l'administration. Un même patient peut générer, lors d'une seule visite, des prestations facturées de trois façons : remboursées par la LAMal, couvertes par une assurance complémentaire ou payées à titre privé.",
          ],
        },
        {
          title: 'Avant : la documentation mange un tiers du temps clinique',
          paragraphs: [
            "35% du temps de travail des médecins part dans la documentation des consultations. C'est du temps passé à écrire sur les patients plutôt qu'à les soigner. Les notes sont tapées entre deux rendez-vous, terminées le soir, et de plus en plus souvent rédigées de mémoire, des heures après.",
          ],
        },
        {
          title: 'La facturation sert de traducteur',
          paragraphs: [
            "La personne chargée de la facturation ne pouvait pas facturer à partir des notes telles quelles. Diagnostics en abrégé, actes sous-entendus plutôt que consignés, détails manquants qui décident de la position tarifaire.",
            "Chaque consultation floue devenait donc une conversation : attraper le médecin entre deux patients, demander ce qui a été fait exactement, quel diagnostic a été retenu, reconstituer la visite à partir de la mémoire de deux personnes.",
            'Temps de traitement moyen par facture : 75 minutes, relances, clarifications et corrections comprises.',
          ],
        },
        {
          title: 'Les payeurs contestent, et le paiement attend',
          paragraphs: [
            "Environ une facture sur huit revenait : contestée, corrigée, renvoyée. Chaque retour relance le cycle et repousse le paiement.",
            "Le cabinet facture à de nombreux payeurs, chacun avec ses règles sur ce qui est admis et sur la façon de coder : assureurs maladie de base et complémentaires, assurance accidents dont la Suva, assurance invalidité et militaire, services sociaux cantonaux, et patients qui paient directement franchises et prestations non médicales.",
            "C'est pourquoi une note simplement bien écrite ne suffit pas. Elle doit pouvoir être codée. Délai moyen entre la consultation et l'encaissement : environ 60 jours.",
          ],
        },
        {
          title: 'Ce que nous avons construit',
          paragraphs: [
            "Un assistant de documentation vocale : un système autonome, et non un module du logiciel du cabinet.",
            "Il fonctionne seul et livre son résultat dans les systèmes que le cabinet utilise déjà. Rien dans l'existant n'a dû être remplacé, reconstruit ou ouvert, et le cabinet peut cesser de l'utiliser sans rien défaire.",
          ],
        },
        {
          title: '1. Le médecin enregistre',
          paragraphs: [
            "La consultation est enregistrée : l'échange avec le patient et les échanges avec l'équipe autour du cas. Pas de modèle à remplir, pas de format de dictée à apprendre. Le médecin travaille comme il le fait déjà.",
          ],
        },
        {
          title: "2. L'assistant transcrit",
          paragraphs: [
            "Reconnaissance vocale dans les langues du cabinet, avec un vocabulaire médical, des noms de médicaments et des termes anatomiques reconnus correctement, et non approximés.",
          ],
        },
        {
          title: '3. Il produit deux documents au lieu d’un',
          paragraphs: [
            "Le rapport de consultation, structuré selon le modèle du cabinet : anamnèse, constats, diagnostic, actes réalisés, suite de la prise en charge.",
            "La facture TARDOC, codée. Les positions découlent de ce qui a réellement été dit et fait dans l'enregistrement, selon les règles 2026, y compris quelles prestations sont facturées à l'acte et lesquelles déclenchent un forfait ambulatoire. C'est cette distinction qui provoque la plupart des refus.",
          ],
        },
        {
          title: "4. Il livre dans le système d'information du cabinet",
          paragraphs: [
            "Les prestations rapportées et codées arrivent dans le logiciel du cabinet sous forme d'enregistrements structurés. L'assistant garde ses propres données et transmet le résultat final : pas de ressaisie, pas de copier-coller entre deux écrans et aucune dépendance à la feuille de route de l'éditeur.",
          ],
        },
        {
          title: '5. Il avertit la facturation',
          paragraphs: [
            "La personne responsable reçoit la facture prête à vérifier, avec la transcription en annexe. Quand l'assistant a un doute, par exemple un acte ambigu ou un détail manquant qui change la position tarifaire, il signale ce point précis au lieu de proposer une supposition assurée.",
            "La facturation cesse d'interroger les médecins et commence à relire des brouillons.",
          ],
        },
      ],
      table: {
        title: 'Résultats',
        beforeLabel: 'Avant',
        afterLabel: 'Après',
        rows: [
          { label: 'Part du temps médical consacrée à la documentation', before: '35 %', after: '15 %' },
          { label: 'Temps de traitement moyen par facture', before: '75 min', after: '12 min' },
          { label: 'Délai moyen de paiement', before: '~60 jours', after: '~17 jours, 3.5× plus rapide' },
          { label: 'Coût médical par consultation', before: '~CHF 58', after: '~CHF 45, 23.5 % de moins' },
        ],
      },
      afterTable: [
        "La ligne du milieu est celle que le cabinet a ressentie en premier : la facturation ne reconstitue plus les consultations, elle les vérifie.",
        "La troisième ligne se cumule. Une facture correcte dès le premier envoi n'est ni refusée, ni corrigée, ni renvoyée, et le gain de 3.5× vient surtout de la disparition de cette boucle, bien plus que de l'accélération d'une étape.",
        "Pourquoi la première ligne est un chiffre de coût et non de confort : la documentation, c'est du temps médical payé. La faire passer de 35 % à 15 % de l'année de travail ne rend pas le médecin moins cher ; cela change la part du salaire qui produit des consultations. Le temps clinique passe de 65 % à 85 % des heures payées, le même coût couvre donc 30.8 % de consultations en plus, et le coût médical porté par chacune baisse de 23.5 %.",
        "En francs, pour un médecin : un coût complet de CHF 220'000 par an (un spécialiste salarié dans un cabinet genevois, salaire d'environ CHF 185'000 plus charges sociales), 42 heures par semaine sur 46 semaines et une consultation de 20 minutes. Cela donne 3'767 consultations par an avant et 4'927 après, et le coût médical par consultation passe de CHF 58.4 à CHF 44.7, soit CHF 13.70 d'économie par consultation. Si l'agenda ne peut pas absorber la capacité supplémentaire, les mêmes vingt points deviennent 386 heures médicales rendues par an, environ CHF 44'000 par médecin, un cinquième de poste.",
        "Base salariale : les spécialistes salariés en Suisse ont un salaire médian de CHF 140'000–172'000 et les médecins installés gagnent en moyenne environ CHF 320'000 ; CHF 220'000 en coût complet se situe au milieu de cette fourchette pour un cabinet privé pluridisciplinaire. Remplacez par votre propre chiffre : les 23.5 % restent valables quel que soit le salaire, car ils découlent de la part du temps clinique, pas de son prix.",
        "La première ligne est la raison pour laquelle les médecins ont dit oui. Vingt points de temps de travail rendus à la clinique : pour un cabinet de plusieurs médecins, c'est une capacité qu'il faudrait sinon recruter.",
      ],
      nextIntro:
        "Une fois la documentation en place, le cabinet s'est attaqué à l'autre bout du parcours patient : obtenir un rendez-vous tout court. Une demande qui arrive par téléphone à 19:00 ou par message un dimanche attend l'ouverture de l'accueil. Le patient, lui, n'attend pas ; il appelle le cabinet suivant. Le cabinet automatise donc la prise de rendez-vous avec un chatbot et un assistant vocal IA. Trois objectifs déclarés :",
      next: [
        'Temps de réponse inférieur à 10 secondes, sur chaque canal',
        "Réservations acceptées hors des heures d'ouverture : le soir, le week-end, les jours fériés",
        "Coûts d'accueil réduits en supprimant le volume d'appels du type « vous auriez quelque chose jeudi après-midi ? », l'accueil lui-même restant en place",
      ],
      elsewhereIntro:
        "Le même mécanisme s'applique partout où un échange professionnel oral doit devenir un dossier codé, facturable et vérifiable :",
      elsewhere: [
        'cabinets de spécialistes et cabinets de groupe',
        "physiothérapie et réadaptation, où la documentation des séances conditionne le remboursement",
        'cabinets vétérinaires',
        "organisations de soins à domicile, où l'on documente entre deux visites, dans la voiture",
      ],
      meta: {
        title: 'Cabinet médical : documentation de 35 % à 15 % du temps | Trident Software',
        description:
          "La consultation enregistrée devient le rapport et une facture TARDOC codée. Documentation de 35 % à 15 % du temps, facture traitée en 12 minutes au lieu de 75.",
      },
    },
    it: {
      client: 'Studio medico multidisciplinare, Svizzera',
      industry: 'Sanità · Svizzera',
      hero: {
        title: 'Documentazione vocale per uno studio medico multidisciplinare',
        tagline: 'Dalla visita registrata alla fattura TARDOC codificata, senza che il medico debba digitarla',
      },
      note: "Un progetto realizzato per uno studio medico multidisciplinare svizzero, descritto senza il nome del cliente. I valori «prima» sono la situazione di partenza misurata dallo studio stesso. Referenze nominative disponibili su richiesta, sotto NDA.",
      results: [
        { metric: 'Quota del tempo medico dedicata alla documentazione', value: '35 % → 15 %' },
        { metric: 'Tempo medio di gestione per fattura', value: '75 → 12 min' },
        { metric: 'Tempo medio di pagamento', value: '~60 → ~17 giorni' },
      ],
      sections: [
        {
          title: "L'azienda",
          paragraphs: [
            "Uno studio medico privato multidisciplinare in Svizzera. Più medici di specialità diverse lavorano sotto lo stesso tetto, accanto a servizi non medici: fisioterapia, nutrizione, estetica e benessere, esclusi dall'assicurazione di base.",
            "Questo mix complica l'amministrazione. Uno stesso paziente può generare, nella stessa visita, prestazioni fatturate in tre modi diversi: rimborsate dalla LAMal, coperte da un'assicurazione complementare o pagate privatamente.",
          ],
        },
        {
          title: 'Prima: la documentazione si mangia un terzo del tempo clinico',
          paragraphs: [
            "Il 35% del tempo di lavoro dei medici va nella documentazione delle visite. È tempo passato a scrivere dei pazienti invece di curarli. Le note vengono digitate tra un appuntamento e l'altro, finite la sera e sempre più spesso scritte a memoria, ore dopo.",
          ],
        },
        {
          title: 'La fatturazione fa da traduttore',
          paragraphs: [
            "Chi si occupa della fatturazione non riusciva a fatturare dalle note così com'erano. Diagnosi abbreviate, prestazioni sottintese invece che annotate, dettagli mancanti che decidono la posizione tariffale.",
            "Ogni visita poco chiara diventava quindi una conversazione: fermare il medico tra un paziente e l'altro, chiedere cosa è stato fatto esattamente, quale diagnosi è stata confermata, ricostruire la visita dalla memoria di due persone.",
            'Tempo medio di gestione per fattura: 75 minuti, contando solleciti, chiarimenti e correzioni.',
          ],
        },
        {
          title: 'Gli enti pagatori contestano, e il pagamento aspetta',
          paragraphs: [
            "Circa una fattura su otto tornava indietro: contestata, corretta, ripresentata. Ogni rinvio fa ripartire il ciclo e sposta più in là il pagamento.",
            "Lo studio fattura a molti enti pagatori, ognuno con le proprie regole su cosa è ammesso e su come va codificato: casse malati di base e complementari, assicurazione infortuni compresa la Suva, assicurazione invalidità e militare, servizi sociali cantonali e pazienti che pagano direttamente franchigie e prestazioni non mediche.",
            "Per questo una nota che si legge bene non basta. Deve poter essere codificata. Tempo medio dalla visita all'incasso: circa 60 giorni.",
          ],
        },
        {
          title: 'Che cosa abbiamo realizzato',
          paragraphs: [
            "Un assistente per la documentazione vocale: un sistema autonomo, non un modulo all'interno del software dello studio.",
            "Funziona da solo e consegna il risultato nei sistemi che lo studio già utilizza. Nulla dello stack esistente ha dovuto essere sostituito, ricostruito o aperto, e lo studio può smettere di usarlo senza dover smontare nulla.",
          ],
        },
        {
          title: '1. Il medico registra',
          paragraphs: [
            "La visita viene registrata: il dialogo con il paziente e gli scambi con il personale sul caso. Nessun modello da compilare, nessun formato di dettatura da imparare. Il medico lavora come ha sempre fatto.",
          ],
        },
        {
          title: "2. L'assistente trascrive",
          paragraphs: [
            "Riconoscimento vocale nelle lingue dello studio, con lessico medico, nomi di farmaci e termini anatomici riconosciuti correttamente e non approssimati.",
          ],
        },
        {
          title: '3. Produce due documenti invece di uno',
          paragraphs: [
            "Il referto della visita, strutturato secondo il modello dello studio: anamnesi, reperti, diagnosi, prestazioni eseguite, piano.",
            "La fattura TARDOC, codificata. Le posizioni derivano da ciò che è stato davvero detto e fatto nella registrazione, nel rispetto delle regole 2026, compreso quali prestazioni si fatturano singolarmente e quali fanno scattare un forfait ambulatoriale. È questa distinzione a causare la maggior parte dei rifiuti.",
          ],
        },
        {
          title: '4. Consegna al sistema informativo dello studio',
          paragraphs: [
            "Le prestazioni registrate e codificate arrivano nel gestionale dello studio come dati strutturati. L'assistente conserva i propri dati e trasferisce il risultato finale: niente ridigitazione, niente copia-incolla tra due schermi e nessuna dipendenza dalla roadmap del fornitore del software.",
          ],
        },
        {
          title: '5. Avvisa la fatturazione',
          paragraphs: [
            "La persona responsabile riceve la fattura pronta da controllare, con la trascrizione allegata. Dove l'assistente ha un dubbio, per esempio una prestazione ambigua o un dettaglio mancante che cambia la posizione tariffale, segnala quel punto preciso invece di tirare a indovinare con sicurezza.",
            "La fatturazione smette di interrogare i medici e comincia a rivedere bozze.",
          ],
        },
      ],
      table: {
        title: 'Risultati',
        beforeLabel: 'Prima',
        afterLabel: 'Dopo',
        rows: [
          { label: 'Quota del tempo medico dedicata alla documentazione', before: '35 %', after: '15 %' },
          { label: 'Tempo medio di gestione per fattura', before: '75 min', after: '12 min' },
          { label: 'Tempo medio di pagamento', before: '~60 giorni', after: '~17 giorni, 3.5× più rapido' },
          { label: 'Costo medico per visita', before: '~CHF 58', after: '~CHF 45, il 23.5 % in meno' },
        ],
      },
      afterTable: [
        "La riga centrale è quella che lo studio ha sentito per prima: la fatturazione non ricostruisce più le visite, le controlla.",
        "La terza riga si somma nel tempo. Una fattura corretta al primo invio non viene respinta, corretta né ripresentata, e il miglioramento di 3.5× nasce soprattutto dall'eliminazione di questo giro, più che dall'accelerazione di un singolo passaggio.",
        "Perché la prima riga è un dato di costo e non di comodità: la documentazione è tempo medico pagato. Portarla dal 35 % al 15 % dell'anno lavorativo non rende il medico più economico; cambia la quota di stipendio che produce visite. Il tempo clinico passa dal 65 % all'85 % delle ore pagate, quindi lo stesso costo copre il 30.8 % di visite in più e il costo medico di ciascuna scende del 23.5 %.",
        "In franchi, per un medico: un costo pieno di CHF 220'000 l'anno (uno specialista dipendente in uno studio ginevrino, stipendio di circa CHF 185'000 più oneri sociali), 42 ore a settimana per 46 settimane e una visita di 20 minuti. Sono 3'767 visite l'anno prima e 4'927 dopo, per cui il costo medico per visita scende da CHF 58.4 a CHF 44.7, un risparmio di CHF 13.70 ciascuna. Dove l'agenda non può assorbire la capacità in più, gli stessi venti punti diventano 386 ore mediche restituite all'anno, circa CHF 44'000 per medico, un quinto di posto a tempo pieno.",
        "Base salariale: gli specialisti dipendenti in Svizzera hanno uno stipendio mediano di CHF 140'000–172'000 e i medici con studio proprio guadagnano in media circa CHF 320'000; CHF 220'000 di costo pieno è il centro di questa forchetta per uno studio privato multidisciplinare. Sostituite la vostra cifra: il 23.5 % vale per qualunque stipendio, perché deriva dalla quota di tempo clinico e non dal suo prezzo.",
        "La prima riga è il motivo per cui i medici hanno accettato. Venti punti di tempo di lavoro restituiti all'attività clinica: per uno studio con più medici è capacità che altrimenti andrebbe assunta.",
      ],
      nextIntro:
        "Con la documentazione a regime, lo studio è passato all'altro capo del percorso del paziente: riuscire a fissare l'appuntamento. Una richiesta che arriva per telefono alle 19:00 o via messaggio di domenica aspetta l'apertura della reception. Il paziente non aspetta; chiama lo studio successivo. Ora lo studio sta automatizzando la presa degli appuntamenti con un chatbot e un assistente vocale IA. Tre obiettivi dichiarati:",
      next: [
        'Tempo di risposta sotto i 10 secondi, su ogni canale',
        "Prenotazioni accettate fuori orario: la sera, nel fine settimana, nei giorni festivi",
        "Costi di reception ridotti eliminando il volume di chiamate del tipo «avete qualcosa giovedì pomeriggio?», mentre la reception resta",
      ],
      elsewhereIntro:
        "Lo stesso meccanismo vale ovunque un dialogo professionale parlato debba diventare una cartella codificata, fatturabile e verificabile:",
      elsewhere: [
        'studi specialistici e studi associati',
        "fisioterapia e riabilitazione, dove la documentazione delle sedute decide il rimborso",
        'studi veterinari',
        "servizi di cure a domicilio, dove si documenta tra una visita e l'altra, in auto",
      ],
      meta: {
        title: 'Studio medico: documentazione dal 35 % al 15 % del tempo | Trident Software',
        description:
          'La visita registrata diventa referto e fattura TARDOC codificata. Documentazione dal 35 % al 15 % del tempo, fattura gestita in 12 minuti invece di 75.',
      },
    },
  },
}

export default record
