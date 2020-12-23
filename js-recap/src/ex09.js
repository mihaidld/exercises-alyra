'use strict'
/* 
Ecrivez une fonction biggest qui retourne le plus grand élément d'une liste de
nombres.
*/

//const biggest = (array) => Math.max(...array)

const biggest = (array) => {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}

console.log(biggest([99, 100, 101, 1])) // returns 101
