pragma solidity >=0.4.17;

contract test {
    string private name = "Ire";
    string str = "Darkknight";

    function getName() public view returns (string memory) {
        return name;
    }

    function setName(string memory newName) public {
        name = newName;
    }
}
