const express = require('express')

const router = express.Router()
console.log('router started')

// const path = require('path')


// import from model, may need file name
const db = require('../models')

router.get('/', (req, res) => {
    console.log("route '/' using GET method")

    db.burgers.findAll({}).then(data => {
        let handlebarsObj = { burgers: data };
        res.render('index', handlebarsObj)
    })
})

router.post('/api/burgers', (req, res) => {
    console.log("route ? with POST method")

    db.burgers.create(req.body).then(response => res.redirect('/'))
})

router.post("/update", (req, res) => {
    console.log("put controller contact")
    console.log(req.body)

    db.burgers.update({
        devoured: true
    }, {
        where: { id: req.body.id }
    }).then((response) => {
        console.log(response.affectedRows + " rows updated in the database.")
        res.redirect('/')
    })
});

router.delete("/api/burgers/:id", function(req, res) {
    console.log("delete contact")

    db.burgers.destroy({
        where: {
            id: req.params.id
        }
    }).then((burgDelete) => res.json(burgDelete)).catch((err) => console.log(err))

});

// export to server.js
module.exports = router