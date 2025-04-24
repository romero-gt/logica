// 6. Um caixa eletrônico libera 3 tentativas de senha. Use do...while para simular isso.
const prompt = require('prompt-sync')()

let numeroTentativas = 3
let senha = '1234'
let senhaDigitada

do {
  senhaDigitada = prompt('Digite sua senha: ')
  if(senhaDigitada != senha) {
    console.log(`Senha incorreta! Você tem ${numeroTentativas - 1} tentativas.`)
  } else {
    console.log('Senha correta!')
  }
  numeroTentativas--
} while(numeroTentativas > 0 && senhaDigitada != senha)
