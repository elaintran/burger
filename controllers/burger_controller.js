var express = require("express");
var router = express.Router();
var connection = require("../config/connection.js");

//home route
router.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers", function(err, data) {
        // console.log(data);
        res.render("index", {burgers: data})
    })
})

//create a new burger and add onto the menu
router.post("/api/burgers", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name, burger_description, burger_price) VALUES (?, ?, ?)",
    [req.body.name, req.body.description, req.body.price], function(err, data) {
        res.json({burgers: data});
    })
})

//checkout section is devoured = false
//purchased is devoured = true
//add another column with checkout boolean
//first section displays all of the information from the table
//checkout section displays the information if user is planning to checkout
//purchased section is the devoured section

module.exports = router;

//NOTES
//or menu -> waitlist -> ordered, but too much clicking
//need to remove and edit burger
//edit and remove from mysql also
//use modal for burger input