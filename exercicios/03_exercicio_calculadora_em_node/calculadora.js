function calcsomar(so1, so2){
    return so1+so2
}

function calcsubt(su1, su2){
    return su1 - su2
}

function calcmulti(mult1, mult2){
    return mult1 * mult2
}

function calcdiv(div1, div2){
    return div1 / div2
}

function calcquad(quad1){
    return quad1 * quad1
}

function calcraiz(raiz1){
    return Math.sqrt(raiz1)
}

module.exports = {
    calcsomar,
    calcsubt,
    calcmulti,
    calcdiv,
    calcquad,
    calcraiz
  }