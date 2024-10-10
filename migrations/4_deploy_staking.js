// migrations/4_deploy_staking.js
const Staking = artifacts.require("Staking");
const SimpleToken = artifacts.require("SimpleToken");

module.exports = function (deployer) {
  deployer.deploy(Staking, SimpleToken.address);
};

