// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0

// version
// imports
// interfaces, libraries, contracts
// errors
// Type declarations
// State variables
// Events
// Modifiers
// Functions

// Layout of Functions:
// constructor
// receive function (if exists)
// fallback function (if exists)
// external
// public
// internal
// private
// view & pure functions

/*
* @title SABRE DAO ENGINE
* @author Ola Hamid
* @Aboout this is a sabreDAOToken contract to an ERC20 dao token, it is used to mint and burn funds, also transfer from other based projects to generate income, and main focus is to allow usser stay early and secure to all investment. 
 * This is an ERC20coin with the properties:
 * - ERC20 token minted  
 * - SabreDAO
 * - Algorithmically mint in funds.
 *
 * 
 *
 * @notice
*/
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
// import {sabreDAOEngine} from "../src/SabreDAOEngine.sol";

contract SabreDAO is ERC20, Ownable, ERC20Permit, ERC20Votes {
    error e_burnError();
    error SBR_MustBeMoreThanZero();

    error SBR_NotZeroAddress();

    event TokenMinted(address indexed to, uint256 amount);
    event TokenBurned(address indexed from, uint256 amount);
    ///////////////////////////////////////////////////
    //////////////////////state variable///////////////
    ///////////////////////////////////////////////////

    uint256 public s_TotalSupply = 1000000 ether;

    address[] public a_TokenMinter;

    ///////////////////////////////////////////////////
    //////////////////////CONSTRUCTOR///////////////////
    ///////////////////////////////////////////////////
    constructor(address initialOwner) ERC20("SabreDAO", "SBR") Ownable(initialOwner) ERC20Permit("SabreDAO") {}
    //      function _afterTokenTransfer(address from, address to, uint256 amount) internal override(ERC20, ERC20Votes) {
    //        super._afterTokenTransfer(from, to, amount);
    //   }

    function mintToken(address to, uint256 amount, uint256 keepPeercentage) public onlyOwner {
        amount = s_TotalSupply;
        uint256 keepTeamAmount = (keepPeercentage * amount) / 100;
        _transfer(msg.sender, address(this), keepTeamAmount);
        _mint(to, amount);
        a_TokenMinter.push(msg.sender);
    }

    function _burn(address to, uint256 amount) internal override(ERC20) onlyOwner {
        if (amount < s_TotalSupply) {
            revert e_burnError();
        }
        super._burn(to, amount);
        emit TokenBurned(to, amount);
    }

    function _mint(address to, uint256 amount) internal override(ERC20) onlyOwner {
        if (to == address(0)) {
            revert SBR_NotZeroAddress();
        }
        if (amount <= 0) {
            revert SBR_MustBeMoreThanZero();
        }
        super._mint(to, amount);
        emit TokenMinted(to, amount);
    }

    function _update(address from, address to, uint256 value) internal override(ERC20, ERC20Votes) onlyOwner {
        super._update(from, to, value);
    }

    function nonces(address owner) public view override(ERC20Permit, Nonces) returns (uint256) {
        return super.nonces(owner);
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}
