

var http = require("http");

var port = 5050;

var server = http.createServer(function(req,res){
    res.end("Nodemon");
});

server.listen(port, ()=>{console.log("Server has started")});


