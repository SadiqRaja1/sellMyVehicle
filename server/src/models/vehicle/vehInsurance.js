const mongoose = require("../../configuration/dbConfig")

const vehicleInsuranceSchema = mongoose.Schema({
    show:{
        type:String,
        required: true,
        enum : ["Zero Depreciation", "First-Party", "Third-Party Insurance", "Expired"]
    },
    valid_Till : {
        type:Date,
        required: true
    }
})

module.exports = vehicleInsuranceSchema;