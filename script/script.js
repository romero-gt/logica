// let produto1 = 10;
// let produto2 = 5;
// let produto2Dobrado = produto2 * 2;
// let total = produto1 + produto2Dobrado;

// let mensagem;
// if (total > 15) {
//     mensagem = `O total é ${total}, que ultrapassa o valor de R$15.`;
// }
// else {
//     mensagem = `O total é ${total}, não ultrapassa o valor de R$15.`
// }
// document.getElementById("resultado").textContent = mensagem

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