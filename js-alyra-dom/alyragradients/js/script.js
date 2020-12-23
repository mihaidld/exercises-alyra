"use strict";

/* 
le script gradients.js est chargé avant script.js
la variable gradients est disponible - vous pouvez le voir dans la console
*/
console.log(gradients);

/* dans le paragraphe #intro afficher la phrase 
Voici une collection de ... dégradés prêts à utiliser dans vos feuilles de styles

ou ... correspond au nombre de dégradés */
const pIntro = document.getElementById("intro");
pIntro.textContent = `Voici une collection de ${gradients.length} dégradés prêts à utiliser dans vos feuilles de styles`;
/* header : ajouter la propriété backgroundImage au style de header
linear-gradient(90deg, .., ..) ou ... correspondent aux couleurs start et end
d'un des objet de l'array gradients (choix aléatoire)
*/
const headerEl = document.getElementById("header");
/*on peut sortir headerEl de la fonction puisqu'il ne change pas avec la
fonction, on met dans la fonction tout ce qui change lorsqu'on appelle la
fonction, on garde const random a l'interieur pour generer chaque fois un
random number et changer le style linear-gradient*/
const generateHeader2 = () => {
  const randomIndexGradient = Math.floor(Math.random() * gradients.length);
  headerEl.style.backgroundImage = `linear-gradient(90deg,${gradients[randomIndexGradient].start}, ${gradients[randomIndexGradient].end})`;
};
generateHeader2();
/*on recupere l' element avec id="header", cree une variable qui a une valeur
aleatoire de 0 au nombre de gradients dans la liste gradients -1, on utilise
backticks pour recuperer dans un string la propriete CSS ex.
"linear-gradient(#e66465, #9198e5)" ou les couleurs sont les valeurs des keys
start et end de chaque gradient*/
/*headerEl.setAttribute(
  "style",
  `background-image:linear-gradient(90deg,${gradients[randomIndexGradient].start}, ${gradients[randomIndexGradient].end})`
);*/
// Le bouton #header-button permet de regénérer le header (=changer le dégradé)
const headerBtn2 = document.getElementById("header-button");
headerBtn2?.addEventListener("click", generateHeader2);
