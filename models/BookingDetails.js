module.exports = (sequelize, DataTypes) => {
    const bookingdetails = sequelize.define("bookingdetails", {
        fname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pnumber: {
            type: DataTypes.INTEGER,
        },
        noofperson: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rtype: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nic: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        depDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        arrDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    });

    return bookingdetails;
};
