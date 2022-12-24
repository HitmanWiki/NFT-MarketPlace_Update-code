require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    //   hardhat: {},

    polygon_mumbai: {
      // chainId: 80001,
      url: "https://polygon-mumbai.g.alchemy.com/v2/Yq1F4URSZIlAfsBKQiv_PAD5P3Fn6N6z",
      // url: process.env.POLYGON_MUMBAI,
      accounts: [
        `0x${"c6c7564bbab90ab58a26941297d7042f6036ddd4abce31a08b68b262721e7233"}`,
      ],
    },

    // fuji: {
    //   url: `https://avalanche-fuji.infura.io/v3/22e93319c7504d95a136f7c2c31714b4`,
    //   accounts: [
    //     `0x${"cbc380672e15c6f1847044aafd2978b1a0cd19f069f7ca4a81ad8e4d20498dee"}`,
    //   ],
    // },
  },
};
