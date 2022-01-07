function contar() {

var ini = document.getElementById('txti')
var fim = document.getElementById('txtf')
var passo = document.getElementById('txtp')
var res = document.getElementById('res')


if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
   res.innerHTML = '❌ Preencha todos os campos com valores válidos!'
} else {
    res.innerHTML = 'Contando: <br> '
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
        alert('❌ | Passo inválido! Considere-se PASSO 1')
        p = 1
    }
    if (i < f) {
        // Contagem Crescente
       for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} 👉`
    }
  } else {
      // Contagem Regressiva
        for (let c = i; c >= f; c -= f) {
            res.innerHTML = ` ${c} 👉`
        }
    }   
      res.innerHTML += " 🏁 FIM!" 
  }
}