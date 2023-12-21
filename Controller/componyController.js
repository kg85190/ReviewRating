const { componyModel } = require("../Model/componyModel")

let createCompony = async(req,res)=>{
    //console.log(req.body)
let oldCompony = await componyModel.findOne({componyName:req.body.componyName})
if(oldCompony){return res.status(400).send({success:false,message:"compony Allready Exist"})}

    let newcompony = await componyModel.create(req.body)
    res.status(201).send({success : true,massege : "Compony Created",data:newcompony})
}





let componyList = async(req,res)=>{
     let allCompony = await componyModel.find()

     if(allCompony.lenght==0){return res.status(404).send({success:false,message:"No Compony Found"})}
     res.status(200).send({success:true,message:"all Compony",total_compony:allCompony.length,
    data:allCompony})
}



module.exports = {createCompony,componyList}