const dbConfig = require('./config.json')
const Sequelize = require("sequelize");
const connection = new Sequelize(dbConfig.development.database, dbConfig.development.username, dbConfig.development.password, {
    host: dbConfig.development.host,
    dialect: dbConfig.development.dialect,
});

module.exports = connection; 