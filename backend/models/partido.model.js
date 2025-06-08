module.exports = (sequelize, DataTypes) => {
    const Partido = sequelize.define('Partido', {
        idPartido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idEquipos: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        resultado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idTorneo: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Partido;
}