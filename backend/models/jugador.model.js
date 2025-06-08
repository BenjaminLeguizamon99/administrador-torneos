module.exports = (sequelize, DataTypes) => {
    const Jugador = sequelize.define("Jugador", {
        idJugador: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Jugador;
}