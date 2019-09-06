module.exports = (sequelize, data) => {
    const burgers = sequelize.define('burgers', {
        burger_name: {
            type: data.STRING,
            allowNull: false,
            validate: { len: [1, 140] }
        },
        devoured: {
            type: data.BOOLEAN,
            defaultValue: false
        }
    });
    console.log(`model burger.js hit`);
    return burgers;
};