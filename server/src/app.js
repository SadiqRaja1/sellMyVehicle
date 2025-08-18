const express = require("express");
const app = express();
const RouteSignup = require("./route/Signup_R");
const RouteLogin =  require("./route/Login_R")
const cors = require("cors")
const RoutePostVehicle = require("./route/PostVehicle_R")

const alowedLink = {
    origin:[process.env.Frontend_URL]
}

app.use(express.json())
app.use(cors(alowedLink))
app.use(express.static("Public"))
    
app.use("/user",RouteSignup)
app.use("/auth",RouteLogin)
app.use("/post", RoutePostVehicle)

app.get("/", (req, res) => {
    res.send("Connected with the root path");
    console.log("root path called")
})

app.listen(1000, () => {
    console.log("Server running at port 1000")
})