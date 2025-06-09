export default (sequelize, DataTypes) => {
  const PartidoTorneo = sequelize.define("PartidoTorneo", {
    idPartido: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    idTorneo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    idEquipo1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idEquipo2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  }, {
    tableName: "PartidoTorneo",
    timestamps: false
  });

  return PartidoTorneo;
};
