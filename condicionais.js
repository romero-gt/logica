// 1. Um cliente comprou dois produtos: um de R$10 e outro de R$5. 
// Calcule o total com o dobro do segundo item incluso e veja se o valor final ultrapassa R$15.
// // let produto1=10
// // let produto2=5
// // let total=produto1+(produto2*2)

// // console.log("total da compra", total);
// // console.log("passou de R$15", total > 15);

function question01() {
    let produto1 = parseFloat(prompt("Digite o valor do primeiro produto:"));
    let produto2 = parseFloat(prompt("Digite o valor do segundo produto:"));    
    let total = Number(produto1) + Number (produto2 * 2);
    console.log(total);

    alert("total da compra: R$" + total + "\npassou de R$15?: " + (total > 15));
}


// 2. Verifique se um número é par ou ímpar.
function question02() {
    let numero = parseInt(prompt("Digite um número:"));
    let resultado = (numero % 2 === 0) ? "par" : "ímpar";
    
    alert("O número " + numero + " é " + resultado + ".");
}

// 3. Verifique se uma pessoa de 25 anos e 
// com carteira de motorista válida pode alugar um carro.

function question03() {
    let idade = parseInt(prompt("Digite a idade do condutor:"));
    let carteiraValida = confirm("Você possui uma carteira de motorista válida?");

    let mensagem = (idade = 25 && carteiraValida) 
    ? "Você pode alugar um carro." 
    : "Você não pode alugar um carro.";

    alert(mensagem);
}

// 4. Um formulário retornou uma string "10" e um número 10. 
// Compare os dois valores de formas diferentes.

function question04() {
    let a = "10";
    let b = 10;
    let comparacao1 = (a == b); // comparação de valor 
    let comparacao2 = (a === b); // comparação de valor e tipo

    alert("Comparando valor :" + comparacao1 + "\nComparando valor e tipo: " + comparacao2);

    // console.log("Comparando valor:", comparacao1); // true
    // console.log("Comparando valor e tipo:", comparacao2); // false
}

// 5. Um sistema de RH quer saber se um candidato está desempregado para liberar benefício.
// let estaEmpregado = false;

// if (estaEmpregado) {
//     console.log("Benefício negado!");
// } else {
//     console.log("Benefício liberado!");
// }
// resolução do professor

let estaEmpregado = true; 
// minha opção
if (estaEmpregado) {
    console.log("Benefício negado!");
} else {
    console.log("Benefício liberado!");
}

// outra opção
let possuiEmprego = false ? "negado" : "liberado";
console.log(`Benefício ${possuiEmprego}`);


// 6. Um aluno tirou 7.5 em uma prova. 
// Verifique se ele está dentro da faixa de aprovação (nota entre 6 e 10).

let nota = 7.5;
let resultado = (nota >= 6 && nota <= 10) ? "Aprovado" : "Reprovado";
console.log(resultado);

// if (nota >= 6 && nota <= 10) {
//   console.log("Aprovado");
// } else { 
//   console.log("aprovacao");
// }


// 7. Em uma festa, só entra quem tem convite ou está na lista VIP. 
// Verifique se uma pessoa pode entrar.

let convite = true;
let listaVIP = true;
let liberado = (convite || listaVIP) ? "Liberada!" : "Negada!";

console.log(`A pessoa foi ${liberado}, pois o convite é ${convite} e a lista VIP é ${listaVIP}.`); //template string - bom quando são muitas variáveis
// console.log("A pessoa foi " + liberado + " , pois o convite é " + convite + " e a lista VIP é " + listaVIP + "."); //concatenação

// 8. Um eletricista calcula a potência (base ** expoente). Se for maior que 5, considera "Alta tensão".

let voltagemBase = 2;
let expoente = 3;
let potencia = voltagemBase ** expoente; 

// let potencia = (voltagemBase ** expoente);

if (potencia > 5) {
    console.log("Alta tensão");
} else {
    console.log("Baixa tensão");
}

// 9. Uma loja aplica 15% de desconto em um produto de R$100. Calcule o valor final.

let precoOriginal = 100;
let valorFinal = 0.85* precoOriginal; // 15% de desconto
// ou 
// let desconto = 0.15;
// let valorFinal = precoOriginal - (precoOriginal * desconto);
console.log (valorFinal);

// 10. Um usuário escolhe uma opção no menu (A, B ou outra). Mostre a ação correspondente.

let escolha = "b";

switch (escolha) {
    case "a":
        console.log("Você escolheu a opção A.");
        break;
    case "b":
        console.log("Você escolheu a opção B.");
        break;
        case "c":
        console.log("Você escolheu a opção C.");
    default:
        console.log("Não selecionou opção.");
        break;
}


