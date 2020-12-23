// SPDX-License-Identifier: MIT  
pragma solidity >=0.6.0 <0.7.0;

contract CheckOdd {
    
    function check (uint _number) public pure returns (bool){
       return _number % 2 == 1;
    }
}