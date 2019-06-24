 const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

var jsonPar = bodyParser.json();
var urlPar = bodyParser.urlencoded({extended:false});

app.use("/",express.static('contactform'));
app.post("/",urlPar,(req,res)=>{
    var cName = req.body.name;
    var cEmail = req.body.email;
    var cPhone = req.body.phone;
    var cMessage = req.body.message;
    res.redirect(`https://wa.me/919701091309?text=Myself%20${cName},%20I%20am%20interested%20in%20your%20services,%20please%20contact%20me%20on%20${cPhone}%20or%20${cEmail}.%20Thank%20You`);
});

app.listen(port,()=>{
    console.log(`server started at ${port}`)
});

