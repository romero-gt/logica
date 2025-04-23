function question01() {
    let produto1 = Number(prompt("Digite uma valor: "));
    let produto2 = Number(prompt("Digite segundo valor: "));
    let total = produto1 + produto2 * 2;

    if (total > 15) {
        alert (`O total é ${total}, que ultrapassa o valor de R$15.`);
    }
    else {
        alert (`O total é ${total}, não ultrapassa o valor de R$15.`);
    }
}

function question02() {
    let numero = Number(prompt("Dígite um número: "))
    let parImpar = (numero % 2 == 0) ? "par" : "impar";

    alert(`O seu número é ${parImpar}`)
}

function question03() {
    let idade = Number(prompt("Qual sua idade: "))
    let carteira = prompt("Possui CNH valida? 'Sim' ou 'Não': ")

    if (idade >= 25 && carteira == "Sim" || carteira == "sim") {
        alert(`Você está dentro das normas para alugar um veículo!`)
    }
    else {
        alert(`Infelizmente você não está dentro das normas para alugar um carro!`)
    }
}

function question04() {
    let a = "10"
    let b = 10
    let resultado1 = a === b
    let resultado2 = a == b

    alert(`"${a}" é estritamente igual a ${b}? O resultado é ${resultado1}. "${a}" é uma strig e o ${b} é um número! \n
        E "${a}" é igual a ${b}? O resultado é ${resultado2}. Os dois são iguais!`)
}