import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'proptech',
  icon: 'building-2',
  techStack: [],
  relatedCases: ['letting-agency-enquiry-to-viewing'],
  relatedServices: ['software-engineering', 'ai-services'],
  content: {
    en: {
      title: 'Real estate and property management',
      tagline:
        'Viewing requests arrive in the evening; a tenant reporting a broken boiler at 22:00 needs triage, not a voicemail box.',
      description: 'Qualification and scheduling are almost entirely rule-based.',
      challengesLead: '',
      challenges: [
        {
          title: 'Why it pays here specifically',
          description:
            'Published survey data puts the median agent response to a new web enquiry at over 900 minutes, more than fifteen hours, while 78 % of buyers end up working with the first agent who responds. In this market, a reply within a minute changes your place in the queue.',
        },
        {
          title: 'It also collects less personal data',
          description:
            "Swiss rules on tenant application forms allow only data with a direct connection to the tenancy, permit payslips and a debt-collection extract only once an applicant is seriously considered, and require the unsuccessful applicants' files to be destroyed after signature. An agent built to those rules asks for the minimum at first contact and requests documents only at shortlist stage. A shared inbox cannot do that reliably.",
        },
        {
          title: 'Precondition',
          description:
            "The listing data has to be machine-readable and current. If availability lives in one colleague's head and the portal still shows a flat that was let last week, the agent will confirm viewings for a flat that no longer exists, faster and more confidently than a person would.",
        },
      ],
      solutions: [],
      meta: {
        title: 'Real estate and property management | Trident Software',
        description:
          'Viewing requests arrive in the evening; a tenant reporting a broken boiler at 22:00 needs triage, not voicemail. Qualification and scheduling are rule-based.',
      },
    },
    de: {
      title: 'Immobilien und Liegenschaftsverwaltung',
      tagline:
        'Besichtigungsanfragen kommen am Abend. Wer um 22:00 einen defekten Boiler meldet, braucht eine Triage und keinen Anrufbeantworter.',
      description: 'Qualifizierung und Terminvergabe folgen fast vollständig festen Regeln.',
      challengesLead: '',
      challenges: [
        {
          title: 'Warum es sich gerade hier lohnt',
          description:
            'Veröffentlichte Umfragedaten beziffern die mittlere Antwortzeit eines Maklers auf eine neue Web-Anfrage auf über 900 Minuten, also mehr als fünfzehn Stunden. Gleichzeitig arbeiten 78 % der Käufer am Ende mit dem Makler, der zuerst antwortet. In diesem Markt verschafft Ihnen eine Antwort innert einer Minute einen anderen Platz in der Warteschlange.',
        },
        {
          title: 'Und er erhebt weniger Daten',
          description:
            'Die Schweizer Regeln für Mietanmeldungen erlauben nur Angaben mit direktem Bezug zum Mietverhältnis. Lohnabrechnungen und einen Betreibungsauszug darf man erst verlangen, wenn eine Bewerbung ernsthaft in Frage kommt, und die Unterlagen der abgelehnten Bewerber sind nach der Vertragsunterzeichnung zu vernichten. Ein Agent, der nach diesen Regeln gebaut ist, fragt beim Erstkontakt nur das Nötigste und fordert Dokumente erst in der engeren Auswahl an. Ein gemeinsames Postfach schafft das nicht zuverlässig.',
        },
        {
          title: 'Voraussetzung',
          description:
            'Die Objektdaten müssen maschinenlesbar und aktuell sein. Wenn die Verfügbarkeit nur im Kopf einer Kollegin steckt und das Portal noch eine Wohnung zeigt, die letzte Woche vermietet wurde, bestätigt der Agent Besichtigungen für eine Wohnung, die es nicht mehr gibt, und zwar schneller und überzeugter, als es ein Mensch täte.',
        },
      ],
      solutions: [],
      meta: {
        title: 'Immobilien und Liegenschaftsverwaltung | Trident Software',
        description:
          'Besichtigungsanfragen am Abend, ein defekter Boiler um 22:00 braucht Triage statt Anrufbeantworter. Qualifizierung und Terminvergabe folgen festen Regeln.',
      },
    },
    fr: {
      title: 'Immobilier et gérance',
      tagline:
        "Les demandes de visite arrivent le soir. Un locataire qui signale une chaudière en panne à 22h00 a besoin d'un tri, pas d'un répondeur.",
      description: 'La qualification et la prise de rendez-vous suivent presque entièrement des règles fixes.',
      challengesLead: '',
      challenges: [
        {
          title: 'Pourquoi cela rapporte ici en particulier',
          description:
            "Selon des données d'enquête publiées, le délai médian de réponse d'un agent à une nouvelle demande en ligne dépasse 900 minutes, soit plus de quinze heures, alors que 78 % des acheteurs finissent par travailler avec le premier agent qui répond. Sur ce marché, répondre en une minute change votre place dans la file.",
        },
        {
          title: 'Et il collecte moins de données',
          description:
            "En Suisse, un formulaire de candidature pour un logement ne peut demander que des données en lien direct avec le bail. Les fiches de salaire et l'extrait du registre des poursuites ne peuvent être exigés qu'une fois le candidat sérieusement retenu, et les dossiers des candidats écartés doivent être détruits après la signature. Un agent conçu selon ces règles demande le minimum au premier contact et ne réclame les documents qu'au stade de la présélection. Une boîte mail partagée n'y parvient pas de façon fiable.",
        },
        {
          title: 'Condition préalable',
          description:
            "Les données des annonces doivent être lisibles par une machine et à jour. Si la disponibilité n'existe que dans la tête d'un collègue et que le portail affiche encore un appartement loué la semaine dernière, l'agent confirmera des visites pour un logement qui n'existe plus, plus vite et avec plus d'assurance qu'une personne.",
        },
      ],
      solutions: [],
      meta: {
        title: 'Immobilier et gérance | Trident Software',
        description:
          'Demandes de visite le soir, chaudière en panne à 22h00 : il faut un tri, pas un répondeur. Qualification et prise de rendez-vous suivent des règles fixes.',
      },
    },
    it: {
      title: 'Immobiliare e gestione stabili',
      tagline:
        'Le richieste di visita arrivano la sera. Un inquilino che segnala una caldaia guasta alle 22:00 ha bisogno di uno smistamento, non di una segreteria.',
      description: 'Qualifica e fissazione degli appuntamenti seguono quasi del tutto regole fisse.',
      challengesLead: '',
      challenges: [
        {
          title: 'Perché qui conviene in particolare',
          description:
            "Secondo dati di sondaggi pubblicati, il tempo mediano di risposta di un agente a una nuova richiesta online supera i 900 minuti, cioè più di quindici ore, mentre il 78 % degli acquirenti finisce per lavorare con il primo agente che risponde. In questo mercato, rispondere entro un minuto cambia il tuo posto nella fila.",
        },
        {
          title: 'E raccoglie meno dati',
          description:
            "In Svizzera un modulo di candidatura per un alloggio può chiedere solo dati direttamente legati alla locazione. Buste paga ed estratto del registro delle esecuzioni si possono chiedere solo quando un candidato è seriamente preso in considerazione, e i dossier dei candidati scartati vanno distrutti dopo la firma. Un agente costruito su queste regole chiede il minimo al primo contatto e richiede i documenti solo nella rosa finale. Una casella e-mail condivisa non ci riesce in modo affidabile.",
        },
        {
          title: 'Presupposto',
          description:
            "I dati degli annunci devono essere leggibili da una macchina e aggiornati. Se la disponibilità è solo nella testa di un collega e il portale mostra ancora un appartamento affittato la settimana scorsa, l'agente confermerà visite per un appartamento che non esiste più, più in fretta e con più sicurezza di una persona.",
        },
      ],
      solutions: [],
      meta: {
        title: 'Immobiliare e gestione stabili | Trident Software',
        description:
          'Richieste di visita la sera, una caldaia guasta alle 22:00 va smistata, non lasciata in segreteria. Qualifica e appuntamenti seguono regole fisse.',
      },
    },
  },
}

export default record
