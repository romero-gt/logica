let tabuada = 7;
for(let i = 0; i <= 10; i++) {
    const multiplicacao = i * tabuada;
    console.log(`${tabuada} x ${i} = ${multiplicacao}`);
} 



// ---------------------------

let contagem = 5;
console.log("prepare... ");

while (contagem > 0) {
    console.log(contagem);
    contagem--;
}
console.log("Vai!!")


let tentativa;
let senhaCorreta = "1234";
let contadorTentativa = 0;

do {
    tentativa = "54321"
    contadorTentativa++
    console.log("Tentativa ", contadorTentativa, ":", tentativa)

    tentativa = "4321"
    contadorTentativa++
    console.log("Tentativa", contadorTentativa, ":", tentativa)

    tentativa = "1234"
    contadorTentativa++
    console.log("Tentativa", contadorTentativa, ":", tentativa)
} while (tentativa !== senhaCorreta);
console.log(`Acesso liberado após ${contadorTentativa} tentativas`)


console.log("----------------")

let soma = 0;


for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {  
    soma += i; 
  }
}

console.log(`A soma dos números pares entre 1 e 20 é: ${soma}`);


console.log("-------------------")

const convidados = ["Ana", "Carlos", "Beatriz"];  
let i = 0;  

while (i < convidados.length) {
  console.log(`Convidado ${i + 1}: ${convidados[i]}`);
  i++;  
}

console.log("---------------")

const senhaCorreta = "1234";  
let tentativa = 0;  
let senhaUsuario = ""; 

do {
  senhaUsuario = prompt("Digite a senha:"); 
  tentativa++;  
  
  if (senhaUsuario !== senhaCorreta) {
    console.log(`Senha incorreta. Tentativa ${tentativa} de 3.`);
  }
} while (senhaUsuario !== senhaCorreta && tentativa < 3);

if (senhaUsuario === senhaCorreta) {
  console.log("Senha correta! Acesso liberado.");
} else {
  console.log("Número de tentativas excedido. Acesso bloqueado.");
}

console.log("-----------------")


for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {  
      console.log(i);  
    }
  }
  
  console.log("----------------")

  let bateria = 0;  

while (bateria <= 100) {
  console.log(`Bateria: ${bateria}%`);
  bateria += 10; 
}

let contador = 0;

for (let i = 10; i <= 30; i++) {
  if (i % 2 !== 0) {  
    contador++;
  }
}

console.log(`Quantidade de números ímpares entre 10 e 30: ${contador}`);

console.log("--------------")

let numero;

do {
  numero = Math.floor(Math.random() * 10); 
  console.log(`A roleta girou e caiu no número: ${numero}`);
} while (numero !== 7);

console.log("Parabéns! A roleta parou no número 7!");
