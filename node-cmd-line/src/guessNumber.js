/*
Ecrivez un petit jeu qui demande à un utilisateur de trouver un nombre qui aura
été passé en ligne de commande. Le programme s'éxecutera tant que l'utilisateur
n'aura pas trouvé le bon nombre. Après chaque tentative de l'utilisateur pour
trouver le nombre secret, celui entré en argument du programe à son lancement,
les messages suivant lui appaitront:

si le nombre entré par l'utilisateur est plus petit que le nombre secret:'Nombre
trop petit' en rouge si le nombre entré par l'utilisateur est plus grand que le
nombre secret: 'Nombre trop grand' en rouge si le nombre entré par l'utilisateur
est égal au nombre secret: 'Bravo!' en vert
*/
import readlineSync from 'readline-sync'
import chalk from 'chalk'

// Verifier qu'il n'y a qu'un argument passé à notre programme
if (process.argv.length !== 3) {
    console.log('usage: node guessNumber.js number')
    process.exit(1)
}

// Verifier que l'argument passé à notre programme peut être converti en nombre et n'est pas Infinity
if (!isFinite(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a valid number.`)
    process.exit(1)
}

let cmdNumber = Number(process.argv[2])

while (true) {
    let userNumber_str = readlineSync.question('Devinez le nombre secret')
    let userNumber = Number(userNumber_str)
    // Verifier que le nombre de l'utilisateur peut être converti en nombre et n'est pas Infinity
    if (!isFinite(userNumber_str)) {
        console.log(`Error: ${userNumber_str} is not a valid number.`)
        continue
    }
    if (userNumber < cmdNumber) {
        console.log(chalk.red('Nombre trop petit'))
        continue
    } else if (userNumber > cmdNumber) {
        console.log(chalk.red('Nombre trop grand'))
        continue
    } else {
        console.log(chalk.green('Bravo!'))
        break
    }
}
