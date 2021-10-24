const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");


use(solidity);

describe("My Dapp", function () {
  let myContract;

  before((done) => {
    setTimeout(done, 2000);
  });

  describe("YourCollectible", function () {
    it("Should deploy YourContract", async function () {
      const YourContract = await ethers.getContractFactory("YourCollectible");

      myContract = await YourContract.deploy();
    });

    describe("setPurpose()", function () {
      it("Should be able to set a new purpose", async function () {
        const newPurpose = "Test Purpose";

        await myContract.setPurpose(newPurpose);
        expect(await myContract.purpose()).to.equal(newPurpose);
      });
    });
  });
});

    it('Is the contract ownable?', async function () {
      // it should set the right owner 
      const YourContract = await ethers.getContractFactory("YourCollectible");
      myContract = await YourContract.deploy();
      expect(await myContract.isOwnable)
    });

    it('Is the contract ownable?', async function () {
      // it should set the right owner 
      const YourContract = await ethers.getContractFactory("YourCollectible");
      myContract = await YourContract.deploy();
      expect(await myContract.isPayable)
    });
    
    // Test case
    it('Checks token URI is greater then zero', async function () {
      expect(await myContract.tokenURI.length > 0);
    });

        // is the counter working?
    it('Checks Counter', async function () {
      nftCount = await myContract.YourCollectible.Counters();
      assert.equal(nftCount.toNumber(), 1)
    });


    // checks if the address has the correct syntax 
    it('Checks Contract Address', async function () {
      const address = await myContract.address;
      var assert = require('assert')
      assert.notEqual(address, 0x0);
    });

    it("has correct name", async () => {
      const name = await myContract.name();
      var assert = require('assert')
      assert.equal(name, "YourCollectible");
    });

    it('Checks Contract Address is Not Empty', async function () {
      const address = await myContract.address;
      var assert = require('assert')
      assert.notEqual(address, "");
    });
    // 6. is the tx hash the right length?



    // 7. is the nft transferrable?



    // 8. is the nft 




