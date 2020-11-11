const orm = require("../config/orm.js");

// Also inside burger.js,
// create the code that will call the 
// ORM functions using burger specific 
// input for the ORM.

const burger = {
    selectAll: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    insertOne: function(col, val, cb) {
      orm.insertOne(col, val, function(res) {
        console.log(res);
        cb(res);
      });
    },
    updateOne: function(val, condition, cb) {
      orm.updateOne(val, condition, function(res) {
        console.log(res);
        cb(res);
      });
    }
  };

module.exports = burger;