// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

//no need to deploy contract which will be inherited by 4 contracts to be deployed 

contract Allowed {

    address public owner;
    
    address public addressCalculator;

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyAddress (){
        require (msg.sender == addressCalculator, "only allowed address can perform this action");
        _;
    }
    
    modifier onlyOwner (){
        require (msg.sender == owner, "only owner can perform this action");
        _;
    }
    
    function setCalculatorAddress (address _addressCalculator) public onlyOwner{
      addressCalculator = _addressCalculator;
    }
}