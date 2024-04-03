// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import {Script} from "../lib/forge-std/src/Script.sol";
import {console} from "../lib/forge-std/src/console.sol";
import {helperConfig} from "../script/helperConfig.s.sol";
import {SabreDAOEngine} from "../src/SabreDAOEngine.sol";
import {SabreDAO} from "../src/SabreDAO.sol";

contract deploySabreDAOEngine is Script {

    function run () external returns (SabreDAO, helperConfig, SabreDAOEngine) {
        helperConfig HelperConfig = new helperConfig();
        (uint256 _proposalFee,
        uint256 _votingFee,
        uint256 _timePoint,
        uint _proposalID,
        // address sabreDAOAddress;
        uint deployer_Key
        ) = HelperConfig.activeNetworkConfig();
        vm.startBroadcast(deployer_Key);
        SabreDAO SBRToken = new  SabreDAO(msg.sender);
        SabreDAOEngine SBREngine = new SabreDAOEngine(
            _proposalFee,
            _votingFee,
            _timePoint,
            _proposalID,
            address(SBRToken)    
        );
        // SBRToken.mintToken();
        SBRToken.transferOwnership(address(SBREngine));
        vm.stopBroadcast();
        return (SBRToken, HelperConfig, SBREngine);
    }
    
}