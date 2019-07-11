var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
//set up port for Heroku
var PORT = process.env.PORT || 3000;

//middleware to parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars middleware
//gets the main html from main.handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//make the public folder available for use
app.use(express.static("public"));

var routes = require("./controllers/burger_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on port " + PORT);
})