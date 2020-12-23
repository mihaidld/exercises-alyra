"use strict";
// pose la question jusqu'au moment ou l'utilisateur entre la valeur numérique
// affiche le message "Merci, nous avons noté que tu as .. ans.

/*const question = "Quel âge as tu ?";
let age;
do {
  age = prompt(question);
} 
while(!isFinite(age))
alert(`Merci, nous avons noté que tu as ${age} ans`);*/
//while (isNaN(age));

/*while (isNaN(age)) {
  age = prompt(question);
}*/

/*function ask() {
  const question = "Quel âge as tu ?";
  let age;
  do {
    age = prompt(question);
  } while (!isFinite(age));
  alert(`Merci, nous avons noté que tu as ${age} ans`);
}
*/ function ask() {
  const question = "Quel âge as tu ?";
  let age;
  while (isNaN(age)) {
    age = prompt(question);
  }
  alert(`Merci, nous avons noté que tu as ${age} ans`);
}
