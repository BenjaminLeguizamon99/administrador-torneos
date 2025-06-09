import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("basededatos", "usuario", "contrasenia", {
    host: "localhost",
    dialect: "mysql"
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//IMPORTAMOS LOS MODELOS
import ClubModel from './club.model.js';
import CategoriaModel from './categoria.model.js';
import DivisionModel from './division.model.js';
import TorneoModel from './torneo.model.js';
import EquipoModel from './equipo.model.js';
import JugadorModel from './jugador.model.js';
import EquipoJugadorModel from './equipojugador.model.js';
import PartidoModel from './partido.model.js';
import PartidoTorneoModel from './partidotorneo.model.js';

db.Club = ClubModel(sequelize, DataTypes);
db.Categoria = CategoriaModel(sequelize, DataTypes);
db.Division = DivisionModel(sequelize, DataTypes);
db.Torneo = TorneoModel(sequelize, DataTypes);
db.Equipo = EquipoModel(sequelize, DataTypes);
db.Jugador = JugadorModel(sequelize, DataTypes);
db.EquipoJugador = EquipoJugadorModel(sequelize, DataTypes);
db.Partido = PartidoModel(sequelize, DataTypes);
db.PartidoTorneo = PartidoTorneoModel(sequelize, DataTypes);


// RELACIONES
// belongs to -> Muchos a uno
// hasMany -> uno tiene muchos
// belongsToMany -> muchos a muchos (usa tabla intermedia)


// Un torneo pertenece a un club.
db.Torneo.belongsTo(db.Club, {foreignKey: 'idClub'});
db.Club.hasMany(db.Torneo, {foreignKey: 'idClub'});

// un jugador pertenece a muchos equipos y viceversa
db.Equipo.belongsToMany(db.Jugador, {
    through: db.EquipoJugador,
    foreignKey: 'idEquipo',
    otherKey: 'idJugador'
});
db.Jugador.belongsToMany(db.Equipo, {
    through: db.EquipoJugador,
    foreignKey: 'idJugador',
    otherKey: 'idEquipo'
});

// Un partido pertenece a un torneo
db.PartidoTorneo.belongsTo(db.Torneo, {
    foreignKey: 'idTorneo'
});
db.Torneo.hasMany(db.PartidoTorneo, {foreignKey: 'idTorneo'})

// Un torneo tiene una categoria
db.Torneo.belongsTo(db.Categoria, {
    foreignKey: 'idCategoria'
});
db.Categoria.hasMany(db.Torneo, {
    foreignKey: 'idCategoria'
})

// Un torneo tiene una division
db.Torneo.belongsTo(db.Division, {
    foreignKey: 'idDivision'
})
db.Division.hasMany(db.Torneo, {
    foreignKey: 'idDivision'
})

export default db;