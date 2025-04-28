function enviar1(){
    let resposta = document.getElementById('res1')

    resposta.innerHTML=''

    for (let i=0;i<=10;i++){
        resposta.innerHTML += `5 x  ${i} = ${5*i}<br>`
    }
}

function enviar2(){
    let resposta = document.getElementById('res2')

    resposta.innertHTML=''

    let i=0
    resposta.innerHTML+=`<h1>Contagem Regressiva</h1><br>`
    while(i <=4){
        i += 1 
        
        resposta.innerHTML+=`${i}<br>`
    }
    resposta.innerHTML+=`<h2>-------FIM-------</h2>`
}

function enviar3() {
    let idade = document.getElementById('input3').value;
    let carteiraRadio = document.querySelector('input[name="carteira"]:checked');
    let resposta = document.getElementById('res3');

    resposta.innerHTML = '';

    if (!carteiraRadio) {
        resposta.innerHTML = 'Por favor, selecione se tem carteira: Sim ou Não.';
        return; 
    }

    let carteira = carteiraRadio.value; 

    resposta.innerHTML = `Idade: ${idade} anos <br> Carteira: ${carteira}<br>`;

    if (carteira === 'sim' && idade >= 25) {
        resposta.innerHTML += `Aluguel Aprovado`;
    } else {
        resposta.innerHTML += `Aluguel Rejeitado`;
    }
}

function enviar4(){
    let resposta = document.getElementById("res4")
    let resposta_pares = document.getElementById("res4_pares")
    let resposta_impares = document.getElementById("res4_impares")



    let numeros_pares = []
    let numeros_impars = []

    let total = 0

    for(let i =0;i<=20;i++){

        if(i%2===0){
        
            total += i
        
            numeros_pares.push(i)
        }

        else{
            numeros_impars.push(i)
        }


    }

    

    console.log(numeros_pares);
    console.log(numeros_impars);
    resposta.innerHTML=`A soma total dos numeros pares:${total} `
    resposta_pares.innerHTML=`Numeros Pares: ${numeros_pares}`
    resposta_impares.innerHTML=`Numeros Impares: ${numeros_impars}`
}

const enviar5=()=>{

    let convidados = ['Carlos','Marcio','Irineu']
    
    let resposta = document.getElementById("res5")

    while(resposta.value =='Irineu'){
        for(let i = 0 ;i <=3;i++){
            resposta.innerHTML+=convidados[i]+"<br>"
            console.log(resposta)
        }
    }


    
}

