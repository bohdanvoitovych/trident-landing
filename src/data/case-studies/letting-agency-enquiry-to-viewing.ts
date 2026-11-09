import type { CaseRecord } from '../cases'

const record: CaseRecord = {
  slug: 'letting-agency-enquiry-to-viewing',
  publishedAt: '2026-10-14',
  client: 'Residential letting agency, Romandie, Switzerland',
  services: ['ai-services', 'software-engineering'],
  techStack: [],
  evidence: 'modelled',
  relatedCases: [],
  content: {
    en: {
      client: 'Residential letting agency, Romandie, Switzerland',
      industry: 'Residential letting agency · Switzerland',
      hero: {
        title: 'Real estate: from portal enquiry to booked viewing',
        tagline: 'A reply within minutes, in the language the enquiry was written in, turned into a qualified viewing slot.',
      },
      note: 'Industry scenario. Built on published Swiss market data and on our own project work, not on a single named client. The figures in Results are the effect the design is engineered to produce; each one names the mechanism behind it.',
      results: [
        { metric: 'First response to a portal enquiry', value: 'hours → under 15 sec' },
        { metric: 'Enquiries answered outside office hours', value: 'none → all of them' },
        { metric: 'Enquiry → booked viewing', value: 'in the same conversation' },
      ],
      sections: [
        {
          title: 'The business',
          paragraphs: [
            'An agency that does one thing: it lets apartments on behalf of owners, across two municipalities in Swiss Romandie. A few hundred units on its books, a listing pipeline that never empties, and a team small enough that everyone does three jobs.',
            "It does not sell property and it does not run the buildings. Its mandate begins when a flat is given notice and ends when a new tenancy is signed, so the whole business is compressed into the weeks between those two dates, and its revenue is the letting fee the owner pays per signed tenancy. Every day a flat stands empty is the owner's loss and the agency's argument at the next mandate renewal.",
            'Listings go to the portals that matter here: Homegate and ImmoScout24, which between them carry most of the inquiry volume and both belong to Swiss Marketplace Group, plus Flatfox with its own messenger and Newhome, the alternative backed by the cantonal banks.',
            "The object and the tenancy live in one of the Swiss standards (Rimo R5 or ImmoTop2 from W&W Immo Informatik, GARAIO REM, or AbaImmo), sometimes the agency's own installation, sometimes the owner's, which the agency is given access to. Either way those systems hold the record and the accounting. None of them was built to be a letting desk, and none of them answers a portal message on a Sunday.",
          ],
        },
        {
          title: 'Before the change: the inquiries arrive as a burst, and mostly ask the same six things',
          paragraphs: [
            'A listing goes up and the responses land in the first forty-eight hours: is it still available, when can I see it, are the charges included, are pets allowed, which floor, is there parking. An agent handling a dozen listings answers those questions several hundred times a month, and none of that answering needs an agent.',
            'An inquiry that arrives on Saturday evening waits until Monday morning; by then the serious candidate has booked two viewings elsewhere, and one of them will do.',
          ],
        },
        {
          title: 'One listing, more languages than the office speaks',
          paragraphs: [
            'In Romandie the first language is French, but the same apartment draws enquiries in German, Italian and English: a family relocating from Zurich, a company placing an employee, an international arrival who has not learned French yet. The answer has to come in the language it was asked in, and in practice it waits for whoever in the office writes that language.',
            'Below the four national and business languages sits the part agencies rarely staff for at all. A large share of tenants in this market are Portuguese- and Spanish-speaking, and a growing share Arabic-speaking. The agent therefore runs the same seven languages the 8Move platform standardises on: EN, FR, DE, IT, ES, PT and AR, the last with right-to-left layout. That list follows the actual demographics of who rings the doorbell. A candidate who can ask their questions in Portuguese and get a straight answer applies; one who cannot does not.',
          ],
        },
        {
          title: 'No-shows',
          paragraphs: [
            "A viewing booked eleven days out with no reminder in between is a viewing that a third of the time does not happen. Group slots half fill; individual slots burn an agent's afternoon.",
          ],
        },
        {
          title: 'What we built',
          paragraphs: [
            'An agent that sits in front of the system of record rather than inside it, because Rimo R5, ImmoTop2, GARAIO REM and AbaImmo hold tenancies, and an inquiry is not a tenancy yet. It is a candidate, and candidates are handled where they arrive: on the portal, in the messenger, at nine in the evening.',
          ],
        },
        {
          title: '1. It answers within a minute, in the language of the inquiry',
          paragraphs: [
            "Every channel the listing produces (portal message, Flatfox messenger, the agency's own form, e-mail, WhatsApp) is answered within a minute of arrival, in any of the seven languages: French, German, Italian, English, Spanish, Portuguese and Arabic.",
          ],
        },
        {
          title: '2. It answers from the listing, not from a script',
          paragraphs: [
            'Availability, floor, charges included or not, pets, parking, the earliest move-in date, notice period, the deposit. Read from the live listing and the object record, so the answer is right even when the flat was let last week, which is the case where a scripted bot does real damage.',
          ],
        },
        {
          title: '3. It qualifies into fields, not into free text',
          paragraphs: [
            'The questions a good letting agent asks: move-in date and notice period at the current address, household size, employment and income situation as the candidate states it, pets, parking need.',
            "And the one that decides more applications than any other in this market: the deposit. Residential deposits are capped at three months' rent and go into a blocked account in the tenant's name, which for a family moving flats means two deposits tied up at once. So the agent asks how the deposit will be provided: cash into the blocked account, or a deposit-guarantee product instead. A candidate who has not thought about it is not disqualified. They are told the amount early, while there is still time to arrange it, instead of discovering it at signature.",
            'All of it is recorded as structured fields against the object, so the shortlist can be sorted rather than read.',
            'And it asks only what it may. No payslips, no debt-collection extract, no marital or health questions in the first contact. Those belong to the stage where the applicant is seriously considered, and the agent is built to ask them only then.',
          ],
        },
        {
          title: '4. It books from the real calendar',
          paragraphs: [
            'It uses a live two-way sync with the Google Calendar of the agent who will actually run the viewing (Microsoft 365 where the agency runs on Outlook), not a slot list somebody maintains by hand. Free/busy only: a private appointment blocks the slot without exposing what it is.',
            'Where a viewing needs more than the agent, the same check runs across the other calendars before anything is offered:',
          ],
          items: [
            'the owner, where the owner attends or has to release the keys;',
            'the sitting tenant, which in this market is the common case rather than the exception: most flats are viewed while still occupied, and the appointment has to fit their availability with proper notice;',
            'the candidate, who receives a calendar invitation rather than a line of text, so the viewing lands in the diary they actually look at.',
          ],
          closing: [
            'A slot is only offered when every calendar it depends on is free. That is the difference between booking and double-booking: conflicts are resolved before the candidate sees the option, not apologized for afterward.',
            'Group viewings fill and close automatically when full. Confirmations carry the address and entry instructions, a reminder goes out the day before, and every message carries a one-tap rebooking link, because a candidate who moves their slot is worth more than one who quietly does not turn up.',
          ],
        },
        {
          title: '5. It closes the loop honestly',
          paragraphs: [
            'Candidates who fail the hard criteria are told so immediately and politely. They prefer that to silence, and it removes them from the viewing list before they occupy a slot. Everyone else reaches the agency with a filled-in profile and a booked appointment.',
          ],
        },
        {
          title: '6. The application file has a lifecycle',
          paragraphs: [
            "Documents are requested at the stage where they are permissible and held against the application. Once the tenancy is signed, the unsuccessful applicants' files are deleted on a schedule rather than at somebody's discretion. The deletion is logged, because being able to show it is the point.",
          ],
        },
      ],
      table: {
        title: 'Results',
        beforeLabel: 'Before',
        afterLabel: 'After',
        rows: [
          { label: 'First response to a portal enquiry', before: 'hours, and overnight for anything after 18:00', after: 'under 15 sec, every hour of the week' },
          { label: 'Enquiries answered outside office hours', before: 'none until the next working day', after: 'all of them' },
          { label: 'Languages served on one listing', before: 'whoever is in the office', after: 'FR, DE, IT, EN plus ES, PT and AR from the first reply' },
          { label: 'Enquiry → booked viewing', before: 'agent triage, then a scheduling exchange', after: 'booked in the same conversation' },
          { label: 'Viewing no-shows', before: 'no reminder between booking and viewing', after: 'confirmation, day-before reminder, one-tap rebooking' },
          { label: 'Applicant data collected at first contact', before: 'whatever the form asked everyone', after: 'the minimum permissible, with documents requested only at shortlist stage' },
          { label: "Unsuccessful applicants' files", before: 'in a mailbox, indefinitely', after: 'deleted on a logged schedule after signature' },
          { label: 'Agent time on first-line enquiry handling', before: 'the larger part of the day', after: 'exceptions, negotiation and viewings' },
          { label: 'Days a flat stands empty between tenancies', before: 'set by how fast the shortlist can be built', after: 'set by the notice period, not by the response backlog' },
        ],
      },
      next: [
        'Write-back into the system of record: the selected candidate and the signed tenancy created in Rimo R5, ImmoTop2, GARAIO REM or AbaImmo without retyping, through whichever interface that installation exposes.',
        'Tenant-side self-service after signature: key handover, defect reporting, the questions that fill the office phone in the first month of a tenancy.',
        "Viewing logistics at portfolio scale: grouping viewings by building and by agent's route, a planning problem the agency currently solves by hand.",
        'Owner reporting: what the listing produced, how fast, and where candidates dropped out, as a monthly report rather than a request.',
      ],
      elsewhereIntro: 'Wherever a scarce, viewable asset draws a burst of enquiries and the winner is whoever answers first:',
      elsewhere: [
        'commercial and office letting, where the qualification questions are different but the burst is identical',
        'property sales, where the same speed advantage decides who gets the mandate',
        'co-working and serviced offices, storage, parking',
        'holiday lettings and serviced apartments, where the enquiry volume is higher and the value per booking lower',
      ],
      meta: {
        title: 'Real estate: enquiry to booked viewing | Trident Software',
        description:
          'Modelled scenario for a Romandie letting agency: portal enquiries answered in under 15 seconds, in seven languages, viewing booked in the same chat.',
      },
    },
    de: {
      client: 'Immobilienvermittlung für Mietwohnungen, Romandie, Schweiz',
      industry: 'Vermietung von Wohnungen · Schweiz',
      hero: {
        title: 'Immobilien: von der Portalanfrage zum gebuchten Besichtigungstermin',
        tagline: 'Eine Antwort innert Minuten, in der Sprache der Anfrage, und daraus ein qualifizierter Besichtigungstermin.',
      },
      note: 'Branchenszenario. Es beruht auf veröffentlichten Daten zum Schweizer Markt und auf unserer eigenen Projektarbeit, nicht auf einem einzelnen namentlichen Kunden. Die Zahlen unter Ergebnisse beschreiben die Wirkung, für die das System ausgelegt ist; jede nennt den Mechanismus dahinter.',
      results: [
        { metric: 'Erste Antwort auf eine Portalanfrage', value: 'Stunden → unter 15 s' },
        { metric: 'Anfragen ausserhalb der Bürozeiten beantwortet', value: 'keine → alle' },
        { metric: 'Anfrage → gebuchte Besichtigung', value: 'im selben Gespräch' },
      ],
      sections: [
        {
          title: 'Das Unternehmen',
          paragraphs: [
            'Eine Agentur mit einer einzigen Aufgabe: Sie vermietet Wohnungen im Auftrag von Eigentümern, in zwei Gemeinden der Romandie. Ein paar hundert Wohnungen im Bestand, eine Pipeline von Inseraten, die nie leer wird, und ein Team, so klein, dass alle drei Jobs machen.',
            'Sie verkauft keine Liegenschaften und bewirtschaftet keine Gebäude. Ihr Mandat beginnt, wenn eine Wohnung gekündigt wird, und endet, wenn ein neuer Mietvertrag unterschrieben ist. Das ganze Geschäft spielt sich also in den Wochen zwischen diesen zwei Daten ab, und der Umsatz ist die Vermittlungsgebühr, die der Eigentümer pro unterschriebenem Mietvertrag zahlt. Jeder Tag Leerstand ist ein Verlust für den Eigentümer und ein Argument gegen die Agentur bei der nächsten Mandatserneuerung.',
            'Die Inserate gehen auf die Portale, die hier zählen: Homegate und ImmoScout24, die zusammen den Grossteil der Anfragen bringen und beide zur Swiss Marketplace Group gehören, dazu Flatfox mit eigenem Messenger und Newhome, die von den Kantonalbanken getragene Alternative.',
            'Objekt und Mietverhältnis liegen in einer der Schweizer Standardlösungen (Rimo R5 oder ImmoTop2 von W&W Immo Informatik, GARAIO REM oder AbaImmo), mal in der eigenen Installation der Agentur, mal in jener des Eigentümers, auf die die Agentur Zugriff erhält. So oder so führen diese Systeme die Akte und die Buchhaltung. Keines davon wurde als Vermietungsschalter gebaut, und keines beantwortet am Sonntag eine Portalnachricht.',
          ],
        },
        {
          title: 'Vorher: Die Anfragen kommen schubweise und fragen meist dieselben sechs Dinge',
          paragraphs: [
            'Ein Inserat geht online, und die Antworten treffen in den ersten achtundvierzig Stunden ein: Ist sie noch frei, wann kann ich sie sehen, sind die Nebenkosten inbegriffen, sind Haustiere erlaubt, welches Stockwerk, gibt es einen Parkplatz. Wer ein Dutzend Inserate betreut, beantwortet diese Fragen mehrere hundert Mal im Monat, und für keine dieser Antworten braucht es eine Fachperson.',
            'Eine Anfrage, die am Samstagabend eintrifft, wartet bis Montagmorgen; bis dahin hat die ernsthafte Interessentin zwei Besichtigungen anderswo gebucht, und eine davon wird reichen.',
          ],
        },
        {
          title: 'Ein Inserat, mehr Sprachen, als im Büro gesprochen werden',
          paragraphs: [
            'In der Romandie ist Französisch die erste Sprache, aber dieselbe Wohnung zieht Anfragen auf Deutsch, Italienisch und Englisch an: eine Familie, die aus Zürich umzieht, eine Firma, die einen Mitarbeiter unterbringt, jemand aus dem Ausland, der noch kein Französisch spricht. Die Antwort muss in der Sprache der Frage kommen, und in der Praxis wartet sie, bis jemand im Büro diese Sprache schreibt.',
            'Unter den vier Landes- und Geschäftssprachen liegt der Teil, für den Agenturen kaum je Personal haben. Ein grosser Teil der Mieterschaft in diesem Markt spricht Portugiesisch oder Spanisch, ein wachsender Teil Arabisch. Der Agent arbeitet deshalb mit denselben sieben Sprachen, die die 8Move-Plattform als Standard nutzt: EN, FR, DE, IT, ES, PT und AR, Letzteres mit Layout von rechts nach links. Diese Liste folgt der tatsächlichen Bevölkerung, die an der Tür klingelt. Wer seine Fragen auf Portugiesisch stellen kann und eine klare Antwort bekommt, bewirbt sich; wer das nicht kann, tut es nicht.',
          ],
        },
        {
          title: 'Nicht erschienene Interessenten',
          paragraphs: [
            'Eine Besichtigung, die elf Tage im Voraus gebucht wird, ohne Erinnerung dazwischen, findet in einem Drittel der Fälle nicht statt. Gruppentermine füllen sich zur Hälfte; Einzeltermine kosten eine Fachperson den Nachmittag.',
          ],
        },
        {
          title: 'Was wir gebaut haben',
          paragraphs: [
            'Einen Agenten, der vor dem führenden System sitzt und nicht darin, denn Rimo R5, ImmoTop2, GARAIO REM und AbaImmo verwalten Mietverhältnisse, und eine Anfrage ist noch kein Mietverhältnis. Sie ist eine Interessentin oder ein Interessent, und die werden dort betreut, wo sie ankommen: auf dem Portal, im Messenger, um neun Uhr abends.',
          ],
        },
        {
          title: '1. Er antwortet innert einer Minute, in der Sprache der Anfrage',
          paragraphs: [
            'Jeder Kanal, den das Inserat erzeugt (Portalnachricht, Flatfox-Messenger, das eigene Formular der Agentur, E-Mail, WhatsApp), wird innert einer Minute nach Eingang beantwortet, in jeder der sieben Sprachen: Französisch, Deutsch, Italienisch, Englisch, Spanisch, Portugiesisch und Arabisch.',
          ],
        },
        {
          title: '2. Er antwortet aus dem Inserat, nicht aus einem Skript',
          paragraphs: [
            'Verfügbarkeit, Stockwerk, Nebenkosten inbegriffen oder nicht, Haustiere, Parkplatz, frühester Einzug, Kündigungsfrist, Mietkaution. Gelesen aus dem aktuellen Inserat und der Objektakte, sodass die Antwort auch dann stimmt, wenn die Wohnung letzte Woche vermietet wurde, genau der Fall, in dem ein Bot mit Skript echten Schaden anrichtet.',
          ],
        },
        {
          title: '3. Er qualifiziert in Felder, nicht in Freitext',
          paragraphs: [
            'Die Fragen, die eine gute Vermieterin stellt: Einzugsdatum und Kündigungsfrist an der aktuellen Adresse, Haushaltsgrösse, Anstellung und Einkommen nach Angabe der Person, Haustiere, Parkplatzbedarf.',
            'Und die Frage, die in diesem Markt mehr Bewerbungen entscheidet als jede andere: die Kaution. Mietkautionen für Wohnungen sind auf drei Monatsmieten begrenzt und gehen auf ein Sperrkonto auf den Namen der Mieterschaft, was für eine Familie beim Wohnungswechsel zwei gebundene Kautionen gleichzeitig bedeutet. Der Agent fragt deshalb, wie die Kaution geleistet wird: bar auf das Sperrkonto oder stattdessen mit einer Mietkautionsversicherung. Wer noch nicht daran gedacht hat, wird nicht ausgeschlossen. Die Person erfährt den Betrag früh, solange noch Zeit bleibt, ihn zu organisieren, statt erst bei der Unterschrift.',
            'Alles wird als strukturierte Felder am Objekt gespeichert, damit sich die Auswahlliste sortieren lässt, statt gelesen werden zu müssen.',
            'Und er fragt nur, was er fragen darf. Keine Lohnausweise, kein Betreibungsregisterauszug, keine Fragen zu Zivilstand oder Gesundheit beim ersten Kontakt. Das gehört in die Phase, in der eine Bewerbung ernsthaft geprüft wird, und der Agent ist so gebaut, dass er erst dann danach fragt.',
          ],
        },
        {
          title: '4. Er bucht aus dem echten Kalender',
          paragraphs: [
            'Er nutzt eine laufende Synchronisation in beide Richtungen mit dem Google-Kalender der Person, die die Besichtigung tatsächlich durchführt (Microsoft 365, wenn die Agentur mit Outlook arbeitet), statt einer Liste von Zeitfenstern, die jemand von Hand pflegt. Nur frei/belegt: Ein privater Termin blockiert das Zeitfenster, ohne zu zeigen, worum es geht.',
            'Braucht eine Besichtigung mehr als die Fachperson, läuft dieselbe Prüfung über die anderen Kalender, bevor etwas angeboten wird:',
          ],
          items: [
            'den Eigentümer, wenn er dabei ist oder die Schlüssel übergeben muss;',
            'die aktuelle Mieterschaft, in diesem Markt der Normalfall und keine Ausnahme: Die meisten Wohnungen werden besichtigt, solange sie noch bewohnt sind, und der Termin muss mit gebührender Vorankündigung zu ihrer Verfügbarkeit passen;',
            'die interessierte Person, die eine Kalendereinladung erhält statt einer Textzeile, damit die Besichtigung in der Agenda landet, in die sie tatsächlich schaut.',
          ],
          closing: [
            'Ein Zeitfenster wird erst angeboten, wenn jeder Kalender, von dem es abhängt, frei ist. Das ist der Unterschied zwischen Buchen und Doppelbuchen: Konflikte werden gelöst, bevor die Person die Option sieht, statt sich nachher dafür zu entschuldigen.',
            'Gruppenbesichtigungen füllen sich und schliessen automatisch, wenn sie voll sind. Bestätigungen enthalten Adresse und Zugangshinweise, am Vortag geht eine Erinnerung hinaus, und jede Nachricht enthält einen Link zum Umbuchen mit einem Tippen, denn wer seinen Termin verschiebt, ist mehr wert als jemand, der stillschweigend nicht erscheint.',
          ],
        },
        {
          title: '5. Er schliesst den Kreis ehrlich ab',
          paragraphs: [
            'Wer die harten Kriterien nicht erfüllt, erfährt das sofort und höflich. Das ist den Leuten lieber als Schweigen, und es nimmt sie von der Besichtigungsliste, bevor sie ein Zeitfenster besetzen. Alle anderen kommen mit ausgefülltem Profil und gebuchtem Termin bei der Agentur an.',
          ],
        },
        {
          title: '6. Das Bewerbungsdossier hat einen Lebenszyklus',
          paragraphs: [
            'Dokumente werden in der Phase angefordert, in der sie zulässig sind, und bei der Bewerbung abgelegt. Ist der Mietvertrag unterschrieben, werden die Dossiers der nicht berücksichtigten Personen nach Plan gelöscht und nicht nach Ermessen. Die Löschung wird protokolliert, denn darum geht es: sie belegen zu können.',
          ],
        },
      ],
      table: {
        title: 'Ergebnisse',
        beforeLabel: 'Vorher',
        afterLabel: 'Nachher',
        rows: [
          { label: 'Erste Antwort auf eine Portalanfrage', before: 'Stunden, und über Nacht für alles nach 18:00', after: 'unter 15 s, zu jeder Stunde der Woche' },
          { label: 'Anfragen ausserhalb der Bürozeiten beantwortet', before: 'keine bis zum nächsten Arbeitstag', after: 'alle' },
          { label: 'Sprachen pro Inserat', before: 'je nachdem, wer im Büro ist', after: 'FR, DE, IT, EN plus ES, PT und AR ab der ersten Antwort' },
          { label: 'Anfrage → gebuchte Besichtigung', before: 'Sichtung durch die Fachperson, dann Terminabsprache', after: 'im selben Gespräch gebucht' },
          { label: 'Nicht erschienene Interessenten', before: 'keine Erinnerung zwischen Buchung und Besichtigung', after: 'Bestätigung, Erinnerung am Vortag, Umbuchen mit einem Tippen' },
          { label: 'Daten beim ersten Kontakt', before: 'was das Formular von allen verlangte', after: 'das zulässige Minimum, Dokumente erst in der Auswahlphase' },
          { label: 'Dossiers nicht berücksichtigter Personen', before: 'im Postfach, unbefristet', after: 'nach Unterzeichnung nach protokolliertem Plan gelöscht' },
          { label: 'Zeit der Fachperson für Erstanfragen', before: 'der grössere Teil des Tages', after: 'Ausnahmen, Verhandlung und Besichtigungen' },
          { label: 'Leerstandstage zwischen zwei Mietverhältnissen', before: 'bestimmt davon, wie schnell die Auswahlliste steht', after: 'bestimmt von der Kündigungsfrist, nicht vom Rückstau bei den Antworten' },
        ],
      },
      next: [
        'Rückschreiben ins führende System: die ausgewählte Person und der unterschriebene Mietvertrag in Rimo R5, ImmoTop2, GARAIO REM oder AbaImmo angelegt, ohne Abtippen, über die Schnittstelle, die die jeweilige Installation bietet.',
        'Self-Service für die Mieterschaft nach der Unterzeichnung: Schlüsselübergabe, Mängelmeldungen, die Fragen, die im ersten Monat eines Mietverhältnisses das Telefon im Büro blockieren.',
        'Besichtigungslogistik für das ganze Portfolio: Besichtigungen nach Gebäude und Route der Fachperson bündeln, eine Planungsaufgabe, die die Agentur heute von Hand löst.',
        'Berichte für Eigentümer: was das Inserat gebracht hat, wie schnell und wo Interessenten abgesprungen sind, als monatlicher Bericht statt auf Anfrage.',
      ],
      elsewhereIntro: 'Überall dort, wo ein knappes Objekt, das man besichtigen kann, einen Schub von Anfragen auslöst und gewinnt, wer zuerst antwortet:',
      elsewhere: [
        'Vermietung von Gewerbe- und Büroflächen, wo die Qualifikationsfragen andere sind, der Schub aber derselbe',
        'Immobilienverkauf, wo derselbe Geschwindigkeitsvorteil entscheidet, wer das Mandat bekommt',
        'Coworking und Business Center, Lagerräume, Parkplätze',
        'Ferienwohnungen und Serviced Apartments, mit mehr Anfragen und weniger Wert pro Buchung',
      ],
      meta: {
        title: 'Vermietungs-Szenario: erste Antwort unter 15 Sekunden | Trident Software',
        description:
          'Modelliertes Szenario für eine Vermietungsagentur in der Romandie: Antwort in unter 15 Sekunden, in sieben Sprachen, Besichtigung gleich gebucht.',
      },
    },
    fr: {
      client: 'Agence de location résidentielle, Romandie, Suisse',
      industry: 'Location résidentielle · Suisse',
      hero: {
        title: 'Immobilier : de la demande sur portail à la visite réservée',
        tagline: "Une réponse en quelques minutes, dans la langue de la demande, transformée en créneau de visite qualifié.",
      },
      note: "Scénario sectoriel. Il s'appuie sur des données publiées du marché suisse et sur nos propres projets, pas sur un client nommé. Les chiffres des résultats décrivent l'effet pour lequel le système est conçu ; chacun indique le mécanisme qui le produit.",
      results: [
        { metric: 'Première réponse à une demande sur portail', value: 'heures → moins de 15 s' },
        { metric: 'Demandes traitées hors heures de bureau', value: 'aucune → toutes' },
        { metric: 'Demande → visite réservée', value: 'dans le même échange' },
      ],
      sections: [
        {
          title: "L'entreprise",
          paragraphs: [
            "Une agence qui fait une seule chose : elle loue des appartements pour le compte de propriétaires, dans deux communes de Suisse romande. Quelques centaines de logements en portefeuille, des annonces qui ne s'arrêtent jamais, et une équipe assez petite pour que chacun fasse trois métiers.",
            "Elle ne vend pas de biens et ne gère pas les immeubles. Son mandat commence quand un appartement est résilié et se termine quand un nouveau bail est signé : toute l'activité se joue dans les semaines entre ces deux dates, et ses revenus sont les honoraires de location que le propriétaire paie par bail signé. Chaque jour de vacance est une perte pour le propriétaire et un argument contre l'agence au prochain renouvellement du mandat.",
            "Les annonces partent sur les portails qui comptent ici : Homegate et ImmoScout24, qui concentrent l'essentiel des demandes et appartiennent tous deux à Swiss Marketplace Group, ainsi que Flatfox avec sa propre messagerie et Newhome, l'alternative soutenue par les banques cantonales.",
            "L'objet et le bail vivent dans l'une des solutions suisses de référence (Rimo R5 ou ImmoTop2 de W&W Immo Informatik, GARAIO REM ou AbaImmo), tantôt l'installation de l'agence, tantôt celle du propriétaire, à laquelle l'agence a accès. Dans les deux cas, ces systèmes tiennent le dossier et la comptabilité. Aucun n'a été conçu comme un guichet de location, et aucun ne répond à un message de portail le dimanche.",
          ],
        },
        {
          title: 'Avant : les demandes arrivent par vagues et posent presque toujours les mêmes six questions',
          paragraphs: [
            "Une annonce est publiée et les réponses tombent dans les quarante-huit premières heures : est-ce encore libre, quand puis-je visiter, les charges sont-elles comprises, les animaux sont-ils acceptés, quel étage, y a-t-il une place de parc. Un gérant qui suit une douzaine d'annonces répond à ces questions plusieurs centaines de fois par mois, et aucune de ces réponses ne demande un professionnel.",
            "Une demande qui arrive le samedi soir attend le lundi matin ; entre-temps, le candidat sérieux a réservé deux visites ailleurs, et l'une d'elles fera l'affaire.",
          ],
        },
        {
          title: "Une annonce, plus de langues que n'en parle le bureau",
          paragraphs: [
            "En Romandie, la première langue est le français, mais le même appartement attire des demandes en allemand, en italien et en anglais : une famille qui déménage de Zurich, une entreprise qui loge un collaborateur, une personne arrivée de l'étranger qui ne parle pas encore français. La réponse doit venir dans la langue de la question, et en pratique elle attend que quelqu'un au bureau écrive cette langue.",
            "Sous les quatre langues nationales et d'affaires se trouve la part pour laquelle les agences n'ont presque jamais de personnel. Une grande partie des locataires de ce marché parlent portugais ou espagnol, et une part croissante arabe. L'agent fonctionne donc dans les mêmes sept langues que la plateforme 8Move utilise en standard : EN, FR, DE, IT, ES, PT et AR, cette dernière avec une mise en page de droite à gauche. Cette liste suit la population réelle qui sonne à la porte. Un candidat qui peut poser ses questions en portugais et obtenir une réponse claire postule ; celui qui ne le peut pas ne postule pas.",
          ],
        },
        {
          title: 'Les visites manquées',
          paragraphs: [
            "Une visite réservée onze jours à l'avance sans rappel entre-temps n'a pas lieu une fois sur trois. Les créneaux collectifs se remplissent à moitié ; les créneaux individuels mangent l'après-midi d'un gérant.",
          ],
        },
        {
          title: 'Ce que nous avons construit',
          paragraphs: [
            "Un agent placé devant le système de gestion plutôt que dedans, car Rimo R5, ImmoTop2, GARAIO REM et AbaImmo gèrent des baux, et une demande n'est pas encore un bail. C'est un candidat, et les candidats se traitent là où ils arrivent : sur le portail, dans la messagerie, à neuf heures du soir.",
          ],
        },
        {
          title: "1. Il répond en moins d'une minute, dans la langue de la demande",
          paragraphs: [
            "Chaque canal que l'annonce génère (message sur portail, messagerie Flatfox, formulaire de l'agence, e-mail, WhatsApp) reçoit une réponse dans la minute qui suit, dans l'une des sept langues : français, allemand, italien, anglais, espagnol, portugais et arabe.",
          ],
        },
        {
          title: "2. Il répond à partir de l'annonce, pas d'un script",
          paragraphs: [
            "Disponibilité, étage, charges comprises ou non, animaux, place de parc, date d'entrée la plus proche, délai de résiliation, garantie de loyer. Le tout lu dans l'annonce en ligne et la fiche de l'objet, pour que la réponse soit juste même si l'appartement a été loué la semaine passée, précisément le cas où un bot à script fait de vrais dégâts.",
          ],
        },
        {
          title: '3. Il qualifie dans des champs, pas en texte libre',
          paragraphs: [
            "Les questions qu'un bon gérant pose : date d'entrée et délai de résiliation à l'adresse actuelle, taille du ménage, situation professionnelle et revenus tels que le candidat les indique, animaux, besoin d'une place de parc.",
            "Et celle qui décide plus de dossiers que toutes les autres dans ce marché : la garantie de loyer. Elle est plafonnée à trois mois de loyer et déposée sur un compte bloqué au nom du locataire, ce qui, pour une famille qui déménage, signifie deux garanties immobilisées en même temps. L'agent demande donc comment la garantie sera constituée : en espèces sur le compte bloqué, ou par une caution de loyer à la place. Un candidat qui n'y a pas pensé n'est pas écarté. Il apprend le montant tôt, quand il reste du temps pour s'organiser, au lieu de le découvrir à la signature.",
            "Tout est enregistré en champs structurés sur l'objet, pour que la liste de candidats puisse être triée plutôt que lue.",
            "Et il ne demande que ce qu'il a le droit de demander. Pas de fiches de salaire, pas d'extrait des poursuites, pas de questions sur l'état civil ou la santé au premier contact. Cela relève de l'étape où la candidature est sérieusement examinée, et l'agent est conçu pour ne le demander qu'à ce moment-là.",
          ],
        },
        {
          title: '4. Il réserve dans le vrai agenda',
          paragraphs: [
            "Il utilise une synchronisation bidirectionnelle en direct avec l'agenda Google de la personne qui mènera réellement la visite (Microsoft 365 si l'agence travaille avec Outlook), et non une liste de créneaux tenue à la main. Libre/occupé uniquement : un rendez-vous privé bloque le créneau sans révéler ce qu'il est.",
            "Quand une visite demande plus que le gérant, la même vérification passe par les autres agendas avant toute proposition :",
          ],
          items: [
            "le propriétaire, s'il participe ou doit remettre les clés ;",
            "le locataire en place, qui dans ce marché est la règle plutôt que l'exception : la plupart des appartements se visitent encore occupés, et le rendez-vous doit respecter ses disponibilités avec un préavis correct ;",
            "le candidat, qui reçoit une invitation d'agenda plutôt qu'une ligne de texte, pour que la visite arrive dans l'agenda qu'il consulte vraiment.",
          ],
          closing: [
            "Un créneau n'est proposé que si chaque agenda dont il dépend est libre. C'est la différence entre réserver et réserver deux fois : les conflits sont réglés avant que le candidat voie l'option, au lieu d'excuses après coup.",
            "Les visites collectives se remplissent et se ferment automatiquement quand elles sont complètes. Les confirmations contiennent l'adresse et les indications d'accès, un rappel part la veille, et chaque message contient un lien pour changer de créneau en un geste, car un candidat qui déplace son rendez-vous vaut mieux qu'un candidat qui ne vient pas sans prévenir.",
          ],
        },
        {
          title: '5. Il boucle honnêtement',
          paragraphs: [
            "Les candidats qui ne remplissent pas les critères impératifs l'apprennent tout de suite et poliment. Ils préfèrent cela au silence, et ils sortent de la liste de visite avant d'occuper un créneau. Tous les autres arrivent à l'agence avec un profil rempli et un rendez-vous réservé.",
          ],
        },
        {
          title: '6. Le dossier de candidature a un cycle de vie',
          paragraphs: [
            "Les documents sont demandés à l'étape où ils sont admissibles et rattachés à la candidature. Une fois le bail signé, les dossiers des candidats non retenus sont supprimés selon un calendrier et non au gré de quelqu'un. La suppression est journalisée, car tout l'intérêt est de pouvoir la prouver.",
          ],
        },
      ],
      table: {
        title: 'Résultats',
        beforeLabel: 'Avant',
        afterLabel: 'Après',
        rows: [
          { label: 'Première réponse à une demande sur portail', before: 'des heures, et le lendemain pour tout ce qui arrive après 18:00', after: 'moins de 15 s, à toute heure de la semaine' },
          { label: 'Demandes traitées hors heures de bureau', before: "aucune jusqu'au jour ouvrable suivant", after: 'toutes' },
          { label: 'Langues servies par annonce', before: 'selon qui est au bureau', after: 'FR, DE, IT, EN plus ES, PT et AR dès la première réponse' },
          { label: 'Demande → visite réservée', before: 'tri par le gérant, puis échange pour fixer un rendez-vous', after: 'réservée dans le même échange' },
          { label: 'Visites manquées', before: 'aucun rappel entre la réservation et la visite', after: 'confirmation, rappel la veille, changement de créneau en un geste' },
          { label: 'Données collectées au premier contact', before: 'tout ce que le formulaire demandait à chacun', after: 'le minimum admissible, documents demandés seulement au stade de la présélection' },
          { label: 'Dossiers des candidats non retenus', before: 'dans une boîte mail, sans limite de temps', after: 'supprimés selon un calendrier journalisé après la signature' },
          { label: 'Temps du gérant pour les premières demandes', before: 'la plus grande partie de la journée', after: 'exceptions, négociation et visites' },
          { label: 'Jours de vacance entre deux baux', before: 'fixés par la vitesse à laquelle la liste de candidats se constitue', after: "fixés par le délai de résiliation, pas par le retard dans les réponses" },
        ],
      },
      next: [
        "Écriture dans le système de gestion : le candidat retenu et le bail signé créés dans Rimo R5, ImmoTop2, GARAIO REM ou AbaImmo sans ressaisie, via l'interface qu'offre chaque installation.",
        "Libre-service pour les locataires après la signature : remise des clés, annonce des défauts, les questions qui saturent le téléphone du bureau le premier mois d'un bail.",
        "Logistique des visites à l'échelle du portefeuille : regrouper les visites par immeuble et selon la tournée du gérant, un problème de planification que l'agence résout aujourd'hui à la main.",
        "Rapports aux propriétaires : ce que l'annonce a produit, en combien de temps et où les candidats ont décroché, sous forme de rapport mensuel plutôt que sur demande.",
      ],
      elsewhereIntro: "Partout où un bien rare, qui se visite, déclenche une vague de demandes et où gagne celui qui répond en premier :",
      elsewhere: [
        "location de surfaces commerciales et de bureaux, où les questions de qualification diffèrent mais la vague est identique",
        "vente immobilière, où le même avantage de vitesse décide de qui obtient le mandat",
        "coworking et bureaux équipés, garde-meubles, places de parc",
        "locations de vacances et appartements avec services, avec plus de demandes et moins de valeur par réservation",
      ],
      meta: {
        title: 'Scénario location : première réponse en moins de 15 s | Trident Software',
        description:
          "Scénario modélisé pour une agence de location romande : réponse en moins de 15 secondes, en sept langues, visite réservée dans le même échange.",
      },
    },
    it: {
      client: 'Agenzia di locazione residenziale, Romandia, Svizzera',
      industry: 'Locazione residenziale · Svizzera',
      hero: {
        title: 'Immobiliare: dalla richiesta sul portale alla visita prenotata',
        tagline: 'Una risposta in pochi minuti, nella lingua della richiesta, trasformata in una fascia di visita qualificata.',
      },
      note: "Scenario di settore. Si basa su dati pubblicati del mercato svizzero e sui nostri progetti, non su un singolo cliente con nome. Le cifre dei risultati descrivono l'effetto per cui il sistema è progettato; ognuna indica il meccanismo che la produce.",
      results: [
        { metric: 'Prima risposta a una richiesta dal portale', value: 'ore → meno di 15 s' },
        { metric: "Richieste evase fuori dall'orario d'ufficio", value: 'nessuna → tutte' },
        { metric: 'Richiesta → visita prenotata', value: 'nella stessa conversazione' },
      ],
      sections: [
        {
          title: "L'azienda",
          paragraphs: [
            "Un'agenzia che fa una sola cosa: affitta appartamenti per conto dei proprietari, in due comuni della Svizzera romanda. Qualche centinaio di unità in portafoglio, un flusso di annunci che non si esaurisce mai e un team così piccolo che ognuno fa tre lavori.",
            "Non vende immobili e non amministra gli stabili. Il suo mandato comincia quando un appartamento viene disdetto e finisce quando si firma un nuovo contratto: tutta l'attività si concentra nelle settimane tra queste due date, e i ricavi sono la provvigione di locazione che il proprietario paga per ogni contratto firmato. Ogni giorno di sfitto è una perdita per il proprietario e un argomento contro l'agenzia al prossimo rinnovo del mandato.",
            "Gli annunci vanno sui portali che contano qui: Homegate e ImmoScout24, che insieme portano gran parte delle richieste e appartengono entrambi a Swiss Marketplace Group, più Flatfox con la sua messaggistica e Newhome, l'alternativa sostenuta dalle banche cantonali.",
            "L'oggetto e la locazione vivono in uno degli standard svizzeri (Rimo R5 o ImmoTop2 di W&W Immo Informatik, GARAIO REM o AbaImmo), a volte nell'installazione dell'agenzia, a volte in quella del proprietario, a cui l'agenzia ha accesso. In entrambi i casi questi sistemi tengono la pratica e la contabilità. Nessuno è stato pensato come sportello di locazione, e nessuno risponde a un messaggio dal portale di domenica.",
          ],
        },
        {
          title: 'Prima: le richieste arrivano a ondate e chiedono quasi sempre le stesse sei cose',
          paragraphs: [
            "Un annuncio va online e le risposte arrivano nelle prime quarantotto ore: è ancora libero, quando posso vederlo, le spese sono incluse, sono ammessi animali, a che piano, c'è un posteggio. Chi segue una dozzina di annunci risponde a queste domande diverse centinaia di volte al mese, e nessuna di queste risposte richiede un professionista.",
            "Una richiesta che arriva il sabato sera aspetta fino al lunedì mattina; nel frattempo il candidato serio ha prenotato due visite altrove, e una andrà bene.",
          ],
        },
        {
          title: "Un annuncio, più lingue di quelle parlate in ufficio",
          paragraphs: [
            "In Romandia la prima lingua è il francese, ma lo stesso appartamento attira richieste in tedesco, italiano e inglese: una famiglia che si trasferisce da Zurigo, un'azienda che sistema un dipendente, una persona arrivata dall'estero che non parla ancora francese. La risposta deve arrivare nella lingua della domanda, e in pratica aspetta che qualcuno in ufficio scriva quella lingua.",
            "Sotto le quattro lingue nazionali e d'affari c'è la parte per cui le agenzie quasi non hanno personale. Una quota importante degli inquilini di questo mercato parla portoghese o spagnolo, e una quota crescente arabo. L'agente lavora quindi nelle stesse sette lingue che la piattaforma 8Move usa come standard: EN, FR, DE, IT, ES, PT e AR, quest'ultima con impaginazione da destra a sinistra. Questo elenco segue la popolazione reale che suona al campanello. Un candidato che può fare le sue domande in portoghese e ricevere una risposta chiara si candida; uno che non può, no.",
          ],
        },
        {
          title: 'Visite mancate',
          paragraphs: [
            "Una visita prenotata con undici giorni di anticipo, senza promemoria nel mezzo, una volta su tre non avviene. Le fasce di gruppo si riempiono a metà; quelle individuali bruciano il pomeriggio di un agente.",
          ],
        },
        {
          title: 'Che cosa abbiamo realizzato',
          paragraphs: [
            "Un agente che sta davanti al sistema gestionale invece che dentro, perché Rimo R5, ImmoTop2, GARAIO REM e AbaImmo gestiscono contratti di locazione, e una richiesta non è ancora un contratto. È un candidato, e i candidati si gestiscono dove arrivano: sul portale, nella messaggistica, alle nove di sera.",
          ],
        },
        {
          title: '1. Risponde entro un minuto, nella lingua della richiesta',
          paragraphs: [
            "Ogni canale generato dall'annuncio (messaggio dal portale, messaggistica Flatfox, modulo dell'agenzia, e-mail, WhatsApp) riceve risposta entro un minuto dall'arrivo, in una qualsiasi delle sette lingue: francese, tedesco, italiano, inglese, spagnolo, portoghese e arabo.",
          ],
        },
        {
          title: "2. Risponde partendo dall'annuncio, non da un copione",
          paragraphs: [
            "Disponibilità, piano, spese incluse o no, animali, posteggio, data d'ingresso più vicina, termine di disdetta, deposito di garanzia. Tutto letto dall'annuncio online e dalla scheda dell'oggetto, così la risposta è giusta anche se l'appartamento è stato affittato la settimana scorsa, proprio il caso in cui un bot con copione fa danni veri.",
          ],
        },
        {
          title: '3. Qualifica in campi, non in testo libero',
          paragraphs: [
            "Le domande che fa un buon agente immobiliare: data d'ingresso e termine di disdetta all'indirizzo attuale, numero di persone nel nucleo, situazione lavorativa e reddito come li dichiara il candidato, animali, bisogno di posteggio.",
            "E quella che decide più candidature di qualsiasi altra in questo mercato: il deposito. I depositi per le abitazioni sono limitati a tre mesi di affitto e vanno su un conto bloccato intestato all'inquilino, il che per una famiglia che cambia casa significa due depositi immobilizzati contemporaneamente. L'agente chiede quindi come verrà costituito il deposito: in contanti sul conto bloccato oppure con una garanzia di deposito al suo posto. Chi non ci ha ancora pensato non viene escluso. Conosce l'importo presto, quando c'è ancora tempo per organizzarsi, invece di scoprirlo alla firma.",
            "Tutto viene registrato in campi strutturati sull'oggetto, così la lista dei candidati si può ordinare invece di doverla leggere.",
            "E chiede solo ciò che può chiedere. Niente buste paga, niente estratto del registro delle esecuzioni, nessuna domanda su stato civile o salute al primo contatto. Questo appartiene alla fase in cui la candidatura viene presa seriamente in esame, e l'agente è costruito per chiederlo solo allora.",
          ],
        },
        {
          title: '4. Prenota dal calendario reale',
          paragraphs: [
            "Usa una sincronizzazione bidirezionale in tempo reale con il Google Calendar della persona che condurrà davvero la visita (Microsoft 365 se l'agenzia lavora con Outlook), non un elenco di fasce tenuto a mano. Solo libero/occupato: un appuntamento privato blocca la fascia senza mostrare di cosa si tratta.",
            "Quando una visita richiede più dell'agente, lo stesso controllo passa sugli altri calendari prima di proporre qualsiasi cosa:",
          ],
          items: [
            "il proprietario, se partecipa o deve consegnare le chiavi;",
            "l'inquilino uscente, che in questo mercato è la regola e non l'eccezione: la maggior parte degli appartamenti si visita ancora abitata, e l'appuntamento deve rispettare la sua disponibilità con il dovuto preavviso;",
            "il candidato, che riceve un invito di calendario invece di una riga di testo, così la visita finisce nell'agenda che guarda davvero.",
          ],
          closing: [
            "Una fascia viene proposta solo quando ogni calendario da cui dipende è libero. È la differenza tra prenotare e prenotare due volte: i conflitti si risolvono prima che il candidato veda l'opzione, non con le scuse dopo.",
            "Le visite di gruppo si riempiono e si chiudono automaticamente quando sono complete. Le conferme contengono indirizzo e indicazioni d'accesso, il giorno prima parte un promemoria e ogni messaggio contiene un link per spostare l'appuntamento con un tocco, perché un candidato che sposta la fascia vale più di uno che semplicemente non si presenta.",
          ],
        },
        {
          title: '5. Chiude il cerchio con onestà',
          paragraphs: [
            "I candidati che non soddisfano i criteri vincolanti lo sanno subito e con cortesia. Lo preferiscono al silenzio, e così escono dalla lista delle visite prima di occupare una fascia. Tutti gli altri arrivano all'agenzia con un profilo compilato e un appuntamento prenotato.",
          ],
        },
        {
          title: '6. Il dossier di candidatura ha un ciclo di vita',
          paragraphs: [
            "I documenti vengono richiesti nella fase in cui sono ammissibili e conservati con la candidatura. Una volta firmato il contratto, i dossier dei candidati non scelti vengono cancellati secondo un calendario e non a discrezione di qualcuno. La cancellazione viene registrata, perché il punto è poterla dimostrare.",
          ],
        },
      ],
      table: {
        title: 'Risultati',
        beforeLabel: 'Prima',
        afterLabel: 'Dopo',
        rows: [
          { label: 'Prima risposta a una richiesta dal portale', before: 'ore, e il giorno dopo per tutto ciò che arriva dopo le 18:00', after: 'meno di 15 s, a ogni ora della settimana' },
          { label: "Richieste evase fuori dall'orario d'ufficio", before: 'nessuna fino al giorno lavorativo successivo', after: 'tutte' },
          { label: 'Lingue servite per annuncio', before: 'a seconda di chi è in ufficio', after: 'FR, DE, IT, EN più ES, PT e AR dalla prima risposta' },
          { label: 'Richiesta → visita prenotata', before: "smistamento da parte dell'agente, poi accordo sull'appuntamento", after: 'prenotata nella stessa conversazione' },
          { label: 'Visite mancate', before: 'nessun promemoria tra prenotazione e visita', after: 'conferma, promemoria il giorno prima, spostamento con un tocco' },
          { label: 'Dati raccolti al primo contatto', before: 'tutto ciò che il modulo chiedeva a chiunque', after: 'il minimo ammissibile, documenti richiesti solo in fase di preselezione' },
          { label: 'Dossier dei candidati non scelti', before: 'in una casella di posta, a tempo indeterminato', after: 'cancellati secondo un calendario registrato dopo la firma' },
          { label: "Tempo dell'agente sulle prime richieste", before: 'la maggior parte della giornata', after: 'eccezioni, trattative e visite' },
          { label: 'Giorni di sfitto tra due locazioni', before: 'decisi dalla velocità con cui si compone la lista dei candidati', after: "decisi dal termine di disdetta, non dall'arretrato delle risposte" },
        ],
      },
      next: [
        "Scrittura nel sistema gestionale: il candidato scelto e il contratto firmato creati in Rimo R5, ImmoTop2, GARAIO REM o AbaImmo senza ridigitare, tramite l'interfaccia che ogni installazione mette a disposizione.",
        "Self-service per gli inquilini dopo la firma: consegna delle chiavi, segnalazione di difetti, le domande che intasano il telefono dell'ufficio nel primo mese di locazione.",
        "Logistica delle visite su tutto il portafoglio: raggruppare le visite per stabile e per giro dell'agente, un problema di pianificazione che oggi l'agenzia risolve a mano.",
        "Report per i proprietari: che cosa ha prodotto l'annuncio, in quanto tempo e dove i candidati si sono persi, come report mensile invece che su richiesta.",
      ],
      elsewhereIntro: "Ovunque un bene scarso, che si può visitare, scateni un'ondata di richieste e vinca chi risponde per primo:",
      elsewhere: [
        "locazione di spazi commerciali e uffici, dove le domande di qualifica cambiano ma l'ondata è identica",
        "vendita immobiliare, dove lo stesso vantaggio di velocità decide chi ottiene il mandato",
        "coworking e uffici arredati, depositi, posteggi",
        "affitti per vacanze e appartamenti con servizi, con più richieste e meno valore per prenotazione",
      ],
      meta: {
        title: 'Scenario locazioni: prima risposta in meno di 15 s | Trident Software',
        description:
          "Scenario modellato per un'agenzia di locazione in Romandia: ogni richiesta dal portale evasa in meno di 15 secondi, in sette lingue, visita prenotata in chat.",
      },
    },
  },
}

export default record
