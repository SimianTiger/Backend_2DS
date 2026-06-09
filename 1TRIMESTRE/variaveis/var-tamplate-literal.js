//tamplete literals permite:
//criar textos interpolados(variaveis e textos)
//o placeholder (modelo) exige : '${}'

const nome = "ronaldo";
const ListaDeDesejos = ["carro", "casa", "viagem"];
//Ex 01 - sem template literals
const meuPerfil = "Olá " + nome + " Seus desejos são " + ListaDeDesejos + "este é o primeito perfil"
//Ex 02 - com template literals
const meuPerfil2 = `Olá ${nome} Seus desejos são ${ListaDeDesejos} este é o segundo perfil`

console.log(meuPerfil)
console.log(meuPerfil2)
