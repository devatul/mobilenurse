var shortid = require('shortid');
// use $ and @ instead of - and _ 
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

module.exports = function(sequelize, DataTypes) {
    var Exams = sequelize.define('Exams', {
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
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        clientDOB: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        clientPhone: {
            type: DataTypes.BIGINT,
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
            type: DataTypes.BIGINT,
            allowNull: true
        },
        examDate:{
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        examTime: {
            type: DataTypes.TIME,
            allowNull: true
        },
        examType: {
            type: DataTypes.STRING,
            allowNull: true
        },
        examStatus: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'pending'
        },
        examid: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: shortid.generate 
        },
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1 
        },
        scheduler: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "none"
        }, 
        tracking: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        canceled: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        submitdate: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: true
        }
        // submittime: {}
        
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
