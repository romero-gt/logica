// 1
let A = 5;
let B = 7;
let C = 20;

if (A + B < C) {
    console.log("1) A soma de A + B é menor que C");
} else {
    console.log("1) A soma de A + B não é menor que C");
}

// 2
let nome = "Ana";
let sexo = "F";
let estadoCivil = "CASADA";

if (sexo === "F" && estadoCivil === "CASADA") {
    let anosCasada = 5;
    console.log(`2) ${nome} está casada há ${anosCasada} anos`);
} else {
    console.log("2) Não se aplica");
}

// 3
let numero = 13;

if (numero % 2 === 0) {
    console.log("3) O número é par");
} else {
    console.log("3) O número é ímpar");
}

// 4
let valorA = 4;
let valorB = 4;
let resultadoC;

if (valorA === valorB) {
    resultadoC = valorA + valorB;
} else {
    resultadoC = valorA * valorB;
}
console.log("4) Resultado de C:", resultadoC);

// 5
let n = -3;
let resultado5;

if (n >= 0) {
    resultado5 = n * 2;
} else {
    resultado5 = n * 3;
}
console.log("5) Resultado:", resultado5);

// 6
let bool1 = true;
let bool2 = true;

if (bool1 === bool2) {
    console.log("6) Ambos são iguais:", bool1 ? "Verdadeiros" : "Falsos");
} else {
    console.log("6) São diferentes");
}

// 7
let num7 = 9;
let resultado7 = num7 % 2 === 0 ? num7 + 5 : num7 + 8;
console.log("7) Resultado da operação:", resultado7);

// 8
let x = 12;
let y = 7;
let z = 20;
let numeros = [x, y, z];
numeros.sort((a, b) => b - a);
console.log("8) Números em ordem decrescente:", numeros);

// 9
let altura = 1.75;
let sexoPessoa = "M";
let pesoIdeal;

if (sexoPessoa === "M") {
    pesoIdeal = (72.7 * altura) - 58;
} else {
    pesoIdeal = (62.1 * altura) - 44.7;
}
console.log("9) Peso ideal é:", pesoIdeal.toFixed(2), "kg");

// 10
let peso = 80;
let alturaIMC = 1.80;
let imc = peso / (alturaIMC * alturaIMC);
let condicao;

if (imc < 18.5) {
    condicao = "Abaixo do peso";
} else if (imc < 25) {
    condicao = "Peso normal";
} else if (imc < 30) {
    condicao = "Acima do peso";
} else {
    condicao = "Obeso";
}
console.log("10) IMC:", imc.toFixed(2), "-", condicao);

// 11
let preco = 100;
let codigoPagamento = 2;
let totalPago;

switch (codigoPagamento) {
    case 1:
        totalPago = preco * 0.9;
        break;
    case 2:
        totalPago = preco * 0.85;
        break;
    case 3:
        totalPago = preco;
        break;
    case 4:
        totalPago = preco * 1.1;
        break;
    default:
        totalPago = preco;
}
console.log("11) Total a pagar:", totalPago.toFixed(2));

// 12
let idAluno = 123;
let nota1 = 70;
let nota2 = 80;
let nota3 = 90;
let mediaExercicios = 85;

let mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7;
let conceito;
let status;

if (mediaAproveitamento >= 90) {
    conceito = "A";
    status = "Aprovado";
} else if (mediaAproveitamento >= 75) {
    conceito = "B";
    status = "Aprovado";
} else if (mediaAproveitamento >= 60) {
    conceito = "C";
    status = "Aprovado";
} else if (mediaAproveitamento >= 40) {
    conceito = "D";
    status = "Reprovado";
} else {
    conceito = "E";
    status = "Reprovado";
}

console.log("12) Aluno:", idAluno);
console.log("Notas:", nota1, nota2, nota3);
console.log("Média dos Exercícios:", mediaExercicios);
console.log("Média de Aproveitamento:", mediaAproveitamento.toFixed(2));
console.log("Conceito:", conceito);
console.log("Status:", status);
