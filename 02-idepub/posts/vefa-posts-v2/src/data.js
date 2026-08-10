// IDEPUB — VEFA series, rebuilt on the real brand identity.
// Copy transcribed from the original French posts (POST n / 10 badges preserved).
// Imagery: the Bonnevoie VEFA programme from idemmo.lu — real renders and the
// real floor plan of the same building. Client work shown as portfolio proof.
//
// Layouts: 'media' | 'split' | 'flow' | 'steps'

export const SERIES = { fr: 'Vidéo VEFA<br>Luxembourg', en: 'Off-plan video<br>Luxembourg' };

export const PHOTOS = {
  ext1:  'photos/bonnevoie-vefa/vefa-00.jpg',   // terrace + garden, close
  ext2:  'photos/bonnevoie-vefa/vefa-01.jpg',   // terrace, wider
  facade:'photos/bonnevoie-vefa/vefa-02.jpg',   // full facade, blue sky
  plan:  'photos/bonnevoie-vefa/vefa-03.jpg',   // floor plan
  street:'photos/bonnevoie-vefa/vefa-04.jpg',   // street view
  still: 'photos/bonnevoie-vefa/video-still.jpg', // frame from a delivered film
};

export const POSTS = [
  {
    n: 1, layout: 'media', media: PHOTOS.facade,
    fr: {
      eyebrow: 'Vidéo VEFA · Luxembourg',
      head: ['La VEFA se vend', 'avant la <em>livraison</em>.'],
      sub: 'Des vidéos qui transforment plans, visuels et intentions en désir d’achat.',
      items: [
        ['Projette le futur', 'Vos programmes prennent vie avant même la livraison.'],
        ['Rassure l’acheteur', 'Transparence, crédibilité et confiance à chaque étape.'],
        ['Déclenche le contact', 'Suscite l’intérêt et génère des demandes qualifiées.'],
      ],
    },
    en: {
      eyebrow: 'Off-plan video · Luxembourg',
      head: ['Off-plan sells', 'before <em>delivery</em>.'],
      sub: 'Video that turns plans, renders and intentions into the desire to buy.',
      items: [
        ['Projects the future', 'Your programme comes alive before it is built.'],
        ['Reassures the buyer', 'Transparency and credibility at every stage.'],
        ['Triggers contact', 'Creates interest and generates qualified enquiries.'],
      ],
    },
  },
  {
    n: 2, layout: 'flow',
    panels: [
      { img: PHOTOS.plan,   label: { fr: 'Plan', en: 'Plan' } },
      { img: PHOTOS.facade, label: { fr: 'Visualisation', en: 'Visualisation' } },
      { img: PHOTOS.still,  label: { fr: 'Vidéo', en: 'Video' } },
    ],
    fr: {
      eyebrow: 'Vidéo VEFA · Luxembourg',
      head: ['Faites vivre le programme', 'avant qu’il <em>existe</em>.'],
      sub: 'Du plan au rendu, puis du rendu à l’émotion.',
      items: [
        ['Lisible', 'Le programme devient clair et compréhensible en un coup d’œil.'],
        ['Séduisant', 'Des visuels immersifs qui suscitent l’intérêt et créent l’envie.'],
        ['Commercial', 'Un outil puissant pour convaincre, réserver et accélérer les ventes.'],
      ],
    },
    en: {
      eyebrow: 'Off-plan video · Luxembourg',
      head: ['Bring the programme to life', 'before it <em>exists</em>.'],
      sub: 'From plan to render, then from render to emotion.',
      items: [
        ['Legible', 'The programme becomes clear and understandable at a glance.'],
        ['Compelling', 'Immersive visuals that create interest and desire.'],
        ['Commercial', 'A tool to convince, reserve and accelerate sales.'],
      ],
    },
  },
  {
    n: 3, layout: 'split',
    split: {
      left:  { img: PHOTOS.plan,  tag: { fr: 'Un plan statique', en: 'A static plan' },
               verdict: { fr: 'Difficile à se projeter', en: 'Hard to picture' }, ok: false },
      right: { img: PHOTOS.ext1,  tag: { fr: 'Une vidéo immersive', en: 'An immersive video' },
               verdict: { fr: 'Clair, vivant, engageant', en: 'Clear, alive, engaging' }, ok: true },
    },
    fr: {
      eyebrow: 'Vidéo VEFA · Luxembourg',
      head: ['Montrez le projet.', 'Pas seulement le <em>plan</em>.'],
      sub: 'Une vidéo de projection rend les volumes, les usages et le cadre de vie immédiatement compréhensibles.',
      items: [
        ['Volumes', 'Visualisez les espaces, les hauteurs et les enchaînements.'],
        ['Ambiance', 'Sentez les matériaux, la lumière et l’atmosphère du lieu.'],
        ['Compréhension', 'Un projet perçu devient un projet compris et désirable.'],
      ],
    },
    en: {
      eyebrow: 'Off-plan video · Luxembourg',
      head: ['Show the project.', 'Not just the <em>plan</em>.'],
      sub: 'A projection video makes volumes, uses and the living environment immediately understandable.',
      items: [
        ['Volumes', 'See the spaces, the ceiling heights and how rooms connect.'],
        ['Atmosphere', 'Feel the materials, the light and the mood of the place.'],
        ['Understanding', 'A project that is perceived becomes a project that is understood.'],
      ],
    },
  },
  {
    n: 4, layout: 'media', phone: true, media: PHOTOS.ext2,
    fr: {
      eyebrow: 'Vidéo VEFA · Luxembourg',
      head: ['La pré-commercialisation', 'a besoin d’<em>émotion</em>.'],
      sub: 'Avant la visite du bureau de vente, la vidéo crée déjà l’envie.',
      chip: ['Vivre mieux demain.', 'Une résidence d’exception au cœur du Luxembourg'],
      items: [
        ['Capte l’attention', 'Une vidéo immersive qui donne envie d’en savoir plus.'],
        ['Valorise le programme', 'Mettez en avant les atouts du projet et son cadre de vie.'],
        ['Aide à déclencher les rendez-vous', 'Créez un déclic émotionnel qui transforme l’intérêt en action.'],
      ],
    },
    en: {
      eyebrow: 'Off-plan video · Luxembourg',
      head: ['Pre-sales need', '<em>emotion</em>.'],
      sub: 'Before anyone visits the sales office, the video has already created the desire.',
      chip: ['A better tomorrow.', 'An exceptional residence in the heart of Luxembourg'],
      items: [
        ['Captures attention', 'An immersive video that makes people want to know more.'],
        ['Elevates the programme', 'Puts the project’s strengths and setting front and centre.'],
        ['Drives appointments', 'Creates the emotional trigger that turns interest into action.'],
      ],
    },
  },
  {
    n: 5, layout: 'steps',
    fr: {
      eyebrow: 'Vidéo VEFA · Luxembourg',
      head: ['Un programme peut devenir', '<em>5 contenus</em>.'],
      sub: 'À partir d’un seul projet, vous alimentez toute votre communication.',
      steps: [
        ['01', 'Reel', 'Dynamique et immersif, pour capter l’attention et générer de l’engagement.'],
        ['02', 'Story', 'Format vertical, idéal pour entretenir le lien et valoriser les temps forts.'],
        ['03', 'Post carré', 'Parfait pour valoriser le projet sur les réseaux et votre feed.'],
        ['04', 'Landing visuelle', 'Une page dédiée pour présenter le projet et convertir les prospects.'],
        ['05', 'Couverture / bannière', 'Idéale pour habiller vos profils, campagnes et signatures digitales.'],
      ],
      kicker: ['Un seul programme.', 'Plusieurs usages commerciaux.'],
    },
    en: {
      eyebrow: 'Off-plan video · Luxembourg',
      head: ['One programme becomes', '<em>5 assets</em>.'],
      sub: 'From a single project you feed your entire communication.',
      steps: [
        ['01', 'Reel', 'Dynamic and immersive, to capture attention and drive engagement.'],
        ['02', 'Story', 'Vertical format, ideal for keeping the momentum between milestones.'],
        ['03', 'Square post', 'Perfect for showcasing the project in the feed.'],
        ['04', 'Landing page', 'A dedicated page to present the project and convert prospects.'],
        ['05', 'Cover / banner', 'Dresses your profiles, campaigns and digital signatures.'],
      ],
      kicker: ['One programme.', 'Many commercial uses.'],
    },
  },
  {
    n: 6, layout: 'steps',
    fr: {
      eyebrow: 'Vidéo VEFA · Luxembourg',
      head: ['Comment', 'ça <em>marche</em> ?'],
      sub: 'Un process simple pour transformer vos supports VEFA en vidéo prête à diffuser.',
      steps: [
        ['01', 'Vous nous envoyez vos éléments', 'plans, rendus, infos clés'],
        ['02', 'Nous structurons l’angle', 'message, déroulé, CTA'],
        ['03', 'Nous produisons la vidéo', 'montage, habillage, rythme'],
        ['04', 'Vous recevez les formats prêts à diffuser', '1:1, 4:5, 9:16, 16:9'],
      ],
      kicker: ['Vos supports existent déjà.', 'Nous les mettons en mouvement.'],
    },
    en: {
      eyebrow: 'Off-plan video · Luxembourg',
      head: ['How does', 'it <em>work</em>?'],
      sub: 'A simple process that turns your existing VEFA material into a video ready to publish.',
      steps: [
        ['01', 'You send us your material', 'plans, renders, key facts'],
        ['02', 'We structure the angle', 'message, running order, CTA'],
        ['03', 'We produce the video', 'edit, design, pacing'],
        ['04', 'You receive publish-ready formats', '1:1, 4:5, 9:16, 16:9'],
      ],
      kicker: ['Your material already exists.', 'We put it in motion.'],
    },
  },

  {
    n: 7, layout: 'media', phone: true, media: PHOTOS.street,
    fr: {
      eyebrow: 'Vidéo VEFA · Luxembourg',
      head: ['Pensé pour les pros', 'de la <em>VEFA</em>.'],
      sub: 'Un même système vidéo peut servir plusieurs métiers du neuf.',
      chip: ['Programme Bonnevoie', 'Luxembourg-Ville · VEFA'],
      items: [
        ['Promoteurs', 'Valorisez vos programmes et votre identité.'],
        ['Commercialisateurs', 'Accélérez la vente avec des supports percutants.'],
        ['Agences', 'Renforcez votre offre et faites la différence.'],
        ['Architectes', 'Mettez en lumière vos conceptions.'],
        ['Investisseurs / marchands', 'Pilotez et valorisez vos actifs avec des visuels clairs.'],
      ],
      banner: 'Montrez votre programme avec plus de clarté et plus d’impact.',
    },
    en: {
      eyebrow: 'Off-plan video · Luxembourg',
      head: ['Built for off-plan', '<em>professionals</em>.'],
      sub: 'One video system serves several trades in new-build.',
      chip: ['Bonnevoie programme', 'Luxembourg City · off-plan'],
      items: [
        ['Developers', 'Showcase your programmes and your identity.'],
        ['Sales agents', 'Accelerate sales with material that lands.'],
        ['Agencies', 'Strengthen your offer and stand apart.'],
        ['Architects', 'Bring your designs into the light.'],
        ['Investors / traders', 'Steer and present your assets with clear visuals.'],
      ],
      banner: 'Present your programme with more clarity and more impact.',
    },
  },
  {
    n: 8, layout: 'cards3',
    cards: [PHOTOS.ext1, PHOTOS.facade, PHOTOS.still],
    fr: {
      eyebrow: 'Vidéo VEFA · Luxembourg',
      head: ['3 usages.', 'Un même <em>système</em>.'],
      sub: 'La logique vidéo VEFA s’adapte à plusieurs moments commerciaux.',
      cards: [
        ['Pré-commercialisation', 'Créer l’intérêt avant le lancement.'],
        ['Programme neuf', 'Montrer clairement le projet et ses atouts.'],
        ['VEFA / rénovation', 'Aider l’acquéreur à se projeter entre concept et résultat.'],
      ],
    },
    en: {
      eyebrow: 'Off-plan video · Luxembourg',
      head: ['3 uses.', 'One <em>system</em>.'],
      sub: 'The off-plan video logic adapts to several commercial moments.',
      cards: [
        ['Pre-sales', 'Create interest before launch.'],
        ['New programme', 'Show the project and its strengths clearly.'],
        ['Off-plan / renovation', 'Help the buyer picture concept versus result.'],
      ],
    },
  },
  {
    n: 9, layout: 'pricing', media: PHOTOS.facade,
    fr: {
      eyebrow: 'Vidéo VEFA · Luxembourg',
      head: ['3 formats.', '1 <em>objectif</em>.'],
      sub: 'Présenter votre programme avec plus d’impact, plus de clarté et plus d’envie.',
      tiers: [
        ['EUR 350', 'Vidéo d’initiation', 'Une courte vidéo social media à partir des éléments du bien que vous fournissez.'],
        ['EUR 530', 'Vidéo portfolio', 'Une vidéo soignée, dans le style de vos réalisations, avec sous-titres FR et format prêt à diffuser.'],
        ['EUR 800', 'Livraison complète', 'Vidéo portfolio, déclinaisons social media, texte du post et package de livraison organisé.'],
      ],
      items: [
        ['Pensé pour le Luxembourg', 'Style local, storytelling impactant.'],
        ['Formats prêts à diffuser', 'Optimisés pour les réseaux et la présentation pro.'],
        ['Présentation professionnelle', 'Valorise votre programme et rassure vos acquéreurs.'],
      ],
    },
    en: {
      eyebrow: 'Off-plan video · Luxembourg',
      head: ['3 formats.', '1 <em>objective</em>.'],
      sub: 'Present your programme with more impact, more clarity and more desire.',
      tiers: [
        ['EUR 350', 'Starter video', 'A short social-media video built from the material you supply.'],
        ['EUR 530', 'Portfolio video', 'A polished video in the style of your work, subtitled and ready to publish.'],
        ['EUR 800', 'Full delivery', 'Portfolio video, social-media cuts, post copy and an organised delivery package.'],
      ],
      items: [
        ['Built for Luxembourg', 'Local style, storytelling that lands.'],
        ['Publish-ready formats', 'Optimised for social and for professional presentation.'],
        ['Professional presentation', 'Elevates your programme and reassures your buyers.'],
      ],
    },
  },
  {
    n: 10, layout: 'media', phone: true, media: PHOTOS.facade,
    fr: {
      eyebrow: 'Vidéo VEFA · Luxembourg',
      head: ['Prêt à lancer votre', 'prochain programme', '<em>autrement</em> ?'],
      sub: 'IDEPUB conçoit des vidéos VEFA claires, rapides et prêtes à diffuser pour les professionnels du neuf au Luxembourg.',
      chip: ['Nouveau programme', 'Luxembourg'],
      items: [
        ['Rapide', 'Des vidéos livrées en un temps record.'],
        ['Clair', 'Un message limpide et orienté acheteur.'],
        ['Prêt à diffuser', 'Formats optimisés pour tous vos canaux.'],
      ],
      banner: 'Parlez-nous de votre programme — promoteurs, commercialisateurs et agences, Luxembourg.',
    },
    en: {
      eyebrow: 'Off-plan video · Luxembourg',
      head: ['Ready to launch your', 'next programme', '<em>differently</em>?'],
      sub: 'IDEPUB makes off-plan videos that are clear, fast and ready to publish, for new-build professionals in Luxembourg.',
      chip: ['New programme', 'Luxembourg'],
      items: [
        ['Fast', 'Videos delivered in record time.'],
        ['Clear', 'A clean, buyer-focused message.'],
        ['Publish-ready', 'Formats optimised for every channel.'],
      ],
      banner: 'Tell us about your programme — developers, sales agents and agencies, Luxembourg.',
    },
  },
];
