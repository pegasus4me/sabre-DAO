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
//propose : the is the Aspect where the project drops a proposal
//vote
//execute
//cancel
//stake
//snapshot
// invest  == permit users to invest on the Svault basically transferring a x amount to the vault
// transferFunds == function can be called only by the deployer it permit to witdraw all founds from the Svault and transfer it to a new address ( this function use multisig signatures) so before being able witdhraw 3-4 signatures are required to emit the withdraw
// refound == only callable by the owner used in case of the cap is no reached or there are a  unexpected problem with the project it permit a refounds for all the address who have invested
import {Governor, IGovernor} from "../lib/openzeppelin-contracts/contracts/governance/Governor.sol";
import {SabreDAO} from "../src/SabreDAO.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SBRStaking} from "../src/SBRStaking.sol";

contract SabreDAOEngine {
    ///////////////////////////////////////////////////
    ////////////////ERROR//////////////
    ///////////////////////////////////////////////////
    error SabreDAO_noEnoughToken();

    ///////////////////////////////////////////////////
    ////////////////STATEVARIABLE&MAPPING//////////////
    ///////////////////////////////////////////////////
    SabreDAO public sabreDAO;
    SBRStaking public sBRSStaking;

    mapping(address user => uint256 amount) m_SabreDAOBuy;
    address[] public s_target;
    address[] public s_value;

    address[] public a_projectProposer;
    address[] private a_tokenHolders;

    ///////////////////////////////////////////////////
    //////////////////////CONSTRUCTOR///////////////////
    ///////////////////////////////////////////////////
    constructor() {}

    /////////////
    //modifier//
    ////////////

    //   function getBalanceAtTime(address Users_account, uint timepoint) internal view virtual returns (uint) {

    // }
    function buy(uint256 amountToBuy) public {
        m_SabreDAOBuy[msg.sender] += amountToBuy;
        // sabreDAO._mint(msg.sender, amountToBuy);
        sabreDAO.mint(msg.sender, amountToBuy);
        a_tokenHolders.push(msg.sender);
    }

    //////////////////////////////////////////////
    ///////////STAKING functionalities///////////////////////
    /////////////////////////////////////////////

    //onlyholders modifier should be added
    // then implement the voting power to increase if the claim
    function stake(uint256 amount) public {
        sBRSStaking._stake(amount);
    }

    function unStake(uint256 amount) public {
        sBRSStaking._unStake(amount);
    }

    function claimReward() public {
        sBRSStaking._claimReward();
    }

    function claimAndUnstake(uint256 amountToUnstake) public {
        sBRSStaking._claimAndUnstake(amountToUnstake);
    }

    function getStakeAmount(address staker) public view returns (uint256) {
        return sBRSStaking._getStake(staker);
    }
}
