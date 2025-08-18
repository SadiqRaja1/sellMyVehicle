const Vehicle = require("../models/vehicle/vehicle");

async function post(data) {
    try { 
        const newVehicle =  new Vehicle(data);
        const response = await newVehicle.save();
        console.log(response)
        return "Post was successfully saved"
    }catch(error){
        console.error(error)
        throw new Error(`Some thing went wrong ${error}`)
        
    }
}

module.exports = {post}