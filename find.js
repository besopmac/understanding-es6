// Algoritmo para buscar um item dentro de um Array

var membros = [
    { nome: 'Bruno', idade: 34 },
    { nome: 'Cynthia', idade: 28 },
    { nome: 'Barney', idade: 1 }
];

// ES5
/*
var membro;
for (var i = 0; i < membros.length; i++) {
    if (membros[i].nome === 'Barney') {
        membro = membros[i];
        break; // evita percorrer o resto da lista
    }
};
console.log(membro.nome);
*/


// ES6
var membro = membros.find(function(membro) {
    return membro.nome === 'Cynthia';
});
console.log(membro);
