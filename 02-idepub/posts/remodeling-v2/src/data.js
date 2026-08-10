// IDEPUB — Renovation series, rebuilt on the real brand identity.
// Copy transcribed from the original French posts.
//
// MISSING POST: the source folder has 9 files covering badges 1,2,3,4,6,7,8,9,10.
// POST 5 does not exist in the set. Numbering below follows the badges, so the
// gap is preserved rather than silently closed — if post 5 turns up, add it here.
//
// FILENAME MAP: 01→1 02→2 03→3 04→4 05→6 06→7 07→8 08→9 09→10
//
// IMAGERY: the Bonnevoie VEFA renders stand in. This series is before/after by
// nature and would gain most from real renovation photography — a genuine
// "avant" shot is the one asset that cannot be faked.

export const SERIES = { fr: 'Vidéo rénovation<br>Luxembourg', en: 'Renovation video<br>Luxembourg' };

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
    n: 1, layout: 'media', phone: true, media: PHOTOS.still,
    fr: {
      eyebrow: 'Vidéo rénovation · Luxembourg',
      head: ['La rénovation se vend', 'avant le premier', '<em>rendez-vous</em>.'],
      sub: 'Des vidéos qui montrent votre savoir-faire, rassurent le client et donnent envie d’aller plus loin.',
      chip: ['Rénovation haut de gamme', 'Luxembourg'],
      items: [
        ['Attire l’attention', 'Vos réalisations captent dès les premières secondes.'],
        ['Clarifie le projet', 'Le client comprend mieux votre approche et vos solutions.'],
        ['Déclenche le contact', 'Une vidéo inspire confiance et donne envie d’échanger.'],
      ],
    },
    en: {
      eyebrow: 'Renovation video · Luxembourg',
      head: ['Renovation sells before', 'the first <em>meeting</em>.'],
      sub: 'Video that shows your craft, reassures the client and makes them want to go further.',
      chip: ['High-end renovation', 'Luxembourg'],
      items: [
        ['Captures attention', 'Your work lands in the first few seconds.'],
        ['Clarifies the project', 'The client understands your approach and your solutions.'],
        ['Triggers contact', 'Video builds confidence and invites the conversation.'],
      ],
    },
  },
  {
    n: 2, layout: 'split',
    split: {
      left:  { img: PHOTOS.plan,  tag: { fr: 'Avant', en: 'Before' },
               verdict: { fr: 'L’état de départ', en: 'The starting state' }, ok: false },
      right: { img: PHOTOS.still, tag: { fr: 'Après', en: 'After' },
               verdict: { fr: 'Le travail livré', en: 'The delivered work' }, ok: true },
    },
    fr: {
      eyebrow: 'Avant / après · Rénovation',
      head: ['Montrez la transformation.', 'Pas seulement le <em>résultat</em>.'],
      sub: 'L’avant / après est l’un des angles les plus puissants pour convaincre un futur client.',
      items: [
        ['Avant', 'Montrez l’existant, sans filtre. C’est ce qui rend la suite crédible.'],
        ['Après', 'Révélez la valeur de votre travail, dans les détails.'],
        ['Valeur perçue', 'Le contraste crée l’impact et la confiance.'],
      ],
      banner: 'Une bonne vidéo rend la progression évidente.',
    },
    en: {
      eyebrow: 'Before / after · Renovation',
      head: ['Show the transformation.', 'Not just the <em>result</em>.'],
      sub: 'Before and after is one of the most persuasive angles you have for a future client.',
      items: [
        ['Before', 'Show what is there, unfiltered. That is what makes the rest credible.'],
        ['After', 'Reveal the value of your work, down to the detail.'],
        ['Perceived value', 'The contrast creates the impact and the trust.'],
      ],
      banner: 'Good video makes the progression obvious.',
    },
  },
  {
    n: 3, layout: 'media', phone: true, media: PHOTOS.ext1,
    fr: {
      eyebrow: 'Visualisation · Rénovation',
      head: ['Aidez le client à se projeter', 'avant les <em>travaux</em>.'],
      sub: 'Quand le projet devient clair visuellement, la décision avance plus vite.',
      chip: ['Projet finalisé', 'Existant → Concept → Réalisé'],
      items: [
        ['Projection', 'Le client voit l’espace fini avant le premier coup de marteau.'],
        ['Clarté', 'Le concept devient lisible, même sans lire un plan.'],
        ['Confiance', 'Un projet compris est un projet validé plus vite.'],
      ],
      banner: 'Parfait pour rénovation, aménagement intérieur et transformation complète.',
    },
    en: {
      eyebrow: 'Visualisation · Renovation',
      head: ['Help the client picture it', 'before the <em>works</em>.'],
      sub: 'When the project becomes visually clear, the decision moves faster.',
      chip: ['Finished project', 'Existing → Concept → Built'],
      items: [
        ['Projection', 'The client sees the finished space before the first hammer.'],
        ['Clarity', 'The concept becomes legible, without reading a plan.'],
        ['Confidence', 'A project that is understood is approved faster.'],
      ],
      banner: 'Ideal for renovation, interior fit-out and complete transformation.',
    },
  },
  {
    n: 4, layout: 'split',
    split: {
      left:  { img: PHOTOS.facade, tag: { fr: 'Photo', en: 'Photo' },
               verdict: { fr: 'Statique, informative', en: 'Static, informative' }, ok: false },
      right: { img: PHOTOS.still,  tag: { fr: 'Vidéo', en: 'Video' },
               verdict: { fr: 'Dynamique, immersive', en: 'Dynamic, immersive' }, ok: true },
    },
    fr: {
      eyebrow: 'Vidéo immobilier · Luxembourg',
      head: ['Une photo montre.', 'Une vidéo fait <em>comprendre</em>.'],
      sub: 'Pour vendre une rénovation, l’expérience visuelle compte autant que le résultat.',
      items: [
        ['Plus vivant', 'Montre l’ambiance, les volumes et la lumière.'],
        ['Plus mémorable', 'L’histoire de votre chantier reste en tête.'],
        ['Plus engageant', 'Crée de l’émotion et déclenche l’action.'],
      ],
      banner: 'Votre chantier mérite mieux qu’une simple image.',
    },
    en: {
      eyebrow: 'Property video · Luxembourg',
      head: ['A photo shows.', 'A video makes it <em>understood</em>.'],
      sub: 'To sell a renovation, the visual experience counts as much as the result.',
      items: [
        ['More alive', 'Shows the atmosphere, the volumes and the light.'],
        ['More memorable', 'The story of your project stays with people.'],
        ['More engaging', 'Creates emotion and triggers action.'],
      ],
      banner: 'Your work deserves better than a single image.',
    },
  },
  {
    n: 6, layout: 'steps',
    fr: {
      eyebrow: 'Process · Vidéo rénovation',
      head: ['Comment', 'ça <em>marche</em> ?'],
      sub: 'Un process simple, rapide et cadré.',
      steps: [
        ['01', 'Vous nous envoyez vos éléments', 'Photos, vidéos, plans, infos clés.'],
        ['02', 'Nous structurons l’angle', 'Message, script et déroulé.'],
        ['03', 'Nous produisons la vidéo', 'Montage, habillage et mise en valeur.'],
        ['04', 'Vous recevez les formats prêts à diffuser', 'Réseaux sociaux, présentation, support commercial.'],
      ],
      kicker: ['Vos chantiers existent déjà.', 'Nous les mettons en mouvement.'],
    },
    en: {
      eyebrow: 'Process · Renovation video',
      head: ['How does', 'it <em>work</em>?'],
      sub: 'A simple, fast, structured process.',
      steps: [
        ['01', 'You send us your material', 'Photos, video, plans, key facts.'],
        ['02', 'We structure the angle', 'Message, script and running order.'],
        ['03', 'We produce the video', 'Edit, design and presentation.'],
        ['04', 'You receive publish-ready formats', 'Social, presentation, sales material.'],
      ],
      kicker: ['Your projects already exist.', 'We put them in motion.'],
    },
  },
  {
    n: 7, layout: 'steps',
    fr: {
      eyebrow: 'Contenu · Multi-format',
      head: ['Un chantier peut devenir', '<em>5 contenus</em>.'],
      sub: 'À partir d’un même projet, vous pouvez alimenter votre communication sur plusieurs formats.',
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
      eyebrow: 'Content · Multi-format',
      head: ['One project becomes', '<em>5 assets</em>.'],
      sub: 'From a single project you can feed your communication across several formats.',
      steps: [
        ['01', 'Reel', 'A short, sharp video to attract attention.'],
        ['02', 'Story', 'Immersive sequences to show the before and after.'],
        ['03', 'Post', 'A square post to showcase the final result.'],
        ['04', 'Cover', 'A strong image for your profiles and presentations.'],
        ['05', 'Website visual', 'Optimised for your banners and service pages.'],
      ],
      kicker: ['One shoot.', 'Many commercial uses.'],
    },
  },
  {
    n: 8, layout: 'media', media: PHOTOS.ext2,
    fr: {
      eyebrow: 'Vidéo immobilier · Luxembourg',
      head: ['Pensé pour les pros', 'de la <em>rénovation</em>.'],
      sub: 'Un même système vidéo peut servir plusieurs métiers du bâtiment et de l’aménagement.',
      items: [
        ['Entreprises générales', 'Valorisez vos chantiers, du gros œuvre aux finitions.'],
        ['Cuisinistes', 'Montrez vos réalisations dans les moindres détails.'],
        ['Salles de bain', 'Mettez en lumière design, confort et qualité.'],
        ['Architectes d’intérieur', 'Présentez vos concepts et vos espaces de vie.'],
        ['Façadiers / peintres', 'Sublimez vos façades et vos finitions.'],
      ],
      banner: 'Montrez votre travail avec plus de clarté et plus d’impact.',
    },
    en: {
      eyebrow: 'Property video · Luxembourg',
      head: ['Built for renovation', '<em>professionals</em>.'],
      sub: 'One video system can serve several building and fit-out trades.',
      items: [
        ['General contractors', 'Present your sites, from structure to finishing.'],
        ['Kitchen fitters', 'Show your work down to the smallest detail.'],
        ['Bathrooms', 'Bring out design, comfort and quality.'],
        ['Interior architects', 'Present your concepts and your living spaces.'],
        ['Facade / painting', 'Elevate your facades and your finishes.'],
      ],
      banner: 'Show your work with more clarity and more impact.',
    },
  },
  {
    n: 9, layout: 'pricing', media: PHOTOS.street,
    fr: {
      eyebrow: 'Offres · Vidéo rénovation',
      head: ['3 formats.', '1 <em>objectif</em>.'],
      sub: 'Présenter votre savoir-faire avec plus d’impact, plus de clarté et plus d’envie.',
      tiers: [
        ['EUR 350', 'Vidéo d’initiation', 'Une courte vidéo social media à votre marque, à partir de vos éléments.'],
        ['EUR 530', 'Vidéo portfolio', 'Une vidéo immobilière soignée, avec sous-titres français et format prêt à diffuser.'],
        ['EUR 800', 'Livraison complète', 'Vidéo portfolio, déclinaisons social media, texte du post et package de livraison.'],
      ],
      items: [
        ['Pensé pour le Luxembourg', 'Style local, storytelling impactant.'],
        ['Formats prêts à diffuser', 'Optimisés pour les réseaux et la présentation pro.'],
        ['Tournage & montage professionnels', 'Qualité, rythme et lumière au service de vos projets.'],
      ],
    },
    en: {
      eyebrow: 'Offers · Renovation video',
      head: ['3 formats.', '1 <em>objective</em>.'],
      sub: 'Present your craft with more impact, more clarity and more appeal.',
      tiers: [
        ['EUR 350', 'Starter video', 'A short branded social-media video, built from your material.'],
        ['EUR 530', 'Portfolio video', 'A polished property video, subtitled in French and ready to publish.'],
        ['EUR 800', 'Full delivery', 'Portfolio video, social-media cuts, post copy and delivery package.'],
      ],
      items: [
        ['Built for Luxembourg', 'Local style, storytelling that lands.'],
        ['Publish-ready formats', 'Optimised for social and for professional presentation.'],
        ['Professional shoot & edit', 'Quality, pacing and light working for your projects.'],
      ],
    },
  },
  {
    n: 10, layout: 'media', phone: true, media: PHOTOS.still,
    fr: {
      eyebrow: 'Vidéo rénovation · Luxembourg',
      head: ['Prêt à montrer vos', 'chantiers <em>autrement</em> ?'],
      sub: 'IDEPUB conçoit des vidéos claires, rapides et prêtes à diffuser pour les professionnels de la rénovation au Luxembourg.',
      chip: ['Rénovation livrée', 'Luxembourg'],
      items: [
        ['Rapide', 'Livraison express.'],
        ['Clair', 'Visuels premium.'],
        ['Prêt à diffuser', 'Formats optimisés.'],
      ],
      banner: 'Parlez-nous de votre projet — entreprises de rénovation, cuisinistes et architectes d’intérieur. Luxembourg.',
    },
    en: {
      eyebrow: 'Renovation video · Luxembourg',
      head: ['Ready to show your', 'work <em>differently</em>?'],
      sub: 'IDEPUB makes clear, fast, publish-ready video for renovation professionals in Luxembourg.',
      chip: ['Renovation delivered', 'Luxembourg'],
      items: [
        ['Fast', 'Express delivery.'],
        ['Clear', 'Premium visuals.'],
        ['Publish-ready', 'Optimised formats.'],
      ],
      banner: 'Tell us about your project — renovation firms, kitchen fitters and interior architects. Luxembourg.',
    },
  },
];
