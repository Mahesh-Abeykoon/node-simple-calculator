const express = require("express");

const app = express();

const port = 5001;

app.get("/", function(req, res){
    res.send("<h1> Welcome to Simple Calcutor by maheSh </h1>");
});

app.listen(port, function(){
    console.log("Server is running on port: " + port);
});