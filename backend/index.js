const express = require("express");
const app = express();
const userRoutes = require("./Routes/User");
const {config} = require("dotenv");
const { walletInfoController } = require("./Controller/User");
config();
const PORT = process.env.PORT || 8000;
const cors = require('cors');
const connectDb = require("./DB/db");

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors()); 

app.use("/user" , userRoutes);
// app.post("/transaction" , transaction);




app.listen(PORT , ()=> {
    console.log(`server running on ${PORT}`)
})