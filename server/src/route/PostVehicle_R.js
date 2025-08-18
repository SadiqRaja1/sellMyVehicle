const express = require("express")
const PostVehicleController =  require("../controller/PostVehicle_C")
const {upload} = require("../configuration/storageConfig")

const router = express.Router();

router.post(
    "/vehicle",
    upload.fields([
        {name : "image1", maxCount : 1},
        {name : "image2", maxCount : 1},
        {name : "image3", maxCount : 1},
        {name : "image4", maxCount : 1},
        {name : "image5", maxCount : 1},
        {name : "image6", maxCount : 1},
    ]),
    PostVehicleController
);

module.exports = router;