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
      de: {
        title: 'Bearbeitung eingehender Anfragen',
        text: 'Antwortet in Sekunden auf allen Kanälen, qualifiziert, bucht Termine und trägt alles ins CRM ein. Ersetzt die Warteschlange, nicht einen Menschen.',
        needs: 'Die Antworten liegen schriftlich vor: Preisliste, Katalog, Konditionen.',
      },
      fr: {
        title: 'Traitement des demandes entrantes',
        text: "Répond en quelques secondes sur tous les canaux, qualifie, prend les rendez-vous et saisit tout dans le CRM. Remplace la file d'attente, pas une personne.",
        needs: 'Les réponses existent par écrit : liste de prix, catalogue, conditions.',
      },
      it: {
        title: 'Gestione delle richieste in arrivo',
        text: "Risponde in pochi secondi su ogni canale, qualifica, prenota e registra tutto nel CRM. Sostituisce la coda d'attesa, non una persona.",
        needs: 'Le risposte esistono per iscritto: listino prezzi, catalogo, condizioni.',
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
      de: {
        title: 'Dokumentenverarbeitung',
        text: 'Liest Rechnungen, Lieferscheine und Formulare, gleicht sie mit den Datensätzen ab, markiert Abweichungen und speichert strukturierte Daten.',
        needs: 'Eine klare Festlegung, welches Feld wohin gehört.',
      },
      fr: {
        title: 'Traitement des documents',
        text: 'Lit factures, bons de livraison et formulaires, les rapproche des données existantes, signale les écarts et enregistre des données structurées.',
        needs: 'Une définition claire de quel champ va où.',
      },
      it: {
        title: 'Elaborazione dei documenti',
        text: 'Legge fatture, bolle di consegna e moduli, li confronta con i dati registrati, segnala le discrepanze e salva dati strutturati.',
        needs: 'Una definizione chiara di quale campo va dove.',
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
      de: {
        title: 'Bestellannahme aus Nachrichten',
        text: 'Macht aus «die übliche Palette» auf WhatsApp einen Bestellentwurf, den der Kunde mit einer Nachricht bestätigt.',
        needs: 'Die Bestellhistorie der Kunden ist in einem System erfasst.',
      },
      fr: {
        title: 'Prise de commande depuis les messages',
        text: 'Transforme « la palette habituelle » reçue sur WhatsApp en projet de commande que le client confirme en un message.',
        needs: "L'historique des commandes clients est dans un système.",
      },
      it: {
        title: 'Ordini dai messaggi',
        text: "Trasforma «il solito bancale» scritto su WhatsApp in una bozza d'ordine che il cliente conferma con un messaggio.",
        needs: 'Lo storico degli ordini dei clienti in un sistema.',
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
      de: {
        title: 'Assistent für die Disposition',
        text: 'Schlägt Zuteilung und Reihenfolge vor, begründet sie und rechnet bei Änderungen neu. Entscheiden tut der Disponent.',
        needs: 'Als Empfehlung gebaut, nie als stilles Übersteuern.',
      },
      fr: {
        title: 'Assistant de planification',
        text: "Propose l'affectation et l'ordre des tournées, explique pourquoi et recalcule en cas de changement. Le planificateur décide.",
        needs: 'Conçu comme un conseil, jamais comme une décision imposée en silence.',
      },
      it: {
        title: 'Assistente per la pianificazione',
        text: 'Propone assegnazioni e sequenza, spiega il perché e ricalcola in caso di modifiche. Decide il pianificatore.',
        needs: 'Pensato come consiglio, mai come decisione imposta in silenzio.',
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
      de: {
        title: 'Suche im Firmenwissen',
        text: 'Antwortet aus Verträgen, Handbüchern und Richtlinien mit Quellenangabe. Sagt «nicht gefunden», statt etwas zu erfinden.',
        needs: 'Ordnung in den Dokumenten: keine drei widersprüchlichen Versionen.',
      },
      fr: {
        title: "Recherche dans le savoir de l'entreprise",
        text: "Répond à partir des contrats, manuels et directives, en citant ses sources. Dit « introuvable » au lieu d'inventer.",
        needs: 'Des documents tenus à jour : pas trois versions contradictoires.',
      },
      it: {
        title: 'Ricerca nel sapere aziendale',
        text: 'Risponde partendo da contratti, manuali e regolamenti, citando le fonti. Dice «non trovato» invece di inventare.',
        needs: 'Documenti in ordine: niente tre versioni contraddittorie.',
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
      de: {
        title: 'Empfehlungen',
        text: 'Schlägt das nächste Angebot auf Basis von aktuellem Lagerbestand, Marge und Historie vor, inklusive Begründung.',
        needs: 'Transaktionshistorie und aktuelle Lagerdaten.',
      },
      fr: {
        title: 'Recommandation',
        text: "Propose la prochaine offre selon le stock réel, la marge et l'historique, avec la justification.",
        needs: 'Historique des transactions et données de stock en temps réel.',
      },
      it: {
        title: 'Raccomandazioni',
        text: "Propone l'offerta successiva in base a scorte reali, margine e storico, con la motivazione allegata.",
        needs: 'Storico delle transazioni e dati di magazzino in tempo reale.',
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
      de: {
        title: 'Status und Self-Service',
        text: '«Wo ist meine Lieferung?» wird aus Live-Daten beantwortet. Verschickt Rechnungen erneut und verschiebt Termine.',
        needs: 'Ein operatives System mit auslesbarem Status.',
      },
      fr: {
        title: 'Suivi et libre-service',
        text: '« Où en est ma livraison ? » trouve sa réponse dans les données en direct. Renvoie les factures, déplace les rendez-vous.',
        needs: 'Un système opérationnel dont le statut est lisible.',
      },
      it: {
        title: 'Stato e self-service',
        text: "«Dov'è la mia consegna?» trova risposta nei dati in tempo reale. Reinvia fatture, sposta appuntamenti.",
        needs: 'Un sistema operativo con stati leggibili.',
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
      de: {
        title: 'Triage im Backoffice',
        text: 'Sortiert, fasst zusammen und leitet eingehende Arbeit an die richtige Person oder das richtige System weiter.',
        needs: 'Vereinbarte Regeln für die Weiterleitung.',
      },
      fr: {
        title: 'Tri du back-office',
        text: 'Trie, résume et transmet le travail entrant à la bonne personne ou au bon système.',
        needs: "Des règles d'acheminement convenues.",
      },
      it: {
        title: 'Smistamento del back office',
        text: 'Ordina, riassume e inoltra il lavoro in arrivo alla persona o al sistema giusto.',
        needs: 'Regole di instradamento concordate.',
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
