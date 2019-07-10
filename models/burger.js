var orm = require("../config/orm.js");

//burger object
var burger = {
    //burger.select displays the information from mysql using the orm function
    //cb is callback
    select: function(cb) {
        orm.select("burgers", function(result) {
            cb(result);
        })
    },
    //burger.create inserts information into mysql
    //columns and values are arrays
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(result) {
            cb(result);
        })
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(result) {
            cb(result);
        })
    }
}

//export into burger_controller
module.exports = burger;