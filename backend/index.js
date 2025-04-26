const express = require("express");
const app = express();
const PORT = 8000 || process.env.PORT;
const userRoutes = require("./Routes/User");

app.use("/user" , userRoutes);

app.listen(PORT , ()=> {
    console.log(`server running on ${PORT}`)
})