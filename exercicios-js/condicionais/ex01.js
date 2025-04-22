// 1. Um cliente comprou dois produtos: um de R$10 e outro de R$5. Calcule o total com o dobro do segundo item incluso e veja se o valor final ultrapassa R$15.
let produto1 = 10
let produto2 = 5

let total = produto1 + (produto2 * 2)

if(total > 15) {
    console.log(`O total, ${total}, ultrapassou R$15,00!`)
} else {
    console.log(`O total, ${total}, não ultrapassou R$15,00!`)
}
