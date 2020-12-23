'use strict'
/* 
un garagiste vous demande de compter le nombre de roues qu'il y a dans son
garage. Les roues sont toutes montées sur des véhicules de types: monocyle: 1
roue moto: 2 roues voiture: 4 roues limousine: 6 roues Ecrivez une fonction
countWheels qui prend 4 parmètres, qui correspondent au nombre de chaques
véhicules et qui retourne le nombre de roues totales:
Les arguments de la fonction doivent être passés dans l'ordre suivant:
countWheels(nb_monocycle, nb_moto, nb_voiture, nb_limousine)
*/

const countWheels = (nb_monocycle, nb_moto, nb_voiture, nb_limousine) =>
    nb_monocycle + nb_moto * 2 + nb_voiture * 4 + nb_limousine * 6

console.log(countWheels(10, 20, 7, 2)) //returns 90
console.log(countWheels(2, 3, 4, 5)) // returns 54
