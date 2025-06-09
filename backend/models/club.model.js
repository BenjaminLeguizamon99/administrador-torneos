export default (sequelize, DataTypes) => {
    const Club = sequelize.define("Club", {
        idClub: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        urlDireccion: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Club;
}