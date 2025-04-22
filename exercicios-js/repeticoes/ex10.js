// 10. Simule uma roleta que gira até cair no número 7, usando do...while.
function girarRoleta() {
    return Math.floor(Math.random() * 37)
}

let resultado

do {
    resultado = girarRoleta()
    console.log(`A roleta caiu no número ${resultado}`)
} while(resultado != 7)

console.log('Parabéns, você venceu!')
