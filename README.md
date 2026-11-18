# Portfolio Amadou Doussa Hafsatou

Site personnel bilingue (français et anglais) d'Amadou Doussa Hafsatou, élève ingénieure Big Data & IA à JUNIA ISEN.

En ligne : https://doussa29.github.io/portfolio_Doussa.github.io/

Le site est en HTML, CSS et JavaScript natifs, sans framework ni étape de build. GitHub Pages le sert tel quel.

## Arborescence

```
index.html              structure de la page (textes français par défaut)
assets/css/style.css    styles (variables de couleurs, typographie et espacements en haut du fichier)
assets/js/i18n.js       tous les textes du site en français et en anglais
assets/js/projects.js   données des projets (cartes et fenêtres de détail)
assets/js/main.js       navigation, menu mobile, thème, filtres, fenêtre de détail
assets/img/             photo, logos, favicon ; captures des projets dans assets/img/projets/
assets/docs/            CV en PDF : CV_FR.pdf et CV_EN.pdf
```

## Lancer le site en local

Il suffit d'ouvrir `index.html` dans un navigateur. Pour être au plus près de GitHub Pages, lancez plutôt un petit serveur à la racine du dossier :

```bash
python -m http.server 8000
```

puis ouvrez http://localhost:8000.

## Mettre à jour le contenu

**Un texte du site** : dans `assets/js/i18n.js`, modifiez la valeur de la clé dans le bloc `fr` ET dans le bloc `en`. Dans `index.html`, l'élément relié porte `data-i18n="la.cle"`. Pensez à mettre aussi le texte français dans `index.html`, car il s'affiche si JavaScript est désactivé.

**Un projet** : dans `assets/js/projects.js`, copiez un bloc `{ ... }` et remplissez les champs.
- `categories` : `"bi"` (Data Analyst / BI), `"eng"` (Data Engineering), `"ds"` (IA & Data Science). Un projet peut en avoir plusieurs.
- `image` : chemin d'une capture, par exemple `"assets/img/projets/mdm.png"` (format 16/9 conseillé) ou une URL. Le texte alternatif se met dans `imageAlt`, en `fr` et en `en`.
- `github` : lien du dépôt, ou `null` pour ne pas afficher de lien.
- `ongoing: true` affiche l'étiquette « En cours ».

**Le CV** : remplacez `assets/docs/CV_FR.pdf` et `assets/docs/CV_EN.pdf` en gardant ces noms. Le bouton « Télécharger mon CV » propose le fichier qui correspond à la langue choisie.

**Les couleurs** : modifiez les variables en haut de `assets/css/style.css` (thème clair, puis thème sombre).

## Fonctionnalités

- Bascule FR / EN : tout le site change de langue (textes, projets, attributs alt, titre de l'onglet, meta description, lien du CV). Le choix est retenu dans le navigateur.
- Thème clair ou sombre, qui suit le système par défaut.
- Section active surlignée dans le menu, menu burger sur mobile.
- Projets filtrables par catégorie, avec une fenêtre de détail qui se ferme avec Échap.
- Pas d'animation si l'utilisateur a activé la réduction des mouvements.

## Mise en ligne

Le site est publié par GitHub Pages depuis la branche `main`, à la racine du dépôt. Chaque push sur `main` met le site à jour en une ou deux minutes.
