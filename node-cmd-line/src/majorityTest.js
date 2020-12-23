/*
Un état vous demande d'ecrire un petit programme qui vérifit que les citoyens
ont le droit de voter. Ecrivez un programme qui demande l'utilisateur son nom,
son prenom, son age. Si l'âge est inférieur à 18 lui afficher avec le prenom et
nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter

Si l'âge est supérieur ou égal à 18 lui afficher: prenom nom, vous êtes majeur,
vous pouvez voter
*/

import readlineSync from 'readline-sync'

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
    if (age < 18) {
        console.log(
            `Désolé, ${surname} ${name}, vous êtes mineur, vous ne pouvez pas voter`
        )
        break
    } else {
        console.log(`${surname} ${name}, vous êtes majeur, vous pouvez voter`)
        break
    }
}
