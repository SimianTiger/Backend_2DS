// são blocos de código reaproveitaveis
//remete a alguma ação ou procedimentos (replicavel)
// exige nomes auto-explicativeis

function montarCarros(pecas, regras, documentos, montador) {
    return{ // expor os valores da função para reaproveitamento
        itens:[pecas, regras, documentos, montador],
        montar: function () { console.log('Carro obtido com sucesso \\o/')}
   }
} //todos os dados serão descartados
montarCarros(['motor', 'portas', 'rodas'],
    'como montr um Monza',
    'projeto para montar um monza',
    'Seu zé'