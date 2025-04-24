//1. Calcule a tabuada do 5 usando um laço for.
// let contador
let tabuada = 5

for (let contador = 1; contador <= 10; contador++) {
    const multiplicacao = contador*tabuada
    console.log(`${tabuada}x${contador}= ${multiplicacao}`)
    
}

//2. Conte até 5 usando while e simule uma contagem regressiva para uma corrida.

let i=5
while (i > 0) {
    console.log(i)
    i--
}

//3. Peça para um cliente digitar uma senha até acertar a correta usando do...while.


function verifyPassword(){
    const senhaCorreta = "teste"
    let senhaDigitada
    do {
        senhaDigitada=prompt("Digite a senha")
        if(senhaDigitada!== senhaCorreta){
            alert("senha incorreta, digite novamente")
        }
    } while (senhaDigitada!==senhaCorreta)
        alert("senha correta")
}

// verifyPassword()


//4. Calcule a soma dos números pares entre 1 e 20 com for.


let soma=0
for (let i = 1; i <= 20; i++) {
    if(i%2===0){
        soma+=i
    }
}
console.log(`A soma dos pares entre 1 e 20 é: ${soma}`)

//5. Liste os nomes de 3 convidados usando while.

let convidados = ["Arthur","Antonio","Janaina","Leticia"]
let quantidade =0

while(quantidade<3){
   console.log(convidados[quantidade])
   quantidade++
}

