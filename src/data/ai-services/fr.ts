import type { ServiceDetail } from './types'

export const fr: ServiceDetail = {
  kicker: 'Agents IA et assistants pour les entreprises',
  title: 'Des agents IA qui répondent, qualifient et concluent les ventes courantes',
  lede: 'Des agents qui répondent aux demandes en quelques secondes, en allemand, en français, en italien et en anglais, et inscrivent le résultat dans vos systèmes. Ils prennent la routine ; vos équipes gardent les affaires complexes.',
  intro: 'Ce qu’est l’agent, quelles demandes il prend en charge et comment il se branche sur les systèmes existants d’une entreprise suisse.',
  gap: {
    title: 'Le manque que nous comblons',
    intro:
      'Les PME suisses ne perdent pas des affaires à cause de mauvais produits. Elles les perdent parce que personne ne répond. Et les chiffres suisses sont plus précis que ceux qu’on cite d’habitude sur ce marché.',
    items: [
      {
        lead: '77 % de la population suisse veulent trouver et réserver un service de PME en ligne. 3 % des PME le permettent pleinement.',
        text: 'Cet écart, c’est tout le business case (localsearch × HSLU, KMU Digital Pulse 2025).',
      },
      {
        lead: 'Il n’existe pas de canal dominant à couvrir.',
        text: 'Les consommateurs suisses se répartissent presque à parts égales : 16 % préfèrent l’e-mail, 16 % le chat en ligne, 14 % le téléphone, et 77 % veulent choisir eux-mêmes le canal (ServiceNow Consumer Voice Report 2024, Suisse). Ici, l’e-mail n’a pas été supplanté comme dans les marchés dominés par les messageries ; d’autres canaux s’y sont ajoutés. Les couvrir tous avec du personnel, voilà ce qui coûte.',
      },
      {
        lead: 'La vitesse fait la différence.',
        text: 'Dans la Lead Response Management Study, les chances de qualifier un lead baissent d’environ 21× entre une réponse en 5 minutes et une réponse en 30 minutes. Ce sont des données américaines de 2007, pas suisses, mais la tendance ne fait pas débat. Ce qui est suisse : 84 % jugent important un support rapide et en temps réel, et 64 % préfèrent le libre-service à l’attente d’un interlocuteur.',
      },
      {
        lead: 'Pour une partie du marché, la recherche commence désormais dans un assistant IA.',
        text: '13 % de la population suisse commencent à chercher un service de PME dans ChatGPT ou Copilot plutôt que dans un moteur de recherche, et environ 20 % s’en sont servis l’an dernier pour se renseigner sur des services de PME (KMU Digital Pulse 2025). Une entreprise incapable de répondre en quelques secondes à une demande générée par une machine est invisible pour ce segment.',
      },
      {
        lead: "Un collaborateur de vente interne à CHF 8'000 par mois passe l’essentiel de sa journée sur les mêmes douze questions.",
        text: 'Horaires d’ouverture, délai de livraison, fourchette de prix, disponibilité, « intervenez-vous aussi dans le canton de Vaud ? ».',
      },
      {
        lead: 'Vos clients écrivent en allemand, en français, en italien et en anglais.',
        text: 'Une demande en italien à 21:00 attend en général que quelqu’un au bureau lise l’italien. WhatsApp touche environ 85 % de la population suisse : le canal existe, le personnel pour le tenir, en général, non.',
      },
    ],
    close: 'Un agent de vente est un processus métier doté d’un modèle de langage intégré. Ce n’est ni un widget de chat ni une licence de modèle.',
  },
  does: {
    title: 'Ce que fait l’agent',
    items: [
      { lead: 'Répond en quelques secondes', text: 'Sur chaque canal, à toute heure, y compris le week-end et les jours fériés, cantonaux compris.' },
      {
        lead: 'Qualifie',
        text: 'Pose les questions que pose votre meilleur commercial, dans la langue de l’acheteur, et enregistre les réponses dans des champs structurés.',
      },
      { lead: 'Recommande', text: 'Choisit produits, prestations ou créneaux dans votre catalogue, votre stock et votre liste de prix à jour, pas dans un script figé.' },
      {
        lead: 'Traite les objections courantes',
        text: 'Prix, délai de livraison, comparaison avec la concurrence, conditions : réponses tirées de vos formulations validées, pas improvisées.',
      },
      { lead: 'Conclut les petites affaires', text: 'Prend le rendez-vous, réserve le créneau, émet la QR-facture ou le lien de paiement, confirme par e-mail.' },
      {
        lead: 'Écrit dans vos systèmes',
        text: 'CRM : contact, entreprise, affaire, transcription, score, prochaine étape. ERP ou comptabilité : la commande, le bon de livraison, le projet de facture, aux conditions propres du client. Par une API quand il y en a une, par l’interface sinon. Vos systèmes restent la référence.',
      },
      {
        lead: 'Envoie ce qui suit',
        text: 'La confirmation au client, la tâche à la personne responsable de l’étape suivante, la nouvelle heure d’arrivée quand elle change, le rappel avant le rendez-vous, la facture à l’échéance. La notification fait partie du processus ; ce n’est pas un rapport sur celui-ci.',
      },
      {
        lead: 'Passe la main',
        text: 'En cas de faible certitude, de ton agacé ou de sujet figurant sur la liste d’escalade, l’agent s’arrête et transmet à une personne désignée, avec tout le contexte.',
      },
    ],
    close: 'La simultanéité n’est pas l’aspect le plus intéressant, mais elle compte les jours de campagne : des centaines de conversations en parallèle coûtent autant qu’une seule.',
  },
  fte: {
    title: 'Agent ou ETP supplémentaire',
    intro:
      'Ordres de grandeur suisses pour un poste de vente interne ou de service client, coût complet (salaire, charges sociales, poste de travail, vacances, maladie, recrutement).',
    rows: [
      { label: 'Disponibilité', agent: '24/7, 365 jours', hire: '~42 h/semaine, moins vacances et maladie' },
      { label: 'Première réponse', agent: 'Quelques secondes', hire: '15–30 min pendant les horaires, le lendemain matin en dehors' },
      { label: 'Langues', agent: 'DE, FR, IT, EN dès le premier jour', hire: 'Une ou deux, en réalité' },
      { label: 'Conversations simultanées', agent: 'Des centaines', hire: '10–15 au grand maximum' },
      { label: 'Coût d’exploitation', agent: 'Dès ~CHF 450/mois plus l’utilisation', hire: "CHF 90'000–120'000/an, coût complet" },
      { label: 'Mise en route', agent: 'Quelques jours', hire: '3–6 mois jusqu’à la pleine productivité' },
      { label: 'Constance', agent: 'La même réponse à chaque fois, versionnée et vérifiable', hire: 'Varie selon la personne, l’humeur et le jour' },
    ],
    close:
      'Lu honnêtement, ce tableau dit ceci : l’agent remplace les 70–80 % routiniers du volume de conversations, pas la personne. Négociations complexes, grands comptes, tout ce qui engage une signature ou une responsabilité reste humain. Les entreprises qui en tirent de la valeur confient à leur équipe des tâches plus exigeantes au lieu de la réduire.',
  },
  channels: {
    title: 'Canaux',
    items: [
      'WhatsApp Business',
      'Widget sur le site',
      'E-mail',
      'Telegram',
      'Instagram / Facebook',
      'SMS',
      'Microsoft Teams (agents internes)',
      'Téléphone (voir les limites plus bas)',
    ],
    note: 'Le mix de canaux se décide selon l’activité, pas selon la mode. WhatsApp touche presque tout le monde à titre privé, l’e-mail porte encore l’essentiel du trafic B2B, et le widget capte l’acheteur déjà présent sur votre page.',
  },
  integrations: {
    title: 'Intégrations',
    lead: 'Tout ce qui a une API, plus une solution de repli documentée pour les systèmes qui n’exportent qu’un CSV la nuit.',
    groups: [
      { title: 'CRM', items: ['HubSpot', 'Salesforce', 'Pipedrive', 'Microsoft Dynamics', 'Zoho'] },
      { title: 'ERP / comptabilité', items: ['bexio', 'Abacus', 'SAP Business One', 'Odoo', 'Sage'] },
      {
        title: 'Réservation et exploitation',
        items: ['Microsoft 365 / calendrier Outlook', 'Google Agenda', 'Systèmes de réservation sectoriels'],
      },
      { title: 'Paiement', items: ['QR-facture suisse', 'TWINT', 'Stripe', 'PostFinance', 'Datatrans'] },
      {
        title: 'Santé',
        items: ['vitomed', 'amétiq siMed', 'AESKULAP', 'KISIM', 'Epic', 'Meierhofer', 'HL7/FHIR', 'DICOM', 'Messagerie sécurisée HIN'],
        note: 'Ainsi que les autres logiciels de cabinet suisses. Voir les études de cas cliniques plus bas.',
      },
      {
        title: 'Logistique et terrain',
        items: ['Fleet Planner', 'Driver Pro', 'Transfer', 'Back Office'],
        note: 'La gamme 8Move, quand la demande doit devenir une mission, une tournée ou une livraison.',
      },
    ],
    note: 'Quand un système ne fonctionne qu’en lecture par conception (1C en est l’exemple classique), l’agent écrit dans une couche intermédiaire et l’ERP vient chercher les données à son propre rythme. Nous ne promettons pas d’envoi direct vers des systèmes qui ne le permettent pas.',
  },
  limits: {
    intro: 'Nous le publions parce que c’est le moyen le plus rapide de savoir s’il y a vraiment un projet.',
    items: [
      {
        title: 'Moins de ~150 demandes par mois',
        text: 'Le calcul ne tient pas. Améliorez d’abord votre processus de réponse, et appelez-nous quand le volume sera là.',
      },
      {
        title: 'Pas de base de connaissances écrite, et personne pour l’écrire',
        text: 'L’agent hérite de votre qualité. Rien à hériter, rien à déployer.',
      },
      {
        title: 'Conseil réglementé',
        text: 'Diagnostic médical, recommandation de placement, avis juridique. L’agent prend les rendez-vous, trie et prépare ; il ne conseille pas.',
      },
      {
        title: 'Suisse allemand au téléphone',
        text: 'Le dialecte suisse alémanique écrit fonctionne bien. La reconnaissance du dialecte parlé reste le point faible de tous les fournisseurs du marché, nous compris. Si vos clients appellent en Züridütsch, commencez par les canaux écrits et gardez la voix pour une deuxième phase.',
      },
      {
        title: 'Un mandat de pure réduction d’effectifs',
        text: 'Les projets présentés comme « remplacer l’équipe » donnent de moins bons résultats que ceux présentés comme « décharger l’équipe de la routine ». Nous le disons dès le premier rendez-vous.',
      },
    ],
  },
  delivery: {
    title: 'Mise en place en six étapes',
    intro:
      'Durée typique entre la signature et la mise en production : trois à cinq semaines. Le facteur limitant n’est presque jamais la technologie. C’est la vitesse à laquelle vos équipes répondent aux questions sur leurs propres processus.',
    stages: [
      {
        title: 'Audit et choix des scénarios',
        days: 'Jours 1–3',
        text: 'Nous lisons vos 200 dernières demandes. Lesquelles reviennent, lesquelles se concluent, où le processus casse. Résultat : la liste classée des conversations qui valent la peine d’être automatisées et le business case tiré de [l’économie du projet](/pricing), rempli avec vos chiffres.',
      },
      {
        title: 'Base de connaissances',
        days: 'Jours 3–10',
        text: 'Catalogue, prix, conditions de livraison, horaires, FAQ, formulations validées pour les questions délicates. Nous l’assemblons à partir de ce que vous avez déjà et interrogeons les personnes qui ont le reste en tête. C’est l’étape qui décide de la qualité, et c’est celle que les clients sous-estiment.',
      },
      {
        title: 'Canaux et systèmes',
        days: 'Jours 8–15',
        text: 'Vérification WhatsApp Business, widget, connexions CRM et ERP, calendrier, paiement. La vérification WhatsApp suit le calendrier de Meta, pas le nôtre : lancez-la dès le premier jour.',
      },
      {
        title: 'Tests',
        days: 'Jours 15–20',
        text: 'Votre équipe essaie de mettre l’agent en défaut, dans les quatre langues. Règles d’escalade, ton, cas limites, le client volontairement hostile. Rien ne part en production avant que votre responsable des ventes ait validé les transcriptions.',
      },
      {
        title: 'Lancement supervisé',
        days: 'Jours 20–25',
        text: 'Trafic réel, chaque conversation relue chaque jour. Le seuil de passage à un humain est d’abord placé volontairement haut, puis abaissé quand les transcriptions le justifient.',
      },
      {
        title: 'Exploitation et ajustements',
        days: 'En continu',
        text: 'Revue mensuelle : ce que l’agent a mal fait, ce qu’il doit maintenant prendre en charge, ce qui a changé dans vos prix et votre gamme. Le premier mois d’ajustements est compris dans les frais d’intégration.',
      },
    ],
    close: 'Les premiers effets mesurables apparaissent après deux à quatre semaines d’exploitation. Qui promet des résultats dès la première semaine montre une démo, pas une mise en place.',
  },
  languages: {
    title: 'Langues',
    paragraphs: [
      'DE, FR, IT, EN dès le premier jour. Chaque langue reçoit ses propres formulations validées, sans couche de traduction, parce qu’un acheteur romand et un acheteur alémanique ne réagissent pas à la même phrase.',
      'Quand la plateforme est 8Move, l’ensemble compte sept langues : EN, FR, DE, IT, ES, PT et AR avec mise en page de droite à gauche. C’est utile dans l’hôtellerie-restauration, la logistique et toute entreprise dont le personnel non suisse lit la même interface.',
      'Les textes en allemand standard sont de grande qualité. Le suisse allemand écrit est pris en charge. La reconnaissance du dialecte parlé est le point faible que nous assumons ; voir [Là où nous disons non](#limits) plus haut.',
    ],
  },
  data: {
    title: 'Protection des données',
    items: [
      {
        lead: 'nLPD et RGPD',
        text: 'Les déploiements respectent la loi fédérale révisée sur la protection des données et, si vous servez des clients dans l’UE, le RGPD. Vous recevez le contrat de sous-traitance, l’inscription au registre des activités de traitement et les textes de la déclaration de confidentialité pour les canaux. Nous les rédigeons pour vous.',
      },
      {
        lead: 'Hébergement en Suisse ou dans l’UE, à votre choix',
        text: 'Les données de conversation et la base de connaissances restent dans la région que vous choisissez. Sous-traitants documentés et listés dans le contrat.',
      },
      {
        lead: 'Vos données n’entraînent aucun modèle',
        text: 'Exclu par contrat, avec les conditions du fournisseur en annexe pour que vous puissiez le vérifier au lieu de nous croire sur parole.',
      },
      {
        lead: 'Une conservation que vous maîtrisez',
        text: 'Durées de conservation paramétrables, suppression sur demande, export en format ouvert à la résiliation. Aucune dépendance par vos propres données.',
      },
      {
        lead: 'Les passages à un humain sont journalisés',
        text: 'Chaque escalade, chaque intervention manuelle, la transcription complète est conservée pour audit. Quand une conversation touche des données de santé, financières ou relatives à l’emploi, le seuil d’escalade est plus strict par défaut.',
      },
    ],
  },
  guarantees: {
    title: 'Ce que nous garantissons',
    items: [
      {
        lead: 'Des frais d’intégration fixes',
        text: 'Chiffrés après le workshop, sur la base d’un périmètre écrit. Les changements de périmètre sont chiffrés à part, jamais absorbés en silence dans la ligne mensuelle.',
      },
      {
        lead: 'Vos systèmes restent les vôtres',
        text: 'Aucune dépendance propriétaire côté CRM ou ERP. Si vous résiliez, la base de connaissances, les transcriptions et les définitions de scénarios vous sont exportées.',
      },
      {
        lead: 'Indépendant du modèle',
        text: 'L’agent est conçu pour que le modèle sous-jacent puisse être remplacé. Cela vous protège de la politique tarifaire d’un seul fournisseur et de sa panne.',
      },
      { lead: 'Un ingénieur attitré, pas une file de tickets', text: 'La même personne du workshop à l’exploitation.' },
      {
        lead: 'Nous vous disons quand ne pas acheter',
        text: 'Les critères d’exclusion de [Là où nous disons non](#limits) sont appliqués lors du workshop, avant toute signature.',
      },
    ],
  },
  faq: {
    title: 'Questions fréquentes',
    items: [
      {
        question: 'Et si l’agent se trompe ?',
        answer:
          'En cas de faible certitude, il escalade au lieu d’improviser. Le seuil est un réglage, et nous le fixons prudemment au départ. Prix, stock et disponibilités sont lus en direct dans vos systèmes ; l’agent ne cite rien de mémoire.',
      },
      {
        question: 'Les clients sauront-ils qu’ils parlent à une machine ?',
        answer:
          'Oui, c’est annoncé d’emblée. La dissimulation paraît malhonnête et, pour les entreprises qui s’adressent aux consommateurs dans l’UE, les obligations de transparence de l’AI Act imposent désormais de l’annoncer. Un agent déclaré qui répond bien fait mieux qu’un agent caché qui répond mal.',
      },
      {
        question: 'Nous avons déjà eu un chatbot, et ce fut un désastre.',
        answer:
          'C’était en général un bot à arbre de décision, sans accès aux données en direct, sans escalade et sans responsable après la mise en ligne. Apportez les transcriptions au workshop. C’est le moyen le plus rapide de voir ce qui changerait.',
      },
      {
        question: 'Pouvons-nous commencer petit ?',
        answer: 'C’est la voie que nous recommandons. Un canal, un scénario, un mois. On étend sur la base des résultats.',
      },
      {
        question: 'Qui possède quoi après la résiliation ?',
        answer:
          'Vous possédez la base de connaissances, les données de conversation et les définitions de scénarios. Nous possédons le code de la plateforme. C’est écrit clairement dans le contrat.',
      },
    ],
  },
  next: {
    title: 'Prochaine étape',
    text: 'Workshop gratuit de 45 minutes. Apportez votre volume de demandes, vos temps de réponse et votre mix de canaux. Vous repartez avec votre propre modèle de ROI, que nous travaillions ensemble ou non. Si les chiffres tiennent, nous construisons un prototype fonctionnel sur vos propres données en 10 jours ouvrables.',
    economics: 'Voir l’économie du projet',
  },
}
