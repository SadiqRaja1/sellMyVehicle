const postVehicleService = require("../service/PostVehicle_S")

async function postVehicle(req, res) {
    try{
        const data = {
            ...req.body,
            image1 : req.files["image1"] ? req.files["image1"][0].filename : "",
            image2 : req.files["image2"] ? req.files["image2"][0].filename : "",
            image3 : req.files["image3"] ? req.files["image3"][0].filename : "",
            image4 : req.files["image4"] ? req.files["image4"][0].filename : "",
            image5 : req.files["image5"] ? req.files["image5"][0].filename : "",
            image6 : req.files["image6"] ? req.files["image6"][0].filename : "",
        };
        const response = await postVehicleService.post(data);
        res.status(200).json({message : response})
    }catch(error){
        res.status(401).json({message : error})
    }
}

module.exports = postVehicle;