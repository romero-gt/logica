let produto1 = 4;
let produto2 = 5;
let total = produto1 + produto2 *2;

console.log("Total de compra:" , total);
console.log("Passou de R$15?" , total > 15);

function question01 () {
    let produto1 = parseFloat(prompt("Digite um valor"));
    let produto2 = parseFloat(prompt("Digite um valor"));
    let total = produto1 + produto2 * 2;
    console.log(total);

    alert("Total da compra: R$" + total + "\nPassou de R$15? " + (total > 15));
}