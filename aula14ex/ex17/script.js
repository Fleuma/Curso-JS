let botao = document.getElementById('botao')
botao.addEventListener('click',tabuada)

function tabuada() {
  let num = document.getElementById('txtn')
  let res = document.getElementById('res')
 
  res.innerHTML = 'Tabuada :  </br>'
  if (num.value.length == 0 || num.value == 0) {
      alert("❌ | Insira um número válido!")
} else {
  for(let i = 0; i <= 10; i++) {
    let n = Number(num.value)
    res.innerHTML += `${n} x ${i} = ${n * i}</br>`
    console.log('\n')
   }   
  }
}
function limpar() {
  res.innerHTML = 'Digite um novo valor'
}