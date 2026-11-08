import { pick, type Localized } from '@/lib/localized'

/** `department` is the filter key (English); its label lives in messages (ui.team.departments). */
export type TeamText = {
  role: string
  location: string
}

type TeamRecord = {
  slug: string
  name: string
  department: string
  expertise: string[]
  linkedin?: string
  image?: string
  content: Localized<TeamText>
}

export type TeamMember = Omit<TeamRecord, 'content'> & TeamText

const records: TeamRecord[] = [
  {
    slug: 'maksym-shytov',
    name: 'Maksym Shytov',
    department: 'Leadership',
    expertise: ['Architecture', 'AI/ML', 'System Design'],
    image: '/images/team/maksym-shytov.png',
    content: {
      en: {
        role: 'CTO',
        location: 'Ukraine',
      },
      de: {
        role: 'CTO',
        location: 'Ukraine',
      },
      fr: {
        role: 'CTO',
        location: 'Ukraine',
      },
      it: {
        role: 'CTO',
        location: 'Ucraina',
      },
    },
  },
  {
    slug: 'natalia-shytova',
    name: 'Natalia Shytova',
    department: 'Leadership',
    expertise: ['Operations', 'Client Relations', 'Swiss Market'],
    image: '/images/team/natalia-shytova.png',
    content: {
      en: {
        role: 'COO',
        location: 'Switzerland',
      },
      de: {
        role: 'COO',
        location: 'Schweiz',
      },
      fr: {
        role: 'COO',
        location: 'Suisse',
      },
      it: {
        role: 'COO',
        location: 'Svizzera',
      },
    },
  },
  {
    slug: 'dmitriy-shevelev',
    name: 'Dmitriy Shevelev',
    department: 'Leadership',
    expertise: ['Team Management', 'Backend', 'Architecture'],
    image: '/images/team/dmitriy-shevelev.png',
    content: {
      en: {
        role: 'Team Lead',
        location: 'Ukraine',
      },
      de: {
        role: 'Teamleiter',
        location: 'Ukraine',
      },
      fr: {
        role: "Chef d'équipe",
        location: 'Ukraine',
      },
      it: {
        role: 'Team Leader',
        location: 'Ucraina',
      },
    },
  },
  {
    slug: 'nina-alimova',
    name: 'Nina Alimova',
    department: 'Management',
    expertise: ['Project Delivery', 'Agile', 'Client Communication'],
    image: '/images/team/nina-alimova.png',
    content: {
      en: {
        role: 'Project Manager',
        location: 'Ukraine',
      },
      de: {
        role: 'Projektleiterin',
        location: 'Ukraine',
      },
      fr: {
        role: 'Cheffe de projet',
        location: 'Ukraine',
      },
      it: {
        role: 'Project Manager',
        location: 'Ucraina',
      },
    },
  },
  {
    slug: 'bohdan-voitovych',
    name: 'Bohdan Voitovych',
    department: 'Management',
    expertise: ['Product Management', 'Frontend', 'AI Projects'],
    image: '/images/team/bohdan-voitovych.png',
    content: {
      en: {
        role: 'Project Manager',
        location: 'Ukraine',
      },
      de: {
        role: 'Projektleiter',
        location: 'Ukraine',
      },
      fr: {
        role: 'Chef de projet',
        location: 'Ukraine',
      },
      it: {
        role: 'Project Manager',
        location: 'Ucraina',
      },
    },
  },
  {
    slug: 'marina-gordienko',
    name: 'Marina Gordienko',
    department: 'Management',
    expertise: ['Agile', 'QA Oversight', 'Documentation'],
    image: '/images/team/marina-gordienko.png',
    content: {
      en: {
        role: 'Project Manager',
        location: 'Ukraine',
      },
      de: {
        role: 'Projektleiterin',
        location: 'Ukraine',
      },
      fr: {
        role: 'Cheffe de projet',
        location: 'Ukraine',
      },
      it: {
        role: 'Project Manager',
        location: 'Ucraina',
      },
    },
  },
  {
    slug: 'denys-shytov',
    name: 'Denys Shytov',
    department: 'Management',
    expertise: ['Business Analysis', 'Requirements', 'Client Relations'],
    image: '/images/team/denys-shytov.png',
    content: {
      en: {
        role: 'Project Manager',
        location: 'Ukraine',
      },
      de: {
        role: 'Projektleiter',
        location: 'Ukraine',
      },
      fr: {
        role: 'Chef de projet',
        location: 'Ukraine',
      },
      it: {
        role: 'Project Manager',
        location: 'Ucraina',
      },
    },
  },
  {
    slug: 'nikolai-kazmirchuk',
    name: 'Nikolai Kazmirchuk',
    department: 'Frontend',
    expertise: ['React', 'Next.js', 'TypeScript'],
    image: '/images/team/nikolai-kazmirchuk.png',
    content: {
      en: {
        role: 'Frontend Developer',
        location: 'Ukraine',
      },
      de: {
        role: 'Frontend-Entwickler',
        location: 'Ukraine',
      },
      fr: {
        role: 'Développeur frontend',
        location: 'Ukraine',
      },
      it: {
        role: 'Sviluppatore Frontend',
        location: 'Ucraina',
      },
    },
  },
  {
    slug: 'maksym-osadchyi',
    name: 'Maksym Osadchyi',
    department: 'Frontend',
    expertise: ['Vue.js', 'React', 'UI Engineering'],
    image: '/images/team/maksym-osadchyi.png',
    content: {
      en: {
        role: 'Frontend Developer',
        location: 'Ukraine',
      },
      de: {
        role: 'Frontend-Entwickler',
        location: 'Ukraine',
      },
      fr: {
        role: 'Développeur frontend',
        location: 'Ukraine',
      },
      it: {
        role: 'Sviluppatore Frontend',
        location: 'Ucraina',
      },
    },
  },
  {
    slug: 'aleksandr-kunitsyn',
    name: 'Aleksandr Kunitsyn',
    department: 'Frontend',
    expertise: ['React Native', 'Flutter', 'Mobile UI'],
    image: '/images/team/aleksandr-kunitsyn.png',
    content: {
      en: {
        role: 'Frontend Developer',
        location: 'Ukraine',
      },
      de: {
        role: 'Frontend-Entwickler',
        location: 'Ukraine',
      },
      fr: {
        role: 'Développeur frontend',
        location: 'Ukraine',
      },
      it: {
        role: 'Sviluppatore Frontend',
        location: 'Ucraina',
      },
    },
  },
  {
    slug: 'oleg-bilyk',
    name: 'Oleg Bilyk',
    department: 'Frontend',
    expertise: ['Angular', 'TypeScript', 'Enterprise UI'],
    image: '/images/team/oleg-bilyk.png',
    content: {
      en: {
        role: 'Frontend Developer',
        location: 'Ukraine',
      },
      de: {
        role: 'Frontend-Entwickler',
        location: 'Ukraine',
      },
      fr: {
        role: 'Développeur frontend',
        location: 'Ukraine',
      },
      it: {
        role: 'Sviluppatore Frontend',
        location: 'Ucraina',
      },
    },
  },
  {
    slug: 'dmitriy-koval',
    name: 'Dmitriy Koval',
    department: 'Backend',
    expertise: ['Python', 'Django', 'PostgreSQL'],
    image: '/images/team/dmitriy-koval.png',
    content: {
      en: {
        role: 'Backend Developer',
        location: 'Ukraine',
      },
      de: {
        role: 'Backend-Entwickler',
        location: 'Ukraine',
      },
      fr: {
        role: 'Développeur backend',
        location: 'Ukraine',
      },
      it: {
        role: 'Sviluppatore Backend',
        location: 'Ucraina',
      },
    },
  },
  {
    slug: 'stanislav-ivanov',
    name: 'Stanislav Ivanov',
    department: 'Backend',
    expertise: ['Node.js', 'Microservices', 'AWS'],
    image: '/images/team/stanislav-ivanov.png',
    content: {
      en: {
        role: 'Backend Developer',
        location: 'Ukraine',
      },
      de: {
        role: 'Backend-Entwickler',
        location: 'Ukraine',
      },
      fr: {
        role: 'Développeur backend',
        location: 'Ukraine',
      },
      it: {
        role: 'Sviluppatore Backend',
        location: 'Ucraina',
      },
    },
  },
  {
    slug: 'borys-gavrylenko',
    name: 'Borys Gavrylenko',
    department: 'Backend',
    expertise: ['Python', 'AI/ML', 'Data Pipelines'],
    image: '/images/team/borys-gavrylenko.png',
    content: {
      en: {
        role: 'Backend Developer',
        location: 'Ukraine',
      },
      de: {
        role: 'Backend-Entwickler',
        location: 'Ukraine',
      },
      fr: {
        role: 'Développeur backend',
        location: 'Ukraine',
      },
      it: {
        role: 'Sviluppatore Backend',
        location: 'Ucraina',
      },
    },
  },
  {
    slug: 'alena-odynets',
    name: 'Alena Odynets',
    department: 'Mobile',
    expertise: ['iOS', 'Android', 'Flutter'],
    image: '/images/team/alena-odynets.png',
    content: {
      en: {
        role: 'Mobile Developer',
        location: 'Ukraine',
      },
      de: {
        role: 'Mobile-Entwicklerin',
        location: 'Ukraine',
      },
      fr: {
        role: 'Développeuse mobile',
        location: 'Ukraine',
      },
      it: {
        role: 'Sviluppatrice Mobile',
        location: 'Ucraina',
      },
    },
  },
  {
    slug: 'dmytro-panasiuk',
    name: 'Dmytro Panasiuk',
    department: 'QA',
    expertise: ['Test Automation', 'Selenium', 'Postman'],
    image: '/images/team/dmytro-panasiuk.png',
    content: {
      en: {
        role: 'QA Engineer',
        location: 'Ukraine',
      },
      de: {
        role: 'QA Engineer',
        location: 'Ukraine',
      },
      fr: {
        role: 'Ingénieur QA',
        location: 'Ukraine',
      },
      it: {
        role: 'QA Engineer',
        location: 'Ucraina',
      },
    },
  },
  {
    slug: 'kateryna-kochereshchenko',
    name: 'Kateryna Kochereshchenko',
    department: 'QA',
    expertise: ['Manual Testing', 'Test Cases', 'API Testing'],
    image: '/images/team/kateryna-kochereshchenko.png',
    content: {
      en: {
        role: 'QA Engineer',
        location: 'Ukraine',
      },
      de: {
        role: 'QA Engineer',
        location: 'Ukraine',
      },
      fr: {
        role: 'Ingénieure QA',
        location: 'Ukraine',
      },
      it: {
        role: 'QA Engineer',
        location: 'Ucraina',
      },
    },
  },
  {
    slug: 'anton-savchuk',
    name: 'Anton Savchuk',
    department: 'DevOps',
    expertise: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'],
    image: '/images/team/anton-savchuk.png',
    content: {
      en: {
        role: 'DevOps Engineer',
        location: 'Ukraine',
      },
      de: {
        role: 'DevOps Engineer',
        location: 'Ukraine',
      },
      fr: {
        role: 'Ingénieur DevOps',
        location: 'Ukraine',
      },
      it: {
        role: 'DevOps Engineer',
        location: 'Ucraina',
      },
    },
  },
]

const localize = (r: TeamRecord, locale: string): TeamMember => {
  const { content, ...rest } = r
  return { ...rest, ...pick(content, locale) }
}

export function getTeam(locale: string): TeamMember[] {
  return records.map((r) => localize(r, locale))
}

const statsByLocale: Localized<{ value: string; label: string }[]> = {
  en: [
    {
      value: '27+',
      label: 'Projects delivered',
    },
    {
      value: '15',
      label: 'Years since founding',
    },
    {
      value: '26',
      label: 'Senior engineers',
    },
    {
      value: '8',
      label: 'Client countries',
    },
  ],
  de: [
    {
      value: '27+',
      label: 'Abgeschlossene Projekte',
    },
    {
      value: '15',
      label: 'Jahre seit der Gründung',
    },
    {
      value: '26',
      label: 'Senior-Entwickler',
    },
    {
      value: '8',
      label: 'Länder mit Kunden',
    },
  ],
  fr: [
    {
      value: '27+',
      label: 'Projets livrés',
    },
    {
      value: '15',
      label: 'Années depuis la fondation',
    },
    {
      value: '26',
      label: 'Ingénieurs seniors',
    },
    {
      value: '8',
      label: 'Pays clients',
    },
  ],
  it: [
    {
      value: '27+',
      label: 'Progetti realizzati',
    },
    {
      value: '15',
      label: 'Anni dalla fondazione',
    },
    {
      value: '26',
      label: 'Ingegneri senior',
    },
    {
      value: '8',
      label: 'Paesi dei clienti',
    },
  ],
}

export function getStats(locale: string) {
  return pick(statsByLocale, locale)
}
