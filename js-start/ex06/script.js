"use strict";
const question = "De quelle année date ECMA6 (ECMAScript-2015) ?";
const answer = prompt(question);
// utilise console.log pour vérifier le type de answer
console.log(answer);
console.log(typeof answer);
// On peut utiliser la fonction isNaN(answer) ou isFinite(number) pour vérifier si la saisie est numérique
console.log(isFinite(answer));
// affiche un de messages suivants selon le cas :
// Vous n'avez pas saisi de valeur numérique correcte
// Non, c'était plus tard
// Non, c'était avant
// Bravo, c'est une bonne réponse !
/*let message
switch(answer){
    case isNaN:
        alert('Vous n'avez pas saisi de valeur numérique correcte')
        break;
        case ==2015:
            alert(Bravo, c'est une bonne réponse !)
            break;
            

}*/
let message =
  isFinite(answer) === false
    ? "Vous n'avez pas saisi de valeur numérique correcte"
    : answer == 2015
    ? "Bravo, c'est une bonne réponse !"
    : answer > 2015
    ? "Non, c'était avant"
    : "Non, c'était plus tard";
/*if (isFinite(answer)===false)) {
    message = "Vous n'avez pas saisi de valeur numérique correcte"
} else if (answer == 2015) {
    message = "Bravo, c'est une bonne réponse !" 
}  else ( if (answer > 2015) {
message = "Non, c'était avant"
} else {
    message = "Non, c'était plus tard"
    
} )*/
console.log(message);
alert(message);
