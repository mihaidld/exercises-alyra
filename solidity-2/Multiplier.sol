// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import "./Allowed.sol";

//contract deployed at 0xBdf8691C1F42Bb12e613C38C0923eb93c44a5EAe

contract Multiplier is Allowed {
    function mul(uint256 nb1, uint256 nb2) public view onlyAddress returns (uint256){
     return nb1 * nb2;
    }
}