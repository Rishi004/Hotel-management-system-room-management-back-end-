module.exports = (sequelize, DataTypes) => {
    const reports = sequelize.define("reports", {
        arrDate: {
            type: DataTypes.DATEONLY,
        },
        booked: {
            type: DataTypes.INTEGER,
        },
    });

    return reports;
};
