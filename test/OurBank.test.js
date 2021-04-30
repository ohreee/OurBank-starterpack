const { accounts, contract } = require('@openzeppelin/test-environment');
const Web3 = require('web3');
const { assert } = require('chai');
const { expectRevert, expectEvent, balance } = require('@openzeppelin/test-helpers');
const OurBank = contract.fromArtifact('OurBank'); // Loads a compiled contract
const ether = 10 ** 18; // 1 ether = 1000000000000000000 wei
const [owner, alice, bob] = accounts;

describe("OurBank", () => {
    it("should check that the owner is enrolled", async () => {
        // const bank = OurBank.new({from: owner});
        assert(false, "Not implemented yet");
    });

    it("should check that owner can deposit", async () => {
        assert(false, "Not implemented yet");
    });

    it("should check that not enrolled can't deposit", async () => {
        assert(false, "Not implemented yet");
    });

    it("should check only owner can enroll alice", async () => {
        assert(false, "Not implemented yet");
    });

    it("should check only enrolled can deposit", async () => {
        assert(false, "Not implemented yet");
    });

    it("should check withdraw", async () => {
        assert(false, "Not implemented yet");
    });
});