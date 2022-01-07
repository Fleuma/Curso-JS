function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var h1 = document.getElementById('titulo')
    
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
  
    if (minutos < 10) {
        minutos = `0${minutos}`
    } if (hora < 10) {
        hora = `0${hora}`
    }
    msg.innerHTML = `Agora são <strong>${hora}:${minutos}</strong>`

     if (hora >= 6 && hora <=12) {
        img.src = "fotomanha.jpg"
        document.body.style.background = 'coral'
        h1.innerHTML = 'Bom Dia!'
    } else if (hora >= 12 && hora <= 18) {
        img.src = "fototarde.jpg"
        document.body.style.background = '#E64F00'
        h1.innerHTML = 'Boa Tarde!'
    } else {
        img.src = " fotonoite.jpg"
        document.body.style.background = '#001C45'
        h1.innerHTML = 'Boa Noite!'
    }
  }


