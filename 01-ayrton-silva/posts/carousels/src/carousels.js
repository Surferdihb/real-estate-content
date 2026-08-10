// Ayrton Silva — carousels. Multi-slide 1080×1350 sets for LinkedIn/Instagram.
//
// Every figure here is lifted from an existing sourced asset, never re-derived:
//   · vrai-cout / carte-du-sud  → posts/infographics/src/data.js
//   · commune series            → posts/video/communes.js + communes-sud.js
//   · market gap                → property-analyses/PROPERTY-MARKET-Esch-sur-Alzette.md
// Reference period July 2026, gathered 10/08/2026. Refresh past November 2026.
//
// Slide kinds: cover · rows · figure · steps · split · board · close.
// A carousel is `slides: [...]` per language; the renderer paginates them.

export const CAROUSELS = [
  // ── 1 · public · what a purchase actually costs ────────────────────────
  {
    id: 'c1-vrai-cout', track: 'public',
    fr: {
      kicker: 'Carrousel · Coût d’acquisition',
      source: 'pfi.public.lu — droits d’enregistrement et Bëllegen Akt (loi du 03/07/2025) · barème notarial',
      slides: [
        { kind: 'cover', rubric: 'Ce qu’on ne vous dit pas au premier rendez-vous',
          head: ['Ce que 545 000 €', 'coûtent <em>vraiment</em>.'],
          standfirst: 'Le prix affiché n’est pas le capital engagé. Et l’usage du bien change tout — d’un facteur trente.' },
        { kind: 'rows', head: ['Le prix,', 'puis <em>le reste</em>.'],
          rows: [
            ['Prix du bien', '545 000 €'],
            ['+ Droits d’enregistrement 6 %', '32 700 €'],
            ['+ Droit de transcription 1 %', '5 450 €'],
            ['+ Notaire ~1 %', '5 450 €'],
            ['Capital réellement investi', '588 600 €', true],
          ],
          statement: 'Les 43 600 € de frais ne se financent pas. Ils sortent de votre compte le jour de l’acte.' },
        { kind: 'figure', head: ['La question qui', 'change <em>tout</em>.'],
          figure: '40 000 €', unit: '',
          note: 'Le Bëllegen Akt efface jusqu’à 40 000 € de droits par acquéreur — mais uniquement si vous habitez le bien. Un couple : 80 000 €.' },
        { kind: 'split', head: ['Même bien,', 'deux <em>opérations</em>.'],
          split: [
            ['Résidence principale', '~5 450 € de cash', 'Bëllegen Akt appliqué : les droits d’enregistrement et de transcription sont effacés. Reste le notaire.'],
            ['Investissement locatif', '~152 600 € de cash', 'Pas de Bëllegen Akt, et la banque exige 20 % d’apport sur un bien non occupé.'],
          ],
          statement: 'Trente fois plus de liquide en locatif. Ce n’est pas une nuance de fiscalité, c’est la faisabilité du projet.' },
        { kind: 'close', head: ['Faites le calcul', 'avant <em>l’offre</em>.'],
          cta: 'Je publie chaque chiffre avec sa source. Ce que le Luxembourg ne publie pas, je le dis — je ne l’estime pas.' },
      ],
    },
    en: {
      kicker: 'Carousel · Acquisition cost',
      source: 'pfi.public.lu — registration duty and Bëllegen Akt (law of 03/07/2025) · notarial scale',
      slides: [
        { kind: 'cover', rubric: 'What nobody covers at the first meeting',
          head: ['What €545,000', '<em>really</em> costs.'],
          standfirst: 'The asking price is not the capital committed. And the property’s use changes everything — by a factor of thirty.' },
        { kind: 'rows', head: ['The price,', 'then <em>the rest</em>.'],
          rows: [
            ['Property price', '€545,000'],
            ['+ Registration duty 6 %', '€32,700'],
            ['+ Transcription duty 1 %', '€5,450'],
            ['+ Notary ~1 %', '€5,450'],
            ['Capital actually invested', '€588,600', true],
          ],
          statement: 'The €43,600 of costs cannot be financed. They leave your account on the day of the deed.' },
        { kind: 'figure', head: ['The question that', 'changes <em>everything</em>.'],
          figure: '€40,000', unit: '',
          note: 'The Bëllegen Akt erases up to €40,000 of duty per buyer — but only if you live in the property. A couple: €80,000.' },
        { kind: 'split', head: ['Same property,', 'two <em>operations</em>.'],
          split: [
            ['Primary residence', '~€5,450 cash', 'Bëllegen Akt applied: registration and transcription duty are erased. The notary remains.'],
            ['Buy-to-let', '~€152,600 cash', 'No Bëllegen Akt, and the bank requires a 20 % deposit on a property you do not occupy.'],
          ],
          statement: 'Thirty times more cash as a rental. That is not a tax nuance, it is whether the project is feasible at all.' },
        { kind: 'close', head: ['Do the arithmetic', 'before <em>the offer</em>.'],
          cta: 'I publish every figure with its source. What Luxembourg does not publish, I say so — I do not estimate it.' },
      ],
    },
  },

  // ── 2 · public · the southern belt, six communes ───────────────────────
  {
    id: 'c2-ceinture-sud', track: 'public',
    fr: {
      kicker: 'Carrousel · Ceinture Sud',
      source: 'immotop.lu, séries communales (juillet 2026) · Observatoire de l’Habitat',
      slides: [
        { kind: 'cover', rubric: 'Juillet 2026 · six communes voisines',
          head: ['Le Sud n’a pas', 'un <em>seul</em> marché.'],
          standfirst: 'Six communes qui se touchent, trois vitesses. Prix affichés : le Luxembourg ne publie pas les prix de vente.' },
        { kind: 'board', head: ['La carte,', 'en <em>chiffres</em>.'],
          cols: ['Prix €/m²', 'Sur 1 an', 'Loyer €/m²'],
          rows: [
            ['Esch-sur-Alzette', ['7 149', '−1,31 %', '28,17'], []],
            ['Bettembourg', ['7 070', '−3,64 %', '22,97'], [1]],
            ['Sanem', ['6 773', '−2,99 %', '25,38'], []],
            ['Dudelange', ['6 628', '+0,52 %', '25,76'], []],
            ['Differdange', ['6 317', '−0,91 %', '28,27'], []],
            ['Pétange', ['6 276', '+0,18 %', '25,85'], []],
          ] },
        { kind: 'figure', head: ['Le chiffre qui', 'm’a <em>arrêté</em>.'],
          figure: '50,8 : 1', unit: '',
          note: 'Dudelange : 254 biens à vendre, 5 à louer. Le déséquilibre locatif le plus extrême que j’aie mesuré au Luxembourg.' },
        { kind: 'rows', head: ['Pourquoi', 'si <em>peu</em> à louer.'],
          rows: [
            ['Plafond légal du loyer', '5 % du capital investi'],
            ['Base de calcul', 'capital réévalué, pas le prix payé'],
            ['Effet sur l’offre', 'la mise en location est découragée', true],
          ],
          statement: 'Ce n’est pas un marché tendu par la demande. C’est une offre que la règle retient.' },
        { kind: 'rows', head: ['Ce que je', 'ne <em>sais pas</em>.'],
          rows: [
            ['Prix de vente réels', 'aucun registre public'],
            ['Délai de vente moyen', 'non publié'],
            ['Taux d’absorption', 'non publié'],
            ['Ventilation par quartier', 'non publiée dans le Sud', true],
          ],
          statement: 'Quatre choses qu’aucun agent de ce pays ne peut vous prouver. Celui qui vous les affirme les invente.' },
        { kind: 'close', head: ['Une commune', 'à la <em>fois</em>.'],
          cta: 'Série « Connaître sa commune » : population, transport, écoles, marché. Chaque chiffre porte sa source.' },
      ],
    },
    en: {
      kicker: 'Carousel · Southern belt',
      source: 'immotop.lu communal series (July 2026) · Observatoire de l’Habitat',
      slides: [
        { kind: 'cover', rubric: 'July 2026 · six neighbouring communes',
          head: ['The south is not', 'one <em>market</em>.'],
          standfirst: 'Six communes that touch each other, three speeds. Asking prices: Luxembourg does not publish sale prices.' },
        { kind: 'board', head: ['The map,', 'in <em>numbers</em>.'],
          cols: ['Price €/m²', '1 year', 'Rent €/m²'],
          rows: [
            ['Esch-sur-Alzette', ['7,149', '−1.31 %', '28.17'], []],
            ['Bettembourg', ['7,070', '−3.64 %', '22.97'], [1]],
            ['Sanem', ['6,773', '−2.99 %', '25.38'], []],
            ['Dudelange', ['6,628', '+0.52 %', '25.76'], []],
            ['Differdange', ['6,317', '−0.91 %', '28.27'], []],
            ['Pétange', ['6,276', '+0.18 %', '25.85'], []],
          ] },
        { kind: 'figure', head: ['The number that', 'stopped <em>me</em>.'],
          figure: '50.8 : 1', unit: '',
          note: 'Dudelange: 254 properties for sale, 5 to rent. The most extreme rental imbalance I have measured in Luxembourg.' },
        { kind: 'rows', head: ['Why so little', 'to <em>rent</em>.'],
          rows: [
            ['Legal rent cap', '5 % of invested capital'],
            ['Basis', 'revalued capital, not the price paid'],
            ['Effect on supply', 'letting is discouraged', true],
          ],
          statement: 'This is not a market tightened by demand. It is supply held back by the rule.' },
        { kind: 'rows', head: ['What I', 'do <em>not</em> know.'],
          rows: [
            ['Actual sale prices', 'no public register'],
            ['Average time to sell', 'not published'],
            ['Absorption rate', 'not published'],
            ['Neighbourhood breakdown', 'not published in the south', true],
          ],
          statement: 'Four things no agent in this country can prove to you. Anyone who asserts them is inventing them.' },
        { kind: 'close', head: ['One commune', 'at a <em>time</em>.'],
          cta: '“Know your commune”: population, transport, schools, market. Every figure carries its source.' },
      ],
    },
  },

  // ── 3 · trade · what Luxembourg does not publish ───────────────────────
  {
    id: 'c3-ce-qui-nexiste-pas', track: 'trade',
    fr: {
      kicker: 'Carrousel · Métier',
      source: 'Observatoire de l’Habitat · STATEC · AED · absence constatée de registre public des transactions',
      slides: [
        { kind: 'cover', rubric: 'Pour les confrères',
          head: ['Quatre données', 'qui <em>n’existent pas</em>.'],
          standfirst: 'Le Luxembourg n’a ni MLS, ni registre public des transactions, ni délai de vente publié, ni taux d’absorption. Tout le métier travaille dessus quand même.' },
        { kind: 'steps', head: ['Ce que ça', '<em>implique</em>.'],
          steps: [
            ['1', 'Personne ne peut prouver un prix de vente', 'Les prix affichés sont publics, les prix payés ne le sont pas. L’écart mesurable entre les deux sources est de ~950 €/m² à Esch.'],
            ['2', 'Aucun délai de vente n’est publiable', 'Ni portail ni administration ne publie le temps sur le marché. Le chiffre que vous citez vient de votre portefeuille, pas du marché.'],
            ['3', 'L’absorption est une extrapolation', 'Sans transactions datées, le stock ne se divise par rien. Un ratio vente/location se mesure ; une absorption, non.'],
            ['4', 'Le quartier reste invisible', 'Les séries communales n’ont pas de ventilation infra-communale. Une fourchette de 1,6× à Dudelange n’est pas explicable par la donnée.'],
          ] },
        { kind: 'figure', head: ['Ce qui reste,', 'et qui <em>tient</em>.'],
          figure: '950 €', unit: '/m²',
          note: 'Écart structurel entre le prix affiché moyen et le prix notarié moyen à Esch. Deux sources publiques, une soustraction, aucune estimation.' },
        { kind: 'rows', head: ['Ma règle,', 'sans <em>exception</em>.'],
          rows: [
            ['Chiffre sourcé', 'publié avec sa source'],
            ['Chiffre non publié', 'déclaré indisponible'],
            ['Chiffre périmé', 'daté ou retiré', true],
          ],
          statement: 'Un chiffre sourcé invite le lecteur à vérifier. C’est exactement pour ça qu’un chiffre périmé coûte plus cher que pas de chiffre du tout.' },
        { kind: 'close', head: ['Dire « je ne sais pas »', 'est un <em>argument</em>.'],
          cta: 'Sur un marché où la donnée manque, l’honnêteté sur le manque est le seul avantage qui ne se copie pas.' },
      ],
    },
    en: {
      kicker: 'Carousel · Trade',
      source: 'Observatoire de l’Habitat · STATEC · AED · observed absence of a public transaction register',
      slides: [
        { kind: 'cover', rubric: 'For colleagues in the trade',
          head: ['Four data points', 'that <em>do not exist</em>.'],
          standfirst: 'Luxembourg has no MLS, no public transaction register, no published time-on-market and no absorption rate. The whole trade works on them anyway.' },
        { kind: 'steps', head: ['What that', '<em>means</em>.'],
          steps: [
            ['1', 'Nobody can prove a sale price', 'Asking prices are public, paid prices are not. The measurable gap between the two available sources is ~€950/m² in Esch.'],
            ['2', 'No time-on-market is publishable', 'Neither portal nor administration publishes it. The figure you quote comes from your own book, not from the market.'],
            ['3', 'Absorption is an extrapolation', 'Without dated transactions, stock divides by nothing. A sale-to-rent ratio can be measured; an absorption rate cannot.'],
            ['4', 'The neighbourhood stays invisible', 'Communal series carry no sub-communal breakdown. A 1.6× internal range in Dudelange cannot be explained from the data.'],
          ] },
        { kind: 'figure', head: ['What is left,', 'and <em>holds</em>.'],
          figure: '€950', unit: '/m²',
          note: 'Structural gap between the average asking price and the average notarial price in Esch. Two public sources, one subtraction, no estimate.' },
        { kind: 'rows', head: ['My rule,', 'no <em>exceptions</em>.'],
          rows: [
            ['Sourced figure', 'published with its source'],
            ['Unpublished figure', 'stated unavailable'],
            ['Stale figure', 'dated or withdrawn', true],
          ],
          statement: 'A sourced number invites the reader to check. That is exactly why a stale one costs more than no number at all.' },
        { kind: 'close', head: ['Saying “I don’t know”', 'is an <em>argument</em>.'],
          cta: 'In a market short of data, being honest about the gap is the one advantage nobody can copy.' },
      ],
    },
  },
];
