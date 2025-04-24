function questao01() {
    let produtoA = prompt("Digite o primeiro valor:");
    let produtoB = prompt("Digite o segundo valor:");
    let total = Number(produtoA) + Number(produtoB) * 2;
    alert("Total da compra: R$ " + total + "\n Passou de R$15? " + (total > 15));
    alert()
}

function questao02() {
    let numero01 = prompt("Digite um numero:");
    let resultado = numero01 % 2 === 0 ? "par" : "impar";
    alert("O " + numero01 + " é " + resultado);
}


    function alugar() {
        let nome = prompt("Digite seu nome:");
        let idade = prompt("Digite sua idade");
        let carteira = prompt("Validade da sua carteira");
        function Verificarcarteira (){
            let today = new Date();
        }
    }