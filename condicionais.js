function question01() {
    let produto1 = Number(prompt("Digite o valor do primeiro produto: "))
    let produto2 = Number(prompt("Digite o valor do segundo produto: "))
    let total = produto1 + produto2 * 2

    if (total > 15) {
        alert(`Valor total: R$${total},00, passou de R$15,00`)
    } else {
        alert(`Valor total: R$${total},00, não passou de R$15,00`)
    }
}