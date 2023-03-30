const express = require('express');
const router = express.Router();

const controller = require("../controllers/controller");

module.exports = function (app) {
    router.get("/user/getAll", controller.getAllUsers);
    router.post("/user/create", controller.createUser);
    router.put("/user/edit", controller.editUser);
    router.post("/user/login", controller.loginUser);
    router.delete("/user/delete", controller.deleteUser);
    
    app.use('/', router);
};
//app.get, app.post was given initially, but the app was not getting called properly.
//Used the router to give the api calls router.get etc