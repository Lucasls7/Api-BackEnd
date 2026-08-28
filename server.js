// const express = require('express');
// const app = express();
// const PORTA = 3000;

// let tarefas = [

// { id: 1, texto: 'Estudar Node', prioridade: 'alta', coluna: 'afazer' },
// { id: 2, texto: 'Criar API', prioridade: 'alta', coluna: 'andamento' },
// { id: 3, texto: 'Testar Postman',prioridade: 'media', coluna: 'concluido' },
// ];

// app.get('/', (req, res) => {
//     res.json({ mensagem: 'TaskFlow API funcionando!' });
// });

// app.get("/tarefas/:id", (req, res) =>{
//     const id = Number(req.params.id)
// let tarefa = tarefas.find(t => t.id === id)

// res.json(tarefa)
// })

// app.get('/tarefas', (req, res) => {
//     const { coluna, prioridade } = req.query;
    
//     let resultado = tarefas;
    
//     if (coluna) {
//         resultado = resultado.filter(t => t.coluna === coluna);
// }
//     if (prioridade) {
//         resultado = resultado.filter(t => t.prioridade === prioridade);
// }

// res.json(resultado);

// });

// let proximoId = 4; 
// app.use(express.json());
// app.post('/tarefas', (req, res) => {

// const { texto, prioridade, coluna, cidade } = req.body;

// const novaTarefa = {
//     id: proximoId++, 
//     texto: texto,
//     prioridade:prioridade || 'media', 
//     coluna: coluna || 'afazer',
//     cidade: cidade || '',
// };

// tarefas.push(novaTarefa);

// res.status(201).json(novaTarefa);
// });

// app.put('/tarefas/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const { texto, prioridade, coluna, cidade } = req.body;
    
//     const indice = tarefas.findIndex(t => t.id === id);

// if (indice === -1) {
//     return res.status(404).json({ erro: 'Tarefa não encontrada' });
// }

// const tarefaAtualizada = { id, texto, prioridade, coluna, cidade };
// tarefas[indice] = tarefaAtualizada;

// res.json(tarefaAtualizada);
// });

// app.delete('/tarefas/:id', (req, res) => {
//     const id = Number(req.params.id);

//     const tarefa = tarefas.find(t => t.id === id);
    
//     if (!tarefa) {
//         return res.status(404).json({ erro: 'Tarefa não encontrada' });
// }
//     tarefas = tarefas.filter(t => t.id !== id);
    
//     res.json({ mensagem: 'Tarefa removida com sucesso', id });
// });

// app.listen(PORTA, () => {
//     console.log(`Servidor rodando em http://localhost:${PORTA}`);
// });






const express = require('express');
const app = express();
const PORTA = 3000;

app.use(express.json());

// ===============================
// TAREFAS
// ===============================

let tarefas = [
    { id: 1, texto: 'Estudar Node', prioridade: 'alta', coluna: 'afazer' },
    { id: 2, texto: 'Criar API', prioridade: 'alta', coluna: 'andamento' },
    { id: 3, texto: 'Testar Postman', prioridade: 'media', coluna: 'concluido' },
];

let proximoId = 4;

// ROTA PRINCIPAL
app.get('/', (req, res) => {
    res.json({ mensagem: 'TaskFlow API funcionando!' });
});

// BUSCAR TAREFA POR ID
app.get('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);
    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) {
        return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    res.json(tarefa);
});

// LISTAR TAREFAS COM FILTROS
app.get('/tarefas', (req, res) => {
    const { coluna, prioridade } = req.query;

    let resultado = tarefas;

    if (coluna) {
        resultado = resultado.filter(t => t.coluna === coluna);
    }

    if (prioridade) {
        resultado = resultado.filter(t => t.prioridade === prioridade);
    }

    res.json(resultado);
});

// CRIAR TAREFA
app.post('/tarefas', (req, res) => {
    const { texto, prioridade, coluna, cidade } = req.body;

    const novaTarefa = {
        id: proximoId++,
        texto: texto,
        prioridade: prioridade || 'media',
        coluna: coluna || 'afazer',
        cidade: cidade || '',
    };

    tarefas.push(novaTarefa);

    res.status(201).json(novaTarefa);
});

// ATUALIZAR TAREFA
app.put('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);
    const { texto, prioridade, coluna, cidade } = req.body;

    const indice = tarefas.findIndex(t => t.id === id);

    if (indice === -1) {
        return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    const tarefaAtualizada = {
        id,
        texto,
        prioridade,
        coluna,
        cidade
    };

    tarefas[indice] = tarefaAtualizada;

    res.json(tarefaAtualizada);
});

// DELETAR TAREFA
app.delete('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);

    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) {
        return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    tarefas = tarefas.filter(t => t.id !== id);

    res.json({
        mensagem: 'Tarefa removida com sucesso',
        id
    });
});


// ===============================
// USUÁRIOS
// ===============================

// Array inicial de usuários
let usuarios = [
    {
        id: 1,
        nome: 'admin',
        email: 'admin@taskflow.com',
        senha: '1234'
    }
];

let proximoIdUsuario = 2;

// ROTA 1 — LISTAR USUÁRIOS
// GET /usuarios
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

// ROTA 2 — BUSCAR USUÁRIO POR ID
// GET /usuarios/1
app.get('/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);

    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({
            erro: 'Usuário não encontrado'
        });
    }

    res.json(usuario);
});

// ROTA 3 — CRIAR USUÁRIO
// POST /usuarios
app.post('/usuarios', (req, res) => {
    const { nome, email, senha } = req.body;

    // Verificar se o email já existe
    const emailExiste = usuarios.some(u => u.email === email);

    if (emailExiste) {
        return res.status(400).json({
            erro: 'Email já cadastrado'
        });
    }

    const novoUsuario = {
        id: proximoIdUsuario++,
        nome,
        email,
        senha
    };

    usuarios.push(novoUsuario);

    res.status(201).json(novoUsuario);
});

// ROTA 4 — ATUALIZAR USUÁRIO
// PUT /usuarios/:id
app.put('/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);
    const { nome, email, senha } = req.body;

    const indice = usuarios.findIndex(u => u.id === id);

    if (indice === -1) {
        return res.status(404).json({
            erro: 'Usuário não encontrado'
        });
    }

    // Verificar se o email já pertence a outro usuário
    const emailExiste = usuarios.some(
        u => u.email === email && u.id !== id
    );

    if (emailExiste) {
        return res.status(400).json({
            erro: 'Email já cadastrado'
        });
    }

    const usuarioAtualizado = {
        id,
        nome,
        email,
        senha
    };

    usuarios[indice] = usuarioAtualizado;

    res.json(usuarioAtualizado);
});

// ROTA 5 — DELETAR USUÁRIO
// DELETE /usuarios/:id
app.delete('/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);

    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({
            erro: 'Usuário não encontrado'
        });
    }

    usuarios = usuarios.filter(u => u.id !== id);

    res.json({
        mensagem: 'Usuário removido',
        id
    });
});


// ===============================
// INICIAR SERVIDOR
// ===============================

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});