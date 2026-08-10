// IDEPUB — Construction series, rebuilt on the real brand identity.
// Copy transcribed from the original French posts (POST n / 10 preserved).
//
// IMAGERY NOTE: these are demos. IDEPUB has no construction projects yet, so
// the Bonnevoie VEFA renders stand in per the client's instruction. Swap
// PHOTOS here for real site photography as soon as a first project exists.
//
// COPY NOTE (post 4): the original claimed "le cerveau retient 95 % d'un
// message en vidéo, contre 10 % en lecture". That is the widely circulated
// 95/10 retention figure, which has no primary source. Rewritten without the
// number — same argument, nothing invented. Brandkit rule: no unsourced metrics.

export const SERIES = { fr: 'Vidéo construction<br>Luxembourg', en: 'Construction video<br>Luxembourg' };

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
      eyebrow: 'Vidéo construction · Luxembourg',
      head: ['Le chantier se vend', 'avant même la <em>livraison</em>.'],
      sub: 'Des vidéos qui transforment avancement, savoir-faire et crédibilité en demandes qualifiées.',
      chip: ['Résidence en construction', 'Luxembourg'],
      items: [
        ['Attire l’attention', 'Vos réalisations captent dès les premières secondes.'],
        ['Clarifie le projet', 'Le client comprend mieux votre approche et votre valeur.'],
        ['Déclenche le contact', 'Une vidéo inspire confiance et donne envie d’échanger.'],
      ],
    },
    en: {
      eyebrow: 'Construction video · Luxembourg',
      head: ['The site sells', 'before <em>handover</em>.'],
      sub: 'Video that turns progress, craft and credibility into qualified enquiries.',
      chip: ['Residence under construction', 'Luxembourg'],
      items: [
        ['Captures attention', 'Your work lands in the first few seconds.'],
        ['Clarifies the project', 'The client understands your approach and your value.'],
        ['Triggers contact', 'Video builds confidence and invites the conversation.'],
      ],
    },
  },
  {
    n: 2, layout: 'flow',
    panels: [
      { img: PHOTOS.plan,   label: { fr: 'Gros œuvre',        en: 'Structural work' } },
      { img: PHOTOS.street, label: { fr: 'Structure avancée', en: 'Advanced structure' } },
      { img: PHOTOS.facade, label: { fr: 'Finition',          en: 'Finishing' } },
    ],
    fr: {
      eyebrow: 'Vidéo construction · Luxembourg',
      head: ['Montrez l’avancement.', 'Pas seulement le <em>résultat</em>.'],
      sub: 'Du gros œuvre aux finitions, la progression visuelle rassure, valorise et donne du relief à votre travail.',
      items: [
        ['Structure', 'Les étapes techniques deviennent lisibles pour un non-initié.'],
        ['Progression', 'La cadence du chantier se voit, et elle rassure.'],
        ['Finitions', 'Le niveau de détail final devient un argument commercial.'],
      ],
    },
    en: {
      eyebrow: 'Construction video · Luxembourg',
      head: ['Show the progress.', 'Not just the <em>result</em>.'],
      sub: 'From structural work to finishing, visible progression reassures, elevates and gives depth to your work.',
      items: [
        ['Structure', 'Technical stages become readable to a non-specialist.'],
        ['Progression', 'The pace of the site is visible, and it reassures.'],
        ['Finishing', 'The final level of detail becomes a commercial argument.'],
      ],
    },
  },
  {
    n: 3, layout: 'split',
    split: {
      left:  { img: PHOTOS.plan,   tag: { fr: 'Plan', en: 'Plan' },
               verdict: { fr: 'Abstrait pour le client', en: 'Abstract for the client' }, ok: false },
      right: { img: PHOTOS.facade, tag: { fr: 'Résultat', en: 'Result' },
               verdict: { fr: 'Concret et compréhensible', en: 'Concrete and understandable' }, ok: true },
    },
    fr: {
      eyebrow: 'Vidéo construction · Luxembourg',
      head: ['Aidez le client à se projeter', 'avant la remise des <em>clés</em>.'],
      sub: 'Plan, visualisation, chantier, résultat : une vidéo rend le futur concret et compréhensible.',
      items: [
        ['Projection', 'Le client se projette dans son futur bâtiment.'],
        ['Clarté', 'Une compréhension immédiate du projet, à chaque étape.'],
        ['Confiance', 'Un projet maîtrisé, une relation renforcée, une décision accélérée.'],
      ],
    },
    en: {
      eyebrow: 'Construction video · Luxembourg',
      head: ['Help the client picture it', 'before <em>handover</em>.'],
      sub: 'Plan, visualisation, site, result: video makes the future concrete and understandable.',
      items: [
        ['Projection', 'The client sees themselves in the finished building.'],
        ['Clarity', 'Immediate understanding of the project, at every stage.'],
        ['Confidence', 'A project under control, a stronger relationship, a faster decision.'],
      ],
    },
  },
  {
    n: 4, layout: 'split',
    split: {
      left:  { img: PHOTOS.street, tag: { fr: 'Photo', en: 'Photo' },
               verdict: { fr: 'Documente', en: 'Documents it' }, ok: false },
      right: { img: PHOTOS.still,  tag: { fr: 'Vidéo', en: 'Video' },
               verdict: { fr: 'Fait comprendre', en: 'Makes it understood' }, ok: true },
    },
    fr: {
      eyebrow: 'Vidéo construction · Luxembourg',
      head: ['Une photo documente.', 'Une vidéo fait <em>comprendre</em>.'],
      sub: 'Pour vendre un projet de construction, l’expérience visuelle compte autant que le résultat.',
      items: [
        ['Plus vivant', 'Montrez l’ambiance, les détails et l’avancement en mouvement.'],
        ['Plus mémorable', 'Une séquence en mouvement se retient mieux qu’une image fixe.'],
        ['Plus engageant', 'Générez plus d’intérêt, de partages et de demandes de devis.'],
      ],
    },
    en: {
      eyebrow: 'Construction video · Luxembourg',
      head: ['A photo documents.', 'A video makes it <em>understood</em>.'],
      sub: 'To sell a construction project, the visual experience counts as much as the result.',
      items: [
        ['More alive', 'Show the atmosphere, the detail and the progress in motion.'],
        ['More memorable', 'A moving sequence stays with people better than a still frame.'],
        ['More engaging', 'Generate more interest, more shares and more quote requests.'],
      ],
    },
  },
  {
    n: 5, layout: 'media', media: PHOTOS.ext1,
    fr: {
      eyebrow: 'Vidéo construction · Luxembourg',
      head: ['Votre savoir-faire mérite', 'une vraie mise en <em>scène</em>.'],
      sub: 'Matériaux, précision, équipes et qualité : une bonne vidéo révèle ce que la photo oublie souvent.',
      items: [
        ['Précision', 'Chaque détail compte, la vidéo le montre.'],
        ['Matières', 'Textures, finitions et matériaux mis en valeur.'],
        ['Coordination', 'Des équipes alignées, des projets maîtrisés.'],
        ['Qualité', 'La qualité se voit, la confiance se gagne.'],
      ],
      banner: 'Montrez la qualité. Pas seulement le chantier terminé.',
    },
    en: {
      eyebrow: 'Construction video · Luxembourg',
      head: ['Your craft deserves', 'a proper <em>staging</em>.'],
      sub: 'Materials, precision, teams and quality: good video reveals what photography often misses.',
      items: [
        ['Precision', 'Every detail counts — video shows it.'],
        ['Materials', 'Textures, finishes and materials brought forward.'],
        ['Coordination', 'Aligned teams, projects under control.'],
        ['Quality', 'Quality is seen, trust is earned.'],
      ],
      banner: 'Show the quality. Not only the finished site.',
    },
  },
  {
    n: 6, layout: 'steps',
    fr: {
      eyebrow: 'Vidéo construction · Luxembourg',
      head: ['Comment', 'ça <em>marche</em> ?'],
      sub: 'Un process simple, rapide et cadré.',
      steps: [
        ['01', 'Vous nous envoyez vos éléments', 'Photos, vidéos, plans, infos clés.'],
        ['02', 'Nous structurons l’angle', 'Message, script et déroulé.'],
        ['03', 'Nous produisons la vidéo', 'Montage, habillage et mise en valeur.'],
        ['04', 'Vous recevez les formats prêts à diffuser', '1:1, 4:5, 9:16, 16:9.'],
      ],
      kicker: ['Vos chantiers existent déjà.', 'Nous les mettons en mouvement.'],
    },
    en: {
      eyebrow: 'Construction video · Luxembourg',
      head: ['How does', 'it <em>work</em>?'],
      sub: 'A simple, fast, structured process.',
      steps: [
        ['01', 'You send us your material', 'Photos, video, plans, key facts.'],
        ['02', 'We structure the angle', 'Message, script and running order.'],
        ['03', 'We produce the video', 'Edit, design and presentation.'],
        ['04', 'You receive publish-ready formats', '1:1, 4:5, 9:16, 16:9.'],
      ],
      kicker: ['Your sites already exist.', 'We put them in motion.'],
    },
  },
  {
    n: 7, layout: 'steps',
    fr: {
      eyebrow: 'Vidéo construction · Luxembourg',
      head: ['Un chantier peut devenir', '<em>5 contenus</em>.'],
      sub: 'À partir d’un même projet, vous alimentez votre prospection, vos réseaux et votre site.',
      steps: [
        ['01', 'Reel', 'Une vidéo courte et percutante pour attirer l’attention.'],
        ['02', 'Story', 'Des séquences immersives pour montrer l’avant / après.'],
        ['03', 'Post', 'Un post carré pour mettre en valeur le résultat final.'],
        ['04', 'Couverture', 'Une image forte pour habiller vos profils et vos présentations.'],
        ['05', 'Visuel site', 'Un visuel optimisé pour vos bannières et pages de service.'],
      ],
      kicker: ['Un seul tournage.', 'Plusieurs usages commerciaux.'],
    },
    en: {
      eyebrow: 'Construction video · Luxembourg',
      head: ['One site becomes', '<em>5 assets</em>.'],
      sub: 'From a single project you feed your prospecting, your channels and your website.',
      steps: [
        ['01', 'Reel', 'A short, sharp video to capture attention.'],
        ['02', 'Story', 'Immersive sequences to show before and after.'],
        ['03', 'Post', 'A square post to showcase the finished result.'],
        ['04', 'Cover', 'A strong image for your profiles and presentations.'],
        ['05', 'Website visual', 'Optimised for your banners and service pages.'],
      ],
      kicker: ['One shoot.', 'Many commercial uses.'],
    },
  },
  {
    n: 8, layout: 'cards3',
    cards: [PHOTOS.facade, PHOTOS.street, PHOTOS.ext2],
    fr: {
      eyebrow: 'Vidéo construction · Luxembourg',
      head: ['3 usages.', 'Un même <em>système</em>.'],
      sub: 'La logique vidéo construction s’adapte à plusieurs objectifs commerciaux.',
      cards: [
        ['Prospection commerciale', 'Donnez envie d’échanger avant le rendez-vous.'],
        ['Suivi de chantier', 'Montrez sérieux, transparence et progression.'],
        ['Marque employeur', 'Attirez des profils en montrant vos réalisations et votre culture de chantier.'],
      ],
    },
    en: {
      eyebrow: 'Construction video · Luxembourg',
      head: ['3 uses.', 'One <em>system</em>.'],
      sub: 'The construction video logic adapts to several commercial objectives.',
      cards: [
        ['Commercial prospecting', 'Make them want the conversation before the meeting.'],
        ['Site progress', 'Show rigour, transparency and momentum.'],
        ['Employer brand', 'Attract people by showing your work and your site culture.'],
      ],
    },
  },
  {
    n: 9, layout: 'pricing', media: PHOTOS.street,
    fr: {
      eyebrow: 'Vidéo construction · Luxembourg',
      head: ['3 formats.', '1 <em>objectif</em>.'],
      sub: 'Présenter votre entreprise et vos chantiers avec plus d’impact, plus de clarté et plus d’envie.',
      tiers: [
        ['EUR 350', 'Vidéo d’initiation', 'Une courte vidéo social media à votre marque, à partir des éléments du chantier que vous fournissez.'],
        ['EUR 530', 'Vidéo portfolio', 'Une vidéo soignée de chantier ou d’entreprise, avec sous-titres FR et format prêt à diffuser.'],
        ['EUR 800', 'Livraison complète', 'Vidéo portfolio, déclinaisons social media, texte du post et package de livraison organisé.'],
      ],
      items: [
        ['Pensé pour le Luxembourg', 'Connaissance locale et sens du détail au service de vos projets.'],
        ['Formats prêts à diffuser', 'Optimisés pour les réseaux et la présentation pro.'],
        ['Présentation professionnelle', 'Qualité, rythme et clarté au service de votre image.'],
      ],
    },
    en: {
      eyebrow: 'Construction video · Luxembourg',
      head: ['3 formats.', '1 <em>objective</em>.'],
      sub: 'Present your company and your sites with more impact, more clarity and more appeal.',
      tiers: [
        ['EUR 350', 'Starter video', 'A short branded social-media video, built from the site material you supply.'],
        ['EUR 530', 'Portfolio video', 'A polished site or company video, subtitled and ready to publish.'],
        ['EUR 800', 'Full delivery', 'Portfolio video, social-media cuts, post copy and an organised delivery package.'],
      ],
      items: [
        ['Built for Luxembourg', 'Local knowledge and an eye for detail, applied to your projects.'],
        ['Publish-ready formats', 'Optimised for social and for professional presentation.'],
        ['Professional presentation', 'Quality, pacing and clarity working for your image.'],
      ],
    },
  },
  {
    n: 10, layout: 'media', phone: true, media: PHOTOS.ext2,
    fr: {
      eyebrow: 'Vidéo construction · Luxembourg',
      head: ['Prêt à montrer vos', 'chantiers <em>autrement</em> ?'],
      sub: 'IDEPUB conçoit des vidéos claires, rapides et prêtes à diffuser pour les entreprises de construction au Luxembourg.',
      chip: ['Chantier en cours', 'Luxembourg'],
      items: [
        ['Rapide', 'Livraison express.'],
        ['Clair', 'Visuels premium.'],
        ['Prêt à diffuser', 'Formats optimisés.'],
      ],
      banner: 'Parlez-nous de votre projet — entreprises de construction, gros œuvre, second œuvre. Luxembourg.',
    },
    en: {
      eyebrow: 'Construction video · Luxembourg',
      head: ['Ready to show your', 'sites <em>differently</em>?'],
      sub: 'IDEPUB makes clear, fast, publish-ready video for construction companies in Luxembourg.',
      chip: ['Site in progress', 'Luxembourg'],
      items: [
        ['Fast', 'Express delivery.'],
        ['Clear', 'Premium visuals.'],
        ['Publish-ready', 'Optimised formats.'],
      ],
      banner: 'Tell us about your project — construction firms, structural and finishing trades. Luxembourg.',
    },
  },
];
