'use strict'
/*
Ecrivez une programme counter qui prend 3 arguments en ligne de commande: un
nombre min pour le début du counter un nombre max pour la fin du counter un
nombre step pour le pas/interval du counter L'execution de ce programme devra
afficher sur le terminal tous les nombres de min jusqu'a max avec un interval de
step:

% node counter.js 1 10 2 
1 3 5 7 9 
% node counter.js 100 1000 100 
100 200 300 400 500 600 700 800 900 1000
*/

// Verifier qu'il n'y a que 3 arguments passés à notre programme
if (process.argv.length !== 5) {
    console.log('usage: node showStars.js min max step')
    process.exit(1)
}
// Verifier que le premier argument passé à notre programme peut être converti en nombre et n'est pas Infinity
if (!isFinite(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a valid number.`)
    process.exit(1)
}
// Verifier que le second argument passé à notre programme peut être converti en nombre et n'est pas Infinity
if (!isFinite(process.argv[3])) {
    console.log(`Error: ${process.argv[2]} is not a valid number.`)
    process.exit(1)
}
// Verifier que le troisieme argument passé à notre programme peut être converti en nombre et n'est pas Infinity
if (!isFinite(process.argv[4])) {
    console.log(`Error: ${process.argv[2]} is not a valid number.`)
    process.exit(1)
}

// Verifier que le second argument passé à notre programme est superieur ou egal au premier
if (Number(process.argv[2]) > Number(process.argv[3])) {
    console.log(
        `Usage: premier nombre min doit etre inferieur au second nombre max.`
    )
    process.exit(1)
}

let min = Number(process.argv[2])
let max = Number(process.argv[3])
let step = Number(process.argv[4])
for (let i = min; i <= max; i += step) {
    console.log(i)
}
