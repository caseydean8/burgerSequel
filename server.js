const express = require('express')

const PORT = process.env.PORT || 8080

const app = express()

const db = require('./models')


// serve static content from public directory
app.use(express.static('public'))

// parse application body?
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// set handlebars
const ehb = require('express-handlebars')

app.engine('handlebars', ehb({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
    //             check later to see if burger_controller.js is necessary
const routes = require('./controllers/burgers_controller.js')

app.use(routes)

db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`server.js started, App listening on PORT ${PORT}`));
}).catch((err) => console.log(err))

// app.listen(PORT, function() {
//     console.log(`server listening on http:/localhost: ${PORT}`)
// })

// const orm = require('./config/orm')

// orm.selectAll('burgers')