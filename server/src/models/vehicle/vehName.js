const mongoose = require("../../configuration/dbConfig")

const vehicleNameSchema = new mongoose.Schema ({
    make : {
        type:String,
        required:true
    },
    model : {
        type: String,
        required: true
    },
    variant : {
        type:String,
    },
})

module.exports = vehicleNameSchema