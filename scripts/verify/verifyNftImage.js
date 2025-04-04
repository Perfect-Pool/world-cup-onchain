const hre = require("hardhat");

async function main() {
  const contracts = require("../../contracts.json");
  const networkName = hre.network.name;

  let address = contracts[networkName]["NFT_IMAGE8"];
  if (!address) {
    console.error("NftImage address not found in contracts.json");
    process.exit(1);
  }

  console.log("Verifying NftImage at address", address);

  await hre.run("verify:verify", {
    address: address,
    constructorArguments: [contracts[networkName].GAMES_HUB],
    contract: "contracts/utils/NftImage.sol:NftImage",
  });

  address = contracts[networkName]["NFT_IMAGE_OLYMPICS"];
  if (!address) {
    console.error("NftImagePhaseOne address not found in contracts.json");
    process.exit(1);
  }

  console.log("Verifying NftImagePhaseOne at address", address);

  await hre.run("verify:verify", {
    address: address,
    constructorArguments: [contracts[networkName].GAMES_HUB],
    contract: "contracts/utils/NftImagePhaseOne.sol:NftImagePhaseOne",
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
