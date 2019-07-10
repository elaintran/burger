var mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "burgers_db"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
})

module.exports = connection;