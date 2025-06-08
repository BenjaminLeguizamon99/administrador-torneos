module.exports = (sequelize, DataTypes) => {
    const Division = sequelize.define("Division", {
        idDivision: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Division
}