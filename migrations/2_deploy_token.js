// migrations/2_deploy_token.js
const SimpleToken = artifacts.require("SimpleToken");

module.exports = function (deployer) {
  deployer.deploy(SimpleToken, 1000); // Deploy with a smaller initial supply
};

