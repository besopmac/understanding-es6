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


/*
    Agora temos uma lista de alunos com duas características: nome e idade
    Esse é um algoritmo para listar apenas os nomes dos alunos, sem a idade
*/

var alunos = [
    { nome: "Bruno", idade: 35 },
    { nome: "Cynthia", idade: 28 },
    { nome: "Barney", idade: 1 }
];

var nomes = alunos.reduce(function(arrayNomesAlunos, aluno) {
    arrayNomesAlunos.push(aluno.nome);
    return arrayNomesAlunos;
}, []);

console.log(nomes);
