// Esse algoritmo duplica todos os valores de uma lista de números e preenche outra

var numeros = [1, 2, 3];
var dobro   = [];

// ES5
for (var i=0; i < numeros.length; i++) {
    dobro.push(numeros[i] * 2);
}

console.log(numeros);   [1,2,3]
console.log(dobro);     [2,4,6]



// Fazendo (quase) a mesma coisa com ES6, utilizando Map
var triplo = numeros.map(function(numero) {
    return numero * 3;
});

console.log(triplo);


/*
    OBS.: Assim como forEach a função de callback não passa por elementos
    que foram modificados, alterados ou removidos depois da primeira execução.
*/