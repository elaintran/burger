var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//home route
router.get("/", getMenu, getBurgers, renderBurgers);

function getMenu(req, res, next) {
    burger.selectMenu(function(data) {
        req.menu = data;
        next();
    })
}

function getBurgers(req, res, next) {
    burger.selectBurger(function(data) {
        req.burger = data;
        next();
    })
}

function renderBurgers(req, res) {
    res.render("index", {
        menu: req.menu,
        burgers: req.burger
    })
}

//create a new burger and add onto the menu
router.post("/api/burgers", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name, burger_description, burger_price) VALUES (?, ?, ?)",
    [req.body.name, req.body.description, req.body.price], function(err, data) {
        if (err) {
            //send server error
        }
        res.json({burgers: data});
    })
})

//maybe two tables, one for display, one for manipulation
//clicking add to cart updates the checkout cart

//update if devoured or in checkout
router.put("/api/burgers/:id?", function(req, res) {
    //if burger is added to cart
    if (req.body.checkout) {
    //if checked out, move out of cart and into purchased
    } else if (req.body.devoured) {

    }
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