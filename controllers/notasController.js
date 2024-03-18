const Notas = require('../models/notasModel');


const notasController = {
    // obterner todos los notas
    getAllNotas: async (req, res) => {
        try {
            const notas = await Notas.find()
            res.json(notas);
        } catch (error) {
            console.error('Error al crear los usuarios', error);
            res.status(500).json({ message: 'Internal Server Error' });
            
        }
    },

    getNotasById: async (req, res) => {
        const id = req.params.id;
        try {
            const notasId = await Notas.findById(id);
            res.json(notasId);
        } catch (error) {
            console.error('Error al crear los usuarios', error);
            res.status(500).json({ message: 'Internal Server Error' });
            
        }
    },

    getNotasByName: async (req, res) => {
        const name = req.params.name;
        try {
           const byname = await notasController.findOne({ name: name });
        } catch (error) {
            console.error('Error al crear los usuarios', error);
            res.status(500).json({ message: 'Internal Server Error' });
            
        }
    },

    //crear un nuevo usuario
    createNotas: async (req, res) => {
        const notasData = req.body;
        try {
            const newNotas = new Notas(notasData);
            const savedNotas = await newNotas.save();
            res.status(201).json(savedNotas);
        } catch (error) {
            console.error('Error al crear los usuarios', error);
            res.status(500).json({ message: 'Internal Server Error' });
            
        }

    },

    //// lunes esto es nuevo /////

    updateNotas: async (req, res) => {
        try {
            const {nombre} = req.params;

            const updatedNotas = await Notas.findOneAndUpdate({nombre}, {$set:{name:'esteban'}});
            res.json(updatedNotas);
        } catch (error) {
            console.error('Error al crear los usuarios', error);
            res.status(500).json({ message: 'Internal Server Error' });
            
        }

    },

    deleteNotas: async (req, res) => {
        try {
            const {nombre} = req.params;
            const deletedNotas = await Notas.findOneAndDelete({name:nombre});
            res.json(deletedNotas);

        } catch (error) {
             console.error('Error al crear los usuarios', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    // Otros métodos para manejar otras solicitudes relacionadas con los usuarios (actualizar, eliminar, etc.)

};

module.exports = notasController;
