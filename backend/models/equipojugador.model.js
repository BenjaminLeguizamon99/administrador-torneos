module.exports = (sequelize, DataTypes) => {
  const EquipoJugador = sequelize.define("EquipoJugador", {
    idEquipo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Equipos',
        key: 'idEquipo'
      }
    },
    idJugador: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Jugadores',
        key: 'idJugador'
      }
    }
  }, {
    tableName: 'EquipoJugador',
    timestamps: false
  });

  return EquipoJugador;
};
