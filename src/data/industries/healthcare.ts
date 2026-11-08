import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'healthcare',
  icon: 'heart-pulse',
  techStack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'HL7 FHIR', 'Docker', 'Azure HIPAA'],
  relatedCases: ['aida-medicine'],
  relatedServices: ['ai-services', 'software-engineering', 'embedded-and-iot'],
  content: {
    en: {
      title: 'Healthcare & Medtech',
      tagline: 'Compliant software for the most regulated industry',
      description:
        'We build clinical decision support systems, patient portals, medical device software, and AI-powered diagnostics for hospitals, clinics, and medtech companies. All solutions comply with Swiss and EU medical device regulations.',
      challenges: [
        {
          title: 'Regulatory compliance',
          description: 'IEC 62304, MDR 2017/745, and Swiss Medtech Act requirements for software as a medical device.',
        },
        {
          title: 'Data privacy',
          description: 'Patient data under nFADP and GDPR with audit trails and role-based access.',
        },
        {
          title: 'System integration',
          description: 'HL7/FHIR integration with hospital information systems and laboratory equipment.',
        },
      ],
      solutions: [
        {
          title: 'Clinical decision support',
          description: 'AI-assisted diagnosis and treatment recommendation systems.',
        },
        {
          title: 'Patient portals',
          description: 'Secure portals for appointment booking, results, and communication.',
        },
        {
          title: 'Medical device software',
          description: 'IEC 62304-compliant embedded software for diagnostic devices.',
        },
        {
          title: 'AI diagnostics',
          description: 'Computer vision for radiology, pathology, and dermatology.',
        },
      ],
      meta: {
        title: 'Healthcare & Medtech Software Development | Trident Software',
        description:
          'Compliant medical software development — clinical systems, AI diagnostics, patient portals. IEC 62304, MDR, nFADP. Swiss team.',
      },
    },
    de: {
      title: 'Gesundheitswesen & Medtech',
      tagline: 'Konforme Software für die am stärksten regulierte Branche',
      description:
        'Wir entwickeln klinische Entscheidungsunterstützung, Patientenportale, Medizinprodukte-Software und KI-gestützte Diagnostik für Spitäler, Kliniken und Medtech-Unternehmen. Alle Lösungen erfüllen die Schweizer und europäischen Vorschriften für Medizinprodukte.',
      challenges: [
        {
          title: 'Regulatorische Vorgaben',
          description:
            'Anforderungen aus IEC 62304, MDR 2017/745 und dem Schweizer Medizinprodukterecht an Software als Medizinprodukt.',
        },
        {
          title: 'Datenschutz',
          description: 'Patientendaten gemäss nDSG und DSGVO, mit Audit-Trails und rollenbasierten Zugriffsrechten.',
        },
        {
          title: 'Anbindung an Klinik-Systeme',
          description: 'HL7/FHIR-Schnittstellen zu Klinikinformationssystemen und Laborgeräten.',
        },
      ],
      solutions: [
        {
          title: 'Klinische Entscheidungsunterstützung',
          description: 'KI-gestützte Systeme für Diagnose und Therapieempfehlungen.',
        },
        {
          title: 'Patientenportale',
          description: 'Sichere Portale für Terminbuchung, Befunde und Kommunikation.',
        },
        {
          title: 'Software für Medizinprodukte',
          description: 'Embedded-Software nach IEC 62304 für Diagnosegeräte.',
        },
        {
          title: 'KI-Diagnostik',
          description: 'Computer Vision für Radiologie, Pathologie und Dermatologie.',
        },
      ],
      meta: {
        title: 'Software für Gesundheitswesen & Medtech | Trident Software',
        description:
          'Konforme Medizinsoftware-Entwicklung: klinische Systeme, KI-Diagnostik, Patientenportale. IEC 62304, MDR, nDSG. Team in der Schweiz.',
      },
    },
    fr: {
      title: 'Santé & Medtech',
      tagline: 'Des logiciels conformes pour le secteur le plus réglementé',
      description:
        "Nous développons des systèmes d'aide à la décision clinique, des portails patients, des logiciels pour dispositifs médicaux et des outils de diagnostic assistés par IA pour les hôpitaux, les cliniques et les entreprises medtech. Toutes nos solutions respectent les réglementations suisses et européennes sur les dispositifs médicaux.",
      challenges: [
        {
          title: 'Conformité réglementaire',
          description:
            "Exigences de l'IEC 62304, du MDR 2017/745 et du droit suisse des dispositifs médicaux pour les logiciels considérés comme dispositifs médicaux.",
        },
        {
          title: 'Protection des données',
          description: "Données patients traitées selon la nLPD et le RGPD, avec pistes d'audit et accès par rôle.",
        },
        {
          title: 'Interfaçage avec le SIH',
          description:
            "Intégration HL7/FHIR avec les systèmes d'information hospitaliers et les équipements de laboratoire.",
        },
      ],
      solutions: [
        {
          title: 'Aide à la décision clinique',
          description: 'Systèmes de diagnostic et de recommandation thérapeutique assistés par IA.',
        },
        {
          title: 'Portails patients',
          description: 'Portails sécurisés pour la prise de rendez-vous, les résultats et les échanges.',
        },
        {
          title: 'Logiciels pour dispositifs médicaux',
          description: "Logiciels embarqués conformes à l'IEC 62304 pour les appareils de diagnostic.",
        },
        {
          title: 'Diagnostic par IA',
          description: 'Vision par ordinateur pour la radiologie, la pathologie et la dermatologie.',
        },
      ],
      meta: {
        title: 'Développement logiciel santé & medtech | Trident Software',
        description:
          'Logiciels médicaux conformes : systèmes cliniques, diagnostic par IA, portails patients. IEC 62304, MDR, nLPD. Équipe en Suisse.',
      },
    },
    it: {
      title: 'Sanità & Medtech',
      tagline: 'Software conforme per il settore più regolamentato',
      description:
        "Sviluppiamo sistemi di supporto alle decisioni cliniche, portali per i pazienti, software per dispositivi medici e diagnostica basata sull'IA per ospedali, cliniche e aziende medtech. Tutte le soluzioni rispettano le normative svizzere ed europee sui dispositivi medici.",
      challenges: [
        {
          title: 'Conformità normativa',
          description:
            'Requisiti di IEC 62304, MDR 2017/745 e del diritto svizzero sui dispositivi medici per il software come dispositivo medico.',
        },
        {
          title: 'Protezione dei dati',
          description: 'Dati dei pazienti gestiti secondo nLPD e GDPR, con audit trail e accessi basati sui ruoli.',
        },
        {
          title: 'Integrazione con i sistemi ospedalieri',
          description:
            'Integrazione HL7/FHIR con i sistemi informativi ospedalieri e le apparecchiature di laboratorio.',
        },
      ],
      solutions: [
        {
          title: 'Supporto alle decisioni cliniche',
          description: "Sistemi di diagnosi e di raccomandazione terapeutica assistiti dall'IA.",
        },
        {
          title: 'Portali per i pazienti',
          description: 'Portali sicuri per prenotare appuntamenti, consultare referti e comunicare.',
        },
        {
          title: 'Software per dispositivi medici',
          description: 'Software embedded conforme a IEC 62304 per dispositivi diagnostici.',
        },
        {
          title: 'Diagnostica con IA',
          description: 'Computer vision per radiologia, patologia e dermatologia.',
        },
      ],
      meta: {
        title: 'Sviluppo software sanità & medtech | Trident Software',
        description:
          'Software medicale conforme: sistemi clinici, diagnostica con IA, portali pazienti. IEC 62304, MDR, nLPD. Team in Svizzera.',
      },
    },
  },
}

export default record
