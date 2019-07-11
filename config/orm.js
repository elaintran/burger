var connection = require("./connection.js");

var orm = {
    //display all information from mysql
    select: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    //add new row into mysql
    create: function(table, cols, vals, cb) {
        var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (?, ?)`;
        connection.query(queryString, vals, function(err, data) {
            if (err) throw err;
            cb(data);
        })
    },
    //possibly take out objcColVals
    //update existing rows in mysql
    update: function(table, objColVals, condition, cb) {
        var queryString = `UPDATE ${table} SET devoured=true WHERE ${condition}`;
        connection.query(queryString, function(err, data) {
            if (err) throw err;
            cb(data);
        })
    }
}

//export into models/burger.js
module.exports = orm;