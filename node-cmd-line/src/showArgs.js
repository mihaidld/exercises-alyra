'use strict'
/*
Ecrivez un script showArgs.js qui prend en arguments de la ligne de commande
plusieurs strings et les affiche dans l'ordre inverse de leur ordre d'entrée: %
node showArgs.js 1 2 3 Soleil Soleil 3 2 1
*/

// Verifier qu'il y a au moins un argument passé à notre programme
if (process.argv.length < 3) {
    console.log('usage: please enter at least one argument')
    process.exit(1)
}

/* let list = []
process.argv.forEach((element, index) => {
    if (index > 1) {
        list.push(element)
    }
})
list.reverse()
for (let el of list) {
    console.log(el)
} */

process.argv
    .slice(2)
    .reverse()
    .forEach((element) => {
        console.log(element)
    })
