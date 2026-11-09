import type { CaseRecord } from '../cases'

const record: CaseRecord = {
  slug: 'post-acute-clinic-network',
  publishedAt: '2026-10-14',
  client: 'Post-acute clinic network, Switzerland',
  services: ['ai-services', 'software-engineering'],
  techStack: [],
  relatedCases: ['clinic-voice-documentation'],
  content: {
    en: {
      client: 'Post-acute clinic network, Switzerland',
      industry: 'Healthcare · Switzerland',
      hero: {
        title: 'Patient admission, documentation and billing for a post-acute clinic network',
        tagline:
          'From however the patient arrives to a signed discharge letter and a coded invoice, without anyone retyping a document',
      },
      note: "A delivered project for a Swiss post-acute clinic network, written up without the client's name. Quality was measured end to end on real material: 8 reference letters and 5 nursing charts. The time figures are the operating targets the system is run against while the manual baseline is formally timed on site.",
      results: [
        { metric: 'Admission: bundle → patient record', value: 'over 1 h → ~5 min' },
        { metric: 'Patient identified from the bundle', value: '8 of 8 (was 5 of 8)' },
        { metric: 'Invoice ready for the ERP', value: '~2 days (was 10–15)' },
      ],
      sections: [
        {
          title: 'The business',
          paragraphs: [
            'A network of post-acute and rehabilitation clinics in Switzerland, operating medicalised temporary-care units across several sites.',
            'Each unit admits patients of retirement age for 24 hours to 15 days: people who need medical and nursing supervision, but not an acute bed. The unit exists to keep those patients out of an acute hospital, and to give the ones leaving an acute hospital somewhere to land.',
            'Clinically, most stays are the second half of an episode that started somewhere else. Administratively they are a separate billing episode: the referring institution bills its own days, the clinic bills its own, under SwissDRG (ICD-10-GM diagnoses, CHOP procedures, forfait par cas driven by length of stay, plus separately billable drugs and procedures).',
            'Each site runs its own electronic patient record and its own discharge-letter form, and the finance side runs on a separate ERP. Neither exposes an API to a third party.',
          ],
        },
        {
          title: 'Before the change: there is no single front door',
          paragraphs: ['A patient can arrive through any of these, and the clinic controls none of them:'],
          items: [
            'Transfer from an acute hospital: transfer letter, discharge summary, medication sheet, labs, imaging and specialist reports',
            'Transfer from another clinic (surgical, orthopaedic, psychiatric): operative report, post-op instructions, prescriptions',
            'Direct referral by a treating physician: a referral note or prescription, sometimes a single page, sometimes a fax',
            'From a home-care organisation: health booklet, care plan, social context',
            'From a nursing home: resident record extract, standing medication',
            "From the on-site emergency permanence: the permanence's own consultation record",
            "Re-admission of a known patient: the clinic's own records from the previous stay",
            'Family or the patient themself: whatever paper they happen to be holding',
          ],
          closing: [
            'None of it arrives as data. There is no HL7 or FHIR link with any referring institution; the handover is document-oriented, by e-mail or on paper.',
            "And the bundle fights back. It overlaps with itself: transfer letter ≈ discharge notice ≈ medical file, all restating the same diagnoses and medications, so a merge is needed rather than a concatenation. Part of it is scanned, and OCR mangles exactly the fields that matter for identity and billing: a surname comes out as DUPUTS instead of DUPUIS. And it frequently contains documents from a different episode, such as a stay three months ago that ended at home, filed next to today's transfer.",
          ],
        },
        {
          title: 'So intake is a person reading a pile and retyping it',
          paragraphs: [
            'The coordinating nurse reads the bundle, decides in their head which document is current, splits it into parts and pastes them into the patient record section by section: anamnesis here, discharge medication there, antecedents somewhere else.',
            "That takes over an hour per admission, cannot be repeated the same way twice, and depends on which coordinator is on duty. On a run of eight real files, three could not even establish the patient's identity from the bundle, because the identifying document was not among the ones uploaded, or because OCR had corrupted the name.",
          ],
        },
        {
          title: 'The discharge letter is assembled by hand from two halves',
          paragraphs: [
            "At discharge the coordinator writes the letter by combining the incoming documents with everything the team recorded during the stay: daily notes, nursing notes, medication starts and stops, physiotherapy assessments, the autonomy grid. A two-week stay's nursing chart runs to ~22 000 characters of prose. What reaches the letter is what somebody had time to find in it.",
            "Reading one real stay's chart against its own letter, we counted 11 hygiene and daily-living entries describing a trajectory (help with the toilet and dressing in week one, showering unaided by day 16) and both physiotherapy assessments (TUG 45 s → 15 s, SPPB 6/12, Tinetti). A hand-written letter prints one or two of those. The fall-risk trajectory stays in the chart and never reaches whoever receives the patient next.",
          ],
        },
        {
          title: 'The invoice leaves the building',
          paragraphs: [
            'When the letter is ready it is sent to an external billing team, which codes it under SwissDRG and sends an invoice back; someone then uploads that invoice into the finance system by hand. The billers never see the treatment context, the round trip costs days, and nothing links the invoice back to the stay that produced it.',
          ],
        },
        {
          title: 'What we built',
          paragraphs: [
            "Aida: a standalone admission, documentation and billing assistant for the unit, not a module inside the clinic's record system.",
            "It holds its own data and writes the finished result into the clinic's existing systems through UI automation on the coordinator's own workstation. No vendor integration was required, no system was replaced, and the clinic can stop using it without unwinding anything.",
          ],
        },
        {
          title: '1. Admission, whatever door the patient came through',
          paragraphs: [
            'The coordinator uploads everything that arrived with the patient, in whatever shape it arrived: a transfer letter and its annexes, a one-page referral from a treating physician, a home-care booklet, a scanned admin sheet, a prescription with a QR code, prior records of a returning patient.',
            'Aida then does the reading:',
          ],
          items: [
            'parses the whole bundle: anamnesis, diagnoses, medication schedule, labs, procedures, and the administrative identifiers billing needs;',
            'deduplicates overlapping documents, merging restatements of the same diagnoses and drugs instead of stacking them;',
            'classifies each document by type, and identifies the admission route (transfer or direct referral), because that decides which document is the primary source;',
            "resolves which episode is current, from destination and stay dates, so an earlier stay that ended at home is filed as an antecedent rather than mixed into today's admission;",
            'matches the patient, and where the match is uncertain, asks a human instead of guessing. When the alternative is attaching a document to the wrong record, that is the only acceptable behaviour.',
          ],
          closing: [
            "The result is a structured clinical record, FHIR-shaped (the stay as an Encounter, medications as MedicationStatement, reports as DiagnosticReport), and the same content written into the clinic's patient record. No splitting by hand, no Ctrl+V.",
            "The coordinator's role moves from data entry to checking a parse.",
          ],
        },
        {
          title: '2. The stay is recorded as it happens',
          paragraphs: [
            'Daily notes, nursing notes, medication starts and stops, labs and procedures accumulate against the stay. Where the team dictates, speech-to-text handles French clinical vocabulary, drug names and anatomy; the clinician confirms the formatted record before anything is written.',
            "Incoming documents during the stay, such as a lab result or an external specialist's report, go through the same intake: classified, matched to the patient, the treating physician notified, then filed.",
          ],
        },
        {
          title: "3. The discharge letter is drafted on the site's own form",
          paragraphs: [
            "Not a generic summary. Each site's real template: the structured eight-section form used at one site (motif and diagnoses, synthesis of the stay, other care, discharge medication with drugs introduced and stopped, care network, autonomy, annexes, administrative details) with the patient identity in the header and footer of every page, two signatories and the legal notice; the classic letter form used at another. A third site is added by changing a setting, not by shipping code.",
            'Output is an editable document, on purpose: the physician revises before signing, and a locked PDF would break that.',
          ],
        },
        {
          title: '4. The physician edits and signs in Aida',
          paragraphs: [
            "The reference letters contain things no source document holds: why a statin was switched mid-stay, which medication is EN RÉSERVE, the synthesis of the problem list. That is the physician's knowledge. Aida produces the draft, with source-to-section traceability, and the physician completes and confirms it. Only then is it written into the clinic's record.",
          ],
        },
        {
          title: '5. The invoice comes from the same record',
          paragraphs: [
            'ICD-10-GM and CHOP coding, DRG grouping, forfait par cas from the admission and discharge dates, separately billable drugs and procedures, billing identifiers taken from the administrative documents captured at intake. All of it is validated against the Swiss electronic-billing validators (Sumex1 drgValidator) before a human ever sees it. Finance reviews coding and amounts in Aida and confirms; delivery into the ERP follows. The external billing hop disappears.',
          ],
        },
      ],
      table: {
        title: 'Results',
        beforeLabel: 'Before',
        afterLabel: 'After',
        rows: [
          { label: 'Admission: bundle → patient record', before: 'over 1 h of reading, splitting and retyping', after: '~5 min of reviewing a parse' },
          { label: 'Patient identified from the bundle', before: '5 of 8 files on a real run', after: '8 of 8: identity taken from all documents, uncertain matches escalated' },
          { label: 'Assembling the discharge letter', before: '~90 min per stay', after: '~20 min of editing and signing' },
          { label: 'Letter available to the next care provider', before: '3–5 days after discharge', after: 'same day' },
          { label: 'Coordinator time on administrative work', before: '~2 h / day', after: '~40 min / day' },
          { label: 'Invoice ready for the ERP', before: '10–15 days (external billing loop)', after: '~2 days, pre-validated' },
          { label: 'Invoices returned by the payer', before: '~1 in 8', after: '~1 in 25' },
        ],
      },
      nextIntro: 'The sequence deliberately removes the biggest pain before touching the record system at all.',
      next: [
        'Voice for physicians: the consultation is dictated, formatted into a daily note with prescriptions and medication changes, confirmed by the physician, then written to the record. No more doing the work and then recording it.',
        'Voice for nurses: the same for nursing interventions and observations.',
        'Fully automated intake of incoming results during the stay, with physician notification.',
        'Direct delivery of the validated invoice into the ERP, without the manual upload.',
      ],
      elsewhereIntro:
        'Wherever a stay, not a single consultation, has to become a coded, signed, auditable record, and the patients arrive through several uncontrolled doors:',
      elsewhere: [
        'post-acute, rehabilitation and transitional-care units',
        'nursing homes, where the resident record is the heaviest administrative item',
        'home-care organisations, where documentation happens between visits',
        'any provider whose record system has no API and whose billing is outsourced',
      ],
      meta: {
        title: 'Post-acute clinic: admission to billing | Trident Software',
        description:
          'Admission, discharge letter and coded SwissDRG invoice from one record, with no retyping. Patient identified in 8 of 8 real files, invoice ready in ~2 days.',
      },
    },
    de: {
      client: 'Klinikgruppe für Nachsorge, Schweiz',
      industry: 'Gesundheitswesen · Schweiz',
      hero: {
        title: 'Patientenaufnahme, Dokumentation und Abrechnung für eine Klinikgruppe in der Nachsorge',
        tagline:
          'Vom Eintritt, wie auch immer er erfolgt, bis zum unterschriebenen Austrittsbericht und zur codierten Rechnung, ohne dass jemand ein Dokument abtippt',
      },
      note: 'Ein umgesetztes Projekt für eine Schweizer Klinikgruppe in der Nachsorge, beschrieben ohne den Namen des Kunden. Die Qualität wurde durchgängig an echtem Material gemessen: 8 Referenzberichte und 5 Pflegedokumentationen. Die Zeitangaben sind die Betriebsziele, an denen das System gemessen wird, während die manuelle Ausgangslage vor Ort formell gestoppt wird.',
      results: [
        { metric: 'Aufnahme: Dossier → Patientenakte', value: 'über 1 h → ~5 min' },
        { metric: 'Patient aus dem Dossier identifiziert', value: '8 von 8 (vorher 5 von 8)' },
        { metric: 'Rechnung bereit fürs ERP', value: '~2 Tage (vorher 10–15)' },
      ],
      sections: [
        {
          title: 'Das Unternehmen',
          paragraphs: [
            'Eine Gruppe von Nachsorge- und Rehabilitationskliniken in der Schweiz, die an mehreren Standorten medizinisch betreute Einheiten für Kurzaufenthalte führt.',
            'Jede Einheit nimmt Patientinnen und Patienten im Rentenalter für 24 Stunden bis 15 Tage auf: Menschen, die ärztliche und pflegerische Überwachung brauchen, aber kein Akutbett. Die Einheit soll diese Menschen aus dem Akutspital heraushalten und jenen, die das Akutspital verlassen, einen Ort zum Ankommen geben.',
            'Medizinisch ist der Aufenthalt meist die zweite Hälfte einer Episode, die anderswo begonnen hat. Administrativ ist er ein eigener Abrechnungsfall: Die zuweisende Institution rechnet ihre Tage ab, die Klinik ihre eigenen, nach SwissDRG (Diagnosen nach ICD-10-GM, Prozeduren nach CHOP, Fallpauschale abhängig von der Aufenthaltsdauer, dazu separat verrechenbare Medikamente und Leistungen).',
            'Jeder Standort führt sein eigenes elektronisches Patientendossier und sein eigenes Formular für den Austrittsbericht, die Finanzen laufen über ein separates ERP. Keines der Systeme bietet Dritten eine API.',
          ],
        },
        {
          title: 'Vorher: Es gibt keinen einheitlichen Eingang',
          paragraphs: ['Patientinnen und Patienten kommen über jeden dieser Wege, und keinen davon steuert die Klinik:'],
          items: [
            'Verlegung aus einem Akutspital: Verlegungsbericht, Austrittsbericht, Medikamentenblatt, Laborwerte, Bildgebung und Facharztberichte',
            'Verlegung aus einer anderen Klinik (Chirurgie, Orthopädie, Psychiatrie): Operationsbericht, postoperative Anweisungen, Rezepte',
            'Direkte Zuweisung durch die behandelnde Ärztin oder den behandelnden Arzt: ein Zuweisungsschreiben oder Rezept, manchmal eine einzige Seite, manchmal ein Fax',
            'Von der Spitex: Gesundheitsheft, Pflegeplan, sozialer Kontext',
            'Aus einem Pflegeheim: Auszug aus dem Bewohnerdossier, Dauermedikation',
            'Aus der Notfallpermanence vor Ort: deren eigener Konsultationsbericht',
            'Wiedereintritt einer bekannten Person: die eigenen Unterlagen der Klinik vom letzten Aufenthalt',
            'Angehörige oder die Person selbst: welches Papier sie gerade in der Hand haben',
          ],
          closing: [
            'Nichts davon kommt als Daten an. Mit keiner zuweisenden Institution besteht eine HL7- oder FHIR-Anbindung; die Übergabe läuft über Dokumente, per E-Mail oder auf Papier.',
            'Und das Dossier wehrt sich. Es überschneidet sich mit sich selbst: Verlegungsbericht ≈ Austrittsanzeige ≈ Krankengeschichte, alle mit denselben Diagnosen und Medikamenten, also braucht es eine Zusammenführung statt einer Aneinanderreihung. Ein Teil ist gescannt, und die OCR verstümmelt genau die Felder, die für Identität und Abrechnung zählen: Aus DUPUIS wird DUPUTS. Und oft liegen Dokumente aus einer anderen Episode dabei, etwa ein Aufenthalt vor drei Monaten, der zu Hause endete, abgelegt neben der heutigen Verlegung.',
          ],
        },
        {
          title: 'Also liest jemand einen Stapel und tippt ihn ab',
          paragraphs: [
            'Die koordinierende Pflegefachperson liest das Dossier, entscheidet im Kopf, welches Dokument aktuell ist, zerlegt es in Teile und fügt diese Abschnitt für Abschnitt ins Patientendossier ein: die Anamnese hier, die Austrittsmedikation dort, die Vorgeschichte woanders.',
            'Das dauert über eine Stunde pro Aufnahme, läuft nie zweimal gleich ab und hängt davon ab, wer gerade Dienst hat. Bei einem Durchgang mit acht echten Dossiers liess sich in drei Fällen nicht einmal die Identität der Person aus den Unterlagen bestimmen, weil das identifizierende Dokument nicht hochgeladen war oder die OCR den Namen verfälscht hatte.',
          ],
        },
        {
          title: 'Der Austrittsbericht entsteht von Hand aus zwei Hälften',
          paragraphs: [
            "Beim Austritt schreibt die Koordination den Bericht, indem sie die eingegangenen Dokumente mit allem kombiniert, was das Team während des Aufenthalts festgehalten hat: Tagesnotizen, Pflegenotizen, angesetzte und abgesetzte Medikamente, physiotherapeutische Assessments, das Autonomieraster. Die Pflegedokumentation eines zweiwöchigen Aufenthalts umfasst ~22'000 Zeichen Fliesstext. In den Bericht gelangt, was jemand darin rechtzeitig gefunden hat.",
            'Als wir die Dokumentation eines echten Aufenthalts mit dem zugehörigen Bericht verglichen, zählten wir 11 Einträge zu Hygiene und Alltagsaktivitäten, die einen Verlauf beschreiben (Hilfe bei Toilette und Ankleiden in der ersten Woche, selbstständiges Duschen ab Tag 16), und beide physiotherapeutischen Assessments (TUG 45 s → 15 s, SPPB 6/12, Tinetti). Ein von Hand geschriebener Bericht nennt davon eins oder zwei. Der Verlauf des Sturzrisikos bleibt in der Dokumentation und erreicht nie die Stelle, die die Person als Nächstes übernimmt.',
          ],
        },
        {
          title: 'Die Rechnung verlässt das Haus',
          paragraphs: [
            'Ist der Bericht fertig, geht er an ein externes Abrechnungsteam, das nach SwissDRG codiert und eine Rechnung zurückschickt; danach lädt jemand diese Rechnung von Hand ins Finanzsystem. Die Codierenden sehen den Behandlungskontext nie, der Umweg kostet Tage, und nichts verbindet die Rechnung mit dem Aufenthalt, aus dem sie stammt.',
          ],
        },
        {
          title: 'Was wir gebaut haben',
          paragraphs: [
            'Aida: ein eigenständiger Assistent für Aufnahme, Dokumentation und Abrechnung der Einheit, kein Modul im Dossiersystem der Klinik.',
            'Aida hält eigene Daten und schreibt das fertige Ergebnis per UI-Automatisierung am Arbeitsplatz der Koordination in die bestehenden Systeme der Klinik. Es brauchte keine Herstellerintegration, kein System wurde ersetzt, und die Klinik kann Aida jederzeit abschalten, ohne etwas rückbauen zu müssen.',
          ],
        },
        {
          title: '1. Aufnahme, egal über welchen Weg',
          paragraphs: [
            'Die Koordination lädt alles hoch, was mit der Person gekommen ist, in welcher Form auch immer: einen Verlegungsbericht mit Beilagen, eine einseitige Zuweisung, ein Spitex-Heft, ein gescanntes Administrativblatt, ein Rezept mit QR-Code, frühere Unterlagen bei einem Wiedereintritt.',
            'Danach liest Aida:',
          ],
          items: [
            'analysiert das ganze Dossier: Anamnese, Diagnosen, Medikationsplan, Labor, Prozeduren und die administrativen Kennungen, die die Abrechnung braucht;',
            'bereinigt Überschneidungen und führt Wiederholungen derselben Diagnosen und Medikamente zusammen, statt sie aufzustapeln;',
            'ordnet jedes Dokument einem Typ zu und erkennt den Eintrittsweg (Verlegung oder direkte Zuweisung), denn davon hängt ab, welches Dokument die Hauptquelle ist;',
            'bestimmt anhand von Bestimmungsort und Aufenthaltsdaten, welche Episode aktuell ist, damit ein früherer Aufenthalt, der zu Hause endete, als Vorgeschichte abgelegt wird und nicht in die heutige Aufnahme gerät;',
            'ordnet die Person zu und fragt bei unsicherer Zuordnung einen Menschen, statt zu raten. Wenn die Alternative ein Dokument in der falschen Akte ist, ist das das einzig vertretbare Verhalten.',
          ],
          closing: [
            'Das Ergebnis ist ein strukturierter klinischer Datensatz im FHIR-Format (der Aufenthalt als Encounter, Medikamente als MedicationStatement, Berichte als DiagnosticReport), und derselbe Inhalt landet im Patientendossier der Klinik. Kein Zerlegen von Hand, kein Ctrl+V.',
            'Die Koordination prüft eine Auswertung, statt Daten zu erfassen.',
          ],
        },
        {
          title: '2. Der Aufenthalt wird laufend dokumentiert',
          paragraphs: [
            'Tagesnotizen, Pflegenotizen, angesetzte und abgesetzte Medikamente, Labor und Prozeduren sammeln sich am Aufenthalt. Wo das Team diktiert, erkennt die Spracherkennung französisches klinisches Vokabular, Medikamentennamen und Anatomie; die Fachperson bestätigt den formatierten Eintrag, bevor etwas geschrieben wird.',
            'Dokumente, die während des Aufenthalts eintreffen, etwa ein Laborbefund oder ein externer Facharztbericht, durchlaufen dieselbe Aufnahme: Sie werden eingeordnet, der Person zugeordnet, die behandelnde Ärztin oder der behandelnde Arzt wird benachrichtigt, dann wird abgelegt.',
          ],
        },
        {
          title: '3. Der Austrittsbericht entsteht auf dem Formular des Standorts',
          paragraphs: [
            'Keine generische Zusammenfassung, sondern die echte Vorlage jedes Standorts: an einem Standort das strukturierte Formular mit acht Abschnitten (Eintrittsgrund und Diagnosen, Synthese des Aufenthalts, weitere Behandlungen, Austrittsmedikation mit angesetzten und abgesetzten Medikamenten, Betreuungsnetz, Autonomie, Beilagen, administrative Angaben), mit der Identität der Person in Kopf- und Fusszeile jeder Seite, zwei Unterschriften und dem rechtlichen Hinweis; an einem anderen die klassische Briefform. Ein dritter Standort kommt über eine Einstellung dazu, nicht über neuen Code.',
            'Das Ergebnis ist bewusst ein bearbeitbares Dokument: Die Ärztin oder der Arzt überarbeitet es vor der Unterschrift, und ein gesperrtes PDF würde das verhindern.',
          ],
        },
        {
          title: '4. Die Ärztin oder der Arzt bearbeitet und unterschreibt in Aida',
          paragraphs: [
            'Die Referenzberichte enthalten Dinge, die in keinem Quelldokument stehen: warum ein Statin mitten im Aufenthalt gewechselt wurde, welches Medikament EN RÉSERVE ist, die Synthese der Problemliste. Das ist ärztliches Wissen. Aida liefert den Entwurf mit Nachweis, aus welcher Quelle jeder Abschnitt stammt, und die Ärztin oder der Arzt ergänzt und bestätigt ihn. Erst dann wird er ins Dossier der Klinik geschrieben.',
          ],
        },
        {
          title: '5. Die Rechnung kommt aus demselben Datensatz',
          paragraphs: [
            'Codierung nach ICD-10-GM und CHOP, DRG-Gruppierung, Fallpauschale aus Ein- und Austrittsdatum, separat verrechenbare Medikamente und Leistungen, Abrechnungskennungen aus den administrativen Dokumenten der Aufnahme. Alles wird gegen die Schweizer Validatoren für die elektronische Abrechnung (Sumex1 drgValidator) geprüft, bevor ein Mensch es sieht. Die Finanzabteilung prüft Codierung und Beträge in Aida und bestätigt; danach folgt die Übergabe ans ERP. Der Umweg über die externe Abrechnung entfällt.',
          ],
        },
      ],
      table: {
        title: 'Ergebnisse',
        beforeLabel: 'Vorher',
        afterLabel: 'Nachher',
        rows: [
          { label: 'Aufnahme: Dossier → Patientenakte', before: 'über 1 h Lesen, Zerlegen und Abtippen', after: '~5 min Prüfen einer Auswertung' },
          { label: 'Patient aus dem Dossier identifiziert', before: '5 von 8 Dossiers in einem echten Durchgang', after: '8 von 8: Identität aus allen Dokumenten, unsichere Zuordnungen gehen an einen Menschen' },
          { label: 'Austrittsbericht zusammenstellen', before: '~90 min pro Aufenthalt', after: '~20 min Bearbeiten und Unterschreiben' },
          { label: 'Bericht bei der nächsten Betreuungsstelle', before: '3–5 Tage nach dem Austritt', after: 'am selben Tag' },
          { label: 'Administrative Zeit der Koordination', before: '~2 h / Tag', after: '~40 min / Tag' },
          { label: 'Rechnung bereit fürs ERP', before: '10–15 Tage (externe Abrechnungsschleife)', after: '~2 Tage, vorgeprüft' },
          { label: 'Vom Kostenträger zurückgewiesene Rechnungen', before: '~1 von 8', after: '~1 von 25' },
        ],
      },
      nextIntro: 'Die Reihenfolge löst bewusst zuerst das grösste Problem, bevor das Dossiersystem überhaupt angefasst wird.',
      next: [
        'Sprache für Ärztinnen und Ärzte: Die Konsultation wird diktiert, als Tagesnotiz mit Verordnungen und Medikationsänderungen formatiert, ärztlich bestätigt und dann ins Dossier geschrieben. Schluss damit, erst die Arbeit zu machen und sie danach nachzutragen.',
        'Sprache für die Pflege: dasselbe für pflegerische Interventionen und Beobachtungen.',
        'Vollautomatische Aufnahme eingehender Befunde während des Aufenthalts, mit Benachrichtigung der Ärztin oder des Arztes.',
        'Direkte Übergabe der geprüften Rechnung ans ERP, ohne manuellen Upload.',
      ],
      elsewhereIntro:
        'Überall dort, wo ein ganzer Aufenthalt und nicht eine einzelne Konsultation zu einem codierten, unterschriebenen und prüfbaren Dossier werden muss und die Patientinnen und Patienten über mehrere unkontrollierte Wege kommen:',
      elsewhere: [
        'Nachsorge-, Rehabilitations- und Übergangspflege-Einheiten',
        'Pflegeheime, wo das Bewohnerdossier der grösste administrative Posten ist',
        'Spitex-Organisationen, wo zwischen den Einsätzen dokumentiert wird',
        'jede Einrichtung, deren Dossiersystem keine API hat und deren Abrechnung ausgelagert ist',
      ],
      meta: {
        title: 'Nachsorgeklinik: Patient in 8 von 8 Dossiers erkannt | Trident Software',
        description:
          'Aufnahme, Austrittsbericht und codierte SwissDRG-Rechnung aus einem Datensatz, ohne Abtippen. Person in 8 von 8 Dossiers erkannt, Rechnung in ~2 Tagen bereit.',
      },
    },
    fr: {
      client: 'Réseau de cliniques de réadaptation, Suisse',
      industry: 'Santé · Suisse',
      hero: {
        title: "Admission, documentation et facturation pour un réseau de cliniques de soins de suite",
        tagline:
          "Quelle que soit l'arrivée du patient, jusqu'à la lettre de sortie signée et la facture codée, sans que personne ne ressaisisse un document",
      },
      note: "Un projet livré pour un réseau suisse de cliniques de soins de suite, décrit sans le nom du client. La qualité a été mesurée de bout en bout sur du matériel réel : 8 lettres de référence et 5 dossiers de soins. Les durées sont les objectifs d'exploitation du système, pendant que la situation manuelle de départ est chronométrée formellement sur place.",
      results: [
        { metric: 'Admission : dossier → dossier patient', value: "plus d'1 h → ~5 min" },
        { metric: 'Patient identifié à partir du dossier', value: '8 sur 8 (avant 5 sur 8)' },
        { metric: "Facture prête pour l'ERP", value: '~2 jours (avant 10–15)' },
      ],
      sections: [
        {
          title: "L'entreprise",
          paragraphs: [
            "Un réseau de cliniques de soins de suite et de réadaptation en Suisse, qui exploite sur plusieurs sites des unités médicalisées d'accueil temporaire.",
            "Chaque unité accueille des patients en âge de la retraite pour 24 heures à 15 jours : des personnes qui ont besoin d'une surveillance médicale et infirmière, mais pas d'un lit aigu. L'unité existe pour éviter à ces patients un hôpital aigu, et pour offrir un point de chute à ceux qui en sortent.",
            "Sur le plan clinique, la plupart des séjours sont la seconde moitié d'un épisode commencé ailleurs. Sur le plan administratif, c'est un épisode de facturation distinct : l'institution qui adresse le patient facture ses jours, la clinique les siens, selon SwissDRG (diagnostics CIM-10-GM, actes CHOP, forfait par cas selon la durée de séjour, plus médicaments et actes facturables séparément).",
            "Chaque site a son propre dossier patient informatisé et son propre formulaire de lettre de sortie, et les finances tournent sur un ERP séparé. Aucun des deux n'ouvre d'API à un tiers.",
          ],
        },
        {
          title: "Avant : il n'y a pas de porte d'entrée unique",
          paragraphs: ["Un patient peut arriver par chacune de ces voies, et la clinique n'en contrôle aucune :"],
          items: [
            "Transfert depuis un hôpital aigu : lettre de transfert, résumé de sortie, feuille de médication, laboratoire, imagerie et rapports de spécialistes",
            "Transfert depuis une autre clinique (chirurgie, orthopédie, psychiatrie) : protocole opératoire, consignes postopératoires, ordonnances",
            "Adressage direct par le médecin traitant : une lettre d'adressage ou une ordonnance, parfois une seule page, parfois un fax",
            "Depuis une organisation de soins à domicile : carnet de santé, plan de soins, contexte social",
            "Depuis un EMS : extrait du dossier du résident, traitement habituel",
            "Depuis la permanence d'urgence sur place : le rapport de consultation de la permanence",
            "Réadmission d'un patient connu : les dossiers de la clinique issus du séjour précédent",
            "La famille ou le patient lui-même : les papiers qu'ils ont en main",
          ],
          closing: [
            "Rien de tout cela n'arrive sous forme de données. Il n'existe aucun lien HL7 ou FHIR avec les institutions qui adressent ; la transmission passe par des documents, par e-mail ou sur papier.",
            "Et le dossier résiste. Il se recoupe lui-même : lettre de transfert ≈ avis de sortie ≈ dossier médical, qui reprennent tous les mêmes diagnostics et médicaments, si bien qu'il faut fusionner plutôt qu'empiler. Une partie est scannée, et l'OCR abîme précisément les champs qui comptent pour l'identité et la facturation : DUPUIS devient DUPUTS. Et il contient souvent des documents d'un autre épisode, par exemple un séjour d'il y a trois mois terminé à domicile, classé à côté du transfert du jour.",
          ],
        },
        {
          title: "L'admission, c'est donc quelqu'un qui lit une pile et la ressaisit",
          paragraphs: [
            "L'infirmière coordinatrice lit le dossier, décide de tête quel document est le bon, le découpe et colle les morceaux dans le dossier patient, rubrique par rubrique : l'anamnèse ici, le traitement de sortie là, les antécédents ailleurs.",
            "Cela prend plus d'une heure par admission, ne se fait jamais deux fois de la même façon et dépend de la personne de garde. Sur une série de huit dossiers réels, trois ne permettaient même pas d'établir l'identité du patient, parce que le document d'identification n'avait pas été téléversé ou parce que l'OCR avait déformé le nom.",
          ],
        },
        {
          title: 'La lettre de sortie est assemblée à la main à partir de deux moitiés',
          paragraphs: [
            "À la sortie, la coordination rédige la lettre en combinant les documents reçus avec tout ce que l'équipe a noté pendant le séjour : notes journalières, notes infirmières, débuts et arrêts de traitements, bilans de physiothérapie, grille d'autonomie. Le dossier de soins d'un séjour de deux semaines compte ~22'000 caractères de texte. Ce qui arrive dans la lettre, c'est ce que quelqu'un a eu le temps d'y trouver.",
            "En comparant le dossier de soins d'un séjour réel à sa propre lettre, nous avons compté 11 entrées d'hygiène et de vie quotidienne qui décrivent une évolution (aide aux toilettes et à l'habillage la première semaine, douche sans aide dès le jour 16) et les deux bilans de physiothérapie (TUG 45 s → 15 s, SPPB 6/12, Tinetti). Une lettre écrite à la main en reprend un ou deux. L'évolution du risque de chute reste dans le dossier et n'atteint jamais ceux qui prennent le patient en charge ensuite.",
          ],
        },
        {
          title: 'La facture quitte la maison',
          paragraphs: [
            "Une fois la lettre prête, elle part chez une équipe de facturation externe, qui code selon SwissDRG et renvoie une facture ; quelqu'un la téléverse ensuite à la main dans le système financier. Les codeurs ne voient jamais le contexte du traitement, l'aller-retour coûte des jours, et rien ne relie la facture au séjour dont elle vient.",
          ],
        },
        {
          title: 'Ce que nous avons construit',
          paragraphs: [
            "Aida : un assistant autonome d'admission, de documentation et de facturation pour l'unité, et non un module du dossier patient de la clinique.",
            "Aida garde ses propres données et écrit le résultat final dans les systèmes existants de la clinique par automatisation de l'interface, sur le poste de la coordination. Aucune intégration éditeur n'a été nécessaire, aucun système n'a été remplacé, et la clinique peut cesser de l'utiliser sans rien défaire.",
          ],
        },
        {
          title: "1. L'admission, quelle que soit la porte d'entrée",
          paragraphs: [
            "La coordination téléverse tout ce qui est arrivé avec le patient, sous la forme où c'est arrivé : une lettre de transfert et ses annexes, un adressage d'une page, un carnet de soins à domicile, une feuille administrative scannée, une ordonnance avec code QR, les dossiers antérieurs d'un patient qui revient.",
            'Aida fait ensuite la lecture :',
          ],
          items: [
            "analyse tout le dossier : anamnèse, diagnostics, plan de médication, laboratoire, actes et les identifiants administratifs dont la facturation a besoin ;",
            "élimine les doublons et fusionne les reprises des mêmes diagnostics et médicaments au lieu de les empiler ;",
            "classe chaque document par type et identifie la voie d'admission (transfert ou adressage direct), car c'est elle qui détermine le document de référence ;",
            "détermine l'épisode en cours d'après la destination et les dates de séjour, pour qu'un séjour antérieur terminé à domicile soit classé en antécédent au lieu d'être mélangé à l'admission du jour ;",
            "rattache le patient et, en cas de doute, interroge un humain plutôt que de deviner. Quand l'alternative est de classer un document dans le mauvais dossier, c'est le seul comportement acceptable.",
          ],
          closing: [
            "Le résultat est un dossier clinique structuré au format FHIR (le séjour comme Encounter, les médicaments comme MedicationStatement, les rapports comme DiagnosticReport), et le même contenu écrit dans le dossier patient de la clinique. Plus de découpage à la main, plus de Ctrl+V.",
            "La coordination ne saisit plus : elle vérifie une analyse.",
          ],
        },
        {
          title: "2. Le séjour est documenté au fil de l'eau",
          paragraphs: [
            "Notes journalières, notes infirmières, débuts et arrêts de traitements, laboratoire et actes s'accumulent sur le séjour. Quand l'équipe dicte, la reconnaissance vocale gère le vocabulaire clinique français, les noms de médicaments et l'anatomie ; le soignant valide la note mise en forme avant toute écriture.",
            "Les documents qui arrivent pendant le séjour, comme un résultat de laboratoire ou le rapport d'un spécialiste externe, suivent la même admission : classés, rattachés au patient, le médecin traitant averti, puis archivés.",
          ],
        },
        {
          title: '3. La lettre de sortie est rédigée sur le formulaire du site',
          paragraphs: [
            "Pas un résumé générique, mais le vrai modèle de chaque site : sur un site, le formulaire structuré en huit rubriques (motif et diagnostics, synthèse du séjour, autres soins, traitement de sortie avec médicaments introduits et arrêtés, réseau de soins, autonomie, annexes, données administratives), avec l'identité du patient en en-tête et en pied de chaque page, deux signataires et la mention légale ; sur un autre, la lettre classique. Un troisième site s'ajoute par un paramètre, pas par du nouveau code.",
            "Le résultat est volontairement un document modifiable : le médecin le révise avant de signer, et un PDF verrouillé l'en empêcherait.",
          ],
        },
        {
          title: '4. Le médecin corrige et signe dans Aida',
          paragraphs: [
            "Les lettres de référence contiennent ce qu'aucun document source ne contient : pourquoi une statine a été changée en cours de séjour, quel médicament est EN RÉSERVE, la synthèse de la liste de problèmes. C'est le savoir du médecin. Aida produit le brouillon, avec la traçabilité de chaque rubrique jusqu'à sa source, et le médecin le complète et le valide. Ce n'est qu'ensuite qu'il est écrit dans le dossier de la clinique.",
          ],
        },
        {
          title: '5. La facture sort du même dossier',
          paragraphs: [
            "Codage CIM-10-GM et CHOP, groupage DRG, forfait par cas d'après les dates d'entrée et de sortie, médicaments et actes facturables séparément, identifiants de facturation repris des documents administratifs saisis à l'admission. Le tout est contrôlé par les validateurs suisses de facturation électronique (Sumex1 drgValidator) avant qu'un humain ne le voie. Les finances vérifient codage et montants dans Aida et valident ; la transmission à l'ERP suit. Le détour par la facturation externe disparaît.",
          ],
        },
      ],
      table: {
        title: 'Résultats',
        beforeLabel: 'Avant',
        afterLabel: 'Après',
        rows: [
          { label: 'Admission : dossier → dossier patient', before: "plus d'1 h de lecture, découpage et ressaisie", after: "~5 min pour vérifier une analyse" },
          { label: 'Patient identifié à partir du dossier', before: "5 dossiers sur 8 lors d'une série réelle", after: "8 sur 8 : identité tirée de tous les documents, cas incertains transmis à un humain" },
          { label: 'Préparation de la lettre de sortie', before: '~90 min par séjour', after: '~20 min de relecture et de signature' },
          { label: 'Lettre disponible pour le soignant suivant', before: '3–5 jours après la sortie', after: 'le jour même' },
          { label: 'Temps administratif de la coordination', before: '~2 h / jour', after: '~40 min / jour' },
          { label: "Facture prête pour l'ERP", before: '10–15 jours (boucle de facturation externe)', after: '~2 jours, pré-validée' },
          { label: "Factures renvoyées par l'assureur", before: '~1 sur 8', after: '~1 sur 25' },
        ],
      },
      nextIntro: "L'ordre est voulu : on règle d'abord le plus gros problème avant de toucher au dossier patient.",
      next: [
        "La voix pour les médecins : la consultation est dictée, mise en forme en note journalière avec prescriptions et changements de traitement, validée par le médecin, puis écrite dans le dossier. On ne fait plus le travail pour ensuite le documenter.",
        'La voix pour les infirmières : la même chose pour les soins et les observations.',
        "Admission entièrement automatisée des résultats reçus pendant le séjour, avec notification du médecin.",
        "Transmission directe de la facture validée à l'ERP, sans téléversement manuel.",
      ],
      elsewhereIntro:
        "Partout où un séjour, et non une seule consultation, doit devenir un dossier codé, signé et vérifiable, et où les patients arrivent par plusieurs portes que personne ne contrôle :",
      elsewhere: [
        'unités de soins de suite, de réadaptation et de soins de transition',
        "EMS, où le dossier du résident est la plus lourde charge administrative",
        "organisations de soins à domicile, où l'on documente entre deux visites",
        "tout prestataire dont le dossier patient n'a pas d'API et dont la facturation est externalisée",
      ],
      meta: {
        title: 'Clinique de soins de suite : patient identifié 8 fois sur 8 | Trident Software',
        description:
          "Admission, lettre de sortie et facture SwissDRG codée depuis un seul dossier, sans ressaisie. Patient identifié 8 fois sur 8, facture prête en ~2 jours.",
      },
    },
    it: {
      client: 'Rete di cliniche di riabilitazione, Svizzera',
      industry: 'Sanità · Svizzera',
      hero: {
        title: "Ammissione, documentazione e fatturazione per una rete di cliniche post-acute",
        tagline:
          'Comunque arrivi il paziente, fino alla lettera di dimissione firmata e alla fattura codificata, senza che nessuno ridigiti un documento',
      },
      note: "Un progetto realizzato per una rete svizzera di cliniche post-acute, descritto senza il nome del cliente. La qualità è stata misurata da capo a fondo su materiale reale: 8 lettere di riferimento e 5 cartelle infermieristiche. I tempi sono gli obiettivi operativi su cui il sistema viene gestito, mentre la situazione manuale di partenza viene cronometrata formalmente in sede.",
      results: [
        { metric: 'Ammissione: fascicolo → cartella paziente', value: 'oltre 1 h → ~5 min' },
        { metric: 'Paziente identificato dal fascicolo', value: '8 su 8 (prima 5 su 8)' },
        { metric: "Fattura pronta per l'ERP", value: '~2 giorni (prima 10–15)' },
      ],
      sections: [
        {
          title: "L'azienda",
          paragraphs: [
            'Una rete di cliniche post-acute e di riabilitazione in Svizzera, che gestisce in più sedi unità di accoglienza temporanea con assistenza medica.',
            "Ogni unità accoglie pazienti in età pensionabile per un periodo da 24 ore a 15 giorni: persone che hanno bisogno di sorveglianza medica e infermieristica, ma non di un letto per acuti. L'unità esiste per tenere questi pazienti fuori dall'ospedale acuto e per dare a chi ne esce un posto dove approdare.",
            "Dal punto di vista clinico, la maggior parte dei soggiorni è la seconda metà di un episodio iniziato altrove. Dal punto di vista amministrativo è un caso di fatturazione a sé: l'istituto inviante fattura i propri giorni, la clinica i suoi, secondo SwissDRG (diagnosi ICD-10-GM, procedure CHOP, forfait par cas in base alla durata della degenza, più farmaci e prestazioni fatturabili separatamente).",
            "Ogni sede ha la propria cartella clinica elettronica e il proprio modulo per la lettera di dimissione, mentre le finanze girano su un ERP separato. Nessuno dei due espone un'API a terzi.",
          ],
        },
        {
          title: "Prima: non esiste un unico ingresso",
          paragraphs: ['Un paziente può arrivare per ognuna di queste vie, e la clinica non ne controlla nessuna:'],
          items: [
            "Trasferimento da un ospedale acuto: lettera di trasferimento, rapporto di dimissione, scheda farmacologica, esami di laboratorio, imaging e referti specialistici",
            "Trasferimento da un'altra clinica (chirurgica, ortopedica, psichiatrica): verbale operatorio, istruzioni post-operatorie, prescrizioni",
            "Invio diretto da parte del medico curante: una lettera di invio o una prescrizione, a volte una sola pagina, a volte un fax",
            "Da un servizio di cure a domicilio: libretto sanitario, piano di cura, contesto sociale",
            "Da una casa di cura: estratto della cartella del residente, terapia abituale",
            "Dal servizio di pronto intervento interno: il suo rapporto di consultazione",
            "Riammissione di un paziente noto: la documentazione della clinica dal soggiorno precedente",
            "Familiari o il paziente stesso: qualunque carta abbiano in mano",
          ],
          closing: [
            "Niente di tutto questo arriva come dato. Non esiste alcun collegamento HL7 o FHIR con gli istituti invianti; il passaggio avviene tramite documenti, via e-mail o su carta.",
            "E il fascicolo oppone resistenza. Si sovrappone a sé stesso: lettera di trasferimento ≈ avviso di dimissione ≈ cartella clinica, che ripetono tutte le stesse diagnosi e gli stessi farmaci, per cui serve un'unione e non un accodamento. Una parte è scansionata, e l'OCR rovina proprio i campi che contano per identità e fatturazione: DUPUIS diventa DUPUTS. E spesso contiene documenti di un altro episodio, per esempio un soggiorno di tre mesi fa concluso a domicilio, archiviato accanto al trasferimento di oggi.",
          ],
        },
        {
          title: "Così l'ammissione è una persona che legge una pila di carte e la ridigita",
          paragraphs: [
            "L'infermiera coordinatrice legge il fascicolo, decide a mente quale documento è quello attuale, lo divide in parti e le incolla nella cartella paziente sezione per sezione: l'anamnesi qui, la terapia di dimissione là, gli antecedenti altrove.",
            "Ci vuole oltre un'ora per ammissione, non si fa mai due volte allo stesso modo e dipende da chi è di turno. Su una serie di otto fascicoli reali, in tre non si riusciva nemmeno a stabilire l'identità del paziente, perché il documento identificativo non era tra quelli caricati o perché l'OCR aveva alterato il nome.",
          ],
        },
        {
          title: 'La lettera di dimissione è composta a mano da due metà',
          paragraphs: [
            "Alla dimissione la coordinazione scrive la lettera combinando i documenti in entrata con tutto ciò che il team ha annotato durante il soggiorno: note giornaliere, note infermieristiche, inizi e sospensioni di farmaci, valutazioni fisioterapiche, la griglia di autonomia. La cartella infermieristica di un soggiorno di due settimane arriva a ~22'000 caratteri di testo. Nella lettera finisce ciò che qualcuno ha avuto il tempo di trovarci.",
            "Confrontando la cartella di un soggiorno reale con la sua lettera, abbiamo contato 11 annotazioni su igiene e vita quotidiana che descrivono un'evoluzione (aiuto per il bagno e la vestizione nella prima settimana, doccia in autonomia dal giorno 16) ed entrambe le valutazioni fisioterapiche (TUG 45 s → 15 s, SPPB 6/12, Tinetti). Una lettera scritta a mano ne riporta una o due. L'evoluzione del rischio di caduta resta nella cartella e non arriva mai a chi prende in carico il paziente dopo.",
          ],
        },
        {
          title: 'La fattura esce di casa',
          paragraphs: [
            "Quando la lettera è pronta, viene inviata a un team di fatturazione esterno, che la codifica secondo SwissDRG e rimanda una fattura; poi qualcuno la carica a mano nel sistema finanziario. Chi codifica non vede mai il contesto della cura, il giro costa giorni e niente collega la fattura al soggiorno da cui nasce.",
          ],
        },
        {
          title: 'Che cosa abbiamo realizzato',
          paragraphs: [
            "Aida: un assistente autonomo per ammissione, documentazione e fatturazione dell'unità, non un modulo all'interno della cartella clinica della clinica.",
            "Aida conserva i propri dati e scrive il risultato finale nei sistemi esistenti della clinica tramite automazione dell'interfaccia, sulla postazione della coordinazione. Non è servita alcuna integrazione con il fornitore, nessun sistema è stato sostituito e la clinica può smettere di usarlo senza dover smontare nulla.",
          ],
        },
        {
          title: "1. L'ammissione, da qualunque porta arrivi il paziente",
          paragraphs: [
            "La coordinazione carica tutto ciò che è arrivato con il paziente, nella forma in cui è arrivato: una lettera di trasferimento con gli allegati, un invio di una pagina dal medico curante, un libretto delle cure a domicilio, un foglio amministrativo scansionato, una prescrizione con codice QR, la documentazione precedente di un paziente che ritorna.",
            'Poi Aida legge:',
          ],
          items: [
            "analizza tutto il fascicolo: anamnesi, diagnosi, piano terapeutico, laboratorio, procedure e gli identificativi amministrativi che servono alla fatturazione;",
            "elimina le sovrapposizioni e unisce le ripetizioni delle stesse diagnosi e degli stessi farmaci invece di accumularle;",
            "classifica ogni documento per tipo e riconosce la via di ammissione (trasferimento o invio diretto), perché da questa dipende quale documento è la fonte principale;",
            "stabilisce quale episodio è quello attuale in base a destinazione e date di degenza, così un soggiorno precedente concluso a domicilio viene archiviato come antecedente e non mescolato all'ammissione di oggi;",
            "abbina il paziente e, se l'abbinamento è incerto, chiede a una persona invece di indovinare. Quando l'alternativa è allegare un documento alla cartella sbagliata, è l'unico comportamento accettabile.",
          ],
          closing: [
            "Il risultato è una cartella clinica strutturata in formato FHIR (il soggiorno come Encounter, i farmaci come MedicationStatement, i referti come DiagnosticReport), e lo stesso contenuto scritto nella cartella paziente della clinica. Niente più suddivisioni a mano, niente più Ctrl+V.",
            'La coordinazione non inserisce più dati: controlla un\'analisi.',
          ],
        },
        {
          title: '2. Il soggiorno viene documentato mentre accade',
          paragraphs: [
            "Note giornaliere, note infermieristiche, inizi e sospensioni di farmaci, laboratorio e procedure si accumulano sul soggiorno. Dove il team detta, il riconoscimento vocale gestisce il lessico clinico francese, i nomi dei farmaci e l'anatomia; il curante conferma la nota formattata prima che venga scritto qualsiasi cosa.",
            "I documenti che arrivano durante il soggiorno, come un esito di laboratorio o il referto di uno specialista esterno, seguono la stessa ammissione: classificati, abbinati al paziente, il medico curante avvisato, poi archiviati.",
          ],
        },
        {
          title: '3. La lettera di dimissione è redatta sul modulo della sede',
          paragraphs: [
            "Non un riassunto generico, ma il modello reale di ogni sede: in una, il modulo strutturato in otto sezioni (motivo e diagnosi, sintesi del soggiorno, altre cure, terapia di dimissione con farmaci introdotti e sospesi, rete di cura, autonomia, allegati, dati amministrativi), con l'identità del paziente nell'intestazione e nel piè di pagina di ogni pagina, due firmatari e la nota legale; in un'altra, la classica lettera. Una terza sede si aggiunge cambiando un'impostazione, non rilasciando nuovo codice.",
            'Il risultato è volutamente un documento modificabile: il medico lo rivede prima di firmare, e un PDF bloccato lo impedirebbe.',
          ],
        },
        {
          title: '4. Il medico corregge e firma in Aida',
          paragraphs: [
            "Le lettere di riferimento contengono ciò che nessun documento sorgente riporta: perché una statina è stata cambiata a metà soggiorno, quale farmaco è EN RÉSERVE, la sintesi della lista dei problemi. È il sapere del medico. Aida produce la bozza, con la tracciabilità di ogni sezione fino alla sua fonte, e il medico la completa e la conferma. Solo allora viene scritta nella cartella della clinica.",
          ],
        },
        {
          title: '5. La fattura nasce dalla stessa cartella',
          paragraphs: [
            "Codifica ICD-10-GM e CHOP, raggruppamento DRG, forfait par cas dalle date di ammissione e dimissione, farmaci e prestazioni fatturabili separatamente, identificativi di fatturazione presi dai documenti amministrativi acquisiti all'ammissione. Tutto viene verificato con i validatori svizzeri della fatturazione elettronica (Sumex1 drgValidator) prima che una persona lo veda. Le finanze controllano codifica e importi in Aida e confermano; segue l'invio all'ERP. Il passaggio dalla fatturazione esterna sparisce.",
          ],
        },
      ],
      table: {
        title: 'Risultati',
        beforeLabel: 'Prima',
        afterLabel: 'Dopo',
        rows: [
          { label: 'Ammissione: fascicolo → cartella paziente', before: 'oltre 1 h di lettura, suddivisione e ridigitazione', after: "~5 min per controllare un'analisi" },
          { label: 'Paziente identificato dal fascicolo', before: '5 fascicoli su 8 in una serie reale', after: '8 su 8: identità ricavata da tutti i documenti, abbinamenti incerti passati a una persona' },
          { label: 'Preparazione della lettera di dimissione', before: '~90 min per soggiorno', after: '~20 min di revisione e firma' },
          { label: 'Lettera disponibile per chi prende in carico', before: '3–5 giorni dopo la dimissione', after: 'lo stesso giorno' },
          { label: 'Tempo amministrativo della coordinazione', before: '~2 h / giorno', after: '~40 min / giorno' },
          { label: "Fattura pronta per l'ERP", before: '10–15 giorni (ciclo di fatturazione esterno)', after: '~2 giorni, già validata' },
          { label: "Fatture respinte dall'assicuratore", before: '~1 su 8', after: '~1 su 25' },
        ],
      },
      nextIntro: "L'ordine è voluto: prima si elimina il problema più grande, e solo dopo si tocca la cartella clinica.",
      next: [
        "La voce per i medici: la visita viene dettata, formattata in una nota giornaliera con prescrizioni e cambi di terapia, confermata dal medico e poi scritta in cartella. Non si fa più il lavoro per poi doverlo documentare.",
        'La voce per gli infermieri: lo stesso per interventi e osservazioni infermieristiche.',
        "Acquisizione completamente automatica degli esiti in arrivo durante il soggiorno, con avviso al medico.",
        "Invio diretto della fattura validata all'ERP, senza caricamento manuale.",
      ],
      elsewhereIntro:
        "Ovunque un soggiorno, e non una singola visita, debba diventare una cartella codificata, firmata e verificabile, e i pazienti arrivino da più porte che nessuno controlla:",
      elsewhere: [
        'unità post-acute, di riabilitazione e di cure transitorie',
        "case di cura, dove la cartella del residente è il carico amministrativo più pesante",
        "servizi di cure a domicilio, dove si documenta tra una visita e l'altra",
        "qualsiasi struttura la cui cartella clinica non ha un'API e la cui fatturazione è esternalizzata",
      ],
      meta: {
        title: 'Clinica post-acuta: paziente identificato 8 volte su 8 | Trident Software',
        description:
          'Ammissione, lettera di dimissione e fattura SwissDRG da una sola cartella, senza ridigitare. Paziente identificato 8 volte su 8, fattura pronta in ~2 giorni.',
      },
    },
  },
}

export default record
