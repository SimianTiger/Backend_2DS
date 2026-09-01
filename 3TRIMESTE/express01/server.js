// importação moderna com ESM (import)

import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Home Ok')
})

app.get('/roupa', (req, res) => {
  res.send('Roupa Ok')
})

app.listen(3000, () => {console.log('Servidor está online')})