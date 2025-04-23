let produto1 = 4
let produto2 = 5
let total = produto1 + produto2 * 2
console.log('Total da compra: ', total)
console.log('Passou de R$15?', total > 15)

// function question1() {
//     let produto1 = parseFloat(prompt('Digite um valor: '))
//     let produto2 = parseFloat(prompt('Digite outro valor: '))
//     let total = produto1 + produto2 * 2
//     console.log(total)
//     alert('Total da compra: R$' + total + '\nPassou de R$15?' + (total > 15))
// }

console.log('----------------')

let numero = 10
if (numero % 2 === 0) {
    console.log('par')
} else {
    console.log('impar')
}

console.log('----------------')

let idade = 25
let carteiraValida = false
let podeAlugar = idade >= 25 && carteiraValida == true
console.log('Pode alugar o carro?', podeAlugar)

console.log('----------------')

let a = '10'
let b = 10
comparacao1 = a === b
comparacao2 = a == b
console.log('Somente valor: ' + comparacao2)
console.log('Valor e tipo: ' + comparacao1)

console.log('----------------')

let possuiEmprego = false
if (!possuiEmprego) {
    console.log('Beneficio liberado')
} else {
    console.log('Beneficio negado')
}

console.log('----------------')

let nota = 7.5
if (nota >= 6 && nota <= 10) {
    console.log('Aprovado')
}   else {
    console.log('Reprovado')
}

console.log('----------------')

let convite = true
let vip = true
if (convite || vip) {
    console.log('Pode entrar')
}   else {
    console.log('Não pode entrar')
}

console.log('----------------')

let base = 5
let expoente = 1
let potencia = base ** expoente
console.log(`Pontencia calculada: ${potencia}`)
if (potencia > 5) {
    console.log('Alta tensão')
}   else {
    console.log('Baixa tensão')
}

console.log('----------------')

let produto = 100
let desconto = 0.15
let valorFinal = produto - (desconto * produto)
console.log(valorFinal)

console.log('----------------')

let escolha = 'c'
switch (escolha) {
    case 'a':
        console.log('Selecionou A')
        break
    case 'b':
        console.log('Selecionou B')
        break
    default:
        console.log('Não selecionou opção')
}