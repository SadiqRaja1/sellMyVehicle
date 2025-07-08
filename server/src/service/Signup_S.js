const User = require("../models/user")
const bcrypt = require("bcrypt")

async function register(data) {
    try{
        const hassedPassword = await bcrypt.hash(data.password,10);
        const newUser = new User({
            name:data.name,
            email:data.email,
            password: hassedPassword,
            role:"customer"
        });
        const response = await newUser.save();
        return "User created successfully"
    }catch(error){
        throw new Error("User created failed")
    }
}

module.exports = register