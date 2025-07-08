const express = require("express");
const loginController = require("../controller/Login_C")

const router = express.Router();

router.post("/login", loginController);

module.exports = router;