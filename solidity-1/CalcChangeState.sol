// SPDX-License-Identifier: MIT                 // SPDX Licence Identifier
pragma solidity ^0.6.0;                         // Version pragma
pragma experimental ABIEncoderV2;               // Experimental pragma

/*Ecrivez un smart contract Calc qui sera définit dans le fichier Calc.sol le
contrat Calc comportera 4 fonctions de calculs add, sub, mul, div qui prennent
en paramètres 2 uint et qui retournera l'opération de calcule appliquée à ces 2
uint Il faudra mettre les bons paramètres de visibilité sur ces fonctions, et
aussi les déclarer en fonction de leur accès aux données du smart contract (view
vs pure vs rien)*/ 

/// @title A calculator with 4 basic functions 
/// @author Mihai Doldur 
/// @notice You can check the functions of the contract 
/// @dev The 4 function can be called only by the owner 

contract Calc {
    /// @dev the state variable is updated every time we call a function since they modify its value

    address private owner;
    uint public result;

    /// @notice Only the owner of the contract can call the functions 
    /// @dev the state variable owner takes the value of the message sender when the
    contract is deployed (only time the constructor function is called)
    
    constructor() public {
        //fonction constructor appelee juste une fois initialise la variable de
        state owner de type address avec la valeur de la variable globale
        msg.sender (createur du contrat) qui est l'auteur de la requete 
        owner = msg.sender;
    }
    modifier onlyOwner() { // Modifier
        require(
            msg.sender == owner,
            "Only owner can call this."
        );
        _;
    }

  /// @notice An addition function of nb1 and nb2
  /// @param nb1 First number of the add operation
  /// @param nb2 Second number of the add operation
     function add(uint nb1, uint nb2) public onlyOwner {
        result= nb1 + nb2;
    }
    
  /// @notice A substraction function
  /// @param nb1 First number of the sub operation
  /// @param nb2 Second number of the sub operation
    function sub(uint nb1, uint nb2) public onlyOwner {
        result=  nb1-nb2;
    }
    
  /// @notice A multiplication function
  /// @param nb1 First number of the sub operation
  /// @param nb2 Second number of the sub operation
      function mul(uint nb1, uint nb2) public onlyOwner {
        result=  nb1*nb2;
    }
    
    
  /// @notice A division function
  /// @dev modifier or require to check for 0 division
  /// @param nb1 The numerator
  /// @param nb2 The denominator
  
 // solution with require
      function div(uint nb1, uint nb2) public onlyOwner{
                require(nb2 != 0,"Error: division by 0"
        );
        result=  nb1/nb2;
    }

// solution with modifier
    /*    modifier is0(uint nb) { // Modifier
        require(
            nb != 0,
            "Error: 0 division"
        );
        _;
    }
    
    function div(uint nb1, uint nb2) public onlyOwner is0(nb2){
        result=  nb1/nb2;
    }*/
}
