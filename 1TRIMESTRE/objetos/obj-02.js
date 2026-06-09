//a patir do objeto de exemplo crie
//um objeto com o tema de sua escolha, utilizando as seguintes 6 chaves:
//nome, idade, profissão, time_favorito, hobbies
//exemplo: console.log("Cor do veiculo: " + veiculo.cor)
//imprima de um jeito amigave
// /um objeto com tema da escola, utilizando as seguintes 6 chaves:

const escola = {
    nome: "Escola Estadual de Ensino Fundamental",
    idade: 50,
    profissão: "Educação",
    time_favorito: "Flamengo",
    hobbies: ["Ler", "Escrever", "Ensinar"],
    atividades: ["Matemática", "Português", "Ciências", "História", "Geografia"]
};

console.log("Informações sobre a escola");

console.log("Nome da escola: " + escola.nome);
console.log("Idade da escola: " + escola.idade + " anos");
console.log("Profissão: " + escola.profissão);
console.log("Time favorito: " + escola.time_favorito);
console.log("Hobbies: " + escola.hobbies.join(", "));
console.log("Atividades: " + escola.atividades.join(", "));
console.log("--------------------------------------------")
