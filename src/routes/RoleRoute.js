const routes = require("express").Router()
const { Router } = require("express")
const roleController = require("../controller/RoleController")

routes.get("/getroles",roleController.getAllrole)
routes.post("/addrole",roleController.addRole)
routes.delete("/deleterole/:id",roleController.deleteRole)
routes.get("/getrole/:id",roleController.findRole)


module.exports=routes

