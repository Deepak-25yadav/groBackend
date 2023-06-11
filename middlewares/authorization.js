require('dotenv').config()
const jwt=require("jsonwebtoken")

const Auth=(req,res,next)=>{

    const token=req.headers.authorization?.split(" ")[1]
    if(token){
 
     try {
         const decode=jwt.verify(token,process.env.secretKey)        
           if(decode){
              req.body.userName=decode.userName
              req.body.userID=decode.userID
              next()
           }else{
              res.json({msg:"Not Authorized"})
           }
      
          } catch (error) {
             res.json({error}) 
          }
 
    }else{
     res.json({msg:"Please Login!"})
    }
 



}



module.exports={Auth}