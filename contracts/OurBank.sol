// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OurBank {
    address private owner;
    struct Account {
        bool enrolled;
        uint256 balance;
    }
    mapping(address => Account) accounts;

    constructor() {
    }

    // function enroll() {
    // }

    // function isEnrolled(address _user) {
    // }

    // function deposit() {
    // }

    // function withdraw(uint256 _amount){
    // }

    // function getBalance(){
    // }

    // function getBalance(address _user) {
    // }
}
