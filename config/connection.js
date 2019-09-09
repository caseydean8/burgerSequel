const Sequelize = require('sequelize')

let connection;

// Create mySQL connection using Sequelize.
if (process.env.JAWSDB_URL) {
    connection = new Sequelize(process.env.JAWSDB_URL)
} else {
    connection = new Sequelize('burgers_db', 'root', 'fatbeats', {
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
}

module.exports = connection;