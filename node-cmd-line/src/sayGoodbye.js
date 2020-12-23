'use strict'
/*
Ecrivez un script sayGoodbye.js qui prend en argument de la ligne de commande
une string et affiche un message comme ci-dessous: % node sayGoodbye.js React
Goodbye, React
*/

const sayGoodbye = (name) => {
    console.log(`Goodbye, ${name}`)
}
// Verifier qu'il n'y a qu'un seul argument passé à notre programme
if (process.argv.length !== 3) {
    console.log('usage sayGoodbye string')
    process.exit(1)
}

// Verifier que l'argument passé à notre programme n'est pas undefined, null ou ''
if (
    process.argv[2] === 'undefined' ||
    process.argv[2] === 'null' ||
    process.argv[2] === ''
) {
    console.log(`Error: ${process.argv[2]} is not a valid name.`)
    process.exit(1)
}

let string = process.argv[2]
sayGoodbye(string)
