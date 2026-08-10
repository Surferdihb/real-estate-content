// IDEPUB — "Property media machine" — a SINGLE post, not a series.
//
// The source folder holds 9 design variants of the same post, all badged
// "POST 1 / 10" (one reads "1 / 9"). It is post 1 of the wider programme, which
// is why the folder name begins with "1-".
//
// VARIANT CHOSEN: "Avant. Pendant. Après." (source file 05.png). The lifecycle
// framing is the strongest of the nine — it gives the reader a reason to care
// about multi-format output rather than just listing the formats. The others
// are flat inventories of the same six or ten deliverables.
//
// FIGURES OMITTED: the variants' mockups carry invented engagement counts
// (128 likes, 1 254 / 64 / 129) and a fictional "Villa d'exception à
// Luxembourg". Not reproduced.

export const SERIES = { fr: 'Contenu immobilier<br>Luxembourg', en: 'Property content<br>Luxembourg' };

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
    n: 1, layout: 'cards3',
    cards: [PHOTOS.facade, PHOTOS.still, PHOTOS.ext1],
    fr: {
      eyebrow: 'Lancement immobilier · Contenu',
      head: ['Avant. Pendant.', '<em>Après</em>.'],
      sub: 'Le même bien peut servir avant le lancement, pendant la commercialisation et après la diffusion pour nourrir les relances.',
      cards: [
        ['01 · Avant', 'Teaser, story, attente. L’attente crée la désirabilité.'],
        ['02 · Pendant', 'Reel, site, annonce, publicité. Le bien est partout où l’acheteur regarde.'],
        ['03 · Après', 'Email, relance WhatsApp, blog, FAQ. Le contenu continue de travailler.'],
      ],
    },
    en: {
      eyebrow: 'Property launch · Content',
      head: ['Before. During.', '<em>After</em>.'],
      sub: 'The same property can work before the launch, during the campaign, and after it to feed the follow-ups.',
      cards: [
        ['01 · Before', 'Teaser, story, anticipation. Waiting is what creates desire.'],
        ['02 · During', 'Reel, website, listing, ads. The property is wherever the buyer looks.'],
        ['03 · After', 'Email, WhatsApp follow-up, blog, FAQ. The content keeps working.'],
      ],
    },
  },
];
