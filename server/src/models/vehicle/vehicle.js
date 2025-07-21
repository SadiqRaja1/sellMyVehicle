const mongoose = require("../../configuration/dbConfig")

const vehicleSchema = new mongoose.Schema({
    vehicleType:{
        type:String,
        enum : ["Bike", "Car"],
        required: true
    },

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

    state:{
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
    },

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

    insurance_show:{
        type:String,
        required: true,
        enum : ["Zero Depreciation", "First-Party", "Third-Party Insurance", "Expired"]
    },

    insurance_valid_Till : {
        type:Date,
        required: true
    },
    
    seller_Comment : {
        type:String,
        maxlength:1000,
        trim: true
    },
    
})

const Vehicle = mongoose.model("Vehicle", vehicleSchema)

module.exports = Vehicle