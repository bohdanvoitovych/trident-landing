export type CaseResult = {
  metric: string
  value: string
}

export type CaseTestimonial = {
  text: string
  author: string
  role: string
}

/** A free-form block of a long case study: a heading, paragraphs and/or a bullet list. */
export type CaseSection = {
  title: string
  paragraphs?: string[]
  items?: string[]
  /** Paragraphs that follow the bullet list. */
  closing?: string[]
}

/** A before/after comparison, one row per measured or modelled figure. */
export type CaseTable = {
  title: string
  beforeLabel: string
  afterLabel: string
  rows: Array<{ label: string; before: string; after: string }>
}

export type CaseData = {
  slug: string
  client: string
  industry: string
  services: string[]
  techStack: string[]
  hero: {
    title: string
    tagline: string
    image?: string
  }
  // Short cases fill challenge/approach/solution. Long cases leave them empty
  // and use `sections` instead.
  challenge?: string
  approach?: string
  solution?: string
  results: CaseResult[]
  /** Whether the figures were counted in production or calculated from real volumes. */
  evidence?: 'measured' | 'modelled'
  /** One-line note under the hero, e.g. how the case is written up. */
  note?: string
  sections?: CaseSection[]
  table?: CaseTable
  /** Paragraphs that explain the table, shown right below it. */
  afterTable?: string[]
  /** "What happens next": a lead-in sentence, then a numbered list. */
  nextIntro?: string
  next?: string[]
  /** "Where else this applies": a lead-in sentence, then a bullet list. */
  elsewhereIntro?: string
  elsewhere?: string[]
  /** A closing sentence after the "Where else this applies" list. */
  elsewhereOutro?: string
  testimonial?: CaseTestimonial
  relatedCases: string[]
  meta: {
    title: string
    description: string
  }
  /** ISO date the case study was written/added to the site (from git history), not the project's launch date. */
  publishedAt: string
}

export const cases: CaseData[] = [
  {
    slug: 'post-acute-clinic-network',
    publishedAt: '2026-10-14',
    client: 'Post-acute clinic network, Switzerland',
    industry: 'Healthcare · Switzerland',
    services: ['ai-services', 'software-engineering'],
    techStack: [],
    hero: {
      title: 'Patient admission, documentation and billing for a post-acute clinic network',
      tagline:
        'From however the patient arrives to a signed discharge letter and a coded invoice — without anyone retyping a document',
    },
    note: "A delivered project for a Swiss post-acute clinic network, written up without the client's name. Quality was measured end to end on real material — 8 reference letters and 5 nursing charts; the time figures are the operating targets the system is run against while the manual baseline is formally timed on site.",
    results: [
      { metric: 'Admission: bundle → patient record', value: 'over 1 h → ~5 min' },
      { metric: 'Patient identified from the bundle', value: '8 of 8 (was 5 of 8)' },
      { metric: 'Invoice ready for the ERP', value: '~2 days (was 10–15)' },
    ],
    sections: [
      {
        title: 'The business',
        paragraphs: [
          'A network of post-acute and rehabilitation clinics in Switzerland, operating medicalised temporary-care units across several sites.',
          'Each unit admits patients of retirement age for 24 hours to 15 days: people who need medical and nursing supervision, but not an acute bed. The unit exists to keep those patients out of an acute hospital, and to give the ones leaving an acute hospital somewhere to land.',
          'Clinically, most stays are the second half of an episode that started somewhere else. Administratively they are a separate billing episode: the referring institution bills its own days, the clinic bills its own — under SwissDRG (ICD-10-GM diagnoses, CHOP procedures, forfait par cas driven by length of stay, plus separately billable drugs and procedures).',
          'Each site runs its own electronic patient record and its own discharge-letter form, and the finance side runs on a separate ERP. Neither exposes an API to a third party.',
        ],
      },
      {
        title: 'Before the change: there is no single front door',
        paragraphs: ['A patient can arrive through any of these, and the clinic controls none of them:'],
        items: [
          'Transfer from an acute hospital — transfer letter, discharge summary, medication sheet, labs, imaging and specialist reports',
          'Transfer from another clinic (surgical, orthopaedic, psychiatric) — operative report, post-op instructions, prescriptions',
          'Direct referral by a treating physician — a referral note or prescription, sometimes a single page, sometimes a fax',
          'From a home-care organisation — health booklet, care plan, social context',
          'From a nursing home — resident record extract, standing medication',
          "From the on-site emergency permanence — the permanence's own consultation record",
          "Re-admission of a known patient — the clinic's own records from the previous stay",
          'Family or the patient themself — whatever paper they happen to be holding',
        ],
        closing: [
          'None of it arrives as data. There is no HL7 or FHIR link with any referring institution — the handover is document-oriented, by e-mail or on paper.',
          "And the bundle fights back. It overlaps with itself: transfer letter ≈ discharge notice ≈ medical file, all restating the same diagnoses and medications, so a merge is needed rather than a concatenation. Part of it is scanned, and OCR mangles exactly the fields that matter for identity and billing — a surname comes out as DUPUTS instead of DUPUIS. And it frequently contains documents from a different episode: a stay three months ago that ended at home, filed next to today's transfer.",
        ],
      },
      {
        title: 'So intake is a person reading a pile and retyping it',
        paragraphs: [
          'The coordinating nurse reads the bundle, decides in their head which document is current, splits it into parts and pastes them into the patient record section by section — anamnesis here, discharge medication there, antecedents somewhere else.',
          "Over an hour per admission, unrepeatable, and dependent on which coordinator is on duty. On a run of eight real files, three could not even establish the patient's identity from the bundle — because the identifying document was not among the ones uploaded, or because OCR had corrupted the name.",
        ],
      },
      {
        title: 'The discharge letter is assembled by hand from two halves',
        paragraphs: [
          "At discharge the coordinator writes the letter by combining the incoming documents with everything the team recorded during the stay — daily notes, nursing notes, medication starts and stops, physiotherapy assessments, the autonomy grid. A two-week stay's nursing chart runs to ~22 000 characters of prose. What reaches the letter is what somebody had time to find in it.",
          "Reading one real stay's chart against its own letter, we counted 11 hygiene and daily-living entries describing a trajectory — help with the toilet and dressing in week one, showering unaided by day 16 — and both physiotherapy assessments (TUG 45 s → 15 s, SPPB 6/12, Tinetti). A hand-written letter prints one or two of those. The fall-risk trajectory stays in the chart and never reaches whoever receives the patient next.",
        ],
      },
      {
        title: 'The invoice leaves the building',
        paragraphs: [
          'When the letter is ready it is sent to an external billing team, which codes it under SwissDRG and sends an invoice back; someone then uploads that invoice into the finance system by hand. The billers never see the treatment context, the round trip costs days, and nothing links the invoice back to the stay that produced it.',
        ],
      },
      {
        title: 'What we built',
        paragraphs: [
          "Aida — a standalone admission, documentation and billing assistant for the unit, not a module inside the clinic's record system.",
          "It holds its own data and writes the finished result into the clinic's existing systems through UI automation on the coordinator's own workstation. No vendor integration was required, no system was replaced, and the clinic can stop using it without unwinding anything.",
        ],
      },
      {
        title: '1. Admission — whatever door the patient came through',
        paragraphs: [
          'The coordinator uploads everything that arrived with the patient, in whatever shape it arrived: a transfer letter and its annexes, a one-page referral from a treating physician, a home-care booklet, a scanned admin sheet, a prescription with a QR code, prior records of a returning patient.',
          'Aida then does the reading:',
        ],
        items: [
          'parses the whole bundle — anamnesis, diagnoses, medication schedule, labs, procedures, and the administrative identifiers billing needs;',
          'deduplicates overlapping documents, merging restatements of the same diagnoses and drugs instead of stacking them;',
          'classifies each document by type, and identifies the admission route — transfer versus direct referral — because that decides which document is the primary source;',
          'resolves which episode is current, from destination and stay dates, so an earlier stay that ended at home is filed as an antecedent rather than mixed into today’s admission;',
          'matches the patient — and where the match is uncertain, asks a human instead of guessing, which is the only acceptable behaviour when the alternative is attaching a document to the wrong record.',
        ],
        closing: [
          "The result is a structured clinical record — FHIR-shaped: the stay as an Encounter, medications as MedicationStatement, reports as DiagnosticReport — and the same content written into the clinic's patient record. No splitting by hand, no Ctrl+V.",
          "The coordinator's role moves from data entry to checking a parse.",
        ],
      },
      {
        title: '2. The stay is recorded as it happens',
        paragraphs: [
          'Daily notes, nursing notes, medication starts and stops, labs and procedures accumulate against the stay. Where the team dictates, speech-to-text handles French clinical vocabulary, drug names and anatomy; the clinician confirms the formatted record before anything is written.',
          'Incoming documents during the stay — a lab result, an external specialist’s report — go through the same intake: classified, matched to the patient, the treating physician notified, then filed.',
        ],
      },
      {
        title: "3. The discharge letter is drafted on the site's own form",
        paragraphs: [
          "Not a generic summary. Each site's real template: the structured eight-section form used at one site (motif and diagnoses, synthesis of the stay, other care, discharge medication with drugs introduced and stopped, care network, autonomy, annexes, administrative details) with the patient identity in the header and footer of every page, two signatories and the legal notice; the classic letter form used at another. A third site is added by changing a setting, not by shipping code.",
          'Output is an editable document, on purpose — the physician revises before signing, and a locked PDF would break that.',
        ],
      },
      {
        title: '4. The physician edits and signs in Aida',
        paragraphs: [
          "The reference letters contain things no source document holds: why a statin was switched mid-stay, which medication is EN RÉSERVE, the synthesis of the problem list. That is the physician's knowledge. Aida produces the draft, with source-to-section traceability, and the physician completes and confirms it. Only then is it written into the clinic's record.",
        ],
      },
      {
        title: '5. The invoice comes from the same record',
        paragraphs: [
          'ICD-10-GM and CHOP coding, DRG grouping, forfait par cas from the admission and discharge dates, separately billable drugs and procedures, billing identifiers taken from the administrative documents captured at intake — then validated against the Swiss electronic-billing validators (Sumex1 drgValidator) before a human ever sees it. Finance reviews coding and amounts in Aida and confirms; delivery into the ERP follows. The external billing hop disappears.',
        ],
      },
    ],
    table: {
      title: 'Results',
      beforeLabel: 'Before',
      afterLabel: 'After',
      rows: [
        { label: 'Admission: bundle → patient record', before: 'over 1 h of reading, splitting and retyping', after: '~5 min of reviewing a parse' },
        { label: 'Patient identified from the bundle', before: '5 of 8 files on a real run', after: '8 of 8 — identity taken from all documents, uncertain matches escalated' },
        { label: 'Assembling the discharge letter', before: '~90 min per stay', after: '~20 min of editing and signing' },
        { label: 'Letter available to the next care provider', before: '3–5 days after discharge', after: 'same day' },
        { label: 'Coordinator time on administrative work', before: '~2 h / day', after: '~40 min / day' },
        { label: 'Invoice ready for the ERP', before: '10–15 days (external billing loop)', after: '~2 days, pre-validated' },
        { label: 'Invoices returned by the payer', before: '~1 in 8', after: '~1 in 25' },
      ],
    },
    nextIntro: 'The sequence deliberately kills the biggest pain before touching the record system at all.',
    next: [
      'Voice for physicians — the consultation is dictated, formatted into a daily note with prescriptions and medication changes, confirmed by the physician, then written to the record. No more doing the work and then recording it.',
      'Voice for nurses — the same for nursing interventions and observations.',
      'Fully automated intake of incoming results during the stay, with physician notification.',
      'Direct delivery of the validated invoice into the ERP, without the manual upload.',
    ],
    elsewhereIntro:
      'Wherever a stay — not a single consultation — has to become a coded, signed, auditable record, and the patients arrive through several uncontrolled doors:',
    elsewhere: [
      'post-acute, rehabilitation and transitional-care units',
      'nursing homes, where the resident record is the heaviest administrative item',
      'home-care organisations, where documentation happens between visits',
      'any provider whose record system has no API and whose billing is outsourced',
    ],
    relatedCases: ['clinic-voice-documentation'],
    meta: {
      title: 'Post-acute clinic: admission to billing | Trident Software',
      description:
        'From however the patient arrives to a signed discharge letter and a coded invoice, with no retyping. Admission from over an hour to about five minutes.',
    },
  },
  {
    slug: 'clinic-voice-documentation',
    publishedAt: '2026-10-14',
    client: 'Multi-disciplinary practice, Switzerland',
    industry: 'Healthcare · Switzerland',
    services: ['ai-services', 'software-engineering'],
    techStack: [],
    hero: {
      title: 'Voice documentation for a multi-disciplinary clinic',
      tagline: 'From a recorded consultation to a coded TARDOC invoice, without the doctor typing it',
    },
    note: "A delivered project for a Swiss multi-disciplinary practice, written up without the client's name. The before-figures are the clinic's own measured baseline. Named references are given under NDA on request.",
    results: [
      { metric: 'Physician working time spent documenting', value: '35 % → 15 %' },
      { metric: 'Average handling time per invoice', value: '75 → 12 min' },
      { metric: 'Average time to payment', value: '~60 → ~17 days' },
    ],
    sections: [
      {
        title: 'The business',
        paragraphs: [
          'A private multi-disciplinary practice in Switzerland. Several physicians across different specialties work under one roof, alongside non-medical services—physiotherapy, nutrition, aesthetics, and wellness offerings that sit outside basic health insurance.',
          'That mix makes administration hard. A single patient can generate services billed three different ways in the same visit: reimbursed under LAMal, covered by supplementary insurance, or paid privately.',
        ],
      },
      {
        title: 'Before the change: documentation eats a third of clinical time',
        paragraphs: [
          '35% of physician working time goes into documenting consultations. Not treating patients — writing about having treated them. Notes typed between appointments, finished in the evening, and increasingly written from memory hours after the fact.',
        ],
      },
      {
        title: 'The billing desk works as a translation layer',
        paragraphs: [
          'The person responsible for invoicing could not bill from the notes as written. Diagnoses stated in shorthand, procedures implied rather than recorded, missing detail that determines which tariff position applies.',
          "So every ambiguous consultation became a conversation: catch the doctor between patients, ask what exactly was done, ask which diagnosis was retained, reconstruct the visit from two people's memory.",
          'Average handling time per invoice: 75 minutes, counting the chasing, the clarification and the correction.',
        ],
      },
      {
        title: 'Payers push back, and payment waits',
        paragraphs: [
          'Roughly one invoice in eight came back — queried, corrected, resubmitted. Each return restarts the cycle and pushes payment further out.',
          'The clinic bills a mix of payers, each with its own rules on what is admissible and how it must be coded: basic and supplementary health insurers, accident insurance including SUVA, disability and military insurance, cantonal social services, and patients paying directly for deductibles and for the non-medical services.',
          'That mix is why a note that merely reads well is not enough. It has to be codable. Average time from consultation to money received: around 60 days.',
        ],
      },
      {
        title: 'What we built',
        paragraphs: [
          "A voice documentation assistant — a standalone system, not a module inside the clinic's software.",
          'It runs on its own and delivers its output into the systems the clinic already uses. Nothing in the existing stack had to be replaced, rebuilt or opened up for the assistant to work, and the clinic can stop using it without unwinding anything.',
        ],
      },
      {
        title: '1. The doctor records',
        paragraphs: [
          'The consultation is recorded — the exchange with the patient, and the exchanges with staff around the case. No template to fill, no dictation format to learn. The doctor works the way they already work.',
        ],
      },
      {
        title: '2. The assistant transcribes',
        paragraphs: [
          'Speech-to-text across the languages of the practice, with medical vocabulary, drug names, and anatomical terms recognized rather than approximated.',
        ],
      },
      {
        title: '3. It produces two documents, not one',
        paragraphs: [
          "The consultation report — structured as the clinic's own template requires: history, findings, diagnosis, procedures performed, plan.",
          'The TARDOC invoice, coded. Positions derived from what was actually said and done in the recording, respecting the 2026 rules — including which services are billed individually and which trigger an outpatient flat rate, the distinction that produces most of the rejections.',
        ],
      },
      {
        title: '4. It delivers into the medical information system',
        paragraphs: [
          "Reported and coded services arrive in the clinic's MIS as structured records. The assistant holds its own data and pushes the finished result across — no retyping, no copy-paste between two screens, and no dependency on the MIS vendor's roadmap.",
        ],
      },
      {
        title: '5. It notifies the billing desk',
        paragraphs: [
          'The person responsible receives the invoice ready for review, with the transcript attached. Where the assistant is uncertain — an ambiguous procedure, a missing detail that changes the tariff position — it flags the specific point rather than producing a confident guess.',
          'The billing desk stops interrogating doctors and starts reviewing drafts.',
        ],
      },
    ],
    table: {
      title: 'Results',
      beforeLabel: 'Before',
      afterLabel: 'After',
      rows: [
        { label: 'Share of physician working time spent documenting', before: '35 %', after: '15 %' },
        { label: 'Average handling time per invoice', before: '75 min', after: '12 min' },
        { label: 'Average time to payment', before: '~60 days', after: '~17 days — 3.5× faster' },
        { label: 'Physician cost per consultation', before: '~CHF 58', after: '~CHF 45 — 23.5 % lower' },
      ],
    },
    afterTable: [
      'The middle row is the one the clinic felt first: the billing desk went from reconstructing consultations to checking them.',
      'The third row compounds. An invoice that is correct on first submission is not rejected, not corrected, not resubmitted — and the 3.5× improvement comes mostly from removing that loop, not from making any single step faster.',
      'Why the first row is a cost figure, not a comfort figure. Documentation is paid physician time. Moving it from 35 % to 15 % of the working year does not make the doctor cheaper — it changes what share of that salary produces consultations. Clinical time goes from 65 % to 85 % of paid hours, so the same cost now covers 30.8 % more consultations, and the physician cost carried by each one falls by 23.5 %.',
      'In francs, for one physician: a loaded cost of CHF 220 000 a year (an employed specialist in a Geneva practice — salary around CHF 185 000 plus social charges), 42 hours a week over 46 weeks, and a 20-minute consultation. That is 3 767 consultations a year before and 4 927 after — CHF 58.4 down to CHF 44.7 of physician cost per consultation, a saving of CHF 13.70 each. Where the appointment book cannot absorb the extra capacity, the same twenty points show up as 386 physician hours a year handed back, roughly CHF 44 000 per doctor — a fifth of an FTE.',
      'Salary basis: employed Swiss specialists sit at a median of CHF 140 000–172 000 and physicians in their own practice average around CHF 320 000; CHF 220 000 loaded is the middle of that range for a private multi-disciplinary practice. Substitute your own figure — the 23.5 % holds whatever the salary is, because it comes from the ratio of clinical time, not from its price.',
      'The first row is why the physicians agreed to it. Twenty points of working time returned to clinical work — for a practice of several doctors, that is capacity that would otherwise have to be hired.',
    ],
    nextIntro:
      'With documentation working, the clinic moved to the other end of the patient journey: getting the appointment booked at all. An enquiry arriving by phone at 19:00, or by message on a Sunday, waits until the reception desk opens. The patient does not wait — they call the next practice. The clinic is now automating appointment intake with a chatbot and an AI voice assistant. Three stated objectives:',
    next: [
      'Response time under 10 seconds, on every channel',
      'Bookings accepted outside working hours — evenings, weekends, holidays',
      'Reception costs reduced — not by removing the desk, but by removing the call volume that consists of "do you have anything Thursday afternoon"',
    ],
    elsewhereIntro:
      'The same machinery applies wherever a spoken professional interaction has to become a coded, billable, auditable record:',
    elsewhere: [
      'specialist practices and group clinics',
      'physiotherapy and rehabilitation, where session documentation drives reimbursement',
      'veterinary practices',
      'home care organisations, where documentation happens between visits, in the car',
    ],
    relatedCases: ['post-acute-clinic-network'],
    meta: {
      title: 'Clinic voice documentation | Trident Software',
      description:
        'From a recorded consultation to a coded TARDOC invoice, without the doctor typing it. Physician documentation time from 35 % to 15 % of the working year.',
    },
  },
  {
    slug: 'fiduciary-mail-and-receipts',
    publishedAt: '2026-10-14',
    client: 'Fiduciary, Switzerland',
    industry: 'Professional services · Switzerland',
    services: ['ai-services', 'software-engineering'],
    techStack: [],
    hero: {
      title: 'Fiduciary — Incoming Mail and Expense Receipts, Read by Machine',
      tagline:
        "Two paper queues that ran through one operator's eyes, replaced by scan-and-route and photo-and-post",
    },
    evidence: 'modelled',
    note: "Two delivered workstreams for a Swiss fiduciary, written up without the client's name. Both are in production. The process changes are what was delivered; the figures in Results are modelled from the firm's volumes and marked as such, pending the client's own measurement.",
    results: [
      { metric: 'Operator time on the post, per day', value: '~2 h 30 → ~40 min' },
      { metric: 'Operator time on receipts, per month', value: '~105 h → ~12 h' },
      { metric: 'Operator hours returned, per month', value: '~135 h ≈ 0.8 FTE' },
    ],
    sections: [
      {
        title: 'The business',
        paragraphs: [
          'A Swiss fiduciary — accounting, payroll and tax for a book of SME clients, run in French with clients writing in several languages.',
          "Two things about that business model matter here. First, the firm keeps its clients' books, so the raw material is other people's paper: supplier invoices, till receipts, official letters. Second, many client companies use the firm's address as their official correspondence address, so the post that arrives each morning is not the fiduciary's own mail — it is the mail of dozens of separate legal entities, mixed in one pile.",
          'Both facts converge on the same bottleneck: someone has to read every document before anything can happen.',
        ],
      },
      {
        title: 'Before the change: the morning post',
        paragraphs: [
          'Every day an operator opened the incoming mail, scanned it by hand, and then read each document to work out two things: which client it belonged to, and which manager inside the firm was responsible for that client. Then they judged its urgency and routed it—notify the manager, or forward the document to the end client.',
          'Slow, and worse, forgettable. A letter that needed an answer within days could sit in the wrong pile, and nothing in the process would notice. Deadlines in this profession are statutory, and the failure mode is not embarrassment; it is liability.',
        ],
      },
      {
        title: 'The expense receipts',
        paragraphs: [
          'Clients sent their till receipts as phone photos or physically by post. An operator digitized each one, then identified the merchant, the amount and the VAT, assigned the accounting category, noted how it was paid — cash, company card, personal card — and keyed all of it into the system.',
          'Entirely manual, and error-prone in a specific way that is easy to underestimate: a meaningful share of receipts arrived in foreign languages and non-Latin scripts — Cyrillic, Chinese, Arabic. An operator who cannot read the script cannot verify what they are typing, and the transcription error rate rises exactly where the audit trail matters.',
        ],
      },
      {
        title: 'One bottleneck, two queues',
        paragraphs: [
          'Both queues consumed the same scarce resource — a person reading documents — and neither task used any judgement that a trained accountant is paid for. The firm was buying professional attention and spending it on data entry.',
        ],
      },
      {
        title: 'What we built',
        paragraphs: ['Two applications, delivered separately, feeding the same accounting system.'],
      },
      {
        title: '1. Mail: scanning becomes the only manual step',
        paragraphs: [
          'A letter arrives, and the operator scans it, which a multifunction scanner makes close to instant. Nothing else about the letter is a human task any more.',
        ],
      },
      {
        title: '2. The client and the responsible manager are identified from the content',
        paragraphs: [
          "OCR reads the scan, and the application matches the document to the client company from what is written on it, then looks up the assigned manager in the firm's internal database. The two questions that used to require reading the whole letter are answered before anyone sees it.",
        ],
      },
      {
        title: '3. A summary and a priority, not a scanned blob',
        paragraphs: [
          'An AI reads the letter and produces a short, clear summary of what it says, plus a priority estimate — normal, high, urgent. The manager reads that summary first, and it makes a pile of scans triageable at a glance.',
        ],
      },
      {
        title: '4. Then one of two things happens automatically',
        items: [
          'The letter needs the firm to act. A task is created in the internal platform and the responsible manager is notified immediately, with the summary and the scanned documents attached.',
          'The letter needs the client to act — most often, to pay an invoice. The application e-mails the client directly with the scan attached and a plain instruction to proceed with payment. The manager is not involved at all: the chain runs from paper in an envelope to a notified client without a person in the middle.',
        ],
      },
      {
        title: '5. Receipts: captured at the moment of purchase',
        paragraphs: [
          'A mobile application. The client photographs the receipt when they get it, instead of keeping paper in a wallet to archive and send weeks later — which is also the point at which receipts get lost.',
        ],
      },
      {
        title: '6. OCR plus a domain model does the accounting reading',
        paragraphs: [
          'Integrated OCR extracts the merchant, the date, the total and the VAT. A business-domain AI then proposes the accounting category — meals, transport and the rest — along with the other parameters the posting needs, including how it was paid.',
          'Multi-language OCR is what makes the non-Latin receipts a non-issue: the script stops being a barrier to accurate capture, and with it goes the class of transcription errors nobody downstream could catch.',
        ],
      },
      {
        title: '7. Straight into the accounting system',
        paragraphs: [
          "The digitised receipt and the recognised data go into the firm's accounting system without manual re-entry. Expense data is available in the accounts in real time rather than at month end, which changes what the fiduciary can tell a client and when.",
          'One constraint shaped the design. Swiss rules allow most operational documents — supplier invoices, till receipts, bank statements — to be destroyed after scanning, but only where the scanning procedure is documented and internally controlled, and archiving satisfies GeBüV: unalterable, available and systematically filed for the ten-year retention period. The tax authority can still ask for an original in a VAT audit, and instruments with pledging character — contracts, securities, notarial deeds — are excluded from replacement scanning entirely. So the system was built to produce an archive that survives an audit, not merely a searchable folder.',
        ],
      },
      {
        title: 'The volumes the results are calculated on',
        paragraphs: [
          "A book of roughly 120 SME clients, of which some 40 use the firm's address as their correspondence address. That produces about 50 letters a working day, and about 2 500 expense receipts a month across the book. An operator's loaded cost is taken at CHF 55 an hour.",
        ],
      },
    ],
    table: {
      title: 'Results',
      beforeLabel: 'Before',
      afterLabel: 'After',
      rows: [
        { label: 'Handling one incoming letter', before: '~3 min — open, scan, read to find the client, look up the manager, judge urgency, route', after: '~30 s of scanning; everything after it is automatic' },
        { label: 'Operator time on the post, per day', before: '~2 h 30', after: '~40 min, exceptions included' },
        { label: 'Letters that reach a manager at all', before: '100 %', after: '~65 % — the rest are client-action letters routed straight to the client' },
        { label: 'Time from a letter arriving to the right person knowing about it', before: 'same day if the pile was worked through, next day if not', after: 'minutes, and urgent items are flagged first' },
        { label: 'Documents lost or misrouted', before: '1–2 a month, found late', after: 'none: every letter scanned, summarised, archived, traceable' },
        { label: 'Handling one expense receipt', before: '~2 min 30 — read merchant, amount, VAT, assign category and payment method, key it in', after: '~40 s, and only on the ~15 % the model flags for review' },
        { label: 'Operator time on receipts, per month', before: '~105 h', after: '~12 h' },
        { label: 'Field-level errors on foreign-script receipts', before: '~3–4 % of captured fields', after: 'under 1 %' },
        { label: 'Expense data available in the accounts', before: '3–4 weeks — whenever the batch was worked through', after: 'same day' },
        { label: 'Client effort per month on receipts', before: '30–45 min collecting, photographing and sending', after: '~10 s per receipt, at the till' },
        { label: 'Operator hours returned, per month', before: '—', after: '~135 h ≈ CHF 7 400 ≈ 0.8 FTE' },
      ],
    },
    next: [
      'Payment initiation from a recognised invoice — the step immediately after the client notification, with approval kept human.',
      'Confidence thresholds and exception review — routing low-confidence extractions to an operator queue rather than letting them through silently, as volume grows.',
      'Extending capture to the rest of the document mix — bank documents, contracts and official forms have different rules and different risks; receipts and letters were the right two to do first.',
      'Client-side visibility — letting the client see what arrived at their correspondence address, and what was done with it, without asking the firm.',
    ],
    elsewhereIntro:
      "Wherever a professional firm's raw material is other people's paper, arriving unpredictably and requiring a person to read it before anything can be filed:",
    elsewhere: [
      'fiduciaries, accountants and payroll bureaux',
      'law firms and notaries handling correspondence for clients',
      "domiciliation and company-formation services, whose address is the client's official address by design",
      'property management, where incoming mail concerns a building rather than a company',
      'any back office where an operator sorts documents to find the responsible colleague',
    ],
    relatedCases: [],
    meta: {
      title: 'Fiduciary mail & receipts, machine-read | Trident Software',
      description:
        'Two paper queues replaced by scan-and-route and photo-and-post. About 135 operator hours a month returned, modelled from the firm’s volumes.',
    },
  },
  {
    slug: 'warranty-control-component-maker',
    publishedAt: '2026-10-14',
    client: 'Component manufacturer, Italy',
    industry: 'Manufacturing, connected equipment · Italy',
    services: ['embedded-and-iot', 'software-engineering'],
    techStack: [],
    hero: {
      title: 'Warranty control for a coffee-equipment component manufacturer',
      tagline: 'From paying for every claim to measuring the cause — and selling the measurement',
    },
    evidence: 'measured',
    note: "A delivered project for an Italian component manufacturer, written up without the client's name. The warranty and water figures come from the client's own accounts and field data; industry comparison figures are published benchmarks and are marked where used.",
    results: [
      { metric: 'Warranty service cost, share of revenue', value: '1.37 % → 0.51 %' },
      { metric: 'Revenue lines', value: 'one → three' },
      { metric: 'Failures caused by water, not defects', value: 'up to 85 %' },
    ],
    sections: [
      {
        title: 'The business',
        paragraphs: [
          'An Italian manufacturer of fluid-control components — solenoid valves, flow meters, pressure regulators and filters — supplied to OEMs that build professional coffee and espresso machines, and to adjacent appliance makers.',
          "The components are certified, tested and sold in volume to machine builders. They then disappear into a machine, which is sold to a café, a restaurant or an office, and installed on whatever water supply that building happens to have. The manufacturer's warranty obligation follows the component all the way down that chain, into buildings it has never seen and water it has never measured.",
          'Warranty service cost 1.37% of company revenue.',
        ],
      },
      {
        title: 'Before the change: up to 85 % of the damage happened outside the factory',
        paragraphs: [
          'Field analysis attributed up to 85% of component failures to water—not manufacturing defects. Water outside specification, filters left past their capacity, purifiers and filtration stations never serviced.',
          'The physics is well documented. The specialty coffee standard puts total dissolved solids in a working range of roughly 75–250 ppm with a target near 150, calcium hardness at 50–175 ppm, alkalinity at 40–75 ppm. Above that, scale forms fast: it restricts flow, coats heating elements, and attacks exactly the parts this company makes — pumps, valves, and flow meters. Below it, water turns aggressive in a different way. Either end of the range ends as a warranty claim against the component.',
        ],
      },
      {
        title: 'The warranty gap',
        paragraphs: ['Three facts that together guarantee the manufacturer pays:'],
        items: [
          'The contract says: water must stay within specification — every supply agreement names the limits the machine may run on',
          'The reality is: nothing measures it. There is no record of what actually ran through the machine',
          'The cost is: every claim gets paid. With no evidence, there are no grounds to refuse a bad-water repair',
        ],
        closing: [
          'A returned valve tells you it is scaled. It does not tell you whose fault that is — and in the absence of proof, the answer defaults to the party with the warranty obligation.',
        ],
      },
      {
        title: 'Service was scheduled by the calendar, not by the water',
        paragraphs: [
          'Filter changes and maintenance visits were planned by elapsed time or by machine lifetime. A machine in a hard-water town pulling 300 liters a day and a machine on soft municipal supply pulling 40 got the same service interval. One was serviced far too late, the other too often, and neither schedule reflected what the water was doing.',
        ],
      },
      {
        title: 'R&D was working from returns and anecdote',
        paragraphs: [
          'The only field signal reaching engineering was the broken part in a box, plus whatever the service technician chose to write on the form. No operating history, no water history, no duty cycle. Design decisions about materials and tolerances were being taken on the least informative data the company could have had.',
        ],
      },
      {
        title: 'What we built',
        paragraphs: [
          "WaterTDS — a measurement device, a telemetry platform, and two portals, adapted so that the manufacturer's own components sit inside the measured circuit.",
        ],
      },
      {
        title: '1. The TDSBot in the water line',
        paragraphs: [
          "A device installed alongside the equipment the manufacturer already fits: TDS measured before and after the filter, plus flow and temperature. That layout is the whole point — measuring in and out of the filter separates the incoming supply from the filter's condition, so an exhausted cartridge shows up as a rising outlet reading rather than a failed machine six weeks later.",
          'The device streams telemetry continuously. No technician visit is required to read it, and no one has to remember to take a sample.',
        ],
      },
      {
        title: '2. The platform behind it',
        paragraphs: [
          'Telemetry lands in a platform that turns readings into events: water drifting out of specification, a filter approaching capacity, consumption that no longer matches the service plan, a temperature profile that indicates scale. Alerts carry the cause, not just the symptom — that distinction is what makes them actionable for a service company and admissible for a warranty department.',
        ],
      },
      {
        title: '3. The equipment portal for the manufacturer',
        paragraphs: [
          'Every installed unit with its full operating history: water in and out, liters passed, temperature, filter status, alerts and interventions. When a claim arrives, the warranty department opens the record for that machine and reads what the water was doing in the weeks before the failure.',
        ],
      },
      {
        title: '4. The B2B portal for service companies',
        paragraphs: [
          'The maintenance companies that actually change the filters got their own workspace: the fleet they are responsible for, jobs generated from the data rather than from a calendar, and a history that shows what was done and when. Their work stops being invisible to the manufacturer — and their punctuality becomes measurable.',
        ],
      },
      {
        title: '5. The predictive-maintenance model',
        paragraphs: [
          'Service is scheduled by liters passed and measured water quality, not by lifetime. The model estimates when a filter will exhaust and when scale risk crosses a threshold for that specific installation, and raises the job before damage occurs rather than after.',
        ],
      },
      {
        title: '6. The warranty evidence path',
        paragraphs: [
          'For the OEM the manufacturer supplies, an API delivers the operating record behind a claim. Valid claims move faster because the evidence is already assembled; unsupported claims can be challenged with a documented water history. What changes is not the warranty terms but who carries the cost of running a machine on bad water.',
        ],
      },
    ],
    table: {
      title: 'Results',
      beforeLabel: 'Before',
      afterLabel: 'After',
      rows: [
        { label: 'Warranty service cost', before: '1.37 % of revenue', after: '0.51 % of revenue' },
        { label: 'Evidence behind a warranty decision', before: 'the returned part, and an opinion', after: 'TDS in and out, litres, temperature and filter history for that unit' },
        { label: 'Service scheduling', before: 'calendar and machine lifetime', after: 'litres passed and measured water quality' },
        { label: 'Who pays for out-of-spec water', before: 'the component manufacturer, by default', after: "the machine's owner, on evidence" },
        { label: 'Revenue lines', before: 'one — components', after: 'three — components, TDSBot devices, SaaS subscription' },
        { label: 'Field data reaching R&D', before: 'returns and technician notes', after: 'continuous operating and water history across the installed base' },
      ],
    },
    next: [
      'Wider component coverage — extending the measured circuit beyond the first component families, so more of the warranty exposure sits inside the evidence.',
      'Failure-mode models per component, trained on the accumulating field history rather than on bench testing alone.',
      'Service-company scoring in the B2B portal — punctuality and quality of intervention as a visible metric, since the data now supports it.',
      "Offering the platform to machine manufacturers as their own warranty instrument, not only as the component supplier's.",
    ],
    elsewhereIntro:
      'Wherever a manufacturer carries a warranty obligation for a product that fails because of how it is used, in conditions the manufacturer cannot see:',
    elsewhere: [
      'water-carrying appliances of every kind — ice machines, dishwashers and ware-washers, steam ovens, drinking-water systems',
      'filtration and treatment vendors, whose product is the thing being consumed',
      "any component supplier whose parts fail inside someone else's machine",
      'equipment rental and managed-service fleets, where maintenance timing decides the margin',
    ],
    elsewhereOutro:
      'The pattern underneath is the same in each: measure the operating condition, and the argument about who pays stops being an argument.',
    relatedCases: [],
    meta: {
      title: 'Coffee-equipment warranty control | Trident Software',
      description:
        'From paying for every claim to measuring the cause. Warranty service cost from 1.37 % to 0.51 % of revenue, and a cost centre turned into a product line.',
    },
  },
  {
    slug: 'building-materials-order-to-load',
    publishedAt: '2026-10-14',
    client: 'Construction-materials logistics · Switzerland, cross-border with France',
    industry: 'Construction-materials logistics',
    services: ['ai-services', 'software-engineering'],
    techStack: [],
    hero: {
      title: 'Building Materials — Order Desk to Delivered Load',
      tagline: 'From a phone call to a planned load, an invoiced delivery and a cleared border',
    },
    evidence: 'modelled',
    note: 'Industry scenario. Built on live project work and on published industry benchmarks. The figures are the effect the design is engineered to produce; the mechanism behind each one is given in Results.',
    results: [
      { metric: 'Repeat orders taken without a person', value: '65 % of reorder volume' },
      { metric: 'Dispatch planning time', value: '~4–6 h → 30 min of approval' },
      { metric: 'Transport cost', value: '−6 %' },
    ],
    sections: [
      {
        title: 'The business',
        paragraphs: [
          'A construction-materials logistics business with three revenue lines that share one fleet and one order desk:',
        ],
        items: [
          'Material delivery. Aggregates — sand, gravel, crushed stone — and cement, bought at quarries and delivered to contractors and building sites. Bulk goods sold by weight, not a catalog of packaged articles.',
          'Soil and construction-waste removal. A business in its own right, not a return leg: separate runs from site to disposal facility, much of it won through tenders. Pairing a removal with a delivery in one round trip is an optimization on top, not the operating model.',
          'Skip hire. Containers dropped at small sites, left for the duration of the work, then collected or swapped — an asset-rental cycle rather than a delivery.',
        ],
        closing: [
          'Transport runs on contracted haulers, own trucks, or both. Where the flow crosses a border—materials coming in, excavated soil going out—customs and waste-shipment paperwork must be in place before the truck moves. Revenue is contract-driven and sharply seasonal.',
        ],
      },
      {
        title: 'Before the change: 1. Growth is capped by how many people can answer the phone',
        paragraphs: [
          "Orders arrive by telephone and messenger. Each one takes a person several minutes: identify the customer, check the price list and the customer's agreed terms, check availability, confirm a delivery window, and enter it into the system. Volume therefore scales with headcount, and headcount is the one thing this business cannot scale.",
          "The reason is structural, not managerial. Demand follows the building season and the contract pipeline: when the frost lifts and three contracts run in parallel, the order desk needs twice the people it needs in February. Hiring for the peak means carrying — and then dismissing — those people three or four months later, with notice periods, recruitment cost, and three months of training paid twice a year. Temporary staff cost more per hour and know neither the product range nor the customers' agreed terms.",
          'This is not a customer-service problem. It is a capacity ceiling on revenue.',
        ],
      },
      {
        title: '2. Every order has to be agreed with three or four parties at once',
        paragraphs: ['A delivery is only confirmable when four calendars agree:'],
        items: [
          'Customer — Expects a time window, or a standing rule ("every Tuesday before 07:00", "call one hour ahead", "crane available only 13:00–16:00")',
          'Producer / plant — Own opening hours, loading slots, queue at the weighbridge, batch schedules',
          'Carrier / driver — Must physically make every stop, with driving-time rules and a vehicle that fits the site',
          'Disposal facility — For removals: accepted material classes, opening hours, weighbridge, tipping fee per tonne, and the right to refuse the load on arrival',
          'Customs and waste paperwork — For cross-border loads, the customs declaration and preference documents — and, for waste leaving the country, the consignment note and any notification consent',
        ],
        closing: [
          'Coordinating those four by telephone is what the order desk actually spends its day on. Every change — a plant running late, a site not ready, a truck breaking down — restarts the chain of calls. The plan for tomorrow is built by hand today, by one dispatcher, and it is obsolete by 09:00.',
        ],
      },
      {
        title: '3. What the day actually looked like',
        items: [
          "Dispatch was one person, allocating tomorrow's transport today, from a whiteboard and their own memory of which driver handles which site — deliveries, removals and skip movements planned separately, with no shared view of the fleet.",
          'Skips lived on a spreadsheet: which container is where, since when, and whether anybody had asked for it back.',
          'Invoicing was manual, one manager typing invoices out of delivery notes, days after the fact.',
          'Customs meant e-mailing documents back and forth with the broker for every export load.',
          'The order desk sat on the phone all day, and stopped selling the moment it got busy.',
        ],
        closing: ['Everything worked. Nothing scaled.'],
      },
      {
        title: 'What we built: 1. Digitalised commercial core',
        items: [
          'Pricing — customer-specific price lists, contract prices, volume scales and surcharges (fuel, distance, small quantity) applied automatically instead of being remembered.',
          'Order management — one order object from enquiry to execution to invoice, in three types that share a fleet: delivery, removal (site to disposal facility, standalone), and skip (drop, dwell, collect or swap). The agreed rule is attached to the customer, not to the person who took the call.',
          'Disposal and tipping — accepted material classes, facility opening hours and tipping fees per tonne held as data, so a removal is quoted and planned against the site that will actually take the load.',
          'Invoicing — issued, sent and tracked automatically, with the customer notified.',
        ],
      },
      {
        title: '2. Automatic dispatch with an AI planning model',
        items: [
          "Transport is assigned automatically across own fleet and contracted hauliers, against vehicle type, site access, plant slots, driving times and the customer's window. Carriers and drivers are notified without a phone call.",
          'Deliveries, removals and skip movements are planned in one pass over one fleet, instead of three people planning the same trucks. Where a delivery and a removal fit the same round trip, the model proposes the pairing — as an optimization it finds, not an assumption the business is built on.',
          'Skips are tracked as assets, not as jobs — where every container is, how long it has stood there, and which ones are due for collection or swap. Idle containers on finished sites are what quietly caps a skip fleet.',
          'ETAs are calculated and pushed to the customer — and recalculated when reality moves, which it does daily.',
          'The planner stops producing the plan and starts approving it, which is the part a human is actually better at.',
        ],
      },
      {
        title: "3. Invoicing on the customer's agreed rhythm",
        paragraphs: ['Because the terms differ per customer and are contractual, the system bills the way each contract says:'],
        items: [
          'per order or per delivery;',
          'collected weekly, monthly, or on any agreed period;',
          'or triggered when an accumulated balance reaches an agreed amount.',
        ],
      },
      {
        title: '4. AI agents on the customer-facing side',
        items: [
          'Take orders from existing customers — recognised by number, priced on their own terms, checked against availability, confirmed into a slot.',
          'Register new customers — qualify, collect the commercial data, open the account, route the credit decision to a human.',
          'Notify on ETA and on problems — proactively, before the site calls to ask — and answer the delivery questions that follow.',
          'Take removal and skip requests — volume or container size, material class, access, and the collection date — and qualify them in the conversation so dispatch gets a plannable job rather than "come and take it away".',
          'Tell customers about relevant new products and services—only where they fit what they actually buy. On a site already receiving material, the removal and the skip are the offer that writes itself.',
        ],
      },
    ],
    table: {
      title: 'Results',
      beforeLabel: 'Expected range',
      afterLabel: 'Where it comes from',
      rows: [
        { label: 'Repeat orders taken without a person', before: '65 % of reorder volume', after: 'Reorders are the most rule-bound transaction in the business: known customer, known product, known terms. This is the single largest effect' },
        { label: 'Peak season absorbed without seasonal hiring', before: 'Order desk flat while peak volume grows 55 %', after: 'Capacity ceiling removed at the point where it binds. The saving is the seasonal hire that no longer happens, plus its recruitment and training cost' },
        { label: 'Dispatch planning time', before: 'From ~4–6 hours a day to 30 minutes of approval', after: "Planning becomes generation plus review. The dispatcher's day moves to exceptions and carrier relationships" },
        { label: 'Transport cost', before: '−6 %', after: 'The published range for mid-market shippers moving to optimised planning. Comes from fewer empty runs, better load consolidation and fewer trucks doing the same work' },
        { label: 'Cost per invoice', before: 'From roughly CHF 30–54 to CHF 2–3', after: 'Industry benchmark for manual versus automated invoice processing. On 200 invoices a month that is CHF 2,000–2,800 of clerical work, of which some CHF 1,400–2,400 disappears' },
        { label: 'DSO', before: '−25 %, commonly 5–8 days', after: 'Invoices leave the same day as the delivery instead of days later, and arrive complete — delivery note, weighbridge ticket, proof of delivery attached, which is what disputes are made of' },
        { label: '"Where is my truck?" calls', before: '−70 %', after: 'Proactive ETA notification removes the reason for the call. This is the effect customers notice first' },
        { label: 'Customs handling per export load', before: 'Hours to minutes of human attention', after: 'The declaration is pre-filled from the order and linked to the transport declaration in Passar — the Swiss customs system that replaced e-dec — so the truck is released at the border without a counter visit' },
        { label: 'Delivery/removal pairing found automatically', before: '15–32 % of removal runs paired', after: 'Planning all three order types over one fleet in one pass surfaces pairings a human planner has no time to look for. Upside only — the removal business does not depend on it' },
        { label: 'Skip fleet utilisation', before: 'Idle dwell down, more jobs per container', after: 'Containers standing on finished sites are invisible on a spreadsheet and obvious on a tracked asset. Fill-level sensing, where fitted, cuts a further 15–20 % of stops by skipping containers that are not ready' },
        { label: 'Attach rate on relevant offers', before: 'New revenue line, low single-digit % of order value', after: 'Nobody had time to make these offers before. The agent makes them on every order, only where they fit' },
        { label: 'Margin visibility per delivery', before: 'New capability, not a saving', after: 'Once every order, route and invoice is structured data, true margin per customer, per product and per route becomes measurable. Several clients discover here that a large customer is unprofitable' },
      ],
    },
    afterTable: [
      "What decides where you land in those ranges: the quality of the price and customer master data, whether delivery rules are actually written down or live in someone's head, whether plants share their slot data, and whether management is willing to let the system's plan stand when it disagrees with habit.",
    ],
    nextIntro:
      'With intake, dispatch and invoicing working on the contract business, the next moves are at the two ends the current setup still leaves manual:',
    next: [
      'Small quantities and self-service skip hire — the segment the contract desk has never had time to serve. Small sites order one container or half a load, which is all margin and all administration. An agent that quotes, books and invoices it without a person is what makes the segment worth having.',
      'Tender response for removal contracts — much of the removal business is won on tender, and tender preparation is still hand-assembled. Pre-filling the volume, disposal and pricing sections from the operational data is the obvious next automation.',
      'Fill-level and container sensing, where the economics justify fitting it, so collections are planned against what a container actually holds rather than against a date.',
    ],
    elsewhereIntro: 'The same machinery applies wherever a bulk order has to become a coordinated physical movement:',
    elsewhere: [
      'ready-mix concrete and asphalt, where the plant slot is even less forgiving',
      'fuel and pellet distribution — same weight-based billing, same delivery windows',
      'agricultural bulk goods, with the seasonality even sharper',
      'container and skip operations as a standalone business',
      'any tender-driven haulage where the paperwork gates the movement',
    ],
    elsewhereOutro:
      'The delivery side of this scenario runs on the 8Move platform — Fleet Planner for planning and dispatch, Driver Pro for the driver and proof of delivery. Start where the ceiling is. In this business it is the order desk in May, not the invoice run in November.',
    relatedCases: [],
    meta: {
      title: 'Building materials: desk to delivery | Trident Software',
      description:
        'From a phone call to a planned load, an invoiced delivery and a cleared border. 65% of reorder volume automated, the peak absorbed without seasonal hiring.',
    },
  },
  {
    slug: 'letting-agency-enquiry-to-viewing',
    publishedAt: '2026-10-14',
    client: 'Residential letting agency, Romandie, Switzerland',
    industry: 'Residential letting agency · Switzerland',
    services: ['ai-services', 'software-engineering'],
    techStack: [],
    hero: {
      title: 'Real Estate — From Portal Enquiry to Booked Viewing',
      tagline:
        'A reply within minutes, in the language the enquiry was written in, turned into a qualified viewing slot.',
    },
    evidence: 'modelled',
    note: 'Industry scenario. Built on published Swiss market data and on our own project work, not on a single named client. The figures in Results are the effect the design is engineered to produce; each one names the mechanism behind it.',
    results: [
      { metric: 'First response to a portal enquiry', value: 'hours → under 15 sec' },
      { metric: 'Enquiries answered outside office hours', value: 'none → all of them' },
      { metric: 'Enquiry → booked viewing', value: 'in the same conversation' },
    ],
    sections: [
      {
        title: 'The business',
        paragraphs: [
          'An agency that does one thing: it lets apartments on behalf of owners, across two municipalities in Swiss Romandie. A few hundred units on its books, a listing pipeline that never empties, and a team small enough that everyone does three jobs.',
          "It does not sell property and it does not run the buildings. Its mandate begins when a flat is given notice and ends when a new tenancy is signed — which means the whole business is compressed into the weeks between those two dates, and its revenue is the letting fee the owner pays per signed tenancy. Every day a flat stands empty is the owner's loss and the agency's argument at the next mandate renewal.",
          'Listings go to the portals that matter here: Homegate and ImmoScout24, which between them carry most of the inquiry volume and both belong to Swiss Marketplace Group, plus Flatfox with its own messenger and Newhome, the cantonal-bank-backed alternative.',
          "The object and the tenancy live in one of the Swiss standards — Rimo R5 or ImmoTop2 from W&W Immo Informatik, GARAIO REM, or AbaImmo — sometimes the agency's own installation, sometimes the owner's, which the agency is given access to. Either way those systems hold the record and the accounting. None of them was built to be a letting desk, and none of them answers a portal message on a Sunday.",
        ],
      },
      {
        title: 'Before the change: the inquiries arrive as a burst, and mostly ask the same six things',
        paragraphs: [
          "A listing goes up and the responses land in the first forty-eight hours: is it still available, when can I see it, are the charges included, are pets allowed, which floor, is there parking. An agent handling a dozen listings answers those questions several hundred times a month, and none of that answering is the part of the job that requires an agent.",
          'An inquiry that arrives on Saturday evening waits until Monday morning; by then the serious candidate has booked two viewings elsewhere, and one of them will do.',
        ],
      },
      {
        title: 'One listing, more languages than the office speaks',
        paragraphs: [
          'In Romandie the first language is French, but the same apartment draws enquiries in German, Italian and English — a family relocating from Zurich, a company placing an employee, an international arrival who has not learned French yet. The answer has to come in the language it was asked in, and in practice it waits for whoever in the office writes that language.',
          'Below the four national and business languages sits the part agencies rarely staff for at all. A large share of tenants in this market are Portuguese- and Spanish-speaking, and a growing share Arabic-speaking. The agent therefore runs the same seven languages the 8Move platform standardises on — EN, FR, DE, IT, ES, PT and AR, the last with right-to-left layout — which is not a feature list but the actual demographics of who rings the doorbell. A candidate who can ask their questions in Portuguese and get a straight answer applies; one who cannot does not.',
        ],
      },
      {
        title: 'No-shows',
        paragraphs: [
          "A viewing booked eleven days out with no reminder in between is a viewing that a third of the time does not happen. Group slots half fill; individual slots burn an agent's afternoon.",
        ],
      },
      {
        title: 'What we built',
        paragraphs: [
          'An agent that sits in front of the system of record rather than inside it — because Rimo R5, ImmoTop2, GARAIO REM and AbaImmo hold tenancies, and an inquiry is not a tenancy yet. It is a candidate, and candidates are handled where they arrive: on the portal, in the messenger, at nine in the evening.',
        ],
      },
      {
        title: '1. It answers within a minute, in the language of the inquiry',
        paragraphs: [
          "Every channel the listing produces — portal message, Flatfox messenger, the agency's own form, e-mail, WhatsApp — is answered within a minute of arrival, in any of the seven languages: French, German, Italian, English, Spanish, Portuguese and Arabic.",
        ],
      },
      {
        title: '2. It answers from the listing, not from a script',
        paragraphs: [
          'Availability, floor, charges included or not, pets, parking, the earliest move-in date, notice period, the deposit. Read from the live listing and the object record, so the answer is right even when the flat was let last week — which is the case where a scripted bot does real damage.',
        ],
      },
      {
        title: '3. It qualifies into fields, not into free text',
        paragraphs: [
          'The questions a good letting agent asks: move-in date and notice period at the current address, household size, employment and income situation as the candidate states it, pets, parking need.',
          "And the one that decides more applications than any other in this market — the deposit. Residential deposits are capped at three months' rent and go into a blocked account in the tenant's name, which for a family moving flats means two deposits tied up at once. So the agent asks how the deposit will be provided: cash into the blocked account, or a deposit-guarantee product instead. A candidate who has not thought about it is not disqualified — they are told the amount early, while there is still time to arrange it, instead of discovering it at signature.",
          'All of it recorded as structured fields against the object, so the shortlist can be sorted rather than read.',
          'And it asks only what it may. No payslips, no debt-collection extract, no marital or health questions in the first contact — those belong to the stage where the applicant is seriously considered, and the agent is built to ask them only then.',
        ],
      },
      {
        title: '4. It books from the real calendar',
        paragraphs: [
          'Not a slot list somebody maintains by hand — a live two-way sync with the Google Calendar of the agent who will actually run the viewing (Microsoft 365 where the agency runs on Outlook). Free/busy only: a private appointment blocks the slot without exposing what it is.',
          'Where a viewing needs more than the agent, the same check runs across the other calendars before anything is offered:',
        ],
        items: [
          'the owner, where the owner attends or has to release the keys;',
          'the sitting tenant, which in this market is the common case rather than the exception — most flats are viewed while still occupied, and the appointment has to fit their availability with proper notice;',
          'the candidate, who receives a calendar invitation rather than a line of text, so the viewing lands in the diary they actually look at.',
        ],
        closing: [
          'A slot is only offered when every calendar it depends on is free. That is the difference between booking and double-booking: conflicts are resolved before the candidate sees the option, not apologized for afterward.',
          'Group viewings fill and close automatically when full. Confirmations carry the address and entry instructions, a reminder goes out the day before, and every message carries a one-tap rebooking link — because a candidate who moves their slot is worth more than one who quietly does not turn up.',
        ],
      },
      {
        title: '5. It closes the loop honestly',
        paragraphs: [
          'Candidates who fail the hard criteria are told so immediately and politely — which they prefer to silence, and which removes them from the viewing list before they occupy a slot. Everyone else reaches the agency with a filled-in profile and a booked appointment.',
        ],
      },
      {
        title: '6. The application file has a lifecycle',
        paragraphs: [
          "Documents are requested at the stage where they are permissible, held against the application, and — once the tenancy is signed — the unsuccessful applicants' files are deleted on a schedule rather than at somebody's discretion. The deletion is logged, because being able to show it is the point.",
        ],
      },
    ],
    table: {
      title: 'Results',
      beforeLabel: 'Before',
      afterLabel: 'After',
      rows: [
        { label: 'First response to a portal enquiry', before: 'hours, and overnight for anything after 18:00', after: 'under 15 sec, every hour of the week' },
        { label: 'Enquiries answered outside office hours', before: 'none until the next working day', after: 'all of them' },
        { label: 'Languages served on one listing', before: 'whoever is in the office', after: 'FR, DE, IT, EN plus ES, PT and AR from the first reply' },
        { label: 'Enquiry → booked viewing', before: 'agent triage, then a scheduling exchange', after: 'booked in the same conversation' },
        { label: 'Viewing no-shows', before: 'no reminder between booking and viewing', after: 'confirmation, day-before reminder, one-tap rebooking' },
        { label: 'Applicant data collected at first contact', before: 'whatever the form asked everyone', after: 'the minimum permissible, with documents requested only at shortlist stage' },
        { label: "Unsuccessful applicants' files", before: 'in a mailbox, indefinitely', after: 'deleted on a logged schedule after signature' },
        { label: 'Agent time on first-line enquiry handling', before: 'the larger part of the day', after: 'exceptions, negotiation and viewings' },
        { label: 'Days a flat stands empty between tenancies', before: 'set by how fast the shortlist can be built', after: 'set by the notice period, not by the response backlog' },
      ],
    },
    next: [
      'Write-back into the system of record — the selected candidate and the signed tenancy created in Rimo R5, ImmoTop2, GARAIO REM or AbaImmo without retyping, through whichever interface that installation exposes.',
      'Tenant-side self-service after signature — key handover, defect reporting, the questions that fill the office phone in the first month of a tenancy.',
      "Viewing logistics at portfolio scale — grouping viewings by building and by agent's route, which is a planning problem the agency currently solves by hand.",
      'Owner reporting — what the listing produced, how fast, and where candidates dropped out, as a monthly artefact rather than a request.',
    ],
    elsewhereIntro:
      'Wherever a scarce, viewable asset draws a burst of enquiries and the winner is whoever answers first:',
    elsewhere: [
      'commercial and office letting, where the qualification questions are different but the burst is identical',
      'property sales, where the same speed advantage decides who gets the mandate',
      'co-working and serviced offices, storage, parking',
      'holiday lettings and serviced apartments, where the enquiry volume is higher and the value per booking lower',
    ],
    relatedCases: [],
    meta: {
      title: 'Real estate: enquiry to booked viewing | Trident Software',
      description:
        'A reply within minutes, in the language the enquiry was written in, turned into a qualified viewing slot. First reply in under 15 seconds, in seven languages.',
    },
  },
  {
    slug: 'kleap-ai-builder',
    publishedAt: '2026-09-22',
    client: 'Kleap',
    industry: 'SaaS / AI',
    services: ['ai-services', 'software-engineering'],
    techStack: ['Python', 'OpenAI API', 'React', 'Next.js', 'PostgreSQL', 'AWS'],
    hero: {
      title: 'Kleap — AI Website Builder',
      tagline: 'From prompt to published website in under 60 seconds',
      image: '/images/cases/kleap-home-website-screen.jpg',
    },
    challenge:
      'Kleap needed to build an AI-powered website generator that could produce complete, design-quality websites from a single text prompt — competing with Wix ADI and Squarespace AI while offering higher customization and developer-friendly output.',
    approach:
      'We designed a multi-step AI pipeline: intent extraction → content generation → layout composition → code output. The system uses GPT-4 for content, a proprietary layout engine for structure, and Next.js for the generated output. Each step is independently testable and cacheable.',
    solution:
      'A production SaaS platform where users enter a business description and receive a complete, editable website within 60 seconds. The pipeline generates SEO-optimized copy, selects appropriate imagery, and produces clean HTML/CSS output deployable to any host.',
    results: [
      { metric: 'Generation time', value: '<60 seconds' },
      { metric: 'User satisfaction (NPS)', value: '72' },
      { metric: 'Websites generated at launch', value: '2,000+' },
    ],
    relatedCases: ['post-acute-clinic-network', 'go-valais'],
    meta: {
      title: 'Kleap AI Website Builder | Trident Software',
      description:
        'How we built an AI-powered website generator that creates complete sites from a single text prompt in under 60 seconds.',
    },
  },
  {
    slug: 'zenit-auto-b2b',
    publishedAt: '2026-09-22',
    client: 'Zenit Auto',
    industry: 'Automotive Parts / B2B E-commerce',
    services: ['software-engineering'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Elasticsearch', 'AWS'],
    hero: {
      title: 'Zenit Auto — B2B Auto Parts Platform',
      tagline: 'Tiered pricing, 500K SKUs, real-time stock',
      image: '/images/cases/zenitavto-b2b-checkout-screen.jpg',
    },
    challenge:
      'Zenit Auto needed to migrate from a legacy desktop ordering system to a modern B2B web platform. Key challenges: 500,000+ SKU catalog, complex tiered pricing (different prices per dealer level), real-time stock from multiple warehouses, and VIN-based parts search.',
    approach:
      'We built a modular platform with separate engines for catalog management, pricing calculation, and stock aggregation. Elasticsearch powers the parts search with VIN decode integration. PostgreSQL handles the complex pricing matrix with JSONB fields for flexibility.',
    solution:
      'A complete B2B e-commerce platform with VIN-based parts lookup, dealer-specific pricing, real-time multi-warehouse stock, order management, and an admin dashboard for catalog and pricing management.',
    results: [
      { metric: 'Order processing time', value: '-65%' },
      { metric: 'SKUs indexed', value: '500,000+' },
      { metric: 'Active dealers', value: '120+' },
      { metric: 'Search response time', value: '<200ms' },
    ],
    relatedCases: ['vesna-auto-b2b', 'tires-online-shop'],
    meta: {
      title: 'Zenit Auto B2B Platform | Trident Software',
      description:
        'B2B auto parts e-commerce platform with 500K SKUs, tiered dealer pricing, VIN search, and real-time multi-warehouse stock.',
    },
  },
  {
    slug: '8move-driver',
    publishedAt: '2026-09-22',
    client: '8Move',
    industry: 'Logistics / Last-mile Delivery',
    services: ['software-engineering'],
    techStack: ['Flutter', 'Dart', 'Google Maps API', 'WebSocket', 'Firebase'],
    hero: {
      title: '8Move Driver App',
      tagline: 'Real-time delivery management for last-mile drivers',
      image: '/images/cases/8move-driver-mobile.jpg',
    },
    challenge:
      '8Move needed a cross-platform mobile app for delivery drivers that handles real-time route assignment, delivery confirmation, proof-of-delivery capture, and live location sharing — with offline capability for areas with poor connectivity.',
    approach:
      'Flutter was chosen for single-codebase iOS/Android delivery. We implemented an offline-first architecture with local SQLite storage and background sync. Google Maps SDK handles routing with live traffic. WebSocket provides real-time dispatcher communication.',
    solution:
      'A production Flutter app used daily by 8Move drivers. Features: real-time route optimization, barcode/QR scanning for package tracking, photo proof-of-delivery, in-app messaging with dispatch, and offline-capable order management.',
    results: [
      { metric: 'Delivery success rate', value: '+18%' },
      { metric: 'Average delivery time', value: '-12 min' },
      { metric: 'Driver onboarding time', value: '<30 minutes' },
    ],
    relatedCases: ['8move-admin', '8move-client'],
    meta: {
      title: '8Move Driver App | Trident Software',
      description:
        'Cross-platform Flutter app for last-mile delivery drivers with offline capability, real-time routing, and proof-of-delivery.',
    },
  },
  {
    slug: 'tdsbot-iot',
    publishedAt: '2026-09-22',
    client: 'TDSbot',
    industry: 'Water Treatment / IoT',
    services: ['embedded-and-iot', 'software-engineering'],
    techStack: ['C++', 'ESP32', 'MQTT', 'InfluxDB', 'Grafana', 'Python', 'AWS IoT'],
    hero: {
      title: 'TDSbot — IoT Water Quality Monitor',
      tagline: 'Real-time water purity monitoring for industrial plants',
      image: '/images/cases/watertds-website-home-mobile.jpg',
    },
    challenge:
      'Industrial water purification facilities needed continuous monitoring of TDS (total dissolved solids), pH, and flow rates across multiple measurement points — with alerting when parameters drift outside safe ranges and historical data for compliance reporting.',
    approach:
      'We designed a sensor network using ESP32 microcontrollers with analog sensor interfaces. Data flows via MQTT to an AWS IoT Core broker, then into InfluxDB for time-series storage. Grafana provides the operations dashboard. Alert thresholds trigger SMS and email notifications.',
    solution:
      'An end-to-end IoT monitoring system: custom ESP32 sensor nodes → MQTT → AWS IoT → InfluxDB → Grafana dashboard. Plant operators see real-time readings, trend charts, and receive instant alerts. Compliance reports are auto-generated from historical data.',
    results: [
      { metric: 'Monitoring points', value: '24 per facility' },
      { metric: 'Alert response time', value: '<30 seconds' },
      { metric: 'Sensor uptime', value: '99.7%' },
      { metric: 'Manual checks eliminated', value: '85%' },
    ],
    relatedCases: ['post-acute-clinic-network'],
    meta: {
      title: 'TDSbot IoT Water Monitor | Trident Software',
      description:
        'IoT water quality monitoring system for industrial plants. ESP32 sensors, MQTT, InfluxDB, Grafana. Real-time alerting.',
    },
  },
  {
    slug: 'lapochette',
    publishedAt: '2026-09-22',
    client: 'LaPochette',
    industry: 'Fashion & Luxury',
    services: ['software-engineering'],
    techStack: ['React', 'Next.js', 'Node.js', 'Stripe', 'PostgreSQL', 'Cloudinary'],
    hero: {
      title: 'LaPochette — Luxury Bag Rental Platform',
      tagline: 'The Airbnb of designer handbags',
      image: '/images/cases/mobile-lapochette-product-website-screen.jpg',
    },
    challenge:
      'LaPochette needed a marketplace platform for renting designer handbags (Chanel, Louis Vuitton, Gucci) between private owners and renters. Key challenges: trust & authenticity verification, damage deposit handling, rental period management, and a premium UX that matches the luxury segment.',
    approach:
      'We built a two-sided marketplace with separate flows for bag owners and renters. Stripe handles deposits and escrow. An authenticity verification workflow ensures bags are photographed from specific angles before each rental. Insurance integration covers damage claims.',
    solution:
      'A luxury rental marketplace with owner onboarding, bag authentication flow, renter search and booking, Stripe-based deposit management, rental period tracking, damage reporting, and review system. Premium UI designed to match the luxury brand positioning.',
    results: [
      { metric: 'Listed bags at launch', value: '200+' },
      { metric: 'Dispute rate', value: '<2%' },
      { metric: 'Average booking value', value: 'CHF 180' },
    ],
    relatedCases: ['samange-fashion', 'flashhub'],
    meta: {
      title: 'LaPochette Luxury Bag Rental | Trident Software',
      description:
        'Two-sided marketplace for luxury designer handbag rentals. Stripe escrow, authenticity verification, premium UX.',
    },
  },
  {
    slug: 'iam-trade',
    publishedAt: '2026-09-22',
    client: 'IAM Trade',
    industry: 'B2B E-commerce',
    services: ['software-engineering'],
    techStack: ['Python', 'React', 'PostgreSQL', 'AWS', 'Docker', 'Redis'],
    hero: {
      title: 'IAM Trade — B2B E-commerce Platform',
      tagline: 'Custom B2B/B2C/B2X platform handling up to 1M products with 200+ integrations',
    },
    challenge:
      'A Swiss trading company needed a flexible multi-channel e-commerce platform to handle complex B2B pricing, large product catalogs (up to 1M items), and seamless integration with existing ERP, CRM, WMS, and financial systems.',
    approach:
      'We designed a modular platform with separate functional domains: account management, product catalog, order processing, pricing engine, and delivery management. Each module is independently deployable and integrates via internal APIs.',
    solution:
      'Full-stack B2B/B2C/B2X e-commerce platform with personalized pricing, multilingual product catalogs with 3D views, automated order-to-invoice pipelines, multi-warehouse delivery management, and 200+ third-party integrations (ERP, CRM, WMS, PIM, TMS, payment gateways).',
    results: [
      { metric: 'Products supported', value: '1M+' },
      { metric: 'Integrations', value: '200+' },
      { metric: 'Order processing', value: 'Automated' },
      { metric: 'Time-to-market', value: '3 months' },
    ],
    relatedCases: ['zenit-auto-b2b', 'kleap-ai-builder'],
    meta: {
      title: 'IAM Trade B2B Platform — Trident Software',
      description: 'Custom B2B/B2C/B2X e-commerce platform with 1M+ products and 200+ integrations built for a Swiss trading company.',
    },
  },
  {
    slug: 'arenawave',
    publishedAt: '2026-09-22',
    client: 'ArenaWave',
    industry: 'Sports Tech / IoT',
    services: ['software-engineering', 'embedded-and-iot'],
    techStack: ['React Native', 'Node.js', 'IoT', 'PostgreSQL', 'AWS', 'MQTT'],
    hero: {
      title: 'ArenaWave — Smart Sports Court System',
      tagline: 'IoT-powered court management: automated booking, smart access, and facility analytics',
    },
    challenge:
      'Sports facility operators struggled with low court utilization, manual booking processes, and lack of visibility into facility performance. Managing lighting, access control, and scheduling across multiple courts required constant staff presence.',
    approach:
      'We designed an integrated system with three components: an IoT device layer embedded in each court, a mobile app for players, and a management dashboard for operators. All components communicate in real time via cloud infrastructure.',
    solution:
      'ArenaWave transforms traditional sports courts into IoT-enabled smart spaces. Players book and access courts via mobile app with smart lock integration. Operators control lighting, AC, and music remotely, view utilization analytics, and receive automated maintenance alerts. Supports squash, tennis, padel, and badminton.',
    results: [
      { metric: 'Court automation', value: '100%' },
      { metric: 'Sports supported', value: '4+' },
      { metric: 'Staff dependency', value: 'Reduced' },
    ],
    relatedCases: ['tdsbot-iot', '8move-driver'],
    meta: {
      title: 'ArenaWave Smart Court System | Trident Software',
      description: 'IoT-powered sports court management system with automated booking, smart access control, and facility analytics.',
    },
  },
  {
    slug: 'go-valais',
    publishedAt: '2026-09-22',
    client: 'GO-Valais Expat Club',
    industry: 'Community / NGO',
    services: ['software-engineering'],
    techStack: ['WordPress', 'PHP', 'MySQL', 'Elementor', 'WooCommerce'],
    hero: {
      title: 'GO-Valais — Expat Community Portal',
      tagline: 'Digital hub connecting expatriates in Valais, Switzerland',
      image: '/images/cases/conference-go-valais-website-screen-1.jpg',
    },
    challenge:
      'Expatriates relocating to Valais had no centralized platform to discover local events, access settlement resources, or connect with the international community. Event organizers lacked tools to reach the expat audience effectively.',
    approach:
      'We built a community-first web portal with a focus on event discovery and resource accessibility. The platform was designed to be self-managed by the GO-Valais team with minimal technical knowledge required.',
    solution:
      'A comprehensive community portal featuring an event calendar, resource library (healthcare, legal, job search), photo galleries, and multilingual content. The platform enabled GO-Valais to grow its membership and streamline event management across the Valais region.',
    results: [
      { metric: 'Community', value: 'Unified' },
      { metric: 'Languages', value: 'EN/FR/DE' },
      { metric: 'Event calendar', value: 'Self-managed' },
    ],
    testimonial: {
      text: 'This has greatly fostered development, unity and solidarity among our members.',
      author: 'David Ouedec',
      role: 'Head of GO-Valais Expat Club',
    },
    relatedCases: ['kleap-ai-builder', 'lapochette'],
    meta: {
      title: 'GO-Valais Expat Community Portal | Trident Software',
      description: 'Community web portal for expatriates in Valais, Switzerland — event calendar, multilingual resources, and self-managed CMS.',
    },
  },
]

export function getCaseBySlug(slug: string): CaseData | undefined {
  return cases.find((c) => c.slug === slug)
}

export function getCaseSlugs(): string[] {
  return cases.map((c) => c.slug)
}

export function getRelatedCases(slugs: string[]): CaseData[] {
  return cases.filter((c) => slugs.includes(c.slug))
}
