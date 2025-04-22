// 1. Um cliente comprou dois produtos: um de R$10 e outro de R$5. Calcule o total com o dobro do segundo item incluso e veja se o valor final ultrapassa R$15.//

let produto1 = 10;
let produto2 = 5;
let total = produto1 + produto2 *2;

console.log('total da compra:', total)
console.log("Passou de R$15?", total > 15)


function question01(){
    let produto1 = parseFloat(prompt("digite um valor"));
    let produto2 = parseFloat(prompt("Digite um valor")); 
    let total = produto1 + produto2 *2;
    console.log(total)

    alert("total da compra: $5" + total + "\n nao passou de R$15?" + (total > 15)); 
}