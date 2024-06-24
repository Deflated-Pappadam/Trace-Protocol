require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    matic: {
      url: "https://rpc-amoy.polygon.technology",
      accounts: [process.env.POLYGON_PRIVATE_KEY],
    },
  },
};
