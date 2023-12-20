
function insiraPrecoCusto() {
    const precoCusto = parseFloat(prompt('Insira o valor do produto:'))
    
    return precoCusto
}

function somaICMS() {
    const taxaICMS = 0.21
    const valorICMS = precoCusto * taxaICMS
    return valorICMS
}

function mostrar(precoCusto, valorICMS) {
    const precoFinal = precoCusto + valorICMS
    alert('Preço final com ICMS: R$' + precoFinal)
}
const precoCusto = insiraPrecoCusto()
const valorICMS = somaICMS()
mostrar(precoCusto, valorICMS)