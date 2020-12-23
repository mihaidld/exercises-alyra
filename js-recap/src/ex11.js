'use strict'
/*
Ecrivez une fonction makeUnique qui prend comme paramètre une liste et enlève
tous les doublons, et retourne cette cette liste classée par ordre croissant.
*/

const makeUnique = (array) => {
    let list = []
    for (let element of array) {
        if (!list.includes(element)) {
            list.push(element)
        }
    }
    return list.sort((a, b) => a - b)
}

console.log(makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1])) //returns [1, 2, 3, 4, 5, 7]
