/** Use cases, written from the source-of-truth PDF (Use Cases, pp. 22–26 and 30). */

export type UseCase = {
  n: number
  slug: string
  title: string
  situation: string
  does: string
  replaces: string
  precondition: string
  /** Extra sentence after the precondition, where the PDF has one. */
  delivered?: string
}

export const useCasesHeading = 'Where an AI agent pays for itself — with the mechanics, not the promise'
export const useCasesIntro = 'Eight process patterns and a growing set of industry scenarios: what each replaces, and what has to be true before it works.'
export const howToRead = [
  'Each case follows the same structure: the situation, what the agent does, what it replaces, and the precondition — the thing that must already be true, or the case does not work.',
  'The preconditions matter more than the capabilities. Most failed AI projects fail there, not in the model.',
]

export const useCases: UseCase[] = [
  {
    n: 1,
    slug: 'inbound-enquiry-handling',
    title: 'Inbound enquiry handling',
    situation:
      'Enquiries arrive by e-mail, web form, WhatsApp and phone. They are answered when someone gets to them — which on a busy day means hours, and on a weekend means Monday. The questions repeat: opening hours, delivery times, price ranges, availability, coverage area.',
    does:
      'Answers within seconds on every channel, in the enquirer\'s own language. Asks the qualifying questions a good rep asks, records the answers as structured fields, books the appointment or reserves the slot, writes contact, deal and transcript into the CRM. On low confidence or an angry tone, it stops and routes to a named person with the full context attached.',
    replaces:
      'Not a person — the queue. The team stops being interrupted by the same twelve questions and keeps the conversations that need judgement.',
    precondition:
      'Answers must exist somewhere in writing — price list, service catalogue, terms. If the correct answer lives only in one colleague\'s head, that has to be extracted first. That extraction is usually the real project.',
  },
  {
    n: 2,
    slug: 'document-processing',
    title: 'Document processing',
    situation:
      'Invoices, delivery notes, order confirmations, certificates and forms arrive as PDFs, scans and photographs. Someone retypes them into the system. The work is dull, error-prone, and scales linearly with volume.',
    does:
      'Reads the document, extracts the fields that matter, matches them against existing records — supplier, order, contract — flags mismatches, and writes structured data into the target system. Ambiguous cases go to a person with the document and the extracted fields side by side, so the check takes seconds rather than minutes.',
    replaces:
      'Manual data entry, and the reconciliation that follows from typos in it.',
    precondition:
      'A definition of "correct". Someone must be able to state which field goes where and what makes a document invalid. Without that, the system automates an argument instead of a process.',
    delivered: 'We delivered a document recognition system on exactly this pattern in 2025.',
  },
  {
    n: 3,
    slug: 'order-intake-from-messages',
    title: 'Order intake from unstructured messages',
    situation:
      'Regular customers order the way they always have: a WhatsApp message, a phone call, a photograph of a handwritten list. Someone in the office turns that into an order in the system. In distribution, HoReCa supply and construction materials this is often the majority of intake.',
    does:
      'Reads the message, identifies the customer, resolves what they mean by their own shorthand ("the usual pallet", "same as last Tuesday"), checks the catalogue and stock, builds a draft order, and sends back a confirmation the customer can correct in one message. Only confirmed orders enter the system.',
    replaces:
      'The transcription step, and the errors that come from it — wrong quantity, wrong article, wrong delivery date.',
    precondition:
      'Customer history. The agent resolves shorthand by looking at what this customer has actually ordered before. A business with no order history in a system cannot start here.',
  },
  {
    n: 4,
    slug: 'dispatcher-assistant',
    title: 'Dispatcher assistant',
    situation:
      'A dispatcher plans the day: which vehicle takes which job, in what order, with which driver. When a job is added, a vehicle breaks down or a flight is delayed, the plan is rebuilt in the dispatcher\'s head under time pressure.',
    does:
      'Proposes the assignment and the sequence, explains the reasoning, and recalculates when something changes. It never assigns silently: the dispatcher sees the suggestion, the alternatives and the cost of each, and decides.',
    replaces:
      'The mental arithmetic, not the dispatcher. Experienced dispatchers hold constraints no system knows — which driver handles which client well, whose vehicle is due for service. The assistant handles distance, time windows and capacity; the human keeps the rest.',
    precondition:
      'The advisory framing must be genuine. Dispatchers reject systems that overrule them, and they are usually right to. Build it as a proposal with a visible reason, or do not build it.',
  },
  {
    n: 5,
    slug: 'retrieval-over-corporate-knowledge',
    title: 'Retrieval over corporate knowledge',
    situation:
      'The answer exists — in a contract, a technical manual, a policy document, four years of project files. Finding it takes twenty minutes and knowing where to look, so people ask a colleague instead, and the colleague becomes the bottleneck.',
    does:
      'Answers questions from the document corpus with citations to the source passage. Respects access rights: a person sees only what they are cleared to see. Says "not found in the available documents" instead of inventing an answer.',
    replaces:
      'The internal interruption economy — the constant tapping on the shoulder of whoever knows.',
    precondition:
      'Document hygiene. If three contradictory versions of the same policy sit in the corpus, the agent will cite one of them confidently. Retrieval amplifies whatever order already exists; it does not create it.',
  },
  {
    n: 6,
    slug: 'recommendation-and-next-best-offer',
    title: 'Recommendation and next-best-offer',
    situation:
      'A customer is in the catalogue or on the phone. What else should they be offered? The answer depends on stock, margin, what similar customers bought and what this customer has already refused. In practice it depends on which rep is working today.',
    does:
      'Draws on live catalogue, stock, price list and behavioural history to propose the next offer, with the reason attached. Works in the web shop, in the agent\'s own conversations, and as a suggestion in the rep\'s interface.',
    replaces:
      'Static cross-sell rules that nobody maintains, and inconsistency between reps.',
    precondition:
      'Enough transaction history to learn from, and live stock data. Recommending what is out of stock damages trust faster than not recommending at all.',
    delivered: 'We delivered a recommendation engine on this pattern in 2025.',
  },
  {
    n: 7,
    slug: 'customer-status-and-self-service',
    title: 'Customer status and self-service',
    situation:
      '"Where is my delivery?" "What is the status of my order?" "Can you resend the invoice?" These calls carry no commercial value and consume the same staff who could be selling.',
    does:
      'Authenticates the customer, reads live status from the operational system, answers precisely — including the unpleasant answers, with the reason. Resends documents, updates delivery instructions, reschedules where the rules allow.',
    replaces:
      'The status-request call volume. In transport and distribution this is frequently the largest single category of inbound contact.',
    precondition:
      'Live status must exist in a system. If the true location of a shipment is known only to the driver, the agent has nothing to read.',
  },
  {
    n: 8,
    slug: 'back-office-triage',
    title: 'Back-office triage',
    situation:
      'A shared mailbox receives everything: orders, complaints, invoices, job applications, supplier notices, spam. Someone sorts it every morning.',
    does:
      'Classifies each message, routes it to the right queue or person, extracts the fields that matter, drafts a reply for the routine categories, and escalates anything unusual. Learns from corrections.',
    replaces:
      'The sorting hour, and the messages that slip through it.',
    precondition:
      'Agreed routing rules. The disagreement about who owns which category has to be settled by people first — the agent will implement whatever it is told, including the wrong thing.',
  },
]

export const notStartIntro = 'Being explicit about this saves everyone time.'
export const notStart: Array<{ title: string; text: string }> = [
  { title: 'Where volume is low.', text: 'Below roughly twenty repetitive interactions a day, the payback period stretches past the point where the project is worth managing. Fix the process instead.' },
  { title: 'Where the answer is genuinely bespoke every time.', text: 'High-value consultative selling, complex technical design, negotiation. An agent can prepare the ground; it should not conduct the conversation.' },
  { title: 'Where the underlying data is broken.', text: 'Automating a process that runs on an out-of-date price list produces wrong answers faster. Data first, agent second.' },
  { title: 'Where nobody will own it after go-live.', text: 'An agent needs someone reviewing escalations and updating the knowledge base. Without a named owner it degrades within months. This is the most common cause of the "we tried a chatbot and it was a disaster" experience.' },
]

export const firstEngagement: Array<{ title: string; text: string }> = [
  { title: 'Week 0 — audit.', text: '45 minutes on your actual numbers: volumes, response times, channel mix, systems. Output is your own ROI model and a recommendation, which may be "not yet".' },
  { title: 'Weeks 1–4 — one scenario, one channel.', text: 'Narrow scope, real traffic, measured against the baseline you had before.' },
  { title: 'Week 5 — decision on evidence.', text: 'Extend, adjust or stop. The data from the pilot decides, not the plan.' },
]
export const firstEngagementClosing = 'Everything after that follows the same rhythm: one increment, measured, then the next.'
