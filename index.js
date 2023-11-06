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
// const contractAddress = "TJzdvz7Jz6L9AAwdfXRJhfiTqq8SEKbwc2";
const contractAddress = "TEkKw9cSCpWzK4NuYZYUu7hWYqwdtfmacz";

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
      const confirmed = await tronWeb.trx.getTransaction(receipt.transaction.txID);
      if (confirmed.ret[0].contractRet == "SUCCESS") {
        return res.status(200).json({ message: 'Funds Added Successfully' });
      } else {
        return res.status(400).json({ error: 'Transaction failed' });
      }
    }
    else {
      return res.status(400).json({ error: 'Transaction failed' });
    }
  }
  catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


// Get the balance of the contract
app.get('/balance', async (req, res) => {
  try {
    const result = await tronWeb.trx.getBalance(contractAddress);
    const BNumber = result / 1e6;
    const nNumber = Number(BNumber);
    return res.status(200).json({ balance: nNumber });
  } catch (error) {
    console.error("Error while interacting with the contract:", error);
    return res.status(500).json({ error: 'Error interacting with the contract' });
  }
});


// app.get('/sendTRX', async (req, res) => {
//     try {
//       const totalAmount = 10;
//           const firstAddress = ReceiverAdd;
//           const secondAddress = ServiceProviderAdd;
//           const ownerAddress = await contract.getOwner().call();
//           const firstAmount = totalAmount * 0.01;

//           const secondAmount = totalAmount - firstAmount;

//           const firstTransfer = await tronWeb.transactionBuilder.sendTrx(firstAddress, firstAmount * 1e6,ownerAddress);

//           console.log('1% transfer:', firstTransfer);
//           const secondTransfer = await tronWeb.transactionBuilder.sendTrx(secondAddress, secondAmount,ownerAddress);

//           console.log('Rest transfer:', secondTransfer);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   });


app.get('/sendTRX', async (req, res) => {
  try {
    const contract = await tronWeb.contract().at(contractAddress);
    const ownerAddress = await contract.getOwner().call();

    const amountInTRX = 5;
    const amountInSUN = amountInTRX * 1e6;

    // Call the sendEther function in the contract to send the specified amount in SUN
    const result = await contract.sendEther(amountInSUN, ReceiverAdd, ServiceProviderAdd).send({
      shouldPollResponse: true,
      feeLimit: 1e8, // Adjust the fee limit as needed
      from: ownerAddress,
      privateKey: privateKey,
    });

    console.log('Transaction Hash:', result);
    res.json({ "Send": result });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ "Error": error });
  }
});



// Start the Express server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});