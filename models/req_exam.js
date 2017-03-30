module.exports = function(sequelize, DataTypes) {
    var ReqExams = sequelize.define('ReqExams', {
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
        comments: {
          //this needs to converted into a drop down
            type: DataTypes.STRING,
            allowNull: false
        }
    });
  
           return ReqExams;
      };