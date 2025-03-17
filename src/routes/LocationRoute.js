const routes = require("express").Router()
const locationController = require("../controller/LocationController")

routes.post("/addlocation",locationController.addLocation)
routes.get("/getlocation",locationController.getLocation)

module.exports = routes