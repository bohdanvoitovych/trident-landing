import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'bern',
  relatedServices: ['software-engineering', 'cloud-consulting', 'devops-and-sre', 'embedded-and-iot'],
  relatedCases: ['aida-medicine', 'tdsbot-iot'],
  content: {
    en: {
      name: 'Bern',
      region: 'Canton of Bern',
      tagline: "Digital solutions for Switzerland's federal capital",
      description:
        "Bern is Switzerland's administrative heart — federal ministries, cantonal governments, universities, and healthcare institutions. We specialize in public sector digitalization, secure data platforms, and citizen-facing portals built to Swiss government standards.",
      keyIndustries: ['Public Sector', 'Healthcare', 'Education', 'Insurance', 'Defense & Security'],
      highlights: [
        {
          title: 'Public sector digitalization',
          description:
            'Citizen portals, permit management, and government workflow systems compliant with eCH standards and Swiss data residency requirements.',
        },
        {
          title: 'University & research software',
          description:
            "Research data platforms, lab management systems, and academic collaboration tools for Bern's universities and ETH affiliates.",
        },
        {
          title: 'Healthcare IT integration',
          description:
            "HL7 FHIR interfaces, patient management systems, and eHealth platform integrations for Bern's hospital network.",
        },
      ],
      meta: {
        title: 'Software Development Bern | Trident Software Switzerland',
        description:
          'Public sector digitalization, healthcare IT, and government software for Bern. Swiss data residency, eCH standards compliance. Development team based in Valais.',
      },
    },
  },
}

export default record
