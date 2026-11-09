import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'education',
  icon: 'graduation-cap',
  techStack: ['React', 'Node.js', 'PostgreSQL', 'Python', 'OpenAI', 'AWS', 'FFmpeg'],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ai-services', 'ui-ux-design'],
  content: {
    en: {
      title: 'Education & EdTech',
      tagline: 'Learning platforms for the digital classroom',
      description:
        'LMS platforms, adaptive learning engines, skill assessment tools, and student management systems for schools, universities, corporate training departments, and online course providers.',
      challenges: [
        {
          title: 'Engagement and completion',
          description: 'Keeping learners motivated through gamification, progress tracking, and timely nudges.',
        },
        {
          title: 'Diverse content formats',
          description: 'Delivering video, quizzes, interactive simulations, and live sessions from one platform.',
        },
        {
          title: 'Privacy and compliance',
          description: 'FERPA, GDPR, and Swiss revFADP compliance for student data including minors.',
        },
      ],
      solutions: [
        {
          title: 'LMS platform',
          description: 'Course creation, content delivery, progress tracking, and certificate issuance.',
        },
        {
          title: 'Adaptive learning engine',
          description: 'AI-driven content sequencing based on learner performance and knowledge gaps.',
        },
        {
          title: 'Assessment & proctoring',
          description: 'Quiz builder, automated grading, and remote proctoring integrations.',
        },
        {
          title: 'Corporate training portal',
          description: 'Employee onboarding, compliance training, and skills tracking dashboards.',
        },
      ],
      meta: {
        title: 'EdTech & Education Software Development | Trident Software',
        description:
          'Education software — LMS platforms, adaptive learning, assessment tools, corporate training portals. Swiss engineering.',
      },
    },
    de: {
      title: 'Bildung & EdTech',
      tagline: 'Lernplattformen für das digitale Klassenzimmer',
      description:
        'LMS-Plattformen, adaptive Lernsysteme, Werkzeuge für Kompetenzprüfungen und Schülerverwaltung für Schulen, Hochschulen, Weiterbildungsabteilungen von Unternehmen und Anbieter von Online-Kursen.',
      challenges: [
        {
          title: 'Motivation bis zum Abschluss',
          description:
            'Lernende mit Gamification, sichtbarem Fortschritt und Erinnerungen zur richtigen Zeit motiviert halten.',
        },
        {
          title: 'Vielfältige Lernformate',
          description:
            'Videos, Quiz, interaktive Simulationen und Live-Unterricht auf einer einzigen Plattform anbieten.',
        },
        {
          title: 'Schutz der Lernendendaten',
          description: 'Einhaltung von FERPA, DSGVO und nDSG für Daten von Lernenden, auch von Minderjährigen.',
        },
      ],
      solutions: [
        {
          title: 'LMS-Plattform',
          description:
            'Kurserstellung, Bereitstellung der Inhalte, Fortschrittsverfolgung und Ausstellung von Zertifikaten.',
        },
        {
          title: 'Adaptive Lernsysteme',
          description: 'KI-gesteuerte Abfolge der Inhalte, abgestimmt auf Leistung und Wissenslücken der Lernenden.',
        },
        {
          title: 'Prüfungen & Proctoring',
          description: 'Quiz-Baukasten, automatische Bewertung und Anbindung an Lösungen für Online-Prüfungsaufsicht.',
        },
        {
          title: 'Portal für die betriebliche Weiterbildung',
          description:
            'Onboarding neuer Mitarbeitender, Compliance-Schulungen und Dashboards zur Kompetenzentwicklung.',
        },
      ],
      meta: {
        title: 'Softwareentwicklung für Bildung & EdTech | Trident Software',
        description:
          'Bildungssoftware: LMS-Plattformen, adaptives Lernen, Prüfungstools, Portale für betriebliche Weiterbildung. Entwickelt in der Schweiz.',
      },
    },
    fr: {
      title: 'Éducation & EdTech',
      tagline: "Des plateformes d'apprentissage pour la classe numérique",
      description:
        "Plateformes LMS, moteurs d'apprentissage adaptatif, outils d'évaluation des compétences et systèmes de gestion des élèves pour les écoles, les universités, les services de formation en entreprise et les fournisseurs de cours en ligne.",
      challenges: [
        {
          title: "Aller jusqu'au bout du cours",
          description:
            'Garder les apprenants motivés grâce à la gamification, au suivi des progrès et à des relances bien placées.',
        },
        {
          title: 'Des formats variés',
          description:
            'Proposer vidéos, quiz, simulations interactives et sessions en direct sur une seule plateforme.',
        },
        {
          title: 'Protéger les données des élèves',
          description: 'Conformité FERPA, RGPD et nLPD pour les données des élèves, y compris des mineurs.',
        },
      ],
      solutions: [
        {
          title: 'Plateforme LMS',
          description: 'Création de cours, diffusion des contenus, suivi des progrès et délivrance de certificats.',
        },
        {
          title: "Moteur d'apprentissage adaptatif",
          description:
            "Enchaînement des contenus piloté par l'IA selon les résultats et les lacunes de chaque apprenant.",
        },
        {
          title: "Évaluation & surveillance d'examens",
          description:
            "Création de quiz, correction automatique et intégration de solutions de surveillance d'examens à distance.",
        },
        {
          title: 'Portail de formation en entreprise',
          description:
            'Intégration des nouveaux collaborateurs, formations réglementaires et tableaux de bord des compétences.',
        },
      ],
      meta: {
        title: 'Développement logiciel éducation & EdTech | Trident Software',
        description:
          "Logiciels pour l'éducation : plateformes LMS, apprentissage adaptatif, outils d'évaluation, portails de formation en entreprise. Ingénierie suisse.",
      },
    },
    it: {
      title: 'Formazione & EdTech',
      tagline: 'Piattaforme di apprendimento per la classe digitale',
      description:
        'Piattaforme LMS, motori di apprendimento adattivo, strumenti di valutazione delle competenze e sistemi di gestione degli studenti per scuole, università, uffici formazione aziendali e fornitori di corsi online.',
      challenges: [
        {
          title: 'Arrivare fino in fondo',
          description:
            'Mantenere motivati i discenti con gamification, monitoraggio dei progressi e promemoria al momento giusto.',
        },
        {
          title: 'Formati diversi, una piattaforma',
          description: "Erogare video, quiz, simulazioni interattive e lezioni in diretta da un'unica piattaforma.",
        },
        {
          title: 'Dati degli studenti al sicuro',
          description: 'Conformità a FERPA, GDPR e nLPD per i dati degli studenti, compresi i minorenni.',
        },
      ],
      solutions: [
        {
          title: 'Piattaforma LMS',
          description:
            'Creazione dei corsi, erogazione dei contenuti, monitoraggio dei progressi e rilascio di certificati.',
        },
        {
          title: 'Motore di apprendimento adattivo',
          description: "Sequenza dei contenuti guidata dall'IA in base ai risultati e alle lacune di chi apprende.",
        },
        {
          title: 'Valutazione & proctoring',
          description:
            'Creazione di quiz, correzione automatica e integrazione con sistemi di sorveglianza degli esami a distanza.',
        },
        {
          title: 'Portale di formazione aziendale',
          description: 'Inserimento dei nuovi collaboratori, formazione obbligatoria e dashboard sulle competenze.',
        },
      ],
      meta: {
        title: 'Sviluppo software per formazione & EdTech | Trident Software',
        description:
          'Software per la formazione: piattaforme LMS, apprendimento adattivo, strumenti di valutazione, portali di formazione aziendale. Ingegneria svizzera.',
      },
    },
  },
}

export default record
