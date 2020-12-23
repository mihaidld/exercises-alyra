'use strict'
/*
Ecrivez une fonction isPalindrome qui prend une string en paramètre. Cette
fonction retourne true si le paramètre est un palindrome sinon retourne false

*/

const isPalindrome = (str) => str === str.split('').reverse().join('')

console.log(isPalindrome('tenet')) // returns true
console.log(isPalindrome('Alyra')) // returns false
