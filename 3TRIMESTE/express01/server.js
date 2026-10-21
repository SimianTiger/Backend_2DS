import express from 'express'
import path from 'path'
import { fileURLToPath } from 'node:url'

const app = express()
const serverDirectory = path.dirname(fileURLToPath(import.meta.url))
const paginasPath = path.join(serverDirectory, 'src/paginas')
const estilosPath = path.join(serverDirectory, 'src/publico/estilos')

app.get('/', (req, res) => {
  res.sendFile(path.join(paginasPath, 'index.html'))
})

app.get('/jogos', (req, res) => {
  res.sendFile(path.join(paginasPath, 'jogos.html'))
})

app.get('/como-funciona', (req, res) => {
  res.sendFile(path.join(paginasPath, 'como-funciona.html'))
})

app.get('/avaliacoes', (req, res) => {
  res.sendFile(path.join(paginasPath, 'avaliacoes.html'))
})

app.get('/contato', (req, res) => {
  res.sendFile(path.join(paginasPath, 'contato.html'))
})

app.use('/estilos', express.static(estilosPath))
app.use(express.static(paginasPath))

app.listen(3000, () => {
  console.log('Servidor está online: http://localhost:3000')
})
