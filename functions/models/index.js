const sequelize = require("../config/database.js");
const Sequelize = require('sequelize');
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./userSchema")(sequelize, Sequelize);
db.fare = require("./fareCalculationSchema")(sequelize,Sequelize)
db.wallet = require("./walletSchema")(sequelize,Sequelize)

module.exports = db;