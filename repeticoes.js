const prompt = require("prompt-sync")();

let tabuada = 5;
for(let i = 0; i <= 10; i++) {
    const multiplicacao = i * tabuada;
    console.log(`${tabuada} x ${i} = ${multiplicacao}`)
}

console.log("---------------");

let contagem = 5;
console.log("Prepare ...");
while (contagem > 0) {
    console.log(contagem);
    contagem--;
}
console.log("Vai!");

console.log("---------------");

let tentativa;
let senhaCorreta = "1234";
let contadorTentativa = 0;

do {
    tentativa = "54321"
    contadorTentativa++
    console.log("Tentativa", contadorTentativa, ":", tentativa)

    tentativa = "4321"
    contadorTentativa++
    console.log("Tentativa", contadorTentativa, ":", tentativa)

    tentativa = "1234"
    contadorTentativa++
    console.log("Tentativa", contadorTentativa, ":", tentativa)
} while (tentativa !== senhaCorreta);
console.log(`Acesso liberado após ${contadorTentativa} tentativas`)

console.log("---------------");

