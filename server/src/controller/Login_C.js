const loginService = require("../service/Login_S")

async function login(req, res) {
    try{
        const token = await loginService.login(req.body);
        res.status(200).json({token})
    }catch(error){
        res.status(401).json({message : error.message})
    }
}

module.exports = login;