// SPDX-License-Identifier: MIT  
pragma solidity >=0.6.0 <0.7.0;

contract SimpleStorage {
    
    uint256 private storedData;
    
    function get () public view returns (uint256){
       return storedData;
    }
    
    function set (uint256 _value) public {
       storedData = _value;
    }
}