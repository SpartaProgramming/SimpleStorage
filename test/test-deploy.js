const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace")
const { ethers } = require("hardhat");
const {expect, assert } = require("chai"); //ładuj funkcje z jakiegoś modułu

describe("SimpleStorage", function () {

  let SipleStorageFactory, SimpleStorage;

  beforeEach(async function () //deploy new contract , przed testami
  {
    SipleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    SimpleStorage = await SipleStorageFactory.deploy();

  })



  it("Should start with fav number of zero", async function () {

    const currentValue = await SimpleStorage.retrieve();
    const expectedValue = "0";
    // asset / expect - oceń poprawność
    assert.equal(currentValue.toString(), expectedValue);


  }) // co ma zrobić

  it.only("Should update when we call store", async function() {

    const expectedValue = "7";
    const transactionResponse = await SimpleStorage.store(expectedValue);
    await transactionResponse.wait(1);
    const currentValue = await SimpleStorage.retrieve();
   // assert.equal(currentValue.toString(), expectedValue);
    expect(currentValue.toString()).to.equal(expectedValue)
  })


}) // function ()=>{}