const ethers = require("ethers")
require('dotenv').config()

PRIVATE_KEY = process.env.PRIVATE_KEY
L2_RPC_URL = process.env.L2_RPC_URL || "https://goerli-rollup.arbitrum.io/rpc"
L3_RPC_URL = process.env.L3_RPC_URL
INBOX_CONTRACT_ADDRESS = process.env.INBOX_CONTRACT_ADDRESS
VALUE = process.env.VALUE

// Exporting the main function for use in other scripts
const depositETH = async () =>  {
  if (!PRIVATE_KEY || !L2_RPC_URL || !L3_RPC_URL) {
      throw new Error('Required environment variable not found');
  }

  // Generating providers from RPCs
  const l2Provider = new ethers.providers.JsonRpcProvider(L2_RPC_URL);

  // Creating the wallet and signer
  const l2Signer = new ethers.Wallet(PRIVATE_KEY).connect(l2Provider);

  // create contract instance
  const depositEthInterface = new ethers.utils.Interface([
    "function depositEth() public payable"
  ]);
  const contract = new ethers.Contract(INBOX_CONTRACT_ADDRESS, depositEthInterface, l2Signer);

  if (!VALUE) {
    VALUE = '0.4'
  }

  const tx = await contract.depositEth({
      value: ethers.utils.parseEther(VALUE)
  });

  console.log(`Briding ${VALUE} eth to your L3...`)
  console.log('Transaction hash on Arbitrum Goerli: ', tx.hash);
  await tx.wait();
  console.log('Transaction has been mined');
}

const main = async () => {
    await depositETH()
}  // main

main().then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
