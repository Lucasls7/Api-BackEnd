// controllers/usuarioController.js

const usuarioModel = require('../models/usuarioModel');

function buscarUsuarios(req, res) {
    return res.json(usuarioModel.buscarTodos());
}

function buscarPorId(req, res) {
    const id = parseInt(req.params.id);
    const usuario = usuarioModel.buscarPorId(id);
    if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });
    res.json(usuario);
}

function criar(req, res) {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
        return res.status(400).json({ erro: 'Nome, e-mail e senha são obrigatórios' });
    }

    const novo = usuarioModel.criar({ nome, email, senha });
    res.status(201).json(novo);
}

function atualizar(req, res) {
    const id = parseInt(req.params.id);
    const atualizado = usuarioModel.atualizar(id, req.body);
    if (!atualizado) return res.status(404).json({ erro: 'Usuário não encontrado' });
    res.json(atualizado);
}

function remover(req, res) {
    const id = parseInt(req.params.id);
    const removido = usuarioModel.remover(id);
    if (!removido) return res.status(404).json({ erro: 'Usuário não encontrado' });
    res.json({ mensagem: 'Usuário removido', usuario: removido });
}

module.exports = {
    buscarUsuarios,
    buscarPorId,
    criar,
    atualizar,
    remover
};