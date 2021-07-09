module.exports = (sequelize, DataTypes) => {
    const userSchema = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneno: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return userSchema;
};