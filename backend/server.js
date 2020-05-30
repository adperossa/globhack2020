if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require("express");
const port = 8080;

const app = express();
require('./DB/database');


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
});

