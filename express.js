const bodyParser = require("body-parser");  
const express = require("express");
const serveIndex = require("serve-index");
const app = express();
const fs = require("fs");
const port = 5000;
var jsonPar = bodyParser.json()
var urlPar = bodyParser.urlencoded({extended:false})

//app.use("/contact", serveIndex("contactform", {"icons": true}));
app.use("/contact", express.static("contactform"));
app.post("/contact",urlPar, (req,res)=>{
    
     var fName = req.body.name;
     var email = req.body.email;
     var contactNum = req.body.phone;
     var formMes = req.body.message;
    var contactFrm = [fName, email, contactNum,formMes];
    console.log(contactFrm)
    res.send("request recieved")
    fs.writeFile("form.txt",(err)=>{
        if(err)
        throw err;
    });
    

} )


app.get("/",(req,res)=>{
    res.send(`server started at ${port}`)
});
app.listen(port,()=>{
    console.log(`server started at ${port}`)
});

