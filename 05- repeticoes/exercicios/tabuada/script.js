function tabuada() {
    var num = document.getElementById('inum')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Coloque um Número')

    } else if (num.value <= 0) {
        alert('Digite um número maior que 0')

    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}