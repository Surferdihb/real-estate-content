# Ayrton Silva — copy semaines 1 à 8 (FR)

Une légende par carte. Les identifiants correspondent exactement à
`posts/src/data.js` : `w1-mon` → `posts/out/fr/w1-mon.png`.

Voix : analyste qui vend. Chiffre ou mécanisme en premier, jamais un adjectif.
Pas de superlatif, pas de « 🚀 », pas de statistique sans source. La mauvaise
nouvelle d'abord — c'est toute la raison pour laquelle on croit la bonne.

Chaque chiffre cité ici est identique à celui de la carte. Si tu corriges un
chiffre dans `data.js`, corrige-le aussi dans la légende. Chiffres vérifiés au
05/08/2026 — réactualise avant de publier après novembre.

**Format** : le corps est calibré LinkedIn. La « coupe courte » est la version
Instagram / Facebook. Le CTA n'apparaît que sur les posts public ; les posts
trade se terminent sur l'observation, pas sur une demande.

| Jour | Piste | Format |
|---|---|---|
| Lundi | public | Le chiffre |
| Mardi | trade | Le système |
| Mercredi | public | **Comment je vérifie** (flagship) |
| Jeudi | public | Lecture de marché |
| Vendredi | trade | Note de build |

---
---

# SEMAINE 1 · Établir

## `w1-mon` · Lundi · Le chiffre — public

**Accroche**
À Esch-sur-Alzette, l'écart entre ce que les vendeurs demandent et ce qui se
paie réellement est de 950 € du mètre carré.

**Corps**
Prix affiché moyen : 7 149 €/m². Prix notarié moyen : environ 6 200 €/m².

Ces deux chiffres ne viennent pas de la même source et ne mesurent pas la même
chose. Le premier est ce qu'on demande, relevé sur les portails. Le second est
ce qui a été signé chez le notaire, agrégé par l'Observatoire de l'Habitat et
publié avec un trimestre de retard.

L'écart entre les deux n'est pas du bruit statistique. C'est la marge de
négociation structurelle du marché eschois — celle qui existe indépendamment de
votre talent de négociateur.

Sur un appartement de 80 m² affiché à 600 000 €, cet écart représente environ
76 000 €. Ce n'est pas une promesse : c'est l'ordre de grandeur de ce que le
marché a déjà l'habitude de concéder.

Le Luxembourg ne publie aucun registre des prix de transaction. Ces deux
sources sont tout ce dont on dispose. Les confronter est le minimum.

**CTA**
Vous négociez en ce moment ? Dites-moi la commune, je vous donne l'écart.

**Coupe courte**
Prix demandé à Esch : 7 149 €/m².
Prix réellement payé : ~6 200 €/m².
950 € d'écart au m². Sur 80 m², ça fait 76 000 €.
Ce n'est pas votre talent de négociateur. C'est le marché.
Sources : Observatoire de l'Habitat (avril 2026), immotop.lu (juillet 2026).

---

## `w1-tue` · Mardi · Le système — trade

**Accroche**
J'ai arrêté d'estimer de mémoire. Quinze modules d'analyse plus tard, je sais
pourquoi.

**Corps**
Ce qu'on voit sur l'image est réel : 7 015 emprises de bâtiments de Dudelange,
extrudées depuis OpenStreetMap, posées sur l'orthophoto officielle de l'ACT.
Pas une maquette.

Mais l'outil n'est pas le sujet. Le sujet est ce qui m'a poussé à le
construire : dans ce métier, l'estimation se fait de mémoire et se défend à
l'assertion. « Croyez-moi, c'est le bon prix. » Le client n'a presque aucun
moyen de vérifier — le pays ne publie ni registre de transactions, ni délai de
vente, ni taux d'absorption.

Alors j'ai câblé les sources qui existent vraiment : Observatoire de l'Habitat,
STATEC, BCL, AED. Quinze modules d'analyse par-dessus.

La contrainte de conception la plus utile est arrivée en dernier : le système
refuse d'inventer un chiffre. Quand la donnée n'existe pas, il écrit « non
disponible » au lieu de produire une estimation qui aurait l'air d'un fait.

C'est la partie qui a demandé le plus de travail, et c'est la seule qui compte.

*Le panneau prospects a été retiré de la capture : il contient des noms et des
adresses de particuliers.*

**Coupe courte**
7 015 bâtiments de Dudelange, extrudés depuis la donnée publique.
15 modules d'analyse. 4 sources officielles.
Et une règle : ne jamais inventer un chiffre.
C'est celle qui a demandé le plus de travail.

---

## `w1-wed` · Mercredi · Comment je vérifie — public · FLAGSHIP

**Accroche**
Comment je calcule ce que vaut vraiment un appartement, dans un marché qui ne
publie presque rien.

**Corps**
Quatre étapes. Aucune n'est spectaculaire, et c'est le but : chacune est
vérifiable par vous.

**1. Les annonces actives, pas les souvenirs.** Je relève les biens comparables
réellement en ligne aujourd'hui, avec leur surface et leur classe énergétique.
Le marché d'il y a six mois n'existe plus.

**2. Le recoupement notarié.** Je confronte au prix notarié de l'Observatoire
pour la commune. C'est ce qui se paie, pas ce qui se demande.

**3. La zone, jamais la commune.** À Esch, le rendement double d'un quartier à
l'autre. Une moyenne communale est fausse pour un bien donné.

**4. Le capital investi, pas le prix.** Droits à 7 %, notaire à 1 %. Un bien à
545 000 € engage 588 600 €. Tout rendement calculé sur le prix affiché est
surévalué.

Si une de ces quatre étapes manque, ce n'est pas une évaluation. C'est une
opinion.

Je publierai régulièrement ce genre de méthode ici. Jamais sur une annonce
nommée — je ne note pas le stock de mes confrères. Ce qui m'intéresse, c'est
que vous puissiez refaire le calcul vous-même.

**CTA**
Vous voulez que je fasse tourner ces quatre étapes sur un bien précis ?
Écrivez-moi la commune et la surface.

**Coupe courte**
Comment j'évalue un appartement :
1. Les annonces actives d'aujourd'hui, pas les souvenirs
2. Le recoupement avec le prix notarié
3. La zone, jamais la moyenne communale
4. Le capital investi (545 000 € → 588 600 €), pas le prix affiché
Sans les quatre, ce n'est pas une évaluation. C'est une opinion.

---

## `w1-thu` · Jeudi · Lecture de marché — public

**Accroche**
À Esch, les prix baissent et les loyers sont au plus haut. En même temps, dans
la même commune.

**Corps**
Prix affichés : −1,31 % sur un an, −5,4 % depuis le pic de janvier 2026, −6,3 %
sur trois ans. Mais +47,1 % depuis 2019.

Loyers affichés : +3,22 % sur un an, +30,8 % sur cinq ans.

Ces deux mouvements ne se contredisent pas. Ils décrivent deux populations
différentes.

Celui qui a acheté en 2019 est très largement gagnant, quoi qu'il arrive
maintenant. Celui qui a acheté au pic de 2022 attend, et attendra encore un
moment. Les deux affirmations sont vraies simultanément — c'est pour ça que
« le marché monte » ou « le marché baisse » ne veut rien dire sans une date
d'entrée.

Pour un acheteur aujourd'hui : le stock est élevé, les prix reculent, la marge
de négociation est réelle.

Pour un bailleur : les loyers sont au plus haut, mais le plafond légal ne suit
pas le marché. J'y reviens en semaine 3.

**CTA**
Vous êtes entré sur le marché entre 2021 et 2023 ? Je peux vous dire où vous en
êtes réellement. Écrivez-moi.

**Coupe courte**
Esch-sur-Alzette, juillet 2026.
Prix : −5,4 % depuis janvier. Mais +47,1 % depuis 2019.
Loyers : +3,22 % sur un an, +30,8 % sur cinq ans.
Acheté en 2019 : vous allez bien. Acheté en 2022 : vous attendez.
Les deux sont vrais en même temps.
Source : immotop.lu, série Esch-sur-Alzette (juillet 2026).

---

## `w1-fri` · Vendredi · Note de build — trade

**Accroche**
La partie la plus utile de mon système d'analyse n'est pas ce qu'il calcule.
C'est ce qu'il refuse de calculer.

**Corps**
Quatre métriques que tout analyste immobilier anglo-saxon utilise
quotidiennement n'existent pas au Luxembourg :

— le ratio prix de vente / prix affiché : impossible, il n'y a pas de registre
— le pourcentage de biens vendus au-dessus du prix : impossible, même raison
— le délai de vente moyen : non publié
— les mois de stock par commune : non publié

Un modèle peut les estimer. C'est même facile, et le résultat a l'air très
professionnel avec deux décimales.

J'ai codé l'inverse : quand la donnée n'existe pas, la sortie affiche « non
disponible » et explique pourquoi. Une analyse rend un chiffre de moins, et zéro
invention.

Le coût est réel — un tableau de bord avec des trous est moins vendeur. Mais un
chiffre inventé qui se fait démonter par un client qui vérifie coûte beaucoup
plus cher qu'une case vide.

**Coupe courte**
Ce que mon système refuse de calculer :
· ratio vente/affiché — pas de registre
· % vendu au-dessus du prix — même raison
· délai de vente moyen — non publié
· mois de stock — non publié
Un chiffre en moins. Zéro invention.

---
---

# SEMAINE 2 · Valeur et géographie

## `w2-mon` · Lundi · Le chiffre — public

**Accroche**
Un bien affiché à 545 000 € vous coûte 588 600 €.

**Corps**
43 600 € de frais d'acquisition. Le détail :

— droits d'enregistrement, 6 % : 32 700 €
— droit de transcription, 1 % : 5 450 €
— notaire, environ 1 % : 5 450 €

Ce n'est pas une ligne annexe qu'on ajoute à la fin du dossier. C'est la base de
tout calcul de rendement sérieux.

L'erreur que je vois le plus souvent — y compris dans des dossiers montés par
des professionnels — c'est de calculer un rendement locatif sur le prix affiché.
Sur ce bien, ça surévalue le rendement d'environ 8 %. Toute la décision
d'investissement se déplace.

Le capital réellement investi, c'est 588 600 €. C'est ce chiffre-là qui doit
apparaître au dénominateur, toujours.

(En résidence principale, le Bëllegen Akt change complètement l'équation. J'y
consacre le post de la semaine 5.)

**CTA**
Vous montez un dossier locatif ? Envoyez-moi le prix et le loyer visé, je vous
dis ce que ça donne sur le capital réel.

**Coupe courte**
545 000 € affichés → 588 600 € réellement engagés.
6 % d'enregistrement + 1 % de transcription + ~1 % de notaire.
Un rendement calculé sur le prix affiché est surévalué d'environ 8 %.
Source : pfi.public.lu.

---

## `w2-tue` · Mardi · Le système — trade

**Accroche**
7 015 bâtiments, extrudés depuis la donnée publique. J'ai arrêté de prospecter
sur une liste.

**Corps**
La géométrie vient d'OpenStreetMap, découpée aux limites communales de
Dudelange. Le fond aérien est l'orthophoto officielle de l'ACT, publiée en CC0.
La hauteur d'extrusion utilise la hauteur mappée quand elle existe, sinon le
nombre d'étages.

Détail de conception qui compte plus qu'il n'en a l'air : si le service de
tuiles tombe, le maillage local reste affiché. Un outil de terrain qui devient
une page blanche parce qu'un serveur distant ne répond pas n'est pas un outil de
terrain.

Ce que ça change concrètement : une commune cesse d'être une liste d'adresses et
redevient un territoire. On voit les densités, les alignements, les parcelles
qui n'ont pas bougé. C'est une manière très différente de préparer une tournée.

Tout est construit sur de la donnée publique et ouverte. Rien de scrapé, aucune
donnée personnelle dans cette couche.

*Le panneau prospects est retiré de la capture : noms et adresses de
particuliers.*

**Coupe courte**
7 015 emprises de bâtiments, extrudées depuis OpenStreetMap.
Fond : orthophoto ACT, CC0.
Si le service de tuiles tombe, le maillage local reste affiché.
Le territoire à la place de la liste.

---

## `w2-wed` · Mercredi · Comment je vérifie — public · FLAGSHIP

**Accroche**
Le même bien peut sembler cher ou bon marché selon la source qu'on regarde.
Voici comment je lis un prix au m² sans me tromper de référence.

**Corps**
**1. Savoir laquelle des deux sources on lit.** Les portails donnent le prix
demandé. L'Observatoire donne le prix notarié, agrégé et publié avec un
trimestre de retard. Ce sont deux natures de chiffre différentes. Les confondre
fausse tout le raisonnement.

**2. Traiter l'écart comme une information.** À Esch il est d'environ 950 €/m².
Ce n'est pas du bruit : c'est la marge de négociation structurelle du marché.

**3. Descendre à la zone.** La fourchette communale d'Esch va de 4 284 à
7 480 €/m². Un prix « dans la moyenne » ne veut strictement rien dire tant qu'on
ne sait pas dans quel quartier il se situe.

**4. Exiger que la prime se justifie.** Un bien au-dessus de la moyenne notariée
doit avoir une raison mesurable : classe énergétique, rénovation récente, étage,
terrasse, exposition. Sinon c'est simplement un prix optimiste.

Un prix au m² sans sa source et sans sa zone n'est pas un argument. C'est un
chiffre.

**CTA**
Vous avez un prix au m² qu'on vous a présenté comme « dans le marché » ?
Envoyez-le-moi avec le quartier, je vous dis contre quoi il se compare.

**Coupe courte**
Un prix au m², c'est quatre questions :
1. Prix demandé ou prix notarié ?
2. Quel écart entre les deux ? (≈950 €/m² à Esch)
3. Quelle zone ? (4 284 à 7 480 €/m² dans la même commune)
4. Qu'est-ce qui justifie la prime ?
Sans les quatre, ce n'est pas un argument. C'est un chiffre.

---

## `w2-thu` · Jeudi · Lecture de marché — public

**Accroche**
Dans une seule commune, le rendement locatif double d'un quartier à l'autre.

**Corps**
Esch-sur-Alzette, ventilation par zone :

— Al-Esch : 6 580 €/m², loyer 27,70 €/m² → **5,05 %**
— Dellhéicht : 4 284 €/m², loyer 14,25 €/m² → 3,99 %
— Belval-Université : 4 911 €/m², loyer 15,75 €/m² → 3,85 %
— Fettmeth : 6 971 €/m², loyer 18,07 €/m² → 3,11 %
— Grenz : 7 480 €/m², loyer 14,28 €/m² → 2,29 %

Facteur 1,75 sur les prix. Facteur 2 sur les loyers. Facteur 2,2 sur le
rendement.

Deux choses à retenir.

Al-Esch est la seule zone où le prix monte encore et où le loyer est le double
des autres. C'est le quartier ancien, central, celui dont on parle le moins dans
les brochures.

Belval-Université, qui porte tout le récit du renouveau du Sud, se vend sous la
moyenne communale et se loue mal. L'offre neuve y a rattrapé la demande.

Toute analyse construite sur la moyenne communale est fausse pour un bien
précis. Pas approximative : fausse, potentiellement d'un facteur deux.

**CTA**
Dites-moi le quartier plutôt que la commune, et je peux vous donner un chiffre
qui veut dire quelque chose.

**Coupe courte**
Esch-sur-Alzette, rendement par quartier :
Al-Esch 5,05 % · Dellhéicht 3,99 % · Belval-Université 3,85 %
Fettmeth 3,11 % · Grenz 2,29 %
Facteur 2,2 entre le meilleur et le pire, dans la même commune.
Source : immotop.lu, ventilation par zone (juillet 2026).

---

## `w2-fri` · Vendredi · Note de build — trade

**Accroche**
La moyenne communale est le mensonge le plus courant du métier. Cette semaine,
j'ai codé le refus.

**Corps**
Le système ne produit plus d'estimation tant que la zone n'est pas renseignée.
S'il n'a que la commune, il rend un intervalle, pas un prix.

Ce n'est pas une contrainte technique que j'ai subie. C'est une décision, et
elle est inconfortable : elle rend l'outil plus pénible à utiliser et l'oblige à
répondre « pas assez d'information » là où il rendait auparavant un joli chiffre
unique.

La justification est arrivée des données elles-mêmes. Facteur 1,75 sur les prix
entre zones d'Esch, facteur 2,0 sur les loyers. Une estimation à l'échelle
communale peut donc être fausse du double, tout en ayant l'air parfaitement
crédible.

C'est le pire cas de figure pour un outil d'aide à la décision : pas faux
visiblement, faux discrètement.

Ce qu'il faut fournir maintenant : le quartier, pas seulement la commune.

**Coupe courte**
Ce que j'ai corrigé cette semaine :
Le système refuse d'estimer sans la zone. Commune seule → un intervalle, pas un
prix.
Écart entre zones : 1,75× sur les prix, 2,0× sur les loyers.
Une estimation communale peut être fausse du double, et avoir l'air juste.

---
---

# SEMAINE 3 · Le plafond des loyers

## `w3-mon` · Lundi · Le chiffre — public

**Accroche**
Au Luxembourg, le loyer légal ne dépend pas de la qualité du bien. Il dépend de
ce que vous avez payé.

**Corps**
La loi du 21 septembre 2006 plafonne le loyer annuel à 5 % du capital investi
réévalué. Pas du marché, pas de l'état du bien, pas de la classe énergétique.

Sur un bien à 545 000 € — donc 588 600 € de capital investi :

— plafond en vigueur, 5 % : **2 452 €/mois**
— projet de loi 8184, 3,5 % : 1 717 €/mois
— écart si le texte passe : **−736 €/mois**

Trois conséquences que peu de bailleurs anticipent.

Rénover ne relève pas le plafond. Améliorer la classe énergétique non plus.
Le seul levier légal sur le loyer autorisé, c'est le prix d'achat.

Et le projet de loi n°8184 est en discussion à la Chambre — non voté, non
rétroactif, mais il concernerait tout nouveau bail. Une projection locative à dix
ans qui l'ignore n'est pas simplifiée : elle est incomplète.

**CTA**
Vous mettez un bien en location cette année ? Je peux vous calculer les deux
régimes. Écrivez-moi.

**Coupe courte**
Le loyer légal ne dépend pas du bien. Il dépend de ce que vous avez payé.
5 % du capital investi (loi du 21/09/2006).
Bien à 545 000 € → plafond 2 452 €/mois.
Projet de loi 8184 à 3,5 % → 1 717 €. Soit −736 €/mois.
Rénover ne relève pas le plafond.

---

## `w3-tue` · Mardi · Le système — trade

**Accroche**
Ce qui me prenait une demi-journée en tableur sort maintenant en une commande.

**Corps**
Ce que produit une analyse complète :

— un score composite, pondéré sur cinq catégories
— les comparables : annonces actives, surface et CPE relevés
— le cash-flow : NOI, service de la dette, DSCR
— les coûts d'acquisition : droits, notaire, Bëllegen Akt
— les chiffres non vérifiables, marqués comme tels, jamais estimés

Mais la sortie que j'utilise le plus n'est pas le score.

C'est la liste des vérifications à faire avant de faire une offre. Passeport
énergétique définitif, budget du syndic, zonage de la parcelle, montants fiscaux
à confirmer chez le notaire.

Un score vous dit où vous en êtes. La liste vous dit quoi faire demain matin.
Sur un marché sans registre de transactions, la seconde vaut plus que le
premier — parce que le score repose sur des données publiques que tout le monde
peut contester, et la liste sur des documents que vous pouvez aller chercher.

**Coupe courte**
Une analyse complète en une commande :
score composite · comparables · cash-flow et DSCR · coûts d'acquisition
· chiffres non vérifiables marqués, jamais estimés
La sortie la plus utile n'est pas le score. C'est la liste des vérifications à
faire avant l'offre.

---

## `w3-wed` · Mercredi · Comment je vérifie — public · FLAGSHIP

**Accroche**
Baisser le prix ne sauve pas un investissement locatif au Luxembourg. Voici
pourquoi, avec les chiffres.

**Corps**
C'est la spécificité luxembourgeoise que les modèles anglo-saxons ne prévoient
pas, et elle inverse complètement le raisonnement habituel.

**1. Le plafond suit le capital investi.** Le loyer légal est proportionnel à ce
que vous avez payé. Ailleurs, le loyer dépend du marché. Ici, il dépend de votre
prix d'achat.

**2. Négocier baisse aussi le loyer autorisé.** Payer 90 000 € de moins réduit
le plafond dans la même proportion. Vous gagnez sur la mensualité, vous perdez
sur le revenu. Les deux effets se compensent en grande partie.

**3. Vérifier au lieu de supposer.** Sur un dossier réel : à 545 000 €, le
cash-flow est de −426 €/mois. À 455 000 €, il reste négatif, autour de −345 €.
La remise de 90 000 € n'efface pas le problème.

**4. Les vrais leviers sont ailleurs.** Seuls l'apport et le taux déplacent
l'équilibre. Il faudrait environ 35 % d'apport, ou un taux sous 2,7 %.

Aucun prix d'achat n'équilibre cette opération à 80 % de LTV sur 25 ans. Ce
n'est pas un problème de négociation.

C'est le genre de conclusion qui ne fait plaisir à personne, y compris à moi
quand c'est sur un bien que je pourrais vendre.

**CTA**
Vous hésitez sur un locatif ? Envoyez-moi prix, loyer visé et apport. Je vous
dis si c'est une question de prix ou pas.

**Coupe courte**
Pourquoi négocier ne sauve pas un locatif au Luxembourg :
Le loyer légal = 5 % de ce que vous avez payé.
Payer moins → louer moins cher, légalement.
545 000 € → cash-flow −426 €/mois.
455 000 € → toujours −345 €/mois.
Les leviers sont l'apport (~35 %) et le taux (<2,7 %). Pas le prix.

---

## `w3-thu` · Jeudi · Lecture de marché — public

**Accroche**
3,01 %. C'est le chiffre qui a provoqué la correction, et celui qui est en train
de la terminer.

**Corps**
Statistiques MIR de la Banque centrale du Luxembourg, janvier 2026 :

— taux moyen sur les nouveaux crédits : **3,01 %**
— variation sur un mois : −14 points de base
— fixation 1 à 5 ans : 3,27 %
— fixation 5 à 10 ans : 3,52 %
— taux publié par les banques : aucun, le prix est personnalisé

La direction des taux explique l'essentiel de ce marché depuis 2022. La montée a
produit la correction ; la stabilisation autour de 3 % explique le creux d'avril
et la reprise des volumes qu'on observe depuis.

Ce que ça implique, sans prédire quoi que ce soit :

À 3 %, la demande solvable tient. Un retour vers 3,5 % ramènerait la pression
baissière sur les prix. Une descente sous 2,75 % déclencherait probablement le
rebond que beaucoup attendent depuis deux ans.

Dernier point, souvent ignoré : aucune banque luxembourgeoise ne publie de
barème. Le taux moyen BCL est une référence de marché, pas votre taux. Le vôtre
dépend de votre profil, et il se négocie.

**CTA**
On vous a proposé un taux ? Dites-moi lequel et sur quelle durée, je vous dis où
il se situe.

**Coupe courte**
Taux moyen sur les nouveaux crédits immobiliers : 3,01 % (BCL, janvier 2026).
−14 points de base sur un mois.
Fixation 1–5 ans : 3,27 %. 5–10 ans : 3,52 %.
Aucune banque ne publie de barème : le taux moyen n'est pas le vôtre.

---

## `w3-fri` · Vendredi · Note de build — trade

**Accroche**
Le simulateur locatif calcule désormais les deux régimes. Tant que la loi 8184
n'est pas votée, un seul scénario est une analyse incomplète.

**Corps**
Régime en vigueur : 5 % du capital investi réévalué.
Régime proposé par le projet de loi n°8184 : 3,5 %.
Impact type sur un bien à 545 000 € : **−736 €/mois**.

Statut du texte : en discussion à la Chambre des députés. Non voté. Non
rétroactif.

L'argument pour l'ignorer est solide : un texte non voté n'est pas du droit, et
afficher un scénario qui n'existe pas peut inquiéter inutilement.

L'argument contre est plus fort. Le texte concernerait tout nouveau bail. Une
projection locative porte typiquement sur dix à vingt-cinq ans. Sur cet horizon,
écarter une modification du plafond de rendement en discussion active n'est pas
une simplification — c'est une omission, et elle va toujours dans le sens qui
arrange le vendeur.

Le simulateur affiche donc les deux, avec le statut du texte à côté du chiffre.
Le lecteur décide de son propre appétit au risque réglementaire. Ce n'est pas
mon rôle de le faire à sa place.

**Coupe courte**
Le simulateur calcule maintenant les deux régimes :
En vigueur : 5 % du capital investi.
Projet de loi 8184 : 3,5 %. Impact type : −736 €/mois.
Statut affiché à côté du chiffre : en discussion, non voté, non rétroactif.
Sur dix ans, l'ignorer n'est pas une simplification. C'est une omission.

---
---

# SEMAINE 4 · Méthode et honnêteté

## `w4-mon` · Lundi · Le chiffre — public

**Accroche**
Zéro. C'est le nombre de registres publics de prix de transaction au Luxembourg.

**Corps**
Quatre chiffres que ce pays ne publie pas :

— le ratio prix de vente / prix affiché : impossible à calculer
— le pourcentage de biens vendus au-dessus du prix affiché : impossible
— le délai de vente moyen : non publié
— les mois de stock par commune : non publié

Quand vous voyez l'un de ces chiffres cité quelque part avec deux décimales, il
est inventé. Pas approximatif : inventé, parce que la donnée sous-jacente
n'existe nulle part.

Ce n'est pas un détail technique. C'est la raison structurelle pour laquelle
l'immobilier luxembourgeois fonctionne à l'assertion. Sans registre, personne ne
peut contredire un agent qui affirme un prix — et personne ne peut le confirmer
non plus.

Ce qu'on a à la place : le prix affiché sur les portails, et le prix notarié
agrégé par l'Observatoire de l'Habitat, publié avec un trimestre de retard. Deux
sources. C'est tout.

Un analyste honnête vous dit ce qu'il ne sait pas. C'est même à ça qu'on le
reconnaît.

**CTA**
On vous a cité un « délai de vente moyen » ou un « taux de négociation » ?
Demandez la source. Je suis curieux de la réponse.

**Coupe courte**
Ce que le Luxembourg ne publie pas :
· ratio prix de vente / prix affiché
· % vendu au-dessus du prix
· délai de vente moyen
· mois de stock par commune
Cité avec deux décimales ? C'est inventé. La donnée n'existe pas.

---

## `w4-tue` · Mardi · Le système — trade

**Accroche**
Je surveille le marché en continu, pas au moment où j'en ai besoin. La raison
n'est pas celle qu'on croit.

**Corps**
Ce qui est capturé : l'annonce, le prix, la surface, la classe énergétique,
l'agence. En continu, pas à la demande.

Le problème d'un marché sans registre, ce n'est pas seulement l'absence de
données. C'est que les annonces disparaissent sans laisser de trace. Un bien
retiré du marché emporte avec lui l'information la plus intéressante : à quel
prix il était affiché, et pendant combien de temps.

Sans historique, on ne peut ni suivre un prix qui bouge, ni savoir qu'une
annonce a été retirée.

Conséquence concrète, sur une analyse récente : deux comparables avaient été
dépubliés — HTTP 410 et 404. Ils sont sortis du calcul, et la sortie le dit
explicitement.

Les garder aurait été plus flatteur pour le bien analysé, et moins vrai. C'est
exactement le type d'arbitrage silencieux qui décide de la qualité d'un outil
d'analyse, et personne ne le voit de l'extérieur.

**Coupe courte**
Veille continue : annonce, prix, surface, CPE, agence.
Pourquoi en continu : les annonces disparaissent sans laisser de trace.
Sur une analyse récente, deux comparables dépubliés (410 et 404) sont sortis du
calcul.
Les garder aurait été plus flatteur. Et moins vrai.

---

## `w4-wed` · Mercredi · Comment je vérifie — public · FLAGSHIP

**Accroche**
Comment on travaille un marché immobilier sans MLS. Les réflexes importés des
États-Unis, du Royaume-Uni ou de France ne se transposent pas ici.

**Corps**
**1. Deux sources, jamais une.** Prix affichés d'un côté, prix notariés agrégés
de l'autre. Ce sont deux natures de chiffre. On ne les mélange pas, on les
confronte — et l'écart entre elles est une information à part entière.

**2. Dater chaque chiffre.** L'Observatoire publie par trimestre, avec du
décalage. Un chiffre sans sa date est inutilisable dans une négociation :
l'autre partie le datera à sa convenance.

**3. Marquer ce qu'on ignore.** Zone non confirmée, CPE provisoire, chômage
communal périmé. Une incertitude signalée reste exploitable ; une incertitude
cachée fait dérailler tout le reste du raisonnement.

**4. Le notaire tranche.** Bëllegen Akt, régime de plus-value, plafonds de
déduction : ces montants bougent, et ils ont bougé récemment. Aucune projection
ne remplace une confirmation.

Concrètement, ça veut dire plus de temps sur les comparables locaux, et moins de
confiance dans les tableaux de bord.

C'est moins impressionnant qu'un outil qui répond en trois secondes. C'est aussi
la seule façon de ne pas se tromper à l'échelle d'un achat à trente ans.

**CTA**
Vous arrivez de l'étranger et vous achetez ici ? Les habitudes de due diligence
ne se transposent pas. Écrivez-moi avant de faire une offre.

**Coupe courte**
Travailler un marché sans MLS :
1. Deux sources, jamais une — et l'écart est une information
2. Dater chaque chiffre (l'Observatoire publie avec du retard)
3. Marquer ce qu'on ignore
4. Le notaire tranche sur les montants fiscaux
Plus de temps sur les comparables, moins de confiance dans les tableaux de bord.

---

## `w4-thu` · Jeudi · Lecture de marché — public

**Accroche**
Le neuf recule de 18,2 %. La revente repart. Même trimestre, même pays.

**Corps**
Observatoire de l'Habitat / STATEC, rapport d'analyse n°25, publié le
25 juin 2026. Premier trimestre 2026 :

— VEFA (vente en état futur d'achèvement) : 207 transactions, **−18,2 %**
— appartements existants : 968 transactions, +9,4 %
— maisons existantes : 650 transactions, +11,5 %

Indice hédonique national sur douze mois : +1,7 %. Décomposé : maisons
existantes +3,0 %, appartements existants +0,9 %.

Deux marchés qui divergent dans le même trimestre.

Pour un acheteur, ça change ce qu'il faut regarder : la revente est redevenue
liquide, le neuf l'est beaucoup moins, et le rapport de force à la négociation
n'est pas le même des deux côtés.

Pour un promoteur, ça change la façon de présenter un programme : les arguments
qui portaient en 2021 ne portent plus.

Et la conséquence différée, celle qu'on oublie : moins de neuf lancé aujourd'hui
signifie moins de livraisons dans douze à vingt-quatre mois. Mécaniquement, ça
soutient l'existant.

**CTA**
Vous arbitrez entre neuf et ancien en ce moment ? C'est le bon trimestre pour en
parler. Écrivez-moi.

**Coupe courte**
T1 2026, Luxembourg :
VEFA : 207 transactions, −18,2 %
Appartements existants : 968, +9,4 %
Maisons existantes : 650, +11,5 %
Le neuf recule, la revente repart. Et moins de neuf livré dans 12–24 mois
soutient l'existant.
Source : Observatoire de l'Habitat / STATEC, rapport n°25 (25/06/2026).

---

## `w4-fri` · Vendredi · Note de build — trade

**Accroche**
Chaque chiffre porte sa source, ou il ne sort pas. C'est la seule règle du
système qui n'a jamais bougé.

**Corps**
Sources câblées : Observatoire de l'Habitat, STATEC, BCL, pfi.public.lu, AED.

— un chiffre sans source est refusé à la sortie
— un chiffre invérifiable est marqué « non vérifié »
— un chiffre périmé est marqué avec sa date

Cette règle a coûté cher en fonctionnalités. Elle interdit toute une catégorie
d'indicateurs pratiques qu'on pourrait produire par estimation, et elle rend
certaines sorties visiblement incomplètes.

La justification tient en une phrase : un chiffre sourcé invite le lecteur à
vérifier.

C'est exactement pour ça qu'il faut le sourcer. Et c'est exactement pour ça
qu'un chiffre périmé est pire que pas de chiffre du tout — la citation donne
envie d'aller voir, et ce qu'on trouve alors ne correspond plus.

J'applique la même règle à ce que je publie ici. S'il n'y a pas de source sous
un chiffre dans un de mes posts, dites-le-moi.

**Coupe courte**
La règle qui tient tout le système :
Chaque chiffre porte sa source, ou il ne sort pas.
Invérifiable → marqué. Périmé → daté.
Un chiffre sourcé invite à vérifier. C'est pour ça qu'on le source — et pour ça
qu'un chiffre périmé est pire que pas de chiffre.

---
---

# SEMAINE 5 · Ce que ça coûte vraiment

## `w5-mon` · Lundi · Le chiffre — public

**Accroche**
Le Bëllegen Akt vaut 40 000 € par acquéreur. Ou 45 000 €. Personne ne le sait
encore avec certitude, et je préfère le dire.

**Corps**
Le crédit d'impôt qui efface les droits d'enregistrement en résidence principale
existe actuellement à deux montants différents selon la source qu'on consulte :

— **40 000 €** : confirmé par la loi du 3 juillet 2025
— **45 000 €** : annoncé par un communiqué gouvernemental du 16 juillet 2026,
  texte consolidé non publié à ma date de vérification

Je traite le second comme non vérifié. Ce n'est pas de la prudence excessive :
tant que le texte consolidé n'est pas publié, un notaire appliquera le montant
en vigueur, pas celui du communiqué.

Ce que ça change en pratique, sur un bien à 545 000 € : les droits dus sont de
38 150 €, et ils sont couverts par un seul acquéreur dans les deux cas. Le
crédit est par personne — un couple dispose donc du double.

Pour ce bien précis, le débat 40 000 / 45 000 ne change donc rien. Il commence à
compter au-delà de 570 000 € environ, pour un acquéreur seul.

**CTA**
Vous achetez en résidence principale cette année ? Faites confirmer le montant
applicable par votre notaire, pas par un article. Je peux vous faire le calcul
en attendant.

**Coupe courte**
Bëllegen Akt : 40 000 € par acquéreur (loi du 03/07/2025).
Ou 45 000 € (communiqué du 16/07/2026, texte consolidé non publié).
Je traite le second comme non vérifié.
Bien à 545 000 € → 38 150 € de droits dus, couverts dans les deux cas.
Le crédit est par personne : un couple a le double.

---

## `w5-tue` · Mardi · Le système — trade

**Accroche**
209 nœuds, 414 liens. Une seule mémoire.

**Corps**
Chaque analyse, chaque note de marché, chaque bout de code finit relié aux
autres dans un graphe unique. Quatre sources vivantes l'alimentent.

Le problème que ça résout n'est pas glamour : refaire deux fois le même travail.

Dans ce métier, on produit une analyse pour un client, elle sert une fois, puis
elle disparaît dans un dossier. Six mois plus tard, une question voisine arrive
et on recommence — sans se souvenir qu'on avait déjà relevé les comparables de
cette rue, ni pourquoi on avait écarté tel chiffre.

Avec le graphe, la question « est-ce que j'ai déjà travaillé là-dessus ? » a une
réponse en deux secondes. Et surtout : « pourquoi avais-je conclu ça ? » en a
une aussi, avec les sources de l'époque.

C'est le genre d'infrastructure qui ne se voit pas sur une démo, et qui change
tout au bout de six mois.

*Capture réelle. Aucune donnée client : uniquement des notes, des analyses et de
la documentation.*

**Coupe courte**
209 nœuds. 414 liens. 4 sources vivantes.
Le problème que ça résout : refaire deux fois le même travail.
« Est-ce que j'ai déjà travaillé là-dessus ? » → réponse en deux secondes.
« Pourquoi avais-je conclu ça ? » → avec les sources de l'époque.

---

## `w5-wed` · Mercredi · Comment je vérifie — public · FLAGSHIP

**Accroche**
Comment je calcule le cash qu'il faut vraiment sortir le jour de la signature.
Ce n'est presque jamais l'apport qui bloque.

**Corps**
**1. Établir l'usage avant tout chiffre.** Résidence principale ou locatif.
Cette seule réponse fait varier le cash nécessaire d'un facteur trente sur un
même bien, à cause du Bëllegen Akt.

**2. Poser les droits à 7 %.** Six pour cent d'enregistrement, un de
transcription. Sur 545 000 €, cela fait 38 150 € dus avant toute réduction.

**3. Appliquer le Bëllegen Akt, s'il s'applique.** Résidence principale
uniquement, occupation effective dans les deux ans — sinon récupération avec
intérêts. En locatif, il ne s'applique pas du tout.

**4. Ajouter le notaire, puis l'apport.** Environ 1 % plus débours. L'apport ne
vient qu'à la fin de ce calcul, et c'est rarement lui qui bloque le dossier.

Un acheteur qui découvre les 38 150 € trois semaines avant l'acte n'a pas un
problème de financement. Il a un problème de conseil.

Je fais ce calcul avant la visite, pas après l'offre. Ça évite une catégorie
entière de dossiers qui s'effondrent au dernier moment, et c'est gratuit.

**CTA**
Vous voulez le montant exact pour un bien précis ? Donnez-moi le prix et
l'usage, je vous fais le calcul.

**Coupe courte**
Le cash à sortir le jour J :
1. Résidence principale ou locatif ? (facteur 30 sur le cash nécessaire)
2. Droits à 7 % → 38 150 € sur un bien à 545 000 €
3. Bëllegen Akt si résidence principale (occupation sous 2 ans, sinon
   récupération avec intérêts)
4. Notaire ~1 %, puis l'apport
Découvrir les 38 150 € trois semaines avant l'acte, ce n'est pas un problème de
financement. C'est un problème de conseil.

---

## `w5-thu` · Jeudi · Lecture de marché — public

**Accroche**
L'impôt foncier au Luxembourg n'a rien à voir avec ce que vous avez lu ailleurs.
Deux hypothèses importées faussent régulièrement les projections.

**Corps**
**Première hypothèse fausse : l'impôt foncier annuel.** Aux États-Unis, on
compte souvent 1 à 2 % de la valeur du bien par an. Au Luxembourg, l'impôt
foncier se compte fréquemment en centaines d'euros. Sur une projection à dix
ans, l'écart entre les deux hypothèses se chiffre en dizaines de milliers
d'euros.

**Deuxième zone de confusion : la plus-value.** En résidence principale, la
plus-value est exonérée. Sur le reste, le régime a bougé deux fois en dix-huit
mois : le taux réduit à 10,5 % avec seuil à deux ans n'était en vigueur que du
1er janvier 2024 au 30 juin 2025.

Le régime actuellement applicable est à reconfirmer. Je le marque comme non
vérifié plutôt que de citer un taux qui pourrait ne plus être le bon.

C'est précisément le type de chiffre qu'il ne faut pas reprendre d'un article,
même récent, même bien écrit. Toute projection de sortie doit être confirmée
auprès du notaire.

**CTA**
Vous projetez une revente ? Faites confirmer le régime de plus-value avant de
calculer quoi que ce soit. Je peux vous dire quelles questions poser.

**Coupe courte**
Impôt foncier au Luxembourg : souvent quelques centaines d'euros par an.
L'hypothèse américaine à 1–2 % de la valeur est fausse ici.
Plus-value en résidence principale : exonérée.
Taux réduit à 10,5 % (seuil 2 ans) : en vigueur du 01/01/2024 au 30/06/2025
seulement. Régime actuel à reconfirmer.
Deux changements en dix-huit mois. Demandez au notaire, pas à un article.

---

## `w5-fri` · Vendredi · Note de build — trade

**Accroche**
Que fait un système d'analyse quand deux sources officielles se contredisent ?
Le Bëllegen Akt m'a forcé à trancher.

**Corps**
Source A : loi du 3 juillet 2025 → 40 000 €, texte consolidé.
Source B : communiqué gouvernemental du 16 juillet 2026 → 45 000 €, non
consolidé.

Trois options s'offraient à moi. Prendre le plus récent — plausible, mais un
communiqué n'est pas du droit. Prendre le plus prudent — défendable, mais c'est
un choix caché derrière une apparence de neutralité. Ou afficher les deux.

Le système affiche les deux, cite chaque source, et marque laquelle est
consolidée.

Choisir à la place du notaire aurait été plus élégant à l'écran, et parfaitement
irresponsable. Un montant fiscal appliqué à un acte authentique ne se décide pas
dans un outil d'aide à la décision.

Le principe généralisé : sur un chiffre contesté, la sortie porte les deux
valeurs et l'état de chaque source. C'est plus laid. C'est aussi le seul
comportement qui ne fait pas passer une incertitude pour un fait.

**Coupe courte**
Que fait le système quand deux sources officielles se contredisent ?
Bëllegen Akt : 40 000 € (loi du 03/07/2025, consolidée) et 45 000 €
(communiqué du 16/07/2026, non consolidé).
Il ne choisit pas. Il affiche les deux et marque laquelle est consolidée.
Trancher à la place du notaire serait plus élégant, et irresponsable.

---
---

# SEMAINE 6 · Énergie et valeur

## `w6-mon` · Lundi · Le chiffre — public

**Accroche**
Sur les comparables que j'ai relevés à Esch, la classe énergétique vaut plus que
l'étage.

**Corps**
— CPE E/F, ancien non rénové : 5 073 €/m²
— CPE D ou VEFA neuf : 6 999 €/m²
— écart mesuré : **≈ +38 % au m²**

Précision importante avant que quelqu'un ne cite ce chiffre ailleurs :
l'échantillon est restreint. À traiter comme un ordre de grandeur, pas comme une
élasticité. Je ne dis pas « la classe énergétique vaut 38 % » — je dis que sur
les biens que j'ai relevés, l'écart était de cet ordre.

Mais la direction est nette, et elle se retrouve sur chaque dossier.

Deux lectures, opposées.

Si vous achetez pour habiter : un bien mal classé se paie moins cher, et la
rénovation énergétique est le levier de valeur le plus lisible du marché
actuel — à condition de chiffrer les travaux avant de faire l'offre.

Si vous achetez déjà rénové : cet écart, vous le payez. Le vendeur l'a capté.
C'est le sujet du post de mercredi.

**CTA**
Vous hésitez entre un bien à rénover et un bien rénové ? Envoyez-moi les deux,
je vous fais la comparaison au capital investi.

**Coupe courte**
Sur mes comparables à Esch :
CPE E/F, ancien non rénové : 5 073 €/m²
CPE D ou neuf : 6 999 €/m²
Écart : ≈ +38 % au m².
Échantillon restreint — un ordre de grandeur, pas une élasticité. Mais la
direction se retrouve sur chaque dossier.

---

## `w6-tue` · Mardi · Le système — trade

**Accroche**
Le système ne croit pas un CPE provisoire. C'est le premier endroit où une
analyse peut se tromper de bonne foi.

**Corps**
La classe énergétique est le facteur de prix le plus fort que j'aie mesuré. Ce
qui en fait aussi le point le plus fragile de toute évaluation.

Le CPE est obligatoire dans toute annonce au Luxembourg. Mais il est parfois
provisoire — établi avant travaux, ou sur base déclarative.

Traitement dans le système : un CPE provisoire est marqué, la prime de prix
associée n'est pas validée, et la fourchette d'évaluation est élargie tant que
le passeport définitif manque. Rien ne lève le doute à part le passeport
définitif.

Le cas qui m'a fait coder ça : un immeuble de 1950 annoncé en B/C provisoire.
La prime demandée par rapport aux comparables de la même rue reposait
entièrement sur un document qui n'existait pas encore.

Ça se dit avant l'offre, pas après. Et ça se dit d'autant plus facilement que
c'est l'outil qui l'a signalé, pas moi qui cherche la petite bête.

**Coupe courte**
Le système ne valide pas la prime d'un CPE provisoire.
Marqué → fourchette élargie → prime non validée jusqu'au passeport définitif.
Cas réel : immeuble de 1950 annoncé B/C provisoire. La prime demandée reposait
sur un document qui n'existait pas encore.
Ça se dit avant l'offre.

---

## `w6-wed` · Mercredi · Comment je vérifie — public · FLAGSHIP

**Accroche**
Comment je vérifie si la rénovation d'un bien a déjà été payée — par vous.

**Corps**
Acheter un bien déjà rénové paraît plus simple. Fiscalement, c'est surtout plus
cher, et le vendeur a encaissé l'avantage.

**1. Identifier qui a engagé les travaux.** La TVA logement à 3 % au lieu de
17 %, et les aides Klimabonus, bénéficient à celui qui commande et paie les
travaux. Pas au propriétaire suivant.

**2. Comprendre ce que vous rachetez.** Un bien déjà rénové intègre ces
avantages dans son prix demandé. Vous les payez ; vous ne les récupérez pas.

**3. Vérifier le plafond et l'antériorité.** L'avantage TVA est plafonné à
50 000 € par logement, et suppose un accord préalable de l'AED **avant** le
début des travaux. Il ne s'applique jamais rétroactivement.

**4. Chercher ce qui reste comme levier.** Un éventuel amortissement accéléré
sur la part rénovation, et une meilleure liquidité à la revente. Mais plus
aucune subvention à capter.

Un CPE déjà excellent est une bonne nouvelle pour habiter, et la fin du levier
de valorisation pour investir.

Ce n'est pas un argument pour acheter du mal classé — les travaux coûtent, et
tout le monde n'a pas envie d'un chantier. C'est un argument pour ne pas payer
une prime de rénovation en croyant acheter un potentiel.

**CTA**
Vous comparez un bien rénové et un bien à rénover ? Je peux chiffrer les deux
au capital réellement investi, aides comprises.

**Coupe courte**
Acheter déjà rénové : vous payez la rénovation, vous ne récupérez pas les aides.
TVA logement à 3 % au lieu de 17 % : va à celui qui commande et paie les travaux.
Plafond 50 000 € par logement, accord AED **avant** travaux, jamais rétroactif.
Un CPE excellent = bonne nouvelle pour habiter, fin du levier pour investir.

---

## `w6-thu` · Jeudi · Lecture de marché — public

**Accroche**
Un immeuble de 1950 ne s'amortit pas comme un neuf. Beaucoup de simulateurs
l'ignorent, et surestiment la déduction du double.

**Corps**
— taux accéléré, 4 % : réservé aux immeubles achevés depuis moins de 5 ans
— taux normal applicable à l'ancien : **2 % par an**
— base amortissable : le prix moins environ 25 % de quote-part terrain
— sur un bien à 545 000 € : ≈ 8 175 € par an de déduction

La part correspondant à une rénovation énergétique peut relever d'un traitement
différent. Le taux exact est à confirmer — je le marque comme non vérifié plutôt
que de citer un chiffre approximatif dans un calcul fiscal.

L'erreur est fréquente et elle est grosse : appliquer 4 % à un immeuble
d'avant 1970 double la déduction annoncée. Sur une projection à dix ans, ça
déplace la conclusion d'un dossier.

Elle est aussi vérifiable en une ligne — il suffit de demander l'année
d'achèvement du bâtiment, ce qui figure dans à peu près tous les dossiers.

C'est le genre de vérification qui prend trente secondes et que presque personne
ne fait, parce que le chiffre sort d'un simulateur et que les simulateurs ont
l'air sérieux.

**CTA**
On vous a montré une projection locative avec 4 % d'amortissement ? Vérifiez
l'année d'achèvement. Écrivez-moi si le compte n'y est pas.

**Coupe courte**
Amortissement locatif au Luxembourg :
4 % → uniquement les immeubles achevés depuis moins de 5 ans
2 %/an → l'ancien
Base : prix moins ~25 % de quote-part terrain.
Sur 545 000 € : ≈ 8 175 €/an.
Appliquer 4 % à un immeuble d'avant 1970 double la déduction annoncée.
Source : impotsdirects.public.lu, art. 106 LIR.

---

## `w6-fri` · Vendredi · Note de build — trade

**Accroche**
Un bon CPE fait baisser le score d'investissement. C'était contre-intuitif à
coder, et c'est juste.

**Corps**
Le système signale désormais quand le levier énergétique a déjà été consommé par
le vendeur.

Signal déclencheur : classe B ou C sur du bâti ancien.
Ce qui est vérifié : qui a engagé et payé les travaux.
Effet sur le score value-add : ramené à zéro.
Effet sur le score résidence principale : relevé.

Le passage difficile à écrire, c'est celui-là : le même bien devient meilleur et
moins intéressant selon l'usage. Un bâtiment de 1950 remis à neuf est un bon
logement — et une opération d'investissement sans potentiel, parce qu'il ne
reste plus rien à créer.

Un score unique ne peut pas exprimer ça. Il fallait deux scores, avec l'usage
déclaré en entrée.

Cela m'a obligé à admettre quelque chose d'inconfortable : la question « ce bien
est-il bon ? » n'a pas de réponse. Seule « bon pour quoi ? » en a une.

**Coupe courte**
Ce que j'ai ajouté cette semaine :
Détection de la valorisation déjà captée par le vendeur.
Déclencheur : CPE B ou C sur bâti ancien.
Effet : score value-add à zéro, score résidence principale relevé.
Le bien est meilleur ; l'opération est moins intéressante. Les deux à la fois.

---
---

# SEMAINE 7 · La pénurie locative

## `w7-mon` · Lundi · Le chiffre — public

**Accroche**
792 biens à vendre à Esch-sur-Alzette. 45 à louer.

**Corps**
Dans une commune de 37 922 habitants. Un ratio de **17,6 pour 1**.

Ce n'est pas un accident de marché ni une anomalie temporaire de l'offre. C'est
une conséquence directe de la loi.

Le mécanisme : le plafond légal de loyer est fixé à 5 % du capital investi
réévalué. Sur les biens achetés récemment, ce plafond comprime le rendement au
point que la mise en location devient peu intéressante par rapport à la vente.

Les propriétaires arbitrent. Et ils vendent.

Ce que ça crée, dans la même commune et parfois dans la même rue : un marché
acheteur — stock élevé, prix en repli, marge de négociation réelle — et un
marché bailleur, où 45 biens se disputent une demande sans alternative.

La pénurie locative luxembourgeoise est un effet réglementaire, pas
démographique. C'est important, parce que les deux ne se corrigent pas du tout
de la même façon.

**CTA**
Vous hésitez à mettre un bien en location plutôt qu'à le vendre ? Je peux vous
chiffrer les deux options. Écrivez-moi.

**Coupe courte**
Esch-sur-Alzette, 37 922 habitants :
792 biens à vendre. 45 à louer. Ratio 17,6 : 1.
Cause : le plafond légal à 5 % du capital investi comprime le rendement locatif.
Les propriétaires arbitrent, et ils vendent.
La pénurie locative est un effet réglementaire, pas démographique.

---

## `w7-tue` · Mardi · Le système — trade

**Accroche**
Le ratio vente / location est le seul indicateur de tension que je peux
réellement calculer dans ce pays.

**Corps**
Sans registre de transactions, les mois de stock et le taux d'absorption sont
hors de portée. Ils supposent de connaître le nombre de ventes conclues, qui
n'est publié nulle part à l'échelle communale et en temps utile.

Le ratio vente / location, lui, se compte. Deux nombres, tous deux observables
sur les portails :

— Esch-sur-Alzette : 792 / 45 → **17,6 : 1**
— Niederkorn : 91 / 3 → **30 : 1**

Ce qu'il mesure : l'arbitrage vendre-ou-louer des propriétaires.
Ce qu'il ne mesure pas : la vitesse d'écoulement du stock. Non calculable, et je
le laisse vide plutôt que de l'approcher.

C'est un indicateur pauvre comparé à ce qu'on aurait avec un MLS. Je le sais.

Mais il est réel, il est reproductible par n'importe qui en dix minutes, et il
ne demande d'inventer aucune donnée. Dans ce marché, ces trois propriétés
réunies sont plus rares qu'on ne le croit.

**Coupe courte**
Le seul indicateur de tension calculable ici : le ratio vente / location.
Esch : 792 / 45 → 17,6 : 1
Niederkorn : 91 / 3 → 30 : 1
Il mesure l'arbitrage vendre-ou-louer. Pas la vitesse d'écoulement — non
calculable.
Indicateur pauvre. Mais réel, reproductible, et sans invention.

---

## `w7-wed` · Mercredi · Comment je vérifie — public · FLAGSHIP

**Accroche**
Comment je lis un marché où les acheteurs et les locataires vivent exactement
l'inverse.

**Corps**
La même commune peut être confortable pour un acheteur et brutale pour un
locataire. Ce sont deux marchés, pas deux humeurs.

**1. Compter les deux stocks séparément.** Sept cent quatre-vingt-douze contre
quarante-cinq. Le déséquilibre saute aux yeux dès qu'on arrête de parler du
« marché » au singulier.

**2. Chercher la cause réglementaire avant la cause économique.** Le plafond des
5 % rend la mise en location peu rentable sur les acquisitions récentes. Les
propriétaires arbitrent, et ils vendent. La démographie n'explique rien ici.

**3. En tirer la conséquence pour chaque côté.** À l'achat : stock élevé, prix
en repli, marge de négociation réelle. À la location : quarante-cinq biens et
des loyers au plus haut, donc aucune marge.

**4. Refuser d'estimer ce qui n'est pas publié.** Mois de stock et délai
d'écoulement n'existent pas ici. Les inventer donnerait une fausse précision à
une lecture par ailleurs correcte — et c'est la fausse précision qui décrédibilise
tout le reste.

Un marché acheteur et une pénurie locative peuvent coexister dans la même rue.
Ce n'est pas une contradiction, c'est une conséquence de la loi.

**CTA**
Vous cherchez à louer et vous ne comprenez pas pourquoi il n'y a rien ? Ce
n'est pas vous. Écrivez-moi, je vous explique où regarder.

**Coupe courte**
Comment lire un marché à deux vitesses :
1. Compter les deux stocks séparément (792 contre 45)
2. Chercher la cause réglementaire avant l'économique
3. Tirer la conséquence pour chaque côté
4. Refuser d'estimer ce qui n'est pas publié
Marché acheteur et pénurie locative dans la même rue. Ce n'est pas une
contradiction.

---

## `w7-thu` · Jeudi · Lecture de marché — public

**Accroche**
À Niederkorn : trente biens à vendre pour un seul à louer.

**Corps**
— ratio vente / location : **30 : 1**
— loyer annoncé, sur un an : +7,53 %
— loyer sur cinq ans : **+46,3 %**
— prix de vente, sur trois ans : −10,4 %
— creux local atteint : avril 2026

Le même mécanisme qu'à Esch, mais presque deux fois plus marqué. Et les loyers
montent d'autant plus vite que l'offre locative est rare.

Prix en baisse de 10 % sur trois ans, loyers en hausse de 46 % sur cinq. Ce ne
sont pas deux tendances contradictoires : c'est la même cause vue des deux
côtés.

Quand le rendement autorisé est plafonné, les propriétaires sortent du marché
locatif. Le stock à vendre augmente, ce qui pèse sur les prix. Le stock à louer
s'effondre, ce qui fait monter les loyers de ceux qui restent.

Pour un acheteur à Niederkorn, c'est une des meilleures configurations de
négociation du Sud en ce moment. Pour un locataire, c'est un des pires endroits
du pays pour chercher.

**CTA**
Vous regardez Niederkorn ? J'ai une analyse écrite complète sur un bien de la
rue de la Gare. Demandez-la-moi.

**Coupe courte**
Niederkorn : 30 biens à vendre pour 1 à louer.
Loyers : +7,53 % sur un an, +46,3 % sur cinq ans.
Prix de vente : −10,4 % sur trois ans. Creux en avril 2026.
Pas deux tendances contradictoires : une seule cause, vue des deux côtés.
Source : immotop.lu, Niederkorn (juin 2026).

---

## `w7-fri` · Vendredi · Note de build — trade

**Accroche**
Je pensais mesurer une tension démographique. Je mesurais un arbitrage
économique.

**Corps**
En modélisant le ratio vente / location sur plusieurs localités, une chose est
devenue difficile à ignorer : le déséquilibre ne suit pas la démographie. Il
suit le rendement autorisé.

Là où le plafond mord le plus fort — c'est-à-dire là où les acquisitions sont
les plus récentes et les plus chères par rapport aux loyers de marché — le ratio
explose. Et c'est reproductible d'une commune à l'autre.

Ce que je pensais mesurer : la pression démographique sur le logement.
Ce que je mesure en réalité : la décision économique des propriétaires.

Deux implications qui changent le conseil que je donne.

Pour un bailleur : la rareté ne compense pas le plafond. Il y a très peu d'offre
locative, mais vous ne pouvez pas en tirer parti — le prix est plafonné par
votre propre prix d'achat, pas par le marché.

Pour un acheteur : le stock à vendre est structurel, pas conjoncturel. Il ne se
résorbera pas parce que les taux baissent.

**Coupe courte**
Ce que j'ai appris cette semaine :
Le ratio vente/location ne suit pas la démographie. Il suit le rendement
autorisé.
Pour un bailleur : la rareté ne compense pas le plafond.
Pour un acheteur : le stock à vendre est structurel, pas conjoncturel.
La pénurie locative est un artefact juridique.

---
---

# SEMAINE 8 · Le risque de localisation

## `w8-mon` · Lundi · Le chiffre — public

**Accroche**
Aucun indice de criminalité par quartier n'est publié au Luxembourg. Toute carte
de « sécurité par quartier » que vous verrez est une fabrication.

**Corps**
La Police Grand-Ducale diffuse des statistiques nationales et régionales. Pas de
ventilation par quartier.

C'est une question que les acheteurs posent presque systématiquement, surtout
quand ils viennent de l'étranger, et c'est une des rares où je n'ai strictement
rien à leur donner.

Je préfère le dire que le contourner.

La tentation est réelle de répondre à côté — « ce quartier a bonne réputation »,
« il n'y a pas de problème ici ». Ce sont des impressions présentées comme des
faits, et ce sont exactement les phrases qui font que personne ne peut vérifier
quoi que ce soit dans ce métier.

Ce que je recommande à la place : allez sur place à des heures différentes. Un
mardi à 8 h, un vendredi à 22 h, un dimanche après-midi. Vous en apprendrez plus
en trois visites qu'avec n'importe quelle carte colorée trouvée en ligne.

Un acheteur qui me demande si un quartier est sûr mérite « ce n'est pas publié,
allez-y le soir » plutôt qu'une invention rassurante.

**CTA**
Vous avez vu une carte de « sécurité par quartier » au Luxembourg quelque part ?
Envoyez-la-moi, je suis curieux de sa source.

**Coupe courte**
Criminalité par quartier au Luxembourg : zéro donnée publiée.
La Police Grand-Ducale diffuse au niveau national et régional uniquement.
Toute carte de « sécurité par quartier » ici est une fabrication.
Ce que je recommande : y aller un mardi 8 h, un vendredi 22 h, un dimanche
après-midi.

---

## `w8-tue` · Mardi · Le système — trade

**Accroche**
Mon module de veille affiche ce qu'il ne fait pas. Cette page existe pour fermer
la question.

**Corps**
— scraping d'URL : non
— collecte de contacts personnels : non
— création de profils : non
— envoi de messages : non
— sources : API autorisées, base d'accès conservée

Sur un marché où la donnée est rare, la tentation de la collecter n'importe
comment est réelle. Elle est même parfois présentée comme une astuce de
prospection.

J'ai préféré rendre la réponse visible dans l'interface plutôt que de la mettre
dans une documentation que personne ne lit. Chaque source conserve la preuve de
sa base d'accès et la date de connexion.

La raison n'est pas seulement juridique. Un outil qui collecte n'importe comment
produit une donnée qu'on ne peut pas citer — et une donnée qu'on ne peut pas
citer ne sert à rien dans une analyse dont tout l'argument est la traçabilité.

L'éthique et l'utilité pointent ici dans la même direction, ce qui rend la
décision facile.

**Coupe courte**
Ce que mon module de veille refuse de faire, affiché dans l'interface :
scraping d'URL · collecte de contacts personnels · création de profils · envoi
de messages.
Sources : API autorisées, base d'accès et date de connexion conservées.
Une donnée qu'on ne peut pas citer ne sert à rien dans une analyse traçable.

---

## `w8-wed` · Mercredi · Comment je vérifie — public · FLAGSHIP

**Accroche**
Les quatre vérifications que je fais avant toute offre. Aucune n'est
spectaculaire, et presque personne ne les fait toutes.

**Corps**
**1. Le passeport énergétique définitif.** Pas le provisoire. La prime de prix
repose dessus, et un classement dégradé change le positionnement du bien.

**2. Le budget du syndic et le fonds de réserve.** Une copropriété de cinq lots
répartit une toiture sur cinq quotes-parts au lieu de trente. La gouvernance est
plus simple ; la facture ne l'est pas.

**3. Le zonage de la parcelle.** PAG, PAP, zones inondables, et le CASIPO dans
le Sud. Quinze minutes sur geoportail.lu avant de s'engager sur trente ans.

**4. Les montants fiscaux auprès du notaire.** Bëllegen Akt, régime de
plus-value, plafonds de déduction. Trois chiffres qui ont bougé récemment et
qu'aucune simulation ne remplace.

Ce ne sont pas des précautions d'investisseur averti. C'est le minimum pour
l'achat d'une résidence principale.

Elles prennent une demi-journée au total, elles sont toutes gratuites, et
chacune d'entre elles a déjà, dans mon expérience, changé la décision de
quelqu'un.

Huit semaines que je publie des chiffres ici. Si vous ne retenez qu'un post,
retenez celui-là.

**CTA**
Vous êtes sur le point de faire une offre ? Envoyez-moi l'adresse, je vous dis
lesquelles des quatre sont déjà couvertes dans votre dossier.

**Coupe courte**
Les quatre vérifications avant toute offre :
1. Le passeport énergétique définitif (pas le provisoire)
2. Le budget du syndic et le fonds de réserve
3. Le zonage : PAG, PAP, zones inondables, CASIPO — geoportail.lu
4. Les montants fiscaux, confirmés par le notaire
Une demi-journée. Gratuit. Presque personne ne les fait toutes.

---

## `w8-thu` · Jeudi · Lecture de marché — public

**Accroche**
Acheter à Esch en pariant que Belval va tout tirer vers le haut, c'est arriver
quinze ans après le début de l'histoire.

**Corps**
— investissement cumulé sur Belval : **3,2 milliards d'euros**
— masterplan restant à développer : **moins de 15 %**
— engagé en infrastructure 2025-2026 : 180 millions d'euros
— prix à Belval-Université : 4 911 €/m², stable à −0,0 %
— loyer à Belval-Université : 15,75 €/m², faible

Le quartier qui porte tout le récit du renouveau du Sud se vend sous la moyenne
communale d'Esch et se loue mal.

Ce n'est pas un jugement sur Belval. C'est une lecture de cycle : l'essentiel de
l'effet de transformation a déjà été produit et déjà intégré dans les prix. Il
reste moins de 15 % du masterplan, et l'offre neuve y a rattrapé la demande.

L'argument « achetez ici, Belval va monter » a été juste pendant quinze ans. Il
décrit un mouvement largement terminé.

Ce qui reste intéressant dans le Sud se trouve ailleurs — Al-Esch, par exemple,
rendait 5,05 % dans mon relevé de juillet, contre 3,85 % à Belval-Université.

**CTA**
On vous vend un bien sur la promesse de Belval ? Demandez ce qui reste à
construire. Ou écrivez-moi, j'ai les chiffres.

**Coupe courte**
Belval : 3,2 milliards investis, moins de 15 % du masterplan restant.
Prix à Belval-Université : 4 911 €/m², stable à −0,0 %.
Loyer : 15,75 €/m², faible.
Le quartier qui porte tout le récit du Sud se vend sous la moyenne communale.
Sources : Fonds Belval · Paperjam · immotop.lu (juillet 2026).

---

## `w8-fri` · Vendredi · Note de build — trade

**Accroche**
Après huit semaines à publier des chiffres, la partie du système que j'utilise
le plus n'est pas le score.

**Corps**
C'est la liste des vérifications restantes. Chaque analyse se termine par ce
qu'elle ne sait pas encore :

— vérifications sur le bien : CPE définitif, syndic, zonage, travaux
— vérifications fiscales : Bëllegen Akt, plus-value, déductions
— vérifications financières : taux personnalisé, impôt foncier communal
— chaque ligne porte sa source et son statut

Un score dit où vous en êtes. La liste dit quoi faire demain matin.

Sur un marché sans registre de transactions, la seconde vaut plus que le
premier. Le score repose sur des données publiques que n'importe qui peut
contester ; la liste repose sur des documents que vous pouvez aller chercher et
qui, eux, ne se discutent pas.

C'est aussi la sortie que les clients lisent réellement. Le score, ils le
regardent. La liste, ils l'impriment.

Huit semaines de posts, une seule idée derrière : dans un marché où rien n'est
publié, la rigueur n'est pas un supplément d'âme. C'est le seul avantage
disponible.

**Coupe courte**
Après huit semaines de chiffres, la sortie que j'utilise le plus n'est pas le
score.
C'est la liste des vérifications restantes : bien, fiscalité, financement —
chaque ligne avec sa source et son statut.
Un score dit où vous en êtes. La liste dit quoi faire demain matin.
Le score, ils le regardent. La liste, ils l'impriment.

---
---

## Mentions à garder sous la main

**Sur les chiffres**
> Chiffres vérifiés au 05/08/2026. Sources : Observatoire de l'Habitat, STATEC,
> BCL, pfi.public.lu, immotop.lu. À réactualiser trimestriellement.

**Sur les montants fiscaux**
> Montants indicatifs. Le Bëllegen Akt, le régime de plus-value et les plafonds
> de déduction ont été modifiés récemment : faites confirmer par votre notaire
> avant toute décision.

**Sur les analyses**
> Analyse à titre informatif, sans valeur d'expertise ni de conseil en
> investissement.

**Ce qu'on ne publie jamais**
- Aucune analyse critique d'une annonce nommée ou identifiable.
- Aucune capture des écrans `/prospecting`, `/crm` ou `/kanban` sans recadrage
  à partir de ~20 % de la largeur : ils affichent des noms et adresses de
  particuliers.
- Aucun chiffre sans source. S'il n'y en a pas, le post ne sort pas.
