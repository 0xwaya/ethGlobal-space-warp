
require("@nomicfoundation/hardhat-toolbox")
require("@nomicfoundation/hardhat-chai-matchers")
require("@nomiclabs/hardhat-ethers")
require("hardhat-deploy")
require("hardhat-deploy-ethers")
require("./tasks")
require("dotenv").config()

const PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });


module.exports = {
    solidity: {
        version: '0.8.17',
        defaultNetwork: 'hyperspace',
        networks: {
            hardhat: {},
            hyperspace: {
                chainId: 3141,
                url: [process.env.CHAINSTACK_FILECOIN_RPC],
                accounts: [`${process.env.DEPLOYER_PRIVATE_KEY}`],
            },
        },
        paths: {
            sources: "./contracts",
            tests: "./test",
            cache: "./cache",
            artifacts: "./artifacts",
        },
    }