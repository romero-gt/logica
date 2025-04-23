let produto1 = 4;
let produto2 = 5;
let total = produto1 + produto2 * 2;

console.log("Total da compra:", total);
console.log("Passou de R$15?", total > 15);

console.log("--------------")

let numero = 10;
if (numero % 2 === 0) {
    console.log(numero + " é par");
} else {
    console.log(numero + " é impar");
}

console.log("--------------")

let idade = 25;
let carteiraValida = true;

let podeAlugar = idade >= 25 && carteiraValida == true;
console.log("Pode alugar o carro?", podeAlugar);

console.log("--------------")

let a = "10";
let b = 10;
let comparacao1 = a === b;
let comparacao2 = a == b;

console.log("Comparando valor: " + comparacao2);    
console.log("Comparando valor e tipo: " + comparacao1);

console.log("--------------")

let possuiEmprego = false ? "negado" : "liberado";
console.log(`Beneficio ${possuiEmprego}`)

console.log("--------------")

let nota = 7.5;
let aprovacao = nota >= 6 && nota <=10 ? "Aprovado!" : "Reprovado!"
console.log(aprovacao);

// if (nota >= 6 && nota <= 10) {
//     console.log("Aprovado!")
// } else {
//     console.log("Reprovado!")
// }

console.log("--------------")

let convite = false;
let listaVIP = false;
let liberado = (convite || listaVIP) ? "Liberada!" : "Barrada!";

console.log(`A pessoa foi ${liberado}, pois o convite é ${convite}, e a lista é ${listaVIP}`) //template string

console.log("A pesssoa foi " + liberado + ", pois o convite é " + convite + ", e a lista é " + listaVIP) //concatenação

console.log("--------------")

let voltagemBase = 2;
let expoente = 5;
let potencia = voltagemBase ** expoente;

console.log("Potencia calculada: " + potencia);

if (potencia >=  5) {
    console.log("Alta tensão");
} else {
    console.log("Baixa tensão")
}

console.log("--------------")

let precoOriginal = 100;
let desconto = 0.15;
let valorFinal = precoOriginal - (desconto * precoOriginal)

console.log(valorFinal)

console.log("--------------")

let escolha = "b";

switch (escolha) {
    case "a":
        console.log("Selecionou A")
        break;
    case "b":
        console.log("Selecionou B")
        break;
    default:
        console.log("Não selecionou opção!")
}

console.log("--------------")
