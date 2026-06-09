//if, else if, else, ternário
//>, <, >=, <=, >=, !=
// ||, &&

let idade = 100

if(idade < 18){
    console.log("Você é menor de idade, só entra com um responsável")
    console.log("vá para casa estudar em vez de ficar na rua")
} else if(idade >= 18 && idade < 60){
    console.log("Você é maior de idade, seja bem vindo senhor(a)")
    console.log("Bem vindo a balada senhor!")
} else if(idade >= 60 && idade < 100){
    console.log("você ja está velinho demais, venha com um responsável")
} else if(idade >= 100){
    console.log("Você é muito velho, vá para sua casa descansar")
}