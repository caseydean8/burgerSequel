const express = require('express')

const router = express.Router()

const path = require('path')

// import from model
const burger = require('../models/burger.js')

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        let handlebarsObj = { burgers: data }
        console.log(handlebarsObj)
        res.render('index', handlebarsObj)
    })
})

router.post('/api/burgers', function(req, res) {
    console.log("burger controller contact")
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, 0], (result) => {
        // res.json({id: result.insertId})
        res.redirect('/')
    })
})

router.put("/api/burgers/:id", function(req, res) {
    console.log("put controller contact")
    var condition = "id = " + req.params.id;
    console.log(req.body.devoured)
    console.log("condition", condition);
  
    burger.updateOne(
      req.body.devoured, 
      condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  router.delete("/api/burgers/:id", function(req, res) {
    console.log("delete contact")
    var condition = "id = " + req.params.id;
    console.log(req.body.devoured)
    console.log("condition", condition);
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// export to server.js
module.exports = router