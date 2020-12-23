// SPDX-License-Identifier: MIT                 // SPDX Licence Identifier
pragma solidity ^0.6.0;                         // Version pragma
pragma experimental ABIEncoderV2;               // Experimental pragma
contract Logger {  
    // Declaration du contract
    //declare state variable logs only visible in the current contract of type array of address elements
    address[] private  logs;
    //declare function log only visible internally which, when called, adds sender of the message address (global variable) to end of the state variable logs
    function log() internal {
        logs.push(msg.sender);
    }
    //declare function which promises not to modify the state and returns the last element of the array logs of type address
    function getLast() internal view returns(address) {
        return logs[logs.length - 1];
    }
    //declare function with parameter _pos of type uint (unsigned integer of 256 bytes) which returns the element of the array logs of type address at the index _pos -1 or _pos th
    function getVisitorByPosition(uint _pos) internal view returns(address) {
        return logs[_pos - 1];
    }
    //declare function which returns all contents of logs variable which is an array of address type elements
    function getAll() internal view returns(address[] memory) {
        return logs;
    }
}