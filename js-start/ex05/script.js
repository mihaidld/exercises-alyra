"use strict";
/* Créer une variable question 'De quelle année date ECMA6 (ECMAScript-2015) ?'
Créer une variable answer, affecter lui la réponse à la question */
const question = "De quelle année date ECMA6 (ECMAScript-2015) ?";
let answer = prompt(question);
console.log(answer);
/* Créer la variable message qui va prender 'Bravo, c'est une bonne réponse !
ou 'Ce n'est pas une bonne réponse 🤔'
*/
let message;
answer == 2015
  ? (message = "Bravo, c'est une bonne réponse !")
  : (message = "Ce n'est pas une bonne réponse 🤔");
/* afficher message */
alert(message);
