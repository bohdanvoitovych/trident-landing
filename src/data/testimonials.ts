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
        quote: 'An excellent company. We are very satisfied with the website they built for us.',
      },
      de: {
        quote: 'Ausgezeichnete Firma. Wir sind mit der Website, die sie für uns erstellt hat, sehr zufrieden.',
      },
      fr: {
        quote: 'Excellente compagnie. Nous sommes très satisfaits du site internet que cette société a créé.',
      },
      it: {
        quote: 'Azienda eccellente. Siamo molto soddisfatti del sito web che hanno realizzato per noi.',
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
      de: {
        quote:
          'Das hat die Entwicklung, den Zusammenhalt und die Solidarität unter unseren Mitgliedern stark gefördert.',
        role: 'Leiter des GO-Valais Expat Club',
      },
      fr: {
        quote: "Cela a beaucoup favorisé le développement, l'unité et la solidarité entre nos membres.",
        role: 'Responsable du GO-Valais Expat Club',
      },
      it: {
        quote: "Questo ha favorito molto la crescita, l'unità e la solidarietà tra i nostri membri.",
        role: 'Responsabile del GO-Valais Expat Club',
      },
    },
  },
  {
    author: 'Adrien Thétaz',
    company: 'Kleap.co',
    content: {
      en: {
        quote: 'What could have been a major obstacle turned into a minor inconvenience.',
      },
      de: {
        quote: 'Was ein grosses Hindernis hätte werden können, wurde zu einer kleinen Unannehmlichkeit.',
      },
      fr: {
        quote: "Ce qui aurait pu être un obstacle majeur s'est transformé en un minuscule inconvénient.",
      },
      it: {
        quote: 'Quello che poteva essere un ostacolo importante si è trasformato in un piccolissimo inconveniente.',
      },
    },
  },
  {
    author: 'Ivan Boboretsky',
    company: 'DaniParts',
    content: {
      en: {
        quote: 'They are flexible and easy to work with.',
      },
      de: {
        quote: 'Flexibilität und Bereitschaft zur Zusammenarbeit zeichnen sie aus.',
      },
      fr: {
        quote: 'Flexibilité et esprit de collaboration les caractérisent.',
      },
      it: {
        quote: 'Flessibilità e disponibilità a collaborare li contraddistinguono.',
      },
    },
  },
  {
    author: 'Naren Bansal',
    company: 'Xelsat',
    content: {
      en: {
        quote: 'They are well versed in the latest Agile tools to keep track of deadlines.',
      },
      de: {
        quote: 'Sie kennen sich mit aktuellen agilen Tools bestens aus und behalten die Termine im Griff.',
      },
      fr: {
        quote: 'Ils maîtrisent les outils Agile les plus récents pour tenir les délais.',
      },
      it: {
        quote: 'Conoscono bene i più recenti strumenti Agile e tengono sotto controllo le scadenze.',
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
