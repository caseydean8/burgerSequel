const db = require('../models');

module.exports = (app) => {
    // const rp = req.params;
    app.get('/api/burgers', (req, res) => {
        db.burgers.findAll({}).then((burgersRead) => {
            res.json(burgersRead)
        }).catch((err) => console.log(err))
    });

    app.post('/api/burgers', (req, res) => {
        const rb = req.body;
        db.burgers.create({
            burger_name: rb.burger_name,
            devoured: rb.devoured
        }).then((burgerCreate) => res.json(burgerCreate)).catch((err) => console.log(err))
    })
}