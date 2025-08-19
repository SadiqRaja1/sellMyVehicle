const express = require("express");
const DataController = require("../controller/Data_C")

const router = express.Router();

router.get("/data", DataController)

module.exports = router