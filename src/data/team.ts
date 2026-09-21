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
  { slug: 'maksym-shytov', name: 'Maksym Shytov', role: 'CTO', department: 'Leadership', location: 'Ukraine', expertise: ['Architecture', 'AI/ML', 'System Design'] },
  { slug: 'natalia-shytova', name: 'Natalia Shytova', role: 'COO', department: 'Leadership', location: 'Switzerland', expertise: ['Operations', 'Client Relations', 'Swiss Market'] },
  { slug: 'dmitriy-shevelev', name: 'Dmitriy Shevelev', role: 'Team Lead', department: 'Leadership', location: 'Ukraine', expertise: ['Team Management', 'Backend', 'Architecture'] },
  // Project Managers
  { slug: 'nina-alimova', name: 'Nina Alimova', role: 'Project Manager', department: 'Management', location: 'Ukraine', expertise: ['Project Delivery', 'Agile', 'Client Communication'] },
  { slug: 'bohdan-voitovych', name: 'Bohdan Voitovych', role: 'Project Manager', department: 'Management', location: 'Ukraine', expertise: ['Product Management', 'Frontend', 'AI Projects'] },
  { slug: 'marina-gordienko', name: 'Marina Gordienko', role: 'Project Manager', department: 'Management', location: 'Ukraine', expertise: ['Agile', 'QA Oversight', 'Documentation'] },
  { slug: 'denys-shytov', name: 'Denys Shytov', role: 'Project Manager', department: 'Management', location: 'Ukraine', expertise: ['Business Analysis', 'Requirements', 'Client Relations'] },
  // Frontend
  { slug: 'nikolai-kazmirchuk', name: 'Nikolai Kazmirchuk', role: 'Frontend Developer', department: 'Frontend', location: 'Ukraine', expertise: ['React', 'Next.js', 'TypeScript'] },
  { slug: 'maksym-osadchyi', name: 'Maksym Osadchyi', role: 'Frontend Developer', department: 'Frontend', location: 'Ukraine', expertise: ['Vue.js', 'React', 'UI Engineering'] },
  { slug: 'aleksandr-kunitsyn', name: 'Aleksandr Kunitsyn', role: 'Frontend Developer', department: 'Frontend', location: 'Ukraine', expertise: ['React Native', 'Flutter', 'Mobile UI'] },
  { slug: 'oleg-bilyk', name: 'Oleg Bilyk', role: 'Frontend Developer', department: 'Frontend', location: 'Ukraine', expertise: ['Angular', 'TypeScript', 'Enterprise UI'] },
  // Backend
  { slug: 'dmitriy-koval', name: 'Dmitriy Koval', role: 'Backend Developer', department: 'Backend', location: 'Ukraine', expertise: ['Python', 'Django', 'PostgreSQL'] },
  { slug: 'stanislav-ivanov', name: 'Stanislav Ivanov', role: 'Backend Developer', department: 'Backend', location: 'Ukraine', expertise: ['Node.js', 'Microservices', 'AWS'] },
  { slug: 'borys-gavrylenko', name: 'Borys Gavrylenko', role: 'Backend Developer', department: 'Backend', location: 'Ukraine', expertise: ['Python', 'AI/ML', 'Data Pipelines'] },
  // Mobile
  { slug: 'alena-odynets', name: 'Alena Odynets', role: 'Mobile Developer', department: 'Mobile', location: 'Ukraine', expertise: ['iOS', 'Android', 'Flutter'] },
  // QA
  { slug: 'dmytro-panasiuk', name: 'Dmytro Panasiuk', role: 'QA Engineer', department: 'QA', location: 'Ukraine', expertise: ['Test Automation', 'Selenium', 'Postman'] },
  { slug: 'kateryna-kochereshchenko', name: 'Kateryna Kochereshchenko', role: 'QA Engineer', department: 'QA', location: 'Ukraine', expertise: ['Manual Testing', 'Test Cases', 'API Testing'] },
  // DevOps
  { slug: 'anton-savchuk', name: 'Anton Savchuk', role: 'DevOps Engineer', department: 'DevOps', location: 'Ukraine', expertise: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'] },
]

export const stats = [
  { value: '27+', label: 'Projects delivered' },
  { value: '15', label: 'Years since founding' },
  { value: '26', label: 'Senior engineers' },
  { value: '8', label: 'Client countries' },
]
