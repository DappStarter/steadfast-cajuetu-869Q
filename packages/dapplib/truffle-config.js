require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn property gesture father flock try'; 
let testAccounts = [
"0x7a9d5a2cab24148bfa559debb3668c03a01145c00d22db8803326979daf7ffea",
"0x38595518c4cce99e9c3e9885b6b13510a5309acebe4039a0454dda1b7c7ce097",
"0xa123d9316b41ad227fa3df7c1825ea7ad68095fc9a26f054831eff3997de0f45",
"0x0bbc15fc28d5f5d9c6ad3818a102f1d0257788841755e1eeef4e6825e0c050ca",
"0x48bba8dab3b883f40797691539f505d27c73294d7797fdb22f731a506cbdc263",
"0x4cae3d49b38084206ed5793018a47b164e1438a698b19236eac051d3a720d625",
"0xd4f71c791e77b4dc83e659c968d4377fba811c682a313cf06ebdb34ebec41765",
"0x82885156d047ca3ab3224e5eaeb2c6dc9b915ca13c91f87400ce896ae455862e",
"0x07be7635a5598d7a3fc2458ff0ea2693db74e26d8b35ec5844b22362d32ff2c0",
"0x003b4f999e93da0dfe1c730b4176da65c5611d649597923d2469e87673542fe4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

