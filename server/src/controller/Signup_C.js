const signupService = require("../service/Signup_S")

async function register(req, res) {
    try{
        const response = await signupService(req.body);
        res.status(200).json({message : response})
    }catch(error) {
        res.status(500).json({message : error.message});
    }
}


module.exports = register