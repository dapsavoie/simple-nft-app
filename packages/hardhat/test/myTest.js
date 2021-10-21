const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");


use(solidity);

describe("My Dapp", function () {
  let myContract;

  before((done) => {
    setTimeout(done, 2000);
  });

  describe("MyNFT", function () {
    it("Should deploy YourContract", async function () {
      const YourContract = await ethers.getContractFactory("MyNFT");

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
      const YourContract = await ethers.getContractFactory("MyNFT");
      myContract = await YourContract.deploy();
      expect(await myContract.isOwnable)
    });
    // Test case
    it('Checks token URI is greater then zero', async function () {
      expect(await myContract.tokenURI.length > 0);
    });

        // Test case
    it('Checks Counter', async function () {
      nftCount = await myContract.MyNFT.Counters();
      assert.equal(nftCount.toNumber(), 1)
    });