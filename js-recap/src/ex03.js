'use strict'
/*Ecrivez une fonction count qui prend comme paramètre un nombre min, un nombre
max et un nombre step. L'execution de cette fonction devra afficher sur le
terminal tous les nombres de min jusqu'a max avec un interval de step */

const count = (min, max, step) => {
    for (let i = Math.min(min, max); i <= Math.max(min, max); i += step) {
        console.log(i)
    }
}
count(1, 3, 1)
count(1, 3, 2)
count(1, 4, 2)
