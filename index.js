var express = require("express"),
    app = express();
    cloudinary = require('cloudinary').v2;
// require("dotenv").config();

cloudinary.config({ 
    cloud_name: 'dnmsyfrgs', 
    // api_key: process.env.API_KEY, 
    // api_secret: process.env.API_SECRET
    api_key: 161254976579369, 
    api_secret: "VKnePa0tZcd57PTOhfvuW2N8wEc"
});
// cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});

app.use(express.static(__dirname + "/public"));

app.set('view engine','html');
app.engine('html', require('ejs').renderFile);

app.get("/", function(req, res){
    res.render("../index");
});

app.get("/contactUs", function(req, res){
    res.render("contactus.ejs");
});

app.get("/aboutUs", function(req, res){
    res.render("aboutus.ejs");
});

app.get("/associates", function(req, res){
    res.render("associates.ejs");
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("The PAN server started...");
});