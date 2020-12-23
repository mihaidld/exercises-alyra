"use strict";
/*const question = "Quel est le nom de ton école ?"
let answer
do{
answer=prompt(question)
} while (answer!=="Alyra")
alert("Yay, nous sommes dans la meme ecole !")
// pose la question jusqu'au moment ou l'utilisateur entre Alyra (la reponse est 'Alyra')
// exprime ton enthousiasme
*/

function ask() {
  const question = "Quel est le nom de ton école ?";
  let answer;
  do {
    answer = prompt(question);
  } while (answer !== "Alyra");
  alert("Yay, nous sommes dans la meme ecole !");
}
