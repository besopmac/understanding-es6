// Filtrar lista de alunos que são maiores de idade

var alunos = [
    { nome: 'Bruno', idade: 34 },
    { nome: 'Cynthia', idade: 28 },
    { nome: 'Barney', idade: 1 }
];
var alunosDeMaior = [];

// ES5
// for (var i = 0; i < alunos.length; i++) {
//     if (alunos[i].idade >= 18) {
//         alunosDeMaior.push(alunos[i].nome);
//     }
// }
// console.log(alunosDeMaior);


// ES6
var alunosAdultos = alunos.filter(function(aluno) {
    return aluno.idade >= 18;
});
console.log(alunosAdultos);