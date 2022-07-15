const Sequelize = require('sequelize');

const sequelize = new Sequelize('webtech_Blog','root','',{
    dialect:'mysql'
});

module.exports = sequelize;