var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
var connection = require("../config/connection.js");

//home route
router.get("/", getMenu, getBurgers, renderBurgers);

router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "burger_price"], [req.body.name, req.body.price], function(data) {
        res.json({id: data.insertId});
    })
})

router.put("/api/burgers/:id?", function(req, res) {
    var condition = "id=" + req.body.id;
    burger.update({devoured: req.body.devoured}, condition, function(data) {
        if (data.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

// router.put("/api/burgers/:id?", function(req, res) {
//     // console.log(req.body.id);
//     // console.log(req.body.devoured);
//     connection.query("UPDATE burgers SET devoured=true WHERE id=?", [req.body.id], function(data) {
//         console.log(data.changedRows);
//         // if (data.changedRows === 0) {
//         //     // If no rows were changed, then the ID must not exist, so 404
//         //     return res.status(404).end();
//         // }
//         // res.status(200).end();
//     })
// })

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