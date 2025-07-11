const mongoose = require("../../configuration/dbConfig")
const vehicleNameSchema = require("./vehName")
const vehicleLocation = require("./vehLoc")
const vehicleInsurance = require("./vehInsurance")

const carSchema = new mongoose.Schema({
    vehicleType:{
        type:String,
        enum : ["Bike", "Car"],
        required: true
    },

    vehicleName: vehicleNameSchema,

    year : {
        type:Number,
        required: true
    },
    fule_Type : {
        type:String,
        required: true,
        enum:["Petrol", "Diesel", "Electric", "CNG"]
    },
    kilometer : {
        type:Number,
        required: true
    },
    year : {
        type:Number,
        required: true
    },

    location : vehicleLocation,

    sellingPrice: {
        type:String ,
        required:true
    },

    owner : {
        type: String,
        required: true
    },

    color: {
        type:String,
        required:true
    },

    transmission : {
        type:Sring,
        required:true
    },

    registration_Type : {
        type:String,
        enum : ["Manual", "Automatic"],
        required:true
    },

    seller_Comment : {
        type:String,
        maxlength:1000,
        trim: true
    },

    Insurance : vehicleInsurance,
    
})