const express = require("express");
const app = express();
const RouteSignup = require("./route/Signup_R");

app.use(express.json())

app.use("/user",RouteSignup)

app.get("/", (req, res) => {
    res.send("Connected with the root path");
    console.log("root path called")
})

app.listen(1000, () => {
    console.log("Server running at port 1000")
})