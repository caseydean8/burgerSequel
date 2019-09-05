const express = require('express')

const router = express.Router()
console.log('router started')

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

router.put("/api/burgers/:id", (req, res) => {
    console.log("put controller contact")
    console.log(req.body)
    console.log(req.params)

    db.burgers.update({
        devoured: true
    }, {
        where: { id: req.params.id }
    }).then((burgPut) => res.json(burgPut)).catch(err => console.log(err))
});

router.delete("/api/burgers/:id", function(req, res) {
    console.log("delete router contact")

    db.burgers.destroy({
        where: { id: req.params.id }
    }).then((burgDelete) => res.json(burgDelete)).catch((err) => console.log(err))

});

// export to server.js
module.exports = router