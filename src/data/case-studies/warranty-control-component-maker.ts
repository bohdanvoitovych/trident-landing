import type { CaseRecord } from '../cases'

const record: CaseRecord = {
  slug: 'warranty-control-component-maker',
  publishedAt: '2026-10-14',
  client: 'Component manufacturer, Italy',
  services: ['embedded-and-iot', 'software-engineering'],
  techStack: [],
  evidence: 'measured',
  relatedCases: [],
  content: {
    en: {
      client: 'Component manufacturer, Italy',
      industry: 'Manufacturing, connected equipment · Italy',
      hero: {
        title: 'Warranty control for a coffee-equipment component manufacturer',
        tagline: 'From paying for every claim to measuring the cause, and selling the measurement',
      },
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
            'An Italian manufacturer of fluid-control components (solenoid valves, flow meters, pressure regulators and filters) supplied to OEMs that build professional coffee and espresso machines, and to adjacent appliance makers.',
            "The components are certified, tested and sold in volume to machine builders. They then disappear into a machine, which is sold to a café, a restaurant or an office, and installed on whatever water supply that building happens to have. The manufacturer's warranty obligation follows the component all the way down that chain, into buildings it has never seen and water it has never measured.",
            'Warranty service was costing 1.37 % of revenue.',
          ],
        },
        {
          title: 'Before the change: up to 85 % of the damage happened outside the factory',
          paragraphs: [
            'Field analysis attributed up to 85 % of component failures to water, not manufacturing defects. Water outside specification, filters left past their capacity, purifiers and filtration stations never serviced.',
            'The physics is well documented. The specialty coffee standard puts total dissolved solids in a working range of roughly 75–250 ppm with a target near 150, calcium hardness at 50–175 ppm, alkalinity at 40–75 ppm. Above that, scale forms fast: it restricts flow, coats heating elements, and attacks exactly the parts this company makes, namely pumps, valves and flow meters. Below it, water turns aggressive in a different way. Either extreme ends in a warranty claim against the component.',
          ],
        },
        {
          title: 'The warranty gap',
          paragraphs: ['Three facts that together guarantee the manufacturer pays:'],
          items: [
            'The contract says water must stay within specification: every supply agreement names the limits the machine may run on',
            'In reality nothing measures it. There is no record of what actually ran through the machine',
            'So every claim gets paid. With no evidence, there are no grounds to refuse a bad-water repair',
          ],
          closing: [
            'A returned valve tells you it is scaled. It does not tell you whose fault that is, and in the absence of proof, the answer defaults to the party with the warranty obligation.',
          ],
        },
        {
          title: 'Service was scheduled by the calendar, not by the water',
          paragraphs: [
            'Filter changes and maintenance visits were planned by elapsed time or by machine lifetime. A machine in a hard-water town drawing 300 litres a day and a machine on soft municipal supply drawing 40 got the same service interval. One was serviced far too late, the other too often, and neither schedule reflected what the water was doing.',
          ],
        },
        {
          title: 'R&D was working from returns and anecdote',
          paragraphs: [
            'The only field signal reaching engineering was the broken part in a box, plus whatever the service technician chose to write on the form. No operating history, no water history, no duty cycle. Design decisions about materials and tolerances were based on the least informative data available.',
          ],
        },
        {
          title: 'What we built',
          paragraphs: [
            "WaterTDS: a measurement device, a telemetry platform, and two portals, adapted so that the manufacturer's own components sit inside the measured circuit.",
          ],
        },
        {
          title: '1. The TDSBot in the water line',
          paragraphs: [
            "A device installed alongside the equipment the manufacturer already fits: TDS measured before and after the filter, plus flow and temperature. That layout is the whole point. Measuring in and out of the filter separates the incoming supply from the filter's condition, so an exhausted cartridge shows up as a rising outlet reading rather than a failed machine six weeks later.",
            'The device streams telemetry continuously. No technician visit is required to read it, and no one has to remember to take a sample.',
          ],
        },
        {
          title: '2. The platform behind it',
          paragraphs: [
            'Telemetry lands in a platform that turns readings into events: water drifting out of specification, a filter approaching capacity, consumption that no longer matches the service plan, a temperature profile that indicates scale. Alerts carry the cause, not just the symptom. That distinction makes them actionable for a service company and admissible for a warranty department.',
          ],
        },
        {
          title: '3. The equipment portal for the manufacturer',
          paragraphs: [
            'Every installed unit with its full operating history: water in and out, litres passed, temperature, filter status, alerts and interventions. When a claim arrives, the warranty department opens the record for that machine and reads what the water was doing in the weeks before the failure.',
          ],
        },
        {
          title: '4. The B2B portal for service companies',
          paragraphs: [
            'The maintenance companies that actually change the filters got their own workspace: the fleet they are responsible for, jobs generated from the data rather than from a calendar, and a history that shows what was done and when. The manufacturer can now see their work, and their punctuality becomes measurable.',
          ],
        },
        {
          title: '5. The predictive-maintenance model',
          paragraphs: [
            'Service is scheduled by litres passed and measured water quality, not by lifetime. The model estimates when a filter will be exhausted and when scale risk crosses a threshold for that specific installation, and raises the job before damage occurs rather than after.',
          ],
        },
        {
          title: '6. The warranty evidence path',
          paragraphs: [
            'For the OEM the manufacturer supplies, an API delivers the operating record behind a claim. Valid claims move faster because the evidence is already assembled; unsupported claims can be challenged with a documented water history. The warranty terms stay the same. What changes is who carries the cost of running a machine on bad water.',
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
          { label: 'Revenue lines', before: 'one: components', after: 'three: components, TDSBot devices, SaaS subscription' },
          { label: 'Field data reaching R&D', before: 'returns and technician notes', after: 'continuous operating and water history across the installed base' },
        ],
      },
      next: [
        'Wider component coverage: extending the measured circuit beyond the first component families, so more of the warranty exposure sits inside the evidence.',
        'Failure-mode models per component, trained on the accumulating field history rather than on bench testing alone.',
        'Service-company scoring in the B2B portal: punctuality and quality of intervention as a visible metric, since the data now supports it.',
        "Offering the platform to machine manufacturers as their own warranty instrument, not only as the component supplier's.",
      ],
      elsewhereIntro:
        'Wherever a manufacturer carries a warranty obligation for a product that fails because of how it is used, in conditions the manufacturer cannot see:',
      elsewhere: [
        'water-carrying appliances of every kind: ice machines, dishwashers and ware-washers, steam ovens, drinking-water systems',
        'filtration and treatment vendors, whose product is the thing being consumed',
        "any component supplier whose parts fail inside someone else's machine",
        'equipment rental and managed-service fleets, where maintenance timing decides the margin',
      ],
      elsewhereOutro:
        'The pattern underneath is the same in each: measure the operating condition, and the argument about who pays stops being an argument.',
      meta: {
        title: 'Coffee-equipment warranty control | Trident Software',
        description:
          'Water telemetry for a coffee-equipment component maker: warranty cost from 1.37 % to 0.51 % of revenue, and two new revenue lines from the measurement.',
      },
    },
    de: {
      client: 'Komponentenhersteller, Italien',
      industry: 'Fertigung, vernetzte Geräte · Italien',
      hero: {
        title: 'Garantiekontrolle für einen Hersteller von Komponenten für Kaffeemaschinen',
        tagline: 'Statt jeden Garantiefall zu bezahlen, die Ursache messen und die Messung verkaufen',
      },
      note: 'Ein umgesetztes Projekt für einen italienischen Komponentenhersteller, beschrieben ohne den Namen des Kunden. Die Garantie- und Wasserzahlen stammen aus der eigenen Buchhaltung und den Felddaten des Kunden; Branchenvergleiche sind veröffentlichte Benchmarks und als solche gekennzeichnet.',
      results: [
        { metric: 'Garantiekosten, Anteil am Umsatz', value: '1.37 % → 0.51 %' },
        { metric: 'Umsatzquellen', value: 'eine → drei' },
        { metric: 'Ausfälle durch Wasser statt durch Defekte', value: 'bis zu 85 %' },
      ],
      sections: [
        {
          title: 'Das Unternehmen',
          paragraphs: [
            'Ein italienischer Hersteller von Komponenten zur Flüssigkeitssteuerung (Magnetventile, Durchflussmesser, Druckregler und Filter), die an OEMs für professionelle Kaffee- und Espressomaschinen sowie an verwandte Gerätehersteller geliefert werden.',
            'Die Komponenten werden zertifiziert, geprüft und in grossen Stückzahlen an Maschinenbauer verkauft. Danach verschwinden sie in einer Maschine, die an ein Café, ein Restaurant oder ein Büro geht und an der Wasserversorgung hängt, die das Gebäude eben hat. Die Garantiepflicht des Herstellers folgt der Komponente durch diese ganze Kette, in Gebäude, die er nie gesehen hat, und an Wasser, das er nie gemessen hat.',
            'Der Garantieservice kostete 1.37% des Umsatzes.',
          ],
        },
        {
          title: 'Vorher: Bis zu 85 % der Schäden entstanden ausserhalb der Fabrik',
          paragraphs: [
            'Die Feldanalyse führte bis zu 85% der Komponentenausfälle auf das Wasser zurück, nicht auf Fertigungsfehler. Wasser ausserhalb der Spezifikation, Filter über ihre Kapazität hinaus im Einsatz, Enthärter und Filterstationen, die nie gewartet wurden.',
            'Die Physik dazu ist gut belegt. Der Standard für Specialty Coffee sieht für gelöste Feststoffe (TDS) einen Arbeitsbereich von etwa 75–250 ppm mit einem Zielwert um 150 vor, für die Calciumhärte 50–175 ppm, für die Alkalinität 40–75 ppm. Darüber bildet sich schnell Kalk: Er verengt den Durchfluss, überzieht Heizelemente und greift genau die Teile an, die diese Firma herstellt, also Pumpen, Ventile und Durchflussmesser. Darunter wird das Wasser auf andere Weise aggressiv. Beide Enden des Bereichs enden als Garantiefall gegen die Komponente.',
          ],
        },
        {
          title: 'Die Garantielücke',
          paragraphs: ['Drei Tatsachen, die zusammen garantieren, dass der Hersteller zahlt:'],
          items: [
            'Der Vertrag verlangt Wasser innerhalb der Spezifikation: Jeder Liefervertrag nennt die Grenzwerte, mit denen die Maschine betrieben werden darf',
            'In Wirklichkeit misst es niemand. Es gibt keine Aufzeichnung darüber, was tatsächlich durch die Maschine lief',
            'Also wird jeder Fall bezahlt. Ohne Beweis gibt es keinen Grund, eine Reparatur wegen schlechten Wassers abzulehnen',
          ],
          closing: [
            'Ein zurückgeschicktes Ventil zeigt, dass es verkalkt ist. Es zeigt nicht, wessen Schuld das ist, und ohne Beweis landet die Antwort bei der Partei mit der Garantiepflicht.',
          ],
        },
        {
          title: 'Der Service richtete sich nach dem Kalender, nicht nach dem Wasser',
          paragraphs: [
            'Filterwechsel und Wartungsbesuche wurden nach verstrichener Zeit oder nach Lebensdauer der Maschine geplant. Eine Maschine in einer Stadt mit hartem Wasser, die 300 Liter pro Tag zieht, und eine Maschine an weichem städtischem Wasser mit 40 Litern bekamen dasselbe Serviceintervall. Die eine wurde viel zu spät gewartet, die andere zu oft, und keiner der beiden Pläne bildete ab, was das Wasser tat.',
          ],
        },
        {
          title: 'Die Entwicklung arbeitete mit Rücksendungen und Anekdoten',
          paragraphs: [
            'Das einzige Signal aus dem Feld, das die Entwicklung erreichte, war das defekte Teil in einer Schachtel, dazu das, was der Servicetechniker aufs Formular schrieb. Keine Betriebsgeschichte, keine Wassergeschichte, kein Lastprofil. Entscheide über Materialien und Toleranzen fielen auf der Grundlage der dürftigsten Daten, die die Firma hätte haben können.',
          ],
        },
        {
          title: 'Was wir gebaut haben',
          paragraphs: [
            'WaterTDS: ein Messgerät, eine Telemetrieplattform und zwei Portale, so angepasst, dass die eigenen Komponenten des Herstellers im gemessenen Kreislauf liegen.',
          ],
        },
        {
          title: '1. Der TDSBot in der Wasserleitung',
          paragraphs: [
            'Ein Gerät, das neben der Ausrüstung eingebaut wird, die der Hersteller ohnehin montiert: TDS vor und nach dem Filter, dazu Durchfluss und Temperatur. Genau diese Anordnung ist der Kern. Die Messung vor und nach dem Filter trennt die Qualität des zufliessenden Wassers vom Zustand des Filters, sodass sich eine erschöpfte Kartusche als steigender Wert am Ausgang zeigt und nicht sechs Wochen später als ausgefallene Maschine.',
            'Das Gerät sendet laufend Telemetriedaten. Niemand muss zum Ablesen vorbeikommen, und niemand muss daran denken, eine Probe zu nehmen.',
          ],
        },
        {
          title: '2. Die Plattform dahinter',
          paragraphs: [
            'Die Telemetrie landet auf einer Plattform, die Messwerte in Ereignisse übersetzt: Wasser, das aus der Spezifikation driftet, ein Filter nahe seiner Kapazität, ein Verbrauch, der nicht mehr zum Serviceplan passt, ein Temperaturprofil, das auf Kalk hinweist. Die Alarme nennen die Ursache und nicht bloss das Symptom. Deshalb kann ein Servicebetrieb danach handeln und eine Garantieabteilung sie als Beleg verwenden.',
          ],
        },
        {
          title: '3. Das Geräteportal für den Hersteller',
          paragraphs: [
            'Jedes installierte Gerät mit seiner vollständigen Betriebsgeschichte: Wasser am Ein- und Ausgang, durchgeflossene Liter, Temperatur, Filterstatus, Alarme und Einsätze. Kommt ein Garantiefall, öffnet die Garantieabteilung den Datensatz dieser Maschine und liest nach, was das Wasser in den Wochen vor dem Ausfall tat.',
          ],
        },
        {
          title: '4. Das B2B-Portal für Servicebetriebe',
          paragraphs: [
            'Die Wartungsfirmen, die die Filter tatsächlich wechseln, erhielten einen eigenen Arbeitsbereich: die Flotte, für die sie zuständig sind, Aufträge aus den Daten statt aus dem Kalender und eine Historie, die zeigt, was wann gemacht wurde. Der Hersteller sieht ihre Arbeit nun, und ihre Pünktlichkeit wird messbar.',
          ],
        },
        {
          title: '5. Das Modell für vorausschauende Wartung',
          paragraphs: [
            'Der Service richtet sich nach durchgeflossenen Litern und gemessener Wasserqualität, nicht nach der Lebensdauer. Das Modell schätzt für jede einzelne Installation, wann ein Filter erschöpft ist und wann das Kalkrisiko eine Schwelle überschreitet, und löst den Auftrag aus, bevor der Schaden entsteht, nicht danach.',
          ],
        },
        {
          title: '6. Der Weg zum Garantienachweis',
          paragraphs: [
            'Für den OEM, den der Hersteller beliefert, liefert eine API die Betriebsdaten hinter einem Garantiefall. Berechtigte Fälle gehen schneller durch, weil der Beleg schon bereitliegt; unberechtigte lassen sich mit einer dokumentierten Wassergeschichte anfechten. Die Garantiebedingungen bleiben gleich. Es ändert sich, wer die Kosten trägt, wenn eine Maschine mit schlechtem Wasser läuft.',
          ],
        },
      ],
      table: {
        title: 'Ergebnisse',
        beforeLabel: 'Vorher',
        afterLabel: 'Nachher',
        rows: [
          { label: 'Garantiekosten', before: '1.37 % des Umsatzes', after: '0.51 % des Umsatzes' },
          { label: 'Grundlage eines Garantieentscheids', before: 'das zurückgeschickte Teil und eine Meinung', after: 'TDS am Ein- und Ausgang, Liter, Temperatur und Filterhistorie des Geräts' },
          { label: 'Serviceplanung', before: 'Kalender und Lebensdauer der Maschine', after: 'durchgeflossene Liter und gemessene Wasserqualität' },
          { label: 'Wer zahlt für Wasser ausserhalb der Spezifikation', before: 'standardmässig der Komponentenhersteller', after: 'der Eigentümer der Maschine, belegt' },
          { label: 'Umsatzquellen', before: 'eine: Komponenten', after: 'drei: Komponenten, TDSBot-Geräte, SaaS-Abonnement' },
          { label: 'Felddaten für die Entwicklung', before: 'Rücksendungen und Notizen der Techniker', after: 'laufende Betriebs- und Wassergeschichte der gesamten installierten Basis' },
        ],
      },
      next: [
        'Breitere Abdeckung der Komponenten: den gemessenen Kreislauf über die ersten Komponentenfamilien hinaus erweitern, damit mehr vom Garantierisiko durch Belege gedeckt ist.',
        'Ausfallmodelle pro Komponente, trainiert auf der wachsenden Felddatenbasis statt nur auf Prüfstandtests.',
        'Bewertung der Servicebetriebe im B2B-Portal: Pünktlichkeit und Qualität der Einsätze als sichtbare Kennzahl, weil die Daten das jetzt hergeben.',
        'Die Plattform den Maschinenherstellern als eigenes Garantieinstrument anbieten, nicht nur als Instrument des Komponentenlieferanten.',
      ],
      elsewhereIntro:
        'Überall dort, wo ein Hersteller eine Garantiepflicht für ein Produkt trägt, das wegen seiner Nutzung ausfällt, unter Bedingungen, die der Hersteller nicht sieht:',
      elsewhere: [
        'wasserführende Geräte aller Art: Eismaschinen, Geschirrspüler und Spülanlagen, Dampfgarer, Trinkwassersysteme',
        'Anbieter von Filtration und Wasseraufbereitung, deren Produkt selbst das Verbrauchsgut ist',
        'jeder Komponentenlieferant, dessen Teile in der Maschine eines anderen ausfallen',
        'Gerätevermietung und Flotten im Managed Service, wo der Zeitpunkt der Wartung über die Marge entscheidet',
      ],
      elsewhereOutro:
        'Das Muster dahinter ist überall dasselbe: Wer die Betriebsbedingungen misst, muss nicht mehr darüber streiten, wer zahlt.',
      meta: {
        title: 'Garantiekosten von 1.37 % auf 0.51 % des Umsatzes | Trident Software',
        description:
          'Wassertelemetrie für einen Hersteller von Kaffeemaschinen-Komponenten: Garantiekosten von 1.37 % auf 0.51 % des Umsatzes, zwei neue Umsatzquellen.',
      },
    },
    fr: {
      client: 'Fabricant de composants, Italie',
      industry: 'Industrie, équipements connectés · Italie',
      hero: {
        title: 'Contrôle de la garantie pour un fabricant de composants de machines à café',
        tagline: 'Ne plus payer chaque réclamation, mesurer la cause et vendre la mesure',
      },
      note: "Un projet livré pour un fabricant italien de composants, décrit sans le nom du client. Les chiffres de garantie et d'eau viennent des comptes et des données terrain du client ; les comparaisons sectorielles sont des références publiées et signalées comme telles.",
      results: [
        { metric: "Coût de garantie, part du chiffre d'affaires", value: '1.37 % → 0.51 %' },
        { metric: 'Sources de revenus', value: 'une → trois' },
        { metric: "Pannes dues à l'eau, pas à des défauts", value: "jusqu'à 85 %" },
      ],
      sections: [
        {
          title: "L'entreprise",
          paragraphs: [
            "Un fabricant italien de composants de contrôle des fluides (électrovannes, débitmètres, régulateurs de pression et filtres) livrés aux OEM qui construisent des machines à café et à espresso professionnelles, ainsi qu'à des fabricants d'appareils voisins.",
            "Les composants sont certifiés, testés et vendus en volume aux constructeurs. Ils disparaissent ensuite dans une machine, vendue à un café, un restaurant ou un bureau, et branchée sur l'eau dont dispose le bâtiment. L'obligation de garantie du fabricant suit le composant tout au long de cette chaîne, dans des bâtiments qu'il n'a jamais vus et avec une eau qu'il n'a jamais mesurée.",
            "Le service de garantie coûtait 1.37% du chiffre d'affaires.",
          ],
        },
        {
          title: "Avant : jusqu'à 85 % des dégâts naissaient hors de l'usine",
          paragraphs: [
            "L'analyse terrain attribuait jusqu'à 85% des pannes de composants à l'eau, et non à des défauts de fabrication. Eau hors spécification, filtres utilisés au-delà de leur capacité, adoucisseurs et stations de filtration jamais entretenus.",
            "La physique est bien documentée. Le standard du café de spécialité fixe les solides dissous totaux dans une plage d'environ 75–250 ppm avec une cible proche de 150, la dureté calcique à 50–175 ppm, l'alcalinité à 40–75 ppm. Au-dessus, le calcaire se forme vite : il réduit le débit, recouvre les résistances et attaque précisément les pièces que fabrique cette entreprise, c'est-à-dire pompes, vannes et débitmètres. En dessous, l'eau devient agressive d'une autre manière. Les deux extrêmes finissent en réclamation de garantie contre le composant.",
          ],
        },
        {
          title: 'Le trou dans la garantie',
          paragraphs: ['Trois faits qui, ensemble, garantissent que le fabricant paie :'],
          items: [
            "Le contrat exige une eau conforme à la spécification : chaque contrat de fourniture fixe les limites dans lesquelles la machine peut fonctionner",
            "En réalité, personne ne la mesure. Il n'existe aucune trace de ce qui a réellement traversé la machine",
            "Donc chaque réclamation est payée. Sans preuve, rien ne permet de refuser une réparation due à une eau de mauvaise qualité",
          ],
          closing: [
            "Une vanne renvoyée montre qu'elle est entartrée. Elle ne dit pas à qui la faute, et faute de preuve, la réponse retombe sur la partie qui porte la garantie.",
          ],
        },
        {
          title: "L'entretien suivait le calendrier, pas l'eau",
          paragraphs: [
            "Les changements de filtre et les visites d'entretien étaient planifiés selon le temps écoulé ou la durée de vie de la machine. Une machine dans une ville à eau dure qui tire 300 litres par jour et une machine sur un réseau d'eau douce qui en tire 40 avaient le même intervalle. L'une était entretenue bien trop tard, l'autre trop souvent, et aucun des deux plannings ne reflétait ce que faisait l'eau.",
          ],
        },
        {
          title: 'La R&D travaillait avec des retours et des anecdotes',
          paragraphs: [
            "Le seul signal terrain qui atteignait l'ingénierie était la pièce cassée dans un carton, plus ce que le technicien avait bien voulu écrire sur le formulaire. Aucun historique de fonctionnement, aucun historique de l'eau, aucun cycle d'utilisation. Les décisions sur les matériaux et les tolérances se prenaient avec les données les plus pauvres que l'entreprise pouvait avoir.",
          ],
        },
        {
          title: 'Ce que nous avons construit',
          paragraphs: [
            "WaterTDS : un appareil de mesure, une plateforme de télémétrie et deux portails, adaptés pour que les composants du fabricant se trouvent dans le circuit mesuré.",
          ],
        },
        {
          title: "1. Le TDSBot sur la conduite d'eau",
          paragraphs: [
            "Un appareil installé à côté de l'équipement que le fabricant monte déjà : TDS mesuré avant et après le filtre, plus le débit et la température. Tout repose sur cette disposition. Mesurer en entrée et en sortie du filtre sépare la qualité de l'eau d'arrivée de l'état du filtre, si bien qu'une cartouche épuisée apparaît comme une valeur de sortie qui monte, et non comme une machine en panne six semaines plus tard.",
            "L'appareil transmet sa télémétrie en continu. Aucune visite de technicien n'est nécessaire pour la lire, et personne ne doit penser à prélever un échantillon.",
          ],
        },
        {
          title: '2. La plateforme derrière',
          paragraphs: [
            "La télémétrie arrive sur une plateforme qui transforme les mesures en événements : eau qui sort de la spécification, filtre proche de sa capacité, consommation qui ne correspond plus au plan d'entretien, profil de température qui signale du calcaire. Les alertes indiquent la cause, pas seulement le symptôme. C'est ce qui permet à une entreprise de service d'agir et à un service garantie de s'en servir comme preuve.",
          ],
        },
        {
          title: '3. Le portail équipements pour le fabricant',
          paragraphs: [
            "Chaque unité installée avec tout son historique de fonctionnement : eau en entrée et en sortie, litres passés, température, état du filtre, alertes et interventions. Quand une réclamation arrive, le service garantie ouvre la fiche de la machine et lit ce que faisait l'eau dans les semaines avant la panne.",
          ],
        },
        {
          title: '4. Le portail B2B pour les entreprises de service',
          paragraphs: [
            "Les entreprises de maintenance qui changent réellement les filtres ont leur propre espace : le parc dont elles ont la charge, des interventions générées par les données plutôt que par un calendrier, et un historique qui montre ce qui a été fait et quand. Le fabricant voit désormais leur travail, et leur ponctualité devient mesurable.",
          ],
        },
        {
          title: '5. Le modèle de maintenance prédictive',
          paragraphs: [
            "L'entretien est planifié selon les litres passés et la qualité d'eau mesurée, pas selon la durée de vie. Le modèle estime, pour chaque installation, quand un filtre sera épuisé et quand le risque de calcaire franchira un seuil, et déclenche l'intervention avant les dégâts, pas après.",
          ],
        },
        {
          title: '6. Le chemin de la preuve de garantie',
          paragraphs: [
            "Pour l'OEM que le fabricant fournit, une API livre l'historique de fonctionnement derrière une réclamation. Les réclamations fondées passent plus vite, parce que la preuve est déjà réunie ; celles qui ne le sont pas peuvent être contestées avec un historique de l'eau documenté. Les conditions de garantie restent les mêmes. Ce qui change, c'est qui paie quand une machine tourne avec une mauvaise eau.",
          ],
        },
      ],
      table: {
        title: 'Résultats',
        beforeLabel: 'Avant',
        afterLabel: 'Après',
        rows: [
          { label: 'Coût du service de garantie', before: "1.37 % du chiffre d'affaires", after: "0.51 % du chiffre d'affaires" },
          { label: "Base d'une décision de garantie", before: 'la pièce renvoyée et un avis', after: "TDS en entrée et en sortie, litres, température et historique du filtre de l'unité" },
          { label: "Planification de l'entretien", before: 'calendrier et durée de vie de la machine', after: "litres passés et qualité d'eau mesurée" },
          { label: 'Qui paie une eau hors spécification', before: 'le fabricant de composants, par défaut', after: 'le propriétaire de la machine, preuves à l’appui' },
          { label: 'Sources de revenus', before: 'une : les composants', after: 'trois : composants, appareils TDSBot, abonnement SaaS' },
          { label: 'Données terrain pour la R&D', before: 'retours et notes des techniciens', after: "historique continu du fonctionnement et de l'eau sur tout le parc installé" },
        ],
      },
      next: [
        "Couverture élargie des composants : étendre le circuit mesuré au-delà des premières familles, pour qu'une plus grande part du risque de garantie soit couverte par des preuves.",
        "Modèles de défaillance par composant, entraînés sur l'historique terrain qui s'accumule plutôt que sur les seuls essais au banc.",
        "Notation des entreprises de service dans le portail B2B : ponctualité et qualité des interventions comme indicateur visible, puisque les données le permettent désormais.",
        "Proposer la plateforme aux constructeurs de machines comme leur propre outil de garantie, et pas seulement comme celui du fournisseur de composants.",
      ],
      elsewhereIntro:
        "Partout où un fabricant porte une obligation de garantie pour un produit qui tombe en panne à cause de son usage, dans des conditions qu'il ne voit pas :",
      elsewhere: [
        "appareils traversés par l'eau de tout type : machines à glaçons, lave-vaisselle et laveries professionnelles, fours vapeur, installations d'eau potable",
        "fournisseurs de filtration et de traitement, dont le produit est lui-même le consommable",
        "tout fournisseur de composants dont les pièces tombent en panne dans la machine de quelqu'un d'autre",
        "location d'équipements et parcs en service géré, où le moment de l'entretien décide de la marge",
      ],
      elsewhereOutro:
        "Le principe est partout le même : quand on mesure les conditions de fonctionnement, la question de qui paie ne fait plus débat.",
      meta: {
        title: 'Coût de garantie de 1.37 % à 0.51 % du chiffre d’affaires | Trident Software',
        description:
          "Télémétrie de l'eau pour un fabricant de composants de machines à café : garantie de 1.37 % à 0.51 % du chiffre d'affaires, deux nouvelles sources de revenus.",
      },
    },
    it: {
      client: 'Produttore di componenti, Italia',
      industry: 'Manifattura, apparecchi connessi · Italia',
      hero: {
        title: 'Controllo della garanzia per un produttore di componenti per macchine da caffè',
        tagline: 'Da pagare ogni richiesta di garanzia a misurarne la causa, e a vendere la misura',
      },
      note: "Un progetto realizzato per un produttore italiano di componenti, descritto senza il nome del cliente. I dati su garanzia e acqua vengono dalla contabilità e dai dati di campo del cliente; i confronti di settore sono benchmark pubblicati e indicati come tali.",
      results: [
        { metric: 'Costo della garanzia, quota del fatturato', value: '1.37 % → 0.51 %' },
        { metric: 'Linee di ricavo', value: 'una → tre' },
        { metric: "Guasti causati dall'acqua, non da difetti", value: "fino all'85 %" },
      ],
      sections: [
        {
          title: "L'azienda",
          paragraphs: [
            "Un produttore italiano di componenti per il controllo dei fluidi (elettrovalvole, flussometri, regolatori di pressione e filtri) forniti agli OEM che costruiscono macchine professionali da caffè ed espresso e ad altri produttori di elettrodomestici affini.",
            "I componenti vengono certificati, collaudati e venduti in volume ai costruttori. Poi spariscono dentro una macchina, venduta a un bar, a un ristorante o a un ufficio e allacciata all'acqua che quell'edificio si ritrova. L'obbligo di garanzia del produttore segue il componente lungo tutta la catena, in edifici che non ha mai visto e con un'acqua che non ha mai misurato.",
            "Il servizio di garanzia costava l'1.37% del fatturato.",
          ],
        },
        {
          title: "Prima: fino all'85 % dei danni nasceva fuori dalla fabbrica",
          paragraphs: [
            "L'analisi sul campo attribuiva fino all'85% dei guasti dei componenti all'acqua, non a difetti di fabbricazione. Acqua fuori specifica, filtri usati oltre la loro capacità, addolcitori e stazioni di filtrazione mai manutenuti.",
            "La fisica è ben documentata. Lo standard dello specialty coffee fissa i solidi disciolti totali in un intervallo di lavoro di circa 75–250 ppm con un obiettivo vicino a 150, la durezza calcica a 50–175 ppm, l'alcalinità a 40–75 ppm. Al di sopra, il calcare si forma in fretta: riduce il flusso, ricopre le resistenze e attacca proprio i pezzi che questa azienda produce, cioè pompe, valvole e flussometri. Al di sotto, l'acqua diventa aggressiva in un altro modo. Entrambi gli estremi finiscono in una richiesta di garanzia contro il componente.",
          ],
        },
        {
          title: 'Il buco nella garanzia',
          paragraphs: ['Tre fatti che insieme garantiscono che a pagare sia il produttore:'],
          items: [
            "Il contratto richiede acqua entro specifica: ogni accordo di fornitura indica i limiti entro cui la macchina può funzionare",
            "Nella realtà nessuno la misura. Non esiste alcuna traccia di ciò che è davvero passato nella macchina",
            "Quindi ogni richiesta viene pagata. Senza prove non ci sono motivi per rifiutare una riparazione dovuta ad acqua cattiva",
          ],
          closing: [
            "Una valvola resa dice che è incrostata. Non dice di chi sia la colpa, e in mancanza di prove la risposta ricade su chi ha l'obbligo di garanzia.",
          ],
        },
        {
          title: "L'assistenza seguiva il calendario, non l'acqua",
          paragraphs: [
            "Cambi filtro e visite di manutenzione venivano pianificati in base al tempo trascorso o alla vita della macchina. Una macchina in una città con acqua dura che tira 300 litri al giorno e una macchina sull'acqua dolce dell'acquedotto che ne tira 40 avevano lo stesso intervallo. Una veniva servita troppo tardi, l'altra troppo spesso, e nessuno dei due piani rifletteva ciò che faceva l'acqua.",
          ],
        },
        {
          title: 'La R&S lavorava con resi e aneddoti',
          paragraphs: [
            "L'unico segnale dal campo che arrivava all'ingegneria era il pezzo rotto in una scatola, più quello che il tecnico decideva di scrivere sul modulo. Nessuna storia di funzionamento, nessuna storia dell'acqua, nessun ciclo di lavoro. Le decisioni su materiali e tolleranze venivano prese con i dati meno informativi che l'azienda potesse avere.",
          ],
        },
        {
          title: 'Che cosa abbiamo realizzato',
          paragraphs: [
            "WaterTDS: un dispositivo di misura, una piattaforma di telemetria e due portali, adattati in modo che i componenti del produttore stiano all'interno del circuito misurato.",
          ],
        },
        {
          title: "1. Il TDSBot sulla linea dell'acqua",
          paragraphs: [
            "Un dispositivo installato accanto all'apparecchiatura che il produttore già monta: TDS misurato prima e dopo il filtro, più flusso e temperatura. Tutto sta in questa disposizione. Misurare in entrata e in uscita dal filtro separa l'acqua in arrivo dallo stato del filtro, così una cartuccia esaurita si vede come un valore in uscita che sale e non come una macchina guasta sei settimane dopo.",
            "Il dispositivo invia telemetria in continuo. Non serve la visita di un tecnico per leggerla e nessuno deve ricordarsi di prelevare un campione.",
          ],
        },
        {
          title: '2. La piattaforma dietro',
          paragraphs: [
            "La telemetria arriva su una piattaforma che trasforma le letture in eventi: acqua che esce dalla specifica, un filtro vicino alla capacità, consumi che non corrispondono più al piano di assistenza, un profilo di temperatura che indica calcare. Gli allarmi riportano la causa, non solo il sintomo. Per questo un'azienda di assistenza può agire e un ufficio garanzia può usarli come prova.",
          ],
        },
        {
          title: '3. Il portale apparecchi per il produttore',
          paragraphs: [
            "Ogni unità installata con la sua storia di funzionamento completa: acqua in entrata e in uscita, litri passati, temperatura, stato del filtro, allarmi e interventi. Quando arriva una richiesta, l'ufficio garanzia apre la scheda di quella macchina e legge che cosa faceva l'acqua nelle settimane prima del guasto.",
          ],
        },
        {
          title: '4. Il portale B2B per le aziende di assistenza',
          paragraphs: [
            "Le aziende di manutenzione che cambiano davvero i filtri hanno uno spazio di lavoro tutto loro: il parco di cui sono responsabili, interventi generati dai dati invece che da un calendario e uno storico che mostra cosa è stato fatto e quando. Il produttore ora vede il loro lavoro, e la loro puntualità diventa misurabile.",
          ],
        },
        {
          title: '5. Il modello di manutenzione predittiva',
          paragraphs: [
            "L'assistenza viene pianificata in base ai litri passati e alla qualità dell'acqua misurata, non alla vita della macchina. Il modello stima, per ogni singola installazione, quando un filtro si esaurirà e quando il rischio di calcare supererà una soglia, e apre l'intervento prima che il danno avvenga, non dopo.",
          ],
        },
        {
          title: '6. Il percorso della prova di garanzia',
          paragraphs: [
            "Per l'OEM che il produttore rifornisce, un'API fornisce lo storico di funzionamento dietro una richiesta. Le richieste fondate passano più in fretta perché la prova è già raccolta; quelle infondate si possono contestare con uno storico dell'acqua documentato. Le condizioni di garanzia restano le stesse. Cambia chi paga quando una macchina funziona con acqua cattiva.",
          ],
        },
      ],
      table: {
        title: 'Risultati',
        beforeLabel: 'Prima',
        afterLabel: 'Dopo',
        rows: [
          { label: 'Costo del servizio di garanzia', before: "l'1.37 % del fatturato", after: "lo 0.51 % del fatturato" },
          { label: 'Base di una decisione di garanzia', before: 'il pezzo reso e un parere', after: "TDS in entrata e in uscita, litri, temperatura e storico del filtro di quell'unità" },
          { label: "Pianificazione dell'assistenza", before: 'calendario e vita della macchina', after: "litri passati e qualità dell'acqua misurata" },
          { label: "Chi paga l'acqua fuori specifica", before: 'il produttore di componenti, per impostazione', after: 'il proprietario della macchina, prove alla mano' },
          { label: 'Linee di ricavo', before: 'una: componenti', after: 'tre: componenti, dispositivi TDSBot, abbonamento SaaS' },
          { label: 'Dati di campo per la R&S', before: 'resi e note dei tecnici', after: "storia continua di funzionamento e dell'acqua su tutto il parco installato" },
        ],
      },
      next: [
        "Copertura più ampia dei componenti: estendere il circuito misurato oltre le prime famiglie, così che una parte maggiore del rischio di garanzia sia coperta da prove.",
        "Modelli di guasto per componente, addestrati sulla storia di campo che si accumula e non solo sulle prove al banco.",
        "Valutazione delle aziende di assistenza nel portale B2B: puntualità e qualità degli interventi come indicatore visibile, ora che i dati lo consentono.",
        "Offrire la piattaforma ai costruttori di macchine come loro strumento di garanzia, non solo come strumento del fornitore di componenti.",
      ],
      elsewhereIntro:
        "Ovunque un produttore abbia un obbligo di garanzia per un prodotto che si guasta per come viene usato, in condizioni che il produttore non vede:",
      elsewhere: [
        "apparecchi attraversati dall'acqua di ogni tipo: macchine del ghiaccio, lavastoviglie e lavaoggetti, forni a vapore, impianti di acqua potabile",
        "fornitori di filtrazione e trattamento, il cui prodotto è esso stesso il materiale di consumo",
        "qualsiasi fornitore di componenti i cui pezzi si guastano nella macchina di qualcun altro",
        "noleggio di attrezzature e flotte in servizio gestito, dove il momento della manutenzione decide il margine",
      ],
      elsewhereOutro:
        "Lo schema di fondo è lo stesso ovunque: quando si misurano le condizioni di funzionamento, la discussione su chi paga non ha più ragione di esistere.",
      meta: {
        title: 'Costo di garanzia dall’1.37 % allo 0.51 % del fatturato | Trident Software',
        description:
          "Telemetria dell'acqua per un produttore di componenti per macchine da caffè: garanzia dall'1.37 % allo 0.51 % del fatturato, due nuove linee di ricavo.",
      },
    },
  },
}

export default record
