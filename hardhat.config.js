require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./tasks/block-number") //import 
//require("@nomiclabs/hardhat-etherscan"); //daje błądya


const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
const ETHERSACN_API_KEY = process.env.ETHERSACN_API_KEY;



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
  }
};

//5e21fad23bb5a1c7f80fa16145f4c37cfe56efc7d2ce9137e3d644ace7d30a11