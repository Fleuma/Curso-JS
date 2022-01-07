let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()
console.log(`O primeiro valor do array é ${num[0]}`)
console.log(`Nosso vetor(array) é o ${num}`)
let pos = 0
/*for (let pos = 0; pos< num.length; pos++)

console.log(`A posição ${pos} tem o valor ${num[pos]}`)*/ // Maneira antiga 

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) // Maneira atual do EcmasScript(JS padronizado)
}
let env = num.indexOf(1)
if (env == -1 ) {
   console.log(`O valor não foi encontrado!`) 
} else {
  console.log(env)
}


