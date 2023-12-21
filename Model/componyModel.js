const mongoose = require("mongoose");
const componySchema = new mongoose.Schema(
    {
    componyName :{
        type : String,
        require: true,

    },
    location :{
        type : String,
        require: true,
        default : true

    },
    city :{
        type : String,
        require: true,
    },
    founded :{
        type : String,
        require: true,

    },
    isActive:{
        type : Boolean,
        default : true

    },
     userId:{
        type : mongoose.Schema.Types.ObjectId,
        require: true,
        ref : "usermodel",

    },
    compony_logo :{
        type : String,
        

    },

    },
    {timestamps : true}
);


let componyModel = new mongoose.model("componyModel",componySchema);

module.exports  = {componyModel};