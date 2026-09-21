export type Testimonial = {
  quote: string
  author: string
  role?: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Excellente compagnie. Nous sommes très satisfaits du site internet que cette société a créé.',
    author: 'Guillaume Moulin',
    company: 'Ardevaz SLS',
  },
  {
    quote: 'This has greatly fostered development, unity and solidarity among our members.',
    author: 'David Ouedec',
    role: 'Head of GO-Valais Expat Club',
    company: 'GO-Valais',
  },
  {
    quote: "Ce qui aurait pu être un obstacle majeur s'est transformé en un minuscule inconvénient.",
    author: 'Adrien Thétaz',
    company: 'Kleap.co',
  },
  {
    quote: 'Flexibility and readiness to cooperate are about them.',
    author: 'Ivan Boboretsky',
    company: 'DaniParts',
  },
  {
    quote: 'They are well versed in latest Agile tools to keep track of deadlines.',
    author: 'Naren Bansal',
    company: 'Xelsat',
  },
]
