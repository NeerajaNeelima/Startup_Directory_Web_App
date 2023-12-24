const mongoose=require("mongoose")

require('dotenv').config()
const con_url=process.env.MONGOBD;
//const DB='mongodb+srv://023neeraja:neelima143@cluster0.d5fmcua.mongodb.net/Starup_companies?retryWrites=true&w=majority'
mongoose.connect(con_url,{
    useNewUrlParser: "true",
useUnifiedTopology: "true"})
.then(() =>console.log("mongodb connected"))
.catch((e) =>console.log(e));