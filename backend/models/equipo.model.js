export default (sequelize, DataTypes) => {
    const Equipo = sequelize.define("Equipo", {
        idEquipo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        nombre : {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Equipo;
}