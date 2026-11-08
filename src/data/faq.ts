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
      de: {
        question: 'Was passiert im 45-minütigen Audit?',
        answer:
          'Wir gehen Ihre Anfragevolumen, Antwortzeiten, Kanäle, Sprachen und Systeme durch. Sie gehen mit Ihren eigenen Zahlen und einer klaren Antwort, ob sich Automatisierung lohnt. Kostenlos und unverbindlich.',
      },
      fr: {
        question: "Que se passe-t-il pendant l'audit de 45 minutes ?",
        answer:
          "Nous passons en revue vos volumes de demandes, vos délais de réponse, vos canaux, vos langues et vos systèmes. Vous repartez avec vos propres chiffres et une réponse claire : l'automatisation est-elle rentable pour vous ? Gratuit et sans engagement.",
      },
      it: {
        question: "Cosa succede nell'audit di 45 minuti?",
        answer:
          "Analizziamo insieme volumi di richieste, tempi di risposta, canali, lingue e sistemi. Esci con i tuoi numeri e una risposta chiara: l'automazione si ripaga o no? Gratuito e senza impegno.",
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
      de: {
        question: 'Wann lautet die Antwort «noch nicht»?',
        answer:
          'Unter etwa 150 Anfragen pro Monat decken die Zahlen die Entwicklungskosten nicht. Ohne dokumentierte Wissensbasis hat der Agent nichts, woraus er antworten kann. Dann kommt zuerst ein Content-Projekt.',
      },
      fr: {
        question: 'Quand la réponse est-elle « pas encore » ?',
        answer:
          "En dessous d'environ 150 demandes par mois, les chiffres ne couvrent pas le coût de développement. Sans base de connaissances documentée, l'agent n'a rien sur quoi s'appuyer pour répondre. Il faut d'abord un projet de contenu.",
      },
      it: {
        question: 'Quando la risposta è «non ancora»?',
        answer:
          "Sotto le 150 richieste circa al mese, i numeri non coprono il costo di sviluppo. Senza una knowledge base documentata, l'agente non ha da dove attingere le risposte. In quel caso serve prima un progetto sui contenuti.",
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
      de: {
        question: 'Was unterscheidet das von einem Chatbot?',
        answer:
          'Ein Chatbot antwortet. Ein Agent liest Ihren aktuellen Katalog, bucht in einem echten Kalender, stellt eine QR-Rechnung aus, schreibt in Ihr CRM und übergibt unter festgelegten Bedingungen an einen Menschen.',
      },
      fr: {
        question: "En quoi est-ce différent d'un chatbot ?",
        answer:
          'Un chatbot répond. Un agent consulte votre catalogue en direct, réserve dans un vrai agenda, émet une QR-facture, écrit dans votre CRM et passe la main à une personne selon des conditions définies.',
      },
      it: {
        question: "Che differenza c'è rispetto a un chatbot?",
        answer:
          'Un chatbot risponde. Un agente legge il tuo catalogo aggiornato, prenota su un calendario reale, emette una QR-fattura, scrive nel tuo CRM e passa la conversazione a una persona in base a condizioni definite.',
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
      de: {
        question: 'Wo liegen unsere Daten?',
        answer:
          'Hosting in der Schweiz oder in der EU, gemäss nDSG und DSGVO. Ihre Daten, Ihre Wissensbasis und Ihre Szenarien gehören Ihnen. Das steht so im Vertrag.',
      },
      fr: {
        question: 'Où sont hébergées nos données ?',
        answer:
          "Hébergement en Suisse ou dans l'UE, conformément à la nLPD et au RGPD. Vos données, votre base de connaissances et vos scénarios vous appartiennent. C'est inscrit dans le contrat.",
      },
      it: {
        question: 'Dove si trovano i nostri dati?',
        answer:
          "Hosting in Svizzera o nell'UE, secondo nLPD e GDPR. I dati, la knowledge base e gli scenari sono tuoi. Lo mettiamo per iscritto nel contratto.",
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
      de: {
        question: 'Ersetzt das unser Verkaufsteam?',
        answer:
          'Nein. Der Agent übernimmt die routinemässigen 70–80 % der Gespräche. Komplexe Geschäfte bleiben bei Ihren Leuten, und der Übergabepunkt ist fest eingeplant.',
      },
      fr: {
        question: 'Va-t-il remplacer notre équipe commerciale ?',
        answer:
          'Non. Il gère les 70–80 % de conversations courantes. Les affaires complexes restent entre les mains de vos collaborateurs, et le moment du relais est prévu dès la conception.',
      },
      it: {
        question: 'Sostituirà il nostro team di vendita?',
        answer:
          'No. Gestisce il 70–80 % di conversazioni di routine. Le trattative complesse restano alle tue persone, e il punto di passaggio è previsto fin dalla progettazione.',
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
      de: {
        question: 'Was, wenn der Agent etwas falsch macht?',
        answer:
          'Bei geringer Sicherheit eskaliert er, statt zu improvisieren. Die Schwelle ist einstellbar, und wir setzen sie anfangs vorsichtig. Preise, Bestand und Verfügbarkeit liest er live aus, nie aus dem Gedächtnis.',
      },
      fr: {
        question: "Et si l'agent se trompe ?",
        answer:
          "Quand il n'est pas assez sûr, il transmet au lieu d'improviser. Le seuil est réglable et nous le fixons prudemment au départ. Prix, stock et disponibilités sont lus en direct, jamais cités de mémoire.",
      },
      it: {
        question: "E se l'agente sbaglia?",
        answer:
          "Quando non è abbastanza sicuro passa la mano invece di improvvisare. La soglia è regolabile e all'inizio la impostiamo in modo prudente. Prezzi, scorte e disponibilità vengono letti in tempo reale, mai citati a memoria.",
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
      de: {
        question: 'Merken Kunden, dass sie mit einer Maschine sprechen?',
        answer:
          'Ja, das wird von Anfang an offengelegt. Verschleierung wirkt unehrlich und wird mit dem EU AI Act zunehmend unzulässig. Offen deklarierte Agenten, die gut antworten, schneiden besser ab als versteckte.',
      },
      fr: {
        question: "Les clients sauront-ils qu'ils parlent à une machine ?",
        answer:
          "Oui, c'est annoncé d'emblée. Le cacher paraît malhonnête et, avec l'AI Act européen, tend à devenir illégal. Les agents annoncés qui répondent bien obtiennent de meilleurs résultats que les agents cachés.",
      },
      it: {
        question: 'I clienti sapranno di parlare con una macchina?',
        answer:
          "Sì, lo dichiariamo fin dall'inizio. Nasconderlo sembra disonesto e, con l'AI Act dell'UE, si avvia a diventare illecito. Gli agenti dichiarati che rispondono bene funzionano meglio di quelli nascosti.",
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
      de: {
        question: 'Wir hatten schon einen Chatbot, und das war ein Desaster.',
        answer:
          'Meist war das ein Entscheidungsbaum-Bot ohne Live-Daten, ohne Eskalation und ohne Verantwortlichen nach dem Start. Bringen Sie die Gesprächsprotokolle ins Audit mit. Daran sieht man am schnellsten, was sich ändert.',
      },
      fr: {
        question: 'Nous avons déjà eu un chatbot, et ce fut un désastre.',
        answer:
          "C'était en général un bot à arbre de décision, sans données en direct, sans escalade et sans responsable après le lancement. Apportez les transcriptions à l'audit : c'est là qu'on voit le plus vite ce qui change.",
      },
      it: {
        question: 'Abbiamo già avuto un chatbot ed è stato un disastro.',
        answer:
          "Di solito era un bot ad albero decisionale, senza dati in tempo reale, senza escalation e senza un responsabile dopo il lancio. Porta le trascrizioni all'audit: mostrano più in fretta cosa cambia.",
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
      de: {
        question: 'Wie lange dauert es bis zum Start?',
        answer:
          'Drei bis fünf Wochen ab Unterschrift. Erste messbare Effekte nach zwei bis vier Wochen im Live-Betrieb.',
      },
      fr: {
        question: 'Combien de temps avant la mise en service ?',
        answer:
          "Trois à cinq semaines après la signature. Premiers effets mesurables après deux à quatre semaines d'exploitation.",
      },
      it: {
        question: 'Quanto ci vuole per andare live?',
        answer:
          'Da tre a cinque settimane dalla firma. Primi effetti misurabili dopo due-quattro settimane di funzionamento reale.',
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
      de: {
        question: 'Können wir klein anfangen?',
        answer:
          'Genau das empfehlen wir: ein Kanal, ein Szenario, ein Monat. Der erste Monat Feinabstimmung ist in der Integrationsgebühr enthalten.',
      },
      fr: {
        question: 'Peut-on commencer petit ?',
        answer:
          "C'est la voie que nous recommandons : un canal, un scénario, un mois. Le premier mois d'ajustements est inclus dans les frais d'intégration.",
      },
      it: {
        question: 'Possiamo iniziare in piccolo?',
        answer:
          'È proprio il percorso che consigliamo: un canale, uno scenario, un mese. Il primo mese di messa a punto è incluso nel costo di integrazione.',
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
  de: {
    audit: 'Das Audit und die Zahlen',
    agent: 'Wie sich der Agent verhält',
    data: 'Daten, Verträge und Zeitplan',
  },
  fr: {
    audit: "L'audit et les chiffres",
    agent: "Le comportement de l'agent",
    data: 'Données, contrats et délais',
  },
  it: {
    audit: "L'audit e i numeri",
    agent: "Come si comporta l'agente",
    data: 'Dati, contratti e tempi',
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
