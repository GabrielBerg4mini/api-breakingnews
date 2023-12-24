const route = require("express").Router()
const userController = require("../controllers/user.controller")

route.get("/", userController.produtos)

module.exports = route
