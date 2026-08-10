// IDEPUB — "La vidéo immobilière, c'est quoi exactement ?"
// Copy transcribed from the original French posts (POST n / 10 preserved).
// Educational series — the widest-reach one. It teaches rather than sells.
//
// COPY NOTE (post 6): the original's website mockup showed "120+ biens vendus",
// "98 % taux de satisfaction", "10+ années d'expérience". Those are decorative
// mockup figures, not measured results, so they are not reproduced as claims.
// Brandkit rule: no unsourced metrics.

export const SERIES = { fr: 'Vidéo IA<br>Luxembourg', en: 'AI video<br>Luxembourg' };

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
      eyebrow: 'Vidéo IA · Immobilier · Luxembourg',
      head: ['La vidéo immobilière,', 'c’est quoi <em>exactement</em> ?'],
      sub: 'Quatre formats différents portent le même nom. Ils n’ont ni le même budget, ni le même rôle.',
      chip: ['Bien présenté en vidéo', 'Luxembourg'],
      items: [
        ['Un format, un moment', 'Chaque type de vidéo sert une étape précise de la vente.'],
        ['Un budget, un usage', 'Payer le bon format au bon moment change le résultat.'],
        ['Une série pour trancher', 'Dix publications pour savoir ce que vous achetez.'],
      ],
    },
    en: {
      eyebrow: 'AI video · Real estate · Luxembourg',
      head: ['Property video —', 'what <em>is</em> it, exactly?'],
      sub: 'Four different formats share one name. They don’t share a budget or a job.',
      chip: ['Property presented in video', 'Luxembourg'],
      items: [
        ['One format, one moment', 'Each type of video serves a specific stage of the sale.'],
        ['One budget, one use', 'Paying for the right format at the right time changes the result.'],
        ['A series to settle it', 'Ten posts so you know what you are buying.'],
      ],
    },
  },
  {
    n: 2, layout: 'compare3',
    cols: [
      { img: PHOTOS.still,  scores: [1, 1, 1] },
      { img: PHOTOS.facade, scores: [2, 2, 2] },
      { img: PHOTOS.ext1,   scores: [3, 3, 3], win: true },
    ],
    fr: {
      eyebrow: 'Vidéo IA · Visibilité · Immobilier',
      head: ['Une annonce statique', 'attire moins <em>qu’avant</em>.'],
      sub: 'Le marché consomme des formats plus rapides, plus visuels et plus immersifs.',
      metrics: ['Attention', 'Mémorisation', 'Intérêt'],
      cols: [
        ['Photo', 'Un seul angle. Impact limité.'],
        ['Annonce classique', 'Trop d’infos. Peu d’émotion.'],
        ['Vidéo IA', 'Plus d’attention, de mémorisation et d’intérêt.'],
      ],
    },
    en: {
      eyebrow: 'AI video · Visibility · Real estate',
      head: ['A static listing pulls', 'less than it <em>used to</em>.'],
      sub: 'The market now consumes faster, more visual, more immersive formats.',
      metrics: ['Attention', 'Recall', 'Interest'],
      cols: [
        ['Photo', 'One angle. Limited impact.'],
        ['Standard listing', 'Too much information. Little emotion.'],
        ['AI video', 'More attention, more recall, more interest.'],
      ],
    },
  },
  {
    n: 3, layout: 'media', media: PHOTOS.ext1,
    fr: {
      eyebrow: 'Vidéo IA · Performance · Luxembourg',
      head: ['La vidéo IA ne sert pas', 'à faire joli. Elle sert', 'à <em>vendre mieux</em>.'],
      sub: 'Un contenu pensé pour présenter le bien, retenir l’attention et nourrir la prise de contact.',
      items: [
        ['Plus d’attention', 'Des vidéos conçues pour captiver dès les premières secondes.'],
        ['Plus de crédibilité', 'Une présentation claire, professionnelle et fidèle au bien.'],
        ['Plus de demandes', 'Un contenu qui inspire confiance et déclenche l’action.'],
      ],
      banner: 'Faites de votre contenu un outil commercial.',
    },
    en: {
      eyebrow: 'AI video · Performance · Luxembourg',
      head: ['AI video isn’t there to', 'look nice. It’s there', 'to <em>sell better</em>.'],
      sub: 'Content built to present the property, hold attention and feed the first contact.',
      items: [
        ['More attention', 'Video designed to hold viewers from the opening seconds.'],
        ['More credibility', 'A clear, professional presentation that is true to the property.'],
        ['More enquiries', 'Content that builds trust and triggers action.'],
      ],
      banner: 'Make your content a commercial tool.',
    },
  },
  {
    n: 4, layout: 'flow',
    panels: [
      { img: PHOTOS.plan,   label: { fr: 'Vos éléments', en: 'Your material' } },
      { img: PHOTOS.facade, label: { fr: 'Notre système', en: 'Our system' } },
      { img: PHOTOS.still,  label: { fr: 'Vos contenus', en: 'Your content' } },
    ],
    fr: {
      eyebrow: 'Process · Contenu · Immobilier',
      head: ['À partir d’un bien, nous', 'créons du contenu prêt', 'à <em>diffuser</em>.'],
      sub: 'Pas besoin d’une usine à gaz. Nous transformons vos éléments en contenus exploitables rapidement.',
      items: [
        ['Vous fournissez', 'Photos, plan et infos du bien : adresse, surface, pièces, prestations, points forts.'],
        ['Nous produisons', 'Vidéo paysage, reel vertical, post carré et story 9:16.'],
        ['Vous diffusez', 'Chaque format arrive calibré pour son canal.'],
      ],
      banner: 'Vous avez un bien. Nous avons le système.',
    },
    en: {
      eyebrow: 'Process · Content · Real estate',
      head: ['From one property we', 'create content that is', 'ready to <em>publish</em>.'],
      sub: 'No heavy machinery required. We turn your material into content you can use quickly.',
      items: [
        ['You supply', 'Photos, floor plan and the facts: address, area, rooms, features, selling points.'],
        ['We produce', 'Landscape video, vertical reel, square post and 9:16 story.'],
        ['You publish', 'Each format arrives sized for its channel.'],
      ],
      banner: 'You have the property. We have the system.',
    },
  },
  {
    n: 5, layout: 'cards3',
    cards: [PHOTOS.ext1, PHOTOS.still, PHOTOS.facade],
    fr: {
      eyebrow: 'Image · Perception · Immobilier',
      head: ['Ce que la vidéo change :', 'la <em>perception</em>.'],
      sub: 'Un bien mieux présenté semble plus premium, plus moderne et plus mémorable.',
      cards: [
        ['Perception', 'La vidéo valorise les volumes, la lumière et les ambiances.'],
        ['Mémorisation', 'Un format visuel fort marque les esprits durablement.'],
        ['Désirabilité', 'Une présentation soignée crée de l’émotion et donne envie de visiter.'],
      ],
    },
    en: {
      eyebrow: 'Image · Perception · Real estate',
      head: ['What video changes:', '<em>perception</em>.'],
      sub: 'A better-presented property reads as more premium, more modern and more memorable.',
      cards: [
        ['Perception', 'Video brings out volumes, light and atmosphere.'],
        ['Recall', 'A strong visual format stays with people.'],
        ['Desirability', 'A careful presentation creates emotion and makes people want to visit.'],
      ],
    },
  },
  {
    n: 6, layout: 'media', phone: true, media: PHOTOS.street,
    fr: {
      eyebrow: 'Marque · Modernité · Crédibilité',
      head: ['Une meilleure présentation', 'améliore aussi votre <em>image</em>.'],
      sub: 'Quand vos formats montent en gamme, votre image de marque monte aussi.',
      chip: ['Maison d’exception', 'Luxembourg · à vendre'],
      items: [
        ['Professionnalisme', 'Des supports soignés qui inspirent sérieux et exigence.'],
        ['Modernité', 'Un design actuel qui valorise votre expertise.'],
        ['Confiance', 'Une image maîtrisée qui rassure vos prospects.'],
      ],
      banner: 'Montrez un niveau plus élevé.',
    },
    en: {
      eyebrow: 'Brand · Modernity · Credibility',
      head: ['A better presentation also', 'lifts your <em>image</em>.'],
      sub: 'When your formats move upmarket, so does your brand.',
      chip: ['Exceptional home', 'Luxembourg · for sale'],
      items: [
        ['Professionalism', 'Considered material that signals rigour and standards.'],
        ['Modernity', 'A current design that showcases your expertise.'],
        ['Trust', 'A controlled image that reassures your prospects.'],
      ],
      banner: 'Show a higher standard.',
    },
  },
  {
    n: 7, layout: 'media', media: PHOTOS.ext2,
    fr: {
      eyebrow: 'Biens d’exception · Présentation · Luxembourg',
      head: ['Pour les biens premium,', 'le format <em>compte</em>.'],
      sub: 'Un bien haut de gamme mérite une mise en scène à la hauteur de son standing.',
      items: [
        ['Prestige', 'Valorisez l’exceptionnel avec des visuels qui renforcent la valeur perçue.'],
        ['Expérience', 'Offrez une immersion fluide et élégante qui capte l’attention et suscite l’émotion.'],
        ['Perception', 'Un format soigné influence la décision et accélère la mise en valeur.'],
      ],
      banner: 'Le bon bien mérite la bonne présentation.',
    },
    en: {
      eyebrow: 'Exceptional properties · Presentation · Luxembourg',
      head: ['For premium property,', 'the format <em>matters</em>.'],
      sub: 'A high-end property deserves a staging that matches its standing.',
      items: [
        ['Prestige', 'Present the exceptional with visuals that reinforce perceived value.'],
        ['Experience', 'Offer a smooth, elegant immersion that holds attention and creates emotion.'],
        ['Perception', 'A considered format influences the decision and accelerates the sale.'],
      ],
      banner: 'The right property deserves the right presentation.',
    },
  },
  {
    n: 8, layout: 'split',
    split: {
      left:  { img: PHOTOS.plan,  tag: { fr: 'Avant', en: 'Before' },
               verdict: { fr: 'Annonce standard, peu d’émotion', en: 'Standard listing, little emotion' }, ok: false },
      right: { img: PHOTOS.still, tag: { fr: 'Après', en: 'After' },
               verdict: { fr: 'Mise en scène, projection facilitée', en: 'Staged, easier to picture' }, ok: true },
    },
    fr: {
      eyebrow: 'Valorisation · Transformation · Immobilier',
      head: ['Même un bien plus difficile', 'peut mieux <em>performer</em>.'],
      sub: 'La bonne mise en valeur rend un bien plus lisible, plus engageant et plus convaincant.',
      items: [
        ['Plus clair', 'Les volumes et l’agencement deviennent immédiatement lisibles.'],
        ['Plus vivant', 'La lumière maîtrisée réchauffe un intérieur froid sur photo.'],
        ['Plus attractif', 'Un bien sous-estimé retrouve sa place sur le marché.'],
      ],
      banner: 'Valorisez mieux ce qui est sous-estimé.',
    },
    en: {
      eyebrow: 'Presentation · Transformation · Real estate',
      head: ['Even a difficult property', 'can <em>perform</em> better.'],
      sub: 'The right presentation makes a property clearer, more engaging and more convincing.',
      items: [
        ['Clearer', 'Volumes and layout become immediately readable.'],
        ['More alive', 'Controlled light warms an interior that photographs cold.'],
        ['More attractive', 'An underrated property regains its place on the market.'],
      ],
      banner: 'Get more from what is being undervalued.',
    },
  },
  {
    n: 9, layout: 'steps',
    fr: {
      eyebrow: 'Attirer · Rassurer · Convertir',
      head: ['La vidéo IA =', 'un outil <em>commercial</em>.'],
      sub: 'Elle peut servir à attirer, relancer, rassurer et faire avancer le deal.',
      steps: [
        ['01', 'Attention — reel / short video', 'Captez l’attention dès les premières secondes.'],
        ['02', 'Intérêt — site web / landing page', 'Suscitez l’intérêt avec un contenu à forte valeur.'],
        ['03', 'Prise de contact — WhatsApp / Messenger', 'Facilitez le premier échange et créez le lien.'],
        ['04', 'Visite — email / follow-up', 'Rassurez avec une présentation claire et immersive.'],
        ['05', 'Conversion — proposition / offre', 'Appuyez la décision et faites avancer le deal.'],
      ],
      kicker: ['Utilisez le contenu', 'au service du deal.'],
    },
    en: {
      eyebrow: 'Attract · Reassure · Convert',
      head: ['AI video =', 'a <em>commercial</em> tool.'],
      sub: 'It can attract, re-engage, reassure and move the deal forward.',
      steps: [
        ['01', 'Attention — reel / short video', 'Capture attention in the opening seconds.'],
        ['02', 'Interest — website / landing page', 'Build interest with high-value content.'],
        ['03', 'Contact — WhatsApp / Messenger', 'Make the first exchange easy and build the link.'],
        ['04', 'Viewing — email / follow-up', 'Reassure with a clear, immersive presentation.'],
        ['05', 'Conversion — proposal / offer', 'Support the decision and move the deal forward.'],
      ],
      kicker: ['Put the content', 'to work on the deal.'],
    },
  },
  {
    n: 10, layout: 'grid5',
    fr: {
      eyebrow: 'Vidéo IA · Immobilier · IDEPUB',
      head: ['Vous voulez ce service', 'pour vos <em>biens</em> ?'],
      sub: 'Nous créons des contenus vidéo IA pour mettre vos biens et vos projets en valeur.',
      tiles: [
        ['Immobilier', 'Mettez en valeur vos biens à vendre ou à louer.'],
        ['VEFA', 'Valorisez vos programmes neufs.'],
        ['Rénovation', 'Montrez le potentiel de vos projets de rénovation.'],
        ['Construction', 'Présentez vos chantiers et réalisations.'],
        ['Architecture', 'Sublimez vos conceptions architecturales.'],
      ],
      items: [
        ['Contenu premium', 'Visuels réalistes et immersifs en 4K.'],
        ['Impact immédiat', 'Attirez l’attention et suscitez l’intérêt.'],
        ['Résultats concrets', 'Plus de visibilité, plus de contacts.'],
      ],
      banner: 'Parlez-nous de votre projet — contact en message privé ou sur idepub.lu',
    },
    en: {
      eyebrow: 'AI video · Real estate · IDEPUB',
      head: ['Want this for your', 'own <em>properties</em>?'],
      sub: 'We create AI video content that puts your properties and projects in their best light.',
      tiles: [
        ['Real estate', 'Present your properties for sale or to let.'],
        ['Off-plan', 'Showcase your new-build programmes.'],
        ['Renovation', 'Show the potential in your renovation projects.'],
        ['Construction', 'Present your sites and completed work.'],
        ['Architecture', 'Elevate your architectural designs.'],
      ],
      items: [
        ['Premium content', 'Realistic, immersive 4K visuals.'],
        ['Immediate impact', 'Capture attention and build interest.'],
        ['Concrete results', 'More visibility, more contacts.'],
      ],
      banner: 'Tell us about your project — message us directly or visit idepub.lu',
    },
  },
];
