const { default: mongoose } = require("mongoose");

const userschema = new mongoose.Schema({
    username:{type:String, require : true},
    email:{type:String, require : true},
    passward:{type:String, require : true},
    mobile:{type:String, require : true},
    city:{type:String, require : true},
    state:{type:String, require : true},
    profilepic:{type:String},

},{timestamps:true})

const userModel = mongoose.model("userModel",userschema)

module.exports = {userModel}