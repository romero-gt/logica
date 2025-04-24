const prompt = require('prompt-sync')();
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

for (let num = 1; num <= 10; num++) {
    console.log(num)
}
let x = 0;

do {
    console.log('tenho:' + x + ' logo, sou menor que 10');
    x++;
} while (x < 10);


    let numero = prompt("Escolha a um NUMERO de 1 a 10:");
    console.log("Tabuada do " + numero + ":");

    for (let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
        }        

console.log("--------------");
let contagem = 5;
console.log("Prepare...");

while (contagem > 0) {
    console.log(contagem);
    contagem--;
}
console.log("vai!");
console.log("--------------");
//------------------------------

let tentativa;
let senhaCorreta = "1234";
let contadorTentativa = 0;

do {
    tentativa = "54321";
    contadorTentativa++;
    console.log("Tentativa", contadorTentativa, ":", tentativa);

    tentativa = "56782";
    contadorTentativa++;
    console.log("Tentativa", contadorTentativa, ":", tentativa);

    tentativa = "1234";
    contadorTentativa++;
    console.log("Tentativa", contadorTentativa, ":", tentativa);
} while (tentativa !== senhaCorreta);
console.log(`Acesso liberado após ${contadorTentativa} tentativas`)
console.log("-----------------------");

let somaPares = 0;

for (let i = 1; i <= 20; i++) {
    if ( i % 2 === 0){
        somaPares += i;
        console.log (`${somaPares}`)
    }
}
console.log("-----------------------");

let convidados = ["Ana", "Flávia", "Renato"];
let index = 0;

console.log("Lista de convidados: ")
while (index < convidados.length){
    console.log (convidados[index]);
    index++;
}