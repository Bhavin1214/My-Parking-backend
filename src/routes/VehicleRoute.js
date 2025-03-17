const routes = require("express").Router()
const vehicalController = require("../controller/VehicleController")

routes.post("/addvehicle",vehicalController.addVehicle)
routes.get("/allvehicle",vehicalController.getVehicle)

module.exports = routes