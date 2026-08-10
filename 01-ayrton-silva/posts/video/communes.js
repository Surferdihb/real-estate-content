// « Connaître sa commune » / "Know your commune" — 60-second chaptered videos.
//
// Every fact here comes from the written analyses in ../../property-analyses/
// or from the named public source on the chapter. Nothing is invented.
// Figures verified 05/08/2026 (Esch) and 04/08/2026 (Differdange).
//
// Facts deliberately marked as uncertain are kept that way — a commune guide
// that admits what it doesn't know is the whole point of this account.
//
// TO ADD A COMMUNE: you need, at minimum, population + rank (STATEC or the
// commune), rail/bus service (mobiliteit.lu), secondary schools, one hospital
// or health reference, and price + rent per m² (immotop / Observatoire).
// Without those, don't ship it.

import { COMMUNES_SUD } from './communes-sud.js';

const BASE = [
  {
    id: 'commune-esch',
    fr: {
      name: 'Esch-sur-Alzette',
      sub: 'Canton d’Esch · Ceinture Sud',
      chapters: [
        {
          label: 'La commune',
          head: '2ᵉ commune du pays',
          rows: [
            ['Population', '37 922 hab. (2025)'],
            ['Rang national', '2ᵉ'],
            ['Canton d’Esch', '192 739 hab., 14 communes'],
          ],
          note: 'La deuxième ville du Luxembourg, et le cœur du bassin minier reconverti.',
        },
        {
          label: 'Se déplacer',
          head: 'Nœud du réseau Sud',
          rows: [
            ['Gare', 'ligne 60 CFL — Luxembourg · Pétange · Rodange'],
            ['Belval-Université', '2–3 min, un arrêt'],
            ['Luxembourg-Ville', '~20–25 min *'],
            ['Transport public', 'gratuit dans tout le pays depuis 2020'],
          ],
          note: '* À vérifier sur l’horaire en vigueur. Le tram rapide vers le Sud est visé pour 2029/2030 et ne dessert pas Esch-Centre dans les plans publiés.',
        },
        {
          label: 'Écoles',
          head: 'Complet, sauf l’international',
          rows: [
            ['Fondamental', 'réseau communal complet'],
            ['Secondaire', 'Lycée de Garçons · Lycée Hubert Clément'],
            ['Campus', 'Université du Luxembourg à Belval'],
            ['École internationale', 'aucune sur place'],
          ],
          note: 'Les familles visant Vauban, ISL ou l’École Européenne doivent composer avec un trajet vers Luxembourg-Ville, Kirchberg ou Mamer.',
        },
        {
          label: 'Vivre ici',
          head: 'Une offre disproportionnée',
          rows: [
            ['Commerces', 'rue de l’Alzette — principal axe piéton du Sud'],
            ['Santé', 'Centre Hospitalier Emile Mayrisch'],
            ['Culture', 'Rockhal · héritage Esch2022'],
            ['Vert', 'Gaalgebierg — bois, zoo, sport · Parc Municipal'],
          ],
          note: 'Capitale européenne de la culture en 2022 : les équipements sont restés.',
        },
        {
          label: 'Le marché',
          head: '7 149 €/m² affiché',
          rows: [
            ['Prix affiché moyen', '7 149 €/m² — −1,31 % sur 1 an'],
            ['Prix notarié moyen', '~6 200 €/m²'],
            ['Loyer moyen', '28,17 €/m²/mois — +3,22 %'],
            ['Stock', '792 à vendre · 45 à louer'],
          ],
          note: 'Marché acheteur à la vente, marché bailleur à la location. Les deux en même temps, dans la même rue.',
        },
        {
          label: 'À vérifier',
          head: 'Trois contrôles avant d’acheter',
          rows: [
            ['Zones inondables', 'l’Alzette traverse la ville — geoportail.lu'],
            ['Sols', 'CASIPO — ancien bassin sidérurgique'],
            ['Quartier', 'le prix va de 4 284 à 7 480 €/m²'],
          ],
          note: 'Le chômage communal le plus récent que j’ai trouvé date de mai 2024. Je ne le cite pas comme un chiffre actuel.',
        },
      ],
      source: 'STATEC · Observatoire de l’Habitat · immotop.lu (juillet 2026) · CFL · mobiliteit.lu · Ville d’Esch',
    },
    en: {
      name: 'Esch-sur-Alzette',
      sub: 'Canton of Esch · Southern belt',
      chapters: [
        {
          label: 'The commune',
          head: '2nd largest in the country',
          rows: [
            ['Population', '37,922 (2025)'],
            ['National rank', '2nd'],
            ['Canton of Esch', '192,739 people, 14 communes'],
          ],
          note: 'Luxembourg’s second city, and the heart of the redeveloped mining basin.',
        },
        {
          label: 'Getting around',
          head: 'Hub of the southern network',
          rows: [
            ['Station', 'CFL line 60 — Luxembourg · Pétange · Rodange'],
            ['Belval-Université', '2–3 min, one stop'],
            ['Luxembourg City', '~20–25 min *'],
            ['Public transport', 'free nationwide since 2020'],
          ],
          note: '* Check against the current timetable. The southern rapid tram is targeted for 2029/2030 and does not reach Esch-Centre in the published plans.',
        },
        {
          label: 'Schools',
          head: 'Complete, except international',
          rows: [
            ['Primary', 'full communal network'],
            ['Secondary', 'Lycée de Garçons · Lycée Hubert Clément'],
            ['Campus', 'University of Luxembourg at Belval'],
            ['International school', 'none locally'],
          ],
          note: 'Families targeting Vauban, ISL or the European School face a commute to Luxembourg City, Kirchberg or Mamer.',
        },
        {
          label: 'Living here',
          head: 'Disproportionate for its size',
          rows: [
            ['Retail', 'rue de l’Alzette — the south’s main pedestrian street'],
            ['Health', 'Centre Hospitalier Emile Mayrisch'],
            ['Culture', 'Rockhal · Esch2022 legacy'],
            ['Green space', 'Gaalgebierg — woods, zoo, sport · Parc Municipal'],
          ],
          note: 'European Capital of Culture in 2022: the facilities stayed.',
        },
        {
          label: 'The market',
          head: '€7,149/m² asking',
          rows: [
            ['Average asking price', '€7,149/m² — −1.31 % over 1 year'],
            ['Average notarial price', '~€6,200/m²'],
            ['Average rent', '€28.17/m²/month — +3.22 %'],
            ['Stock', '792 for sale · 45 to rent'],
          ],
          note: 'A buyer’s market to buy and a landlord’s market to rent. Both at once, on the same street.',
        },
        {
          label: 'Check before you buy',
          head: 'Three things worth an hour',
          rows: [
            ['Flood zones', 'the Alzette runs through town — geoportail.lu'],
            ['Soil', 'CASIPO — former steelworks basin'],
            ['Neighbourhood', 'prices run €4,284 to €7,480/m²'],
          ],
          note: 'The most recent communal unemployment figure I could find dates from May 2024. I don’t quote it as current.',
        },
      ],
      source: 'STATEC · Observatoire de l’Habitat · immotop.lu (July 2026) · CFL · mobiliteit.lu · Ville d’Esch',
    },
  },

  {
    id: 'commune-differdange',
    fr: {
      name: 'Differdange',
      sub: 'Niederkorn · Oberkorn · Fousbann',
      chapters: [
        {
          label: 'La commune',
          head: '3ᵉ ville du pays',
          rows: [
            ['Population', '31 415 hab. (01/01/2026)'],
            ['Niederkorn', '8 232 hab.'],
            ['Differdange-Fousbann', '17 918 hab.'],
            ['Superficie', '22,23 km² — 39 % urbanisé'],
          ],
          note: 'Environ 11 608 ménages. Une des plus fortes hausses démographiques du pays entre 2011 et 2021.',
        },
        {
          label: 'Se déplacer',
          head: 'Gare de Niederkorn',
          rows: [
            ['Ligne', '6f Esch-sur-Alzette – Pétange, RE et RB'],
            ['Fréquentation', '146 919 voyageurs (2022)'],
            ['Équipement', '2 voies · parking 15 places · bikebox'],
            ['Bus', 'TICE ligne 14 · Diffbus ligne 1'],
          ],
          note: 'Belval-Université en ~10 min. Luxembourg-Ville demande une correspondance — vérifiez l’horaire, ma source est peu fiable sur ce trajet.',
        },
        {
          label: 'Écoles & emploi',
          head: 'Un lycée, une usine',
          rows: [
            ['Secondaire', 'Lycée Technique Mathias Adam — ~2 000 élèves'],
            ['Sites', 'Lamadelaine (Pétange) · annexe Jenker'],
            ['ArcelorMittal Differdange', 'active, ~80 % de capacité (2024)'],
            ['Groupe au Luxembourg', '3 450 salariés (2024)'],
          ],
          note: 'Aucune offre scolaire internationale confirmée sur place. Belval est à dix minutes.',
        },
        {
          label: 'Le marché',
          head: '6 317 €/m² à Niederkorn',
          rows: [
            ['Prix, Niederkorn', '6 317 €/m² — −0,91 % sur 1 an'],
            ['Sur 3 ans', '−10,4 %'],
            ['Depuis 2019', '+40,6 %'],
            ['Loyer annoncé', '28,27 €/m²/mois — +7,53 %'],
          ],
          note: 'Creux local atteint en avril 2026, après un pic à 6 606 €/m² en octobre 2024.',
        },
        {
          label: 'Le déséquilibre',
          head: '30 à vendre pour 1 à louer',
          rows: [
            ['Biens à la vente', '91'],
            ['Biens à la location', '3'],
            ['Ratio', '30 : 1'],
          ],
          note: 'Le plafond légal de loyer comprime le rendement : les propriétaires vendent plutôt que de louer. C’est un effet réglementaire, pas démographique.',
        },
        {
          label: 'À vérifier',
          head: 'Deux contrôles locaux',
          rows: [
            ['Zones inondables', 'la Chiers traverse Niederkorn'],
            ['Bruit ferroviaire', 'proximité immédiate de la ligne 6f'],
            ['Sols', 'CASIPO — bassin sidérurgique'],
          ],
          note: 'Une adresse « rue de la Gare » a deux faces : l’accès au train, et le passage des trains.',
        },
      ],
      source: 'Ville de Differdange · STATEC · immotop.lu (juin 2026) · mobiliteit.lu · Gare de Niederkorn',
    },
    en: {
      name: 'Differdange',
      sub: 'Niederkorn · Oberkorn · Fousbann',
      chapters: [
        {
          label: 'The commune',
          head: '3rd largest city',
          rows: [
            ['Population', '31,415 (01/01/2026)'],
            ['Niederkorn', '8,232'],
            ['Differdange-Fousbann', '17,918'],
            ['Area', '22.23 km² — 39 % built up'],
          ],
          note: 'Around 11,608 households. One of the country’s strongest population increases between 2011 and 2021.',
        },
        {
          label: 'Getting around',
          head: 'Niederkorn station',
          rows: [
            ['Line', '6f Esch-sur-Alzette – Pétange, RE and RB'],
            ['Passengers', '146,919 (2022)'],
            ['Facilities', '2 tracks · 15-space car park · bike box'],
            ['Bus', 'TICE line 14 · Diffbus line 1'],
          ],
          note: 'Belval-Université in ~10 min. Luxembourg City needs a change — check the timetable, my source is weak on that journey.',
        },
        {
          label: 'Schools & work',
          head: 'One lycée, one steelworks',
          rows: [
            ['Secondary', 'Lycée Technique Mathias Adam — ~2,000 pupils'],
            ['Sites', 'Lamadelaine (Pétange) · Jenker annexe'],
            ['ArcelorMittal Differdange', 'active, ~80 % capacity (2024)'],
            ['Group in Luxembourg', '3,450 employees (2024)'],
          ],
          note: 'No international schooling confirmed locally. Belval is ten minutes away.',
        },
        {
          label: 'The market',
          head: '€6,317/m² in Niederkorn',
          rows: [
            ['Price, Niederkorn', '€6,317/m² — −0.91 % over 1 year'],
            ['Over 3 years', '−10.4 %'],
            ['Since 2019', '+40.6 %'],
            ['Advertised rent', '€28.27/m²/month — +7.53 %'],
          ],
          note: 'Local trough reached April 2026, after a peak of €6,606/m² in October 2024.',
        },
        {
          label: 'The imbalance',
          head: '30 for sale to 1 to rent',
          rows: [
            ['Properties for sale', '91'],
            ['Properties to rent', '3'],
            ['Ratio', '30 : 1'],
          ],
          note: 'The statutory rent cap compresses yield: owners sell rather than let. A regulatory effect, not a demographic one.',
        },
        {
          label: 'Check before you buy',
          head: 'Two local checks',
          rows: [
            ['Flood zones', 'the Chiers runs through Niederkorn'],
            ['Rail noise', 'immediate proximity to line 6f'],
            ['Soil', 'CASIPO — steelworks basin'],
          ],
          note: 'A "rue de la Gare" address has two sides: access to the train, and the trains going past.',
        },
      ],
      source: 'Ville de Differdange · STATEC · immotop.lu (June 2026) · mobiliteit.lu · Gare de Niederkorn',
    },
  },
];

export const COMMUNES = [...BASE, ...COMMUNES_SUD];
