module.exports = function(sequelize, DataTypes) {
    var InsuranceReps = sequelize.define('InsuranceReps', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        firm: {
            type: DataTypes.STRING,
            allowNull: false
        },
        officeAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        repCity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        repState: {
            type: DataTypes.STRING,
            allowNull: false
        },
        repZipCode: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        repOfficePhone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        repCellPhone: {
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
            defaultValue: sequelize.NOW
        }
    },{
        //Method to allow Ireps to have many exam requests
    classMethods: {
        associate: function(models) {
            // associating insurance reps with many exams
            models.InsuranceReps.hasMany(models.Exams, {
                onDelete: "cascade"
            });
            models.InsuranceReps.belongsTo(models.User);
        }
    }
    });

    return InsuranceReps;
};

