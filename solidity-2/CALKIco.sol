// SPDX-License-Identifier: MIT

//contract deployed at 0x7E2860A36E15Ccd45C826307E7868C3c1bA521aa

pragma solidity ^0.6.0;
import "./CalcToken.sol";
contract CALKIco {
    // Declare a CalcToken contract
    CalcToken public token;

    // The price of 1 full token (10^18 units of token) in wei;
    uint public _price;
    
    // Address of token seller
    address payable private _seller;

    constructor(address payable seller, address erc20Address, uint price ) public {
        //Token is deployed at 0x0028a2C971786960459830CE932213f453D7D50C
        token = CalcToken(erc20Address);
        _seller = seller;
        //price for 1 full CALK (10^18 tokens) in wei
        _price = price;
    }

    // receive external function payable which handles automatically the receipt of ether inside the contract from user, is called when the amount is sent by the user
    receive() external payable {
    //     
        buy(msg.value * 10 ** uint256(token.decimals()) / _price);
    }
    // nbTokens is the number of units of a full token (e.g. 1 CALK = 10^18 nbTokens)
    function buy(uint256 nbTokens) public payable returns(bool){
        require(msg.value > 0, "ICO: Minimum 1 wei");
        //check if minimum 10 units of token bought since 1 wei = 10 units
        require(nbTokens >= (10 ** uint256(token.decimals())/_price), "ICO: Minimum 10 tokens");
        //check if enough ether for nbTokens
        require(nbTokens * _price / 10 ** uint256(token.decimals()) <= msg.value, "ICO: not enough Ether to purchase this number of tokens");
        uint256 _realPrice = nbTokens * _price / 10 ** uint256(token.decimals());
        uint256 _remaining = msg.value - _realPrice;
        token.transferFrom(_seller, msg.sender, nbTokens);
        _seller.transfer(_realPrice);
        if(_remaining > 0) {
            msg.sender.transfer(_remaining);
        }
        return true;
    }
}