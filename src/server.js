const express=require("express")
const User = require("../mongoose_connection")
const cors=require("cors")
const app=express()
const company=require("../Routers/router")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res) =>{
    
 })
//middleware
app.use("/api", company)

app.listen(5000,() => {
    console.log("Port connected");
  })
  