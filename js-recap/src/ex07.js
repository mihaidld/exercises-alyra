'use strict'
/* 
En partant de l'exercice précédent ecrivez une fonction calc qui prend 3
paramètres: 1 string qui correspondra à l'opérateur arithmétique et 2 nombres
sur lesquels on appliquera l'opérateur. La fonction calc devra utiliser les
fonctions définies dans l'exercice précédent.
*/

const add = (number1, number2) => number1 + number2
const sub = (number1, number2) => number1 - number2
const mul = (number1, number2) => number1 * number2
const div = (number1, number2) => number1 / number2

const calc = (strOperator, number1, number2) => {
    switch (strOperator) {
        case '+':
            return add(number1, number2)
        case '-':
            return sub(number1, number2)
        case '*':
            return mul(number1, number2)
        case '/':
            return div(number1, number2)
        default:
            console.log(
                "please choose an operator among: '+', '-', '*' and '/'"
            )
    }
}

let nb1 = calc('+', 10, 11)
console.log(nb1) // nb1 === 21
let nb2 = calc('-', 6, 4)
console.log(nb2) // nb2 === 2
let nb3 = calc('*', 4, 5)
console.log(nb3) // nb3 === 20
let nb4 = calc('/', 10, 2)
console.log(nb4) // nb4 == 5
let nb5 = calc('**', 10, 2) // message
