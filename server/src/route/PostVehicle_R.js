const express = require("express")
const PostVehicleController =  require("../controller/PostVehicle_C")

const router = express.Router();

router.post("/vehicle", PostVehicleController)

module.exports = router;