// 1. Um cliente comprou dois produtos: um de R$10 e outro de R$5. Calcule o total com o dobro do segundo item incluso e veja se o valor final ultrapassa R$15.//

let produto1 = 10;
let produto2 = 5;
let total = produto1 + produto2 *2;

console.log('total da compra:', total)
console.log("Passou de R$15?", total > 15)

// Questão 01 //

// function question01(){
//     let produto1 = parseFloat(prompt("digite um valor"));
//     let produto2 = parseFloat(prompt("Digite um valor")); 
//     let total = produto1 + produto2 *2;
//     console.log(total)

//     alert("Total da compra: $5" + total + "\n Nao passou de R$15?" + (total > 15)); 
// }

// Questão 02 //

// function question02(){
//     let numero = parseInt(prompt("digite um numero"));
//     let resultado = (numero % 2 ===0) ? "par" : "impar";
//     alert(numero + " é " + resultado);
// }

let numero = 10;
if (numero % 2 === 0) {
    console.log(numero + "é par");
} else {
    console.log(numero + "é impar");
}

// Questão 03 // Verifique se uma pessoa de 25 anos e com carteira de motorista válida pode alugar um carro.

let idade = 25
let carteiravalida = false; 
let podeAlugar = idade >= 25 && carteiraValida == true;
console.log("Pode alugar o carro?",podeAlugar);

console.log("----------")

// Questão 04 // Um formulário retornou uma string "10" e um número 10. Compare os dois valores de formas diferentes.

let a = 10;
let b = 10;
let comparacao1 = a === b;
let comparacao2 = a === b;

console.log("Comparando valor" + comparacao2)
console.log("comparando e tipo" + comparacao1)

console.log("----------")

// Questão 05 //  Um formulário retornou uma string "10" e um número 10. Compare os dois valores de formas diferentes

let possuieEmprego = false;

if (!possuiEmprego) { 
    console.log ("Beneficio liberado!")
} else {}

//  Questão 06//

let nota = 7.5; 

if (nota >= 6 && nota <= 10) {
    console.log("Aprovado!")
} elfe{
    console.log("Reprovado!")
}

console.log


