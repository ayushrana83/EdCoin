const express = require("express");
const app = express();
const userRoutes = require("./Routes/User");
const {config} = require("dotenv");
const { walletInfoController } = require("./Controller/User");
config();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use("/user" , userRoutes);
// app.get("/user/walletinfo" , walletInfoController);
// app.get("/user/abc" , (req , res) => {
    // return res.json("success");
// });

app.listen(PORT , ()=> {
    console.log(`server running on ${PORT}`)
})