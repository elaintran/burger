var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
// var connection = require("../config/connection.js");

//default route
//displays mysql information on index.handlebars
router.get("/", getMenu, getBurgers, renderBurgers);

//add burger onto menu
router.post("/api/burger_menu", function(req, res) {
    burger.createMenuItem(["burger_name", "burger_description", "burger_price"],
    [req.body.name, req.body.description, req.body.price], function(data) {
        res.json({id: data.insertId});
    })
})

//add burger from menu onto checkout
router.post("/api/burgers", function(req, res) {
    burger.createBurger(["burger_name", "burger_price"], [req.body.name, req.body.price], function(data) {
        res.json({id: data.insertId});
    })
})

//update database by id
//changed devoured from false to true
router.put("/api/burgers/:id?", function(req, res) {
    var condition = "id=" + req.body.id;
    burger.update(condition, function(data) {
        if (data.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

//display all of the burger information from the first table (burger_menu)
function getMenu(req, res, next) {
    burger.selectMenu(function(data) {
        req.menu = data;
        //goes to the next function in router.get("/") once finished running
        next();
    })
}

//display order information from the second table (burgers)
function getBurgers(req, res, next) {
    burger.selectBurger(function(data) {
        req.burger = data;
        next();
    })
}

//render the information onto index.handlebars
function renderBurgers(req, res) {
    res.render("index", {
        menu: req.menu,
        burgers: req.burger
    })
}

module.exports = router;

//NOTES
//need to remove and edit burger
//edit and remove from mysql also
//use modal for burger input