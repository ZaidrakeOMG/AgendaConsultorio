require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');  // Cambiar a mysql2
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Conexión a la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Error conectando a la BD:', err);
        return;
    }
    console.log('Conectado a MySQL');
});

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor funcionando...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
