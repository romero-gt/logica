// 1. Calcule a tabuada do 5 usando um laço for. //

// let tabuada = 5; 
// for(let i = 0; i <= 10; i++) { 
//     const mutiplicacao = i * tabuada; 
//     console.log('$(tabuada) x $(i) = $(mutiplicacao)')
// }

// console.log("---------------");


// // 2. Conte até 5 usando while e simule uma contagem regressiva para uma corrida.//

// let contagem = 5;
// console.log("Prepare ...");
// while (contagem > 0) {
//     console.log(contagem);
//     contagem--; 
// }

// console.log("Vai!");

// console.log("--------");

// 3. Peça para um cliente digitar uma senha até acertar a correta usando do...while. //

let tentativa;
let senhaCorreta = "1234";
let contadorTentativa = 0;

do {
    tentativa = "54321"
    contadorTentativa++
    console.log("tentativa", contadorTentativa, ":", tentativa)

    tentativa = "4321"
    contadorTentaiva++
    console.log("tentativa", contadorTentativa, ":", tentativa)

    tentativa = "1234";
    contativaTentativa++
    console.log("tentativa", contadorTentativa, ":", tentativa)
} while (tentativa !== senhaCorreta);
console.log (`Acesso liberado apos $(contadorTentativa) tentativa`)

console.log("-----------------")

