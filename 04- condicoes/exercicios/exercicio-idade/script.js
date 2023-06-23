function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './img/homemCrianca.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './img/homemJovem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './img/homemAdulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src', './img/homemIdoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './img/mulherCrianca.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './img/mulherJovem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './img/mulherAdulta.jpg')
            } else {
                // Idoso
                img.setAttribute('src', './img/mulherIdosa.jpg')
            }
        }

        img.setAttribute('style', 'border-radius: 50%')
        img.setAttribute('width', '250')
        img.setAttribute('height', '250')

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}