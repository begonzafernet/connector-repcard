const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const compression = require('compression');
const sequelize = require("./database/config");

// Crear el servidor de express
const app = express();

// Base de datos
const dbConnection = async () => {
  try {
    await sequelize.authenticate(); //SOLO PARA PROBAR LA CONEXION
    console.log('Connection has been established successfully.');
    const created = sequelize.sync({ alter: true });
    if (created) {
      console.log("==> TABLE DONE !");
    }
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
dbConnection();

// CORS
app.use(cors());

// Directorio Público
app.use(express.static(path.join(__dirname, '/public')));

//BodyParser
app.use(bodyParser.json({ limit: '50mb' }));

// Lectura y parseo del body
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

//Compression
app.use(compression());

// Rutas
// app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/appointments", require("./routes/appointment.routes"));
app.use("/api/contacts", require("./routes/contact.routes"));
app.get('/*', function (req, res) { res.sendFile(path.join(__dirname, 'public', 'index.html')); });
app.get('/', function (req, res) { res.sendFile(path.join(__dirname, 'public', 'index.html')); });


// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});