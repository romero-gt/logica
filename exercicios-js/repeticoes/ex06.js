// 6. Um caixa eletrônico libera 3 tentativas de senha. Use do...while para simular isso.
const prompt = require('prompt-sync')()

let i = 3
let senha = '1234'
let senhaDigitada

do {
  senhaDigitada = prompt('Digite sua senha: ')
  if(senhaDigitada != senha) {
    console.log(`Senha incorreta! Você tem ${i} tentativas.`)
  } else {
    console.log('Senha correta!')
  }
  i--
} while(i > 0)
