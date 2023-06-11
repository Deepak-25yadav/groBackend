
const express=require('express')
const { UserModel } = require('../model/user.model')
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')
require('dotenv').config()
const userRouter=express.Router()


userRouter.post("/register",async(req,res)=>{
const {name,email,pass,age}=req.body

try {
  bcrypt.hash(pass,5,async(err,hash)=>{
if(err){
    res.json({err})
}else{
    const user= new UserModel({...req.body,pass:hash})
    await user.save()
    res.json({msg:"user successfully registered",user:req.body})
}

  })

} catch (error) {
   res.json({error}) 
}
})




//login code below this line done! 

userRouter.post("/login",async(req,res)=>{

const {email,pass}=req.body
try {
      const user= await UserModel.findOne({email})    
      if(user){
         bcrypt.compare(pass,user.pass,async(err,result)=>{
            if(result){
               const token=jwt.sign({userID:user._id,userName:user.name},process.env.secretKey,{
                expiresIn:"7d"
               });
               const rToken=jwt.sign({userID:user._id,userName:user.name},process.env.refreshSecretKey,{
                expiresIn:"28d"
               })
               res.json({msg:"Login Successfully",token,rToken})
            }else{
                res.json({err})
            }
         })

      }else{
            res.json({msg:"Wrong Credential!"})
      }

} catch (error) {
    res.json({err:err.message})
}

})









module.exports={userRouter}
