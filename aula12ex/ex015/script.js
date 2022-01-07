function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var nasc = document.getElementById('nb')
    var res = document.getElementById('res')
    var fsex = document.getElementsByName('radsex')

    if (nasc.value.lenght == '0' || nasc.value > ano) {
        window.alert('❌| [ERRO] Coloque uma data de nascimento válida!')
    } else {
        var idade = ano - Number(nasc.value)
        var gend = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked) {
            gend = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebem.jpg')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'jovemm.jpg')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'adultom.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.jpg')
            }


        } else if (fsex[1].checked) {
            gend = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebef.jpg')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'jovemf.jpg')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'adultof.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${gend} com ${idade} anos`
        res.appendChild(img)
    }
}