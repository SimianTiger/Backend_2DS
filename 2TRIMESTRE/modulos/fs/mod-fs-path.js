const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default

try {
    const arquivo = fs.readFileSync(path.join(__dirname, 'estudo.md'), 'utf-8')
    console.log(chalk.hex('663399')('Arquivo carregado com sucesso!'))
    console.log(arquivo)
} catch (erro) {
    console.log(chalk.red('Deu ruim:'))
    console.log(erro.message)
}

