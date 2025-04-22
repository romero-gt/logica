
let periodo = 'manha'

if (periodo == 'manha'){
    console.log('Bom dia.')
} else if (periodo == 'tarde') {
    console.log('Boa tarde.')
} else if (periodo == 'noite') {
    console.log('Boa noite.')
}  else {
    console.log('Que período é esse?!')
}


// fim

// Um cliente comprou dois produtos: um de R$10 e outro de R$5. Calcule o total com o dobro do segundo item incluso e veja se o valor final ultrapassa R$15. 

const x = 10;
const y = 5;
let z = x + y*2;
console.log(z)

// fim

// Verifique se um número é par ou ímpar.

function question02(){
    let numero = prompt("Digite um valor:")
    if (numero == 0){
        alert("O número digitado é igual a 0.")
    } if (numero < 0) {
        alert("O número digitado é menor que 0.")
    } if (numero % 2 == 0) {
        alert("É par")
    } else {
            alert("É ímpar")
        }
}
// fim

// Verifique se uma pessoa de 25 anos e com carteira de motorista válida pode alugar um carro.

let age = 25;
let carteira_de_motorista_valida = false;

if (age >= 25 && carteira_de_motorista_valida == true) {
        console.log("Pode alugar.")
}
else {
    console.log("Não pode alugar.")
}

// fim

// Um formulário retornou uma string "10" e um número 10. Compare os dois valores de formas diferentes.

let form1 = "10";
let form2 = 10;

console.log(form1 == form2);
console.log(form1 === form2);

// fim


function question01() {
    let produto1 = parseFloat(prompt("Digite um valor:"));
    let produto2 = parseFloat(prompt("Digite um valor:"));
    let total = produto1 + produto2 * 2;

    alert("Total da compra: R$" + total )
}


// Um sistema de RH quer saber se um candidato está desempregado para liberar benefício.
function question05 () {
    let candidato_empregado = prompt("Candidato empregado?");
        if (candidato_empregado = 'sim') {
            let benefício = false
                if (benefício = false) {
                    alert("Benefício Reprovado.")
                }
        if (candidato_empregado = 'nao') {
            let benefício = true
                if (benefício = true) {
                    alert("Benefício Aprovado.")
                }
        }
        }
}
// fim

// Um aluno tirou 7.5 em uma prova. Verifique se ele está dentro da faixa de aprovação (nota entre 6 e 10).

let nota = 7.5;
if (nota < 6) {
    console.log("Reprovado.")
}
else if (nota >= 6 && nota < 10) {
    console.log("Aprovado.")
}
else {
    console.log("Nota Inválida.")
}

// fim

// Em uma festa, só entra quem tem convite ou está na lista VIP. Verifique se uma pessoa pode entrar.

let tem_convite = true;
let vip = false;

if (tem_convite = true) {
    console.log("Entrada Permitida.")
}
else if (tem_convite = false) {
    if (vip = true) {
        console.log("Entrada Permitida.")
    }
    else {
        console.log("Entrada Negada.")
    }
}
