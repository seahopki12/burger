const express = require('express');
const router = express.Router();

const burger = require("../models/burger.js");

// Create the router for the app, and export 
// the router at the end of your file.


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      const hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burger_name"
    ], [
      req.body.name
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
      console.log({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;