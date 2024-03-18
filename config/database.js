const mongoose = require('mongoose');
let Notas;

const connectDatabase = async () => {
    try {
        if(!Notas){
            Notas = mongoose.model('Notas', require('../models/notasModel').schema);
        }
      
        await mongoose.connect('mongodb+srv://william271629:3218741020@clusternotasdb.6dhty9c.mongodb.net/')
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));
        
        await iniciardata();
       
        
    } catch (error) {
        console.error('failed to connect to MongoDB', error);
        process.exit(1);
        
    }
};

const iniciardata = async () => {
    try {
        
        await Notas.insertMany()[
            {
                nombre: 'cristian',
                usuario: 12345667,
                nota1: 1.5,
                nota2: 3.5
                
            },
            {
                nombre: 'esteban',
                nota1: 4,
                nota2: 5
            },
            {
                nombre: 'thomas',
                nota1: 4,
                nota2: 4.5
            },
            {
                nombre: 'jacobo',
                nota1: 4.2,
                nota2: 3.9
            },
            {
                nombre: 'juana',
                nota1: 5,
                nota2: 3.5
            }
        ];

        await Notas.insertMany()
            console.log('Data duccessfully initialized');
        
    } catch (error) {
        console.error('Error al crear los usuarios', error);
        process.exit(1);
        
    }
}


module.exports = connectDatabase;

