const connection = require("../config/connection.js");

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

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
        let queryString = "INSERT INTO burgers";

        queryString += " (";
        queryString += col.toString();
        queryString += ") ";
        queryString += "VALUES (?)";
        connection.query(queryString, val, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        })
    },
    updateOne: function (val, condition, cb) {
        // let queryString = `UPDATE burgers SET ${val} WHERE ${condition};`
        let queryString = "UPDATE burgers";

        queryString += " SET ";
        queryString += objToSql(val);
        queryString += " WHERE ";
        queryString += condition;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
}


module.exports = orm;