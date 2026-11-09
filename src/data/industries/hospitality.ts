import type { IndustryRecord } from './types'

// The PDF gives this industry a one-line case only; the page shows the hero, services and CTA.
const record: IndustryRecord = {
  slug: 'hospitality',
  icon: 'hotel',
  techStack: [],
  relatedCases: [],
  relatedServices: ['software-engineering', 'ai-services'],
  content: {
    en: {
      title: 'Hospitality and restaurants',
      tagline:
        'Reservations, group enquiries, allergen and menu questions in four languages during service, when nobody can answer the phone.',
      description: '',
      challenges: [],
      solutions: [],
      meta: {
        title: 'Hospitality and restaurants | Trident Software',
        description:
          'Reservations, group enquiries, allergen and menu questions in four languages during service, when nobody can answer the phone.',
      },
    },
    de: {
      title: 'Hotellerie und Gastronomie',
      tagline:
        'Reservationen, Gruppenanfragen, Fragen zu Allergenen und zur Karte in vier Sprachen, mitten im Service, wenn niemand ans Telefon kann.',
      description: '',
      challenges: [],
      solutions: [],
      meta: {
        title: 'Hotellerie und Gastronomie | Trident Software',
        description:
          'Reservationen, Gruppenanfragen, Fragen zu Allergenen und zur Karte in vier Sprachen, mitten im Service, wenn niemand ans Telefon kann.',
      },
    },
    fr: {
      title: 'Hôtellerie et restauration',
      tagline:
        'Réservations, demandes de groupe, questions sur les allergènes et la carte en quatre langues, en plein service, quand personne ne peut répondre au téléphone.',
      description: '',
      challenges: [],
      solutions: [],
      meta: {
        title: 'Hôtellerie et restauration | Trident Software',
        description:
          'Réservations, groupes, questions sur les allergènes et la carte en quatre langues, en plein service, quand personne ne peut décrocher.',
      },
    },
    it: {
      title: 'Alberghi e ristorazione',
      tagline:
        'Prenotazioni, richieste di gruppi, domande su allergeni e menu in quattro lingue durante il servizio, quando nessuno può rispondere al telefono.',
      description: '',
      challenges: [],
      solutions: [],
      meta: {
        title: 'Alberghi e ristorazione | Trident Software',
        description:
          'Prenotazioni, richieste di gruppi, domande su allergeni e menu in quattro lingue durante il servizio, quando nessuno può rispondere al telefono.',
      },
    },
  },
}

export default record
