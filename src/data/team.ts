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
}

export function getStats(locale: string) {
  return pick(statsByLocale, locale)
}
