const express = require('express')

const PORT = process.env.PORT || 8080

const app = express()

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

app.listen(PORT, function() {
    console.log(`server listening on http:/localhost: ${PORT}`)
})

// const orm = require('./config/orm')

// orm.selectAll('burgers')
