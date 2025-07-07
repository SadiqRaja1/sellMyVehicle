const express = require("express");
const signupController = require("../controller/Signup_C");

const router = express.Router();

router.post("/register", signupController)

module.exports = router;