const express = require('express')

const router = express.Router()
console.log('router started')

// import from model
const db = require('../models')

router.get('/', (req, res) => {
    console.log("route '/' using GET method")

    db.burgers.findAll({}).then(data => {
        // console.log(data)
        let handlebarsObj = { burgers: data };
        console.log(handlebarsObj)
        res.render('index', handlebarsObj)
    })
})

router.post('/api/burgers', (req, res) => {
    console.log("route api/burgers with POST method")

    db.burgers.create(req.body).then(response => res.redirect('/'))
    console.log(req.body)
})

router.put('/api/burgers/:id', (req, res) => {
    console.log("route 'api/burgers/:id' with PUT method");

    db.burgers.update({
        devoured: true
    }, {
        where: { id: req.params.id }
    }).then((burgPut) => res.json(burgPut)).catch(err => console.log(err))
});

router.delete('/api/burgers/:id', (req, res) => {
    console.log("route 'api/burgers/:id' with DELETE method")

    db.burgers.destroy({
        where: { id: req.params.id }
    }).then((burgDelete) => res.json(burgDelete)).catch((err) => console.log(err))

});

// export to server.js
module.exports = router