const mongoose = require("../configuration/dbConfig")

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required : true,
    },
    email: {
        type : String,
        required : true,
    },
    password:{
        type : String,
        required : true,
    },
    role:{
        type:String,
        enum:["customer", "admin"],
        default : "customer"
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;