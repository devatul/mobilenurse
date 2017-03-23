module.exports = function(sequelize, DataTypes) {
    var Exams = sequelize.define('Exams', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ExamType: {
          //this needs to converted into a drop down
            type: DataTypes.STRING,
            allowNull: false
        },
        SubmitDate: {
            type: DataTypes.Date,
           // defaulvalue: sequelize.literal('NOW()')    
        },
        InsuranceRep: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ExamID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        ExamDate:{
            type: DataTypes.Date,
            allowNull: false
        },
        ExamTime: {
            type: DataTypes.Time,
        }
    },{
        classMethods: {
            function(models) {
                
            }
        }
    }