# Convention — rapport immobilier interactif sur tout site Vercel

**Règle permanente.** Tout site immobilier que nous déployons sur Vercel
embarque l'analyse `/realestate` du bien sous forme de **page live
interactive**, pas de PDF ni de markdown collé. Cela vaut pour le site de
l'appartement d'Esch comme pour tous les suivants.

## Ce que « interactif » veut dire ici

La page n'est pas une mise en page du rapport : c'est le **modèle financier
lui-même**, exécuté dans le navigateur. Le visiteur déplace le prix, la
quotité de financement, le taux, la durée, le loyer au m², et tous les
montants se recalculent — plafond légal de loyer, cash à la signature,
cash-flow, DSCR, rendements, point mort.

C'est ce qui distingue un livrable client d'un rapport statique : l'acquéreur
teste **son** hypothèse de prix, pas la nôtre.

## Fichiers

| Fichier | Rôle |
|---|---|
| `idepub-site/lib/property-report.ts` | Types et moteur de calcul. Sans JSX, sans dépendance : importable côté serveur comme client. |
| `idepub-site/lib/reports/<slug>.ts` | Les données d'un bien, converties depuis le markdown `/realestate analyze`. |
| `idepub-site/lib/reports/index.ts` | Registre des rapports publiés. |
| `idepub-site/components/PropertyReport.tsx` | Le rendu interactif complet. Générique : il ne connaît aucun bien en particulier. |
| `idepub-site/app/rapport/[slug]/page.tsx` | Route SSG, métadonnées, `generateStaticParams`. |

## Ajouter un bien

1. Produire l'analyse : `/realestate analyze <adresse>`.
2. Créer `idepub-site/lib/reports/<slug>.ts` exportant un `RapportImmobilier`.
   Reprendre `niederkorn-12-rue-de-la-gare.ts` comme gabarit.
3. L'enregistrer dans `lib/reports/index.ts`.
4. La route `/rapport/<slug>` est prérendue automatiquement au build.

Le composant est agnostique du bien : aucun code React à écrire pour un
nouveau rapport, seulement des données.

## Règles de contenu qui ne se négocient pas

Elles viennent de `~/.claude/skills/realestate/references/luxembourg.md` et
sont la raison d'être du modèle séparé :

- **Le plafond légal de loyer prime sur le loyer de marché.** 5 % du capital
  investi réévalué (loi du 21/09/2006). Le projet de loi 8184 le ramènerait à
  3,5 % pour les nouveaux baux — la page doit permettre de simuler les deux.
- **Le plafond est proportionnel au prix.** Négocier le prix à la baisse baisse
  le loyer perceptible d'autant. C'est contre-intuitif pour qui vient d'un
  modèle anglo-saxon, et c'est pourquoi la page l'explique au lieu d'afficher
  un « prix d'équilibre » qui n'existe pas toujours.
- **Le cash à la signature est la contrainte, pas l'apport.** Les 7 % de droits
  se paient en liquide même à 100 % de financement. Le Bëllegen Akt ne
  s'applique qu'à la résidence principale et doit être désactivé en locatif.
- **L'impôt foncier luxembourgeois est très faible.** Ne jamais porter
  l'hypothèse américaine de 1 à 2 % de la valeur par an.
- **Toute figure non vérifiée est marquée comme telle** et reprise dans la
  checklist de vérification en bas de page.
- **Aucune donnée inventée.** Pas d'indice de criminalité par quartier, pas de
  délai de vente, pas de mois de stock : ces séries ne sont pas publiées au
  Luxembourg. La page dit « non disponible ».

## Confidentialité

La route est en `robots: { index: false, follow: false }`. Un rapport porte le
prix d'offre recommandé et la stratégie de négociation : il se partage par lien,
il ne s'indexe pas. Si un bien doit être rendu public, retirer explicitement le
`robots` de sa page.

## Développement local

```bash
npm --prefix idepub-site run dev -- -p 3012
```

`idepub-site` est un projet Next autonome imbriqué dans le dépôt : il a son
propre `package-lock.json` et son propre `node_modules`, exactement comme
Vercel le construit avec Root Directory = `idepub-site`. La racine Turbopack
est ancrée sur le fichier de config et non sur `process.cwd()`, sans quoi le
serveur remonte d'un cran et compile le `proxy.ts` du dépôt racine.

Si le serveur affiche des erreurs de résolution de modules dans
`node_modules/next`, supprimer `idepub-site/.next` : c'est un cache pollué par
un lancement au mauvais répertoire courant.
