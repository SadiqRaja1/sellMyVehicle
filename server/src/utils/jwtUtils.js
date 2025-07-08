const { secretKey } = require("../configuration/jwtConfig");
const jwt = require("jsonwebtoken");

function generateToken(user) {
    const userData = {
        id: user._id,
        name:user.name,
        email:user.email,
        role:user.role
    }
    return jwt.sign(userData, secretKey, {expiresIn : "1h"});
}

module.exports = {generateToken};