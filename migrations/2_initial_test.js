const testMigrations = artifacts.require("test");

module.exports = function (deployer) {
    deployer.deploy(testMigrations);
};