const {
    Connection,
    PublicKey,
    Transaction,
    clusterApiUrl
  } = require("@solana/web3.js");
  
  const {
    getOrCreateAssociatedTokenAccount,
    createTransferInstruction
  } = require("@solana/spl-token");
  
  async function transaction() {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    
    const sender = window.solana; // Phantom
    await sender.connect(); // Connect Phantom
  
    const senderPublicKey = sender.publicKey;
    const recipientPublicKey = new PublicKey("CiQEJBUQThv7b6NYvhVFwX1Xput4jfWBainH7PLp2C49");
    const mintAddress = new PublicKey("5JnkRTuRdofSApte5BYgaDFUhCFXj9JiPEEyJ2y7WFy6");
  
    const senderTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      sender,
      mintAddress,
      senderPublicKey
    );
  
    const recipientTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      sender,
      mintAddress,
      recipientPublicKey
    );
  
    const amount = 10 * 10**6; // 10 tokens assuming 6 decimals
    const instruction = createTransferInstruction(
      senderTokenAccount.address,
      recipientTokenAccount.address,
      senderPublicKey,
      amount
    );
  
    const transaction = new Transaction().add(instruction);
    transaction.feePayer = senderPublicKey;
    let blockhash = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash.blockhash;
  
    const signed = await sender.signTransaction(transaction);
    const signature = await connection.sendRawTransaction(signed.serialize());
    await connection.confirmTransaction(signature, "confirmed");
  
    console.log("✅ Transaction confirmed:", signature);
  }
  