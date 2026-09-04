const tarefaModel = require('../models/tarefaModel');

function buscarTarefas(req, res) {
    const tarefas = tarefaModel.buscarTodas();
    return res.json(tarefas);
}

function buscarPorId(req, res) {
    const id = parseInt(req.params.id);
    const tarefa = tarefaModel.buscarPorId(id);
    
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json(tarefa);
}

function criar(req, res) {
    const { texto, prioridade, coluna } = req.body;
    if (!texto) return res.status(400).json({ erro: 'Texto obrigatório' });

    const novaTarefa = tarefaModel.criar({ texto, prioridade, coluna });
    res.status(201).json(novaTarefa);
}

function atualizar(req, res) {
    const id = parseInt(req.params.id);
    const tarefaAtualizada = tarefaModel.atualizar(id, req.body);

    if (!tarefaAtualizada) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json(tarefaAtualizada);
}

function remover(req, res) {
    const id = parseInt(req.params.id);
    const removida = tarefaModel.remover(id);

    if (!removida) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json({ mensagem: 'Tarefa removida', tarefa: removida });
}

function estatisticas(req, res) {
    const { coluna } = req.query;
    const resultado = tarefaModel.obterEstatisticas(coluna);
    res.json(resultado);
}

module.exports = { 
    buscarTarefas, 
    estatisticas, 
    remover, 
    criar, 
    atualizar, 
    buscarPorId 
};