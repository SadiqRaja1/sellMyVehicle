const mongoose = require("mongoose");
require("dotenv").config();

async function main() {
    await mongoose.connect(process.env.Mongo_URL);
}

main().then( () => {
    console.log("connected to db")
}
).catch((error) => {
    console.log("Some error in connecting to db", error);
})

module.exports = mongoose;