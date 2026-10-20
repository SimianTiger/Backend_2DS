import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send("Página Home")
})

app.get('/jogos', (req, res) => {
    res.send("Página de Jogos")
})

app.get('/como-funciona', (req, res) => {
    res.send("Página Como Funciona")
})

app.get('/avaliacoes', (req, res) => {
    res.send("Página Avaliações")
})

app.get('/contato', (req, res) => {
    res.send("Página de Contato")
})

app.use('/estilos', express.static('estilos'))

app.listen(3000, () => { console.log('Servidor está online') })