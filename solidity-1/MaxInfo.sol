/*Ecrivez un smart contract qui contient des fonctions qui retournent le maximum
d'info sur l'utilisateur qui effectue la transaction, la transaction elle même
et le bloc contenant cette transaction. On peut imaginer des fonctions pour
chacuns de ces élements ou une struct qui contiendrait ces informations. Aidez
vous de:
https://solidity.readthedocs.io/en/latest/cheatsheet.html#global-variables*/ 

//SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;
pragma experimental ABIEncoderV2;

contract MaxInfo {
  struct Info {
    address sender;
    uint256 sender_balance;
    uint256 block_number;
    uint256 block_timestamp;
  }

  function getInfo() public view returns (Info memory) {
    return Info(msg.sender, msg.sender.balance, block.number, block.timestamp);
  }
}