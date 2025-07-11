const mongoose = require("../../configuration/dbConfig")

const vehicleLocation = new mongoose.Schema({
    State:{
        type:String,
        enum: ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"],
        required: true,
    },

    city : {
        type:String,
        required:true
    },

    locality : {
        type:String,
    }
})

module.exports = vehicleLocation