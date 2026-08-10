// IDEPUB — "Vidéo immobilier / réactions clients" series.
// Copy transcribed from the original French posts.
//
// BADGE NOTE: file 01 is badged "POST 1 / 5" while every other file reads
// "/ 10". Treated as a typo in the original; sequence 1–10 is used.
//
// POST 1 — the client quotes are REAL, taken from the WhatsApp reactions the
// originals already published (names blurred there, omitted here). Nothing
// invented. If you would rather not run client words at all, drop post 1.
//
// FIGURES OMITTED: the originals' mockups carry invented listing details
// ("EUR 1.450.000", "1.495.000 €", "285 m²", "238 m²", "210 m²", "Sander
// House", "Villa contemporaine") and post 5's pricing cards use Dubai imagery.
// Property specifics are not reproduced — the argument does not need them and
// none of those properties exist.

export const SERIES = { fr: 'Vidéo immobilier<br>Luxembourg', en: 'Property video<br>Luxembourg' };

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
    n: 1, layout: 'quotes',
    fr: {
      eyebrow: 'Réactions clients · Luxembourg',
      head: ['Les réactions parlent', 'd’<em>elles-mêmes</em>.'],
      sub: 'Réactions reçues après l’envoi de la vidéo de présentation du bien. Messages authentiques, noms retirés.',
      quotes: [
        ['Elle est vraiment belle 😍', 'Après réception de la vidéo'],
        ['Super, bravo ❤️', 'Client vendeur'],
        ['On peut s’appeler demain ? Merci', 'Prise de contact, le jour même'],
        ['Heavy haus awer', 'Réaction spontanée'],
        ['Ok obrigado tá muito bonito.', 'Client propriétaire'],
      ],
      banner: 'La meilleure preuve d’une vidéo, c’est ce que le client écrit juste après.',
    },
    en: {
      eyebrow: 'Client reactions · Luxembourg',
      head: ['The reactions speak', 'for <em>themselves</em>.'],
      sub: 'Messages received after the property presentation video was sent. Genuine reactions, names removed.',
      quotes: [
        ['Elle est vraiment belle 😍', '“It’s really beautiful” — after receiving the video'],
        ['Super, bravo ❤️', '“Great, well done” — seller'],
        ['On peut s’appeler demain ? Merci', '“Can we speak tomorrow?” — same day'],
        ['Heavy haus awer', 'Luxembourgish — “quite a house”'],
        ['Ok obrigado tá muito bonito.', 'Portuguese — “thank you, it’s very beautiful”'],
      ],
      banner: 'The best proof of a video is what the client writes straight afterwards.',
    },
  },
  {
    n: 2, layout: 'media', phone: true, media: PHOTOS.facade,
    fr: {
      eyebrow: 'Vidéo immobilier · Luxembourg',
      head: ['Donnez vie à votre projet', 'avant la <em>visite</em>.'],
      sub: 'Trois formats simples pour présenter un bien, soutenir une pré-commercialisation ou lancer une campagne prête à diffuser.',
      chip: ['Vidéo immobilière IA', 'Luxembourg'],
      items: [
        ['Vidéo immobilière IA', 'Visuels réalistes et immersifs.'],
        ['Formats prêts à diffuser', 'Optimisés pour les réseaux et la présentation pro.'],
        ['Pensé pour le Luxembourg', 'Style local, storytelling impactant.'],
      ],
      banner: 'Trois formats, un même objectif : présenter le bien avant qu’on le visite.',
    },
    en: {
      eyebrow: 'Property video · Luxembourg',
      head: ['Bring your project to life', 'before the <em>viewing</em>.'],
      sub: 'Three simple formats to present a property, support a pre-launch or run a campaign that is ready to publish.',
      chip: ['AI property video', 'Luxembourg'],
      items: [
        ['AI property video', 'Realistic, immersive visuals.'],
        ['Publish-ready formats', 'Optimised for social and professional presentation.'],
        ['Built for Luxembourg', 'Local style, storytelling that lands.'],
      ],
      banner: 'Three formats, one objective: present the property before anyone visits it.',
    },
  },
  {
    n: 3, layout: 'media', phone: true, media: PHOTOS.ext1,
    fr: {
      eyebrow: 'Vidéo immobilier · Luxembourg',
      head: ['Une vidéo qui capte', 'l’attention en quelques', '<em>secondes</em>.'],
      sub: 'Un format court, clair et premium pour montrer l’essentiel d’un bien immédiatement.',
      chip: ['À vendre', 'Luxembourg'],
      items: [
        ['Attire le regard', 'Les premières secondes font le tri.'],
        ['Clarifie les volumes', 'On comprend le bien sans lire une ligne.'],
        ['Donne envie de visiter', 'Le format court laisse une envie, pas une liste.'],
      ],
    },
    en: {
      eyebrow: 'Property video · Luxembourg',
      head: ['A video that captures', 'attention in <em>seconds</em>.'],
      sub: 'A short, clear, premium format that shows the essentials of a property immediately.',
      chip: ['For sale', 'Luxembourg'],
      items: [
        ['Catches the eye', 'The first seconds do the filtering.'],
        ['Clarifies the volumes', 'The property is understood without reading a line.'],
        ['Creates the urge to visit', 'A short format leaves desire, not a list.'],
      ],
    },
  },
  {
    n: 4, layout: 'media', media: PHOTOS.still,
    fr: {
      eyebrow: 'Vidéo immobilier · Luxembourg',
      head: ['Plus qu’une vidéo.', 'Un déclencheur', 'de <em>visites</em>.'],
      sub: 'Un bon contenu ne remplace pas le commercial. Il facilite le premier pas.',
      items: [
        ['Relance les contacts tièdes', 'Un message avec une vidéo se rouvre plus volontiers.'],
        ['Aide à provoquer l’appel', 'Le prospect a une raison concrète d’écrire.'],
        ['Soutient la prise de rendez-vous', 'La visite est déjà à moitié faite.'],
      ],
      banner: 'La vidéo ne vend pas à votre place. Elle ouvre la conversation.',
    },
    en: {
      eyebrow: 'Property video · Luxembourg',
      head: ['More than a video.', 'A trigger for', '<em>viewings</em>.'],
      sub: 'Good content does not replace the agent. It makes the first step easier.',
      items: [
        ['Reopens warm contacts', 'A message with a video gets opened more readily.'],
        ['Helps prompt the call', 'The prospect has a concrete reason to write.'],
        ['Supports booking the viewing', 'The visit is already half done.'],
      ],
      banner: 'Video does not sell for you. It opens the conversation.',
    },
  },
  {
    n: 5, layout: 'pricing', media: PHOTOS.street,
    fr: {
      eyebrow: 'Offres · Vidéo immobilier',
      head: ['3 formats.', '1 <em>objectif</em>.'],
      sub: 'Présenter votre bien avec plus d’impact, plus de clarté et plus d’envie.',
      tiers: [
        ['EUR 350', 'Vidéo d’initiation', 'Vidéo courte social media à votre marque, à partir de vos éléments.'],
        ['EUR 530', 'Vidéo portfolio', 'Vidéo immobilière soignée, sous-titrée et prête à diffuser.'],
        ['EUR 800', 'Livraison complète', 'Vidéo portfolio, déclinaisons social media et texte du post.'],
      ],
      items: [
        ['Pensé pour le Luxembourg', 'Style local, storytelling impactant.'],
        ['Formats prêts à diffuser', 'Optimisés pour les réseaux et la présentation pro.'],
        ['Livraison rapide', 'Vous recevez un package organisé, prêt à publier.'],
      ],
    },
    en: {
      eyebrow: 'Offers · Property video',
      head: ['3 formats.', '1 <em>objective</em>.'],
      sub: 'Present your property with more impact, more clarity and more appeal.',
      tiers: [
        ['EUR 350', 'Starter video', 'Short branded social-media video, built from your material.'],
        ['EUR 530', 'Portfolio video', 'A polished property video, subtitled and ready to publish.'],
        ['EUR 800', 'Full delivery', 'Portfolio video, social-media cuts and post copy.'],
      ],
      items: [
        ['Built for Luxembourg', 'Local style, storytelling that lands.'],
        ['Publish-ready formats', 'Optimised for social and professional presentation.'],
        ['Fast delivery', 'You receive an organised package, ready to publish.'],
      ],
    },
  },
  {
    n: 6, layout: 'steps',
    fr: {
      eyebrow: 'Notre process · Étape par étape',
      head: ['Comment', 'ça <em>marche</em> ?'],
      sub: 'Un process simple, rapide et cadré.',
      steps: [
        ['01', 'Vous nous envoyez vos éléments', 'Photos, vidéos, plans, informations clés. On s’occupe du reste.'],
        ['02', 'Nous structurons l’angle et le script', 'On définit le message, l’angle et le déroulé pour un rendu impactant.'],
        ['03', 'Nous produisons la vidéo', 'Tournage, montage, habillage, musique : chaque détail est soigné.'],
        ['04', 'Vous recevez un format prêt à diffuser', 'Une vidéo optimisée pour vos réseaux et vos supports.'],
      ],
      kicker: ['Vous avez le bien.', 'Nous avons le système.'],
    },
    en: {
      eyebrow: 'Our process · Step by step',
      head: ['How does', 'it <em>work</em>?'],
      sub: 'A simple, fast, structured process.',
      steps: [
        ['01', 'You send us your material', 'Photos, video, plans, key information. We handle the rest.'],
        ['02', 'We structure the angle and script', 'We set the message, the angle and the running order.'],
        ['03', 'We produce the video', 'Shoot, edit, design, music — every detail considered.'],
        ['04', 'You receive a publish-ready format', 'A video optimised for your channels and materials.'],
      ],
      kicker: ['You have the property.', 'We have the system.'],
    },
  },
  {
    n: 7, layout: 'split',
    split: {
      left:  { img: PHOTOS.facade, tag: { fr: 'Annonce classique', en: 'Standard listing' },
               verdict: { fr: 'Statique, vite oubliée', en: 'Static, quickly forgotten' }, ok: false },
      right: { img: PHOTOS.still,  tag: { fr: 'Vidéo IA IDEPUB', en: 'IDEPUB AI video' },
               verdict: { fr: 'Dynamique, mémorable, partageable', en: 'Dynamic, memorable, shareable' }, ok: true },
    },
    fr: {
      eyebrow: 'Vidéo immobilier',
      head: ['Poster une annonce', 'ne suffit <em>plus</em>.'],
      sub: 'Entre un visuel statique et une vidéo pensée pour capter l’attention, l’expérience n’est pas la même.',
      items: [
        ['Dynamique', 'Le mouvement retient là où l’image fixe glisse.'],
        ['Mémorable', 'On se souvient du bien, pas seulement du prix.'],
        ['Partageable', 'Une vidéo circule dans les conversations privées.'],
      ],
    },
    en: {
      eyebrow: 'Property video',
      head: ['Posting a listing', 'is no longer <em>enough</em>.'],
      sub: 'Between a static image and a video built to hold attention, the experience is not the same.',
      items: [
        ['Dynamic', 'Movement holds where a still image slides past.'],
        ['Memorable', 'People remember the property, not just the price.'],
        ['Shareable', 'A video travels through private conversations.'],
      ],
    },
  },
  {
    n: 8, layout: 'steps',
    fr: {
      eyebrow: 'Multi-format · Immobilier',
      head: ['Un bien peut devenir', 'une <em>campagne</em>.'],
      sub: 'Reel, story, post, couverture, landing visuelle : un même bien peut vivre sur plusieurs formats.',
      steps: [
        ['01', 'Couverture / post', 'L’image d’ouverture qui pose le bien et son standing.'],
        ['02', 'Post carré', 'Le format du feed, pour les points forts.'],
        ['03', 'Story', 'Vertical, pour la visite sans se déplacer.'],
        ['04', 'Reel', 'Le format court qui va chercher l’audience.'],
        ['05', 'Landing visuelle', 'La page dédiée qui reçoit et convertit.'],
      ],
      kicker: ['Un seul bien.', 'Toute une campagne.'],
    },
    en: {
      eyebrow: 'Multi-format · Real estate',
      head: ['One property can become', 'a <em>campaign</em>.'],
      sub: 'Reel, story, post, cover, landing page: a single property can live across several formats.',
      steps: [
        ['01', 'Cover / post', 'The opening image that establishes the property and its standing.'],
        ['02', 'Square post', 'The feed format, for the selling points.'],
        ['03', 'Story', 'Vertical, for the visit without travelling.'],
        ['04', 'Reel', 'The short format that goes and finds the audience.'],
        ['05', 'Landing page', 'The dedicated page that receives and converts.'],
      ],
      kicker: ['One property.', 'A whole campaign.'],
    },
  },
  {
    n: 9, layout: 'cards3',
    cards: [PHOTOS.still, PHOTOS.street, PHOTOS.ext1],
    fr: {
      eyebrow: 'Vidéo immobilier',
      head: ['3 usages.', 'Un même <em>système</em>.'],
      sub: 'La même logique vidéo s’adapte à plusieurs contextes commerciaux.',
      cards: [
        ['Visite immersive', 'Présenter un bien de façon claire et séduisante.'],
        ['Pré-commercialisation', 'Créer de l’intérêt avant même la visite.'],
        ['VEFA / rénovation', 'Aider le prospect à se projeter.'],
      ],
    },
    en: {
      eyebrow: 'Property video',
      head: ['3 uses.', 'One <em>system</em>.'],
      sub: 'The same video logic adapts to several commercial contexts.',
      cards: [
        ['Immersive tour', 'Present a property clearly and attractively.'],
        ['Pre-launch', 'Create interest before the first viewing.'],
        ['Off-plan / renovation', 'Help the prospect picture it.'],
      ],
    },
  },
  {
    n: 10, layout: 'media', phone: true, media: PHOTOS.ext2,
    fr: {
      eyebrow: 'Vidéo immobilier · Luxembourg',
      head: ['Prêt à présenter votre', 'bien <em>autrement</em> ?'],
      sub: 'IDEPUB conçoit des vidéos immobilières IA claires, rapides et prêtes à diffuser.',
      chip: ['Votre bien', 'Luxembourg'],
      items: [
        ['Rapide', 'Livraison express.'],
        ['Clair', 'Visuels premium et sur-mesure.'],
        ['Prêt à diffuser', 'Formats optimisés pour tous vos canaux.'],
      ],
      banner: 'Parlez-nous de votre bien — agences, mandataires et porteurs de projets. Luxembourg.',
    },
    en: {
      eyebrow: 'Property video · Luxembourg',
      head: ['Ready to present your', 'property <em>differently</em>?'],
      sub: 'IDEPUB makes AI property videos that are clear, fast and ready to publish.',
      chip: ['Your property', 'Luxembourg'],
      items: [
        ['Fast', 'Express delivery.'],
        ['Clear', 'Premium, made-to-measure visuals.'],
        ['Publish-ready', 'Formats optimised for every channel.'],
      ],
      banner: 'Tell us about your property — agencies, agents and project owners. Luxembourg.',
    },
  },
];
