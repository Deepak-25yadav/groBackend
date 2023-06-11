const mongoose=require("mongoose")

const grocerySchema=mongoose.Schema({
    title:String,
    body:String,
    category:String,
    device:String,
    no_if_comments:Number
},{
    versionKey:false
})

const GroceryModel=mongoose.model("grocery",grocerySchema)

module.exports={GroceryModel}
