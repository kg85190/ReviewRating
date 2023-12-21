const { userModel } = require("../Model/userModel")
// Registration controller
const registration = async(req,res) =>{
    console.log("Running")
    // for checking user is exsist or not
    let user = await userModel.findOne({email:req.body.email})
    if(user){
        return res.status(409).send("user already exsist")
    }

    let newuser = await userModel.create(req.body)
    // console.log(data)
    res.status(201).send({success:true,message:"Registered successfully",data : newuser})
}

    // Login controller
    const login = async(req,res)=>{
        let {email , passward} = req.body
        let user = await userModel.findOne({email:email})
        if(!user){return res.status(404).send({success:false,message:"user not registerd please register "})}
        if(passward != user.passward){ return res.status(409).send({success: false,message:'wrong passward'})}
        res.status(200).send({success:true,message:"Login successfully",data : user})
    }

module.exports = {registration,login}