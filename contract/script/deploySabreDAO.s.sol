//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script} from "../lib/forge-std/src/Script.sol";
import {console} from "../lib/forge-std/src/console.sol";
import {SabreDAO} from "../src/SabreDAO.sol";
contract deploySabreDAO is Script {
    uint constant s_totalSupply = 100 ether;
    // uint constant keep_Percentage = 2;
    uint256 public constant anvil_Private_Key = 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80;
    uint public constant ARB_SAPOLIA_PRIVATE_KEY = 0xb3ee64f345101a8cedc4eef61af5ad651495fa8ada4f62e456ad721009417955;
    uint256 public deployer_Key;


    SabreDAO public _SabreDAO;
    
    function run() external returns(SabreDAO) {
        if (block.chainid == 31337) {
            deployer_Key = anvil_Private_Key;
        } else if (block.chainid == 421614) {
            deployer_Key = ARB_SAPOLIA_PRIVATE_KEY;
        } else {
            deployer_Key = vm.envUint("PRIVATE_KEY");
        }
        vm.startBroadcast(deployer_Key);
        _SabreDAO = new SabreDAO(msg.sender);
        _SabreDAO.mintToken();
        vm.stopBroadcast();
        return _SabreDAO;
        // vm.console(s_totalSupply);
        // vm.console(keep)
    }
    // function run () external returns(SabreDAO) {
    //     if (block.chainid == 31337) {
    //         deployer_Key = anvil_Private_Key;
    //     } else {
    //         deployer_Key = vm.envUint("private_key");
    //     }
    //     vm.startBroadcast(deployer_Key);
    //      _SabreDAO = new SabreDAO(msg.sender, s_totalSupply,  );
    //     vm.stopBroadcast();
    //     return _SabreDAO;
    // }
}