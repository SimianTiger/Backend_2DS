const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default //padrão

try {
    const arquivo = fs.readFileSync(path.resolve(__dirname, 'estudo.md'), 'utf-8')
    console.log(chalk.rgb(102, 51, 153)('Arquivo carregado com sucesso!'))
    console.log(arquivo)
} catch (error) {
    console.log(chalk.rgb(216, 145, 239)('Mensagem de erro:'))
    console.log(chalk.rgb(216, 145, 239)(error.message))
}

