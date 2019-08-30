// import connection.js
const connection = require('./connection')

// orm is a constructor?
var orm = {
    selectAll: (table, a) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, result) => {
            if (err) throw err;
            a(result);
        });
    },
    insertOne: function(table, column, values, a) {
      console.log("orm contacted")
      let queryString = `INSERT INTO ${table} (${column}) VALUES (?, ?)`
    
        console.log(queryString);
        connection.query(queryString, values, function(err, result) {
            if (err) throw err;
            console.log(result);
            a(result)
        });
      },
      updateOne: function(table, dvrdvals, id, a) {
        console.log("orm update contact")
        let queryString = `UPDATE ${table} SET devoured = ${dvrdvals} WHERE (${id})`
        console.log(queryString)

        connection.query(queryString, function(err, result) {
          if (err) throw err
          a(result)
        })
      },
      delete: function(table, id, a) {
        console.log("orm delete contact")
        let queryString = `DELETE FROM ${table} WHERE (${id})`
        console.log(queryString)

        connection.query(queryString, function(err, result) {
          if (err) throw err
          a(result)
        })
      } 
}

// export to model
module.exports = orm;