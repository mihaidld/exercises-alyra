// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import "./Allowed.sol";

//contract deployed at 0xa18365cB1477a02426F3077fEAf6126C6B0962C2 

contract Divisor is Allowed {
    function div(uint256 nb1, uint256 nb2) public view onlyAddress returns (uint256){
        require(nb2 != 0,"Error: division by 0");
        return nb1 / nb2;
    }
}