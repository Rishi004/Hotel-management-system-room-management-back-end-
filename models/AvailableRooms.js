module.exports = (sequelize, DataTypes) => {
    const availablerooms = sequelize.define("availablerooms", {
        no: {
            type: DataTypes.INTEGER,
        },
        roomid: {
            type: DataTypes.INTEGER,
        },
        roomtype: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ac: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bed: {
            type: DataTypes.INTEGER,
        },
        rent: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
    });

    return availablerooms;
};
