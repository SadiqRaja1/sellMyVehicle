const vehicle = require("../models/vehicle/vehicle")

async function Data() {
    try {
        const data = await vehicle.find();
        return data;
    }catch (error) {
        throw new Error (`Something went wrong : ${error}`);
    }
}

module.exports = {Data}