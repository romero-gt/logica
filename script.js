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



