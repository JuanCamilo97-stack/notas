const express = require('express');

const router = express.Router();
const notasController = require('../controllers/notasController');


router.get('/api/notas', notasController.getAllNotas);
router.post('/api/notas/crear', notasController.createNotas);
router.post('/api/notas/id', notasController.getNotasById);
router.get('/api/notas/getName', notasController.getNotasByName);
router.patch('/api/notas/actualizarOne/:nombre', notasController.updateNotas);
router.delete('/api/notas/delete/:nombre', notasController.deleteNotas);

module.exports = router;