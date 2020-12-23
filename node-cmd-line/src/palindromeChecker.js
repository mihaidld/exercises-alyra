'use strict'
/*
Ecrivez un script palindromeChecker.js qui verifit si l'argument passé en ligne
de commande est un palindrome:

% node palindromeChecker.js tenet 
tenet is a palindrome 
% node palindromeChecker.js 3133773313 
3133773313 is a palindrome 
% node palindromeChecker.js Alyra 
Alyra is not a palindrome
*/

const isPalindrome = (str) => {
    str === str.split('').reverse().join('')
        ? console.log(`${str} is a palindrome`)
        : console.log(`${str} is not a palindrome`)
}

/* const isPalindrome = (str) => {
    let halfLength = Math.floor(str.length / 2)
    for (let i = 0; i < halfLength; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            console.log(`${str} is not a palindrome`)
            return
        }
    }
    console.log(`${str} is a palindrome`)
} */

// Verifier qu'il n'y a qu'un seul argument passé à notre programme
if (process.argv.length !== 3) {
    console.log('usage: node palindromeChecker.js entry')
    process.exit(1)
}

let entry = process.argv[2]
isPalindrome(entry)
