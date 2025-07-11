const postVehicleService = require("../service/PostVehicle_S")

async function postVehicle(req, res) {
    try{
        const data = req.body;
        const response = await postVehicleService.post(data);
        res.status(200).json({message : response})
    }catch(error){
        res.status(401).json({message : error})
    }
}

module.exports = postVehicle;