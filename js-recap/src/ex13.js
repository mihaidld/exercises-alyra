'use strict'
/*
Ecrivez un programe qui affiche tous les nombres de 0 à 1000 en utilisant une
fonction récursive. Vous devez absolument utiliser une fonction récursive pour
résoudre ce problème. Une fonction récursive est une fonction qui s'appelle elle
même. 
*/
const showNumbers = (fromNumber = 0, toNumber = 1000) => {
    console.log(fromNumber)
    let nextNumber = fromNumber + 1
    if (nextNumber <= toNumber) {
        showNumbers(nextNumber, toNumber)
    }
}
showNumbers()
