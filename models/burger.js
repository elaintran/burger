var orm = require("../config/orm.js");

//burger object
//each burger function calls the corresponding orm function to display, add, update info
//in the mysql database
var burger = {
    //burger.select displays the all of the information
    //cb is callback
    select: function(table, cb) {
        orm.select(table, function(result) {
            cb(result);
        })
    },
    //burger.create inserts new burger information into mysql
    //columns and values are arrays
    create: function(table, cols, vals, cb) {
        orm.create(table, cols, vals, function(result) {
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