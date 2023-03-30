const mongoose = require("mongoose");

var valEmail = function (email) {
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regexEmail.test(email);
};

//valpassword is not used here instead it is used before adding the data because the validate and match have been removed in the schema 
var valPassword = function (password) {
    var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    return regexPassword.test(password);
};

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: "required",
        validate: [valEmail, "Please enter a valid email address"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Enter a valid email address"],

    },

    password: {
        type: String,
        required: "required",
        //validate: [valPassword, "Enter a valid password"],
        //match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/, "Enter a valid password"],

    },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;