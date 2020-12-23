'use strict'
/*
Ecrivez un script oddTest.js qui vérifie si l'argument passé en ligne de commande est impair:
% node oddTest.js 7
7 est un nombre impair
% node oddTest.js 10
10 est un nombre pair
*/

// Verifier qu'il n'y a qu'un seul argument passé à notre programme
if (process.argv.length !== 3) {
    console.log('usage: node oddTest.js number')
    process.exit(1)
}
// Verifier que l'argument passé à notre programme peut être converti en nombre et n'est pas Infinity
if (!isFinite(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a valid number.`)
    process.exit(1)
}

let number = process.argv[2]
number % 2 === 0
    ? console.log(`${number} est un nombre pair`)
    : console.log(`${number} est un nombre impair`)
