module.exports = function(sequalize, DataTypes) {
    var MobileNurse = sequalize.define('MobileNurse', {
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
            allowNull: false,
        },
        homeAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        homeCity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        homeZip: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ProfessionalTtitle: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cellPhone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        transportation: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        timestamp: {
            type: DataTypes.DATE,
            //  defaultValue: sequalize.literal('NOW()')
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });

    return MobileNurse;
}