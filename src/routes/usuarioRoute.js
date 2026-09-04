// routes/usuarioRoutes.js

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/usuarios', usuarioController.buscarUsuarios);
router.post('/usuarios', usuarioController.criar);
router.get('/usuarios/:id', usuarioController.buscarPorId);
router.put('/usuarios/:id', usuarioController.atualizar);
router.delete('/usuarios/:id', usuarioController.remover);

module.exports = router;