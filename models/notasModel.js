const mongoose = require('mongoose');

const notasSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    nota1: Number,
    nota2: Number,
   
})

const Notas = mongoose.model('Notas', notasSchema);

module.exports = Notas;