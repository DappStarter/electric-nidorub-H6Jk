require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remember snake good knee outer shield'; 
let testAccounts = [
"0x6b0f3eaba6a69f1a85dc27d59af8da87846ab6b332a2316851ff2b3ca305191a",
"0xb7320a7d0174256e82aa068cd8527766b7eeabaa0f3167ec5cacfefe38cadda8",
"0x5b0a88316d0ed60ac02b58512086068b71fcf38fb75c544b85d6c1ccbe3adfcf",
"0x7ec98bb4561e1cd8133d1f4c2cda97fa4b51a3338a272c6655a6b6ae4f99450e",
"0x4c78620c6c4120a85677175752c175b0fe3d51fd7287992fd9f44e3d9c88eafe",
"0x13154f0ea170be46f48512e4ad26c2afc4dbe6c29644db0199ffc15af6b5f83a",
"0x79497730f6ed4b1124eba85e26b8e12fc4aec7a5f0b74785a39266d17323f853",
"0xe071e04c5c9a261b429252fb1f00783b68bce44d14be47fc630fd28bce02dc79",
"0xfab0cb75ae9711f3f32000ae504c6480d6a34a65a5e02b37ba69832d6ac5c7e9",
"0x97549d56bcae40211f716e3fb93a73b0fbb1d9a6d9f0f078ba6391a569ab0883"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

