const express = require("express");
import { loginController, logoutController, signUpController } from "../Controller/User";
const router = express.Router();


router.route("/login").get(loginController);
router.route("/signup").post(signUpController);
router.route("/logout").post(logoutController);


export default router;