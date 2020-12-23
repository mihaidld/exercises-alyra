// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import "./Allowed.sol";

//contract deployed at 0x2a0D42003ff337B7B0eBC314F4D5D5b86C4C972F

contract Suber is Allowed {
    function sub(uint256 nb1, uint256 nb2) public view onlyAddress returns (uint256){
        require(nb1 >= nb2,"Error: result is negative so not an uint");
        return nb1 - nb2;
    }
}