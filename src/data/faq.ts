import { pick, type Localized } from '@/lib/localized'

/**
 * Questions before the audit. Shared by the home FAQ (the six marked `home`)
 * and the full /faq page.
 */
type FaqGroup = 'audit' | 'agent' | 'data'

type FaqText = { question: string; answer: string }

type FaqRecord = { home?: boolean; group: FaqGroup; content: Localized<FaqText> }

export type FaqItem = Omit<FaqRecord, 'content'> & FaqText

const records: FaqRecord[] = [
  {
    group: 'audit',
    home: true,
    content: {
      en: {
        question: 'What happens in the 45-minute audit?',
        answer:
          'We go through your enquiry volumes, response times, channels, languages and systems. You leave with your own numbers and a straight answer on whether automation pays back. Free, no obligation.',
      },
    },
  },
  {
    group: 'audit',
    home: true,
    content: {
      en: {
        question: 'When is the answer "not yet"?',
        answer:
          "Under roughly 150 enquiries a month, the numbers don't clear the build cost. Without a documented knowledge base, there's nothing for the agent to answer from. That's a content project first.",
      },
    },
  },
  {
    group: 'agent',
    home: true,
    content: {
      en: {
        question: 'How is this different from a chatbot?',
        answer:
          'A chatbot answers. An agent reads your live catalogue, books against a real calendar, issues a QR-bill, writes into your CRM, and hands over to a person on defined conditions.',
      },
    },
  },
  {
    group: 'data',
    home: true,
    content: {
      en: {
        question: 'Where does our data live?',
        answer:
          "Hosting in Switzerland or the EU, under revFADP and GDPR. You own your data, knowledge base and scenarios. That's written into the contract.",
      },
    },
  },
  {
    group: 'agent',
    home: true,
    content: {
      en: {
        question: 'Will it replace our sales team?',
        answer:
          'No. It handles the routine 70–80 % of conversations. Complex deals stay with your people, and the handover point is designed in.',
      },
    },
  },
  {
    group: 'agent',
    content: {
      en: {
        question: 'What if the agent gets something wrong?',
        answer:
          'It escalates on low confidence rather than improvising. The threshold is a setting, and we start it conservative. Prices, stock and availability are read live, never quoted from memory.',
      },
    },
  },
  {
    group: 'agent',
    content: {
      en: {
        question: "Will customers know they're talking to a machine?",
        answer:
          'Yes, disclosed up front. Concealment reads as dishonest and, under the EU AI Act, is heading towards unlawful. Disclosed agents that answer well outperform hidden ones.',
      },
    },
  },
  {
    group: 'audit',
    content: {
      en: {
        question: 'We already had a chatbot and it was a disaster.',
        answer:
          'Usually a decision-tree bot with no live data, no escalation and no owner after launch. Bring the transcripts to the audit; they show fastest what changes.',
      },
    },
  },
  {
    group: 'data',
    home: true,
    content: {
      en: {
        question: "How long until it's live?",
        answer: 'Three to five weeks from signature. First measurable effects after two to four weeks of live running.',
      },
    },
  },
  {
    group: 'data',
    content: {
      en: {
        question: 'Can we start small?',
        answer:
          "That's the recommended path: one channel, one scenario, one month. The first month of tuning is included in the integration fee.",
      },
    },
  },
]

const localize = (r: FaqRecord, locale: string): FaqItem => {
  const { content, ...rest } = r
  return { ...rest, ...pick(content, locale) }
}

const groups: Localized<Record<FaqGroup, string>> = {
  en: {
    audit: 'The audit and the numbers',
    agent: 'How the agent behaves',
    data: 'Data, contracts and timing',
  },
}

export function getFaqGroups(locale: string): Record<FaqGroup, string> {
  return pick(groups, locale)
}

export function getFaq(locale: string): FaqItem[] {
  return records.map((r) => localize(r, locale))
}

export function getHomeFaq(locale: string): FaqItem[] {
  return getFaq(locale).filter((f) => f.home)
}
