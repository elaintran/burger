var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 3000;

//parsing object into json format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars middleware
//gets the main html from main.handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("App listening on port " + PORT);
})