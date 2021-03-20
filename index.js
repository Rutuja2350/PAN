var express = require("express"),
    app = express();
    // cloudinary = require('cloudinary').v2;
// require("dotenv").config();

// cloudinary.config({ 
//     cloud_name: 'dnmsyfrgs', 
//     api_key: process.env.API_KEY, 
//     api_secret: process.env.API_SECRET
// });
// cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});

app.use(express.static(__dirname + "/public"));
app.set('view engine','ejs');

app.get("/", function(req, res){
    res.render("home.ejs");
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("The PAN server started...");
});