let usuarios = [
    { id: 1, nome: "lucas", email: "lucas@123.gmail.com", senha: "1233" }
];
let proximoId = 2;

function buscarTodos() {
    return usuarios;
}

function buscarPorId(id) {
    return usuarios.find(u => u.id === id);
}

function criar({ nome, email, senha }) {
    const novo = {
        id: proximoId++,
        nome,
        email,
        senha
    };
    usuarios.push(novo);
    return novo;
}

function atualizar(id, dadosAtualizados) {
    const idx = usuarios.findIndex(u => u.id === id);
    if (idx === -1) return null;

    usuarios[idx] = { ...usuarios[idx], ...dadosAtualizados, id };
    return usuarios[idx];
}

function remover(id) {
    const idx = usuarios.findIndex(u => u.id === id);
    if (idx === -1) return null;

    return usuarios.splice(idx, 1)[0];
}

module.exports = {
    buscarTodos,
    buscarPorId,
    criar,
    atualizar,
    remover
};