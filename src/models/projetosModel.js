// models/projetoModel.js

let projetos = [
    { id: 1, descricao: "MVC- usuarios", ativo: true }
];
let proximoId = 2;

function buscarTodos() {
    return projetos;
}

function buscarPorId(id) {
    return projetos.find(p => p.id === id);
}

function criar({ descricao, ativo }) {
    const novo = {
        id: proximoId++,
        descricao,
        ativo: ativo !== undefined ? ativo : true
    };
    projetos.push(novo);
    return novo;
}

function atualizar(id, dadosAtualizados) {
    const idx = projetos.findIndex(p => p.id === id);
    if (idx === -1) return null;

    projetos[idx] = { ...projetos[idx], ...dadosAtualizados, id };
    return projetos[idx];
}

function remover(id) {
    const idx = projetos.findIndex(p => p.id === id);
    if (idx === -1) return null;

    return projetos.splice(idx, 1)[0];
}

module.exports = {
    buscarTodos,
    buscarPorId,
    criar,
    atualizar,
    remover
};