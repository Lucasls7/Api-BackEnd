const express = require('express');
const app = express()

app.use(express.json())
const PORT = 3000

const routes = require('./src/routes/tarefaRoute')
app.use(routes)

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`))
