const Sequelize = require('sequelize')

// Create mySQL connection using Sequelize.
const sequelize = new Sequelize('burgers_db', 'root', 'fatbeats', {
    host: 'localhost',
    port: 3306,
    dialect: mysql,
    // (property)  sequelize.Options.pool?: sequelize.PoolOptions
    // connection pool options
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;

// var mysql = require("mysql");

// let connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL)
// } else {
//   connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "fatbeats",
//   database: "burgers_db"
// });
// }

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;