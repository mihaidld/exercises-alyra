// SPDX-License-Identifier: MIT                 r
pragma solidity >=0.6.0;
import "./Adder.sol";
import "./Suber.sol";
import "./Multiplier.sol";
import "./Divisor.sol";
import "./CalcToken.sol";

//contract CalcToken deployed at 0x0028a2C971786960459830CE932213f453D7D50C
//contract Calculator deployed at 0x16610BE880Ef91392A998cD9628a3f66aD717Bc3

contract Calculator {
    CalcToken public token; //
    uint256 public opPrice;
    address payable wallet;
    Adder private adderContract;
    Suber private suberContract;
    Multiplier private multiplierContract;
    Divisor private divisorContract;

    constructor(address _calcToken, uint256 _opPrice) public {
        token = CalcToken(_calcToken);
        opPrice = _opPrice; //1e16
        wallet = msg.sender;
        adderContract = Adder(0x4c8F3aA5799c0D1e51FCb987394c0debfef3Eae7);
        suberContract = Suber(0x2a0D42003ff337B7B0eBC314F4D5D5b86C4C972F);
        multiplierContract = Multiplier(0xBdf8691C1F42Bb12e613C38C0923eb93c44a5EAe);
        divisorContract = Divisor(0xa18365cB1477a02426F3077fEAf6126C6B0962C2);
    }

    event Result(address indexed addr, string operation, uint256 op1, uint256 op2, uint256 res);
    
    function calkBalance() public view returns (uint256) {
        return token.balanceOf(address(this));
  }
  
    function withdraw () public {
        require (msg.sender == wallet, "only owner can perform this action");
        token.transfer(wallet, calkBalance());
    }

    function add(uint256 nb1, uint256 nb2) public returns (uint256) {
        token.transferFrom(msg.sender, address (this), opPrice);
        uint256 result = adderContract.add(nb1, nb2);
        emit Result(msg.sender, 'add', nb1, nb2, result);
        return result;
    }

    function sub(uint256 nb1, uint256 nb2) public returns (uint256) {
        token.transferFrom(msg.sender, address (this), opPrice);
        uint256 result = suberContract.sub(nb1,nb2);
        emit Result(msg.sender, 'sub', nb1, nb2, result);
        return result;
    }
    
    function mul(uint256 nb1, uint256 nb2) public returns (uint256) {
        token.transferFrom(msg.sender, address (this), opPrice);
        uint256 result = multiplierContract.mul(nb1,nb2);
        emit Result(msg.sender, 'mul', nb1, nb2, result);
        return result;
    }
    
    function div(uint256 nb1, uint256 nb2) public returns (uint256) {
        token.transferFrom(msg.sender, address (this), opPrice);
        uint256 result = divisorContract.div(nb1,nb2);
        emit Result(msg.sender, 'div', nb1, nb2, result);
        return result;
    }
  }