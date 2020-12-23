// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import "./Allowed.sol";

//contract Adder deployed at 0x4c8F3aA5799c0D1e51FCb987394c0debfef3Eae7

contract Adder is Allowed {
    function add(uint256 nb1, uint256 nb2) public view onlyAddress returns (uint256){
       return nb1 + nb2;
    }
}