module.exports = function(sequelize, DataTypes) {
    var MedicalExams = sequelize.define("MedicalExams", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: False
        }
    })
}