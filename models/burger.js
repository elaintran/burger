var orm = require("../config/orm.js");

//burger object
//each burger function calls the corresponding orm function to display, add, update info
//in the mysql database
var burger = {
    //burger.selectMenu displays the all of menu information
    //burger_menu is the first table from the database and is only used to display data
    //cb is callback
    selectMenu: function(cb) {
        orm.select("burger_menu", function(result) {
            cb(result);
        })
    },
    //burger.selectBurger displays the burger orders from mysql
    //burgers is the second table from the database
    //burgers is the main table that is manipulated
    selectBurger: function(cb) {
        orm.select("burgers", function(result) {
            cb(result);
        })
    },
    //burger.createMenuItem inserts new burger information into mysql
    //columns and values are arrays
    createMenuItem: function(cols, vals, cb) {
        orm.create("burger_menu", cols, vals, function(result) {
            cb(result);
        })
    },
    //burger.createBurger inserts select menu item into mysql
    createBurger: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(result) {
            cb(result);
        })
    },
    //burger.update changes the devoured state from false to true
    update: function(condition, cb) {
        orm.update("burgers", condition, function(result) {
            cb(result);
        })
    }
}

//export into burger_controller
module.exports = burger;