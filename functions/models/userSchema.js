module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: {
            type: Sequelize.STRING
        },
        phoneNumber: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        userID: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        walletID: {
            type: Sequelize.BIGINT,
        },
        isActive: {
            type: Sequelize.BOOLEAN
        }
    })
    return User;
}



