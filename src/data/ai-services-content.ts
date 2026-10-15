/** Text of /services/ai-services: the PDF page "Sales on Autopilot with AI" (pp. 8–12), verbatim. */

export const title = 'Sales on Autopilot with AI'
export const kicker = 'AI agents, assistants and chatbots for business'
export const lede = 'AI agents, AI assistants and chatbots that automate enquiry handling, advise your customers and close deals 24/7 — faster, more accurate and cheaper than a human rep.'
export const intro = 'What the agent is, which enquiries it takes over, and where it plugs into a Swiss company\'s existing stack.'
export const gapTitle = 'The gap we close'
export const gapIntro = 'Swiss SMEs do not lose deals to bad products. They lose them to silence — and the Swiss numbers are more specific than the ones usually quoted in this market.'
export const gapClose = 'A sales agent is a working process with a language model inside it — not a chat widget, and not a model licence.'
export const doesTitle = 'What the agent does'
export const concurrency = 'Concurrency is not the interesting part, but it matters on campaign days: hundreds of parallel conversations cost the same as one.'
export const fteTitle = 'Agent vs. an additional FTE'
export const fteIntro = 'Indicative Swiss figures for an inside-sales / customer-service role, fully loaded (salary, social charges, workplace, holidays, sickness, recruitment).'
export const fteClose = 'The honest reading of that table: the agent replaces the routine 70–80 % of the conversation volume, not the person. Complex negotiation, key accounts, anything with a signature or a liability attached stays human. Companies that get value here redeploy the team upward rather than cutting it.'
export const channelsTitle = 'Channels'
export const channels = 'WhatsApp Business · web-site widget · e-mail · Telegram · Instagram / Facebook · SMS · Microsoft Teams (internal agents) · voice (see the limits note below)'
export const channelsNote = 'Channel mix is decided per business, not per fashion: WhatsApp reaches almost everyone privately, e-mail still carries most B2B traffic, and the web widget catches the buyer already on your page.'
export const intTitle = 'Integrations'
export const intNote = 'Where a system is pull-only by design — 1C being the classic case — the agent writes into a staging layer and the ERP collects on its own schedule. We do not promise push into systems that cannot be pushed to.'
export const noTitle = 'Where we say no'
export const noIntro = 'We publish this because it is the fastest way to find out whether there is a project here at all.'
export const nextTitle = 'Next'
export const next = 'Free funnel audit, 45 minutes. Bring your enquiry volume, response times and channel mix. You leave with a number, whether or not you work with us — see the economics.'

export const gap: Array<{ lead: string; text: string }> = [
  { lead: '77 % of the Swiss population want to find and book an SME service online. 3 % of SMEs fully support it.', text: 'That gap is the whole business case (localsearch × HSLU, KMU Digital Pulse 2025).' },
  { lead: 'There is no dominant channel to staff.', text: 'Swiss consumers split almost evenly: 16 % prefer e-mail, 16 % online chat, 14 % phone — and 77 % expect to choose the channel themselves (ServiceNow Consumer Voice Report 2024, Switzerland). E-mail has not been displaced here the way it has in messenger-first markets; it has been joined. Covering all of them with people is what costs money.' },
  { lead: 'Speed decides the outcome.', text: 'In the reference study on web leads, the odds of qualifying a lead drop roughly 21× between a 5-minute and a 30-minute response — US data from 2007, not Swiss, but the direction is not in dispute. What is Swiss: 84 % rate fast, real-time support as important, and 64 % want self-service instead of waiting for a person.' },
  { lead: 'Search now starts with an AI assistant for part of the market.', text: '13 % of the Swiss population begin the search for an SME service in ChatGPT or Copilot rather than a search engine, and about 20 % used one in the past year to research SME services (KMU Digital Pulse 2025). A business that cannot answer a machine-generated enquiry in seconds is invisible to that segment.' },
  { lead: 'A CHF 8,000-a-month inside-sales person spends most of the day on the same twelve questions', text: '— opening hours, delivery time, price range, availability, "do you also serve Vaud".' },
  { lead: 'Four language regions.', text: 'An enquiry in Italian at 21:00 usually waits until someone in the office reads Italian. WhatsApp reaches roughly 85 % of the Swiss population, so the channel exists — the staffing for it usually does not.' },
]

export const does: Array<{ lead: string; text: string }> = [
  { lead: 'Answers in seconds', text: 'Every channel, every hour, including weekends and public holidays — cantonal ones included.' },
  { lead: 'Qualifies', text: 'Asks the qualifying questions your best rep asks, in the buyer\'s own language, and records the answers as structured fields.' },
  { lead: 'Recommends', text: 'Picks products, services or slots from your live catalogue, stock and price list — not from a static script.' },
  { lead: 'Handles the standard objections', text: 'Price, delivery time, competitor comparison, terms — answered from your approved wording, not improvised.' },
  { lead: 'Closes the small stuff', text: 'Books the appointment, reserves the slot, issues the QR-bill or payment link, confirms by e-mail.' },
  { lead: 'Writes into your systems', text: 'CRM — contact, company, deal, transcript, score, next step. ERP or accounting — the order, the delivery note, the invoice draft, priced on the customer\'s own terms. Written through an API where one exists, and through the interface where it does not. Your systems stay the source of truth.' },
  { lead: 'Sends what follows', text: 'Confirmation to the customer, the task to the person who owns the next step, the ETA when it moves, the reminder before the appointment, the invoice when it is due. The notification is part of the process, not a report about it.' },
  { lead: 'Hands over', text: 'On low confidence, an angry tone, or any topic on the escalation list, the agent stops and routes to a named human with the full context attached.' },
]

export const fte: Array<{ row: string; agent: string; person: string }> = [
  { row: 'Availability', agent: '24/7, 365', person: '~42 h/week, minus holidays and sickness' },
  { row: 'First response', agent: 'Seconds', person: '15–30 min in office hours, next morning outside them' },
  { row: 'Languages', agent: 'DE, FR, IT, EN from day one', person: 'One or two, realistically' },
  { row: 'Parallel conversations', agent: 'Hundreds', person: '10–15 at absolute stretch' },
  { row: 'Running cost', agent: 'From ~CHF 450/month plus usage', person: 'CHF 90,000–120,000/year loaded' },
  { row: 'Ramp-up', agent: 'Days', person: '3–6 months to full productivity' },
  { row: 'Consistency', agent: 'Same answer every time, versioned and auditable', person: 'Varies by person, mood and day' },
]

export const integrations: string[] = [
  'CRM: HubSpot, Salesforce, Pipedrive, Microsoft Dynamics, Zoho',
  'ERP / accounting: bexio, Abacus, SAP Business One, Odoo, Sage',
  'Booking and operations: Microsoft 365 / Outlook Calendar, Google Calendar, industry booking systems',
  'Payment: Swiss QR-bill, TWINT, Stripe, PostFinance, Datatrans',
  'Healthcare: vitomed, amétiq siMed, AESKULAP and the other Swiss practice systems; KISIM, Epic, Meierhofer on the hospital side; HL7/FHIR, DICOM and HIN-secured mail — see the clinic case',
  'Logistics and field work: the 8Move product line — Fleet Planner, Driver Pro, Transfer, Back Office — where the enquiry has to become a job, a route or a delivery',
  'Anything with an API, plus a documented fallback for the systems that only export CSV at night',
]

export const limits: Array<{ lead: string; text: string }> = [
  { lead: 'Under ~150 enquiries a month.', text: 'The maths does not work. Fix the response process first; call us at volume.' },
  { lead: 'No written knowledge base and no one to write one.', text: 'The agent inherits your quality. Nothing to inherit means nothing to deploy.' },
  { lead: 'Regulated advice', text: '— medical diagnosis, investment recommendation, legal opinion. The agent books, triages and prepares; it does not advise.' },
  { lead: 'Swiss German voice.', text: 'Text in Swiss German dialect works well. Dialect speech recognition remains the weak point of every vendor on the market, ours included. If your customers phone in Züridütsch, start with text channels and treat voice as phase two.' },
  { lead: 'A pure headcount-cut mandate.', text: 'Projects framed as "replace the team" underperform the ones framed as "take the routine off the team". We will say so at the first meeting.' },
]

/** Delivery, Data and Compliance (PDF pp. 18–21), verbatim. */

export const deliveryTitle = 'Deployment in six stages'
export const deliveryIntro = 'Typical elapsed time from signature to live: three to five weeks. The gating item is almost never the technology — it is how fast your side can answer questions about its own process.'
export const stages: Array<{ lead: string; text: string }> = [
  { lead: '1 · Audit and scenario selection — days 1–3.', text: 'We read your last 200 enquiries. Which ones repeat, which ones convert, where the process breaks. Output: the ranked list of conversations worth automating and the business case from page 2 filled with your figures.' },
  { lead: '2 · Knowledge base — days 3–10.', text: 'Catalogue, prices, delivery terms, opening hours, FAQ, approved wording for the awkward questions. We assemble it from what you already have and interview whoever holds the rest in their head. This is the stage that decides quality, and it is the stage clients underestimate.' },
  { lead: '3 · Channels and systems — days 8–15.', text: 'WhatsApp Business verification, widget, CRM and ERP connections, calendar, payment. WhatsApp verification is Meta\'s timeline, not ours — start it on day one.' },
  { lead: '4 · Testing — days 15–20.', text: 'Your team tries to break the agent, in all four languages. Escalation rules, tone, edge cases, the deliberately hostile customer. Nothing goes live until your sales lead signs off on the transcripts.' },
  { lead: '5 · Supervised launch — days 20–25.', text: 'Live traffic, every conversation reviewed daily, hand-over threshold set deliberately high at first and lowered as the transcripts justify it.' },
  { lead: '6 · Operation and tuning — ongoing.', text: 'Monthly review: what the agent got wrong, what it should now handle, what changed in your prices and range. First month of tuning included in the integration fee.' },
]

export const deliveryClose = 'First measurable effects appear in two to four weeks of live running. Anyone promising results in week one is quoting a demo, not a deployment.'

export const languagesTitle = 'Languages'
export const languages: string[] = [
  'DE, FR, IT, EN from day one. Not a translation layer — separate approved wording per language, because a French-speaking Swiss buyer and a German-speaking Swiss buyer do not respond to the same sentence.',
  'Where the platform side is 8Move, the full set is seven languages: EN, FR, DE, IT, ES, PT and AR with right-to-left layout, which matters for hospitality, logistics and any business with a non-Swiss workforce reading the same interface.',
  'Standard German text output is high quality. Written Swiss German dialect is handled. Spoken dialect recognition is the honest weak spot — see page 1.',
]

export const dataTitle = 'Data protection'
export const dataItems: Array<{ lead: string; text: string }> = [
  { lead: 'revFADP and GDPR.', text: 'Deployments comply with the revised Swiss Federal Act on Data Protection and, where you serve EU customers, with the GDPR. You get the processing agreement, the record of processing activities entry, and the privacy-notice wording for the channels — drafted, not left to you.' },
  { lead: 'Hosting in Switzerland or the EU, your choice.', text: 'Conversation data and the knowledge base sit in the region you pick. Documented sub-processors, listed in the contract.' },
  { lead: 'Your data does not train anyone\'s model.', text: 'Contractually excluded, with the vendor terms attached as an annex so you can verify it rather than trust it.' },
  { lead: 'Retention you control.', text: 'Configurable retention windows, deletion on request, export on termination in an open format. No lock-in through your own data.' },
  { lead: 'Human hand-over is logged.', text: 'Every escalation, every override, full transcript retained for audit. Where a conversation touches health, finance or employment data, the escalation threshold is set tighter by default.' },
]

export const guaranteeTitle = 'What we guarantee'
export const guarantee: Array<{ lead: string; text: string }> = [
  { lead: 'Fixed integration fee.', text: 'Quoted after the audit, against a written scope. Scope changes are quoted separately, never absorbed silently into the monthly line.' },
  { lead: 'Your systems stay yours.', text: 'No proprietary lock-in on the CRM or ERP side. If you terminate, the knowledge base, the transcripts and the scenario definitions are exported to you.' },
  { lead: 'Model-independent.', text: 'The agent is built so the underlying model can be swapped. That protects you from a single vendor\'s pricing and from a single vendor\'s outage.' },
  { lead: 'A named engineer, not a ticket queue.', text: 'Same person from audit to operation.' },
  { lead: 'We tell you when not to buy.', text: 'The disqualifiers on page 1 are applied at the audit, before anyone signs anything.' },
]

export const faqTitle = 'Frequently asked'
export const faq: Array<{ lead: string; text: string }> = [
  { lead: 'What if the agent gets something wrong?', text: 'It escalates on low confidence rather than improvising. The threshold is a setting, and we start it conservative. Prices, stock and availability are read live from your systems — the agent does not quote from memory.' },
  { lead: 'Will customers know they are talking to a machine?', text: 'Yes, disclosed up front. Concealment reads as dishonest and, for consumer-facing businesses in the EU, it is heading towards being unlawful under the AI Act. Disclosed agents that answer well outperform hidden ones that answer badly.' },
  { lead: 'We already have a chatbot and it was a disaster.', text: 'Usually a decision-tree bot with no access to live data, no escalation, and no owner after go-live. Bring the transcripts to the audit — they are the fastest way to show what changes.' },
  { lead: 'Can we start small?', text: 'That is the recommended path. One channel, one scenario, one month. Extend on evidence.' },
  { lead: 'Who owns what after termination?', text: 'You own the knowledge base, the conversation data and the scenario definitions. We own the platform code. Stated plainly in the contract.' },
]

