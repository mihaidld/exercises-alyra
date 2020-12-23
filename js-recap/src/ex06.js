'use strict'
/* 
Ecrivez 4 fonctions add, sub, mul, div qui prennent 2 nombres en paramètres et
qui retournent le resultat de l'operation attendue.

*/
const add = (number1, number2) => number1 + number2
const sub = (number1, number2) => number1 - number2
const mul = (number1, number2) => number1 * number2
const div = (number1, number2) => {
    if (number2 !== 0) {
        return number1 / number2
    }
}

let nb1 = add(10, 11)
console.log(nb1) // nb1 === 21
let nb2 = sub(6, 4)
console.log(nb2) // nb2 === 2
let nb3 = mul(4, 5)
console.log(nb3) // nb3 === 20
let nb4 = div(10, 2)
console.log(nb4) // nb4 === 5
