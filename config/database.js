const mongoose = require('mongoose');
let notas;

const connectDatabase = async () => {
    try {
        if(!notas){
            notas = mongoose.model('notas', require('../models/notasModel').schema);
        }
      
        await mongoose.connect('mongodb+srv://juanatehortua97:Camilo1010036676@cluster0.mg3yga1.mongodb.net/')
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
        
        await notas.insertMany()[
            {
                nombre: 'deiby',
                nota1: 3.1,
                nota2: 4.9
                
            },
            {
                nombre: 'Camilo',
                nota1: 3,
                nota2: 4.5
            },
            {
                nombre: 'sergio',
                nota1: 2.8,
                nota2: 2.3
            }
        ];

        await notas.insertMany()
            console.log('Data duccessfully initialized');
        
    } catch (error) {
        console.error('Error al crear los usuarios', error);
        process.exit(1);
        
    }
}


module.exports = connectDatabase;

