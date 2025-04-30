// 1
let soma = 0;
for (let i = 1; i <= 500; i++) {
    if (i % 2 !== 0 && i % 3 === 0) {
        soma += i;
    }
}
console.log("1:", soma);

// 2
let alturas = [1.65, 1.72, 1.58, 1.80, 1.74, 1.60, 1.69, 1.83, 1.55, 1.67, 1.78, 1.62, 1.71, 1.59, 1.75];
let menor = alturas[0];
let maior = alturas[0];

for (let i = 1; i < alturas.length; i++) {
    if (alturas[i] < menor) menor = alturas[i];
    if (alturas[i] > maior) maior = alturas[i];
}
console.log("2:", "Menor:", menor, "Maior:", maior);

// 3
let valores = [10, -5, 20, 15, -8, 0, 7, -3];
let positivos = 0;
let negativos = 0;
let soma3 = 0;

for (let i = 0; i < valores.length; i++) {
    soma3 += valores[i];
    if (valores[i] >= 0) positivos++;
    else negativos++;
}

let total = valores.length;
let media = soma3 / total;
let percPos = (positivos / total) * 100;
let percNeg = (negativos / total) * 100;

console.log("3:", "Média:", media.toFixed(2), "Positivos:", positivos, "Negativos:", negativos, "Positivos %:", percPos.toFixed(2), "Negativos %:", percNeg.toFixed(2));

// 4
let numeros4 = [10, 27, 44, 60, 83, 100, -1];
let i1 = 0, i2 = 0, i3 = 0, i4 = 0;

for (let i = 0; i < numeros4.length; i++) {
    let num = numeros4[i];
    if (num < 0) break;
    if (num >= 0 && num <= 25) i1++;
    else if (num <= 50) i2++;
    else if (num <= 75) i3++;
    else if (num <= 100) i4++;
}

console.log("4:", "[0-25]:", i1, "[26-50]:", i2, "[51-75]:", i3, "[76-100]:", i4);

// 5
let numeros5 = [2, 5, 8, 13, 10, 0];
let pares = 0;
let impares1 = 0;
let somaPares = 0;
let somaTotal5 = 0;
let total5 = 0;

for (let i = 0; i < numeros5.length; i++) {
    let num = numeros5[i];
    if (num === 0) break;
    somaTotal5 += num;
    total5++;
    if (num % 2 === 0) {
        pares++;
        somaPares += num;
    } else {
        impares1++;
    }
}

let mediaPares = pares > 0 ? somaPares / pares : 0;
let mediaGeral = total5 > 0 ? somaTotal5 / total5 : 0;

console.log("5:", "Pares:", pares, "Ímpares:", impares, "Média Pares:", mediaPares.toFixed(2), "Média Geral:", mediaGeral.toFixed(2));

// 6
let impares = [];
for (let i = 101; i < 200; i += 2) {
    impares.push(i);
}
console.log("6:", impares.join(", "));

// 7
let N = 7;
console.log("7: Tabuada de", N);
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${N} = ${i * N}`);
}

// 8
let A8 = 3;
let R8 = 5;
console.log("8:");
for (let i = 0; i < 10; i++) {
    console.log(A8 + (i * R8));
}

// 9
let A9 = 2;
let R9 = 3;
console.log("9:");
for (let i = 0; i < 10; i++) {
    console.log(A9 * Math.pow(R9, i));
}

// 10
let A10 = 5;
let fatorial = 1;
let sequencia = "";

for (let i = A10; i > 0; i--) {
    fatorial *= i;
    sequencia += i;
    if (i > 1) sequencia += " x ";
}
console.log("10:", `${A10}! = ${sequencia} = ${fatorial}`);
