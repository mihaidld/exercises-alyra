// SPDX-License-Identifier: MIT  
pragma solidity >=0.6.0 <0.7.0;
pragma experimental ABIEncoderV2;

contract Contact {
    
    struct Person{
        string name;
        string email;
        string phone;
    }
    
    mapping (address => Person) private contactList;
    
    function addContact(address _addr, string memory _name, string memory _email, string memory _phone) public{
        contactList[_addr] = Person(_name, _email, _phone);
    }
    
    function getContact(address _addr) public view returns (Person memory){
        return contactList[_addr];
    }
}