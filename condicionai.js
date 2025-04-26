
const produto1 = 10;
const produto2 = 5; 

const total = produto1 + (produto2 * 2);

if (total > 15) {
  console.log(`O valor final é R$${total} e ultrapassa R$15.`);
} else {
  console.log(`O valor final é R$${total} e não ultrapassa R$15.`);
}


console.log("-------------")

const numero = 7;

console.log(`O número ${numero} é ${numero % 2 === 0 ? 'par' : 'ímpar'}.`);

console.log("---------------------")

function verificarParOuImpar(numero) {
    return numero % 2 === 0 ? 'par' : 'ímpar';
  }
  
  const numero = 7;
  console.log(`O número ${numero} é ${verificarParOuImpar(numero)}.`);
  

console.log("-------------")

function podeAlugarCarro(idade, carteiraValida) {
    return (idade >= 21 && carteiraValida) ? "Pode alugar um carro." : "Não pode alugar um carro.";
  }
  

  const idade = 25;
  const carteiraValida = true;
  
  console.log(podeAlugarCarro(idade, carteiraValida));
  

  console.log("---------------------------")

  const valorString = "10"; 
  const valorNumero = 10;

  if (valorString == valorNumero) {
    console.log("Com '==': Os valores são iguais (mesmo valor, tipos diferentes).");
  } else {
    console.log("Com '==': Os valores são diferentes.");
  }

  if (valorString === valorNumero) {
    console.log("Com '===': Os valores e tipos são iguais.");
  } else {
    console.log("Com '===': São diferentes em valor ou tipo.");
  }

console.log("---------------------") 


const estaDesempregado = true; 

if (estaDesempregado) {
  console.log("Candidato elegível para receber o benefício.");
} else {
  console.log("Candidato não elegível para receber o benefício.");
}

console.log("-----------------------")

const nota = 7.5;

if (nota >= 6 && nota <= 10) {
  console.log("Aluno aprovado!");
} else {
  console.log("Aluno reprovado.");
}

console.log("-------------------")

const temConvite = true;  
const estaNaListaVIP = false; 

if (temConvite || estaNaListaVIP) {
  console.log("A pessoa pode entrar na festa.");
} else {
  console.log("A pessoa NÃO pode entrar na festa.");
}


console.log("--------------------")

const base = 2;       
const expoente = 3;   


const potencia = Math.pow(base, expoente);


if (potencia > 5) {
  console.log("Alta tensão.");
} else {
  console.log("Baixa tensão.");
}

console.log("-------------")

const precoOriginal = 100;  
const desconto = 0.15;      


const valorDesconto = precoOriginal * desconto;

const precoFinal = precoOriginal - valorDesconto;

console.log(`O valor final do produto com 15% de desconto é R$${precoFinal.toFixed(2)}.`);

console.log("--------------")

const opcao = "A"; 

switch (opcao) {
  case "A":
    console.log("Você escolheu a opção A: Ação para A.");
    break;
  case "B":
    console.log("Você escolheu a opção B: Ação para B.");
    break;
  default:
    console.log("Opção inválida ou não reconhecida. Ação para outras opções.");
    break;
}

