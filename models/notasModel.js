const mongoose = require('mongoose');

const notasSchema = new mongoose.Schema({
    name: String,
    nota1: Number,
    nota2: Number,
   
})

const Notas = mongoose.model('notas', notasSchema);

module.exports = Notas;