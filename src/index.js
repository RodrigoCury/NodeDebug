const express = require('express')
const app = express()

app.get('/', (req, res) => {
    const valor = req.query.valor
    const valorDoResponse = `Recebi o valor : ${valor}!`
    res.send(valorDoResponse)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`
        Servidor Subiu com sucesso!
        http://localhost:3000
    `);
})