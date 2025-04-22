// 3. Peça para um cliente digitar uma senha até acertar a correta usando do...while.
const prompt = require('prompt-sync')()

let senhaCorreta = '1234'
let senhaDigitada

do {
  senhaDigitada = prompt('Digite a senha: ')
  if(senhaDigitada != senhaCorreta) {
    console.log('Senha incorreta! Digite novamente')
  }
} while(senhaDigitada != senhaCorreta)

console.log('Acesso liberado!')
