function soma(n1=0, n2=0) { /*Eis a importância dos parâmetros opcionais. Caso o parâmetro seja NaN, indefined ou null,
                            podemos agregar valores nos parâmetros, evitando futuros erros.*/
    return n1 + n2
}
console.log(soma(999, 1 ))