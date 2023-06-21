const { ethers, run, network } = require("hardhat");

async function main() {

    const SipleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    console.log("Deploying contract...");

    const SimpleStorage = await SipleStorageFactory.deploy();
    await SimpleStorage.waitForDeployment()

    const address = await SimpleStorage.getAddress();
    console.log(`Deployed Contract to:${address}`);
    // if (network.config.chainId === 11155111 && process.env.ETHERSACN_API_KEY) { //w sieci na hardhat nie rób weryfikacji
    //     await SimpleStorage.deploymentTransaction().wait(6);
    //     await verify(SimpleStorage.getAddress(), []);
    // }
    const currentValue = await SimpleStorage.retrieve();
    console.log(`Curent value is: ${currentValue}`)

    // Update the current value
    const transactionResponse = await SimpleStorage.store(7)
    await transactionResponse.wait(1)
    const updatedValue = await SimpleStorage.retrieve() //kontrakt.funkcja()
    console.log(`Updated Value is: ${updatedValue}`)

}

async function verify(contractAddress, args) {  //nie działa

    try {
        console.log("verifying... ");
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    }
    catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("already verified!");
        }
        else {
            console.log(e);
        }
    }

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
