import { pick, type Localized } from '@/lib/localized'

/** Eight agent use cases. Copy carried over from the home section; glyphs from the prototype. */
type UseCaseText = { title: string; text: string; needs: string }

type UseCaseRecord = { glyph: string; content: Localized<UseCaseText> }

export type UseCase = Omit<UseCaseRecord, 'content'> & UseCaseText

const records: UseCaseRecord[] = [
  {
    glyph: '↘',
    content: {
      en: {
        title: 'Inbound enquiry handling',
        text: 'Answers in seconds on every channel, qualifies, books, writes into the CRM. Replaces the queue, not a person.',
        needs: 'Answers exist in writing: price list, catalogue, terms.',
      },
    },
  },
  {
    glyph: '▤',
    content: {
      en: {
        title: 'Document processing',
        text: 'Reads invoices, delivery notes and forms, matches them to records, flags mismatches, writes structured data.',
        needs: 'A clear definition of which field goes where.',
      },
    },
  },
  {
    glyph: '⊕',
    content: {
      en: {
        title: 'Order intake from messages',
        text: 'Turns "the usual pallet" on WhatsApp into a draft order the customer confirms in one message.',
        needs: 'Customer order history in a system.',
      },
    },
  },
  {
    glyph: '⇄',
    content: {
      en: {
        title: 'Dispatcher assistant',
        text: 'Proposes assignment and sequence, explains why, recalculates on change. The dispatcher decides.',
        needs: 'Built as advice, never silent overrule.',
      },
    },
  },
  {
    glyph: '⌕',
    content: {
      en: {
        title: 'Search over company knowledge',
        text: 'Answers from contracts, manuals and policies with citations. Says "not found" instead of inventing.',
        needs: 'Document hygiene: no three contradictory versions.',
      },
    },
  },
  {
    glyph: '✦',
    content: {
      en: {
        title: 'Recommendation',
        text: 'Proposes the next offer from live stock, margin and history, with the reason attached.',
        needs: 'Transaction history and live stock data.',
      },
    },
  },
  {
    glyph: '◎',
    content: {
      en: {
        title: 'Status and self-service',
        text: '"Where is my delivery?" answered from live data. Resends invoices, reschedules.',
        needs: 'Operational system with readable status.',
      },
    },
  },
  {
    glyph: '≡',
    content: {
      en: {
        title: 'Back-office triage',
        text: 'Sorts, summarises and routes incoming work to the right person or system.',
        needs: 'Agreed routing rules.',
      },
    },
  },
]

const localize = (r: UseCaseRecord, locale: string): UseCase => {
  const { content, ...rest } = r
  return { ...rest, ...pick(content, locale) }
}

export function getUseCases(locale: string): UseCase[] {
  return records.map((r) => localize(r, locale))
}
