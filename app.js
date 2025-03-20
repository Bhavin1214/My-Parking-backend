const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())




const roleroute= require("./src/routes/RoleRoute")
app.use("/role",roleroute)

const userroute = require("./src/routes/UserRoute")
app.use("/user",userroute)

const statroute = require("./src/routes/StateRoute")
app.use("/state",statroute)

const cityroute = require("./src/routes/CityRoute")
app.use("/city",cityroute)

const arearoute = require("./src/routes/AreaRoute")
app.use("/area",arearoute)

const locationroute = require("./src/routes/LocationRoute")
app.use("/location",locationroute)

const vehicleroute = require("./src/routes/VehicleRoute")
app.use("/vehicle",vehicleroute)

const parkingroute = require("./src/routes/ParkingRoute")
app.use("/parking",parkingroute)

const reserveroute = require("./src/routes/ReservationRoute")
app.use("/reservation",reserveroute)


mongoose.connect("mongodb://127.0.0.1:27017/25_node_internship").then(()=>{
    console.log("database connected")
})

const PORT = 3000
app.listen(PORT, ()=>{
    console.log("server started on port number",PORT)
})

