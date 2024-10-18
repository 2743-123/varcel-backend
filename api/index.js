const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000 ;

app.get("/",(req,res)=>{
    res.send("varcel server is on")

})

app.listen(port,()=>{
console.log(`server runnig on port ${port}`)
});