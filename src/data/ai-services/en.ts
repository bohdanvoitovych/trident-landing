import type { ServiceDetail } from './types'

export const en: ServiceDetail = {
  kicker: 'AI agents and assistants for business',
  title: 'AI agents that answer, qualify and close routine sales',
  lede: 'Agents that answer enquiries in seconds, in German, French, Italian and English, and write the result into your systems. They take the routine work; your people keep the complex deals.',
  intro: "What the agent is, which enquiries it takes over, and where it plugs into a Swiss company's existing stack.",
  gap: {
    title: 'The gap we close',
    intro:
      'Swiss SMEs do not lose deals to bad products. They lose them to silence, and Swiss data shows it more precisely than the figures usually quoted.',
    items: [
      {
        lead: '77 % of people in Switzerland want to find and book SME services online. Only 3 % of SMEs offer this in full.',
        text: 'That gap is the whole business case (localsearch × HSLU, KMU Digital Pulse 2025).',
      },
      {
        lead: 'No single channel dominates.',
        text: 'Swiss consumers split almost evenly: 16 % prefer e-mail, 16 % online chat, 14 % phone, and 77 % expect to choose the channel themselves (ServiceNow Consumer Voice Report 2024, Switzerland). E-mail has not been displaced here the way it has in messenger-first markets; other channels have joined it. Covering all of them with people is what costs money.',
      },
      {
        lead: 'Speed decides the outcome.',
        text: 'In the Lead Response Management study, the odds of qualifying a lead are roughly 21 times lower after a 30-minute response than after a 5-minute one. That is US data from 2007, not Swiss, but the direction is not in dispute. The Swiss data: 84 % rate fast, real-time support as important, and 64 % want self-service instead of waiting for a person.',
      },
      {
        lead: 'Search now starts with an AI assistant for part of the market.',
        text: '13 % of the Swiss population begin the search for an SME service in ChatGPT or Copilot rather than a search engine, and about 20 % used one in the past year to research SME services (KMU Digital Pulse 2025). A business that cannot answer a machine-generated enquiry in seconds is invisible to that segment.',
      },
      {
        lead: "An inside-sales employee on CHF 8'000 a month spends most of the day on the same twelve questions.",
        text: 'Opening hours, delivery time, price range, availability, "do you also deliver to Vaud".',
      },
      {
        lead: 'Customers write in German, French, Italian and English.',
        text: 'An enquiry in Italian at 21:00 usually waits until someone who reads Italian is in the office. WhatsApp reaches roughly 85 % of the Swiss population, so the channel exists. The staffing for it usually does not.',
      },
    ],
    close: 'A sales agent is a business process with a language model built in. It is neither a chat widget nor a model licence.',
  },
  does: {
    title: 'What the agent does',
    items: [
      { lead: 'Answers in seconds', text: 'Every channel, every hour, weekends and public holidays included, cantonal ones too.' },
      {
        lead: 'Qualifies',
        text: "Asks the qualifying questions your best salesperson asks, in the buyer's own language, and records the answers as structured fields.",
      },
      { lead: 'Recommends', text: 'Picks products, services or slots from your live catalogue, stock and price list, not from a static script.' },
      {
        lead: 'Handles the standard objections',
        text: 'Price, delivery time, competitor comparison, terms: answered from your approved wording, not improvised.',
      },
      { lead: 'Closes routine sales', text: 'Books the appointment, reserves the slot, issues the QR-bill or payment link, confirms by e-mail.' },
      {
        lead: 'Writes into your systems',
        text: "CRM: contact, company, deal, transcript, score, next step. ERP or accounting: the order, the delivery note, the invoice draft, priced on the customer's own terms. Written through an API where one exists, and through the interface where it does not. Your systems stay the source of truth.",
      },
      {
        lead: 'Sends what follows',
        text: 'Confirmation to the customer, the task to the person who owns the next step, the ETA when it moves, the reminder before the appointment, the invoice when it is due. The notification is part of the process, not a report about it.',
      },
      {
        lead: 'Hands over',
        text: 'On low confidence, an angry tone, or any topic on the escalation list, the agent stops and routes to a named human with the full context attached.',
      },
    ],
    close: 'Capacity is not the main point, but it matters on campaign days: hundreds of parallel conversations cost the same as one.',
  },
  fte: {
    title: 'Agent vs. an additional FTE',
    intro:
      'Indicative Swiss figures for an inside-sales or customer-service role, fully loaded (salary, social charges, workplace, holidays, sickness, recruitment).',
    rows: [
      { label: 'Availability', agent: '24/7, all year', hire: '~42 h/week, minus holidays and sickness' },
      { label: 'First response', agent: 'Seconds', hire: '15–30 min in office hours, next morning outside them' },
      { label: 'Languages', agent: 'DE, FR, IT, EN from day one', hire: 'One or two, realistically' },
      { label: 'Parallel conversations', agent: 'Hundreds', hire: '10–15 at a stretch' },
      { label: 'Running cost', agent: 'From ~CHF 450/month plus usage', hire: "CHF 90'000–120'000/year loaded" },
      { label: 'Ramp-up', agent: 'Days', hire: '3–6 months to full productivity' },
      { label: 'Consistency', agent: 'Same answer every time, versioned and auditable', hire: 'Varies by person, mood and day' },
    ],
    close:
      'How to read this table: the agent replaces the routine 70–80 % of the conversation volume, not the person. Complex negotiation, key accounts, anything with a signature or a liability attached stays human. Companies that get value here move the team to higher-value work rather than cutting it.',
  },
  channels: {
    title: 'Channels',
    items: [
      'WhatsApp Business',
      'Website widget',
      'E-mail',
      'Telegram',
      'Instagram / Facebook',
      'SMS',
      'Microsoft Teams (internal agents)',
      'Voice (see the limits below)',
    ],
    note: 'The channel mix is decided by the business, not by fashion. WhatsApp reaches almost everyone in private life, e-mail still carries most B2B traffic, and the web widget catches the buyer already on your page.',
  },
  integrations: {
    title: 'Integrations',
    lead: 'Anything with an API, plus a documented fallback for the systems that only export CSV at night.',
    groups: [
      { title: 'CRM', items: ['HubSpot', 'Salesforce', 'Pipedrive', 'Microsoft Dynamics', 'Zoho'] },
      { title: 'ERP / accounting', items: ['bexio', 'Abacus', 'SAP Business One', 'Odoo', 'Sage'] },
      {
        title: 'Booking and operations',
        items: ['Microsoft 365 / Outlook Calendar', 'Google Calendar', 'Industry booking systems'],
      },
      { title: 'Payment', items: ['Swiss QR-bill', 'TWINT', 'Stripe', 'PostFinance', 'Datatrans'] },
      {
        title: 'Healthcare',
        items: ['vitomed', 'amétiq siMed', 'AESKULAP', 'KISIM', 'Epic', 'Meierhofer', 'HL7/FHIR', 'DICOM', 'HIN-secured mail'],
        note: 'Plus the other Swiss practice systems. See the clinic cases below.',
      },
      {
        title: 'Logistics and field work',
        items: ['Fleet Planner', 'Driver Pro', 'Transfer', 'Back Office'],
        note: 'The 8Move product line, where the enquiry has to become a job, a route or a delivery.',
      },
    ],
    note: 'Where a system is pull-only by design (1C is the classic case), the agent writes into a staging layer and the ERP collects on its own schedule. We do not promise to write to systems that only accept scheduled imports.',
  },
  limits: {
    intro: 'We publish this because it is the fastest way to find out whether there is a project here at all.',
    items: [
      { title: 'Under ~150 enquiries a month', text: "The numbers don't add up. Fix the response process first and come back when volume grows." },
      {
        title: 'No written knowledge base and no one to write one',
        text: 'The agent inherits your quality. Nothing to inherit means nothing to deploy.',
      },
      {
        title: 'Regulated advice',
        text: 'Medical diagnosis, investment recommendation, legal opinion. The agent books, triages and prepares; it does not advise.',
      },
      {
        title: 'Swiss German voice',
        text: 'Text in Swiss German dialect works well. Dialect speech recognition remains the weak point of every vendor on the market, ours included. If your customers phone in Züridütsch, start with text channels and treat voice as phase two.',
      },
      {
        title: 'A pure headcount-cut mandate',
        text: 'Projects framed as "replace the team" underperform the ones framed as "take the routine off the team". We will say so at the first meeting.',
      },
    ],
  },
  delivery: {
    title: 'Deployment in six stages',
    intro:
      'Typical time from signature to go-live: three to five weeks. The limiting factor is rarely the technology. It is how quickly your team can answer questions about its own process.',
    stages: [
      {
        title: 'Audit and scenario selection',
        days: 'Days 1–3',
        text: 'We read your last 200 enquiries. Which ones repeat, which ones convert, where the process breaks. Output: the ranked list of conversations worth automating and the business case from [the economics](/pricing), completed with your figures.',
      },
      {
        title: 'Knowledge base',
        days: 'Days 3–10',
        text: 'Catalogue, prices, delivery terms, opening hours, FAQ, approved wording for the awkward questions. We assemble it from what you already have and interview whoever holds the rest in their head. This is the stage that decides quality, and it is the stage clients underestimate.',
      },
      {
        title: 'Channels and systems',
        days: 'Days 8–15',
        text: "WhatsApp Business verification, widget, CRM and ERP connections, calendar, payment. WhatsApp verification runs on Meta's timeline, not ours, so start it on day one.",
      },
      {
        title: 'Testing',
        days: 'Days 15–20',
        text: 'Your team tries to break the agent, in all four languages. Escalation rules, tone, edge cases, the deliberately hostile customer. Nothing goes live until your sales lead signs off on the transcripts.',
      },
      {
        title: 'Supervised launch',
        days: 'Days 20–25',
        text: 'Live traffic, every conversation reviewed daily, hand-over threshold set deliberately high at first and lowered as the transcripts justify it.',
      },
      {
        title: 'Operation and tuning',
        days: 'Ongoing',
        text: 'Monthly review: what the agent got wrong, what it should now handle, what changed in your prices and product range. First month of tuning included in the integration fee.',
      },
    ],
    close: 'First measurable results appear after two to four weeks of live operation. Anyone promising results in week one is quoting a demo, not a deployment.',
  },
  languages: {
    title: 'Languages',
    paragraphs: [
      'DE, FR, IT, EN from day one. Each language gets its own approved wording instead of a translation layer, because a French-speaking Swiss buyer and a German-speaking Swiss buyer do not respond to the same sentence.',
      'Where the platform side is 8Move, the full set is seven languages: EN, FR, DE, IT, ES, PT and AR with right-to-left layout. That matters for hospitality, logistics and any business with a non-Swiss workforce reading the same interface.',
      'Standard German text output is high quality. Written Swiss German dialect is handled. Spoken dialect recognition is the known weak spot; see [Where we say no](#limits) above.',
    ],
  },
  data: {
    title: 'Data protection',
    items: [
      {
        lead: 'revFADP and GDPR',
        text: 'Deployments comply with the revised Swiss Federal Act on Data Protection and, where you serve EU customers, with the GDPR. You get the processing agreement, the record of processing activities entry, and the privacy-notice wording for the channels. We draft them; they are not left to you.',
      },
      {
        lead: 'Hosting in Switzerland or the EU, your choice',
        text: 'Conversation data and the knowledge base sit in the region you pick. Documented sub-processors, listed in the contract.',
      },
      {
        lead: "Your data does not train anyone's model",
        text: 'Contractually excluded, with the vendor terms attached as an annex so you can verify it rather than trust it.',
      },
      {
        lead: 'Retention you control',
        text: 'Configurable retention windows, deletion on request, export on termination in an open format. No lock-in through your own data.',
      },
      {
        lead: 'Human hand-over is logged',
        text: 'Every escalation, every override, full transcript retained for audit. Where a conversation touches health, finance or employment data, the escalation threshold is set tighter by default.',
      },
    ],
  },
  guarantees: {
    title: 'What we guarantee',
    items: [
      {
        lead: 'Fixed integration fee',
        text: 'Quoted after the workshop, against a written scope. Scope changes are quoted separately, never absorbed silently into the monthly fee.',
      },
      {
        lead: 'Your systems stay yours',
        text: 'No proprietary lock-in on the CRM or ERP side. If you terminate, the knowledge base, the transcripts and the scenario definitions are exported to you.',
      },
      {
        lead: 'Model-independent',
        text: "The agent is built so the underlying model can be swapped. That protects you from a single vendor's pricing and from a single vendor's outage.",
      },
      { lead: 'A named engineer, not a ticket queue', text: 'Same person from the workshop to operation.' },
      {
        lead: 'We tell you when not to buy',
        text: 'The disqualifiers under [Where we say no](#limits) are applied at the workshop, before anyone signs anything.',
      },
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'What if the agent gets something wrong?',
        answer:
          'It escalates on low confidence rather than improvising. The threshold is a setting, and we set it conservatively at first. Prices, stock and availability are read live from your systems; the agent does not quote from memory.',
      },
      {
        question: 'Will customers know they are talking to a machine?',
        answer:
          'Yes, disclosed up front. Concealing it looks dishonest, and for consumer-facing businesses in the EU, the transparency rules of the AI Act now require disclosure. Disclosed agents that answer well outperform hidden ones that answer badly.',
      },
      {
        question: 'We already had a chatbot and it was a disaster.',
        answer:
          'Usually it was a decision-tree bot with no access to live data, no escalation, and no owner after go-live. Bring the transcripts to the workshop. They are the quickest way to see what would change.',
      },
      {
        question: 'Can we start small?',
        answer: 'That is the recommended path. One channel, one scenario, one month. Extend on evidence.',
      },
      {
        question: 'Who owns what after termination?',
        answer:
          'You own the knowledge base, the conversation data and the scenario definitions. We own the platform code. Stated plainly in the contract.',
      },
    ],
  },
  next: {
    title: 'Next',
    text: 'Free 45-minute workshop. Bring your enquiry volume, response times and channel mix. You leave with your own ROI model, whether or not you work with us. If the numbers hold, we build a working prototype on your own data within 10 working days.',
    economics: 'See the economics',
  },
}
