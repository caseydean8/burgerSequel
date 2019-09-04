const express = require('express')

const router = express.Router()
console.log('router started')

// const path = require('path')


// import from model, may need file name
const db = require('../models')

router.get('/', (req, res) => {
    console.log("route '/' using GET method")
        // burger.selectAll((data) => {
        //     let handlebarsObj = { burgers: data }
        //     console.log(handlebarsObj)
        //     res.render('index', handlebarsObj)
        // })
    db.burgers.findAll({}).then(data => {
        let handlebarsObj = { burgers: data };
        res.render('index', handlebarsObj)
    })
})

router.post('/api/burgers', (req, res) => {
    console.log("route ? with POST method")
        // burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, 0], (result) => {
        //     // res.json({id: result.insertId})
        //     res.redirect('/')
        // })
    db.burgers.create(req.body).then(response => res.redirect('/'))
})

router.put("/api/burgers/:id", function(req, res) {
    console.log("put controller contact")
    console.log(req.params)
        // var condition = "id = " + req.params.id;
        // console.log(req.body.devoured)
        // console.log("condition", condition);

    // burger.updateOne(
    //     req.body.devoured,
    //     condition,
    //     function(result) {
    //         if (result.affectedRows == 0) {
    //             // If no rows were changed, then the ID must not exist, so 404
    //             return res.status(404).end();
    //         } else {
    //             res.status(200).end();
    //         }
    //     });
    db.burgers.update({
        devoured: true
    }, {
        where: { id: req.params.id }
    }).then((result) => {
        if (result.affectedRows == 0) {
            return res.status(404).end
        } else {
            res.status(200).end
        }
    })
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