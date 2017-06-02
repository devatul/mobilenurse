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
            type: DataTypes.DATE,
           // defaulvalue: sequelize.literal('NOW()')    
        },
        IRep: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Status: {
            type: DataTypes.STRING,
            allowNull: false,
            default: "pending confirmation"
        },
        ExamID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ExamDate:{
            type: DataTypes.DATE,
            allowNull: false
        },
        ExamTime: {
            type: DataTypes.TIME,
        }
    },{
        classMethods: {
            associate: function(models) {
                //Associating Exams to 1 individual Insurance Rep
                models.Exams.belongsTo(models.InsuranceReps);
                models.Exams.belongsTo(models.User)
             }
            }
         });
  
           return Exams;
      };
//};
   // });

  
//};
