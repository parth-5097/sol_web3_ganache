const Web3 = require('web3');
const ABI = require('../build/contracts/test.json');
const jsonData = require('../build/contracts/Migrations.json');
const opn = require('opn');
// const express = require('express');
const ipfsClient = require('ipfs-http-client');
const { json } = require('express');

// const app = express();
// app.use(express.json());

const ipfs = ipfsClient('http://localhost:5001');
const web3 = new Web3('http://localhost:7545');

const network_id = 5777;
const fileName = "testFile";
// console.log(ABI.networks);
// console.log(ABI.networks[network_id].address);
// const contract_address = ABI.networks[5777].address;
// const data = JSON.stringify(ABI.networks);
// console.log(data[2]);
// console.log(ABI.abi);
const test_contract = new web3.eth.Contract(ABI.abi, ABI.networks[network_id].address, {
    from: '0x775E79057f7c58414Bdea0BE8a675BB2Dd2f66Ea',
    gasPrice: '100000000000'
});

let hash;
const addFile = async () => {
    const file = { path: 'testFile', content: Buffer.from(JSON.stringify(jsonData)) }
    const fileAdded = await ipfs.add(file);
    hash = fileAdded.cid;
    test_contract.methods.setString(`${hash}`).send().then(
        test_contract.methods.getString().call().then(
            (res) => {
                console.log(res);
                opn(`http://localhost:8080/ipfs/${res}`);
            })
    );
}
addFile();
// console.log(test_contract.methods.str());
// test_contract.methods.getString().call().then((res) => console.log(res));