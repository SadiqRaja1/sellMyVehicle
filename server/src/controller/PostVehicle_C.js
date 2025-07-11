

async function postVehicle(req, res) {
    try{
        const data = req.body;
        console.log(data);
    }catch(error){
        res.status(401).json({message : error})
    }
}

module.exports = postVehicle;