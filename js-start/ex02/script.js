// mets en place mode strict
`use script`;
// déclare une variable greetings égale à 'Bonjour'
const greetings = "Bonjour";
// déclare la variable name et affecte la réponse à la question 'Comment tu t'appelles ?'
const question = "Comment tu t'appelles ?";
console.log(question);
const name = prompt(question);
console.log(name);
// déclare la variable message qui combine les variables greetings et name
let message = `${greetings} ${name} !`;
// affiche message
alert(message);
