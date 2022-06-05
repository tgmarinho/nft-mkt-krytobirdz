require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

const projectId = process.env.PROJECT_INFURA_ID;

const fs = require('fs')
// p-key.txt contains the private key of the account metamask
const keyData = fs.readFileSync('./p-key.txt', {
  encoding: 'utf8', flag: 'r'
})



module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337, // config standard
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [keyData]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts: [keyData]
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
