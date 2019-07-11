var connection = require("./connection.js");

var orm = {
    select: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (?, ?)`;
        // console.log(vals);
        connection.query(queryString, vals, function(err, data) {
            if (err) throw err;
            cb(data);
        })
    }
}

//export into models/burger.js
module.exports = orm;