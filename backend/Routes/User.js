const express = require("express");
const { loginController, logoutController, signUpController, walletInfoController } = require("../Controller/User");
const router = express.Router();


router.post("/login" ,loginController);
router.post("/signup" , signUpController);
router.post("/logout" , logoutController);
router.get("/walletinfo" , walletInfoController);


module.exports = router;