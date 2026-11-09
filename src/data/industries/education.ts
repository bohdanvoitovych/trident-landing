import type { IndustryRecord } from './types'

// The PDF gives this industry a one-line case only; the page shows the hero, services and CTA.
const record: IndustryRecord = {
  slug: 'education',
  icon: 'graduation-cap',
  techStack: [],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ai-services'],
  content: {
    en: {
      title: 'Education and training providers',
      tagline:
        'Course enquiries, prerequisites, dates, enrolment: seasonal peaks that would otherwise need temporary staff.',
      description: '',
      challenges: [],
      solutions: [],
      meta: {
        title: 'Education and training providers | Trident Software',
        description:
          'Course enquiries, prerequisites, dates, enrolment: seasonal peaks that would otherwise need temporary staff.',
      },
    },
    de: {
      title: 'Bildungs- und Weiterbildungsanbieter',
      tagline:
        'Kursanfragen, Voraussetzungen, Termine, Anmeldungen: saisonale Spitzen, für die es sonst Aushilfen bräuchte.',
      description: '',
      challenges: [],
      solutions: [],
      meta: {
        title: 'Bildungs- und Weiterbildungsanbieter | Trident Software',
        description:
          'Kursanfragen, Voraussetzungen, Termine, Anmeldungen: saisonale Spitzen, für die es sonst Aushilfen bräuchte.',
      },
    },
    fr: {
      title: "Organismes de formation et d'enseignement",
      tagline:
        'Demandes sur les cours, prérequis, dates, inscriptions : des pics saisonniers qui exigeraient sinon du personnel temporaire.',
      description: '',
      challenges: [],
      solutions: [],
      meta: {
        title: "Organismes de formation et d'enseignement | Trident Software",
        description:
          'Demandes sur les cours, prérequis, dates, inscriptions : des pics saisonniers qui exigeraient sinon du personnel temporaire.',
      },
    },
    it: {
      title: 'Enti di formazione e istruzione',
      tagline:
        'Richieste sui corsi, requisiti, date, iscrizioni: picchi stagionali che altrimenti richiederebbero personale temporaneo.',
      description: '',
      challenges: [],
      solutions: [],
      meta: {
        title: 'Enti di formazione e istruzione | Trident Software',
        description:
          'Richieste sui corsi, requisiti, date, iscrizioni: picchi stagionali che altrimenti richiederebbero personale temporaneo.',
      },
    },
  },
}

export default record
