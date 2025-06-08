module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define("Categoria", {
        idCategoria: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Categoria;
};