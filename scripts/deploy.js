const { ethers } = require("hardhat");
// const { Contract } = require("hardhat/internal/hardhat-network/stack-traces/model");
// async function sleep(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   })
// }
async function main() {
  const whitelistContract = await ethers.getContractFactory("Whitelist");
  const deployedWhitelistContract = await whitelistContract.deploy(10);
  await deployedWhitelistContract.deployed();
  console.log("Whitelist Contract Address:", deployedWhitelistContract.address);
  // await sleep(15*1000);
  // await hre.run("verify:verify",{
  //   address: deployedWhitelistContract.address,
  // });
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });