const { Connection, Keypair, PublicKey, Transaction, clusterApiUrl } = require('@solana/web3.js');
const { getOrCreateAssociatedTokenAccount, createTransferInstruction } = require('@solana/spl-token');

// Function to transfer tokens using secret key
async function transferTokensUsingSecretKey() {
  try {
    // 1. Create a connection to the Solana network (devnet or mainnet)
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    // 2. Load the sender's secret key (as a Uint8Array)
    const secretKey = Uint8Array.from([
      // 32-byte secret key (replace with your secret key)
      19, 8, 3, 5, 8, 41, 8, 39, 55, 99, 88, 3, 92, 11, 48, 79,
      12, 92, 33, 98, 52, 14, 67, 90, 67, 109, 32, 75, 58, 42, 3, 77,
    ]);

    // 3. Create a Keypair object from the secret key
    const senderKeypair = Keypair.fromSecretKey(secretKey);

    // 4. Define the recipient's public key (replace with the actual recipient)
    const recipientPublicKey = new PublicKey("CiQEJBUQThv7b6NYvhVFwX1Xput4jfWBainH7PLp2C49");

    // 5. Define the token's mint address (EdCoin token, replace with the correct mint address)
    const mintAddress = new PublicKey("BvP85X89gPao59QmNFRrwXQUwrbVEv3iB7ZqJHnDznHY");

    // 6. Get or Create Associated Token Accounts for sender and recipient
    const senderTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      senderKeypair, // Use the sender's keypair as the payer
      mintAddress,   // Token mint address
      senderKeypair.publicKey // Sender's public key
    );

    const recipientTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      senderKeypair,
      mintAddress,
      recipientPublicKey
    );

    // 7. Create the transfer instruction
    const amountToSend = 10 * 10 ** 6; // Example: 10 tokens, assuming 6 decimals for token

    const transferInstruction = createTransferInstruction(
      senderTokenAccount.address, // From sender
      recipientTokenAccount.address, // To recipient
      senderKeypair.publicKey, // Sender's public key
      amountToSend // Amount to transfer in smallest units (e.g., 10 EdCoins)
    );

    // 8. Create the transaction
    const transaction = new Transaction().add(transferInstruction);

    // 9. Set the fee payer and recent blockhash
    transaction.feePayer = senderKeypair.publicKey;
    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;

    // 10. Sign the transaction with the sender's secret key
    const signedTransaction = await senderKeypair.signTransaction(transaction);

    // 11. Send the transaction
    const signature = await connection.sendRawTransaction(
      signedTransaction.serialize()
    );
    await connection.confirmTransaction(signature, "confirmed");

    console.log("✅ Transaction successful! Signature:", signature);
  } catch (error) {
    console.error("Error sending tokens:", error);
  }
}

// Call the transfer function
transferTokensUsingSecretKey();
