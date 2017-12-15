/*
    Algoritmo para fazer a soma de todos
    os elementos de dentro de um Array
*/


var numeros = [1,2,3,4,5,6];

// ES5
/*
var soma = 0;
for (var i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log(soma);
*/


// ES6
var soma = 0;
soma = numeros.reduce(function(soma, numero) {
    return soma + numero;
}, 0)

console.log(soma);