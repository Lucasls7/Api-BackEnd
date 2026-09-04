const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.get('/estatisticas', tarefaController.estatisticas);
router.get('/tarefas', tarefaController.buscarTarefas); // Corrigido: 'listar' alterado para 'buscarTarefas'
router.post('/tarefas', tarefaController.criar);
router.get('/tarefas/:id', tarefaController.buscarPorId);
router.put('/tarefas/:id', tarefaController.atualizar);
router.delete('/tarefas/:id', tarefaController.remover);

module.exports = router;