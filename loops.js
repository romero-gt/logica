// let i = 0
// while (i <= 10) {
//     console.log(i)
//     i++
// }

// for (let num = 0; num <= 10; num += 2) {
//     console.log(num)
// }

// let x = 0
// do {
//     console.log(x + ' sou menor que 10')
//     x++
// } while(x < 10)

// console.log('Tabuada de 5: ')
// for(let i = 0; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`)
// }

// let tabuada = 5
// for(let i = 0; i <= 10; i++) {
//     const multiplicacao = i * tabuada
//     console.log(`${tabuada} x ${i} = ${multiplicacao}`)
// }

// let contagem = 5
// console.log('Prepare...')
// while(contagem > 0) {
//     console.log(contagem)
//     contagem--
// }

// let tentativa;
// let senhaCorreta = '1234'
// let contadorTentativa = 0
// do {
//     tentativa = '54321'
//     contadorTentativa++
//     console.log('Tentativa', contadorTentativa, ':', tentativa)

//     tentativa = '4321'
//     contadorTentativa++
//     console.log('Tentativa', contadorTentativa, ':', tentativa)

//     tentativa = '1234'
//     contadorTentativa++
//     console.log('Tentativa', contadorTentativa, ':', tentativa)
//     contadorTentativa++
// } while (tentativa !== senhaCorreta)
// console.log(`Acesso liberado após ${contadorTentativa} tentativas`)

// let somaPares = 0
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         somaPares += i
//         console.log(i)
//         console.log(somaPares)
//     }
// }
// console.log('Soma dos pares entre 1 e 20: ', somaPares)

// let convidados = ['Ana', 'Flavia', 'Renato']
// let index = 0
// console.log('Lista de convidados: ')
// while (index < convidados.length) {
//     console.log(convidados[index])
//     index++
// }

let numeroTentativa = 3
let senha = 'abc123'
let senhaDigitada
do {
    senhaDigitada = 'abc123'
    if (senhaDigitada !== senha) {
        console.log(`Senha incorreta, voce tem ${numeroTentativa} tentativas`)
    } else {
        console.log('Senha correta')
        numeroTentativa = 0
    }
    numeroTentativa--
} while (numeroTentativa > 0)