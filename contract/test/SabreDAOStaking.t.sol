// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;
import {SabreDAO} from "../src/SabreDAO.sol";
// import {SabreDAOStaking} from "../src/SabreDAOStaking.sol";
import {SabreDAOStaking} from "../src/SabreDAOStaking.sol";
import {Test} from "../lib/forge-std/src/Test.sol";
import {console} from "../lib/forge-std/src/console.sol";
import {SabreDAOEngine} from "../src/SabreDAOEngine.sol";

contract SabreDAOStakingTest is Test {
        ////////////////////
    //    USERS    /////
    ////////////////////

    address deployer = makeAddr("deployer");
    address user = makeAddr("user");

        ////////////////////
    // CONTRACTS   /////
    ////////////////////
    SabreDAO sabreDAO;
    SabreDAOStaking staking;
    SabreDAOEngine engine;

    function setUp() public {
        vm.startPrank(deployer);
        sabreDAO = new SabreDAO(deployer);
                // Deploy the SabreDAOStaking contract with the mock SabreDAO as the DAO
        staking = new SabreDAOStaking(address(sabreDAO));
        // Set the user address for testing
        vm.stopPrank();
    }
  function testStake() public {

    // Mint some tokens to the user's address
    vm.startPrank(deployer);
    sabreDAO.mint(user, 1000 * 1e18);

    vm.stopPrank();
    // Approve the SabreDAOStaking contract to spend tokens on behalf of the user
    
    console.log (sabreDAO.balanceOf(address(sabreDAO)));


    // Stake 500 tokens
    vm.startPrank(user);
    sabreDAO.approve(address(staking), 1000 * 1e18);
    staking._stake(500 * 1e18);
    vm.stopPrank();

    // Check that the user's staked balance is updated correctly
    assertEq(staking._getStake(user), 500 * 1e18, "User's staked balance should be 500");
    console.log (staking._getStake(user));
    // Check that the total staked supply is updated correctly
    assertEq(staking._getTotalStakedAmount(), 500 * 1e18, "Total staked supply should be 500");

}
function testUnstake() public {
      // Mint some tokens to the user's address
    vm.startPrank(deployer);
    sabreDAO.mint(user, 1000 * 1e18);

    vm.stopPrank();
    // Approve the SabreDAOStaking contract to spend tokens on behalf of the user
    
    console.log (sabreDAO.balanceOf(address(sabreDAO)));


    // Stake 500 tokens
    vm.startPrank(user);
    sabreDAO.approve(address(staking), 1000 * 1e18);
    staking._stake(500 * 1e18);
    vm.stopPrank();

    vm.startPrank(user);
    sabreDAO.approve(address(staking), 500 * 1e18);
    staking._unStake(500 * 1e18);
    vm.stopPrank();

    assertEq(staking._getStake(user), 0 * 1e18);
    console.log (staking._getStake(user));   


}

}