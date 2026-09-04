const express = require('express');
const app = express()

app.use(express.json())
const PORT = 3000

const routes = require('./src/routes/tarefaRoute')
app.use(routes)
const routesUsuarios = require('./src/routes/usuarioRoute')
app.use(routesUsuarios)
const routesProjetos = require("./src/routes/projetosRoute")
app.use(routesProjetos)
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`))
