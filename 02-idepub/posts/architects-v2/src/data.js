// IDEPUB — Architecture series, rebuilt on the real brand identity.
// Copy transcribed from the original French posts.
//
// FILENAME NOTE: the source filenames do NOT match the badge order. Mapping was
//   01→1  02→2  09→3  10→4  05→5  06→6  07→7  04→8  08→9  03→10
// The posts below are in badge order, which is the order they were designed to
// run in. Always read the badge, never trust the filename.
//
// BRAND NOTE: the originals use the second IDEPUB lockup (VIDÉO · COM · DIGITAL
// with CMYK bars). That is not the supplied identity — rebuilt on the real mark.

export const SERIES = { fr: 'Vidéo architecture<br>Luxembourg', en: 'Architecture video<br>Luxembourg' };

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
      eyebrow: 'Vidéo architecture · Luxembourg',
      head: ['L’architecture doit se vivre', 'avant de se <em>construire</em>.'],
      sub: 'Des vidéos qui transforment idées, plans et intentions en présentations plus claires, plus désirables et plus convaincantes.',
      chip: ['Idée · Plan · Volumes · Projet', 'Luxembourg'],
      items: [
        ['Projette le client', 'Rendez le concept immédiatement lisible.'],
        ['Valorise la vision', 'Mettez en scène volumes, matières et lumière.'],
        ['Déclenche le contact', 'Une présentation forte génère plus d’intérêt.'],
      ],
    },
    en: {
      eyebrow: 'Architecture video · Luxembourg',
      head: ['Architecture should be lived', 'before it is <em>built</em>.'],
      sub: 'Video that turns ideas, plans and intentions into presentations that are clearer, more desirable and more convincing.',
      chip: ['Idea · Plan · Volumes · Project', 'Luxembourg'],
      items: [
        ['Projects the client', 'Make the concept immediately legible.'],
        ['Elevates the vision', 'Stage the volumes, the materials and the light.'],
        ['Triggers contact', 'A strong presentation generates more interest.'],
      ],
    },
  },
  {
    n: 2, layout: 'flow',
    panels: [
      { img: PHOTOS.plan,   label: { fr: 'Idée',           en: 'Idea' } },
      { img: PHOTOS.street, label: { fr: 'Plan',           en: 'Plan' } },
      { img: PHOTOS.facade, label: { fr: 'Projet réalisé', en: 'Built project' } },
    ],
    fr: {
      eyebrow: 'Vidéo architecture · Luxembourg',
      head: ['Faites comprendre le projet', 'avant la première <em>réunion</em>.'],
      sub: 'Une vidéo rend l’intention, les usages et l’ambiance du projet plus immédiats et plus clairs.',
      items: [
        ['Clarté', 'Le client saisit l’idée en quelques secondes.'],
        ['Projection', 'Il se représente mieux les volumes et les circulations.'],
        ['Impact', 'Votre présentation marque davantage les esprits.'],
      ],
    },
    en: {
      eyebrow: 'Architecture video · Luxembourg',
      head: ['Make the project understood', 'before the first <em>meeting</em>.'],
      sub: 'Video makes the intention, the uses and the atmosphere of a project more immediate and more clear.',
      items: [
        ['Clarity', 'The client grasps the idea in seconds.'],
        ['Projection', 'They picture the volumes and the circulation better.'],
        ['Impact', 'Your presentation stays with them.'],
      ],
    },
  },
  {
    n: 3, layout: 'media', phone: true, media: PHOTOS.ext1,
    fr: {
      eyebrow: 'Vidéo architecture · Luxembourg',
      head: ['Du croquis au rendu.', 'Puis du rendu à', 'l’<em>émotion</em>.'],
      sub: 'La vidéo relie le concept, la technique et l’expérience finale dans une seule présentation.',
      chip: ['Croquis → Plan → Volumes → Réalisé', 'Une seule présentation'],
      items: [
        ['Lisible', 'Chaque étape devient compréhensible.'],
        ['Cohérent', 'Le fil du projet est plus clair.'],
        ['Désirable', 'Le rendu devient une expérience.'],
      ],
    },
    en: {
      eyebrow: 'Architecture video · Luxembourg',
      head: ['From sketch to render.', 'Then from render to', '<em>emotion</em>.'],
      sub: 'Video connects the concept, the technical work and the final experience in a single presentation.',
      chip: ['Sketch → Plan → Volumes → Built', 'One presentation'],
      items: [
        ['Legible', 'Every stage becomes understandable.'],
        ['Coherent', 'The thread of the project is clearer.'],
        ['Desirable', 'The render becomes an experience.'],
      ],
    },
  },
  {
    n: 4, layout: 'split',
    split: {
      left:  { img: PHOTOS.facade, tag: { fr: 'Image statique', en: 'Static image' },
               verdict: { fr: 'Montre la forme', en: 'Shows the form' }, ok: false },
      right: { img: PHOTOS.still,  tag: { fr: 'Vidéo immersive', en: 'Immersive video' },
               verdict: { fr: 'Fait ressentir l’espace', en: 'Makes the space felt' }, ok: true },
    },
    fr: {
      eyebrow: 'Vidéo architecture · Luxembourg',
      head: ['Une image montre.', 'Une vidéo fait <em>ressentir</em>.'],
      sub: 'Pour présenter un projet d’architecture, l’émotion visuelle compte autant que la forme.',
      items: [
        ['Plus vivant', 'Lumière, matières et rythme prennent vie.'],
        ['Plus mémorable', 'Une présentation qui reste en tête.'],
        ['Plus engageant', 'Plus d’intérêt, plus d’échanges, plus de rendez-vous.'],
      ],
    },
    en: {
      eyebrow: 'Architecture video · Luxembourg',
      head: ['An image shows.', 'A video makes you <em>feel</em>.'],
      sub: 'To present an architectural project, visual emotion counts as much as form.',
      items: [
        ['More alive', 'Light, materials and rhythm come to life.'],
        ['More memorable', 'A presentation that stays in mind.'],
        ['More engaging', 'More interest, more conversations, more meetings.'],
      ],
    },
  },
  {
    n: 5, layout: 'steps',
    fr: {
      eyebrow: 'Vidéo architecture · Luxembourg',
      head: ['Un projet peut devenir', '<em>5 contenus</em>.'],
      sub: 'À partir d’un seul projet, vous alimentez votre prospection, votre portfolio et vos réseaux.',
      steps: [
        ['01', 'Reel', 'Vidéo verticale dynamique pour capter l’attention.'],
        ['02', 'Story', 'Format immersif idéal pour vos réseaux sociaux.'],
        ['03', 'Post carré', 'Post optimisé pour inspirer et engager.'],
        ['04', 'Couverture / bannière', 'Bannière professionnelle pour valoriser votre marque.'],
        ['05', 'Visuel site', 'Visuel impactant pour votre site et vos landing pages.'],
      ],
      kicker: ['Un seul projet.', 'Plusieurs usages commerciaux.'],
    },
    en: {
      eyebrow: 'Architecture video · Luxembourg',
      head: ['One project becomes', '<em>5 assets</em>.'],
      sub: 'From a single project you feed your prospecting, your portfolio and your channels.',
      steps: [
        ['01', 'Reel', 'Dynamic vertical video to capture attention.'],
        ['02', 'Story', 'Immersive format, ideal for your social channels.'],
        ['03', 'Square post', 'Optimised to inspire and engage.'],
        ['04', 'Cover / banner', 'Professional banner to elevate your brand.'],
        ['05', 'Website visual', 'Strong visual for your site and landing pages.'],
      ],
      kicker: ['One project.', 'Many commercial uses.'],
    },
  },
  {
    n: 6, layout: 'steps',
    fr: {
      eyebrow: 'Vidéo architecture · Luxembourg',
      head: ['Comment', 'ça <em>marche</em> ?'],
      sub: 'Un process simple pour transformer vos supports en vidéo prête à diffuser.',
      steps: [
        ['01', 'Vous nous envoyez vos éléments', 'Plans, rendus, photos, infos clés.'],
        ['02', 'Nous structurons l’angle', 'Message, déroulé, CTA.'],
        ['03', 'Nous produisons la vidéo', 'Montage, habillage, rythme.'],
        ['04', 'Vous recevez les formats prêts à diffuser', '1:1, 4:5, 9:16, 16:9.'],
      ],
      kicker: ['Vos supports existent déjà.', 'Nous les mettons en mouvement.'],
    },
    en: {
      eyebrow: 'Architecture video · Luxembourg',
      head: ['How does', 'it <em>work</em>?'],
      sub: 'A simple process that turns your existing material into video ready to publish.',
      steps: [
        ['01', 'You send us your material', 'Plans, renders, photos, key facts.'],
        ['02', 'We structure the angle', 'Message, running order, CTA.'],
        ['03', 'We produce the video', 'Edit, design, pacing.'],
        ['04', 'You receive publish-ready formats', '1:1, 4:5, 9:16, 16:9.'],
      ],
      kicker: ['Your material already exists.', 'We put it in motion.'],
    },
  },
  {
    n: 7, layout: 'media', phone: true, media: PHOTOS.ext2,
    fr: {
      eyebrow: 'Vidéo architecture · Luxembourg',
      head: ['Montrez les volumes.', 'Pas seulement les <em>façades</em>.'],
      sub: 'Une bonne vidéo met en valeur la circulation, la lumière, les matières et l’expérience de l’espace.',
      chip: ['Volumes · Lumière · Matières', 'Circulation'],
      items: [
        ['Volumes', 'Les espaces deviennent lisibles.'],
        ['Lumière', 'L’ambiance est mieux perçue.'],
        ['Matières', 'Les textures gagnent en présence.'],
        ['Circulation', 'Le parcours se comprend.'],
      ],
    },
    en: {
      eyebrow: 'Architecture video · Luxembourg',
      head: ['Show the volumes.', 'Not just the <em>facades</em>.'],
      sub: 'Good video brings out circulation, light, materials and the experience of the space.',
      chip: ['Volumes · Light · Materials', 'Circulation'],
      items: [
        ['Volumes', 'The spaces become legible.'],
        ['Light', 'The atmosphere is better understood.'],
        ['Materials', 'Textures gain presence.'],
        ['Circulation', 'The route through becomes clear.'],
      ],
    },
  },
  {
    n: 8, layout: 'cards3',
    cards: [PHOTOS.plan, PHOTOS.still, PHOTOS.ext1],
    fr: {
      eyebrow: 'Vidéo architecture · Luxembourg',
      head: ['3 usages.', 'Un même <em>système</em>.'],
      sub: 'La logique vidéo architecture s’adapte à plusieurs moments commerciaux.',
      cards: [
        ['Concours / appel d’offres', 'Présentez mieux l’intention.'],
        ['Présentation client', 'Rendez le projet plus convaincant.'],
        ['Portfolio / communication', 'Valorisez votre signature et vos réalisations.'],
      ],
    },
    en: {
      eyebrow: 'Architecture video · Luxembourg',
      head: ['3 uses.', 'One <em>system</em>.'],
      sub: 'The architecture video logic adapts to several commercial moments.',
      cards: [
        ['Competition / tender', 'Present the intention better.'],
        ['Client presentation', 'Make the project more convincing.'],
        ['Portfolio / communication', 'Elevate your signature and your built work.'],
      ],
    },
  },
  {
    n: 9, layout: 'pricing', media: PHOTOS.street,
    fr: {
      eyebrow: 'Vidéo architecture · Luxembourg',
      head: ['3 formats.', '1 <em>objectif</em>.'],
      sub: 'Présenter votre architecture avec plus d’impact, plus de clarté et plus d’envie.',
      tiers: [
        ['EUR 350', 'Vidéo d’initiation', 'Une courte vidéo social media à partir des éléments du projet que vous fournissez.'],
        ['EUR 530', 'Vidéo portfolio', 'Une vidéo soignée, dans le style de votre agence, avec sous-titres FR et format prêt à diffuser.'],
        ['EUR 800', 'Livraison complète', 'Vidéo portfolio, déclinaisons social media, texte du post et package de livraison organisé.'],
      ],
      items: [
        ['Pensé pour le Luxembourg', 'Style local et sens du détail au service de vos projets.'],
        ['Formats prêts à diffuser', 'Optimisés pour les réseaux et la présentation pro.'],
        ['Présentation professionnelle', 'Qualité, rythme et clarté au service de votre signature.'],
      ],
    },
    en: {
      eyebrow: 'Architecture video · Luxembourg',
      head: ['3 formats.', '1 <em>objective</em>.'],
      sub: 'Present your architecture with more impact, more clarity and more appeal.',
      tiers: [
        ['EUR 350', 'Starter video', 'A short social-media video built from the project material you supply.'],
        ['EUR 530', 'Portfolio video', 'A polished video in your practice’s style, subtitled and ready to publish.'],
        ['EUR 800', 'Full delivery', 'Portfolio video, social-media cuts, post copy and an organised delivery package.'],
      ],
      items: [
        ['Built for Luxembourg', 'Local style and an eye for detail, applied to your projects.'],
        ['Publish-ready formats', 'Optimised for social and for professional presentation.'],
        ['Professional presentation', 'Quality, pacing and clarity working for your signature.'],
      ],
    },
  },
  {
    n: 10, layout: 'media', phone: true, media: PHOTOS.facade,
    fr: {
      eyebrow: 'Vidéo architecture · Luxembourg',
      head: ['Prêt à présenter vos', 'projets <em>autrement</em> ?'],
      sub: 'IDEPUB conçoit des vidéos d’architecture claires, rapides et prêtes à diffuser pour les professionnels du Luxembourg.',
      chip: ['Projet réalisé', 'Luxembourg'],
      items: [
        ['Rapide', 'Livraison express.'],
        ['Clair', 'Un message limpide.'],
        ['Prêt à diffuser', 'Formats optimisés.'],
      ],
      banner: 'Parlez-nous de votre projet — architectes, architectes d’intérieur, agences. Luxembourg.',
    },
    en: {
      eyebrow: 'Architecture video · Luxembourg',
      head: ['Ready to present your', 'projects <em>differently</em>?'],
      sub: 'IDEPUB makes clear, fast, publish-ready architecture video for professionals in Luxembourg.',
      chip: ['Built project', 'Luxembourg'],
      items: [
        ['Fast', 'Express delivery.'],
        ['Clear', 'A message that lands.'],
        ['Publish-ready', 'Optimised formats.'],
      ],
      banner: 'Tell us about your project — architects, interior architects, practices. Luxembourg.',
    },
  },
];
