//SPDX-License-Identifier : MIT
// version
// imports
// errors
// interfaces, libraries, contracts
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
* @Aboout this is a engine contract to a dao token, it is used to take in fund from other based projects to generate income, and main focus is to allow usser stay early and secure to all investment. 
 * This is an ERC20coin with the properties:
 * - erc20 bought and sell 
 * - sVault
 * - Algorithmically take in funds, store projects info and pay out funds to the project once target is being met
 *
 * 
 *
 * @notice
*/

pragma solidity ^0.8.20;

import {Governor, IGovernor} from "../lib/openzeppelin-contracts/contracts/governance/Governor.sol";
import {SabreDAO} from "../src/SabreDAO.sol";

abstract contract sabreDAOGovernorPro is Governor {
    // function totalVoting_power(address contractAddress) onlyOwner internal view returns(uint ) {
    //     uint timepoint = block.timestamp;
    //     _getVotes(contractAddress, timepoint, "");
    // }

    constructor() Governor("SabreDAO") {}

    ///////////////////////////////////////////////////
    //////////////PUBLIC AND EXTERNAL FUNCTION/////////
    ///////////////////////////////////////////////////
    //the following code are decleared as virtual and they must be immplemented in our engine code
    //propose : the is the Aspect where the project drops a proposal
    //vote
    //execute
    //cancel
    // function
    ///////////////////////////////////////////////////
    ///////////////INTERNAL AND PRIVATE FUNCTION///////
    ///////////////////////////////////////////////////
    //QV voting methodology implemented.
    function sqrt(uint256 x) internal pure returns (uint256 y) {
        uint256 z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
    }

    function _getVotes(address account, uint256 timepoint, bytes memory params)
        internal
        view
        virtual
        override
        returns (uint256)
    {
        uint256 balance = getBalanceAtTime(account, block.timestamp);
        uint256 QVWeight = sqrt(balance);
        // super._getVotes(account, timepoint, params);
        return QVWeight;
    }

    function getBalanceAtTime(address Users_account, uint256 timepoint) internal view virtual returns (uint256) {}

    function getvote() external view returns (uint256) {
        // string memory message = "this is your current vote";
        // bytes memory params = abi.encodePacked(message);
        uint256 timepoint = block.timestamp;
        _getVotes(msg.sender, timepoint, "");
    }
}
