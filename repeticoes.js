const prompt = require("prompt-sync")();

// 1. Calcule a tabuada do 5 usando um laço for.
// let tabuada = 5;
// for(let i=0; i<=10; i++) {
//     const multiplicacao = i * tabuada;
//     console.log (`${tabuada} x ${i} = ${multiplicacao}`)
// }

// // 2. Conte até 5 usando while e simule uma contagem regressiva para uma corrida.

// let contagem = 5;
// console.log ("Prepare...");
// while (contagem > 0) {
//     console.log (contagem);
//     contagem--;
//     }
//     console.log ("Vai!")

// // 3. Peça para um cliente digitar uma senha até acertar a correta usando do...while.

// let tentativa;
// let senhaCorreta = prompt ("Digite aqui");
// do {
//     tentativa = prompt("Digite a senha:");
//     if (tentativa !== senhaCorreta) {
//         alert("Senha incorreta. Tente novamente.");
//     }
// } while (tentativa !== senhaCorreta); //!==: estritamente diferente
// alert("Senha correta! Acesso permitido.");  

// // ou

// // let tentativa;
// // let senhaCorreta = "1234";
// // let contadorTentativa = 0;

// // do {
// //     tentativa = "54321"
// //     contadorTentativa++
// //     console.log("Tentativa", contadorTentativa, ":", tentativa)

// //     tentativa = "4321"
// //     contadorTentativa++
// //     console.log("Tentativa", contadorTentativa, ":", tentativa)

// //     tentativa = "1234"
// //     contadorTentativa++
// //     console.log("Tentativa", contadorTentativa, ":", tentativa)
// // } while (tentativa !== senhaCorreta);
// // console.log(`Acesso liberado após ${contadorTentativa} tentativas`)

// //4. Calcule a soma dos números pares entre 1 e 20 com for.

// let somaPares = 0;

// //for (inicialização; condição; incremento) {
// //      código a ser executado
// // }
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) { // Verifica se o número é par
//         somaPares += i; // Adiciona o número par à soma
//     }
// }
// console.log("A soma dos números pares entre 1 e 20 é:", somaPares);


// // 5. Liste os nomes de 3 convidados usando while.

// let convidados = ["João", "Maria", "Pedro"];
// let index = 0;

// while (index < convidados.length) {
//     console.log("Convidado:", convidados[index]);
//     index++;
// }

// 6. Um caixa eletrônico libera 3 tentativas de senha. Use do...while para simular isso.


let correctPassword = "1234";
let tentativas = 3;
let senhaDigitada;

do{
	senhaDigitada = prompt(`Digite a senha: `)
    tentativas--;

    if (senhaDigitada !== correctPassword) {
    console.log("Senha incorreta. Tentativas restantes:", tentativas);
    }

    else {
        console.log("Senha correta! Acesso permitido.");
    }

} while (senhaDigitada !== correctPassword && tentativas > 0);


