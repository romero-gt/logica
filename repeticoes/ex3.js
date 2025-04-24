let tentativa;
let senhaCorreta = "1234";
let contadorTentativa = 0;

do {
    tentativa = "4243";
    contadorTentativa++
    console.log("Tentativa", contadorTentativa, ":",tentativa);

    tentativa = "0987";
    contadorTentativa++
    console.log("Tentativa", contadorTentativa, ":",tentativa);

    tentativa = "0922";
    contadorTentativa++
    console.log("Tentativa", contadorTentativa, ":",tentativa);

    tentativa = "1234";
    contadorTentativa++
    console.log("Tentativa", contadorTentativa, ":",tentativa);
} while(tentativa !== senhaCorreta);
console.log("Acesso Liberado após: "+ contadorTentativa + " tentantivas")