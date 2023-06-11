
const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./routes/user.routes")
const {groceryRouter}=require("./routes/grocery.routes")

 require("dotenv").config()

 const app=express()

 app.use(express.json())

  app.use("/users",userRouter)
  app.use("/gro",groceryRouter)





 app.listen(process.env.port,async()=>{

try {
   await connection  
  console.log("db connected")
  console.log("successfully running at port 8080")

} catch (error) {
    console.log("something went wrong")
    console.log(error)
}

 })