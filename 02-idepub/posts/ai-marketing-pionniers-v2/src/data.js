// IDEPUB — "Pionniers du marketing IA" series, rebuilt on the real identity.
// Copy transcribed from the original French posts.
//
// NO BADGES: this series carries no "POST n / 10" badge — the originals use
// pills like "AVANTAGE PRÉCURSEUR" and "LUXEMBOURG". File order is therefore
// the only sequence signal available, and is what is used below.
//
// ---------------------------------------------------------------------------
// CONTENT WARNINGS — this was the worst series in the set for invented material.
// None of the following is reproduced:
//
//   post 2  "1 sur 6 / 3 sur 6 / 5 à 6 sur 6 s'arrêtent"  — invented engagement
//   post 6  "+403 % de demandes avec la vidéo IA"          — invented
//   post 6  engagement counts (124, 256, 312, 210, 167…)   — invented
//   post 10 "jusqu'à +80 % de conversion"                  — invented
//   posts 1,2,4,5,6,7,8,10 — Dubai imagery (Burj Khalifa), "WATERFRONT DUBAI",
//                            "2,5 M AED", and one caption reading
//                            "WATERFRONT RESIDENCE LUXEMBOURG" over a Dubai
//                            skyline. Replaced with the real Luxembourg
//                            programme.
//
// The arguments all survive without the numbers — this series was always about
// timing and positioning, not measurement. Brandkit rule: no unsourced metrics.
// ---------------------------------------------------------------------------

export const SERIES = { fr: 'Vidéo IA<br>Avantage précurseur', en: 'AI video<br>First-mover advantage' };

export const PHOTOS = {
  ext1:  'photos/bonnevoie-vefa/vefa-00.jpg',
  ext2:  'photos/bonnevoie-vefa/vefa-01.jpg',
  facade:'photos/bonnevoie-vefa/vefa-02.jpg',
  plan:  'photos/bonnevoie-vefa/vefa-03.jpg',
  street:'photos/bonnevoie-vefa/vefa-04.jpg',
  still: 'photos/bonnevoie-vefa/video-still.jpg',
};

export const POSTS = [
  {
    n: 1, layout: 'media', phone: true, media: PHOTOS.facade,
    fr: {
      eyebrow: 'Vidéo IA immobilier · Luxembourg',
      head: ['Soyez parmi les premiers', 'à proposer la <em>vidéo IA</em>.'],
      sub: 'Dans un marché où peu d’acteurs l’utilisent encore, la nouveauté devient un avantage commercial immédiat.',
      chip: ['Programme Bonnevoie', 'Visite privée en vidéo IA'],
      items: [
        ['Différenciation immédiate', 'Vous vous démarquez instantanément de vos concurrents.'],
        ['Image plus moderne', 'Vous adoptez les codes d’un marketing immobilier nouvelle génération.'],
        ['Plus de curiosité', 'Vous attirez l’attention, suscitez l’intérêt et engagez davantage.'],
      ],
    },
    en: {
      eyebrow: 'AI property video · Luxembourg',
      head: ['Be among the first', 'to offer <em>AI video</em>.'],
      sub: 'In a market where few players use it yet, being early is an immediate commercial advantage.',
      chip: ['Bonnevoie programme', 'Private tour in AI video'],
      items: [
        ['Immediate differentiation', 'You stand apart from your competitors straight away.'],
        ['A more modern image', 'You adopt the codes of next-generation property marketing.'],
        ['More curiosity', 'You attract attention, build interest and drive engagement.'],
      ],
    },
  },
  {
    n: 2, layout: 'compare3',
    cols: [
      { img: PHOTOS.plan,   scores: [1, 1, 1] },
      { img: PHOTOS.facade, scores: [2, 2, 2] },
      { img: PHOTOS.still,  scores: [3, 3, 3], win: true },
    ],
    fr: {
      eyebrow: 'Vidéo IA · Marché en évolution',
      head: ['Quand peu d’acteurs l’utilisent,', 'l’attention se concentre', 'sur <em>vous</em>.'],
      sub: 'Avant que le format se banalise, il crée plus de surprise, plus d’arrêt sur image et plus de mémorisation.',
      metrics: ['Arrêt', 'Intérêt', 'Messages'],
      cols: [
        ['Photo', 'Impact faible. Le scroll continue.'],
        ['Vidéo classique', 'Impact moyen. Le format est attendu.'],
        ['Vidéo IA', 'Impact maximal, tant que le format reste rare.'],
      ],
    },
    en: {
      eyebrow: 'AI video · A shifting market',
      head: ['When few players use it,', 'the attention lands', 'on <em>you</em>.'],
      sub: 'Before the format becomes ordinary, it creates more surprise, more stopping power and more recall.',
      metrics: ['Stopping power', 'Interest', 'Messages'],
      cols: [
        ['Photo', 'Low impact. The scroll continues.'],
        ['Standard video', 'Medium impact. The format is expected.'],
        ['AI video', 'Maximum impact, while the format is still rare.'],
      ],
    },
  },
  {
    n: 3, layout: 'steps',
    fr: {
      eyebrow: 'Vidéo IA immobilier · Timing',
      head: ['Prenez l’avance avant que', 'le marché <em>rattrape</em>.'],
      sub: 'Aujourd’hui, l’effet nouveauté joue encore en votre faveur. Demain, ce sera le standard.',
      steps: [
        ['01', 'Maintenant', 'Impact plus fort. Le format surprend encore.'],
        ['02', 'Dans 6 mois', 'Différenciation moyenne. D’autres s’y mettent.'],
        ['03', 'Demain', 'Simple norme du marché. L’avantage a disparu.'],
      ],
      kicker: ['Être tôt', 'change le jeu.'],
    },
    en: {
      eyebrow: 'AI property video · Timing',
      head: ['Move before the market', '<em>catches up</em>.'],
      sub: 'Today the novelty still works in your favour. Tomorrow it will be the standard.',
      steps: [
        ['01', 'Now', 'Strongest impact. The format still surprises.'],
        ['02', 'In 6 months', 'Moderate differentiation. Others have started.'],
        ['03', 'Tomorrow', 'Simply the market norm. The advantage is gone.'],
      ],
      kicker: ['Being early', 'changes the game.'],
    },
  },
  {
    n: 4, layout: 'media', media: PHOTOS.ext1,
    fr: {
      eyebrow: 'Vidéo IA · Image de marque',
      head: ['Le premier signal que', 'voient vos prospects ?', 'Votre <em>niveau</em>.'],
      sub: 'Adopter tôt un format plus avancé renforce immédiatement votre perception de modernité, de sérieux et d’innovation.',
      items: [
        ['Plus premium', 'Un rendu haut de gamme qui inspire confiance.'],
        ['Plus crédible', 'Un signal fort de sérieux et de professionnalisme.'],
        ['Plus mémorisable', 'Un impact visuel et émotionnel qui reste en tête.'],
      ],
      banner: 'La forme de votre contenu parle avant vous.',
    },
    en: {
      eyebrow: 'AI video · Brand image',
      head: ['The first signal your', 'prospects see?', 'Your <em>standard</em>.'],
      sub: 'Adopting a more advanced format early immediately strengthens how modern, serious and innovative you appear.',
      items: [
        ['More premium', 'A high-end result that inspires confidence.'],
        ['More credible', 'A strong signal of rigour and professionalism.'],
        ['More memorable', 'A visual and emotional impact that stays.'],
      ],
      banner: 'The form of your content speaks before you do.',
    },
  },
  {
    n: 5, layout: 'grid5',
    fr: {
      eyebrow: 'Vidéo IA · Océan d’opportunité',
      head: ['Peu de concurrence.', 'Plus d’<em>effet</em>.'],
      sub: 'Quand un service est encore rare sur le marché, il attire plus vite l’œil, la curiosité et la conversation.',
      tiles: [
        ['Curiosité', 'Le format inhabituel arrête le scroll.'],
        ['Partages', 'Ce qui surprend circule plus loin.'],
        ['Réactions', 'Plus de commentaires, plus de questions.'],
        ['Différenciation', 'Vous n’êtes comparé à personne.'],
      ],
      items: [
        ['Moins de concurrence', 'Le format n’est pas encore saturé au Luxembourg.'],
        ['Plus d’effet', 'La rareté fait une partie du travail à votre place.'],
        ['Fenêtre limitée', 'Cet avantage se referme à mesure que le marché adopte.'],
      ],
      banner: 'Marchez là où peu de monde est encore.',
    },
    en: {
      eyebrow: 'AI video · Open water',
      head: ['Less competition.', 'More <em>effect</em>.'],
      sub: 'When a service is still rare in the market, it catches the eye, the curiosity and the conversation faster.',
      tiles: [
        ['Curiosity', 'An unusual format stops the scroll.'],
        ['Shares', 'What surprises people travels further.'],
        ['Reactions', 'More comments, more questions.'],
        ['Differentiation', 'You are not compared to anyone.'],
      ],
      items: [
        ['Less competition', 'The format is not yet saturated in Luxembourg.'],
        ['More effect', 'Rarity does part of the work for you.'],
        ['A limited window', 'This advantage closes as the market adopts.'],
      ],
      banner: 'Walk where few people are, while that is still true.',
    },
  },
  {
    n: 6, layout: 'media', media: PHOTOS.street,
    fr: {
      eyebrow: 'Vidéo IA · Positionnement',
      head: ['Ceux qui adoptent tôt', 'deviennent souvent', 'la <em>référence</em>.'],
      sub: 'Les premiers à utiliser un outil marquant sont souvent ceux qu’on retient, qu’on partage et qu’on recommande.',
      items: [
        ['Visibilité', 'Soyez vu en premier, là où votre audience cherche.'],
        ['Autorité', 'Inspirez confiance grâce à un contenu qui vous distingue.'],
        ['Réputation', 'Devenez la référence qu’on recommande naturellement.'],
      ],
      banner: 'La nouveauté bien utilisée devient une signature.',
    },
    en: {
      eyebrow: 'AI video · Positioning',
      head: ['Those who adopt early', 'often become', 'the <em>reference</em>.'],
      sub: 'The first to use a distinctive tool are usually the ones people remember, share and recommend.',
      items: [
        ['Visibility', 'Be seen first, where your audience is looking.'],
        ['Authority', 'Build confidence with content that sets you apart.'],
        ['Reputation', 'Become the name people recommend without being asked.'],
      ],
      banner: 'Novelty used well becomes a signature.',
    },
  },
  {
    n: 7, layout: 'media', phone: true, media: PHOTOS.ext2,
    fr: {
      eyebrow: 'Vidéo IA · Identité de marque',
      head: ['Avant que ce soit la norme,', 'faites-en votre <em>signature</em>.'],
      sub: 'Le bon moment pour se distinguer, c’est avant que tout le monde se ressemble à nouveau.',
      chip: ['Signature visuelle', 'Luxembourg'],
      items: [
        ['Signature visuelle', 'Un style reconnaissable d’une publication à l’autre.'],
        ['Style plus marquant', 'Un rendu qui ne ressemble pas à celui du voisin.'],
        ['Marque plus reconnaissable', 'On vous identifie avant de lire votre nom.'],
      ],
      banner: 'Le marché suivra. Prenez de l’avance.',
    },
    en: {
      eyebrow: 'AI video · Brand identity',
      head: ['Before it becomes the norm,', 'make it your <em>signature</em>.'],
      sub: 'The moment to stand apart is before everyone starts looking alike again.',
      chip: ['Visual signature', 'Luxembourg'],
      items: [
        ['Visual signature', 'A recognisable style from one post to the next.'],
        ['A sharper style', 'A result that does not look like everyone else’s.'],
        ['A more recognisable brand', 'People identify you before reading your name.'],
      ],
      banner: 'The market will follow. Get there first.',
    },
  },
  {
    n: 8, layout: 'steps',
    fr: {
      eyebrow: 'Vidéo IA · Coût d’inertie',
      head: ['Attendre coûte plus', 'que <em>commencer</em>.'],
      sub: 'Quand vous attendez, vous laissez l’attention, les prises de contact et la perception d’innovation à ceux qui agissent avant vous.',
      steps: [
        ['01', 'Être en retard — subit la comparaison', 'Moins de visibilité, moins de confiance, moins d’opportunités.'],
        ['02', 'Être au niveau — suit la tendance', 'Vous restez visible, mais vous ne vous différenciez pas.'],
        ['03', 'Être en avance — capte l’opportunité', 'Plus d’attention, plus de contacts, plus de projets qualifiés.'],
      ],
      kicker: ['L’avance', 'se construit tôt.'],
    },
    en: {
      eyebrow: 'AI video · The cost of waiting',
      head: ['Waiting costs more', 'than <em>starting</em>.'],
      sub: 'While you wait, you leave the attention, the enquiries and the perception of innovation to whoever moves first.',
      steps: [
        ['01', 'Behind — you are the comparison', 'Less visibility, less trust, fewer opportunities.'],
        ['02', 'Level — you follow the trend', 'You stay visible, but you do not stand apart.'],
        ['03', 'Ahead — you take the opening', 'More attention, more contacts, more qualified projects.'],
      ],
      kicker: ['A head start', 'is built early.'],
    },
  },
  {
    n: 9, layout: 'cards3',
    cards: [PHOTOS.facade, PHOTOS.ext1, PHOTOS.street],
    fr: {
      eyebrow: 'Vidéo IA immobilier · Fenêtre d’avance',
      head: ['Au Luxembourg,', 'l’opportunité est <em>maintenant</em>.'],
      sub: 'Le marché évolue, mais l’adoption reste encore inégale. C’est précisément ce qui crée une fenêtre de différenciation pour les premiers.',
      cards: [
        ['Marché en mutation', 'La vidéo IA redéfinit la visibilité et accélère la décision.'],
        ['Peu d’acteurs équipés', 'L’adoption reste faible, offrant un avantage concurrentiel clair.'],
        ['Moment favorable', 'Agissez maintenant pour capter plus d’attention, plus vite.'],
      ],
    },
    en: {
      eyebrow: 'AI property video · The window',
      head: ['In Luxembourg,', 'the moment is <em>now</em>.'],
      sub: 'The market is moving, but adoption is still uneven. That unevenness is exactly what creates a window for the first movers.',
      cards: [
        ['A market in transition', 'AI video is redefining visibility and speeding up decisions.'],
        ['Few players equipped', 'Adoption remains low, which is a clear competitive advantage.'],
        ['A favourable moment', 'Act now to capture more attention, faster.'],
      ],
    },
  },
  {
    n: 10, layout: 'media', phone: true, media: PHOTOS.still,
    fr: {
      eyebrow: 'Service vidéo IA · IDEPUB',
      head: ['Vous voulez être parmi', 'les <em>premiers</em> ?'],
      sub: 'Nous créons des contenus vidéo IA clairs, rapides et prêts à diffuser pour vous aider à prendre de l’avance pendant que le marché se structure encore.',
      chip: ['Votre prochain projet', 'Luxembourg'],
      items: [
        ['Différenciation', 'Démarquez-vous dès aujourd’hui.'],
        ['Visibilité', 'Attirez plus d’attention, plus vite.'],
        ['Prêt à diffuser', 'Des contenus pros, clés en main.'],
      ],
      banner: 'Parlez-nous de votre projet — immobilier, VEFA, rénovation, construction, architecture. Luxembourg.',
    },
    en: {
      eyebrow: 'AI video service · IDEPUB',
      head: ['Want to be among', 'the <em>first</em>?'],
      sub: 'We create AI video content that is clear, fast and ready to publish, to help you move ahead while the market is still taking shape.',
      chip: ['Your next project', 'Luxembourg'],
      items: [
        ['Differentiation', 'Stand apart starting today.'],
        ['Visibility', 'Attract more attention, faster.'],
        ['Publish-ready', 'Professional content, turnkey.'],
      ],
      banner: 'Tell us about your project — real estate, off-plan, renovation, construction, architecture. Luxembourg.',
    },
  },
];
