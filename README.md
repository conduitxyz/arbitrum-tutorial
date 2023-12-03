# Conduit Arbitrum Tutorial

## Bridging ETH
Bridge to your arbitrum l3 deployed with Conduit. To run, first

```
git clone git@github.com:conduitxyz/arbitrum-tutorial.git
```

Then in the cloned directory

```
yarn install
```

You will need a private key, your conduit rpc URL, and your inbox contract address.

Make sure your wallet has at least 0.4 eth to bridge over (you can change this by using the environment variable `VALUE`)

Your inbox contract address is available under `core.json` in your arbitrum orbit deployment console. Example json:

```{
  "chainInfo": {
    "minL2BaseFee": 100000000,
    "networkFeeReceiver": "0x45eFFbD799Ab49122eeEAB75B78D9C56A187F9A7",
    "infrastructureFeeCollector": "0x45eFFbD799Ab49122eeEAB75B78D9C56A187F9A7",
    "batchPoster": "0x6d55B076f1881550B88705aaE4F80888a458D5c6",
    "staker": "0x3d4481fB68Afa66C383AD8d82b80dD46e1c3344c",
    "chainOwner": "0x45eFFbD799Ab49122eeEAB75B78D9C56A187F9A7",
    "chainName": "conduit-orbit-deployer",
    "chainId": 123120999
  },
  "coreContracts": {
    "rollup": "0x322F8CE0E9c487702a52773d5C7ED6EEE04AD088",
    "inbox": "0xCd71eb26933aa9Db7b4B1DaB2c545378B78a1adB",
    "outbox": "0xaf266c27F5aeDf26658303589AE48dea6f989Ce0",
    "adminProxy": "0x5e289bf37B4e11C2317674a06acae72784C6ed90",
    "sequencerInbox": "0xa856649875bb972820774e02aF512432d8955810",
    "bridge": "0x00711A43D50FB4272BA29c701c3e00694A911eAA",
    "utils": "0x54F8e1d51e4B97d046aE6651fe260ADe4139D553",
    "validatorWalletCreator": "0x5D8a0a8ee09185d0898f03a057dde4BB3EaDA601"
  },
  "tokenBridgeContracts": {
    "l2Contracts": {
      "customGateway": "0x6fFdBF564FEEa8992Fe824b7CA60D83FcDe4C696",
      "multicall": "0x6E0E88ed8Ea82E4Eca667e989Ae7D2B7C4509c01",
      "proxyAdmin": "0xC62B2fe4F4F03f542587f4E97C42283AE961B8db",
      "router": "0xCd02d87F47336284A1D503c32B1DAcE78C01B299",
      "standardGateway": "0x99808a83e5577E7e277F57dD9fC1a46C2c1d200b",
      "weth": "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3",
      "wethGateway": "0x5D50985441f2d6E000c13D7842Cb00e157C2707e"
    },
    "l3Contracts": {
      "customGateway": "0xB48E4A4B8EC04c9F1819302FD370f5B3797c638C",
      "multicall": "0xF40412D732d5a2DBF9267C400826661d16220B32",
      "proxyAdmin": "0xBa04bD4aDa714b0cb3B87784dc9F20620aF37428",
      "router": "0x764cDAAc715ef3e29B3c8D28A1261AD9B7eD206D",
      "standardGateway": "0xC17A41629Cd100c74B1Bed7b49D2E0517EfDeaeb",
      "weth": "0x2959eAd3c9dfB1d59780638E60ed29349ce36498",
      "wethGateway": "0x361E6430Abc9971e66E519dAe7544c1B0cC1035e"
    }
  }
}
```

Take the `coreContracts.inbox` value and pass it into the command below.

```
PRIVATE_KEY=[YOUR_PRIVATE_KEY] L2_RPC_URL=[YOUR PARENTCHAIN RPC URL] L3_RPC_URL=[YOUR CONDUIT L3_RPC_URL] INBOX_CONTRACT_ADDRESS=[YOUR_INBOX_CONTRACT_ADDRESS] node index.js
```

## Generalized Bridging
You can customize the arbitrum sdk with this function: https://github.com/OffchainLabs/arbitrum-sdk/blob/8f56af98eb246e5ea5863dca6d8a6f7f0211477a/src/lib/dataEntities/networks.ts#L362

