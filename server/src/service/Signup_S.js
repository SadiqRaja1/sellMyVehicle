const User = require("../models/user")

async function register(data) {
    try{
        const newUser = new User(data);
        const response = await newUser.save();
        return "User created successfully"
    }catch(error){
        throw new Error("User created failed")
    }
}

module.exports = register