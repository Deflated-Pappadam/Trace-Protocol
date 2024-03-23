const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Paripp", (m) => {
  const parrip = m.contract("Paripp");
  console.log(parrip);
  return { parrip };
});
