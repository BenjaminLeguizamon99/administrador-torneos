import express from 'express'
import cors from 'cors';
import db from './models/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente')
})


// Sincroniza la base de datos y levanta el servidor
db.sequelize.sync({force:false})
    .then(()=> {
        console.log('Base de datos conectada');
        app.listen(PORT, ()=> {
            console.log(`Servidor corriendo en el puerto ${PORT}`)
        })
    })
    .catch(error => {
        console.error('Error al conectar la base de datos: ', error)
    });