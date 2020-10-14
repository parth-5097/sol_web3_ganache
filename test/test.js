const Web3 = require('web3');
const ABI = require('../build/contracts/test.json');


const web3 = new Web3('http://localhost:7545');
const network_id = 5777;
console.log(ABI.networks[network_id].address);
// const contract_address = ABI.networks[5777].address;

// console.log(ABI.abi);
const test_contract = new web3.eth.Contract(ABI.abi, ABI.networks[network_id].address, {
    from: '0x775E79057f7c58414Bdea0BE8a675BB2Dd2f66Ea',
    gasPrice: '6000000'
});

// console.log(test_contract.methods.str());
test_contract.methods.getName().call().then((res) => console.log(res));
test_contract.methods.setName("Dark-knight_0").send();
test_contract.methods.getName().call().then((res) => console.log(res));
// test_contract.methods.setName("Dark-knight_1").send();
// test_contract.methods.getName().call().then((res) => console.log(res));
// test_contract.methods.setName("Dark-knight_2").send();
// test_contract.methods.getName().call().then((res) => console.log(res));
// test_contract.methods.setName("Dark-knight_3").send();
// test_contract.methods.getName().call().then((res) => console.log(res));