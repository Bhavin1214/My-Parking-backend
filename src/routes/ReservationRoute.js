const routes = require("express").Router()
const reservationController = require("../controller/ReservationController")

routes.post("/reserve",reservationController.reserve)
routes.get("/allreservations",reservationController.getreservedData)

module.exports = routes