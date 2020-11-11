const connection = require("../config/connection.js");

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. 
// These are the methods you will need to use in order to retrieve and store data in your database.

const orm = {
    selectAll: function (cb) {
        connection.query('SELECT * FROM burgers;', function (err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    },
    insertOne: function (col, val, cb) {
        let queryString = `INSERT INTO burgers (${col}) VALUES (${val});`
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        })
    },
    updateOne: function (val, condition, cb) {
        let queryString = `UPDATE burgers SET ${val} WHERE ${condition};`
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        })
    }
}


module.exports = orm;