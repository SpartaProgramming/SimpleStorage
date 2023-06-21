require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./tasks/block-number") //import 
require("hardhat-gas-reporter");
require('solidity-coverage')
//require("@nomiclabs/hardhat-etherscan"); //daje błądya


const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || ""; //if doesn't exist equals empty string
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY || "0xkey";
const ETHERSACN_API_KEY = process.env.ETHERSACN_API_KEY ||"key";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key";


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks:{
    Sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [SEPOLIA_PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
    url: "http://127.0.0.1:8545/",
      //accounts
      chainId: 31337,
    }
  },
  solidity: "0.8.18",
  etherscan: {
    apiKey: ETHERSACN_API_KEY,
  },
  gasReporter: {

    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY, // make request
    token: "MATIC",

  }

};

//5e21fad23bb5a1c7f80fa16145f4c37cfe56efc7d2ce9137e3d644ace7d30a11