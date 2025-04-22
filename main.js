let periodo = "manhã"

if (periodo == "manhã") {
  console.log("Bom dia!")
} else if (periodo == "tarde") {
  console.log("Boa tarde!")
} else {
  console.log("Boa noite!")
}

let cor = "vermelho";

switch (cor) {
  case "azul":
    console.log('A cor é azul!')
    break
  case 'amarelo':
    console.log('A cor é amarela!')
    break
  case 'vermelho':
    console.log('A cor é vermelha!')
    break
  default:
    console.log('A cor não é azul, vermelha nem amarela')
}
