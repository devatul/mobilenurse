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
    },{
        //Method to allow Ireps to have may exam requests
    classMethods: {
        associate: function(models) {
            // associating volunteer with listings
            models.ireps.hasMany(models.Exams, {
                onDelete: "cascade"
            });
            models.InsuranceReps.belongsTo(models.User);
        }
    });

    return InsuranceReps;
};