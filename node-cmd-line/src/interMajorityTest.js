/*
 interMajorityTest.js:
Le programme précedent ne fonctionnera que dans les pays ou la majorité est à 18 ans.
Afin que votre programme puisse fonctionner pour tous les pays, réecrivez le programme précedent pour qu'il puisse prendre un argument à son lancement en ligne de commande qui correspondera à l'age de la majorité dans le pays de l'utilisateur du programme.
Un utilisateur américain lancerait le programme avec la commande:

% node interMajorityTest.js 21
Un utilisateur francais lancerait le programme avec la commande:

% node interMajorityTest.js 18
Si l'âge est inférieur à l'argument passé en ligne de commande lui afficher avec le prenom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter
Si l'âge est supérieur ou égal à l'argument passé en ligne de commande lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter
*/
import readlineSync from 'readline-sync'

// Verifier qu'il n'y a qu'un argument passé à notre programme
if (process.argv.length !== 3) {
    console.log('usage: node interMajorityTest.js majorityAge')
    process.exit(1)
}

// Verifier que l'argument passé à notre programme peut être converti en nombre et n'est pas Infinity
if (!isFinite(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a valid number.`)
    process.exit(1)
}

// Verifier que l'argument passé à notre programme est superieur a 0
if (process.argv[2] < 0) {
    console.log(`Usage: the majorityAge number should be superior to 0.`)
    process.exit(1)
}

// Verifier que l'argument passé à notre programme est entier
if (Math.floor(process.argv[2]) != process.argv[2]) {
    console.log(`Usage: the majorityAge number should be an integer.`)
    process.exit(1)
}

let majorityAge = Number(process.argv[2])

while (true) {
    let name = readlineSync.question('Quel est votre nom de famille?')
    let surname = readlineSync.question('Quel est votre prenom?')
    let age_str = readlineSync.question('Quel est votre age?')
    let age = Number(age_str)
    // Verifier que l'age peut être converti en nombre et n'est pas Infinity
    if (!isFinite(age_str)) {
        console.log(`Error: ${age_str} is not a valid number.`)
        continue
    }
    if (age < majorityAge) {
        console.log(
            `Désolé, ${surname} ${name}, vous êtes mineur, vous ne pouvez pas voter`
        )
        break
    } else {
        console.log(`${surname} ${name}, vous êtes majeur, vous pouvez voter`)
        break
    }
}
