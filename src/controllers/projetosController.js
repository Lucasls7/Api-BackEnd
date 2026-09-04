// controllers/projetoController.js

const projetoModel = require('../models/projetosModel');

function buscarProjetos(req, res) {
    return res.json(projetoModel.buscarTodos());
}

function buscarPorId(req, res) {
    const id = parseInt(req.params.id);
    const projeto = projetoModel.buscarPorId(id);
    if (!projeto) return res.status(404).json({ erro: 'Projeto não encontrado' });
    res.json(projeto);
}

function criar(req, res) {
    const { descricao, ativo } = req.body;
    if (!descricao) {
        return res.status(400).json({ erro: 'Descrição é obrigatória' });
    }

    const novo = projetoModel.criar({ descricao, ativo });
    res.status(201).json(novo);
}

function atualizar(req, res) {
    const id = parseInt(req.params.id);
    const atualizado = projetoModel.atualizar(id, req.body);
    if (!atualizado) return res.status(404).json({ erro: 'Projeto não encontrado' });
    res.json(atualizado);
}

function remover(req, res) {
    const id = parseInt(req.params.id);
    const removido = projetoModel.remover(id);
    if (!removido) return res.status(404).json({ erro: 'Projeto não encontrado' });
    res.json({ mensagem: 'Projeto removido', projeto: removido });
}

module.exports = {
    buscarProjetos,
    buscarPorId,
    criar,
    atualizar,
    remover
};