pragma solidity >=0.4.17;

contract test {
    string private dataHash = "root";

    function getString() public view returns (string memory) {
        return dataHash;
    }

    function setString(string memory newHash) public {
        dataHash = newHash;
    }
}
