const express = require("express");
const bodyParser = require("body-parser");
app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    var wt = req.body.weight;
    var ht = req.body.height;
    var bmi = wt/(ht*ht);
    res.send("The BMI is "+bmi);
})
app.listen(3000,function(){
    console.log("Server created succefully");
})