/* global ethers run */

const { ethers } = require('hardhat')

// aWETH
const rootTokenAddress = '0x030ba81f1c18d280636f32af80b9aad02cf0854e'
// aUSDC
// const rootTokenAddress = '0xBcca60bB61934080951369a648Fb03DF4F96263C'
// aDAI
// const rootTokenAddress = '0x028171bca77440897b824ca71d1c56cac55b68a3'

const rootChainManagerAddress = '0x0D29aDA4c818A9f089107201eaCc6300e56E0d5c'

async function main () {
  const accounts = await ethers.getSigners()
  const account = await accounts[0].getAddress()

  const rootChainManagerProxy = await ethers.getContractAt('ATokenRootChainManager', rootChainManagerAddress)
  const childTokenAddress = await rootChainManagerProxy.rootToChildToken(rootTokenAddress)
  console.log('Child Token address:', childTokenAddress)
}

// Child token addresses
// maDAI Child Token address: 0xE0b22E0037B130A9F56bBb537684E6fA18192341
// maUSDC Child Token address: 0x9719d867A500Ef117cC201206B8ab51e794d3F82
// maWETH Child Token address: 0x20D3922b4a1A8560E1aC99FBA4faDe0c849e2142

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
