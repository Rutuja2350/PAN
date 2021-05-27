var express = require("express"),
    app = express();
    cloudinary = require('cloudinary').v2;
// require("dotenv").config();

cloudinary.config({ 
    cloud_name: 'dnmsyfrgs', 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
});
// cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// app.engine('html', require('ejs').renderFile);

app.get("/", function(req, res){
    res.render("home");
});

app.get("/contactUs", function(req, res){
    res.render("contactus");
});

app.get("/aboutUs", function(req, res){
    res.render("aboutus");
});

app.get("/associates", function(req, res){
    res.render("associates");
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("The PAN server started...");
});