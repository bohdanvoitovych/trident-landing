import type { ServiceDetail } from './types'

export const de: ServiceDetail = {
  kicker: 'KI-Agenten und Assistenten für Unternehmen',
  title: 'KI-Agenten, die antworten, qualifizieren und Routineverkäufe abschliessen',
  lede: 'Agenten, die Anfragen in Sekunden beantworten, auf Deutsch, Französisch, Italienisch und Englisch, und das Ergebnis in Ihre Systeme schreiben. Sie übernehmen die Routine; komplexe Geschäfte bleiben bei Ihren Leuten.',
  intro: 'Was der Agent ist, welche Anfragen er übernimmt und wo er an die bestehenden Systeme eines Schweizer Unternehmens andockt.',
  gap: {
    title: 'Die Lücke, die wir schliessen',
    intro:
      'Schweizer KMU verlieren Aufträge nicht wegen schlechter Produkte. Sie verlieren sie, weil niemand antwortet. Und die Schweizer Zahlen dazu sind genauer als die, die in diesem Markt meist zitiert werden.',
    items: [
      {
        lead: '77 % der Schweizer Bevölkerung möchten eine KMU-Dienstleistung online finden und buchen. 3 % der KMU unterstützen das vollständig.',
        text: 'Diese Lücke ist der ganze Business Case (localsearch × HSLU, KMU Digital Pulse 2025).',
      },
      {
        lead: 'Es gibt keinen dominanten Kanal, den man besetzen könnte.',
        text: 'Schweizer Konsumentinnen und Konsumenten verteilen sich fast gleichmässig: 16 % bevorzugen E-Mail, 16 % Online-Chat, 14 % Telefon, und 77 % erwarten, den Kanal selbst zu wählen (ServiceNow Consumer Voice Report 2024, Schweiz). Die E-Mail wurde hier nicht verdrängt wie in Märkten, in denen Messenger dominieren. Es sind Kanäle dazugekommen. Alle mit Personal abzudecken, kostet Geld.',
      },
      {
        lead: 'Tempo entscheidet.',
        text: 'In der Lead Response Management Study sinkt die Chance, einen Lead zu qualifizieren, zwischen 5 und 30 Minuten Antwortzeit rund um das 21-Fache. Das sind US-Daten von 2007, nicht Schweizer Daten, aber die Richtung ist unbestritten. Schweizerisch ist dies: 84 % halten schnellen Support in Echtzeit für wichtig, und 64 % wollen Self-Service, statt auf eine Person zu warten.',
      },
      {
        lead: 'Für einen Teil des Markts beginnt die Suche heute bei einem KI-Assistenten.',
        text: '13 % der Schweizer Bevölkerung beginnen die Suche nach einer KMU-Dienstleistung in ChatGPT oder Copilot statt in einer Suchmaschine, und rund 20 % haben im letzten Jahr so nach KMU-Dienstleistungen recherchiert (KMU Digital Pulse 2025). Ein Unternehmen, das eine maschinell erzeugte Anfrage nicht innert Sekunden beantwortet, ist für dieses Segment unsichtbar.',
      },
      {
        lead: "Eine Innendienst-Stelle für CHF 8'000 im Monat verbringt den grössten Teil des Tages mit denselben zwölf Fragen.",
        text: 'Öffnungszeiten, Lieferfrist, Preisrahmen, Verfügbarkeit, «Bedienen Sie auch die Waadt?».',
      },
      {
        lead: 'Kundinnen und Kunden schreiben auf Deutsch, Französisch, Italienisch und Englisch.',
        text: 'Eine Anfrage auf Italienisch um 21:00 wartet meist, bis jemand im Büro Italienisch liest. WhatsApp erreicht rund 85 % der Schweizer Bevölkerung. Der Kanal ist also da, das Personal dafür meistens nicht.',
      },
    ],
    close: 'Ein Verkaufsagent ist ein Geschäftsprozess mit eingebautem Sprachmodell. Er ist weder ein Chat-Widget noch eine Modelllizenz.',
  },
  does: {
    title: 'Was der Agent tut',
    items: [
      { lead: 'Antwortet innert Sekunden', text: 'Auf jedem Kanal, zu jeder Stunde, auch an Wochenenden und Feiertagen, kantonale eingeschlossen.' },
      {
        lead: 'Qualifiziert',
        text: 'Stellt die Fragen, die Ihr bester Verkäufer stellt, in der Sprache des Kunden, und erfasst die Antworten als strukturierte Felder.',
      },
      { lead: 'Empfiehlt', text: 'Wählt Produkte, Leistungen oder Termine aus Ihrem aktuellen Katalog, Lager und Preisblatt, nicht aus einem starren Skript.' },
      {
        lead: 'Beantwortet die üblichen Einwände',
        text: 'Preis, Lieferfrist, Vergleich mit der Konkurrenz, Konditionen: beantwortet mit Ihren freigegebenen Formulierungen, nicht improvisiert.',
      },
      { lead: 'Erledigt das Kleine selbst', text: 'Bucht den Termin, reserviert den Slot, stellt die QR-Rechnung oder den Zahlungslink aus, bestätigt per E-Mail.' },
      {
        lead: 'Schreibt in Ihre Systeme',
        text: 'CRM: Kontakt, Firma, Deal, Verlauf, Score, nächster Schritt. ERP oder Buchhaltung: der Auftrag, der Lieferschein, der Rechnungsentwurf, zu den Konditionen des Kunden. Über eine API, wo es eine gibt, und über die Benutzeroberfläche, wo nicht. Ihre Systeme bleiben die massgebliche Quelle.',
      },
      {
        lead: 'Verschickt, was folgt',
        text: 'Die Bestätigung an den Kunden, die Aufgabe an die Person, die für den nächsten Schritt zuständig ist, die neue Ankunftszeit, wenn sie sich verschiebt, die Erinnerung vor dem Termin, die Rechnung, wenn sie fällig ist. Die Benachrichtigung ist Teil des Prozesses, kein Bericht darüber.',
      },
      {
        lead: 'Übergibt',
        text: 'Bei geringer Sicherheit, gereiztem Ton oder einem Thema auf der Eskalationsliste stoppt der Agent und leitet an eine benannte Person weiter, mit dem ganzen Kontext.',
      },
    ],
    close: 'Die Parallelität ist nicht das Spannende, aber an Kampagnentagen zählt sie: Hunderte gleichzeitige Gespräche kosten so viel wie eines.',
  },
  fte: {
    title: 'Agent oder eine zusätzliche Vollzeitstelle',
    intro:
      'Richtwerte für die Schweiz, für eine Stelle im Innendienst oder Kundendienst, mit Vollkosten (Lohn, Sozialabgaben, Arbeitsplatz, Ferien, Krankheit, Rekrutierung).',
    rows: [
      { label: 'Verfügbarkeit', agent: '24/7, 365 Tage', hire: '~42 Std./Woche, abzüglich Ferien und Krankheit' },
      { label: 'Erste Antwort', agent: 'Sekunden', hire: '15–30 Min. während der Bürozeit, sonst am nächsten Morgen' },
      { label: 'Sprachen', agent: 'DE, FR, IT, EN ab dem ersten Tag', hire: 'Realistisch eine oder zwei' },
      { label: 'Gleichzeitige Gespräche', agent: 'Hunderte', hire: 'Allerhöchstens 10–15' },
      { label: 'Laufende Kosten', agent: 'Ab ~CHF 450/Monat plus Nutzung', hire: "CHF 90'000–120'000/Jahr mit Vollkosten" },
      { label: 'Einarbeitung', agent: 'Tage', hire: '3–6 Monate bis zur vollen Produktivität' },
      { label: 'Konstanz', agent: 'Jedes Mal dieselbe Antwort, versioniert und prüfbar', hire: 'Je nach Person, Laune und Tag verschieden' },
    ],
    close:
      'Ehrlich gelesen heisst diese Tabelle: Der Agent übernimmt die routinemässigen 70–80 % des Gesprächsvolumens, nicht die Person. Komplexe Verhandlungen, Grosskunden, alles mit Unterschrift oder Haftung bleibt beim Menschen. Unternehmen, die hier Nutzen ziehen, setzen ihr Team für anspruchsvollere Aufgaben ein, statt es zu verkleinern.',
  },
  channels: {
    title: 'Kanäle',
    items: [
      'WhatsApp Business',
      'Website-Widget',
      'E-Mail',
      'Telegram',
      'Instagram / Facebook',
      'SMS',
      'Microsoft Teams (interne Agenten)',
      'Telefon (siehe Grenzen unten)',
    ],
    note: 'Der Kanalmix richtet sich nach dem Geschäft, nicht nach der Mode. WhatsApp erreicht privat fast alle, über E-Mail läuft weiterhin der grösste Teil des B2B-Verkehrs, und das Web-Widget holt die Käufer ab, die schon auf Ihrer Seite sind.',
  },
  integrations: {
    title: 'Integrationen',
    lead: 'Alles mit einer API, dazu ein dokumentierter Ausweg für Systeme, die nur nachts eine CSV-Datei exportieren.',
    groups: [
      { title: 'CRM', items: ['HubSpot', 'Salesforce', 'Pipedrive', 'Microsoft Dynamics', 'Zoho'] },
      { title: 'ERP / Buchhaltung', items: ['bexio', 'Abacus', 'SAP Business One', 'Odoo', 'Sage'] },
      {
        title: 'Buchung und Betrieb',
        items: ['Microsoft 365 / Outlook-Kalender', 'Google Kalender', 'Branchenspezifische Buchungssysteme'],
      },
      { title: 'Zahlung', items: ['Schweizer QR-Rechnung', 'TWINT', 'Stripe', 'PostFinance', 'Datatrans'] },
      {
        title: 'Gesundheitswesen',
        items: ['vitomed', 'amétiq siMed', 'AESKULAP', 'KISIM', 'Epic', 'Meierhofer', 'HL7/FHIR', 'DICOM', 'HIN-gesicherte Mail'],
        note: 'Dazu die übrigen Schweizer Praxissysteme. Siehe die Klinik-Fallstudien weiter unten.',
      },
      {
        title: 'Logistik und Aussendienst',
        items: ['Fleet Planner', 'Driver Pro', 'Transfer', 'Back Office'],
        note: 'Die Produktlinie 8Move, wenn aus der Anfrage ein Auftrag, eine Route oder eine Lieferung werden muss.',
      },
    ],
    note: 'Wo ein System bauartbedingt nur abholt (1C ist das klassische Beispiel), schreibt der Agent in eine Zwischenschicht, und das ERP holt die Daten nach seinem eigenen Takt ab. Wir versprechen keinen Push in Systeme, die keinen Push erlauben.',
  },
  limits: {
    intro: 'Wir veröffentlichen das, weil es der schnellste Weg ist herauszufinden, ob es hier überhaupt ein Projekt gibt.',
    items: [
      {
        title: 'Unter ~150 Anfragen pro Monat',
        text: 'Die Rechnung geht nicht auf. Verbessern Sie zuerst den Antwortprozess und melden Sie sich, wenn das Volumen da ist.',
      },
      {
        title: 'Keine schriftliche Wissensbasis und niemand, der sie schreibt',
        text: 'Der Agent übernimmt Ihre Qualität. Wo nichts zu übernehmen ist, gibt es nichts einzuführen.',
      },
      {
        title: 'Regulierte Beratung',
        text: 'Medizinische Diagnose, Anlageempfehlung, Rechtsauskunft. Der Agent bucht, triagiert und bereitet vor; er berät nicht.',
      },
      {
        title: 'Schweizerdeutsch am Telefon',
        text: 'Geschriebener Dialekt funktioniert gut. Die Spracherkennung von gesprochenem Dialekt bleibt die Schwachstelle aller Anbieter am Markt, auch unsere. Wenn Ihre Kunden auf Züritüütsch anrufen, starten Sie mit Textkanälen und nehmen Sie das Telefon in Phase zwei.',
      },
      {
        title: 'Ein reiner Stellenabbau-Auftrag',
        text: 'Projekte unter dem Motto «das Team ersetzen» schneiden schlechter ab als solche unter dem Motto «dem Team die Routine abnehmen». Das sagen wir schon im ersten Gespräch.',
      },
    ],
  },
  delivery: {
    title: 'Einführung in sechs Etappen',
    intro:
      'Typische Dauer von der Unterschrift bis zum Livegang: drei bis fünf Wochen. Der Engpass ist fast nie die Technik. Entscheidend ist, wie schnell Ihre Seite Fragen zum eigenen Prozess beantworten kann.',
    stages: [
      {
        title: 'Audit und Auswahl der Szenarien',
        days: 'Tag 1–3',
        text: 'Wir lesen Ihre letzten 200 Anfragen. Welche wiederholen sich, welche führen zum Abschluss, wo bricht der Prozess. Ergebnis: die priorisierte Liste der Gespräche, die sich zu automatisieren lohnen, und der Business Case aus [der Wirtschaftlichkeitsrechnung](/pricing), gefüllt mit Ihren Zahlen.',
      },
      {
        title: 'Wissensbasis',
        days: 'Tag 3–10',
        text: 'Katalog, Preise, Lieferbedingungen, Öffnungszeiten, FAQ, freigegebene Formulierungen für die heiklen Fragen. Wir stellen sie aus dem zusammen, was Sie schon haben, und befragen die Personen, die den Rest im Kopf haben. In dieser Etappe entscheidet sich die Qualität, und genau diese Etappe unterschätzen Kunden.',
      },
      {
        title: 'Kanäle und Systeme',
        days: 'Tag 8–15',
        text: 'Verifizierung von WhatsApp Business, Widget, Anbindung von CRM und ERP, Kalender, Zahlung. Die WhatsApp-Verifizierung folgt dem Zeitplan von Meta, nicht unserem. Starten Sie sie deshalb am ersten Tag.',
      },
      {
        title: 'Tests',
        days: 'Tag 15–20',
        text: 'Ihr Team versucht, den Agenten aus dem Tritt zu bringen, in allen vier Sprachen. Eskalationsregeln, Ton, Grenzfälle, der absichtlich feindselige Kunde. Nichts geht live, bevor Ihre Verkaufsleitung die Gesprächsverläufe freigegeben hat.',
      },
      {
        title: 'Begleiteter Start',
        days: 'Tag 20–25',
        text: 'Echter Verkehr, jedes Gespräch wird täglich geprüft. Die Schwelle für die Übergabe an Menschen liegt anfangs bewusst hoch und sinkt, wenn die Verläufe es rechtfertigen.',
      },
      {
        title: 'Betrieb und Feinabstimmung',
        days: 'Laufend',
        text: 'Monatliche Durchsicht: was der Agent falsch gemacht hat, was er neu übernehmen soll, was sich bei Ihren Preisen und Ihrem Sortiment geändert hat. Der erste Monat Feinabstimmung ist in der Integrationsgebühr enthalten.',
      },
    ],
    close: 'Erste messbare Effekte zeigen sich nach zwei bis vier Wochen im Betrieb. Wer Ergebnisse in der ersten Woche verspricht, zeigt eine Demo, keine Einführung.',
  },
  languages: {
    title: 'Sprachen',
    paragraphs: [
      'DE, FR, IT, EN ab dem ersten Tag. Jede Sprache bekommt eigene freigegebene Formulierungen statt einer Übersetzungsschicht, denn ein französischsprachiger und ein deutschsprachiger Schweizer Käufer reagieren nicht auf denselben Satz.',
      'Wo die Plattform 8Move ist, umfasst das volle Set sieben Sprachen: EN, FR, DE, IT, ES, PT und AR mit Layout von rechts nach links. Das zählt in Gastronomie und Hotellerie, in der Logistik und überall, wo Mitarbeitende ohne Schweizer Herkunft dieselbe Oberfläche lesen.',
      'Texte auf Hochdeutsch sind von hoher Qualität. Geschriebenes Schweizerdeutsch wird verstanden. Die Erkennung von gesprochenem Dialekt ist die ehrliche Schwachstelle; siehe [Wo wir Nein sagen](#limits) weiter oben.',
    ],
  },
  data: {
    title: 'Datenschutz',
    items: [
      {
        lead: 'nDSG und DSGVO',
        text: 'Einführungen erfüllen das revidierte Schweizer Datenschutzgesetz und, wo Sie Kunden in der EU bedienen, die DSGVO. Sie erhalten den Auftragsverarbeitungsvertrag, den Eintrag im Verzeichnis der Bearbeitungstätigkeiten und die Texte der Datenschutzerklärung für die Kanäle. Wir entwerfen sie; Sie müssen das nicht selbst tun.',
      },
      {
        lead: 'Hosting in der Schweiz oder in der EU, nach Ihrer Wahl',
        text: 'Gesprächsdaten und Wissensbasis liegen in der Region, die Sie wählen. Unterauftragsverarbeiter sind dokumentiert und im Vertrag aufgeführt.',
      },
      {
        lead: 'Mit Ihren Daten wird kein Modell trainiert',
        text: 'Vertraglich ausgeschlossen, mit den Bedingungen des Anbieters als Anhang, damit Sie es prüfen können, statt vertrauen zu müssen.',
      },
      {
        lead: 'Aufbewahrung nach Ihren Vorgaben',
        text: 'Einstellbare Aufbewahrungsfristen, Löschung auf Anfrage, Export bei Vertragsende in einem offenen Format. Keine Bindung über Ihre eigenen Daten.',
      },
      {
        lead: 'Übergaben an Menschen werden protokolliert',
        text: 'Jede Eskalation, jeder manuelle Eingriff, der vollständige Verlauf bleibt für Prüfungen erhalten. Wenn ein Gespräch Gesundheits-, Finanz- oder Personaldaten berührt, ist die Eskalationsschwelle standardmässig strenger.',
      },
    ],
  },
  guarantees: {
    title: 'Was wir garantieren',
    items: [
      {
        lead: 'Feste Integrationsgebühr',
        text: 'Offeriert nach dem Workshop, auf Basis eines schriftlichen Umfangs. Änderungen am Umfang werden separat offeriert und nie stillschweigend in den Monatsposten verschoben.',
      },
      {
        lead: 'Ihre Systeme bleiben Ihre',
        text: 'Keine proprietäre Bindung auf der Seite von CRM oder ERP. Wenn Sie kündigen, erhalten Sie Wissensbasis, Gesprächsverläufe und Szenariodefinitionen als Export.',
      },
      {
        lead: 'Unabhängig vom Modell',
        text: 'Der Agent ist so gebaut, dass sich das zugrunde liegende Modell austauschen lässt. Das schützt Sie vor der Preispolitik und vor dem Ausfall eines einzelnen Anbieters.',
      },
      { lead: 'Ein namentlich bekannter Engineer, keine Ticket-Warteschlange', text: 'Dieselbe Person vom Workshop bis zum Betrieb.' },
      {
        lead: 'Wir sagen Ihnen, wann Sie nicht kaufen sollten',
        text: 'Die Ausschlussgründe unter [Wo wir Nein sagen](#limits) prüfen wir im Workshop, bevor jemand etwas unterschreibt.',
      },
    ],
  },
  faq: {
    title: 'Häufige Fragen',
    items: [
      {
        question: 'Was, wenn der Agent etwas falsch macht?',
        answer:
          'Bei geringer Sicherheit eskaliert er, statt zu improvisieren. Die Schwelle ist eine Einstellung, und wir setzen sie zu Beginn vorsichtig. Preise, Lagerbestand und Verfügbarkeit liest er live aus Ihren Systemen; er nennt nichts aus dem Gedächtnis.',
      },
      {
        question: 'Merken die Kunden, dass sie mit einer Maschine sprechen?',
        answer:
          'Ja, das wird von Anfang an offengelegt. Verschleierung wirkt unehrlich, und für Unternehmen mit Endkunden in der EU verlangen die Transparenzpflichten des AI Act inzwischen die Offenlegung. Offen deklarierte Agenten, die gut antworten, schneiden besser ab als versteckte, die schlecht antworten.',
      },
      {
        question: 'Wir hatten schon einen Chatbot, und er war ein Desaster.',
        answer:
          'Meist war das ein Bot mit Entscheidungsbaum, ohne Zugriff auf Live-Daten, ohne Eskalation und ohne Verantwortlichen nach dem Livegang. Bringen Sie die Gesprächsverläufe in den Workshop mit. Daran zeigt sich am schnellsten, was sich ändern würde.',
      },
      {
        question: 'Können wir klein anfangen?',
        answer: 'Das ist der empfohlene Weg. Ein Kanal, ein Szenario, ein Monat. Ausbauen, wenn die Zahlen es belegen.',
      },
      {
        question: 'Wem gehört was nach einer Kündigung?',
        answer:
          'Ihnen gehören die Wissensbasis, die Gesprächsdaten und die Szenariodefinitionen. Uns gehört der Code der Plattform. So steht es klar im Vertrag.',
      },
    ],
  },
  next: {
    title: 'Nächster Schritt',
    text: 'Kostenloser 45-minütiger Workshop. Bringen Sie Ihr Anfragevolumen, Ihre Antwortzeiten und Ihren Kanalmix mit. Sie gehen mit Ihrem eigenen ROI-Modell nach Hause, ob wir zusammenarbeiten oder nicht. Wenn die Zahlen aufgehen, bauen wir innerhalb von 10 Arbeitstagen einen funktionierenden Prototyp mit Ihren eigenen Daten.',
    economics: 'Zur Wirtschaftlichkeit',
  },
}
