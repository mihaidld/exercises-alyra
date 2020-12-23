"use strict";
const question = "Quel âge as tu ?";
let age, message;

do {
  age = prompt(question);
} //while (isNaN(age));
while(!isFinite(age))

// pose la question jusqu'au moment ou l'utilisateur entre la valeur numérique
// affiche le message "Merci, nous avons noté que tu as .. ans.
/*while (isNaN(age)) {
  age = prompt(question);
}*/
alert(`Merci, nous avons noté que tu as ${age} ans`);
