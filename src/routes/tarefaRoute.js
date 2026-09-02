const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.get('/estatisticas', tarefaController.estatisticas);
router.get('/', tarefaController.buscarTarefas); // Corrigido: 'listar' alterado para 'buscarTarefas'
router.post('/', tarefaController.criar);
router.get('/:id', tarefaController.buscarPorId);
router.put('/:id', tarefaController.atualizar);
router.delete('/:id', tarefaController.remover);

module.exports = router;