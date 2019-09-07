const express = require('express')

const PORT = process.env.PORT || 8080

const app = express()

const db = require('./models')


// serve static content from public directory
app.use(express.static('public'))

// parse application body?
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'pug')

const routes = require('./controllers/burgers_controller')

app.use(routes)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`server.js started, App listening on PORT ${PORT}`));
}).catch((err) => console.log(err))