// Ayrton Silva — week 1.
// Direction: ../CONTENT-DIRECTION.md
// Voice: analyst who happens to sell. Numbers first, sourced, bad news first.
// Track: 'public' (buyers/sellers) or 'trade' (agents/agencies) — trade swaps
// the accent from editorial red to slate. Same system either way.
//
// Every figure traces to a named public source, verified 05/08/2026.
// Refresh before posting if more than a quarter has passed.

import { WEEKS_2_4 } from './weeks-2-4.js';
import { WEEKS_5_8 } from './weeks-5-8.js';

const WEEK_1 = [
  // ── MON · public · le chiffre ──────────────────────────────────────────
  {
    id: 'w1-mon', layout: 'figure', track: 'public',
    fr: {
      kicker: 'Semaine 1 · Le chiffre',
      rubric: 'Marché · Esch-sur-Alzette',
      head: ['Ce que les vendeurs demandent,', 'et ce qui se <em>paie</em>.'],
      standfirst: 'Il n’existe aucun registre public des prix de transaction au Luxembourg. Mais l’écart entre les deux sources disponibles est, lui, mesurable.',
      figure: '950 €', unit: '/m²',
      note: 'Sur un appartement affiché à 600 000 €, il existe une marge de négociation qui ne dépend pas de votre talent. Elle est dans le marché.',
      rows: [
        ['Prix affiché moyen', '7 149 €/m²'],
        ['Prix notarié moyen', '~6 200 €/m²'],
        ['Écart structurel', '950 €/m²', true],
      ],
      source: 'Observatoire de l’Habitat (avril 2026) · immotop.lu (juillet 2026)',
    },
    en: {
      kicker: 'Week 1 · The number',
      rubric: 'Market · Esch-sur-Alzette',
      head: ['What sellers ask,', 'and what gets <em>paid</em>.'],
      standfirst: 'Luxembourg has no public register of transaction prices. But the gap between the two sources that do exist is measurable.',
      figure: '€950', unit: '/m²',
      note: 'On a flat listed at €600,000 there is a negotiating margin that has nothing to do with your skill. It is in the market.',
      rows: [
        ['Average asking price', '€7,149/m²'],
        ['Average notarial price', '~€6,200/m²'],
        ['Structural gap', '€950/m²', true],
      ],
      source: 'Observatoire de l’Habitat (April 2026) · immotop.lu (July 2026)',
    },
  },

  // ── TUE · trade · the system ───────────────────────────────────────────
  {
    id: 'w1-tue', layout: 'system', track: 'trade',
    media: 'media/lumina-dudelange.png',
    fr: {
      kicker: 'Semaine 1 · Le système',
      rubric: 'Coulisses · Pourquoi j’ai construit ça',
      head: ['J’ai arrêté d’estimer', 'de <em>mémoire</em>.'],
      standfirst: 'Quinze modules d’analyse et un système d’exploitation, parce que je voulais les chiffres avant d’ouvrir la bouche.',
      screenCap: 'LUMINA · Field Atlas — Dudelange, 7 015 bâtiments réels sur orthophoto ACT. Données prospects retirées.',
      rows: [
        ['Modules d’analyse', '15'],
        ['Sources officielles branchées', 'Observatoire · STATEC · BCL · AED'],
        ['Ce qu’il refuse de faire', 'inventer un chiffre', true],
      ],
      source: 'Système interne. Les chiffres qu’il produit sont sourcés ou marqués non vérifiés.',
    },
    en: {
      kicker: 'Week 1 · The system',
      rubric: 'Behind the work · Why I built this',
      head: ['I stopped valuing', 'from <em>memory</em>.'],
      standfirst: 'Fifteen analysis modules and an operating system, because I wanted the numbers before I opened my mouth.',
      screenCap: 'LUMINA · Field Atlas — Dudelange, 7,015 real buildings on ACT orthophoto. Prospect data removed.',
      rows: [
        ['Analysis modules', '15'],
        ['Official sources wired in', 'Observatoire · STATEC · BCL · AED'],
        ['What it refuses to do', 'invent a number', true],
      ],
      source: 'Internal system. Figures it produces are sourced, or flagged unverified.',
    },
  },

  // ── WED · public · FLAGSHIP · comment je vérifie ───────────────────────
  {
    id: 'w1-wed', layout: 'method', track: 'public',
    fr: {
      kicker: 'Semaine 1 · Comment je vérifie',
      rubric: 'Méthode · Valeur d’un appartement',
      head: ['Comment je calcule', 'ce que vaut <em>vraiment</em>', 'un appartement.'],
      standfirst: 'Pas d’estimation au feeling. Quatre étapes, chacune vérifiable, dans un marché qui ne publie presque rien.',
      steps: [
        ['01', 'Les annonces actives, pas les souvenirs', 'Je relève les biens comparables réellement en ligne aujourd’hui, avec leur surface et leur classe énergétique. Le marché d’il y a six mois n’existe plus.'],
        ['02', 'Le recoupement notarié', 'Je confronte au prix notarié de l’Observatoire pour la commune. C’est ce qui se paie, pas ce qui se demande.'],
        ['03', 'La zone, jamais la commune', 'À Esch, le rendement double d’un quartier à l’autre. Une moyenne communale est fausse pour un bien donné.'],
        ['04', 'Le capital investi, pas le prix', 'Droits à 7 %, notaire à 1 %. Un bien à 545 000 € engage 588 600 €. Tout rendement calculé sur le prix affiché est surévalué.'],
      ],
      statement: 'Si une de ces quatre étapes manque, ce n’est pas une évaluation. C’est une opinion.',
      source: 'Observatoire de l’Habitat · immotop.lu · pfi.public.lu',
    },
    en: {
      kicker: 'Week 1 · How I check',
      rubric: 'Method · What a flat is worth',
      head: ['How I work out what', 'a flat is <em>actually</em> worth.'],
      standfirst: 'No valuing by feel. Four steps, each one checkable, in a market that publishes almost nothing.',
      steps: [
        ['01', 'Live listings, not memory', 'I take the comparable properties actually online today, with their floor area and energy class. The market of six months ago no longer exists.'],
        ['02', 'Cross-check against notarial data', 'I set that against the Observatoire’s notarial price for the commune. That is what gets paid, not what gets asked.'],
        ['03', 'The zone, never the commune', 'In Esch the yield doubles between neighbourhoods. A commune average is wrong for any specific property.'],
        ['04', 'Invested capital, not price', 'Duty at 7 %, notary at 1 %. A €545,000 property commits €588,600. Any yield calculated on the asking price is overstated.'],
      ],
      statement: 'If one of those four steps is missing, it is not a valuation. It is an opinion.',
      source: 'Observatoire de l’Habitat · immotop.lu · pfi.public.lu',
    },
  },

  // ── THU · public · market read ─────────────────────────────────────────
  {
    id: 'w1-thu', layout: 'read', track: 'public',
    fr: {
      kicker: 'Semaine 1 · Lecture de marché',
      rubric: 'Esch-sur-Alzette · Juillet 2026',
      head: ['Les prix baissent.', 'Les loyers sont au plus <em>haut</em>.'],
      standfirst: 'Deux mouvements opposés dans la même commune, au même moment. Pour un acheteur, c’est une fenêtre. Pour un bailleur, c’est une contrainte légale.',
      rows: [
        ['Prix affiché, sur 1 an', '−1,31 %'],
        ['Depuis le pic de janvier 2026', '−5,4 %', true],
        ['Sur 3 ans', '−6,3 %'],
        ['Depuis 2019', '+47,1 %', true],
        ['Loyer affiché, sur 1 an', '+3,22 %'],
        ['Loyer sur 5 ans', '+30,8 %'],
      ],
      statement: 'Ceux qui ont acheté en 2019 vont très bien. Ceux qui ont acheté en 2022 attendent. Les deux affirmations sont vraies en même temps.',
      source: 'immotop.lu, série Esch-sur-Alzette (juillet 2026) · Observatoire de l’Habitat',
    },
    en: {
      kicker: 'Week 1 · Market read',
      rubric: 'Esch-sur-Alzette · July 2026',
      head: ['Prices are falling.', 'Rents are at a <em>record</em>.'],
      standfirst: 'Two opposite movements in the same commune at the same time. For a buyer that is a window. For a landlord it is a legal ceiling.',
      rows: [
        ['Asking price, 1 year', '−1.31 %'],
        ['Since the January 2026 peak', '−5.4 %', true],
        ['Over 3 years', '−6.3 %'],
        ['Since 2019', '+47.1 %', true],
        ['Asking rent, 1 year', '+3.22 %'],
        ['Rent over 5 years', '+30.8 %'],
      ],
      statement: 'Anyone who bought in 2019 is fine. Anyone who bought in 2022 is waiting. Both are true at once.',
      source: 'immotop.lu, Esch-sur-Alzette series (July 2026) · Observatoire de l’Habitat',
    },
  },

  // ── FRI · trade · build note ───────────────────────────────────────────
  {
    id: 'w1-fri', layout: 'note', track: 'trade',
    fr: {
      kicker: 'Semaine 1 · Note de build',
      rubric: 'Ce que j’ai construit cette semaine',
      head: ['Une analyse qui sait', 'dire « je ne <em>sais</em> pas ».'],
      standfirst: 'La partie la plus utile du système n’est pas ce qu’il calcule. C’est ce qu’il refuse de calculer.',
      statement: 'Quatre métriques que tout analyste anglo-saxon utilise n’existent pas au Luxembourg. Le système les marque « non disponible » au lieu de les estimer.',
      rows: [
        ['Ratio prix de vente / affiché', 'impossible — pas de registre'],
        ['% vendu au-dessus du prix', 'impossible — même raison'],
        ['Délai de vente moyen', 'non publié'],
        ['Mois de stock par commune', 'non publié'],
        ['Ce que ça change', 'un chiffre en moins, zéro invention', true],
      ],
      source: 'Observatoire de l’Habitat · STATEC · Chambre Immobilière',
    },
    en: {
      kicker: 'Week 1 · Build note',
      rubric: 'What I built this week',
      head: ['An analysis that can', 'say “I don’t <em>know</em>”.'],
      standfirst: 'The most useful part of the system is not what it calculates. It is what it refuses to calculate.',
      statement: 'Four metrics every Anglo-Saxon analyst uses do not exist in Luxembourg. The system marks them unavailable instead of estimating them.',
      rows: [
        ['Sale-to-list ratio', 'impossible — no register'],
        ['% sold above asking', 'impossible — same reason'],
        ['Average days on market', 'not published'],
        ['Months of inventory by commune', 'not published'],
        ['What that buys', 'one fewer number, zero invention', true],
      ],
      source: 'Observatoire de l’Habitat · STATEC · Chambre Immobilière',
    },
  },
];

export const POSTS = [...WEEK_1, ...WEEKS_2_4, ...WEEKS_5_8];
