# Trident semantic seed library

Research behind `src/data/semantic-seed-terms.ts`: the fixed term list the shared admin uses to check Trident's semantic coverage.

> **Status: draft for owner review** (2026-11-09). Terms are not demand-checked yet.

## Method and sources

1. **Own content.** Service, solution and technology names and titles from `src/data/{services,solutions,technologies,use-cases}.ts`, the 12 location pages in `src/data/locations/`, and the DE/FR/IT copy in `messages/`. Where the site already uses a phrase (for example "Ablösung von Altsystemen", "applicazioni web su misura", "assistants basés sur le RAG"), the seed keeps that phrase so coverage can match it.
2. **SERP and competitors.** Web searches per cluster and language (2026-11-09) for Swiss and DACH software agencies, directories and vendor pages. Sources are listed per cluster below.
3. **Google Search Console: skipped.** The service account does not have access to the old trident-software.ch property yet. **To do when GSC access exists:** pull 16 months of queries for the old domain through 8move `lib/gsc.ts` with `site='trident'`, add queries with real impressions to the matching cluster, and drop seeds with no demand signal after the new site has run 3 months.

### Rules applied

- Four languages per topic: EN, DE, FR, IT. Cluster name format is `"<LANG> — <Topic>"`, with the topic in English so the dashboard groups the same topic across languages.
- Native market phrasing, not translation. Example: DE uses "Individualsoftware" and "Body Leasing", FR uses "logiciel métier" and "régie", IT uses "software house" and "gestionale".
- Swiss spelling: "ss" not "ß" ("massgeschneiderte", "Aussendienst-App").
- Coverage matching is a lower-case substring search. Terms are 1–4 word phrases that a page can contain literally. Terms avoid apostrophes (`d'`, `l'`), because pages mix `'` and `’`.
- A term appears in only one cluster. The flat `SEMANTIC_SEED_TERMS` list must have the same length as the sum of the clusters; a test checks this.

## Clusters

Totals: 9 topics × 4 languages = **36 clusters, 438 terms** (10–14 per cluster).

| Topic | EN | DE | FR | IT |
|---|---|---|---|---|
| AI / LLM | 13 | 12 | 11 | 11 |
| Web Development | 13 | 13 | 12 | 12 |
| Mobile Development | 12 | 11 | 10 | 10 |
| Outsourcing / Dedicated Team | 12 | 11 | 11 | 11 |
| Custom Software / Business Systems | 13 | 14 | 13 | 14 |
| IoT | 14 | 13 | 12 | 13 |
| Logistics Software | 13 | 12 | 12 | 12 |
| Technologies | 13 | 12 | 12 | 12 |
| Locations | 13 | 13 | 12 | 11 |

### AI / LLM

Swiss market language moved from "chatbot" to "AI agents" and "assistants". Swiss sources stress data sovereignty and Swiss hosting, so DE has "datensouveräne KI". FR and IT use "IA" (not "AI"); DE uses "KI". RAG and fine-tuning terms come from the site's own AI service.
Sources: [SATW KI und KMU](https://www.satw.ch/fileadmin/Documents/SATW/Focus_topics/Artificial_Intelligence/KI_und_KMU_Serie/Fuer_jede_Unternehmensgroesse_den_passenden_KI-Einstieg.pdf), [Netzwoche datensouveräne KI](https://www.netzwoche.ch/news/2025-10-13/datensouveraene-ki-datenhoheit-und-ki-innovation-im-unternehmenskontext), [LeverX CH KI-Agenten](https://leverx.com/de-ch/services/ai-agent-development), [KMU-Portal FR](https://www.kmu.admin.ch/kmu/fr/home/actuel/theme-du-mois/2025/conseils-integration-ia-entreprise.html), [Swisscom IT agenti IA](https://www.swisscom.ch/it/b2bmag/data-driven-technologies/vantaggi-business-genai/), [KMU-Portal IT](https://www.kmu.admin.ch/it/cinque-consigli-per-unintegrazione-efficace-dellia-nella-propria-azienda).

### Web Development

DE Swiss agencies say "Webagentur", "Webapplikation" and "Website erstellen lassen"; "KMU-Website" matches the site's own product. FR Suisse romande agencies use "création site internet", "site vitrine" and "application web sur mesure". IT Ticino agencies use "realizzazione siti web" and "sito web aziendale".
Sources: [drweb Webagenturen Schweiz](https://www.drweb.de/webagenturen-schweiz-vergleich/), [beyondweb KMU](https://www.beyondweb.ch/en/website-for-smes/), [Infomaniak partner agencies FR](https://www.infomaniak.com/fr/creer-un-site/professionnel/nos-agences-partenaires/292585), [Edana Montreux](https://edana.ch/en/website-creation-montreux-web-development), [Infomaniak partner agencies IT](https://www.infomaniak.com/it/creare-un-sito-web/professionista/le-nostre-agenzie-partner/119880).

### Mobile Development

Competitors in Zurich and Geneva lead with "iOS and Android", native vs cross-platform, and Flutter. DE uses "App-Entwicklung" and "App entwickeln lassen". "Aussendienst-App" / "application terrain" / "app per servizio esterno" match Trident's field-service use case.
Sources: [Swisstomato](https://swisstomato.ch/en/app-development-geneva-zurich/), [Novu](https://novu.ch/en/offers/apps), [devedis](https://devedis.ch/en/services/mobile-apps), [Clutch CH app developers](https://clutch.co/ch/app-developers.md), [Mermio (Infomaniak)](https://www.infomaniak.com/fr/creer-un-site/professionnel/nos-agences-partenaires/1575192), [Edana Sion mobile](https://edana.ch/en/mobile-application-development-sion-ios-android/).

### Outsourcing / Dedicated Team

The Swiss market compares three models: project outsourcing, staff augmentation and a managed dedicated team; nearshore is sold as "same time zone". DE adds "Body Leasing" and "IT-Personalverleih" (Swiss legal term for staff hire). FR uses "régie" and "CTO externalisé"; IT uses "outstaffing" and "team dedicato". "CTO as a service" matches Trident's own service.
Sources: [Edana nearshore guide](https://edana.ch/en/2026/06/09/optimizing-it-collaboration-with-nearshore-a-practical-guide-to-agile-controlled-outsourcing/), [drweb Nearshoring Vergleich](https://www.drweb.de/nearshoring-softwareentwicklung-vergleich/), [Computerwoche](https://www.computerwoche.de/article/2824713/mit-der-it-ins-ausland.html), [muehlemann+popp team augmentation](https://muehlemann-popp.ch/services/team-augmentation), [La Fabrique du Net](https://www.lafabriquedunet.fr/agences/tendances/externalisation-logicielle-un-moteur-dinnovation), [Innowise IT team dedicato](https://innowise.com/it/assumi-sviluppatori/team-dedicato/).

### Custom Software / Business Systems

This is the core commercial cluster. DE: "Individualsoftware" and "massgeschneiderte Software" (Swiss Made Software uses "Individualsoftwareentwicklung"). FR: "logiciel sur mesure" and "logiciel métier". IT: "software su misura", "software personalizzato" and "gestionale". ERP/CRM integration and legacy replacement come from the site's services.
Sources: [Swiss Made Software](https://www.swissmadesoftware.org/en/produkte-und-services/liste/830cf253-6d63-405a-b9a1-b57ce5930bb0/programmierung/individualsoftwareentwicklung.html), [Panter](https://www.panter.ch/en/offer/development/), [Modeso](https://modeso.ch/services/full-cycle-project-development), [SwissOps (Infomaniak)](https://www.infomaniak.com/fr/creer-un-site/professionnel/nos-agences-partenaires/3032), [Innowise FR](https://innowise.com/fr/services/developpement-de-logiciels-sur-mesure/), [Zunapro IT](https://www.zunapro.com/switzerland/it/software-personalizzato).

### IoT

Swiss providers talk about platforms, sensors, embedded systems and device updates. DE: "Embedded-Systeme", "Sensordaten", "Industrie 4.0". FR: "objets connectés" and "systèmes embarqués" (not "IoT" alone). IT: "dispositivi connessi" and "sistemi embedded".
Sources: [Swisscom IoT platforms](https://www.swisscom.ch/de/business/enterprise/angebot/iot/iot-solutions/iot-platforms-and-frameworks.html), [ELCA IoT-Datenplattform](https://www.elca.ch/de/unsere-fachkompetenzen/data-analytics-ai/iot-datenplattform-fuer-produzierende-industrie-und), [Swiss Made Software IoT](https://www.swissmadesoftware.org/en/produkte-und-services/liste/5c4ea1c6-ad7a-4258-acee-1e391be50055/internet-of-things-iot/allgemein.html), [Swisscom IoT PME FR](https://www.swisscom.ch/fr/b2bmag/data-driven-technologies/internet-des-objets-innovation-pme-suisses/), [Swisscom IoT IT](https://www.swisscom.ch/it/business/enterprise/offerta/iot/iot-solutions.html).

### Logistics Software

The SERP for this topic is product-led (TMS, WMS, route planning), with few custom-build providers. This is an opening for Trident. DE uses "Tourenplanung", "Disposition" and "Speditionssoftware". FR uses "tournées" and "dernier kilomètre", and IT uses "gestione magazzino" and "ultimo miglio". The bare acronym "TMS" is left out because it is too short for substring matching.
Sources: [softguide Transport und Logistik](https://www.softguide.de/software/transport-und-logistik), [Logistik Heute Xplanis](https://logistik-heute.de/news/logistik-it-kmu-spezialist-xplanis-steigt-den-deutschen-tms-markt-ein-83937.html), [Innowise ERP logistique](https://innowise.com/fr/blog/erp-for-logistics/), [Aptean TMS FR](https://aptean.com/fr-FR/solutions/tms/aptean-industrial-manufacturing-tms), [Capterra IT magazzino](https://www.capterra.it/blog/4083/software-gestione-logistica-e-magazzino).

### Technologies

These are the site's own stack pages (React, Next.js, Node.js, TypeScript, Python, Flutter, PostgreSQL, Docker & Kubernetes). They are phrased as "<tech> development/Entwickler/développeur/sviluppatore", because buyers and job boards search that way. Bare tech names appear only once (EN) so that clusters do not share terms. FR/IT add "hosting in Switzerland" because Swiss hosting is a common buying argument.
Sources: [fratch.io Next.js CH](https://fratch.io/en/technology/nextjs/switzerland), [techbehemoths Next.js CH](https://techbehemoths.com/companies/next-js/switzerland), [jobup Next.js/React](https://www.jobup.ch/en/jobs/detail/c77f05ff-210b-4c80-9bbc-f29705bb36c9), [Panter stack](https://www.panter.ch/en/offer/development/).

### Locations

"<service> + <city>" is the standard local pattern on competitor pages (for example Edana has city pages for Sion, Geneva and Lausanne). City names use each language's form: Zürich/Genf/Luzern in DE, Genève in FR, Zurigo/Ginevra in IT. Each language covers its own region first: Deutschschweiz, Suisse romande including Sion and Valais (Trident's HQ), Ticino. IT adds "software house", the usual Italian-Swiss term for a software company.
Sources: [Edana Sion](https://edana.ch/en/digital-agency-sion/), [Edana Geneva](https://edana.ch/en/software-development-geneva-engineering-company/), [Clutch CH developers](https://clutch.co/ch/developers.md), [Infomaniak partner agencies Lugano](https://www.infomaniak.com/it/creare-un-sito-web/professionista/le-nostre-agenzie-partner/97998).

## Open questions

1. **Demand check.** Volumes were not measured (no keyword tool or GSC access). Which seeds to promote into a validated core should wait for GSC data.
2. **Generic single words.** A few terms are short and broad ("Nearshoring", "Softwareentwicklung", "suisse romande", "kubernetes"). They give coverage signal but no ranking intent. Keep them, or replace them with longer phrases?
3. **DACH/EU expansion.** The location clusters cover Switzerland only. Add Germany/Austria cities (for example "Softwareentwicklung München") when the DACH push starts?
4. **Topics not covered.** Cloud/DevOps, UI/UX design and industry verticals (fintech, healthcare, proptech) have site pages but no cluster yet. Should they get their own clusters?
5. **Brand terms.** "Trident Software" and similar brand queries are left out on purpose; GSC will show them separately.
