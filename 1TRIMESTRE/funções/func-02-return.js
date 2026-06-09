//funções com retorno exigem "return"
//podemos retornar qualquer tipo de dado
//podemos retornar usando tamplete literals

const nomeProduto = 'camisa'
const valorProduto = 35.9

function dadosproduto(){
    return `O nome do produto é ${nomeProduto} e o valor é R$${valorProduto}`
}
const produtoFinal = dadosproduto()
console.log(produtoFinal)