const mongoose = require("../../configuration/dbConfig")
const vehicleNameSchema = require("./vehName")
const vehicleLocation = require("./vehLoc")
const vehicleInsurance = require("./vehInsurance")

const vehicleSchema = new mongoose.Schema({
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
        enum:["Petrol", "Diesel", "Electric"]
    },

    alternate_Fuel :{
        type:String,
        enum:["CNG", "LPG", "none"]
    },

    kilometer : {
        type:Number,
        required: true
    },

    location : vehicleLocation,

    sellingPrice: {
        type:Number ,
        required:true
    },

    owner : {
        type: String,
        enum:["First", "Second", "Third", "Fourth or more"],
        required: true
    },

    color: {
        type:String,
        required:true
    },

    transmission : {
        type:String,
        enum : ["Manual", "Automatic"],
        required:true
    },

    registration_Type : {
        type:String,
        enum:["Individual","Corporate","Taxi"],
        required:true
    },

    Insurance : vehicleInsurance,
    
    seller_Comment : {
        type:String,
        maxlength:1000,
        trim: true
    },
    
})

const Vehicle = mongoose.model("Vehicle", vehicleSchema)

module.exports = Vehicle