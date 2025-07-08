const loginService = require("../service/Login_S")

async function login(req, res) {
    try{
        const response = await loginService(req.body);
        res.status(2000).json({message : response})
    }catch(error){
        res.status(400).json({message : error.message})
    }
}

module.exports = login;