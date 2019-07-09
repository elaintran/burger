var express = require("express");
var app = express();
var mysql = require("mysql");
var PORT = process.env.PORT || 3000;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "burger_db"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
})

app.listen(PORT, function() {
    console.log("App listening on port " + PORT);
})