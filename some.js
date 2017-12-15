/*
    Algoritimo para saber se alguma das malas
    do passageiro está acima do limite de 30 Kg
*/

// ES5
var pesoDasMalas = [20, 30, 45, 90];
var temMalaAcimaDoPeso = false;
for (var i = 0; i < pesoDasMalas.length; i++) {
    if(pesoDasMalas[i] > 30) {
        temMalaAcimaDoPeso = true;
    }
}
console.log(temMalaAcimaDoPeso);


//  Algoritmo com ES6 para saber se alguém paga meia-entrada
var idadeDasPessoas = [22, 20, 30, 40];
var temDireitoMeiaEntrada = idadeDasPessoas.some(function(idade) {
    return idade < 18 || idade > 65;
});
console.log(temDireitoMeiaEntrada);

