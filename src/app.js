const express = require('express')
const app = express()
const port = 7070;

// Criando rota padrão ou raiz do projeto.
app.get('/', (req, res) => {
    res.send('Curso youtube de node.js')
})

// Escutando a porta 7070
app.listen(port, () => {
    console.log(`Servidor online na porta ${port}`)
})