module.exports = function(sequelize, DataTypes) {
    var Exams = sequelize.define('Exams', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        clientDOB: {
            type: DataTypes.STRING,
            allowNull: true
        },
        clientPhone: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        examStreetAddress:{ 
            type: DataTypes.STRING,
            allowNull: true
        },
        examCity: {
            type: DataTypes.STRING,
            allowNull: true
        },
        examState: {
            type: DataTypes.STRING,
            allowNull: true
        },
        examZipCode: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        policyAmount: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
        // examDate:{
        //     type: DataTypes.DATE,
        //     allowNull: true
        // },
        // examType: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        // submitDate: {
        //     type: DataTypes.DATE,
        //     allowNull: true
        // },
        // iRep: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        // status: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     default: "pending"
        // },
        // examID: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // }
    // }, {
        // classMethods: {
        //     associate: function(models) {
        //         //Associating Exams to 1 individual Insurance Rep
        //         models.Exams.belongsTo(models.InsuranceReps);
        //         models.Exams.belongsTo(models.User)
        //      }
        //     }
         });
  
           return Exams;
      };
//};
   // });

  
//};
