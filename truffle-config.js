// truffle-config.js

module.exports = {
  networks: {
    // Configuration for your local Ganache network
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ganache port (default: none)
      network_id: "*",       // Match any network id
      gas: 8000000,          // Gas limit (increase this if you encounter deployment failures)
      gasPrice: 20000000000, // 20 Gwei (default)
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.20",      // Fetch exact version from solc-bin (default: truffle's version)
      settings: {            // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,     // Enable optimization
          runs: 200,         // Optimize for how many times you intend to run the code
        },
      },
    },
  },

  // Additional network configurations, plugins, etc.
};

