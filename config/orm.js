var connection = require("./connection.js");

var orm = {
    //select from burger_menu
    select: function(t1, cb) {
        queryString = "SELECT * FROM ?";
        connection.query(queryString, [t1], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    }
}

//export into models/burger.js
module.exports = orm;