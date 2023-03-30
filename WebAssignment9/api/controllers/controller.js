var service = require("../services/service");
var User = require("../models/model");

exports.createUser = async function (req, res) {
    var {email, password} = req.body;
    try{
        var user = await service.createUser(email, password);
        return res.status(200).json({
            status:201,
            data: user,
            message: "User created",
        });
    } catch(e){
        return res.status(400).json({status:400, message: e.message});
    }
};

exports.getAllUsers = async function (req, res) {
    try{
        var user = await service.getAllUsers();
        return res.status(200).json({
            status: 200, data: user, message: "User details: ",});
    } catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.editUser = async function (req, res) {
    var {email, password} = req.body;
    if(User == null){
        return res.status(400).json({status: 400, message: "User doesn't exist"});
    }
    try{
        await service.editUser(email, password);
        return res.status(200).json({
            status:200, message: "User details are edited",
        });
    } catch(e){
        return res.status(400).json({status: 400, message: e.message });
    }
};

exports.deleteUser = async function (req, res) {
    var email = req.body.email;
    //var password = req.body.password;
    if(User == null){
        return res.status(400).json({status:400, message: "User doesn't exist"});
    }
    try{
        await service.deleteUser(email);
        return res.status(200).json({
            status:200,
            message:"User is deleted",
        });
    } catch(e){
        return res.status(400).json({status:400, message:e.message});
    }
};

exports.loginUser = async function (req, res) {
    var {email, password} = req.body;
    try {
        let user = await service.existsUser(email, password);
        if (user) {
            return res.status(200).json({status:200, message:"login", exist:true, user: user});
        } else {
            return res.status(200).json({status: 200, message: "Incorrect login credentials", exist: false});
        }
    } catch(e) {
        return res.status(400).json({status:400, message:e.message});
    }
};

