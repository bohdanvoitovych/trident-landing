import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'legaltech',
  icon: 'scale',
  techStack: ['Python', 'LangChain', 'Llama', 'PostgreSQL', 'React', 'FastAPI', 'Docker'],
  relatedCases: [],
  relatedServices: ['ai-services', 'software-engineering', 'cto-as-a-service'],
  content: {
    en: {
      title: 'Legal Tech',
      tagline: 'AI-powered tools for legal professionals',
      description:
        'Contract management systems, legal document automation, AI-assisted legal research, and matter management platforms for law firms and corporate legal departments.',
      challenges: [
        {
          title: 'Document complexity',
          description: 'Extracting structured data from complex legal documents across jurisdictions.',
        },
        {
          title: 'Confidentiality',
          description: 'Attorney-client privilege requires on-premise AI deployment in many cases.',
        },
        {
          title: 'Accuracy requirements',
          description: 'Legal errors have high consequences — AI must augment, not replace, human judgment.',
        },
      ],
      solutions: [
        {
          title: 'Contract analysis',
          description: 'AI extraction of key clauses, dates, and obligations from contracts.',
        },
        {
          title: 'Document automation',
          description: 'Template-based generation of standard legal documents.',
        },
        {
          title: 'Matter management',
          description: 'Case tracking, deadline management, and billing integration.',
        },
        {
          title: 'On-premise LLM',
          description: 'Llama/Mistral deployment on client infrastructure for maximum confidentiality.',
        },
      ],
      meta: {
        title: 'Legal Tech Software Development | Trident Software',
        description:
          'Legal tech software — contract AI, document automation, matter management, on-premise LLM. Swiss engineering.',
      },
    },
    de: {
      title: 'Legal Tech',
      tagline: 'KI-gestützte Werkzeuge für Juristinnen und Juristen',
      description:
        'Vertragsmanagement, automatisierte Rechtsdokumente, KI-gestützte juristische Recherche und Mandatsverwaltung für Anwaltskanzleien und Rechtsabteilungen.',
      challenges: [
        {
          title: 'Anspruchsvolle Rechtstexte',
          description:
            'Strukturierte Daten aus komplexen juristischen Dokumenten verschiedener Rechtsordnungen gewinnen.',
        },
        {
          title: 'Vertraulichkeit',
          description: 'Das Anwaltsgeheimnis verlangt in vielen Fällen eine KI, die On-Premise läuft.',
        },
        {
          title: 'Hohe Genauigkeit',
          description:
            'Juristische Fehler haben schwere Folgen. KI soll das menschliche Urteil ergänzen, nicht ersetzen.',
        },
      ],
      solutions: [
        {
          title: 'Vertragsanalyse',
          description: 'KI liest wichtige Klauseln, Fristen und Pflichten aus Verträgen aus.',
        },
        {
          title: 'Dokumentenerstellung per Vorlage',
          description: 'Standardisierte Rechtsdokumente auf Basis von Vorlagen erzeugen.',
        },
        {
          title: 'Mandatsverwaltung',
          description: 'Fallverfolgung, Fristenkontrolle und Anbindung an die Abrechnung.',
        },
        {
          title: 'On-Premise-LLM',
          description: 'Llama/Mistral auf der Infrastruktur des Kunden, für maximale Vertraulichkeit.',
        },
      ],
      meta: {
        title: 'Legal-Tech-Softwareentwicklung | Trident Software',
        description:
          'Legal-Tech-Software: Vertrags-KI, automatisierte Dokumente, Mandatsverwaltung, On-Premise-LLM. Engineering aus der Schweiz.',
      },
    },
    fr: {
      title: 'Legal Tech',
      tagline: "Des outils d'IA pour les professionnels du droit",
      description:
        "Gestion des contrats, automatisation des documents juridiques, recherche juridique assistée par IA et gestion des dossiers pour les études d'avocats et les services juridiques d'entreprise.",
      challenges: [
        {
          title: 'Textes juridiques complexes',
          description:
            "Extraire des données structurées de documents juridiques complexes, d'une juridiction à l'autre.",
        },
        {
          title: 'Confidentialité',
          description: "Le secret professionnel de l'avocat impose souvent une IA déployée sur site.",
        },
        {
          title: 'Exigence de précision',
          description: "Une erreur juridique coûte cher. L'IA doit appuyer le jugement humain, pas le remplacer.",
        },
      ],
      solutions: [
        {
          title: 'Analyse de contrats',
          description: 'Extraction par IA des clauses clés, des échéances et des obligations.',
        },
        {
          title: 'Génération de documents',
          description: 'Production de documents juridiques standard à partir de modèles.',
        },
        {
          title: 'Gestion des dossiers',
          description: 'Suivi des affaires, gestion des délais et intégration à la facturation.',
        },
        {
          title: 'LLM sur site',
          description: "Déploiement de Llama/Mistral sur l'infrastructure du client pour une confidentialité maximale.",
        },
      ],
      meta: {
        title: 'Développement logiciel Legal Tech | Trident Software',
        description:
          'Logiciels legal tech : IA contractuelle, automatisation documentaire, gestion des dossiers, LLM sur site. Ingénierie suisse.',
      },
    },
    it: {
      title: 'Legal Tech',
      tagline: 'Strumenti con IA per i professionisti del diritto',
      description:
        "Gestione dei contratti, automazione dei documenti legali, ricerca giuridica assistita dall'IA e gestione delle pratiche per studi legali e uffici legali aziendali.",
      challenges: [
        {
          title: 'Testi giuridici complessi',
          description: 'Estrarre dati strutturati da documenti legali complessi di giurisdizioni diverse.',
        },
        {
          title: 'Riservatezza',
          description: "Il segreto professionale dell'avvocato richiede spesso un'IA installata on-premise.",
        },
        {
          title: 'Precisione richiesta',
          description: "Un errore legale costa caro. L'IA deve affiancare il giudizio umano, non sostituirlo.",
        },
      ],
      solutions: [
        {
          title: 'Analisi dei contratti',
          description: 'Estrazione con IA di clausole chiave, scadenze e obblighi dai contratti.',
        },
        {
          title: 'Generazione di documenti',
          description: 'Creazione di documenti legali standard a partire da modelli.',
        },
        {
          title: 'Gestione delle pratiche',
          description: 'Monitoraggio dei casi, gestione delle scadenze e integrazione con la fatturazione.',
        },
        {
          title: 'LLM on-premise',
          description: "Llama/Mistral installati sull'infrastruttura del cliente per la massima riservatezza.",
        },
      ],
      meta: {
        title: 'Sviluppo software Legal Tech | Trident Software',
        description:
          'Software legal tech: IA per i contratti, automazione documentale, gestione delle pratiche, LLM on-premise. Ingegneria svizzera.',
      },
    },
  },
}

export default record
