/** Eight agent use cases. Copy carried over from the home section; glyphs from the prototype. */
export type UseCase = { glyph: string; title: string; text: string; needs: string }

export const useCases: UseCase[] = [
  {
    glyph: '↘',
    title: 'Inbound enquiry handling',
    text: 'Answers in seconds on every channel, qualifies, books, writes into the CRM. Replaces the queue, not a person.',
    needs: 'Answers exist in writing: price list, catalogue, terms.',
  },
  {
    glyph: '▤',
    title: 'Document processing',
    text: 'Reads invoices, delivery notes and forms, matches them to records, flags mismatches, writes structured data.',
    needs: 'A clear definition of which field goes where.',
  },
  {
    glyph: '⊕',
    title: 'Order intake from messages',
    text: 'Turns "the usual pallet" on WhatsApp into a draft order the customer confirms in one message.',
    needs: 'Customer order history in a system.',
  },
  {
    glyph: '⇄',
    title: 'Dispatcher assistant',
    text: 'Proposes assignment and sequence, explains why, recalculates on change. The dispatcher decides.',
    needs: 'Built as advice, never silent overrule.',
  },
  {
    glyph: '⌕',
    title: 'Search over company knowledge',
    text: 'Answers from contracts, manuals and policies with citations. Says "not found" instead of inventing.',
    needs: 'Document hygiene: no three contradictory versions.',
  },
  {
    glyph: '✦',
    title: 'Recommendation',
    text: 'Proposes the next offer from live stock, margin and history, with the reason attached.',
    needs: 'Transaction history and live stock data.',
  },
  {
    glyph: '◎',
    title: 'Status and self-service',
    text: '"Where is my delivery?" answered from live data. Resends invoices, reschedules.',
    needs: 'Operational system with readable status.',
  },
  {
    glyph: '≡',
    title: 'Back-office triage',
    text: 'Sorts, summarises and routes incoming work to the right person or system.',
    needs: 'Agreed routing rules.',
  },
]
