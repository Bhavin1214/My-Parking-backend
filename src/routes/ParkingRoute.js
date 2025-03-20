const routes = require("express").Router();
const parkingController = require("../controller/ParkingController")

routes.post("/addparking",parkingController.addParking);
routes.get("/getparking",parkingController.getAllPakring)

module.exports = routes