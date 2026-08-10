// « Connaître sa commune » — Dudelange, Bettembourg, Sanem, Pétange.
// Data: PROPERTY-MARKET-Sud-4-communes.md (immotop.lu, July 2026, gathered
// 10/08/2026) + schools/transport research (cfl.lu, Wikipedia stations,
// lnbd.lu, lbv.lu, lma.lu). Every figure traces there; unknowns are marked.

export const COMMUNES_SUD = [
  {
    id: 'commune-dudelange',
    fr: {
      name: 'Dudelange',
      sub: 'Canton d’Esch · Ceinture Sud',
      chapters: [
        {
          label: 'La commune',
          head: '21 513 habitants',
          rows: [
            ['Population', '21 513 hab.'],
            ['Densité', '1 004 hab./km²'],
            ['Superficie', '21 km²'],
          ],
          note: 'Quatrième ville du pays par la population, ancienne cité sidérurgique devenue résidentielle.',
        },
        {
          label: 'Se déplacer',
          head: 'Quatre gares dans la commune',
          rows: [
            ['Gares', 'Burange · Ville · Centre · Usines'],
            ['Ligne', '60a — Bettembourg → Volmerange-les-Mines (FR)'],
            ['Correspondance', 'Bettembourg, 2ᵉ gare du pays'],
            ['Transport public', 'gratuit depuis 2020'],
          ],
          note: 'Peu de communes de cette taille ont quatre gares. L’axe Bettembourg–Luxembourg a été coupé du 16/07 au 14/08/2026 — vérifier l’horaire courant.',
        },
        {
          label: 'Écoles',
          head: 'Un des 4 plus grands lycées du pays',
          rows: [
            ['Lycée Nic-Biever', '~1 700 élèves'],
            ['Filières', 'classique · général · préparatoire · BTS'],
            ['Fondamental', 'réseau communal'],
            ['École internationale', 'aucune sur place'],
          ],
          note: 'Le Lycée Nic-Biever dessert aussi Bettembourg, Kayl, Rumelange et Roeser.',
        },
        {
          label: 'Le marché',
          head: '6 628 €/m² affiché',
          rows: [
            ['Prix affiché', '6 628 €/m² — +0,52 % sur 1 an'],
            ['Fourchette interne', '5 275 à 8 506 €/m²'],
            ['Loyer affiché', '25,76 €/m²/mois'],
            ['Loyer sur 1 an', '+12,34 %'],
          ],
          note: 'Prix pratiquement plats depuis un an — amplitude de moins de 70 €/m². Les loyers, eux, ont la plus forte hausse du Sud.',
        },
        {
          label: 'Le déséquilibre',
          head: '254 à vendre pour 5 à louer',
          rows: [
            ['Biens à la vente', '254'],
            ['Biens à la location', '5'],
            ['Ratio', '50,8 : 1'],
          ],
          note: 'Le déséquilibre locatif le plus extrême que j’aie mesuré au Luxembourg. La cause est réglementaire : le plafond légal décourage la mise en location.',
        },
        {
          label: 'À vérifier',
          head: 'Trois contrôles avant d’acheter',
          rows: [
            ['Zones inondables', 'vallée de l’Alzette — geoportail.lu'],
            ['Sols', 'CASIPO — passé sidérurgique'],
            ['Localisation', 'fourchette interne facteur 1,6, sans ventilation publiée'],
          ],
          note: 'La ventilation par quartier n’est pas publiée pour Dudelange. La visite remplace la statistique.',
        },
      ],
      source: 'immotop.lu (juillet 2026) · CFL · Wikipédia (gares) · lnbd.lu · loi du 21/09/2006',
    },
    en: {
      name: 'Dudelange',
      sub: 'Canton of Esch · Southern belt',
      chapters: [
        {
          label: 'The commune',
          head: '21,513 inhabitants',
          rows: [
            ['Population', '21,513'],
            ['Density', '1,004 per km²'],
            ['Area', '21 km²'],
          ],
          note: 'Fourth city in the country by population, a former steel town turned residential.',
        },
        {
          label: 'Getting around',
          head: 'Four stations in one commune',
          rows: [
            ['Stations', 'Burange · Ville · Centre · Usines'],
            ['Line', '60a — Bettembourg → Volmerange-les-Mines (FR)'],
            ['Connection', 'Bettembourg, 2nd-busiest station in the country'],
            ['Public transport', 'free since 2020'],
          ],
          note: 'Few communes this size have four stations. The Bettembourg–Luxembourg line was closed 16/07–14/08/2026 — check the current timetable.',
        },
        {
          label: 'Schools',
          head: 'One of the country’s 4 largest lycées',
          rows: [
            ['Lycée Nic-Biever', '~1,700 pupils'],
            ['Streams', 'classical · general · preparatory · BTS'],
            ['Primary', 'communal network'],
            ['International school', 'none locally'],
          ],
          note: 'Lycée Nic-Biever also serves Bettembourg, Kayl, Rumelange and Roeser.',
        },
        {
          label: 'The market',
          head: '€6,628/m² asking',
          rows: [
            ['Asking price', '€6,628/m² — +0.52 % over 1 year'],
            ['Internal range', '€5,275 to €8,506/m²'],
            ['Asking rent', '€25.76/m²/month'],
            ['Rent over 1 year', '+12.34 %'],
          ],
          note: 'Prices essentially flat for a year — a range of under €70/m². Rents, meanwhile, rose faster than anywhere else in the south.',
        },
        {
          label: 'The imbalance',
          head: '254 for sale, 5 to rent',
          rows: [
            ['Properties for sale', '254'],
            ['Properties to rent', '5'],
            ['Ratio', '50.8 : 1'],
          ],
          note: 'The most extreme rental imbalance I have measured in Luxembourg. The cause is regulatory: the rent cap discourages letting.',
        },
        {
          label: 'Check before you buy',
          head: 'Three checks worth an hour',
          rows: [
            ['Flood zones', 'Alzette valley — geoportail.lu'],
            ['Soil', 'CASIPO — steelmaking past'],
            ['Location', 'internal range spans 1.6×, no published zone breakdown'],
          ],
          note: 'No neighbourhood breakdown is published for Dudelange. The visit replaces the statistic.',
        },
      ],
      source: 'immotop.lu (July 2026) · CFL · Wikipedia (stations) · lnbd.lu · law of 21/09/2006',
    },
  },

  {
    id: 'commune-bettembourg',
    fr: {
      name: 'Bettembourg',
      sub: 'Abweiler · Fennange · Huncherange · Noertzange',
      chapters: [
        {
          label: 'La commune',
          head: '11 374 habitants',
          rows: [
            ['Population', '11 374 hab.'],
            ['Densité', '527 hab./km² — la plus faible des 4 du Sud comparées'],
            ['Localités', '5'],
          ],
          note: 'Peu dense, cinq localités distinctes, un profil de maisons plus que d’appartements.',
        },
        {
          label: 'Se déplacer',
          head: '2ᵉ gare du pays',
          rows: [
            ['Gare de Bettembourg', '~3,5 M voyageurs (2022)'],
            ['Rôle', 'nœud principal — la ligne 60 s’y sépare en trois branches'],
            ['Vers Luxembourg', 'ligne directe'],
            ['Transport public', 'gratuit depuis 2020'],
          ],
          note: 'Seule la gare centrale de Luxembourg fait plus de voyageurs. Axe coupé du 16/07 au 14/08/2026 — vérifier l’horaire.',
        },
        {
          label: 'Écoles',
          head: 'Rattachée au bassin de Dudelange',
          rows: [
            ['Lycée de rattachement', 'Nic-Biever, Dudelange (~1 700 élèves)'],
            ['Fondamental', 'réseau communal'],
            ['École internationale', 'aucune sur place'],
          ],
          note: 'Pas de lycée sur le territoire communal — le bassin scolaire est partagé avec Kayl, Rumelange et Roeser.',
        },
        {
          label: 'Le marché',
          head: 'La plus chère, et elle corrige',
          rows: [
            ['Prix affiché', '7 070 €/m² — −3,64 % sur 1 an'],
            ['Pic', '7 393 €/m² en septembre 2025'],
            ['Loyer affiché', '22,97 €/m²/mois — +1,10 %'],
            ['Stock', '89 à vendre · 4 à louer'],
          ],
          note: 'La plus forte baisse des quatre communes comparées, depuis un pic récent. Acheter ici aujourd’hui, c’est acheter dans une correction en cours.',
        },
        {
          label: 'La dispersion',
          head: 'De 0 % à −10,9 % selon la localité',
          rows: [
            ['Fennange', '7 714 €/m² — −10,6 %'],
            ['Huncherange', '7 260 €/m² — −10,9 %'],
            ['Abweiler', '7 187 €/m² — 0,0 %'],
            ['Noertzange', '6 107 €/m² — −2,8 %'],
          ],
          note: 'Deux localités perdent plus de 10 % pendant qu’une troisième ne bouge pas. La moyenne communale ne décrit aucune des cinq.',
        },
        {
          label: 'À vérifier',
          head: 'Trois contrôles avant d’acheter',
          rows: [
            ['La localité, pas la commune', 'écart de 11 points en un an'],
            ['Zones inondables', 'vallée de l’Alzette — geoportail.lu'],
            ['Stock réduit', '89 biens — le choix est le plus étroit des quatre'],
          ],
          note: 'Un prix « moyen Bettembourg » ne veut rien dire en 2026. Exiger le comparable de la localité.',
        },
      ],
      source: 'immotop.lu (juillet 2026) · CFL · Wikipédia (gare de Bettembourg) · lnbd.lu',
    },
    en: {
      name: 'Bettembourg',
      sub: 'Abweiler · Fennange · Huncherange · Noertzange',
      chapters: [
        {
          label: 'The commune',
          head: '11,374 inhabitants',
          rows: [
            ['Population', '11,374'],
            ['Density', '527 per km² — lowest of the 4 southern communes compared'],
            ['Localities', '5'],
          ],
          note: 'Low density, five distinct localities, a market of houses more than apartments.',
        },
        {
          label: 'Getting around',
          head: '2nd-busiest station in the country',
          rows: [
            ['Bettembourg station', '~3.5M passengers (2022)'],
            ['Role', 'main junction — line 60 splits into three branches here'],
            ['To Luxembourg City', 'direct line'],
            ['Public transport', 'free since 2020'],
          ],
          note: 'Only Luxembourg central station carries more passengers. Line closed 16/07–14/08/2026 — check the timetable.',
        },
        {
          label: 'Schools',
          head: 'Attached to the Dudelange catchment',
          rows: [
            ['Catchment lycée', 'Nic-Biever, Dudelange (~1,700 pupils)'],
            ['Primary', 'communal network'],
            ['International school', 'none locally'],
          ],
          note: 'No lycée within the commune — the catchment is shared with Kayl, Rumelange and Roeser.',
        },
        {
          label: 'The market',
          head: 'The dearest, and correcting',
          rows: [
            ['Asking price', '€7,070/m² — −3.64 % over 1 year'],
            ['Peak', '€7,393/m² in September 2025'],
            ['Asking rent', '€22.97/m²/month — +1.10 %'],
            ['Stock', '89 for sale · 4 to rent'],
          ],
          note: 'The sharpest fall of the four communes compared, from a recent peak. Buying here today is buying into a live correction.',
        },
        {
          label: 'The dispersion',
          head: 'From 0 % to −10.9 % by locality',
          rows: [
            ['Fennange', '€7,714/m² — −10.6 %'],
            ['Huncherange', '€7,260/m² — −10.9 %'],
            ['Abweiler', '€7,187/m² — 0.0 %'],
            ['Noertzange', '€6,107/m² — −2.8 %'],
          ],
          note: 'Two localities lose more than 10 % while a third does not move. The commune average describes none of the five.',
        },
        {
          label: 'Check before you buy',
          head: 'Three checks worth an hour',
          rows: [
            ['The locality, not the commune', 'an 11-point spread in one year'],
            ['Flood zones', 'Alzette valley — geoportail.lu'],
            ['Thin stock', '89 listings — the narrowest choice of the four'],
          ],
          note: 'A "Bettembourg average" price means nothing in 2026. Demand the locality comparable.',
        },
      ],
      source: 'immotop.lu (July 2026) · CFL · Wikipedia (Bettembourg station) · lnbd.lu',
    },
  },

  {
    id: 'commune-sanem',
    fr: {
      name: 'Sanem',
      sub: 'Belvaux · Soleuvre · Ehlerange · Sanem',
      chapters: [
        {
          label: 'La commune',
          head: '17 895 habitants',
          rows: [
            ['Population', '17 895 hab.'],
            ['Densité', '730 hab./km²'],
            ['Localités', '4'],
          ],
          note: 'La commune qui touche Belval — et dont le marché se lit localité par localité, jamais en moyenne.',
        },
        {
          label: 'Se déplacer',
          head: 'Sur la ligne Esch–Pétange',
          rows: [
            ['Gare', 'Belvaux-Soleuvre — ligne 60'],
            ['Campus', 'gares Belval-Lycée et Belval-Université limitrophes'],
            ['Transport public', 'gratuit depuis 2020'],
          ],
          note: 'Belvaux est à un arrêt du campus de Belval : université, Rockhal, Cité des Sciences.',
        },
        {
          label: 'Écoles',
          head: 'Le lycée a sa propre gare',
          rows: [
            ['Lycée Bel-Val', 'Belvaux — desservi par la gare Belval-Lycée'],
            ['Fondamental', 'réseau communal'],
            ['École internationale', 'aucune sur place'],
          ],
          note: 'Effectifs du Lycée Bel-Val non vérifiés — l’établissement est récent et dessert le bassin de Belval.',
        },
        {
          label: 'Le marché',
          head: '6 773 €/m², en correction',
          rows: [
            ['Prix affiché', '6 773 €/m² — −2,99 % sur 1 an'],
            ['Pic', '7 252 €/m² en décembre 2025'],
            ['Loyer affiché', '25,38 €/m²/mois — +4,53 %'],
            ['Stock', '231 à vendre · 5 à louer — 46,2 : 1'],
          ],
          note: 'Deuxième déséquilibre locatif le plus marqué des quatre communes comparées, derrière Dudelange.',
        },
        {
          label: 'L’effet Belval',
          head: '+2,9 % contre −11,0 %',
          rows: [
            ['Belvaux', '6 926 €/m² — +2,9 %'],
            ['Soleuvre', '6 741 €/m² — −5,7 %'],
            ['Sanem localité', '6 660 €/m² — −7,0 %'],
            ['Ehlerange', '6 035 €/m² — −11,0 %'],
          ],
          note: 'Quatorze points d’écart entre la localité collée au campus et celle qui en est le plus loin. Le campus fait le prix.',
        },
        {
          label: 'À vérifier',
          head: 'Trois contrôles avant d’acheter',
          rows: [
            ['La localité d’abord', 'l’écart Belvaux–Ehlerange est le sujet'],
            ['Sols', 'CASIPO — bassin sidérurgique'],
            ['Zones inondables', 'geoportail.lu, par parcelle'],
          ],
          note: 'Le seul quartier de Sanem qui monte est celui qui touche Belval. Vérifier de quel côté de la commune se trouve le bien.',
        },
      ],
      source: 'immotop.lu (juillet 2026) · CFL · lbv.lu · loi du 21/09/2006',
    },
    en: {
      name: 'Sanem',
      sub: 'Belvaux · Soleuvre · Ehlerange · Sanem',
      chapters: [
        {
          label: 'The commune',
          head: '17,895 inhabitants',
          rows: [
            ['Population', '17,895'],
            ['Density', '730 per km²'],
            ['Localities', '4'],
          ],
          note: 'The commune that touches Belval — and whose market reads locality by locality, never on average.',
        },
        {
          label: 'Getting around',
          head: 'On the Esch–Pétange line',
          rows: [
            ['Station', 'Belvaux-Soleuvre — line 60'],
            ['Campus', 'Belval-Lycée and Belval-Université stations adjacent'],
            ['Public transport', 'free since 2020'],
          ],
          note: 'Belvaux is one stop from the Belval campus: university, Rockhal, Cité des Sciences.',
        },
        {
          label: 'Schools',
          head: 'The lycée has its own station',
          rows: [
            ['Lycée Bel-Val', 'Belvaux — served by Belval-Lycée station'],
            ['Primary', 'communal network'],
            ['International school', 'none locally'],
          ],
          note: 'Lycée Bel-Val pupil numbers unverified — the school is recent and serves the Belval basin.',
        },
        {
          label: 'The market',
          head: '€6,773/m², correcting',
          rows: [
            ['Asking price', '€6,773/m² — −2.99 % over 1 year'],
            ['Peak', '€7,252/m² in December 2025'],
            ['Asking rent', '€25.38/m²/month — +4.53 %'],
            ['Stock', '231 for sale · 5 to rent — 46.2 : 1'],
          ],
          note: 'The second most extreme rental imbalance of the four communes compared, behind Dudelange.',
        },
        {
          label: 'The Belval effect',
          head: '+2.9 % against −11.0 %',
          rows: [
            ['Belvaux', '€6,926/m² — +2.9 %'],
            ['Soleuvre', '€6,741/m² — −5.7 %'],
            ['Sanem locality', '€6,660/m² — −7.0 %'],
            ['Ehlerange', '€6,035/m² — −11.0 %'],
          ],
          note: 'Fourteen points between the locality touching the campus and the one furthest from it. The campus sets the price.',
        },
        {
          label: 'Check before you buy',
          head: 'Three checks worth an hour',
          rows: [
            ['The locality first', 'the Belvaux–Ehlerange spread is the story'],
            ['Soil', 'CASIPO — steelworks basin'],
            ['Flood zones', 'geoportail.lu, per parcel'],
          ],
          note: 'The only part of Sanem still rising is the part that touches Belval. Check which side of the commune the property is on.',
        },
      ],
      source: 'immotop.lu (July 2026) · CFL · lbv.lu · law of 21/09/2006',
    },
  },

  {
    id: 'commune-petange',
    fr: {
      name: 'Pétange',
      sub: 'Pétange · Rodange · Lamadelaine',
      chapters: [
        {
          label: 'La commune',
          head: 'La plus dense du Sud comparé',
          rows: [
            ['Population', '20 084 hab.'],
            ['Densité', '1 678 hab./km²'],
            ['Superficie', '12 km²'],
            ['Frontières', 'France et Belgique immédiates'],
          ],
          note: 'Trois fois plus dense que Bettembourg. La commune la plus urbaine des quatre comparées — et la moins chère au m².',
        },
        {
          label: 'Se déplacer',
          head: '5ᵉ gare du pays',
          rows: [
            ['Gare de Pétange', '1,7 M voyageurs (2022)'],
            ['Lignes', '60 + 70 — jonction de deux lignes'],
            ['Transfrontalier', 'Athus (BE) et Longwy (FR) en direct'],
            ['Gares communales', 'Pétange · Rodange · Lamadelaine'],
          ],
          note: 'La seule commune des quatre desservie par deux lignes, avec liaisons directes vers deux pays. Le Train 1900 part du quai voisin.',
        },
        {
          label: 'Écoles',
          head: '~2 000 élèves au LMA',
          rows: [
            ['Lycée Technique Mathias Adam', 'site principal à Lamadelaine'],
            ['Filières', 'classiques, générales et techniques'],
            ['Fondamental', 'réseau communal'],
            ['École internationale', 'aucune sur place'],
          ],
          note: 'Le LMA a une annexe à Differdange — le bassin scolaire couvre l’ouest du Sud.',
        },
        {
          label: 'Le marché',
          head: 'La moins chère des quatre',
          rows: [
            ['Prix affiché', '6 276 €/m² — +0,18 % sur 1 an'],
            ['Creux', '6 153 €/m² en mars 2026'],
            ['Loyer affiché', '25,85 €/m²/mois — +8,61 %'],
            ['Stock', '274 à vendre · 10 à louer'],
          ],
          note: 'Prix stabilisés après un creux en mars. Pétange est la seule des quatre dont le pic date de 2024 — la correction y est déjà passée.',
        },
        {
          label: 'L’homogénéité',
          head: '243 €/m² d’écart interne',
          rows: [
            ['Pétange localité', '6 297 €/m² — +1,3 %'],
            ['Rodange', '6 293 €/m² — −0,0 %'],
            ['Lamadelaine', '6 054 €/m² — −5,2 %'],
          ],
          note: 'La fourchette interne la plus resserrée des quatre communes comparées. Le profil le plus lisible pour un premier achat.',
        },
        {
          label: 'À vérifier',
          head: 'Trois contrôles avant d’acheter',
          rows: [
            ['Sols', 'CASIPO — bassin sidérurgique'],
            ['Bruit ferroviaire', 'deux lignes traversent la commune'],
            ['Zones inondables', 'geoportail.lu, par parcelle'],
          ],
          note: 'La jonction ferroviaire est l’atout et la nuisance : vérifier l’exposition du bien aux voies avant l’offre.',
        },
      ],
      source: 'immotop.lu (juillet 2026) · CFL · Wikipédia (gare de Pétange) · lma.lu',
    },
    en: {
      name: 'Pétange',
      sub: 'Pétange · Rodange · Lamadelaine',
      chapters: [
        {
          label: 'The commune',
          head: 'Densest of the southern four',
          rows: [
            ['Population', '20,084'],
            ['Density', '1,678 per km²'],
            ['Area', '12 km²'],
            ['Borders', 'France and Belgium immediate'],
          ],
          note: 'Three times denser than Bettembourg. The most urban of the four compared — and the cheapest per m².',
        },
        {
          label: 'Getting around',
          head: '5th-busiest station in the country',
          rows: [
            ['Pétange station', '1.7M passengers (2022)'],
            ['Lines', '60 + 70 — a two-line junction'],
            ['Cross-border', 'Athus (BE) and Longwy (FR) direct'],
            ['Communal stations', 'Pétange · Rodange · Lamadelaine'],
          ],
          note: 'The only commune of the four served by two lines, with direct links to two countries. The heritage Train 1900 leaves from the adjacent platform.',
        },
        {
          label: 'Schools',
          head: '~2,000 pupils at the LMA',
          rows: [
            ['Lycée Technique Mathias Adam', 'main site at Lamadelaine'],
            ['Streams', 'classical, general and technical'],
            ['Primary', 'communal network'],
            ['International school', 'none locally'],
          ],
          note: 'The LMA has an annexe in Differdange — its catchment covers the west of the south.',
        },
        {
          label: 'The market',
          head: 'Cheapest of the four',
          rows: [
            ['Asking price', '€6,276/m² — +0.18 % over 1 year'],
            ['Trough', '€6,153/m² in March 2026'],
            ['Asking rent', '€25.85/m²/month — +8.61 %'],
            ['Stock', '274 for sale · 10 to rent'],
          ],
          note: 'Prices stabilised after a March trough. Pétange is the only one of the four whose peak dates from 2024 — the correction has already passed through.',
        },
        {
          label: 'The homogeneity',
          head: 'A €243/m² internal spread',
          rows: [
            ['Pétange locality', '€6,297/m² — +1.3 %'],
            ['Rodange', '€6,293/m² — −0.0 %'],
            ['Lamadelaine', '€6,054/m² — −5.2 %'],
          ],
          note: 'The tightest internal range of the four communes compared. The most legible profile for a first purchase.',
        },
        {
          label: 'Check before you buy',
          head: 'Three checks worth an hour',
          rows: [
            ['Soil', 'CASIPO — steelworks basin'],
            ['Rail noise', 'two lines cross the commune'],
            ['Flood zones', 'geoportail.lu, per parcel'],
          ],
          note: 'The rail junction is both the asset and the nuisance: check the property’s exposure to the tracks before offering.',
        },
      ],
      source: 'immotop.lu (July 2026) · CFL · Wikipedia (Pétange station) · lma.lu',
    },
  },
];
