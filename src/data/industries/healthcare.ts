import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'healthcare',
  icon: 'heart-pulse',
  techStack: [],
  relatedCases: ['post-acute-clinic-network', 'clinic-voice-documentation'],
  relatedServices: ['ai-services', 'software-engineering', 'embedded-and-iot'],
  content: {
    en: {
      title: 'Clinics, dental and veterinary practices',
      tagline:
        'Two different places to automate, the front desk and documentation, and the money is in the second one.',
      description: 'The expensive minutes in a Swiss practice go into documentation, not into the phone.',
      challengesLead: '',
      challenges: [
        {
          title: 'Front desk',
          description:
            'Booking, rescheduling and reminders: the no-show rate alone usually pays for the deployment. Enquiries in four languages, evenings and weekends, without an answering machine. Triage yes; diagnosis never.',
        },
        {
          title: 'Documentation: voice assistants for doctors and nursing staff',
          description:
            'A voice assistant sits between the clinician and the record. The tasks it takes on, and the systems it connects to, are listed below.',
        },
        {
          title: 'The limits, stated before the demo',
          description:
            'Patient data is sensitive personal data under the revFADP and is covered by professional secrecy under Art. 321 of the Criminal Code. Deployments run on Swiss-hosted infrastructure over HIN-secured channels, with no training on your data and a documented processing agreement. Spoken Swiss German dialect remains the weakest link in every speech stack on the market: standard German, French, Italian and English dictation is production-grade today, dialect is not, and we scope around that rather than promise through it. Every clinical output is a draft for a clinician to correct and sign. The assistant writes, the professional decides.',
        },
      ],
      solutionsLead: '',
      solutions: [
        {
          title: 'Dictation into the record during and after consultation',
          description:
            'History, findings and procedures written back into structured fields, instead of typed up at 19:00.',
        },
        {
          title: 'Ward rounds and Spitex home visits, hands-free',
          description:
            'Vitals, wound status and medication changes captured while gloved, then filed to the right patient.',
        },
        {
          title: 'Report and referral drafting',
          description:
            'Discharge letter, referral and insurance justification drafted from the consultation and put in front of the clinician to correct and sign. Drafting only; the signature stays human.',
        },
        {
          title: 'Spoken queries against the record and internal guidelines',
          description:
            'Last lab value, allergy, current dosage, house protocol, without clicking through screens mid-consultation.',
        },
        {
          title: 'Coding support for invoicing',
          description:
            'Proposes tariff positions from what was documented and flags the gaps a rejected invoice would come back on.',
        },
        {
          title: 'Practice management (ambulatory)',
          description: 'vitomed (Vitodata), amétiq siMed, AESKULAP, WinMed, Axenita, Curamed, Tomedo, E-PAT',
        },
        {
          title: 'Hospital information systems',
          description: 'KISIM (Cistec), Epic, Meierhofer M-KIS / M-PDMS, Nexus',
        },
        {
          title: 'Standards and exchange',
          description:
            'HL7 v2 and FHIR, DICOM for imaging, the Forum Datenaustausch formats for tariff invoicing, EPR/EPD connectors',
        },
        {
          title: 'Secure communication',
          description: 'HIN identity and encrypted mail, the channel Swiss healthcare actually runs on',
        },
        {
          title: 'Scheduling and reminders',
          description: 'The practice calendar, SMS and WhatsApp reminders, patient portals',
        },
      ],
      meta: {
        title: 'Clinics, dental and veterinary practices | Trident Software',
        description:
          'Two places to automate in a practice, the front desk and documentation, and the money is in the second one. Swiss hosting, HIN, revFADP.',
      },
    },
    de: {
      title: 'Kliniken, Zahnarzt- und Tierarztpraxen',
      tagline: 'Zwei Bereiche zum Automatisieren, Empfang und Dokumentation, und das Geld liegt im zweiten.',
      description: 'Die teuren Minuten in einer Schweizer Praxis gehen in die Dokumentation, nicht ans Telefon.',
      challengesLead: '',
      challenges: [
        {
          title: 'Empfang',
          description:
            'Terminbuchung, Verschiebungen und Erinnerungen: Meist bezahlt allein die Quote der verpassten Termine den Einsatz. Anfragen in vier Sprachen, abends und am Wochenende, ohne Anrufbeantworter. Triage ja, Diagnose nie.',
        },
        {
          title: 'Dokumentation: Sprachassistenten für Ärzteschaft und Pflege',
          description:
            'Ein Sprachassistent sitzt zwischen der Fachperson und der Patientenakte. Welche Aufgaben er übernimmt und an welche Systeme er angebunden wird, steht weiter unten.',
        },
        {
          title: 'Die Grenzen, genannt vor der Demo',
          description:
            'Patientendaten sind besonders schützenswerte Personendaten nach nDSG und unterstehen dem Berufsgeheimnis nach Art. 321 StGB. Wir betreiben die Lösungen auf Infrastruktur in der Schweiz über HIN-gesicherte Kanäle, ohne Training mit Ihren Daten und mit einem dokumentierten Auftragsverarbeitungsvertrag. Gesprochener Schweizerdeutsch-Dialekt bleibt das schwächste Glied jeder Spracherkennung auf dem Markt: Diktate auf Hochdeutsch, Französisch, Italienisch und Englisch sind heute produktionsreif, Dialekt ist es nicht. Wir planen den Umfang entsprechend, statt etwas anderes zu versprechen. Jede klinische Ausgabe ist ein Entwurf, den eine Fachperson korrigiert und unterschreibt. Der Assistent schreibt, die Fachperson entscheidet.',
        },
      ],
      solutionsLead: '',
      solutions: [
        {
          title: 'Diktat in die Akte während und nach der Konsultation',
          description:
            'Anamnese, Befunde und Eingriffe landen in strukturierten Feldern, statt um 19:00 abgetippt zu werden.',
        },
        {
          title: 'Visite und Spitex-Hausbesuche freihändig',
          description:
            'Vitalwerte, Wundstatus und Änderungen der Medikation mit Handschuhen erfassen und dem richtigen Patienten zuordnen.',
        },
        {
          title: 'Berichte und Überweisungen entwerfen',
          description:
            'Austrittsbericht, Überweisung und Begründung für die Versicherung entstehen aus der Konsultation und gehen der Fachperson zur Korrektur und Unterschrift. Nur Entwürfe: Die Unterschrift bleibt menschlich.',
        },
        {
          title: 'Gesprochene Abfragen in Akte und internen Richtlinien',
          description:
            'Letzter Laborwert, Allergie, aktuelle Dosierung, Hausprotokoll, ohne sich mitten in der Konsultation durch Masken zu klicken.',
        },
        {
          title: 'Unterstützung bei der Kodierung für die Abrechnung',
          description:
            'Schlägt Tarifpositionen aus der Dokumentation vor und markiert die Lücken, an denen eine Rechnung zurückgewiesen würde.',
        },
        {
          title: 'Praxissoftware (ambulant)',
          description: 'vitomed (Vitodata), amétiq siMed, AESKULAP, WinMed, Axenita, Curamed, Tomedo, E-PAT',
        },
        {
          title: 'Klinikinformationssysteme',
          description: 'KISIM (Cistec), Epic, Meierhofer M-KIS / M-PDMS, Nexus',
        },
        {
          title: 'Standards und Datenaustausch',
          description:
            'HL7 v2 und FHIR, DICOM für die Bildgebung, die Formate des Forum Datenaustausch für die Tarifabrechnung, EPD-Anbindungen',
        },
        {
          title: 'Sichere Kommunikation',
          description: 'HIN-Identität und verschlüsselte E-Mail, der Kanal, über den das Schweizer Gesundheitswesen tatsächlich läuft',
        },
        {
          title: 'Termine und Erinnerungen',
          description: 'Praxiskalender, Erinnerungen per SMS und WhatsApp, Patientenportale',
        },
      ],
      meta: {
        title: 'Kliniken, Zahnarzt- und Tierarztpraxen | Trident Software',
        description:
          'Zwei Bereiche zum Automatisieren in der Praxis, Empfang und Dokumentation, und das Geld liegt im zweiten. Hosting in der Schweiz, HIN, nDSG.',
      },
    },
    fr: {
      title: 'Cliniques, cabinets dentaires et vétérinaires',
      tagline: "Deux endroits à automatiser, l'accueil et la documentation, et c'est le second qui rapporte.",
      description: 'Dans un cabinet suisse, les minutes coûteuses partent dans la documentation, pas au téléphone.',
      challengesLead: '',
      challenges: [
        {
          title: 'Accueil',
          description:
            'Prise de rendez-vous, reports et rappels : le taux de rendez-vous manqués suffit souvent à financer le projet. Des demandes en quatre langues, le soir et le week-end, sans répondeur. Le tri oui, le diagnostic jamais.',
        },
        {
          title: 'Documentation : assistants vocaux pour les médecins et le personnel soignant',
          description:
            "Un assistant vocal se place entre le soignant et le dossier. Les tâches qu'il prend en charge et les systèmes auxquels il se connecte sont listés plus bas.",
        },
        {
          title: 'Les limites, annoncées avant la démo',
          description:
            "Les données des patients sont des données sensibles au sens de la nLPD et relèvent du secret professionnel (art. 321 CP). Nos déploiements tournent sur une infrastructure hébergée en Suisse, via des canaux sécurisés HIN, sans entraînement sur vos données et avec un contrat de sous-traitance documenté. Le suisse alémanique parlé reste le maillon faible de toutes les solutions vocales du marché : la dictée en allemand standard, en français, en italien et en anglais est aujourd'hui prête pour la production, le dialecte ne l'est pas, et nous en tenons compte dans le périmètre au lieu de promettre le contraire. Chaque sortie clinique est un brouillon que le soignant corrige et signe. L'assistant rédige, le professionnel décide.",
        },
      ],
      solutionsLead: '',
      solutions: [
        {
          title: 'Dictée dans le dossier pendant et après la consultation',
          description:
            "Anamnèse, constats et actes enregistrés dans des champs structurés, au lieu d'être tapés à 19h00.",
        },
        {
          title: 'Visites en service et soins à domicile (Spitex) mains libres',
          description:
            'Signes vitaux, état des plaies et changements de médication saisis avec des gants, puis classés dans le bon dossier patient.',
        },
        {
          title: 'Rédaction de rapports et de lettres de transfert',
          description:
            "Lettre de sortie, lettre d'adressage et justificatif pour l'assurance rédigés à partir de la consultation et soumis au soignant pour correction et signature. Uniquement des brouillons : la signature reste humaine.",
        },
        {
          title: 'Questions orales sur le dossier et les directives internes',
          description:
            "Dernière valeur de laboratoire, allergie, posologie actuelle, protocole interne, sans cliquer d'écran en écran en pleine consultation.",
        },
        {
          title: 'Aide au codage pour la facturation',
          description:
            'Propose des positions tarifaires à partir de ce qui a été documenté et signale les lacunes qui feraient rejeter une facture.',
        },
        {
          title: 'Logiciels de cabinet (ambulatoire)',
          description: 'vitomed (Vitodata), amétiq siMed, AESKULAP, WinMed, Axenita, Curamed, Tomedo, E-PAT',
        },
        {
          title: "Systèmes d'information hospitaliers",
          description: 'KISIM (Cistec), Epic, Meierhofer M-KIS / M-PDMS, Nexus',
        },
        {
          title: 'Standards et échanges',
          description:
            "HL7 v2 et FHIR, DICOM pour l'imagerie, les formats du Forum Datenaustausch pour la facturation tarifaire, connecteurs DEP",
        },
        {
          title: 'Communication sécurisée',
          description: 'Identité HIN et e-mail chiffré, le canal sur lequel la santé suisse fonctionne réellement',
        },
        {
          title: 'Rendez-vous et rappels',
          description: 'Agenda du cabinet, rappels par SMS et WhatsApp, portails patients',
        },
      ],
      meta: {
        title: 'Cliniques, cabinets dentaires et vétérinaires | Trident Software',
        description:
          "Deux endroits à automatiser au cabinet, l'accueil et la documentation, et c'est le second qui rapporte. Hébergement en Suisse, HIN, nLPD.",
      },
    },
    it: {
      title: 'Cliniche, studi dentistici e veterinari',
      tagline: 'Due punti da automatizzare, la reception e la documentazione, e il guadagno sta nel secondo.',
      description: 'In uno studio svizzero i minuti costosi se ne vanno nella documentazione, non al telefono.',
      challengesLead: '',
      challenges: [
        {
          title: 'Reception',
          description:
            'Prenotazioni, spostamenti e promemoria: di solito il solo tasso di appuntamenti mancati ripaga il progetto. Richieste in quattro lingue, la sera e nel fine settimana, senza segreteria telefonica. Smistamento sì, diagnosi mai.',
        },
        {
          title: 'Documentazione: assistenti vocali per medici e personale infermieristico',
          description:
            'Un assistente vocale si colloca tra il professionista e la cartella clinica. I compiti che svolge e i sistemi a cui si collega sono elencati più sotto.',
        },
        {
          title: 'I limiti, dichiarati prima della demo',
          description:
            "I dati dei pazienti sono dati personali degni di particolare protezione secondo la nLPD e sono coperti dal segreto professionale (art. 321 CP). Le installazioni girano su infrastruttura ospitata in Svizzera, tramite canali protetti HIN, senza addestramento sui tuoi dati e con un contratto di trattamento documentato. Lo svizzero tedesco parlato resta l'anello debole di ogni sistema vocale sul mercato: la dettatura in tedesco standard, francese, italiano e inglese è oggi pronta per la produzione, il dialetto no, e definiamo il progetto di conseguenza invece di promettere il contrario. Ogni output clinico è una bozza che il professionista corregge e firma. L'assistente scrive, il professionista decide.",
        },
      ],
      solutionsLead: '',
      solutions: [
        {
          title: 'Dettatura nella cartella durante e dopo la visita',
          description:
            'Anamnesi, reperti e interventi riportati in campi strutturati, invece di essere digitati alle 19:00.',
        },
        {
          title: 'Giri visita e visite a domicilio Spitex a mani libere',
          description:
            'Parametri vitali, stato delle ferite e cambi di terapia registrati con i guanti e archiviati sul paziente giusto.',
        },
        {
          title: 'Bozze di rapporti e lettere di invio',
          description:
            "Lettera di dimissione, lettera di invio e giustificazione per l'assicurazione redatte a partire dalla visita e sottoposte al professionista per correzione e firma. Solo bozze: la firma resta umana.",
        },
        {
          title: 'Domande a voce su cartella e direttive interne',
          description:
            'Ultimo valore di laboratorio, allergia, dosaggio attuale, protocollo interno, senza cliccare tra le schermate durante la visita.',
        },
        {
          title: 'Supporto alla codifica per la fatturazione',
          description:
            'Propone posizioni tariffali a partire da quanto documentato e segnala le lacune per cui una fattura verrebbe respinta.',
        },
        {
          title: 'Gestionali per studi (ambulatoriale)',
          description: 'vitomed (Vitodata), amétiq siMed, AESKULAP, WinMed, Axenita, Curamed, Tomedo, E-PAT',
        },
        {
          title: 'Sistemi informativi ospedalieri',
          description: 'KISIM (Cistec), Epic, Meierhofer M-KIS / M-PDMS, Nexus',
        },
        {
          title: 'Standard e scambio dati',
          description:
            "HL7 v2 e FHIR, DICOM per l'imaging, i formati del Forum Datenaustausch per la fatturazione tariffale, connettori CIP",
        },
        {
          title: 'Comunicazione sicura',
          description: 'Identità HIN ed e-mail cifrata, il canale su cui funziona davvero la sanità svizzera',
        },
        {
          title: 'Appuntamenti e promemoria',
          description: 'Agenda dello studio, promemoria via SMS e WhatsApp, portali per i pazienti',
        },
      ],
      meta: {
        title: 'Cliniche, studi dentistici e veterinari | Trident Software',
        description:
          'Due punti da automatizzare nello studio, reception e documentazione, e il guadagno sta nel secondo. Hosting in Svizzera, HIN, nLPD.',
      },
    },
  },
}

export default record
