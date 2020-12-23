'use strict'
/*
Ecrivez une fonction showStars qui prend en paramètre un nombre nbStars et qui
affiche sur le terminal comme suit:

showStars(3) output:

*
**
***



showStars(10) output:

*
**
***
****
*****
******
*******
********
*********
**********

*/

/* const showStars = (nbStars) => {
    for (let str = '*'; str.length <= nbStars; str += '*') {
        console.log(str)
    }
} */

const showStars = (nbStars) => {
    for (let i = 1; i <= nbStars; i += 1) {
        console.log('*'.repeat(i))
    }
}
showStars(3)
showStars(10)
