function ehNumero(n) {
  if (Number.isNaN(n)) {
    alert('Você não informou um número!')
    return false
  }
  return true
}

function q01() {
  const produtoA = 10
  const produtoB = 5
  const total = produtoA + produtoB * 2
  const ehMaiorQue15 = total > 15

  alert(`\nTotal = R$${total}\n\nMaior que R$15? ${ehMaiorQue15}`)
}

function q02() {
  const numero = Number.parseInt(prompt('Digite um número INTEIRO'))
  const paridade = numero % 2 === 0 ? 'par' : 'ímpar'

  if (ehNumero(numero)) alert(`${numero} é ${paridade}!`)
}

function q03() {
  const idade = 25
  const cnhValida = true
  const ehHabilitado = idade >= 18 && cnhValida

  alert(`Idade = ${idade}\n\nHabilitado = ${ehHabilitado}`)
}

function q04() {
  const valorA = '10'
  const valorB = 10

  const resultados = {
    '===': valorA === valorB,
    '!==': valorA !== valorB,
    '>': valorA > valorB,
    '<': valorA < valorB,
    '>=': valorA >= valorB,
    '<=': valorA <= valorB,
    'Object.is()': Object.is(valorA, valorB)
  }

  alert(
    Object.entries(resultados)
      .map(([operacao, resultado]) => `"${valorA}" ${operacao} ${valorB} = ${resultado}`)
      .join('\n')
  )
}
