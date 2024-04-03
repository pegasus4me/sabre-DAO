const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const [] = await hre.ethers.getSigners();
  // Deploy the sabreDAO token Contract
  // const sabreDAOTokenContract = await hre.ethers.deployContract("SabreDAO", [
  //   "0x5D16113D356A48E663fdce17304b0A65540CFCf4",
  // ]);
  // await sabreDAOTokenContract.waitForDeployment();
  // console.log("SabreDAOToken deployed to:", sabreDAOTokenContract.target);

  // Deploy the sabreDAO Gov Pro Contract
  const sabreDAOGovProContract = await hre.ethers.deployContract(
    "SabreDAOGovernorPro",
    [
      "0x5D16113D356A48E663fdce17304b0A65540CFCf4",
      "0x5D16113D356A48E663fdce17304b0A65540CFCf4",
    ],
    { gasLimit: 1500000 }
  );
  await sabreDAOGovProContract.waitForDeployment();
  console.log(
    "SabreDAOGovernorPro deployed to:",
    sabreDAOGovProContract.target
  );

  // Deploy the sabreDAO staking Contract
  // const sabreDAOStaking = await hre.ethers.deployContract("SabreDAOStaking");
  // await sabreDAOStaking.waitForDeployment();
  // console.log("SabreDAOStaking deployed to:", sabreDAOStaking.target);

  // // Deploy the DAO Contract
  // const proposalFee = 0.01;
  // const votingFee = 0.01;
  // const timepoint = 0.01;
  // const sabreDAOContract = await hre.ethers.deployContract(
  //   "SabreDAOEngine",
  //   [
  //     // sabreDAOTokenContract.target,
  //     "0x24A48b47D22DBa20eFf4773C57F41a82DCEadcDb",
  //     sabreDAOGovProContract.target,
  //     sabreDAOStaking.target,
  //   ],
  //   [proposalFee, votingFee, timepoint]
  // );
  // await sabreDAOContract.waitForDeployment();
  // console.log("SabreDAOEngine deployed to:", sabreDAOContract.target);

  // Sleep for 30 seconds to let Etherscan catch up with the deployments
  await sleep(30 * 1000);

  // Verify the Sabre DAO Token Contract
  // await hre.run("verify:verify", {
  //   address: sabreDAOTokenContract.target,
  //   constructorArguments: [],
  // });

  // Verify the Sabre DAO Gov Pro Contract
  await hre.run("verify:verify", {
    address: sabreDAOGovProContract.target,
    constructorArguments: [],
  });

  // // Verify the Sabre DAO Staking Contract
  // await hre.run("verify:verify", {
  //   address: sabreDAOStaking.target,
  //   constructorArguments: [],
  // });

  // // Verify the Sabre DAO Main Engine Contract
  // await hre.run("verify:verify", {
  //   address: daoContract.target,
  //   constructorArguments: [
  //     sabreDAOTokenContract.target,
  //     sabreDAOGovProContract.target,
  //     sabreDAOStaking.target,
  //   ],
  // });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
