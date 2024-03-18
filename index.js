const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const router = require('./routes');

const app = express();
const port = 3000;

// conecta a la base de datos mongodb

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// configura las rutas

app.use('/', router);

app.listen(port, () => console.log(`listening at http://localhost:${port}`));