const User = require("./userSchema")
module.exports = (sequelize, Sequelize) => {

    const Wallet = sequelize.define("wallet", {
        walletID: {
        type: Sequelize.BIGINT
        },
        transactionID: {
            type: Sequelize.BIGINT
            },
        balanceAmount: {
            type: Sequelize.INTEGER
            }
        });
        return Wallet
    };
