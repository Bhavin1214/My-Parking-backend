const routes = require("express").Router()
const { Router } = require("express")
const userController = require("../controller/UserController")

routes.get("/getusers",userController.getAllUser)
routes.post("/usersignup",userController.signUpUser)
routes.delete("/deleteuser/:id",userController.deleteUser)
routes.get("/getuser/:id",userController.getUserById)
routes.post("/userLogin",userController.loginUser)

module.exports = routes  