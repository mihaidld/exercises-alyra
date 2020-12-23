"use strict";

//document.body.style.background = "magenta";
/*document.body.style.opacity = 0
document.body.style.transition = "1s"
*/

/*1. Le contenu de body apparait avec transition
setTimeout cree un delai de 1000 milisecondes, opacity 1 dans fonction callBack */
setTimeout(() => {
  document.body.style.opacity = 1; //style inline force 1000
}, 500);

//4  L'intro-criteres contient l'information sur le nombre de critères
const pIntroEl = document.getElementById("intro-criteres");
const criteres = document.querySelectorAll("#liste-criteres li");
console.log(criteres);
console.log(criteres.length);

pIntroEl.textContent = `Nous avons préparés ${criteres.length} critères pour faciliter votre choix !`;

//5. quand je click sur le bouton info , j' ai des informations: affiche le titre (lang) et URL de la page
const infoBtn = document.getElementById("info-btn");
//const infoBtn = document.querySelector("#info-btn")
/*const infoBtnClickHandler = () => {
  console.dir(document);
  alert(
    `Le titre de cette page est "${document.title}" (${document.documentElement.lang}), son URL est ${document.URL}`
  );
};
infoBtn.addEventListener("click", infoBtnClickHandler);*/
if (infoBtn) {
  infoBtn.addEventListener("click", () => {
    console.dir(document);
    alert(
      `Le titre de cette page est "${document.title}" (${document.documentElement.lang}), son URL est ${document.URL}`
    );
  });
}
//6 et 7. Le panneau publicitaire disparait en click, Le panneau publicitaire disparait en click sur le bouton

const pubEl = document.getElementById("pub");
//const pubEl=document.querySelector("#pub")
/*pubEl.addEventListener("click", () => {
  //on ne veut plus avoir l'element
  pubEl.remove();
  //pubEl.hidden = true;
});*/
const pubBtn = document.getElementById("pub-btn");
pubBtn?.addEventListener("click", () => {
  //on ne veut plus avoir l'element pubEl
  pubEl.remove();
  //pubEl.hidden = true;
});

//8. Le bouton 😎 regénere la tagline
/*2. La propriété background-color de l'élément header est aléatoire ["hotpink", "tomato", "orange"]*/
//3  Le tagline est aléatore ['Hello', 'Salut', 'Hola', 'Cześć']
const headerEl = document.getElementById("header");
const tagline = document.getElementById("tagline");

const generateHeader = () => {
  const colors = ["hotpink", "tomato", "orange"];
  const randomIndexColor = Math.floor(Math.random() * colors.length);
  const messages = ["Hello", "Salut", "Hola", "Cześć"];
  const randomIndexMessage = Math.floor(Math.random() * messages.length);
  //headerEl.style.backgroundColor = colors[randomIndexColor];

  headerEl.setAttribute(
    "style",
    `background-color:${colors[randomIndexColor]}!important;`
  );
  
  tagline.textContent = messages[randomIndexMessage];
};
generateHeader();

const headerBtn = document.querySelector("#header button");
if (headerBtn) {
  headerBtn.addEventListener("click", generateHeader);
}

//9. Et si on voulait désactiver tous les boutons ?
//const buttons=document.querySelectorAll("button")
const buttons = document.getElementsByTagName("button");
console.log(buttons);

for (let button of buttons) {
  button.disabled = true;
}
//10. attacher a la fin du doc un paragraphe avec class text-center et contenu "ce site n'utilise"
const pCookies = document.createElement("p");
pCookies.textContent = "Ce site n'utilise pas de cookies";
console.log(pCookies);
console.dir(pCookies);
document.body.append(pCookies);
//pubEl.append(pCookies);

pCookies.className = "text-center";

console.log(headerEl.className);
console.log(headerEl.classList);
