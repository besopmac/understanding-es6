var alunos = [
    {nome: 'João', idade: 19},
    {nome: 'Maria', idade: 20},
    {nome: 'Pedro', idade: 24}
];

/* ES5
var todosAlunosDeMaior = true;
for (var i = 0; i < alunos.length; i++) {
    if(alunos[i].idade < 18) {
        todosAlunosDeMaior = false;
        break; // evita percorrer toda a lista
    }
}
console.log(todosAlunosDeMaior);
*/


// ES6
var todosAlunosDeMaior = alunos.every(function(aluno) {
    return aluno.idade > 18;
});
console.log(todosAlunosDeMaior);