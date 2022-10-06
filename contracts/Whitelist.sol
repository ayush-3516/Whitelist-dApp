// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Whitelist {
    uint8 public maxWhitelistedAddresses = 50;
    mapping(address => bool) public whitelistedAddresses;
    uint8 public numAddressesWhitelisted;

    function addAddressToWhitelist() public {
        require(
            !whitelistedAddresses[msg.sender],
            "Sender has already been whitelisted"
        );
        require(
            numAddressesWhitelisted < maxWhitelistedAddresses,
            "More addresses cant be added, limit reached"
        );
        whitelistedAddresses[msg.sender] = true;
        numAddressesWhitelisted += 1;
    }
}
