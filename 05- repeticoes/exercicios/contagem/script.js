function contar() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var res = document.getElementById('res')

    for (let i = inicio; i <= fim; i + passo) {
        res.innerHTML = `${i} 👉`
    }
}