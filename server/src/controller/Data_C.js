const DataService = require("../service/Data_S")

async function Data(req, res) {
    try {
        const data = await DataService.Data();
        res.status(200).json({data})
    }catch(error) {
        res.status(402).json({message : error.message})
    }
}

module.exports = Data;