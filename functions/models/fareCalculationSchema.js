module.exports = (sequelize, Sequelize) => {

    const Fare = sequelize.define("fare", {
        userID: {
        type: Sequelize.BIGINT
        },
        startTime: {
        type: Sequelize.STRING
        },
        endTime: {
        type: Sequelize.STRING
        },
        distance: {
            type: Sequelize.INTEGER
            },
        baseFare: {
                type: Sequelize.INTEGER
                },
        calculatedFare: {
                    type: Sequelize.INTEGER
                    }
        });
        return Fare;
        
    };