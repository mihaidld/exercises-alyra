'use strict'
/*
Ecrivez un script showInvStars.js qui prend en argument de la ligne de commande
un nombre et affiche sur le terminal une pyramide comme ci-dessous:

% node showInvStars.js 3
***
**
*
% node showInvStars.js 10
**********
*********
********
*******
******
*****
****
***
**
*
*/

const showInvStars = (nbStars) => {
    for (let i = nbStars; i > 0; i -= 1) {
        console.log('*'.repeat(i))
    }
}

// Verifier qu'il n'y a qu'un seul argument passé à notre programme
if (process.argv.length !== 3) {
    console.log('usage: node showStars.js number')
    process.exit(1)
}
// Verifier que l'argument passé à notre programme peut être converti en nombre et n'est pas Infinity
if (!isFinite(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a valid number.`)
    process.exit(1)
}

// Verifier que l'argument passé à notre programme est un nombre positif >0
if (process.argv[2] <= 0) {
    console.log(
        `Error: ${process.argv[2]} is negative or 0. The number entered needs to be a strictly positive number.`
    )
    process.exit(1)
}

let nb = Number(process.argv[2])
showInvStars(nb)
