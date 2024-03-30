// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
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
import {SabreDAOStaking} from "../src/SabreDAOStaking.sol";
import {SabreDAOGovernorPro} from "../src/SabreDAOGovernorPro.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SabreDAOEngine is Ownable{
    ///////////////////////////////////////////////////
    ////////////////ERROR//////////////
    ///////////////////////////////////////////////////
    error SabreDAO_noEnoughToken();
    error SabreDAO_notAnHolder();
    error ProposalFee_notCorrect();
    error voteFee_notCorrect();
    error SBRState_notCorrect();
    error SBRinvalidSupportError();

    //////////////////////////////////////
    /////////ENUM///////////////////////
    ////////////////////////////////////
    enum SabreDAO_State {
        open,
        close,
        ongoing
    }
        enum vote_State {
        _abstain, //super never vote toward the project mainly for scam prject
        _for, //in support of the project
        _against //agaist support

    }

    
    ////////////////////////////////////
    ////////EVENT//////////////////////
    ///////////////////////////////////

    ///////////////////////////////////////////////////
    ////////////////STATEVARIABLE&MAPPING//////////////
    ///////////////////////////////////////////////////
    SabreDAO public sabreDAO;
    SabreDAOStaking public SBRSStaking;
    SabreDAOGovernorPro public SBRDAOGovernorPro;
    SabreDAO_State public SBRDAO_State;
    vote_State public Vote_State;
    /////////////////////////
    //gov state variables////
    /////////////////////////

    uint256 public proposeFee;
    uint256 public votingFee;
    //    uint public proposald = 0;

    // Proposal public proposal;

    mapping(address user => uint256 amount) public m_SabreDAOBuy;
    mapping(uint256 proposalID => Proposal) public m_Proposals;
    mapping (uint256 proposalID => Votes) public m_votes;
    mapping (uint256 proposalID => Proposal) public m_executions;
    //  mapping(uint256 proposalID => bool sucess) public m_execute;

    // address[] public s_target;
    // address[] public s_value;
    struct Proposal {
        address[] _targets; // Array of project contract addresses
        uint256[] _values; // Amount of investment for each project
        bytes[] _calldatas; // Function signatures and encoded arguments for each project
        string _description; // Human-readable description of the proposal
    }
    struct Votes {
        uint _proposalId;
        uint8 _support;
        string _reason;
    }

    address[] public a_projectProposer;
    address[] private a_tokenHolders;
    uint256 public proposalID;
    uint public TimePoint;




    ////////////////////////////////////
    ///////Modifier////////////////////
    //////////////////////////////////
    modifier onlyHolders(address holders) {
        bool isHolder = false;
        for (uint256 i = 0; i < a_tokenHolders.length; i++) {
            if (a_tokenHolders[i] == holders) {
                isHolder = true;
                break;
            }
        }
        if (!isHolder) {
            revert SabreDAO_notAnHolder();
        }
        _;
    }

    ///////////////////////////////////////////////////
    //////////////////////CONSTRUCTOR///////////////////
    ///////////////////////////////////////////////////
    constructor(uint256 _proposalFee, uint256 _votingFee, uint _timePoint)  Ownable(msg.sender) {
        SBRDAO_State = SabreDAO_State.open;
        proposeFee = _proposalFee;
        votingFee = _votingFee;
        TimePoint = _timePoint;
        
    }

    /////////////
    //modifier//
    ////////////

    //   function getBalanceAtTime(address Users_account, uint timepoint) internal view virtual returns (uint) {

    // }

    function buy(uint256 amountToBuy) public payable {
        m_SabreDAOBuy[msg.sender] += amountToBuy;
        // sabreDAO._mint(msg.sender, amountToBuy);
        sabreDAO.mint(msg.sender, amountToBuy);
        a_tokenHolders.push(msg.sender);
    }
    //propose : the is the Aspect where the project drops a proposal

    function Propose(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        string memory description
    ) onlyHolders(msg.sender) public payable {
        // _targets = targets;
        // _values = values;
        // _calldatas = calldatas;
        // _description = description;
        Proposal memory newPropose = Proposal({
            _targets: targets, _values: values, _calldatas: calldatas, _description: description
        });
        (bool sucess) = sabreDAO.transferFrom(msg.sender, address(this), proposeFee);
        SBRDAOGovernorPro.propose(targets, values, calldatas, description);
        if (!sucess) {
            revert ProposalFee_notCorrect();
        }
        SBRDAO_State = SabreDAO_State.ongoing;
        proposalID++;
        m_Proposals[proposalID] = newPropose;

        // SBRDAOGovernorPro.propose(targets, values, calldatas, description);
    }
    //vote

    function vote(
        uint256 proposalId, //FOR THE VIRTUal function....note with the small id
        uint8 support,
        string calldata reason
    ) onlyHolders(msg.sender) public payable {
        proposalId = proposalID;
        Votes memory newVotes = Votes({
        _proposalId: proposalId,
        _support: support,
        _reason: reason
        });
        
        bool success = sabreDAO.transferFrom(msg.sender, address(this), proposeFee);
        if (!success) {
            revert voteFee_notCorrect();
        }
        if (SBRDAO_State != SabreDAO_State.ongoing) {
            revert SBRState_notCorrect();
        }
        SBRDAOGovernorPro.castVoteWithReason(proposalId, support, reason);

        
        if (Vote_State == vote_State._abstain) {
            support = 0;
        } else if (Vote_State == vote_State._for) {
            support = 1;
        } else if (Vote_State == vote_State._against) {
            support = 2;
        } else {
            revert SBRinvalidSupportError();
        }
        m_votes[proposalID] = newVotes;
    }

    //execute
    // function execute(
    //     // uint256 proposalId,
    //     address[] memory targets,
    //     uint256[] memory values,
    //     bytes[] memory calldatas,
    //     bytes32 descriptionHash
    // ) internal {
    //     targets = _targets;
    //     values = _values;
    //     calldatas = _calldatas;
    //     descriptionHash = keccak256(abi.encodePacked(_description));

    //     SBRDAO_State = SabreDAO_State.close;
    //     // SBRDAOGovernorPro._executeOperations(proposalId, targets, values, calldatas, descriptionHash);
    // }
    function execute(
        // uint256 proposalId,
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash
    ) internal onlyOwner(){
        // targets = _targets;
        // values = _values;
        // calldatas = _calldatas;
        // descriptionHash = keccak256(abi.encodePacked(descriptionHash));
        Proposal memory newExecutor = Proposal({
           
            _targets: targets, _values: values, _calldatas: calldatas, _description: " " //ASSIGN AN EMPTY STRING
        });

        SBRDAO_State = SabreDAO_State.close;
        SBRDAOGovernorPro.execute(targets, values, calldatas, descriptionHash);
        m_executions[proposalID] = newExecutor;
    }
    

    //cancel
    function cancel(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash
    ) internal {
        SBRDAOGovernorPro.cancel(targets, values, calldatas, descriptionHash);
    }
    function executeAndCancel(address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash) internal {
            execute(targets, values, calldatas, descriptionHash);
            cancel(targets, values, calldatas, descriptionHash);
        } 

    //s_vaultInvest

    //s_vaultTransferFund

    //s_vaultReFund
    //s_VaultAllUsersInvestment
    //s_setlive
    //s_VaultGetStatus

    //////////////////////////////////////////////
    ///////////STAKING functionalities///////////////////////
    /////////////////////////////////////////////

    //onlyholders modifier should be added
    // then implement the voting power to increase if the claim
    function stake(uint256 amount) public onlyHolders(msg.sender) {
        SBRSStaking._stake(amount);
    }

    function unStake(uint256 amount) public {
        SBRSStaking._unStake(amount);
    }

    function claimReward() public {
        SBRSStaking._claimReward();
    }

    function claimAndUnstake(uint256 amountToUnstake) public {
        SBRSStaking._claimAndUnstake(amountToUnstake);
        // SBRDAOGovernorPro.getvote();
        uint256 votingPower = SBRDAOGovernorPro.getvote();
        votingPower = votingPower + (votingPower / 4);
    }

    function getStakeAmount(address staker) public view returns (uint256) {
        return SBRSStaking._getStake(staker);
    }
    //GVPRO

    function _getBalanceAtTime(address account, uint256 timePoint) external view returns (uint256) {
        timePoint = TimePoint;
        uint256 amountAtTime = m_SabreDAOBuy[account];
        return amountAtTime;
    }
}
