module.exports = (sequelize, DataTypes) => {
    const Torneo = sequelize.define("Torneo", {
        idTorneo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idClub: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idCategoria: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        idDivision: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        fechaInicio: {
            type: DataTypes.DATE,
            allowNull: false
        },
        fechaFin: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return Torneo
}