const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')
const porta = 8005
// carregar o caminho dos arquivos
const home = path.join(__dirname, 'pages/index.html')
const sobre = path.join(__dirname, 'pages/sobre.html')

const server = http.createServer((req,res) =>{
    //qual informação eu tenho?
    const urlTratada = new URL(req.url, `http://${req.headers.host}`)
    const recurso = urlTratada.pathname

    if(recurso === '/'){
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.statusCode = 200
        return res.end(fs.readFileSync(home, 'utf-8'))

    }if(recurso === '/sobre'){
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.statusCode = 200
        return res.end(fs.readFileSync(sobre, 'utf-8'))
    } else {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.statusCode = 401
        return res.end('<h3>401 Não Autorizado</h3>')
    }
})

server.listen(porta, ()=>{
    console.log(`Servidor Rodando na porta ${porta}`)
})