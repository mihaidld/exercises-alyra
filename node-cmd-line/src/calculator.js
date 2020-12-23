'use strict'
/*
Ecrivez un script calculator.js qui effectue en ligne de commande des opérations
arithmétiques simples:

% node calculator.js + 10 21
31 
% node calculator.js - 10 1 
9 % 
node calculator.js * 5 4 
20 
% node calculator.js / 10 2 
5
*/

const add = (number1, number2) => number1 + number2
const sub = (number1, number2) => number1 - number2
const mul = (number1, number2) => number1 * number2
const div = (number1, number2) => {
    // Eviter une division par 0
    if (number2 !== 0) {
        return number1 / number2
    } else {
        console.log(`Error: division by 0.`)
        process.exit(1)
    }
}

const calculator = (strOperator, number1, number2) => {
    switch (strOperator) {
        case '+':
            console.log(add(number1, number2))
            break
        case '-':
            console.log(sub(number1, number2))
            break
        case '*':
            console.log(mul(number1, number2))
            break
        case '/':
            console.log(div(number1, number2))
            break
        default:
            console.log('')
    }
}

const OPERATOR_LIST = ['+', '-', '*', '/']
//  Verifier que c'est un des 4 operateurs que le programme peut utiliser
if (!OPERATOR_LIST.includes(process.argv[2])) {
    console.log(
        `Error: not an integrated operator. Please choose an operator among: ${OPERATOR_LIST}`
    )
    process.exit(1)
}

// Remplacer * par '*' pour multiplication
if (process.argv[2].length !== 1) {
    console.log(
        `Error: not an integrated operator. For * usage: node calculator.js '*' number1 number2`
    )
    process.exit(1)
}

// Verifier qu'il n'y a que 3 arguments passés à notre programme
if (process.argv.length !== 5) {
    console.log('usage: node calculator.js operator number1 number2')
    process.exit(1)
}
// Verifier que le deuxieme argument passé à notre programme puisse être converti en nombre et n'est pas Infinity
if (!isFinite(process.argv[3])) {
    console.log(`Error: ${process.argv[3]} is not a valid number.`)
    process.exit(1)
}

// Verifier que le troisieme argument passé à notre programme puisse être converti en nombre et n'est pas Infinity
if (!isFinite(process.argv[4])) {
    console.log(`Error: ${process.argv[4]} is not a valid number.`)
    process.exit(1)
}

let operator = process.argv[2]
let nb1 = Number(process.argv[3])
let nb2 = Number(process.argv[4])

calculator(operator, nb1, nb2)
