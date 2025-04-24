function ehNumero(n) {
  if (Number.isNaN(n)) {
    alert('Você não informou um número!')
    return false
  }
  return true
}

function valorPermitido(valor, valoresPermitidos, habilitarAlert = true) {
  if (!valoresPermitidos.includes(valor)) {
    if (habilitarAlert) alert('Valor não permitido! Tente novamente.')
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

function q05() {
  const ehColaborador = prompt('O colaborador está ativo? (y/n)').trim().toLowerCase()

  if (!valorPermitido(ehColaborador, ['y', 'n'])) return

  alert(`Benefício ${ehColaborador === 'y' ? 'negado' : 'liberado'}!`)
}

function q06() {
  const nota = Number.parseFloat(prompt('Informe a nota do aluno'))

  if (ehNumero(nota)) alert(`Aluno ${nota >= 6.0 && nota <= 10.0 ? 'aprovado' : 'reprovado'}!`)
}

function q07() {
  const nome = prompt('Informe o nome do convidado').trim().toLowerCase()

  const convidados = ['luis', 'alex', 'carlos']
  const vips = ['carl', 'alice']

  valorPermitido(nome, convidados.concat(vips), false) ? alert('Pode passar!') : alert('Vá embora!')
}

function q08() {
  const base = Number.parseInt(prompt('Informe a base'))
  const expoente = Number.parseInt(prompt('Informe o expoente'))
  const potencia = base ** expoente

  if (potencia <= 5) {
    alert('Baixa tensão!')
    return
  }

  alert('Alta tensão!')
}

function q09() {
  const valorDesconto = 15
  const valorProduto = 200
  const valorFinal = valorProduto - (valorDesconto / valorProduto) * 100

  alert(valorFinal)
}

function q10() {
  const opcaoMenu = prompt('Escolha uma opção (A/B)\n\nA - Ativar\n\nB - Desativar').trim().toUpperCase()

  if (!valorPermitido(opcaoMenu, ['A', 'B'])) return

  const acao = opcaoMenu === 'A' ? 'Ativar' : 'Desativar'

  alert(`Escolheu a opção: ${opcaoMenu} - ${acao}`)
}
