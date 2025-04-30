const User = require("../Model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { config } = require("dotenv");
config();
const { Connection, PublicKey, clusterApiUrl } = require('@solana/web3.js');

const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
// const connection = "SDFsdfs";


const signUpController = async (req , res) => {
  try {
    // console.log("signup");
    const { email, password, confirmPassword , publicKey } = req.body;
    // console.log(email , password , confirmPassword , publicKey);
    if (!email || !password || !confirmPassword) {
      res.status(404).json({ message: "all fields required" });
      return;
    }
    // console.log("signup");
    if(password !== confirmPassword)
      {
        res.status(400).json({ message: "Password does not Match" });
        return;
      }
      // console.log("signup");
      const user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ message: "email already used" });
        return;
      }
      // console.log("signup");
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ email, password: hashedPassword  , publicKey});
      // console.log("signup");
      await newUser.save();
      res
      .status(201)
      .json({ message: "user created successfully" });
    // console.log(res);

    return;
  } catch (error) {
    console.log("Erorr signup" , error);
    res.status(400).json({ message: "error in signUpController", error });
    return;
  }
};

const loginController = async (req, res) => {
  try {
    // console.log("login");
    const { email, password } = req.body;
    // console.log(req.body);
    if (!email || !password) {
      res.status(400).json({ message: "all fields required" });
      return;
    }
    // console.log("SDFsdef");
    const user = await User.findOne({ email });
    // console.log("SDFsd");
    if (!user) {
      res.status(401).json({ message: "invalid credentials" });
      return;
    }
    const isSame = await bcrypt.compare(password, user.password);
    if (!isSame) {
      res.status(401).json({ message: "wrong password" });
      return;
    }
    res
      .status(200)
      .json({ message: "login successfull" });
    // console.log(res);
    return;
  } catch (error) {
    res.status(500).json({ message: "error in login ", error });
    return;
  }
};

const logoutController = (req, res) => {
  try {
    // console.log("logout")
    res.status(200).json({message : "logout succesfull" });
    return;
  } catch (error) {
    console.log("error in logout" , error);
    return;
  }
}



const walletInfoController = async (req, res) => {
  try {
    const { publicKeyString } = req.body;

    if (!publicKeyString) {
      return res.status(400).json({ error: "Public key is required" });
    }

    const publicKey = new PublicKey(publicKeyString);

    // 1. SOL Balance (native SOL)
    const balanceLamports = await connection.getBalance(publicKey);
    const balanceSOL = balanceLamports / 1e9; // Convert lamports to SOL

    // 2. Full Account Info (to see rent reserve and other balances)
    const accountInfo = await connection.getAccountInfo(publicKey);

    let rentReserveLamports = 0;
    if (accountInfo) {
      rentReserveLamports = accountInfo.lamports;
    }

    // 3. Token Balances (SPL tokens)
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
      programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA") // SPL Token program ID
    });

    const tokens = [];

    tokenAccounts.value.forEach((tokenAccountInfo) => {
      const info = tokenAccountInfo.account.data.parsed.info;
      const mintAddress = info.mint;
      const tokenAmount = info.tokenAmount.uiAmount;
      const delegatedAmount = info.tokenAmount.delegateAmount
        ? info.tokenAmount.delegateAmount.uiAmount
        : 0;

      if (tokenAmount > 0) {
        tokens.push({
          mint: mintAddress,
          amount: tokenAmount,
          delegatedAmount: delegatedAmount,
        });
      }
    });

    return res.json({
      address: publicKey.toString(),
      solBalance: `${balanceSOL} SOL`,
      rentReserved: `${rentReserveLamports / 1e9} SOL`,
      tokens: tokens.length > 0 ? tokens : "No SPL tokens",
      network: 'mainnet-beta'
    });

  } catch (err) {
    console.error('Error fetching wallet details:', err);
    return res.status(500).json({ error: 'Error fetching wallet details' });
  }
};






module.exports = {loginController , logoutController , signUpController , walletInfoController};