import type { ServiceDetail } from './types'

export const it: ServiceDetail = {
  kicker: 'Agenti AI e assistenti per le aziende',
  title: 'Agenti AI che rispondono, qualificano e chiudono le vendite di routine',
  lede: 'Agenti che rispondono alle richieste in pochi secondi, in tedesco, francese, italiano e inglese, e scrivono il risultato nei tuoi sistemi. Si occupano della routine; le trattative complesse restano alle tue persone.',
  intro: 'Che cos’è l’agente, quali richieste prende in carico e dove si collega ai sistemi che un’azienda svizzera usa già.',
  gap: {
    title: 'Il divario che colmiamo',
    intro:
      'Le PMI svizzere non perdono affari per colpa di prodotti scadenti. Li perdono perché nessuno risponde. E i numeri svizzeri sono più precisi di quelli che di solito si citano su questo mercato.',
    items: [
      {
        lead: 'Il 77 % della popolazione svizzera vuole trovare e prenotare online il servizio di una PMI. Il 3 % delle PMI lo consente davvero.',
        text: 'In questo divario sta tutto il business case (localsearch × HSLU, KMU Digital Pulse 2025).',
      },
      {
        lead: 'Non esiste un canale dominante da presidiare.',
        text: 'I consumatori svizzeri si dividono quasi in parti uguali: il 16 % preferisce l’e-mail, il 16 % la chat online, il 14 % il telefono, e il 77 % si aspetta di scegliere da sé il canale (ServiceNow Consumer Voice Report 2024, Svizzera). Qui l’e-mail non è stata soppiantata come nei mercati dominati dalla messaggistica; altri canali si sono aggiunti. Coprirli tutti con il personale è ciò che costa.',
      },
      {
        lead: 'È la velocità a decidere.',
        text: 'Nella Lead Response Management Study, la probabilità di qualificare un lead cala di circa 21× tra una risposta in 5 minuti e una in 30 minuti. Sono dati statunitensi del 2007, non svizzeri, ma la direzione non è in discussione. Il dato svizzero è questo: l’84 % ritiene importante un supporto rapido e in tempo reale, e il 64 % preferisce il self-service all’attesa di una persona.',
      },
      {
        lead: 'Per una parte del mercato la ricerca ora parte da un assistente AI.',
        text: 'Il 13 % della popolazione svizzera inizia a cercare il servizio di una PMI su ChatGPT o Copilot invece che su un motore di ricerca, e circa il 20 % ne ha usato uno nell’ultimo anno per informarsi su servizi di PMI (KMU Digital Pulse 2025). Un’azienda che non risponde in pochi secondi a una richiesta generata da una macchina è invisibile per questo segmento.',
      },
      {
        lead: "Un addetto alla vendita interna da CHF 8'000 al mese passa gran parte della giornata sulle stesse dodici domande.",
        text: 'Orari di apertura, tempi di consegna, fascia di prezzo, disponibilità, «servite anche il Canton Vaud?».',
      },
      {
        lead: 'I clienti scrivono in tedesco, francese, italiano e inglese.',
        text: 'Una richiesta in italiano alle 21:00 di solito aspetta che in ufficio qualcuno legga l’italiano. WhatsApp raggiunge circa l’85 % della popolazione svizzera: il canale c’è, il personale per seguirlo di solito no.',
      },
    ],
    close: 'Un agente di vendita è un processo aziendale con un modello linguistico integrato. Non è un widget di chat e non è una licenza di modello.',
  },
  does: {
    title: 'Cosa fa l’agente',
    items: [
      { lead: 'Risponde in pochi secondi', text: 'Su ogni canale, a ogni ora, anche nei fine settimana e nei giorni festivi, compresi quelli cantonali.' },
      {
        lead: 'Qualifica',
        text: 'Fa le domande che farebbe il tuo miglior venditore, nella lingua dell’acquirente, e registra le risposte in campi strutturati.',
      },
      { lead: 'Consiglia', text: 'Sceglie prodotti, servizi o fasce orarie dal tuo catalogo, magazzino e listino aggiornati, non da uno script fisso.' },
      {
        lead: 'Gestisce le obiezioni più comuni',
        text: 'Prezzo, tempi di consegna, confronto con la concorrenza, condizioni: risposte prese dalle tue formulazioni approvate, non improvvisate.',
      },
      { lead: 'Chiude le piccole pratiche', text: 'Fissa l’appuntamento, riserva la fascia oraria, emette la QR-fattura o il link di pagamento, conferma via e-mail.' },
      {
        lead: 'Scrive nei tuoi sistemi',
        text: 'CRM: contatto, azienda, trattativa, trascrizione, punteggio, passo successivo. ERP o contabilità: l’ordine, la bolla di consegna, la bozza di fattura, alle condizioni del cliente. Tramite API dove esiste, tramite l’interfaccia dove manca. I tuoi sistemi restano la fonte di riferimento.',
      },
      {
        lead: 'Invia ciò che segue',
        text: 'La conferma al cliente, il compito a chi è responsabile del passo successivo, il nuovo orario di arrivo quando cambia, il promemoria prima dell’appuntamento, la fattura alla scadenza. La notifica fa parte del processo; non è un resoconto del processo.',
      },
      {
        lead: 'Passa la mano',
        text: 'Con bassa certezza, con un tono irritato o con un tema nella lista di escalation, l’agente si ferma e inoltra a una persona designata, con tutto il contesto.',
      },
    ],
    close: 'La gestione in parallelo non è l’aspetto più interessante, ma conta nei giorni di campagna: centinaia di conversazioni simultanee costano quanto una sola.',
  },
  fte: {
    title: 'Agente o un FTE in più',
    intro:
      'Valori indicativi svizzeri per un ruolo di vendita interna o di servizio clienti, a costo pieno (salario, oneri sociali, postazione, vacanze, malattia, reclutamento).',
    rows: [
      { label: 'Disponibilità', agent: '24/7, 365 giorni', hire: '~42 h/settimana, meno vacanze e malattia' },
      { label: 'Prima risposta', agent: 'Pochi secondi', hire: '15–30 min in orario d’ufficio, la mattina dopo fuori orario' },
      { label: 'Lingue', agent: 'DE, FR, IT, EN dal primo giorno', hire: 'Una o due, realisticamente' },
      { label: 'Conversazioni in parallelo', agent: 'Centinaia', hire: '10–15 al massimo assoluto' },
      { label: 'Costo di esercizio', agent: 'Da ~CHF 450/mese più l’uso', hire: "CHF 90'000–120'000/anno a costo pieno" },
      { label: 'Avviamento', agent: 'Pochi giorni', hire: '3–6 mesi fino alla piena produttività' },
      { label: 'Coerenza', agent: 'Sempre la stessa risposta, versionata e verificabile', hire: 'Varia secondo la persona, l’umore e il giorno' },
    ],
    close:
      'Letta onestamente, la tabella dice questo: l’agente sostituisce il 70–80 % di routine del volume di conversazioni, non la persona. Trattative complesse, grandi clienti, tutto ciò che richiede una firma o comporta una responsabilità resta in mano alle persone. Le aziende che ne traggono valore spostano il team su compiti più qualificati invece di ridurlo.',
  },
  channels: {
    title: 'Canali',
    items: [
      'WhatsApp Business',
      'Widget sul sito',
      'E-mail',
      'Telegram',
      'Instagram / Facebook',
      'SMS',
      'Microsoft Teams (agenti interni)',
      'Voce (vedi i limiti più sotto)',
    ],
    note: 'Il mix di canali si decide in base all’attività, non alla moda. WhatsApp raggiunge quasi tutti in privato, l’e-mail porta ancora la maggior parte del traffico B2B e il widget intercetta l’acquirente già presente sulla tua pagina.',
  },
  integrations: {
    title: 'Integrazioni',
    lead: 'Tutto ciò che ha un’API, più una soluzione di riserva documentata per i sistemi che esportano solo un CSV di notte.',
    groups: [
      { title: 'CRM', items: ['HubSpot', 'Salesforce', 'Pipedrive', 'Microsoft Dynamics', 'Zoho'] },
      { title: 'ERP / contabilità', items: ['bexio', 'Abacus', 'SAP Business One', 'Odoo', 'Sage'] },
      {
        title: 'Prenotazioni e operatività',
        items: ['Microsoft 365 / calendario Outlook', 'Google Calendar', 'Sistemi di prenotazione di settore'],
      },
      { title: 'Pagamenti', items: ['QR-fattura svizzera', 'TWINT', 'Stripe', 'PostFinance', 'Datatrans'] },
      {
        title: 'Sanità',
        items: ['vitomed', 'amétiq siMed', 'AESKULAP', 'KISIM', 'Epic', 'Meierhofer', 'HL7/FHIR', 'DICOM', 'Posta protetta HIN'],
        note: 'Più gli altri gestionali svizzeri per studi medici. Vedi i casi clinici più sotto.',
      },
      {
        title: 'Logistica e lavoro sul campo',
        items: ['Fleet Planner', 'Driver Pro', 'Transfer', 'Back Office'],
        note: 'La linea di prodotti 8Move, quando la richiesta deve diventare un incarico, un percorso o una consegna.',
      },
    ],
    note: 'Dove un sistema per come è progettato accetta solo il prelievo dei dati (1C è il caso classico), l’agente scrive in un livello intermedio e l’ERP raccoglie i dati con i suoi tempi. Non promettiamo invii diretti verso sistemi che non li consentono.',
  },
  limits: {
    intro: 'Lo pubblichiamo perché è il modo più rapido per capire se qui c’è davvero un progetto.',
    items: [
      {
        title: 'Meno di ~150 richieste al mese',
        text: 'I conti non tornano. Sistema prima il processo di risposta, chiamaci quando i volumi ci sono.',
      },
      {
        title: 'Nessuna base di conoscenza scritta e nessuno che la scriva',
        text: 'L’agente eredita la tua qualità. Se non c’è niente da ereditare, non c’è niente da mettere in produzione.',
      },
      {
        title: 'Consulenza regolamentata',
        text: 'Diagnosi medica, raccomandazione d’investimento, parere legale. L’agente prenota, smista e prepara; non consiglia.',
      },
      {
        title: 'Svizzero tedesco al telefono',
        text: 'Il dialetto svizzero tedesco scritto funziona bene. Il riconoscimento del dialetto parlato resta il punto debole di tutti i fornitori sul mercato, noi compresi. Se i tuoi clienti telefonano in Züridütsch, parti dai canali scritti e tieni la voce per una seconda fase.',
      },
      {
        title: 'Un mandato di puro taglio del personale',
        text: 'I progetti impostati come «sostituire il team» rendono meno di quelli impostati come «togliere la routine al team». Lo diciamo già al primo incontro.',
      },
    ],
  },
  delivery: {
    title: 'Messa in opera in sei fasi',
    intro:
      'Tempo tipico dalla firma alla messa in produzione: da tre a cinque settimane. Il collo di bottiglia non è quasi mai la tecnologia. È la rapidità con cui il tuo team risponde alle domande sui propri processi.',
    stages: [
      {
        title: 'Audit e scelta degli scenari',
        days: 'Giorni 1–3',
        text: 'Leggiamo le tue ultime 200 richieste. Quali si ripetono, quali portano a una vendita, dove il processo si inceppa. Risultato: l’elenco ordinato delle conversazioni che vale la pena automatizzare e il business case basato [sui conti economici](/pricing), compilato con i tuoi numeri.',
      },
      {
        title: 'Base di conoscenza',
        days: 'Giorni 3–10',
        text: 'Catalogo, prezzi, condizioni di consegna, orari, FAQ, formulazioni approvate per le domande scomode. La costruiamo da ciò che hai già e intervistiamo chi ha il resto in testa. È la fase che decide la qualità, ed è quella che i clienti sottovalutano.',
      },
      {
        title: 'Canali e sistemi',
        days: 'Giorni 8–15',
        text: 'Verifica di WhatsApp Business, widget, collegamenti a CRM ed ERP, calendario, pagamenti. La verifica WhatsApp segue i tempi di Meta, non i nostri: avviala il primo giorno.',
      },
      {
        title: 'Test',
        days: 'Giorni 15–20',
        text: 'Il tuo team prova a mettere in crisi l’agente, in tutte e quattro le lingue. Regole di escalation, tono, casi limite, il cliente volutamente ostile. Niente va in produzione finché il tuo responsabile vendite non approva le trascrizioni.',
      },
      {
        title: 'Avvio supervisionato',
        days: 'Giorni 20–25',
        text: 'Traffico reale, ogni conversazione rivista ogni giorno. La soglia di passaggio a una persona parte volutamente alta e scende quando le trascrizioni lo giustificano.',
      },
      {
        title: 'Esercizio e messa a punto',
        days: 'Continuativo',
        text: 'Revisione mensile: cosa ha sbagliato l’agente, cosa dovrebbe gestire d’ora in poi, cosa è cambiato nei tuoi prezzi e nel tuo assortimento. Il primo mese di messa a punto è incluso nel costo di integrazione.',
      },
    ],
    close: 'I primi effetti misurabili arrivano dopo due-quattro settimane di esercizio. Chi promette risultati nella prima settimana mostra una demo, non una messa in opera.',
  },
  languages: {
    title: 'Lingue',
    paragraphs: [
      'DE, FR, IT, EN dal primo giorno. Ogni lingua ha le sue formulazioni approvate, senza uno strato di traduzione, perché un acquirente svizzero francofono e uno germanofono non reagiscono alla stessa frase.',
      'Dove la piattaforma è 8Move, l’insieme completo è di sette lingue: EN, FR, DE, IT, ES, PT e AR con impaginazione da destra a sinistra. Conta nell’ospitalità, nella logistica e in ogni azienda in cui personale non svizzero legge la stessa interfaccia.',
      'I testi in tedesco standard sono di alta qualità. Lo svizzero tedesco scritto è gestito. Il riconoscimento del dialetto parlato è il punto debole che dichiariamo; vedi [Dove diciamo di no](#limits) più sopra.',
    ],
  },
  data: {
    title: 'Protezione dei dati',
    items: [
      {
        lead: 'nLPD e GDPR',
        text: 'Le installazioni rispettano la legge federale svizzera sulla protezione dei dati riveduta e, se servi clienti nell’UE, il GDPR. Ricevi il contratto di trattamento dei dati, la voce nel registro delle attività di trattamento e i testi dell’informativa sulla privacy per i canali. Li redigiamo noi.',
      },
      {
        lead: 'Hosting in Svizzera o nell’UE, a tua scelta',
        text: 'I dati delle conversazioni e la base di conoscenza restano nella regione che scegli. Subresponsabili documentati ed elencati nel contratto.',
      },
      {
        lead: 'I tuoi dati non addestrano il modello di nessuno',
        text: 'Escluso per contratto, con le condizioni del fornitore in allegato, così puoi verificarlo invece di fidarti.',
      },
      {
        lead: 'Conservazione sotto il tuo controllo',
        text: 'Periodi di conservazione configurabili, cancellazione su richiesta, esportazione in formato aperto alla disdetta. Nessun vincolo attraverso i tuoi stessi dati.',
      },
      {
        lead: 'I passaggi a una persona vengono registrati',
        text: 'Ogni escalation, ogni intervento manuale, la trascrizione completa resta conservata per gli audit. Quando una conversazione tocca dati sanitari, finanziari o relativi al lavoro, la soglia di escalation è più severa per impostazione predefinita.',
      },
    ],
  },
  guarantees: {
    title: 'Cosa garantiamo',
    items: [
      {
        lead: 'Costo di integrazione fisso',
        text: 'Quotato dopo il workshop, su un perimetro scritto. Le modifiche al perimetro si quotano a parte e non finiscono mai in silenzio nella voce mensile.',
      },
      {
        lead: 'I tuoi sistemi restano tuoi',
        text: 'Nessun vincolo proprietario lato CRM o ERP. Se disdici, la base di conoscenza, le trascrizioni e le definizioni degli scenari ti vengono esportate.',
      },
      {
        lead: 'Indipendente dal modello',
        text: 'L’agente è costruito in modo che il modello sottostante si possa sostituire. Questo ti protegge dai prezzi e dai guasti di un singolo fornitore.',
      },
      { lead: 'Un ingegnere con un nome, non una coda di ticket', text: 'La stessa persona dal workshop all’esercizio.' },
      {
        lead: 'Ti diciamo quando non comprare',
        text: 'I criteri di esclusione di [Dove diciamo di no](#limits) li applichiamo durante il workshop, prima che qualcuno firmi qualcosa.',
      },
    ],
  },
  faq: {
    title: 'Domande frequenti',
    items: [
      {
        question: 'E se l’agente sbaglia?',
        answer:
          'Con bassa certezza passa a una persona invece di improvvisare. La soglia è un’impostazione, e all’inizio la teniamo prudente. Prezzi, magazzino e disponibilità sono letti in tempo reale dai tuoi sistemi; l’agente non cita nulla a memoria.',
      },
      {
        question: 'I clienti sapranno di parlare con una macchina?',
        answer:
          'Sì, lo dichiariamo fin dall’inizio. Nasconderlo sembra disonesto e, per le aziende che si rivolgono ai consumatori nell’UE, gli obblighi di trasparenza dell’AI Act ora impongono di dichiararlo. Un agente dichiarato che risponde bene funziona meglio di uno nascosto che risponde male.',
      },
      {
        question: 'Abbiamo già avuto un chatbot ed è stato un disastro.',
        answer:
          'Di solito era un bot ad albero decisionale, senza accesso ai dati in tempo reale, senza escalation e senza un responsabile dopo l’avvio. Porta le trascrizioni al workshop. Sono il modo più rapido per vedere cosa cambierebbe.',
      },
      {
        question: 'Possiamo iniziare in piccolo?',
        answer: 'È la strada che consigliamo. Un canale, uno scenario, un mese. Si estende in base ai risultati.',
      },
      {
        question: 'Chi possiede cosa dopo la disdetta?',
        answer:
          'Tu possiedi la base di conoscenza, i dati delle conversazioni e le definizioni degli scenari. Noi possediamo il codice della piattaforma. È scritto chiaramente nel contratto.',
      },
    ],
  },
  next: {
    title: 'Il prossimo passo',
    text: 'Workshop gratuito di 45 minuti. Porta il volume delle richieste, i tempi di risposta e il mix di canali. Esci con il tuo modello di ROI, che lavoriamo insieme o no. Se i numeri reggono, realizziamo un prototipo funzionante sui tuoi dati entro 10 giorni lavorativi.',
    economics: 'Vedi i conti economici',
  },
}
