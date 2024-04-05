// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script} from "../lib/forge-std/src/Script.sol";
import {console} from "../lib/forge-std/src/console.sol";
import {helperConfig} from "../script/helperConfig.s.sol";
import {SabreDAOEngine} from "../src/SabreDAOEngine.sol";
import {TimeLock} from "../src/TimeLock.sol";
import {SabreDAO} from "../src/SabreDAO.sol";
import {S_vault} from "../src/S_vault.sol";
import {SabreDAOStaking} from "../src/SabreDAOStaking.sol";

contract deploySabreDAOEngine is Script {
    address[] public proposer;

    function run() external returns (SabreDAO, helperConfig, SabreDAOEngine, S_vault, TimeLock) {
        helperConfig HelperConfig = new helperConfig();
        (
            uint256 _proposalFee,
            uint256 _votingFee,
            uint256 _timePoint,
            uint256 _proposalID,
            // address sabreDAOAddress;
            uint256 deployer_Key
        ) = HelperConfig.activeNetworkConfig();
        vm.startBroadcast(deployer_Key);

        SabreDAO SBRToken = new SabreDAO(msg.sender);
        S_vault SBRVault = new S_vault(address(SBRToken));
        
        // SabreDAOStaking SBRStaking = new SabreDAOStaking();
        SabreDAOEngine SBREngine =
            new SabreDAOEngine(_proposalFee, _votingFee, _timePoint, _proposalID, address(SBRToken));
        TimeLock timeLock = new TimeLock(30, proposer, proposer);


        // SBRToken.mintToken();
        SBRToken.transferOwnership(address(SBREngine));
        vm.stopBroadcast();
        return (SBRToken, HelperConfig, SBREngine, SBRVault, timeLock);

    }
}
