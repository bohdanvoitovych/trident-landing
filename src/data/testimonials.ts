import { pick, type Localized } from '@/lib/localized'

type TestimonialText = {
  quote: string
  role?: string
}

type TestimonialRecord = {
  author: string
  company: string
  content: Localized<TestimonialText>
}

export type Testimonial = Omit<TestimonialRecord, 'content'> & TestimonialText

const records: TestimonialRecord[] = [
  {
    author: 'Guillaume Moulin',
    company: 'Ardevaz SLS',
    content: {
      en: {
        quote: 'Excellente compagnie. Nous sommes très satisfaits du site internet que cette société a créé.',
      },
    },
  },
  {
    author: 'David Ouedec',
    company: 'GO-Valais',
    content: {
      en: {
        quote: 'This has greatly fostered development, unity and solidarity among our members.',
        role: 'Head of GO-Valais Expat Club',
      },
    },
  },
  {
    author: 'Adrien Thétaz',
    company: 'Kleap.co',
    content: {
      en: {
        quote: "Ce qui aurait pu être un obstacle majeur s'est transformé en un minuscule inconvénient.",
      },
    },
  },
  {
    author: 'Ivan Boboretsky',
    company: 'DaniParts',
    content: {
      en: {
        quote: 'Flexibility and readiness to cooperate are about them.',
      },
    },
  },
  {
    author: 'Naren Bansal',
    company: 'Xelsat',
    content: {
      en: {
        quote: 'They are well versed in latest Agile tools to keep track of deadlines.',
      },
    },
  },
]

const localize = (r: TestimonialRecord, locale: string): Testimonial => {
  const { content, ...rest } = r
  return { ...rest, ...pick(content, locale) }
}

export function getTestimonials(locale: string): Testimonial[] {
  return records.map((r) => localize(r, locale))
}
