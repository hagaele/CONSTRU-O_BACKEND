let {calcsomar, calcsubt, calcmulti, calcdiv, calcquad, calcraiz} = require('./calculadora');

console.log('3 + 4 =', calcsomar(3, 4));
console.log('10 - 7 =', calcsubt(10, 7));
console.log('6 * 5 =', calcmulti(6, 5));
console.log('8 / 2 =', calcdiv(8, 2));
console.log('5 ao quadrado =', calcquad(5));
console.log('raiz quadrada de 25 =', calcraiz(25));