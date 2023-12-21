const {default : mongoose } = require("mongoose")

const reviewSchema = new mongoose.Schema({
    subject : {
        type:String,
        require:true,
    },
    review : {
        type:String,
        require:true,
    },
    rating: {
        type:String,
        require:true,
    },
    isActive : {
        type:Boolean,
        require:true,
    },
    compony_id : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"componyModel",
    },
    User_id : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel",
    },
},{timestamps:true});



let reviewModel = new mongoose.model("reviewModel",reviewSchema)
module.exports={reviewModel}
