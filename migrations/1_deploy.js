const Cardio = artifacts.require("CardioSwap");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(Cardio);
  
};