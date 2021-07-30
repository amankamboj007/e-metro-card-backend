const dbConfig = require('./config.json')
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.development.database, dbConfig.development.username, dbConfig.development.password, {
    host: dbConfig.development.host,
    dialect: dbConfig.development.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/userSchema")(sequelize, Sequelize);
db.fare = require("../models/fareCalculationSchema")(sequelize,Sequelize)
db.wallet = require("../models/walletSchema")(sequelize,Sequelize)


module.exports = db;