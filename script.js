
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

function question01() {
    let produto1 = parseFloat(prompt("Digite um valor:"));
    let produto2 = parseFloat(prompt("Digite um valor:"));
    let total = produto1 + produto2 * 2;

    alert("Total da compra: R$" + total )
}


// fim

// Verifique se um número é par ou ímpar.

function question02(){
    let numero = prompt("Digite um valor:")
    if (numero == 0){
        alert("O número digitado é igual a 0.")
    } else if (numero < 0) {
        alert("O número digitado é menor que 0.")
    } else if (numero % 2 == 0) {
        alert("É par")
    } else {
            alert("É ímpar")
        }
}
// fim

// Verifique se uma pessoa de 25 anos e com carteira de motorista válida pode alugar um carro.

function question03(){
    let pergunta_age = prompt("Qual a idade?");
    let pergunta_carteira = prompt("Possui carteira de motorista válida?");

    switch (pergunta_carteira) {
        case "sim":
            carteira_valida = true;
            break;
        case "nao":
            carteira_valida = false
            break;
        case "não":
            carteira_valida = false
            break;
        default:
            alert("Inválido")
    }
    if (pergunta_age >= 25 && carteira_valida === true) {
        alert("Pode alugar.")
    }
    else {
        alert("Não pode alugar")
    }
}



// fim

// Um formulário retornou uma string "10" e um número 10. Compare os dois valores de formas diferentes.

function question04() {
    let form1 = String(prompt("valor:"));
    let form2 = parseFloat(prompt("valor:"));
    let comp_1 = form1 == form2
    let comp_2 = form1 === form2

    alert("Comparando apenas valor: " + comp_1);
    alert("Comparando valor e tipo: " + comp_2);
}

// fim

// Um sistema de RH quer saber se um candidato está desempregado para liberar benefício.
function question05 () {
    let candidato_empregado = prompt("Candidato empregado?");
    switch (candidato_empregado) {
        case "sim":
            beneficio = false;
            break;
        case "nao":
            beneficio = true;
            break;
        case "não":
            beneficio = true;
            break;
        default:
            alert("Resposta inválida.")
            break;
    }
    if (beneficio === true) {
        alert("Benefício liberado.")
    }
    else {
        alert("Benefício recusado.")
    }
}
// fim

// Um aluno tirou 7.5 em uma prova. Verifique se ele está dentro da faixa de aprovação (nota entre 6 e 10).
function question06() {
    let nota = parseFloat(prompt("Qual foi a nota?"));
    if (nota < 6) {
        alert("Reprovado.")
    }
    else if (nota >= 6 && nota < 10) {
        alert("Aprovado.")
    }
    else {
        alert("Nota Inválida.")
    }
}

// fim

// Em uma festa, só entra quem tem convite ou está na lista VIP. Verifique se uma pessoa pode entrar.
function question07() {
    let tem_convite = prompt("Tem convite?");
    let vip = prompt("É vip?");
    switch (tem_convite) {
        case "sim":
            tem_convite = true;
            break;
        case "nao":
            tem_convite = false;
            break;
        case "não":
            tem_convite = false;
            break;
        default:
            alert("Resposta inválida");
            break;
    } 
    switch (vip) {
        case "sim":
            vip = true;
            break;
        case "nao":
            vip = false;
            break;
        case "não":
            vip = false;
            break;
        default:
            alert("Resposta inválida")
            break;
    }

    if (tem_convite === true && vip === false || vip === true) {
        alert("Entrada Permitida.")
    }

    else if (tem_convite === false && vip === false) {
        alert("Entrada Negada.")
    }
}