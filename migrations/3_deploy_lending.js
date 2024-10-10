// migrations/3_deploy_lending.js
const SimpleToken = artifacts.require("SimpleToken");
const SimpleLending = artifacts.require("SimpleLending");

module.exports = function (deployer) {
  deployer.deploy(SimpleToken, '1000000000000000000000000').then(() => {
    return deployer.deploy(SimpleLending, SimpleToken.address);
  });
};

