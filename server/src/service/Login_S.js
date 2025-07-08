const User = require("../models/user")
const bcrypt = require("bcrypt");
const {generateToken} = require("../utils/jwtUtils")

async function login(data) {
    try {
        const {email, password} = data;
        const existingUser = await User.findOne({email :email});
        if(!existingUser){
            throw new Error("User no exist")
        }

        const checkPassword = await bcrypt.compare(password, existingUser.password)

        if(!checkPassword){
            throw new Error("Incorrect password")
        }

        const token = generateToken(existingUser);
        return token
    }catch(error){
        throw new Error (`Some thing went wrong: ${error}`)
    }
}

module.exports = {login};
