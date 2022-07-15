const Sequelize = require('sequelize');

const sequelize = new Sequelize('webtech_blog', 'root', '', {
    dialect: 'mysql'
});

module.exports = sequelize;