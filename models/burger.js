// import orm (will '../config/orm' work)
const orm = require('../config/orm.js')

const burger = {
    selectAll: function(a) {
        console.log('burger model contact')
        orm.selectAll('burgers', (res) => {
            a(res)
        })
    },

    insertOne: function(columns,values, a) {
        console.log('burger model contact')
        orm.insertOne('burgers', columns, values, function(res) {
            a(res)
        })
    },
    updateOne: function(dvrdval, status, a) {
        console.log("burger model update contact")
        orm.updateOne('burgers', dvrdval, status, function(res) {
            a(res)
        })
    },
    delete: function(status, a) {
        console.log("burger model delete contact")
        orm.delete('burgers', status, function(res) {
            a(res)
        })
    }
}

// export to controller
module.exports = burger