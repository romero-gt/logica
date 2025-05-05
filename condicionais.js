// let produto1 = 4;
// let produto2 = 5;
// let total = produto1 + produto2 * 2;

// console.log("Total da compra",total);
// console.log("Passou de R$ 15,00?", total > 15);

// ---

let teste = 10;
           
function question01(teste) {
    let produto1 = parseFloat(prompt("Digite um valor"))
    let produto2 = parseFloat(prompt("Digite um valor"))
    let total = Number (produto1) + Number (produto2) *2;
    console.log(total);

    alert("Total da compra: R$" + total + "\nPassou de R$ 15,00? " (total > 15));
}

function question02() {
    let numero = parseInt(prompt("Digite um número"));
    let resultado = (numero % 2 === 0)? "par" : "impar"

   alert(numero + " é " + resultado);
}

console.log(numero + "é par");

let idade = 25;
let carteiraValida = true;

let podeAlugar = idade >= 25 && carteiraValida == true;
console.log("Pode alugar o carro?", podeAlugar);

console.log("--------------")

let possuiEmprego = false;

if(!possuiEmprego){
   console.log("Benefício liberado!")
}else{
    console.log("Benefício negado!")
}

console.log("--------------")

if(!possuiEmprego){
    console.log("Benefício liberado!")
 }else{
     console.log("Benefício negado!")
 }

 console.log("--------------")

 let precoOriginal = 100;
 let desconto = 0.15;
 let valorFinal = precoOriginal - (desconto * precoOriginal)

 console.log(valorFinal)

 console.log("--------------")
//////