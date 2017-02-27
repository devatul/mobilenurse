module.exports = function(sequelize, DataTypes) {
    var InsuranceReps = sequelize.define('InsuranceReps', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firm: {
            type: DataTypes.STRING,
            allowNull: false
        },
        officeAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        officePhone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cellPhone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        assistantEmail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        insuranceRepId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            //   defaultValue: sequelize.literal('NOW()')
        }
    });

    return InsuranceReps;
};