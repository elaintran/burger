var connection = require("./connection.js");

var orm = {
    select: function(t1, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [t1], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    }
}

//export into models/burger.js
module.exports = orm;