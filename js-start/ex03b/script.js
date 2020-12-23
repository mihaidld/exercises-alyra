/* refactor le code d'ex. 2 en introduisant 3ème variable jsAge
si ce n'était pas le cas utilise template litterals `... ${} ....`
*/
// mets en place mode strict
`use strict`;
// déclare la variable message
let message;
// déclare la variable age
let age;
// pose la question "Quel age as-tu ?" et affecte la réponse à la variable age
let question = `Quel age as-tu ?`;
console.log(question);
age = prompt(question);
//age = prompt(`Quel age as-tu ?`);
console.log(age);
// affecte à la variable message le texte suivant "Tu as .. ans et JavaScript a 25 ans."
let jsAge = 25;
console.log(jsAge);
message = `Tu as ${age} ans et JavaScript a ${jsAge} ans.`;
// affiche le message
alert(message);
// augemente l'age de 1
age = Number(age) + 1;
jsAge = jsAge + 1;
console.log(age);
console.log(jsAge);
// change la valeur de message "L'année prochaine t'auras .. ans et JavaScript aura 26 ans."
message = `L'année prochaine t'auras ${age} ans et JavaScript aura ${jsAge} ans.`;
// affiche le message
alert(message);
