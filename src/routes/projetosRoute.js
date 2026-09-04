const express = require('express');
const router = express.Router();
const projetoController = require('../controllers/projetosController');

router.get('/projetos', projetoController.buscarProjetos);
router.post('/projetos', projetoController.criar);
router.get('/projetos/:id', projetoController.buscarPorId);
router.put('/projetos/:id', projetoController.atualizar);
router.delete('/projetos/:id', projetoController.remover);

module.exports = router;