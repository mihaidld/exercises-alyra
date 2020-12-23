// SPDX-License-Identifier: MIT                 // SPDX Licence Identifier
pragma solidity ^0.6.0;                         // Version pragma
pragma experimental ABIEncoderV2;               // Experimental pragma

import './Logger.sol' as logger;                // import de ./Logger.sol

contract SolidityCourse is logger.Logger {      // Declaration of contract which
derives from contract Logger (property of object logger) and inherits its
internal functions which can access to state variable logs which is private
(only to be used inside the contract where is was defined)
    address private owner;

    constructor() public {
        //fonction constructor appelee juste une fois initialise la variable de
        state owner de type address avec la valeur de la variable globale
        msg.sender (createur du contrat) qui est l'auteur de la requete owner =
        msg.sender;
    }
    //fonction qui appelle log pour ajouter une adresse a logs et puis retourne owner qui est le message sender
    function whoIsOwner() public returns(address) {
        log();
        return owner;
    }
//fonction qui declare une variable locale lastVistor (declaree a l'interieur
d'une fonction) initialisee avec la valeur retournee en appelant fonction
getLast, c.a.d. derniere adresse, appelle log pour ajouter une adresse a logs et
puis retourne la valeur de lastVisitor
    function getLastVisitor() public returns(address) {
        // 
        address lastVisitor = getLast();
        log();
        return lastVisitor;
    }
//fonction avec un parametre de type uint, qui declare une variable locale
nthVistor initialisee avec la valeur retournee en appelant fonction
getVistor..., c.a.d. la _pos eme adresse, appelle log pour ajouter une adresse a
logs et puis retourne la valeur de nthVisitor
    function getNthVisitor(uint _pos) public returns(address) {
        address nthVisitor = getVisitorByPosition(_pos);
        log();
        return nthVisitor;
    }
//fonction qui ajoute une condition que juste le createur du contrat (qui est
stocke dans owner) puisse appeler cette fonction (==msg.sender) et voir toutes
les addresses de logs en appelant la fonction getAll
    function getAllVisitors() public view returns(address[] memory) {
        require(owner == msg.sender, 'Only owner can use this function.');

        return getAll();
    }
}