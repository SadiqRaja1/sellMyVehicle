const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Connected with the root path");
    console.log("root path called")
})

app.listen(1000, () => {
    console.log("Server running at port 1000")
})