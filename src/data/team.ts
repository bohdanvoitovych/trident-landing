export type TeamMember = {
  slug: string
  name: string
  role: string
  department: string
  location: string
  expertise: string[]
  linkedin?: string
  image?: string
}

export const team: TeamMember[] = [
  // Leadership
  { slug: 'maksym-shytov', name: 'Maksym Shytov', role: 'CTO', department: 'Leadership', location: 'Ukraine', expertise: ['Architecture', 'AI/ML', 'System Design'] , image: '/images/team/maksym-shytov.png' },
  { slug: 'natalia-shytova', name: 'Natalia Shytova', role: 'COO', department: 'Leadership', location: 'Switzerland', expertise: ['Operations', 'Client Relations', 'Swiss Market'] , image: '/images/team/natalia-shytova.png' },
  { slug: 'dmitriy-shevelev', name: 'Dmitriy Shevelev', role: 'Team Lead', department: 'Leadership', location: 'Ukraine', expertise: ['Team Management', 'Backend', 'Architecture'] , image: '/images/team/dmitriy-shevelev.png' },
  // Project Managers
  { slug: 'nina-alimova', name: 'Nina Alimova', role: 'Project Manager', department: 'Management', location: 'Ukraine', expertise: ['Project Delivery', 'Agile', 'Client Communication'] , image: '/images/team/nina-alimova.png' },
  { slug: 'bohdan-voitovych', name: 'Bohdan Voitovych', role: 'Project Manager', department: 'Management', location: 'Ukraine', expertise: ['Product Management', 'Frontend', 'AI Projects'] , image: '/images/team/bohdan-voitovych.png' },
  { slug: 'marina-gordienko', name: 'Marina Gordienko', role: 'Project Manager', department: 'Management', location: 'Ukraine', expertise: ['Agile', 'QA Oversight', 'Documentation'] , image: '/images/team/marina-gordienko.png' },
  { slug: 'denys-shytov', name: 'Denys Shytov', role: 'Project Manager', department: 'Management', location: 'Ukraine', expertise: ['Business Analysis', 'Requirements', 'Client Relations'] , image: '/images/team/denys-shytov.png' },
  // Frontend
  { slug: 'nikolai-kazmirchuk', name: 'Nikolai Kazmirchuk', role: 'Frontend Developer', department: 'Frontend', location: 'Ukraine', expertise: ['React', 'Next.js', 'TypeScript'] , image: '/images/team/nikolai-kazmirchuk.png' },
  { slug: 'maksym-osadchyi', name: 'Maksym Osadchyi', role: 'Frontend Developer', department: 'Frontend', location: 'Ukraine', expertise: ['Vue.js', 'React', 'UI Engineering'] , image: '/images/team/maksym-osadchyi.png' },
  { slug: 'aleksandr-kunitsyn', name: 'Aleksandr Kunitsyn', role: 'Frontend Developer', department: 'Frontend', location: 'Ukraine', expertise: ['React Native', 'Flutter', 'Mobile UI'] , image: '/images/team/aleksandr-kunitsyn.png' },
  { slug: 'oleg-bilyk', name: 'Oleg Bilyk', role: 'Frontend Developer', department: 'Frontend', location: 'Ukraine', expertise: ['Angular', 'TypeScript', 'Enterprise UI'] , image: '/images/team/oleg-bilyk.png' },
  // Backend
  { slug: 'dmitriy-koval', name: 'Dmitriy Koval', role: 'Backend Developer', department: 'Backend', location: 'Ukraine', expertise: ['Python', 'Django', 'PostgreSQL'] , image: '/images/team/dmitriy-koval.png' },
  { slug: 'stanislav-ivanov', name: 'Stanislav Ivanov', role: 'Backend Developer', department: 'Backend', location: 'Ukraine', expertise: ['Node.js', 'Microservices', 'AWS'] , image: '/images/team/stanislav-ivanov.png' },
  { slug: 'borys-gavrylenko', name: 'Borys Gavrylenko', role: 'Backend Developer', department: 'Backend', location: 'Ukraine', expertise: ['Python', 'AI/ML', 'Data Pipelines'] , image: '/images/team/borys-gavrylenko.png' },
  // Mobile
  { slug: 'alena-odynets', name: 'Alena Odynets', role: 'Mobile Developer', department: 'Mobile', location: 'Ukraine', expertise: ['iOS', 'Android', 'Flutter'] , image: '/images/team/alena-odynets.png' },
  // QA
  { slug: 'dmytro-panasiuk', name: 'Dmytro Panasiuk', role: 'QA Engineer', department: 'QA', location: 'Ukraine', expertise: ['Test Automation', 'Selenium', 'Postman'] , image: '/images/team/dmytro-panasiuk.png' },
  { slug: 'kateryna-kochereshchenko', name: 'Kateryna Kochereshchenko', role: 'QA Engineer', department: 'QA', location: 'Ukraine', expertise: ['Manual Testing', 'Test Cases', 'API Testing'] , image: '/images/team/kateryna-kochereshchenko.png' },
  // DevOps
  { slug: 'anton-savchuk', name: 'Anton Savchuk', role: 'DevOps Engineer', department: 'DevOps', location: 'Ukraine', expertise: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'] , image: '/images/team/anton-savchuk.png' },
]

export const stats = [
  { value: '27+', label: 'Projects delivered' },
  { value: '15', label: 'Years since founding' },
  { value: '26', label: 'Senior engineers' },
  { value: '8', label: 'Client countries' },
]
