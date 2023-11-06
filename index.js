const express = require('express');
const app = express();
const port = 8000;
const TronWeb = require('tronweb');
const ABI = require('./ABI.json');
const HttpProvider = TronWeb.providers.HttpProvider;

// Define your Tron nodes
const fullNode = new HttpProvider("https://api.nileex.io");
const solidityNode = new HttpProvider("https://api.nileex.io");
const eventServer = new HttpProvider("https://api.nileex.io");

// Define your private key (keep it secret)
const privateKey = "cf6a4dcb7a1637885669f0437cfa498eb018a4c2f1ef97028a5bac54b1ce5f35";

// Initialize the TronWeb instance
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

// Define your contract address and instantiate the contract
const contractAddress = "TTd2VmwJG4whvieQgsYn1ELgbS5MnEUUUK";
const contract = tronWeb.contract(ABI, contractAddress);

// Define addresses (receiver, service provider, and sender)
const ReceiverAdd = "TLTA47Dqn1LnsK7UENMGpimFmxc8Gay7JW";
const ServiceProviderAdd = "TPhjcXiHnF4oc7cdPmC5VyFqi99gDTCU4z";
const SendersAdd = "THQCJsoeRmNEohr7pAYzmXt196jfpHhiXQ";

app.use(express.json());

// Send TRX to the contract address
app.post('/send', async (req, res) => {
  const amount = req.body.amount;
  try {
    if (!amount || isNaN(amount)) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    const transaction = await tronWeb.transactionBuilder.sendTrx(
      contractAddress,
      amount * 1e6,
      SendersAdd
    );

    const signedTransaction = await tronWeb.trx.sign(transaction, privateKey);
    const receipt = await tronWeb.trx.sendRawTransaction(signedTransaction);

    if (receipt.result) {
      // Wait for the transaction to be confirmed
      const confirmed = await tronWeb.trx.isConfirmed(receipt.txid);
      if (confirmed) {
        // Retrieve the updated balance
        const balance = await contract.methods.getBalance().call();
        console.log('Updated balance:', balance);

        return res.status(200).json({ message: 'Funds Added Successfully' });
      } else {
        // Transaction is not confirmed yet
        console.log('Transaction is not confirmed yet');
      }
    }
  }

  catch (error) {
    console.error("Error sending TRX to the contract:", error);
    return res.status(500).json({ error: 'Error sending TRX to the contract' });
  }
});


// Get the balance of the contract
app.get('/balance', async (req, res) => {
  try {
    const result = await contract.methods.getBalance().call();
    const BNumber = result / 1e6;
    const nNumber = Number(BNumber);
    // console.log(nNumber);
    return res.status(200).json({ balance: nNumber });
  } catch (error) {
    console.error("Error while interacting with the contract:", error);
    return res.status(500).json({ error: 'Error interacting with the contract' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});