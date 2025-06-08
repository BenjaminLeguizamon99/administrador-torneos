const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("basededatos", "usuario", "contrasenia", {
    host: "localhost",
    dialect: "mysql"
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//IMPORTAMOS LOS MODELOS
db.Club = require("./club.model.js")(sequelize, DataTypes);
db.Categoria = require("./categoria.model.js")(sequelize, DataTypes);
db.Division = require("./division.model.js")(sequelize, DataTypes);
db.Torneo = require("./torneo.model.js")(sequelize, DataTypes);
db.Equipo = require("./equipo.model.js")(sequelize, DataTypes);
db.Jugador = require("./jugador.model")(sequelize, DataTypes);
db.EquipoJugador = require("./equipojugador.model")(sequelize, DataTypes);
db.Partido = require("./partido.model")(sequelize, DataTypes);
db.PartidoTorneo = require("./partidotorneo.model")(sequelize, DataTypes);

// RELACIONES
// belongs to -> Muchos a uno
// hasMany -> uno tiene muchos
// belongsToMany -> muchos a muchos (usa tabla intermedia)