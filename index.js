const express = require('express');
const { dbConnection } = require('./config/config');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080; 

app.use(express.json());

dbConnection();

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
