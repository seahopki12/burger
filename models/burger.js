const orm = require("../config/orm.js");

// Also inside burger.js,
// create the code that will call the 
// ORM functions using burger specific 
// input for the ORM.

const burger = {
    selectAll: function(cb) {
      orm.selectAll(function(res) {
        console.log(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(col, val, cb) {
      orm.create(col, val, function(res) {
        console.log(res);
      });
    },
    updateOne: function(val, condition, cb) {
      orm.update(val, condition, function(res) {
        console.log(res);
      });
    }
  };

module.exports = burger;