// são estruturas complexas de dados
//agrupamento do tipo chave-valor (k, v)
//podem conter valores, arrays, objetos, funções, etc

const celular = {
    tela: '6,7',
    modelo: 'sansung S26',
    cor: ['Cobalt Violet', 'Preto', 'Branco'],
    acao: function onOf() {return 'ligar ou desligar'},
}
console.log(celular.cor[0])
console.log(celular.acao())