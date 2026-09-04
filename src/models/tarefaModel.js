let tarefas = [{ id: 1, texto: "node.js", prioridade: "media", coluna: "feito" }];
let proximoId = 2;

function buscarTodas() {
    return tarefas;
}

function buscarPorId(id) {
    return tarefas.find(t => t.id === id);
}

function criar({ texto, prioridade, coluna }) {
    const nova = {
        id: proximoId++,
        texto,
        prioridade: prioridade || 'media',
        coluna: coluna || 'afazer'
    };
    tarefas.push(nova);
    return nova;
}

function atualizar(id, dadosAtualizados) {
    const idx = tarefas.findIndex(t => t.id === id);
    if (idx === -1) return null;

    // Garante que o ID não seja alterado
    tarefas[idx] = { ...tarefas[idx], ...dadosAtualizados, id };
    return tarefas[idx];
}

function remover(id) {
    const idx = tarefas.findIndex(t => t.id === id);
    if (idx === -1) return null;

    return tarefas.splice(idx, 1)[0];
}

function obterEstatisticas(colunaFiltro) {
    const base = colunaFiltro ? tarefas.filter(t => t.coluna === colunaFiltro) : tarefas;

    const porColuna = {
        afazer: base.filter(t => t.coluna === 'afazer').length,
        andamento: base.filter(t => t.coluna === 'andamento').length,
        concluido: base.filter(t => t.coluna === 'concluido').length,
    };

    return { total: base.length, porColuna };
}

module.exports = {
    buscarTodas,
    buscarPorId,
    criar,
    atualizar,
    remover,
    obterEstatisticas
};