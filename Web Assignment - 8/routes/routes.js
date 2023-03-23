const express = require('express');
const bcrypt = require("bcryptjs");
const router = express.Router();

const User = require('../models/user');


//Get all users
router.get('/user/getAll', async (req, res) => {
    try{
        const data = await User.find();
        res.status(200).json({message: "User details are", data: data});
        //res.send(data);
        
    }catch(err){
        console.log(err);
    }
});

//creating and saving new users
router.post('/user/create', async (req, res) => {

    var regExFullName = /^[A-Za-z\s]{1,15}[\.]{0,1}[A-Za-z\s]{0,15}$/;
    var regExEmailId = /^[A-Za-z0-9._%+-]+@northeastern\.edu$/;
    var regExPass = /^(?=.*\d.*)(?=.*[a-zA-Z].*)[a-zA-Z0-9]{8,16}$/;

    const usrr = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password
    });
    try{
        console.log("data is:", usrr);

        //validation
        if(usrr.fullName == null || !usrr.fullName.trim().match(regExFullName)){
            res.status(400);
            res.json("Invalid full name, Please enter only alphabets");
            return;
        }
        if(usrr.email == null || !usrr.email.trim().match(regExEmailId)){
            res.status(400);
            res.json("Please enter northeastern emailid only");
            return;
        }
        if(usrr.password == null || !usrr.password.trim().match(regExPass)){
            res.status(400);
            res.json("Please enter a password of minimum 8 characters containing atleast one uppercase, one lowercase, one number");
            return;
        }
        const saveData = await usrr.save();
        //saveData.message = 'User saved successfully';
        res.status(201).json({message: "User saved", data: saveData});
        console.log("User saved successfully");
    } catch(err){
        res.status(400).json({message: err.message});
        console.log("User not saved");
    }
});

//Get a single user by id
router.get('/user/getById/:id', async (req, res) => {
    try{
        const usrr = await User.findById(req.params.id);
        res.json(usrr);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

//Updating the user
router.put('/user/edit', async (req, res) => {
    try {
      const email1 = req.body.email;
      const fullName = req.body.fullName;
      let password = req.body.password;
  
      var regExFullName = /^[A-Za-z\s]{1,15}[\.]{0,1}[A-Za-z\s]{0,15}$/;
      var regExPass = /^(?=.*\d.*)(?=.*[a-zA-Z].*)[a-zA-Z0-9]{8,16}$/;
  
      if (!fullName || !fullName.trim().match(regExFullName)) {
        res.status(400).json({ message: "Invalid full name, Please enter only alphabets" });
        return;
      }
      if (!password || !password.trim().match(regExPass)) {
        res.status(400).json({ message: "Please enter a password of minimum 8 characters containing atleast one uppercase, one lowercase, one number" });
        return;
      }
  
      const updated = {
        email: email1,
        fullName: fullName,
        password: password
      };
      
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      updated.password = hash;

      const usrr = await User.findOneAndUpdate({ email: email1 }, updated, { new: true }).exec();
      if (usrr == null) {
        res.status(404).json({ message: "Email doesn't exist" });
        return;
      }
      
      

      console.log("User updated");
      res.status(200).json({message: "Updated successfully", data: usrr});
      //res.send(usrr);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  

router.delete('/user/delete', async (req, res) => {
    try {
      const email = req.body.email;
      if (!email) {
        res.status(400).json({ message: "Email parameter is missing or null" });
        return;
      }
  
      const usrr = await User.findOneAndDelete({ email: email }).exec();
      if (usrr == null) {
        res.status(404).json({ message: "Email doesn't exist" });
        return;
      }
  
      console.log("User deleted");
      res.status(200).json({message: "Deleted successfully", data: usrr});
      //res.send(usrr);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  

module.exports = router;