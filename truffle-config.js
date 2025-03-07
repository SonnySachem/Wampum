module.exports = {
  networks: {
    loc_wampum_wampum: {
      network_id: "*",
      port: 8545,
      host: "127.0.0.1"
    },
    loc_wampum27_wampum27: {
      network_id: "*",
      port: 24012,
      host: "127.0.0.1"
    },
    loc_wampum72_wampum72: {
      network_id: "*",
      port: 27012,
      host: "127.0.0.1"
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.17"
    }
  }
};
