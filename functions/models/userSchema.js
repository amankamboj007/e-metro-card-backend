// module.exports = (sequelize, Sequelize) => {

//     const Tutorial = sequelize.define("tutorial", {
//     title: {
//     type: Sequelize.STRING
//     },
//     description: {
//     type: Sequelize.STRING
//     },
//     published: {
//     type: Sequelize.BOOLEAN
//     }
//     });
//     return Tutorial;
    
//     };

const Fare = require('./fareCalculationSchema')
const sequelize = require("sequelize")

    const User = sequelize.define("user",{
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
                primaryKey : true,
                autoIncrement: true
                },
            walletID: {
                    type: Sequelize.BIGINT,
                    }
        
    })
    Fare.belongsTo(User,{foreignKey:"walletID"})
    module.exports = User





