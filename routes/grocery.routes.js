console.log("Grocery route")

const express=require("express")
const {GroceryModel}=require("../model/grocery.model")
const {Auth}=require("../middlewares/authorization")

const jwt=require('jsonwebtoken')
const groceryRouter=express.Router()

groceryRouter.use(Auth)



groceryRouter.post("/create",async(req,res)=>{
   console.log(req.body)
   console.log("Heyyyyyy")
try {
    const grocery= new GroceryModel(req.body)
      await grocery.save()
    res.json({msg:"Grocery have been added in grocery box",grocery:req.body})
} catch (error) {
    res.json({error:error.message})
}

})














module.exports={groceryRouter}
