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