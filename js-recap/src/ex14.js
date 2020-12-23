'use strict'
/* 
Un industriel vous demande un programe pour gérer ses distributeurs de boissons
installés dans tous les métro de France. Ecrivez une fonction qui prend comme
paramètre une somme en Euro et un code d'identification de boisson, par example:
1 pour eau, 2 pour soda, 3 pour café, 4 pour thé, etc... et essayez
d'implementer le processus d'achat d'une boisson depuis cet automate. Faites
preuve d'imagination.
*/

const PRICE_WATER = 3
const PRICE_SODA = 4.5
const PRICE_COFFEE = 3.5
const PRICE_TEA = 4

const showOKMessage = () => {
    console.log('le client a paye assez')
}
const outputWater = () => {
    showOKMessage()
    console.log("faire descendre une bouteille d'eau")
}
const outputSoda = () => {
    showOKMessage()
    console.log('faire descendre une canette de jus')
}
const outputCoffee = () => {
    showOKMessage()
    console.log('faire descendre un gobelet et le remplir avec du cafe')
}
const outputTea = () => {
    showOKMessage()
    console.log('faire descendre un gobelet et le remplir avec du the')
}
const returnChange = (requiredSum, inputSum) => {
    console.log(`rendre au client ${inputSum - requiredSum} Euro(s)`)
}
const requestMoney = (requiredSum, inputSum = 0) => {
    console.log(`demander au client ${requiredSum - inputSum} Euro(s)`)
}

let inputSum = 0

const distributePerPrice = (price, distribute) => {
    while (inputSum < price) {
        requestMoney(price, inputSum)
        inputSum++
    }
    distribute()
    if (inputSum > price) {
        returnChange(price, inputSum)
    }
    inputSum = 0
}

const distributeDrink = (code) => {
    switch (code) {
        case 1:
            distributePerPrice(PRICE_WATER, outputWater)
            break
        case 2:
            distributePerPrice(PRICE_SODA, outputSoda)
            break
        case 3:
            distributePerPrice(PRICE_COFFEE, outputCoffee)
            break
        case 4:
            distributePerPrice(PRICE_TEA, outputTea)
            break
        default:
            console.log('please enter a code from 1 to 4')
    }
}

/* const distributeDrink = (code) => {
    switch (code) {
        case 1:
            while (inputSum < PRICE_WATER) {
                requestMoney(PRICE_WATER, inputSum)
                inputSum++
            }
            outputWater()
            if (inputSum > PRICE_WATER) {
                returnChange(PRICE_WATER, inputSum)
            }
            inputSum = 0
            break
        case 2:
            while (inputSum < PRICE_SODA) {
                requestMoney(PRICE_SODA, inputSum)
                inputSum++
            }
            outputSoda()
            if (inputSum > PRICE_SODA) {
                returnChange(PRICE_SODA, inputSum)
            }
            inputSum = 0
            break
        case 3:
            while (inputSum < PRICE_COFFEE) {
                requestMoney(PRICE_COFFEE, inputSum)
                inputSum++
            }
            outputCoffee()
            if (inputSum > PRICE_COFFEE) {
                returnChange(PRICE_COFFEE, inputSum)
            }
            inputSum = 0
            break
        case 4:
            while (inputSum < PRICE_TEA) {
                requestMoney(PRICE_TEA, inputSum)
                inputSum++
            }
            outputTea()
            if (inputSum > PRICE_TEA) {
                returnChange(PRICE_TEA, inputSum)
            }
            inputSum = 0
            break
        default:
            console.log('please enter a code from 1 to 4')
    }
} */

distributeDrink(1)
console.log('#############')
distributeDrink(2)
console.log('#############')
distributeDrink(3)
console.log('#############')
distributeDrink(4)
