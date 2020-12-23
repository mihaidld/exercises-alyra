"use strict";
let a;
let b;

do {
  a = prompt("Choisis une valeur numerique a");
} while (isNaN(a));

do {
  b = prompt("Choisis une valeur numerique b");
} while (isNaN(b));

//on va créer une simple calculatrice qui fait l'addition
/* demande a jusqu'au moment où tu obtiennes une valeur numérique */
/* demande b jusqu'au moment où tu obtiennes une valeur numérique */

/* fais l'addition et affiche le résultat */
let addition = Number(a) + Number(b);
alert(addition);
