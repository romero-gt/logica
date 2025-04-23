let produto1 = 10;
let produto2 = 5;
let total = produto1 + produto2 * 2;

console.log("Total da compra:", total);
console.log("Passou de R$15?", total > 15);

// function question01() {
//   let produto1 = parseFloat(prompt("Digite o Valor"));
//   let produto2 = parseFloat(prompt("Digite o Valor"));
//   let total = produto1 + produto2 * 2;
//   console.log(total);

//   alert("Total da compra> R$" + total + "\nPassou de R$15? " + (total > 15));
// }

// function question02() {
//   let numero = parseInt(prompt("Digite um número"));
//   let resultado = (numero % 2 === 0) ? "par" : "impar";
//   alert(numero + " é " + resultado);
// }
console.log("------------------")

let numero = 10
if (numero % 2 === 0) {
  console.log(numero + "é par");
}
else {
  console.log(numero + " é impar")
}


console.log("------------------")

let idade = 25;
let carteiraValida = false;

let podeAlugar = idade >= 25 && carteiraValida == true;
console.log("Pode alugar o carro?", podeAlugar);


console.log("------------------")

let a = "10";
let b = 10;
let comparacao1 = a === b;
let comparacao2 = a == b;

console.log("Comparando valor" + comparacao2)
console.log("Comparando valor e tipo" + comparacao1)

console.log("------------------")

let possuiEmprego = false;

if (!possuiEmprego) {
  console.log("Beneficio liberado")
} else {
  console.log("Beneficio negado")
}
